---
type: course
cssclasses:
  - lle-course
slug: web-security-oauth-and-openid-connect-23016424
url: "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424"
duration_minutes: 97
duration: 1h 37m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQE_ANjrzwRsMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1698269406260?e=2147483647&amp;v=beta&amp;t=U8zGZl8pEp_WV_Yq4cR7WwTFuX8zMmNr8sxIkyYxtEU"
linkedin_topic: Software Development
learning_paths:
  - '[Become a RESTful API Developer](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20RESTful%20API%20Developer.md)'
prev_courses:
  - '[API Testing and Validation](API%20Testing%20and%20Validation.md)'
path_nav: '[{"path":"Become a RESTful API Developer","position":5,"total":5,"prev":"API Testing and Validation","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Web%20Security-%20OAuth%20and%20OpenID%20Connect.md)

![Web Security: OAuth and OpenID Connect](https://media.licdn.com/dms/image/v2/D560DAQE_ANjrzwRsMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1698269406260?e=2147483647&amp;v=beta&amp;t=U8zGZl8pEp_WV_Yq4cR7WwTFuX8zMmNr8sxIkyYxtEU)

# Web Security: OAuth and OpenID Connect

> While many technical professionals claim to know and understand OAuth, reality often suggests otherwise. Implementing the proper grant types and the required flows while securely protecting your secrets is challenging at best and catastrophic at worst. Fundamentally, professionals often struggle with OAuth because they misunderstand what it is, what use cases it is particularly good and bad at, an

> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424) | 1h 37m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Using OAuth 2.0 and OpenID Connect](#using-oauth-20-and-openid-connect)
  - [What you should know](#what-you-should-know)
  - [How to use code for this course](#how-to-use-code-for-this-course)
- [**1. What Is OAuth?**](#1-what-is-oauth) (3 videos)
  - [Describing OAuth 2.0](#describing-oauth-20)
  - [Making OAuth 2.0 useful with extensions](#making-oauth-20-useful-with-extensions)
  - [Extending OAuth 2.0 with OpenID Connect](#extending-oauth-20-with-openid-connect)
- [**2. Foundational Concepts**](#2-foundational-concepts) (5 videos)
  - [OAuth 2.0 fundamentals](#oauth-20-fundamentals)
  - [Touring the OAuth endpoints](#touring-the-oauth-endpoints)
  - [Grant type overview](#grant-type-overview)
  - [Designing and using OAuth scopes](#designing-and-using-oauth-scopes)
  - [Using the OAuth playground](#using-the-oauth-playground)
- [**3. OAuth Tokens**](#3-oauth-tokens) (3 videos)
  - [OAuth 2.0 tokens](#oauth-20-tokens)
  - [Validating JWTs](#validating-jwts)
  - [Handling tokens safely and securely](#handling-tokens-safely-and-securely)
- [**4. Grant Type: Authorization Code**](#4-grant-type-authorization-code) (7 videos)
  - [Overview: Authorization Code Flow](#overview-authorization-code-flow)
  - [When should you use this?](#when-should-you-use-this)
  - [Lab: Build an example (web app or Postman)](#lab-build-an-example-web-app-or-postman)
  - [Auth-Code and PKCE overview](#auth-code-and-pkce-overview)
  - [When should you use PKCE?](#when-should-you-use-pkce)
  - [Lab: Build an example (native app or spa)](#lab-build-an-example-native-app-or-spa)
  - [Security considerations](#security-considerations)
- [**5. Grant Type: Resource Owner Password**](#5-grant-type-resource-owner-password) (4 videos)
  - [Overview: Resource Owner Password flow](#overview-resource-owner-password-flow)
  - [When should you use this?](#when-should-you-use-this)
  - [Lab: Build an example (curl)](#lab-build-an-example-curl)
  - [Security considerations](#security-considerations)
- [**6. Grant Type: Client Credential**](#6-grant-type-client-credential) (4 videos)
  - [Overview: Client Credential Flow](#overview-client-credential-flow)
  - [When should you use this?](#when-should-you-use-this)
  - [Lab: Build an example (curl)](#lab-build-an-example-curl)
  - [Security considerations](#security-considerations)
- [**7. Grant Type: Device Grant Type**](#7-grant-type-device-grant-type) (4 videos)
  - [Overview: Device flow](#overview-device-flow)
  - [When should you use this?](#when-should-you-use-this)
  - [Lab: Build an example (kiosk)](#lab-build-an-example-kiosk)
  - [Security considerations](#security-considerations)
- [**8. Using an OAuth Architecture**](#8-using-an-oauth-architecture) (4 videos)
  - [OAuth recommended practices](#oauth-recommended-practices)
  - [Lab: Configuring an OAuth server in PHP](#lab-configuring-an-oauth-server-in-php)
  - [Lab: Configuring an OAuth server in Node.js](#lab-configuring-an-oauth-server-in-nodejs)
  - [OAuth 2.0 as a service using Auth0](#oauth-20-as-a-service-using-auth0)
- [**9. State of the Industry**](#9-state-of-the-industry) (2 videos)
  - [OAuth extensions](#oauth-extensions)
  - [Industry-specific OAuth extensions](#industry-specific-oauth-extensions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using OAuth 2.0 and OpenID Connect](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect?u=76281980&t=0)** - Are you struggling with OAuth and OpenID Connect? Are you trying to figure out scopes, claims, grant types, and how you should use them in your applications? Well, you're in the right place. In this course, I'm going to walk you through all the complexity and nuance of OAuth and OpenID Connect while making it understandable for normal developers. We'll start with laying a foundation around the vocabulary and concepts and then move into practical labs with hands-on samples that you can run yourself. Hi, I'm Keith Casey, and I'm an API guy. I wrote the book on API design and have designed, built, and secured APIs for companies all over the world. Are you ready to have more secure APIs? Great. Let's get started in this journey together.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Speakers:** - are (1)

#### [What you should know](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=0)** - [Instructor] In terms of prerequisites for this course, there aren't many. First, linguistically, I should note that for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course, whenever I say OAuth, I mean specifically OAuth 2.0 and not OAuth 1.0. OAuth 1.0 isn't really related to OAuth 2.0 in any significant way anyway. Also, I may say OIDC. I mean OpenID Connect. I'll use them interchangeably, just like they're used interchangeably in the industry. Next, you absolutely need a firm grip on [Web Development](../../Topics/Web%20Development.md). You need to understand how HTTP redirects work and how to store data securely in the browser. You should also have Postman, Insomnia, or some other HTTP client tool. While I love crawling the command line, and it'll work for some of this course, I still recommend a visual client. It'll help you out quite a bit. Next, you need to have a reliable OAuth server available. You can use something as simple as an open source OAuth server, such as the [PHP](../../Skills/Software%20Development/PHP.md)-based one available from the League, but there are many others available in just about every language you want. But remember, now you have to worry about configuration and hosting. Alternatively, you can use the [Google](../../Glossary/Service/Google.md)-provided OAuth Playground and the OpenID Foundation-provided OpenID Connect Playground. Both are great tools because you don't have to worry about configuration. And the Google provided one works with the Google account you probably already have. Throughout this course, I'll also use Okta's API Access Management, which is effectively OAuth as a service. Now, whichever one you choose, while I'd love to say they're interchangeable, that's not quite right.
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=92)** Some are better and worse at different things, so pay very close attention to the examples that I give. And last but not least, you should also have a tool like [jwt.io](https://jwt.io) available. It's a simple website that can decode [JSON](../../Skills/Web%20Development/JSON.md) web [Tokens](../../Skills/Web%20Development/Tokens.md) or JWTs, pronounced jots, and tell you whether or not they're valid. There are tools in libraries to do that locally, but with this, we could stay language agnostic for now. Now, let's talk about how to use the code for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Web Development](../../Topics/Web%20Development.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** http (2), oidc (1), php (1), api (1), json (1)
> **Versions:** 2.0 (2), 1.0 (2)
> **Tools:** postman (1), insomnia (1), command line (1)
> **Analogies:** just like (1), such as (1)
> **CLI Commands:** php (1)
> **URLs:** [jwt.io](https://jwt.io) (1)
> **Warnings:** note that (1)

#### [How to use code for this course](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=0)** - [Instructor] The code for this course is available in a [GitHub](../../Skills/Software%20Development/GitHub.md) repository and split into a few sections. First, there are a few folders like JS OAuth Server and [PHP](../../Skills/Software%20Development/PHP.md) OAuth Server, which separate out each of the OAuth server configurations. Each folder has a read me file to help you get started. For the PHP OAuth server, you'll need at least PHP 8 in Composer. For the [JavaScript](../../Skills/Software%20Development/JavaScript.md) OAuth server, you'll need MPM 8 or above. For all the other OAuth servers, I use Auth Zero or [Google](../../Glossary/Service/Google.md), so you'll need accounts for each. Because each of the OAuth servers supports something a little bit different, I use different servers for different sections, so you'll likely want to set up all of them. If you want to try other OAuth servers not described in this course, go for it. But I recommend you use these first because I know these configurations work. Once you have these environments set up, check out the read me in the root of the directory. This is where I've built out runable samples for various providers. For the most part, you should be able to copy and paste and just run these commands, but you may have to tweak a few depending on your configuration. And finally, if you find any problems or have any corrections in any of this code, please file a GitHub issue in this repository and I'll get them sorted as quickly as possible. Thank you, and let's dive into this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** php (3), composer (1), find (1)
> **Prerequisites:** you'll need (3), set up (2)
> **Env Vars:** php (3), mpm (1)
> **Tools:** github (2)
> **Versions:** php 8 (1)
> **Speakers:** - [instructor] (1)


### 1. What Is OAuth?

[↑ Back to Table of Contents](#table-of-contents)

#### [Describing OAuth 2.0](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=2)** - [Instructor] Years ago, when I joined Okta, I was handed their new OAuth product. At first, I thought I knew OAuth, what you could do with it, and what you should do with it. That weekend, I printed a couple of the key specifications and went deep into the mechanics. What I realized pretty quickly is that I had no clue what OAuth 2.0 was. I thought OAuth 2.0 was just the next version of OAuth 1.0. It's not. I thought it was a specification for authentication. It's not. I thought OAuth 2.0 would solve all my API security problems. It doesn't. I thought OAuth was a prescriptive protocol defining how everything should work from beginning to end. It doesn't. I thought everyone understood Oauth, and I was just behind. They don't. What I found is that, fundamentally, OAuth is a framework for a user to delegate access to one system over to another system. You're authorizing one system to act on behalf of you to that other system. You can do this to share data or functionality or have just a streamlined experience overall. Before we go deeper, let's make sure everyone understands one key difference, authentication versus authorization. Authentication is establishing who you are. It's like when you use your passport or driver's license to enter a bar or use your credit card. In the online world, it's providing a username and password to log in. Alternatively, authorization is establishing what you can do. It's like when you present a ticket to board a flight. In the online world, it's checking your permissions before you can edit that blog post or delete that comment. To map this to the real world,
>
> **[1:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=96)** it's like checking into a hotel. You present your identification at the front desk, which they review. This is authentication. Then they check your reservation and credit card. This is authorization. And then they issue you a key card. That key card does not have your personal information in it. It does not have your credit card information in it, but now, you can use it to access parts of the hotel like your room. By itself, OAuth is limited, and that's on purpose. It's a framework that leaves many things open to interpretation or extension. If it defined everything, well, we'd be stuck with technical decisions made by a very small group of people back in 2012. This framework or extension model lets us have things like OpenID Connect, which again, is a special case of OAuth that gives us user profile information. Now, we can start with a set of principles in OAuth, extend it to a specific use case with OpenID Connect and accomplish more than we ever could have by attempting to specify everything upfront. In the next video, we'll talk about a few of those extensions and what you can use them for.

> [!info]- Semantic Content
>
> **Versions:** 2.0 (3), 1.0 (1)
> **Analogies:** it's like (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### [Making OAuth 2.0 useful with extensions](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=0)** - [Instructor] Now that we have a foundation of understanding what OAuth is, we have a couple challenges in front of us. First, when OAuth was initially written in 2012, the internet was a different world. Yes, there were mobile apps, but not nearly as many or as powerful as we have now. Yes, there were smart TVs and other appliances, but really not that many. Single-page apps were still early, [Kubernetes](../../Skills/DevOps/Kubernetes.md), Docker, and all the underlying concepts around [DevOps](../../Topics/DevOps.md) were still in its infancy. In 2012, there's no way that OAuth authors could have envisioned every potential outcome, approach, tech platform and innovation out there, so they did a very simple yet vital thing. They wrote OAuth as a framework. A framework is a little different than a specification. A specification describes all the internal details of how something will work. On the other hand, a framework describes the boundaries and how things will interact. This makes OAuth a challenge and that some things are open to interpretation, but the trade-off is that we have room to add extensions to address new use cases and constraints we didn't have before. The OAuth framework itself left a number of key places for extensions that will list here and explore later throughout the course. The first extension is OpenID Connect, that's right, OpenID Connect, or OIDC as it's commonly called, is an extension to OAuth, which is for adding identity. We'll talk about this in great detail in the next video, so I'll skip it right here. The next extension is RFC 7519 or the [JSON](../../Skills/Web%20Development/JSON.md) Web Token spec. That's right, JWTs or JWT [Tokens](../../Skills/Web%20Development/Tokens.md) are not described in OAuth,
>
> **[1:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=98)** which means you can build and use OAuth without ever using a JWT token. If you don't, you'll probably have an opaque token or a unique string without any information in it. In that case, we get to our next extension, RFC 7662 Token Introspection. This will let us take that opaque string and turn it into actionable information like profile or authorization data for our applications to use. But now that we're passing around tokens, we're likely to use them or have them compromise in some way. Luckily, we have RFC 7009 for token revocation. It's the extension that lets us say, "Hey, delete this token. It's no longer valid." There are also some end user facing extensions like RFC 8636 or Authorization Code Flow with PKCE or just PKCE. We use this in single page apps or mobile apps and is important, so I have an entire chapter on it later. Next, when we think about architectures like [Microservices](../../Skills/Software%20Development/Microservices.md), we need to think about different services calling one another on behalf of users or even other services, and then we get to RFC 8692 Token Exchange. If you ever think about impersonation, this extension has a detailed analysis of the trade-offs. Please read them first. Now, that's a lot of extensions, but don't worry, we're down to my favorite extension, the final extension of all, and it's secretly the most powerful. If we look at the extensions, we realize every individual OAuth provider might support some, all, or some combination of them. Which one does our OAuth provider support?
>
> **[3:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=191)** This is where RFC 8414 or the Authorization Server [Metadata](../../Skills/Web%20Development/Metadata.md) Discovery Spec comes in. Wow, say that three times fast. This extension will give us an endpoint that we can query to figure out which extensions our OAuth implementation supports. It's wonderful. Unfortunately, it too is optional. Now, there are numerous other extensions beyond these common ones. We're going to dive into just a handful of them throughout this course, but next, let's go ahead and dive into OpenID Connect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [DevOps](../../Topics/DevOps.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Env Vars:** rfc (6), jwt (2), pkce (2), oidc (1), json (1)
> **Documentation:** rfc (6), specification (2), spec (2)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** docker (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Extending OAuth 2.0 with OpenID Connect](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=0)** - [Instructor] OpenID Connect is the most important OAuth extension of all. Remember, the underlying premise of OAuth is to delegate authorization, effectively, to allow another system to act on my behalf or use my data in some specific way. Unfortunately, most of OAuth is loosely structured and lightly specified. This makes interoperability in exchanging data quite hard, where every system has to know and understand the others it might interact with. On the other hand, OIDC adds a rigid structure to the user's profile data, all expressed through JWTs we can easily retrieve and parse. Please remember, OIDC is not an alternative to OAuth, but an extension on top of it. Therefore, everything we get from OAuth, we have with OpenID Connect, with a few small exceptions. We add an ID token to represent the user, and we lose the client credential flow. Since client credential flow is specifically for machine to machine flows where there isn't a user, that makes sense. You can't have a user profile without a user. And here's what a sample ID token looks like once we've decoded it. The fields will vary depending on what we request, but the core parts are there. Now, when we want a user's email address, we can request that and get it. The best part is that we don't care if the user's identity information has come from [Google](../../Glossary/Service/Google.md), [Facebook](../../Glossary/Service/Facebook.md), Okta, [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Directory, or any other provider. OpenID Connect tells everyone what to name the field so we can trust it to be there. Notice that we have fields like name, given name, and family name, which we can easily retrieve and process. We even have birthdate and profile picture.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=94)** If we want to bootstrap a user's profile in our new app, we have all the details to do that. In fact, this becomes the most common use case for OpenID Connect, and you've already seen it, single sign-on. In the enterprise world, this is accomplished with SAML, but in the modern web, we've done it much more quickly and easily. Every time you see one of those Sign-in with Google, [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), [GitHub](../../Skills/Software%20Development/GitHub.md), et cetera buttons, they're using OpenID Connect behind the scenes to request and retrieve your profile information and set up your profile. In fact, the next time you go through that flow, watch the URL. Most likely, you'll see the OAuth parameters going back and forth, and you'll see that ever present this website is requesting your information. Do you authorize it? Congratulations, you're already using OpenID Connect built on top of OAuth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Facebook](../../Glossary/Service/Facebook.md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** oidc (2), saml (1), url (1)
> **Tools:** github (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Foundational Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [OAuth 2.0 fundamentals](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=0)** - [Instructor] So far in this course, we've talked about what OAuth is. Now let's talk about how OAuth works. For that, we'll start with the vocabulary. I'll use these terms properly and consistently going forward, so you may want to keep those video bookmarked. There are seven terms that are key to know in OAuth. Some of the extensions will add more terms, but these will apply throughout. First of all, we have the resource owner, that's you or whoever is authenticating and eventually authorizing our applications. Next, we have the resource server, and that's what we're going to ask the resource owner to grant us access to, but we'll come back to in a moment. Next, we have the grant type or flow. This is the process that we use to request and eventually grant authorization. The grant types vary depending on use case. For example, you don't use the same flow when you have a backend app, a mobile app, or a smart appliance. The interfaces, security models, and risks are radically different, so we plan accordingly. Most of the chapters of this course are separated by grant type, so we'll talk about this often. Within that flow, we also have scopes. A scope is simply permission that our app is requesting. This could be read-write, access, profile access, or more. Outside of open ID connect, these will vary wildly between applications. Next up, we have the authorization server or auth server. This is where the grant type and scope are sent to request authorization. It's the brains of the process evaluating our identity, your request, the authorization policies, and more to determine if it will grant the permissions
>
> **[1:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=93)** you've requested. OAuth does not define the internal operations of your auth server, so your policies could based on literally anything, use a group membership, scopes requested, time of day, favorite color, or more. It depends on your OAuth provider. Assuming your request is successful, you'll get back a token. That token could be a JWT or Jot token that you can decode and read, or it could be an opaque string that doesn't mean anything on its own. Regardless of what kind of token you get, it'll relate to a set of claims. These claims give you details on the authorization granted. If you have a Jot token, those claims will be embedded in the token itself so you can decode and read them. Otherwise, you have to use that token against URL on the Auth server to figure out the claims. And now finally, we get back to the resource server where we use the token. The resource server can validate the token, review the permissions granted, and allow requesting application access. To map this to the real world. It's checking into that hotel. You are the resource owner and you want access to a room. That's your resource. The front desk is your authorization server and validates your request that you have a reservation and your credit card works and issues you a key card or token that grants you access. Now you use that key card to get access to the room. Now that we have vocabulary and a mapping to the real world, let's dive into the specific endpoints and the mechanics behind them.

> [!info]- Semantic Content
>
> **Env Vars:** jwt (1), url (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Touring the OAuth endpoints](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=0)** - [Instructor] The endpoints or URLs that we have in OAuth are relatively simple, but once we add extensions, it gets a lot more complicated. So let's start with the simple bits. The base framework, we have the authorized and token endpoints. The authorized endpoint is where we make our initial request to evaluate our grant type and our scope request. Once we complete that process, we go to the token endpoint to actually get our token. At first, it feels weird to make two separate requests, but by splitting the steps, we can use them independently or together as our needs change. For example, some of our grant types have a client side portion where it happens in the single page app or a mobile app. Since the end user or even a malicious user can monitor and modify that transaction, we can't use secrets and we can't trust the results. But having two steps, we could do a client side step, which is untrusted, and then a server side step, which becomes trusted. Don't worry, we'll go into that in more detail in some of the grant types. Now, every other endpoint that I'll cover here is optional. So depending on your authorization [Server Configuration](../../Skills/Network%20and%20System%20Administration/Server%20Configuration.md), you may or may not have these endpoints available. First, if you have open ID connect support, you'll have the user info endpoint. This is URL your application can call, which returns the claims about the user. According to the OIDC specification, this could be the user's whole profile, their email, their name, phone number, or any combination of those depending on the scopes you requested. Next is my favorite endpoint, the discovery endpoint. This comes with RFC 8414. It's not widely supported, but when it is, it gives you all the URLs
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=94)** and all the capabilities of your authorization server. When in doubt, see if your OAuth implementation supports this and if it does, use it. Next up, you may have the introspect endpoint. This is to retrieve information about the token itself, like if it's still valid, when it expires, or similar. This endpoint is vitally important when you have long lived access [Tokens](../../Skills/Web%20Development/Tokens.md). Otherwise, you can have downstream apps acting like they still have the authorization they no longer have. And the final endpoint we'll cover here is revoke. This gives us the ability to revoke a specific or even a list of tokens or a single quick HTTP request. This endpoint comes to you through RFC 7009, but even ALT servers who don't support the spec probably have an approach. So look into your documentation for details. With other extensions, you'll get additional endpoints but these are the most important and the most common. Should also realize an awkward question in here. When someone asks, do you support OAuth? You need to remember that their definition of OAuth and your definition of OAuth may not be the same. So tread carefully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Server Configuration](../../Skills/Network%20and%20System%20Administration/Server%20Configuration.md) (1)
> **Env Vars:** rfc (2), url (1), oidc (1), http (1), alt (1)
> **Documentation:** rfc (2), specification (1), spec (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Grant type overview](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=0)** - [Instructor] Now that we have the foundations, let's talk about grant types or OAuth flows. One of the best parts of OAuth are the grant type extensions will solve new problems that the original authors did not have at that time. In this course, we'll talk about six grant types that cover a variety of use cases. Right now, instead of working through each in detail, let's talk about when and where you might use them. Before you choose an OAuth flow, you need to answer three questions. First, are you authorizing an application on behalf of a user or a service? Next, if there's a user, is there a browser on the device or the client? Finally, is your application entirely server-side or does it have a client-side component? Now that we know each of these, we can work through a decision tree. First, are we dealing with a user or service? If it's a service, we need to use the client credential flow. It's specifically designed for backend systems to interact without any user involved whatsoever. If it's a user, we need to continue looking at our client system. Is there a browser on it? If we don't have a browser in the system, we have to use the device grant type. It's specifically designed for relatively dumb devices that can generate a URL, but not handle browsers, redirects, and the like. Now we have to look at the application itself. Is it server-side or partially client-side? If the app is partially client-side, like a mobile app or single-page app, we used to use the implicit grant type, but it has some major weaknesses. So as an industry, we should shift to authorization code flow with PKCE or simply the Pixy flow.
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=95)** If it's entirely server-side, the application can keep secrets and credentials for us, so we'll want to use the authorization code flow or auth code flow. The final grant type is a special case. We have a legacy server-side app that we're trying to move to OAuth, we may consider the resource owner password flow. It's a transitional use case though. Not for regular or long-term usage. Now, if you just read about grant types in general, it's not that clear. But if you remember the three decision points, are we protecting a user service, is there a browser available or not, and is the application server-side or client-side, you can get to a good answer pretty quickly.

> [!info]- Semantic Content
>
> **Env Vars:** url (1), pkce (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Designing and using OAuth scopes](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=0)** - [Narrator] Now that we've talked about grant types or flows, let's talk about scopes and permissions. In OAuth, a scope is simply a set of permissions you can request. They can be simple like create, read, update or delete, or as complex as you want. I always recommend that you start as simply as you can. It's always easy to get more complicated over time but exceptionally difficult to simplify things once people start using your implementation, and frankly, this is one of the first places where OAuth will give you headaches. For OAuth scopes, there isn't a standard naming format. The only real requirement is that they're unique strings within a given OAuth provider. With that in mind, let's look at some implementations. Within [GitHub](../../Skills/Software%20Development/GitHub.md), if you look at the scopes, they're all over the place. My favorite are the scopes for a repository. If you want full access to a repository, you can request the repo scope. On the other hand, if you just want access to the user's public repositories, you can request public_repo. Or maybe you want deployment permission so you'd request repo_deployment. Or maybe you want to invite someone to repos so you request repo:invite or maybe you want to grant access to write repository hooks. You could use write:repo_hook. To be blunt, this naming is painfully inconsistent and predictable which makes documentation and just day-to-day usage harder. There's also hidden costs for GitHub users. Basically, once they gain understanding of one part of the system, they can't just apply that to the next. They have to relearn everything every time.
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=95)** On the other end of the spectrum is [Google](../../Glossary/Service/Google.md). Google's APIs are all fully qualified URLs which include the product name, the resource the permission will be granted on, and the action which will be granted. Even if you've never used one of their APIs, you could see the scopes and reason out most of their purpose, or from the opposite direction, you can make some educated guesses on what scopes you might need for which [products](../../Skills/Software%20Development/Microsoft%20Products.md). Now you might see some significance in the fact that these scopes are URLs, like there may be documentation or tools at that URL. Unfortunately, that isn't the case, but there's nothing stopping Google from doing it. Somewhere in the middle is Okta's approach. They use a simple namespace, then a resource, then action. The namespace makes it clear you're working within the Okta API, and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) gives you specific information into what permissions you're granting. While all three are valid approaches, I recommend using Okta as your model. It's clear, simple, predictable, and will be the easiest to document and describe to others without loading it with additional meaning. And again, OpenID Connect is the extreme opposite of default OAuth. When you specify scopes in an OIDC flow, you must include a scope called openid. After that, you can include any combination of profile, email, address, or phone. Not surprisingly, those scopes will get claims for each of those. Or to put it another way, the resulting ID token and all requests to the user infill endpoint will include the related claims. But remember, these scopes only apply to OpenID Connect. If you're using more general OAuth,
>
> **[3:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=187)** you have unlimited options. But again, I recommend something clear and predictable to make life easier for you, your team, and your users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** public_repo (1), repo_deployment (1), repo_hook (1)
> **Env Vars:** url (1), api (1), oidc (1)
> **CLI Commands:** make (2)
> **Tools:** github (2)
> **Speakers:** - [narrator] (1)

#### [Using the OAuth playground](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=0)** - [Instructor] Since [Google](../../Glossary/Service/Google.md) has done such a great job with their scopes, let's take a quick tour of the Google OAuth Playground. While we're not going to use this to complete any grant types and examples in this course, the OAuth Playground is a great way to see the steps in action. Before we dive in, you should know that every request I'm going to do here is real. The [Tokens](../../Skills/Web%20Development/Tokens.md) are real and would grant valid access to my Google account. If you got them, you could cause me limitless trouble. But here's the fun thing. These tokens are only valid for 24 hours. Unless you see this video while I'm still recording the course, I have zero risk. That said, don't worry. I'll still deactivate or revoke all the tokens shortly. With that, let's see things in action. First of all, Google's OAuth Playground includes every API for every product they have. Since some of us have at least seen Google Analytics, let's start there. Now, we can expand that to see the scopes. Remember, scopes are the permissions we can request, not the endpoints that we'd use. Let's choose the Analytics read-only scope and start the process. This will use the auth-code flow, and we'll get into that later in this course. So we'll go ahead and select this. We'll say Authorize APIs, and now we have to authenticate. So I'll choose my account. And now, we're presented with this new screen. Now, we have to authorize access to this API. A couple of important things here. First, there's the warning message about the playground. That's unique to the system, so don't worry about that. The next line is describing the scope we're about to authorize. This is called the consent and is common in authorization flows. You probably see this every time
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=92)** you use a sign-in with whatever button. That system will say "This system is requesting your email address, your profile information." That's the exact same thing it's doing here. Now, the important part is that our auth server tells us what the scope is going to do. In this case, it's going to grant access to a system to see and download our Google Analytics data. We'll go ahead and allow it. Now, we see the request that was used, and we see the next request that we're going to execute. On that request, there's the auth code that we got from the previous step. Now, we exchange this authorization code for our tokens, and sure enough, here's the result, with both the access and the refresh tokens. We'll talk about tokens in detail in the next chapter, but one quick thing to note here. This access token is not a [JSON](../../Skills/Web%20Development/JSON.md) web token or JWT. It's a big, ugly string that maps back to specific access that Google keeps on their side of things. But regardless, now we have an access token, and we can make some requests. And just because the OAuth Playground is cool, we can go ahead and hit List possible operations, and it'll tell you everything you could do with this token. Now that we've seen our first tokens, let's go ahead and go deep into what that means and what to do with them, and then we'll get into grant types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (7), [Tokens](../../Skills/Web%20Development/Tokens.md) (7), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** api (2), json (1), jwt (1)
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 3. OAuth Tokens

[↑ Back to Table of Contents](#table-of-contents)

#### [OAuth 2.0 tokens](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=0)** - [Instructor] With some understanding of the endpoints, let's talk about what we're retrieving from them, [Tokens](../../Skills/Web%20Development/Tokens.md). In the core OAuth framework, RFC 6749, there are two types of tokens specified, access and refresh. The OpenID Connect specification adds a third, called ID token. The access token is what gives the client application access to the protected resource. This is valuable because now we're not passing around a user's username and password, which could easily be compromised or even cached. Further, we can validate this token locally or if available, via the introspect endpoint. The refresh token is a little different. It's not used with protected resources. Instead, it's designed so that when an access token expires, you can use a refresh token to request a new access token. It really has no other purpose than that. One fun thing about these tokens and the OAuth framework, it doesn't detail how a token is structured or even if it should be. This is what we call an opaque token. There's nothing in it. It's just a string that serves as a unique identifier. Back to some details in the authorization server, the alternative is a [JSON](../../Skills/Web%20Development/JSON.md) Web Token, or JWT, pronounced jot. As opposed to an opaque token, this token is a base 64 encoded JSON document, should also have signature information to verify both who sent it and the data in it. The third and final token is the ID token. This is only included when OpenID Connect is being used, and it's radically different from the other tokens.
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=95)** To understand why we have to consider the OAuth framework and the underlying JWT specification. Neither gives us any real structure in what should be in a token or how it should be represented. To be useful and interoperable, the OpenID Connect spec goes in a great detail on the contents of the token, how it's structured, how it's signed, and how to validate it. In fact, it goes as far as listing which fields are present under which conditions and how they should be used. Without it, a relatively simple field like a user's first name would require massive planning, code, and stress for all involved. Now, let's dig into JWTs specifically.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **Env Vars:** json (2), jwt (2), rfc (1)
> **Documentation:** specification (2), rfc (1), spec (1)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### [Validating JWTs](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=0)** - [Instructor] [JSON](../../Skills/Web%20Development/JSON.md) Web [Tokens](../../Skills/Web%20Development/Tokens.md), or JWTs, or jot tokens, whatever you want to call them, are both incredibly powerful and completely unnecessary with an OAuth. In the last video, I talked about three types of tokens. Refresh tokens are never jots. Access tokens are often jots, but don't have to be. The final type of token, the ID token, specified by open ID connect, must be a jot token. So regardless of where you find them, you must validate them. You can't use an unvalidated token under any circumstances. Now, before you try to validate your tokens, you must be sure to find the signing keys. You should be able to find them in the documentation for your OAuth provider. Every jot token has three parts separated by a period. There's the header, the payload, and the signature. The first portion, or header, tells us the algorithm used to generate the token. We'll need that in a moment. The second portion is the payload, or the data we actually wanted. At this point, you probably want to grab the fields and start using them, but wait, we can't do that. We don't know if the token should be trusted or if it's been modified. After all, if you're granting user access based on the payload data, we need to know that it's right. That brings us to the third and final portion of the token: the signature. The signature is what lets us validate that the token was sent by who we expected and the included data hasn't been modified. Most programming languages have numerous libraries for validating JWTs, so I'll just mention the steps we need. First, we'll need the data, which was signed, this is the payload,
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=92)** we'll need the algorithm the center used, that was the header, and then we need to combine that with the public key from the sender. That's the signing key we had to retrieve from the documentation. Now, once we calculate the new signature, we compare that with the one sent along in the original token, that was that third parameter. If they don't match, we must reject the token immediately. If they do match, that's a good sign, but we may not be done. In the payload itself, you have some name value pairs called claims. These claims could have absolutely anything in them, ranging from information about the user who authenticated, to the authorization server who issued the token, to information about how long you can use the token. While all these claims are entirely optional, there are a few which you should respect if you find them. There's ISS. ISS is the issuer of the token. This will usually be your authorization server. If you find this field present, make sure it's what you expect. Next is sub, or the subject. This is the entity the token is about. This will usually be the end user who authenticated or the system who requested the token. Next, we have the aud, or audience claim. This is the intended audience of the token. This is normally going to be the application which requested the token. If you don't respect this, it's like going to a restaurant and getting your order mixed up. You might get something that's okay and works, or you might get something you're violently allergic to that sends you to the hospital. You must respect the audience. Next up we have IAT, or issued at time. This is a simple unix timestamp that lets you determine how old this token is.
>
> **[3:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=186)** It's not used often, but it's available sometimes if you need it. And finally, we have exp, or the expiration claim. This is another timestamp describing when you must stop using this token. Once this token expires, you want to get a new one from the authorization server. This is vitally important because your user's information or access could change, and you don't want to make a decision based on bad or out of date information. While it's easy to validate JWTs, it's also easy to make a mistake in it. So I recommend using a proven library. Check out [jwt.io](https://jwt.io) for a list of which libraries support which [Algorithms](../../Skills/Software%20Development/Algorithms.md) to find the one you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (6), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** find (6), make (3)
> **Env Vars:** iss (2), json (1), iat (1)
> **Documentation:** the documentation (2)
> **URLs:** [jwt.io](https://jwt.io) (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)

#### [Handling tokens safely and securely](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=0)** - [Instructor] Now that we have all these [Tokens](../../Skills/Web%20Development/Tokens.md), and we validate some of them to understand they're safe, we need to use and protect them effectively. First of all, we have to remember that both access and refresh tokens are credentials. Therefore, we have to protect them and secure them, just like we would any other secret in our applications. In general, that means you shouldn't embed them in client-side code and should only store them in secure cookies which can be used over HTTPS. Then we can look at the contents of the token directly. Since the ID token is usually going to go to the owner and the owner alone, you probably want to embed sensitive information in it. Don't. Don't store sensitive information. Credit card numbers, government IDs, whatever. Do not store them in the token. A better approach is to use the token at the resource server to retrieve that sense of information directly. That protects both the token and the end user. This introduces a design challenge, though. Some OAuth servers will grant a long-lived access token for applications to use, so you don't have to reauthorize very often. That seems like a great idea, except what happens if we deactivate a user's account? What happens if it's a high-security transaction? What happens if the underlying state of the system changes? Since the protected resource might not validate the token again, we have a problem. Therefore, we have to choose token lifetime specific to the use case. Think of it this way. If you authorize an application to read your YouTube playlist, it's low risk. Even if you revoke access, what can the app do? Read-only access isn't a huge problem. You can use an access token that lasts for months.
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=95)** Alternatively, if you authorize an application to view your bank account balance, while you won't lose anything if it's compromised, it's still protecting sensitive information, so inherently, it's higher risk. In this case, you may want to limit the access token lifetime to days or weeks. Finally, if you authorize an application to move money between your bank accounts, the consequences of misusing or abusing this access are high. In this case, you want to immediately know if and when access is revoked, so your token lifetime can be as little as five or 10 minutes, and that's probably the best option. While core OAuth has token expiration, it doesn't have token revocation. Basically, you have to wait for a token to expire, but you can't force it. The token revocation RFC gives us a revoke endpoint, where we can force-invalidate tokens, but not every OAuth provider supports it. Alternatively, and more likely, we need to use an OAuth token expiration time that reflects the risk of our use case. This is where refresh tokens are particularly useful. When the client application attempts to exchange the refresh token for a new access token, a properly designed OAuth server will validate its access. If a user has been deactivated, the access has been revoked, or the resulting authorization policy changed, our access token will reflect that. Now, regardless of which approach you take, you must protect your tokens. They're credentials, so treat them as such. Now, now we finally have all the mechanics at OAuth and OpenID Connect,
>
> **[3:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=189)** and we can talk about grant types and get into some sample code. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (5)
> **Env Vars:** https (1), rfc (1)
> **Documentation:** rfc (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** sample code (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 4. Grant Type: Authorization Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview: Authorization Code Flow](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=0)** - [Speaker 1] The first grant type we'll cover is the authorization code flow. As a parent, I know I'm not supposed to have favorites, but this is my favorite grant type. Sure, it's not the simplest flow and it's not mobile friendly out of the box, but it just plain works. Since it depends on a backend component and the language doesn't matter, you can count on it to protect your client's secret. There is an opportunity for it to be attacked, but that window's very small. Don't worry, I'll go over that in the security considerations video. But enough of me just talking about it. Let's show the steps of the flow. In practice, this is what it looks like. The user navigates to a page and the application hits something that's a protected resource. It could be anything from an API to account information. Next, they send you to the identity provider or the authorization server that both trust you and perform the authentication and grant authorizations, but you don't just get back an access token. Instead, you get back an auth code. Now the auth code is a short-lived one-time use code that the only thing it's useful for is sending it back to our token endpoint to get backend access and potentially a refresh token, both of which go back to the application directly. The end user briefly sees the auth code, but since it's one-time use code, it's only useful for a moment and then never again. One useful thing to note on this flow, notice that first, the user authenticates, then the application authenticates. That means our authorization server knows who it granted a token to and for which app. If later we found that the app was malicious or that the user was compromised in some way,
>
> **[1:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=93)** we could revoke access immediately. As with the other OAuth flows, at no time did the application have the chance to touch our password, and further the user and the browser never had the chance to touch the access token. This is effectively the gold standard for OAuth and if the world was simple and easy, this is what we'd use for all flows, but it's not. So let's talk about where we should and shouldn't use it.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [speaker (1)

#### [When should you use this?](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=0)** - [Instructor] Now, when do we want to use authorization code flow? If we go back to our decision tree from our grant type video, there are three different questions before we can get to this grant type. First, we have to have a user involved, which also means we can use this grant type for OpenID Connect in addition to regular OAuth. Next, we need to have a browser available on the system we're using. This isn't for smart devices or similar. Finally, our app must be server-side. This doesn't mean you can't use [JavaScript](../../Skills/Software%20Development/JavaScript.md), but the authentication code itself must be server-side. This means we can't use normal auth code flow with mobile apps or single-page apps. The reason for this comes back to this diagram, which shows that there's both a user authentication and an application or client authentication. The user authenticates with their credentials with their identity provider, and then the application authenticates itself with the authorization server, and that's the key. When the application authenticates itself, it uses its own client ID and secret. That secret is a credential which must be protected like any other credential. Therefore, regardless of your application's tech stack or architecture, you need to store that client secret securely in some backend component. So to be clear one more time, do not use authorization code flow in a mobile app, single-page app or on any physical device where you may have to embed a secret. The second you put that secret into the code or memory that the user or other apps have access to, consider it compromised. All of that said, if you do need to build for single-page apps or mobile apps, check out auth code with PKCE,
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=94)** which we'll cover in just a couple sessions. But enough talk. Let's see it in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** pkce (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Lab: Build an example (web app or Postman)](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=0)** - [Instructor] As I noted earlier, the authorization code flow is my favorite grant type. Not because it's simple, but because it's effective. The third party application never sees our credentials and the end user never sees the access token. It's a good combination. For this example, we're going to keep it simple and use Postman to interact with our Auth0 configuration. In addition to this video, I have the step-by-step instructions and the sample code for this course. Within the project, simply find README-auth-code, and this has the step-by-step instructions detailing every field and what it should be set to. So with that, let's go ahead and dive in. First of all, we have to start within our Auth0 configuration. So go to Applications, application, and we'll choose our default app. All right, first in auth0 we want to go ahead and grab our domain. So we copy that and we go back to Postman. On the Postman side of things we'll want to start this with https, add our domain, and then in this case we'll add oauth/authorize, and then I'll cover the authorized endpoint that we'll hit first. Then we want to do the exact same thing with https, add the domain and we'll say oath/token. Now we need the Client ID and Client Secret, which are also on the auth0 side. So we'll go back to auth0, we'll grab our Client ID, we'll go back to Postman and put that in. And then we'll do the same thing for the Client Secret. Now that we have our Client ID
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=92)** and Client Secret, we need to set some scopes. Let's go ahead and start easy and say openid, so we'll stay within the realm of openid connect, and then we'll say email. Now if all goes well, when I hit get new access token, I'll be redirected through auth0, asked to authenticate, and then redirected back here with a token. So let's give it a try. It says Authentication complete, and now it's redirecting back and sure enough, I got an access token. Let me go ahead and grab this. Actually, let's grab the ID token, that's way more interesting. Grab the ID token from here, and now we'll go over to [jwt.io](https://jwt.io). On [jwt.io](https://jwt.io) we'll scroll down just a little bit and we'll drop our ID token here to see what's in it. And sure enough, we've got email, and there's my email. We've got email verified, we've got the issued at, we've got the audience, everything that we expected to be there is there. Now let's make one more tweak to our call and see what it does. So we'll go back to Postman and make that change. In Postman, instead of saying openid and email, let's say openid and profile, we'll say get new access token, and sure enough it authenticated properly. And now we'll see a new ID token. Let's go ahead and grab this, and go back to [jwt.io](https://jwt.io) to see what's in it this time. On [jwt.io](https://jwt.io), we'll go ahead and drop that ID token in, and sure enough, our payload has changed. Now I have a nickname, I have a name, and then I even have a profile picture
>
> **[3:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=185)** that auth0 automatically retrieved on my behalf. But you're probably thinking to yourself, where's the login? What happened there? Let me go back to Postman and show you what happened. On the Postman side of things, Postman knows that we're logged in behind the scenes. So let's go ahead and say, clear cookies. So now any session that's already there is gone. And now let's say get new access token. So it asked me to authenticate via browser and it pops open this window. So I'll say, keith@caseysoftware, and then I'll type in the password for the user that I created earlier. This is not my account password for auth0 as a whole for my administrator role, this is for my individual user. Now, if all has gone well, I typed the password correctly, and it redirects, and sure enough we'll get back to the access token yet again. Important thing to remember, because I was already logged in because Postman already had the concept of the cookies behind the scenes, it automatically carried that over and didn't ask me to log in again. So keep that in mind as you're testing this. It's really easy to make that mistake.

> [!info]- Semantic Content
>
> **Tools:** postman (10)
> **Cross-References:** go back to (6)
> **CLI Commands:** make (3), find (1)
> **URLs:** [jwt.io](https://jwt.io) (4)
> **UI Navigation:** go to (1), scroll down (1)
> **Env Vars:** readme (1)
> **Exercise Files:** sample code (1)
> **Analogies:** picture (1)

#### [Auth-Code and PKCE overview](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=0)** - [Instructor] If we go back to the beginnings of OAuth 2.0 in 2012, the tech world was a little different. We'd had mobile apps for a few years, but single-page apps were still relatively new. Unlike normal web apps, they loaded themselves entirely client-side in the browser or on a device, and therefore, we couldn't count on them to keep secrets for us. The OAuth authors realized this issue and include the implicit or hybrid grant type, which allowed us to still use OAuth, but with a few limitations. For example, we couldn't use a client secret, 'cause remember, we can't keep secrets, and therefore, we also couldn't use refresh [Tokens](../../Skills/Web%20Development/Tokens.md). Luckily, because OAuth is a framework and not a specification, we could extend it as we figured out new and better approaches. Enter RFC 7636, or Proof Key for Code Exchange, by OAuth public clients. It's a mouthful. So we just call it auth code with PKCE, or simply, PKCE. What PKCE introduces is, well, it doesn't introduce, but it restores the application authentication steps we had from the original auth code flow. Let's step through it in a diagram. This flow starts a little differently. Instead of just redirecting the user to the identity provider, the app creates a code verifier and uses it to generate a challenge. Then when the app does the redirect, the app passes along the challenge. The user does their normal authentication, and the server generates the auth code. Now, here, we have a second difference. When the app gets the auth code, it makes a token request, specifically using the code verifier it generated at the beginning. Then the auth server uses as a verifier
>
> **[1:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=93)** to regenerate the original challenge and compares them. If they match, we know that this is the app that started the process, and the auth server generates the tokens. If they don't match, we reject the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the flow and force the app to start over with a new verifier and challenge. We managed to recreate app authentication without having to embed secrets in the app. In fact, this is originally called the AppAuth approach. This has been an official extension since 2017, but was in production use much earlier than that, so it's a long proven track record at this point. Now, you might still see the implicit or hybrid grant type in older single-page apps, but most OAuth providers like [Google](../../Glossary/Service/Google.md), Apple, and others have informally deprecated, so you won't see it very often. Going forward, when you're building single-page apps or mobile apps, authorization code flow with PKCE or PKCE is the answer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** pkce (5), rfc (1)
> **Documentation:** specification (1), rfc (1)
> **Versions:** 2.0 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [When should you use PKCE?](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=0)** - [Instructor] Now when do we use the authorization code flow as PKCE or simply Pixy? If we go back to the decision tree from our grant type video, we have the same three questions as always. First, do we have a user involved. And yes we do, which means we can also use this grant type for OpenID Connect in addition to basic OAuth. Next, we need to have a browser available in the system we're using. This isn't for simple smart devices or things like that. Finally, our app will have a client-side component. Therefore, Pixy is ideal for mobile apps or single-page apps. Or to put it another way, if you ever see the hybrid grant type or implicit grant type in any sort of guidance, documentation, or et cetera, you probably want to use Pixy instead. Those were the old ways of doing things before we had this additional extension. Now, most people will also want to consider this for smart devices, like an Xbox. At first glance, that makes sense. After all, you have a user and a capable device with a good browser, and you can't trust a client application to keep secrets for us. But what you're missing is a good secure input approach. Have you ever tried to type a password with a game controller? And by the way, you'd be typing this in front of the entire room. So not only is this a miserable [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md), it's also inherently insecure. Therefore, you should probably look at the device grant type and not Pixy. Don't worry. We'll talk about device grant type later. And at the time of this video, there's even a great set of libraries available at [appauth.io](https://appauth.io), which will help you implement Pixy quickly and easily for [Android](../../Glossary/Sdk/Android.md), iOS, and many [JavaScript](../../Skills/Software%20Development/JavaScript.md) frameworks. It doesn't get much easier than that.
>
> **[1:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=93)** But now let's actually see it in action to see how everything works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [Android](../../Glossary/Sdk/Android.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** ios (1)
> **URLs:** [appauth.io](https://appauth.io) (1)
> **Env Vars:** pkce (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Lab: Build an example (native app or spa)](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=0)** - [Instructor] To see Auth-Code with PKCE in action, we need to set a few things up both locally and server side. In this case, we'll use some sample code from Auth0 available here. While we could follow this entire guide, they make it easy with some simple steps when we download. Now, first, let's make sure the download is going, unzip it, and then move into that folder to start the install process. So let's go ahead and make sure we're in the right folder, and sure enough, looks like we are, and so we'll say [npm](../../Skills/Web%20Development/npm.md) install. So npm will make sure that we have all the right packages and everything ready to go. Now that we have that going, let's go ahead and configure the Auth0 side of things. So we'll go back to the browser. From the Auth0 dashboard, we'll hit Applications, Applications, and we'll hit our default application here. Now, when we start our application, it's going to be running on local host 3000. So let's go ahead and set that in a couple different places. So first we need to make sure it's in the callback URLs. This will tell Auth0, here's a safe URL that we plan on redirecting the user to, and therefore the [Tokens](../../Skills/Web%20Development/Tokens.md) to after the authentication flows correct. Then we'll go ahead and add it to the Allowed Logouts URL. That will tell Auth0 that after the user logs out, it'll redirect them back to this URL. And then finally, we need to make one more change. We need to add local hosts to the Allowed Web Origins list. This is going to tell Auth0, this is a safe origin that this flow might start from. Now it's really easy to think that we took care of all the steps here. There's one more change we need to make. If we scroll back towards the top,
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=92)** we need to change our Application Type from regular web app to single page app. That's an easy step to skip, but it absolutely must be done because we're telling Auth0, don't count on normal Auth-Code flow. This is Auth-Code with PKCE now. So we'll scroll down to the bottom and hit Save. All right, looks like our changes were saved. Now let's go ahead and go back to the application. If you downloaded this project directly from [GitHub](../../Skills/Software%20Development/GitHub.md), you might need to make a tweak here. In the root of this project, check for auth_config.[JSON](../../Skills/Web%20Development/JSON.md), and if it's there and looks something like this, great. If it's not there, go back to your Auth0 dashboard and copy your domain and clientId into this JSON structure. This step is also detailed in the Read Me. Now let's start the app and go to the browser. On the command line, we'll go ahead and say npm run dev, which will go ahead and put in our developer state, so we have good detailed logs for debugging. Looks like everything started off perfectly. So now let's go to the browser. In the browser, when we hit localhost:3000, we have a very simple application and we have a Login button here. And if all goes well when we click this button, we're redirected over to Auth0. So I'll go ahead and log in. And if I logged in properly, I'm redirected back to the application transparently, one major thing has changed here. Instead of having a Login button, there's my profile picture. So behind the scenes, this used the OpenID Connect profile scope over the PKCE grant type to pull my information.
>
> **[3:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=186)** And the most important part here, at no time, did we have to ever embed any secrets into our application. In fact, one last thing, you could see we've got my entire profile information here. This is the payload that actually came back in the ID token. And if I wanted to, I could go ahead and say Log Out, and it'll log me out both of the application and of Auth0 directly. This is a quick and easy way to get OpenID Connect embedded in any application in minutes. Now let's go ahead and dive into some of the security implications around both Auth-Code and the PKCE flows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** make (8), npm (3), unzip (1)
> **Env Vars:** pkce (4), url (3), json (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** go to (2), scroll down (1)
> **Prerequisites:** install (2), configure (1)
> **Code Identifiers:** auth_config (1), clientid (1)
> **Tools:** github (1), command line (1)

#### [Security considerations](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=0)** - [Instructor] Now let's talk about how to properly secure both the Authorization Code Flow and PKCE flows. To be honest, these are the easiest to secure by far, which is entirely due to how these flows work and which systems or people can see what. First, remember we are dealing with credentials, so communication should be over secure mechanisms, such as TLS. That still applies to this flow, even though our window for attack is much smaller. It's only open while we received but have not used the auth code. Remember, after the user authenticates, they get that auth code, which is the server-side app then exchanges for the access token. That code can only be used once, so while you have to protect it, it really only matters for a brief window, and the user or any other application in the browser can't even see any of the resulting access [Tokens](../../Skills/Web%20Development/Tokens.md) or refresh tokens, so they can't leak that. One potential vulnerability is that after logging in with your identity provider, whether it's [Google](../../Glossary/Service/Google.md) or Okta or [Facebook](../../Glossary/Service/Facebook.md), your user's likely to still have a web browser session active. If another application can send that user to the same identity provider without their knowledge or under a false context, that could be a problem. Now, realistically, those providers may still request access or user-based consent based on the scopes requested, so most users will have a chance to stop the interaction, but it's not foolproof. Next, just like other grant types, we have a redirect URI which is where the OAuth server will send the auth code after authorization is complete. If our OAuth provider allows arbitrary redirect URIs, someone can grab our auth code
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=92)** and get an access token as us. It's unlikely to be a problem, but I'd recommend checking your server regardless because getting this wrong is catastrophic. Finally, you must validate your access token. This isn't unique to this flow, but I'm saying it every time because it's that important. Please validate your tokens as described by RFC 7519 or your OAuth provider. We talked about this already earlier in the course. Overall, the Authorization Code grant type with PKCE when you need it, is one of the most secure. The only effective attacks I've seen against it are either compromising the user or compromising the application, neither of which have anything to do with OAuth. Now that we've covered my favorite grant type, let's look at the one I dread, Resource Owner Password Flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Google](../../Glossary/Service/Google.md) (1), [Facebook](../../Glossary/Service/Facebook.md) (1)
> **Env Vars:** pkce (2), tls (1), uri (1), rfc (1)
> **Cross-References:** we talked about (1), earlier in (1)
> **Analogies:** such as (1), just like (1)
> **Documentation:** rfc (1)
> **Speakers:** - [instructor] (1)


### 5. Grant Type: Resource Owner Password

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview: Resource Owner Password flow](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=0)** - [Instructor] If Authorization Code Flow is my favorite grant type, I'm not ashamed to admit that Resource Owner Password Flow is the one I dread the most. It's not because it's more complicated than the other grant types. It's actually the easiest. Unfortunately, it's also the riskiest, but instead of me telling you, let's just look at it. In practice, this is what it looks like. The user navigates to a page and the application hits something that's a protected resource. It could be anything from an API to account information. Next, the user is presented with a login form requesting their username and password. Note that the application did not send the user to that other site. The application itself is capturing the credentials on the user's behalf. Once a user submits the credentials, behind the scene, the application submits them to the other site, gets an access token and then uses that going forward. While the user and the browser never had a chance to touch the access token, the application has touched your password. If we have complete faith and confidence in the application and its developers, that could be okay, but realistically I don't. All it takes is one sloppy, incompetent or even malicious developer on the team and your user's account is compromised. Even with tightly-regulated and reviewed OAuth scopes, they don't matter if you have the user's password. In short, this grant type defeats most of the purpose of OAuth. Remember, OAuth was designed so we didn't have to share a user's passwords around or to put it another way, if you think Resource Owner Password Flow is the correct answer, you're almost definitely wrong, except there's a handful of times that you're right,
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=95)** so let's dive into that.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [When should you use this?](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=0)** - [Instructor] To go back to our original decision tree around grant types, Resource Owner Password flow is one of the last options and is rarely the right answer. I'll even go a step further. If you're building a new system, you should never use Resource Owner Password flow. It's irresponsible and no, this is one of the few places in this course where I'll say never in relation to an approach, just don't do it. If nothing else, you are teaching your users to put their credentials into untrusted third-party websites. That's how bad things happen. In fact, some banks will claim that you've breached their acceptable use policy if you've shared your password. If it's so bad why does this flow exist? If you're updating legacy systems, and bringing them into a better security practices, and improving their architecture, you can use Resource Owner Password flow for a while, but it should be a bridge to a better solution, not the solution itself. That said, I cover it here because it's often used as a bridge between legacy systems and new and better security practices. It lets developers convert their legacy apps to speaking OAuth, which makes it easier to integrate, standardize, eventually replace otherwise deprecated components. Resource Owner Password flow has its place and a legitimate use case, but you probably don't want to use it. For completeness of this course, I'll show you one example before we explored the security considerations and they're massive.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### [Lab: Build an example (curl)](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=0)** - [Instructor] Now we can try out the Resource Owner Password Flow, very simply, because although it does have a user involved, it makes an actual request behind the scenes with the username password the user already provided. As a result, it will have a user interface, your usual login box, but after that, it's a simple HTTP request. In this case, we'll skip directly to that request. Once again, for context, I'm using the [PHP](../../Skills/Software%20Development/PHP.md)-based league OAuth server, which I installed and configured according to the instructions in the PHP OAuth server folder. I did a detailed walkthrough in a later session if you want to see every step, but now on with the flow. So go ahead and go to the Read Me for the Resource Owner Password Flow. So remember what the Resource Owner Password Flow is doing. Because it's just taking our credentials and making a request behind the scenes, we can do this with curl. So if we go to the Read Me Resource Owner file, we go ahead and grab this command directly here and then we go to the command line. On the command line, we can go ahead and load this command directly and hit enter and if all goes well, well, it's kind of an ugly mess. There's not a lot to tell out of that, so let's make one change. We'll add jq dot to the end of it, make it a little bit prettier and now we see we have an access token and a refresh token, so let's go ahead and grab this access token and head over to [jwt.io](https://jwt.io) to see what's in it. On [jwt.io](https://jwt.io), we'll go ahead and drop our access token in and sure enough, there's the payload we expected. Everything is there. We have our issued at time, we have our expiration time and we even have the scopes that we requested.
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=92)** So from beginning to end, it takes just a few moments to get set up with Resource Owner Password Flow. Now remember, you have to be very careful on how and when you use this, but it is a tool in our toolbox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2)
> **CLI Commands:** php (2), make (2), curl (1)
> **Env Vars:** php (2), http (1)
> **UI Navigation:** go to (3)
> **URLs:** [jwt.io](https://jwt.io) (2)
> **Tools:** command line (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### [Security considerations](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=0)** - [Instructor] Let's dive into the security considerations around the resource owner password flow, because honestly, there are a lot. Just like the other OAuth flows, the same rules apply. You need to make sure your communications are secured with something like TLS. Further, since this flow uses the client's secret, you need make sure it's protected in some backend or private component. You also need to protect the access token and make sure you use and store it safely. And of course, you've probably validated your token by now too, right? But the actual security issue is much bigger than any of those and it's unique to this flow. In all the other OAuth flows, the application sent the user to the authorization server or identity provider to authenticate and authorize the application. Instead, this one captures the user's credentials in the application itself and sends them to the server on the user's behalf behind the scenes. This means the application developer has your credentials. Now, the questions we have to ask ourselves, do we really want to train our users to put their credentials just anywhere? And this all comes down to one fundamentally important question. Do you trust the application and all the developers who have ever touched it? If this application is built by your bank and only accesses your bank, this might be safe. Of course, a poorly trained developer might log it by accident. Or maybe a malicious developer logs and saves that somewhere. Either way, your account is now compromised. Now the requested scopes will apply to the access token and limit the overall application's authorizations.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=94)** But if a malicious user can just use your username and password instead, they'll do that. After all, as far as the bank website is concerned, it is you. Even worse, since they have your username and password instead of an access token, the entire concept of scopes goes away because for all intents and purposes, they are you. And you can't just revoke this access via the token because they have your credentials. They could just request a new one. The only way to remove access is to change your password. All of that said, there are a lot of organizations that implement resource owner password flow for their applications as a transitional or temporary approach on the way to something better. More than anything, it's used to get systems and developers to start speaking OAuth as quickly as possible, and then later they convert it to authorization code flow or PKCE. If you have the choice, do not use resource owner password flow. If you must, use it as a transition to something else.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** tls (1), pkce (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 6. Grant Type: Client Credential

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview: Client Credential Flow](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=0)** - [Instructor] The next grant type or OAuth flow that we're going to cover is the easiest, the client credential flow. This is explicitly for authorizing a system to perform actions on another system. If you're familiar with service accounts that are supported by systems like [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) or potentially APIs like Salesforce or [Google](../../Glossary/Service/Google.md), you've already dealt with this concept. Unlike other grant types, this one does not involve a user, and that's where people struggle with it. Remember, it's never acting on behalf of a user, but on its own behalf. That also means you'll never use it for OpenID Connect. In terms of mechanics, this is what it looks like. My client application needs access to some protected resource. It makes a request to our authorization server using its client ID and client secret, which are effectively that application's username and password. The authorization server validates those credentials and generates an access token. The client application then uses that access token to interact with the protected resource. Remember though, the client ID and client seeker are the application's credential. There's no user involved in this grant type. So let's imagine a different scenario. Let's say there's a freely available task tracking tool called [Trello](../../Skills/Software%20Development/Trello.md), which allows you to attach files to tasks. When I upload a file behind the scenes, Trello is uploading that file to Amazon S3. Now, it doesn't upload to my S3 account, but to its own internal account. In fact, it hides S3 for me entirely. I only discovered it personally because I know where to look. But now I can download and interact with that file however I need.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=94)** In fact, authorization and [Microservices](../../Skills/Software%20Development/Microservices.md) work exactly the same way. The components are interacting with one another on behalf of themselves, not on my behalf. So what's the point? What's the benefit of this grant type? Well, there are three things. First, they get all the benefits of using OAuth, including rotating credentials, granular permissions via scopes, and a huge ecosystem of tools and patterns to implement. Next, you have easy onboarding. Since I don't have to already have an S3 account, I can sign up for a Trello account and immediately start using it. If they need to use my S3 account, I'd need an account on both and then connect the two. Finally, this provides a pluggable interface. Since these sites hide the backend details from me, the end user, if they ever need to change to another service, they can do that without involving me. In fact, as far as I could tell, I may never notice the change. If they're storing the files in my personal storage space, it would require my involvement to move or update the files from one provider to another. And there's one final thing to note here. In terms of implementation, this is always done by backend application service and never in a mobile app or single page application. Remember, mobile apps and single page apps cannot keep secrets on our behalf, and the client's secret is a secret we must protect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Trello](../../Skills/Software%20Development/Trello.md) (3), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [When should you use this?](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=0)** - [Instructor] Knowing when to use the client credential grant type is the easiest of all. Going back to our decision tree, the very first question was, are we authorizing on behalf of a user? When the answer's no, we use client credential flow. That's it. We don't have to consider the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the questions. Now, that can be a little deceptive at first. For example, if you have an Amazon S3 bucket storing files behind a web app, you may think that's on behalf of a user, but unless you're connecting to that user's AWS account, the application is the owner, not the user. One place where you're also likely to see this is communication between [Microservices](../../Skills/Software%20Development/Microservices.md), when service A needs to talk to service B. Most likely, you'll want some sort of authorization policy so service A and B can interact but not have service C interact with A. Now, the contrary opinion to client credential flow is to just use API Keys. While that can work, you get some pretty good benefits by using OAuth instead. First, if the user facing portions of your system are already using OAuth your team and systems already know how to deal with [Tokens](../../Skills/Web%20Development/Tokens.md). That makes validating them, using them, and even revoking them all familiar territory. No one has to relearn how the backend systems are different. In addition, OAuth already has the concept of scopes built in. Therefore, when system A needs to talk to system B, it doesn't have to have full permissions. You can scope down its access to the use case you need to support. Finally, since now every component from both front end and back end can use Oauth, your tooling can be the same no matter where you're working.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=94)** There doesn't have to be a separate front end and backend environments. You can just have your OAuth environment. The one thing we have to remember through all this is that even though we don't have a user, the client secret is effectively the system's password. Therefore, we must protect it like any other secret in the system. So enough talk, let's actually do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Env Vars:** aws (1), api (1)
> **CLI Commands:** aws (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Lab: Build an example (curl)](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=0)** - The client credential flow is the easiest of the OAuth grant types to implement. It doesn't require a user interface, which makes sense because there isn't a user involved. For context, I'm going to demonstrate this one two different ways. The first one, I'll use the [PHP](../../Skills/Software%20Development/PHP.md) based league OAuth server, which I installed and configured in a later video. The setup instructions are in the PHP OAuth server folder, so you can get set up on your own. The other implementation is going to use Auth0. The setup instructions for that are in the other_OAuth_server, also available within this project. With that, let's go ahead and find the read me client credential and dive in. First of all, we're going to make sure that our server is running on the PHP side of things. I've already done that, so I don't need to do it here. And then we go ahead and we'll grab this command. A couple important things to note about it. Notice there's nothing about a user, which makes sense as client credential flow is machine to machine. In addition, we have a different scope than before. It's just a machine scope. This is completely arbitrarily named and up to your requirements and constraints. So grab this command and we'll go back to the command line. We'll go ahead and paste this in, and sure enough, it's there. It's just kind of a mess. So let's clean this up by adding the JQ command and there's our access token. So let's go ahead and grab this. We'll go to [jwt.io](https://jwt.io) to see what's in it. And then on [jwt.io](https://jwt.io), we'll go ahead and just drop this in. And sure enough, there's our audience claim. There's our issued at, there's our expiration date,
>
> **[1:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=93)** and there's the scopes it requested. Beginning to end this worked very easily and quickly. Now let's implement it one other way. Within Auth0 we'll need a slightly different command. So first of all, under applications API, we'll choose our particular API and we'll go to machine to machine applications. And then we select the client from this list. There's the client ID and client secret that we'll need in just a moment. So we go back to our original instructions in the [GitHub](../../Skills/Software%20Development/GitHub.md) repository, we see there's a very similar command. We have our domain, we have our client credentials, grant type. We have the client id, which is from that Auth0 screen. We have the client secret also from that Auth0 screen. And then we have the audience, which is set when we create the project. So let's go ahead and grab this command and we'll fill in the value separately. We take that same command that we had from Auth0. We'll go ahead and drop this on the command line. Now, it looks like it's run, but let's go ahead and clean this up by using the JQ command. And sure enough, there's our access token. We'll go ahead and grab this once again and take it over to [jwt.io](https://jwt.io). On [jwt.io](https://jwt.io) we drop this in the box, and sure enough, look at what we have. We have the issuer. This is the authorization server that issued that token. You can see this is my Auth0 URL. We have our audience, which we specified in the request. Our issued at time, our expiration time, and this worked from beginning to end. The client credential flow is by far
>
> **[3:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=185)** the simplest OAuth implementation because it doesn't involve a user. Regardless of which OAuth provider you choose, you'll probably have support for this one out of the box.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** php (3), api (2), url (1)
> **CLI Commands:** php (3), find (1), make (1)
> **URLs:** [jwt.io](https://jwt.io) (4)
> **Tools:** command line (2), github (1)
> **UI Navigation:** go to (2), select the (1)
> **Prerequisites:** setup (2), set up (1)
> **Cross-References:** go back to (2)

#### [Security considerations](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=0)** - [Instructor] Now let's talk about how to properly secure the Client Credential Flow. I'm not going to walk through a full security audit of your application, 'cause that would depend on the language and framework chosen, the configuration of your servers, and a bunch of other things outside the scope of an OAuth course. Regardless, you should look at audit penetration tests and other practices to make your apps more secure, but back to the course. First, you should always remember that we are dealing with credentials, so your communication should be secure using mechanisms such as TLS, even though these connections are done entirely on the backend where the user can't see or interact with them, there are still bad actors out there. Which actually brings another security benefit, since no users are ever interacting with this flow directly, there's no way they can compromise it by accident or on purpose. But there's also a downside to this approach, since the Client Credential Flow is not tied to a particular user, but all of your users and all of your systems, when there's bad behavior in the system, you can't always connect it back to a specific user, account, or even an action. Therefore, we need to be more diligent about logging and monitoring throughout the system. Next, we still have to validate our access token. This is the single biggest place where people make mistakes and misuse the data they shouldn't trust. It is still an access token, we must still validate it. And there's one final place that people make mistakes with Client Credential Flow, they use it where they shouldn't. At first glance, people look at Client Credential and assume that it could be deployed on every [IoT](../../Glossary/Concept/IoT.md) device all over the place. Not quite, usually an IoT device will be outside
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=94)** your physical control, which means you can't count on it to keep secrets like the client's secret. Further, many IoT devices will still be tied to a user account for activation, ownership, and monitoring, so it's not quite a real backend use case. So let's wrap up this course covering one more grant type specifically designed for devices and otherwise browser list systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (3)
> **CLI Commands:** make (3)
> **Env Vars:** tls (1)
> **Analogies:** such as (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)


### 7. Grant Type: Device Grant Type

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview: Device flow](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=0)** - [Instructor] The sixth and final grant type we'll talk about in this course is RFC 8628, the device authorization grant or simply the device flow. That's right. This is not part of the core OAuth 2.0 framework, but an extension, and it's another clear win for the extension approach. When the OAuth team was working in 2012, if you told them that video game systems, smart appliances, and even a kiosk at the airport would be within the realm of OAuth, they may still be working on it today. This grant type is specifically for anything with an internet connection that lacks a browser for handling HDB redirects, or is generally input constrained, which would make typing a password painful or even impossible. But let's see it in action. First, the user identifies that they want to authenticate. The device requests access to the authorization server and identifies itself with a device ID. This is effectively its identity. The auth server generates a device code, an end user code, and a verification URI for the end user. The device presents that verification URI to the end user for them to visit. While this could be URL, it's often presented as a QR code, so the user can simply scan it instead of having to type it. When the user visits the URI, it goes to the authorization server and they authenticate according to its requirements. After authentication, the user presents their end user code to the auth server, and now their session is logically connected from their login to the device's original request. This is often done via URL parameter, so the user doesn't have to type it again. Throughout this and behind the scenes,
>
> **[1:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=93)** the client device that has started the entire flow is polling the authorization server on a regular basis to determine if the user has completed authentication. Once a user is authenticated and authorized the client device, this polling retrieves the access token, and now we're fully back in the realm of common OAuth. So the client device can use the access token just like any other application would. This has a lot of moving steps, so in the lab, we'll break them down one by one. In the meantime, let's cover the use cases where this makes the most sense.

> [!info]- Semantic Content
>
> **Env Vars:** uri (3), url (2), rfc (1), hdb (1)
> **CLI Commands:** make (1)
> **Versions:** 2.0 (1)
> **Documentation:** rfc (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [When should you use this?](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=0)** - [Narrator] So now, when do we use the device authorization flow? If we go back to the decision tree from our grant type video, we end up on a different branch. First, we have a user involved, which also means we can use this grant type for OpenID Connect in addition to regular OAuth. Next, do we have a browser involved? No, and this is where the device grant type fits. We have to assume our device is internet connected, but it doesn't have a nice useful interface for our users to log in on. Or maybe there is a good interface, but we don't want the user to type a password into it. If we had a video game system, we might have a browser, but a controller is terrible for typing passwords. Or maybe we have a smart refrigerator, which has a reasonable touchscreen interface, but a very limited browser, not capable of handling redirects. Or alternatively, think of a kiosk at the airport, has a good browser, has a nice big touchscreen interface, but do you really want a user to type a password there? Not a chance. There's zero [Privacy](../../Skills/Data%20Science/Privacy.md). And all of these cases displaying a short URL are better. A QR code is a simpler and more secure experience. Now the user can scan the code with their phone, authenticate on their own personal trusted device, and the otherwise limited device can detect the login and move on. This ends up being a secure, but still user-friendly experience. Now let's play with it and see how it works in practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Definitions:** is a  (2)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### [Lab: Build an example (kiosk)](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=0)** - [Instructor] For the device grant type, it's exceptionally hard to do a live demo because, by definition, we're operating between multiple devices,` so I'm going to walk you through a mock-up and describe each step along the way. We'll use the [OAuth.com](https://OAuth.com) Playground to show each of these steps. First, we choose device code. The first step is for the device to request a code from the authorization server. In the real world, this would be initiated by a user clicking login or something similar, or hitting a protected resource that they want to use. Behind the scenes, the device requests a code and gets back a few things. First, there's the device code itself. This is effectively the device's identity that it can use to interact with the authorization server. Then we have a user code. Then we have a verification URL. This is where the user will actually present their user code after they authenticate. Here's the best part about this flow. According to the device grant type specification, we have to present the user code to the user. Most people will assume that means we need to show it on a screen or ask them to type it, but that's a bad assumption. For the most part, just adding it to the verification URL is the easiest. And if we want to make it even easier, we could present that entire URL as a QR code that the user just scans. Behind the scenes, the device uses the interval field to determine how often to pull the authorization server to see if the user has completed their process. And eventually, once the user completes the authentication and authorization, the device gets back an access and a refresh token.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=94)** While this seems abstract, you've probably used a similar process for setting up [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md) with your bank, or even [GitHub](../../Skills/Software%20Development/GitHub.md). When you set up an authenticator app, you're presented with a QR code, which you scan. Then you provide the generated number back to the website, which allows you to log in. It's not quite the device grant type, but it's pretty close.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** url (3)
> **CLI Commands:** make (1)
> **URLs:** [oauth.com](https://oauth.com) (1)
> **Documentation:** specification (1)
> **Tools:** github (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Security considerations](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=0)** - [Instructor] Before you implement or use the device grant type, let's go over the common security considerations. First, remember, we're still passing around sensitive information. You should only send and receive over https using SSL or TLS. Next, we still have to validate the token. Now, unlike the other grant types, we may not be able to do this on the device in our client application itself. We may have to delegate this responsibility to some other component behind the scenes, like an API gateway or even the API itself. This isn't a huge problem, but we do need to keep it in mind. Now with regards to the device flow itself, first, we need to balance usability with security. For the best ease of use, we want a relatively short user code. But the shorter it is, the more likely it could be compromised by a brute force attack. To mitigate this, we can look at passing the code along via the URL or in a QR code, so the user doesn't have to type anything. That also lets us use a longer code. And on the authorization server side, we can implement rate limiting to mitigate brute force attacks overall. Now remember, we are dealing with two separate devices and we can't trust either of them because we don't control or manage them. Further, even if we have reason to trust one of them, such as having a high assurance authentication method on the user's device, it still implies nothing about the other device that is completely unknown to us. Finally, and this one is more subtle, the device grant type only requires presenting the URL to the user,
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=92)** not necessarily displaying it. If we display URL or a QR code to a user on a gigantic TV or a kiosk, it could be stolen, potentially by somebody even across the room. Alternatively, if we can present that URL to a user via something short range, such as Bluetooth low energy, we can limit sharing that URL to people within just a meter or two. That mitigates our exposure even more. Or maybe we ask 'em to type a phone number and we text the URL to them. That's also a valid option with a different risk profile. Remember, that whenever we're working with OAuth there's the core framework, the various extensions, and then what you do on top of them. As long as you're not doing something contrary to those, you should research it and consider getting creative. Just make sure you understand the risk that you're taking on and how to address them.

> [!info]- Semantic Content
>
> **Env Vars:** url (6), api (2), ssl (1), tls (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 8. Using an OAuth Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [OAuth recommended practices](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=0)** - [Instructor] Now that we've talked about OAuth 2.0 in numerous contexts, use cases, and in technologies throughout this course, let's go into a handful of patterns and practices that are pretty consistent, regardless of what your choices are. Please note that the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this video is a set of recommendations that should be treated as a baseline that generally works in most situations. There are a few requirements here, but not many. The most important aspect is that these recommendations should inform the questions you ask during planning and implementation. Actually, I'll take that back and give you one hard requirement. Your communications between components must be secure. Use a recent version of SSL or TLS and use a trusted certificate authority. Now, let's look at the components you have to consider. We have the Client Application or device, potentially an API gateway, the OAuth authorization server, and the things we're protecting, which would be the resource server or the API itself. The deepest level is the easiest, the resource server or the API. The resource server should validate every access token it receives and respect the expiration time. The only open question here is: How do you validate the token? If you validate locally, as described in this course, you'll not know if the authorization server has revoked it. If you only validate it via the authorization server, you're introducing latency into your request. Now, there isn't a right answer here. Your use case should determine both the expiration time and how often you validate it locally versus remotely. For high-security use cases like in [Banking](../../Skills/Software%20Development/Banking.md) or healthcare, you should check the authorization server more often.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=94)** For low-security use cases like looking up your favorite comic book characters, you might check less often. And then once a token is validated, you must confirm it grants the authorizations that match the action requested. A valid access token isn't permission to do everything unless the included scopes authorize it. Next, let's take one step out to our API gateway. Now, using an API gateway is optional, but I always recommend one because it can add things like rate limiting, logging, and other management aspects. Regardless, just like the resource server, you have to decide how and when to validate the access [Tokens](../../Skills/Web%20Development/Tokens.md). Some gateways can actually do the validation and perform authorization enforcement. If you can reject invalid tokens here, that's great. If you can reject otherwise valid tokens that don't have the right permissions, do that too. In both cases, it's less traffic to your API. Next, we have the OAuth Authorization Server. There's numerous systems out there, both open-source and commercial. I'll spend the next few videos walking through a few of those options. So let's skip this one for now. Finally, at the outermost layer, we have the Client Application itself. In most cases, the Client Application is the single most important and yet hardest thing to secure because it's user-facing. The two most important things you can do are choose the right grant type and secure your tokens. For grant type, remember the question decision tree I covered in the Grant Type session, and every time we talked about which grant type to use. If you follow that, you'll be in great shape. Finally, you must secure your access tokens. Whenever possible, don't display them to the end user.
>
> **[3:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=189)** Or alternatively, don't put them into storage or logging that the end user or compromise system can access. Or remember, the token can't be stolen if they can't access it. Now, while these are high-level recommendations, I have nearly 30 more that I've collected over the years working with various gateways, customers, and use cases. Now, let's check out a couple different OAuth servers to see how they operate from the backend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (5), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Env Vars:** api (6), ssl (1), tls (1)
> **Versions:** 2.0 (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Lab: Configuring an OAuth server in PHP](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=0)** - [Instructor] You can run your own OAuth server with a variety of different open-source projects. For this course, I've often used a [PHP](../../Skills/Software%20Development/PHP.md) League project called OAuth 2.0 Server. The requirements are pretty minimal, with just a modern version of PHP and OpenSSL support. While the default installation instructions work, it leaves you with an OAuth server without any external interfaces to authorize against. Instead, I've gone ahead and pulled their examples into the sample code for this course. Now, when you follow these instructions, you should have a fully configured OAuth server with keys and simple HTTP interfaces ready to go. And let's do that now. All of these instructions are in the PHP OAuth Server directory within the project. I'll assume you have PHP and Composer installed already, so let's go ahead and try them out. First, we go into the correct directory, PHPO Auth Server, and we run composer install. This will set up all of our dependencies and download them and extract them for us. Next, we want to generate our private key. This is the key that our OAuth server will sign all of our JWTs with throughout this course. Then we want to go ahead and set up our public key, so we have this available also. We'll use this for end users to validate our [Tokens](../../Skills/Web%20Development/Tokens.md) and make sure that they're correct. And now, finally, we go into our public directory, and this is where all of our interfaces are, and we go ahead and we start up the server. This is the default server built in the PHP. This is not for production use, but will get us started throughout this course. Unfortunately, one of the downsides of this project is what I've mentioned throughout the course.
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=92)** While this does support the core OAuth framework, it might not support all the extensions that you need. At the time of this writing, it doesn't appear to support token revocation, the discovery spec, and much more. Granted, as an open-source project, we can extend it however we need with additional custom claims, scopes, and extensions to meet our current needs. It comes back down to the question of, do you support OAuth? For the record, I use this for our examples for both the client credential and resource owner hazard flows. It could do more, but I want to show a variety of tools and configurations throughout this course. Overall, for the purpose of this course and for getting started, this is a solid option that'll suit many of your use cases. But before you put this into production, make sure to audit its capabilities, limitations, and security against your own requirements. Now let's check out one other open-source OAuth server before we look at a commercial option.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (5), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **CLI Commands:** php (5), composer (2), make (2)
> **Env Vars:** php (5), http (1), phpo (1)
> **Prerequisites:** set up (2), install (1), getting started (1)
> **Versions:** 2.0 (1)
> **Documentation:** spec (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)

#### [Lab: Configuring an OAuth server in Node.js](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=0)** - [Instructor] As I showed in [PHP](../../Skills/Software%20Development/PHP.md), you can run your own OAuth server with a variety of open source packages available out there. This is another simple one, but based in [JavaScript](../../Skills/Software%20Development/JavaScript.md), and I used the example to get this going as quickly as possible. This one is called oauth2orize. To get started with this one, we'll go to the README file on our jsoauth server folder. This time we only really have three steps. We need to make sure that mpm is installed. Then we need to do mpm install. Then we need to start the server itself. So let's go ahead and run mpm install on the command line. Now, mpm will go ahead and download the packages and the configuration for us, and get this set up as quickly as possible. And sure enough, it went ahead and set this up. We have a few libraries we might want to update, but we're not going to worry about that right now. Now we go ahead and we start the app. So node app.js, and by default, it's not going to tell us anything happened. So let's go back to the browser and see it in action. So from the configuration file, we know it should be localhost:3000. And here, we have a login screen. When we first install this, you'll notice it's pretty bare bones from a UI perspective, and that makes sense because most OAuth servers will only be used via their endpoints anyway. But if we go back to our README file, we could see what some of our endpoints are. We have the authorized and token endpoint, which makes sense 'cause those are core OAuth capabilities. We also have user info, which is one of the OpenID Connect endpoints. So we have that available. And we also have a new endpoint called, clientinfo. This would give us detail about the OAuth clients that we're actually connecting to our service. So from beginning to end, this only took a couple minutes
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=94)** to set up, but this has some similar capabilities to the other servers. Now, before you consider putting this into production, make sure you look at its capabilities and limitations, and make sure those match your requirements. In addition, I always recommend doing a security audit to make sure this also meets your security requirements. And with that, that's our final open source project we're going to look at. So now, let's look at a commercial option.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** make (4), php (1), node (1)
> **Prerequisites:** install (3), set up (2)
> **Env Vars:** readme (2), php (1)
> **Cross-References:** go back to (2)
> **File Paths:** app.js (1)
> **URLs:** [localhost:3000](https://localhost:3000) (1)
> **Ports:** :3000 (1)

#### [OAuth 2.0 as a service using Auth0](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=0)** - [Instructor] For commercial options for OAuth servers, Auth0 is pretty much one of the easiest options out there. The instructions for getting set up are in the other_oauth_server folder right here. There's three main things we need to do with an Auth0, so let's go ahead and tackle those. On Auth0's website, you can sign up for free. I'll happen to use my [GitHub](../../Skills/Software%20Development/GitHub.md) account. Now the first thing you need to do is create a user, so you go to [User Management](../../Skills/Web%20Development/User%20Management.md), Users, and go ahead and create your first user. I went ahead and created mine with my own email address, just to keep it nice and easy. Next, we need to get it set up for Authorization Code Flow. Over here under Applications, we choose Application, and we can go ahead and create a new application. In this case, I can use the default application. We click on that, and under the Settings tab, these are most of the settings that we'll need for the Authorization Code Flow to work successfully with one change. If we scroll down the list, we'll find a setting called Allowed Callback URLs, and we want to add this URL, [https://127.0.0.1](https://127.0.0.1), to our list. Once we add that to our Allowed Callback URLs list, we go to the bottom and save. And now we're set up from beginning to end to Authorization Code Flow. We have both our applications set up ready to go, and we have a user set up ready to use it. Now let's do one more step to set up Client Credential Flow. Once again, over on the Applications menu, we go to APIs,
>
> **[1:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=99)** and for this, we'll want to create a new API. So in this one, you can name it anything you want. So I'll call mine LinkedInLearningTest. And we want to give this a unique identifier. This will be unique throughout the life of our project, and this is what we use for our audience claim when we make the Client Credential Flow request. So we'll call this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md)-learning, and we'll also call that test. We hit Create, and now this has configured almost everything for us. There's one more thing we need to go to. We go to Machine To Machine Applications. We scroll down this list, and we want to see the client that's authorized. So in this case, we have this client. And then here's the client ID and client secret that we'll later on need to set up that Client Credential Flow. So from beginning to end, it takes under five minutes to get Auth0 set up for both a new user, the Authorization Code Flow, and the Client Credential Flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [User Management](../../Skills/Web%20Development/User%20Management.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **UI Navigation:** go to (5), scroll down (2), click on (1)
> **Prerequisites:** set up (8)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** url (1), api (1)
> **Code Identifiers:** other_oauth_server (1)
> **URLs:** [https://127.0.0.1](https://127.0.0.1) (1)
> **Versions:** 127.0.0 (1)


### 9. State of the Industry

[↑ Back to Table of Contents](#table-of-contents)

#### [OAuth extensions](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=0)** - [Narrator] Now that we've toured OAuth and numerous extensions, let's ask a fundamental question that I hear all the time. Do you support OAuth? Hopefully, after making it this far in the course, you see that's a nuanced question that has massive complexity behind it. Most of the time, if somebody asks that they don't necessarily mean just a core OAuth specification. More likely they mean some combination of specifications that matches their particular use case. How do I know that? Remember, the OAuth framework doesn't even define using JWTs as token. That's an extension itself. So let's put the pieces together to make a more clear picture. First, we have the core OAuth 2.0 framework, or RFC 6749, which purposely leaves many things undefined. Now to pass data around effectively and easily, let's add RFC 7519 to make sure that our access [Tokens](../../Skills/Web%20Development/Tokens.md) are JWTs or jot tokens, but now that we're passing tokens around, we have to do it safely. So instead of adding them to the URL, let's use bearer tokens in the authorization header as defined in RFC 6750. Now we're on a good track, but to improve interoperability, let's add the OpenID Connect specification which takes advantage of the previous JWT spec. Of course, now that we're potentially passing around a lot of user information, that's not always a good thing. So how can we protect it? Now we should consider RFC 7516, the [JSON](../../Skills/Web%20Development/JSON.md) Web Encryption or JWE specification. This allows us to pass sensitive information safely. This is especially useful in healthcare or [Banking](../../Skills/Software%20Development/Banking.md) use cases
>
> **[1:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=93)** but now that we're passing around tokens, we should add some more capabilities around that. So now let's consider RFC 7662 or the Token Introspection spec. This will let us use the authorization server to check to see if a token is invalid and in some cases, what's in it. And despite our best efforts, our tokens will be compromised at some point. So we'll need to add the Token Revocation spec, also known as RFC 7009. Of course, we haven't done anything to support all the apps we're planning to build. So let's move on to that side of the equation. First, let's add RFC 7636 to get authorization code flow with PKCE or pixy. That gives us better support for native apps and single-page apps like we saw earlier. Then we'll add RFC 8628 to include the device grant type to support smart appliances, kiosks, and other systems. We saw that earlier, too, but now to make it easier to onboard developers and the devices they're integrating with, let's add RFC 7591 and RFC 7592 which are the Dynamic Client Registration and Dynamic Client Management specifications. Now we can create our OAuth client applications and manage 'em faster and easier with very consistent, predictable APIs. And finally, to pull all this together, we need a way for our authorization server to communicate what capabilities it offers. For that, let's add RFC 8414, the Authorization Server [Metadata](../../Skills/Web%20Development/Metadata.md) specification. This has been complex, but overall we've come up with a robust set of extensions to cover the vast majority
>
> **[3:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=187)** of use cases that we'll see out there on a day-to-day basis support both front and backend operations. Then again, we haven't looked at any industry-specific specifications. Hmm, maybe we should do that next. But for now, the next time somebody asks, "Do you support OAuth?" Take a deep breath and ask what they mean 'cause they can mean a variety of different things.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (6), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Banking](../../Skills/Software%20Development/Banking.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Documentation:** rfc (11), specification (4), spec (3)
> **Env Vars:** rfc (11), url (1), jwt (1), json (1), jwe (1)
> **CLI Commands:** make (3)
> **Versions:** 2.0 (1)
> **Definitions:** known as (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)

#### [Industry-specific OAuth extensions](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=0)** - [Instructor] If you're watching this course, odds are you're designing, building, and using APIs on a day-to-day basis, and the odds are also good. You've heard the phrase that "Software is eating the world" from Marc Andreessen of Netscape and Andreessen Horowitz fame. While that phrase is applied in a variety of ways in our circles, it means that software, and more specifically APIs, are becoming the backbone or the foundation of more and more systems and more and more industries. With that in mind, let's talk about how OAuth is being applied to two of the most heavily regulated and fundamentally important industries out there, healthcare and finance. The first is SMART on FHIR. SMART on FHIR is another OAuth extension designed specifically to integrate with electronic health records or patient portals, and to more easily share data between them safely. Just as OpenID Connect allows quick and painless profile sharing with a few clicks, this allows you to share your health information to select parties, but just like OIDC, you don't have to share everything. This allows a receptionist in your doctor's [office](../../Skills/Web%20Development/Microsoft%20Office.md) to see which tests were performed, but not necessarily the results. Only your doctor can see those. On top of that, we can add another extension like HEART or Health Relationship Trust to share specific data within that and more specifically, this leverages concepts, where you can manage who has access to your data and manage it on behalf of others like your kids, for example. While there are pushes to implement both HEART and SMART on FHIR, it's still relatively early for both of them, so you're only likely to see or even hear of them if you work in the electronic healthcare record space. On the other hand, the concept of open [Banking](../../Skills/Software%20Development/Banking.md)
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=94)** is taking the world by storm. The principle of open banking is that your banking information, accounts, transactions, et cetera, are yours. It should be easily but securely accessible via API. As a result, numerous countries have already implemented some sort of open banking laws and start phasing them as requirements for financial institutions in most countries. Phase one requires secure, read-only APIs for major banks, but later phases require secure read/write APIs from the same banks, and even later phases requires the same for all financial institutions. Beyond healthcare and banking, there are similar efforts underway in other industries. One of them is insurance providers, which makes sense as they're some of the largest financial institutions in the world. But my personal favorite are similar efforts around utilities and power generation to allow you to monitor and optimize energy usage and even generation in your home. I'm already able to do this in my home with my home's solar and battery backup, and the best part of all of these, they are all based on OAuth and OpenID Connect. Fundamentally, all these standards are based on the simple idea that your data is yours and you should be able to control it. To do that effectively, you need fine grain control over who can do what with it, when, which all comes down to authorization. The fact that you've watched this course will put you a little bit ahead in both the technology and regulatory trends. You can now tell your colleagues, "Yes, I've heard about that," and start exploring the underlying concepts. Now, to close out this course, I'd like to talk about a couple places you can learn more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Banking](../../Skills/Software%20Development/Banking.md) (5), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Env Vars:** smart (3), fhir (3), heart (2), oidc (1), api (1)
> **Analogies:** just like (1), for example (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=0)** - Before we close this course, I'd like to leave you with a few things to help your team and expand your personal skills further. First, I'd consider myself a failure if I didn't mention Aaron Parecki's book "OAuth 2.0 Simplified." It's available right now. He's one of the best people working on and thinking about OAuth out there. If you do nothing else, pick up his book. He's also a core contributor to the OAuth 2.1 effort, so keeping an eye on him and his work is useful. Second, I recommend that you check out [oauth.com](https://oauth.com). It's basically an online version of his book, also maintained by him. It's a vendor-neutral discussion of OAuth 2.0, the architectures involved, the challenges, the trade-offs, and what can and might go wrong throughout. If you find yourself in the awful position of having to build your own OAuth server or client, you should read this first. Hopefully it will convince you, your team, and your management to not do it by yourself. Or if you absolutely have to, how to do it better. But seriously, don't build it yourself. The consequences of getting this wrong are catastrophic. Next, I encourage you to read the specifications relevant to your specific challenges. [oauth.com](https://oauth.com) has a great map that I've linked to here. The reason I recommend reading the specifications is that people have crammed a lot of ideas and assumptions into their understanding of OAuth, and too often they're wrong. What they've interpreted as hard requirements are often merely suggestions, or occasionally just a vendor's particular take on the situation. You need to understand what is and is not part of what you're doing and then what you need and what your tools actually support.
>
> **[1:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=93)** Reviewing the extensions is another great way to understand if your use case and problem is something real unique or if it's something that others have discussed, evaluated, and grouped into a better, more efficient, and more secure approach. Even if you can't find the perfect answer, you can probably avoid a lot of bad answers. And then next time you hear somebody say, "Do you support OAuth?" (sighing deeply) you can cringe right along with me. Now, go out there, build better, more secure, and standards-based applications and APIs. Thanks for watching.

> [!info]- Semantic Content
>
> **Versions:** 2.0 (2), 2.1 (1)
> **CLI Commands:** find (2)
> **URLs:** [oauth.com](https://oauth.com) (2)
> **Speakers:** - before (1)


## Instructor

- [Keith Casey](../../Instructors/Software%20Development/Keith%20Casey.md)

## Path Context

### In [Become a RESTful API Developer](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20RESTful%20API%20Developer.md)
← [API Testing and Validation](API%20Testing%20and%20Validation.md) | **5 of 5**

## Appears In

- [Become a RESTful API Developer](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20RESTful%20API%20Developer.md)

---

[↑ Back to top](#)