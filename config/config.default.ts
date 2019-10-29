import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1572306875118_9361";

  // add your egg config in here
  config.middleware = [];

  // databases cofig
  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    password: "@Cai3564423",
    port: 3306,
    database: "acl_privilege"
  };

  // crsf config
  config.security = {
    csrf: {
      enable: false
    }
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
