---
type: course
cssclasses:
  - lle-course
slug: designing-restful-apis
url: "https://www.linkedin.com/learning/designing-restful-apis"
duration_minutes: 80
duration: 1h 20m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGxAtBe6O-xHA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635955168190?e=2147483647&amp;v=beta&amp;t=LCUgpm_teuJT951XyrjMsCVLY10iHJ7yBsqwEA0khA4"
linkedin_topic: Software Development
learning_paths:
  - '[[Become a RESTful API Developer]]'
prev_courses:
  - '[[HTTP Essential Training]]'
next_courses:
  - '[[API Testing and Validation]]'
path_nav: '[{"path":"Become a RESTful API Developer","position":3,"total":5,"prev":"HTTP Essential Training","next":"API Testing and Validation"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Designing%20RESTful%20APIs.md)

![Designing RESTful APIs](https://media.licdn.com/dms/image/v2/C4E0DAQGxAtBe6O-xHA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635955168190?e=2147483647&amp;v=beta&amp;t=LCUgpm_teuJT951XyrjMsCVLY10iHJ7yBsqwEA0khA4)

# Designing RESTful APIs

> Having a solid understanding of how to correctly build APIs is important for any developer planning on creating websites. In this course, learn how to plan and model your own APIs, and explore the six REST design constraints that help guide your architecture. Keith Casey starts with a simple overview, including advice on identifying the users or "participants" of your system, and the activities th

> [LinkedIn Learning](https://www.linkedin.com/learning/designing-restful-apis) | 1h 20m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Design a RESTful API for your organization](#design-a-restful-api-for-your-organization)
  - [Before you build an API](#before-you-build-an-api)
- [**1. Who Needs Your API?**](#1-who-needs-your-api) (6 videos)
  - [Why good API design is important](#why-good-api-design-is-important)
  - [Approaches to adding an API](#approaches-to-adding-an-api)
  - [Tips for modeling APIs](#tips-for-modeling-apis)
  - [Identifying participants](#identifying-participants)
  - [Identifying activities and breaking them into steps](#identifying-activities-and-breaking-them-into-steps)
  - [Case study: Identifying participants and activities](#case-study-identifying-participants-and-activities)
- [**2. What Does Your API Look Like?**](#2-what-does-your-api-look-like) (3 videos)
  - [Creating and grouping API methods](#creating-and-grouping-api-methods)
  - [Mapping activities to verbs and actions](#mapping-activities-to-verbs-and-actions)
  - [Validating your API](#validating-your-api)
- [**3. How Does Your API Work?**](#3-how-does-your-api-work) (4 videos)
  - [REST and HTML](#rest-and-html)
  - [HTTP header and response codes](#http-header-and-response-codes)
  - [REST APIs: Constraints](#rest-apis-constraints)
  - [REST APIs: Code on demand and uniform interfaces](#rest-apis-code-on-demand-and-uniform-interfaces)
- [**4. Common Design Challenges**](#4-common-design-challenges) (7 videos)
  - [Authentication and authorization](#authentication-and-authorization)
  - [API versioning best practices](#api-versioning-best-practices)
  - [Choosing media types and processing content](#choosing-media-types-and-processing-content)
  - [Hypermedia approaches](#hypermedia-approaches)
  - [Advanced HTTP headers: Content negotiation and caching](#advanced-http-headers-content-negotiation-and-caching)
  - [Documentation approaches](#documentation-approaches)
  - [SDK design considerations](#sdk-design-considerations)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps toward designing a RESTful API](#next-steps-toward-designing-a-restful-api)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Design a RESTful API for your organization](https://www.linkedin.com/learning/designing-restful-apis/design-a-restful-api-for-your-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/design-a-restful-api-for-your-organization?u=76281980&t=0)** - [Keith] Hello, I'm Keith Casey, and this is Designing RESTful APIs.
>
> **[0:05](https://www.linkedin.com/learning/designing-restful-apis/design-a-restful-api-for-your-organization?u=76281980&t=5)** In this course, we'll start with a simple overview of what it takes to add an API to your application, whether it's been around for years or you're just getting started.
>
> **[0:13](https://www.linkedin.com/learning/designing-restful-apis/design-a-restful-api-for-your-organization?u=76281980&t=13)** Our goal is to teach you to design an API which is useful for end users while respecting the HTTP concepts and [[Representational State Transfer (REST)|REST]] constraints, which we'll review and describe throughout this course.
>
> **[0:25](https://www.linkedin.com/learning/designing-restful-apis/design-a-restful-api-for-your-organization?u=76281980&t=25)** And like any good design, it starts with a good definition.
>
> **[0:29](https://www.linkedin.com/learning/designing-restful-apis/design-a-restful-api-for-your-organization?u=76281980&t=29)** We'll define who will use our API and how they'll benefit from it.
>
> **[0:33](https://www.linkedin.com/learning/designing-restful-apis/design-a-restful-api-for-your-organization?u=76281980&t=33)** Then we'll talk about the nouns and verbs that our users will use and how to apply them in clear and expressive ways.
>
> **[0:40](https://www.linkedin.com/learning/designing-restful-apis/design-a-restful-api-for-your-organization?u=76281980&t=40)** Once we understand our business workflow and the structure, we'll dive into the HTTP concepts and REST constraints to help determine our design.
>
> **[0:49](https://www.linkedin.com/learning/designing-restful-apis/design-a-restful-api-for-your-organization?u=76281980&t=49)** Finally, we'll wrap up this course by covering common API [[Design Patterns]] you'll have to deal with.
>
> **[0:54](https://www.linkedin.com/learning/designing-restful-apis/design-a-restful-api-for-your-organization?u=76281980&t=54)** This list isn't exhaustive, but covers the most common ones.
>
> **[0:58](https://www.linkedin.com/learning/designing-restful-apis/design-a-restful-api-for-your-organization?u=76281980&t=58)** So let's get down to business and design some effective APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Design Patterns]] (1)
> **Env Vars:** api (4), http (2), rest (2)
> **Prerequisites:** getting started (1)
> **Speakers:** - [keith] (1)

#### [Before you build an API](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=0)** - [Instructor] This course starts from the basis that you need to understand two primary things.
>
> **[0:05](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=5)** First, you have to understand the business process that we're going to model.
>
> **[0:10](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=10)** You can't build something you can't design, you can't design something you can't describe.
>
> **[0:15](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=15)** For this course our business process is buying a book online.
>
> **[0:19](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=19)** So it should apply to anyone watching this.
>
> **[0:22](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=22)** Second, you need to understand that HTTP is expressive, and can tell our users and by extension, our applications using our APIs.
>
> **[0:30](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=30)** A great deal of information and status that those applications can use.
>
> **[0:34](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=34)** HTTP is not perfect, and it has some major weaknesses, but we can accomplish quite a bit with it anyway.
>
> **[0:41](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=41)** And finally, before we begin, I suggest you install a tool to view the HTTP headers.
>
> **[0:47](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=47)** Within Firefox or Chrome, the Live Header's extension is sufficient.
>
> **[0:51](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=51)** But the freely available postman app is even better.
>
> **[0:54](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=54)** On the command line I would suggest curl.
>
> **[0:56](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=56)** That's what most of my examples are throughout this course.
>
> **[0:59](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=59)** Now we won't be writing any code in this course, but it's incredibly useful to open the extension and watch what data is actually provided in the headers while poking around with the APIs you probably already use.
>
> **[1:11](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=71)** That will be even more important as you build your own API later.

> [!info]- Semantic Content
>
> **Env Vars:** http (3), api (1)
> **Tools:** firefox (1), postman (1), command line (1)
> **CLI Commands:** curl (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Who Needs Your API?

[↑ Back to Table of Contents](#table-of-contents)

#### [Why good API design is important](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=0)** - [Instructor] Welcome to designing RESTful APIs.
>
> **[0:03](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=3)** In this course, we'll talk through API design, what to consider, some things to exclude, and [[Design Patterns]] that'll fit no matter what.
>
> **[0:12](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=12)** But let's talk about your API.
>
> **[0:14](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=14)** To set the tone for the [[Representational State Transfer (REST)|rest]] of the day, let's understand one important aspect, API design is hard, it's a game of trade-offs.
>
> **[0:22](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=22)** But more than anything, we want to be deliberate about our choices.
>
> **[0:26](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=26)** Because first we have to decide what functionality we want to expose.
>
> **[0:30](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=30)** Then we have to determine how to expose it.
>
> **[0:34](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=34)** Then you have to figure out the best ways to expose it.
>
> **[0:37](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=37)** Then you have to adjust and improve as you figure out your assumptions and use cases were wrong, or just sometimes incomplete.
>
> **[0:44](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=44)** Finally, as you learn about your customers and unexpected use cases, you have to rethink some things from the ground up.
>
> **[0:51](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=51)** Overall, it touches on some of the hardest problems in computer science.
>
> **[0:56](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=56)** The challenge is that good API design involves naming things well, while simultaneously describing how to interact with those things.
>
> **[1:03](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=63)** Even worse, as the API sees the real world, the goals and the purpose of the API will evolve.
>
> **[1:10](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=70)** This may require us to find better words to describe our efforts and adjust accordingly, which gets in to versioning and backwards compatibility.
>
> **[1:19](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=79)** All of this brings us to the first concept we'll cover, affordances.
>
> **[1:23](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=83)** In the simplest terms, an affordance is something which allows you to perform an action or accomplish a goal.
>
> **[1:29](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=89)** For example, a doorknob is an affordance which allows you to open a door.
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=94)** A switch is an affordance for turning on and off a light.
>
> **[1:38](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=98)** When you consider API design, everything you allow a user to do is an affordance.
>
> **[1:43](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=103)** The potential risk is that we have three different aspects in play.
>
> **[1:47](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=107)** First, we have what the API allows you to do.
>
> **[1:51](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=111)** Second, we have what the API makes easy.
>
> **[1:55](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=115)** Finally, we have what you want to do, the user, what do you want to accomplish?
>
> **[2:00](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=120)** When these three things don't fit, we may have a useless API or maybe a powerful API that doesn't do what we need.
>
> **[2:07](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=127)** But when all three of these are aligned, we have a unique combination that's incredibly powerful, but so subtle you don't even notice.
>
> **[2:16](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=136)** For example, let's talk about coffee cups.
>
> **[2:19](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=139)** A coffee cup is a great thing.
>
> **[2:21](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=141)** It's ideal at holding a hot beverage, but they tend to get hot.
>
> **[2:25](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=145)** Then along comes the amazing innovation of the handle.
>
> **[2:28](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=148)** A handle is designed so you can hold a hot cup without burning your hand.
>
> **[2:33](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=153)** But the great thing about a handle is that you can use it for hanging it on a hook.
>
> **[2:37](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=157)** In this case, we have a goal with a simple solution that allows other use cases without any additional effort for the user.
>
> **[2:45](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=165)** Of course, while APIs can be useful and powerful to accomplish many things, adding them as not as simple as you think.
>
> **[2:51](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=171)** So let's talk about scenarios where you might need to add an API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (12)
> **Definitions:** is an  (3), is a  (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Approaches to adding an API](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=0)** - [Instructor] There are three approaches that allow you to add an API to your system.
>
> **[0:04](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=4)** Some are easier than others.
>
> **[0:07](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=7)** First, we have the bolt-on strategy.
>
> **[0:10](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=10)** This is when you have an existing application and add an API after the fact.
>
> **[0:15](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=15)** This is often considered a brute-force approach, but is the fastest way to get value from the API since the underlying system is functional the whole time.
>
> **[0:23](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=23)** This takes advantage of existing code and systems so you don't have to re-figure out anything.
>
> **[0:29](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=29)** Unfortunately, there are some drawbacks.
>
> **[0:31](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=31)** Poor architectural decisions and bad name decisions made years ago tend to seep through the system and cause problems in external interfaces with helper libraries and all the supporting client code in every single piece.
>
> **[0:44](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=44)** As a result, these oddities never go away.
>
> **[0:48](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=48)** Next, we have the other extreme, the Greenfield strategy.
>
> **[0:52](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=52)** This is when there's no underlying application or even necessarily business logic that you have to interact with.
>
> **[0:59](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=59)** You have complete freedom and flexibility to do whatever you want and however you want to do it.
>
> **[1:05](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=65)** This is the strategy behind the API first or mobile-first approach and is the easiest scenario to develop an API.
>
> **[1:12](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=72)** This offers us the opportunity that other strategies don't.
>
> **[1:16](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=76)** Since you're starting from scratch, you can make use of technologies and concepts that may not have been available before.
>
> **[1:23](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=83)** This can reinvigorate your team to learn new things and expand their skills.
>
> **[1:28](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=88)** This also tends to be the hardest option because there's a biggest gap between when the requirements are defined and when you actually receive real business value from the system.
>
> **[1:37](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=97)** That can be a big struggle for some teams.
>
> **[1:41](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=101)** Finally, you have the facade strategy, and this is actually my recommended approach, most of the time.
>
> **[1:47](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=107)** It's somewhere between the Greenfield and the bolt-on.
>
> **[1:50](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=110)** In this case, you take advantage of existing business systems, yet shape them to what you prefer and need.
>
> **[1:56](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=116)** I'm working with a number of companies where we're doing this right now.
>
> **[2:00](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=120)** They have a huge number of soap services that power their backend and they're wrapping each of these with services with re-architected [[Representational State Transfer (REST)|REST]] interfaces.
>
> **[2:08](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=128)** This gives them the ability to keep working systems in place while making the underlying architecture better.
>
> **[2:15](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=135)** Now the drawback for that is if you're not careful, this can be a place where you have naming translation and conversion layers that easily get out of control.
>
> **[2:24](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=144)** In some cases, you can end up with completely divergent mindsets in the system, which can make it look schizophrenic for people who can see both systems.
>
> **[2:33](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=153)** Regardless of which strategy you choose, modeling will be key to your success.
>
> **[2:37](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=157)** So let's talk about that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (5), rest (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Tips for modeling APIs](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=0)** - [Instructor] In this video, we'll cover three quick tips on modeling your API.
>
> **[0:05](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=5)** This doesn't get into the technical aspects yet, but we'll get to those shortly.
>
> **[0:09](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=9)** Regardless of which of the API strategies you follow, modeling will be a key to our success.
>
> **[0:15](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=15)** You'll need to make sure that the capabilities, or affordances, make sense, are useful, and actually make your users' lives easier.
>
> **[0:23](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=23)** Toward that goal, before we get into the technical side of the process, I want to lay out three simple rules.
>
> **[0:30](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=30)** First, don't worry about the tools.
>
> **[0:33](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=33)** It doesn't matter if you're using note cards, post-it notes, or the latest Kanban tool, just choose a tool that works best for your process.
>
> **[0:41](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=41)** However you need to keep and take notes, do it.
>
> **[0:45](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=45)** Next, the key aspect is having a consistent process.
>
> **[0:50](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=50)** If you always document things the same way and using the same steps, you can reduce the likelihood that things are missed, ideas are misunderstood, or requirements are incomplete.
>
> **[1:00](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=60)** I'd further recommend that you involve a variety of team roles as you model the application.
>
> **[1:05](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=65)** The developers, the support team, the documentation team, and even QA, they'll have to work together eventually.
>
> **[1:12](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=72)** The sooner and earlier you can involve them in the process, the better off you'll be.
>
> **[1:17](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=77)** Their variety of perspectives will add understanding and answer questions that your immediate team won't think of.
>
> **[1:24](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=84)** Which leads the final and the most important part, it doesn't count unless it's written down.
>
> **[1:30](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=90)** During modeling, you'll most likely find gaps in your understanding of places that you need more information.
>
> **[1:37](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=97)** If you don't document these, you stand the risk of losing them, potentially even putting your entire project at risk.
>
> **[1:45](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=105)** So I say document everything, including assumptions and tasks that can and should come later.
>
> **[1:51](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=111)** I have to admit that documentation is non-negotiable for me.
>
> **[1:55](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=115)** It's not written down, it doesn't count.
>
> **[1:57](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=117)** It's not because I want to cause stress in the team, it's just the opposite.
>
> **[2:02](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=122)** As your immediate team is building, your larger team is documenting and testing, and your users are integrating on your API.
>
> **[2:09](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=129)** They're going to be asking questions like, why is the structure this way?
>
> **[2:13](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=133)** If you document the assumptions and decisions, others can benefit from that shared understanding.
>
> **[2:18](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=138)** And just in case your assumptions are wrong, they'll be able to correct and adjust much earlier in the process.
>
> **[2:25](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=145)** The fastest error to fix is the one you don't create.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Env Vars:** api (3)
> **Cross-References:** earlier in (1)
> **Documentation:** the documentation (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Identifying participants](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=0)** - [Instructor] In this video, we're going to begin our API modeling process.
>
> **[0:04](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=4)** No, wait, let me correct that, we're not going to model the API quite yet.
>
> **[0:08](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=8)** The first thing we need to do is have a clear understanding of our business process.
>
> **[0:13](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=13)** If we don't know what that is and what it accomplishes, we'll never be able to build an API to support it.
>
> **[0:19](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=19)** This is the process we're going to be stepping through.
>
> **[0:22](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=22)** And notice, Step 1 is identifying the participants.
>
> **[0:26](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=26)** To put it simply, our participants are the ones who will be involved in the business process that eventually uses our API.
>
> **[0:34](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=34)** Actually, let me rephrase that.
>
> **[0:36](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=36)** Our participants are the entities who will be involved in the business process using the API.
>
> **[0:41](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=41)** I say that specifically because the various [[IoT]] devices, bots, and monitoring services, we need to understand that not all of our participants are humans.
>
> **[0:51](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=51)** From here forward, whenever I say participant, remember that I could mean a person or an entity.
>
> **[0:57](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=57)** Our first step of this is to figure out who is involved in our business process.
>
> **[1:02](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=62)** This can be any entity indirectly or directly that takes action or receives actions as a result of an event.
>
> **[1:11](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=71)** For each participant we need to capture who they are.
>
> **[1:14](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=74)** I go as far as giving them a name.
>
> **[1:16](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=76)** So we're not just talking about a developer, but developer Dan or developer Diane.
>
> **[1:20](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=80)** Next, we need to know if they're internal or external to our organization.
>
> **[1:26](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=86)** Getting adoption of our API is probably easy if we're building it for another team at our company.
>
> **[1:31](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=91)** But that still doesn't mean we can get sloppy.
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=94)** After all, some people on that team will have your boss's email address.
>
> **[1:38](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=98)** Finally, we need to know whether they're active, taking an action, or passive, waiting for an action.
>
> **[1:45](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=105)** Let's take a simple scenario of ordering a cup of coffee at your local coffee shop.
>
> **[1:50](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=110)** In this case, obviously we have you and the barista who makes the coffee.
>
> **[1:55](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=115)** Those are the easy ones.
>
> **[1:56](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=116)** But quite often there are multiple people working at the coffee shop or one takes the order and the other takes the payment while yet another makes it.
>
> **[2:04](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=124)** So now we have three participants.
>
> **[2:07](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=127)** But wait, did you pay with cash or a debit or credit card?
>
> **[2:10](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=130)** Maybe we have a payment processor in there.
>
> **[2:13](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=133)** Are there other customers?
>
> **[2:14](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=134)** Are there orders coming up before or after ours?
>
> **[2:17](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=137)** Are they participants too?
>
> **[2:19](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=139)** This is starting to lead to one of the most dangerous problems involved in modeling any process, the boundaries.
>
> **[2:27](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=147)** If we're not careful, we could end up modeling inventory management systems for the cups, the coffee machine for the workflow, the payment processor, and lots of other things.
>
> **[2:37](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=157)** We must be careful here.
>
> **[2:39](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=159)** In this case let's keep it simple.
>
> **[2:41](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=161)** Let's consider you, the cashier, and the barista, with the acknowledgement that the cashier and the barista could be the same person.
>
> **[2:49](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=169)** In the next video, we're going to talk about individual activities and who's involved in what.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (1)
> **Env Vars:** api (6), iot (1)
> **Cross-References:** coming up (1), in the next (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Identifying activities and breaking them into steps](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=0)** - [Instructor] Now in this video, we'll talk about how best to describe the activities our participants undertake.
>
> **[0:06](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=6)** Remember, this is only the second step of our process, so we're not quite a step-by-step process yet, but we should instead define the business processes or goal involved.
>
> **[0:17](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=17)** Our overarching activity is simple.
>
> **[0:19](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=19)** We're ordering a cup of coffee.
>
> **[0:21](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=21)** Now what are the steps in our activity?
>
> **[0:25](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=25)** First, you place an order.
>
> **[0:27](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=27)** Then you wait for the order.
>
> **[0:29](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=29)** Finally, you receive the order.
>
> **[0:31](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=31)** Wait, that's incredibly abstract, and really only covers your action.
>
> **[0:35](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=35)** It doesn't go into the interactions between participants.
>
> **[0:38](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=38)** Let's try this again.
>
> **[0:40](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=40)** First, the patron, or you, create an order with the cashier.
>
> **[0:44](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=44)** Next, the cashier passes the order to the barista.
>
> **[0:48](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=48)** The barista acknowledges the order and adds it to the queue.
>
> **[0:52](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=52)** The cashier tells you your total.
>
> **[0:55](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=55)** You provide payment, which is either accepted or rejected.
>
> **[0:58](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=58)** If the payment is rejected, you have to choose some other method.
>
> **[1:02](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=62)** If payment is successful, you continue.
>
> **[1:05](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=65)** And then finally, as the orders are ready, they're announced and delivered so the customers receive the orders.
>
> **[1:11](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=71)** Now this paints a much more complete picture of what's happening.
>
> **[1:15](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=75)** Notice this also clearly references individual participants, what they're doing, and finally, the order in which things are incurring and their dependencies, for example, you cannot receive your order until the barista makes it and you probably shouldn't receive your order until you've paid for it.
>
> **[1:32](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=92)** This is important because now we've clearly defined where responsibilities begin and end.
>
> **[1:38](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=98)** And later, this leads us to our more applicable example where we'll discover the participants and activities involved in ordering a book online.

> [!info]- Semantic Content
>
> **Analogies:** picture (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Case study: Identifying participants and activities](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=0)** - Now let's find the participants and activities involved in ordering a book online.
>
> **[0:05](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=5)** At this stage, we can really draw our boundaries wherever we want, which is both good and bad.
>
> **[0:11](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=11)** It's good because we can cover exactly the participants and activities we want.
>
> **[0:15](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=15)** It's bad because what we want and assume might not be what our customer needs.
>
> **[0:20](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=20)** This is one of those times we'll likely need to go back and ask our end user or product manager or whoever what they actually need.
>
> **[0:28](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=28)** This is not the time to guess.
>
> **[0:31](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=31)** And finally, we have to document the answer.
>
> **[0:34](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=34)** So the first question is who are our participants?
>
> **[0:37](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=37)** Obviously, we have the customer, that's us.
>
> **[0:40](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=40)** That's an easy one.
>
> **[0:41](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=41)** Next, we can have a system administrator, but they're probably not involved in placing or fulfilling an order, so let's ignore that one.
>
> **[0:49](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=49)** Also, the developer of the system is probably not involved here either, but we do need a stock clerk who fulfills the actual order.
>
> **[0:57](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=57)** Finally, let's include [[Customer Support]], just in case.
>
> **[1:01](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=61)** So when we stop and look at who remains, we have three participants.
>
> **[1:04](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=64)** The customer, the stock clerk who actually takes and ships our order, and Customer Support, who might have to get in contact with the customer if there's a problem.
>
> **[1:14](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=74)** So now what are the activities?
>
> **[1:16](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=76)** Well, this one is easy.
>
> **[1:18](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=78)** The big overarching activity is ordering a book.
>
> **[1:21](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=81)** So now let's break that into steps.
>
> **[1:25](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=85)** The first step of buying a book is finding it.
>
> **[1:27](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=87)** We have to provide some mechanism that the customer can look and say this is the book I want.
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=93)** Then the customer adds that book to their cart.
>
> **[1:36](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=96)** Now, many customers, hopefully many customers, will add additional things to their cart and sometimes remove things from the cart.
>
> **[1:43](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=103)** Realistically, we probably need to add this functionality at some point, but right now our activity is ordering a book online, one.
>
> **[1:52](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=112)** So we'll add a note that we need to figure this out later.
>
> **[1:55](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=115)** This is one of those places we need to go back to the end user or our product manager just to clarify things.
>
> **[2:01](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=121)** Now we check out.
>
> **[2:03](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=123)** If the book is available, the stock clerk retrieves it, picks it up off the shelf, and packs it for delivery.
>
> **[2:09](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=129)** If the book isn't available, Customer Support may need to get in touch with the customer to cancel the order or make other arrangements.
>
> **[2:17](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=137)** While most [[E-Commerce]] systems aren't going to allow a customer to order something that's out of stock, sometimes inventory count isn't correct.
>
> **[2:25](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=145)** So let's include this activity just in case.
>
> **[2:29](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=149)** So overall, this is what it looks like.
>
> **[2:32](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=152)** We have a customer who needs to view items, add items to cart, possibly remove or add additional items to the cart, checkout, which hopefully includes providing payment, finally fulfilling and shipping the order, and reviewing the order after the fact.
>
> **[2:49](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=169)** So notice we have a number of branches here.
>
> **[2:53](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=173)** There's some places where there are additional user stories, but let's just consider the happy path for version one.
>
> **[2:59](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=179)** Let's assume that everything is working out the way we hope.
>
> **[3:03](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=183)** I'd recommend flagging all these branches, all these choices and assumptions that we're making and talk to our product owner as soon as possible to see if they're a priority.
>
> **[3:12](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=192)** Do not guess here.
>
> **[3:14](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=194)** I really recommend going back to the product owner, because for all you know, there are other teams working on those issues already and there have already been decisions made.
>
> **[3:23](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=203)** Don't try to second guess them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Customer Support]] (3), [[E-Commerce]] (1)
> **CLI Commands:** find (1), make (1)
> **Warnings:** note that (1)
> **Speakers:** - now (1)


### 2. What Does Your API Look Like?

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating and grouping API methods](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=0)** - [Instructor] In this session, we'll talk about creating and grouping API methods or more properly creating our API definitions.
>
> **[0:08](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=8)** We'll start from the participants and activities and the steps that we figured out before.
>
> **[0:13](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=13)** Nothing here has changed since our last video.
>
> **[0:15](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=15)** But let's go back to our process for a second.
>
> **[0:18](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=18)** We followed the first three steps.
>
> **[0:21](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=21)** Now we're on to step four of creating the API definition.
>
> **[0:24](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=24)** This requires us to group our methods.
>
> **[0:26](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=26)** Later, we'll talk about how to validate them.
>
> **[0:30](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=30)** And as we saw before, here are the steps we have, rephrased a little bit differently.
>
> **[0:35](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=35)** Now, we're going to leave out the unrequested steps now for simplicity.
>
> **[0:39](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=39)** So let's get rid of the add more items, remove items, and the shipping order.
>
> **[0:43](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=43)** Those are outside the scope of what we're tackling right now.
>
> **[0:46](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=46)** And this is where it becomes a little bit of art instead of just science.
>
> **[0:50](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=50)** Luckily, if we followed the first three steps successfully, this will be incredibly easy 'cause now we have to find our resources.
>
> **[0:59](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=59)** Our resources are anything someone wants to interact with in our system or another way of putting it, our nouns.
>
> **[1:05](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=65)** If you've written your steps on post-it notes or note cards, they can come in incredibly handy here.
>
> **[1:11](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=71)** The fastest way to identify the resources is to circle the nouns.
>
> **[1:16](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=76)** In our case, first we have items.
>
> **[1:19](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=79)** You'll generally want to view, edit, and add items or in other words create, retrieve, and update, the beginning of CRUD.
>
> **[1:27](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=87)** Listing and searching for items are typically special cases of retrieving.
>
> **[1:32](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=92)** Our next noun is cart.
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=93)** And this is the first place where we have to make a little bit of a design decision.
>
> **[1:37](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=97)** Is our cart just a collection of items or is there a line item resource or object which holds each individual item?
>
> **[1:45](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=105)** In this case, we'll create a cart as a collection of items.
>
> **[1:48](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=108)** It's just referencing other items.
>
> **[1:50](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=110)** Therefore, adding or removing is just changing the state of the cart itself.
>
> **[1:56](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=116)** Our next and final noun is orders.
>
> **[1:58](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=118)** An order is simply a cart which has undergone the checkout process.
>
> **[2:04](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=124)** Now that we have our nouns, we can list out the actions that are applicable to each.
>
> **[2:08](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=128)** This is not a complete list based on every user story and use case in the system.
>
> **[2:13](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=133)** This only covers what we've designed so far.
>
> **[2:16](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=136)** And I just noticed a potential issue.
>
> **[2:18](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=138)** If your book ordering site is like most, what do you have to do in order to check out?
>
> **[2:23](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=143)** You probably have to log in, which means there's a customer resource hiding somewhere in there.
>
> **[2:28](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=148)** Since we don't know what that means right now, let's note that we need it and move on.
>
> **[2:33](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=153)** It's something we need to ask our product owner about.
>
> **[2:36](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=156)** And further, notice we haven't defined what the checkout method looks like.
>
> **[2:40](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=160)** We're just stating that it exists and that we'll get a success or failure as a result from it.
>
> **[2:45](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=165)** Those details are irrelevant for now.
>
> **[2:49](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=169)** The result of all this is that we definitely have three nouns: items, carts, and orders, and might also have one called the customers.
>
> **[2:57](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=177)** There are almost definitely other nouns in our system but we don't care about them yet.
>
> **[3:02](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=182)** Other user stories will start expressing those and adding more detail to the ones we have.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), crud (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (1), as we saw (1)
> **Definitions:** in other words (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Mapping activities to verbs and actions](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=0)** - [Instructor] So now let's review where we are.
>
> **[0:02](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=2)** We've defined a single user story, broke it into concrete steps, and identified the nouns that we're interacting with.
>
> **[0:10](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=10)** We're still in step four, so now we need to map those nouns to our HTTP verbs.
>
> **[0:16](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=16)** Since we determine that this is mostly a CRUD scenario or create, read, update, delete, our steps are pretty simple, and they use the basic verbs.
>
> **[0:25](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=25)** Post, Get, Put and Delete.
>
> **[0:28](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=28)** There are many other verbs available within HTTP but these are the most common ones you'll see.
>
> **[0:34](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=34)** First, GET.
>
> **[0:36](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=36)** GET is used to retrieve data.
>
> **[0:37](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=37)** You should never use it to modify information.
>
> **[0:41](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=41)** Not surprisingly, DELETE is used to delete data.
>
> **[0:44](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=44)** You should not use it for anything else.
>
> **[0:47](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=47)** Next, we have PUT.
>
> **[0:49](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=49)** PUT will update an existing record.
>
> **[0:51](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=51)** You should not use it to create or delete or anything else.
>
> **[0:55](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=55)** And finally, there's POST.
>
> **[0:57](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=57)** POST is the catch-all for HTTP.
>
> **[0:59](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=59)** You can use it to create new records and basically anything else that modifies a record but doesn't directly map into one of the other verbs.
>
> **[1:09](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=69)** This kind of makes it an odd ball but it's really important to remember.
>
> **[1:13](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=73)** So now let's bring this back to our book ordering scenario and map our verbs.
>
> **[1:18](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=78)** Generally, anything that looks like a list or search is a special case of GET.
>
> **[1:23](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=83)** That's our first verb on items, and conveniently, we use it both for viewing the group of items and the individual item.
>
> **[1:30](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=90)** That's pretty easy.
>
> **[1:32](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=92)** Next, we have our cart resource.
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=94)** And we have the design decision that we mentioned in our last video.
>
> **[1:38](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=98)** When we add something to a cart, are we creating and then adding an item?
>
> **[1:42](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=102)** Or are we creating a cart and then modifying the cart every time we add and remove items from it?
>
> **[1:48](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=108)** The first scenario requires a POST because we're creating a cart and then it implies more POSTs after that because we're creating links between our cart and existing items.
>
> **[1:59](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=119)** The second scenario also requires a POST but after that, it's a series of PUTs because we're modifying existing attributes on that cart as we add items to it.
>
> **[2:10](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=130)** This is the scenario we decide to model here.
>
> **[2:12](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=132)** So we POST to create a new cart.
>
> **[2:15](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=135)** Then we use PUT to put items into the cart to modify the attributes about it.
>
> **[2:20](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=140)** And then finally, we have the check out process.
>
> **[2:23](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=143)** The check out process we're assuming is a post because it doesn't map cleanly into any of the other verbs.
>
> **[2:30](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=150)** Finally, we have our orders resource.
>
> **[2:33](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=153)** When we talk about this one, this one is a little bit different because instead of just creating an order with a POST, we actually have that most likely as the output of the previous resource.
>
> **[2:44](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=164)** So when you POST a cart through the checkout process, it creates an order on its own.
>
> **[2:48](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=168)** We do not create an order by ourselves.
>
> **[2:52](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=172)** Next, viewing an order is pretty easily a GET.
>
> **[2:54](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=174)** We don't have to figure out a lot there.
>
> **[2:57](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=177)** And canceling an order, most people are going to default to DELETE for this one, and while that could be okay in some scenarios, notice, this says cancel, not clear or delete an order.
>
> **[3:08](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=188)** So in this case, we'd probably also use a POST to change the status from active or pending to canceled.
>
> **[3:14](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=194)** It's a little bit different but it's important to remember here.
>
> **[3:17](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=197)** Now, there's one other gap that we have here.
>
> **[3:20](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=200)** Are we missing a customer's resource?
>
> **[3:23](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=203)** Many website support a guest purchase process that allows you to check out without having an account.
>
> **[3:28](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=208)** But the vast majority don't.
>
> **[3:30](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=210)** That means we'll likely have to have a customer creation or a user registration and sign-on process somewhere prior to this user story.
>
> **[3:39](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=219)** At this point, we must go back to our product owner and check what they want.
>
> **[3:44](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=224)** We're early enough in our design that we can consider either path very cheaply.
>
> **[3:48](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=228)** A few weeks or even months from now that change will be expensive.
>
> **[3:52](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=232)** For now, let's assume that we'll have a user registration process.
>
> **[3:57](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=237)** So we know that when a user makes a purchase, we know who they are.
>
> **[4:00](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=240)** We are not going to handle the customer registration requirements at this point because we don't know them.
>
> **[4:06](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=246)** And actually, let me take a brief sidebar on that point.
>
> **[4:09](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=249)** Throughout this process, we're not going to know things.
>
> **[4:12](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=252)** That it's not a problem.
>
> **[4:14](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=254)** Or maybe it's a small problem but we can fix it quickly.
>
> **[4:17](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=257)** The actual problem is when we just make stuff up.
>
> **[4:20](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=260)** And be honest, if you're not asking the product owner or our customer, you are making things up.
>
> **[4:26](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=266)** Please, please, please, don't do that.
>
> **[4:29](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=269)** If you know the vision and the customer, sure, the odds of you being correct might be pretty good.
>
> **[4:35](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=275)** But something that you decided on your own without input could accidentally become a hard requirement to the [[Representational State Transfer (REST)|rest]] of your team and nobody realizes that was a choice that you made as opposed to something that the customer dictated.
>
> **[4:48](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=288)** Now, let's go back to the relationships for a second.
>
> **[4:51](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=291)** When we talk about these resources, they all have relationships with one another.
>
> **[4:56](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=296)** There's three particular types of relationships that we're interested in.
>
> **[5:00](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=300)** The first type of relationship is independent.
>
> **[5:02](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=302)** It means that this resource can exist on its own.
>
> **[5:06](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=306)** The second type of relationship is dependent, which means one resource can only exist if a different resource already exists.
>
> **[5:14](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=314)** To look back at our ordering book scenario, a order cannot exist without a cart previously existing.
>
> **[5:21](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=321)** And then finally, we have the third type of relationship and this is associative.
>
> **[5:26](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=326)** This means that additional information is required to describe the relationship.
>
> **[5:31](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=331)** To understand these a little bit more concretely, let's look at an example.
>
> **[5:36](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=336)** Think of your favorite movie.
>
> **[5:37](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=337)** In this scenario, movies and actors are independent.
>
> **[5:41](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=341)** You can have one movie, and you can have one actor or you can have many movies and many actors.
>
> **[5:46](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=346)** Alternatively, a movie has characters.
>
> **[5:49](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=349)** If you have a particular character, that character can't exist outside the movie.
>
> **[5:54](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=354)** Finally, for an associative relationship, we can have one actor that plays multiple characters in the same movie or alternatively, one character played by multiple actors in the same movie.
>
> **[6:05](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=365)** For example, a movie that traces the life of a historical figure could have that figure as a child, as a teenager, as an adult, each one played by different characters.
>
> **[6:15](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=375)** So just saying this actor plays this character isn't enough.
>
> **[6:19](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=379)** We have to say this actor plays this character as a child.
>
> **[6:23](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=383)** That adds additional information about the relationship between these things that we absolutely need to understand.
>
> **[6:31](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=391)** So when we go back to book ordering, this is what happens.
>
> **[6:34](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=394)** Our items are independent.
>
> **[6:36](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=396)** We do not need customers to have items.
>
> **[6:39](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=399)** We don't have to have a cart to have items.
>
> **[6:41](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=401)** They exist entirely on their own.
>
> **[6:43](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=403)** Next, carts are dependent on items.
>
> **[6:47](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=407)** If you don't have items, you cannot have carts.
>
> **[6:50](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=410)** Next, orders are dependent on carts because something cannot become an order until it's first gone through a cart.
>
> **[6:58](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=418)** And that checkout process turns a cart into an order.
>
> **[7:02](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=422)** And finally, an order must have customers.
>
> **[7:04](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=424)** Somebody actually bought that thing, right?
>
> **[7:08](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=428)** So this is what it looks like.
>
> **[7:09](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=429)** We end up with a dependency map where if you stop and look at this for a second, you realize this looks a lot like a database schema.
>
> **[7:17](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=437)** Now, that's common in this scenario and it's common quite often.
>
> **[7:20](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=440)** It is not 100% of the time.
>
> **[7:23](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=443)** So do not just assume it.
>
> **[7:25](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=445)** Quite often people will design an API by simply exposing their database schema.
>
> **[7:30](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=450)** That's a bad approach because fundamentally, the choices that go into designing your database are not the same choices that go into designing your API.
>
> **[7:39](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=459)** The ways that people need to interact with your API don't necessarily map one to one with your database.
>
> **[7:45](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=465)** So although in this scenario they end up looking very similar, do not assume that is the case most of the time.
>
> **[7:52](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=472)** Go through this process and figure it out just to be sure.
>
> **[7:56](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=476)** Sometimes you'll end up with nasty little surprises that would have bitten you in other scenarios.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** post (8), http (3), put (3), api (3), delete (2)
> **API Endpoints:** post  (3), post
 (3), put  (2), get  (1), delete  (1)
> **Definitions:** is a  (3), means that (2)
> **Cross-References:** go back to (3), we mentioned (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Best Practices:** you should never (1)

#### [Validating your API](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=0)** - [Instructor] So now we have an API, right?
>
> **[0:02](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=2)** Well, not quite.
>
> **[0:04](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=4)** We have a design and structure.
>
> **[0:06](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=6)** Or to put it another way, we think we know what it will look like, but we have yet to test it in the real world.
>
> **[0:12](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=12)** Now we could start building it and see how it works out.
>
> **[0:14](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=14)** But personally, I think that's a terrible idea.
>
> **[0:17](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=17)** What happens if we spend weeks or months on this effort and we miss something?
>
> **[0:22](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=22)** Let's find a way to validate our API that's cheaper, faster, and will save everyone a lot more effort.
>
> **[0:28](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=28)** Now if you've listed out these individual steps on note cards, this gets to be kind of fun.
>
> **[0:33](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=33)** I'd recommend taking a look at some of your other use cases and seeing if you can solve them by rearranging your cards.
>
> **[0:40](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=40)** If you can map other activities too, great.
>
> **[0:43](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=43)** If not, figure out which steps are missing.
>
> **[0:46](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=46)** Either way, as we derive these steps from our activities, everything should map pretty cleanly together.
>
> **[0:52](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=52)** If something doesn't fit, that's a red flag, and we need to go back a few steps to make sure things work.
>
> **[0:59](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=59)** Alternatively, and I've done this before quite often, let's write some code, but not code for the API.
>
> **[1:05](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=65)** Instead, let's write code as if our API existed already.
>
> **[1:09](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=69)** This means that we're going to step through each of our API calls as if the API existed.
>
> **[1:15](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=75)** We don't care if this code compiles, it's not like we can run it anyway.
>
> **[1:19](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=79)** We're just trying to figure out if things make sense.
>
> **[1:22](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=82)** In fact, if you want to do this on a whiteboard with a colleague or two that's best.
>
> **[1:26](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=86)** This only gets us so far, but it's often enough to find the big issues and even annoying structures.
>
> **[1:32](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=92)** Even if you don't take this approach for your API, you can still apply it later as you build your SDKs, which I'll talk about in a later section.
>
> **[1:40](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=100)** So keep this approach in mind, even if you don't want to do it right now.
>
> **[1:45](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=105)** And alternatively, and probably my favorite approach is to use a microframework.
>
> **[1:50](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=110)** You can use something like hapi.js in Node or Slim in [[PHP]] to accept incoming requests, validate the corresponding verbs and URL patterns, and return static HTTP response codes and payloads.
>
> **[2:04](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=124)** In most cases, as long as you're familiar with your framework, you should be able to implement the basic API calls in a manner of hours to a few days.
>
> **[2:12](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=132)** In my opinion, this is the absolute best approach because as we build the real functionality of our API, we can plug it into this framework and eventually watch things come alive together.
>
> **[2:24](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=144)** Now note that I said HTTP response codes.
>
> **[2:27](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=147)** We haven't discussed those yet or how to structure payloads, so you may not be ready for the step quite yet, but we'll address some of those in chapter three.
>
> **[2:36](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=156)** The final and most common approach for validating the API is by documentation.
>
> **[2:41](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=161)** In this case, we want to write the documentation as if the API already existed.
>
> **[2:47](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=167)** That means we need to describe the end points, list out the individual parameters, include the response codes and how you get each, and show the individual fields which are returned in the API.
>
> **[3:00](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=180)** Our goal here is to write documentation that we can hand to other teams and have them accomplish their goals with our API.
>
> **[3:08](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=188)** You'll most likely want to include some curl commands or similar to show what these calls look like.
>
> **[3:14](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=194)** Most teams should be able to accomplish a rough draft of this documentation in just a few days.
>
> **[3:19](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=199)** And while there are great documentation platforms and tools out there, I suggest a simple [[Google]] doc.
>
> **[3:25](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=205)** It's not because that will be our end structure or format.
>
> **[3:28](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=208)** This is merely for speed.
>
> **[3:30](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=210)** One benefit of this approach is that you can share it with other teams, partners, and even potential customers.
>
> **[3:36](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=216)** They all give you feedback to describe what they want or need to accomplish and if this information will help them.
>
> **[3:43](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=223)** Now, there are two big drawbacks of this approach.
>
> **[3:46](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=226)** First, most teams will want to make this documentation perfect.
>
> **[3:50](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=230)** Your documentation people may want to make sure every phrase is perfect and ready for public sharing.
>
> **[3:56](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=236)** This is not our goal.
>
> **[3:58](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=238)** Our goal is to get feedback from other teams, partners, and customers.
>
> **[4:02](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=242)** We need clear and concise, but not perfect.
>
> **[4:05](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=245)** Second, some people will believe that documentation is the last step of a project.
>
> **[4:11](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=251)** When people see yours, they may believe you're almost done with the API.
>
> **[4:15](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=255)** Make sure to tell them that the documentation is for evaluation and validation, not that because it's complete.
>
> **[4:23](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=263)** And the single biggest benefit to this approach is simple.
>
> **[4:26](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=266)** The documentation is almost done.
>
> **[4:28](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=268)** Now as you build the API, you can make sure to keep this documentation up to date, and it's a small marginal effort, not a massive effort at the end.
>
> **[4:37](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=277)** Your product owners and your customers will thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (1), [[Google]] (1)
> **Env Vars:** api (15), http (2), php (1), url (1)
> **CLI Commands:** make (6), find (2), node (1), php (1), curl (1)
> **Documentation:** the documentation (3)
> **Best Practices:** make sure to (2)
> **File Paths:** hapi.js (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)


### 3. How Does Your API Work?

[↑ Back to Table of Contents](#table-of-contents)

#### [REST and HTML](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=0)** - [Instructor] Now that we've modeled and validated our API, we need to get familiar with the medium that we're actually using, HTTP.
>
> **[0:08](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=8)** HTTP is great in that it underlies the entire web.
>
> **[0:12](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=12)** It's well-documented and understood by clients and all the tools out there and is the usual foundation of a [[Representational State Transfer (REST)|REST]] API.
>
> **[0:20](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=20)** Unfortunately, this leads to the first misunderstanding that's worth explaining.
>
> **[0:25](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=25)** HTTP is a protocol.
>
> **[0:27](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=27)** XML is a markup language.
>
> **[0:30](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=30)** [[JSON]] is a notation.
>
> **[0:33](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=33)** There are XML standards that can add structure and meaning to it.
>
> **[0:36](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=36)** And there are JSON specifications that can add context and descriptions to that.
>
> **[0:41](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=41)** Unfortunately, REST is none of the above.
>
> **[0:44](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=44)** It's not a standard.
>
> **[0:45](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=45)** It's not a specification and it's not a protocol.
>
> **[0:49](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=49)** In fact, there are all kinds of debates about what is RESTful, RESTish, all the variations of that.
>
> **[0:56](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=56)** While there are specifications for things like URLs and XML and JSON and HTTP, there are very few formal requirements for REST itself.
>
> **[1:06](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=66)** There are lots of preferences and even more opinions.
>
> **[1:09](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=69)** We'll talk about those later, but for the purpose of this session, but remember, that REST is a generally agreed upon set of principles or constraints.
>
> **[1:17](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=77)** If for better understanding, I use a simple analogy.
>
> **[1:20](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=80)** SOAP, or the previous way of designing APIs, is a lot like getting a mortgage.
>
> **[1:25](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=85)** There's a very fixed process.
>
> **[1:27](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=87)** It's a very detailed process with numerous instructions throughout.
>
> **[1:31](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=91)** There's a ton of documentation upfront to tell you about every step of the process.
>
> **[1:35](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=95)** There's detailed scenarios.
>
> **[1:37](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=97)** If this happens, then do that.
>
> **[1:40](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=100)** And there's complex error handling.
>
> **[1:42](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=102)** If something doesn't happen the right way, there's a detailed process for resolving that as quickly and easily as possible.
>
> **[1:49](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=109)** As an alternative, REST is like borrowing money from a friend for lunch.
>
> **[1:53](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=113)** There's very few requirements.
>
> **[1:55](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=115)** They have to have enough trust that you're going to compensate them, that you're going to return that in some way.
>
> **[2:01](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=121)** There's no documentation at the beginning.
>
> **[2:03](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=123)** As you learn more about the interaction, you learn how to improve it next time around.
>
> **[2:08](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=128)** Most importantly, it's flexible based on the needs of both you and the other party.
>
> **[2:13](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=133)** This flexibility is great.
>
> **[2:14](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=134)** It gives you the opportunity to maybe buy them lunch tomorrow, to return the money, to give them a gift.
>
> **[2:20](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=140)** There's a variety of different options.
>
> **[2:22](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=142)** Unfortunately, this introduces ambiguity.
>
> **[2:25](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=145)** This ambiguity has to be figured out and resolved, which brings us back to HTTP.
>
> **[2:32](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=152)** HTTP is a well understood protocol that is both simple and powerful in its implementation.
>
> **[2:38](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=158)** Every HTTP request and response has two parts.
>
> **[2:42](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=162)** There are the headers and the payload.
>
> **[2:44](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=164)** The payload is the [[HTML]], the JSON, the XML, or whatever comes back that you can view, interact with and process.
>
> **[2:53](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=173)** If it's just HTML, it's usually presented to the user on the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (5), [[JSON]] (4), [[HTML]] (2)
> **Env Vars:** http (7), rest (5), xml (4), json (4), api (2)
> **Definitions:** is a  (6)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### [HTTP header and response codes](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=0)** - [Instructor] In this video, we'll cover the most common HTTP headers and response codes.
>
> **[0:05](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=5)** By default, this information is often hidden because it's simply not useful to end users.
>
> **[0:11](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=11)** Or worse, it's confusing because the end user can't do anything about them.
>
> **[0:16](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=16)** But right now we need to look at them.
>
> **[0:18](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=18)** In order to get access to this information, we need to do one of a couple of different things.
>
> **[0:23](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=23)** If you're a working in Chrome or Firefox, check out the live HTTP header add-on.
>
> **[0:29](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=29)** It's the fastest and easiest way to see the headers on each request.
>
> **[0:32](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=32)** Or if you prefer the command line I suggest using the '-I' command with 'curl'.
>
> **[0:38](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=38)** So we simply type 'curl -I' and the name of the API we're going to hit.
>
> **[0:44](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=44)** In this case [[GitHub]].
>
> **[0:46](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=46)** We run this command against the GitHub API.
>
> **[0:49](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=49)** We get back a list of headers.
>
> **[0:51](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=51)** In most cases, most of these will be meaningless to you.
>
> **[0:54](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=54)** But if you are an API client that speaks HTTP, these are important.
>
> **[0:59](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=59)** First we have the '200 Response Code'.
>
> **[1:03](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=63)** Everything from here on out, interacting with this API will be dependent on that.
>
> **[1:08](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=68)** And that's because HTTP response codes are important.
>
> **[1:12](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=72)** The first one we have that we just saw with the GitHub API is '200 OK'.
>
> **[1:17](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=77)** Because it starts with a '2', it means the request was successful.
>
> **[1:21](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=81)** There are other codes that begin with a '2' that also means success, but are more specific.
>
> **[1:27](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=87)** We may also run into the '201 Created'.
>
> **[1:29](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=89)** This is used to signify that a resource has been successfully created.
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=93)** For example, earlier, when we are creating a shopping cart, we might return back a '201'.
>
> **[1:39](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=99)** The next up is '202 Accepted'.
>
> **[1:42](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=102)** This is used to identify that the action you just performed is underway, but it's not complete yet.
>
> **[1:49](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=109)** The '202' is often used with systems that use some sort of queuing or other asynchronous process behind the scenes, or the work is started, or it will be started, but it's not done yet.
>
> **[2:00](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=120)** Finally, there's the '204 No Content', which is primarily used when you delete a resource.
>
> **[2:05](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=125)** Because after all, if you just deleted resources, you can't just show it now.
>
> **[2:11](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=131)** The next series is the '300' series.
>
> **[2:13](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=133)** These are pretty simple and are used when a resource moves from its original URL.
>
> **[2:19](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=139)** There are more than two, but these are the ones we care about.
>
> **[2:22](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=142)** '301 Moved Permanently', as in the thing you're looking for is no longer available here, it's now over in a different URL.
>
> **[2:30](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=150)** And most responsible APIs will then give you the URL to then go retrieve it.
>
> **[2:35](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=155)** And the other one is '302 Move Temporarily'.
>
> **[2:38](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=158)** This works exactly the same way, but instead of keeping that new URL indefinitely, you may want to check back occasionally to see if the old one is available now.
>
> **[2:49](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=169)** Text we have the '400 Response Codes'.
>
> **[2:52](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=172)** The '400 Response Codes' are actually my favorite because when used properly, your API can be incredibly descriptive with just a bites.
>
> **[3:00](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=180)** The first error code or the '400' denotes the client that the most recent attempt failed due to the client itself.
>
> **[3:08](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=188)** While this is a perfectly valid code to use, I recommend being more specific whenever possible.
>
> **[3:14](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=194)** One way to get more specific is with a '401'.
>
> **[3:17](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=197)** The '401 Authentication Required Error' says authentication is required.
>
> **[3:22](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=202)** It doesn't signify whether the operation would have worked or not.
>
> **[3:26](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=206)** Simply that authentication is required before you can do anything else.
>
> **[3:31](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=211)** Next, we have the '403', which is almost the exact opposite.
>
> **[3:35](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=215)** In this case, the user was authenticated, the request was understood, but they explicitly failed.
>
> **[3:42](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=222)** You might see this if you attempt to delete a resource with incorrect permissions.
>
> **[3:46](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=226)** Finally, we run it to the commonly seen '404 Response Code'.
>
> **[3:50](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=230)** This signifies that whatever resource you are looking for was not found.
>
> **[3:54](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=234)** It doesn't mean it did exist and you didn't find it.
>
> **[3:57](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=237)** It means it does not exist.
>
> **[3:59](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=239)** That's a key thing to remember.
>
> **[4:02](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=242)** Overall, there's really five classes of HTTP response codes.
>
> **[4:06](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=246)** All of the '200' mean success.
>
> **[4:08](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=248)** All of the '300' mean redirect.
>
> **[4:10](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=250)** All the '400' means the client had an error as in you interacting with the API had an error.
>
> **[4:16](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=256)** The '500' series means the server itself or the API has an error.
>
> **[4:20](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=260)** From a developer's point of view, there's absolutely nothing you can do to fix a '500' error.
>
> **[4:26](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=266)** That's entirely on the server side.
>
> **[4:28](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=268)** And the one we skipped was a '100' series.
>
> **[4:30](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=270)** While they're available, you're unlikely to see them in the world.
>
> **[4:34](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=274)** As you build your API, you may want to create additional response codes to be more specific to your errors or even your industry.
>
> **[4:42](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=282)** Don't, response codes work so well because they're standard across all industries and widely understood.
>
> **[4:49](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=289)** So that understanding that someone gains from another API in another industry can immediately apply to your own.
>
> **[4:56](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=296)** If you're creating your own response codes, you lose that.
>
> **[5:01](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=301)** The next header we want to look at is the content type.
>
> **[5:04](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=304)** You can see that on the third line here.
>
> **[5:08](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=308)** This simply identifies the type of payload being provided by the server.
>
> **[5:12](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=312)** For normal web browsing, it'll normally be text [[HTML]], but for APIs, we'll normally see application [[JSON]] and potentially text XML.
>
> **[5:22](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=322)** Of course, that describes what the payload is not how it's structured.
>
> **[5:26](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=326)** If we want to understand how it's structured, we need to look at the media type.
>
> **[5:30](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=330)** In this case, 'X-GitHub-Media-Type.
>
> **[5:34](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=334)** Media types are specifically named and structured payloads that allow a client to be customized to handle them.
>
> **[5:40](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=340)** In this case, the 'X-GitHub-Media-Type' tells us that it's the GitHub media type version three.
>
> **[5:48](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=348)** There are specifications for media types that are under active development.
>
> **[5:52](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=352)** We'll cover those later.
>
> **[5:54](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=354)** Finally, we have some headers that are costumed to the particular API that we're interacting with.
>
> **[5:59](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=359)** In this case, the GitHub API gives us information on the rate limit, specifically how many requests are still available and when they reset.
>
> **[6:08](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=368)** It's worth knowing that these things are available sometimes and entirely optional.
>
> **[6:13](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=373)** This is custom to the API we're using, or in this case building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (7), [[HTML]] (1), [[JSON]] (1)
> **Env Vars:** api (13), http (5), url (4), html (1), json (1)
> **Tools:** github (7), firefox (1), command line (1)
> **CLI Commands:** curl (2), find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [REST APIs: Constraints](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=0)** - [Instructor] As I noted earlier, [[Representational State Transfer (REST)|REST]] is not a formal specification or standard itself, but it often uses some standards and some principles or constraints.
>
> **[0:10](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=10)** In this video, we'll talk about those specific constraints.
>
> **[0:14](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=14)** The six constraints serve to establish the expectations and create some structure and patterns around the flexibility of REST These are not hard and fast rules, which should be considered guidelines and best practices for implementation.
>
> **[0:28](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=28)** Like any best practices, you can choose not to follow them, but it may make your API harder to understand, use, and eventually adopt.
>
> **[0:37](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=37)** The first constraint is that an API should be designed for a client-server architecture.
>
> **[0:42](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=42)** This is the internet, so that shouldn't be too surprising.
>
> **[0:45](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=45)** The single biggest benefit to the setup is that it allows us to vary the implementation details, upgrade paths, and [[Scalability]] of each independently of the other.
>
> **[0:56](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=56)** The second constraint, that's that the API should be stateless.
>
> **[1:00](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=60)** This allows each and every request to stand on its own and be processed or rejected independently of any other request in any order that they're received.
>
> **[1:11](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=71)** The ability to process requests independently of each other allows us to isolate request failures and still continue and scale our systems better.
>
> **[1:20](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=80)** Specifically, this gives us the ability to add more servers when our API is successful and as we get more users.
>
> **[1:27](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=87)** We don't have to worry about shared sessions, sticky sessions, other complexity that comes through a shared state.
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=93)** This makes our systems very reliable and fault tolerant, and as a result, more stable overall.
>
> **[1:40](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=100)** The third constraint is cacheability, or how to detect if a request response pair can be cached.
>
> **[1:47](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=107)** It requires that each message describes if it can be cached and for how long.
>
> **[1:53](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=113)** The biggest benefit of caching is to improve network performance and application usage overall, by reducing or in some cases eliminating requests.
>
> **[2:01](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=121)** After all, the fastest request is the one you don't have to perform.
>
> **[2:06](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=126)** When we consider this in relation to APIs, we encounter the concept of idempotency.
>
> **[2:12](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=132)** This is the idea that you can make the same request multiple times, and you end up with the same result every single time.
>
> **[2:19](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=139)** And it's the same result you got from the first request.
>
> **[2:22](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=142)** An idempotent request would be viewing of one of your [[GitHub]] repositories.
>
> **[2:27](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=147)** You can request it all day long, and nothing will change.
>
> **[2:30](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=150)** Since nothing will change, this is likely to be cacheable.
>
> **[2:34](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=154)** Alternatively, there are operations which don't leave the server in the same state, such as creating a user.
>
> **[2:40](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=160)** If you run the command once, you create one user.
>
> **[2:43](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=163)** If you run it N times, you create N users.
>
> **[2:46](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=166)** It's not remotely the same.
>
> **[2:49](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=169)** In this case, the first three build into the fourth constraint, and this is a layered system.
>
> **[2:54](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=174)** Basically it means that your client should not be built on the assumption that it's communicating directly with the server.
>
> **[3:01](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=181)** There can and often will be additional layers between the client and the server itself.
>
> **[3:07](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=187)** Those layers can be caching and a variety of other components.
>
> **[3:10](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=190)** We do this on the web every day when we have [[Web Servers]] talk to database servers.
>
> **[3:14](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=194)** Most of the time, this just works.
>
> **[3:17](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=197)** Unfortunately, it can often introduce invisible dependencies, for example, web applications.
>
> **[3:23](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=203)** When you first build a web application, it's common to connect to a database directly by IP address instead of some local domain name.
>
> **[3:31](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=211)** The problem with this is that the odds are that the IP address is going to change at some point.
>
> **[3:37](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=217)** It could be by accident, by a switch failing, or it could be on purpose as you got a new server.
>
> **[3:42](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=222)** Either way, you've broken things by depending on the network configuration instead of using something as simple as DNS.
>
> **[3:49](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=229)** By not counting on the client interacting directly with the server, we can insert components and even entire subsystems between the two without disrupting the flow or the application itself.
>
> **[4:01](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=241)** This architecture gives us the ability to add things like logging, access control, and caching to the system without architecting them in on day one.
>
> **[4:10](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=250)** The [[API Management]] companies like Apigee and MuleSoft and many others take advantage of this aspect, to insert logging, access control, and even load balancing between you and the actual API.
>
> **[4:21](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=261)** Basically, layers give us flexibility to improve and evolve our system as our requirements and our architecture changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Scalability]] (1), [[GitHub]] (1), [[Web Servers]] (1), [[API Management]] (1)
> **Env Vars:** api (6), rest (2), dns (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (1), for example (1)
> **Documentation:** specification (1)
> **Tools:** github (1)
> **Prerequisites:** setup (1)

#### [REST APIs: Code on demand and uniform interfaces](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=0)** - [Instructor] In this video, we'll talk about the final two constraints for [[Representational State Transfer (REST)|REST]] API.
>
> **[0:05](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=5)** The fifth constraint is optional, but probably the most powerful.
>
> **[0:09](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=9)** It's the concept of code on demand.
>
> **[0:12](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=12)** The concept is that when a client requests a resource, it also receives the code to act upon it.
>
> **[0:19](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=19)** The real power is that the client doesn't have to know what is in the code.
>
> **[0:22](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=22)** It just has to understand how to execute the code.
>
> **[0:26](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=26)** The primary benefit is that the API can grow and extend itself without requiring the client applications to upgrade.
>
> **[0:33](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=33)** We can get this new functionality for free.
>
> **[0:36](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=36)** At first glance, executing arbitrary third-party code sounds like a security nightmare, and it could be, but can you think of anywhere on the web or anywhere in your application that's already doing this?
>
> **[0:48](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=48)** Most of the internet does this with [[JavaScript]].
>
> **[0:51](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=51)** When you load an application such as Gmail in your browser, it also retrieves the JavaScript required to interact with that page.
>
> **[0:58](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=58)** Your browser doesn't even need to know what's in the JavaScript.
>
> **[1:02](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=62)** It just needs to know how to execute it.
>
> **[1:04](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=64)** More importantly, as new features and functionality become available, they're immediately available to the end user without requiring a browser upgrade.
>
> **[1:12](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=72)** Code on demand isn't nearly as scary as it seems.
>
> **[1:16](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=76)** Now let's cover the final and probably the most important constraint of all, uniform interfaces.
>
> **[1:23](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=83)** There are four key principles that make up a uniform interface.
>
> **[1:27](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=87)** First, there's the concept of identifying our resources.
>
> **[1:31](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=91)** Each resource should be uniquely addressable by a particular URL.
>
> **[1:36](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=96)** Generally, there will be one and only one way to access this resource, but that is not a hard requirement.
>
> **[1:42](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=102)** Think of the buildings on your street.
>
> **[1:44](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=104)** They're also uniquely addressable. That's how they get mail.
>
> **[1:47](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=107)** Next, you need to be able to manipulate or interact with those resources through those representations, through those URLs.
>
> **[1:55](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=115)** Every interaction with a given resource should happen through the identifier we already gave it.
>
> **[2:01](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=121)** It's worth noting that this isn't just adding an ID parameter at the end of the URL, but having the ID as part of the URL.
>
> **[2:08](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=128)** It's a subtle but important distinction.
>
> **[2:11](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=131)** The next principle of uniform interfaces is a concept of self-descriptive messages.
>
> **[2:16](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=136)** We've already seen this a little bit with caching, but this is important because by making the messages standalone with their own processing and caching information, we can create and use different types of messages very simply.
>
> **[2:28](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=148)** Our client only needs to know how to retrieve and execute those instructions like the JavaScript code on demand that we already covered.
>
> **[2:36](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=156)** The final principle of uniform interfaces is called hypermedia as the engine of application state, also known as HATEOAS or HATEOAS, which is the worst name for a children's breakfast cereal ever.
>
> **[2:47](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=167)** Fundamentally, it's a choose your own adventure book.
>
> **[2:50](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=170)** If you've never read a choose your own adventure book, you don't read the pages in consecutive order, 1, 2, 3, 4.
>
> **[2:56](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=176)** Instead, you start on page one and every time character is faced with a choice, you have the option to turn to one page for one choice and a different page for another choice.
>
> **[3:05](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=185)** And the pages you're allowed to go to are based entirely on the choices you have at that moment.
>
> **[3:10](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=190)** This is how hypermedia works.
>
> **[3:12](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=192)** At every point in the API, there are different things you can do with the API.
>
> **[3:16](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=196)** And instead of having to go to the documentation to figure out what's available, each and every link is available within the API.
>
> **[3:24](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=204)** So what does this look like in practice?
>
> **[3:27](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=207)** Here's an example from the [[GitHub]] API.
>
> **[3:30](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=210)** So we just hit the API just like we did before, api.[github.com](https://github.com), and now what we're going to see are a series of links.
>
> **[3:39](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=219)** This is incredibly powerful.
>
> **[3:41](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=221)** Notice that each of these URLs, let's look at the keys_url, and this is the results from the GitHub API.
>
> **[3:50](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=230)** Notice that each of the URLs has a specific named item that we can reference.
>
> **[3:55](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=235)** Our client application doesn't have to remember how to create the user URL.
>
> **[3:59](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=239)** It can simply ask the API for the URL that is based on this name.
>
> **[4:04](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=244)** If you think about it, that's how humans work too.
>
> **[4:07](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=247)** We don't remember what the logon URLs is for [amazon.com](https://amazon.com).
>
> **[4:10](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=250)** Instead, we go to [amazon.com](https://amazon.com) and we skim the page until we see a button labeled sign-in, login, or something similar.
>
> **[4:18](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=258)** APIs can work exactly the same way.
>
> **[4:21](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=261)** Also, we don't have to memorize the link to get to the book section of the site.
>
> **[4:26](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=266)** Again, we visit the web page and skim for a link labeled books.
>
> **[4:30](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=270)** When our client applications don't have to remember the specific URLs for each and every action or link we want to visit, our clients can be simpler, kind of dumber, and as a result, much more flexible.
>
> **[4:43](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=283)** More importantly, as your API adds additional functionality, you can just add it and our clients can update automatically.
>
> **[4:51](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=291)** And all this comes from the simple constraint of uniform interfaces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[GitHub]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (10), url (5), hateoas (2), rest (1)
> **URLs:** [amazon.com](https://amazon.com) (2), [github.com](https://github.com) (1)
> **Tools:** github (3)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (1), is called (1), known as (1)
> **Analogies:** such as (1), just like (1)
> **CLI Commands:** make (1)


### 4. Common Design Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Authentication and authorization](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=0)** - [Instructor] Now that we've covered your nouns and verbs and what [[Representational State Transfer (REST)|REST]] is, let's talk about some of the common API [[Design Patterns]] that you'll use the tie them all together.
>
> **[0:09](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=9)** We'll start with authentication and authorization, which are affectionately known as authn and authz.
>
> **[0:14](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=14)** First, we have to remember that they are different.
>
> **[0:18](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=18)** Authentication is establishing who you are.
>
> **[0:21](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=21)** You do this every time you use a website with a username and password.
>
> **[0:25](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=25)** When I log into my [[Banking]] website, I established that I am Keith, and it allows me to continue.
>
> **[0:30](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=30)** But that's not where the process stops.
>
> **[0:33](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=33)** Generally, once you establish who you are, it's important to verify what you're allowed to do, or your authorization.
>
> **[0:39](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=39)** Most people confuse the two, and they design permission systems based on every user having one specific set of permissions.
>
> **[0:46](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=46)** For example, when I log into my bank website, it only shows me my accounts.
>
> **[0:51](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=51)** Those are the ones I'm authorized to see.
>
> **[0:53](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=53)** If I see your bank account, that's a huge security breach.
>
> **[0:57](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=57)** The same applies in APIs.
>
> **[0:59](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=59)** Many APIs have tiers of access based on the user's role, their group membership, regular versus admin users, payment or subscription level, and a variety of other things.
>
> **[1:11](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=71)** This authentication and authorization can be implemented in a variety of ways.
>
> **[1:16](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=76)** First, we have an API key.
>
> **[1:18](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=78)** This is a long string issued by the API provider and either appended to the URL or included as a header in the request.
>
> **[1:26](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=86)** This is by far the simplest and easiest way to deal with from any programming language, framework, or even curl on the command line.
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=94)** There are two downsides we have to consider though.
>
> **[1:36](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=96)** First, if we include this key in the URL, it's convenient, but it's going to be captured and logged by every cache, router, and device between us and the API itself.
>
> **[1:48](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=108)** This is not secure.
>
> **[1:50](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=110)** If we move the key to the headers, that's much better, but we're still stuck with the problem that this key can't be rotated easily if it's compromised.
>
> **[1:58](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=118)** We may have to update all of our applications, which may require redeployment in a variety of different places.
>
> **[2:05](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=125)** The second common approach is to roll your own protocol.
>
> **[2:09](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=129)** The benefit to this is, well, there are none.
>
> **[2:12](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=132)** There are hundreds and even thousands of people who have struggled with, failed, succeeded, failed again, and come up with some solid solutions that work.
>
> **[2:20](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=140)** If you build your own encryption or security and it's compromised, I suggest you update your resume because you will be looking for a new job.
>
> **[2:28](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=148)** Further, think of the training.
>
> **[2:31](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=151)** If you have your own custom scheme, you guarantee that your new team members, customers, and partners have never seen it before, and you'll have to train all of them on it before they can do something useful.
>
> **[2:42](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=162)** And finally, remember that you won't have the tools, other developers, or existing libraries available.
>
> **[2:47](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=167)** All the things, all the resources you use to accelerate your own development simply don't exist.
>
> **[2:52](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=172)** You're stuck building everything yourself.
>
> **[2:55](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=175)** It's like a mechanic who builds their own wrenches, it doesn't make sense.
>
> **[3:00](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=180)** The final and the most common of the API authentication approaches is OAuth.
>
> **[3:05](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=185)** OAuth is actually an authorization protocol.
>
> **[3:07](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=187)** It doesn't define how you authenticate, just that you must authenticate with a trusted entity.
>
> **[3:13](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=193)** The access token you get back describes or internally maps to a description of what actions you are and are not allowed to do.
>
> **[3:20](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=200)** That's where the authorization comes in.
>
> **[3:23](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=203)** At this point, OAuth 2.0 is the recommended approach for APIs.
>
> **[3:27](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=207)** It's not always well understood, but it's widely established and used by your favorite APIs.
>
> **[3:33](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=213)** There's a massive ecosystem of tools, libraries, documentation, and even training options around it.
>
> **[3:40](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=220)** Unfortunately, it's not always the easiest or the fastest.
>
> **[3:44](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=224)** And in all seriousness, it's not something you want to build yourself.
>
> **[3:47](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=227)** There are tons of commercial and open source solutions out there.
>
> **[3:50](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=230)** Try those first.
>
> **[3:53](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=233)** To be fair, I could spend quite a bit more time talking about this, and I do in a separate course.
>
> **[3:58](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=238)** Check out the course catalog to find my session on OpenID Connect and OAuth 2.0, and we can spend a couple of hours working on that specifically.
>
> **[4:07](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=247)** Now that we've covered authentication and authorization, let's cover the most contentious topic of all in APIs, versioning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Design Patterns]] (1), [[Banking]] (1)
> **Env Vars:** api (5), url (2), rest (1)
> **CLI Commands:** curl (1), make (1), find (1)
> **Versions:** 2.0 (2)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** for example (1), it's like (1)
> **Tools:** command line (1)
> **Best Practices:** recommended (1)

#### [API versioning best practices](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=0)** - [Instructor] Now, for the single most contentious and hotly debated issue in all of API design, versioning.
>
> **[0:06](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=6)** While I value being semantically proper as often as possible, I've designed and built APIs for production usage at massive scale, both in terms of traffic and the number of people using it.
>
> **[0:18](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=18)** So I will always push for clarity of purpose and ease of use more than anything else.
>
> **[0:23](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=23)** There are two primary schools of thought here, versioning in the URL or versioning via the accept header.
>
> **[0:30](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=30)** First, let's look at the accept header.
>
> **[0:33](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=33)** When you make a request to an API, you should have the accept header, which tells the API these are the data types and the formats I understand, please send one of them.
>
> **[0:42](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=42)** This is called content negotiation.
>
> **[0:44](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=44)** At the first level, the data types could be as simple as XML versus [[JSON]].
>
> **[0:49](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=49)** That's where most APIs will begin and end, and that's acceptable as long as you can parse the result.
>
> **[0:55](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=55)** At the next level, that data type could be a specific type or structure of JSON, or a media type.
>
> **[1:01](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=61)** We'll cover the details of that in the next video.
>
> **[1:03](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=63)** But for now, know that immediate type is simply a well-defined structure that both the client and the API know how to handle.
>
> **[1:11](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=71)** At the third and final level, we can have media type versioning.
>
> **[1:15](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=75)** This gives the clients the ability to say, "I want version three of this media type "of this particular flavor of JSON back," and the API knows how to respond.
>
> **[1:25](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=85)** Semantically and according to the original version of restful APIs, this is the ideal.
>
> **[1:30](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=90)** This is what we can and should strive towards because it allows the client application to know what versions it can use and ask for the best one for its needs.
>
> **[1:40](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=100)** It's important to remember that that is what the accept header is for, it's for defining how we'd like the data.
>
> **[1:47](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=107)** That said, it's hard to do not because JSON is hard or media types are hard, but because we can lose clarity.
>
> **[1:54](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=114)** This is what one of those requests looks like.
>
> **[1:57](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=117)** At first glance, this looks easy to understand and mentally process but notice that the URL, which is what we normally pass around and share, is missing a piece.
>
> **[2:06](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=126)** From the URL, we know what data we're getting, but we have zero understanding of which version.
>
> **[2:12](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=132)** Therefore, while it is considered impure by a lot of API designers, I opt for the second form of versioning, in the URL.
>
> **[2:20](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=140)** When you look at the URL of one of these requests we know exactly what the developer's asking for and expecting, we can copy and paste the URL.
>
> **[2:28](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=148)** And even if someone forgets to include the headers, there's no question or additional effort required to figure out what data is involved.
>
> **[2:36](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=156)** In practical terms, this may look like a V1 in the URL, or even something like this from the [[Twilio]] API.
>
> **[2:43](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=163)** The 2010-04-01 portion of the URL is the version.
>
> **[2:47](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=167)** Here's a fun little side note about versioning, do you think Twilio hasn't changed their API since 2010?
>
> **[2:56](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=176)** Of course they have, I can think of a half dozen major changes, and additions just while I worked there.
>
> **[3:01](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=181)** The important thing to understand is that none of those changes have broken backwards compatibility.
>
> **[3:07](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=187)** Therefore, they never need to change the version.
>
> **[3:10](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=190)** So, regardless of the approach that we choose, we still don't get away from content negotiation, but we've eliminated a little bit of ambiguity from the process.
>
> **[3:19](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=199)** Once again, this strays from the (indistinct), just a little which will annoy some people.
>
> **[3:24](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=204)** That said, it's consistent with many other APIs out there but even more important is consistency within your APIs.
>
> **[3:32](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=212)** If your organization is launching numerous APIs, make sure you do it the exact same way every single time.
>
> **[3:39](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=219)** This means that as your users, whether they're internal teams, or partners, or customers as your users gain understanding on how the API is designed and works, consistency means that the understanding can be applied over and over again.
>
> **[3:52](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=232)** No one has to relearn how to do things.
>
> **[3:55](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=235)** In summary, either approach is acceptable.
>
> **[3:58](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=238)** Header base is more proper, URL based is more explicit.
>
> **[4:02](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=242)** Regardless of which you choose, consistency and clarity should be your goal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[Twilio]] (2)
> **Env Vars:** api (9), url (9), json (4), xml (1)
> **Definitions:** means that (2), is called (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Choosing media types and processing content](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=0)** - [Instructor] During this course, we've spent a long time talking about how to identify the key interactions with your API and how to design them, but we've left out one key piece, the actual data.
>
> **[0:11](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=11)** We haven't talked about how to choose what data needs to be in the payload and how to structure it.
>
> **[0:16](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=16)** In most cases, people will say, [[JSON]] and name value pairs are fine, and not worry about anything else.
>
> **[0:22](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=22)** And I admit, that the flat key value pair structure is incredibly easy to consume.
>
> **[0:28](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=28)** The drawbacks are that it becomes harder to extend and almost impossible to add detail about the data.
>
> **[0:34](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=34)** Remember from earlier, one of the [[Representational State Transfer (REST)|rest]] constraints is uniform interfaces.
>
> **[0:40](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=40)** And within that, our messages should be self descriptive.
>
> **[0:44](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=44)** Therefore, we should do something more expressive than simple JSON.
>
> **[0:49](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=49)** So, let's talk media types.
>
> **[0:51](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=51)** A media type allows us to use a commonly structured JSON file to move data back and forth.
>
> **[0:56](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=56)** The biggest benefit here, is that there's a growing ecosystem and usage patterns around each of these formats.
>
> **[1:04](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=64)** None of them have a huge following yet, but there are libraries, active discussions and examples using all of them.
>
> **[1:10](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=70)** Let's walk through three of the more popular media types, so you can start to understand the trade-offs.
>
> **[1:16](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=76)** First, we have collection JSON from Mike Amundsen.
>
> **[1:20](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=80)** This is designed specifically to handle, read, write operations, to query a set of objects and manipulate them.
>
> **[1:28](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=88)** This is what a typical collection JSON payload looks like.
>
> **[1:32](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=92)** We have an array of items here, data about those items and links to additional references on those items.
>
> **[1:39](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=99)** While this is not explicitly designed to represent a single item, it can, by rendering it as a collection of one.
>
> **[1:45](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=105)** If you have a lot of group operations, this may be an ideal media type for you.
>
> **[1:50](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=110)** But usually it's not used alone.
>
> **[1:54](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=114)** Second, we have HAL, a hypertext application language, which is my favorite media type.
>
> **[1:59](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=119)** It breaks the data payload into two pieces.
>
> **[2:01](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=121)** First, it represents the data structure of the resource that we're working with.
>
> **[2:06](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=126)** Second, it has an underscore links section, which then gives us references to other related resources and how to interact with those.
>
> **[2:14](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=134)** It's simple but effective.
>
> **[2:16](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=136)** This is what a sample looks like.
>
> **[2:18](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=138)** So, here we have the information, currently processing and ship today.
>
> **[2:23](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=143)** We have an underscore link section, which then gives us additional information, that we can retrieve on our own.
>
> **[2:29](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=149)** This is very close to our choose your own adventure story that we were looking at before.
>
> **[2:34](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=154)** These are all the links that lets us choose our own adventure from here.
>
> **[2:38](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=158)** The drawbacks are two-fold, it can be a little verbose with all the fields.
>
> **[2:42](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=162)** But realistically, it's not significantly worse than any of the others.
>
> **[2:47](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=167)** More suddenly though, the link section is an odd construct.
>
> **[2:50](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=170)** It's describing the resource on how to interact with it, but it's outside the context of the data itself.
>
> **[2:56](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=176)** For example, when you read a book, when there are footnotes that are easily forgotten and rarely explored as a result.
>
> **[3:03](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=183)** On the plus side, since HAL has been around for a while and has attracted some interest, there are helper libraries in a variety of languages and frameworks, if you go this route, they may be helpful.
>
> **[3:13](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=193)** Finally, we have the Ion Hypermedia Type.
>
> **[3:16](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=196)** As a disclosure, this is led by a colleague of mine from my day job.
>
> **[3:20](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=200)** And I have not personally used it in production like the other two, so feel free to be as critical as you like.
>
> **[3:26](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=206)** This is what Ion looks like.
>
> **[3:28](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=208)** While Ion feels similar to HAL, the big difference is that the context and the descriptive information are not separate from the data that it describes.
>
> **[3:36](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=216)** Unlike HAL with a link section, the additional information is adjacent to the data.
>
> **[3:41](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=221)** In terms of processing, this is likely a marginal improvement.
>
> **[3:44](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=224)** But in terms of understanding, I think this is much better.
>
> **[3:48](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=228)** That said, it's one of the new media types, so the community around it doesn't have the same tooling integrations, et cetera.
>
> **[3:54](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=234)** Consider this a strong newcomer with a lot of potential.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** json (5), hal (4), api (1)
> **Analogies:** for example (1), similar to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Hypermedia approaches](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=1)** - [Instructor] Hypermedia is a combination of two concepts, hyper and media.
>
> **[0:06](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=6)** Let's explore the media part of that first.
>
> **[0:08](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=8)** We need to remember that information can exist in a variety of formats.
>
> **[0:13](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=13)** Think about watching your favorite sport.
>
> **[0:15](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=15)** There may be a video stream where you can watch it live.
>
> **[0:17](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=17)** Then there's the announcer's commentary that you might hear on the radio.
>
> **[0:21](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=21)** There are text summaries before and after.
>
> **[0:23](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=23)** Video clips of the best plays and pivotal moments that will be diagrams of particular place or events in the game.
>
> **[0:30](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=30)** We talk about the overarching story of the sport, all those things combined together to deliver rich multimedia experience that can appeal to a variety of audiences in a variety of ways.
>
> **[0:42](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=42)** The hyper part of hypermedia means that the media isn't linear.
>
> **[0:46](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=46)** For a sporting event, you watch it beginning, middle, and end.
>
> **[0:50](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=50)** And it doesn't have meaning in really any other order.
>
> **[0:53](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=53)** Combine these concepts together, and you have the modern web experience.
>
> **[0:57](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=57)** It's effectively a choose your own adventure book.
>
> **[1:01](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=61)** You don't read a choose your own adventure book in order.
>
> **[1:03](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=63)** Instead you start on page one and every time you're presented with a choice, you are led to a different page.
>
> **[1:10](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=70)** It goes on and on until you complete the story.
>
> **[1:12](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=72)** Combining this with our uniform interface's constraint and the self descriptive part of that, we can think of our API as a single entry point or the base of the API.
>
> **[1:22](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=82)** Then as we interact with different resources, the API itself presents us with the additional links or paths to take the next actions.
>
> **[1:31](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=91)** Even better, there are different discovery documents and formats that are currently under development that might tell our API client how to interact with the API.
>
> **[1:39](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=99)** This is what it looks like in practice from the [[GitHub]] API.
>
> **[1:43](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=103)** We enter through a fixed entry point, api.[github.com](https://github.com), we make a request, we get back a series of URLs.
>
> **[1:51](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=111)** Now we can stop and explore any of these such as the feeds URL, and make a request to that.
>
> **[1:58](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=118)** Now, every set of options that we get are contextually based on where we are and what we're doing.
>
> **[2:04](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=124)** Alternative to using postman, you could also do the same thing from the command line.
>
> **[2:08](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=128)** Here, we'll just make a simple request to the GitHub API.
>
> **[2:13](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=133)** And you can see we get back the same list of URLs.
>
> **[2:16](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=136)** And once again, we can go ahead and grab any one of these URLs.
>
> **[2:21](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=141)** So we can say the events URL.
>
> **[2:25](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=145)** We can make the next request to that URL.
>
> **[2:27](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=147)** And we could see that the content has changed, and more importantly, the URL's available from here have also changed.
>
> **[2:33](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=153)** So once again, the API is giving us information and the options that are available from the context of where we are and what we're doing at any given time.
>
> **[2:41](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=161)** Most of the major APIs that you see and hear about now are doing something similar.
>
> **[2:46](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=166)** So they're usually using one of the media types we talked about earlier.
>
> **[2:50](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=170)** Okta, for example, uses how throughout.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3)
> **Env Vars:** api (8), url (4)
> **Tools:** github (3), postman (1), command line (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (1), for example (1)
> **URLs:** [github.com](https://github.com) (1)
> **Speakers:** - [instructor] (1)

#### [Advanced HTTP headers: Content negotiation and caching](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=0)** - [Instructor] Before we move completely out of the API design aspects, I want to talk about one of the unsung heroes of API usage, headers.
>
> **[0:08](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=8)** We talked about headers much earlier in the course with regards to HTTP response codes.
>
> **[0:13](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=13)** And then again in relation to versioning, but let's stop and really consider two more aspects, content negotiation, and caching.
>
> **[0:23](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=23)** First, content negotiation is the idea that an HTTP client, whether it's a browser or an application, can make request to the server and together they can find a format they can both understand.
>
> **[0:35](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=35)** To see this in the real world.
>
> **[0:36](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=36)** If you've ever traveled internationally.
>
> **[0:38](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=38)** When you approached the ticket counter for your flight or your train, the clerk may greet you in multiple languages.
>
> **[0:44](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=44)** In Montreal, for example, they say, "Hello! Bonjour!"
>
> **[0:47](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=47)** And then you greet them back.
>
> **[0:49](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=49)** They know what language to continue in based on your response.
>
> **[0:53](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=53)** They've effectively said, do you speak English or French without ever having to explicitly ask it.
>
> **[0:59](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=59)** Clients and servers do the exact same thing with the accept headers.
>
> **[1:02](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=62)** The client says, here are the formats I understand.
>
> **[1:05](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=65)** And the service says, great I can support one of these let's continue.
>
> **[1:09](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=69)** You might approach versioning the exact same way.
>
> **[1:12](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=72)** The best part of this content negotiation is that this happens implicitly behind the scenes as you navigate the web.
>
> **[1:19](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=79)** As we're building APIs, we need to be aware that that's happening and sometimes even do it ourselves.
>
> **[1:24](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=84)** Luckily, there are libraries and tools to help with that.
>
> **[1:28](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=88)** The final header concept I want to cover is caching.
>
> **[1:31](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=91)** Caching is vitally important on the internet in general, and within your API specifically.
>
> **[1:36](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=96)** Remember the fastest request you ever have to handle is the one you don't have to.
>
> **[1:42](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=102)** The specific header used here is ETag, which is generated by the server and returned to the client.
>
> **[1:48](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=108)** This is how it works.
>
> **[1:49](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=109)** A client makes a request just like normal.
>
> **[1:52](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=112)** The server generates the response and generates an Etag to go along with it.
>
> **[1:56](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=116)** Quite often, this is just a hash of the response.
>
> **[2:00](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=120)** Now, before the client makes its next request, it uses the head verb to just get the headers, including the ETag.
>
> **[2:07](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=127)** If the data is the same, the server returns the same ETag.
>
> **[2:11](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=131)** The client recognizes this and the request is complete.
>
> **[2:15](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=135)** While this may initially seem like a lot of extra effort, you just reduced the work from retrieving and parsing the entire payload into a few dozen bites and zero work for the server.
>
> **[2:25](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=145)** That's a win overall.
>
> **[2:27](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=147)** Now, alternatively, if the data has changed, the server returns a new ETag, the client recognizes this, and then it makes a full request as expected.
>
> **[2:38](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=158)** Now, in this path, you suffered a small delay in terms of the extra request, but for some data sets, you'll make that up in bandwidth and time-savings over and over again.
>
> **[2:48](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=168)** If you're building mobile applications with potentially unstable connection, this is even more important.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), http (2)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** we talked about (1), earlier in (1)
> **Analogies:** for example (1), just like (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Documentation approaches](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=0)** - [Instructor] Now let's talk documentation.
>
> **[0:02](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=2)** Before we get into what we should do, let's kill off some bad ideas first.
>
> **[0:07](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=7)** If you're distributing documentation via PDF, please stop.
>
> **[0:11](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=11)** While your intention might be great, you'll have the problem of multiple versions floating around, no one knowing which version is right, and your customers never knowing if things are quite right.
>
> **[0:21](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=21)** If you really have a 100% private API and you don't want to share your documentation publicly, a [[Google]] site or similarly password protected tool is much better than a PDF.
>
> **[0:32](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=32)** Alternatively, if you're posting your documentation on [[WordPress]] or some other CMS, that's marginally better, but still not great.
>
> **[0:40](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=40)** When your API changes, the first question every user will have is, what has changed or what do I do differently?
>
> **[0:47](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=47)** If advanced users can't diff the new docs with the old and understand what has changed, you're hiding vitally important information, probably by accident.
>
> **[0:58](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=58)** Now let's consider some better options, but before we talk tools, let's talk goals.
>
> **[1:03](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=63)** What are our goals for our documentation?
>
> **[1:05](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=65)** First, whatever tool we use needs to be code snippet friendly.
>
> **[1:09](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=69)** These are API docs.
>
> **[1:11](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=71)** They will have code and it must be simple and easy to copy/paste and experiment with the code.
>
> **[1:17](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=77)** Syntax hiding is absolutely mandatory.
>
> **[1:20](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=80)** Next, we need [[Version Control]].
>
> **[1:22](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=82)** This is helpful to our users, which I already noted, but it's also important to our team.
>
> **[1:27](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=87)** As things change, improve, or expand, we need to put the same rigor into our documentation review as we do for our code reviews.
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=94)** If your API is revenue generating, remember that mistakes here will cost you money.
>
> **[1:40](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=100)** Next, we need something that's easy to update.
>
> **[1:43](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=103)** While some documentation writers are comfortable in an IDE or even just Vim, not all of them will be.
>
> **[1:49](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=109)** We absolutely need things to be as simple and straightforward for them as possible.
>
> **[1:54](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=114)** Finally, it needs to be searchable, not only internally on the site, but Google needs to be able to crawl it too.
>
> **[2:01](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=121)** This is a core requirement for me personally, because of it's not findable it does not exist.
>
> **[2:07](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=127)** Thinking about tools, a Wiki is actually a strong option here.
>
> **[2:11](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=131)** Whether you're looking at MediaWiki, [[Confluence]] or something else entirely, most have syntax highlighting built in, or as a simple plugin.
>
> **[2:19](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=139)** Obviously, since it's a Wiki, version control is built in, so that's covered.
>
> **[2:24](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=144)** Even better, the skills required to maintain the site are very minimal.
>
> **[2:28](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=148)** Overall, it's very good.
>
> **[2:29](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=149)** In fact, search friendliness is very high for MediaWiki.
>
> **[2:33](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=153)** For Confluence, we have to be a little bit more careful to make sure that this is an internal or an external site.
>
> **[2:40](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=160)** The only real downside of a Wiki is that there usually isn't a staging or a review workflow.
>
> **[2:46](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=166)** When you're launching a new component of your API, there's not an easy way to say don't publish this page or section, or even, just show it to these people for review.
>
> **[2:56](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=176)** Fundamentally, that's not a huge drawback, and a Wiki is probably better than what you're doing now, so don't let that derail your efforts.
>
> **[3:04](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=184)** Alternatively, there's some great static site generators out there.
>
> **[3:08](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=188)** I've personally used Jekyll, which is Ruby based, and very simple to configure and start loading content.
>
> **[3:13](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=193)** Syntax highlighting is very easy via plugins.
>
> **[3:17](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=197)** It doesn't have version control built in, but if you're storing the pages in [[Git]], you already have that.
>
> **[3:22](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=202)** In fact, Git will let you have different branches for different versions of the docs and even private branches from other repositories.
>
> **[3:30](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=210)** So it becomes relatively easy to maintain, and definitely search engine friendly because it's just static [[HTML]].
>
> **[3:38](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=218)** The downside is that you're still working in raw text.
>
> **[3:41](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=221)** There aren't pretty web-based text editors or something similar, so that may be a challenge for your documentation team.
>
> **[3:47](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=227)** But once again, that's not a huge drawback, so Jekyll is probably an improvement over what you're doing currently.
>
> **[3:53](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=233)** But right now my favorite tool is called Slate.
>
> **[3:55](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=235)** It recently spun off the company TripIt.
>
> **[3:58](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=238)** It's Jekyll based, so you have all the benefits as before, and some of the cons also, but they made some significant structural improvements.
>
> **[4:07](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=247)** First, they've made it very easy to configure and deploy.
>
> **[4:09](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=249)** It can be done usually in under five minutes.
>
> **[4:12](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=252)** Next, they've added some simple [[JavaScript]] plugins and CSS to add tabbing for different programming languages and examples.
>
> **[4:19](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=259)** So as a result, you can have one text description and then display different snippets of different languages right there in context with the text, and then you can toggle between them.
>
> **[4:29](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=269)** More subtly, this is also done via URL in the documentation, so you link someone directly to the [[Java]] or the [[PHP]] or the Golang example that they need.
>
> **[4:40](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=280)** And just remember that our goal here is that we want people to be successful with our API.
>
> **[4:45](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=285)** That means that they can find what they need, that it makes sense, and that it's complete and accurate.
>
> **[4:50](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=290)** Anything else that the detracts from those is probably a distraction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Version Control]] (3), [[Google]] (2), [[Confluence]] (2), [[Git]] (2), [[WordPress]] (1)
> **Env Vars:** api (6), pdf (2), cms (1), ide (1), html (1)
> **CLI Commands:** git (2), make (1), ruby (1), php (1), find (1)
> **Definitions:** is a  (1), is an  (1), is called (1), means that (1)
> **Tools:** confluence (2), vim (1)
> **Documentation:** the docs (1), the documentation (1)
> **Prerequisites:** configure (2)
> **UI Navigation:** toggle (1)

#### [SDK design considerations](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=0)** - [Instructor] The philosophy goes something like this.
>
> **[0:02](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=2)** You shouldn't need an SDK or helper library to use your API.
>
> **[0:06](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=6)** If you use the HTTP verbs, and response codes properly, you use [[JSON]] for your payloads, and the common authentication method, a simple HTTP library, and JSON parsing libraries should be enough.
>
> **[0:19](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=19)** While I'd love to go with that, most of us are doing something a little bit more complex with our API.
>
> **[0:24](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=24)** In fact, if you're doing something more complex or you need to wrap larger components, workflows or advanced concepts, an SDK might make sense, but I don't recommend SDKs for everyone.
>
> **[0:36](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=36)** You should only have an SDK if you can make your users lives easier in some tangible way.
>
> **[0:42](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=42)** I use the acronym SPOIL to remember that we want to spoil our users with a great experience.
>
> **[0:48](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=48)** This breaks down into five words.
>
> **[0:50](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=50)** First, we want our SDK to be succinct.
>
> **[0:53](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=53)** As my 11th grade English teacher said, "Concise but precise."
>
> **[0:57](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=57)** We want people using our SDK to write less code to accomplish the right thing.
>
> **[1:02](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=62)** Second, our SDK should be purposeful.
>
> **[1:05](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=65)** We took great care in designing our API, and writing our documentation.
>
> **[1:09](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=69)** We should do the same for our helper library because the SDK will be the primary interface for many of our users.
>
> **[1:16](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=76)** In fact, we should make sure it helps them with the most common, and important scenarios, not just a simple wrapper over our API.
>
> **[1:23](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=83)** Next, it needs to be open-source.
>
> **[1:26](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=86)** Odds are your SDK won't quite do everything that everyone needs all the time.
>
> **[1:32](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=92)** By being open-source, people can pass back extensions, fixes, and clever ideas that you can accept or reject as appropriate.
>
> **[1:40](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=100)** Next, the I stands for idiomatic or reflecting the language it was written in.
>
> **[1:45](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=105)** That means a [[PHP]] SDK should have naming conventions, structures and patterns common to PHP.
>
> **[1:52](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=112)** It shouldn't look and feel like [[Java]].
>
> **[1:54](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=114)** And finally, the L stands for logical.
>
> **[1:57](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=117)** The SDK should be logical.
>
> **[1:58](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=118)** That means understanding gained, and patterns used in one component should be reusable across all others.
>
> **[2:05](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=125)** The more time and energy people have to spend to understand your code is less time they can spend solving their problem.
>
> **[2:12](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=132)** This is also called the principle of least surprise.
>
> **[2:14](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=134)** We want to surprise people in the smallest ways possible.
>
> **[2:19](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=139)** All of this comes back to our goal.
>
> **[2:21](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=141)** We want to make our users' lives easier in some tangible way.
>
> **[2:25](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=145)** If providing an SDK can let them move faster, easier, or we can wrap complex concepts of workflows, we should definitely consider it.
>
> **[2:33](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=153)** And the final thing to remember, before you start building SDKs, and your favorite languages, ask your existing users which ones they need?
>
> **[2:41](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=161)** You could build the perfect [[React.js|react]] library, but if nobody uses it, what was the point?
>
> **[2:46](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=166)** Your time would have been better spent elsewhere or sometimes the other side of it is even worse.
>
> **[2:51](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=171)** You build a library that one tiny but vocal customer needs, and no one else cares about.
>
> **[2:57](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=177)** Be very careful about the libraries you choose to build and support.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[PHP]] (2), [[Java]] (1), [[React.js|React]] (1)
> **Env Vars:** sdk (11), api (4), http (2), json (2), php (2)
> **CLI Commands:** make (4), php (2)
> **Definitions:** stands for (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps toward designing a RESTful API](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=0)** - [Keith] In our closing here, I'd like to say I hope you enjoyed this course in designing RESTful APIs.
>
> **[0:05](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=5)** To take some next steps, let me share some useful options.
>
> **[0:09](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=9)** First, I would suggest checking out your local user group to see what API topics come up.
>
> **[0:14](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=14)** In Austin, we even have an API specific meetup in addition to the various meetups who cover API-related topics regularly.
>
> **[0:22](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=22)** For online resources, I would recommend anything written by Mike Amundsen or from the API Craft mailing list.
>
> **[0:29](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=29)** Mike is the author of "Collection+[[JSON]]," which we talked about earlier.
>
> **[0:32](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=32)** Both are great places to collect and explore thoughts from some of the best and brightest.
>
> **[0:37](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=37)** Further, there are a number of API courses available in the course catalog here related to building and testing APIs.
>
> **[0:44](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=44)** These are hands-on with code that you'll build during the course.
>
> **[0:48](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=48)** Next I'm a fan of my own book called "A Practical Approach to API Design," which is available via [theAPIdesignbook.com](https://theAPIdesignbook.com).
>
> **[0:55](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=55)** Next, my coauthor and I have a newsletter where we collect relevant news from the API world, both technical and business oriented topics and share it with you every Thursday.
>
> **[1:05](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=65)** We also share the same information via Twitter account called APINewsletter.
>
> **[1:09](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=69)** Definitely check both of those out when you get the chance.
>
> **[1:12](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=72)** So good luck and happy hacking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** api (7), json (1)
> **Code Identifiers:** theapidesignbook (1)
> **URLs:** [theapidesignbook.com](https://theapidesignbook.com) (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [keith] (1)


## Instructor

- [[Keith Casey]]

## Path Context

### In [[Become a RESTful API Developer]]
← [[HTTP Essential Training]] | **3 of 5** | [[API Testing and Validation]] →

## Appears In

- [[Become a RESTful API Developer]]

---

[↑ Back to top](#)