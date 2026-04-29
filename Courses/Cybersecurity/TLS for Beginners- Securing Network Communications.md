---
type: course
cssclasses:
  - lle-course
slug: tls-for-beginners-securing-network-communications
url: "https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications"
duration_minutes: 183
duration: 3h 3m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHxXQM9HsuLfg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715892606980?e=2147483647&amp;v=beta&amp;t=12Mu0DYuPdr366ciLJd1tGoiO2RY-Qsh_jDVuMakpTw"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an IT Security Specialist]]'
  - '[[Cybersecurity Fundamentals]]'
prev_courses:
  - '[[IT Security Foundations- Network Security]]'
  - '[[Introduction to Identity and Access Management]]'
next_courses:
  - '[[Cybersecurity with Cloud Computing]]'
  - '[[Cybersecurity with Cloud Computing]]'
path_nav: '[{"path":"Become an IT Security Specialist","position":5,"total":12,"prev":"IT Security Foundations- Network Security","next":"Cybersecurity with Cloud Computing"},{"path":"Cybersecurity Fundamentals","position":10,"total":12,"prev":"Introduction to Identity and Access Management","next":"Cybersecurity with Cloud Computing"}]'
path_count: 2
tags:
  - course
  - topic/security
  - topic/cloud-computing
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/TLS%20for%20Beginners-%20Securing%20Network%20Communications.md)

![TLS for Beginners: Securing Network Communications](https://media.licdn.com/dms/image/v2/D560DAQHxXQM9HsuLfg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715892606980?e=2147483647&amp;v=beta&amp;t=12Mu0DYuPdr366ciLJd1tGoiO2RY-Qsh_jDVuMakpTw)

# TLS for Beginners: Securing Network Communications

> Transport Layer Security (TLS) provides the backbone of securing Intranet and Internet network communications through encryption and authentication. In this course, Daniel Lachance—consultant, trainer, and IT evangelist—guides you through acquiring the skills necessary to plan, implement and maintain a Public Key Infrastructure (PKI) ecosystem that supports TLS security certificates. Learn how to 

> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications) | 3h 3m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. PKI Overview]]** (8 videos)
- **[[#2. Certificate Authorities]]** (4 videos)
- **[[#3. Acquiring Certificates]]** (5 videos)
- **[[#4. PKI Certificate Usage]]** (6 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Learn to secure your network communications
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/learn-to-secure-your-network-communications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/learn-to-secure-your-network-communications?u=76281980&t=0)** - [Dan] This course exposes you to PKI and TLS configurations that can mitigate network security threats.
>
> **[0:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/learn-to-secure-your-network-communications?u=76281980&t=7)** You can follow along with demonstrations that configure a PKI to enable secure TLS communications for various platforms.
>
> **[0:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/learn-to-secure-your-network-communications?u=76281980&t=15)** Hi, I'm Dan Lachance, join me in this course, TLS for Beginners: Securing Network Communications.
>
> **[0:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/learn-to-secure-your-network-communications?u=76281980&t=22)** Let's use PKI and TLS to harden your IT computing environment.

> [!info]- Semantic Content
>
> **Env Vars:** tls (4), pki (3)
> **Code Keywords:** let (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [dan] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=0)** - [Narrator] What kind of prerequisite knowledge should you have when you come into the TLS for Beginners Securing Network Communications course?
>
> **[0:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=9)** Well, for starters, we should have a bit of knowledge related to the TCP/IP protocol suite because we will be referring to things like IP addresses and DNS names.
>
> **[0:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=20)** We should have a general sense of how to navigate through the Microsoft Windows server operating system environment.
>
> **[0:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=26)** We'll be working both in the GUI, but we'll also be working at the command line.
>
> **[0:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=31)** Nothing too extravagant, but we should know how to move around the Windows server environment, as well as the Linux operating system environment.
>
> **[0:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=38)** Now in Linux, we're going to be doing everything exclusively from the command line.
>
> **[0:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=43)** We are not going to be relying on any kind of GUI window manager in Linux, but do we have to be a command line expert?
>
> **[0:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=51)** Certainly not, just a general sense of how to move around in Linux and what it's about.
>
> **[0:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=56)** The same goes for web browsers and web server configurations.
>
> **[1:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=61)** Whether you're familiar with using the Safari, the Firefox, Google Chrome, Microsoft Edge web browser, really doesn't matter, we just have to have a general sense of the purpose of a web browser and that some of its settings can be configured such as configuring trusted route certification authorities.
>
> **[1:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=80)** On the web server side, we're going to be working with the Microsoft Internet Information Services or IIS Web Server, specifically focusing on the security aspect of it, as well as the Apache web server on the Linux platform.
>
> **[1:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=94)** We should have a basic understanding of what the purpose of Amazon Web Services or AWS is, as well as Microsoft Azure.
>
> **[1:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=103)** These are cloud computing environments where we can deploy things like virtual machines, virtual networks, but the focus really here is working with PKI certificates in the cloud hosted environment.
>
> **[1:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=118)** Our course lab environment will consist of a number of items including a Microsoft Windows Server 2022 Active Directory domain controller.
>
> **[2:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=127)** The domain is called domain1.local and it's already configured.
>
> **[2:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=132)** We will be installing an IIS Web server stack on that Windows host, and we will also be installing and configuring the certificate authority role to support a private internal PKI environment.
>
> **[2:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=146)** We'll also be using an Ubuntu Linux host so that we can work with OpenSSL to set up a certificate authority and also to install and manage an Apache web server.
>
> **[2:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=158)** We'll also be using a network printer in this course where we manage network printer certificates that are used to secure the remote management connection between a web browser and the network printer.
>
> **[2:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=172)** There are plenty of network printer and wifi router and IOT device simulators available out there on the internet if you don't have a network printer to actually follow along with.
>
> **[3:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=183)** In Amazon Web services or AWS, we'll be using it primarily for certificate manager where we can establish a private certification authority or CA.
>
> **[3:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=194)** In the Microsoft Azure Cloud, we'll be using it primarily for a key vault with a certificate in it that's used to secure an Azure hosted web application.
>
> **[3:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=204)** We'll also use it to configure a point to site or otherwise called a client to site VPN.
>
> **[3:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/what-you-should-know?u=76281980&t=211)** So this gives you a sense of the general knowledge base that you should have already entering this course.

> [!info]- Semantic Content
>
> **Env Vars:** gui (2), iis (2), aws (2), pki (2), tls (1)
> **Tools:** command line (3), safari (1), firefox (1)
> **CLI Commands:** apache (2), aws (2)
> **Prerequisites:** prerequisite (1), set up (1), install (1), configure (1)
> **Code Keywords:** private (2)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


### 1. PKI Overview

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Cryptography
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=0)** - [Instructor] In order to fully understand Transport Layer Security, TLS, we first have to have an understanding of how cryptography fits into that picture.
>
> **[0:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=10)** When we talk about cryptography, we're talking about using keys when it comes to encryption, and those keys can be stored in public key infrastructure or a PKI certificate.
>
> **[0:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=22)** Keys can be stored or burned into a smart card or a common access card, a CAC.
>
> **[0:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=29)** Of course, this is about the size of a credit card and can be used to authenticate to a computer or perhaps to gain access to a facility.
>
> **[0:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=37)** Keys can also be stored within a file on a device, in trusted platform module or TPM firmware that is available in most modern computing devices.
>
> **[0:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=48)** It could also be part of a token device that a user might use to authenticate to a VPN.
>
> **[0:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=53)** And cryptographic keys might also be stored in a hardware security module, an HSM.
>
> **[0:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=58)** HSMs are dedicated security appliances that are designed to focus on cryptographic operations, including secure key storage.
>
> **[1:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=68)** The general encryption process starts with plain text or origin data that gets fed into an encryption algorithm.
>
> **[1:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=77)** Next, a key is used in conjunction with the encryption algorithm to result in ciphertext.
>
> **[1:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=84)** That's the scrambled data.
>
> **[1:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=86)** In order to decrypt that ciphertext, to reverse the process to reveal the original data, you need to have the correct decryption key.
>
> **[1:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=96)** Cryptography is used in many places.
>
> **[1:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=99)** It's used to encrypt mobile device storage.
>
> **[1:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=102)** It can be used to encrypt files on any type of operating system.
>
> **[1:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=107)** It can be used to encrypt network traffic, which is really going to be our focus when it comes to TLS, or Transport Layer Security.
>
> **[1:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=115)** Cryptography can be used for file hashing to determine if files can be trusted and haven't been tampered with.
>
> **[2:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=122)** And cryptography is also used with cryptocurrency blockchain transactions to assure that those transactions are valid and haven't been tampered with.
>
> **[2:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=132)** In cryptography, we have this notion of symmetric encryption, which uses a single or secret key.
>
> **[2:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=139)** So, this secret key is used to both encrypt and decrypt.
>
> **[2:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=143)** All parties that need to encrypt and decrypt data would have to have that same key, and so we need a secure way to get that key to those parties, and it also must be stored in a secured manner.
>
> **[2:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=157)** Symmetric encryption algorithms include AES, that's the US government standard, the Advanced Encryption Standard.
>
> **[2:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=165)** But there are other algorithms like RC4, triple DES or 3DES, which is set to be deprecated by the end of 2023 officially, although some products will still be in use beyond that, and the Blowfish algorithm.
>
> **[2:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=179)** Each of these have their own respective maximum key size.
>
> **[3:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=184)** Now, we don't have to memorize these specific algorithms and their key sizes, but they will pop up occasionally with some products when you are determining what you want to use to secure network transmissions.
>
> **[3:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=196)** Now we have the notion of asymmetric encryption.
>
> **[3:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=198)** This uses two mathematically related keys, a public key, which can be shared with anybody, and a private key, which must be kept private to the owner of the key.
>
> **[3:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=210)** This is used often with PKI certificates.
>
> **[3:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=214)** Normally, the public key is embedded in the PKI certificate, but the private key is stored externally, but can be associated with the certificate.
>
> **[3:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=223)** So, with asymmetric encryption, we have a different set of algorithms, such as RSA.
>
> **[3:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=229)** RSA is the standard that's used with Transport Layer Security, or TLS.
>
> **[3:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=235)** But there are other algorithms like the Diffie-Hellman key exchange algorithm, ELGamal, and ECC, and they have their maximum key size.
>
> **[4:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=245)** You'll often see ECC used on mobile computing devices as keys can be very small, yet still very powerful.
>
> **[4:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=252)** Smaller keys means less computing power required.
>
> **[4:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=256)** Here we have an example of asymmetric email encryption where the sender would encrypt a message, but they would need to have the public key of the recipient.
>
> **[4:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/cryptography?u=76281980&t=268)** In turn, the recipient when they receive the message to decrypt it would use their related private key to decrypt the message.

> [!info]- Semantic Content
>
> **Env Vars:** tls (3), pki (3), rsa (2), ecc (2), cac (1)
> **Code Keywords:** public (4), private (4), module (2)
> **Tools:** notion (2)
> **Analogies:** picture (1), such as (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Hashing and digital signatures
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=0)** - [Instructor] An important part of transport layer security besides encryption is hashing and digital signatures.
>
> **[0:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=8)** Let's talk about how this can be used to secure communications or also to secure files to make sure they haven't been tampered with.
>
> **[0:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=16)** Hashing uses a one-way cryptographic algorithm that results in a unique value.
>
> **[0:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=22)** Now, that unique value is based on the data fed into the one-way algorithm, whether it's a network transmission or a file stored on storage media.
>
> **[0:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=32)** So this resultant unique value is called the hash, or sometimes it's referred to as the message digest.
>
> **[0:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=39)** It's all the same thing.
>
> **[0:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=40)** Now, what is this used for?
>
> **[0:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=41)** This can be used to verify the integrity of the network message or a file, or machine boot up settings, or it could be secure password storage on a Linux host.
>
> **[0:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=52)** It's used with blockchain transaction integrity.
>
> **[0:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=56)** Now, how does that work?
>
> **[0:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=57)** Why does it get used to verify integrity?
>
> **[1:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=60)** In our little screenshot example, we are on a machine running a PowerShell cmdlet called Get-FileHash.
>
> **[1:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=68)** We are then specifying in the current directory a JPEG image, the file is called doggie.jpg.
>
> **[1:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=75)** What happens is we get resultant output telling us the hashing algorithm that was used, so in this case, secure hashing algorithm or SHA256, and we have a unique resultant hash.
>
> **[1:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=89)** Now that resultant hash is based on the state of the doggie.jpg file at this point in time.
>
> **[1:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=96)** If anything at all changes in that file, the next time we generate the hash from that file, the hash will be different, and so we will know that the file has changed.
>
> **[1:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=108)** There are numerous hashing algorithms out there.
>
> **[1:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=111)** SHA stands for secure hashing algorithm and SHA-2, which is often referred also to as SHA-256, that represents the number of bits and also SHA-512, again, 512 bits.
>
> **[2:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=126)** These are common hashing algorithms that are used all over the place, including by Bitcoin.
>
> **[2:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=132)** You've also got SHA-3, you've also got RIPEMD.
>
> **[2:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=137)** RIPEMD replaces an older obsolete hashing algorithm that was called MD-5 or Message Digest version five.
>
> **[2:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=146)** There are other hashing algorithms beyond this, but we should have a general awareness.
>
> **[2:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=150)** Just like with encryption, having multiple algorithms available, there are also multiple hashing algorithms available out there.
>
> **[2:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=159)** Now let's focus on the digital signature.
>
> **[2:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=162)** We aren't talking about having a signature pad and using a pen on a screen to sign your name.
>
> **[2:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=168)** Instead, what we're talking about here is a digital signature at the cryptographic level.
>
> **[2:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=173)** This is used to provide data authentication so that we know data comes from, who it says it came from over the network.
>
> **[3:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=181)** It's also used to provide integrity, so we know that the transmission hasn't been tampered with, and it also supports something called non-repudiation, which means that the sender cannot deny having sent that transmission.
>
> **[3:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=196)** We'll talk about why that is shortly but for now, it's just because they have to use their private key to generate the signature.
>
> **[3:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=204)** However, digital signatures do not provide data confidentiality, which really means encryption.
>
> **[3:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=209)** This is a separate discussion than that, although you can use encryption and digital signatures together for the utmost in security with network transmissions.
>
> **[3:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=220)** So digital signatures most certainly are used with TLS, with transport layer security.
>
> **[3:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=226)** You can have digital signatures available within an application like an email program, if you choose to digitally sign an outgoing message.
>
> **[3:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=234)** You can digitally sign a script, so it's trusted to run on a machine.
>
> **[3:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=239)** Device drivers are commonly digitally signed so that they are trusted by the operating system.
>
> **[4:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=245)** So we encrypt hash values using a private key that is what the digital signature is.
>
> **[4:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=252)** So we have a hashing algorithm resulting in a unique message digest, that digest gets encrypted with the sender's private key.
>
> **[4:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=260)** Then on the other end, the signature is verified by the recipient of that network message with the matching public key of the sender.
>
> **[4:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=270)** So the private and the public key pair, in this case we're referring to, belong to the sender of the network transmission.
>
> **[4:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=277)** Pictured on the screen, we have an example of an email program where the user can choose to encrypt and, or digitally sign the email message.
>
> **[4:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=288)** It can also be set as a default.
>
> **[4:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=290)** So in the settings within most email programs, users would have the option to automatically encrypt the contents of the message and also add digital signatures.
>
> **[5:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=301)** Bear in mind that when you encrypt a message over the network, you need the public key of the recipient because you encrypt with that key, they decrypt with their related private key.
>
> **[5:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=313)** But digital signatures are created using the sender's private key and are verified with the sender's public key on the other end of the transmission.
>
> **[5:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=324)** So the email digital signature process then, begins with step one, with the sender of a network transmission choosing to digitally sign a message.
>
> **[5:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=334)** Doesn't have to be email, it could be just a web browser making a secure HTTPS connection to a web server.
>
> **[5:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=342)** In step two, a hash of the message data is generated.
>
> **[5:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=346)** In step three, the sender's private key is used to encrypt the message hash, that is the digital signature.
>
> **[5:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=355)** In step four, the message and the digital signature are then sent over the network to the recipient.
>
> **[6:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=361)** In step five, the recipient uses the sender public key to decrypt the signature, which then yields the hash value.
>
> **[6:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=370)** And finally, in step six, the recipient uses the same hashing function used to generate the original hash in step two, to compute the hash value of the send data.
>
> **[6:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/hashing-and-digital-signatures?u=76281980&t=383)** In step seven, if the decrypted hash and the computed hash are equal, then the message is determined to be authentic.

> [!info]- Semantic Content
>
> **Code Keywords:** private (7), public (5), let (2), case, (1), this, (1)
> **Env Vars:** sha (5), ripemd (2), jpeg (1), sha256 (1), tls (1)
> **Definitions:** is called (2), is a  (2), stands for (1), means that (1)
> **CLI Commands:** make (1)
> **Tools:** powershell (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Public key infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=0)** - [Instructor] The public key infrastructure, otherwise called PKI, is an important part of how transport layer security or TLS works.
>
> **[0:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=9)** Let's define why that's so.
>
> **[0:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=12)** Let's start first of all by defining a public key infrastructure.
>
> **[0:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=15)** What it is is a hierarchy of digital security certificates that can be used for many things like encrypting email, encrypting files, encrypting web server transactions, digitally signing network messages, to name but just a few options.
>
> **[0:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=32)** So certificates always contain, among other things, public keys.
>
> **[0:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=37)** To have a PKI certificate, you first have to generate a public and a private key pair.
>
> **[0:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=43)** So the public key part is stored in the certificate.
>
> **[0:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=47)** The private key is not stored in the certificate, but can be associated with the certificate.
>
> **[0:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=52)** So this is what we deal with when it comes to PKI and the keys.
>
> **[0:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=58)** Now, keys can also be stored on a smart card, just like an entire PKI certificate could be part of a smart card, but the hierarchy consists of a number of components, the first of which is a certificate authority, otherwise called a CA.
>
> **[1:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=73)** The CA is responsible for issuing certificates, for renewing them prior to their expiration date.
>
> **[1:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=80)** It also can revoke certificates, such as if we have a lost user smartphone and there was a PKI certificate perhaps on it for authenticating to a VPN.
>
> **[1:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=90)** By revoking a certificate, it is not trusted and can't be used.
>
> **[1:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=94)** The CA also maintains the certificate revocation list or CRL and should be taken offline when not used.
>
> **[1:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=102)** Now, specifically, we're talking about the root CA at the top of the hierarchy.
>
> **[1:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=108)** It can be used initially to establish the PKI hierarchy, but it should be taken offline afterwards for security reasons because if the root CA at the top of the hierarchy is compromised, so is everything under it.
>
> **[2:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=123)** And that's why we have the concept of a registration authority or an RA, which is sometimes also called a subordinate CA.
>
> **[2:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=131)** It's the same thing.
>
> **[2:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=132)** So the RA and the subordinate CA are the same thing, but they differ from the root CA.
>
> **[2:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=139)** So these can be used to issue and manage certificates.
>
> **[2:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=142)** You might have a number of different registration authorities for different departments in a large organization, different projects, maybe different regions around the world that have different technician teams.
>
> **[2:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=154)** We also then have other components like the certificate revocation list, which we've mentioned, or CRL.
>
> **[2:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=161)** And you can also use the online certificate status protocol or OCSP to validate that certificates are valid and haven't been revoked before they are used.
>
> **[2:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=173)** Then we have certificate templates, which, of course, as the name implies, serve as blueprints that are used when issuing certificates.
>
> **[3:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=180)** So you might have a certificate template that you use when issuing certificates for users to be used for mail encryption, which would be different than a certificate template used for web servers for PKI certificates to enable HTTPS bindings.
>
> **[3:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=196)** And, of course, the last PKI component is the digital or security certificate itself.
>
> **[3:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=203)** In it, it will contain the subject name, like the fully qualified DNS domain name of the website or for a user, in that case, it would be the user email address.
>
> **[3:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=214)** It would have the digital signature of the certificate authority that issued the certificate.
>
> **[3:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=219)** It would have expiry information, whether it expires in one year, two year, five years.
>
> **[3:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=225)** That's defined in the certificate template.
>
> **[3:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=227)** And, of course, we know the certificate would contain the public key.
>
> **[3:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=231)** Let's visualize the hierarchy.
>
> **[3:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=233)** So in a single-tier PKI hierarchy, at the top, we would have the certificate authority.
>
> **[4:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=240)** Many times you'll see that listed as being the root CA, under which it could directly issue certificates to users, devices, and applications.
>
> **[4:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=251)** So users might need certificates for encrypting files or email.
>
> **[4:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=255)** Devices might use certificates for authenticating to a VPN.
>
> **[4:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=259)** Apps might use it to authenticate perhaps to a centralized identity provider.
>
> **[4:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=265)** But in this case, we don't have registration or subordinate authorities in a single-tier high hierarchy.
>
> **[4:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=271)** So, again, we have the certificate authority, which we'll call the root CA, at the top of the hierarchy, but instead of it issuing certificates directly, in this example, it issues certificates and establishes two registration authorities.
>
> **[4:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=286)** It could be one, it could be two, it could be 100, it doesn't matter how many, but in this particular case, it is the registration or the subordinate CAs that issue the certificates for users, devices, and applications.
>
> **[5:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=300)** Now, this is a classic case of where the root CA should be taken offline.
>
> **[5:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=304)** If one of the registration authorities got compromised through a security breach, only everything under it would be compromised, not the entire PKI hierarchy.
>
> **[5:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/public-key-infrastructure?u=76281980&t=316)** So this gives us a sense then of what the PKI hierarchy consists of.

> [!info]- Semantic Content
>
> **Env Vars:** pki (11), vpn (2), crl (2), tls (1), ocsp (1)
> **Code Keywords:** public (6), let (3), case, (3), private (2)
> **Definitions:** is a  (3), is an  (1)
> **Exercise Files:** template (3)
> **Analogies:** just like (1), such as (1)
> **Speakers:** - [instructor] (1)

#### Certificate authorities
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=0)** - [Instructor] We already know that one important part of the PKI hierarchy is the certificate authority, otherwise called a CA.
>
> **[0:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=8)** So let's focus on that for a few minutes.
>
> **[0:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=11)** When it comes to a certificate or a registration authority, this is the component that is responsible for issuing PKI certificates.
>
> **[0:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=20)** You can call them security certificates, digital certificates, X.509 certificates.
>
> **[0:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=25)** It doesn't matter, it's all the same.
>
> **[0:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=27)** But the CA issues the certificate.
>
> **[0:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=30)** It can renew the certificate before it expires.
>
> **[0:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=33)** That can be a manual process.
>
> **[0:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=35)** It can also be automated.
>
> **[0:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=36)** And also, the CA can revoke certificates that should no longer be trusted.
>
> **[0:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=42)** Maybe the certificate's been compromised because a user mobile phone has been stolen.
>
> **[0:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=47)** So a CA has a longer validity period than a standard issued certificate that it will issue to a user, a device, or an app.
>
> **[0:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=56)** Where a user certificate, for example, depending on the certificate template, might be valid for two years, then a certificate authority certificate would be valid, normally, for 10 years.
>
> **[1:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=67)** These things can be changed, but these are just standard examples.
>
> **[1:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=71)** Now, the CA can also publish the list of revoked certificates.
>
> **[1:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=75)** That's called a certificate revocation list or, for short, technicians often just call it a CRL.
>
> **[1:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=81)** CAs can also issue certificates to subordinate registration authorities or subordinate CAs, and those registration authorities would, in turn, issue entity certificates instead of the top-level root CA doing it itself.
>
> **[1:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=96)** It doesn't matter how you do it.
>
> **[1:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=98)** Every option is valid.
>
> **[1:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=100)** Depends on the scenario and what your organization needs to do.
>
> **[1:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=104)** However, bear in mind that a compromised top-level certificate authority means that all subordinate certificates are compromised.
>
> **[1:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=112)** So if the root-level CA is compromised, the entire hierarchy is compromised also.
>
> **[1:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=117)** But if only one registration authority is compromised, then only its subordinate certificates that it has issued are considered to be compromised.
>
> **[2:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=127)** We've already mentioned a multitier hierarchy that would have the root certificate authority at the top of the hierarchy, under which we would have registration authorities, shown here as Registration Authority 1 and Registration Authority 2, perhaps for different departments or different technical admin teams that would issue certificates.
>
> **[2:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=148)** So ultimately, each registration authority issues certificates to be used for users, devices, or applications.
>
> **[2:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=157)** Now, this hierarchy is important because it helps us explain what the PKI chain of trust is.
>
> **[2:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=163)** So the first thing we have to understand is that, for all of this to work, certificate authorities must be trusted authorities.
>
> **[2:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=171)** Just like in order for a driver's license or a passport to be trusted, we have to trust the issuing government department.
>
> **[3:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=181)** So the CA needs to be trusted.
>
> **[3:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=183)** Otherwise, PKI is meaningless.
>
> **[3:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=186)** So that's why we have the notion of a CA trusted root certificate, which also contains a public key that gets installed on user devices, whether it's a Linux Windows server, a Windows laptop, whether it's a an Apple iPhone, it doesn't matter.
>
> **[3:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=203)** Those devices need to have trusted root certificates for trusted CAs installed.
>
> **[3:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=210)** Now, what this means then is that the device will then trust certificates issued from that CA.
>
> **[3:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=217)** So when you look at most modern operating systems, regardless of the type of device it's on, there is a standard list of publicly trusted certificate authorities.
>
> **[3:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=228)** So when you connect, for example, to do online banking using your device, that certificate is trusted for that website because it was issued by a trusted certificate authority that your device trusts.
>
> **[4:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=242)** Now, this also means that the trust is established through digital signatures.
>
> **[4:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=247)** Every certificate contains the digital signature of the issuing CA.
>
> **[4:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=252)** For instance, your bank website will use a PKI certificate so that you can connect over HTTPS.
>
> **[4:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=261)** And that bank web server certificate will contain the digital signature of whatever CA issued it.
>
> **[4:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=267)** So digital signatures are created by the CA using its private key, and that signature is verified, for example, by connecting devices using the CA's related public key.
>
> **[4:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=280)** Because when you install a trusted root certificate on a device, you're installing the public key of that certificate authority.
>
> **[4:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=287)** Let's visualize it here.
>
> **[4:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=289)** We've got a screenshot of a Windows computer where we're viewing trusted root certification authorities.
>
> **[4:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=296)** Now, what you'll have on devices, as we've mentioned, are standard public trusted CAs.
>
> **[5:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=301)** So you can also create your own internal self-signed CA within your organization, where you control the entire PKI hierarchy.
>
> **[5:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=311)** You can do that, but the thing to bear in mind is that, by default, devices will not trust certificates that are issued by that self-signed CA.
>
> **[5:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=322)** So what this means then is that we'd have to install the CA trusted root certificate for the self-signed CA on all of our internal devices so that we could establish a chain of trust.
>
> **[5:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-authorities?u=76281980&t=335)** In other words, so that our internal devices would trust certificates issued by our internal self-signed CA.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), self (4), let (2), private (1), default, (1)
> **Env Vars:** pki (6), crl (1), https (1)
> **Analogies:** for example (3), just like (1), for instance (1)
> **Definitions:** means that (2), is a  (1), in other words (1)
> **Prerequisites:** install (2)
> **Code Identifiers:** iphone (1)
> **Tools:** notion (1)
> **Exercise Files:** template (1)

#### Certificates
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=0)** - [Instructor] Let's take a few minutes to talk about digital certificates.
>
> **[0:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=4)** These are an important part of TLS, because as an example, if you want to use TLS to secure web server communications over HTTPS you need a digital certificate issued to that web server.
>
> **[0:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=19)** So let's focus on the certificate for a few moments here.
>
> **[0:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=21)** A PKI certificate is also often called a digital certificate, a security certificate, an X.509 certificate.
>
> **[0:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=30)** All of those names are synonymous.
>
> **[0:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=33)** You might even see some interface tools refer to it as an SSL certificate even though the secure sockets layer or SSL protocol is deprecated.
>
> **[0:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=43)** So PKI certificates, as we know, are issued by certification authorities to either users or devices or even applications.
>
> **[0:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=53)** And certificates have a specific use, whether it's for file encryption, whether it's for securing network traffic using TLS, whether it's for digital code signing so that would be of interest to software developers.
>
> **[1:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=66)** Whatever the case is, whether it's one or a combination of these or other uses, that usage is defined clearly in the certificate template which is used to issue the certificate.
>
> **[1:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=78)** Now the certificate itself can be stored in a multitude of ways.
>
> **[1:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=82)** It could be stored in a file on a device.
>
> **[1:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=84)** And if that certificate is linked to a private key, then the private key part definitely needs to be protected, for example, by adding a pass phrase.
>
> **[1:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=93)** But certificates can also be on smart cards.
>
> **[1:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=97)** For example, your users might insert a smart card into a laptop that has a built-in smart card reader in order to send secured messages or to authenticate to a VPN.
>
> **[1:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=108)** Also, certificates can also be stored in firmware that's designed to do that, whether it's TPM on an individual device or a standalone HSM appliance.
>
> **[1:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=119)** So the items in a PKI certificate will include things such as a version number.
>
> **[2:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=126)** This would be the version number of, for example, the template that was used to generate that certificate.
>
> **[2:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=133)** Every certificate gets assigned a unique serial number.
>
> **[2:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=137)** This is important because if that certificate is revoked in the future, it's the serial number that gets tracked in the revocation list.
>
> **[2:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=146)** The certificate will also contain the digital signature of the issuing CA, as well as the algorithm that was used.
>
> **[2:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=154)** That would be a hashing algorithm.
>
> **[2:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=156)** What's interesting about this, remember, is that this establishes the PKI chain of trust.
>
> **[2:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=161)** Because if we trust the CA, then we're going to trust whatever certificates it issues and digitally signs.
>
> **[2:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=170)** Certificates also contain a validity period because they expire eventually, much like a passport or a driver's license does.
>
> **[2:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=178)** Whether it's one year, two year, five years, that comes from the certificate template used to issue the certificate.
>
> **[3:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=186)** As we've mentioned, also the certificate usage details are included in the certificate, such as if it's designed to be used on a Windows machine with encrypting file system or it's designed to be used for securing communications for a web server.
>
> **[3:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=200)** Of course, the subject name is embedded within the certificate, whether that is a URL or an FQDN, a fully qualified domain name for a website.
>
> **[3:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=210)** Maybe it's a user email address.
>
> **[3:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=213)** Also, the public key is part of the PKI certificate, but not the private.
>
> **[3:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=218)** The private key is not stored within the certificate.
>
> **[3:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=222)** Then we have the notion of wild card certificates.
>
> **[3:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=226)** Here in our screenshot, we've got a subject alternative name or a SAN here for [digicert.com](https://digicert.com), www.[cert.com](https://cert.com).
>
> **[3:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=237)** However, when we select that, we have a number of other entries like admin.[digicert.com](https://digicert.com), [digicert.com](https://digicert.com), content.[digicert.com](https://digicert.com), and so on.
>
> **[4:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=249)** This is an example of a wild card certificate.
>
> **[4:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=252)** So a wild card certificate can be used for multiple DNS second level domains via the subject alternative name or the SAN field.
>
> **[4:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=261)** The certificate is issued to the top level DNS domain, so it can be used by everything that uses that name.
>
> **[4:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=268)** So for example, if we've got a wild card certificate that is issued to [fakecorp.com](https://fakecorp.com), then that same certificate could be used for canada.[fakecorp.com](https://fakecorp.com), and also perhaps for another website that's named europe.[fakecorp.com](https://fakecorp.com).
>
> **[4:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=288)** The benefit here is we don't have to issue and manage individual unique certificates for each unique DNS name or web server in this example.
>
> **[4:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=299)** Although it's not limited to only web server usage.
>
> **[5:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=303)** We've alluded to the certificate revocation list or the curl, the CRL as it's called.
>
> **[5:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=310)** We know that the revocation list is published by the CA and that it is a list of revoked certificate serial numbers.
>
> **[5:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=318)** We've also mentioned that revocation reasons could include a lost or a compromised user device that had one or more PKI certificates on it.
>
> **[5:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=328)** Or if an employee leaves the organization, then we might terminate any certificates issued to them in the sense of revoking them so they cannot be used.
>
> **[5:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=338)** They're no longer considered valid, but this only works properly in your PKI environment if, for example, apps that are used for secured connections would retrieve the CRL before using those certificates.
>
> **[5:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=353)** That could be an app on a client-side device as well.
>
> **[5:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=356)** So in other words, the CRL has to be checked in order for this to be useful in your hierarchy at all.
>
> **[6:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=363)** We have variations of this, such as the online certificate status protocol, otherwise called OCSP.
>
> **[6:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=371)** OCSP consists of a client component on connecting devices and a server-side component called the responder, the OCSP responder.
>
> **[6:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=381)** This is different than a curl in that instead of downloading the entire list of all revoked certificate serial numbers, in this case, we can query the status of a specific single certificate.
>
> **[6:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=394)** So unlike the curl, we don't have to download the entire list.
>
> **[6:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=400)** That also leads us into OCSP stapling.
>
> **[6:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=404)** So what happens with this is that the certificate owner can check the CA for the status of the certificate periodically.
>
> **[6:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=412)** So in other words, a web server that has been issued a TLS certificate, of course, we would probably just call that a digital certificate, can check the CA to make sure that the certificate has not been revoked.
>
> **[7:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=427)** Clients that connect to, in this example, the secured website can receive OCSP status for that website.
>
> **[7:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificates?u=76281980&t=436)** And so what this means then with stapling is that clients don't have to query the OCSP responder all of the time for website certificate status because they already have that status known and they don't have to keep checking over and over again.

> [!info]- Semantic Content
>
> **Env Vars:** pki (7), ocsp (6), tls (4), dns (3), crl (3)
> **Code Keywords:** private (4), let (2), this, (2), interface (1), protected (1)
> **URLs:** [digicert.com](https://digicert.com) (4), [fakecorp.com](https://fakecorp.com) (3), [cert.com](https://cert.com) (1)
> **Analogies:** for example (5), such as (3)
> **Definitions:** is a  (2), in other words (2), is an  (1)
> **CLI Commands:** curl (3), make (1)
> **Exercise Files:** template (3), download the (1)
> **Tools:** notion (1)

#### Certificate lifecycle management
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=0)** - [Narrator] Working with TLS to secure network communications means that we have to have a solid understanding of the PKI certificate lifecycle.
>
> **[0:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=8)** If, for example, we have an expired certificate used by a web server, client connections will no longer work correctly.
>
> **[0:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=15)** Clients will get warnings, for example, in a web browser that state that the certificate is not valid.
>
> **[0:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=21)** Naturally, we want to avoid this.
>
> **[0:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=24)** Let's talk about the lifecycle.
>
> **[0:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=26)** The first phase of the certificate lifecycle is the request to get a certificate, followed by the issuance of the certificate from a certificate authority.
>
> **[0:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=35)** The certificate is then used during its lifetime, such as for a web server or for email encryption by a user, whatever the case might be.
>
> **[0:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=45)** The certificate then potentially might be revoked, such as if it were on a smart card that's used for VPN authentication and the user has lost the card.
>
> **[0:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=55)** Then, the certificate can be renewed prior to when it is expiring so that it can continue to be used, or otherwise, the certificate just expires, for example, after two years, which means it no longer can be used.
>
> **[1:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=70)** Let's go through each of the phases, starting with the certificate signing request, which is really often just sorted down to CSR.
>
> **[1:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=78)** In order to have a certificate, you need to have a unique public and private key pair.
>
> **[1:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=82)** This needs to be generated first, and if you're setting up your certificate signing requests manually, for example, at the command line using a tool like OpenSSL, then you would generate the key pair first.
>
> **[1:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=95)** But these days, most front-end GUIs do this for you in the background.
>
> **[1:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=100)** Now, the public key can be shared with anybody, but the private key needs to be kept private, and often, if it's stored as a file on a machine, it's password-protected.
>
> **[1:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=109)** So the CSR is generated next, which includes a unique public key commonly in a format called PKCS #10 format, although there are other formats.
>
> **[2:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=120)** PKCS just stands for Public Key Cryptography Standards.
>
> **[2:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=125)** So the CSR then is sent to the certificate authority for verification and signing so that you get issued the certificate.
>
> **[2:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=134)** So the CSR then is interesting because this can be done in a variety of ways.
>
> **[2:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=139)** It could be done at the command line if you have a self-certified CA that you're going to be using, or it might be part of what you paste into a web form if you're getting a certificate that you want digitally signed by a publicly trusted CA.
>
> **[2:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=154)** The certificate signing request will look something like what we have here in our screenshot.
>
> **[2:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=159)** Notice that we have a Begin New Certificate Request at the top.
>
> **[2:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=163)** The bottom, we have the end new certificate request, and then we have what looks like scrambled data in between, and that will include the public key.
>
> **[2:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=173)** However, there are additional items required when you create a CSR, depending on who you're getting the from, such as locale information, city, state, country, the subject Fully Qualified Domain Name, or FQDN.
>
> **[3:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=189)** So if you are creating a CSR to get a certificate for a website, then you have to make sure that the subject FQDN is set to the name that people would be using to connect to the site, for instance, they have to match.
>
> **[3:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=202)** So www.[fakesite.com](https://fakesite.com), as an example.
>
> **[3:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=206)** Or if it's for a user certificate, then it would contain the user email address, and again, it must be spelled correctly for the user to use it with their mail account.
>
> **[3:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=216)** Now that's the request for a certificate.
>
> **[3:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=219)** Once the certificate gets issued, this could be something that is a manual process or it could be automated, but once the certificate is issued, it can then be used.
>
> **[3:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=230)** What's important to know is that it might require an administrator administrative approval before the certificate is actually issued, or the process could be completely automated.
>
> **[4:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=241)** So for new devices such as computers joining a Microsoft Active Directory domain, or smartphone connecting to a mobile device management or MDM system, if those devices are already trusted, then the entire process of requesting and issuing a certificate can be completely automated.
>
> **[4:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=260)** So the certificate then would be stored in the device trusted certificate store, or it could be stored on other media such as a smart card.
>
> **[4:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=269)** Here we have a screenshot example of the simple certificate enrollment protocol, otherwise called SCEP, S-C-E-P.
>
> **[4:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=278)** In this case, this screenshot is from Microsoft Intune, which is a mobile device management or MDM solution, where on the left we can select the platform, what's shown here is Android Enterprise.
>
> **[4:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=292)** On the right, we can specify the certificate type.
>
> **[4:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=295)** Here it's shown as a user certificate, where the subject name format uses the user common name.
>
> **[5:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=301)** We can also specify the validity period.
>
> **[5:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=304)** Here it's set to two years, how the key will be used, the key size and bits, the hashing algorithm that will be used, because remember, a certificate contains the digital signature of the certificate authority.
>
> **[5:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=318)** Now, the next phase in the PKI certificate lifecycle is the usage of the certificate, which is to find in the certificate details.
>
> **[5:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=326)** Also, it could be email encryption and signing.
>
> **[5:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=330)** It could be file system encryption, perhaps the certificate usage is specified as for code signing for software developers or script writers.
>
> **[5:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=340)** The next phase of the lifecycle potentially would be revocation.
>
> **[5:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=344)** I say potentially, because if a certificate is never considered to be compromised, there would be no reason to revoke it, or if a user is not leaving the organization, again, there might not be a reason to revoke certificate.
>
> **[5:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=358)** So employees leaving the organization or a compromised device would be a good reason to add the certificate to the CRL, the Certificate Revocation List, that would be the certificate serial number.
>
> **[6:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=370)** And that can be revoked and then acquired by other apps or connecting devices by downloading the CRL or by requesting the validity of that certificate using OCSP.
>
> **[6:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=382)** So revoke certificates to make it simple or simply not trusted.
>
> **[6:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=388)** Before the certificate expires, it can be renewed.
>
> **[6:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=392)** So what happens is that we have a timeframe which will vary depending on the issuer.
>
> **[6:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=397)** So for example, if we have a two year certificate before it expires, prior to that expiry occurring, we can have a manual or an automated process to renew the certificate, perhaps for another two years so it can continue to be used.
>
> **[6:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=414)** So public certificate authorities will notify subscribers via email normally that their certificate is going to expire, so they have a chance to renew it, because once it expires, it has to be completely done again from the beginning, from the certificate signing request.
>
> **[7:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=431)** Here we have a screenshot in Windows of an individual certificate.
>
> **[7:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=436)** Notice that we have the validity period.
>
> **[7:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=439)** So we have an since then of when the certificate will expire.
>
> **[7:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=443)** We also have in our screenshot the issuer, in this case it's Root Cert, and who it was issued to, in this case, it just says client cert.
>
> **[7:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=453)** So after a certificate expires, it can't be used.
>
> **[7:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=456)** Normally there's a 90-day notification prior to expiring, but that will vary.
>
> **[7:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=462)** For websites with expired PKI certificates, user web browsers will provide a message to the user that that certificate or the site is not to be trusted because it's not valid.
>
> **[7:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/certificate-lifecycle-management?u=76281980&t=474)** In this case, it has expired.

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), private (3), case, (3), let (2), continue (2)
> **Env Vars:** csr (6), pki (3), pkcs (2), fqdn (2), mdm (2)
> **Analogies:** for example (5), such as (5), for instance (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), means that (1)
> **Tools:** command line (2)
> **URLs:** [fakesite.com](https://fakesite.com) (1)
> **UI Navigation:** select the (1)

#### Transport layer security
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=0)** - [Instructor] Transport Layer security or TLS.
>
> **[0:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=3)** This is a network security protocol suite, and we usually use it when securing connections through VPNs, perhaps through connections that we want to enable for a web server securely using HTTPS.
>
> **[0:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=18)** But there are many other uses of TLS beyond just those examples.
>
> **[0:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=22)** First, let's start by talking about the old secure sockets layer or SSL network security protocol suite.
>
> **[0:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=30)** This was developed by Netscape way back in the early 1990s, and there were numerous versions.
>
> **[0:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=36)** There were SSL versions, one, two, and three variants.
>
> **[0:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=41)** However, none of these should be used.
>
> **[0:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=44)** SSL should never be used.
>
> **[0:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=46)** It should be disabled on clients and servers because there are many known security vulnerabilities.
>
> **[0:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=52)** So it has been superseded by TLS, Transport Layer security.
>
> **[0:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=58)** So we know that TLS was introduced to supersede SSL.
>
> **[1:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=62)** That happened way back in 1999.
>
> **[1:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=64)** And of course, over time we have various versions of TLS such as versions 1.0 through to 1.3, which is the current version as of this recording.
>
> **[1:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=76)** It was introduced back in August, 2018, but there is a version 1.4 on the horizon.
>
> **[1:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=82)** So as security professionals, we need to always keep up to date with any new enhancements or new versions of security related items that we should be using.
>
> **[1:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=92)** So TLS uses PKI certificates and related keys, public and private key pairs to secure network communications.
>
> **[1:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=101)** How does it do this?
>
> **[1:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=103)** It does it through encryption, which is confidentiality, so encrypting and decrypting communications over the network, as well as digitally signing transmissions over the network.
>
> **[1:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=114)** Digitally signing uses hashing.
>
> **[1:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=116)** So this provides authentication of messages over the network so that we can be assured that if it looks like a message came from a specific web server hosting a web app, it really did, it's not been forged.
>
> **[2:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=129)** TLS also provides integrity, which means that we can rest assured that the transmission was not tampered with since it's been sent.
>
> **[2:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=137)** It also means we have non-repudiation where the digital signer of a network message cannot refute having sent it because the digital signatures created with the private key and only the owner of the key has access to it.
>
> **[2:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=151)** Let's step through the TLS handshake.
>
> **[2:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=155)** Let's assume for our example that we have a client web browser connecting to a web server that's been configured with the PKI certificate so it's using HTTPS.
>
> **[2:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=166)** In step one, the client sends a hello message to the server.
>
> **[2:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=171)** In step two, the server responds and includes its PKI certificate, which also includes its public key, not its private key.
>
> **[3:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=180)** Step three, the client verifies server certificate validity.
>
> **[3:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=185)** That would include things like checking that the certificate hasn't expired, that the subject name or any of the alternative names in the certificate match what's being connected to over the network.
>
> **[3:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=196)** In step four, the client will then generate a random secret, and that will be encrypted with the server public key because that was provided back in step two.
>
> **[3:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=207)** And after that happens, the client will send that encrypted random secret to the server.
>
> **[3:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=213)** In step five, the server can use its related private key to decrypt that client random secret.
>
> **[3:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=221)** So now the server knows what the client random secret is.
>
> **[3:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=225)** Using that random secret, the client and the server can go through a series of calculations to come up with a unique session key.
>
> **[3:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=234)** Now, this session key is important because it is used to encrypt transactions between the client and the server from that point forward.
>
> **[4:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=243)** Of course, there are also digital signatures that are occurring as well.
>
> **[4:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=248)** So it secures the communication channel then by going through these steps initially to come up with a unique session key.
>
> **[4:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=256)** Session keys might also time out after a period of inactivity.
>
> **[4:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=260)** If you've ever done online banking and you've been signed in and perhaps stepped away for five or 10 minutes, you might notice when you come back you have to re-authenticate to the banking web app.
>
> **[4:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=271)** That, of course, would generate a new unique session key to be used for encryption and decryption.
>
> **[4:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=278)** But TLS can also be used with virtual private networks or VPNs.
>
> **[4:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=283)** A VPN in this diagram is allowing the remote client computer that could be a user working from home or working at a customer site.
>
> **[4:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=292)** It would allow them to connect over the internet using an encrypted secured VPN tunnel to a remote private network elsewhere.
>
> **[5:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=301)** So that might be an office network where there are office computers and resources that the remote client computer needs access to.
>
> **[5:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=309)** Well, what's interesting is we could have this set up as a TLS VPN formerly called an SSL VPN.
>
> **[5:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=316)** These types of VPNs are firewall friendly.
>
> **[5:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=319)** They don't use strange port numbers that you would have to open up in firewalls.
>
> **[5:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=323)** They use TCP Port 443.
>
> **[5:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=327)** Now, you might recognize that of course as being used by web service configured for HTTPS.
>
> **[5:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=332)** So TLS can be used in this manner, which implies the use of PKI certificates.
>
> **[5:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=339)** But the thing we should also think about is on client devices like web browsers, we can determine which versions of SSL or TLS should be used.
>
> **[5:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=349)** We know that SSL should never be used, and in this screenshot it's not turned on.
>
> **[5:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=355)** SSL version 3.0.
>
> **[5:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=357)** But also we know that TLS versions change over time.
>
> **[6:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=361)** Technically, we should not be using TLS versions 1, 1.1 or 1.2.
>
> **[6:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=367)** The current version that we should be using that is currently trusted is 1.3, but that's on the client side.
>
> **[6:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=374)** Depending on the type of server environment you're using, you can also check to see which SSL or TLS versions are supported.
>
> **[6:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=381)** Here on Linux, I've issued the open SSL ciphers dash V command.
>
> **[6:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=387)** Dash V is for verbose output.
>
> **[6:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=391)** Notice here that we've got some TLS versions shown as being version 1.2.
>
> **[6:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=398)** Now this is going to be important if you're configuring, for example, an Apache web server on Linux, you can determine which of these security modules are enabled.
>
> **[6:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/transport-layer-security?u=76281980&t=408)** So of course, we don't want to use SSL, and ideally we will only be using TLS version 1.3.

> [!info]- Semantic Content
>
> **Env Vars:** tls (17), ssl (11), pki (4), vpn (4), https (3)
> **Code Keywords:** private (6), let (3), public (3)
> **Versions:** version 1 (3), 1.3 (2), 1.0 (1), version 3 (1), 1.1 (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** apache (1)
> **Ports:** port 443 (1)
> **Prerequisites:** set up (1)

#### Analyze a tls packet capture
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=0)** - [Instructor] In this video, we're going to take a look at what happens when a client communicates with a server using TLS, Transport Layer Security.
>
> **[0:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=11)** So we're going to analyze a TLS packet capture.
>
> **[0:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=14)** To do that, we're going to use the free Wireshark tool.
>
> **[0:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=17)** Wireshark is a free network analyzer tool.
>
> **[0:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=20)** You can capture network traffic, and in the case of saved packet captures from before, you can open them up and analyze transmissions.
>
> **[0:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=29)** You can get Wireshark for free at [wireshark.org](https://wireshark.org), and it runs on a variety of different operating system platforms.
>
> **[0:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=37)** So I've opened up Wireshark on my local computer, and I've also opened up using File/Open a packet capture file that I took some time ago.
>
> **[0:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=48)** Now, you can capture network traffic for the network you're connected to, whether it's a wireless network, whether it's a wired network.
>
> **[0:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=56)** But in the case of a wired network, let's say, with ethernet switches, the nature of an ethernet switch is such that, you know, when you're plugged into a switch port, you only see traffic that you're sending or receiving.
>
> **[1:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=71)** You'll see network broadcasts and multicasts, but you're not going to see individual communications between other devices, not by default, unless you configure the switch port otherwise.
>
> **[1:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=82)** So, you have to think about that type of network connection, which determines the scope of visibility for what your packet capture will see.
>
> **[1:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=91)** At any rate, here I've opened a packet capture, and notice the presence of some TLS traffic.
>
> **[1:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=97)** Now, some of this here is showing us TLSv1.2.
>
> **[1:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=101)** Ideally, we know we really should be using TLS version 1.3.
>
> **[1:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=105)** We've also got some of that traffic.
>
> **[1:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=107)** We can make life easy here by filtering what we're viewing up at the top in the bar.
>
> **[1:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=112)** For example, if I type in just simply TLS and press Enter, all we're reviewing is TLS traffic.
>
> **[1:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=119)** Okay, well, that makes things a little bit easier, and I think I'll go to TLS version 1.3.
>
> **[2:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=124)** We shouldn't be using older protocols that are known to have security issues.
>
> **[2:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=129)** What I'm interested in is the exchange, let's say, between a client, that might be a web browser, and a web server or some kind of a web app or web service.
>
> **[2:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=139)** So I'm going to select here a specific packet, which is labeled as being a Client Hello packet.
>
> **[2:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=146)** Now, this is for TLS version 1.3, and in this case, it happens to be for the www.[hbo.com](https://hbo.com) site.
>
> **[2:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=156)** Could be any site, could be online banking, could be a private CA-issued certificate for an internal web app.
>
> **[2:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=162)** It doesn't make a difference, the TLS handshake doesn't change.
>
> **[2:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=166)** So what we have here is the source IP address of the client, that looks like a private IP address, 192.168.2.11, and then a public IP address out here for the website.
>
> **[2:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=177)** So in the Client Hello packet, having that selected at the top, the headers of that packet are shown below, such as the IP header, the Internet Protocol Version 4 header, which, among other things, contains things like the source and destination IP.
>
> **[3:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=192)** It's a TCP transmission, so transmission control protocol, where the destination port number is 443.
>
> **[3:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=199)** Of course, an HTTPS connection, which uses the TLS network security protocol suite in conjunction with the certificate installed on the server to encrypt the connection.
>
> **[3:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=211)** Next, we then have the transport layer security, or of course, the TLS header.
>
> **[3:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=216)** So what the client is going to do here in this initial Client Hello handshake is it's going to send a list of cipher suites that it supports.
>
> **[3:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=226)** So TLS using the advanced encryption standard algorithm, AES-128, we've mentioned that already, or AES-256, and all these other variations of what it supports.
>
> **[3:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=239)** Now, at the end of the day, most servers are configured to only support certain specific encryption algorithms or cipher suites.
>
> **[4:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=247)** So, the server might not be configured to use SSL or TLS version 1.2.
>
> **[4:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=253)** We'll see that information when we look at the Server Hello transmission.
>
> **[4:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=258)** If I click on that packet, down in the middle here, what it's going to do is specify the cipher that will be used.
>
> **[4:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=268)** So of course, that means it'll tell the client, well, I will use a specific encryption type of algorithm, for example, it might use TLS AES-128 with SHA-256 for signing.
>
> **[4:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=282)** That's the signing or hashing algorithm.
>
> **[4:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=285)** So we've got some of that being done here.
>
> **[4:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=287)** At the end of the day, as we go further down, a session key, a unique session key will be used to actually encrypt all of the traffic between those two devices for the duration of that session.
>
> **[5:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=301)** Here at Wireshark, if I go to View, and let's say, I go to Packet Details, turn that off, what we are viewing here is the hexadecimal on the left and the ASCII variation on the right of the payload of that packet, the actual data, whether it's encrypted or not.
>
> **[5:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=316)** Now, once it's encrypted with the session key through TLS, it just looks like jumbled up data.
>
> **[5:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=322)** Can't really make heads or tails out of what's going on.
>
> **[5:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=325)** And that's precisely the point.
>
> **[5:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/analyze-a-tls-packet-capture?u=76281980&t=327)** So this gives us a general idea then of the communication that is used for the TLS handshake between a client and a server.

> [!info]- Semantic Content
>
> **Env Vars:** tls (16), aes (3), tcp (1), https (1), ssl (1)
> **Code Keywords:** let (3), switch (3), private (2), default, (1), case, (1)
> **Versions:** version 1 (4), 192.168.2 (1), version 4 (1)
> **UI Navigation:** go to (3), click on (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (2), such as (1)
> **URLs:** [wireshark.org](https://wireshark.org) (1), [hbo.com](https://hbo.com) (1)
> **Definitions:** is a  (1)


### 2. Certificate Authorities

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Configure a Microsoft AD CS certificate authority
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=0)** - [Instructor] Let's take a few minutes to see how we go about installing the Microsoft Windows Server Certification Authority Server role.
>
> **[0:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=9)** What we want to do here is we want to be able to establish our own private CA within our organization where we control the entire PKI hierarchy.
>
> **[0:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=19)** There are times you may want to do that if you want to be able to completely control the issuance of certificates for services that are used internally, like line of business apps and setting up certificates for VPNs.
>
> **[0:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=32)** Just remember, as always, that when you work with a private CA and have certificates issued from it, you need to make sure that devices that will partake in the PKI environment have the trusted route certificate for the CA installed on them so that they trust certificates issued by that CA.
>
> **[0:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=50)** We're going to be taking a look at how to do that specifically a little bit later.
>
> **[0:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=54)** For now, let's get a Windows private CA up and running.
>
> **[0:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=58)** So in my Windows Server environment, I'm going to go into the Start menu and fire up Server Manager.
>
> **[1:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=65)** I've decided I want to use the GUI to set this up.
>
> **[1:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=68)** You don't have to do that.
>
> **[1:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=69)** You can do this from the command line, such as using PowerShell commandlets, but before we actually do that, in the Start menu on this server, if I go to Windows Administrative Tools, I can elect to start the Active Directory Users and Computers tool.
>
> **[1:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=86)** This server is an Active Directory Domain controller, so the Active Directory Domain has already been established.
>
> **[1:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=93)** Let's just examine that for a moment.
>
> **[1:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=96)** In the left hand navigator here in Active Directory Users and Computers, my domain name is shown as being domain1.local.
>
> **[1:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=104)** Now, you don't need an Active Directory Domain in order to install a Windows Server certification authority, but it does give you additional options, as we'll see shortly.
>
> **[1:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=117)** So we're just pointing out that we do have an Active Directory Domain.
>
> **[2:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=120)** This server is joined to it.
>
> **[2:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=123)** Actually, it's a domain controller.
>
> **[2:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=125)** So back here in Server Manager, I'm going to click add Roles and Features.
>
> **[2:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=130)** In the wizard here, I'm going to keep clicking the next button until I get to the select server roles screen.
>
> **[2:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=137)** Now I want to make sure I turn on Active Directory Certificate Services, which is often shortened down to ADCS.
>
> **[2:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=144)** So I'll turn on that check mark.
>
> **[2:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=147)** I'll click next.
>
> **[2:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=148)** I'm not interested in anything else, so I'll keep clicking next until I get to the select role services screen.
>
> **[2:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=155)** So there are some subset options for a certification authority that we can work with.
>
> **[2:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=161)** So I definitely want the certification authority for sure, but then we can determine if we want the certificate enrollment web service, basically a small website that people could connect you to request certificates.
>
> **[2:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=174)** Do we want the online responder for checking the validity of certificates?
>
> **[2:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=179)** I don't want any of these additional services.
>
> **[3:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=181)** I just want certification authority, so I'll leave that checked on and I'll click next, and I'll click install.
>
> **[3:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=188)** So all we're doing is installing this.
>
> **[3:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=190)** Of course, we're going to have to configure it once the installation has completed.
>
> **[3:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=195)** Okay, the installation has completed, but the configuration needs to be done.
>
> **[3:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=200)** I'm going to click close, and I'll click the little flag icon with a yield symbol in the upper right here in Server Manager, and I'm going to choose Configure Active Directory Certificate Services.
>
> **[3:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=212)** So it's got my domain information and my account, my admin account filled in.
>
> **[3:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=217)** I'll choose next.
>
> **[3:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=218)** We want to configure the certification authority.
>
> **[3:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=221)** That's the only thing we've installed, so I'll turn on the check mark for that and I'll click next.
>
> **[3:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=225)** Now, this is where, because we have an Active Directory Domain, we have the option of configuring what's called an Enterprise CA, which is integrated with Microsoft Active Directory.
>
> **[3:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=236)** You don't have to do that.
>
> **[3:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=238)** So if you've got a standalone server with no Active Directory at all, you could set up a standalone CA.
>
> **[4:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=244)** You could still do that here now, but I want this integrated with my Active Directory Domain.
>
> **[4:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=249)** The reason I want that is because for machines joined to the Active Directory Domain, it really makes it easy for them to request certificates through the Active Directory Implied Trust, because that machine is already a part of the domain.
>
> **[4:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=265)** Again, this might work well for an organization that uses an Active Directory Domain, but it's not the only option.
>
> **[4:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=272)** If you set up a standalone CA, how would you have different users requesting certificates?
>
> **[4:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=278)** They could do it through the website, the enrollment website option that we mentioned previously, but we're not doing that, so Enterprise CA it is.
>
> **[4:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=288)** I'll click next.
>
> **[4:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=290)** It asks, would you like to set up a root CA, the very top of the PKI hierarchy?
>
> **[4:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=295)** Because it's the first time we're doing this, that is what we are going with.
>
> **[4:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=299)** You do have the option of setting up a subordinate CA, but you have to have already set up a root CA.
>
> **[5:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=306)** And remember, subordinate CAs are also called registration authorities, RAs, and you might do that in a larger organization because you might have a different subordinate CA for each admin team, so they can control their own certificates, or maybe for different business units, different projects, different regions, anything along those lines.
>
> **[5:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=327)** So I'm going to set up a route CA, so I'm going to click next.
>
> **[5:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=331)** I'm going to create a new private key.
>
> **[5:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=333)** Well, isn't that what you would always want to do?
>
> **[5:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=335)** Remember, you need a public and a private key pair for this to work.
>
> **[5:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=340)** You might use an existing private key if for some reason you are reinstalling a server maybe that failed and you've backed up the private key for the CA that it used to host.
>
> **[5:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=351)** So create a new private key.
>
> **[5:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=353)** I'll click next.
>
> **[5:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=354)** We can then specify cryptographic options.
>
> **[5:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=357)** It's going to be an RSA 2048-bit public and private key.
>
> **[6:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=363)** Also, we can specify the hashing algorithm for signing certificates issued by this CA, because we know that's how it works.
>
> **[6:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=370)** SHA256 is fine.
>
> **[6:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=373)** I'll click next.
>
> **[6:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=375)** Then we've got the common name for the CA.
>
> **[6:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=377)** I'm going to call it MyOrgCAWindows, and I'll click next.
>
> **[6:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=388)** The validity for the certificate, that would be for the CA, is set here by default to five years.
>
> **[6:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=394)** You can change that to be whatever you want.
>
> **[6:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=396)** I'm going to leave it at five years, and I'll click next.
>
> **[6:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=401)** I'll accept the default for the database storage location.
>
> **[6:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=404)** On the summary screen, I am happy with my selections, so I'm going to go ahead and click configure to get this up and running.
>
> **[6:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=411)** The configuration has succeeded just like that.
>
> **[6:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=415)** So if I click close, I'm left here in Server Manager, I can either go to the tools menu here in Server Manager to open up the Certification Authority tool, but I can also, from the Start menu on this host, open up the Certification Authority tool there.
>
> **[7:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=432)** It doesn't matter how you do it, but when you do go into that, this is where it will show you your private CA.
>
> **[7:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=438)** So it's shown over here on the left, MyOrgCAWindows, and if I expand it, I've got folders for revoked certificates, issued certificates, pending requests.
>
> **[7:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=451)** You might configure a certificate template perhaps that requires administrator approval before issuing a certificate to a user, so it would show up as a pending request here until it's approved.
>
> **[7:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=463)** You've got failed requests, and because we have an enterprise CA, remember that's only available because this machine is connected to an Active Directory Domain.
>
> **[7:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=474)** Well, because of that, we have this additional option of certificate templates.
>
> **[7:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=478)** If you have a standalone private CA set up in Windows, you don't get the certificate templates option.
>
> **[8:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=485)** These, of course, are blueprints where we can configure options for the certificates based on these templates, but we'll get into that stuff later.
>
> **[8:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-microsoft-ad-cs-certificate-authority?u=76281980&t=494)** At this point, we have successfully established a root CA on Windows.

> [!info]- Semantic Content
>
> **Code Keywords:** private (11), let (3), public (2), else, (1), this. (1)
> **Prerequisites:** configure (6), set up (6), install (2)
> **Env Vars:** pki (3), gui (1), adcs (1), rsa (1), sha256 (1)
> **CLI Commands:** make (2)
> **Tools:** command line (1), powershell (1)
> **UI Navigation:** go to (2)
> **Analogies:** such as (1), just like (1)
> **Cross-References:** we mentioned (1)

#### Configure Microsoft AD CS certificate templates
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=0)** - [Instructor] In this demo, we're going to be customizing certificate templates.
>
> **[0:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=5)** Now, we know that a certificate template as part of the PKI hierarchy is used to present the instructions for issuing certificates.
>
> **[0:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=13)** It's a blueprint.
>
> **[0:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=15)** So let's go ahead and take a look at how we can do that specifically with Microsoft Active Directory Certificate Services.
>
> **[0:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=23)** So here on my Windows server, I'm going to start by opening up the Start menu, and I'm going to go down under Windows Administrative Tools.
>
> **[0:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=30)** I have already established a private CA within my organization here on my Windows machine.
>
> **[0:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=37)** And so from the Start menu, I'm going to start the Certification Authority tool.
>
> **[0:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=42)** When I configured my private CA, which is shown here on the left as being called MyOrgCAWindows, I configured this as an enterprise CA.
>
> **[0:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=53)** That means it's integrated with Microsoft Active Directory because this server is a domain controller.
>
> **[0:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=59)** You don't have to do that, but by virtue of having done that, I get the option of working with certificate templates, which I'll click over on the left.
>
> **[1:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=67)** On the right, I have some standard certificate templates that are made available automatically when I install this product.
>
> **[1:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=76)** So for a domain controller server, for a web server, for a computer, perhaps client authentication to a VPN or to an IPSec configured environment.
>
> **[1:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=88)** We've also got user certificates for encrypting file system or for secure email and all that stuff.
>
> **[1:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=95)** So we've got a bunch of built-in certificates, but there are many more that are shown here, and you can customize them.
>
> **[1:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=103)** That's where we're going with this.
>
> **[1:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=105)** So to do that, I'm going to right-click on Certificate Templates over on the left, and I'm going to choose Manage.
>
> **[1:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=111)** When I do that, it's going to open up a new window.
>
> **[1:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=114)** There's a new tool.
>
> **[1:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=115)** Now we're in the Certificate Templates console where we have an alphabetical listing of all of the available templates.
>
> **[2:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=122)** Notice there are many more shown here than were available to be used to issue certificates.
>
> **[2:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=127)** That's normal.
>
> **[2:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=128)** That's how this works out of the box.
>
> **[2:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=131)** Now, what I can do is I can customize certificates if I really want to, specifically certificate templates, I should say.
>
> **[2:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=138)** So let's say I want to have a customized web server template.
>
> **[2:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=142)** I can double-click on the Web Server certificate template here and browse through the options, and that's great, but I want to do my own thing.
>
> **[2:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=150)** I want to have my own settings in a web server certificate that's used when I issue web server certificates through this private CA.
>
> **[2:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=158)** So what I'll do is right-click on that built-in Web Server certificate template, and I will choose Duplicate Template.
>
> **[2:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=166)** It automatically opens up the properties of the new template.
>
> **[2:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=170)** And so if I were to go take a look, for instance, at General, I can give it a name.
>
> **[2:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=175)** I'm going to call this Custom Web Server Template.
>
> **[3:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=181)** Now, there are many options I can specify here that will be used when issuing a web server certificate from this template, like the validity period.
>
> **[3:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=189)** Here, it's set to two years.
>
> **[3:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=192)** So instead of a two-year default validity period for web server certificates, perhaps in our organization, we only want them valid for one year, so I can change that validity period here.
>
> **[3:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=204)** I've also got a number of other options.
>
> **[3:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=206)** Subject name is one of them.
>
> **[3:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=207)** What I can do here is determine what the subject name within the certificate will be.
>
> **[3:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=212)** For a web server that needs to be the server name.
>
> **[3:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=215)** So if people will connect to www.[site.com](https://site.com), that name has to be in the certificate.
>
> **[3:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=224)** So we can have that supplied in the request when the certificate is requested, or we can build it from Active Directory information, where we can choose, for example, the DNS name.
>
> **[3:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=237)** But in this case, I'm going to have it supplied in the request.
>
> **[4:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=240)** So anytime a technician requests a web service certificate, they're going to have to supply the subject name.
>
> **[4:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=248)** We can also specify other options, like issuance requirements, such as requiring certificate manager approval, so it will show up as a pending request until an admin goes in and approves it.
>
> **[4:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=261)** So we could do that type of thing as well.
>
> **[4:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=263)** If I go under Cryptography, we can specify the maximum key size.
>
> **[4:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=268)** If we want to change those options, if I go to Security over here, this is related to the Microsoft Active Directory domain environment, which users or computers are allowed to request certificates.
>
> **[4:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=283)** So for example, Authenticated Users is selected here and down below, anyone that's an Authenticated User in Windows is allowed to read this template.
>
> **[4:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=295)** However, we can also determine who should be allowed to enroll to request a certificate.
>
> **[5:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=301)** So I'm going to select, for example, my admin account, instructorazure07, and I'm going to turn on Enroll down below as well.
>
> **[5:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=311)** So if you want to be able to get a certificate issued from this template, you have to have at least the Enroll allow permission.
>
> **[5:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=319)** Auto enrollment is a separate configuration, so we're not going into that, but we're going to make sure that allow Enroll is set, and that's for my admin account, which I will use when requesting a server certificate.
>
> **[5:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=333)** So beyond many other options, this is the type of thing that we would configure within that custom certificate template.
>
> **[5:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=340)** So it shows up here, Custom Web Server Template.
>
> **[5:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=344)** If I close the Certificate Templates console, we're back in our standard Certification Authority tool.
>
> **[5:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=351)** However, even if I try to refresh my list of available certificates, I don't see the custom web server, and that's because what you now need to do on the left is right-click on Certificate Templates.
>
> **[6:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=364)** You must choose New, Certificate, Template to Issue, then select your Custom Web Server Template.
>
> **[6:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=372)** Now it will show up as being available here.
>
> **[6:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=375)** There it is, Custom Web Server Template.
>
> **[6:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=378)** So at this point, we've got a custom certificate template.
>
> **[6:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-microsoft-ad-cs-certificate-templates?u=76281980&t=382)** In another demo, we'll take a look at how to request a certificate based on that template.

> [!info]- Semantic Content
>
> **Exercise Files:** template (17)
> **Code Keywords:** private (3), let (2), this. (1), case, (1), new, (1)
> **UI Navigation:** right-click (3), double-click (1), go to (1)
> **Analogies:** for example (3), for instance (1), such as (1)
> **Env Vars:** pki (1), vpn (1), dns (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), configure (1)
> **CLI Commands:** make (1)

#### Configure a Linux OpenSSL certificate authority
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=0)** - [Instructor] We've talked about how a certificate authority, especially a root certificate authority, or CA, constitutes the top of the PKI hierarchy.
>
> **[0:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=10)** Now, what if we want to establish our own PKI hierarchy on the Linux platform?
>
> **[0:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=16)** What are the options?
>
> **[0:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=17)** Well, one option is to use OpenSSL.
>
> **[0:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=20)** So we're going to be using OpenSSL to establish a Linux certificate authority where we create our own PKI certificates.
>
> **[0:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=29)** But we'll get to the creation of certificates later.
>
> **[0:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=31)** In this video, the focus is going to be to get the private CA configured.
>
> **[0:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=36)** The first thing I'm going to do here in Linux is verify that I have OpenSSL installed.
>
> **[0:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=42)** With some Linux distributions, it's automatically there.
>
> **[0:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=45)** So I'm going to run sudo as a prefix because I'm going to be running privileged commands.
>
> **[0:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=50)** And one way to check this out is simply to try to install it, sudo apt install openssl, all one word together.
>
> **[0:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=59)** It's telling me that it's already installed and that it's already the newest version.
>
> **[1:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=65)** So having done that, what I can do is I can begin by generating a private key.
>
> **[1:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=71)** We know that when you're working with PKI certificates, you need a public and a private key pair.
>
> **[1:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=76)** So let me start with the private key.
>
> **[1:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=78)** I'll do that at the command line here by running sudo openssl genrsa, to generate an RSA key.
>
> **[1:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=89)** Now I'm going to encrypt this with -aes256 - out.
>
> **[1:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=95)** I want to call this file CAPrivateKey.key.
>
> **[1:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=102)** You can call the file anything you want, it doesn't have to end with .key.
>
> **[1:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=105)** And that file will be in the current directory, that's where it will be created.
>
> **[1:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=110)** And the last parameter here is simply 2048, 2048 bits in the key.
>
> **[1:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=117)** Okay, I'm going to press Enter.
>
> **[1:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=119)** Now, because I'm choosing to encrypt it with a AES-256, of course, I'm being asked for a passphrase because it is a private key file, and we know that those need to be protected unlike public keys, so I'll enter a passphrase and it asks me to verify it.
>
> **[2:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=135)** So I'll enter the same thing in here a second time.
>
> **[2:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=140)** And if I clear the screen and type ls, we've now got a file here called CAPrivateKey.key.
>
> **[2:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=148)** The other file I have here, otherinfo.ext, that file was already there, it's used for something different unrelated to what we're doing right now.
>
> **[2:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=156)** If I run the sudo cat command, the cat command allows me to view the contents of text files.
>
> **[2:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=163)** And if I specify my CAPrivateKey.key file, notice that what it's giving me back is the encrypted private key.
>
> **[2:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=172)** Okay. So that's the first order of business.
>
> **[2:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=174)** We need to have a private key as well as a public key if we want to work with a CA, if we want to establish a CA.
>
> **[3:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=181)** So the next thing we're going to do is actually configure or establish the private CA.
>
> **[3:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=190)** The command I'll use for that is sudo openssl req for request - new -x509,
>
> **[3:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=200)** remember that PKI certificates are also called X.509 certificates, -key.
>
> **[3:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=206)** Now I have to supply the private key, and I'm going to reference my CAPrivateKey.key file.
>
> **[3:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=212)** I want to use -sha256, secure hashing algorithm 256 for signing.
>
> **[3:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=219)** I want this to be good for 365 days, so I'll specify that with -days, that's when the certificate will expire, and -out.
>
> **[3:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=228)** I want the file to be called MyPrivateCA.pem.
>
> **[3:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=234)** So I'm going to go ahead and press Enter.
>
> **[3:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=236)** Because we're referring to the PrivateKey file, we're going to have to enter in the passphrase that we specified when we established it.
>
> **[4:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=242)** So I'm just going to go ahead and enter that because private keys need to be protected.
>
> **[4:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=248)** When you establish a root certificate authority, you will be prompted for things like I'm being prompted for here, like the country name, the two letter code.
>
> **[4:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=256)** So I'll put in CA for Canada.
>
> **[4:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=258)** The state or province, let's say Ontario.
>
> **[4:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=262)** The locality or city, I'll put in Toronto.
>
> **[4:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=265)** The organization name, maybe DemoTest.
>
> **[4:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=268)** The organizational unit, maybe IT.
>
> **[4:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=272)** The common name. Okay, well, the common name of what?
>
> **[4:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=275)** In this case it's going to be the common name of the certificate authority.
>
> **[4:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=279)** So I'll call it MyPrivateCA.
>
> **[4:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=284)** Email address.
>
> **[4:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=285)** Maybe I'll just put in user@[demotest.com](https://demotest.com).
>
> **[4:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=291)** And we've now established our private CA.
>
> **[4:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=294)** We've got a file here called MyPrivateCA.pem.
>
> **[4:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=298)** So this represents the certificate, including the public key for our CA.
>
> **[5:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=305)** Why don't we run sudo cat against that file?
>
> **[5:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=309)** So now what we're having is the certificate being shown when we run the cat command against that file, this is what it's supposed to look like.
>
> **[5:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=318)** Okay.
>
> **[5:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=319)** So now that we've got that done, the next thing that we might be interested in doing is figuring out how to install this trusted root certificate on a Linux host.
>
> **[5:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=329)** We've already seen how we can install a trusted root certificate in Windows.
>
> **[5:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=334)** But let's do it here in Linux, because if you're going to establish a private CA and then issue certificates from it, we have to bear in mind that by default, devices will not trust those signed certificates.
>
> **[5:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=346)** They only will if they trust the signer, the CA.
>
> **[5:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=350)** And so here's what we're going to do to get this going.
>
> **[5:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=353)** First of all, I'm going to copy, I'm going to run sudo cp copy the PrivateCA file, MyPrivateCA.pem, my certificate, to /usr/local/share/ca-certificates.
>
> **[6:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=374)** So I want to copy it into this directory.
>
> **[6:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=376)** This is the local Linux certificate store.
>
> **[6:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=380)** Now, there are a lot of different variations or distributions of Linux.
>
> **[6:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=384)** So specifically, depending on what version of Linux or distribution that you're using and which packages are installed will determine exactly where this file should go.
>
> **[6:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=393)** But this is the standard.
>
> **[6:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=395)** So let's go ahead and press Enter.
>
> **[6:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=398)** Of course, if you're using a GUI on top of Linux, there are ways to do it in there as well.
>
> **[6:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=402)** Next thing I need to do is run sudo update-ca-certificates.
>
> **[6:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=408)** That's all one command, each word separated with a dash.
>
> **[6:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=414)** All right. So now it's updated our list of certificates.
>
> **[6:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=417)** We can even do the following, sudo ls/ where did we put that?
>
> **[7:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=420)** Usr/local/share/ca-certificates.
>
> **[7:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=426)** And there is MyPrivateCA.pem.
>
> **[7:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=429)** Now, if you don't have access to commands such as the one we used to update the CA certificates, depending on your distribution of Linux, you might have to install a package such as sudo apt install.
>
> **[7:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=444)** It's called ca-certificates.
>
> **[7:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=447)** Now we have it installed, naturally, otherwise that command would not have worked.
>
> **[7:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=450)** But if you need to do that, you can.
>
> **[7:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-openssl-certificate-authority?u=76281980&t=453)** Okay, so at this point we have established a private root CA on our Linux host, and we've even installed the trusted root certificate on the host as well.

> [!info]- Semantic Content
>
> **Code Keywords:** private (13), public (4), let (4), protected (2), default, (1)
> **CLI Commands:** sudo (10), cat (4), apt (2), ls (2), cp (1)
> **Env Vars:** pki (5), rsa (1), aes (1), gui (1)
> **Prerequisites:** install (6), configure (1)
> **Analogies:** such as (2)
> **URLs:** [demotest.com](https://demotest.com) (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)

#### Configure an AWS Certificate Manager CA
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=0)** - [Instructor] In this demonstration, I'm going to be installing a private CA, so a private certificate authority, but I'm not going to do that on-premises.
>
> **[0:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=8)** I'm going to be doing it in the Amazon Web services, or AWS Cloud.
>
> **[0:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=13)** Remember, you might want to install your own private CA if you would like full entire control and configuration flexibility for the entire PKI hierarchy.
>
> **[0:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=24)** But remember, the downside is that when you start issuing certificates, say for websites from your private CA, there are no devices that will trust that certificate, at least not by default.
>
> **[0:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=35)** But we'll get into that a little bit later.
>
> **[0:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=38)** Let's get started here and let's establish a private CA.
>
> **[0:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=41)** So here in the AWS Management console, I'm going to search for the word certificate up at the top.
>
> **[0:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=47)** The service I'm interested in here is called Certificate Manager.
>
> **[0:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=51)** When I select that, I can then choose to go to the AWS private CA view, where if there are existing CAs, they will be shown.
>
> **[1:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=61)** But what I want to do here is create a private CA.
>
> **[1:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=64)** So I'm going to choose create a private CA.
>
> **[1:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=68)** From the mode options dropdown list, it can be a standard or general purpose CA, but if you just want to do it for short-lived certificates with the validity of up to seven days, you can go ahead and do that.
>
> **[1:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=79)** I don't want that, so I'll leave it on general purpose.
>
> **[1:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=83)** We can specify that we want to establish the root CA at the very top of the hierarchy.
>
> **[1:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=88)** But if you've already got a root CA created, under it you could choose to create a subordinate private CA, maybe for a specific business unit, for a project, for a region, whatever the case might be.
>
> **[1:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=102)** But here I want to route CA.
>
> **[1:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=106)** And so down below, I'll have to specify an organization name, an organizational unit, which could map to a department, for instance, a country name, a state or a province name, a locality name, and a common name.
>
> **[2:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=120)** So I'm going to go ahead and fill out those details now.
>
> **[2:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=125)** Once I've filled out those items down below, we've got the key algorithm for generating the public and private key pair for this CA set to RSA 2048.
>
> **[2:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=135)** That's fine.
>
> **[2:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=137)** Down below I can determine if I want to use a certificate revocation list, or a CRL, for certificate revocation options, or I could use OCSP.
>
> **[2:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=146)** I'm not going to enable either of those.
>
> **[2:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=149)** And down below at the very bottom, I just have to acknowledge that I'm going to be charged for this.
>
> **[2:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=154)** And so if you're testing this in the AWS Cloud, test it quickly.
>
> **[2:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=159)** But then when you're finished with it, remove the configuration so that you're not incurring charges unnecessarily when you're not actually using something.
>
> **[2:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=168)** Okay, I'm going to click to create CA button.
>
> **[2:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=172)** Now it's pretty quick.
>
> **[2:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=173)** It immediately states your CA was requested successfully.
>
> **[2:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=178)** Okay, so the status then shows as pending certificate.
>
> **[3:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=181)** What is it waiting for?
>
> **[3:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=183)** It's waiting for me to go under the Actions button in the upper right, and it's waiting for me to choose install CA certificate.
>
> **[3:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=191)** So I can see it's valid for a period of time.
>
> **[3:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=194)** And also I can, down below, specify the signing algorithm.
>
> **[3:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=198)** It's set to SHA256 RSA.
>
> **[3:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=201)** Bear in mind that when you issue certificates, the CA adds its digital signature to that certificate, which helps establish the chain of trust.
>
> **[3:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=211)** I'm okay with that option, so I'm going to choose confirm and install.
>
> **[3:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=216)** And now, instead of pending, the status of this CA is that it's active.
>
> **[3:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=221)** So when I go to my private certificate authorities view, if I click on that on the left, then we've got our new active CA shown here.
>
> **[3:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=229)** If I click on it to open up that item, then we have the details.
>
> **[3:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=234)** So the CA type is shown as a root CA.
>
> **[3:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=237)** We have the creation and the expiration for the CA.
>
> **[4:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=241)** We have the key as well as the signing algorithms shown here.
>
> **[4:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=245)** Down below, the subject details.
>
> **[4:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=248)** So for the locality, in this case, the city name of Toronto.
>
> **[4:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=252)** If I click on the CA certificate tab, I also have the certificate for this route CA, and I can even choose to export it to a file.
>
> **[4:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=262)** Because remember, if you use the CA, let's say, to issue a certificate to secure a web application, well, anyone connecting to that web app will get a message that it can't be trusted because their device will not trust the issuer of the certificate unless you install the trusted route certificate on those devices.
>
> **[4:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-an-aws-certificate-manager-ca?u=76281980&t=283)** So in any case, we have now established our own private CA in the Amazon Web Services Cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** private (12), let (3), case, (2), default. (1), public (1)
> **Env Vars:** aws (4), rsa (2), pki (1), crl (1), ocsp (1)
> **UI Navigation:** click on (3), go to (2), dropdown (1)
> **CLI Commands:** aws (4)
> **Prerequisites:** install (4)
> **Definitions:** is called (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 3. Acquiring Certificates

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Acquire a certificate using Microsoft AD CS
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=0)** - [Instructor] In this demonstration, we're going to be focusing on the acquisition of a certificate using the Windows Cert Manager tool.
>
> **[0:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=9)** Acquiring certificates can be done in many different ways, depending on whether you're going to a private CA or a public CA.
>
> **[0:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=17)** However, here in Windows, let's take a look at our environment.
>
> **[0:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=20)** On my Windows server, if I go to the Start menu, under Windows Administrative Tools, I can select Active Directory Users and Computers.
>
> **[0:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=29)** The server I'm using is a domain controller.
>
> **[0:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=32)** Now, it doesn't have to be, but if it's a computer joined to a Microsoft Active Directory domain, it makes it very easy to request certificates through that connection to the domain.
>
> **[0:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=45)** So I'm going to close down Active Directory Users and Computers.
>
> **[0:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=48)** We're just establishing that this machine is part of a domain.
>
> **[0:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=52)** What I would like to do is open up a command prompt on this host.
>
> **[0:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=57)** Now, within the command prompt, what I'm going to be doing is starting the MMC, or Microsoft Management Console, tool.
>
> **[1:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=66)** In here, I can go to File, Add/Remove Snap-ins.
>
> **[1:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=70)** And if I want to manage certificates, then I can choose Certificates.
>
> **[1:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=74)** So I'll select that and I'll click Add.
>
> **[1:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=78)** I'm interested in certificates related to the computer I'm sitting at doing this.
>
> **[1:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=83)** So not the user account I'm signed in with.
>
> **[1:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=86)** So, Computer Account, Next.
>
> **[1:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=88)** It's going to be for the local computer, not a remote computer over the network, but this one I am at.
>
> **[1:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=94)** So Local Computer, Finish, OK.
>
> **[1:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=97)** If I were to expand the left-hand navigator, under Certificates, under Personal, Certificates, I would have a reference to any existing certificates related to the local computer.
>
> **[1:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=111)** Now, in this particular case, this is a server where I have established a private certification authority.
>
> **[1:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=119)** It's called MyOrgCAWindows.
>
> **[2:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=122)** So that's why I've got a certificate there shown.
>
> **[2:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=126)** Now also, I've got a certificate issued to this server, that's automatic.
>
> **[2:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=132)** So I've got a private CA integrated with Windows, so active directory.
>
> **[2:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=138)** And so this server was issued a certificate.
>
> **[2:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=140)** If I click to open that up, it was issued to this server's DNS name by my private CA.
>
> **[2:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=148)** And the certificate has a validity period here of one year.
>
> **[2:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=153)** So that happened automatically.
>
> **[2:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=155)** But what I want to do in this case is I want to use this tool we're in, the Certificate Manager plugin tool, and I want to request a server certificate, a web server certificate.
>
> **[2:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=167)** So I'm going to do that by right-clicking on Certificates in the left-hand navigator.
>
> **[2:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=171)** I'll choose All Tasks.
>
> **[2:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=173)** Request New Certificate.
>
> **[2:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=176)** I'll then click Next.
>
> **[2:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=178)** I'm going to use the Active Directory Enrollment Policy because the server I'm sitting at is joined to an active directory domain.
>
> **[3:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=188)** So if I have a private CA that's integrated with Active Directory, and there are templates that I have access to, they will show up here.
>
> **[3:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=196)** When I click Next, here are the templates that show up.
>
> **[3:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=200)** Now in this case, I've got some built-in templates, Directory, Email Replication, Domain Controller, Domain Controller Authentication, and Kerberos Authentication.
>
> **[3:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=210)** They're showing as being available.
>
> **[3:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=213)** But if I go into my Start menu on this server, remember, this server happens to be where the private CA is hosted.
>
> **[3:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=221)** It doesn't have to be, but that's what this configuration is.
>
> **[3:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=224)** If I go to the Certification Authority tool on this host, there it is, MyOrgCAWindows, that's my private CA.
>
> **[3:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=233)** If I expand that on the left, and click Certificate Templates, I have a custom web server template shown here.
>
> **[3:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=239)** But when I go to request a certificate, it's not showing up here.
>
> **[4:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=245)** Well, that's usually a security permissions issue.
>
> **[4:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=249)** So what I'm going to do is go back into my Certification Authority tool, and we're going to fix the security settings for that template so that it does show up and is available.
>
> **[4:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=260)** So I'm going to right-click on Certificate Templates and choose Manage.
>
> **[4:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=265)** That opens up the Certificate Templates console, and I've got my custom web server template here.
>
> **[4:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=271)** If I double click on it to open up its settings, I can then go into the security for this particular template.
>
> **[4:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=278)** So I'll click the Security tab.
>
> **[4:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=280)** For authenticated users, which would include user accounts and computers, like computers joined to the domain.
>
> **[4:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=289)** And that's the issue we're having.
>
> **[4:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=290)** Our computer, because we're looking for a computer certificate, doesn't have the ability to enroll using this certificate template.
>
> **[4:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=299)** So for authenticated users, or I could add a computer group, or add that individual computer account here, but in this case, I'm going to select Authenticated Users and make sure that they can read this template and enroll, using it to get a certificate.
>
> **[5:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=313)** I'll click OK.
>
> **[5:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=315)** Let's go back into our cert manager tool.
>
> **[5:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=320)** I'm just going to cancel out of that screen and let's step through the motions again.
>
> **[5:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=323)** I'm going to right-click Certificates on the left, 'cause I want to request a web server certificate.
>
> **[5:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=329)** I'll choose All Tasks.
>
> **[5:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=331)** Request New Certificate.
>
> **[5:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=333)** Next, Next.
>
> **[5:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=335)** Notice now, the Custom Web Server Template shows up, but it does say, "More information is required to enroll for this certificate.
>
> **[5:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=342)** Click here to configure settings."
>
> **[5:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=345)** Okay, apparently what it needs here is the subject name.
>
> **[5:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=349)** This template is set up so that I have to supply the subject name here.
>
> **[5:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=354)** So we could specify, for example, the full distinguished name, the common name, all of these other items.
>
> **[6:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=362)** So what I want to do here is specify the common name.
>
> **[6:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=367)** And the common name here is going to be www.mysite.local.
>
> **[6:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=376)** I'll also add the alternative name, which is going to be a DNS name, www.mysite.local.
>
> **[6:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=384)** So the name that is embedded within the certificate here, the DNS name in this particular case, this needs to be what people are connecting to in order for the certificate to be trusted.
>
> **[6:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=396)** If they're connecting to a different name, yet this name is embedded in the certificate, that is a problem.
>
> **[6:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=403)** So I'm going to add the common name and I'm going to add the alternative name, and I'll click OK.
>
> **[6:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=409)** So we've got the Custom Web Server Template selected with the check mark.
>
> **[6:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=413)** Now I can choose Enroll.
>
> **[6:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=416)** The status is showing as Succeeded.
>
> **[6:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=418)** So let's check our work, what's the result here?
>
> **[7:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=420)** The result is that when we view the personal certificates for the local computer here, where we requested the certificate, the certificate was issued, www.mysite.local, from MyOrgCAWindows, that's the private CA.
>
> **[7:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=436)** If we double-click on that certificate, it has a validity period that will last for one year.
>
> **[7:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=442)** That will vary depending on the template used.
>
> **[7:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=445)** That comes from the template.
>
> **[7:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=447)** Let's go check the template for a second.
>
> **[7:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=449)** If we go into our Custom Web Server Template, notice that the validity period, indeed, here under the General tab in the template properties, is in fact set to a one year timeframe.
>
> **[7:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=464)** Also, notice here that when it comes to things like issuance requirements, it does not require manager approval.
>
> **[7:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=471)** That's why it happened so quickly.
>
> **[7:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=473)** It was pretty much immediate.
>
> **[7:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=475)** If we go to the subject name tab, in this template it requires the requester to supply the name in the request, which is what we had to do.
>
> **[8:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=484)** Let's close out of the Certificate Templates console here.
>
> **[8:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-certificate-using-microsoft-ad-cs?u=76281980&t=488)** If we were, from the private CA standpoint, to check issued certificates, so this is the Issued Certificates folder for my private CA, notice that we've got the requester name shown here, which of course is the server, and then we've got the template that was used to issue a certificate, which includes our Custom Web Server Template.

> [!info]- Semantic Content
>
> **Code Keywords:** private (10), let (6), case, (4), public (1), this. (1)
> **Exercise Files:** template (17)
> **UI Navigation:** go to (5), right-click (2), click on (1), double-click (1)
> **Env Vars:** dns (3), mmc (1)
> **Definitions:** is a  (3)
> **CLI Commands:** snap (1), make (1)
> **Tools:** command prompt (2)
> **Prerequisites:** configure (1), set up (1)

#### Acquire a web server certificate using OpenSSL
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=0)** - [Instructor] Okay, in this demonstration what I will be doing is acquiring a web server certificate using OpenSSL on Linux.
>
> **[0:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=9)** The first thing we should do is establish what we already have.
>
> **[0:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=13)** What I mean by that is here in Linux I'm going to type ls.
>
> **[0:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=17)** I am currently in the cert$ subdirectory.
>
> **[0:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=20)** This is a subdirectory I have created on my machine, in which I've got some certificate files and private key files.
>
> **[0:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=27)** I have a private CA called MyPrivateCA, and I've got the .pem file here.
>
> **[0:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=33)** That's the private CA certificate.
>
> **[0:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=35)** Its related private key is in a file here called CAPrivateKey.key.
>
> **[0:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=40)** Now we know that in PKI, if you want to get a web server certificate because you want to use TLS to secure the connection to that server, you need a certificate.
>
> **[0:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=51)** And so before you can have a certificate, it needs to be issued from a certificate authority.
>
> **[0:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=56)** And that's what we've got here in MyPrivateCA.
>
> **[1:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=60)** Okay, so I need to generate a private key and I want to encrypt it in a file for the server.
>
> **[1:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=69)** We already have the CA private key.
>
> **[1:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=70)** I want to do it for the web server certificate.
>
> **[1:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=76)** So I'm going to start with the sudo command prefix as the commands I will be issuing are elevated types of commands.
>
> **[1:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=83)** I need to have root permissions but I'm not signed in as root so therefore I'm using sudo; sudo openssl genrsa, to generate an RSA private key,
>
> **[1:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=95)** - aes256, that's what I want to encrypted with,
>
> **[1:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=98)** - out.
>
> **[1:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=100)** I would like the file in the current directory to be called www.demotest.world.key.
>
> **[1:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=107)** The file name can be whatever you deem as appropriate.
>
> **[1:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=110)** And 2048 bits in the key, that's the last parameter.
>
> **[1:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=113)** Enter!
>
> **[1:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=114)** Of course, I'm being asked to enter the pass phrase because we need to do that to protect private key files, in this case for a web server certificate that we eventually will acquire.
>
> **[2:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=128)** Okay, so I'll enter that in here.
>
> **[2:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=130)** Excellent.
>
> **[2:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=131)** If we do an ls, we now have our web server private key file.
>
> **[2:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=138)** But we need more than that.
>
> **[2:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=140)** Because what we need to do to acquire a certificate is we need to create a certificate signing request, a CSR.
>
> **[2:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=148)** There are many tools that do this for you automatically in the background while generating the private key but here we're seeing each individual step one at a time at the command line.
>
> **[2:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=158)** Which is not a bad thing when it comes to learning the details about how certificates work in the PKI hierarchy.
>
> **[2:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=166)** So the way I will create these certificate signing requests is with sudo openssl req, for request,
>
> **[2:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=175)** - new -key, and I'm going to specify my key file, the private key file, it's called www.demotest.world.key.
>
> **[3:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=184)** That's what we created in the previous command.
>
> **[3:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=187)** But what I want to result in now with -out is a file that contains the certificate signing request.
>
> **[3:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=194)** So I will call that file www.demotest.world.csr.
>
> **[3:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=200)** It's a good file name.
>
> **[3:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=201)** Now it's going to ask me for the pass phrase for the private key since I referenced the private key file.
>
> **[3:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=207)** So I'm going to go ahead and enter that in correctly.
>
> **[3:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=211)** Press Enter.
>
> **[3:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=212)** It's asking me for the details.
>
> **[3:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=214)** When you make a certificate signing request, whether you're doing it at the command line for a private CA like we are, or if you're trying to get a certificate from a publicly trusted CA out on the internet, one way or another, whether it's a web form or whether you generate the CSR the way we are and then provide that to the certificate authority, either way, you're going to have to specify details like the Country Name (2 two letter code).
>
> **[3:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=239)** So I'll specify that.
>
> **[4:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=241)** I'll specify some locality information.
>
> **[4:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=243)** In this case, the province of Ontario in Canada, the city of Toronto, the organization name, I'll fill in.
>
> **[4:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=251)** Also the organizational unit, for example, the IT department.
>
> **[4:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=256)** Now for the common name in this particular case, I need the FQDN, the fully qualified domain name, the DNS name of what I want to issue the certificate to.
>
> **[4:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=266)** Which is going to be www.demotest.world.
>
> **[4:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=274)** That's what people will be connecting to, for instance, if it's a public-facing website that users interact with.
>
> **[4:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=281)** The whole reason I'm doing this is because I would like to enable an HTTPS binding on a web server.
>
> **[4:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=287)** Well, you need a certificate to do that.
>
> **[4:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=290)** And the name in the certificate has to match what it's being connected to.
>
> **[4:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=294)** So I have to be careful about what I enter here.
>
> **[4:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=296)** It has to be correct.
>
> **[4:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=297)** All right, and then email address for a responsible user.
>
> **[5:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=302)** I'll just fill in a fictitious one and I'll press Enter.
>
> **[5:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=306)** Okay, then it says, "Please enter the following extra attributes to be sent with your certificate request."
>
> **[5:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=312)** It wants a challenge password.
>
> **[5:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=315)** Okay, I'll enter in a challenge password.
>
> **[5:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=319)** Depending on which certificate authority you're doing, they would have to know that in order to use the CSR.
>
> **[5:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=325)** We could put in an optional company name.
>
> **[5:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=327)** I'm not going to do that.
>
> **[5:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=329)** And if I clear the screen and type ls, what we now have is a certificate signing request, a CSR file.
>
> **[5:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=338)** Now that we have the certificate signing request, what would happen is the certificate authority, that entity, they would normally do their due diligence to make sure that the information appears to be correct, that it's a legitimate company.
>
> **[5:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=353)** Maybe require some confirmation through email, perhaps even through a phone call.
>
> **[5:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=358)** If you are doing this on the internet and you are opting for an extended validation type of certificate, then the CA will have to do a lot of due diligence, again to make sure that the company name exists and is registered, for example.
>
> **[6:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=374)** But here it's all a private CA internally, so none of that has to happen.
>
> **[6:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=378)** But what we need to do now, because our goal is to have a server certificate, so we can use TLS to secure the connection, we need to actually request the certificate from the CSR, the certificate signing request file.
>
> **[6:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=393)** Okay, let's do it.
>
> **[6:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=396)** Now just before we do that, I just want to reference a file I have here called otherinfo.ext.
>
> **[6:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=403)** The file can be called anything, that's not important, but what's inside it is important.
>
> **[6:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=407)** So I'm going to run sudo cat and we're going to take a look at that file.
>
> **[6:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=412)** There's not very much in here.
>
> **[6:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=414)** So we've got a couple of directives such as authorityKeyIdentifier, we've got basicConstraints, keyUsage, such as using keys for digital signatures, nonRepudiation, keyEncipherment and so on.
>
> **[7:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=429)** But what we're really interested in in this file is the subjectAltName.
>
> **[7:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=435)** You can have multiple names.
>
> **[7:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=437)** Down below, I have an [alt_names] section.
>
> **[7:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=440)** The heading of that section is enclosed in square brackets.
>
> **[7:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=443)** That's the format this file must be in for us to actually generate the certificate using OpenSSL.
>
> **[7:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=450)** So, I've got the first name here, www.demotest.world.
>
> **[7:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=456)** You can have more than one name here but this name of course is really what needs to match what's being connected to.
>
> **[7:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=462)** Otherwise, if people are connecting to a website for instance and the name doesn't match, the name they're connecting to doesn't match what's here, then they're going to get a security warning message in their web browser.
>
> **[7:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=473)** Okay, so that file exists because we're going to reference it here on the command line in just a moment.
>
> **[8:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=481)** So our command will be sudo openssl x509
>
> **[8:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=487)** - req, for request,
>
> **[8:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=490)** - in.
>
> **[8:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=491)** Now for the file I specify for the -in parameter, this is going to be the certificate signing request.
>
> **[8:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=499)** So www.demotest.world.csr, in our case.
>
> **[8:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=504)** Then I have to tell it the CA I want to use to digitally sign and issue the certificate.
>
> **[8:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=510)** You might have multiple private CAs.
>
> **[8:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=512)** So -CA MyPrivateCA.pem, that's the file,
>
> **[8:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=517)** - CAkey.
>
> **[8:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=519)** You need to reference the CA private key file to digitally sign a certificate that is issued from that CA.
>
> **[8:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=526)** So, because we're referring to a private key file here, we're going to be prompted for the pass phrase for it.
>
> **[8:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=532)** Of that, we can be sure.
>
> **[8:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=534)** Then -CAcreateserial.
>
> **[8:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=537)** Because the CA can issue many certificates and each certificate gets a unique serial number, the CA needs to track or should track which serial numbers it has already used.
>
> **[9:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=549)** So that's why I'm using -CAcreateserial -extfile.
>
> **[9:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=554)** There's the otherinfo.ext file which contains the subject alternative names, the DNS names, in our certificate or that will be in our certificate,
>
> **[9:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=565)** - out.
>
> **[9:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=566)** The name of the certificate file I want to create is www.demotest.world.pem, or if you want to call it CRT for certificate, it doesn't matter,
>
> **[9:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=577)** - days 365.
>
> **[9:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=579)** I want this server certificate to expire in one year.
>
> **[9:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=583)** So the certificate would have to be renewed before that happens.
>
> **[9:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=586)** Otherwise it will no longer be able to be used and you'll have to go through the whole certificate signing request process again.
>
> **[9:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=593)** I'll press Enter.
>
> **[9:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=595)** All right, of course enter the pass phrase for the CAPrivateKey.
>
> **[9:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=599)** So I'll go ahead and enter that in hopefully correctly.
>
> **[10:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=604)** And it looks like it worked.
>
> **[10:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=606)** Now we can verify this.
>
> **[10:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=607)** If I do an ls in the current directory, we now have our server, web server certificate file.
>
> **[10:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=615)** It's called www.demotest.world.pem.
>
> **[10:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=622)** If it's not already done, I can install an Apache web server on this Linux host with sudo apt install apache2.
>
> **[10:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=632)** I've already got it installed so I don't have to install it.
>
> **[10:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=635)** Now what I want to do at this point is I want to edit the website config file to tell it to use my PKI certificate, the one we just generated.
>
> **[10:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=646)** So I'll use sudo nano, nano is a built-in text editor.
>
> **[10:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=650)** And I'm going to refer to /etc/apache2/sites-enabled/000-default.conf.
>
> **[11:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=660)** That's just the config file for the default website.
>
> **[11:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=664)** I've already edited this so that the virtual host is set to use port 443, an HTTPS connection.
>
> **[11:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=671)** Instead of port 80, which is only HTTP.
>
> **[11:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=674)** We want HTTPS, we want to use TLS to secure that connection.
>
> **[11:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=679)** The other things I've done here is added a few directives.
>
> **[11:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=682)** Even though it says SSL, really, we're using TLS.
>
> **[11:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=687)** So SSLEngine is on the SSLCertificateFile.
>
> **[11:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=691)** I am specifying my web server certificate.
>
> **[11:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=695)** Also, I'm specifying my web server certificate private key file and also the private CA certificate file.
>
> **[11:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=705)** All right, so that's what I've specified here in this config file.
>
> **[11:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=708)** So I'll press Ctrl X to get out.
>
> **[11:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=711)** And I want to make sure that the web server's running so I can run sudo service apache2 status.
>
> **[11:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=719)** And it's active and running, as shown here.
>
> **[12:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=722)** So that means that we've got an active web server that is using our certificate.
>
> **[12:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=727)** Let's test out the connection to it from a web browser.
>
> **[12:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=731)** Actually, there is one thing we should check before we do that.
>
> **[12:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=734)** And that would be to make sure that our Apache web server running on Linux is not using SSL, but instead is only using TLS.
>
> **[12:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=742)** Ideally TLS version 1.3.
>
> **[12:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=745)** For that, we can use the nano command to open up /etc/apache2/mods-available/ssl.conf.
>
> **[12:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=755)** So what I want to do then is get down to the section, let's see here, where we can determine what is supported on the server.
>
> **[12:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=763)** Here we are, SSLProtocol all.
>
> **[12:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=767)** So that means all SSL protocols are on.
>
> **[12:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=770)** But after that, we have -SSLv3.
>
> **[12:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=774)** In other words, we don't want to support SSLv3.
>
> **[12:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=778)** You could change this.
>
> **[13:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=780)** For instance, what you could do is say, okay, what I want to do is I want to disable all, so -all +TLSv1.3.
>
> **[13:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=792)** I only want to support TLS version 1.3 for all the virtual hosts on the web server.
>
> **[13:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=798)** Interesting!
>
> **[13:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=799)** Ctrl X.
>
> **[13:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=800)** To save the modified buffer?
>
> **[13:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=801)** Yes, Enter.
>
> **[13:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=803)** I've now written to that file with that change.
>
> **[13:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=807)** Okay, so just to be safe, and you should do this whenever you make those types of changes, you could of course restart the web server.
>
> **[13:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=817)** I can do that with sudo service apache2 restart.
>
> **[13:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=821)** Now it wants me to enter the pass phrase for the private key, the web server private key.
>
> **[13:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=827)** So I'll enter in that pass phrase.
>
> **[13:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=831)** And after that, the web server will be up and running using the certificate.
>
> **[13:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=835)** Now let's go to the browser and test the connection over HTTPS.
>
> **[14:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=842)** Okay, so from another computer, it happens to be a Windows computer, I've used the Microsoft Edge web browser to navigate to [https://www.demotest.world](https://www.demotest.world).
>
> **[14:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=853)** Now it says it's not secure.
>
> **[14:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=855)** Well, why would that be?
>
> **[14:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=856)** It's because I don't have the trusted root certificate installed for the CA that issued that certificate.
>
> **[14:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=862)** We already know how to do that in Windows, so we're not going to focus on that.
>
> **[14:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=864)** I do want to click on "Not secure."
>
> **[14:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=867)** And let's see, let's click on, "Your connection to this site isn't secure."
>
> **[14:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=871)** I'll click the little certificate icon.
>
> **[14:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=874)** Indeed, here we go.
>
> **[14:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-server-certificate-using-openssl?u=76281980&t=875)** We've got our demotest.world certificate, which is being used by our web server.

> [!info]- Semantic Content
>
> **Code Keywords:** private (22), pass (6), let (6), case, (2), this. (2)
> **Env Vars:** tls (7), csr (5), https (4), pki (3), ssl (3)
> **CLI Commands:** sudo (10), make (6), ls (4), apache (2), cat (1)
> **Speakers:** - out (2), - [instructor] (1), - aes256 (1), - new (1), - req (1)
> **Code Identifiers:** authoritykeyidentifier (1), basicconstraints (1), keyusage (1), nonrepudiation (1), keyencipherment (1)
> **Analogies:** for instance (3), for example (2), such as (2)
> **Definitions:** is a  (4), means that (1), in other words (1)
> **Tools:** command line (3)

#### Acquire a public CA certificate
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=0)** - [Instructor] In this video, we're going to examine what it would take to acquire a web server certificate from a public certification authority.
>
> **[0:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=9)** Now, there are many public CAs out there, and the benefit of getting a web server certificate from them as opposed to a private internal CA, is that it will automatically be trusted by devices.
>
> **[0:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=22)** So, for example, if you are setting up a public-facing web application or website, that means anyone in the world might connect to it, in order for them to trust the site or for their devices to trust your site, you're going to need to have a certificate issued from a public CA, because you can't really install the trusted root certificate for your private CA on everyone's computer around the world.
>
> **[0:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=46)** That's just crazy and doesn't make any sense at all.
>
> **[0:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=49)** So, there are plenty of times this will be important.
>
> **[0:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=52)** So, in this example, I happen to be using GoDaddy, so, I'm looking at the SSL certificate options.
>
> **[1:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=60)** Now, we also have other choices here, like managed SSL.
>
> **[1:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=63)** Managed services mean that everything is taken care of by the company, in this case GoDaddy.
>
> **[1:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=70)** So, the issuance of the certificate, the installation of it on your server, making sure it's renewed before it expires, all the stuff that we would normally do as IT technicians working with PKI and TLS.
>
> **[1:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=84)** So, I don't want that.
>
> **[1:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=85)** We could also opt for a wild card certificate.
>
> **[1:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=88)** Now, instead of having a separate web server certificate to secure communications, let's say for www.demotest.world and also sales.demotest.world, that would be two certificates or more if you have more names and more servers.
>
> **[1:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=105)** So, what we can do is instead acquire a wild card certificate that could be used for everything under demotest.world.
>
> **[1:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=114)** However, that doesn't really apply here.
>
> **[1:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=116)** So, I'm going to go back to my SSL certificate options and just scroll down.
>
> **[2:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=121)** Another aspect of acquiring a certificate from a public CA is how much validation they do on you to make sure that you or your organization are legitimate and should be given a certificate.
>
> **[2:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=135)** And that's why we have options here for domain validation versus organizational validation or extended validation and the prices change accordingly.
>
> **[2:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=146)** In the description, we're being told that different levels of validation might be required, higher levels of validation for organization, so that user devices will trust the web application or the website.
>
> **[2:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=160)** So, what I would then do is click Add to Cart and select the appropriate options for the number of websites to protect, whether I want a wild card certificate, the term, whether the certificate is valid for one year, three years, whether I want the organization, in this case, GoDaddy, to install the certificate.
>
> **[3:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=180)** However, down below we get a detailed explanation of how this works.
>
> **[3:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=185)** So, it says five steps to consider if you manually install your SSL certificate.
>
> **[3:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=190)** Let's assume we would.
>
> **[3:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=191)** So, you would go into step one, request the SSL, which is what we're doing.
>
> **[3:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=196)** That really should say request the certificate, but it's fine.
>
> **[3:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=200)** So, you specify your domain name and the type of web server that's hosting the site.
>
> **[3:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=206)** So, whether it's an IIS or an NGINX or an Apache web server, whatever it is, and then your DNS domain name.
>
> **[3:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=214)** Now, once you do that in step two, GoDaddy and pretty much all public CAs will need you to prove, to verify that you control the domain.
>
> **[3:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=224)** For example, by asking you to create specific types of DNS records in the zone.
>
> **[3:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=232)** Once you do that, then you will have proven, of course, that you own that domain.
>
> **[3:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=236)** Then you'll be able to download SSL certificates.
>
> **[4:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=240)** You'll be able to install them on your server and then redirect HTTP if you wish to HTTPS.
>
> **[4:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=247)** So, if people try to connect over HTTP, it'll just automatically redirect them.
>
> **[4:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=250)** The steps on how to do that will vary depending on the web server you're using and the operating system platform it's on.
>
> **[4:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-public-ca-certificate?u=76281980&t=258)** So, once you've completed this, you will have a publicly issued web server certificate that will be trusted by all devices around the world.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (6), dns (2), http (2), pki (1), tls (1)
> **Code Keywords:** public (6), private (2), let (2), case, (1), this, (1)
> **CLI Commands:** make (2), nginx (1), apache (1)
> **Prerequisites:** install (4)
> **UI Navigation:** scroll down (1), select the (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Install private CA certificates
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=0)** - [Instructor] In this demonstration, we're going to take a look at how to make sure client devices trust certificates issued by a private CA.
>
> **[0:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=10)** The problem here is that when you decide to set up a private CA, it means you're setting up your own entire PKI hierarchy, let's say within your organization, and from that CA, and you might even configure subordinate CAs, whatever the case is, you are issuing certificates from your private PKI hierarchy.
>
> **[0:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=29)** Now, devices will not trust those certificates by default, so we have to figure out how to make sure that they do trust it.
>
> **[0:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=38)** The way that we're going to do that is first begin by looking at what we have in place.
>
> **[0:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=43)** I am sitting at the server where that private CA is hosted.
>
> **[0:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=47)** That's not necessary for this, but from a demonstration purpose, perspective, we're going to go take a look at it here so we know what all the moving parts are.
>
> **[0:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=56)** On my server, I'm going to go to the Start menu and from Windows Administrative Tools, I'm going to go into Certification Authority.
>
> **[1:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=64)** On the left, here's my private CA.
>
> **[1:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=67)** It's called MyOrgCAWindows.
>
> **[1:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=71)** I'm going to right-click on that CA and choose Properties.
>
> **[1:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=76)** Here, I can choose to view the certificate for the CA.
>
> **[1:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=80)** So, it was issued to the CA by that same CA.
>
> **[1:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=85)** This is a self-signed CA certificate, and it's got a validity period shown down below.
>
> **[1:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=91)** So it, like any certificate, will eventually expire.
>
> **[1:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=95)** If I go to the Details tab, of course, I can read the details about the items in the certificate, like the signing algorithm because it will sign certificates that it issues, the public key details and whatnot.
>
> **[1:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=109)** But what I really want to do here is I want to click Copy to File.
>
> **[1:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=112)** In other words, I want to export the Trusted Root Certificate for this CA.
>
> **[1:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=118)** That's going to include the public key, not the private key.
>
> **[2:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=122)** I need this because I need that file to install it on client devices so that they trust certificates that this CA issues.
>
> **[2:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=131)** It's part of establishing the chain of trust.
>
> **[2:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=133)** As we've said before, if you trust the CA issuer of certificates, then by extension, you trust all the certificates that it issues.
>
> **[2:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=142)** I'm going to choose Copy the File.
>
> **[2:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=144)** That starts the Certificate Export wizard.
>
> **[2:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=146)** I'll click Next.
>
> **[2:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=147)** You have a number of formats you can use for the exported file.
>
> **[2:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=151)** I'll just go with the standard DER encoded binary X.509.
>
> **[2:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=156)** I'll click Next.
>
> **[2:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=157)** File name.
>
> **[2:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=158)** Well, why don't we put this, let's say, in our Downloads folder, and I'm going to call it PrivateCA_TrustedRoot_Cert.
>
> **[2:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=172)** It can be called anything you want it to be called, and you're going to need to make sure that this file is somehow installed on all client devices.
>
> **[3:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=181)** Whether you put this on a shared folder on the network and they go and install it manually, we'll see how to do that in a moment, or whether you have an automated solution such as through Windows Group Policy in an active directory domain to get that installed.
>
> **[3:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=195)** Whatever the case is, this file needs to be installed on client devices, so they trust certificates issued from the private CA.
>
> **[3:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=203)** I'll click Save. I'll choose Next, Finish.
>
> **[3:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=206)** The export was successful. So what do we do now?
>
> **[3:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=211)** Well, if we were to manually go to a client device, when I say client device, I mean, technically it could be a server OS, it's a client, meaning that it needs to make a connection, let's say, to a secured website using a certificate issued from the private CA.
>
> **[3:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=227)** If I go into my Downloads folder, there's the PrivateCA_TrustedRoot_Cert.
>
> **[3:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=233)** By double clicking that we can then choose, on the Windows platform, to Install Certificate.
>
> **[3:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=239)** This is how we do it manually.
>
> **[4:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=241)** Now, we can do it for the Current User, for the Local Machine, regardless of who signs in.
>
> **[4:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=246)** That's what I want. I'll click Next.
>
> **[4:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=250)** Okay, it will automatically select the appropriate certificate store, that's fine.
>
> **[4:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=255)** Next, and Finish.
>
> **[4:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=258)** Okay. The import was successful.
>
> **[4:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=260)** This computer will now trust certificates issued by the private CA.
>
> **[4:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=265)** Let's explore that a little bit just for fun.
>
> **[4:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=267)** Let's say on this client computer, and again, I'm calling it the quote, unquote client computer for this part of the demo.
>
> **[4:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=276)** Let's go into the web browser.
>
> **[4:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=278)** In this case, Microsoft Edge. Doesn't have to be Edge.
>
> **[4:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=281)** Because from within here, this is one way that we can take a look at the Trusted Certification Authorities that this machine will trust.
>
> **[4:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=289)** So I'll click the three dots context button up at the top here, and I'm going to go down and take a look at the Settings here in Microsoft Edge.
>
> **[4:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=298)** In the left-hand navigator here, I'll choose Privacy, search, and services, because over on the right, if I scroll down, I will eventually come across, under the Security section, Manage certificates.
>
> **[5:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=312)** Okay, I'll click on that.
>
> **[5:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=314)** And I'm interested in Trusted Root Certification Authorities.
>
> **[5:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=318)** Here we have an alphabetical list of CAs that are trusted by this machine.
>
> **[5:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=324)** Most of these, of course, are public CAs so that any certificates issued, let's say, from DigiCert, will be trusted on this machine.
>
> **[5:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=333)** But what about our private CA?
>
> **[5:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=334)** Let's press the letter M to jump to Ms, and as we go further down, there it is.
>
> **[5:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=340)** There's the MyOrgCAWindows certificate.
>
> **[5:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=345)** That's the one that we exported and then double clicked to install.
>
> **[5:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=350)** When we did that, it added it here.
>
> **[5:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=352)** Because this certificate is here, I'll just double click to open it up here, it means that any certificates issued by this CA will be trusted on this machine.
>
> **[6:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/install-private-ca-certificates?u=76281980&t=363)** Whether the certificate is going to be for VPN authentication, for web server authentication, for whatever it's being used for, it will be trusted now.

> [!info]- Semantic Content
>
> **Code Keywords:** private (10), let (8), public (3), this, (2), default, (1)
> **UI Navigation:** go to (3), right-click (1), scroll down (1), click on (1)
> **Prerequisites:** install (4), set up (1), configure (1)
> **CLI Commands:** make (4)
> **Env Vars:** pki (2), der (1), vpn (1)
> **Definitions:** is a  (1), in other words (1), means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Generate certificates using Microsoft Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=0)** - [Instructor] There are a number of different ways that we can acquire a PKI certificate.
>
> **[0:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=5)** In this particular demo, we're going to take a look at how to generate certificates using Microsoft Azure.
>
> **[0:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=13)** Now in the Microsoft Azure Cloud, we can use the GUI portal administrative tool.
>
> **[0:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=18)** I've already signed in to portal.[azure.com](https://azure.com).
>
> **[0:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=22)** The first thing we need to consider is if we want to generate certificates here in the Azure Cloud, we can do that quite easily, but we're going to need a key vault first.
>
> **[0:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=33)** Now a key vault is a resource that you create in your Azure subscription, and it serves as a centralized cloud-based secure storage location for secrets such as certificates.
>
> **[0:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=46)** You can have a variety of different services then that reach into the key vault to use that certificate, whether that certificate is used for VPN authentication, whether it's used to secure HTTPS connections to a web server, whatever the case is.
>
> **[1:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=63)** So let's start by creating a key vault, and then we'll generate a PKI certificate in the key vault.
>
> **[1:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=70)** So I'm going to start here in the Azure Portal by clicking create a resource.
>
> **[1:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=74)** What do I need to create here, a certificate? No.
>
> **[1:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=77)** First I need to create a key vault, within which I will then create the certificate.
>
> **[1:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=82)** So I'm going to choose key vault and I will select the key vault service offering from Microsoft, and I'll click create.
>
> **[1:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=90)** When you create a resource, when you create an item in your Azure subscription in the cloud, you specify a resource group to create it in.
>
> **[1:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=99)** A resource group is nothing more than as it implies by its name, it's a way to group cloud resources that are related together.
>
> **[1:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=108)** So for instance, if this key vault will be used for a project we're creating called Project A, and it's going to involve virtual machines and websites and all that, we could create a resource group called Project A and then create all of our cloud stuff for Project A in that resource group.
>
> **[2:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=127)** You don't have to do it that way, but that's what I'm going to do, create new.
>
> **[2:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=131)** I want to create a resource group called Project A.
>
> **[2:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=135)** And the key vault here will be called kveast123456.
>
> **[2:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=145)** So it needs to be a unique key vault name.
>
> **[2:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=147)** So that's going to be created in the Project A resource group.
>
> **[2:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=149)** East US region. Standard is fine.
>
> **[2:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=152)** I'm not going to change anything else here in terms of the soft delete, so how long to retain things like deleted vaults, I can reduce that, for example, down to seven days, whatever the case might be.
>
> **[2:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=165)** Once I've specified those details, I can then click review and create.
>
> **[2:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=170)** It'll validate my selection here. We'll give it a moment.
>
> **[2:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=173)** It looks good, no error messages. Let's create the vault.
>
> **[2:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=176)** So I'm going to click the create button to do that.
>
> **[3:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=180)** So we're creating a key vault, which is simply a resource or an object in our Azure subscription.
>
> **[3:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=187)** Now once that's done, within it, I can configure secrets like certificates.
>
> **[3:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=193)** You can have more than one key vault if you really want to, for example, for different admin teams, different projects, different regions.
>
> **[3:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=201)** But in this case, we're just going to have this single key vault.
>
> **[3:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=205)** So the deployment is in progress. Now it's complete.
>
> **[3:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=209)** So from here, we can now choose to go to resource, in this case, to go into the properties of the key vault.
>
> **[3:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=215)** So we are placed now in the properties of our key vault.
>
> **[3:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=219)** In the left hand navigator, if I go down to certificates, the problem is it says this operation is not allowed by RBAC.
>
> **[3:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=228)** That stands for Role-Based Access Control.
>
> **[3:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=231)** In other words, you don't have permissions to do this despite the fact that you just created the key vault.
>
> **[3:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=236)** It's not a problem.
>
> **[3:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=237)** If I were to take a look down under settings on the left under access configuration, the permissions model here is set to Azure Role-Based Access Control.
>
> **[4:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=247)** That's kind of what that message was implying.
>
> **[4:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=249)** So to solve the issue, let's get right to it.
>
> **[4:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=251)** I'm going to scroll up and on the left, still in the properties of the key vault, I'm going to click access control IAM.
>
> **[4:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=257)** This is where you set permissions to this resource to, in this case, the key vault.
>
> **[4:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=261)** So I'll click access control IAM, on the right, I'm going to click add, add role assignment.
>
> **[4:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=267)** I have to give myself permissions to manage this vault, or at least to work with certificates.
>
> **[4:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=273)** So I'm going to filter the list of roles by the word vault.
>
> **[4:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=278)** I want to make sure I have full access to everything in the vault, not just certificates.
>
> **[4:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=282)** So I'm going to grant myself the Key Vault Administrator role.
>
> **[4:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=285)** I'll select that. I'll click next.
>
> **[4:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=288)** For user, group, or service principle, I will choose select members.
>
> **[4:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=293)** And what I want to do here is select my account.
>
> **[5:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=300)** Now once I've selected my account here, I'll just click select.
>
> **[5:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=304)** I can then choose review and assign twice, and that should be it.
>
> **[5:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=310)** So if I go to role assignments on the right to check my work, I've got a role assignment here.
>
> **[5:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=316)** If we go further down through the list, we've got all the different types of roles that would apply.
>
> **[5:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=321)** But the Key Vault Administrator role is showing here having been assigned to my account at this resource, which is the key vault.
>
> **[5:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=329)** Now if I go to the certificates view, we no longer get the message, we have the appropriate permissions.
>
> **[5:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=334)** So let's get to the point.
>
> **[5:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=336)** We want to create a certificate here.
>
> **[5:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=338)** I'm going to choose the generate import button, because from the method of certificate creation dropdown, notice you could actually import an existing certificate file if you've got it, but I don't.
>
> **[5:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=349)** So I'm going to choose generate.
>
> **[5:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=351)** The certificate here is going to be called MyCert1.
>
> **[5:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=356)** It's going to be a self-signed certificate here in Azure.
>
> **[6:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=360)** But if you've pre-configured it already, you can actually use what's called an integrated CA.
>
> **[6:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=366)** You would have had to have configured another CA that would integrate here.
>
> **[6:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=370)** It could even be a public CA.
>
> **[6:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=373)** However, here I'm just going to go with the self-signed certificate.
>
> **[6:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=376)** The subject name will be CN or common name equals www.mysite.local.
>
> **[6:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=387)** The validity period here for the certificate will be 12 months or one year.
>
> **[6:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=392)** For DNS names, I'm just going to go in there and I'm going to type in the same name, www.mysite.local.
>
> **[6:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=400)** This has to match the website that it's going to be used for.
>
> **[6:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=405)** Very important.
>
> **[6:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=406)** Once I've added that DNS name, I'll click OK in that screen, and then I'll click create.
>
> **[6:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=412)** In the certificates view, I can click the generate or import button.
>
> **[6:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=416)** From the method of certificate creation dropdown, I can choose to import the certificate if I've already got a certificate file, but I don't.
>
> **[7:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=425)** So I'm going to choose generate.
>
> **[7:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=427)** For the certificate name, I'm going to call it MyCert.
>
> **[7:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=431)** It's going to be a self-signed certificate, but I could choose from an integrated or non-integrated CA.
>
> **[7:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=439)** That's a separate configuration, and you might even have a public CA linked to this, but in this case, I'm just going to leave it as a self-signed certificate.
>
> **[7:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=448)** The subject name is going to be CN or common name equals demotest.world.
>
> **[7:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=458)** This is an external DNS domain name that I actually own, so we'll be using that later when we want to create an HTTPS binding for an Azure host web app.
>
> **[7:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=469)** For now, we're just setting this up here.
>
> **[7:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=473)** I'm going to click on the DNS names link here, because I want to add the same thing, demotest.world.
>
> **[7:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=479)** You have to make sure that whatever is in DNS name here matches what people will be connecting to, such as maybe through a web browser when they type in a URL, the name they connect to has to match the name in the certificate.
>
> **[8:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=493)** I'll click OK over on the right and then I'll click create.
>
> **[8:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=497)** So after a moment, the certificate will show up here.
>
> **[8:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=500)** There it is, MyCert. Currently, the status is disabled.
>
> **[8:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=504)** You just have to give it a minute or two.
>
> **[8:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=506)** We can keep clicking the refresh button here.
>
> **[8:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=509)** After a moment, it will be an available certificate.
>
> **[8:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=514)** And after clicking refresh a recent time, now my search shows up as being an enabled certificate.
>
> **[8:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/generate-certificates-using-microsoft-azure?u=76281980&t=520)** So we've now created a certificate within an Azure key vault that can be used by a variety of different services.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (4), self (4), public (2), new. (1)
> **Env Vars:** dns (5), pki (2), https (2), iam (2), gui (1)
> **UI Navigation:** go to (3), dropdown (2), select the (1), scroll up (1), click on (1)
> **Analogies:** such as (2), for example (2), for instance (1)
> **Definitions:** is a  (1), stands for (1), in other words (1), is an  (1)
> **CLI Commands:** make (2)
> **URLs:** [azure.com](https://azure.com) (1)
> **Tools:** azure portal (1)


### 4. PKI Certificate Usage

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Configure a Windows website certificate
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=0)** - [Instructor] Let's take a look at how we would configure an HTTPS binding for a Microsoft IIS web server.
>
> **[0:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=8)** HTTPS, of course, allows us to have a secured connection between any other device connecting to the web server, so that means encryption, it means authentication of those network messages.
>
> **[0:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=21)** But in order for that to work, we need to have a certificate set up for that web server, and we have to configure an HTTPS binding to use that certificate.
>
> **[0:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=32)** Let's take a look at how this works.
>
> **[0:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=34)** The first thing we have to do here on our Windows server is make sure we've got a web server stack installed.
>
> **[0:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=40)** From the Start menu on my Windows server, I'm going to go into Server Manager.
>
> **[0:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=45)** You can use the Server Manager GUI as a method of installing server components, like a web server.
>
> **[0:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=51)** You don't have to do it this way, but that's how I'm going to do it here.
>
> **[0:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=55)** So, here in Server Manager, I'll click the Add roles and features link.
>
> **[1:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=60)** I'll just keep clicking Next until I get to the point where I'm asked to select the server roles I want to install on this local server.
>
> **[1:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=68)** I'm going to scroll down and in the W's I'm going to turn on the check mark to the left of Web Server IIS.
>
> **[1:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=75)** IIS is Internet Information Services, that's Microsoft's standard web server stack.
>
> **[1:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=82)** It asks if I want to install the management tools.
>
> **[1:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=84)** Of course, that sounds good.
>
> **[1:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=86)** I'll click Add Features and I'll click Next.
>
> **[1:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=89)** There's nothing I want to add on the Features screen, so I'll just continue clicking Next.
>
> **[1:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=94)** I'll keep going through this and I'll just click Install.
>
> **[1:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=98)** There are no special web server components I want, so I've just accepted the defaults.
>
> **[1:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=103)** Now, the default also means that we will have a default sample website, but not over HTTPS, just over HTTP.
>
> **[1:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=114)** Okay, so the feature installation has completed, let's click Close.
>
> **[1:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=118)** What that means is either from the Tools menu, I can select Internet Information Services IIS Manager to manage the website.
>
> **[2:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=127)** I'll just close out a Server Manager.
>
> **[2:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=129)** I also could do the same thing by going to the Start menu and under Windows Administrative Tools in the I's, I'll find the exact same thing.
>
> **[2:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=137)** Internet Information Services IIS Manager, so I'm going to go ahead and launch that.
>
> **[2:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=142)** In the left hand navigator, I've got my server name.
>
> **[2:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=145)** If I expand that, underneath it I can expand Sites and I will have a default website.
>
> **[2:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=152)** Okay, well, let's examine what that looks like.
>
> **[2:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=156)** One way to do that is, of course, to connect to this web server using a web browser.
>
> **[2:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=163)** So, I can do that in a number of ways.
>
> **[2:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=164)** I'm going to go and start Microsoft Edge on this host.
>
> **[2:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=168)** And what I want to do in Edge is enter the local loop back IP, 127.0.0.1, so I'm pointing to myself here on this host.
>
> **[2:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=177)** And here we're presented with the standard Windows Server Internet Information Services webpage.
>
> **[3:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=183)** That is working, however, it's working over TCP Port 80 and it's only an HTTP connection, it's not HTTPS.
>
> **[3:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=192)** If we were to go back to IIS Manager and right click on the Default Web Site, we can then choose Edit Bindings.
>
> **[3:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=200)** Here we've got an HTTP binding, as we know, for Port 80.
>
> **[3:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=204)** What we want to do is add a binding for HTTPS.
>
> **[3:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=208)** But before we do that, let's open up a Command Prompt here, so CMD, where I'm going to run MMC, the Microsoft Management Console.
>
> **[3:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=218)** There are a number of ways to get into certificates, this is only but one way, but I want to view the certificate store on the local machine for the machine, not for user certificates.
>
> **[3:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=229)** So, here in MMC, I'll go to the File menu and choose Add/Remove Snap-in.
>
> **[3:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=234)** I'm going to choose Certificates, Add.
>
> **[3:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=236)** It's going to be for the computer account, Next, the local computer I'm at right now, so Finish, OK.
>
> **[4:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=245)** If I expand Certificates in the left hand navigator and go down under Personal, Certificates, we've got certificate here for www.mysite.local.
>
> **[4:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=258)** This is a certificate that was issued by my private CA in Windows, which is called MyOrgCAWindows.
>
> **[4:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=267)** The certificate is valid for one year.
>
> **[4:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=270)** So, before that one year expiry, technicians need to make sure they provide a new updated certificate for the web server, or they could renew the existing one before it expires because after the certificate expires, users will get messages when they connect to this website stating that it's not to be trusted.
>
> **[4:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=290)** It's also important to note that connecting to the website must occur using the same name embedded in the certificate, which in this case is www.mysite.local.
>
> **[5:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=303)** Now, you might wonder, how is it that attackers go about compromising certificates?
>
> **[5:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=309)** Well, one obvious answer is if an attacker can get into a machine, if they can compromise a machine where they could get this certificate and export it, including with its private key, that's one way they could use that certificate for nefarious purposes.
>
> **[5:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=325)** But another possibility is malicious actors registering a DNS domain and adding records as if they were another organization, or what happens often using nomenclature that is very similar, but not quite spelt exactly correctly.
>
> **[5:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=344)** Imagine, for example, attackers registering a DNS domain name back in the day for [google.com](https://google.com), but only with one o because some people typed that in incorrectly, and then registering a certificate for it.
>
> **[5:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=357)** So, that's another way that hackers might go about trying to compromise this.
>
> **[6:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=361)** But in this case, we've got a valid certificate on this machine, so I'm going to close out of that.
>
> **[6:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=366)** Not going to save it.
>
> **[6:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=368)** Let's get back into the IIS Manager where we were reviewing the site bindings for the website.
>
> **[6:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=373)** We're going to click the Add button and we will add an HTTPS binding for all IP addresses.
>
> **[6:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=380)** The default port number over TCP for HTTPS is 443, so I'm going to accept that.
>
> **[6:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=386)** What I need to do at this point is I need to go down under SSL certificate, which in and of itself is not quite great nomenclature as SSL is deprecated, and it's really just a certificate.
>
> **[6:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=399)** Whether you use it for SSL or something totally different is fine.
>
> **[6:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=404)** So, what I'm going to do from the dropdown list is choose www.mysite.local.
>
> **[6:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=410)** That's the certificate that we viewed a few minutes ago that's available on this host.
>
> **[6:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=415)** I'll click OK and I'll choose Close.
>
> **[6:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=418)** So, we now have an HTTPS binding, we shouldn't have to restart the website or anything like that.
>
> **[7:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=424)** Let's go test it out in our web browser.
>
> **[7:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=428)** So, first of all, I'm going to run [https://www](https://www)., and it was called, mysite.local.
>
> **[7:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=436)** Now, of course, that name has to be resolvable to the correct IP address for that to work properly.
>
> **[7:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=445)** So, whether you are resolving that DNS name through a DNS entry, whether you're doing it through a host's file, whatever the case is, it's mapped to my IP on this server.
>
> **[7:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=456)** And notice now I'm able to make an https connection to mysite.local.
>
> **[7:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=462)** So, what's interesting is we're not being prompted with any security issues related to the certificate or anything like that.
>
> **[7:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=468)** So, if I were to click on the little padlock, in this case, in Microsoft Edge to the left of the URL line, it says that the connection is secure.
>
> **[7:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=477)** This site has a valid certificate issued by a trusted authority.
>
> **[8:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-windows-web-site-certificate?u=76281980&t=482)** If it's not a trusted authority, it could be because it's a privately issued certificate from a private CA and you don't have the private CA trusted root certificate installed on this device.

> [!info]- Semantic Content
>
> **Env Vars:** https (9), iis (7), dns (4), http (3), ssl (3)
> **Code Keywords:** let (7), private (4), case, (2), continue (1), this. (1)
> **UI Navigation:** click on (2), select the (1), scroll down (1), go to (1), dropdown (1)
> **Prerequisites:** install (3), configure (2), set up (1)
> **CLI Commands:** make (3), find (1), snap (1)
> **URLs:** [google.com](https://google.com) (1), [https://www](https://www) (1)
> **Ports:** port 80 (2)
> **Definitions:** is a  (1), is called (1)

#### Configure a Linux website certificate
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=0)** - [Instructor] In this demo, we're going to be configuring a Linux web server certificate.
>
> **[0:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=5)** We've already acquired the certificate.
>
> **[0:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=8)** We already have a certificate to use for HTTPS.
>
> **[0:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=11)** What we need to do is tell the web server that we want to use that certificate to make sure that we have that HTTPS connection, which of course uses TLS as the network security protocol suite to secure the connection.
>
> **[0:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=26)** So to get started here in Linux, I'm going to install the Apache Web server.
>
> **[0:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=32)** Sudo apt install apache2.
>
> **[0:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=36)** If it's already installed, which it is here, it will tell me that it's already there and it'll tell me the version.
>
> **[0:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=43)** So that's fine. We've got the Apache web server installed.
>
> **[0:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=46)** We also want to make sure the web server is up and running.
>
> **[0:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=50)** We can do that with this sudo service, in this case, apache2 status.
>
> **[0:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=57)** So it shows here that it is in fact active and running.
>
> **[1:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=61)** Otherwise, we could modify our last command and just change status to start.
>
> **[1:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=66)** Of course, you can also stop the web server that way, or even restart it if you want to pick up a new configuration change.
>
> **[1:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=73)** Now, the next thing we want to do on this web server, now that we know it's there and running, is we want to make sure that it's set to use TLS.
>
> **[1:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=82)** So the way that we're going to do that is to open up a config file.
>
> **[1:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=86)** I'm going to run sudo nano.
>
> **[1:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=89)** Nano is a built-in text editor in some Linux distributions.
>
> **[1:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=93)** In this case for Ubuntu, it's there.
>
> **[1:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=95)** What I want to do is reference a file in slash etc slash apache2 slash mods dash available, and the file I want to open up is called funnily enough, ssl.conf as opposed to tls.conf.
>
> **[1:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=112)** So a lot of the old ssl stuff still persists today, even though ssl should not be used.
>
> **[1:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=119)** What I'm looking for within this file is the set of protocols that will be used.
>
> **[2:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=126)** So what I'm looking for is the directive here called SSLProtocol.
>
> **[2:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=131)** Now, I've already configured this.
>
> **[2:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=133)** What I've done is specified minus all.
>
> **[2:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=137)** What that does is it turns off all SSL and all TLS support.
>
> **[2:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=143)** After that, I've got a space, then I have plus TLSv1.3.
>
> **[2:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=149)** What I'm specifying here is I want to add, that's the plus sign, support for that protocol.
>
> **[2:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=156)** So in other words, my web server will only talk using TLS version 1.3.
>
> **[2:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=162)** So connecting clients are going to have to support that, otherwise there will not be a connection.
>
> **[2:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=169)** Okay, so that's already done.
>
> **[2:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=170)** If it's not already set that way I can easily just edit the file and save it, but it's already done.
>
> **[2:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=175)** So I'll control X to get out of there.
>
> **[2:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=178)** The next thing I need to do is I need to make sure that my web server is set to use my web server certificate.
>
> **[3:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=186)** If I type ls for the current directory I'm in on my server, which is cert, that's a subdirectory I created previously, and I also acquired a web server certificate from a private CA previously.
>
> **[3:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=200)** My web server certificate is called www.demotest.world.pem.
>
> **[3:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=208)** I want to use that on my web server to secure the connection with HTTPS.
>
> **[3:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=215)** So I'm going to use the sudo nano command, nano being the text editor again to open up slash etc slash apache2 slash sites-enabled slash 000-default.conf.
>
> **[3:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=231)** Because in here, the first thing I want to do, and I've already changed it, is I want to change the virtual host section at the top from port 80, which is an HTTP binding to port 443, which is by default the port used for HTTPS.
>
> **[4:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=247)** You can change it, but that's what I'm going to go with the norm.
>
> **[4:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=251)** Then further down below, there's some directives here I haven't changed like the document route where the webpages are served up from.
>
> **[4:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=259)** However, I do have some SSL directives here.
>
> **[4:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=262)** Again, SSL still persists even though we know to use TLS.
>
> **[4:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=267)** At any rate, SSL engine on, SSL certificate file for the server here is in slash cert, and it's the file we just mentioned.
>
> **[4:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=275)** It's called www.demotest.world.pem.
>
> **[4:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=281)** That's the web server certificate file.
>
> **[4:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=284)** Now, the key file matches that, it's the private key for the web server, so it's stored separately from the certificate.
>
> **[4:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=292)** And then we've got the SSL CA certificate file, which is a private ca I've created, I have that file here.
>
> **[5:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=300)** It's called MyPrivateCA.pem.
>
> **[5:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=304)** Now because we've got the private key file for the web server here, and private key files normally have a passphrase, it means when you start or restart the web server, it's going to prompt for that passphrase.
>
> **[5:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=317)** Now, if you really want to, you can use the open SSL command line to remove passphrases from private key files.
>
> **[5:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=324)** However, for this example, I'm just going to leave it as it is.
>
> **[5:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=327)** So for instance, if I clear the screen and run sudo service apache2 restart, to put new changes into effect, sure enough, it's asking me for my passphrase for my server key.
>
> **[5:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=343)** So I'll go ahead and enter in that passphrase and then I'll press Enter.
>
> **[5:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=350)** And of course we can verify that the web server is running.
>
> **[5:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=353)** I'll just use the up arrow key to go up through previous commands to where we were looking at the status of the Apache 2 Daemon or Apache web server, and it's active and running.
>
> **[6:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=364)** Okay, so why don't we go to a client web browser machine, and why don't we try to make an HTTPS connection to this host?
>
> **[6:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=377)** Okay, so from a Windows computer in a web browser, I've connected to [https://www.demotest.world](https://www.demotest.world), and I did get the default Apache2 webpage.
>
> **[6:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=389)** However, of course, it's stating in my browser that this is not a secured site.
>
> **[6:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=394)** So I've navigated to it anyway, but if I click not secure up in the address bar and click on the message, it says, "Your connection to this site isn't secure."
>
> **[6:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=403)** And then if I click on the little certificate icon, I can see that this certificate that the web server is using was issued to www.demotest.world.
>
> **[6:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=414)** Well, I'm connecting to that name, so that's good, but it was issued by MyPrivateCA.
>
> **[7:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=422)** Oh, okay.
>
> **[7:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=423)** Well, the problem is my computer doesn't trust that private CA.
>
> **[7:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=429)** We know what to do about that.
>
> **[7:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=430)** We just have to install the CA certificate, basically the trusted root certificate.
>
> **[7:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=434)** If we trust the CA, we will then trust certificates it issued.
>
> **[7:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=438)** So how do we do that?
>
> **[7:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=439)** Well, here in our Microsoft Edge browser, we know we can go into our settings by clicking the three dot button, go down to select settings on the left.
>
> **[7:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=450)** I then want to go into privacy search and services on the right.
>
> **[7:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=454)** I'm just going to scroll down until I see the managed certificate section, which I'll click on.
>
> **[7:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=460)** I want to go to Trusted Route certification authorities.
>
> **[7:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=464)** Let's just check it out.
>
> **[7:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=465)** If I go to the M's, do we have MyPrivateCA? No, we don't.
>
> **[7:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=470)** Well, we would need to have that trusted route public key certificate, so we could install it on this machine, and I'm going to do it manually.
>
> **[7:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=479)** I do have the file on this machine, so I'm going to choose import.
>
> **[8:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=484)** I'm going to choose next, and I'm going to browse to my downloads where I've got MyPrivateCA.cer, certificate file.
>
> **[8:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=493)** That file might also end with dot pem.
>
> **[8:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=497)** Many different formats of the file can be used, and really it's just a file extension here.
>
> **[8:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=502)** So in this case, I'm going to open that file, choose Next.
>
> **[8:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=506)** I want install the certificate in the Trusted Route certification authority section.
>
> **[8:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=511)** So I'll just proceed through and finish and it says, "Are you sure you trust MyPrivateCA?
>
> **[8:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=516)** You might want to contact them because if you trust them, you're going to trust every certificate that they issue."
>
> **[8:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=523)** So from a security perspective, if an attacker can somehow fool someone into doing this, into installing what we're going to call a malicious CA certificate, then that means that that machine will trust certificates issued by that CA.
>
> **[9:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=541)** So this is something that attackers will often try to do in a variety of different ways to try to get this installed on client devices.
>
> **[9:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=550)** In this case, we know that we trust it because we created it, no solicited us and asked us to do it.
>
> **[9:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=556)** We are doing it. So do you want to install this certificate?
>
> **[9:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=558)** Yes. Okay, import was successful, Close.
>
> **[9:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=562)** So if we just kind of go back into that same section into that same HTTP certificates into Trusted Route Certification authorities and down into the M's, notice the presence now of MyPrivateCA in the Trusted Route certification authority store in this machine.
>
> **[9:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=581)** Perfect. Let's close out of that.
>
> **[9:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=584)** Now, if we just try to refresh our connection to that website, it might take a moment before it actually lets us back in and isn't using old cache information.
>
> **[9:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=595)** So I'm going to close the web browser and fire it up again, and we're going to connect to the exact same URL.
>
> **[10:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=607)** And now notice this time we are connected to the same URL, but we no longer have a message about security or not trusting certificates.
>
> **[10:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=616)** So if I click on the little padlock up in the address bar to the left of the URL, it says the connection is secure and I can view the certificate.
>
> **[10:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-linux-web-site-certificate?u=76281980&t=624)** It's the same certificate for the web server issued by the same private CAs just now my machine trusts it.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (7), https (5), tls (5), url (3), http (2)
> **Code Keywords:** private (8), case, (3), let (2), this. (1), default. (1)
> **CLI Commands:** make (5), sudo (5), apache (4), apt (1), ls (1)
> **UI Navigation:** click on (4), go to (3), scroll down (1)
> **Definitions:** is a  (2), is called (2), in other words (1), is an  (1), means that (1)
> **Prerequisites:** install (6)
> **Ports:** port 80 (1), port 443 (1)
> **URLs:** [https://www.demotest.world](https://www.demotest.world) (1)

#### Configure web brower client certificate authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=0)** - [Instructor] HTTPS client certificate authentication.
>
> **[0:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=4)** What is this?
>
> **[0:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=6)** We already know that we can install a PKI certificate on a web server, configure an HTTPS binding for it, and of course, that secures and encrypts the connection between client devices that are connecting to the web server and the web server itself.
>
> **[0:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=22)** Compared to HTTP, everything's encrypted.
>
> **[0:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=25)** The messages are authenticated, but we could take it a step further with client certificates.
>
> **[0:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=31)** But before we get too far ahead of ourself, let's explore here a little bit about our configuration for our web server, here on my Windows server.
>
> **[0:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=40)** I'm going to go to the start menu because in the start menu, I want to go to Windows Administrative Tools, and I'd like to go into the IIS manager tool that lets me manage the Microsoft Web server installed on this host, in the left hand navigator I'll drill down under the server name and I'll drill down under websites.
>
> **[1:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=61)** So we've got a standard default website here for our web server.
>
> **[1:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=67)** If I were to right click on it, I can go down to Edit Bindings.
>
> **[1:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=72)** I've got the standard HTTP Port 80 binding.
>
> **[1:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=75)** So that's not a secured connection at all, but I've already got a connection here configured for HTTPS over port 443.
>
> **[1:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=84)** And if I select that and click Edit, I've got an SSL certificate selected there.
>
> **[1:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=89)** We know that really it's just a PKI certificate.
>
> **[1:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=92)** SSL shouldn't be there, but that's okay.
>
> **[1:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=95)** What I want to do here is view that certificate.
>
> **[1:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=98)** It looks like it was issued to www.mysite.local.
>
> **[1:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=103)** So that name has to match what people are connecting to for the certificate to be considered valid.
>
> **[1:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=109)** Not to mention the certificate cannot have expired, but it was issued by a private CA called MyOrgCAWindows.
>
> **[1:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=118)** Okay, got it.
>
> **[2:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=120)** If we examine the SSL settings for this website, so the default website still selected on the left, if I double click SSL Settings on the right, we don't require SSL connectivity to this site.
>
> **[2:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=133)** So HTTP connections would still be allowed and we are ignoring client certificates.
>
> **[2:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=140)** One thing at a time, let's require SSL and I'll click Apply.
>
> **[2:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=145)** There's no good reason to ever allow HTTP connectivity anymore.
>
> **[2:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=150)** So SSL or using the certificate really for TLS is what we want turned on.
>
> **[2:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=155)** It's been put into effect.
>
> **[2:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=157)** Changes have been successfully saved.
>
> **[2:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=160)** I want to try to connect to this web app, this website in a browser using only HTTP.
>
> **[2:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=168)** So from my start menu, I'm going to fire up the Microsoft Edge web browser, not that it has to be that web browser, of course, and I'm going to run HTTP, just [HTTP://www.mysite.local](https://HTTP://www.mysite.local).
>
> **[3:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=187)** So of course, that DNS name has to resolve to the IP address of our server.
>
> **[3:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=192)** Okay, we're getting a 403.4 forbidden error.
>
> **[3:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=196)** "The page you are trying to access is secured with," well, here it is again, SSL, it's TLS, it's not SSL, but that's okay.
>
> **[3:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=206)** Let's change it.
>
> **[3:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=206)** So let's add the prefix for the protocol here in the address line to [https://www.mysite.local](https://www.mysite.local).
>
> **[3:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=216)** Everything's beautiful.
>
> **[3:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=218)** Okay, so we're connected.
>
> **[3:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=219)** We see the webpage.
>
> **[3:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=220)** If I click the little padlock icon here in Microsoft Edge, it says the connection is secure.
>
> **[3:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=226)** Life is beautiful.
>
> **[3:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=228)** Let's take it a step further by requiring our client certificates.
>
> **[3:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=233)** So back into the IIS Manager Tool.
>
> **[3:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=237)** What I want to do, we're still in the SSL Settings, is I want to not accept, I want to require client certificates.
>
> **[4:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=244)** Note however, that that option's only available if you require SSL up above, otherwise it's grayed out.
>
> **[4:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=250)** Requires SSL, require client certificates Apply.
>
> **[4:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=256)** Alright, so now let's test connectivity.
>
> **[4:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=259)** Now, be careful with refreshing your browser and whatnot.
>
> **[4:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=262)** It's usually best to close out of the browser.
>
> **[4:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=266)** In some cases some people have found that rebooting the system works best, but sometimes browsers will cache information.
>
> **[4:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=274)** At any rate, I'm going to restart the Microsoft Edge browser and we'll do the basic thing first, meaning we'll just connect to https, [https://www.mysite.local](https://www.mysite.local).
>
> **[4:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=289)** Okay, looks like we're connected to the site.
>
> **[4:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=291)** Let's just do a refresh.
>
> **[4:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=293)** But if we actually try to refresh now it says it can't reach the page.
>
> **[5:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=300)** If we were to go down to a different browser such as the older Internet Explorer browser, we would get this type of message.
>
> **[5:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=308)** So the browser really will determine what kind of a message you get.
>
> **[5:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=311)** This one's more meaningful though.
>
> **[5:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=313)** It's giving us HTTP error 403.7 forbidden.
>
> **[5:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=316)** "The page you are attempting to access requires you a browser to have a client certificate that the web server recognizes."
>
> **[5:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=325)** Let's focus on the web server recognizes part.
>
> **[5:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=328)** So what that means is, "Does the web server trust any client certificates?"
>
> **[5:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=333)** Here's the answer.
>
> **[5:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=334)** If we go back into the IIS Manager Tool, right click on the Default Website, edit the bindings, select the HTTPS binding, Edit it, and if we go down and view the certificate, alright, here we go.
>
> **[5:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=349)** So MyOrgCAWindows is the CA that issued the service certificate.
>
> **[5:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=353)** So any certificates that MyOrgCAWindows issues to clients will be trusted by the web server.
>
> **[6:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=361)** It's the PKI chain of trust.
>
> **[6:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=364)** If you trust the certificate authority or the creator or issuer of certificates, well then by extension you trust certificates that it issues.
>
> **[6:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=373)** Okay, so having done that, let's see what's going on here.
>
> **[6:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=377)** Back to the current issue, we cannot connect to the website and in Microsoft Edge, you don't quite get the same HTTP type of error message, but it's saying it can't reach the page.
>
> **[6:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=389)** So in other words, we can't connect.
>
> **[6:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=391)** If I click the padlock icon, it does say that the connection is secure.
>
> **[6:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=396)** So the site itself has a valid certificate used by a trusted authority.
>
> **[6:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=401)** Well, that's fine server side, but we still can't reach the page because we don't have a client certificate that the web server trusts.
>
> **[6:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=409)** So from my command prompt on this machine, I will run MMC, the Microsoft Management Console because I want to manage certificates on this host.
>
> **[6:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=418)** Now I'm doing it on the same server.
>
> **[7:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=420)** In reality, you would be configuring client certificates on other devices that are trying to securely connect to this website, whether it's tablet, a smartphone, a laptop, whatever it is, and it could be any operating system.
>
> **[7:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=435)** Doesn't matter if it's an iPhone, Android phone, the Mac OS, Linux OS, whatever.
>
> **[7:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=441)** So what I'm going to do here in the case of Windows is go to File, Add/Remove Snap In, Certificates.
>
> **[7:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=448)** I want to manage the certificates on this machine for users.
>
> **[7:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=452)** So my current user account that I'm logged in with, okay, Finish.
>
> **[7:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=458)** If I were to expand Certificates - Current User and then Personal, Certificates on the left, it would reveal any certificates issued to the user currently signed in to this machine on different operating system platforms like Linux and the Mac OS, and on a smartphone.
>
> **[7:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=475)** The steps will vary and the tools will be different, but the concept remains exactly the same.
>
> **[8:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=481)** What I don't have here is a client certificate that can be used for client authentication.
>
> **[8:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=487)** I've got a client certificate here, all right.
>
> **[8:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=489)** If I double click to open it up, it's a self signed certificate issued by myself to myself for file recovery.
>
> **[8:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=497)** Well, that's not going to cut it.
>
> **[8:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=498)** No wonder we can't authenticate to the website that requires client certificates.
>
> **[8:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=503)** Now this Windows computer is joined to an active directory domain, so it makes it very easy to request client certificates for authentication.
>
> **[8:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=512)** For example, what I can do here is right click Certificates on the left.
>
> **[8:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=516)** I can choose All Tasks, Request New Certificate.
>
> **[8:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=520)** Now, depending on the solution you are using for certificates, you might go to a specific website, for a public ca to get trusted client certificates.
>
> **[8:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=530)** If you've got your own internal private CA, you might go to a website that's been made available internally to request a certificate.
>
> **[8:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=539)** There are many different ways you can accomplish this, but here at Windows, this is what I'm going to do.
>
> **[9:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=545)** I'll click Next, Active Directory Enrollment Policy, Next.
>
> **[9:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=550)** Okay, here we go.
>
> **[9:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=551)** I want a User certificate because if I click Details over on the left to expand it, I can have a certificate for many purposes, including Client Authentication.
>
> **[9:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=561)** That's what we need here.
>
> **[9:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=563)** So I'm going to choose Enroll, Succeeded.
>
> **[9:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=566)** We now have a new certificate, and if we take a look carefully, it was issued by MyOrgCAWindows.
>
> **[9:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=572)** That's the same ca that issued the web server certificate.
>
> **[9:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=576)** It issued me a certificate, so therefore the web server's going to trust it.
>
> **[9:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=580)** Let's go back into the web browser and we couldn't reach the page before.
>
> **[9:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=585)** Let's just see what happens if we refresh.
>
> **[9:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=588)** Well, no such luck here.
>
> **[9:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=590)** Let's close the web browser and open it back up and let's give it a try again.
>
> **[9:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=594)** So I'll go into Microsoft Edge, and once again, we will try to connect to HTTPS and our URL in this case is going to be www.mysite.local.
>
> **[10:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=608)** So now we are successfully authenticated to that website.
>
> **[10:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-web-brower-client-certificate-authentication?u=76281980&t=612)** Not only does the web server use a certificate to encrypt and secure communications to it, but to take it a step further, it also requires connecting devices to have a valid, trusted client certificate.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (12), http (9), https (5), pki (3), iis (3)
> **Code Keywords:** let (13), require (5), private (2), self (1), public (1)
> **UI Navigation:** go to (5), click on (2), select the (1)
> **URLs:** [https://www.mysite.local](https://www.mysite.local) (2), [http://www.mysite.local](http://www.mysite.local) (1)
> **Ports:** port 80 (1), port 443 (1)
> **Versions:** 403.4 (1), 403.7 (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** such as (1), for example (1)

#### Configure VPN certificate authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=0)** - [Instructor] We know that PKI certificates are commonly used with web servers to encrypt communications with connections to and from that web server.
>
> **[0:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=10)** But certificates can also be used for things not directly related to TLS, like file system encryption, and even authenticating to a VPN.
>
> **[0:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=20)** In the case of a VPN the certificate is also going to be important if you're using an SSL or a TLS type of VPN that uses standard port 443 for VPN connections.
>
> **[0:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=33)** So, we're going to configure a VPN, a cloud-based VPN, in the Microsoft Azure Cloud that uses client certificate authentication.
>
> **[0:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=43)** Here in the Microsoft Azure portal I'm going to begin by opening up my left-hand navigator and clicking All resources.
>
> **[0:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=50)** This will show me all of the items, all of the resources deployed in my Azure subscription.
>
> **[0:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=56)** I've already deployed something called a virtual network gateway.
>
> **[1:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=61)** Think of that as being the representation of a VPN device in the Azure Cloud.
>
> **[1:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=67)** So, it's kind of like having a VPN hardware device that you plug into an empty switch port on a local area network, so that's kind of what we've got here defined already.
>
> **[1:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=77)** It's called eastvpn1.
>
> **[1:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=81)** I'm going to click on it to open up its properties because what we're going to do now is configure client to site VPN settings.
>
> **[1:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=90)** We do that in the properties of the virtual network gateway here by going down on the left and selecting Point-to-site configuration.
>
> **[1:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=99)** It says point-to-site is not configured, so we're going to click the Configure now link.
>
> **[1:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=105)** We need to specify an address pool that will be used to assign IP addresses to VPN clients, so it doesn't have to match any preexisting network you might have deployed in the cloud or anything like that.
>
> **[1:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=117)** So, I'm going to specify 192.168.3.0/24.
>
> **[2:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=123)** So, the /24 tells me that the first 24 bits from the left are assigned to the network address, which in this case is 192.168.3.
>
> **[2:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=133)** So, all VPN clients that authenticate will have an additional IP address added on their device, which will start with 192.168.3.
>
> **[2:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=143)** For the tunnel type we have a bunch of options here.
>
> **[2:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=146)** I'm interested in an SSL, or really a TLS type of VPN, so I'm going to go with the standard OpenVPN SSL selection here.
>
> **[2:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=156)** For the authentication type I'm going to choose Azure certificate, that also will require an Azure user account within the Microsoft Azure Entra ID Tenant.
>
> **[2:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=168)** Let's just explore that for a moment.
>
> **[2:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=170)** If I were to duplicate my web browser page here, just so we can keep our place in the first one, in the left-hand navigator I can go to my Microsoft Entra ID Tenant.
>
> **[3:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=180)** Think of that as being a directory service that's loosely similar to an Active Directory domain on premises where you can go and view your user accounts.
>
> **[3:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=190)** So, we would have to have a user account here in addition to a certificate to authenticate to the VPN.
>
> **[3:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=198)** So, we've got Azure certificate.
>
> **[3:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=200)** Down below, what this configuration requires is for me to give a name to a root certificate.
>
> **[3:26](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=206)** This is the trusted root certificate, the public certificate data from a certificate authority that I need to paste in the next field.
>
> **[3:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=215)** Where do I get that from?
>
> **[3:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=216)** Well, if you're working with public CA certificates you can easily acquire the public certificate data from your public CA and paste it in here.
>
> **[3:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=227)** And then of course, your client devices that want to connect to the VPN, they would have to have a certificate installed issued from that CA.
>
> **[3:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=235)** But it could also be a private CA.
>
> **[3:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=237)** It doesn't have to be public.
>
> **[4:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=240)** On my local computer I've started the PowerShell ISE.
>
> **[4:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=244)** I'm running Windows.
>
> **[4:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=245)** ISE stands for Integrated Scripting Environment.
>
> **[4:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=248)** It's kind of a GUI color-coded environment for me working with PowerShell.
>
> **[4:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=253)** In it I've paste a number of statements that will create my own private root CA and a certificate issued from it.
>
> **[4:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=261)** So, in lines three through to six I am using PowerShell to create a root CA.
>
> **[4:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=268)** You don't have to create a new one for this, you could use an existing one.
>
> **[4:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=271)** But in this case this is what I'm doing.
>
> **[4:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=274)** So, I'm creating a variable called $cert to store the new root certificate information.
>
> **[4:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=280)** The root certificate will be called MyRootCert, and it will show up in the local certificate store on this Windows computer.
>
> **[4:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=287)** We'll check it after we're done.
>
> **[4:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=290)** In lines 10 through to 14 I am using that $cert variable from above, which represents our root certificate, to create or issue a client certificate, which I am naming MyClientCert.
>
> **[5:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=303)** It too will show up in the local certificate store on this Windows machine.
>
> **[5:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=309)** So, let's go ahead and click the Run button up at the top, Run Script, or you could press F5 to execute these statements.
>
> **[5:17](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=317)** So, there are no error messages, so it looks good.
>
> **[5:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=320)** Let's open up MMC, the Microsoft Management Console, on this machine to verify that we have MyRootCert and MyClientCert.
>
> **[5:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=331)** Here in MMC I will go to File, Add/Remove Snap-in, Certificates, Add, and I want to look at the local user account certificates, that would be for the user I'm currently signed in as right now.
>
> **[5:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=343)** So, Finish, OK, so Certificates-Current User, I'm going to expand that in the left-hand navigator.
>
> **[5:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=350)** And I'll go down under Personal, and then I'll click Certificates.
>
> **[5:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=354)** Notice the presence of MyRootCert and MyClientCert.
>
> **[5:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=359)** If I double-click to open up the properties of MyClientCert, it was issued to MyClientCert by MyRootCert.
>
> **[6:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=368)** And we've got the validity period shown here.
>
> **[6:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=370)** We know that PKI certificates don't last forever, and eventually they expire.
>
> **[6:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=374)** It also says that there is a private key that corresponds to this certificate.
>
> **[6:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=380)** Okay, so the client certificate then is what I need installed on my client device where I want to establish a connection to the VPN, whether it's a smartphone, a laptop, tablet, whatever it is.
>
> **[6:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=392)** But what we need to do here is go into the RootCert, I'm going to right-click on it and choose All Tasks, Export.
>
> **[6:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=399)** What I need to do is make sure I export the public key.
>
> **[6:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=403)** So, I don't want to export the private key so Next, I'm going to choose Base-64 encoded, that's the format I want to use, Next.
>
> **[6:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=411)** Then I'll specify a final name and path where I want the exported root certificate, the public key certificate, for my private CA to be exported to.
>
> **[7:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=436)** Once I've specified that I'll continue through the Wizard, and it says the export was successful.
>
> **[7:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=441)** I want to go open up the exported file that represents that certificate.
>
> **[7:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=447)** I've opened up that file in Notepad, and what I want to do is highlight everything between Begin Certificate and End Certificate.
>
> **[7:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=455)** And I'll press Control + C to copy it to my Windows clipboard.
>
> **[7:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=459)** And so, back here in the Azure portal I'm going to paste that copied information into the public certificate data field.
>
> **[7:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=468)** So, this is important because what we're telling our VPN config in the cloud is you can trust certificates issued by this root certificate, and that will allow certificate authentication to the VPN, of course, in addition to a username and password.
>
> **[8:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=485)** Okay, so I'm going to go ahead and click the Save button here at the top of our configuration to save this.
>
> **[8:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=492)** Okay, once that configuration is saved notice that we can click the Download VPN client button here in the portal to download a simplified configuration installer based on the configuration of this virtual network gateway.
>
> **[8:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=511)** So, that's going to let you download a ZIP file that you can then extract, which I've done here.
>
> **[8:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=516)** And here, for example, you could go into OpenVPN, you might install the OpenVPN VPN client software, this is free software, and then use this configuration file to make the configuration to the VPN.
>
> **[8:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=530)** You would need that.
>
> **[8:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=531)** You have to connect to the VPN using its public IP, and you also have to have the client certificate, which we have on this machine, to complete that connection.
>
> **[9:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=541)** So, I've downloaded and installed the latest OpenVPN Connect client.
>
> **[9:07](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=547)** You can search in your favorite web browser search engine for OpenVPN Connect, and you'll find the download link very quickly.
>
> **[9:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=554)** From here I could then specify File, and this is where I would browse for and select the OpenVPN file for our VPN configuration that we downloaded and extracted.
>
> **[9:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=567)** When I do that it automatically populates details like the profile name, the server host name, all of that stuff is filled in automatically.
>
> **[9:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-vpn-certificate-authentication?u=76281980&t=576)** At this point we would then be able to click Connect and authenticate with a username-password, and of course, the present PKI certificate on this client device.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (22), pki (3), tls (3), ssl (3), ise (2)
> **Code Keywords:** public (9), private (5), let (4), switch (1), require (1)
> **Tools:** powershell (3), azure portal (2)
> **CLI Commands:** make (2), snap (1), find (1)
> **UI Navigation:** click on (1), go to (1), double-click (1), right-click (1)
> **Prerequisites:** configure (3), install (1)
> **Versions:** 192.168.3 (3)
> **Analogies:** kind of like (1), similar to (1), for example (1)

#### Configure a network printer certificate
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=0)** - [Presenter] These days, we have a lot of different devices on the network that might exist with a built-in web server stack, even built into the firmware when it comes to IoT devices or as in our example, a network based printer.
>
> **[0:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=16)** Here in my web browser, I'm connecting to the DNS name of a printer on my local area network.
>
> **[0:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=22)** You can connect to the IP address, it doesn't matter.
>
> **[0:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=25)** But what I'm trying to do here is to connect over HTTPS and it's saying it's not secure.
>
> **[0:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=31)** It says "your connection is not private."
>
> **[0:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=33)** Now at this point, we know enough to realize that what that means is that yes, there is a certificate installed on that device, in this case a network printer, but our machine doesn't trust it.
>
> **[0:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=45)** Why would that be?
>
> **[0:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=47)** Most likely because either the certificate has expired or perhaps it was issued by a CA that our machine doesn't trust, or maybe we're connecting to a name here, printer1.local and that's not embedded as an alternative name in the certificate.
>
> **[1:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=63)** If I click where it says not secure here in my browser, it says the certificate is not valid.
>
> **[1:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=70)** Well that's not good.
>
> **[1:12](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=72)** If we click on that, what do we have here for details?
>
> **[1:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=75)** We have a certificate issued to something called HP4DA3FE, presumably an HP network printing device, but it was issued by itself and it's got quite a long validity time period.
>
> **[1:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=91)** So, 20 years in this case.
>
> **[1:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=94)** So what's the problem here?
>
> **[1:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=95)** The problem is it was issued by itself.
>
> **[1:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=97)** Why should our machine trust it?
>
> **[1:38](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=98)** Anyone can issue their own certificate.
>
> **[1:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=100)** So this is good.
>
> **[1:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=101)** This is PKI and TLS working together as they should to warn us.
>
> **[1:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=108)** Now what I'm going to do in this case is I'm going to continue anyways.
>
> **[1:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=111)** I know the printer, it's on my local area network.
>
> **[1:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=113)** I'm the one that made it available.
>
> **[1:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=115)** So I'm going to click advanced down below here and I'm going to choose proceed to printer1.local unsafe.
>
> **[2:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=123)** I know it's safe.
>
> **[2:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=124)** Now I've already got an authenticated connection here.
>
> **[2:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=126)** You might be prompted when you connect to different IoT devices or network printers, whatever it is, you might be prompted to authenticate with admin credentials, and of course you should be using a strong password for that.
>
> **[2:18](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=138)** In addition to using HTTPS.
>
> **[2:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=141)** What I really want to do here is install a certificate of my own choosing on this embedded web server.
>
> **[2:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=149)** So it's embedded in the firmware of the printer.
>
> **[2:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=152)** Okay, so I'm going to click on network in the menu here.
>
> **[2:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=155)** Naturally, depending on the type of device you're connecting to in your browser and what its nature is and what version it is will determine what the interface looks like and where you click.
>
> **[2:44](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=164)** It's going to be different.
>
> **[2:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=166)** However, what I want to do here on the left is scroll down and take a look at my advanced settings because here is where I can view and make changes potentially to the certificates used by this device, this network printer.
>
> **[3:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=182)** So I'm being prompted to sign in.
>
> **[3:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=183)** So let me just enter the credentials to continue.
>
> **[3:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=188)** Okay, so here we've got some information about our printer certificate.
>
> **[3:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=193)** It's already installed and we can view it.
>
> **[3:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=195)** This is the same thing, the same type of information that was presented to us in the web browser when it said this was not a safe site because it was issued by itself; that's the issuer to itself; that's the subject.
>
> **[3:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=209)** Yes, self-signed certificates are normally not trusted.
>
> **[3:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=212)** Okay, so if we wanted to, we could trust this certificate basically by installing the public key certificate on our device.
>
> **[3:41](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=221)** But I'll just click okay.
>
> **[3:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=223)** What we could also do is install a different certificate.
>
> **[3:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=226)** Now down below we could also install a certificate authority certificate down below.
>
> **[3:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=230)** Maybe if we have a private CA in our organization or from a public CA, if we want our printer to be able to authenticate to email servers.
>
> **[4:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=240)** For example, if someone scans in a document that wants it emailed to their email account, or if you are using 802.1x devices on your network for authenticating connections to the network, like 802.1x compliant wifi routers or ethernet switches or VPN appliances.
>
> **[4:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=259)** We're not doing anything like that.
>
> **[4:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=261)** So I'm interested in printer certificate where I can click configure.
>
> **[4:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=265)** Here we have a number of options.
>
> **[4:27](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=267)** We could create a new self-signed certificate.
>
> **[4:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=271)** Well, the only time that might be useful is if the existing one has expired.
>
> **[4:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=277)** It still won't be trusted unless you've added the trusted route certificate, the public key to your local device and it would be trusted, otherwise it won't be.
>
> **[4:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=287)** We can also choose to create a certificate signing request.
>
> **[4:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=291)** Here it's just called a certificate request, but it's the same thing, CSR.
>
> **[4:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=294)** What we're doing here is generating a certificate signing request that we then supply to a certificate authority or a CA and it would then generate a certificate for us.
>
> **[5:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=306)** That might even be a public CA.
>
> **[5:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=310)** You could choose to install a certificate that you already have.
>
> **[5:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=314)** So it says the certificate though must have been created using the last certificate request generated by this printer.
>
> **[5:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=322)** In other words, you would first create the certificate request.
>
> **[5:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=325)** Then after you get the certificate from the CA and maybe download it to the computer you're running this web browser on, you could choose to install the certificate from there.
>
> **[5:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=336)** You can also choose to import a certificate and a private key that you already have, one that's already been generated.
>
> **[5:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=345)** Now that might be something again from a public CA, you already have it, so you don't need to generate a request.
>
> **[5:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=351)** It might be from a private CA, whatever the case might be.
>
> **[5:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=356)** In this particular example here in MMC where I'm managing certificates, I have a certificate called MyPrinterCert.
>
> **[6:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=365)** If I open it up, it's got a certificate validity date and it was issued by something called MyRootCert, which is a private CA.
>
> **[6:15](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=375)** It was issued to MyPrinterCert, okay.
>
> **[6:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=379)** So as long as my machine trusts MyRootCert by extension, it will trust MyPrinterCert.
>
> **[6:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=385)** I want to configure my printer with MyPrinterCert.
>
> **[6:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=389)** So I want my own certificate that is trusted.
>
> **[6:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=392)** Bear in mind that within the time span of one year, 'cause that's the default here, I'm going to have to make sure I renew that certificate, after which I would have to replace it with a new one.
>
> **[6:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=405)** So someone has to be tracking this.
>
> **[6:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=407)** It's very important.
>
> **[6:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=408)** It could be as simple and old school as adding an entry on your calendar before the expiration date as a reminder.
>
> **[6:56](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=416)** Okay, I'll click on, okay, here.
>
> **[6:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=418)** What I'm going to do is right click on MyPrinterCert, all tasks, export.
>
> **[7:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=424)** I'm going to export it so I can then import it to the printer firmware.
>
> **[7:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=428)** So I'll choose next.
>
> **[7:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=429)** I do actually want to export the private key.
>
> **[7:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=434)** Remember that with the TLS exchange over HTTPS, that the server will give its public key to connecting clients.
>
> **[7:23](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=443)** But then when clients send encrypted messages to generate the session key, the server decrypts those messages with its related private key.
>
> **[7:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=453)** We need the private key here.
>
> **[7:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=455)** So I'll choose next and I'll accept the default format.
>
> **[7:39](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=459)** And the next thing I'll do is specify a password.
>
> **[7:42](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=462)** Whenever you're storing a private key in a file, you must use a complex password.
>
> **[7:47](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=467)** Otherwise people would only have to get a hold of that file to be able to use it as that entity.
>
> **[7:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=475)** For the encryption, it's got TripleDES-SHA1.
>
> **[7:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=479)** Eh, TripleDES is really not something we should be using.
>
> **[8:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=483)** Instead, we should be using its successor, AES.
>
> **[8:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=486)** So I'm going to choose AES256 for encryption and then SHA 256 for signing and I'll click next.
>
> **[8:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=493)** Okay, now I have to specify the location and name of the file to store this exported certificate in which will include the private key.
>
> **[8:22](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=502)** After I finished the export, I've now got an exported printer certificate file that includes the private key.
>
> **[8:29](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=509)** So back here in my printer configuration, I want to import a certificate in private key now that I've got a file containing that, I'll click next and then I'm going to click choose a file and select it from my local file system.
>
> **[8:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=525)** Alright, once I've specified the file, I have to enter the password for it because remember we saved it with the password because it contains a private key.
>
> **[8:54](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=534)** Okay, I'm going to click the finish button and just like that the changes have been updated successfully.
>
> **[9:05](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=545)** I'll click okay.
>
> **[9:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=548)** So now if we click on the view button to view the installed printer certificate, it is our new printer certificate that we've imported from the file system.
>
> **[9:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/configure-a-network-printer-certificate?u=76281980&t=559)** So as long as we've got within the certificate, the name embedded that we are connecting to, such as printer1.local, we can now have connectivity over HTTPS that is trusted so that we no longer get those untrusted messages.

> [!info]- Semantic Content
>
> **Code Keywords:** private (13), public (6), continue (2), self (2), case. (1)
> **Env Vars:** https (4), tls (2), dns (1), hp4da3fe (1), pki (1)
> **Prerequisites:** install (5), configure (2)
> **UI Navigation:** click on (4), in the menu (1), scroll down (1)
> **Definitions:** is a  (2), in other words (1)
> **Analogies:** for example (1), just like (1), such as (1)
> **CLI Commands:** make (2)
> **Speakers:** - [presenter] (1)

#### Acquire a web app certificate using Microsoft Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=0)** - [Instructor] Securing network communications to a web app means using TLS, Transport Layer Security because we know that we get the benefits of encryption.
>
> **[0:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=9)** We also know that we have message authentication for all network transmissions, so we have all those benefits, but in order to use TLS with a web app, you need to have a certificate, so what we're going to be doing here in the Microsoft Azure Cloud is enabling an HTTPS connection to a Microsoft Azure hosted web application.
>
> **[0:32](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=32)** The first thing we should do is kind of take an inventory of what's currently in place before we dive into it and try to solve the problem, so think for just a moment.
>
> **[0:43](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=43)** If I'm using the Microsoft Azure Cloud, and I want to use a certificate to secure a web app, what do I need to have in place?
>
> **[0:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=53)** Well, this is not a Microsoft Azure course, but the reality is cloud computing is a big deal these days.
>
> **[0:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=59)** You need a key vault.
>
> **[1:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=60)** Let's start by looking at our key vault.
>
> **[1:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=62)** I'm going to go to the All resources view here in the Microsoft Azure portal, and I've got a key vault deployed.
>
> **[1:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=68)** I'll click on it to open it up.
>
> **[1:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=70)** In the left-hand navigator, I want to go down and click on Certificates.
>
> **[1:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=74)** Here, I have a certificate that I've already created in this key vault, and it's called MyCert.
>
> **[1:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=81)** If I click to open up the details of that certificate, in its properties, if I scroll down, I can see that the subject name is a common name of demotest.world.
>
> **[1:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=96)** Why is that important?
>
> **[1:37](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=97)** Because the name inside the certificate must match what people are connecting to.
>
> **[1:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=105)** Doesn't have to be people, I suppose.
>
> **[1:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=106)** It could be another network service somewhere reaching out to your web app to get something, but whatever the case is, for HTTPS to work properly with the certificate, the name has to match, so we've got a subject alternative name here.
>
> **[1:58](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=118)** You could have more than one. It needs to match.
>
> **[2:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=121)** Okay, so demotest.world. Got it.
>
> **[2:04](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=124)** Now, what I want to do in Azure is take a look at my App Services.
>
> **[2:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=129)** In other words, hosted web apps.
>
> **[2:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=131)** Okay, so I've got one here. It's up and running.
>
> **[2:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=134)** If I click on it to open up that web app's properties, in the overview, it's called demowebappeast123, but it's using the [azurewebsites.net](https://azurewebsites.net) DNS suffix That's what happens automatically in Azure.
>
> **[2:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=148)** That's not going to work because it's got to match the name in the certificate, so what I want to do here in the left-hand navigator in the properties of the web app is I want to go down to something called Custom domains.
>
> **[2:40](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=160)** I need to add my custom domain name that will match what is in my certificate.
>
> **[2:46](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=166)** The reality is if this is a public-facing web app in Azure for your customers, let's say, you would want it to reflect your custom DNS domain name, which normally reflects your government agency or your organization name, so I'm going to click Add custom domain, and what I want to do is specify here that the domain provider is going to be all other domain services, meaning I don't want to register a new domain name here through Azure, and I'm going to add the TLS certificate later, so what's the domain name called?
>
> **[3:19](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=199)** Well, this is where we have to make sure it matches what we were looking at in the key vault.
>
> **[3:25](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=205)** You might recall that that is demotest.world, so we can use just a domain name like this.
>
> **[3:30](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=210)** We don't have to have a www in front of it.
>
> **[3:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=213)** We can, but it's not necessary.
>
> **[3:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=215)** Here's the thing: Microsoft Azure is going to say, "All right, to prove that you own demotest.world, "we would like you to go into whatever tool you use "to manage your demotest.world DNS domain "and add an A record with these details "and add a TXT record with these details."
>
> **[3:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=235)** Okay, so I'm going to go ahead and get started in my external DNS domain tool solution for this.
>
> **[4:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=243)** I'm actually using this DNS domain name through GoDaddy, so I'm going to go there, so I've signed into my GoDaddy account.
>
> **[4:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=251)** It could be any external DNS registrar that you use.
>
> **[4:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=254)** It makes no difference.
>
> **[4:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=256)** The point is I'm here where I can add records to my domain, so I'm going to add a new record.
>
> **[4:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=261)** The first thing that Microsoft asked me to do was to add an A record, so I'm going to go ahead and add an A record with the details that were specified in the Microsoft Azure portal.
>
> **[4:33](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=273)** I'll click Save once I've entered the values, but I want to add my second DNS TXT record, so if we take a look here, let's just close some of these little messages, if we take a look further down, indeed, we have now got our A record added according to Microsoft's instructions.
>
> **[4:49](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=289)** I'll click Add New Record.
>
> **[4:50](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=290)** Now we're going to add the TXT record according to the details supplied by Microsoft, and I'll save that DNS record.
>
> **[4:59](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=299)** Okay, the A record and the TXT record have been added, so if I flip back to the Azure portal, where we were adding our custom domain, and we saw the instructions for adding those two records, what we now want to do is we want to click the validate button.
>
> **[5:16](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=316)** That means that it's going to go out and check that we've added those records, and if we were able to add those records with those specific values, we must own the demotest.world DNS domain, so I'll click Validate.
>
> **[5:28](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=328)** After a moment, we get check marks. Excellent.
>
> **[5:31](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=331)** We are good to go, so now what we would do is click Add.
>
> **[5:35](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=335)** When we click Add, it will then add our custom domain name here in our web app, although it says No binding, so what we have to do is add a binding.
>
> **[5:45](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=345)** I'm going to click Add binding.
>
> **[5:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=348)** Now, what we can do is we can specify the source for our certificate, which is going to be to import it from a key vault, so at this point, I would choose Select key vault certificate.
>
> **[6:02](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=362)** I would specify the Key vault name, and there's our certificate in that vault called MyCert, so I'm going to go ahead and click on Select.
>
> **[6:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=371)** That brings me to this screen to add the TLS binding where I will click Validate, and then I will click Add.
>
> **[6:21](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=381)** Okay, and now our demotest.world custom DNS domain name is showing as having a secured connection because we imported the certificate from the key vault, so if I navigate to a web browser and connect to either demotest.world, or if you have DNS entries for things like www.demotest.world, when you make the connection over HTTPS, it will make the connection, but your browser will say the connection is not private.
>
> **[6:52](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=412)** This is okay, and it's expected.
>
> **[6:55](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=415)** This is happening because we have a self-signed PKI certificate that is not trusted by the browser.
>
> **[7:03](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/acquire-a-web-app-certificate-using-microsoft-azure?u=76281980&t=423)** Of course, we now know that we can install the trusted root certificate for that certificate issuer so that we wouldn't get this type of message, and when you're dealing with self-signed certificates and using those certificates to secure internal line of business apps, for instance, it's important to install that trusted root certificate.

> [!info]- Semantic Content
>
> **Env Vars:** dns (11), tls (4), txt (4), https (3), pki (1)
> **Code Keywords:** let (3), this. (2), self (2), match, (1), match. (1)
> **UI Navigation:** click on (4), go to (1), scroll down (1), navigate to (1)
> **Definitions:** is a  (3), in other words (1), means that (1)
> **CLI Commands:** make (3)
> **Tools:** azure portal (3)
> **Prerequisites:** install (2), you need to have (1)
> **URLs:** [azurewebsites.net](https://azurewebsites.net) (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=0)** - [Instructor] Okay, now that we've completed the TLS for Beginners Securing Network Communications course, where do you move on from here?
>
> **[0:09](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=9)** What are the next steps?
>
> **[0:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=11)** There are a number of recommendations I would offer.
>
> **[0:13](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=13)** One of those would be to think about other tools like Microsoft Active Directory Group Policy if your environment uses Microsoft Active Directory.
>
> **[0:24](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=24)** Group Policy contains thousands of settings where you can centrally configure those settings to be applied to some or all devices joined to the domain.
>
> **[0:34](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=34)** So I would focus on TLS and certificate options available there as an example, using Group Policy as a way to automatically install a Trusted Root Certificate on client devices for a private CA.
>
> **[0:48](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=48)** And then definitely experiment with additional certificate templates and their settings.
>
> **[0:53](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=53)** Depending on the tool you're using will determine if you can do that.
>
> **[0:57](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=57)** But if, for example, you're using Active Directory Certificate Services integrated with Active Directory, you will have the Certificate Templates management console available.
>
> **[1:08](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=68)** So that's something else to think about.
>
> **[1:10](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=70)** By all means, consider working with other PKI products.
>
> **[1:14](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=74)** There are plenty out there, whether you're working with private or public CA's, whether it's a mobile device management or MDM tool, with certificate options, whether it's a configuration management tool or suite to be used in the enterprise, it will normally have options available for either generating, managing, or deploying certificates.
>
> **[1:36](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=96)** We should also think about when it comes to certificate deployment options for automating the deployment of certificates to mobile devices, or maybe to allow the auto-enrollment of computers joined to an active directory domain.
>
> **[1:51](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=111)** And finally, because our focus here was on transport layer security or TLS, this is a network security protocol suite.
>
> **[2:00](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=120)** It changes over time.
>
> **[2:01](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=121)** We need to keep up-to-date with things that are changing with TLS.
>
> **[2:06](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=126)** One thing to watch out for would be version 1.4 when it becomes publicly available.
>
> **[2:11](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=131)** We should also subscribe to various security feeds that track any vulnerabilities related to TLS.
>
> **[2:20](https://www.linkedin.com/learning/tls-for-beginners-securing-network-communications/next-steps?u=76281980&t=140)** You can search in your favorite web browser search engine for TLS News, TLS vulnerabilities to subscribe to those types of feeds.

> [!info]- Semantic Content
>
> **Env Vars:** tls (7), pki (1), mdm (1)
> **Code Keywords:** private (2), if, (1), public (1), finally, (1)
> **Prerequisites:** configure (1), install (1)
> **Versions:** version 1 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Daniel Lachance]]

## Path Context

### In [[Become an IT Security Specialist]]
← [[IT Security Foundations- Network Security]] | **5 of 12** | [[Cybersecurity with Cloud Computing]] →

### In [[Cybersecurity Fundamentals]]
← [[Introduction to Identity and Access Management]] | **10 of 12** | [[Cybersecurity with Cloud Computing]] →

## Appears In

- [[Become an IT Security Specialist]]
- [[Cybersecurity Fundamentals]]

---

[↑ Back to top](#)