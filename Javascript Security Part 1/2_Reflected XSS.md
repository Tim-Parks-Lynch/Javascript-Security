# Reflected XSS

View this in non preview mode to see the actual code. It contains script tags that will work against you in preview mode.

-- Testing if XSS is possible --

Take a website that has parameter and see if you can input regular html inside of it. For instance in his video he has a website named:
localhost:3000/?name=John and instead of John he changes it to be localhost:3000/?name=<b>hello</b> to see if he can just bold hello. This tells him that XSS is possible.

You can also test this by using a URI component. Some frameworks will block the / in the closing tag. He opens up the console and runs - encodeURIComponent(<b>hello</b>) and he takes the code and adds it to the end of the name=. It ends up looking something like: localhost:3000/?name=%3Cb%3Ehello. Put that in your web browser and you can see that the code on the page can be changed.

Popular thing to do with XSS

- encodeURIComponent('<script> alert('Hello')</script>) // Take the string it returns and paste it after the equals
- Pop the string into the url:
  - localhost:3000/?name=%3Cscript%3Ealert(%22hello%22)%3C%2Fscript%3E
- Hit enter and you will see that an alert has been triggered

\*\* This is bad. It means we are able to run arbitrary javascript code on this domain.

This is a social trick. You would trick someone into clicking on this, by possibly using a URL shortener so they don't see all the code, or possibly using the URI encoded componenent we used above: encodedURIComponent('<script> Alert('hello')</script>'). The real trouble comes when this is on a website where they already have a cookie available because it's a wider application, you could arbitraily run any code as that user.

Scenario: You get a link for a banking application. You would craft a link and if the person already has an account in the bank and is connected with their browser, you can pretty much do whatever you want with their bank account, thats why it's called reflected XSS, because you have to craft a request and actually trick people into clicking on it. The XSS attack comes directly inside the response of the server response. You want them to click on a link or fill out a form where you might of hidden some parts that are vulnerable to XSS for instance the username or email fields.

You would test the username and email fields the same way you would the URI by trying to run the script tag and encodeURIComponent('script tag code closing script tag') strings inside of the fields. So forms is a another way to attemp XSS(Cross-site scripting) attacks.

<prev>

router.get('/', function(req, res){
res.render('index', {name: req.query.name || 'user'})
})

router.post('/', (req, res) => {
res.render('subscribe', req.body)
})

</prev>

** When the page is rendered with things that come from the request in the body, you want to make sure that everything is escaped **

# Two ways to fight XSS (cross-site scripting) attacks

1. Escape things that you pass to the renderer // modules are available for this. .EJS apparently you can use a template to tell it to escape the characters. Whatever templating engine you use make sure to use the value that is html escaped. For EJS (not sure what that is) you want to use <%=

2. Escape things passed to the render // template tags maybe? I have no fucking idea. The dude just stopped talking and ended the video before saying the second thing. I think this was what it was meant to be.
