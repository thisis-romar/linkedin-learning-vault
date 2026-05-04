---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: software-architecture-breaking-a-monolith-into-microservices
url: "https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices"
duration_minutes: 67
duration: 1h 7m
level: Intermediate
updated: 4/20/2021
learners: 24368
skills:
  - Software Architecture
  - Microservices
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHFp6CFgAZ9_Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1618509860115?e=2147483647&amp;v=beta&amp;t=PzFPUyrSSYjtim73LLh8wHdITScS--JrFOqJnJuUV6E"
linkedin_topic: Software Development
learning_paths:
  - '[Microservices Foundations Professional Certificate by Kong](../../Paths/Software%20Development/Professional%20Certificates/Microservices%20Foundations%20Professional%20Certificate%20by%20Kong.md)'
prev_courses:
  - '[Microservices- Design Patterns](Microservices-%20Design%20Patterns.md)'
path_nav: '[{"path":"Microservices Foundations Professional Certificate by Kong","position":3,"total":3,"prev":"Microservices- Design Patterns","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/software-architecture
  - skill/microservices
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Software%20Architecture-%20Breaking%20a%20Monolith%20into%20Microservices.md)

![Software Architecture: Breaking a Monolith into Microservices](https://media.licdn.com/dms/image/v2/C4E0DAQHFp6CFgAZ9_Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1618509860115?e=2147483647&amp;v=beta&amp;t=PzFPUyrSSYjtim73LLh8wHdITScS--JrFOqJnJuUV6E)

# Software Architecture: Breaking a Monolith into Microservices

> Microservices are the increasingly popular software architecture choices when creating a new application, but what about existing applications? Does it make sense to split them up into microservices? And how would you go about breaking up monolithic applications? In this course, Daniel Khan covers effective approaches for adopting microservices, taking a high-level look at the fundamentals without

> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices) | 1h 7m | Intermediate | 24K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Embark on a journey to refactor your architecture](#embark-on-a-journey-to-refactor-your-architecture)
- [**1. Understand the Status Quo and the Project Goals**](#1-understand-the-status-quo-and-the-project-goals) (4 videos)
  - [Welcome to your new role!](#welcome-to-your-new-role)
  - [Start with the "why"](#start-with-the-why)
  - [Defining the project scope](#defining-the-project-scope)
  - [Mapping out the current architecture](#mapping-out-the-current-architecture)
- [**2. Splitting Capabilities into Services**](#2-splitting-capabilities-into-services) (9 videos)
  - [Design mistakes and how to avoid them](#design-mistakes-and-how-to-avoid-them)
  - [Refactor or rewrite?](#refactor-or-rewrite)
  - [Choosing your first migration target](#choosing-your-first-migration-target)
  - [Splitting out your first service](#splitting-out-your-first-service)
  - [Zero downtime migrations](#zero-downtime-migrations)
  - [Migrating interdependent, complex capabilities](#migrating-interdependent-complex-capabilities)
  - [Providing a migration API layer](#providing-a-migration-api-layer)
  - [What about the front end?](#what-about-the-front-end)
  - [Making the final step](#making-the-final-step)
- [**3. Required Operational and Organizational Maturity**](#3-required-operational-and-organizational-maturity) (5 videos)
  - [It's not just about code: Meet Mr. Conway](#its-not-just-about-code-meet-mr-conway)
  - [Provide up-to-date API documentation with Swagger](#provide-up-to-date-api-documentation-with-swagger)
  - [Streamline cross-team collaboration with Inner Source](#streamline-cross-team-collaboration-with-inner-source)
  - [Continuous integration and deployment](#continuous-integration-and-deployment)
  - [Why you need monitoring from the very start](#why-you-need-monitoring-from-the-very-start)
- [**Conclusion**](#conclusion) (1 videos)
  - [Apply your knowledge](#apply-your-knowledge)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Embark on a journey to refactor your architecture](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=0)** - [Instructor] When creating a new application today, [Microservices](../../Skills/Software%20Development/Microservices.md) are the [Software Architecture](../../Skills/Web%20Development/Software%20Architecture.md) of choice and much has been said and written about it already. But what about existing applications? Don't they deserve some service architecture too? Does it make sense to split them into Microservices? And how can this work? I made this course to answer these questions and guide you through your Microservice migration journey. We won't talk about container on times or [Kubernetes](../../Skills/DevOps/Kubernetes.md) and it does not matter which programming languages you know. After taking this course, you will have a holistic general understanding of the technical and organizational challenges that you need to tackle to be successful. I am Daniel Khan for about 20 years. I've been working as a developer at Architecting Tech. Join me now on my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course about splitting up one of these into Microservices. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (3), [Software Architecture](../../Skills/Web%20Development/Software%20Architecture.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 1. Understand the Status Quo and the Project Goals

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to your new role!](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=0)** - [Instructor] Of course, I could now start throwing everything that was ever written on this topic at you but I think that's not why you're here. Maybe you aren't even yet sure if [Microservices](../../Skills/Software%20Development/Microservices.md) are the solution to your problem at all. Likely you ask yourself how to get started in the first place or if there is a specific process you could follow. Maybe you are looking for an overview on which challenges might come along on your journey. Likely you're also curious about patterns you could follow when separating applications into services. In this course, I want to teach you a specific way of thinking that will help you to approach this topic pragmatically and will enable you to solve specific problems as they come along. To kick this off and make things more relatable, I want to sketch out the scenario that will guide us through this course. You have just been hired as a chief software architect at the company called Cheapr and you know already that they want to move to Microservices. During your interview, and also by doing your homework before starting the job, you have already learned a few things. Cheapr is a price comparison website. It lets you find the cheapest prices for large variety of items from hundreds of retailers. As so often, it was initially built by the founder, now the CTO, 10 years ago and has grown considerably over the last years. Today, the site features around 4 million items from different retailers and it's imperative that prices, as well as availabilities, are always up to date. This is not a shop.
>
> **[1:32](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=92)** Customers cannot buy on the site, but they get prices, item descriptions, and availabilities, and also a link to the actual retailer shop to order the item online. These conversions are also how Cheapr makes money. Right now, there are about 90,000 registered users and 2 million visits per month on average but of course there are peak periods like on Black Friday where people visit the site to hunt for the best bargains. You know already that it's a monolith. It grew in size and functionality over the last few years as new features were implemented. The technology does not really matter in this context. Think something like [Java](../../Skills/Software%20Development/Java.md) enterprise or even just a large [PHP](../../Skills/Software%20Development/PHP.md) site, using a framework like Symfony. Of course, this monolith contains a whole range of different design paradigms and technologies (indistinct) at a given time, as well as an half executed attempt to use no [SQL](../../Skills/Data%20Science/SQL.md) for the items. The whole platform runs on a set of VMs in a data center, sharing some central [Databases](../../Skills/Software%20Development/Databases.md) as a single source of truth. Currently around 80 engineers are working on the code. They're split into around four teams to take care of different parts of the application. Additionally, there is a team that does testing and another that takes care of deploying and running the site. There are also six team leads holding all of this together. They're all reporting to the CTO. Does this sound familiar to you? This is a typical setting, a startup,
>
> **[3:06](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=186)** the grew in code and team size, as well as in complexity as the added new features and staff along their journey. There's technical depth due to quick and dirty fixes as well as architectural flaws that just happen if you need to get things done fast. Yet there has to be a reason why the hired you and you know already that they want to tackle a few problems. Let's look at them next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** cto (2), php (1), sql (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1), find (1), php (1)
> **Speakers:** - [instructor] (1)

#### [Start with the "why"](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=0)** - [Instructor] During your second day on the job, you gather key engineers, the team leads, product managers and the CTO to better understand the current challenges. You know already that a re-architecture and a move to [Microservices](../../Skills/Software%20Development/Microservices.md) is on the table. But you still don't know exactly why. And it seems risky to start going while not really understanding the problems they are trying to solve. How would you ever be able to measure if you succeeded if you don't have to go and let it down? So you ask the people in the meeting in a brainstorm fashion and they come up with the following challenges or goals and you put them on a whiteboard. So the first thing you hear is they want to move everything to the cloud. But it's unclear to you why this came up. What are they trying to solve with this? Why do they want to do this? So you add one more column and call it value. And you add a ranking between zero for low and five for high. They should turn the focus to the only thing that really matters. The question, why should we do it, should always be answerable with a measurable business impact. So let's look at the cloud migration topic again. Sure, this can have a business value as moving stuff to the cloud may possibly and eventually reduce costs. But no one has a real number for this. These are just assumptions. And would any user care about the fact that everything runs now in the cloud? Definitely not. So let's be generous and give it a one. Then you hear that the design looks old,
>
> **[1:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=93)** it's not responsive and also not very user-friendly. Having a modern responsive UI is good, but actually cheapest market leader and there is no competition that can outshine them with a slick UI. So while this matters, it may still be just a three. Their plans to release native apps for [Android](../../Glossary/Sdk/Android.md) and iOS. It's a fair vision might make sense, but right now there is no data at all if customers prefer native apps over proper responsive website. It's more likely that some engineers are pushing for it because they are looking for change and want to try [Mobile Development](../../Topics/Mobile%20Development.md). So this is rather a tool. Someone says that decide to run and [Kubernetes](../../Skills/DevOps/Kubernetes.md). Really, that's the goal? Is there any business value attached to it, or is it maybe because some of like shiny new things? Kubernetes is a great platform, don't get me wrong. But if your answer is Kubernetes at this point you likely have asked the wrong question. This is a zero Nobody cares at this point. Someone says that last black Friday the load went up so drastically that the response time of the site degraded to an extent that sometimes users couldn't access the site. In an emergency operation the cluster was extended with more VMs and also the central database for scaled out to more nodes. As to monolith needs plenty of resources this meant that they had to request lots of compute power from the data center to keep everything afloat. Yeah, I know this shouldn't happen with proper resource planning,
>
> **[3:05](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=185)** but we all know the reality, right? This means under high load the response time reaches a critical point and frustrates users and then [Hardware](../../Topics/Hardware.md) is shown at the problem to solve the problem violate that occurs. This is significant. The site is hard to scale out, and if it's done it's super expensive. Additionally and most importantly this affects users and hurts conversions. I give this a solid five. The monolith is justice so much code and dependencies that developers working on it locally need minutes to build and test their book. They are used to staring at the progress bar for minutes until anything happens. This really helps developer productivity and effect, of course the business doesn't directly affect users though, so let's give it still just the three. Some developer says they can only release new features about five times a year. At this time the monolith is tested, it's decided which features are ready for prime time, And then they cut to new release. Of course, hotfixes are still possible late if anything breaks, but also they take around the day to make it into production. I'm not making this up. PayPal before they did the re-architecture needed even six months to deploy a simple text change on the front page into production. This of course effects the power of innovation of a company. There is no way to quickly add new features or try something out. It gives the still just the three esteemed needed business impact is not so high as customers are still happy. Someone from operation says
>
> **[4:40](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=280)** that there have been three outages caused by just a small problem, and it took hours to find the problem, fix it and roll out the fix. This is severe. Customers were affected, the problem was hard to find, and then it also took long to roll out to fix. Any day a new problem like this could occur. And while it happens money literally goes down the sink. This is of course, a straight five. Someone that is currently trying to hire new talent says, that it's just so hard to find solid developers for this one technology they are using. Also specialists have a preference for specific languages. On top of that onboarding new hires takes forever as they have to understand the whole monolith to be productive. This is a valid concern and I would give it a three.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Android](../../Glossary/Sdk/Android.md) (1), [Mobile Development](../../Topics/Mobile%20Development.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **CLI Commands:** find (3), make (2)
> **Definitions:** is a  (3)
> **Code Identifiers:** ios (1)
> **Env Vars:** cto (1)
> **Speakers:** - [instructor] (1)

#### [Defining the project scope](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=0)** - [Instructor] You now collected all the goals or let's say now requirements from all the stakeholders, and you now look at the white board and try to figure out which items are actually non-goals. Next, you look at the remaining requirements, and you look for items that would provide immediate business value and can also be tackled with the re-architecture. These are our focus areas. Let's take, for instance, this scaling problem. With [Microservices](../../Skills/Software%20Development/Microservices.md), you can just scale up the services that are causing the performance degradation, which requires way less resources than scaling everything. Also, reducing build times can be tackled with microservices because with functionality split out into dedicated microservices, developers often don't have to build everything but just their service. Yet, it's notable that during [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md) when everything is put together, there will be no gain. Integration testing will even get more complicated as a lot of moving parts need to be combined into a running application, but maybe this would be a good time to add proper automated integration tests. We'll talk about it later. Also, the release frequency can be dealt with microservices. This is even one main benefit they provide. With microservices, this can be mitigated as they can be developed and also rolled out independently. Using microservices, some companies now even roll out changes several times per day. Also reducing the blast radius of errors
>
> **[1:35](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=95)** can be partly tackled with microservices, but they aren't the solution for the whole problem here. To find problems fast, you need some kind of monitoring. Only this can really help you to find out about the problem. With microservices, problems might even get more complex, as now the network layer and plenty of small containers are added to the mix. Yet, rolling out to fix, as I said before, should be much faster now because now we just have to replace or fix a single service ideally. Lastly, becoming polyglot, using various languages can attract specialists and also make the onboarding easier. This is something that can be tackled with microservices. It's very common to use a mix of languages and technologies for them. For [Data Science](../../Topics/Data%20Science.md), you might want to use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and for front-end rendering, No JS and [JavaScript](../../Skills/Software%20Development/JavaScript.md). By the serious business logic should still be written in a static language like [Java](../../Skills/Software%20Development/Java.md). With microservices, this is possible, and on top of that, a new team member only has to understand their service, and their immediate dependencies. So with that, you know at least what you should accomplish to make this job a success. And of course, an API for mobile apps, a redesign, moving everything to the cloud, or even using [Kubernetes](../../Skills/DevOps/Kubernetes.md) is not off the table. This can be done along the way, and it may be easier using microservices. These are just not your main goals. I'm also staying focused here.
>
> **[3:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=188)** There are dedicated courses that cover the details and benefits of microservices in greater detail, but this is out of scope for this course. We want to know how to split up a monolith. So let's take a closer look at our monolith and its structure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (12), [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md) (2), [Data Science](../../Topics/Data%20Science.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** find (2), make (2), python (1)
> **Env Vars:** api (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Mapping out the current architecture](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=0)** - [Instructor] For developing a strategy on how to split up the monolith it's of course key to understand its architecture and key components. The most logical way to figure that out is to just check out the source code and look at the folder or package structure. Depending on the use language there are also tools that can create class diagrams by using static code analysis. At your new job you would likely sit down with a seasoned engineer look at the web UI and the code in your IDE and start drawing boxes for the key components of the system. A high level overview is just enough. The details can be covered when you actually sewn into a component at the time you start to plan its migration. Let's now first start our little analysis by looking at the front-end. This is the so-called view layer. To get the broad overview of a semi complex page it can be sufficient to just click through it and note down the different functionalities in pages you see. On the front end VC a category tree, a search field, lists with items per category and also as search result, the item detail page, a chart with prices and sellers that is displayed on this page and also the availability per item and seller. Also on the front-end we do have everything related to the user. There is a login, a user profile that can be edited and there's also a way to add items to a watch list which is used to notify users in case of price for watched item changes.
>
> **[1:34](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=94)** So now we have everything user-facing but there is more, stores can of course also log in or use an API to upload items so let's not forget that. With that a few layers done now we have to look into the code. Where are these fuse created or rendered? Where are these fuse created or rendered? Where our user actions like submitting a search query or adding something to the virtual list handled? As our monolith is following the very popular model view controller architecture this is done on the controller layer. I don't want to go into too much detail here just now but every box here is a controller in each item in this controller provides a set of functionalities where so-called actions. The item controller takes care of everything related to items, the user controller handles users but also watch lists and also has an action that is called once per 12 hours to run through all users watch lists to check if there was a price change. So you look at the engineer next to you and ask, "This is an incredibly expensive way to do it isn't it?" And he answers, "Yes, it is but this is how it is right now and it's really hard to change." Hearing that you'll make a mental note that this is something you might want to tackle. But let's continue. The store controller provides everything for the store owner, means authentication also way to edit the store profile and an action to upload an update all items prices in the visibilities
>
> **[3:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=189)** in a defined text format. So these are the controllers. One level deeper we have the model. These are basically classes that give us programmatic access to the underlying persistence layer the [Databases](../../Skills/Software%20Development/Databases.md). Notable at the database layer is that some years back the items were moved into Mongo DB but that's where the whole initiative stopped. All other data is stored in my [SQL](../../Skills/Data%20Science/SQL.md) in one large database with many tables. So this is what we are dealing with here I think I already have an age with service to split it first. This may be a good occasion for you not to stop the video, reflect over the architecture you see and think about how to approach this. During the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the course we will get back to this key map a few more times.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Env Vars:** ide (1), api (1), sql (1)
> **CLI Commands:** make (1), mongo (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)


### 2. Splitting Capabilities into Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Design mistakes and how to avoid them](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=0)** - [Instructor] We are close to starting to split out first [Microservices](../../Skills/Software%20Development/Microservices.md), and this is a good point in time to go through approaches that have proven recipes for failures. Let's imagine you want to split out everything related to items. And someone said that micro-services should only provide exactly one function. There are micro-services after all. So you pretty much met each of the controllers actions to individual services. Search Service should provide search functionality and come back with search results. Item List Service, should provide add item lists per category or based on a search query. Item Service should [Fetch](../../Skills/Web%20Development/Fetch.md) a single item. Item detail service should fetch the items detail information. And then there is the item crud service which provides everything for editing an item. Separation of concerns is important, so the item service needs the search service to create a list based on a search query. The item detail service, needs to item service to actually fetch an individual item. And also the item crud service, is by definition only allowed to write operations and uses to item service to fetch an item. During development, you figure out that you're missing availability data on the item detail service. So you need a quick workaround and you expose a function on the item controller in the monolith to the web to give you the availability for an item. Also, most of these services need to access to item database table.
>
> **[1:36](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=96)** Now you'll figure out that the services should not do the database calls directly after all we want services and APIs, right? So you add data service which abstracts away that direct database access. We all learned that we should avoid redundancy in code and we identify that the access to this data API could be moved out into a shared module data leap, which fill from now on house all the data access logic for all services in is a build time dependency for them. For the left arm, instead of course, each of these services provides a [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) endpoint to actually access it. Do you see the hairball we just created? Let's look at the problems. Be completely over abstracted and now our services have only very limited functionality. Basically, exactly one action that we migrated out of the controller. This is called a NAMIC services. This abstraction automatically leads to services calling each other to accomplish a simple task. We have dependencies back to the monolith, so we depend on the monolith, slow release cyclist when we want to do any change. That said, sometimes temporarily relying on the monolith cannot be avoided. We tie the services together by using the same database tables. So teams developing the services need to constantly sync up on how the data and tables might look like.
>
> **[3:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=189)** We created the central data access service, which looks like a good idea but just adds another level of abstraction while even increasing the coupling between those services. And then we also created shared code. Which of course coupled services or rather the teams developing them even more. There's also increased complexity on the monolith side, as the controller now has to know all these services enter end points. In summary, this picture shows everything you should not do when building microservices. Instead we want to design and migrate around capabilities and not code. What does this mean? We still have our item controller and now instead of creating a service for each individual action the controller provides, we create one item service. This item service provides all capabilities related to dealing with items. This also means, that we can migrate all the relate data into a database that is owned by the service only. And of course, during the migration the item controller only has to know one service and can delegate the functionality to it. We will look at the concrete examples in a bit. So let me sum this up and derive some best practices from what we just learned. Again design your services around capabilities and not around functions in your code.
>
> **[4:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=283)** Make it your mantra that each service should be so self-contained that it can be developed and deployed individually. This means no or at least only few interdependencies with other services. And the next point is something we will cycle back into the next chapter as well. Make evolutionary atomic steps that allow you to delegate approximate functions to new services, leaving the system in a better state than it was before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (4), [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (1), namic (1)
> **Analogies:** imagine (1), picture (1)
> **Cross-References:** next chapter (1)
> **Speakers:** - [instructor] (1)

#### [Refactor or rewrite?](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=0)** - [Instructor] Frankly, the expression, splitting out monolith into [Microservices](../../Skills/Software%20Development/Microservices.md) might be misleading. It leads to the assumption that you can just take your legacy code and copy it into microservices. This would make it more of a refactoring approach. So is it possible to just reflect your code into microservices, maybe copy over controller into service put an AP in front of it and call it a day? Let's have a closer look at this topic and spoiler alert, I would recommend to rewrite because if you're attempted to reuse your code as is, it might be because you're again thinking in code and individual functions and not in capabilities. If you look at your legacy code, how much of this code does really provide the capability and how much is boilerplate code related to the monolith it is running on. If you just copied the code, you also just missed the opportunity for long cue improvements. Basically you are migrating technical depth with it. By using microservices, we can choose freely which languages to use for an individual service. All that matters is the API it provides. If you stick to your code, you miss that opportunity. If you look at what is left of the code that can really be reused in which effort it means to adopt it to the microservice starting from scratch is almost always faster. There is of course, no black and white
>
> **[1:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=93)** and there are exceptions. Sometimes there is that one capability that is relatively independent from the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of replication, we call this orthogonal and pretty complex. Think about calculations or [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md). If this capability can really be extracted into service it might be worth giving this a try instead of getting lost in a rewrite.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Exercise Files:** boilerplate (1)
> **Definitions:** we call this (1)
> **Speakers:** - [instructor] (1)

#### [Choosing your first migration target](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=0)** - [Instructor] After doing all your research, you pretty well understand the current monolith. It's now time to plan for the first migration step. Let's look at the Selection Criterias for such a service that we want to move out. We want to migrate the capability that is rather on the edge. This means that it does not have too many dependencies to and from the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the application, again this is what we call orthogonal. It should also be a rather small and simple capability that isn't to business critical. And connected to that, it should have limited simple functionality that can be developed fast. Now, when looking at the architecture again and after reviewing all the components the functionality related to the user stands out. Even without it, the site would still work. You might not be tempted to move out everything the user controller provides. When looking closer, though, we see that it contains the profile management and all the operations of it as well as the whole watch list and alert management and also everything related to authenticating users. That's not small, that's actually plenty and it's even different capabilities because, for instance, the watch list and alerts should actually be seen as a capability of its own. So this is way too large for one migration but what about authentication? User authentication is a capability of its own
>
> **[1:36](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=96)** and doesn't really have many dependencies to the rest of the application. All it has to do is maintain user credentials and comparing them with the ones provided by the user. So let's say let's try to split out authentication into service of its own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Splitting out your first service](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=0)** - The authentication capability is the perfect service to move out, and you're now on the drawing board to provide guidance to the developers that will lead to implement it. First, we have to have a closer look at the functionality provided by the user controller in our monolith. And there are a few actions that we didn't show before but are related to authentication. First there authenticate action of course. This is needed to do the authentication with username and password. But there's also the profile management that we need to look into. When a user creates a new profile, they also provide their username which is the email address and the password. So this needs to somehow be connected to the service which should own all the data related to authentication in the future. Also, profiles can be updated and along with the user information, the email and the password can be changed as well. Additionally, profiles can be deleted. This is also something that needs to be reflected in our service as we don't want to end up in an inconsistent state where the service still holds users that were deleted from the user database already. Knowing this, we can go ahead and design what the new authentication service needs to provide. Now in service land, we are talking about routes that are provided via a [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) interface and can be accessed via HTTP calls. First we need a route that authenticates a user
>
> **[1:34](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=94)** with a username and a password, and we'll return a user ID on success. This user ID can then be stored in a session and used to [Fetch](../../Skills/Web%20Development/Fetch.md) all the user related data. Then we need a route that creates a user in the authentication database. It needs the user ID that was already created on the monoliths plus an email and a password. Then we need routes to update email and password. And also we need a way to delete a user from the authentication database. Of course, all this data needs to go somewhere, so we also need to add a database and the table to the service. Let's call it user authentication. If this is now my [SQL](../../Skills/Data%20Science/SQL.md) or something like Mongo DB is completely up to the service. What we know though is that this table needs to store the user ID, the email address and also store the password using the same encryption mechanism that is used on the monolith. Next, we also have to change the monolith to extend the current operations with cause to the service. So for example, when we authenticate this now has to be done against a new service. Or when a user is created, the service has to be called to create the user there as well. Technically, what we are creating here follows the proxy pattern. So local functions within the monolith are proxying and delegating the work to the respective service. So on the drawing board, this looks now pretty good already. But how can we do the action migration
>
> **[3:10](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=190)** from the old way to the new service? This is a critical step and ideally there should be no downtime involved. I will show you that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** http (1), sql (1)
> **CLI Commands:** mongo (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)

#### [Zero downtime migrations](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=0)** - [Instructor] The business made pretty clear that this whole initiative that is planned must not mean that the application has to be taken down. After all the money's made with conversions and the minute downtime can be directly measured in dollars. But being a good architect, you also want to provide a migration past that doesn't mean a complete outage. Also you want to be able to abort the migration at any point in time. It's either all or nothing. And if something fails, the application should not end up in a chaotic, half migrated state. So how can we accomplish this? First, we have to prepare the monolith and add the new functionality needed. So you will tell the responsible team to implement the service proxy methods part and here comes the important part. This new functionality should be hidden behind the feature toggle. These are programmatic switches that can be turned on or off during runtime. Technically, it's pretty much if statements in the code. Let's call the toggle service authentication. If it's on, then the new proxy functions are life but we also add another toggle and call it service authentication migration. If this is on, all site functionality related to the user, be it signing up or changing the profile or logging in should be disabled. Instead, the user should get the friendly message
>
> **[1:35](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=95)** that there is a scheduled maintenance and that they should try again in a bit. This is not perfect, but still won't harm business too much. We cannot avoid it because we have to leave the user database in a consistent state. Imagine the user changes the password by the immigration runs. No one knows where this would go then. Then the need to be scripts that actually copy over the user IDs, email addresses and encrypt the passwords to the new database. Here, I think I don't have to mention that this should be thoroughly tested in a non production environment. And finally, the new version of the monolith is to develop hidden new features needs to be released. Once this is done, we are ready for prime time. Maybe don't do this on a Friday afternoon just an hour before you have a candlelight dinner planned with your significant other, because things might fail. When you're ready, ensure that everything should work as intended. You have to make sure that everyone involved is on deck and then you toggle this service authentication migration switch. Now the user database is not read or written too. No changes are being made, it's consistent. Then you trigger the automated migration scripts and tests. If something fails here, just switch the migration toggle back and no harm was done, everything runs as before. Otherwise, now switch to service authentication on. Now this is life, but still the migration is on as well. So users can still not log in.
>
> **[3:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=189)** Finally, you switched the migration toggle off and then your new service should receive the first calls from the monolith as soon as users start to try to use the respective site functionality. We will come to this again, but having some monitoring in place that makes sure that the service runs stable will ease your mind considerably here. Next we will look into migrating more complex capabilities.

> [!info]- Semantic Content
>
> **UI Navigation:** toggle (6), switch to (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Migrating interdependent, complex capabilities](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=0)** - [Narrator] So far, we split out the simple service that did not have many dependencies and was easy to migrate but of course things are really that easy. When we learned about the monolith architecture you already noticed that the watch list and alerting capability could really use some improvements. Right now every 12 hours the whole watch list table is processed to look for price changes on the items and if so, an alert is sent to the respective user. This is expensive, time consuming and also not effective. Moving this out of the monolith into a service that may be even asynchronous and event based would really remove a lot of strain from the monolith but the watch list depends on different parts of the application. First, the user can add an item to the watch list. Right now one watch list entry contains the user ID, the item ID and the price at the time the entry was added. Then we have send alerts which fetches the entries from the watch list and then compares the price on the watch list with the one in the item table and if the price was changed the notification preferences for the users are fetched and the price alert is sent according to these preferences. So that's many moving parts right now and this is all within the monolith. Now the fun part of being an architect starts. Let's sketch out how we could create the service that not only encapsulates the capabilities but also is far better than what we have now.
>
> **[1:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=93)** First, this is now a great occasion to move a part of the application to the cloud as all [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) providers come with services that can help us build in what we need without having to deal with running the infrastructure behind it. For instance, we can now use a so-called serverless function that provides an API that accepts an item ID and the price and stores it into a queue. Next we of course need the watch list per user. For that we create a new serverless function and this function provides the create update and delete functionality (indistinct) for the watch list and also of course stores this data in a database hosted on the cloud. Let's know hook this up with the monolith before we proceed. All we need to do now is to proxy the watch list functions to the new watch list service and we can at least maintain the watch list again. Yet the price change service isn't connected yet. So when would be a good point in time to register price change maybe right when the price was updated by the seller and we can do this asynchronously. We don't care about how the service stores it and its return value. So we don't have to wait for it. This is called fire and forget and this is rather inexpensive on the monolith side. Now we have everything that we think we need in the cloud. Now we have to add a consumer function that is triggered by a new item added to the queue and it will then look
>
> **[3:04](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=184)** into the watch list table and try to find a user that watches this given item ID and if we find a user be used to notification service all cloud providers provide to send out the notification. Do you see that we missed something here? In the monolith we had notification preferences like the email address of the user or a mobile phone number but we are lacking this information now. We have some redundancy on the email address already for the authentication. We really don't want to store the notification preferences with our watch list. A user service would be good. We could vary it for the preferences but we decided to do this further down the road as there are some [Privacy](../../Skills/Data%20Science/Privacy.md) topics to solve first. So what can we do now? How can we get these notification preferences out of the monolith? This is a good opportunity to go for the kind of pragmatic approach that is sometimes needed to get the job done. I will show you how in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **CLI Commands:** find (2)
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### [Providing a migration API layer](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=0)** - [Instructor] I said before that the service should not court back into the monolith, and this is still true. But there may be situations when a service needs information that is not yet available through another service, but instead still stored somewhere deep in the monolith. So we need a way to get this data, but we also want to do it in a controlled way and not maybe just make the database readable through the web. Ideally we need an end point that is identical to what the service would need to provide. So if we look back at our virtual example from before, this would be when we would get together with the monolith team and asked them to expose a bell security API to the web. Ideally we could already tell them all in points we would need going forward. For the watch list, we would need an end point that returns to notification preferences for a given user. Now our notify watcher service can call back home to get the notification preferences and then provide them to the notification service. And we would have a working watch list service again. Of course, STM many moving parts like modifying the monolith as well as providing and testing the whole [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md). Plus the final migration. Creating this watch list service can really be a weeks to months long project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
> **Env Vars:** api (1), stm (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [What about the front end?](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=0)** - [Instructor] You may have noticed that the services we created, were all just providing the data by a [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API and not the user interface, the [HTML](../../Skills/Web%20Development/HTML.md) as such. If you look into the literature, there's some opinion that [Microservices](../../Skills/Software%20Development/Microservices.md) should also come with its own user interface or front-end and that monolithic front-ends are an anti-pattern. Let's have a look at these so-called micro front-ends. So we have here our webpage and this should be a item detail page. It consists of an item picture and its description and also the item prices. For the prices, we provide the price service. But this time it does not only provide an API to just [Fetch](../../Skills/Web%20Development/Fetch.md) the data, no, it will actually return HTML in [JavaScript](../../Skills/Software%20Development/JavaScript.md) for the website. The same is true for the item image and description. The page shown to the user is a composite of all user interface parts the participating services provided. Yet how should this happen? If you know HTML, then this might be the return of IFrames. These are sections on the webpage that show content from another URL. They have huge flaws though and are actually frowned upon. Most importantly, the content inside the IFrame has no access to the page it runs on. It's more or less a sandbox. So how will a single page application where one click here triggers a page change there work then?
>
> **[1:35](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=95)** IFrame content also cannot inherit this task from the parent page. So that will be fun when each team does its own styling and decides how a pattern should look like or what the ideal font size is. And also if the content gets too long the overflowing parts will be either hidden or create scroll bars within the page. So I think you agree that this does not look like a good solution. Another way to approach this would be JavaScript and rather modern frameworks like View Chairs, [React](../../Skills/Web%20Development/React.js.md), or [Angular](../../Skills/Web%20Development/Angular.md). With JavaScript, HTML can be fetched from a service and rendered into the page. Also, the rendered content will be styled to the page style. Yet, what is with actions that affect another component? Think about an add to watchlist button that will asynchronously add an item to the watchlist. And then also update the watchlist element in the header of the page. Modern JavaScript frameworks provide dedicated functionality to cover this use case. With micro front-ends this gets extremely hard to maintain and test if the rendered HTML and the JavaScript relies on functionality that is only available when it runs in the context of the whole page. Then on the browser every bite transferred to the user matters for the overall page performance and JavaScript libraries interdependencies tend to be huge. If every component comes with their own JavaScript dependencies, it's inevitable that two components use the same third party library
>
> **[3:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=188)** without knowing, which would mean it would be transferred to the user twice. Of course, now we can talk about discipline and those teams can talk with each other, but then again we're pretty much back at interdependencies. Also, if I create a website I very often cache rendered pages that were composed by data from various services on the server side. Even caching for just one minute can really reduce the overall load on the services. This is also not possible with a micro front-end. And finally, the HTML page is still by the way a browser. The HTML works a monolith that has now dependencies to many other services which it has to hold together. The browser is not a microservice management platform though. Needless to say, I don't believe in micro front-ends. I think it's fine if the front end stays monolithic. This ensures consistent look and also has the best web performance. In my opinion, it's enough if microservices just return data and not HTML in JavaScript. In the next video I will show you how our application could look like after the migration and how you could then move towards a more modular and modern front-end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (8), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (8), [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** html (8), api (2), url (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Making the final step](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=0)** - [Instructor] It would be out of scope and does not provide much failure to show the migration for each and every capability of our monolith. By now, you should have a good understanding about the underlying technical concepts of such migrations. I also did not cover how to orchestrate services, like with [Kubernetes](../../Skills/DevOps/Kubernetes.md). There are dedicated courses for this. What we're left now with is the skeleton of the monolith, pretty much. Models and persistence layer are gone and all of control functionality and business logic is now proxy to the respective services, the so-called API gateway, which is usually provided by the service orchestration you're using. It basically routes your request to the respective service, or if services are redundant, to a service instance using load balancing. A redesign of the website is now relatively easy, as all business logic has been moved out into services that can be developed quickly and independently. What I see very frequently is that after the migration, the rather bulky enterprise web service stack is replaced with a more modern platform, like [Node.js](../../Skills/Web%20Development/Node.js.md). Node.js is a great fit here as it has asynchronity built into its core, and one can, for instance, [compose](../../Glossary/Framework/Jetpack%20Compose.md) a view by the result of calls to multiple services, where all of the service calls can be done in parallel. In general, the overall memory and CPU footprint of a Node application is very small compared to say, a Tomcat server. Needless to say, that Node.js also comes with frameworks
>
> **[1:36](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=96)** that make rendering webpages or providing an endpoint for mobile applications very easy. So this would be our final application, but actually you're still sitting on your drawing board planning this whole migration process. What you haven't considered yet is that cheaper consists of people and processes, that the microservice migration is not just about code. I'd even say that the organizational transformation needed is as important as the technical one when moving to [Microservices](../../Skills/Software%20Development/Microservices.md). I note this is not the most exciting topic for an engineer, but please stay with me to look at the organizational challenges in the final chapter because they're really key for your success when moving to microservices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (3), [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1)
> **CLI Commands:** node (4), make (1)
> **File Paths:** node.js (3)
> **Env Vars:** api (1), cpu (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 3. Required Operational and Organizational Maturity

[↑ Back to Table of Contents](#table-of-contents)

#### [It's not just about code: Meet Mr. Conway](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=0)** - [Instructor] So far, we talked a lot about code and that's just natural being engineers this is how we like to see the world. But the initiative you were hired for is as much about people and teams and processes, as it is about code. By now, you reviewed the current architecture and came up with a set of evolutionary steps that will lead to a microservice architecture eventually. Now you're going to present this to the company's leadership team and task the engineering organization to make this happen. By doing so you will either set the project up for failure or destroy the whole engineering organization because you forgot to think about the organizational transformation that has to come with the technical one. In 1967 Melvin E Conway a programmer made the following statement that became a fundamental law of system design. Any organization that designs the system will produce a design whose structure is a copy of the organization's communication structure. If you flip the statement round in the plight to a microservice transformation it's fair to say that if you want to transform a system to a new architecture, your communication or team structure needs to undergo a transformation as well. Let's look at our monolith into new service structure to understand that better. This is a more high level few of the units the monolith consists of. In the beginning we said that there are 80 engineers working in around 6 teams.
>
> **[1:36](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=96)** The odds are very high that currently they are is a team for each box in this diagram. So there is a dedicated team for the business logic as there is a team working on the data access layer and also one or two teams working on the front end and so on. They need to align on the boundaries between the subsystems and the once they're communicating with. Consequently, the front end person will rarely have to sync with the people working on the database. But now we are moving to [Microservices](../../Skills/Software%20Development/Microservices.md). And microservice consists of at least the [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API, the business logic and everything related to the data access and persistence for that given service. Also, there should be a person that works together with the UI team at large to define which data is needed there and how it would look like. This means to create a microservice you will need people from each part of the monolith, and it's rather intuitive to create a dedicated team per microservice. For instance, you will have a watchlist team then. If we break this down into so-called full-time equivalents these are people working full-time on something we might end up with a team size shown in the table. Of course, this is a ballpark number but nine is a realistic size. This also aligns with the two pizza rule Amazon has when they say that in a team meeting two large pizzas need to feed the whole team. Now you cannot just stuff people into new teams
>
> **[3:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=189)** without friction. Of course, microservice teams are heterogeneous and new people need to learn working together. At the same time, we cannot stop our monolith. It has to be still stay functional. Maybe with innovation slowing down a little. If you make people stay solely with the monolith but others move to the cool new service teams, they might feel like solely working on legacy now. Which is true and no one really wants to work on legacy systems. As Conway said, communication structures mirror the system structure. So the old ways of communication and collaborations likely want to do it anymore. Of course there is no single solution for all this problems but if you follow the following principles chances are good that you will find an iterative approach that won't destroy the company or make a project a failure. First, make sure that you involve teams early in the process. Don't make it a surprise that a change of the technical structure will also require organizational changes. Maybe make a slow transition where people are working like 30% on the old and 70% on the new system to avoid that individuals feel stuck on the legacy path. Throughout the whole process strive for collaborative decisions. Bring in your expertise and advice, but make it a team effort. Only then you will have the real buy in bare critical mass of people. Also, this may not be the perfect time to switch
>
> **[4:46](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=286)** to an EHR development process for your microservices. So maybe working the old ways on the monolith but on the microservices, just rethink how you're doing your work. And also very important, your goal is not to create many new silos but the vibrant culture of cross [Team Collaboration](../../Skills/Data%20Science/Team%20Collaboration.md). This requires a very defined way on how services are documented and specified in where this information can be found by others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Team Collaboration](../../Skills/Data%20Science/Team%20Collaboration.md) (1)
> **CLI Commands:** make (7), find (1)
> **Definitions:** is a  (7)
> **Env Vars:** api (1), ehr (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Provide up-to-date API documentation with Swagger](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=0)** - Conway's law tells us that system mirror organizational structures and communication patterns. As such, well-defined interfaces between systems, as well as between people, are important to make your microservice migration a success. At Cheaper, you already learned that you have to do way more than just [Design Systems](../../Skills/Web%20Development/Design%20Systems.md). You have to find new ways of cooperation and rearchitecture the organization along with the code. And here, documentation and processes are key. Previously, I simply painted a few boxes for the [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API, but do we actually know how the data should be provided to the update route in our picture? Will it be a post or a put request, and how should the payload look like? Without the proper API documentation, getting alignment on this will create a lot of friction and noise. Why not automatically generate API documentation from code? The tool of choice to do this today is called swagger. It comes with a [software as a service](../../Glossary/Concept/SaaS.md) offering, but the open source solution can also be installed locally. Swagger offers a declarative way to describe APIs, but can also be used to auto-generate API documentation from code and inline comments. It also lets you try out these APIs, so it provides more or less a sandbox to send and [Fetch](../../Skills/Web%20Development/Fetch.md) data and verify the payload before writing a line of code. If you establish a central hub for all the API documentation and make sure it's up to date,
>
> **[1:36](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=96)** you already have solved a huge problem. You should establish this from day one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Systems](../../Skills/Web%20Development/Design%20Systems.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Software as a service](../../Glossary/Concept/SaaS.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** api (5), rest (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is called (1)
> **Analogies:** picture (1)
> **Speakers:** - conway (1)

#### [Streamline cross-team collaboration with Inner Source](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=0)** - [Announcer] With the monolith, the communication between teams was pretty much limited to boundaries that want your head to other tiers. The people involved, usually knew each other well and had their own established ways of coordinating which work needs to be done. Now with all the service teams, the whole ecosystem gets way more diverse and it gets harder to coordinate work between all these various new teams. Previously we implement the Watch list service, in a way so that it calls back to the mono list to get the communication preferences of a user. Now finally, we also have a user service, but still lack this one method to get this piece of information. If you're on the virtual list service, how can you make sure that the needed functionality is implemented on the user service? Of course you can just ask a team lead or product manager to get this feature. Maybe you bump into them at the coffee machine or you let them know that email or [Slack](../../Skills/Software%20Development/Slack.md) but this is pretty random and also not reproducible. You can only keep nagging until you see this feature and you will only learn about it if someone tells you. So that sounds not like a good way to do this. You can also create an ticket in your system. This is reproducible, but you rely on the other team to make it happen. And this is sometimes slow. Why can't you just contribute this feature to their code? Wouldn't that solve all these problems? The question is,
>
> **[1:32](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=92)** what do you need to easily contribute to another project? Can you think of an example of many people collaborating with each other with great success? Ever heard of open source? If you applied techniques from open source to proprietary [Software Development](../../Topics/Software%20Development.md), it's called Inner Source. So what would you need to do to foster this Inner Source spirit at cheaper to enable better cross [Team Collaboration](../../Skills/Data%20Science/Team%20Collaboration.md)? Inner Source is a large topic, with much documentation to be found online. But you start out with just defining a few simple rules that come with Inner Source to see how it goes. First of all, we need a proper structure in our [Version Control](../../Skills/Web%20Development/Version%20Control.md) system anyways. And of course each service has to have a repository of its own. Like an open source, there are rules to follow, to get contribution accepted. Maybe one has to create an issue where they describe exactly what they intend to do. Maybe a certain code style is enforced. It's completely up to the leadership of the respective project or service to define these rules. Then there needs to be [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md) that on-boards anyone new to the code. This looks like a chore, but if teams start out with writing a specification, along with the code, this will help everyone involved as this captures the reasoning where things are done as they're done. Of course, this specification has to live in the repository in the version control system as well. A side effect of this proper specification
>
> **[3:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=188)** is also that it makes it easier to onboard new team members to a specific project. Also, each project has to have comprehensive tests that make sure that the service still works as intended after the code was changed. Automated tests ensure that no contribution breaks to service. Additionally, it's automatically enforced the code style and test coverage, meets the requirements of the project. And now, if the watch lists service follows the guidelines and process, they can simply create a pull request that provides the missing end point, of course, Inner Source won't solve all your problems when it comes to team collaboration, but it is one important step and puts you on the right path of FBN is towards continuous improvement of your organizational processes. So long stories short, our change has now landed in the user service but will this now be pushed into production immediately? Most likely not. Likely this change will now run through a pipeline and then be added to a so-called pre-prod environment. And we will talk about this [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and delivery in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Team Collaboration](../../Skills/Data%20Science/Team%20Collaboration.md) (2), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (2), [Slack](../../Skills/Software%20Development/Slack.md) (1), [Software Development](../../Topics/Software%20Development.md) (1), [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md) (1)
> **CLI Commands:** make (3)
> **Documentation:** specification (3)
> **Env Vars:** fbn (1)
> **Cross-References:** in the next (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Speakers:** - [announcer] (1)

#### [Continuous integration and deployment](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=0)** - [Instructor] At cheaper the monolith is currently released around four times a year. This is a highly manual process for everything is put together and thoroughly tested. But in a monolith it's also relatively easy for a developer to test their work. All they have to do is to build the monolith, we know already this takes time, but then just run some tests locally. With switching to [Microservices](../../Skills/Software%20Development/Microservices.md), this isn't possible anymore. Sure, unit tests can still be performed for single service but you can hardly test the whole application locally as this means, spinning up all the services and also having all the orchestration of the services ready. This is why we're switching to microservices, you also need to implement [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md), and if you're brave, also continuous deployment. So let's look at what this is all about. Everything still starts on the developer's machine, thorough service is developed and the new feature is being added. Once the developer is done and has run the local unit tests they will push the change to the [Version Control](../../Skills/Web%20Development/Version%20Control.md) system to a dedicated branch for this feature. From there an automated process a so-called pipeline is triggered. First, the service is being built, then the unit tests are run. Needless to say that thorough complete unit tests are needed here. But again, this only tests the one service alone. You see this on the green box here,
>
> **[1:34](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=94)** so building one service and [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) one service. In the next step, the service is put into a testing environment that is similar to the production environment. There, it will be integrated with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the service infrastructure and tested. Here of course also automated integration tests need to exist and their frameworks to do exactly this. But as you see here, now we are really testing all the services altogether. When this all works out well the change is merged back to the main branch. From there services are continuously packaged and shipped to a so called pre-production environment. This is usually now where manual tests take place. [Quality Assurance](../../Skills/Software%20Development/Quality%20Assurance.md), testing, acceptance testing you name it. Once this is complete, there's usually a production goal that this manually triggered. Then all services that are currently ready for deployment, ready for update are pushed or deployed into production. Of course at any step tests may fail and the developer will be informed that something along the way went wrong. As you can see, this is really only possible by having an automated process that integrates and tests the service with the rest of the microservice system. Now what is continuous integration and delivery and deployment in this diagram? Everything from pushing to diversion control system to merging, is called continuous integration. This means the code is automatically
>
> **[3:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=189)** and continuously integrated with every change. After that, the continuous delivery step starts where the services are continuously delivered into a pre-production system. And then there is also continuous deployment, which means that new changes are continuously pushed to production. But frankly, this happens rather rarely. Usually, as I said this is still a manual step and it's done rather every two or three weeks after thorough testing, then a new release is cut and deployed to production. Cheaper does not have any of this at this point. I think it's clear that you have to stand up a CICD process at the same time as the development of the first service starts. Here again, the iterative evolutionary process helps you. The team can really learn as they go. In a perfect world services don't break production after they've been through this process, but unfortunately they still do. How can you detect and mitigate production problems? Enter observability and monitoring, we will talk about this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (3), [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **Definitions:** is a  (1), is called (1), means that (1)
> **Cross-References:** in the next (2)
> **Env Vars:** cicd (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Why you need monitoring from the very start](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=0)** - [Instructor] Performance monitoring was always important, but it got quite the boost since [Microservices](../../Skills/Software%20Development/Microservices.md) became popular. Today, monitoring and observability are big topics in this space, and there is even a dedicated group for it in the Cloud Native Computing Foundation. There are just so many moving parts communicating over the wire, if you use microservices. Now, imagine that authentication suddenly fails on the front-end. Sure, you'll first look into the auth service but without monitoring, and especially without so-called distributed tracing, you will lose a lot of time until you figure out that actually a data dependency downstream is causing the problem. In short, if you run microservices without the monitoring tool, you're basically flying blind. But also before starting the microservice migration you should invest time to make sure that the monolith is properly monitored already. I'll explain why in this video. At Cheapr you ask the operations team if there is currently some monitoring in place for the monolith. You learn that there is indeed. First of all, they collect some metrics from the VM or host the monolith is running on. This is data like CPU or memory utilization that tells them if the VM is properly sized. Then they also collect metrics emitted from the [Databases](../../Skills/Software%20Development/Databases.md). Usually each database system provides self-monitoring interfaces that give you information about its general performance. Additionally, to know if the application is up
>
> **[1:34](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=94)** and can be reached, they use it external service that does so-called synthetic tests. This means that the site is accessed like a user would do it and some data is collected. If the site is down, this is how operation usually finds out about it. Finally, they also collected log data from the whole system be it from the host or the application itself. All this data is fed into a time series database and then displayed on a dashboard. This solution helps to get information about host utilization, general performance, and availability. But if we have a closer look, we see that we are looking at the monolith from the outset, which is today referred to as pure monitoring. The monolith itself does not emit so-called telemetric data. The more telemetric data a system emits the more observable it is. In our case, the monolith isn't observable at all. This means that if there is an outage this kind of monitoring tells you that something went wrong, but not what happened. Now, adding observability to the monolith before starting the microservice initiative may seem counter intuitive. After all the system is going to be replaced anyways. But there are some very good reasons to do so anyways. Let's look into these. First of all, while improving the channel performance is not an explicit goal of your microservice initiative, you likely don't want it to get worse
>
> **[3:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=187)** and detect if there is a degradation, right? By switching to a unified tool that will be present before, during, and after the migration, the actual user impact of each migration step can be measured. And if good booked as a success, and if bad used as a trigger to mitigate the problem. Also, you want to understand the complete topology. In the beginning, you sat together with an engineer to understand the whole application but often something is left out or forgotten in this process. By deploying a monitoring tool all components of the monolith are discovered automatically and you won't run into surprises on your way. If it drill deeper, you also want to understand code execution path and dependencies. Performance monitoring systems usually provide agents that can be loaded directly into the applications and they often collect a lot of meta data as well as information on how code is executed. Instead of browsing through the source code you can use a monitoring tool to understand the actual code execution path during runtime. Which methods are calling each other or also which exact [Database Queries](../../Skills/Software%20Development/Database%20Queries.md) are being executed. All this can be collected and displayed by a monitoring tool. Distributed tracing, is one of the main reasons monitoring got so popular with the rise of microservices. While it's rather easy to trace and debug a monolith locally, how can you understand how services call each other and more importantly,
>
> **[4:41](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=281)** find out if there might be a problem? With distributed tracing all transactions that pass through your microservice infrastructure are being connected, tier to tier. And if there is a problem the service causing it will light up red. Speaking of that, every migration step imposes the risk of introducing problems that weren't detected during testing. So proper problem detection and alerting will make your life way easier and will make you sleep better on your microservice migration journey. So that's it. With all this homework done you should now be pretty comfortable kicking off the microservice migration at Cheapr. It's going to be a long journey with roadblocks and bumps along the way, that much you know, but also an exciting one for sure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Database Queries](../../Skills/Software%20Development/Database%20Queries.md) (1)
> **Definitions:** means that (2), is a  (2), is an  (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** cpu (1)
> **Exercise Files:** source code (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Apply your knowledge](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=0)** - [Daniel] Thank you for taking this course. I hope you liked it and found it valuable. By now you should have a holistic high-level understanding of what a migration to [Microservices](../../Skills/Software%20Development/Microservices.md) means technically and, also, organizationally. You can now start to apply what you've learned and, on your way, you might come across the topics we've covered and you'll likely want to delve deeper into them. In the library, you'll find another course of mine called [Node.js- Microservices](../Web%20Development/Node.js-%20Microservices.md). There I cover how to build your own microservice infrastructure using [Node.js](../../Skills/Web%20Development/Node.js.md). If you know Node.js already, this can really get you started in understanding microservice platforms. In general, the library contains learning paths and courses on microservices. Look at an application you're responsible for and start decomposing it, and then take courses as you go to expand your knowledge. Again, I advise you to start with one service, maybe by moving some simple functionality to a serverless function. I'm happy to receive any feedback from you, good or bad. Please use the Q&A function of this course, or reach out to me directly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (3), [Node.js](../../Skills/Web%20Development/Node.js.md) (3)
> **CLI Commands:** node (3), find (1)
> **File Paths:** node.js (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [daniel] (1)


## Instructor

- [Daniel Khan](../../Instructors/Web%20Development/Daniel%20Khan.md)

## Skills Covered

- Software Architecture
- Microservices

## Path Context

### In [Microservices Foundations Professional Certificate by Kong](../../Paths/Software%20Development/Professional%20Certificates/Microservices%20Foundations%20Professional%20Certificate%20by%20Kong.md)
← [Microservices- Design Patterns](Microservices-%20Design%20Patterns.md) | **3 of 3**

## Part of

- [Microservices Foundations Professional Certificate by Kong](../../Paths/Software%20Development/Professional%20Certificates/Microservices%20Foundations%20Professional%20Certificate%20by%20Kong.md)

## Appears In

- [Microservices Foundations Professional Certificate by Kong](../../Paths/Software%20Development/Professional%20Certificates/Microservices%20Foundations%20Professional%20Certificate%20by%20Kong.md)

## Related Courses

_Courses sharing skills:_

- [React- Software Architecture](../Web%20Development/React-%20Software%20Architecture.md) — Software Architecture
- [Kubernetes- Microservices](../DevOps/Kubernetes-%20Microservices.md) — Microservices
- [Microservices- Security](../Cybersecurity/Microservices-%20Security.md) — Microservices
- [Case Study- Visualize Complex Microservice Data Using Python](Case%20Study-%20Visualize%20Complex%20Microservice%20Data%20Using%20Python.md) — Microservices
- [Creating Spring Boot Microservices](Creating%20Spring%20Boot%20Microservices.md) — Microservices

---

[↑ Back to top](#)