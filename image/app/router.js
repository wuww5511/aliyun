'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/album/images.json', controller.album.getRandomImages)
  router.get('/album/:id/images.json', controller.album.getAlbumImages)
}
