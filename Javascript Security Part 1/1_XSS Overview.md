# XSS (Cross-site Scripting) Attacks

XSS is for frontend and backend.

# History

-- Samy --

- Samy was a world-famous XSS attack:
  - It was a self replicating worm, that contained an XSS payload that was executed each time it was printed on someone's myspace feed. If you saw it, it would reprint itself on your MySpace feed with your information and rights.
  - If printed on your MySpace feed, it would reprint it on your feed
  - It would add Samy as a friend, then print on your feed 'Samy is my hero'.
  - In 20 hours, one million accounts were infected!

# XSS

- A XSS(cross-site scripting) attack happens when a malicious attacker manages to run arbitrary JavaScript code in a given web browser through a webpage.
- When the attacker can run their code, they can impersonate the user on this web application.
- If someone has an XSS attack in your backend website, they can perform any operation allowed by the website on your behalf.

# Types of XSS attacks

## Reflected XSS (cross-site scripting) attacks

- A reflected XSS happens when the XSS payload is present in an HTTP request to which a response is issued, containing the exploited webpage.
- Basically, this means crafting a link or an action that sends a malicious payload that will exploit something in the response.
- Reflected XSS are not persistent. Attackers will usually trick users into clicking on a link or a button that will exploit the vulnerability.

## Stored XSS (cross-site scripting) attacks

- A stored XSS happens when the XSS payload is injected into the storage of the web server (for instance, in a database) and sent in HTTP responses.
- For instance, the attacker was able to place the payload in a message stored in a database. When this message is read, the payload is executed.
- When there is no way for the attacker to know where this will be executed(for instance, if reading the message is only possibly in a private space), it is called a 'blind XSS'
- Reflected XSS are persistent. You can come back to the web page and the threat will still be there.

# DOM-based XSS

- This type of vulnerability sits in a frontend only code base.

* A DOM-based XSS happens when the XSS payload is made executable through a DOM change.
* For instance, if a REST API returns a XSS payload, it is not directly executable. It will need a DOM operation.
* DOM-based XSS can be persistent or not. They may also be stored in the browser memory.

Example: inner.HTML makes you vulnerable to a DOM-based XSS attack.

- It's possible to combine DOM-based XSS with reflected or stored XSS in a browser.

# Self-XSS

- A Self-XSS happens when the victim is tricked into running the XSS payload.
- For instance, tricking someone in opening their browswer console on a given website and copy-paste a JavaScript payload.
- Self-XSS only happens through social engineering.

* The only thing you can do as a developer is to put warnings in the website or console saying never copy paste anything here.
