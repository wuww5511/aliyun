const AnyProxy = require('anyproxy');
const options = {
  port: 8001,
  rule: require('./rule'),
  webInterface: {
    enable: false,
    webPort: 8002
  },
  forceProxyHttps: false,
  wsIntercept: false,
  silent: true
}

const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on('ready', () => { /* */ });
proxyServer.on('error', (e) => { /* */ });
proxyServer.start();

