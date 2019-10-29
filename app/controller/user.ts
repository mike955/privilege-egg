import { Controller } from "egg";
import { isNull } from 'util';
import * as crypto from "crypto";
import * as uuid from "uuid";

export default class UserController extends Controller {
  private UserAddTransfer;
  private UserUpdatePrivilegeTransfer;
  constructor(ctx) {
    super(ctx);
    this.UserAddTransfer = {
      username: { type: 'string', min: 6, required: true, allowEmpty: false},
      password: { type: 'string', min: 6, required: true, allowEmpty: false}
    }
    this.UserUpdatePrivilegeTransfer = {
      user_id: { type: 'string', length: 32, required: true, allowEmpty: false},
      role: { type: 'enum', values: ['general', 'admin']}
    }
  }

  public async getList() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.findAll();
  }

  public async add() {
    const { ctx } = this;
    try {
      ctx.validate(this.UserAddTransfer, ctx.request.body);
      let { username, password } = ctx.request.body;
      let judgeUserExist = await this.judgeUserExist(username);
      if(judgeUserExist) ctx.helper.error(ctx, 'user has exists');
      const salt = Buffer.from(crypto.randomBytes(32));
      password = crypto.pbkdf2Sync(password, salt, 10240, 64, 'sha512')
      const user_uuid = uuid.v4();
      const _uuid = user_uuid.replace(/-/g,"");
      const user_id = Buffer.from(_uuid, 'hex');
      const user_info = { user_id, user_uuid, username, password, salt};
      await ctx.service.user.add(user_info);
      ctx.helper.success(ctx, {id: _uuid, username});
    } catch (error) {
      ctx.helper.error(ctx, error.message);
    }
  }

  public async updatePrivilege() {
    const { ctx } = this;
    try {
      ctx.validate(this.UserUpdatePrivilegeTransfer, ctx.request.body);
      let { user_id, role } = ctx.request.body;
      ctx.body = await ctx.service.user.updatePrivilege(user_id, role);
    } catch (error) {
      ctx.helper.error(ctx, error.message);
    }
  }

  private async judgeUserExist(username: string){
    let user = await this.service.user.find(username);
    if(isNull(user)) return false;
    return true;
  }
}
