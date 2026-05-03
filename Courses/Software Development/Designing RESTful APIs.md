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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/design-a-restful-api-for-your-organization?u=76281980&t=0)** - [Keith] Hello, I'm Keith Casey, and this is Designing RESTful APIs. In this course, we'll start with a simple overview of what it takes to add an API to your application, whether it's been around for years or you're just getting started. Our goal is to teach you to design an API which is useful for end users while respecting the HTTP concepts and [[Representational State Transfer (REST)|REST]] constraints, which we'll review and describe throughout this course. And like any good design, it starts with a good definition. We'll define who will use our API and how they'll benefit from it. Then we'll talk about the nouns and verbs that our users will use and how to apply them in clear and expressive ways. Once we understand our business workflow and the structure, we'll dive into the HTTP concepts and REST constraints to help determine our design. Finally, we'll wrap up this course by covering common API [[Design Patterns]] you'll have to deal with. This list isn't exhaustive, but covers the most common ones. So let's get down to business and design some effective APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Design Patterns]] (1)
> **Env Vars:** api (4), http (2), rest (2)
> **Prerequisites:** getting started (1)
> **Speakers:** - [keith] (1)

#### [Before you build an API](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/before-you-build-an-api?u=76281980&t=0)** - [Instructor] This course starts from the basis that you need to understand two primary things. First, you have to understand the business process that we're going to model. You can't build something you can't design, you can't design something you can't describe. For this course our business process is buying a book online. So it should apply to anyone watching this. Second, you need to understand that HTTP is expressive, and can tell our users and by extension, our applications using our APIs. A great deal of information and status that those applications can use. HTTP is not perfect, and it has some major weaknesses, but we can accomplish quite a bit with it anyway. And finally, before we begin, I suggest you install a tool to view the HTTP headers. Within Firefox or Chrome, the Live Header's extension is sufficient. But the freely available postman app is even better. On the command line I would suggest curl. That's what most of my examples are throughout this course. Now we won't be writing any code in this course, but it's incredibly useful to open the extension and watch what data is actually provided in the headers while poking around with the APIs you probably already use. That will be even more important as you build your own API later.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=0)** - [Instructor] Welcome to designing RESTful APIs. In this course, we'll talk through API design, what to consider, some things to exclude, and [[Design Patterns]] that'll fit no matter what. But let's talk about your API. To set the tone for the [[Representational State Transfer (REST)|rest]] of the day, let's understand one important aspect, API design is hard, it's a game of trade-offs. But more than anything, we want to be deliberate about our choices. Because first we have to decide what functionality we want to expose. Then we have to determine how to expose it. Then you have to figure out the best ways to expose it. Then you have to adjust and improve as you figure out your assumptions and use cases were wrong, or just sometimes incomplete. Finally, as you learn about your customers and unexpected use cases, you have to rethink some things from the ground up. Overall, it touches on some of the hardest problems in computer science. The challenge is that good API design involves naming things well, while simultaneously describing how to interact with those things. Even worse, as the API sees the real world, the goals and the purpose of the API will evolve. This may require us to find better words to describe our efforts and adjust accordingly, which gets in to versioning and backwards compatibility. All of this brings us to the first concept we'll cover, affordances. In the simplest terms, an affordance is something which allows you to perform an action or accomplish a goal. For example, a doorknob is an affordance which allows you to open a door.
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/why-good-api-design-is-important-14393375?u=76281980&t=94)** A switch is an affordance for turning on and off a light. When you consider API design, everything you allow a user to do is an affordance. The potential risk is that we have three different aspects in play. First, we have what the API allows you to do. Second, we have what the API makes easy. Finally, we have what you want to do, the user, what do you want to accomplish? When these three things don't fit, we may have a useless API or maybe a powerful API that doesn't do what we need. But when all three of these are aligned, we have a unique combination that's incredibly powerful, but so subtle you don't even notice. For example, let's talk about coffee cups. A coffee cup is a great thing. It's ideal at holding a hot beverage, but they tend to get hot. Then along comes the amazing innovation of the handle. A handle is designed so you can hold a hot cup without burning your hand. But the great thing about a handle is that you can use it for hanging it on a hook. In this case, we have a goal with a simple solution that allows other use cases without any additional effort for the user. Of course, while APIs can be useful and powerful to accomplish many things, adding them as not as simple as you think. So let's talk about scenarios where you might need to add an API.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=0)** - [Instructor] There are three approaches that allow you to add an API to your system. Some are easier than others. First, we have the bolt-on strategy. This is when you have an existing application and add an API after the fact. This is often considered a brute-force approach, but is the fastest way to get value from the API since the underlying system is functional the whole time. This takes advantage of existing code and systems so you don't have to re-figure out anything. Unfortunately, there are some drawbacks. Poor architectural decisions and bad name decisions made years ago tend to seep through the system and cause problems in external interfaces with helper libraries and all the supporting client code in every single piece. As a result, these oddities never go away. Next, we have the other extreme, the Greenfield strategy. This is when there's no underlying application or even necessarily business logic that you have to interact with. You have complete freedom and flexibility to do whatever you want and however you want to do it. This is the strategy behind the API first or mobile-first approach and is the easiest scenario to develop an API. This offers us the opportunity that other strategies don't. Since you're starting from scratch, you can make use of technologies and concepts that may not have been available before. This can reinvigorate your team to learn new things and expand their skills. This also tends to be the hardest option because there's a biggest gap between when the requirements are defined
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/approaches-to-adding-an-api?u=76281980&t=94)** and when you actually receive real business value from the system. That can be a big struggle for some teams. Finally, you have the facade strategy, and this is actually my recommended approach, most of the time. It's somewhere between the Greenfield and the bolt-on. In this case, you take advantage of existing business systems, yet shape them to what you prefer and need. I'm working with a number of companies where we're doing this right now. They have a huge number of soap services that power their backend and they're wrapping each of these with services with re-architected [[Representational State Transfer (REST)|REST]] interfaces. This gives them the ability to keep working systems in place while making the underlying architecture better. Now the drawback for that is if you're not careful, this can be a place where you have naming translation and conversion layers that easily get out of control. In some cases, you can end up with completely divergent mindsets in the system, which can make it look schizophrenic for people who can see both systems. Regardless of which strategy you choose, modeling will be key to your success. So let's talk about that in the next video.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=0)** - [Instructor] In this video, we'll cover three quick tips on modeling your API. This doesn't get into the technical aspects yet, but we'll get to those shortly. Regardless of which of the API strategies you follow, modeling will be a key to our success. You'll need to make sure that the capabilities, or affordances, make sense, are useful, and actually make your users' lives easier. Toward that goal, before we get into the technical side of the process, I want to lay out three simple rules. First, don't worry about the tools. It doesn't matter if you're using note cards, post-it notes, or the latest Kanban tool, just choose a tool that works best for your process. However you need to keep and take notes, do it. Next, the key aspect is having a consistent process. If you always document things the same way and using the same steps, you can reduce the likelihood that things are missed, ideas are misunderstood, or requirements are incomplete. I'd further recommend that you involve a variety of team roles as you model the application. The developers, the support team, the documentation team, and even QA, they'll have to work together eventually. The sooner and earlier you can involve them in the process, the better off you'll be. Their variety of perspectives will add understanding and answer questions that your immediate team won't think of. Which leads the final and the most important part, it doesn't count unless it's written down. During modeling, you'll most likely find gaps
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/tips-for-modeling-apis-14399132?u=76281980&t=93)** in your understanding of places that you need more information. If you don't document these, you stand the risk of losing them, potentially even putting your entire project at risk. So I say document everything, including assumptions and tasks that can and should come later. I have to admit that documentation is non-negotiable for me. It's not written down, it doesn't count. It's not because I want to cause stress in the team, it's just the opposite. As your immediate team is building, your larger team is documenting and testing, and your users are integrating on your API. They're going to be asking questions like, why is the structure this way? If you document the assumptions and decisions, others can benefit from that shared understanding. And just in case your assumptions are wrong, they'll be able to correct and adjust much earlier in the process. The fastest error to fix is the one you don't create.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=0)** - [Instructor] In this video, we're going to begin our API modeling process. No, wait, let me correct that, we're not going to model the API quite yet. The first thing we need to do is have a clear understanding of our business process. If we don't know what that is and what it accomplishes, we'll never be able to build an API to support it. This is the process we're going to be stepping through. And notice, Step 1 is identifying the participants. To put it simply, our participants are the ones who will be involved in the business process that eventually uses our API. Actually, let me rephrase that. Our participants are the entities who will be involved in the business process using the API. I say that specifically because the various [[IoT]] devices, bots, and monitoring services, we need to understand that not all of our participants are humans. From here forward, whenever I say participant, remember that I could mean a person or an entity. Our first step of this is to figure out who is involved in our business process. This can be any entity indirectly or directly that takes action or receives actions as a result of an event. For each participant we need to capture who they are. I go as far as giving them a name. So we're not just talking about a developer, but developer Dan or developer Diane. Next, we need to know if they're internal or external to our organization. Getting adoption of our API is probably easy if we're building it for another team at our company. But that still doesn't mean we can get sloppy.
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/identifying-participants-14395229?u=76281980&t=94)** After all, some people on that team will have your boss's email address. Finally, we need to know whether they're active, taking an action, or passive, waiting for an action. Let's take a simple scenario of ordering a cup of coffee at your local coffee shop. In this case, obviously we have you and the barista who makes the coffee. Those are the easy ones. But quite often there are multiple people working at the coffee shop or one takes the order and the other takes the payment while yet another makes it. So now we have three participants. But wait, did you pay with cash or a debit or credit card? Maybe we have a payment processor in there. Are there other customers? Are there orders coming up before or after ours? Are they participants too? This is starting to lead to one of the most dangerous problems involved in modeling any process, the boundaries. If we're not careful, we could end up modeling inventory management systems for the cups, the coffee machine for the workflow, the payment processor, and lots of other things. We must be careful here. In this case let's keep it simple. Let's consider you, the cashier, and the barista, with the acknowledgement that the cashier and the barista could be the same person. In the next video, we're going to talk about individual activities and who's involved in what.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=0)** - [Instructor] Now in this video, we'll talk about how best to describe the activities our participants undertake. Remember, this is only the second step of our process, so we're not quite a step-by-step process yet, but we should instead define the business processes or goal involved. Our overarching activity is simple. We're ordering a cup of coffee. Now what are the steps in our activity? First, you place an order. Then you wait for the order. Finally, you receive the order. Wait, that's incredibly abstract, and really only covers your action. It doesn't go into the interactions between participants. Let's try this again. First, the patron, or you, create an order with the cashier. Next, the cashier passes the order to the barista. The barista acknowledges the order and adds it to the queue. The cashier tells you your total. You provide payment, which is either accepted or rejected. If the payment is rejected, you have to choose some other method. If payment is successful, you continue. And then finally, as the orders are ready, they're announced and delivered so the customers receive the orders. Now this paints a much more complete picture of what's happening. Notice this also clearly references individual participants, what they're doing, and finally, the order in which things are incurring and their dependencies, for example, you cannot receive your order until the barista makes it and you probably shouldn't receive your order until you've paid for it.
>
> **[1:32](https://www.linkedin.com/learning/designing-restful-apis/identifying-activities-and-breaking-them-into-steps-14396320?u=76281980&t=92)** This is important because now we've clearly defined where responsibilities begin and end. And later, this leads us to our more applicable example where we'll discover the participants and activities involved in ordering a book online.

> [!info]- Semantic Content
>
> **Analogies:** picture (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Case study: Identifying participants and activities](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=0)** - Now let's find the participants and activities involved in ordering a book online. At this stage, we can really draw our boundaries wherever we want, which is both good and bad. It's good because we can cover exactly the participants and activities we want. It's bad because what we want and assume might not be what our customer needs. This is one of those times we'll likely need to go back and ask our end user or product manager or whoever what they actually need. This is not the time to guess. And finally, we have to document the answer. So the first question is who are our participants? Obviously, we have the customer, that's us. That's an easy one. Next, we can have a system administrator, but they're probably not involved in placing or fulfilling an order, so let's ignore that one. Also, the developer of the system is probably not involved here either, but we do need a stock clerk who fulfills the actual order. Finally, let's include [[Customer Support]], just in case. So when we stop and look at who remains, we have three participants. The customer, the stock clerk who actually takes and ships our order, and Customer Support, who might have to get in contact with the customer if there's a problem. So now what are the activities? Well, this one is easy. The big overarching activity is ordering a book. So now let's break that into steps. The first step of buying a book is finding it. We have to provide some mechanism that the customer can look and say this is the book I want.
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=93)** Then the customer adds that book to their cart. Now, many customers, hopefully many customers, will add additional things to their cart and sometimes remove things from the cart. Realistically, we probably need to add this functionality at some point, but right now our activity is ordering a book online, one. So we'll add a note that we need to figure this out later. This is one of those places we need to go back to the end user or our product manager just to clarify things. Now we check out. If the book is available, the stock clerk retrieves it, picks it up off the shelf, and packs it for delivery. If the book isn't available, Customer Support may need to get in touch with the customer to cancel the order or make other arrangements. While most [[E-Commerce]] systems aren't going to allow a customer to order something that's out of stock, sometimes inventory count isn't correct. So let's include this activity just in case. So overall, this is what it looks like. We have a customer who needs to view items, add items to cart, possibly remove or add additional items to the cart, checkout, which hopefully includes providing payment, finally fulfilling and shipping the order, and reviewing the order after the fact. So notice we have a number of branches here. There's some places where there are additional user stories, but let's just consider the happy path for version one. Let's assume that everything is working out the way we hope. I'd recommend flagging all these branches, all these choices and assumptions that we're making
>
> **[3:08](https://www.linkedin.com/learning/designing-restful-apis/case-study-identifying-participants-and-activities?u=76281980&t=188)** and talk to our product owner as soon as possible to see if they're a priority. Do not guess here. I really recommend going back to the product owner, because for all you know, there are other teams working on those issues already and there have already been decisions made. Don't try to second guess them.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=0)** - [Instructor] In this session, we'll talk about creating and grouping API methods or more properly creating our API definitions. We'll start from the participants and activities and the steps that we figured out before. Nothing here has changed since our last video. But let's go back to our process for a second. We followed the first three steps. Now we're on to step four of creating the API definition. This requires us to group our methods. Later, we'll talk about how to validate them. And as we saw before, here are the steps we have, rephrased a little bit differently. Now, we're going to leave out the unrequested steps now for simplicity. So let's get rid of the add more items, remove items, and the shipping order. Those are outside the scope of what we're tackling right now. And this is where it becomes a little bit of art instead of just science. Luckily, if we followed the first three steps successfully, this will be incredibly easy 'cause now we have to find our resources. Our resources are anything someone wants to interact with in our system or another way of putting it, our nouns. If you've written your steps on post-it notes or note cards, they can come in incredibly handy here. The fastest way to identify the resources is to circle the nouns. In our case, first we have items. You'll generally want to view, edit, and add items or in other words create, retrieve, and update, the beginning of CRUD. Listing and searching for items are typically special cases of retrieving. Our next noun is cart.
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/creating-and-grouping-api-methods-14392975?u=76281980&t=93)** And this is the first place where we have to make a little bit of a design decision. Is our cart just a collection of items or is there a line item resource or object which holds each individual item? In this case, we'll create a cart as a collection of items. It's just referencing other items. Therefore, adding or removing is just changing the state of the cart itself. Our next and final noun is orders. An order is simply a cart which has undergone the checkout process. Now that we have our nouns, we can list out the actions that are applicable to each. This is not a complete list based on every user story and use case in the system. This only covers what we've designed so far. And I just noticed a potential issue. If your book ordering site is like most, what do you have to do in order to check out? You probably have to log in, which means there's a customer resource hiding somewhere in there. Since we don't know what that means right now, let's note that we need it and move on. It's something we need to ask our product owner about. And further, notice we haven't defined what the checkout method looks like. We're just stating that it exists and that we'll get a success or failure as a result from it. Those details are irrelevant for now. The result of all this is that we definitely have three nouns: items, carts, and orders, and might also have one called the customers. There are almost definitely other nouns in our system but we don't care about them yet. Other user stories will start expressing those and adding more detail to the ones we have.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=0)** - [Instructor] So now let's review where we are. We've defined a single user story, broke it into concrete steps, and identified the nouns that we're interacting with. We're still in step four, so now we need to map those nouns to our HTTP verbs. Since we determine that this is mostly a CRUD scenario or create, read, update, delete, our steps are pretty simple, and they use the basic verbs. Post, Get, Put and Delete. There are many other verbs available within HTTP but these are the most common ones you'll see. First, GET. GET is used to retrieve data. You should never use it to modify information. Not surprisingly, DELETE is used to delete data. You should not use it for anything else. Next, we have PUT. PUT will update an existing record. You should not use it to create or delete or anything else. And finally, there's POST. POST is the catch-all for HTTP. You can use it to create new records and basically anything else that modifies a record but doesn't directly map into one of the other verbs. This kind of makes it an odd ball but it's really important to remember. So now let's bring this back to our book ordering scenario and map our verbs. Generally, anything that looks like a list or search is a special case of GET. That's our first verb on items, and conveniently, we use it both for viewing the group of items and the individual item. That's pretty easy. Next, we have our cart resource.
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=94)** And we have the design decision that we mentioned in our last video. When we add something to a cart, are we creating and then adding an item? Or are we creating a cart and then modifying the cart every time we add and remove items from it? The first scenario requires a POST because we're creating a cart and then it implies more POSTs after that because we're creating links between our cart and existing items. The second scenario also requires a POST but after that, it's a series of PUTs because we're modifying existing attributes on that cart as we add items to it. This is the scenario we decide to model here. So we POST to create a new cart. Then we use PUT to put items into the cart to modify the attributes about it. And then finally, we have the check out process. The check out process we're assuming is a post because it doesn't map cleanly into any of the other verbs. Finally, we have our orders resource. When we talk about this one, this one is a little bit different because instead of just creating an order with a POST, we actually have that most likely as the output of the previous resource. So when you POST a cart through the checkout process, it creates an order on its own. We do not create an order by ourselves. Next, viewing an order is pretty easily a GET. We don't have to figure out a lot there. And canceling an order, most people are going to default to DELETE for this one, and while that could be okay in some scenarios, notice, this says cancel, not clear or delete an order. So in this case, we'd probably also use a POST
>
> **[3:10](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=190)** to change the status from active or pending to canceled. It's a little bit different but it's important to remember here. Now, there's one other gap that we have here. Are we missing a customer's resource? Many website support a guest purchase process that allows you to check out without having an account. But the vast majority don't. That means we'll likely have to have a customer creation or a user registration and sign-on process somewhere prior to this user story. At this point, we must go back to our product owner and check what they want. We're early enough in our design that we can consider either path very cheaply. A few weeks or even months from now that change will be expensive. For now, let's assume that we'll have a user registration process. So we know that when a user makes a purchase, we know who they are. We are not going to handle the customer registration requirements at this point because we don't know them. And actually, let me take a brief sidebar on that point. Throughout this process, we're not going to know things. That it's not a problem. Or maybe it's a small problem but we can fix it quickly. The actual problem is when we just make stuff up. And be honest, if you're not asking the product owner or our customer, you are making things up. Please, please, please, don't do that. If you know the vision and the customer, sure, the odds of you being correct might be pretty good. But something that you decided on your own without input could accidentally become a hard requirement to the [[Representational State Transfer (REST)|rest]] of your team
>
> **[4:42](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=282)** and nobody realizes that was a choice that you made as opposed to something that the customer dictated. Now, let's go back to the relationships for a second. When we talk about these resources, they all have relationships with one another. There's three particular types of relationships that we're interested in. The first type of relationship is independent. It means that this resource can exist on its own. The second type of relationship is dependent, which means one resource can only exist if a different resource already exists. To look back at our ordering book scenario, a order cannot exist without a cart previously existing. And then finally, we have the third type of relationship and this is associative. This means that additional information is required to describe the relationship. To understand these a little bit more concretely, let's look at an example. Think of your favorite movie. In this scenario, movies and actors are independent. You can have one movie, and you can have one actor or you can have many movies and many actors. Alternatively, a movie has characters. If you have a particular character, that character can't exist outside the movie. Finally, for an associative relationship, we can have one actor that plays multiple characters in the same movie or alternatively, one character played by multiple actors in the same movie. For example, a movie that traces the life of a historical figure could have that figure as a child, as a teenager, as an adult, each one played by different characters.
>
> **[6:15](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=375)** So just saying this actor plays this character isn't enough. We have to say this actor plays this character as a child. That adds additional information about the relationship between these things that we absolutely need to understand. So when we go back to book ordering, this is what happens. Our items are independent. We do not need customers to have items. We don't have to have a cart to have items. They exist entirely on their own. Next, carts are dependent on items. If you don't have items, you cannot have carts. Next, orders are dependent on carts because something cannot become an order until it's first gone through a cart. And that checkout process turns a cart into an order. And finally, an order must have customers. Somebody actually bought that thing, right? So this is what it looks like. We end up with a dependency map where if you stop and look at this for a second, you realize this looks a lot like a database schema. Now, that's common in this scenario and it's common quite often. It is not 100% of the time. So do not just assume it. Quite often people will design an API by simply exposing their database schema. That's a bad approach because fundamentally, the choices that go into designing your database are not the same choices that go into designing your API. The ways that people need to interact with your API don't necessarily map one to one with your database. So although in this scenario
>
> **[7:47](https://www.linkedin.com/learning/designing-restful-apis/mapping-activities-to-verbs-and-actions-14397191?u=76281980&t=467)** they end up looking very similar, do not assume that is the case most of the time. Go through this process and figure it out just to be sure. Sometimes you'll end up with nasty little surprises that would have bitten you in other scenarios.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=0)** - [Instructor] So now we have an API, right? Well, not quite. We have a design and structure. Or to put it another way, we think we know what it will look like, but we have yet to test it in the real world. Now we could start building it and see how it works out. But personally, I think that's a terrible idea. What happens if we spend weeks or months on this effort and we miss something? Let's find a way to validate our API that's cheaper, faster, and will save everyone a lot more effort. Now if you've listed out these individual steps on note cards, this gets to be kind of fun. I'd recommend taking a look at some of your other use cases and seeing if you can solve them by rearranging your cards. If you can map other activities too, great. If not, figure out which steps are missing. Either way, as we derive these steps from our activities, everything should map pretty cleanly together. If something doesn't fit, that's a red flag, and we need to go back a few steps to make sure things work. Alternatively, and I've done this before quite often, let's write some code, but not code for the API. Instead, let's write code as if our API existed already. This means that we're going to step through each of our API calls as if the API existed. We don't care if this code compiles, it's not like we can run it anyway. We're just trying to figure out if things make sense. In fact, if you want to do this on a whiteboard with a colleague or two that's best. This only gets us so far, but it's often enough to find the big issues and even annoying structures.
>
> **[1:32](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=92)** Even if you don't take this approach for your API, you can still apply it later as you build your SDKs, which I'll talk about in a later section. So keep this approach in mind, even if you don't want to do it right now. And alternatively, and probably my favorite approach is to use a microframework. You can use something like hapi.js in Node or Slim in [[PHP]] to accept incoming requests, validate the corresponding verbs and URL patterns, and return static HTTP response codes and payloads. In most cases, as long as you're familiar with your framework, you should be able to implement the basic API calls in a manner of hours to a few days. In my opinion, this is the absolute best approach because as we build the real functionality of our API, we can plug it into this framework and eventually watch things come alive together. Now note that I said HTTP response codes. We haven't discussed those yet or how to structure payloads, so you may not be ready for the step quite yet, but we'll address some of those in chapter three. The final and most common approach for validating the API is by documentation. In this case, we want to write the documentation as if the API already existed. That means we need to describe the end points, list out the individual parameters, include the response codes and how you get each, and show the individual fields which are returned in the API. Our goal here is to write documentation that we can hand to other teams and have them accomplish their goals with our API.
>
> **[3:08](https://www.linkedin.com/learning/designing-restful-apis/validating-your-api-14396322?u=76281980&t=188)** You'll most likely want to include some curl commands or similar to show what these calls look like. Most teams should be able to accomplish a rough draft of this documentation in just a few days. And while there are great documentation platforms and tools out there, I suggest a simple [[Google]] doc. It's not because that will be our end structure or format. This is merely for speed. One benefit of this approach is that you can share it with other teams, partners, and even potential customers. They all give you feedback to describe what they want or need to accomplish and if this information will help them. Now, there are two big drawbacks of this approach. First, most teams will want to make this documentation perfect. Your documentation people may want to make sure every phrase is perfect and ready for public sharing. This is not our goal. Our goal is to get feedback from other teams, partners, and customers. We need clear and concise, but not perfect. Second, some people will believe that documentation is the last step of a project. When people see yours, they may believe you're almost done with the API. Make sure to tell them that the documentation is for evaluation and validation, not that because it's complete. And the single biggest benefit to this approach is simple. The documentation is almost done. Now as you build the API, you can make sure to keep this documentation up to date, and it's a small marginal effort, not a massive effort at the end. Your product owners and your customers will thank you.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=0)** - [Instructor] Now that we've modeled and validated our API, we need to get familiar with the medium that we're actually using, HTTP. HTTP is great in that it underlies the entire web. It's well-documented and understood by clients and all the tools out there and is the usual foundation of a [[Representational State Transfer (REST)|REST]] API. Unfortunately, this leads to the first misunderstanding that's worth explaining. HTTP is a protocol. XML is a markup language. [[JSON]] is a notation. There are XML standards that can add structure and meaning to it. And there are JSON specifications that can add context and descriptions to that. Unfortunately, REST is none of the above. It's not a standard. It's not a specification and it's not a protocol. In fact, there are all kinds of debates about what is RESTful, RESTish, all the variations of that. While there are specifications for things like URLs and XML and JSON and HTTP, there are very few formal requirements for REST itself. There are lots of preferences and even more opinions. We'll talk about those later, but for the purpose of this session, but remember, that REST is a generally agreed upon set of principles or constraints. If for better understanding, I use a simple analogy. SOAP, or the previous way of designing APIs, is a lot like getting a mortgage. There's a very fixed process. It's a very detailed process with numerous instructions throughout. There's a ton of documentation upfront
>
> **[1:32](https://www.linkedin.com/learning/designing-restful-apis/rest-and-html?u=76281980&t=92)** to tell you about every step of the process. There's detailed scenarios. If this happens, then do that. And there's complex error handling. If something doesn't happen the right way, there's a detailed process for resolving that as quickly and easily as possible. As an alternative, REST is like borrowing money from a friend for lunch. There's very few requirements. They have to have enough trust that you're going to compensate them, that you're going to return that in some way. There's no documentation at the beginning. As you learn more about the interaction, you learn how to improve it next time around. Most importantly, it's flexible based on the needs of both you and the other party. This flexibility is great. It gives you the opportunity to maybe buy them lunch tomorrow, to return the money, to give them a gift. There's a variety of different options. Unfortunately, this introduces ambiguity. This ambiguity has to be figured out and resolved, which brings us back to HTTP. HTTP is a well understood protocol that is both simple and powerful in its implementation. Every HTTP request and response has two parts. There are the headers and the payload. The payload is the [[HTML]], the JSON, the XML, or whatever comes back that you can view, interact with and process. If it's just HTML, it's usually presented to the user on the screen.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=0)** - [Instructor] In this video, we'll cover the most common HTTP headers and response codes. By default, this information is often hidden because it's simply not useful to end users. Or worse, it's confusing because the end user can't do anything about them. But right now we need to look at them. In order to get access to this information, we need to do one of a couple of different things. If you're a working in Chrome or Firefox, check out the live HTTP header add-on. It's the fastest and easiest way to see the headers on each request. Or if you prefer the command line I suggest using the '-I' command with 'curl'. So we simply type 'curl -I' and the name of the API we're going to hit. In this case [[GitHub]]. We run this command against the GitHub API. We get back a list of headers. In most cases, most of these will be meaningless to you. But if you are an API client that speaks HTTP, these are important. First we have the '200 Response Code'. Everything from here on out, interacting with this API will be dependent on that. And that's because HTTP response codes are important. The first one we have that we just saw with the GitHub API is '200 OK'. Because it starts with a '2', it means the request was successful. There are other codes that begin with a '2' that also means success, but are more specific. We may also run into the '201 Created'. This is used to signify that a resource has been successfully created.
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=93)** For example, earlier, when we are creating a shopping cart, we might return back a '201'. The next up is '202 Accepted'. This is used to identify that the action you just performed is underway, but it's not complete yet. The '202' is often used with systems that use some sort of queuing or other asynchronous process behind the scenes, or the work is started, or it will be started, but it's not done yet. Finally, there's the '204 No Content', which is primarily used when you delete a resource. Because after all, if you just deleted resources, you can't just show it now. The next series is the '300' series. These are pretty simple and are used when a resource moves from its original URL. There are more than two, but these are the ones we care about. '301 Moved Permanently', as in the thing you're looking for is no longer available here, it's now over in a different URL. And most responsible APIs will then give you the URL to then go retrieve it. And the other one is '302 Move Temporarily'. This works exactly the same way, but instead of keeping that new URL indefinitely, you may want to check back occasionally to see if the old one is available now. Text we have the '400 Response Codes'. The '400 Response Codes' are actually my favorite because when used properly, your API can be incredibly descriptive with just a bites. The first error code or the '400' denotes the client that the most recent attempt failed
>
> **[3:05](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=185)** due to the client itself. While this is a perfectly valid code to use, I recommend being more specific whenever possible. One way to get more specific is with a '401'. The '401 Authentication Required Error' says authentication is required. It doesn't signify whether the operation would have worked or not. Simply that authentication is required before you can do anything else. Next, we have the '403', which is almost the exact opposite. In this case, the user was authenticated, the request was understood, but they explicitly failed. You might see this if you attempt to delete a resource with incorrect permissions. Finally, we run it to the commonly seen '404 Response Code'. This signifies that whatever resource you are looking for was not found. It doesn't mean it did exist and you didn't find it. It means it does not exist. That's a key thing to remember. Overall, there's really five classes of HTTP response codes. All of the '200' mean success. All of the '300' mean redirect. All the '400' means the client had an error as in you interacting with the API had an error. The '500' series means the server itself or the API has an error. From a developer's point of view, there's absolutely nothing you can do to fix a '500' error. That's entirely on the server side. And the one we skipped was a '100' series. While they're available, you're unlikely to see them in the world. As you build your API, you may want to create additional response codes
>
> **[4:38](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=278)** to be more specific to your errors or even your industry. Don't, response codes work so well because they're standard across all industries and widely understood. So that understanding that someone gains from another API in another industry can immediately apply to your own. If you're creating your own response codes, you lose that. The next header we want to look at is the content type. You can see that on the third line here. This simply identifies the type of payload being provided by the server. For normal web browsing, it'll normally be text [[HTML]], but for APIs, we'll normally see application [[JSON]] and potentially text XML. Of course, that describes what the payload is not how it's structured. If we want to understand how it's structured, we need to look at the media type. In this case, 'X-GitHub-Media-Type. Media types are specifically named and structured payloads that allow a client to be customized to handle them. In this case, the 'X-GitHub-Media-Type' tells us that it's the GitHub media type version three. There are specifications for media types that are under active development. We'll cover those later. Finally, we have some headers that are costumed to the particular API that we're interacting with. In this case, the GitHub API gives us information on the rate limit, specifically how many requests are still available and when they reset. It's worth knowing that these things are available sometimes
>
> **[6:11](https://www.linkedin.com/learning/designing-restful-apis/http-header-and-response-codes?u=76281980&t=371)** and entirely optional. This is custom to the API we're using, or in this case building.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=0)** - [Instructor] As I noted earlier, [[Representational State Transfer (REST)|REST]] is not a formal specification or standard itself, but it often uses some standards and some principles or constraints. In this video, we'll talk about those specific constraints. The six constraints serve to establish the expectations and create some structure and patterns around the flexibility of REST These are not hard and fast rules, which should be considered guidelines and best practices for implementation. Like any best practices, you can choose not to follow them, but it may make your API harder to understand, use, and eventually adopt. The first constraint is that an API should be designed for a client-server architecture. This is the internet, so that shouldn't be too surprising. The single biggest benefit to the setup is that it allows us to vary the implementation details, upgrade paths, and [[Scalability]] of each independently of the other. The second constraint, that's that the API should be stateless. This allows each and every request to stand on its own and be processed or rejected independently of any other request in any order that they're received. The ability to process requests independently of each other allows us to isolate request failures and still continue and scale our systems better. Specifically, this gives us the ability to add more servers when our API is successful and as we get more users. We don't have to worry about shared sessions, sticky sessions, other complexity that comes through a shared state.
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=93)** This makes our systems very reliable and fault tolerant, and as a result, more stable overall. The third constraint is cacheability, or how to detect if a request response pair can be cached. It requires that each message describes if it can be cached and for how long. The biggest benefit of caching is to improve network performance and application usage overall, by reducing or in some cases eliminating requests. After all, the fastest request is the one you don't have to perform. When we consider this in relation to APIs, we encounter the concept of idempotency. This is the idea that you can make the same request multiple times, and you end up with the same result every single time. And it's the same result you got from the first request. An idempotent request would be viewing of one of your [[GitHub]] repositories. You can request it all day long, and nothing will change. Since nothing will change, this is likely to be cacheable. Alternatively, there are operations which don't leave the server in the same state, such as creating a user. If you run the command once, you create one user. If you run it N times, you create N users. It's not remotely the same. In this case, the first three build into the fourth constraint, and this is a layered system. Basically it means that your client should not be built on the assumption that it's communicating directly with the server. There can and often will be additional layers between the client and the server itself.
>
> **[3:07](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-constraints?u=76281980&t=187)** Those layers can be caching and a variety of other components. We do this on the web every day when we have [[Web Servers]] talk to database servers. Most of the time, this just works. Unfortunately, it can often introduce invisible dependencies, for example, web applications. When you first build a web application, it's common to connect to a database directly by IP address instead of some local domain name. The problem with this is that the odds are that the IP address is going to change at some point. It could be by accident, by a switch failing, or it could be on purpose as you got a new server. Either way, you've broken things by depending on the network configuration instead of using something as simple as DNS. By not counting on the client interacting directly with the server, we can insert components and even entire subsystems between the two without disrupting the flow or the application itself. This architecture gives us the ability to add things like logging, access control, and caching to the system without architecting them in on day one. The [[API Management]] companies like Apigee and MuleSoft and many others take advantage of this aspect, to insert logging, access control, and even load balancing between you and the actual API. Basically, layers give us flexibility to improve and evolve our system as our requirements and our architecture changes.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=0)** - [Instructor] In this video, we'll talk about the final two constraints for [[Representational State Transfer (REST)|REST]] API. The fifth constraint is optional, but probably the most powerful. It's the concept of code on demand. The concept is that when a client requests a resource, it also receives the code to act upon it. The real power is that the client doesn't have to know what is in the code. It just has to understand how to execute the code. The primary benefit is that the API can grow and extend itself without requiring the client applications to upgrade. We can get this new functionality for free. At first glance, executing arbitrary third-party code sounds like a security nightmare, and it could be, but can you think of anywhere on the web or anywhere in your application that's already doing this? Most of the internet does this with [[JavaScript]]. When you load an application such as Gmail in your browser, it also retrieves the JavaScript required to interact with that page. Your browser doesn't even need to know what's in the JavaScript. It just needs to know how to execute it. More importantly, as new features and functionality become available, they're immediately available to the end user without requiring a browser upgrade. Code on demand isn't nearly as scary as it seems. Now let's cover the final and probably the most important constraint of all, uniform interfaces. There are four key principles that make up a uniform interface. First, there's the concept of identifying our resources. Each resource should be uniquely addressable
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=94)** by a particular URL. Generally, there will be one and only one way to access this resource, but that is not a hard requirement. Think of the buildings on your street. They're also uniquely addressable. That's how they get mail. Next, you need to be able to manipulate or interact with those resources through those representations, through those URLs. Every interaction with a given resource should happen through the identifier we already gave it. It's worth noting that this isn't just adding an ID parameter at the end of the URL, but having the ID as part of the URL. It's a subtle but important distinction. The next principle of uniform interfaces is a concept of self-descriptive messages. We've already seen this a little bit with caching, but this is important because by making the messages standalone with their own processing and caching information, we can create and use different types of messages very simply. Our client only needs to know how to retrieve and execute those instructions like the JavaScript code on demand that we already covered. The final principle of uniform interfaces is called hypermedia as the engine of application state, also known as HATEOAS or HATEOAS, which is the worst name for a children's breakfast cereal ever. Fundamentally, it's a choose your own adventure book. If you've never read a choose your own adventure book, you don't read the pages in consecutive order, 1, 2, 3, 4. Instead, you start on page one and every time character is faced with a choice, you have the option to turn to one page for one choice and a different page for another choice. And the pages you're allowed to go to
>
> **[3:07](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=187)** are based entirely on the choices you have at that moment. This is how hypermedia works. At every point in the API, there are different things you can do with the API. And instead of having to go to the documentation to figure out what's available, each and every link is available within the API. So what does this look like in practice? Here's an example from the [[GitHub]] API. So we just hit the API just like we did before, api.[github.com](https://github.com), and now what we're going to see are a series of links. This is incredibly powerful. Notice that each of these URLs, let's look at the keys_url, and this is the results from the GitHub API. Notice that each of the URLs has a specific named item that we can reference. Our client application doesn't have to remember how to create the user URL. It can simply ask the API for the URL that is based on this name. If you think about it, that's how humans work too. We don't remember what the logon URLs is for [amazon.com](https://amazon.com). Instead, we go to [amazon.com](https://amazon.com) and we skim the page until we see a button labeled sign-in, login, or something similar. APIs can work exactly the same way. Also, we don't have to memorize the link to get to the book section of the site. Again, we visit the web page and skim for a link labeled books. When our client applications don't have to remember the specific URLs for each and every action or link we want to visit, our clients can be simpler, kind of dumber, and as a result, much more flexible.
>
> **[4:43](https://www.linkedin.com/learning/designing-restful-apis/rest-apis-code-on-demand-and-uniform-interfaces?u=76281980&t=283)** More importantly, as your API adds additional functionality, you can just add it and our clients can update automatically. And all this comes from the simple constraint of uniform interfaces.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=0)** - [Instructor] Now that we've covered your nouns and verbs and what [[Representational State Transfer (REST)|REST]] is, let's talk about some of the common API [[Design Patterns]] that you'll use the tie them all together. We'll start with authentication and authorization, which are affectionately known as authn and authz. First, we have to remember that they are different. Authentication is establishing who you are. You do this every time you use a website with a username and password. When I log into my [[Banking]] website, I established that I am Keith, and it allows me to continue. But that's not where the process stops. Generally, once you establish who you are, it's important to verify what you're allowed to do, or your authorization. Most people confuse the two, and they design permission systems based on every user having one specific set of permissions. For example, when I log into my bank website, it only shows me my accounts. Those are the ones I'm authorized to see. If I see your bank account, that's a huge security breach. The same applies in APIs. Many APIs have tiers of access based on the user's role, their group membership, regular versus admin users, payment or subscription level, and a variety of other things. This authentication and authorization can be implemented in a variety of ways. First, we have an API key. This is a long string issued by the API provider and either appended to the URL or included as a header in the request. This is by far the simplest and easiest way to deal with from any programming language, framework, or even curl on the command line.
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=94)** There are two downsides we have to consider though. First, if we include this key in the URL, it's convenient, but it's going to be captured and logged by every cache, router, and device between us and the API itself. This is not secure. If we move the key to the headers, that's much better, but we're still stuck with the problem that this key can't be rotated easily if it's compromised. We may have to update all of our applications, which may require redeployment in a variety of different places. The second common approach is to roll your own protocol. The benefit to this is, well, there are none. There are hundreds and even thousands of people who have struggled with, failed, succeeded, failed again, and come up with some solid solutions that work. If you build your own encryption or security and it's compromised, I suggest you update your resume because you will be looking for a new job. Further, think of the training. If you have your own custom scheme, you guarantee that your new team members, customers, and partners have never seen it before, and you'll have to train all of them on it before they can do something useful. And finally, remember that you won't have the tools, other developers, or existing libraries available. All the things, all the resources you use to accelerate your own development simply don't exist. You're stuck building everything yourself. It's like a mechanic who builds their own wrenches, it doesn't make sense. The final and the most common of the API authentication approaches is OAuth. OAuth is actually an authorization protocol.
>
> **[3:07](https://www.linkedin.com/learning/designing-restful-apis/authentication-and-authorization-14392976?u=76281980&t=187)** It doesn't define how you authenticate, just that you must authenticate with a trusted entity. The access token you get back describes or internally maps to a description of what actions you are and are not allowed to do. That's where the authorization comes in. At this point, OAuth 2.0 is the recommended approach for APIs. It's not always well understood, but it's widely established and used by your favorite APIs. There's a massive ecosystem of tools, libraries, documentation, and even training options around it. Unfortunately, it's not always the easiest or the fastest. And in all seriousness, it's not something you want to build yourself. There are tons of commercial and open source solutions out there. Try those first. To be fair, I could spend quite a bit more time talking about this, and I do in a separate course. Check out the course catalog to find my session on OpenID Connect and OAuth 2.0, and we can spend a couple of hours working on that specifically. Now that we've covered authentication and authorization, let's cover the most contentious topic of all in APIs, versioning.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=0)** - [Instructor] Now, for the single most contentious and hotly debated issue in all of API design, versioning. While I value being semantically proper as often as possible, I've designed and built APIs for production usage at massive scale, both in terms of traffic and the number of people using it. So I will always push for clarity of purpose and ease of use more than anything else. There are two primary schools of thought here, versioning in the URL or versioning via the accept header. First, let's look at the accept header. When you make a request to an API, you should have the accept header, which tells the API these are the data types and the formats I understand, please send one of them. This is called content negotiation. At the first level, the data types could be as simple as XML versus [[JSON]]. That's where most APIs will begin and end, and that's acceptable as long as you can parse the result. At the next level, that data type could be a specific type or structure of JSON, or a media type. We'll cover the details of that in the next video. But for now, know that immediate type is simply a well-defined structure that both the client and the API know how to handle. At the third and final level, we can have media type versioning. This gives the clients the ability to say, "I want version three of this media type "of this particular flavor of JSON back," and the API knows how to respond. Semantically and according to the original version of restful APIs, this is the ideal. This is what we can and should strive towards
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=93)** because it allows the client application to know what versions it can use and ask for the best one for its needs. It's important to remember that that is what the accept header is for, it's for defining how we'd like the data. That said, it's hard to do not because JSON is hard or media types are hard, but because we can lose clarity. This is what one of those requests looks like. At first glance, this looks easy to understand and mentally process but notice that the URL, which is what we normally pass around and share, is missing a piece. From the URL, we know what data we're getting, but we have zero understanding of which version. Therefore, while it is considered impure by a lot of API designers, I opt for the second form of versioning, in the URL. When you look at the URL of one of these requests we know exactly what the developer's asking for and expecting, we can copy and paste the URL. And even if someone forgets to include the headers, there's no question or additional effort required to figure out what data is involved. In practical terms, this may look like a V1 in the URL, or even something like this from the [[Twilio]] API. The 2010-04-01 portion of the URL is the version. Here's a fun little side note about versioning, do you think Twilio hasn't changed their API since 2010? Of course they have, I can think of a half dozen major changes, and additions just while I worked there. The important thing to understand is that none of those changes have broken backwards compatibility.
>
> **[3:07](https://www.linkedin.com/learning/designing-restful-apis/api-versioning-best-practices?u=76281980&t=187)** Therefore, they never need to change the version. So, regardless of the approach that we choose, we still don't get away from content negotiation, but we've eliminated a little bit of ambiguity from the process. Once again, this strays from the (indistinct), just a little which will annoy some people. That said, it's consistent with many other APIs out there but even more important is consistency within your APIs. If your organization is launching numerous APIs, make sure you do it the exact same way every single time. This means that as your users, whether they're internal teams, or partners, or customers as your users gain understanding on how the API is designed and works, consistency means that the understanding can be applied over and over again. No one has to relearn how to do things. In summary, either approach is acceptable. Header base is more proper, URL based is more explicit. Regardless of which you choose, consistency and clarity should be your goal.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=0)** - [Instructor] During this course, we've spent a long time talking about how to identify the key interactions with your API and how to design them, but we've left out one key piece, the actual data. We haven't talked about how to choose what data needs to be in the payload and how to structure it. In most cases, people will say, [[JSON]] and name value pairs are fine, and not worry about anything else. And I admit, that the flat key value pair structure is incredibly easy to consume. The drawbacks are that it becomes harder to extend and almost impossible to add detail about the data. Remember from earlier, one of the [[Representational State Transfer (REST)|rest]] constraints is uniform interfaces. And within that, our messages should be self descriptive. Therefore, we should do something more expressive than simple JSON. So, let's talk media types. A media type allows us to use a commonly structured JSON file to move data back and forth. The biggest benefit here, is that there's a growing ecosystem and usage patterns around each of these formats. None of them have a huge following yet, but there are libraries, active discussions and examples using all of them. Let's walk through three of the more popular media types, so you can start to understand the trade-offs. First, we have collection JSON from Mike Amundsen. This is designed specifically to handle, read, write operations, to query a set of objects and manipulate them. This is what a typical collection JSON payload looks like. We have an array of items here,
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=93)** data about those items and links to additional references on those items. While this is not explicitly designed to represent a single item, it can, by rendering it as a collection of one. If you have a lot of group operations, this may be an ideal media type for you. But usually it's not used alone. Second, we have HAL, a hypertext application language, which is my favorite media type. It breaks the data payload into two pieces. First, it represents the data structure of the resource that we're working with. Second, it has an underscore links section, which then gives us references to other related resources and how to interact with those. It's simple but effective. This is what a sample looks like. So, here we have the information, currently processing and ship today. We have an underscore link section, which then gives us additional information, that we can retrieve on our own. This is very close to our choose your own adventure story that we were looking at before. These are all the links that lets us choose our own adventure from here. The drawbacks are two-fold, it can be a little verbose with all the fields. But realistically, it's not significantly worse than any of the others. More suddenly though, the link section is an odd construct. It's describing the resource on how to interact with it, but it's outside the context of the data itself. For example, when you read a book, when there are footnotes that are easily forgotten and rarely explored as a result. On the plus side, since HAL has been around for a while and has attracted some interest,
>
> **[3:07](https://www.linkedin.com/learning/designing-restful-apis/choosing-media-types-and-processing-content-14394323?u=76281980&t=187)** there are helper libraries in a variety of languages and frameworks, if you go this route, they may be helpful. Finally, we have the Ion Hypermedia Type. As a disclosure, this is led by a colleague of mine from my day job. And I have not personally used it in production like the other two, so feel free to be as critical as you like. This is what Ion looks like. While Ion feels similar to HAL, the big difference is that the context and the descriptive information are not separate from the data that it describes. Unlike HAL with a link section, the additional information is adjacent to the data. In terms of processing, this is likely a marginal improvement. But in terms of understanding, I think this is much better. That said, it's one of the new media types, so the community around it doesn't have the same tooling integrations, et cetera. Consider this a strong newcomer with a lot of potential.

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
> **[0:01](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=1)** - [Instructor] Hypermedia is a combination of two concepts, hyper and media. Let's explore the media part of that first. We need to remember that information can exist in a variety of formats. Think about watching your favorite sport. There may be a video stream where you can watch it live. Then there's the announcer's commentary that you might hear on the radio. There are text summaries before and after. Video clips of the best plays and pivotal moments that will be diagrams of particular place or events in the game. We talk about the overarching story of the sport, all those things combined together to deliver rich multimedia experience that can appeal to a variety of audiences in a variety of ways. The hyper part of hypermedia means that the media isn't linear. For a sporting event, you watch it beginning, middle, and end. And it doesn't have meaning in really any other order. Combine these concepts together, and you have the modern web experience. It's effectively a choose your own adventure book. You don't read a choose your own adventure book in order. Instead you start on page one and every time you're presented with a choice, you are led to a different page. It goes on and on until you complete the story. Combining this with our uniform interface's constraint and the self descriptive part of that, we can think of our API as a single entry point or the base of the API. Then as we interact with different resources, the API itself presents us with the additional links or paths to take the next actions. Even better, there are different discovery documents
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/hypermedia-approaches-14398158?u=76281980&t=93)** and formats that are currently under development that might tell our API client how to interact with the API. This is what it looks like in practice from the [[GitHub]] API. We enter through a fixed entry point, api.[github.com](https://github.com), we make a request, we get back a series of URLs. Now we can stop and explore any of these such as the feeds URL, and make a request to that. Now, every set of options that we get are contextually based on where we are and what we're doing. Alternative to using postman, you could also do the same thing from the command line. Here, we'll just make a simple request to the GitHub API. And you can see we get back the same list of URLs. And once again, we can go ahead and grab any one of these URLs. So we can say the events URL. We can make the next request to that URL. And we could see that the content has changed, and more importantly, the URL's available from here have also changed. So once again, the API is giving us information and the options that are available from the context of where we are and what we're doing at any given time. Most of the major APIs that you see and hear about now are doing something similar. So they're usually using one of the media types we talked about earlier. Okta, for example, uses how throughout.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=0)** - [Instructor] Before we move completely out of the API design aspects, I want to talk about one of the unsung heroes of API usage, headers. We talked about headers much earlier in the course with regards to HTTP response codes. And then again in relation to versioning, but let's stop and really consider two more aspects, content negotiation, and caching. First, content negotiation is the idea that an HTTP client, whether it's a browser or an application, can make request to the server and together they can find a format they can both understand. To see this in the real world. If you've ever traveled internationally. When you approached the ticket counter for your flight or your train, the clerk may greet you in multiple languages. In Montreal, for example, they say, "Hello! Bonjour!" And then you greet them back. They know what language to continue in based on your response. They've effectively said, do you speak English or French without ever having to explicitly ask it. Clients and servers do the exact same thing with the accept headers. The client says, here are the formats I understand. And the service says, great I can support one of these let's continue. You might approach versioning the exact same way. The best part of this content negotiation is that this happens implicitly behind the scenes as you navigate the web. As we're building APIs, we need to be aware that that's happening and sometimes even do it ourselves. Luckily, there are libraries and tools to help with that. The final header concept I want to cover is caching. Caching is vitally important on the internet in general,
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/advanced-http-headers-content-negotiation-and-caching-14396321?u=76281980&t=94)** and within your API specifically. Remember the fastest request you ever have to handle is the one you don't have to. The specific header used here is ETag, which is generated by the server and returned to the client. This is how it works. A client makes a request just like normal. The server generates the response and generates an Etag to go along with it. Quite often, this is just a hash of the response. Now, before the client makes its next request, it uses the head verb to just get the headers, including the ETag. If the data is the same, the server returns the same ETag. The client recognizes this and the request is complete. While this may initially seem like a lot of extra effort, you just reduced the work from retrieving and parsing the entire payload into a few dozen bites and zero work for the server. That's a win overall. Now, alternatively, if the data has changed, the server returns a new ETag, the client recognizes this, and then it makes a full request as expected. Now, in this path, you suffered a small delay in terms of the extra request, but for some data sets, you'll make that up in bandwidth and time-savings over and over again. If you're building mobile applications with potentially unstable connection, this is even more important.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=0)** - [Instructor] Now let's talk documentation. Before we get into what we should do, let's kill off some bad ideas first. If you're distributing documentation via PDF, please stop. While your intention might be great, you'll have the problem of multiple versions floating around, no one knowing which version is right, and your customers never knowing if things are quite right. If you really have a 100% private API and you don't want to share your documentation publicly, a [[Google]] site or similarly password protected tool is much better than a PDF. Alternatively, if you're posting your documentation on [[WordPress]] or some other CMS, that's marginally better, but still not great. When your API changes, the first question every user will have is, what has changed or what do I do differently? If advanced users can't diff the new docs with the old and understand what has changed, you're hiding vitally important information, probably by accident. Now let's consider some better options, but before we talk tools, let's talk goals. What are our goals for our documentation? First, whatever tool we use needs to be code snippet friendly. These are API docs. They will have code and it must be simple and easy to copy/paste and experiment with the code. Syntax hiding is absolutely mandatory. Next, we need [[Version Control]]. This is helpful to our users, which I already noted, but it's also important to our team. As things change, improve, or expand, we need to put the same rigor into our documentation review as we do for our code reviews.
>
> **[1:34](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=94)** If your API is revenue generating, remember that mistakes here will cost you money. Next, we need something that's easy to update. While some documentation writers are comfortable in an IDE or even just Vim, not all of them will be. We absolutely need things to be as simple and straightforward for them as possible. Finally, it needs to be searchable, not only internally on the site, but Google needs to be able to crawl it too. This is a core requirement for me personally, because of it's not findable it does not exist. Thinking about tools, a Wiki is actually a strong option here. Whether you're looking at MediaWiki, [[Confluence]] or something else entirely, most have syntax highlighting built in, or as a simple plugin. Obviously, since it's a Wiki, version control is built in, so that's covered. Even better, the skills required to maintain the site are very minimal. Overall, it's very good. In fact, search friendliness is very high for MediaWiki. For Confluence, we have to be a little bit more careful to make sure that this is an internal or an external site. The only real downside of a Wiki is that there usually isn't a staging or a review workflow. When you're launching a new component of your API, there's not an easy way to say don't publish this page or section, or even, just show it to these people for review. Fundamentally, that's not a huge drawback, and a Wiki is probably better than what you're doing now, so don't let that derail your efforts. Alternatively, there's some great static site generators out there.
>
> **[3:08](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=188)** I've personally used Jekyll, which is Ruby based, and very simple to configure and start loading content. Syntax highlighting is very easy via plugins. It doesn't have version control built in, but if you're storing the pages in [[Git]], you already have that. In fact, Git will let you have different branches for different versions of the docs and even private branches from other repositories. So it becomes relatively easy to maintain, and definitely search engine friendly because it's just static [[HTML]]. The downside is that you're still working in raw text. There aren't pretty web-based text editors or something similar, so that may be a challenge for your documentation team. But once again, that's not a huge drawback, so Jekyll is probably an improvement over what you're doing currently. But right now my favorite tool is called Slate. It recently spun off the company TripIt. It's Jekyll based, so you have all the benefits as before, and some of the cons also, but they made some significant structural improvements. First, they've made it very easy to configure and deploy. It can be done usually in under five minutes. Next, they've added some simple [[JavaScript]] plugins and CSS to add tabbing for different programming languages and examples. So as a result, you can have one text description and then display different snippets of different languages right there in context with the text, and then you can toggle between them. More subtly, this is also done via URL in the documentation, so you link someone directly to the [[Java]] or the [[PHP]] or the Golang example that they need. And just remember that our goal here is that
>
> **[4:42](https://www.linkedin.com/learning/designing-restful-apis/documentation-approaches-14398162?u=76281980&t=282)** we want people to be successful with our API. That means that they can find what they need, that it makes sense, and that it's complete and accurate. Anything else that the detracts from those is probably a distraction.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=0)** - [Instructor] The philosophy goes something like this. You shouldn't need an SDK or helper library to use your API. If you use the HTTP verbs, and response codes properly, you use [[JSON]] for your payloads, and the common authentication method, a simple HTTP library, and JSON parsing libraries should be enough. While I'd love to go with that, most of us are doing something a little bit more complex with our API. In fact, if you're doing something more complex or you need to wrap larger components, workflows or advanced concepts, an SDK might make sense, but I don't recommend SDKs for everyone. You should only have an SDK if you can make your users lives easier in some tangible way. I use the acronym SPOIL to remember that we want to spoil our users with a great experience. This breaks down into five words. First, we want our SDK to be succinct. As my 11th grade English teacher said, "Concise but precise." We want people using our SDK to write less code to accomplish the right thing. Second, our SDK should be purposeful. We took great care in designing our API, and writing our documentation. We should do the same for our helper library because the SDK will be the primary interface for many of our users. In fact, we should make sure it helps them with the most common, and important scenarios, not just a simple wrapper over our API. Next, it needs to be open-source. Odds are your SDK won't quite do everything that everyone needs all the time. By being open-source,
>
> **[1:33](https://www.linkedin.com/learning/designing-restful-apis/sdk-design-considerations-14396316?u=76281980&t=93)** people can pass back extensions, fixes, and clever ideas that you can accept or reject as appropriate. Next, the I stands for idiomatic or reflecting the language it was written in. That means a [[PHP]] SDK should have naming conventions, structures and patterns common to PHP. It shouldn't look and feel like [[Java]]. And finally, the L stands for logical. The SDK should be logical. That means understanding gained, and patterns used in one component should be reusable across all others. The more time and energy people have to spend to understand your code is less time they can spend solving their problem. This is also called the principle of least surprise. We want to surprise people in the smallest ways possible. All of this comes back to our goal. We want to make our users' lives easier in some tangible way. If providing an SDK can let them move faster, easier, or we can wrap complex concepts of workflows, we should definitely consider it. And the final thing to remember, before you start building SDKs, and your favorite languages, ask your existing users which ones they need? You could build the perfect [[React.js|react]] library, but if nobody uses it, what was the point? Your time would have been better spent elsewhere or sometimes the other side of it is even worse. You build a library that one tiny but vocal customer needs, and no one else cares about. Be very careful about the libraries you choose to build and support.

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
> **[0:00](https://www.linkedin.com/learning/designing-restful-apis/next-steps-toward-designing-a-restful-api?u=76281980&t=0)** - [Keith] In our closing here, I'd like to say I hope you enjoyed this course in designing RESTful APIs. To take some next steps, let me share some useful options. First, I would suggest checking out your local user group to see what API topics come up. In Austin, we even have an API specific meetup in addition to the various meetups who cover API-related topics regularly. For online resources, I would recommend anything written by Mike Amundsen or from the API Craft mailing list. Mike is the author of "Collection+[[JSON]]," which we talked about earlier. Both are great places to collect and explore thoughts from some of the best and brightest. Further, there are a number of API courses available in the course catalog here related to building and testing APIs. These are hands-on with code that you'll build during the course. Next I'm a fan of my own book called "A Practical Approach to API Design," which is available via [theAPIdesignbook.com](https://theAPIdesignbook.com). Next, my coauthor and I have a newsletter where we collect relevant news from the API world, both technical and business oriented topics and share it with you every Thursday. We also share the same information via Twitter account called APINewsletter. Definitely check both of those out when you get the chance. So good luck and happy hacking.

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