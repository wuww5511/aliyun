'use strict'

const Controller = require('egg').Controller

class AlbumController extends Controller {
    
    async getRandomImages () {
        let res = await this.app.mysql.query('select src, album_id from temp_image order by rand() limit ?', [10])
        this.ctx.body = {
            code: 200,
            data: res
        }
    }

    async getAlbumImages () {
        let id = this.ctx.params.id
        let res = await this.app.mysql.query('select src from temp_image where album_id = ? order by id', [id])
        this.ctx.body = {
            code: 200,
            data: res
        }
    }
}

module.exports = AlbumController
