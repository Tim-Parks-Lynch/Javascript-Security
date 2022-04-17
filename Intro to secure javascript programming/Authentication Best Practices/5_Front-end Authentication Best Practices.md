# Front-end Authentication Best Practices

This is mostly going to apply to SPA(Single Page Applications)s. Look up vue-authentication-example is a github he uses. He is just going through listing examples. This class is actually not that great for creating your own stuff.

-- Things he spots --

- Password manager asks if he wants to save his password. This apparently is a big deal, it means the form was setup correctly for password managers to recognize it as a password. He gives decent points for this, and recommends that we check our login forms against last pass and all those password managers. This should be part of the QA process.

  - In the form you want to make sure the username input type = text or email and that will let the password manager and autocomplete do it's magic.
  - In the form you want to make sure the password input type = password so the browser knows to hide the password from the page and it lets the password manager know that this is the password field.
  - He mentions the form should have an action field, which isn't in his examples. Will need to look that up in the future

- Application cookies

  - No cookies, but there is a user-token stored in local storage. There could be sense to store this in session storage, however, the token should be in an http only cookie (due to XSS attacks). This must not be accessible in javascript.
  - You can have data in local storage about the user (say authenticated username) or a cookie that is available to javascript, but the JSON Web token itself should never be available in just local storage (store it in an httpOnly cookie), it can be hijacked.
  - JWT should never be accessible by the JS code in the browser (saying it a 3rd time)
    - Cross-site request forgery or XSS attacks can happen if you do this incorrectly.
  - JWT should never be stored in indexedDB or WebSQL databases for storage either.
  - One benefit to cookies, is that the cookie is sent with the fetch request. It's just an added convience/security risk.

- Logout

  - They just removed the token from local storage. This is another bad practice. You must make sure the token is invalidated in your logout routine.You need to let the backend know that the token is not valid anymore. To do that you need to do an HTTP requrest telling the backend to invalidate the token and the current session, and then logout the endpoint.
  - If you use cookies you will have a simple life cycle. You will just call slash logout and the back-end will update your cookies that contain a state of authentication. This way you don't have fetch anything or handle the states on your SPA site. The backend does it by rewriting them/invalidating them (I think this is what he said, couldn't clearly understand)

- JWT's Again

  - On front end you shouldn't be so worried about JWTs (other than storing them in cookies if you need them,) because it's more important for the server. But you do have to worry about JSON Web Signature (JSON web signed payload - which will contain things that are signed), so you know the payload coming back is coming from the right back-end.
  - JSON Web Signature shouldn't be used for authentication, but it's here to hold data that is checkable but that can't be really weaponized if leaked. This is only if you need them. You don't have to use them.

- Middleware Authentication for Router

  - Before setting anything or loading anything it checks if the user is authenticated. So before entering the path /account it has an option called beforeEnter: ifAuthenticated. So it uses middleware ifAuthenticated to check before allowing the user to route to there.
  - This is important because if you don't have authentication on the front end routes (which we never learned, we had it for backend I believe), it means your backend ADMIN api could be hit repeatedly and brought down by spamming the backend with unauthenticated failures. Check on the front end as well as the backend for middleware.

- Front-end: use cookies for authentication if possible.
- Back-end: set the cookies you need about user authentication to reduce the area where you can fail and reduce security risk.
