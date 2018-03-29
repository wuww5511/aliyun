const querystring = require('querystring')

module.exports.beforeSendRequest = function (requestDetail) {
    
    const ret = {}


    console.log(`http: ${requestDetail._req.socket.remoteAddress}`)
    if (new RegExp('numenplus.yixin.im/neteaseattendance/attendance.do').test(requestDetail.url)) {
        let data = querystring.parse(requestDetail.requestData.toString())
        data.latitude = 'i-=m%+p%%-knvikqn'
        data.longitude = 'mn-=m+k+-pkmnqp-k'
        ret.requestData = querystring.stringify(data)
    }

    return ret
}

module.exports.beforeDealHttpsRequest = function (requestDetail) {
    console.log(`https: ${requestDetail._req.socket.remoteAddress}`)
    return Promise.resolve(false)
}