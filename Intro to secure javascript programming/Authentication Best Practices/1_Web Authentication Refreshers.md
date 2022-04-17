# Authentication

- Authentication is the act of knowing who the current client is.

- The client can be of any type:

  - A human - a real user
  - A device - A mobile phone or a desktop computer
  - A piece of software - A web browser

  # Login

  - Login is the act of identifying a client, based on one or multiple secrets and traits.

  - Once login happens, a session can be created.

  - Login methods include:

    - Shared secret (please don't)
    - Username/password (please hash the password)
    - One-Time Password(OTP)(please rely on a third party if you can)
    - Third-party login

  - Login usually happens occasionally, and the end user is aware of it.

  # Session Authentication

  - Once you have identified the user/device on the other side you can create a session.

  - Session authentication happens when a client is identified through reusable means.

  - This is usually the outcome of a login.

  - Some session technologies(that can be used together)

    - Cookies (HttpOnly, please)
    - JSON web token(or JWT. Don't say "JWT token")
    - Random token (can be signed)

  - The end user usually does not know anything about this. It happens at each HTTP request.

  # Session Authentication Best Practices

  - A few best practices:
    - Only do this over HTTPS (if there is no encryption anyone can steal a session)
    - Expire sessions
    - Invalidate sessions (common mistake)

  # Logout

  - Logout is the act of closing a session.
  - Everyone forgets about logout.
  - It sometimes does not make sense to have logout in the app. That's a product choice.
  - The session MUST be invalidated.
  - Logout usually happens occasionally, and the end user is aware of it.
