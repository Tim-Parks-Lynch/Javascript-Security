# Refresher

In this he's just going over node js and some of the api's and the differences between Node and plain JS.

Node JS is an asynchronous library by nature for most things. Node JS can only done one thing at a time. It is single-threaded. However workers can be used to create new threads and work with them. You can parrallelilize (sp, in parallel) synchronous tasks and gain a performance boost. Some system calls you might want to do might not be available directly in Node.js. You want to create your own addons so you can embed C++, rest or any machine code in Node.js

Bindings are used to expose code to node js.

# File System API

- Check nodejs.org documentation for more API/internal

const fs = require('fs')

fs.readFile(path: \_\_'pathtofile' + 'filename', callback: (err: ErrnoException | null, data: Buffer) => {
if(err){
console.error(err)
}
else{
console.log(data.toString())
}

})

//readFile allows you to read a file. Two underscores \_\_ is the current file path.

// callback is for when the function is done it will return that function.
// path: and callback: might not exist. That could be an extension he is using.

// Buffer is a node.js object that you want to look into deeper.

# Other API's

- HTTP API

* const http = require('http')
  http.createServer(requestListener(req, res) => {
  res.end('ok\n')
  })
  .listen(8080)

process.nextTick(callback: () => {
http.get('http://localhost:8080', (res) => {

    response.on(event: 'data', listener: (data) => {
      console.log(data.toString())
    })

})
})

// requestListener, event, listener are probably not properties, but some extension he is using to tell you what to put next.

---

- Crypto API

* Gives you access to crypto graphic functions and more secure than Math.random

* const crypto = require('crypto')
  console.log(crypto.randomInt(100)) // random number that is better cryptographically than Math.random

---

- OS API

* Gives you access to the current operating system, including networking interfaces, platform etc

---

- Net.co API

* Gives you a TCP/IP library to work with, in case you don't want a node.js server. I need to look into this more. I believe you can make a TCP/IP server and client

---

- V8 Module

* Exposes some capabilities of the V8 runtime (open source designed and created by google) that runs javascript in node.js and google chrome.

Uses - get a snap shot of the heap memory - v8.getHeapSnapShot() or to know how much memory is in use.

--

- WASI (Web Assembly System Interface) API

* Look this up for more info. Seems interesting

* Allows you to run Web Assembly (I think it's like a run time or something) and gives system access to your web assembly bundle in a sandbox.
