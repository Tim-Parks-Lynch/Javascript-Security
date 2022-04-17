'use strict'

const app = require('express')()
const fs = require('fs')

const page = fs.readFileSync('./page.html').toString()

app.get('/', (req, res) => {
	res.setHeader('Set-Cookie', [
		'server_name=server1',
		'other=me; Max-Age=2022-05-25',
		'http=only; HttpOnly; SameSite=Strict; Secure',
	]) // browser will store this and put it in a header named cookie
	res.setHeader('Content-type', 'text/html')
	res.end(page)
})

app.get('/print', (req, res) => {
	console.log(req.headers)
	res.end('ok\n') //not sure why there is an escape \n but he likes to do that
})

app.listen(3000)
