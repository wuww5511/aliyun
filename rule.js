const querystring = require('querystring')

module.exports.beforeSendRequest = function (requestDetail) {
    
    const ret = {}

    let ua = requestDetail._req.headers['User-Agent']

    if (ua.indexOf('yxwork') === -1 && ua.indexOf('AMAP_Location_SDK') === -1) {
        return Promise.resolve({
            response: {
                statusCode: 404,
                header: {},
                body: ''
            }
        })
    }
    

    console.log(`${'' + new Date()}  http: ${requestDetail._req.socket.remoteAddress}`)
    if (new RegExp('numenplus.yixin.im/neteaseattendance/attendance.do').test(requestDetail.url)) {
        let data = querystring.parse(requestDetail.requestData.toString())
        data.latitude = 'i-=m%+p%%-knvikqn'
        data.longitude = 'mn-=m+k+-pkmnqp-k'
        ret.requestData = querystring.stringify(data)
    }

    return ret
}

module.exports.beforeDealHttpsRequest = function (requestDetail) {
    console.log(`${'' + new Date()}  https: ${requestDetail._req.socket.remoteAddress}`)
    if (requestDetail._req.headers['host'].indexOf('yixin') === -1) {
        requestDetail._req.socket.end()
    }
    
    return Promise.resolve(false)
}