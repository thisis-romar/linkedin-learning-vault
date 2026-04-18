---
type: course
slug: web-security-oauth-and-openid-connect-23016424
url: "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424"
duration_minutes: 97
duration: 1h 37m
exercise_files: false
tags:
  - course
  - topic/software-development
  - topic/web-development
status: not-started
created: 2026-04-17
---

# Web Security: OAuth and OpenID Connect

> While many technical professionals claim to know and understand OAuth, reality often suggests otherwise. Implementing the proper grant types and the required flows while securely protecting your secrets is challenging at best and catastrophic at worst. Fundamentally, professionals often struggle with OAuth because they misunderstand what it is, what use cases it is particularly good and bad at, an

> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424) | 1h 37m

## Instructor

- [[Keith Casey]]

## Table of Contents

### Introduction

#### Using OAuth 2.0 and OpenID Connect
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect?u=76281980&t=0)** - Are you struggling with OAuth and OpenID Connect?
>
> **[0:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect?u=76281980&t=3)** Are you trying to figure out scopes, claims, grant types, and how you should use them in your applications?
>
> **[0:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect?u=76281980&t=8)** Well, you're in the right place.
>
> **[0:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect?u=76281980&t=10)** In this course, I'm going to walk you through all the complexity and nuance of OAuth and OpenID Connect while making it understandable for normal developers.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect?u=76281980&t=18)** We'll start with laying a foundation around the vocabulary and concepts and then move into practical labs with hands-on samples that you can run yourself.
>
> **[0:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect?u=76281980&t=26)** Hi, I'm Keith Casey, and I'm an API guy.
>
> **[0:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect?u=76281980&t=29)** I wrote the book on API design and have designed, built, and secured APIs for companies all over the world.
>
> **[0:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect?u=76281980&t=35)** Are you ready to have more secure APIs?
>
> **[0:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect?u=76281980&t=37)** Great. Let's get started in this journey together.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Code Keywords:** let (1)
> **Speakers:** - are (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=0)** - [Instructor] In terms of prerequisites for this course, there aren't many.
>
> **[0:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=3)** First, linguistically, I should note that for the rest of this course, whenever I say OAuth, I mean specifically OAuth 2.0 and not OAuth 1.0.
>
> **[0:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=13)** OAuth 1.0 isn't really related to OAuth 2.0 in any significant way anyway.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=18)** Also, I may say OIDC.
>
> **[0:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=21)** I mean OpenID Connect.
>
> **[0:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=23)** I'll use them interchangeably, just like they're used interchangeably in the industry.
>
> **[0:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=27)** Next, you absolutely need a firm grip on web development.
>
> **[0:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=30)** You need to understand how HTTP redirects work and how to store data securely in the browser.
>
> **[0:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=37)** You should also have Postman, Insomnia, or some other HTTP client tool.
>
> **[0:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=42)** While I love crawling the command line, and it'll work for some of this course, I still recommend a visual client.
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=47)** It'll help you out quite a bit.
>
> **[0:49](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=49)** Next, you need to have a reliable OAuth server available.
>
> **[0:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=52)** You can use something as simple as an open source OAuth server, such as the PHP-based one available from the League, but there are many others available in just about every language you want.
>
> **[1:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=62)** But remember, now you have to worry about configuration and hosting.
>
> **[1:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=66)** Alternatively, you can use the Google-provided OAuth Playground and the OpenID Foundation-provided OpenID Connect Playground.
>
> **[1:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=73)** Both are great tools because you don't have to worry about configuration.
>
> **[1:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=77)** And the Google provided one works with the Google account you probably already have.
>
> **[1:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=82)** Throughout this course, I'll also use Okta's API Access Management, which is effectively OAuth as a service.
>
> **[1:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=88)** Now, whichever one you choose, while I'd love to say they're interchangeable, that's not quite right.
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=92)** Some are better and worse at different things, so pay very close attention to the examples that I give.
>
> **[1:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=99)** And last but not least, you should also have a tool like [jwt.io](https://jwt.io) available.
>
> **[1:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=104)** It's a simple website that can decode JSON web tokens or JWTs, pronounced jots, and tell you whether or not they're valid.
>
> **[1:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=111)** There are tools in libraries to do that locally, but with this, we could stay language agnostic for now.
>
> **[1:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/what-you-should-know?u=76281980&t=117)** Now, let's talk about how to use the code for this course.

> [!info]- Semantic Content
>
> **Env Vars:** http (2), oidc (1), php (1), api (1), json (1)
> **Versions:** 2.0 (2), 1.0 (2)
> **Tools:** postman (1), insomnia (1), command line (1)
> **Code Keywords:** this, (1), let (1)
> **Analogies:** just like (1), such as (1)
> **CLI Commands:** php (1)
> **URLs:** [jwt.io](https://jwt.io) (1)
> **Warnings:** note that (1)

#### How to use code for this course
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=0)** - [Instructor] The code for this course is available in a GitHub repository and split into a few sections.
>
> **[0:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=5)** First, there are a few folders like JS OAuth Server and PHP OAuth Server, which separate out each of the OAuth server configurations.
>
> **[0:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=13)** Each folder has a read me file to help you get started.
>
> **[0:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=16)** For the PHP OAuth server, you'll need at least PHP 8 in Composer.
>
> **[0:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=20)** For the JavaScript OAuth server, you'll need MPM 8 or above.
>
> **[0:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=24)** For all the other OAuth servers, I use Auth Zero or Google, so you'll need accounts for each.
>
> **[0:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=29)** Because each of the OAuth servers supports something a little bit different, I use different servers for different sections, so you'll likely want to set up all of them.
>
> **[0:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=37)** If you want to try other OAuth servers not described in this course, go for it.
>
> **[0:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=41)** But I recommend you use these first because I know these configurations work.
>
> **[0:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=46)** Once you have these environments set up, check out the read me in the root of the directory.
>
> **[0:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=50)** This is where I've built out runable samples for various providers.
>
> **[0:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=54)** For the most part, you should be able to copy and paste and just run these commands, but you may have to tweak a few depending on your configuration.
>
> **[1:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=61)** And finally, if you find any problems or have any corrections in any of this code, please file a GitHub issue in this repository and I'll get them sorted as quickly as possible.
>
> **[1:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/how-to-use-code-for-this-course?u=76281980&t=70)** Thank you, and let's dive into this course.

> [!info]- Semantic Content
>
> **CLI Commands:** php (3), composer (1), find (1)
> **Prerequisites:** you'll need (3), set up (2)
> **Env Vars:** php (3), mpm (1)
> **Code Keywords:** finally, (1), let (1)
> **Tools:** github (2)
> **Versions:** php 8 (1)
> **Speakers:** - [instructor] (1)


### 1. What Is OAuth?

#### Describing OAuth 2.0
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=2)** - [Instructor] Years ago, when I joined Okta, I was handed their new OAuth product.
>
> **[0:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=5)** At first, I thought I knew OAuth, what you could do with it, and what you should do with it.
>
> **[0:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=11)** That weekend, I printed a couple of the key specifications and went deep into the mechanics.
>
> **[0:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=15)** What I realized pretty quickly is that I had no clue what OAuth 2.0 was.
>
> **[0:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=19)** I thought OAuth 2.0 was just the next version of OAuth 1.0.
>
> **[0:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=23)** It's not.
>
> **[0:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=24)** I thought it was a specification for authentication.
>
> **[0:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=27)** It's not. I thought OAuth 2.0 would solve all my API security problems.
>
> **[0:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=32)** It doesn't.
>
> **[0:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=33)** I thought OAuth was a prescriptive protocol defining how everything should work from beginning to end.
>
> **[0:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=38)** It doesn't.
>
> **[0:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=39)** I thought everyone understood Oauth, and I was just behind.
>
> **[0:43](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=43)** They don't. What I found is that, fundamentally, OAuth is a framework for a user to delegate access to one system over to another system.
>
> **[0:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=50)** You're authorizing one system to act on behalf of you to that other system.
>
> **[0:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=56)** You can do this to share data or functionality or have just a streamlined experience overall.
>
> **[1:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=61)** Before we go deeper, let's make sure everyone understands one key difference, authentication versus authorization.
>
> **[1:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=67)** Authentication is establishing who you are.
>
> **[1:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=71)** It's like when you use your passport or driver's license to enter a bar or use your credit card.
>
> **[1:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=76)** In the online world, it's providing a username and password to log in.
>
> **[1:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=80)** Alternatively, authorization is establishing what you can do.
>
> **[1:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=85)** It's like when you present a ticket to board a flight.
>
> **[1:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=88)** In the online world, it's checking your permissions before you can edit that blog post or delete that comment.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=94)** To map this to the real world, it's like checking into a hotel.
>
> **[1:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=98)** You present your identification at the front desk, which they review.
>
> **[1:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=102)** This is authentication.
>
> **[1:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=104)** Then they check your reservation and credit card.
>
> **[1:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=106)** This is authorization.
>
> **[1:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=108)** And then they issue you a key card.
>
> **[1:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=110)** That key card does not have your personal information in it.
>
> **[1:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=113)** It does not have your credit card information in it, but now, you can use it to access parts of the hotel like your room.
>
> **[2:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=120)** By itself, OAuth is limited, and that's on purpose.
>
> **[2:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=123)** It's a framework that leaves many things open to interpretation or extension.
>
> **[2:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=128)** If it defined everything, well, we'd be stuck with technical decisions made by a very small group of people back in 2012.
>
> **[2:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=136)** This framework or extension model lets us have things like OpenID Connect, which again, is a special case of OAuth that gives us user profile information.
>
> **[2:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=146)** Now, we can start with a set of principles in OAuth, extend it to a specific use case with OpenID Connect and accomplish more than we ever could have by attempting to specify everything upfront.
>
> **[2:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0?u=76281980&t=159)** In the next video, we'll talk about a few of those extensions and what you can use them for.

> [!info]- Semantic Content
>
> **Versions:** 2.0 (3), 1.0 (1)
> **Code Keywords:** let (1), delete (1), for. (1)
> **Analogies:** it's like (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)

#### Making OAuth 2.0 useful with extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=0)** - [Instructor] Now that we have a foundation of understanding what OAuth is, we have a couple challenges in front of us.
>
> **[0:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=5)** First, when OAuth was initially written in 2012, the internet was a different world.
>
> **[0:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=10)** Yes, there were mobile apps, but not nearly as many or as powerful as we have now.
>
> **[0:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=15)** Yes, there were smart TVs and other appliances, but really not that many.
>
> **[0:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=19)** Single-page apps were still early, Kubernetes, Docker, and all the underlying concepts around DevOps were still in its infancy.
>
> **[0:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=27)** In 2012, there's no way that OAuth authors could have envisioned every potential outcome, approach, tech platform and innovation out there, so they did a very simple yet vital thing.
>
> **[0:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=38)** They wrote OAuth as a framework.
>
> **[0:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=41)** A framework is a little different than a specification.
>
> **[0:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=44)** A specification describes all the internal details of how something will work.
>
> **[0:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=48)** On the other hand, a framework describes the boundaries and how things will interact.
>
> **[0:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=53)** This makes OAuth a challenge and that some things are open to interpretation, but the trade-off is that we have room to add extensions to address new use cases and constraints we didn't have before.
>
> **[1:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=65)** The OAuth framework itself left a number of key places for extensions that will list here and explore later throughout the course.
>
> **[1:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=73)** The first extension is OpenID Connect, that's right, OpenID Connect, or OIDC as it's commonly called, is an extension to OAuth, which is for adding identity.
>
> **[1:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=82)** We'll talk about this in great detail in the next video, so I'll skip it right here.
>
> **[1:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=87)** The next extension is RFC 7519 or the JSON Web Token spec.
>
> **[1:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=93)** That's right, JWTs or JWT tokens are not described in OAuth, which means you can build and use OAuth without ever using a JWT token.
>
> **[1:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=102)** If you don't, you'll probably have an opaque token or a unique string without any information in it.
>
> **[1:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=108)** In that case, we get to our next extension, RFC 7662 Token Introspection.
>
> **[1:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=114)** This will let us take that opaque string and turn it into actionable information like profile or authorization data for our applications to use.
>
> **[2:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=123)** But now that we're passing around tokens, we're likely to use them or have them compromise in some way.
>
> **[2:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=128)** Luckily, we have RFC 7009 for token revocation.
>
> **[2:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=132)** It's the extension that lets us say, "Hey, delete this token. It's no longer valid."
>
> **[2:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=137)** There are also some end user facing extensions like RFC 8636 or Authorization Code Flow with PKCE or just PKCE.
>
> **[2:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=146)** We use this in single page apps or mobile apps and is important, so I have an entire chapter on it later.
>
> **[2:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=152)** Next, when we think about architectures like microservices, we need to think about different services calling one another on behalf of users or even other services, and then we get to RFC 8692 Token Exchange.
>
> **[2:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=165)** If you ever think about impersonation, this extension has a detailed analysis of the trade-offs.
>
> **[2:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=170)** Please read them first.
>
> **[2:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=172)** Now, that's a lot of extensions, but don't worry, we're down to my favorite extension, the final extension of all, and it's secretly the most powerful.
>
> **[3:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=180)** If we look at the extensions, we realize every individual OAuth provider might support some, all, or some combination of them.
>
> **[3:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=188)** Which one does our OAuth provider support?
>
> **[3:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=191)** This is where RFC 8414 or the Authorization Server Metadata Discovery Spec comes in. Wow, say that three times fast.
>
> **[3:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=200)** This extension will give us an endpoint that we can query to figure out which extensions our OAuth implementation supports.
>
> **[3:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=207)** It's wonderful. Unfortunately, it too is optional.
>
> **[3:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=211)** Now, there are numerous other extensions beyond these common ones.
>
> **[3:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/making-oauth-2-0-useful-with-extensions?u=76281980&t=214)** We're going to dive into just a handful of them throughout this course, but next, let's go ahead and dive into OpenID Connect.

> [!info]- Semantic Content
>
> **Env Vars:** rfc (6), jwt (2), pkce (2), oidc (1), json (1)
> **Documentation:** rfc (6), specification (2), spec (2)
> **Code Keywords:** let (2), case, (1), delete (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** docker (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Extending OAuth 2.0 with OpenID Connect
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=0)** - [Instructor] OpenID Connect is the most important OAuth extension of all.
>
> **[0:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=4)** Remember, the underlying premise of OAuth is to delegate authorization, effectively, to allow another system to act on my behalf or use my data in some specific way.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=14)** Unfortunately, most of OAuth is loosely structured and lightly specified.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=18)** This makes interoperability in exchanging data quite hard, where every system has to know and understand the others it might interact with.
>
> **[0:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=25)** On the other hand, OIDC adds a rigid structure to the user's profile data, all expressed through JWTs we can easily retrieve and parse.
>
> **[0:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=35)** Please remember, OIDC is not an alternative to OAuth, but an extension on top of it.
>
> **[0:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=41)** Therefore, everything we get from OAuth, we have with OpenID Connect, with a few small exceptions.
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=47)** We add an ID token to represent the user, and we lose the client credential flow.
>
> **[0:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=51)** Since client credential flow is specifically for machine to machine flows where there isn't a user, that makes sense.
>
> **[0:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=57)** You can't have a user profile without a user.
>
> **[1:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=60)** And here's what a sample ID token looks like once we've decoded it.
>
> **[1:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=63)** The fields will vary depending on what we request, but the core parts are there.
>
> **[1:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=67)** Now, when we want a user's email address, we can request that and get it.
>
> **[1:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=71)** The best part is that we don't care if the user's identity information has come from Google, Facebook, Okta, Microsoft Azure Directory, or any other provider.
>
> **[1:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=80)** OpenID Connect tells everyone what to name the field so we can trust it to be there.
>
> **[1:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=86)** Notice that we have fields like name, given name, and family name, which we can easily retrieve and process.
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=92)** We even have birthdate and profile picture.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=94)** If we want to bootstrap a user's profile in our new app, we have all the details to do that.
>
> **[1:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=100)** In fact, this becomes the most common use case for OpenID Connect, and you've already seen it, single sign-on.
>
> **[1:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=107)** In the enterprise world, this is accomplished with SAML, but in the modern web, we've done it much more quickly and easily.
>
> **[1:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=113)** Every time you see one of those Sign-in with Google, LinkedIn, GitHub, et cetera buttons, they're using OpenID Connect behind the scenes to request and retrieve your profile information and set up your profile.
>
> **[2:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=125)** In fact, the next time you go through that flow, watch the URL.
>
> **[2:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=129)** Most likely, you'll see the OAuth parameters going back and forth, and you'll see that ever present this website is requesting your information.
>
> **[2:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=136)** Do you authorize it?
>
> **[2:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect?u=76281980&t=138)** Congratulations, you're already using OpenID Connect built on top of OAuth.

> [!info]- Semantic Content
>
> **Env Vars:** oidc (2), saml (1), url (1)
> **Tools:** github (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Foundational Concepts

#### OAuth 2.0 fundamentals
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=0)** - [Instructor] So far in this course, we've talked about what OAuth is.
>
> **[0:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=3)** Now let's talk about how OAuth works.
>
> **[0:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=6)** For that, we'll start with the vocabulary.
>
> **[0:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=8)** I'll use these terms properly and consistently going forward, so you may want to keep those video bookmarked.
>
> **[0:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=13)** There are seven terms that are key to know in OAuth.
>
> **[0:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=17)** Some of the extensions will add more terms, but these will apply throughout.
>
> **[0:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=21)** First of all, we have the resource owner, that's you or whoever is authenticating and eventually authorizing our applications.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=28)** Next, we have the resource server, and that's what we're going to ask the resource owner to grant us access to, but we'll come back to in a moment.
>
> **[0:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=37)** Next, we have the grant type or flow.
>
> **[0:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=40)** This is the process that we use to request and eventually grant authorization.
>
> **[0:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=45)** The grant types vary depending on use case.
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=47)** For example, you don't use the same flow when you have a backend app, a mobile app, or a smart appliance.
>
> **[0:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=52)** The interfaces, security models, and risks are radically different, so we plan accordingly.
>
> **[0:58](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=58)** Most of the chapters of this course are separated by grant type, so we'll talk about this often.
>
> **[1:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=63)** Within that flow, we also have scopes.
>
> **[1:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=66)** A scope is simply permission that our app is requesting.
>
> **[1:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=69)** This could be read-write, access, profile access, or more.
>
> **[1:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=72)** Outside of open ID connect, these will vary wildly between applications.
>
> **[1:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=78)** Next up, we have the authorization server or auth server.
>
> **[1:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=81)** This is where the grant type and scope are sent to request authorization.
>
> **[1:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=85)** It's the brains of the process evaluating our identity, your request, the authorization policies, and more to determine if it will grant the permissions you've requested.
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=95)** OAuth does not define the internal operations of your auth server, so your policies could based on literally anything, use a group membership, scopes requested, time of day, favorite color, or more.
>
> **[1:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=107)** It depends on your OAuth provider.
>
> **[1:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=110)** Assuming your request is successful, you'll get back a token.
>
> **[1:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=113)** That token could be a JWT or Jot token that you can decode and read, or it could be an opaque string that doesn't mean anything on its own.
>
> **[2:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=122)** Regardless of what kind of token you get, it'll relate to a set of claims.
>
> **[2:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=126)** These claims give you details on the authorization granted.
>
> **[2:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=130)** If you have a Jot token, those claims will be embedded in the token itself so you can decode and read them.
>
> **[2:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=136)** Otherwise, you have to use that token against URL on the Auth server to figure out the claims.
>
> **[2:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=141)** And now finally, we get back to the resource server where we use the token.
>
> **[2:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=146)** The resource server can validate the token, review the permissions granted, and allow requesting application access.
>
> **[2:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=153)** To map this to the real world.
>
> **[2:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=154)** It's checking into that hotel.
>
> **[2:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=156)** You are the resource owner and you want access to a room.
>
> **[2:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=159)** That's your resource.
>
> **[2:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=161)** The front desk is your authorization server and validates your request that you have a reservation and your credit card works and issues you a key card or token that grants you access.
>
> **[2:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=170)** Now you use that key card to get access to the room.
>
> **[2:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals?u=76281980&t=173)** Now that we have vocabulary and a mapping to the real world, let's dive into the specific endpoints and the mechanics behind them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case. (1), type, (1), finally, (1)
> **Env Vars:** jwt (1), url (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Touring the OAuth endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=0)** - [Instructor] The endpoints or URLs that we have in OAuth are relatively simple, but once we add extensions, it gets a lot more complicated.
>
> **[0:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=7)** So let's start with the simple bits.
>
> **[0:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=9)** The base framework, we have the authorized and token endpoints.
>
> **[0:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=12)** The authorized endpoint is where we make our initial request to evaluate our grant type and our scope request.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=18)** Once we complete that process, we go to the token endpoint to actually get our token.
>
> **[0:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=23)** At first, it feels weird to make two separate requests, but by splitting the steps, we can use them independently or together as our needs change.
>
> **[0:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=32)** For example, some of our grant types have a client side portion where it happens in the single page app or a mobile app.
>
> **[0:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=38)** Since the end user or even a malicious user can monitor and modify that transaction, we can't use secrets and we can't trust the results.
>
> **[0:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=45)** But having two steps, we could do a client side step, which is untrusted, and then a server side step, which becomes trusted.
>
> **[0:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=53)** Don't worry, we'll go into that in more detail in some of the grant types.
>
> **[0:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=56)** Now, every other endpoint that I'll cover here is optional.
>
> **[0:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=59)** So depending on your authorization server configuration, you may or may not have these endpoints available.
>
> **[1:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=65)** First, if you have open ID connect support, you'll have the user info endpoint.
>
> **[1:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=70)** This is URL your application can call, which returns the claims about the user.
>
> **[1:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=75)** According to the OIDC specification, this could be the user's whole profile, their email, their name, phone number, or any combination of those depending on the scopes you requested.
>
> **[1:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=85)** Next is my favorite endpoint, the discovery endpoint.
>
> **[1:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=88)** This comes with RFC 8414.
>
> **[1:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=90)** It's not widely supported, but when it is, it gives you all the URLs and all the capabilities of your authorization server.
>
> **[1:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=97)** When in doubt, see if your OAuth implementation supports this and if it does, use it.
>
> **[1:43](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=103)** Next up, you may have the introspect endpoint.
>
> **[1:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=106)** This is to retrieve information about the token itself, like if it's still valid, when it expires, or similar.
>
> **[1:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=112)** This endpoint is vitally important when you have long lived access tokens.
>
> **[1:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=117)** Otherwise, you can have downstream apps acting like they still have the authorization they no longer have.
>
> **[2:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=123)** And the final endpoint we'll cover here is revoke.
>
> **[2:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=126)** This gives us the ability to revoke a specific or even a list of tokens or a single quick HTTP request.
>
> **[2:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=132)** This endpoint comes to you through RFC 7009, but even ALT servers who don't support the spec probably have an approach.
>
> **[2:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=139)** So look into your documentation for details.
>
> **[2:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=142)** With other extensions, you'll get additional endpoints but these are the most important and the most common.
>
> **[2:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=147)** Should also realize an awkward question in here.
>
> **[2:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=150)** When someone asks, do you support OAuth?
>
> **[2:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=152)** You need to remember that their definition of OAuth and your definition of OAuth may not be the same.
>
> **[2:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints?u=76281980&t=157)** So tread carefully.

> [!info]- Semantic Content
>
> **Env Vars:** rfc (2), url (1), oidc (1), http (1), alt (1)
> **Documentation:** rfc (2), specification (1), spec (1)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Grant type overview
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=0)** - [Instructor] Now that we have the foundations, let's talk about grant types or OAuth flows.
>
> **[0:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=4)** One of the best parts of OAuth are the grant type extensions will solve new problems that the original authors did not have at that time.
>
> **[0:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=11)** In this course, we'll talk about six grant types that cover a variety of use cases.
>
> **[0:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=16)** Right now, instead of working through each in detail, let's talk about when and where you might use them.
>
> **[0:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=22)** Before you choose an OAuth flow, you need to answer three questions.
>
> **[0:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=25)** First, are you authorizing an application on behalf of a user or a service?
>
> **[0:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=30)** Next, if there's a user, is there a browser on the device or the client?
>
> **[0:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=35)** Finally, is your application entirely server-side or does it have a client-side component?
>
> **[0:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=41)** Now that we know each of these, we can work through a decision tree.
>
> **[0:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=44)** First, are we dealing with a user or service?
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=47)** If it's a service, we need to use the client credential flow.
>
> **[0:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=50)** It's specifically designed for backend systems to interact without any user involved whatsoever.
>
> **[0:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=56)** If it's a user, we need to continue looking at our client system.
>
> **[0:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=59)** Is there a browser on it?
>
> **[1:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=61)** If we don't have a browser in the system, we have to use the device grant type.
>
> **[1:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=65)** It's specifically designed for relatively dumb devices that can generate a URL, but not handle browsers, redirects, and the like.
>
> **[1:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=74)** Now we have to look at the application itself.
>
> **[1:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=76)** Is it server-side or partially client-side?
>
> **[1:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=79)** If the app is partially client-side, like a mobile app or single-page app, we used to use the implicit grant type, but it has some major weaknesses.
>
> **[1:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=87)** So as an industry, we should shift to authorization code flow with PKCE or simply the Pixy flow.
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=95)** If it's entirely server-side, the application can keep secrets and credentials for us, so we'll want to use the authorization code flow or auth code flow.
>
> **[1:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=104)** The final grant type is a special case.
>
> **[1:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=106)** We have a legacy server-side app that we're trying to move to OAuth, we may consider the resource owner password flow.
>
> **[1:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=114)** It's a transitional use case though.
>
> **[1:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=116)** Not for regular or long-term usage.
>
> **[1:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=119)** Now, if you just read about grant types in general, it's not that clear.
>
> **[2:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/grant-type-overview?u=76281980&t=122)** But if you remember the three decision points, are we protecting a user service, is there a browser available or not, and is the application server-side or client-side, you can get to a good answer pretty quickly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1), continue (1), type. (1), type, (1)
> **Env Vars:** url (1), pkce (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Designing and using OAuth scopes
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=0)** - [Narrator] Now that we've talked about grant types or flows, let's talk about scopes and permissions.
>
> **[0:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=5)** In OAuth, a scope is simply a set of permissions you can request.
>
> **[0:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=9)** They can be simple like create, read, update or delete, or as complex as you want.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=14)** I always recommend that you start as simply as you can.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=18)** It's always easy to get more complicated over time but exceptionally difficult to simplify things once people start using your implementation, and frankly, this is one of the first places where OAuth will give you headaches.
>
> **[0:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=30)** For OAuth scopes, there isn't a standard naming format.
>
> **[0:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=33)** The only real requirement is that they're unique strings within a given OAuth provider.
>
> **[0:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=37)** With that in mind, let's look at some implementations.
>
> **[0:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=41)** Within GitHub, if you look at the scopes, they're all over the place.
>
> **[0:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=45)** My favorite are the scopes for a repository.
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=47)** If you want full access to a repository, you can request the repo scope.
>
> **[0:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=52)** On the other hand, if you just want access to the user's public repositories, you can request public_repo.
>
> **[0:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=59)** Or maybe you want deployment permission so you'd request repo_deployment.
>
> **[1:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=64)** Or maybe you want to invite someone to repos so you request repo:invite or maybe you want to grant access to write repository hooks.
>
> **[1:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=72)** You could use write:repo_hook.
>
> **[1:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=77)** To be blunt, this naming is painfully inconsistent and predictable which makes documentation and just day-to-day usage harder.
>
> **[1:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=84)** There's also hidden costs for GitHub users.
>
> **[1:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=87)** Basically, once they gain understanding of one part of the system, they can't just apply that to the next.
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=92)** They have to relearn everything every time.
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=95)** On the other end of the spectrum is Google.
>
> **[1:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=97)** Google's APIs are all fully qualified URLs which include the product name, the resource the permission will be granted on, and the action which will be granted.
>
> **[1:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=106)** Even if you've never used one of their APIs, you could see the scopes and reason out most of their purpose, or from the opposite direction, you can make some educated guesses on what scopes you might need for which products.
>
> **[1:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=119)** Now you might see some significance in the fact that these scopes are URLs, like there may be documentation or tools at that URL.
>
> **[2:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=125)** Unfortunately, that isn't the case, but there's nothing stopping Google from doing it.
>
> **[2:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=130)** Somewhere in the middle is Okta's approach.
>
> **[2:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=132)** They use a simple namespace, then a resource, then action.
>
> **[2:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=136)** The namespace makes it clear you're working within the Okta API, and the rest gives you specific information into what permissions you're granting.
>
> **[2:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=143)** While all three are valid approaches, I recommend using Okta as your model.
>
> **[2:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=147)** It's clear, simple, predictable, and will be the easiest to document and describe to others without loading it with additional meaning.
>
> **[2:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=154)** And again, OpenID Connect is the extreme opposite of default OAuth.
>
> **[2:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=159)** When you specify scopes in an OIDC flow, you must include a scope called openid.
>
> **[2:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=165)** After that, you can include any combination of profile, email, address, or phone.
>
> **[2:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=170)** Not surprisingly, those scopes will get claims for each of those.
>
> **[2:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=174)** Or to put it another way, the resulting ID token and all requests to the user infill endpoint will include the related claims.
>
> **[3:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=181)** But remember, these scopes only apply to OpenID Connect.
>
> **[3:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=185)** If you're using more general OAuth, you have unlimited options.
>
> **[3:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes?u=76281980&t=188)** But again, I recommend something clear and predictable to make life easier for you, your team, and your users.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (1), public (1), case, (1)
> **Code Identifiers:** public_repo (1), repo_deployment (1), repo_hook (1)
> **Env Vars:** url (1), api (1), oidc (1)
> **CLI Commands:** make (2)
> **Tools:** github (2)
> **Speakers:** - [narrator] (1)

#### Using the OAuth playground
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=0)** - [Instructor] Since Google has done such a great job with their scopes, let's take a quick tour of the Google OAuth Playground.
>
> **[0:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=6)** While we're not going to use this to complete any grant types and examples in this course, the OAuth Playground is a great way to see the steps in action.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=14)** Before we dive in, you should know that every request I'm going to do here is real.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=18)** The tokens are real and would grant valid access to my Google account.
>
> **[0:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=22)** If you got them, you could cause me limitless trouble.
>
> **[0:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=24)** But here's the fun thing.
>
> **[0:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=25)** These tokens are only valid for 24 hours.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=28)** Unless you see this video while I'm still recording the course, I have zero risk.
>
> **[0:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=32)** That said, don't worry.
>
> **[0:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=34)** I'll still deactivate or revoke all the tokens shortly.
>
> **[0:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=36)** With that, let's see things in action.
>
> **[0:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=40)** First of all, Google's OAuth Playground includes every API for every product they have.
>
> **[0:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=45)** Since some of us have at least seen Google Analytics, let's start there.
>
> **[0:49](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=49)** Now, we can expand that to see the scopes.
>
> **[0:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=51)** Remember, scopes are the permissions we can request, not the endpoints that we'd use.
>
> **[0:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=56)** Let's choose the Analytics read-only scope and start the process.
>
> **[1:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=61)** This will use the auth-code flow, and we'll get into that later in this course.
>
> **[1:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=65)** So we'll go ahead and select this.
>
> **[1:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=67)** We'll say Authorize APIs, and now we have to authenticate.
>
> **[1:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=70)** So I'll choose my account.
>
> **[1:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=73)** And now, we're presented with this new screen.
>
> **[1:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=74)** Now, we have to authorize access to this API.
>
> **[1:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=77)** A couple of important things here.
>
> **[1:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=78)** First, there's the warning message about the playground.
>
> **[1:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=81)** That's unique to the system, so don't worry about that.
>
> **[1:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=84)** The next line is describing the scope we're about to authorize.
>
> **[1:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=87)** This is called the consent and is common in authorization flows.
>
> **[1:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=90)** You probably see this every time you use a sign-in with whatever button.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=94)** That system will say "This system is requesting your email address, your profile information."
>
> **[1:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=99)** That's the exact same thing it's doing here.
>
> **[1:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=102)** Now, the important part is that our auth server tells us what the scope is going to do.
>
> **[1:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=106)** In this case, it's going to grant access to a system to see and download our Google Analytics data.
>
> **[1:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=111)** We'll go ahead and allow it.
>
> **[1:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=113)** Now, we see the request that was used, and we see the next request that we're going to execute.
>
> **[1:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=117)** On that request, there's the auth code that we got from the previous step.
>
> **[2:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=121)** Now, we exchange this authorization code for our tokens, and sure enough, here's the result, with both the access and the refresh tokens.
>
> **[2:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=128)** We'll talk about tokens in detail in the next chapter, but one quick thing to note here.
>
> **[2:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=132)** This access token is not a JSON web token or JWT.
>
> **[2:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=137)** It's a big, ugly string that maps back to specific access that Google keeps on their side of things.
>
> **[2:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=144)** But regardless, now we have an access token, and we can make some requests.
>
> **[2:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=148)** And just because the OAuth Playground is cool, we can go ahead and hit List possible operations, and it'll tell you everything you could do with this token.
>
> **[2:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-the-oauth-playground?u=76281980&t=156)** Now that we've seen our first tokens, let's go ahead and go deep into what that means and what to do with them, and then we'll get into grant types.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (1), case, (1)
> **Env Vars:** api (2), json (1), jwt (1)
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 3. OAuth Tokens

#### OAuth 2.0 tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=0)** - [Instructor] With some understanding of the endpoints, let's talk about what we're retrieving from them, tokens.
>
> **[0:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=5)** In the core OAuth framework, RFC 6749, there are two types of tokens specified, access and refresh.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=14)** The OpenID Connect specification adds a third, called ID token.
>
> **[0:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=19)** The access token is what gives the client application access to the protected resource.
>
> **[0:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=23)** This is valuable because now we're not passing around a user's username and password, which could easily be compromised or even cached.
>
> **[0:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=30)** Further, we can validate this token locally or if available, via the introspect endpoint.
>
> **[0:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=37)** The refresh token is a little different.
>
> **[0:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=39)** It's not used with protected resources.
>
> **[0:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=41)** Instead, it's designed so that when an access token expires, you can use a refresh token to request a new access token.
>
> **[0:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=48)** It really has no other purpose than that.
>
> **[0:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=52)** One fun thing about these tokens and the OAuth framework, it doesn't detail how a token is structured or even if it should be.
>
> **[0:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=59)** This is what we call an opaque token.
>
> **[1:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=62)** There's nothing in it.
>
> **[1:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=63)** It's just a string that serves as a unique identifier.
>
> **[1:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=66)** Back to some details in the authorization server, the alternative is a JSON Web Token, or JWT, pronounced jot.
>
> **[1:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=74)** As opposed to an opaque token, this token is a base 64 encoded JSON document, should also have signature information to verify both who sent it and the data in it.
>
> **[1:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=86)** The third and final token is the ID token.
>
> **[1:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=89)** This is only included when OpenID Connect is being used, and it's radically different from the other tokens.
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=95)** To understand why we have to consider the OAuth framework and the underlying JWT specification.
>
> **[1:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=101)** Neither gives us any real structure in what should be in a token or how it should be represented.
>
> **[1:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=107)** To be useful and interoperable, the OpenID Connect spec goes in a great detail on the contents of the token, how it's structured, how it's signed, and how to validate it.
>
> **[1:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=116)** In fact, it goes as far as listing which fields are present under which conditions and how they should be used.
>
> **[2:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=123)** Without it, a relatively simple field like a user's first name would require massive planning, code, and stress for all involved.
>
> **[2:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens?u=76281980&t=131)** Now, let's dig into JWTs specifically.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), protected (2), require (1)
> **Env Vars:** json (2), jwt (2), rfc (1)
> **Documentation:** specification (2), rfc (1), spec (1)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### Validating JWTs
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=0)** - [Instructor] JSON Web Tokens, or JWTs, or jot tokens, whatever you want to call them, are both incredibly powerful and completely unnecessary with an OAuth.
>
> **[0:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=8)** In the last video, I talked about three types of tokens.
>
> **[0:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=12)** Refresh tokens are never jots.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=14)** Access tokens are often jots, but don't have to be.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=18)** The final type of token, the ID token, specified by open ID connect, must be a jot token.
>
> **[0:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=24)** So regardless of where you find them, you must validate them.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=28)** You can't use an unvalidated token under any circumstances.
>
> **[0:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=32)** Now, before you try to validate your tokens, you must be sure to find the signing keys.
>
> **[0:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=36)** You should be able to find them in the documentation for your OAuth provider.
>
> **[0:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=40)** Every jot token has three parts separated by a period.
>
> **[0:43](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=43)** There's the header, the payload, and the signature.
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=47)** The first portion, or header, tells us the algorithm used to generate the token.
>
> **[0:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=51)** We'll need that in a moment.
>
> **[0:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=53)** The second portion is the payload, or the data we actually wanted.
>
> **[0:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=56)** At this point, you probably want to grab the fields and start using them, but wait, we can't do that.
>
> **[1:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=61)** We don't know if the token should be trusted or if it's been modified.
>
> **[1:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=65)** After all, if you're granting user access based on the payload data, we need to know that it's right.
>
> **[1:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=71)** That brings us to the third and final portion of the token: the signature.
>
> **[1:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=75)** The signature is what lets us validate that the token was sent by who we expected and the included data hasn't been modified.
>
> **[1:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=83)** Most programming languages have numerous libraries for validating JWTs, so I'll just mention the steps we need.
>
> **[1:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=89)** First, we'll need the data, which was signed, this is the payload, we'll need the algorithm the center used, that was the header, and then we need to combine that with the public key from the sender.
>
> **[1:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=98)** That's the signing key we had to retrieve from the documentation.
>
> **[1:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=101)** Now, once we calculate the new signature, we compare that with the one sent along in the original token, that was that third parameter.
>
> **[1:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=107)** If they don't match, we must reject the token immediately.
>
> **[1:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=110)** If they do match, that's a good sign, but we may not be done.
>
> **[1:55](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=115)** In the payload itself, you have some name value pairs called claims.
>
> **[2:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=120)** These claims could have absolutely anything in them, ranging from information about the user who authenticated, to the authorization server who issued the token, to information about how long you can use the token.
>
> **[2:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=130)** While all these claims are entirely optional, there are a few which you should respect if you find them.
>
> **[2:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=136)** There's ISS.
>
> **[2:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=138)** ISS is the issuer of the token.
>
> **[2:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=140)** This will usually be your authorization server.
>
> **[2:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=143)** If you find this field present, make sure it's what you expect.
>
> **[2:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=146)** Next is sub, or the subject.
>
> **[2:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=149)** This is the entity the token is about.
>
> **[2:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=151)** This will usually be the end user who authenticated or the system who requested the token.
>
> **[2:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=157)** Next, we have the aud, or audience claim.
>
> **[2:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=160)** This is the intended audience of the token.
>
> **[2:43](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=163)** This is normally going to be the application which requested the token.
>
> **[2:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=166)** If you don't respect this, it's like going to a restaurant and getting your order mixed up.
>
> **[2:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=171)** You might get something that's okay and works, or you might get something you're violently allergic to that sends you to the hospital.
>
> **[2:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=177)** You must respect the audience.
>
> **[2:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=179)** Next up we have IAT, or issued at time.
>
> **[3:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=182)** This is a simple unix timestamp that lets you determine how old this token is.
>
> **[3:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=186)** It's not used often, but it's available sometimes if you need it.
>
> **[3:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=190)** And finally, we have exp, or the expiration claim.
>
> **[3:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=193)** This is another timestamp describing when you must stop using this token.
>
> **[3:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=198)** Once this token expires, you want to get a new one from the authorization server.
>
> **[3:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=202)** This is vitally important because your user's information or access could change, and you don't want to make a decision based on bad or out of date information.
>
> **[3:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=211)** While it's easy to validate JWTs, it's also easy to make a mistake in it.
>
> **[3:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=215)** So I recommend using a proven library.
>
> **[3:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts?u=76281980&t=217)** Check out [jwt.io](https://jwt.io) for a list of which libraries support which algorithms to find the one you need.

> [!info]- Semantic Content
>
> **CLI Commands:** find (6), make (3)
> **Code Keywords:** match, (2), public (1), this, (1), finally, (1)
> **Env Vars:** iss (2), json (1), iat (1)
> **Documentation:** the documentation (2)
> **URLs:** [jwt.io](https://jwt.io) (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)

#### Handling tokens safely and securely
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=0)** - [Instructor] Now that we have all these tokens, and we validate some of them to understand they're safe, we need to use and protect them effectively.
>
> **[0:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=7)** First of all, we have to remember that both access and refresh tokens are credentials.
>
> **[0:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=12)** Therefore, we have to protect them and secure them, just like we would any other secret in our applications.
>
> **[0:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=17)** In general, that means you shouldn't embed them in client-side code and should only store them in secure cookies which can be used over HTTPS.
>
> **[0:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=25)** Then we can look at the contents of the token directly.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=28)** Since the ID token is usually going to go to the owner and the owner alone, you probably want to embed sensitive information in it.
>
> **[0:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=35)** Don't. Don't store sensitive information.
>
> **[0:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=38)** Credit card numbers, government IDs, whatever.
>
> **[0:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=40)** Do not store them in the token.
>
> **[0:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=42)** A better approach is to use the token at the resource server to retrieve that sense of information directly.
>
> **[0:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=48)** That protects both the token and the end user.
>
> **[0:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=51)** This introduces a design challenge, though.
>
> **[0:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=54)** Some OAuth servers will grant a long-lived access token for applications to use, so you don't have to reauthorize very often.
>
> **[1:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=61)** That seems like a great idea, except what happens if we deactivate a user's account?
>
> **[1:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=66)** What happens if it's a high-security transaction?
>
> **[1:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=69)** What happens if the underlying state of the system changes?
>
> **[1:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=72)** Since the protected resource might not validate the token again, we have a problem.
>
> **[1:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=77)** Therefore, we have to choose token lifetime specific to the use case.
>
> **[1:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=81)** Think of it this way.
>
> **[1:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=83)** If you authorize an application to read your YouTube playlist, it's low risk.
>
> **[1:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=87)** Even if you revoke access, what can the app do?
>
> **[1:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=90)** Read-only access isn't a huge problem.
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=92)** You can use an access token that lasts for months.
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=95)** Alternatively, if you authorize an application to view your bank account balance, while you won't lose anything if it's compromised, it's still protecting sensitive information, so inherently, it's higher risk.
>
> **[1:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=108)** In this case, you may want to limit the access token lifetime to days or weeks.
>
> **[1:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=112)** Finally, if you authorize an application to move money between your bank accounts, the consequences of misusing or abusing this access are high.
>
> **[2:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=122)** In this case, you want to immediately know if and when access is revoked, so your token lifetime can be as little as five or 10 minutes, and that's probably the best option.
>
> **[2:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=131)** While core OAuth has token expiration, it doesn't have token revocation.
>
> **[2:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=136)** Basically, you have to wait for a token to expire, but you can't force it.
>
> **[2:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=140)** The token revocation RFC gives us a revoke endpoint, where we can force-invalidate tokens, but not every OAuth provider supports it.
>
> **[2:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=149)** Alternatively, and more likely, we need to use an OAuth token expiration time that reflects the risk of our use case.
>
> **[2:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=156)** This is where refresh tokens are particularly useful.
>
> **[2:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=159)** When the client application attempts to exchange the refresh token for a new access token, a properly designed OAuth server will validate its access.
>
> **[2:49](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=169)** If a user has been deactivated, the access has been revoked, or the resulting authorization policy changed, our access token will reflect that.
>
> **[2:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=179)** Now, regardless of which approach you take, you must protect your tokens.
>
> **[3:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=182)** They're credentials, so treat them as such.
>
> **[3:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=184)** Now, now we finally have all the mechanics at OAuth and OpenID Connect, and we can talk about grant types and get into some sample code.
>
> **[3:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely?u=76281980&t=192)** So let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (2), case, (2), protected (1), finally, (1), let (1)
> **Env Vars:** https (1), rfc (1)
> **Documentation:** rfc (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** sample code (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 4. Grant Type: Authorization Code

#### Overview: Authorization Code Flow
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=0)** - [Speaker 1] The first grant type we'll cover is the authorization code flow.
>
> **[0:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=4)** As a parent, I know I'm not supposed to have favorites, but this is my favorite grant type.
>
> **[0:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=8)** Sure, it's not the simplest flow and it's not mobile friendly out of the box, but it just plain works.
>
> **[0:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=13)** Since it depends on a backend component and the language doesn't matter, you can count on it to protect your client's secret.
>
> **[0:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=19)** There is an opportunity for it to be attacked, but that window's very small.
>
> **[0:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=23)** Don't worry, I'll go over that in the security considerations video.
>
> **[0:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=26)** But enough of me just talking about it.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=28)** Let's show the steps of the flow.
>
> **[0:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=31)** In practice, this is what it looks like.
>
> **[0:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=33)** The user navigates to a page and the application hits something that's a protected resource.
>
> **[0:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=38)** It could be anything from an API to account information.
>
> **[0:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=40)** Next, they send you to the identity provider or the authorization server that both trust you and perform the authentication and grant authorizations, but you don't just get back an access token.
>
> **[0:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=51)** Instead, you get back an auth code.
>
> **[0:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=53)** Now the auth code is a short-lived one-time use code that the only thing it's useful for is sending it back to our token endpoint to get backend access and potentially a refresh token, both of which go back to the application directly.
>
> **[1:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=67)** The end user briefly sees the auth code, but since it's one-time use code, it's only useful for a moment and then never again.
>
> **[1:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=75)** One useful thing to note on this flow, notice that first, the user authenticates, then the application authenticates.
>
> **[1:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=83)** That means our authorization server knows who it granted a token to and for which app.
>
> **[1:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=88)** If later we found that the app was malicious or that the user was compromised in some way, we could revoke access immediately.
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=95)** As with the other OAuth flows, at no time did the application have the chance to touch our password, and further the user and the browser never had the chance to touch the access token.
>
> **[1:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=106)** This is effectively the gold standard for OAuth and if the world was simple and easy, this is what we'd use for all flows, but it's not.
>
> **[1:55](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow?u=76281980&t=115)** So let's talk about where we should and shouldn't use it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type. (1), protected (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [speaker (1)

#### When should you use this?
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=0)** - [Instructor] Now, when do we want to use authorization code flow?
>
> **[0:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=3)** If we go back to our decision tree from our grant type video, there are three different questions before we can get to this grant type.
>
> **[0:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=9)** First, we have to have a user involved, which also means we can use this grant type for OpenID Connect in addition to regular OAuth.
>
> **[0:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=17)** Next, we need to have a browser available on the system we're using.
>
> **[0:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=20)** This isn't for smart devices or similar.
>
> **[0:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=23)** Finally, our app must be server-side.
>
> **[0:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=25)** This doesn't mean you can't use JavaScript, but the authentication code itself must be server-side.
>
> **[0:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=31)** This means we can't use normal auth code flow with mobile apps or single-page apps.
>
> **[0:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=36)** The reason for this comes back to this diagram, which shows that there's both a user authentication and an application or client authentication.
>
> **[0:43](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=43)** The user authenticates with their credentials with their identity provider, and then the application authenticates itself with the authorization server, and that's the key.
>
> **[0:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=52)** When the application authenticates itself, it uses its own client ID and secret.
>
> **[0:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=57)** That secret is a credential which must be protected like any other credential.
>
> **[1:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=62)** Therefore, regardless of your application's tech stack or architecture, you need to store that client secret securely in some backend component.
>
> **[1:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=71)** So to be clear one more time, do not use authorization code flow in a mobile app, single-page app or on any physical device where you may have to embed a secret.
>
> **[1:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=80)** The second you put that secret into the code or memory that the user or other apps have access to, consider it compromised.
>
> **[1:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=88)** All of that said, if you do need to build for single-page apps or mobile apps, check out auth code with PKCE, which we'll cover in just a couple sessions.
>
> **[1:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=97)** But enough talk.
>
> **[1:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22886432?u=76281980&t=97)** Let's see it in action.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1), finally, (1), protected (1), let (1)
> **Env Vars:** pkce (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Lab: Build an example (web app or Postman)
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=0)** - [Instructor] As I noted earlier, the authorization code flow is my favorite grant type.
>
> **[0:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=4)** Not because it's simple, but because it's effective.
>
> **[0:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=7)** The third party application never sees our credentials and the end user never sees the access token.
>
> **[0:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=12)** It's a good combination.
>
> **[0:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=13)** For this example, we're going to keep it simple and use Postman to interact with our Auth0 configuration.
>
> **[0:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=19)** In addition to this video, I have the step-by-step instructions and the sample code for this course.
>
> **[0:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=24)** Within the project, simply find README-auth-code, and this has the step-by-step instructions detailing every field and what it should be set to.
>
> **[0:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=33)** So with that, let's go ahead and dive in.
>
> **[0:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=36)** First of all, we have to start within our Auth0 configuration.
>
> **[0:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=39)** So go to Applications, application, and we'll choose our default app.
>
> **[0:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=46)** All right, first in auth0 we want to go ahead and grab our domain.
>
> **[0:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=50)** So we copy that and we go back to Postman.
>
> **[0:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=53)** On the Postman side of things we'll want to start this with https, add our domain, and then in this case we'll add oauth/authorize, and then I'll cover the authorized endpoint that we'll hit first.
>
> **[1:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=66)** Then we want to do the exact same thing with https, add the domain and we'll say oath/token.
>
> **[1:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=75)** Now we need the Client ID and Client Secret, which are also on the auth0 side.
>
> **[1:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=80)** So we'll go back to auth0, we'll grab our Client ID, we'll go back to Postman and put that in.
>
> **[1:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=87)** And then we'll do the same thing for the Client Secret.
>
> **[1:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=91)** Now that we have our Client ID and Client Secret, we need to set some scopes.
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=95)** Let's go ahead and start easy and say openid, so we'll stay within the realm of openid connect, and then we'll say email.
>
> **[1:43](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=103)** Now if all goes well, when I hit get new access token, I'll be redirected through auth0, asked to authenticate, and then redirected back here with a token.
>
> **[1:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=111)** So let's give it a try.
>
> **[1:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=113)** It says Authentication complete, and now it's redirecting back and sure enough, I got an access token.
>
> **[1:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=119)** Let me go ahead and grab this.
>
> **[2:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=122)** Actually, let's grab the ID token, that's way more interesting.
>
> **[2:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=125)** Grab the ID token from here, and now we'll go over to [jwt.io](https://jwt.io).
>
> **[2:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=131)** On [jwt.io](https://jwt.io) we'll scroll down just a little bit and we'll drop our ID token here to see what's in it.
>
> **[2:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=137)** And sure enough, we've got email, and there's my email.
>
> **[2:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=139)** We've got email verified, we've got the issued at, we've got the audience, everything that we expected to be there is there.
>
> **[2:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=146)** Now let's make one more tweak to our call and see what it does.
>
> **[2:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=149)** So we'll go back to Postman and make that change.
>
> **[2:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=153)** In Postman, instead of saying openid and email, let's say openid and profile, we'll say get new access token, and sure enough it authenticated properly.
>
> **[2:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=164)** And now we'll see a new ID token.
>
> **[2:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=167)** Let's go ahead and grab this, and go back to [jwt.io](https://jwt.io) to see what's in it this time.
>
> **[2:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=177)** On [jwt.io](https://jwt.io), we'll go ahead and drop that ID token in, and sure enough, our payload has changed.
>
> **[3:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=181)** Now I have a nickname, I have a name, and then I even have a profile picture that auth0 automatically retrieved on my behalf.
>
> **[3:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=189)** But you're probably thinking to yourself, where's the login?
>
> **[3:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=191)** What happened there?
>
> **[3:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=192)** Let me go back to Postman and show you what happened.
>
> **[3:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=196)** On the Postman side of things, Postman knows that we're logged in behind the scenes.
>
> **[3:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=200)** So let's go ahead and say, clear cookies.
>
> **[3:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=202)** So now any session that's already there is gone.
>
> **[3:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=205)** And now let's say get new access token.
>
> **[3:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=207)** So it asked me to authenticate via browser and it pops open this window.
>
> **[3:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=213)** So I'll say, keith@caseysoftware, and then I'll type in the password for the user that I created earlier.
>
> **[3:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=220)** This is not my account password for auth0 as a whole for my administrator role, this is for my individual user.
>
> **[3:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=228)** Now, if all has gone well, I typed the password correctly, and it redirects, and sure enough we'll get back to the access token yet again.
>
> **[3:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=236)** Important thing to remember, because I was already logged in because Postman already had the concept of the cookies behind the scenes, it automatically carried that over and didn't ask me to log in again.
>
> **[4:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=247)** So keep that in mind as you're testing this.
>
> **[4:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-web-app-or-postman?u=76281980&t=249)** It's really easy to make that mistake.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this. (2), type. (1), try. (1), this, (1)
> **Tools:** postman (10)
> **Cross-References:** go back to (6)
> **CLI Commands:** make (3), find (1)
> **URLs:** [jwt.io](https://jwt.io) (4)
> **UI Navigation:** go to (1), scroll down (1)
> **Env Vars:** readme (1)
> **Exercise Files:** sample code (1)

#### Auth-Code and PKCE overview
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=0)** - [Instructor] If we go back to the beginnings of OAuth 2.0 in 2012, the tech world was a little different.
>
> **[0:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=5)** We'd had mobile apps for a few years, but single-page apps were still relatively new.
>
> **[0:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=9)** Unlike normal web apps, they loaded themselves entirely client-side in the browser or on a device, and therefore, we couldn't count on them to keep secrets for us.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=18)** The OAuth authors realized this issue and include the implicit or hybrid grant type, which allowed us to still use OAuth, but with a few limitations.
>
> **[0:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=26)** For example, we couldn't use a client secret, 'cause remember, we can't keep secrets, and therefore, we also couldn't use refresh tokens.
>
> **[0:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=33)** Luckily, because OAuth is a framework and not a specification, we could extend it as we figured out new and better approaches.
>
> **[0:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=41)** Enter RFC 7636, or Proof Key for Code Exchange, by OAuth public clients.
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=47)** It's a mouthful.
>
> **[0:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=48)** So we just call it auth code with PKCE, or simply, PKCE.
>
> **[0:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=53)** What PKCE introduces is, well, it doesn't introduce, but it restores the application authentication steps we had from the original auth code flow.
>
> **[1:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=61)** Let's step through it in a diagram.
>
> **[1:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=63)** This flow starts a little differently.
>
> **[1:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=65)** Instead of just redirecting the user to the identity provider, the app creates a code verifier and uses it to generate a challenge.
>
> **[1:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=73)** Then when the app does the redirect, the app passes along the challenge.
>
> **[1:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=77)** The user does their normal authentication, and the server generates the auth code.
>
> **[1:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=81)** Now, here, we have a second difference.
>
> **[1:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=83)** When the app gets the auth code, it makes a token request, specifically using the code verifier it generated at the beginning.
>
> **[1:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=90)** Then the auth server uses as a verifier to regenerate the original challenge and compares them.
>
> **[1:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=96)** If they match, we know that this is the app that started the process, and the auth server generates the tokens.
>
> **[1:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=101)** If they don't match, we reject the rest of the flow and force the app to start over with a new verifier and challenge.
>
> **[1:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=107)** We managed to recreate app authentication without having to embed secrets in the app.
>
> **[1:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=113)** In fact, this is originally called the AppAuth approach.
>
> **[1:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=116)** This has been an official extension since 2017, but was in production use much earlier than that, so it's a long proven track record at this point.
>
> **[2:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=125)** Now, you might still see the implicit or hybrid grant type in older single-page apps, but most OAuth providers like Google, Apple, and others have informally deprecated, so you won't see it very often.
>
> **[2:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview?u=76281980&t=136)** Going forward, when you're building single-page apps or mobile apps, authorization code flow with PKCE or PKCE is the answer.

> [!info]- Semantic Content
>
> **Code Keywords:** match, (2), new. (1), type, (1), public (1), let (1)
> **Env Vars:** pkce (5), rfc (1)
> **Documentation:** specification (1), rfc (1)
> **Versions:** 2.0 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### When should you use PKCE?
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=0)** - [Instructor] Now when do we use the authorization code flow as PKCE or simply Pixy?
>
> **[0:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=4)** If we go back to the decision tree from our grant type video, we have the same three questions as always.
>
> **[0:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=10)** First, do we have a user involved.
>
> **[0:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=12)** And yes we do, which means we can also use this grant type for OpenID Connect in addition to basic OAuth.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=18)** Next, we need to have a browser available in the system we're using.
>
> **[0:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=21)** This isn't for simple smart devices or things like that.
>
> **[0:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=25)** Finally, our app will have a client-side component.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=28)** Therefore, Pixy is ideal for mobile apps or single-page apps.
>
> **[0:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=32)** Or to put it another way, if you ever see the hybrid grant type or implicit grant type in any sort of guidance, documentation, or et cetera, you probably want to use Pixy instead.
>
> **[0:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=41)** Those were the old ways of doing things before we had this additional extension.
>
> **[0:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=46)** Now, most people will also want to consider this for smart devices, like an Xbox.
>
> **[0:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=50)** At first glance, that makes sense.
>
> **[0:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=52)** After all, you have a user and a capable device with a good browser, and you can't trust a client application to keep secrets for us.
>
> **[0:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=59)** But what you're missing is a good secure input approach.
>
> **[1:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=62)** Have you ever tried to type a password with a game controller?
>
> **[1:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=65)** And by the way, you'd be typing this in front of the entire room.
>
> **[1:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=69)** So not only is this a miserable user experience, it's also inherently insecure.
>
> **[1:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=74)** Therefore, you should probably look at the device grant type and not Pixy.
>
> **[1:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=77)** Don't worry. We'll talk about device grant type later.
>
> **[1:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=81)** And at the time of this video, there's even a great set of libraries available at [appauth.io](https://appauth.io), which will help you implement Pixy quickly and easily for Android, iOS, and many JavaScript frameworks.
>
> **[1:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=91)** It doesn't get much easier than that.
>
> **[1:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce?u=76281980&t=93)** But now let's actually see it in action to see how everything works.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Code Identifiers:** ios (1)
> **URLs:** [appauth.io](https://appauth.io) (1)
> **Env Vars:** pkce (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Lab: Build an example (native app or spa)
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=0)** - [Instructor] To see Auth-Code with PKCE in action, we need to set a few things up both locally and server side.
>
> **[0:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=5)** In this case, we'll use some sample code from Auth0 available here.
>
> **[0:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=9)** While we could follow this entire guide, they make it easy with some simple steps when we download.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=14)** Now, first, let's make sure the download is going, unzip it, and then move into that folder to start the install process.
>
> **[0:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=21)** So let's go ahead and make sure we're in the right folder, and sure enough, looks like we are, and so we'll say npm install.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=28)** So npm will make sure that we have all the right packages and everything ready to go.
>
> **[0:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=33)** Now that we have that going, let's go ahead and configure the Auth0 side of things.
>
> **[0:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=36)** So we'll go back to the browser.
>
> **[0:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=38)** From the Auth0 dashboard, we'll hit Applications, Applications, and we'll hit our default application here.
>
> **[0:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=46)** Now, when we start our application, it's going to be running on local host 3000.
>
> **[0:49](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=49)** So let's go ahead and set that in a couple different places.
>
> **[0:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=53)** So first we need to make sure it's in the callback URLs.
>
> **[0:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=56)** This will tell Auth0, here's a safe URL that we plan on redirecting the user to, and therefore the tokens to after the authentication flows correct.
>
> **[1:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=64)** Then we'll go ahead and add it to the Allowed Logouts URL.
>
> **[1:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=68)** That will tell Auth0 that after the user logs out, it'll redirect them back to this URL.
>
> **[1:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=74)** And then finally, we need to make one more change.
>
> **[1:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=76)** We need to add local hosts to the Allowed Web Origins list.
>
> **[1:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=80)** This is going to tell Auth0, this is a safe origin that this flow might start from.
>
> **[1:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=85)** Now it's really easy to think that we took care of all the steps here.
>
> **[1:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=88)** There's one more change we need to make.
>
> **[1:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=90)** If we scroll back towards the top, we need to change our Application Type from regular web app to single page app.
>
> **[1:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=97)** That's an easy step to skip, but it absolutely must be done because we're telling Auth0, don't count on normal Auth-Code flow.
>
> **[1:43](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=103)** This is Auth-Code with PKCE now.
>
> **[1:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=106)** So we'll scroll down to the bottom and hit Save.
>
> **[1:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=110)** All right, looks like our changes were saved.
>
> **[1:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=112)** Now let's go ahead and go back to the application.
>
> **[1:55](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=115)** If you downloaded this project directly from GitHub, you might need to make a tweak here.
>
> **[1:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=119)** In the root of this project, check for auth_config.json, and if it's there and looks something like this, great.
>
> **[2:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=126)** If it's not there, go back to your Auth0 dashboard and copy your domain and clientId into this JSON structure.
>
> **[2:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=133)** This step is also detailed in the Read Me.
>
> **[2:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=135)** Now let's start the app and go to the browser.
>
> **[2:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=139)** On the command line, we'll go ahead and say npm run dev, which will go ahead and put in our developer state, so we have good detailed logs for debugging.
>
> **[2:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=150)** Looks like everything started off perfectly.
>
> **[2:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=152)** So now let's go to the browser.
>
> **[2:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=155)** In the browser, when we hit localhost:3000, we have a very simple application and we have a Login button here.
>
> **[2:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=162)** And if all goes well when we click this button, we're redirected over to Auth0.
>
> **[2:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=166)** So I'll go ahead and log in.
>
> **[2:49](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=169)** And if I logged in properly, I'm redirected back to the application transparently, one major thing has changed here.
>
> **[2:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=176)** Instead of having a Login button, there's my profile picture.
>
> **[2:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=179)** So behind the scenes, this used the OpenID Connect profile scope over the PKCE grant type to pull my information.
>
> **[3:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=186)** And the most important part here, at no time, did we have to ever embed any secrets into our application.
>
> **[3:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=192)** In fact, one last thing, you could see we've got my entire profile information here.
>
> **[3:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=197)** This is the payload that actually came back in the ID token.
>
> **[3:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=200)** And if I wanted to, I could go ahead and say Log Out, and it'll log me out both of the application and of Auth0 directly.
>
> **[3:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=207)** This is a quick and easy way to get OpenID Connect embedded in any application in minutes.
>
> **[3:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-native-app-or-spa?u=76281980&t=213)** Now let's go ahead and dive into some of the security implications around both Auth-Code and the PKCE flows.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), npm (3), unzip (1)
> **Code Keywords:** let (8), case, (1), finally, (1), from. (1), this, (1)
> **Env Vars:** pkce (4), url (3), json (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** go to (2), scroll down (1)
> **Prerequisites:** install (2), configure (1)
> **Code Identifiers:** auth_config (1), clientid (1)
> **Tools:** github (1), command line (1)

#### Security considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=0)** - [Instructor] Now let's talk about how to properly secure both the Authorization Code Flow and PKCE flows.
>
> **[0:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=6)** To be honest, these are the easiest to secure by far, which is entirely due to how these flows work and which systems or people can see what.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=14)** First, remember we are dealing with credentials, so communication should be over secure mechanisms, such as TLS.
>
> **[0:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=20)** That still applies to this flow, even though our window for attack is much smaller.
>
> **[0:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=24)** It's only open while we received but have not used the auth code.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=28)** Remember, after the user authenticates, they get that auth code, which is the server-side app then exchanges for the access token.
>
> **[0:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=35)** That code can only be used once, so while you have to protect it, it really only matters for a brief window, and the user or any other application in the browser can't even see any of the resulting access tokens or refresh tokens, so they can't leak that.
>
> **[0:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=51)** One potential vulnerability is that after logging in with your identity provider, whether it's Google or Okta or Facebook, your user's likely to still have a web browser session active.
>
> **[1:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=60)** If another application can send that user to the same identity provider without their knowledge or under a false context, that could be a problem.
>
> **[1:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=68)** Now, realistically, those providers may still request access or user-based consent based on the scopes requested, so most users will have a chance to stop the interaction, but it's not foolproof.
>
> **[1:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=79)** Next, just like other grant types, we have a redirect URI which is where the OAuth server will send the auth code after authorization is complete.
>
> **[1:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=87)** If our OAuth provider allows arbitrary redirect URIs, someone can grab our auth code and get an access token as us.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=94)** It's unlikely to be a problem, but I'd recommend checking your server regardless because getting this wrong is catastrophic.
>
> **[1:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=101)** Finally, you must validate your access token.
>
> **[1:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=104)** This isn't unique to this flow, but I'm saying it every time because it's that important.
>
> **[1:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=108)** Please validate your tokens as described by RFC 7519 or your OAuth provider.
>
> **[1:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=114)** We talked about this already earlier in the course.
>
> **[1:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=117)** Overall, the Authorization Code grant type with PKCE when you need it, is one of the most secure.
>
> **[2:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=122)** The only effective attacks I've seen against it are either compromising the user or compromising the application, neither of which have anything to do with OAuth.
>
> **[2:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22884654?u=76281980&t=131)** Now that we've covered my favorite grant type, let's look at the one I dread, Resource Owner Password Flow.

> [!info]- Semantic Content
>
> **Env Vars:** pkce (2), tls (1), uri (1), rfc (1)
> **Code Keywords:** let (2), finally, (1), type, (1)
> **Cross-References:** we talked about (1), earlier in (1)
> **Analogies:** such as (1), just like (1)
> **Documentation:** rfc (1)
> **Speakers:** - [instructor] (1)


### 5. Grant Type: Resource Owner Password

#### Overview: Resource Owner Password flow
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=0)** - [Instructor] If Authorization Code Flow is my favorite grant type, I'm not ashamed to admit that Resource Owner Password Flow is the one I dread the most.
>
> **[0:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=8)** It's not because it's more complicated than the other grant types.
>
> **[0:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=11)** It's actually the easiest.
>
> **[0:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=13)** Unfortunately, it's also the riskiest, but instead of me telling you, let's just look at it.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=18)** In practice, this is what it looks like.
>
> **[0:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=20)** The user navigates to a page and the application hits something that's a protected resource.
>
> **[0:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=24)** It could be anything from an API to account information.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=28)** Next, the user is presented with a login form requesting their username and password.
>
> **[0:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=32)** Note that the application did not send the user to that other site.
>
> **[0:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=36)** The application itself is capturing the credentials on the user's behalf.
>
> **[0:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=41)** Once a user submits the credentials, behind the scene, the application submits them to the other site, gets an access token and then uses that going forward.
>
> **[0:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=50)** While the user and the browser never had a chance to touch the access token, the application has touched your password.
>
> **[0:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=57)** If we have complete faith and confidence in the application and its developers, that could be okay, but realistically I don't.
>
> **[1:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=64)** All it takes is one sloppy, incompetent or even malicious developer on the team and your user's account is compromised.
>
> **[1:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=71)** Even with tightly-regulated and reviewed OAuth scopes, they don't matter if you have the user's password.
>
> **[1:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=78)** In short, this grant type defeats most of the purpose of OAuth.
>
> **[1:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-resource-owner-password-flow?u=76281980&t=82)** Remember, OAuth was designed so we didn't have to share a user's passwords around or to put it another way, if you think Resource Owner Password Flow is the correct answer, you're almost definitely wrong, except there's a handful of times that you're right, so let's dive into that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type, (1), protected (1)
> **Env Vars:** api (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### When should you use this?
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=0)** - [Instructor] To go back to our original decision tree around grant types, Resource Owner Password flow is one of the last options and is rarely the right answer.
>
> **[0:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=8)** I'll even go a step further.
>
> **[0:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=9)** If you're building a new system, you should never use Resource Owner Password flow.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=14)** It's irresponsible and no, this is one of the few places in this course where I'll say never in relation to an approach, just don't do it.
>
> **[0:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=22)** If nothing else, you are teaching your users to put their credentials into untrusted third-party websites.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=28)** That's how bad things happen.
>
> **[0:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=30)** In fact, some banks will claim that you've breached their acceptable use policy if you've shared your password.
>
> **[0:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=36)** If it's so bad why does this flow exist?
>
> **[0:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=40)** If you're updating legacy systems, and bringing them into a better security practices, and improving their architecture, you can use Resource Owner Password flow for a while, but it should be a bridge to a better solution, not the solution itself.
>
> **[0:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=54)** That said, I cover it here because it's often used as a bridge between legacy systems and new and better security practices.
>
> **[1:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=61)** It lets developers convert their legacy apps to speaking OAuth, which makes it easier to integrate, standardize, eventually replace otherwise deprecated components.
>
> **[1:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=73)** Resource Owner Password flow has its place and a legitimate use case, but you probably don't want to use it.
>
> **[1:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this?u=76281980&t=80)** For completeness of this course, I'll show you one example before we explored the security considerations and they're massive.

> [!info]- Semantic Content
>
> **Code Keywords:** else, (1), while, (1), case, (1)
> **Cross-References:** go back to (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### Lab: Build an example (curl)
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=0)** - [Instructor] Now we can try out the Resource Owner Password Flow, very simply, because although it does have a user involved, it makes an actual request behind the scenes with the username password the user already provided.
>
> **[0:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=10)** As a result, it will have a user interface, your usual login box, but after that, it's a simple HTTP request.
>
> **[0:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=17)** In this case, we'll skip directly to that request.
>
> **[0:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=20)** Once again, for context, I'm using the PHP-based league OAuth server, which I installed and configured according to the instructions in the PHP OAuth server folder.
>
> **[0:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=29)** I did a detailed walkthrough in a later session if you want to see every step, but now on with the flow.
>
> **[0:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=36)** So go ahead and go to the Read Me for the Resource Owner Password Flow.
>
> **[0:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=39)** So remember what the Resource Owner Password Flow is doing.
>
> **[0:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=42)** Because it's just taking our credentials and making a request behind the scenes, we can do this with curl.
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=47)** So if we go to the Read Me Resource Owner file, we go ahead and grab this command directly here and then we go to the command line.
>
> **[0:55](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=55)** On the command line, we can go ahead and load this command directly and hit enter and if all goes well, well, it's kind of an ugly mess.
>
> **[1:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=62)** There's not a lot to tell out of that, so let's make one change.
>
> **[1:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=66)** We'll add jq dot to the end of it, make it a little bit prettier and now we see we have an access token and a refresh token, so let's go ahead and grab this access token and head over to [jwt.io](https://jwt.io) to see what's in it.
>
> **[1:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=79)** On [jwt.io](https://jwt.io), we'll go ahead and drop our access token in and sure enough, there's the payload we expected.
>
> **[1:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=87)** Everything is there.
>
> **[1:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=87)** We have our issued at time, we have our expiration time and we even have the scopes that we requested.
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=92)** So from beginning to end, it takes just a few moments to get set up with Resource Owner Password Flow.
>
> **[1:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl-22880764?u=76281980&t=97)** Now remember, you have to be very careful on how and when you use this, but it is a tool in our toolbox.

> [!info]- Semantic Content
>
> **CLI Commands:** php (2), make (2), curl (1)
> **Code Keywords:** let (2), interface (1), case, (1), this, (1)
> **Env Vars:** php (2), http (1)
> **UI Navigation:** go to (3)
> **URLs:** [jwt.io](https://jwt.io) (2)
> **Tools:** command line (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### Security considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=0)** - [Instructor] Let's dive into the security considerations around the resource owner password flow, because honestly, there are a lot.
>
> **[0:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=6)** Just like the other OAuth flows, the same rules apply.
>
> **[0:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=10)** You need to make sure your communications are secured with something like TLS.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=14)** Further, since this flow uses the client's secret, you need make sure it's protected in some backend or private component.
>
> **[0:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=21)** You also need to protect the access token and make sure you use and store it safely.
>
> **[0:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=25)** And of course, you've probably validated your token by now too, right?
>
> **[0:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=30)** But the actual security issue is much bigger than any of those and it's unique to this flow.
>
> **[0:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=35)** In all the other OAuth flows, the application sent the user to the authorization server or identity provider to authenticate and authorize the application.
>
> **[0:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=44)** Instead, this one captures the user's credentials in the application itself and sends them to the server on the user's behalf behind the scenes.
>
> **[0:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=53)** This means the application developer has your credentials.
>
> **[0:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=57)** Now, the questions we have to ask ourselves, do we really want to train our users to put their credentials just anywhere?
>
> **[1:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=63)** And this all comes down to one fundamentally important question.
>
> **[1:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=67)** Do you trust the application and all the developers who have ever touched it?
>
> **[1:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=72)** If this application is built by your bank and only accesses your bank, this might be safe.
>
> **[1:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=78)** Of course, a poorly trained developer might log it by accident.
>
> **[1:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=81)** Or maybe a malicious developer logs and saves that somewhere.
>
> **[1:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=85)** Either way, your account is now compromised.
>
> **[1:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=88)** Now the requested scopes will apply to the access token and limit the overall application's authorizations.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=94)** But if a malicious user can just use your username and password instead, they'll do that.
>
> **[1:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=99)** After all, as far as the bank website is concerned, it is you.
>
> **[1:43](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=103)** Even worse, since they have your username and password instead of an access token, the entire concept of scopes goes away because for all intents and purposes, they are you.
>
> **[1:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=114)** And you can't just revoke this access via the token because they have your credentials.
>
> **[1:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=119)** They could just request a new one.
>
> **[2:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=121)** The only way to remove access is to change your password.
>
> **[2:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=125)** All of that said, there are a lot of organizations that implement resource owner password flow for their applications as a transitional or temporary approach on the way to something better.
>
> **[2:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=135)** More than anything, it's used to get systems and developers to start speaking OAuth as quickly as possible, and then later they convert it to authorization code flow or PKCE.
>
> **[2:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=145)** If you have the choice, do not use resource owner password flow.
>
> **[2:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22886426?u=76281980&t=149)** If you must, use it as a transition to something else.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), protected (1), private (1), else. (1)
> **CLI Commands:** make (3)
> **Env Vars:** tls (1), pkce (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 6. Grant Type: Client Credential

#### Overview: Client Credential Flow
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=0)** - [Instructor] The next grant type or OAuth flow that we're going to cover is the easiest, the client credential flow.
>
> **[0:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=5)** This is explicitly for authorizing a system to perform actions on another system.
>
> **[0:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=10)** If you're familiar with service accounts that are supported by systems like Active Directory or potentially APIs like Salesforce or Google, you've already dealt with this concept.
>
> **[0:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=19)** Unlike other grant types, this one does not involve a user, and that's where people struggle with it.
>
> **[0:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=24)** Remember, it's never acting on behalf of a user, but on its own behalf.
>
> **[0:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=29)** That also means you'll never use it for OpenID Connect.
>
> **[0:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=33)** In terms of mechanics, this is what it looks like.
>
> **[0:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=35)** My client application needs access to some protected resource.
>
> **[0:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=39)** It makes a request to our authorization server using its client ID and client secret, which are effectively that application's username and password.
>
> **[0:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=48)** The authorization server validates those credentials and generates an access token.
>
> **[0:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=52)** The client application then uses that access token to interact with the protected resource.
>
> **[0:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=57)** Remember though, the client ID and client seeker are the application's credential.
>
> **[1:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=62)** There's no user involved in this grant type.
>
> **[1:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=65)** So let's imagine a different scenario.
>
> **[1:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=67)** Let's say there's a freely available task tracking tool called Trello, which allows you to attach files to tasks.
>
> **[1:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=74)** When I upload a file behind the scenes, Trello is uploading that file to Amazon S3.
>
> **[1:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=79)** Now, it doesn't upload to my S3 account, but to its own internal account.
>
> **[1:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=83)** In fact, it hides S3 for me entirely.
>
> **[1:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=86)** I only discovered it personally because I know where to look.
>
> **[1:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=90)** But now I can download and interact with that file however I need.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=94)** In fact, authorization and microservices work exactly the same way.
>
> **[1:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=98)** The components are interacting with one another on behalf of themselves, not on my behalf.
>
> **[1:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=104)** So what's the point?
>
> **[1:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=105)** What's the benefit of this grant type?
>
> **[1:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=107)** Well, there are three things.
>
> **[1:49](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=109)** First, they get all the benefits of using OAuth, including rotating credentials, granular permissions via scopes, and a huge ecosystem of tools and patterns to implement.
>
> **[1:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=119)** Next, you have easy onboarding.
>
> **[2:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=121)** Since I don't have to already have an S3 account, I can sign up for a Trello account and immediately start using it.
>
> **[2:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=127)** If they need to use my S3 account, I'd need an account on both and then connect the two.
>
> **[2:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=133)** Finally, this provides a pluggable interface.
>
> **[2:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=136)** Since these sites hide the backend details from me, the end user, if they ever need to change to another service, they can do that without involving me.
>
> **[2:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=144)** In fact, as far as I could tell, I may never notice the change.
>
> **[2:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=148)** If they're storing the files in my personal storage space, it would require my involvement to move or update the files from one provider to another.
>
> **[2:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=155)** And there's one final thing to note here.
>
> **[2:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=158)** In terms of implementation, this is always done by backend application service and never in a mobile app or single page application.
>
> **[2:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow?u=76281980&t=166)** Remember, mobile apps and single page apps cannot keep secrets on our behalf, and the client's secret is a secret we must protect.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (2), let (2), type. (1), finally, (1), interface (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### When should you use this?
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=0)** - [Instructor] Knowing when to use the client credential grant type is the easiest of all.
>
> **[0:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=4)** Going back to our decision tree, the very first question was, are we authorizing on behalf of a user?
>
> **[0:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=10)** When the answer's no, we use client credential flow.
>
> **[0:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=13)** That's it.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=14)** We don't have to consider the rest of the questions.
>
> **[0:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=17)** Now, that can be a little deceptive at first.
>
> **[0:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=19)** For example, if you have an Amazon S3 bucket storing files behind a web app, you may think that's on behalf of a user, but unless you're connecting to that user's AWS account, the application is the owner, not the user.
>
> **[0:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=32)** One place where you're also likely to see this is communication between microservices, when service A needs to talk to service B.
>
> **[0:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=39)** Most likely, you'll want some sort of authorization policy so service A and B can interact but not have service C interact with A.
>
> **[0:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=48)** Now, the contrary opinion to client credential flow is to just use API Keys.
>
> **[0:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=52)** While that can work, you get some pretty good benefits by using OAuth instead.
>
> **[0:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=56)** First, if the user facing portions of your system are already using OAuth your team and systems already know how to deal with tokens.
>
> **[1:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=64)** That makes validating them, using them, and even revoking them all familiar territory.
>
> **[1:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=69)** No one has to relearn how the backend systems are different.
>
> **[1:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=73)** In addition, OAuth already has the concept of scopes built in.
>
> **[1:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=77)** Therefore, when system A needs to talk to system B, it doesn't have to have full permissions.
>
> **[1:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=82)** You can scope down its access to the use case you need to support.
>
> **[1:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=85)** Finally, since now every component from both front end and back end can use Oauth, your tooling can be the same no matter where you're working.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=94)** There doesn't have to be a separate front end and backend environments.
>
> **[1:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=97)** You can just have your OAuth environment.
>
> **[1:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=100)** The one thing we have to remember through all this is that even though we don't have a user, the client secret is effectively the system's password.
>
> **[1:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=107)** Therefore, we must protect it like any other secret in the system.
>
> **[1:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22881719?u=76281980&t=111)** So enough talk, let's actually do it.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Env Vars:** aws (1), api (1)
> **CLI Commands:** aws (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Lab: Build an example (curl)
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=0)** - The client credential flow is the easiest of the OAuth grant types to implement.
>
> **[0:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=4)** It doesn't require a user interface, which makes sense because there isn't a user involved.
>
> **[0:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=9)** For context, I'm going to demonstrate this one two different ways.
>
> **[0:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=12)** The first one, I'll use the PHP based league OAuth server, which I installed and configured in a later video.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=18)** The setup instructions are in the PHP OAuth server folder, so you can get set up on your own.
>
> **[0:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=24)** The other implementation is going to use Auth0.
>
> **[0:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=26)** The setup instructions for that are in the other_OAuth_server, also available within this project.
>
> **[0:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=33)** With that, let's go ahead and find the read me client credential and dive in.
>
> **[0:39](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=39)** First of all, we're going to make sure that our server is running on the PHP side of things.
>
> **[0:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=42)** I've already done that, so I don't need to do it here.
>
> **[0:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=45)** And then we go ahead and we'll grab this command.
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=47)** A couple important things to note about it.
>
> **[0:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=50)** Notice there's nothing about a user, which makes sense as client credential flow is machine to machine.
>
> **[0:55](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=55)** In addition, we have a different scope than before.
>
> **[0:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=57)** It's just a machine scope.
>
> **[0:58](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=58)** This is completely arbitrarily named and up to your requirements and constraints.
>
> **[1:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=64)** So grab this command and we'll go back to the command line.
>
> **[1:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=67)** We'll go ahead and paste this in, and sure enough, it's there.
>
> **[1:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=71)** It's just kind of a mess.
>
> **[1:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=72)** So let's clean this up by adding the JQ command and there's our access token.
>
> **[1:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=79)** So let's go ahead and grab this.
>
> **[1:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=80)** We'll go to [jwt.io](https://jwt.io) to see what's in it.
>
> **[1:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=84)** And then on [jwt.io](https://jwt.io), we'll go ahead and just drop this in.
>
> **[1:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=88)** And sure enough, there's our audience claim.
>
> **[1:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=91)** There's our issued at, there's our expiration date, and there's the scopes it requested.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=94)** Beginning to end this worked very easily and quickly.
>
> **[1:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=97)** Now let's implement it one other way.
>
> **[1:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=100)** Within Auth0 we'll need a slightly different command.
>
> **[1:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=104)** So first of all, under applications API, we'll choose our particular API and we'll go to machine to machine applications.
>
> **[1:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=112)** And then we select the client from this list.
>
> **[1:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=116)** There's the client ID and client secret that we'll need in just a moment.
>
> **[2:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=121)** So we go back to our original instructions in the GitHub repository, we see there's a very similar command.
>
> **[2:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=127)** We have our domain, we have our client credentials, grant type.
>
> **[2:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=131)** We have the client id, which is from that Auth0 screen.
>
> **[2:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=134)** We have the client secret also from that Auth0 screen.
>
> **[2:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=137)** And then we have the audience, which is set when we create the project.
>
> **[2:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=141)** So let's go ahead and grab this command and we'll fill in the value separately.
>
> **[2:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=145)** We take that same command that we had from Auth0.
>
> **[2:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=147)** We'll go ahead and drop this on the command line.
>
> **[2:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=151)** Now, it looks like it's run, but let's go ahead and clean this up by using the JQ command.
>
> **[2:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=156)** And sure enough, there's our access token.
>
> **[2:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=158)** We'll go ahead and grab this once again and take it over to [jwt.io](https://jwt.io).
>
> **[2:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=165)** On [jwt.io](https://jwt.io) we drop this in the box, and sure enough, look at what we have.
>
> **[2:49](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=169)** We have the issuer.
>
> **[2:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=170)** This is the authorization server that issued that token.
>
> **[2:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=173)** You can see this is my Auth0 URL.
>
> **[2:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=176)** We have our audience, which we specified in the request.
>
> **[2:58](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=178)** Our issued at time, our expiration time, and this worked from beginning to end.
>
> **[3:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=183)** The client credential flow is by far the simplest OAuth implementation because it doesn't involve a user.
>
> **[3:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl?u=76281980&t=188)** Regardless of which OAuth provider you choose, you'll probably have support for this one out of the box.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), require (1), interface (1), this. (1), type. (1)
> **Env Vars:** php (3), api (2), url (1)
> **CLI Commands:** php (3), find (1), make (1)
> **URLs:** [jwt.io](https://jwt.io) (4)
> **Tools:** command line (2), github (1)
> **UI Navigation:** go to (2), select the (1)
> **Prerequisites:** setup (2), set up (1)
> **Cross-References:** go back to (2)

#### Security considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=0)** - [Instructor] Now let's talk about how to properly secure the Client Credential Flow.
>
> **[0:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=4)** I'm not going to walk through a full security audit of your application, 'cause that would depend on the language and framework chosen, the configuration of your servers, and a bunch of other things outside the scope of an OAuth course.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=14)** Regardless, you should look at audit penetration tests and other practices to make your apps more secure, but back to the course.
>
> **[0:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=22)** First, you should always remember that we are dealing with credentials, so your communication should be secure using mechanisms such as TLS, even though these connections are done entirely on the backend where the user can't see or interact with them, there are still bad actors out there.
>
> **[0:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=37)** Which actually brings another security benefit, since no users are ever interacting with this flow directly, there's no way they can compromise it by accident or on purpose.
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=47)** But there's also a downside to this approach, since the Client Credential Flow is not tied to a particular user, but all of your users and all of your systems, when there's bad behavior in the system, you can't always connect it back to a specific user, account, or even an action.
>
> **[1:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=63)** Therefore, we need to be more diligent about logging and monitoring throughout the system.
>
> **[1:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=67)** Next, we still have to validate our access token.
>
> **[1:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=70)** This is the single biggest place where people make mistakes and misuse the data they shouldn't trust.
>
> **[1:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=75)** It is still an access token, we must still validate it.
>
> **[1:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=79)** And there's one final place that people make mistakes with Client Credential Flow, they use it where they shouldn't.
>
> **[1:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=84)** At first glance, people look at Client Credential and assume that it could be deployed on every IoT device all over the place.
>
> **[1:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=91)** Not quite, usually an IoT device will be outside your physical control, which means you can't count on it to keep secrets like the client's secret.
>
> **[1:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=100)** Further, many IoT devices will still be tied to a user account for activation, ownership, and monitoring, so it's not quite a real backend use case.
>
> **[1:49](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations?u=76281980&t=109)** So let's wrap up this course covering one more grant type specifically designed for devices and otherwise browser list systems.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** let (2), case. (1)
> **Env Vars:** tls (1)
> **Analogies:** such as (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)


### 7. Grant Type: Device Grant Type

#### Overview: Device flow
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=0)** - [Instructor] The sixth and final grant type we'll talk about in this course is RFC 8628, the device authorization grant or simply the device flow.
>
> **[0:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=9)** That's right.
>
> **[0:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=10)** This is not part of the core OAuth 2.0 framework, but an extension, and it's another clear win for the extension approach.
>
> **[0:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=16)** When the OAuth team was working in 2012, if you told them that video game systems, smart appliances, and even a kiosk at the airport would be within the realm of OAuth, they may still be working on it today.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=28)** This grant type is specifically for anything with an internet connection that lacks a browser for handling HDB redirects, or is generally input constrained, which would make typing a password painful or even impossible.
>
> **[0:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=40)** But let's see it in action.
>
> **[0:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=42)** First, the user identifies that they want to authenticate.
>
> **[0:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=45)** The device requests access to the authorization server and identifies itself with a device ID.
>
> **[0:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=50)** This is effectively its identity.
>
> **[0:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=53)** The auth server generates a device code, an end user code, and a verification URI for the end user.
>
> **[0:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=59)** The device presents that verification URI to the end user for them to visit.
>
> **[1:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=63)** While this could be URL, it's often presented as a QR code, so the user can simply scan it instead of having to type it.
>
> **[1:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=70)** When the user visits the URI, it goes to the authorization server and they authenticate according to its requirements.
>
> **[1:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=77)** After authentication, the user presents their end user code to the auth server, and now their session is logically connected from their login to the device's original request.
>
> **[1:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=86)** This is often done via URL parameter, so the user doesn't have to type it again.
>
> **[1:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=91)** Throughout this and behind the scenes, the client device that has started the entire flow is polling the authorization server on a regular basis to determine if the user has completed authentication.
>
> **[1:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=102)** Once a user is authenticated and authorized the client device, this polling retrieves the access token, and now we're fully back in the realm of common OAuth.
>
> **[1:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=111)** So the client device can use the access token just like any other application would.
>
> **[1:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=116)** This has a lot of moving steps, so in the lab, we'll break them down one by one.
>
> **[2:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-device-flow?u=76281980&t=120)** In the meantime, let's cover the use cases where this makes the most sense.

> [!info]- Semantic Content
>
> **Env Vars:** uri (3), url (2), rfc (1), hdb (1)
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Versions:** 2.0 (1)
> **Documentation:** rfc (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### When should you use this?
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=0)** - [Narrator] So now, when do we use the device authorization flow?
>
> **[0:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=3)** If we go back to the decision tree from our grant type video, we end up on a different branch.
>
> **[0:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=8)** First, we have a user involved, which also means we can use this grant type for OpenID Connect in addition to regular OAuth.
>
> **[0:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=15)** Next, do we have a browser involved?
>
> **[0:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=17)** No, and this is where the device grant type fits.
>
> **[0:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=21)** We have to assume our device is internet connected, but it doesn't have a nice useful interface for our users to log in on.
>
> **[0:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=27)** Or maybe there is a good interface, but we don't want the user to type a password into it.
>
> **[0:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=31)** If we had a video game system, we might have a browser, but a controller is terrible for typing passwords.
>
> **[0:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=37)** Or maybe we have a smart refrigerator, which has a reasonable touchscreen interface, but a very limited browser, not capable of handling redirects.
>
> **[0:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=45)** Or alternatively, think of a kiosk at the airport, has a good browser, has a nice big touchscreen interface, but do you really want a user to type a password there?
>
> **[0:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=54)** Not a chance.
>
> **[0:55](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=55)** There's zero privacy.
>
> **[0:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=57)** And all of these cases displaying a short URL are better.
>
> **[1:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=60)** A QR code is a simpler and more secure experience.
>
> **[1:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=64)** Now the user can scan the code with their phone, authenticate on their own personal trusted device, and the otherwise limited device can detect the login and move on.
>
> **[1:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=74)** This ends up being a secure, but still user-friendly experience.
>
> **[1:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-this-22880760?u=76281980&t=77)** Now let's play with it and see how it works in practice.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (1)
> **Definitions:** is a  (2)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### Lab: Build an example (kiosk)
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=0)** - [Instructor] For the device grant type, it's exceptionally hard to do a live demo because, by definition, we're operating between multiple devices,` so I'm going to walk you through a mock-up and describe each step along the way.
>
> **[0:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=12)** We'll use the [OAuth.com](https://OAuth.com) Playground to show each of these steps.
>
> **[0:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=16)** First, we choose device code.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=18)** The first step is for the device to request a code from the authorization server.
>
> **[0:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=22)** In the real world, this would be initiated by a user clicking login or something similar, or hitting a protected resource that they want to use.
>
> **[0:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=29)** Behind the scenes, the device requests a code and gets back a few things.
>
> **[0:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=34)** First, there's the device code itself.
>
> **[0:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=36)** This is effectively the device's identity that it can use to interact with the authorization server.
>
> **[0:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=42)** Then we have a user code.
>
> **[0:43](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=43)** Then we have a verification URL.
>
> **[0:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=46)** This is where the user will actually present their user code after they authenticate.
>
> **[0:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=50)** Here's the best part about this flow.
>
> **[0:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=52)** According to the device grant type specification, we have to present the user code to the user.
>
> **[0:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=57)** Most people will assume that means we need to show it on a screen or ask them to type it, but that's a bad assumption.
>
> **[1:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=64)** For the most part, just adding it to the verification URL is the easiest.
>
> **[1:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=68)** And if we want to make it even easier, we could present that entire URL as a QR code that the user just scans.
>
> **[1:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=74)** Behind the scenes, the device uses the interval field to determine how often to pull the authorization server to see if the user has completed their process.
>
> **[1:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=86)** And eventually, once the user completes the authentication and authorization, the device gets back an access and a refresh token.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=94)** While this seems abstract, you've probably used a similar process for setting up multi-factor authentication with your bank, or even GitHub.
>
> **[1:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=101)** When you set up an authenticator app, you're presented with a QR code, which you scan.
>
> **[1:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=106)** Then you provide the generated number back to the website, which allows you to log in.
>
> **[1:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-kiosk?u=76281980&t=110)** It's not quite the device grant type, but it's pretty close.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (2), protected (1), abstract (1)
> **Env Vars:** url (3)
> **CLI Commands:** make (1)
> **URLs:** [oauth.com](https://oauth.com) (1)
> **Documentation:** specification (1)
> **Tools:** github (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Security considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=0)** - [Instructor] Before you implement or use the device grant type, let's go over the common security considerations.
>
> **[0:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=6)** First, remember, we're still passing around sensitive information.
>
> **[0:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=9)** You should only send and receive over https using SSL or TLS.
>
> **[0:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=15)** Next, we still have to validate the token.
>
> **[0:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=17)** Now, unlike the other grant types, we may not be able to do this on the device in our client application itself.
>
> **[0:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=23)** We may have to delegate this responsibility to some other component behind the scenes, like an API gateway or even the API itself.
>
> **[0:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=31)** This isn't a huge problem, but we do need to keep it in mind.
>
> **[0:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=35)** Now with regards to the device flow itself, first, we need to balance usability with security.
>
> **[0:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=40)** For the best ease of use, we want a relatively short user code.
>
> **[0:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=44)** But the shorter it is, the more likely it could be compromised by a brute force attack.
>
> **[0:49](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=49)** To mitigate this, we can look at passing the code along via the URL or in a QR code, so the user doesn't have to type anything.
>
> **[0:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=57)** That also lets us use a longer code.
>
> **[1:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=60)** And on the authorization server side, we can implement rate limiting to mitigate brute force attacks overall.
>
> **[1:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=67)** Now remember, we are dealing with two separate devices and we can't trust either of them because we don't control or manage them.
>
> **[1:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=73)** Further, even if we have reason to trust one of them, such as having a high assurance authentication method on the user's device, it still implies nothing about the other device that is completely unknown to us.
>
> **[1:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=86)** Finally, and this one is more subtle, the device grant type only requires presenting the URL to the user, not necessarily displaying it.
>
> **[1:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=95)** If we display URL or a QR code to a user on a gigantic TV or a kiosk, it could be stolen, potentially by somebody even across the room.
>
> **[1:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=104)** Alternatively, if we can present that URL to a user via something short range, such as Bluetooth low energy, we can limit sharing that URL to people within just a meter or two.
>
> **[1:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=114)** That mitigates our exposure even more.
>
> **[1:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=117)** Or maybe we ask 'em to type a phone number and we text the URL to them.
>
> **[2:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=120)** That's also a valid option with a different risk profile.
>
> **[2:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=124)** Remember, that whenever we're working with OAuth there's the core framework, the various extensions, and then what you do on top of them.
>
> **[2:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=131)** As long as you're not doing something contrary to those, you should research it and consider getting creative.
>
> **[2:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/security-considerations-22879827?u=76281980&t=136)** Just make sure you understand the risk that you're taking on and how to address them.

> [!info]- Semantic Content
>
> **Env Vars:** url (6), api (2), ssl (1), tls (1)
> **Code Keywords:** type, (1), let (1), this, (1), finally, (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 8. Using an OAuth Architecture

#### OAuth recommended practices
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=0)** - [Instructor] Now that we've talked about OAuth 2.0 in numerous contexts, use cases, and in technologies throughout this course, let's go into a handful of patterns and practices that are pretty consistent, regardless of what your choices are.
>
> **[0:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=12)** Please note that the rest of this video is a set of recommendations that should be treated as a baseline that generally works in most situations.
>
> **[0:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=19)** There are a few requirements here, but not many.
>
> **[0:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=22)** The most important aspect is that these recommendations should inform the questions you ask during planning and implementation.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=28)** Actually, I'll take that back and give you one hard requirement.
>
> **[0:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=32)** Your communications between components must be secure.
>
> **[0:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=35)** Use a recent version of SSL or TLS and use a trusted certificate authority.
>
> **[0:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=40)** Now, let's look at the components you have to consider.
>
> **[0:43](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=43)** We have the Client Application or device, potentially an API gateway, the OAuth authorization server, and the things we're protecting, which would be the resource server or the API itself.
>
> **[0:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=54)** The deepest level is the easiest, the resource server or the API.
>
> **[0:58](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=58)** The resource server should validate every access token it receives and respect the expiration time.
>
> **[1:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=64)** The only open question here is: How do you validate the token?
>
> **[1:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=68)** If you validate locally, as described in this course, you'll not know if the authorization server has revoked it.
>
> **[1:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=74)** If you only validate it via the authorization server, you're introducing latency into your request.
>
> **[1:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=80)** Now, there isn't a right answer here.
>
> **[1:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=82)** Your use case should determine both the expiration time and how often you validate it locally versus remotely.
>
> **[1:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=88)** For high-security use cases like in banking or healthcare, you should check the authorization server more often.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=94)** For low-security use cases like looking up your favorite comic book characters, you might check less often.
>
> **[1:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=100)** And then once a token is validated, you must confirm it grants the authorizations that match the action requested.
>
> **[1:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=106)** A valid access token isn't permission to do everything unless the included scopes authorize it.
>
> **[1:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=112)** Next, let's take one step out to our API gateway.
>
> **[1:55](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=115)** Now, using an API gateway is optional, but I always recommend one because it can add things like rate limiting, logging, and other management aspects.
>
> **[2:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=123)** Regardless, just like the resource server, you have to decide how and when to validate the access tokens.
>
> **[2:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=130)** Some gateways can actually do the validation and perform authorization enforcement.
>
> **[2:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=134)** If you can reject invalid tokens here, that's great.
>
> **[2:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=137)** If you can reject otherwise valid tokens that don't have the right permissions, do that too.
>
> **[2:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=142)** In both cases, it's less traffic to your API.
>
> **[2:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=146)** Next, we have the OAuth Authorization Server.
>
> **[2:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=149)** There's numerous systems out there, both open-source and commercial.
>
> **[2:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=152)** I'll spend the next few videos walking through a few of those options.
>
> **[2:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=155)** So let's skip this one for now.
>
> **[2:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=158)** Finally, at the outermost layer, we have the Client Application itself.
>
> **[2:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=162)** In most cases, the Client Application is the single most important and yet hardest thing to secure because it's user-facing.
>
> **[2:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=168)** The two most important things you can do are choose the right grant type and secure your tokens.
>
> **[2:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=173)** For grant type, remember the question decision tree I covered in the Grant Type session, and every time we talked about which grant type to use.
>
> **[3:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=180)** If you follow that, you'll be in great shape.
>
> **[3:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=183)** Finally, you must secure your access tokens.
>
> **[3:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=186)** Whenever possible, don't display them to the end user.
>
> **[3:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=189)** Or alternatively, don't put them into storage or logging that the end user or compromise system can access.
>
> **[3:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=195)** Or remember, the token can't be stolen if they can't access it.
>
> **[3:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=199)** Now, while these are high-level recommendations, I have nearly 30 more that I've collected over the years working with various gateways, customers, and use cases.
>
> **[3:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices?u=76281980&t=206)** Now, let's check out a couple different OAuth servers to see how they operate from the backend.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (2), type, (1)
> **Env Vars:** api (6), ssl (1), tls (1)
> **Versions:** 2.0 (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Lab: Configuring an OAuth server in PHP
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=0)** - [Instructor] You can run your own OAuth server with a variety of different open-source projects.
>
> **[0:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=4)** For this course, I've often used a PHP League project called OAuth 2.0 Server.
>
> **[0:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=9)** The requirements are pretty minimal, with just a modern version of PHP and OpenSSL support.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=14)** While the default installation instructions work, it leaves you with an OAuth server without any external interfaces to authorize against.
>
> **[0:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=21)** Instead, I've gone ahead and pulled their examples into the sample code for this course.
>
> **[0:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=26)** Now, when you follow these instructions, you should have a fully configured OAuth server with keys and simple HTTP interfaces ready to go.
>
> **[0:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=33)** And let's do that now.
>
> **[0:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=35)** All of these instructions are in the PHP OAuth Server directory within the project.
>
> **[0:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=41)** I'll assume you have PHP and Composer installed already, so let's go ahead and try them out.
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=47)** First, we go into the correct directory, PHPO Auth Server, and we run composer install.
>
> **[0:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=53)** This will set up all of our dependencies and download them and extract them for us.
>
> **[0:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=57)** Next, we want to generate our private key.
>
> **[1:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=60)** This is the key that our OAuth server will sign all of our JWTs with throughout this course.
>
> **[1:05](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=65)** Then we want to go ahead and set up our public key, so we have this available also.
>
> **[1:09](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=69)** We'll use this for end users to validate our tokens and make sure that they're correct.
>
> **[1:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=74)** And now, finally, we go into our public directory, and this is where all of our interfaces are, and we go ahead and we start up the server.
>
> **[1:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=82)** This is the default server built in the PHP.
>
> **[1:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=84)** This is not for production use, but will get us started throughout this course.
>
> **[1:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=88)** Unfortunately, one of the downsides of this project is what I've mentioned throughout the course.
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=92)** While this does support the core OAuth framework, it might not support all the extensions that you need.
>
> **[1:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=98)** At the time of this writing, it doesn't appear to support token revocation, the discovery spec, and much more.
>
> **[1:43](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=103)** Granted, as an open-source project, we can extend it however we need with additional custom claims, scopes, and extensions to meet our current needs.
>
> **[1:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=112)** It comes back down to the question of, do you support OAuth?
>
> **[1:55](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=115)** For the record, I use this for our examples for both the client credential and resource owner hazard flows.
>
> **[2:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=122)** It could do more, but I want to show a variety of tools and configurations throughout this course.
>
> **[2:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=127)** Overall, for the purpose of this course and for getting started, this is a solid option that'll suit many of your use cases.
>
> **[2:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=133)** But before you put this into production, make sure to audit its capabilities, limitations, and security against your own requirements.
>
> **[2:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-php?u=76281980&t=140)** Now let's check out one other open-source OAuth server before we look at a commercial option.

> [!info]- Semantic Content
>
> **CLI Commands:** php (5), composer (2), make (2)
> **Code Keywords:** let (3), public (2), private (1), finally, (1)
> **Env Vars:** php (5), http (1), phpo (1)
> **Prerequisites:** set up (2), install (1), getting started (1)
> **Versions:** 2.0 (1)
> **Documentation:** spec (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)

#### Lab: Configuring an OAuth server in Node.js
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=0)** - [Instructor] As I showed in PHP, you can run your own OAuth server with a variety of open source packages available out there.
>
> **[0:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=6)** This is another simple one, but based in JavaScript, and I used the example to get this going as quickly as possible.
>
> **[0:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=11)** This one is called oauth2orize.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=14)** To get started with this one, we'll go to the README file on our jsoauth server folder.
>
> **[0:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=20)** This time we only really have three steps.
>
> **[0:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=22)** We need to make sure that mpm is installed.
>
> **[0:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=24)** Then we need to do mpm install.
>
> **[0:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=26)** Then we need to start the server itself.
>
> **[0:28](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=28)** So let's go ahead and run mpm install on the command line.
>
> **[0:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=34)** Now, mpm will go ahead and download the packages and the configuration for us, and get this set up as quickly as possible.
>
> **[0:40](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=40)** And sure enough, it went ahead and set this up.
>
> **[0:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=42)** We have a few libraries we might want to update, but we're not going to worry about that right now.
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=47)** Now we go ahead and we start the app.
>
> **[0:49](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=49)** So node app.js, and by default, it's not going to tell us anything happened.
>
> **[0:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=53)** So let's go back to the browser and see it in action.
>
> **[0:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=57)** So from the configuration file, we know it should be localhost:3000.
>
> **[1:01](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=61)** And here, we have a login screen.
>
> **[1:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=63)** When we first install this, you'll notice it's pretty bare bones from a UI perspective, and that makes sense because most OAuth servers will only be used via their endpoints anyway.
>
> **[1:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=72)** But if we go back to our README file, we could see what some of our endpoints are.
>
> **[1:15](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=75)** We have the authorized and token endpoint, which makes sense 'cause those are core OAuth capabilities.
>
> **[1:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=80)** We also have user info, which is one of the OpenID Connect endpoints.
>
> **[1:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=84)** So we have that available.
>
> **[1:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=85)** And we also have a new endpoint called, clientinfo.
>
> **[1:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=87)** This would give us detail about the OAuth clients that we're actually connecting to our service.
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=92)** So from beginning to end, this only took a couple minutes to set up, but this has some similar capabilities to the other servers.
>
> **[1:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=98)** Now, before you consider putting this into production, make sure you look at its capabilities and limitations, and make sure those match your requirements.
>
> **[1:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=105)** In addition, I always recommend doing a security audit to make sure this also meets your security requirements.
>
> **[1:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=111)** And with that, that's our final open source project we're going to look at.
>
> **[1:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-configuring-an-oauth-server-in-node-js?u=76281980&t=114)** So now, let's look at a commercial option.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), php (1), node (1)
> **Code Keywords:** let (3), default, (1), this, (1)
> **Prerequisites:** install (3), set up (2)
> **Env Vars:** readme (2), php (1)
> **Cross-References:** go back to (2)
> **File Paths:** app.js (1)
> **URLs:** [localhost:3000](https://localhost:3000) (1)
> **Ports:** :3000 (1)

#### OAuth 2.0 as a service using Auth0
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=0)** - [Instructor] For commercial options for OAuth servers, Auth0 is pretty much one of the easiest options out there.
>
> **[0:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=6)** The instructions for getting set up are in the other_oauth_server folder right here.
>
> **[0:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=12)** There's three main things we need to do with an Auth0, so let's go ahead and tackle those.
>
> **[0:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=18)** On Auth0's website, you can sign up for free.
>
> **[0:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=20)** I'll happen to use my GitHub account.
>
> **[0:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=25)** Now the first thing you need to do is create a user, so you go to User Management, Users, and go ahead and create your first user.
>
> **[0:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=32)** I went ahead and created mine with my own email address, just to keep it nice and easy.
>
> **[0:37](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=37)** Next, we need to get it set up for Authorization Code Flow.
>
> **[0:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=41)** Over here under Applications, we choose Application, and we can go ahead and create a new application.
>
> **[0:47](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=47)** In this case, I can use the default application.
>
> **[0:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=51)** We click on that, and under the Settings tab, these are most of the settings that we'll need for the Authorization Code Flow to work successfully with one change.
>
> **[1:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=60)** If we scroll down the list, we'll find a setting called Allowed Callback URLs, and we want to add this URL, [https://127.0.0.1](https://127.0.0.1), to our list.
>
> **[1:16](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=76)** Once we add that to our Allowed Callback URLs list, we go to the bottom and save.
>
> **[1:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=82)** And now we're set up from beginning to end to Authorization Code Flow.
>
> **[1:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=85)** We have both our applications set up ready to go, and we have a user set up ready to use it.
>
> **[1:29](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=89)** Now let's do one more step to set up Client Credential Flow.
>
> **[1:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=94)** Once again, over on the Applications menu, we go to APIs, and for this, we'll want to create a new API.
>
> **[1:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=102)** So in this one, you can name it anything you want.
>
> **[1:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=105)** So I'll call mine LinkedInLearningTest.
>
> **[1:51](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=111)** And we want to give this a unique identifier.
>
> **[1:52](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=112)** This will be unique throughout the life of our project, and this is what we use for our audience claim when we make the Client Credential Flow request.
>
> **[2:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=120)** So we'll call this linkedin-learning, and we'll also call that test.
>
> **[2:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=127)** We hit Create, and now this has configured almost everything for us.
>
> **[2:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=132)** There's one more thing we need to go to.
>
> **[2:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=134)** We go to Machine To Machine Applications.
>
> **[2:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=137)** We scroll down this list, and we want to see the client that's authorized.
>
> **[2:22](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=142)** So in this case, we have this client.
>
> **[2:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=145)** And then here's the client ID and client secret that we'll later on need to set up that Client Credential Flow.
>
> **[2:31](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-as-a-service-using-auth0?u=76281980&t=151)** So from beginning to end, it takes under five minutes to get Auth0 set up for both a new user, the Authorization Code Flow, and the Client Credential Flow.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (5), scroll down (2), click on (1)
> **Prerequisites:** set up (8)
> **Code Keywords:** let (2), case, (2), this, (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** url (1), api (1)
> **Code Identifiers:** other_oauth_server (1)
> **URLs:** [https://127.0.0.1](https://127.0.0.1) (1)
> **Versions:** 127.0.0 (1)


### 9. State of the Industry

#### OAuth extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=0)** - [Narrator] Now that we've toured OAuth and numerous extensions, let's ask a fundamental question that I hear all the time.
>
> **[0:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=6)** Do you support OAuth?
>
> **[0:08](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=8)** Hopefully, after making it this far in the course, you see that's a nuanced question that has massive complexity behind it.
>
> **[0:14](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=14)** Most of the time, if somebody asks that they don't necessarily mean just a core OAuth specification.
>
> **[0:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=19)** More likely they mean some combination of specifications that matches their particular use case.
>
> **[0:24](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=24)** How do I know that?
>
> **[0:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=26)** Remember, the OAuth framework doesn't even define using JWTs as token.
>
> **[0:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=30)** That's an extension itself.
>
> **[0:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=32)** So let's put the pieces together to make a more clear picture.
>
> **[0:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=36)** First, we have the core OAuth 2.0 framework, or RFC 6749, which purposely leaves many things undefined.
>
> **[0:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=44)** Now to pass data around effectively and easily, let's add RFC 7519 to make sure that our access tokens are JWTs or jot tokens, but now that we're passing tokens around, we have to do it safely.
>
> **[0:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=56)** So instead of adding them to the URL, let's use bearer tokens in the authorization header as defined in RFC 6750.
>
> **[1:04](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=64)** Now we're on a good track, but to improve interoperability, let's add the OpenID Connect specification which takes advantage of the previous JWT spec.
>
> **[1:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=73)** Of course, now that we're potentially passing around a lot of user information, that's not always a good thing.
>
> **[1:18](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=78)** So how can we protect it?
>
> **[1:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=80)** Now we should consider RFC 7516, the JSON Web Encryption or JWE specification.
>
> **[1:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=87)** This allows us to pass sensitive information safely.
>
> **[1:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=90)** This is especially useful in healthcare or banking use cases but now that we're passing around tokens, we should add some more capabilities around that.
>
> **[1:38](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=98)** So now let's consider RFC 7662 or the Token Introspection spec.
>
> **[1:44](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=104)** This will let us use the authorization server to check to see if a token is invalid and in some cases, what's in it.
>
> **[1:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=110)** And despite our best efforts, our tokens will be compromised at some point.
>
> **[1:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=114)** So we'll need to add the Token Revocation spec, also known as RFC 7009.
>
> **[2:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=120)** Of course, we haven't done anything to support all the apps we're planning to build.
>
> **[2:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=123)** So let's move on to that side of the equation.
>
> **[2:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=126)** First, let's add RFC 7636 to get authorization code flow with PKCE or pixy.
>
> **[2:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=133)** That gives us better support for native apps and single-page apps like we saw earlier.
>
> **[2:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=137)** Then we'll add RFC 8628 to include the device grant type to support smart appliances, kiosks, and other systems.
>
> **[2:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=145)** We saw that earlier, too, but now to make it easier to onboard developers and the devices they're integrating with, let's add RFC 7591 and RFC 7592 which are the Dynamic Client Registration and Dynamic Client Management specifications.
>
> **[2:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=161)** Now we can create our OAuth client applications and manage 'em faster and easier with very consistent, predictable APIs.
>
> **[2:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=168)** And finally, to pull all this together, we need a way for our authorization server to communicate what capabilities it offers.
>
> **[2:55](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=175)** For that, let's add RFC 8414, the Authorization Server Metadata specification.
>
> **[3:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=182)** This has been complex, but overall we've come up with a robust set of extensions to cover the vast majority of use cases that we'll see out there on a day-to-day basis support both front and backend operations.
>
> **[3:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=193)** Then again, we haven't looked at any industry-specific specifications.
>
> **[3:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=197)** Hmm, maybe we should do that next.
>
> **[3:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=200)** But for now, the next time somebody asks, "Do you support OAuth?"
>
> **[3:23](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-extensions?u=76281980&t=203)** Take a deep breath and ask what they mean 'cause they can mean a variety of different things.

> [!info]- Semantic Content
>
> **Documentation:** rfc (11), specification (4), spec (3)
> **Env Vars:** rfc (11), url (1), jwt (1), json (1), jwe (1)
> **Code Keywords:** let (11), pass (2), case. (1), finally, (1)
> **CLI Commands:** make (3)
> **Versions:** 2.0 (1)
> **Definitions:** known as (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)

#### Industry-specific OAuth extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=0)** - [Instructor] If you're watching this course, odds are you're designing, building, and using APIs on a day-to-day basis, and the odds are also good.
>
> **[0:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=7)** You've heard the phrase that "Software is eating the world" from Marc Andreessen of Netscape and Andreessen Horowitz fame.
>
> **[0:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=13)** While that phrase is applied in a variety of ways in our circles, it means that software, and more specifically APIs, are becoming the backbone or the foundation of more and more systems and more and more industries.
>
> **[0:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=25)** With that in mind, let's talk about how OAuth is being applied to two of the most heavily regulated and fundamentally important industries out there, healthcare and finance.
>
> **[0:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=34)** The first is SMART on FHIR.
>
> **[0:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=36)** SMART on FHIR is another OAuth extension designed specifically to integrate with electronic health records or patient portals, and to more easily share data between them safely.
>
> **[0:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=46)** Just as OpenID Connect allows quick and painless profile sharing with a few clicks, this allows you to share your health information to select parties, but just like OIDC, you don't have to share everything.
>
> **[0:58](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=58)** This allows a receptionist in your doctor's office to see which tests were performed, but not necessarily the results.
>
> **[1:03](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=63)** Only your doctor can see those.
>
> **[1:06](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=66)** On top of that, we can add another extension like HEART or Health Relationship Trust to share specific data within that and more specifically, this leverages concepts, where you can manage who has access to your data and manage it on behalf of others like your kids, for example.
>
> **[1:21](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=81)** While there are pushes to implement both HEART and SMART on FHIR, it's still relatively early for both of them, so you're only likely to see or even hear of them if you work in the electronic healthcare record space.
>
> **[1:32](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=92)** On the other hand, the concept of open banking is taking the world by storm.
>
> **[1:36](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=96)** The principle of open banking is that your banking information, accounts, transactions, et cetera, are yours.
>
> **[1:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=102)** It should be easily but securely accessible via API.
>
> **[1:46](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=106)** As a result, numerous countries have already implemented some sort of open banking laws and start phasing them as requirements for financial institutions in most countries.
>
> **[1:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=114)** Phase one requires secure, read-only APIs for major banks, but later phases require secure read/write APIs from the same banks, and even later phases requires the same for all financial institutions.
>
> **[2:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=127)** Beyond healthcare and banking, there are similar efforts underway in other industries.
>
> **[2:11](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=131)** One of them is insurance providers, which makes sense as they're some of the largest financial institutions in the world.
>
> **[2:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=137)** But my personal favorite are similar efforts around utilities and power generation to allow you to monitor and optimize energy usage and even generation in your home.
>
> **[2:25](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=145)** I'm already able to do this in my home with my home's solar and battery backup, and the best part of all of these, they are all based on OAuth and OpenID Connect.
>
> **[2:35](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=155)** Fundamentally, all these standards are based on the simple idea that your data is yours and you should be able to control it.
>
> **[2:41](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=161)** To do that effectively, you need fine grain control over who can do what with it, when, which all comes down to authorization.
>
> **[2:48](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=168)** The fact that you've watched this course will put you a little bit ahead in both the technology and regulatory trends.
>
> **[2:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=174)** You can now tell your colleagues, "Yes, I've heard about that," and start exploring the underlying concepts.
>
> **[2:59](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/industry-specific-oauth-extensions?u=76281980&t=179)** Now, to close out this course, I'd like to talk about a couple places you can learn more.

> [!info]- Semantic Content
>
> **Env Vars:** smart (3), fhir (3), heart (2), oidc (1), api (1)
> **Code Keywords:** let (1), require (1)
> **Analogies:** just like (1), for example (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=0)** - Before we close this course, I'd like to leave you with a few things to help your team and expand your personal skills further.
>
> **[0:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=7)** First, I'd consider myself a failure if I didn't mention Aaron Parecki's book "OAuth 2.0 Simplified."
>
> **[0:12](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=12)** It's available right now.
>
> **[0:13](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=13)** He's one of the best people working on and thinking about OAuth out there.
>
> **[0:17](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=17)** If you do nothing else, pick up his book.
>
> **[0:20](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=20)** He's also a core contributor to the OAuth 2.1 effort, so keeping an eye on him and his work is useful.
>
> **[0:27](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=27)** Second, I recommend that you check out [oauth.com](https://oauth.com).
>
> **[0:30](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=30)** It's basically an online version of his book, also maintained by him.
>
> **[0:34](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=34)** It's a vendor-neutral discussion of OAuth 2.0, the architectures involved, the challenges, the trade-offs, and what can and might go wrong throughout.
>
> **[0:42](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=42)** If you find yourself in the awful position of having to build your own OAuth server or client, you should read this first.
>
> **[0:49](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=49)** Hopefully it will convince you, your team, and your management to not do it by yourself.
>
> **[0:53](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=53)** Or if you absolutely have to, how to do it better.
>
> **[0:56](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=56)** But seriously, don't build it yourself.
>
> **[0:58](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=58)** The consequences of getting this wrong are catastrophic.
>
> **[1:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=62)** Next, I encourage you to read the specifications relevant to your specific challenges.
>
> **[1:07](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=67)** [oauth.com](https://oauth.com) has a great map that I've linked to here.
>
> **[1:10](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=70)** The reason I recommend reading the specifications is that people have crammed a lot of ideas and assumptions into their understanding of OAuth, and too often they're wrong.
>
> **[1:19](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=79)** What they've interpreted as hard requirements are often merely suggestions, or occasionally just a vendor's particular take on the situation.
>
> **[1:26](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=86)** You need to understand what is and is not part of what you're doing and then what you need and what your tools actually support.
>
> **[1:33](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=93)** Reviewing the extensions is another great way to understand if your use case and problem is something real unique or if it's something that others have discussed, evaluated, and grouped into a better, more efficient, and more secure approach.
>
> **[1:45](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=105)** Even if you can't find the perfect answer, you can probably avoid a lot of bad answers.
>
> **[1:50](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=110)** And then next time you hear somebody say, "Do you support OAuth?"
>
> **[1:54](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=114)** (sighing deeply) you can cringe right along with me.
>
> **[1:57](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=117)** Now, go out there, build better, more secure, and standards-based applications and APIs.
>
> **[2:02](https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/next-steps?u=76281980&t=122)** Thanks for watching.

> [!info]- Semantic Content
>
> **Versions:** 2.0 (2), 2.1 (1)
> **CLI Commands:** find (2)
> **URLs:** [oauth.com](https://oauth.com) (2)
> **Code Keywords:** else, (1)
> **Speakers:** - before (1)


## Path Context

### In [[Become a RESTful API Developer]]
← [[API Testing and Validation]] | **5 of 5**

## Appears In

- [[Become a RESTful API Developer]]
