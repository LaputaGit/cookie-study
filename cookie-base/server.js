const http = require('http')
const hostname = '127.0.0.1'
const port = 3003

const server = http.createServer((request, response) => {
	// request对象，包含了来自客户端的请求数据
	// response对象，包含了服务器发送到客户端的数据
	response.statusCode = 200
	response.setHeader('Content-Type', 'text/plain')
	// 在头信息中设置cookie，大家可以把下面这一行注释掉，重启服务看看效果
	response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript'])
	
	// 客户端发送过来的带有cookie的请求，拿到来自客户端的cookie信息，就可以判断cookie有效性，进而进行业务开发
	console.log(request.headers.cookie, '来自客户端的请求中的cookie信息')

	response.end('Hello Cookie')
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})