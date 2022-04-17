# Cryptography

-- Hashing Functions --

- How to check a secret without knowing it.

- Password hashing functions are used to not store password but still check their validity.

- These functions return a fixed-length string from any string input and guarantee that it is very hard to find two inputs with the same output.

- Which one to choose:
  - Check the NIST recommendations: lookup NIST website
    - Use a salt to avoid rainbow table attacks
  - Bcrypt is usually a safe bet

# Symmetric Cryptography

- There is a single private key, known by both parties.
- There is only one secret. It can be used to cipher and decipher a message.
- This is usually quite fast in terms of performance.
- AES is an algorithm using a private key. It ciphers data by block (because of this certain attacks can affect it, look it up on Wikipedia). Always use an operation mode to turn it into a stream algorithm to bypass the block attacks.

# Asymmetric Cryptography

- There is a secret private key and a publicly-known public key.
- The private key remains secret and owned by one single entity. The public key can be known by the whole world.
- Cipher a message with the public key. Only the owner of the private key will be able to decipher it.
- Sign a message with the private key. Everyone knowing the public key will be able to ensure who signed the message.
- RSA is a public-key cryptosystem. There is also BGP.

# Overall

Never Roll Your Own Cryptography!
