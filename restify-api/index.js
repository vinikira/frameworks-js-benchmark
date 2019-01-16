var restify = require('restify')

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
})

server.get('/', function (req, res, next) {
  res.send('Hello World!')
  return next()
})

server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url)
})
