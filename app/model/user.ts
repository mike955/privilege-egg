"use strict";

import { Application } from "egg";

export default function(app: Application) {
  const { STRING, INTEGER, CHAR } = app.Sequelize;
  const User = app.model.define("pri_user", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: STRING, allowNull: false, comment:'user_id' },
    user_uuid: { type: CHAR(32), allowNull: false, comment:'user_uuid' },
    username: { type: STRING, allowNull: false, comment:'username' },
    password: { type: STRING, allowNull: false, comment:'password' },
    salt: { type: STRING, allowNull: false, comment:'salt' }
  }, {
    updatedAt: 'update_time',
    createdAt: 'create_time',
    freezeTableName: true,
  });

  return class extends User {
    // static async findAll() {
    //   return await this.findAll()
    // }
  };
}
