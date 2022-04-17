# Document Object Model

Bindings exist between the HTML world and the JavaScript world. I believe they are provided to us by the V8 or run time engine. Think: document.getElementById() as an example

You can access the constructor or higher level classes that exist on the item you are referencing in getElementById()

Example:

const p1 = document.getElementById('id1')
p1.constructor // returns HTMLParagraphElement() {[native code]}
p1 instanceof HTMLElement // true.

p1 is a child of HTMLParagraphElement that is a child of HTMLElement.

# Workers

Need to look this up. Workers are threads that can run in parallel on your web page. If two tabs are open and they are the same domain you can have workers communicate between the two tabs, however, if it's two seperate domains that won't work.

Web workers and service workers

# Fetch

Http calls done over JavaScript calls. The fetch method returns a promise for instance:

fetch('http://exmaple.com')

This code above will result in a CORS error with prevents websites from accession from multiple regions.

Web browsers can be used to access local network assets, including filesystems, servers, other websites. Scary shit!

# Security

Browsers are the most unsecure applications you can run. They are the biggest threat in your home when it comes to being hacked.
