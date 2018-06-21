通过定时任务，建临时表

CREATE TABLE `temp_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createTime` bigint(20) NOT NULL COMMENT '创建时间',
  `album_id` int(11) NOT NULL COMMENT '相册id',
  `url` varchar(255) DEFAULT NULL COMMENT '图片链接',
  `src` varchar(255) DEFAULT NULL COMMENT '原始图片链接',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;