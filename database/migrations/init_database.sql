DROP TABLE if exists `acl_privilege`.`pri_user`;
CREATE TABLE acl_privilege.pri_user (
  `id` BIGINT(32) UNSIGNED NOT NULL AUTO_INCREMENT comment '主键id',
  `user_id` BINARY(16) NOT NULL comment '用户id',
  `user_uuid` CHAR(36) NOT NULL comment '用户uuid',
  `username` VARCHAR(128) NOT NULL comment '用户名',
  `password` BINARY(64) NOT NULL comment '密码',
  `salt` BINARY(32) NOT NULL comment '盐',
  `create_time` DATETIME NOT NULL COMMENT '创建时间',
  `update_time` DATETIME NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_user_id`(`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户信息表';

DROP TABLE if exists `acl_privilege`.`pri_user_role`;
CREATE TABLE acl_privilege.pri_user (
  `id` BIGINT(32) UNSIGNED NOT NULL AUTO_INCREMENT comment '主键id',
  `user_id` CHAR(32) NOT NULL comment '用户id',
  `role_id` CHAR(16) UNSIGNED NOT NULL comment '角色id',
  `create_time` DATETIME NOT NULL COMMENT '创建时间',
  `update_time` DATETIME NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_user_role_id`(`user_id`,`role_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户角色关系表';

DROP TABLE if exists `acl_privilege`.`pri_role`;
CREATE TABLE `acl_privilege`.`pri_user` (
  `id` BIGINT(32) UNSIGNED NOT NULL AUTO_INCREMENT comment '主键id',
  `role_id` CHAR(16) UNSIGNED NOT NULL comment '角色id',
  `role_name` VARCHAR(128) UNSIGNED NOT NULL comment '角色id',
  `create_time` DATETIME NOT NULL COMMENT '创建时间',
  `update_time` DATETIME NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_role_id`(`role_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色表';

DROP TABLE if exists `acl_privilege`.`pri_role_privilege`;
CREATE TABLE acl_privilege.pri_user (
  `id` BIGINT(32) UNSIGNED NOT NULL AUTO_INCREMENT comment '主键id',
  `role_id` CHAR(16) UNSIGNED NOT NULL comment '角色id',
  `privilege_id` CHAR(16) UNSIGNED NOT NULL comment '权限id',
  `create_time` DATETIME NOT NULL COMMENT '创建时间',
  `update_time` DATETIME NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_role_privilege_id`(`role_id`,`privilege_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色权限关系表';

DROP TABLE if exists `acl_privilege`.`pri_privilege`;
CREATE TABLE `acl_privilege`.`pri_privilege` (
  `id` BIGINT(32) UNSIGNED NOT NULL AUTO_INCREMENT comment '主键id',
  `privilege_id` CHAR(16) UNSIGNED NOT NULL comment '权限id',
  `privilege_name` VARCHAR(128) UNSIGNED NOT NULL comment '权限名称',
  `uri` VARCHAR(128) UNSIGNED NOT NULL comment '权限接口',
  `sn` CHAR(32) UNSIGNED NOT NULL comment 'uri md5值',
  `create_time` DATETIME NOT NULL COMMENT '创建时间',
  `update_time` DATETIME NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_privilege_id_uri`(`privilege_id`,`uri`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='权限表';



