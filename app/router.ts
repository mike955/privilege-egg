import { Application } from 'egg';

export default (app: Application) => {


  // app.verb('user', '/api/user', app.controller.user);
  app.router.all('/api/user/getList', app.controller.user.getList); // 获取用户列表
  app.router.all('/api/user/add', app.controller.user.add); // 添加用户
  app.router.all('/api/user/updatePrivilege', app.controller.user.updatePrivilege); // 更新用户权限
  // app.resources('user', '/api/user', app.controller.user);
  // app.resources('role', '/api/role', app.controller.role);
  // app.resources('privilege', '/api/privilege', app.controller.user)
  // router.all('/api/user', controller.home.index);
};
