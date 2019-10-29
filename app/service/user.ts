import { Service } from "egg";

/**
 * User Service
 */
export default class User extends Service {
  async find(username: string) {
    let res =  await this.ctx.model.User.findOne({ where: { username } });
    return res;
  }

  async findAll() {
    const user = await this.ctx.model.User.findAll({});
    return user;
  }

  async add(user_info) {
    return await this.ctx.model.User.create(user_info);
  }

  async updatePrivilege(user_id, role) {
    console.log(user_id, role);
  }
}
