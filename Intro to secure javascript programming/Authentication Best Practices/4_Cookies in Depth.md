# Cookies

Refer to Cookies.js file to see code examples.

Cookies are just data in a header.

# Beginner code

```
JS File

'use strict'

const app = require('express')()
const fs = require('fs')

const page = fs.readFileSync('./page.html').toString()

app.get('/', (req, res) => {
	res.setHeader('Set-Cookie', ['server_name=server1']) // browser will store this and put it in a header named cookie
	res.setHeader('Content-type', 'text/html')
	res.end(page)
})

app.get('/print', (req, res) => {
	console.log(req.headers)
	res.end('ok\n') //not sure why there is an escape \n but he likes to do that
})

app.listen(3000)

```

```
HTML File

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<pre id="feedback"></pre>
		<script>
			document.getElementById('feedback').textContent =
				document.cookie.split(' ; ')
		</script>
	</body>
</html>

```

# How to access cookies in JS with web browser

```
document.cookie
```

Will return a string of cookie values.

# Things to include

Expiration Date or Time

He only shows Max-Age as an example. Check Cookies.js for code example. The expiration is based on the local time of the client not the server. That is important to remember.

# Scope of a cookie

Available on the exact same domain and in an all path / . You can configure a cookie to be availble to the whole world, a domain, or a sub domain.

# Leaking a cookie

httpOnly primitive is supposed to stop this. This stops someone from being able to run document.cookie and see your httpOnly cookie. However, if you do a fetch request/axios you can see that the httpOnly cookie has been sent back to the server.

# Secure Attribute

You want all your cookies to only be sendable over https connections. This is hard to do with localhost. However, in the dev console, you should see Secure have a check mark in it for your cookie. Secure means they are only allowed to be sent over https connections.

# SameSite

Not fully implemented, but 3 values

SameSite=

- Strict : Same domain and must never be shared with any one else
- Lax: Subdomain of main and main, but not outside
- None: No samesite policy at all (very dangerous, makes your cookies able to be leaked)

# Adding a Cookie in web browser

```
document.cookie='a=b'

```

This will add to the cookie list, will only overwrite if it already exists.

```
document.cookie='a=b'
document.cookie='a=c'
document.cookie // will return all the other cookies, minus a=b, but will now have a=c

```

# Deleting a cookie

He said you can do this

```

document.cookie = 'a=' // supposedly this is supposed to delete it, but I don't believe that

```

# Zombie Cookies

You can cancel cookies, by cleaning cookies in Google Chrome. There is a hack though that allows the developer to store the cookie in local storage, then after the user has cleared the cookie, and reconnects, the developer can pull from local storage or database and reset the cookie in local storage and in the cookies storage (shady as fuck, not sure how to notice this, but I want to know how to stop it).

```

localStorage.setItem('my_cookie', 'zoombie=cookie')
localStorage.getItem('my_cookie')
document.cookie = localStorage.getItem('my_cookie')

```

If your website is in European Union/California you must comply with GDPR/CPA (I think its CPA), which means you can't have cookies that aren't needed to run the site, unless notifying the user explicity. You can't set them until they have agreed.
