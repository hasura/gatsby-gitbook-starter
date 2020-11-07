---
title: "Module 5"
---

## Module 5 - Internet Application Security and Privacy

Cryptography - Turning plaintext into ciphertext, send message over unsecure medium, separate security of the medium from security of the message

Cryptanalysis - Breaking secret messages

Cryptology studies both of these

Three components to cryptography:

1. **Confidentiality** - Prevent attacker from reading message
2. **Integrity** - Prevent attacker from modifying message
3. **Authenticity** - Prevent attacker from impersonating sender

Kerchkoff&#39;s Principle - Overall security should not rely on a secret that is hard to change

- --System is at most secure as number of keys
- --Best cryptosystem is where all attacker can do is guess keys

Attacker may know

- --Algorithm
- --Part of plaintext
- --Corresponding plaintexts and ciphers
- --Ways to access oracle

Symmetric cryptography/Secret Key encryption - Key sender uses to encrypt messages is the same one recipient uses to decrypt them

One-Time Pad - Unbreakable, XOR key with plaintext only one time

- --Cannot use key more than once
- --Key needs to be truly random

56 Bit Key was cracked by BOIC in 5 minutes, therefore 128 bit should be standard

Principle of Easiest Penetration should also be considered

Secret key cryptosystems come in two classes:

1. Stream ciphers - Fast OTP but with pseudorandom key, RC4 is a deprecated example
2. Block ciphers - Operate on blocks, splitting them is mode of operation, AES is an example

Asymmetric cryptography - public and secret key pair

Hybrid Cryptography – This is faster as it combines the speed of symmetric encryption with the convenience of public key encryption

1. Pick random 128 bit key K
2. Encrypt with K
3. Encrypt key K with public key
4. Send encrypted message and key

However even if keys cannot be decrypted, message can be changed while in transmit, need measure of integrity

Cannot use regular checksum since message can be changed without altering it

Hash functions compute message digest such as MD5, they are required to be:

1. Preimage-resistant - hard to find x for y such that h(x) = y
2. Second preimage-resistant - given x, hard to find xx&#39; s.t. h(x)=h(x&#39;)
3. Collision-resistant, hard to find two unique values x,x&#39; s.t  h(x)=h(x&#39;)

Hash functions provide integrity only when message digest is secure

Message Authentication Code - keyed hash function where the computed hash value is generated using a secret key

Multiple ways to combine cipher with MAC: Encrypt/then/before/and MAC.

Need an authenticated encryption mode to securely combine cipher and MAC

Repudiation - Sender cannot prove that they did not impersonate and make up the tag and message up themselves

We need a digital signature which proves:

- --Alice sent the message, like a MAC
- --Message has not been altered since it was sent, like a MAC
- --We can prove these points to a 3rd party

To make a digital signature:

1. Alice signs message with private signature key
2. Bob verifies message with Alice&#39;s public signature key

Hybridize signatures:

- --Alice sends unsigned message and signature on hash of message

Combine public-key verification and digital signatures

- --Alice has (encryption, decryption) &amp; (signature, verification)
- --Alice encrypts her message with Bob&#39;s public key and signs cipher with her private signature key
- --Bob decrypts cipher with his private key and checks signature with Alice&#39;s public signature key
- --Alice can sign her encryption key with her signature key

Key Management - Ways to find keys:

- --Manual Keyring
- --Web of trust through a friend
- --Trust third parties like CA&#39;s

Certificate Authorities - Trusted third parties who receive Alice&#39;s public key and other info, sign it with their public key to create a certificate

Everyone assumed to have CA&#39;s public key

Common mistakes:

- --Two-time pad
- --Assuming encryption provides integrity
- --Replay/Reaction Attacks

Execute apps only if they are signed

Network cryptography used at every level:

1. Link - WEP
2. Network - VPN
3. Transport  - TLS/SSL, Tor
4. Application - SSH, PGP, OTR

Link Layer

Link layer is intended to protect LAN, WEP is an example

Wired Equivalent Privacy intended to enforce:

1. Confidentiality - Prevent adversary from learning traffic
2. Access Control - Prevent adversary from learning infrastructure
3. Data integrity

WEP problems: Short IV (24 bits long),

The checksum interacts pessimaly with the stream cipher. CRC is linear

The authentication protocol reveals enough information for an attacker to authenticate herself

WEP - 75

WEP - 85

Network Layer

Network Layer Security - security across links is not enough, we need security across entire networks, end-2-end

VPN - Connected two remote networks so that they appear to be a single network:

- --Each side is connected to VPN gateway
- --The data is encrypted and tunneled to the other side

Tunneling - Sending message in protocol as payload of another protocol

IPSec - A method to setup a VPN with two modes:

- --Transport mode - Only original packet are encrypted, useful for LAN
- --Tunnel mode - Contents and header are encrypted, useful for connecting networks

Microsoft PPTP - Old method of VPN with flaws

VPNs based on SSH - IP over PPP over SSH over TCP over IP

Trans Layer - Security = TLS, Privacy = Tor

Main transport layer security is SSL or TLS; provides server auth, integrity, confidentiality:

- --Client indicates to server which ciphersuites it knows
- --Server sends back host name, verification key, admin info and signature from CA
- --Client checks if CA signed by client browser embedded public key, host name matches?
- --Symmetric encryption with MAC proceeds between them

TLS has become the most successful Privacy Enhancing Technology - It just works

Main transport layer privacy mechanism is Tor:

- --2 million daily users
- --Lets you make TCP connections without revealing your IP address
- --Scattered around the Internet are 7000 Tor nodes called Onion Routers
- --Alice uses something similar to TLS to tunnel through each node until the end
- --Message M becomes Ek1(Ek2(Ek3(M)))
- --Each node knows Alice is using Tor but do not know which site she visiting
- --Website itself only knows it got a connection from last node, this connection is not inherently encrypted
- --Anonymity unlinkability(long-term) and linkably(short-term)
- --However two connections in quick succession are likely from the same person

Nymity Slider:

1. Verinymity - SIN
2. Persistent Pseudo - Pen Name
3. Linkable - Prepaid phone cards
4. Unlinkable - Tor

App Layer

Secure Remote Login:

- --Either send a password over encrypted channel which is cross referenced with hash of your password
- --Or send a random challenge with private signature key

Type 0 remailers - send email to server which remailers it as anonymous, this was shut down due to Scientology leaks

Type 1 remailers - mail is now sent in encrypted chains but reply support has been dropped, no pseudonymity

Nym servers restored association of sender with messages, thereby restoring pseudonymity

Type 2 remailers - introduced constant length messages but requires a special email client to fragment the data

Type 3 remailers - Improved and native support for pseudonymity

PGP  - Originally created by Phil Zimmermann in 1991, got in trouble for this

PGP used for hybrid encryption and digital signature of emails

PGP aimed to create 4 keys: encryption, decryption, signature and verification

Fingerprints created to deal with large public keys - cryptographic hash of the key, no known way to make two different keys have the same fingerprint provided the hashing is collision resistant

Alice can also sign Bob&#39;s key to verify that the key is in fact his which she uses

Web of Trust is network of people acting as links for passing around public keys

**Perfect Forward Secrecy** - Future key compromises should not reveal past communication, use temporary keys for this called session keys created using the Diffie-Hellman protocol

We do not want digital signatures since they are undesirable for private conversations

However we do want authentication

Alice has deniability since we cannot prove she generated her MAC

Off-the-Record messaging provides private messaging with Confidentiality and Authentication as well Perfect Forward Secrecy and Plausible Deniability - Signal is an example which uses Triple Diffie-Hellman or deniable authenticated key exchange or DAKE


