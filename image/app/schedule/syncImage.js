const Subscription = require('egg').Subscription

class SyncImage extends Subscription {
    static get schedule () {
        return {
            interval: '1h',
            type: 'worker',
            immediate: true
        }
    }

    async subscribe () {
        let res = await this.app.mysql.query(
            'select id from album order by rand() limit 50'
        )
        let images = await this.app.mysql.select('image', {
            where: { 'album_id': res.map(item => item.id)},
            colums: ['album_id', 'src']
        })

        let promises = []

        let now = Date.now()
        images.forEach(image => {
            promises.push(
                this.app.mysql.insert('temp_image', {
                    'album_id': image['album_id'],
                    'src': image['src'],
                    'createTime': now
                })
            )
        })
        
        await Promise.all(promises)

        await this.app.mysql.query('delete from temp_image where createTime < ?', [now])
    }
}

module.exports = SyncImage