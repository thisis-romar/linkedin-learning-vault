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
  - Microservices Foundations Professional Certificate by Kong
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/software-architecture
  - skill/microservices
status: not-started
created: 2026-04-19
---

![Software Architecture: Breaking a Monolith into Microservices](https://media.licdn.com/dms/image/v2/C4E0DAQHFp6CFgAZ9_Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1618509860115?e=2147483647&amp;v=beta&amp;t=PzFPUyrSSYjtim73LLh8wHdITScS--JrFOqJnJuUV6E)

# Software Architecture: Breaking a Monolith into Microservices

> Microservices are the increasingly popular software architecture choices when creating a new application, but what about existing applications? Does it make sense to split them up into microservices? And how would you go about breaking up monolithic applications? In this course, Daniel Khan covers effective approaches for adopting microservices, taking a high-level look at the fundamentals without

> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices) | 1h 7m | Intermediate | 24K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Daniel Khan]]

## Skills Covered

- Software Architecture
- Microservices

## Table of Contents

### Introduction

#### Embark on a journey to refactor your architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=0)** - [Instructor] When creating a new application today, Microservices are the software architecture of choice and much has been said and written about it already.
>
> **[0:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=8)** But what about existing applications?
>
> **[0:10](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=10)** Don't they deserve some service architecture too?
>
> **[0:14](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=14)** Does it make sense to split them into Microservices?
>
> **[0:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=17)** And how can this work?
>
> **[0:19](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=19)** I made this course to answer these questions and guide you through your Microservice migration journey.
>
> **[0:24](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=24)** We won't talk about container on times or Kubernetes and it does not matter which programming languages you know.
>
> **[0:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=31)** After taking this course, you will have a holistic general understanding of the technical and organizational challenges that you need to tackle to be successful.
>
> **[0:41](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=41)** I am Daniel Khan for about 20 years.
>
> **[0:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=43)** I've been working as a developer at Architecting Tech.
>
> **[0:47](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=47)** Join me now on my LinkedIn learning course about splitting up one of these into Microservices.
>
> **[0:52](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/embark-on-a-journey-to-refactor-your-architecture?u=76281980&t=52)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 1. Understand the Status Quo and the Project Goals

#### Welcome to your new role!
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=0)** - [Instructor] Of course, I could now start throwing everything that was ever written on this topic at you but I think that's not why you're here.
>
> **[0:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=7)** Maybe you aren't even yet sure if Microservices are the solution to your problem at all.
>
> **[0:12](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=12)** Likely you ask yourself how to get started in the first place or if there is a specific process you could follow.
>
> **[0:19](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=19)** Maybe you are looking for an overview on which challenges might come along on your journey.
>
> **[0:25](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=25)** Likely you're also curious about patterns you could follow when separating applications into services.
>
> **[0:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=31)** In this course, I want to teach you a specific way of thinking that will help you to approach this topic pragmatically and will enable you to solve specific problems as they come along.
>
> **[0:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=42)** To kick this off and make things more relatable, I want to sketch out the scenario that will guide us through this course.
>
> **[0:48](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=48)** You have just been hired as a chief software architect at the company called Cheapr and you know already that they want to move to Microservices.
>
> **[0:58](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=58)** During your interview, and also by doing your homework before starting the job, you have already learned a few things.
>
> **[1:04](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=64)** Cheapr is a price comparison website.
>
> **[1:06](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=66)** It lets you find the cheapest prices for large variety of items from hundreds of retailers.
>
> **[1:12](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=72)** As so often, it was initially built by the founder, now the CTO, 10 years ago and has grown considerably over the last years.
>
> **[1:21](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=81)** Today, the site features around 4 million items from different retailers and it's imperative that prices, as well as availabilities, are always up to date.
>
> **[1:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=91)** This is not a shop.
>
> **[1:32](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=92)** Customers cannot buy on the site, but they get prices, item descriptions, and availabilities, and also a link to the actual retailer shop to order the item online.
>
> **[1:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=103)** These conversions are also how Cheapr makes money.
>
> **[1:47](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=107)** Right now, there are about 90,000 registered users and 2 million visits per month on average but of course there are peak periods like on Black Friday where people visit the site to hunt for the best bargains.
>
> **[2:01](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=121)** You know already that it's a monolith.
>
> **[2:03](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=123)** It grew in size and functionality over the last few years as new features were implemented.
>
> **[2:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=128)** The technology does not really matter in this context.
>
> **[2:11](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=131)** Think something like Java enterprise or even just a large PHP site, using a framework like Symfony.
>
> **[2:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=138)** Of course, this monolith contains a whole range of different design paradigms and technologies (indistinct) at a given time, as well as an half executed attempt to use no SQL for the items.
>
> **[2:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=151)** The whole platform runs on a set of VMs in a data center, sharing some central databases as a single source of truth.
>
> **[2:40](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=160)** Currently around 80 engineers are working on the code.
>
> **[2:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=163)** They're split into around four teams to take care of different parts of the application.
>
> **[2:48](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=168)** Additionally, there is a team that does testing and another that takes care of deploying and running the site.
>
> **[2:54](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=174)** There are also six team leads holding all of this together.
>
> **[2:59](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=179)** They're all reporting to the CTO.
>
> **[3:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=182)** Does this sound familiar to you?
>
> **[3:03](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=183)** This is a typical setting, a startup, the grew in code and team size, as well as in complexity as the added new features and staff along their journey.
>
> **[3:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=193)** There's technical depth due to quick and dirty fixes as well as architectural flaws that just happen if you need to get things done fast.
>
> **[3:21](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=201)** Yet there has to be a reason why the hired you and you know already that they want to tackle a few problems.
>
> **[3:27](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/welcome-to-your-new-role?u=76281980&t=207)** Let's look at them next.

> [!info]- Semantic Content
>
> **Env Vars:** cto (2), php (1), sql (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1), find (1), php (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Start with the "why"
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=0)** - [Instructor] During your second day on the job, you gather key engineers, the team leads, product managers and the CTO to better understand the current challenges.
>
> **[0:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=9)** You know already that a re-architecture and a move to microservices is on the table.
>
> **[0:15](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=15)** But you still don't know exactly why.
>
> **[0:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=17)** And it seems risky to start going while not really understanding the problems they are trying to solve.
>
> **[0:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=23)** How would you ever be able to measure if you succeeded if you don't have to go and let it down?
>
> **[0:28](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=28)** So you ask the people in the meeting in a brainstorm fashion and they come up with the following challenges or goals and you put them on a whiteboard.
>
> **[0:37](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=37)** So the first thing you hear is they want to move everything to the cloud.
>
> **[0:41](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=41)** But it's unclear to you why this came up.
>
> **[0:44](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=44)** What are they trying to solve with this?
>
> **[0:46](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=46)** Why do they want to do this?
>
> **[0:48](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=48)** So you add one more column and call it value.
>
> **[0:52](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=52)** And you add a ranking between zero for low and five for high.
>
> **[0:57](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=57)** They should turn the focus to the only thing that really matters.
>
> **[1:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=60)** The question, why should we do it, should always be answerable with a measurable business impact.
>
> **[1:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=68)** So let's look at the cloud migration topic again.
>
> **[1:11](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=71)** Sure, this can have a business value as moving stuff to the cloud may possibly and eventually reduce costs.
>
> **[1:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=77)** But no one has a real number for this.
>
> **[1:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=80)** These are just assumptions.
>
> **[1:22](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=82)** And would any user care about the fact that everything runs now in the cloud?
>
> **[1:25](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=85)** Definitely not.
>
> **[1:27](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=87)** So let's be generous and give it a one.
>
> **[1:30](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=90)** Then you hear that the design looks old, it's not responsive and also not very user-friendly.
>
> **[1:37](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=97)** Having a modern responsive UI is good, but actually cheapest market leader and there is no competition that can outshine them with a slick UI.
>
> **[1:45](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=105)** So while this matters, it may still be just a three.
>
> **[1:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=110)** Their plans to release native apps for Android and iOS.
>
> **[1:53](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=113)** It's a fair vision might make sense, but right now there is no data at all if customers prefer native apps over proper responsive website.
>
> **[2:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=122)** It's more likely that some engineers are pushing for it because they are looking for change and want to try mobile development.
>
> **[2:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=128)** So this is rather a tool.
>
> **[2:11](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=131)** Someone says that decide to run and Kubernetes.
>
> **[2:15](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=135)** Really, that's the goal?
>
> **[2:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=137)** Is there any business value attached to it, or is it maybe because some of like shiny new things?
>
> **[2:22](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=142)** Kubernetes is a great platform, don't get me wrong.
>
> **[2:25](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=145)** But if your answer is Kubernetes at this point you likely have asked the wrong question.
>
> **[2:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=151)** This is a zero Nobody cares at this point.
>
> **[2:35](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=155)** Someone says that last black Friday the load went up so drastically that the response time of the site degraded to an extent that sometimes users couldn't access the site.
>
> **[2:45](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=165)** In an emergency operation the cluster was extended with more VMs and also the central database for scaled out to more nodes.
>
> **[2:53](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=173)** As to monolith needs plenty of resources this meant that they had to request lots of compute power from the data center to keep everything afloat.
>
> **[3:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=182)** Yeah, I know this shouldn't happen with proper resource planning, but we all know the reality, right?
>
> **[3:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=188)** This means under high load the response time reaches a critical point and frustrates users and then hardware is shown at the problem to solve the problem violate that occurs.
>
> **[3:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=198)** This is significant.
>
> **[3:19](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=199)** The site is hard to scale out, and if it's done it's super expensive.
>
> **[3:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=203)** Additionally and most importantly this affects users and hurts conversions.
>
> **[3:28](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=208)** I give this a solid five.
>
> **[3:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=211)** The monolith is justice so much code and dependencies that developers working on it locally need minutes to build and test their book.
>
> **[3:39](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=219)** They are used to staring at the progress bar for minutes until anything happens.
>
> **[3:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=223)** This really helps developer productivity and effect, of course the business doesn't directly affect users though, so let's give it still just the three.
>
> **[3:54](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=234)** Some developer says they can only release new features about five times a year.
>
> **[3:58](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=238)** At this time the monolith is tested, it's decided which features are ready for prime time, And then they cut to new release.
>
> **[4:06](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=246)** Of course, hotfixes are still possible late if anything breaks, but also they take around the day to make it into production.
>
> **[4:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=253)** I'm not making this up.
>
> **[4:15](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=255)** PayPal before they did the re-architecture needed even six months to deploy a simple text change on the front page into production.
>
> **[4:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=263)** This of course effects the power of innovation of a company.
>
> **[4:27](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=267)** There is no way to quickly add new features or try something out.
>
> **[4:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=271)** It gives the still just the three esteemed needed business impact is not so high as customers are still happy.
>
> **[4:38](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=278)** Someone from operation says that there have been three outages caused by just a small problem, and it took hours to find the problem, fix it and roll out the fix.
>
> **[4:49](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=289)** This is severe.
>
> **[4:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=290)** Customers were affected, the problem was hard to find, and then it also took long to roll out to fix.
>
> **[4:55](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=295)** Any day a new problem like this could occur.
>
> **[4:58](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=298)** And while it happens money literally goes down the sink.
>
> **[5:01](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=301)** This is of course, a straight five.
>
> **[5:05](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=305)** Someone that is currently trying to hire new talent says, that it's just so hard to find solid developers for this one technology they are using.
>
> **[5:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=313)** Also specialists have a preference for specific languages.
>
> **[5:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=317)** On top of that onboarding new hires takes forever as they have to understand the whole monolith to be productive.
>
> **[5:24](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/start-with-the-why?u=76281980&t=324)** This is a valid concern and I would give it a three.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1), super (1)
> **CLI Commands:** find (3), make (2)
> **Definitions:** is a  (3)
> **Code Identifiers:** ios (1)
> **Env Vars:** cto (1)
> **Speakers:** - [instructor] (1)

#### Defining the project scope
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=0)** - [Instructor] You now collected all the goals or let's say now requirements from all the stakeholders, and you now look at the white board and try to figure out which items are actually non-goals.
>
> **[0:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=13)** Next, you look at the remaining requirements, and you look for items that would provide immediate business value and can also be tackled with the re-architecture.
>
> **[0:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=23)** These are our focus areas.
>
> **[0:26](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=26)** Let's take, for instance, this scaling problem.
>
> **[0:29](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=29)** With microservices, you can just scale up the services that are causing the performance degradation, which requires way less resources than scaling everything.
>
> **[0:38](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=38)** Also, reducing build times can be tackled with microservices because with functionality split out into dedicated microservices, developers often don't have to build everything but just their service.
>
> **[0:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=51)** Yet, it's notable that during integration testing when everything is put together, there will be no gain.
>
> **[0:57](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=57)** Integration testing will even get more complicated as a lot of moving parts need to be combined into a running application, but maybe this would be a good time to add proper automated integration tests.
>
> **[1:10](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=70)** We'll talk about it later.
>
> **[1:12](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=72)** Also, the release frequency can be dealt with microservices.
>
> **[1:16](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=76)** This is even one main benefit they provide.
>
> **[1:19](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=79)** With microservices, this can be mitigated as they can be developed and also rolled out independently.
>
> **[1:26](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=86)** Using microservices, some companies now even roll out changes several times per day.
>
> **[1:32](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=92)** Also reducing the blast radius of errors can be partly tackled with microservices, but they aren't the solution for the whole problem here.
>
> **[1:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=102)** To find problems fast, you need some kind of monitoring.
>
> **[1:46](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=106)** Only this can really help you to find out about the problem.
>
> **[1:49](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=109)** With microservices, problems might even get more complex, as now the network layer and plenty of small containers are added to the mix.
>
> **[1:57](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=117)** Yet, rolling out to fix, as I said before, should be much faster now because now we just have to replace or fix a single service ideally.
>
> **[2:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=129)** Lastly, becoming polyglot, using various languages can attract specialists and also make the onboarding easier.
>
> **[2:16](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=136)** This is something that can be tackled with microservices.
>
> **[2:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=140)** It's very common to use a mix of languages and technologies for them.
>
> **[2:24](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=144)** For data science, you might want to use Python, and for front-end rendering, No JS and Javascript.
>
> **[2:29](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=149)** By the serious business logic should still be written in a static language like Java.
>
> **[2:34](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=154)** With microservices, this is possible, and on top of that, a new team member only has to understand their service, and their immediate dependencies.
>
> **[2:44](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=164)** So with that, you know at least what you should accomplish to make this job a success.
>
> **[2:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=170)** And of course, an API for mobile apps, a redesign, moving everything to the cloud, or even using Kubernetes is not off the table.
>
> **[2:58](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=178)** This can be done along the way, and it may be easier using microservices.
>
> **[3:03](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=183)** These are just not your main goals.
>
> **[3:06](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=186)** I'm also staying focused here.
>
> **[3:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=188)** There are dedicated courses that cover the details and benefits of microservices in greater detail, but this is out of scope for this course.
>
> **[3:16](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=196)** We want to know how to split up a monolith.
>
> **[3:19](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/defining-the-project-scope?u=76281980&t=199)** So let's take a closer look at our monolith and its structure.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2), python (1)
> **Code Keywords:** let (3), static (1)
> **Env Vars:** api (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Mapping out the current architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=0)** - [Instructor] For developing a strategy on how to split up the monolith it's of course key to understand its architecture and key components.
>
> **[0:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=8)** The most logical way to figure that out is to just check out the source code and look at the folder or package structure.
>
> **[0:15](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=15)** Depending on the use language there are also tools that can create class diagrams by using static code analysis.
>
> **[0:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=23)** At your new job you would likely sit down with a seasoned engineer look at the web UI and the code in your IDE and start drawing boxes for the key components of the system.
>
> **[0:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=33)** A high level overview is just enough.
>
> **[0:36](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=36)** The details can be covered when you actually sewn into a component at the time you start to plan its migration.
>
> **[0:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=43)** Let's now first start our little analysis by looking at the front-end.
>
> **[0:47](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=47)** This is the so-called view layer.
>
> **[0:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=50)** To get the broad overview of a semi complex page it can be sufficient to just click through it and note down the different functionalities in pages you see.
>
> **[1:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=60)** On the front end VC a category tree, a search field, lists with items per category and also as search result, the item detail page, a chart with prices and sellers that is displayed on this page and also the availability per item and seller.
>
> **[1:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=78)** Also on the front-end we do have everything related to the user.
>
> **[1:22](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=82)** There is a login, a user profile that can be edited and there's also a way to add items to a watch list which is used to notify users in case of price for watched item changes.
>
> **[1:34](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=94)** So now we have everything user-facing but there is more, stores can of course also log in or use an API to upload items so let's not forget that.
>
> **[1:45](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=105)** With that a few layers done now we have to look into the code.
>
> **[1:48](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=108)** Where are these fuse created or rendered?
>
> **[1:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=111)** Where are these fuse created or rendered?
>
> **[1:55](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=115)** Where our user actions like submitting a search query or adding something to the virtual list handled?
>
> **[2:01](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=121)** As our monolith is following the very popular model view controller architecture this is done on the controller layer.
>
> **[2:10](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=130)** I don't want to go into too much detail here just now but every box here is a controller in each item in this controller provides a set of functionalities where so-called actions.
>
> **[2:22](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=142)** The item controller takes care of everything related to items, the user controller handles users but also watch lists and also has an action that is called once per 12 hours to run through all users watch lists to check if there was a price change.
>
> **[2:38](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=158)** So you look at the engineer next to you and ask, "This is an incredibly expensive way to do it isn't it?"
>
> **[2:44](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=164)** And he answers, "Yes, it is but this is how it is right now and it's really hard to change."
>
> **[2:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=170)** Hearing that you'll make a mental note that this is something you might want to tackle.
>
> **[2:56](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=176)** But let's continue.
>
> **[2:57](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=177)** The store controller provides everything for the store owner, means authentication also way to edit the store profile and an action to upload an update all items prices in the visibilities in a defined text format.
>
> **[3:11](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=191)** So these are the controllers.
>
> **[3:14](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=194)** One level deeper we have the model.
>
> **[3:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=198)** These are basically classes that give us programmatic access to the underlying persistence layer the databases.
>
> **[3:25](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=205)** Notable at the database layer is that some years back the items were moved into Mongo DB but that's where the whole initiative stopped.
>
> **[3:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=213)** All other data is stored in my SQL in one large database with many tables.
>
> **[3:39](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=219)** So this is what we are dealing with here I think I already have an age with service to split it first.
>
> **[3:45](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=225)** This may be a good occasion for you not to stop the video, reflect over the architecture you see and think about how to approach this.
>
> **[3:53](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/mapping-out-the-current-architecture?u=76281980&t=233)** During the rest of the course we will get back to this key map a few more times.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), static (1), continue (1), this. (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Env Vars:** ide (1), api (1), sql (1)
> **CLI Commands:** make (1), mongo (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)


### 2. Splitting Capabilities into Services

#### Design mistakes and how to avoid them
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=0)** - [Instructor] We are close to starting to split out first microservices, and this is a good point in time to go through approaches that have proven recipes for failures.
>
> **[0:10](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=10)** Let's imagine you want to split out everything related to items.
>
> **[0:15](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=15)** And someone said that micro-services should only provide exactly one function.
>
> **[0:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=20)** There are micro-services after all.
>
> **[0:22](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=22)** So you pretty much met each of the controllers actions to individual services.
>
> **[0:28](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=28)** Search Service should provide search functionality and come back with search results.
>
> **[0:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=33)** Item List Service, should provide add item lists per category or based on a search query.
>
> **[0:40](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=40)** Item Service should fetch a single item.
>
> **[0:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=42)** Item detail service should fetch the items detail information.
>
> **[0:47](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=47)** And then there is the item crud service which provides everything for editing an item.
>
> **[0:53](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=53)** Separation of concerns is important, so the item service needs the search service to create a list based on a search query.
>
> **[1:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=60)** The item detail service, needs to item service to actually fetch an individual item.
>
> **[1:06](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=66)** And also the item crud service, is by definition only allowed to write operations and uses to item service to fetch an item.
>
> **[1:15](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=75)** During development, you figure out that you're missing availability data on the item detail service.
>
> **[1:21](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=81)** So you need a quick workaround and you expose a function on the item controller in the monolith to the web to give you the availability for an item.
>
> **[1:30](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=90)** Also, most of these services need to access to item database table.
>
> **[1:36](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=96)** Now you'll figure out that the services should not do the database calls directly after all we want services and APIs, right?
>
> **[1:44](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=104)** So you add data service which abstracts away that direct database access.
>
> **[1:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=110)** We all learned that we should avoid redundancy in code and we identify that the access to this data API could be moved out into a shared module data leap, which fill from now on house all the data access logic for all services in is a build time dependency for them.
>
> **[2:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=129)** For the left arm, instead of course, each of these services provides a rest endpoint to actually access it.
>
> **[2:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=137)** Do you see the hairball we just created?
>
> **[2:19](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=139)** Let's look at the problems.
>
> **[2:22](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=142)** Be completely over abstracted and now our services have only very limited functionality.
>
> **[2:28](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=148)** Basically, exactly one action that we migrated out of the controller.
>
> **[2:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=153)** This is called a NAMIC services.
>
> **[2:37](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=157)** This abstraction automatically leads to services calling each other to accomplish a simple task.
>
> **[2:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=163)** We have dependencies back to the monolith, so we depend on the monolith, slow release cyclist when we want to do any change.
>
> **[2:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=171)** That said, sometimes temporarily relying on the monolith cannot be avoided.
>
> **[2:57](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=177)** We tie the services together by using the same database tables.
>
> **[3:01](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=181)** So teams developing the services need to constantly sync up on how the data and tables might look like.
>
> **[3:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=189)** We created the central data access service, which looks like a good idea but just adds another level of abstraction while even increasing the coupling between those services.
>
> **[3:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=200)** And then we also created shared code.
>
> **[3:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=203)** Which of course coupled services or rather the teams developing them even more.
>
> **[3:29](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=209)** There's also increased complexity on the monolith side, as the controller now has to know all these services enter end points.
>
> **[3:37](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=217)** In summary, this picture shows everything you should not do when building microservices.
>
> **[3:44](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=224)** Instead we want to design and migrate around capabilities and not code.
>
> **[3:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=230)** What does this mean?
>
> **[3:52](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=232)** We still have our item controller and now instead of creating a service for each individual action the controller provides, we create one item service.
>
> **[4:03](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=243)** This item service provides all capabilities related to dealing with items.
>
> **[4:10](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=250)** This also means, that we can migrate all the relate data into a database that is owned by the service only.
>
> **[4:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=258)** And of course, during the migration the item controller only has to know one service and can delegate the functionality to it.
>
> **[4:27](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=267)** We will look at the concrete examples in a bit.
>
> **[4:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=271)** So let me sum this up and derive some best practices from what we just learned.
>
> **[4:36](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=276)** Again design your services around capabilities and not around functions in your code.
>
> **[4:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=283)** Make it your mantra that each service should be so self-contained that it can be developed and deployed individually.
>
> **[4:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=290)** This means no or at least only few interdependencies with other services.
>
> **[4:58](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=298)** And the next point is something we will cycle back into the next chapter as well.
>
> **[5:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/design-mistakes-and-how-to-avoid-them?u=76281980&t=302)** Make evolutionary atomic steps that allow you to delegate approximate functions to new services, leaving the system in a better state than it was before.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), module (1), self (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (1), namic (1)
> **Analogies:** imagine (1), picture (1)
> **Cross-References:** next chapter (1)
> **Speakers:** - [instructor] (1)

#### Refactor or rewrite?
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=0)** - [Instructor] Frankly, the expression, splitting out monolith into microservices might be misleading.
>
> **[0:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=7)** It leads to the assumption that you can just take your legacy code and copy it into microservices.
>
> **[0:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=13)** This would make it more of a refactoring approach.
>
> **[0:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=17)** So is it possible to just reflect your code into microservices, maybe copy over controller into service put an AP in front of it and call it a day?
>
> **[0:28](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=28)** Let's have a closer look at this topic and spoiler alert, I would recommend to rewrite because if you're attempted to reuse your code as is, it might be because you're again thinking in code and individual functions and not in capabilities.
>
> **[0:46](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=46)** If you look at your legacy code, how much of this code does really provide the capability and how much is boilerplate code related to the monolith it is running on.
>
> **[0:57](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=57)** If you just copied the code, you also just missed the opportunity for long cue improvements.
>
> **[1:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=62)** Basically you are migrating technical depth with it.
>
> **[1:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=67)** By using microservices, we can choose freely which languages to use for an individual service.
>
> **[1:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=73)** All that matters is the API it provides.
>
> **[1:16](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=76)** If you stick to your code, you miss that opportunity.
>
> **[1:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=80)** If you look at what is left of the code that can really be reused in which effort it means to adopt it to the microservice starting from scratch is almost always faster.
>
> **[1:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=91)** There is of course, no black and white and there are exceptions.
>
> **[1:34](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=94)** Sometimes there is that one capability that is relatively independent from the rest of replication, we call this orthogonal and pretty complex.
>
> **[1:44](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=104)** Think about calculations or business intelligence.
>
> **[1:48](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/refactor-or-rewrite?u=76281980&t=108)** If this capability can really be extracted into service it might be worth giving this a try instead of getting lost in a rewrite.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** api (1)
> **Exercise Files:** boilerplate (1)
> **Definitions:** we call this (1)
> **Speakers:** - [instructor] (1)

#### Choosing your first migration target
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=0)** - [Instructor] After doing all your research, you pretty well understand the current monolith.
>
> **[0:04](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=4)** It's now time to plan for the first migration step.
>
> **[0:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=9)** Let's look at the Selection Criterias for such a service that we want to move out.
>
> **[0:15](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=15)** We want to migrate the capability that is rather on the edge.
>
> **[0:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=18)** This means that it does not have too many dependencies to and from the rest of the application, again this is what we call orthogonal.
>
> **[0:28](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=28)** It should also be a rather small and simple capability that isn't to business critical.
>
> **[0:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=33)** And connected to that, it should have limited simple functionality that can be developed fast.
>
> **[0:41](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=41)** Now, when looking at the architecture again and after reviewing all the components the functionality related to the user stands out.
>
> **[0:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=51)** Even without it, the site would still work.
>
> **[0:54](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=54)** You might not be tempted to move out everything the user controller provides.
>
> **[0:59](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=59)** When looking closer, though, we see that it contains the profile management and all the operations of it as well as the whole watch list and alert management and also everything related to authenticating users.
>
> **[1:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=73)** That's not small, that's actually plenty and it's even different capabilities because, for instance, the watch list and alerts should actually be seen as a capability of its own.
>
> **[1:26](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=86)** So this is way too large for one migration but what about authentication?
>
> **[1:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=93)** User authentication is a capability of its own and doesn't really have many dependencies to the rest of the application.
>
> **[1:40](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=100)** All it has to do is maintain user credentials and comparing them with the ones provided by the user.
>
> **[1:47](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/choosing-your-first-migration-target?u=76281980&t=107)** So let's say let's try to split out authentication into service of its own.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Splitting out your first service
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=0)** - The authentication capability is the perfect service to move out, and you're now on the drawing board to provide guidance to the developers that will lead to implement it.
>
> **[0:11](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=11)** First, we have to have a closer look at the functionality provided by the user controller in our monolith.
>
> **[0:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=17)** And there are a few actions that we didn't show before but are related to authentication.
>
> **[0:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=23)** First there authenticate action of course.
>
> **[0:26](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=26)** This is needed to do the authentication with username and password.
>
> **[0:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=31)** But there's also the profile management that we need to look into.
>
> **[0:34](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=34)** When a user creates a new profile, they also provide their username which is the email address and the password.
>
> **[0:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=42)** So this needs to somehow be connected to the service which should own all the data related to authentication in the future.
>
> **[0:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=51)** Also, profiles can be updated and along with the user information, the email and the password can be changed as well.
>
> **[0:59](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=59)** Additionally, profiles can be deleted.
>
> **[1:01](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=61)** This is also something that needs to be reflected in our service as we don't want to end up in an inconsistent state where the service still holds users that were deleted from the user database already.
>
> **[1:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=73)** Knowing this, we can go ahead and design what the new authentication service needs to provide.
>
> **[1:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=80)** Now in service land, we are talking about routes that are provided via a rest interface and can be accessed via HTTP calls.
>
> **[1:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=91)** First we need a route that authenticates a user with a username and a password, and we'll return a user ID on success.
>
> **[1:40](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=100)** This user ID can then be stored in a session and used to fetch all the user related data.
>
> **[1:46](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=106)** Then we need a route that creates a user in the authentication database.
>
> **[1:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=111)** It needs the user ID that was already created on the monoliths plus an email and a password.
>
> **[1:58](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=118)** Then we need routes to update email and password.
>
> **[2:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=122)** And also we need a way to delete a user from the authentication database.
>
> **[2:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=128)** Of course, all this data needs to go somewhere, so we also need to add a database and the table to the service.
>
> **[2:14](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=134)** Let's call it user authentication.
>
> **[2:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=137)** If this is now my SQL or something like Mongo DB is completely up to the service.
>
> **[2:24](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=144)** What we know though is that this table needs to store the user ID, the email address and also store the password using the same encryption mechanism that is used on the monolith.
>
> **[2:36](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=156)** Next, we also have to change the monolith to extend the current operations with cause to the service.
>
> **[2:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=162)** So for example, when we authenticate this now has to be done against a new service.
>
> **[2:47](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=167)** Or when a user is created, the service has to be called to create the user there as well.
>
> **[2:53](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=173)** Technically, what we are creating here follows the proxy pattern.
>
> **[2:56](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=176)** So local functions within the monolith are proxying and delegating the work to the respective service.
>
> **[3:04](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=184)** So on the drawing board, this looks now pretty good already.
>
> **[3:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=188)** But how can we do the action migration from the old way to the new service?
>
> **[3:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=193)** This is a critical step and ideally there should be no downtime involved.
>
> **[3:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/splitting-out-your-first-service?u=76281980&t=198)** I will show you that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), interface (1), delete (1), let (1)
> **Env Vars:** http (1), sql (1)
> **CLI Commands:** mongo (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)

#### Zero downtime migrations
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=0)** - [Instructor] The business made pretty clear that this whole initiative that is planned must not mean that the application has to be taken down.
>
> **[0:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=8)** After all the money's made with conversions and the minute downtime can be directly measured in dollars.
>
> **[0:14](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=14)** But being a good architect, you also want to provide a migration past that doesn't mean a complete outage.
>
> **[0:21](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=21)** Also you want to be able to abort the migration at any point in time.
>
> **[0:26](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=26)** It's either all or nothing.
>
> **[0:27](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=27)** And if something fails, the application should not end up in a chaotic, half migrated state.
>
> **[0:34](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=34)** So how can we accomplish this?
>
> **[0:36](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=36)** First, we have to prepare the monolith and add the new functionality needed.
>
> **[0:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=42)** So you will tell the responsible team to implement the service proxy methods part and here comes the important part.
>
> **[0:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=50)** This new functionality should be hidden behind the feature toggle.
>
> **[0:55](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=55)** These are programmatic switches that can be turned on or off during runtime.
>
> **[1:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=62)** Technically, it's pretty much if statements in the code.
>
> **[1:06](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=66)** Let's call the toggle service authentication.
>
> **[1:10](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=70)** If it's on, then the new proxy functions are life but we also add another toggle and call it service authentication migration.
>
> **[1:21](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=81)** If this is on, all site functionality related to the user, be it signing up or changing the profile or logging in should be disabled.
>
> **[1:32](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=92)** Instead, the user should get the friendly message that there is a scheduled maintenance and that they should try again in a bit.
>
> **[1:40](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=100)** This is not perfect, but still won't harm business too much.
>
> **[1:44](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=104)** We cannot avoid it because we have to leave the user database in a consistent state.
>
> **[1:49](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=109)** Imagine the user changes the password by the immigration runs.
>
> **[1:52](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=112)** No one knows where this would go then.
>
> **[1:55](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=115)** Then the need to be scripts that actually copy over the user IDs, email addresses and encrypt the passwords to the new database.
>
> **[2:03](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=123)** Here, I think I don't have to mention that this should be thoroughly tested in a non production environment.
>
> **[2:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=129)** And finally, the new version of the monolith is to develop hidden new features needs to be released.
>
> **[2:15](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=135)** Once this is done, we are ready for prime time.
>
> **[2:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=137)** Maybe don't do this on a Friday afternoon just an hour before you have a candlelight dinner planned with your significant other, because things might fail.
>
> **[2:27](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=147)** When you're ready, ensure that everything should work as intended.
>
> **[2:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=151)** You have to make sure that everyone involved is on deck and then you toggle this service authentication migration switch.
>
> **[2:40](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=160)** Now the user database is not read or written too.
>
> **[2:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=163)** No changes are being made, it's consistent.
>
> **[2:47](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=167)** Then you trigger the automated migration scripts and tests.
>
> **[2:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=170)** If something fails here, just switch the migration toggle back and no harm was done, everything runs as before.
>
> **[2:59](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=179)** Otherwise, now switch to service authentication on.
>
> **[3:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=182)** Now this is life, but still the migration is on as well.
>
> **[3:06](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=186)** So users can still not log in.
>
> **[3:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=189)** Finally, you switched the migration toggle off and then your new service should receive the first calls from the monolith as soon as users start to try to use the respective site functionality.
>
> **[3:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=203)** We will come to this again, but having some monitoring in place that makes sure that the service runs stable will ease your mind considerably here.
>
> **[3:32](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/zero-downtime-migrations?u=76281980&t=212)** Next we will look into migrating more complex capabilities.

> [!info]- Semantic Content
>
> **UI Navigation:** toggle (6), switch to (1)
> **Code Keywords:** switch (3), finally, (2), let (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Migrating interdependent, complex capabilities
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=0)** - [Narrator] So far, we split out the simple service that did not have many dependencies and was easy to migrate but of course things are really that easy.
>
> **[0:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=9)** When we learned about the monolith architecture you already noticed that the watch list and alerting capability could really use some improvements.
>
> **[0:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=18)** Right now every 12 hours the whole watch list table is processed to look for price changes on the items and if so, an alert is sent to the respective user.
>
> **[0:29](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=29)** This is expensive, time consuming and also not effective.
>
> **[0:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=33)** Moving this out of the monolith into a service that may be even asynchronous and event based would really remove a lot of strain from the monolith but the watch list depends on different parts of the application.
>
> **[0:46](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=46)** First, the user can add an item to the watch list.
>
> **[0:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=50)** Right now one watch list entry contains the user ID, the item ID and the price at the time the entry was added.
>
> **[0:58](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=58)** Then we have send alerts which fetches the entries from the watch list and then compares the price on the watch list with the one in the item table and if the price was changed the notification preferences for the users are fetched and the price alert is sent according to these preferences.
>
> **[1:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=77)** So that's many moving parts right now and this is all within the monolith.
>
> **[1:21](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=81)** Now the fun part of being an architect starts.
>
> **[1:24](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=84)** Let's sketch out how we could create the service that not only encapsulates the capabilities but also is far better than what we have now.
>
> **[1:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=93)** First, this is now a great occasion to move a part of the application to the cloud as all cloud infrastructure providers come with services that can help us build in what we need without having to deal with running the infrastructure behind it.
>
> **[1:48](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=108)** For instance, we can now use a so-called serverless function that provides an API that accepts an item ID and the price and stores it into a queue.
>
> **[1:59](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=119)** Next we of course need the watch list per user.
>
> **[2:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=122)** For that we create a new serverless function and this function provides the create update and delete functionality (indistinct) for the watch list and also of course stores this data in a database hosted on the cloud.
>
> **[2:16](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=136)** Let's know hook this up with the monolith before we proceed.
>
> **[2:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=140)** All we need to do now is to proxy the watch list functions to the new watch list service and we can at least maintain the watch list again.
>
> **[2:29](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=149)** Yet the price change service isn't connected yet.
>
> **[2:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=153)** So when would be a good point in time to register price change maybe right when the price was updated by the seller and we can do this asynchronously.
>
> **[2:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=162)** We don't care about how the service stores it and its return value.
>
> **[2:46](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=166)** So we don't have to wait for it.
>
> **[2:48](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=168)** This is called fire and forget and this is rather inexpensive on the monolith side.
>
> **[2:54](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=174)** Now we have everything that we think we need in the cloud.
>
> **[2:57](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=177)** Now we have to add a consumer function that is triggered by a new item added to the queue and it will then look into the watch list table and try to find a user that watches this given item ID and if we find a user be used to notification service all cloud providers provide to send out the notification.
>
> **[3:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=198)** Do you see that we missed something here?
>
> **[3:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=200)** In the monolith we had notification preferences like the email address of the user or a mobile phone number but we are lacking this information now.
>
> **[3:30](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=210)** We have some redundancy on the email address already for the authentication.
>
> **[3:35](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=215)** We really don't want to store the notification preferences with our watch list.
>
> **[3:40](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=220)** A user service would be good.
>
> **[3:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=222)** We could vary it for the preferences but we decided to do this further down the road as there are some privacy topics to solve first.
>
> **[3:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=230)** So what can we do now?
>
> **[3:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=231)** How can we get these notification preferences out of the monolith?
>
> **[3:56](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=236)** This is a good opportunity to go for the kind of pragmatic approach that is sometimes needed to get the job done.
>
> **[4:03](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/migrating-interdependent-complex-capabilities?u=76281980&t=243)** I will show you how in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2), delete (1)
> **CLI Commands:** find (2)
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Providing a migration API layer
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=0)** - [Instructor] I said before that the service should not court back into the monolith, and this is still true.
>
> **[0:06](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=6)** But there may be situations when a service needs information that is not yet available through another service, but instead still stored somewhere deep in the monolith.
>
> **[0:16](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=16)** So we need a way to get this data, but we also want to do it in a controlled way and not maybe just make the database readable through the web.
>
> **[0:25](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=25)** Ideally we need an end point that is identical to what the service would need to provide.
>
> **[0:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=31)** So if we look back at our virtual example from before, this would be when we would get together with the monolith team and asked them to expose a bell security API to the web.
>
> **[0:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=42)** Ideally we could already tell them all in points we would need going forward.
>
> **[0:47](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=47)** For the watch list, we would need an end point that returns to notification preferences for a given user.
>
> **[0:54](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=54)** Now our notify watcher service can call back home to get the notification preferences and then provide them to the notification service.
>
> **[1:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=62)** And we would have a working watch list service again.
>
> **[1:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=67)** Of course, STM many moving parts like modifying the monolith as well as providing and testing the whole cloud infrastructure.
>
> **[1:14](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=74)** Plus the final migration.
>
> **[1:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/providing-a-migration-api-layer?u=76281980&t=77)** Creating this watch list service can really be a weeks to months long project.

> [!info]- Semantic Content
>
> **Env Vars:** api (1), stm (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### What about the front end?
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=0)** - [Instructor] You may have noticed that the services we created, were all just providing the data by a rest API and not the user interface, the HTML as such.
>
> **[0:11](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=11)** If you look into the literature, there's some opinion that microservices should also come with its own user interface or front-end and that monolithic front-ends are an anti-pattern.
>
> **[0:24](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=24)** Let's have a look at these so-called micro front-ends.
>
> **[0:29](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=29)** So we have here our webpage and this should be a item detail page.
>
> **[0:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=33)** It consists of an item picture and its description and also the item prices.
>
> **[0:39](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=39)** For the prices, we provide the price service.
>
> **[0:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=42)** But this time it does not only provide an API to just fetch the data, no, it will actually return HTML in JavaScript for the website.
>
> **[0:53](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=53)** The same is true for the item image and description.
>
> **[0:57](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=57)** The page shown to the user is a composite of all user interface parts the participating services provided.
>
> **[1:05](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=65)** Yet how should this happen?
>
> **[1:06](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=66)** If you know HTML, then this might be the return of IFrames.
>
> **[1:11](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=71)** These are sections on the webpage that show content from another URL.
>
> **[1:16](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=76)** They have huge flaws though and are actually frowned upon.
>
> **[1:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=80)** Most importantly, the content inside the IFrame has no access to the page it runs on.
>
> **[1:27](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=87)** It's more or less a sandbox.
>
> **[1:28](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=88)** So how will a single page application where one click here triggers a page change there work then?
>
> **[1:35](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=95)** IFrame content also cannot inherit this task from the parent page.
>
> **[1:39](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=99)** So that will be fun when each team does its own styling and decides how a pattern should look like or what the ideal font size is.
>
> **[1:47](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=107)** And also if the content gets too long the overflowing parts will be either hidden or create scroll bars within the page.
>
> **[1:56](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=116)** So I think you agree that this does not look like a good solution.
>
> **[2:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=120)** Another way to approach this would be JavaScript and rather modern frameworks like View Chairs, React, or Angular.
>
> **[2:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=129)** With JavaScript, HTML can be fetched from a service and rendered into the page.
>
> **[2:14](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=134)** Also, the rendered content will be styled to the page style.
>
> **[2:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=138)** Yet, what is with actions that affect another component?
>
> **[2:22](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=142)** Think about an add to watchlist button that will asynchronously add an item to the watchlist.
>
> **[2:29](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=149)** And then also update the watchlist element in the header of the page.
>
> **[2:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=153)** Modern JavaScript frameworks provide dedicated functionality to cover this use case.
>
> **[2:38](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=158)** With micro front-ends this gets extremely hard to maintain and test if the rendered HTML and the JavaScript relies on functionality that is only available when it runs in the context of the whole page.
>
> **[2:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=171)** Then on the browser every bite transferred to the user matters for the overall page performance and JavaScript libraries interdependencies tend to be huge.
>
> **[3:01](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=181)** If every component comes with their own JavaScript dependencies, it's inevitable that two components use the same third party library without knowing, which would mean it would be transferred to the user twice.
>
> **[3:14](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=194)** Of course, now we can talk about discipline and those teams can talk with each other, but then again we're pretty much back at interdependencies.
>
> **[3:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=203)** Also, if I create a website I very often cache rendered pages that were composed by data from various services on the server side.
>
> **[3:32](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=212)** Even caching for just one minute can really reduce the overall load on the services.
>
> **[3:38](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=218)** This is also not possible with a micro front-end.
>
> **[3:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=222)** And finally, the HTML page is still by the way a browser.
>
> **[3:46](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=226)** The HTML works a monolith that has now dependencies to many other services which it has to hold together.
>
> **[3:54](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=234)** The browser is not a microservice management platform though.
>
> **[3:59](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=239)** Needless to say, I don't believe in micro front-ends.
>
> **[4:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=242)** I think it's fine if the front end stays monolithic.
>
> **[4:06](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=246)** This ensures consistent look and also has the best web performance.
>
> **[4:10](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=250)** In my opinion, it's enough if microservices just return data and not HTML in JavaScript.
>
> **[4:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/what-about-the-front-end?u=76281980&t=257)** In the next video I will show you how our application could look like after the migration and how you could then move towards a more modular and modern front-end.

> [!info]- Semantic Content
>
> **Env Vars:** html (8), api (2), url (1)
> **Code Keywords:** interface (3), let (1), case. (1), finally, (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Making the final step
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=0)** - [Instructor] It would be out of scope and does not provide much failure to show the migration for each and every capability of our monolith.
>
> **[0:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=7)** By now, you should have a good understanding about the underlying technical concepts of such migrations.
>
> **[0:14](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=14)** I also did not cover how to orchestrate services, like with Kubernetes.
>
> **[0:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=18)** There are dedicated courses for this.
>
> **[0:21](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=21)** What we're left now with is the skeleton of the monolith, pretty much.
>
> **[0:26](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=26)** Models and persistence layer are gone and all of control functionality and business logic is now proxy to the respective services, the so-called API gateway, which is usually provided by the service orchestration you're using.
>
> **[0:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=42)** It basically routes your request to the respective service, or if services are redundant, to a service instance using load balancing.
>
> **[0:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=51)** A redesign of the website is now relatively easy, as all business logic has been moved out into services that can be developed quickly and independently.
>
> **[1:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=62)** What I see very frequently is that after the migration, the rather bulky enterprise web service stack is replaced with a more modern platform, like Node.js.
>
> **[1:11](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=71)** Node.js is a great fit here as it has asynchronity built into its core, and one can, for instance, compose a view by the result of calls to multiple services, where all of the service calls can be done in parallel.
>
> **[1:24](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=84)** In general, the overall memory and CPU footprint of a Node application is very small compared to say, a Tomcat server.
>
> **[1:32](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=92)** Needless to say, that Node.js also comes with frameworks that make rendering webpages or providing an endpoint for mobile applications very easy.
>
> **[1:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=102)** So this would be our final application, but actually you're still sitting on your drawing board planning this whole migration process.
>
> **[1:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=110)** What you haven't considered yet is that cheaper consists of people and processes, that the microservice migration is not just about code.
>
> **[1:59](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=119)** I'd even say that the organizational transformation needed is as important as the technical one when moving to microservices.
>
> **[2:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/making-the-final-step?u=76281980&t=127)** I note this is not the most exciting topic for an engineer, but please stay with me to look at the organizational challenges in the final chapter because they're really key for your success when moving to microservices.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), make (1)
> **File Paths:** node.js (3)
> **Env Vars:** api (1), cpu (1)
> **Code Keywords:** this. (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 3. Required Operational and Organizational Maturity

#### It's not just about code: Meet Mr. Conway
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=0)** - [Instructor] So far, we talked a lot about code and that's just natural being engineers this is how we like to see the world.
>
> **[0:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=7)** But the initiative you were hired for is as much about people and teams and processes, as it is about code.
>
> **[0:15](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=15)** By now, you reviewed the current architecture and came up with a set of evolutionary steps that will lead to a microservice architecture eventually.
>
> **[0:24](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=24)** Now you're going to present this to the company's leadership team and task the engineering organization to make this happen.
>
> **[0:32](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=32)** By doing so you will either set the project up for failure or destroy the whole engineering organization because you forgot to think about the organizational transformation that has to come with the technical one.
>
> **[0:45](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=45)** In 1967 Melvin E Conway a programmer made the following statement that became a fundamental law of system design.
>
> **[0:53](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=53)** Any organization that designs the system will produce a design whose structure is a copy of the organization's communication structure.
>
> **[1:04](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=64)** If you flip the statement round in the plight to a microservice transformation it's fair to say that if you want to transform a system to a new architecture, your communication or team structure needs to undergo a transformation as well.
>
> **[1:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=80)** Let's look at our monolith into new service structure to understand that better.
>
> **[1:25](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=85)** This is a more high level few of the units the monolith consists of.
>
> **[1:30](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=90)** In the beginning we said that there are 80 engineers working in around 6 teams.
>
> **[1:36](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=96)** The odds are very high that currently they are is a team for each box in this diagram.
>
> **[1:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=102)** So there is a dedicated team for the business logic as there is a team working on the data access layer and also one or two teams working on the front end and so on.
>
> **[1:53](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=113)** They need to align on the boundaries between the subsystems and the once they're communicating with.
>
> **[1:59](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=119)** Consequently, the front end person will rarely have to sync with the people working on the database.
>
> **[2:05](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=125)** But now we are moving to microservices.
>
> **[2:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=128)** And microservice consists of at least the Rest API, the business logic and everything related to the data access and persistence for that given service.
>
> **[2:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=138)** Also, there should be a person that works together with the UI team at large to define which data is needed there and how it would look like.
>
> **[2:26](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=146)** This means to create a microservice you will need people from each part of the monolith, and it's rather intuitive to create a dedicated team per microservice.
>
> **[2:37](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=157)** For instance, you will have a watchlist team then.
>
> **[2:41](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=161)** If we break this down into so-called full-time equivalents these are people working full-time on something we might end up with a team size shown in the table.
>
> **[2:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=171)** Of course, this is a ballpark number but nine is a realistic size.
>
> **[2:56](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=176)** This also aligns with the two pizza rule Amazon has when they say that in a team meeting two large pizzas need to feed the whole team.
>
> **[3:06](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=186)** Now you cannot just stuff people into new teams without friction.
>
> **[3:11](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=191)** Of course, microservice teams are heterogeneous and new people need to learn working together.
>
> **[3:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=198)** At the same time, we cannot stop our monolith.
>
> **[3:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=200)** It has to be still stay functional.
>
> **[3:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=203)** Maybe with innovation slowing down a little.
>
> **[3:26](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=206)** If you make people stay solely with the monolith but others move to the cool new service teams, they might feel like solely working on legacy now.
>
> **[3:35](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=215)** Which is true and no one really wants to work on legacy systems.
>
> **[3:40](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=220)** As Conway said, communication structures mirror the system structure.
>
> **[3:45](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=225)** So the old ways of communication and collaborations likely want to do it anymore.
>
> **[3:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=230)** Of course there is no single solution for all this problems but if you follow the following principles chances are good that you will find an iterative approach that won't destroy the company or make a project a failure.
>
> **[4:05](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=245)** First, make sure that you involve teams early in the process.
>
> **[4:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=249)** Don't make it a surprise that a change of the technical structure will also require organizational changes.
>
> **[4:16](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=256)** Maybe make a slow transition where people are working like 30% on the old and 70% on the new system to avoid that individuals feel stuck on the legacy path.
>
> **[4:28](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=268)** Throughout the whole process strive for collaborative decisions.
>
> **[4:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=273)** Bring in your expertise and advice, but make it a team effort.
>
> **[4:37](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=277)** Only then you will have the real buy in bare critical mass of people.
>
> **[4:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=282)** Also, this may not be the perfect time to switch to an EHR development process for your microservices.
>
> **[4:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=290)** So maybe working the old ways on the monolith but on the microservices, just rethink how you're doing your work.
>
> **[4:59](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=299)** And also very important, your goal is not to create many new silos but the vibrant culture of cross team collaboration.
>
> **[5:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/it-s-not-just-about-code-meet-mr-conway?u=76281980&t=307)** This requires a very defined way on how services are documented and specified in where this information can be found by others.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7), find (1)
> **Definitions:** is a  (7)
> **Code Keywords:** let (1), require (1), switch (1)
> **Env Vars:** api (1), ehr (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Provide up-to-date API documentation with Swagger
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=0)** - Conway's law tells us that system mirror organizational structures and communication patterns.
>
> **[0:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=7)** As such, well-defined interfaces between systems, as well as between people, are important to make your microservice migration a success.
>
> **[0:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=17)** At Cheaper, you already learned that you have to do way more than just design systems.
>
> **[0:22](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=22)** You have to find new ways of cooperation and rearchitecture the organization along with the code.
>
> **[0:29](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=29)** And here, documentation and processes are key.
>
> **[0:34](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=34)** Previously, I simply painted a few boxes for the REST API, but do we actually know how the data should be provided to the update route in our picture?
>
> **[0:44](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=44)** Will it be a post or a put request, and how should the payload look like?
>
> **[0:48](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=48)** Without the proper API documentation, getting alignment on this will create a lot of friction and noise.
>
> **[0:56](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=56)** Why not automatically generate API documentation from code?
>
> **[1:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=60)** The tool of choice to do this today is called swagger.
>
> **[1:04](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=64)** It comes with a software as a service offering, but the open source solution can also be installed locally.
>
> **[1:11](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=71)** Swagger offers a declarative way to describe APIs, but can also be used to auto-generate API documentation from code and inline comments.
>
> **[1:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=80)** It also lets you try out these APIs, so it provides more or less a sandbox to send and fetch data and verify the payload before writing a line of code.
>
> **[1:30](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=90)** If you establish a central hub for all the API documentation and make sure it's up to date, you already have solved a huge problem.
>
> **[1:38](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/provide-up-to-date-api-documentation-with-swagger?u=76281980&t=98)** You should establish this from day one.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), rest (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is called (1)
> **Analogies:** picture (1)
> **Speakers:** - conway (1)

#### Streamline cross-team collaboration with Inner Source
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=0)** - [Announcer] With the monolith, the communication between teams was pretty much limited to boundaries that want your head to other tiers.
>
> **[0:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=8)** The people involved, usually knew each other well and had their own established ways of coordinating which work needs to be done.
>
> **[0:16](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=16)** Now with all the service teams, the whole ecosystem gets way more diverse and it gets harder to coordinate work between all these various new teams.
>
> **[0:27](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=27)** Previously we implement the Watch list service, in a way so that it calls back to the mono list to get the communication preferences of a user.
>
> **[0:36](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=36)** Now finally, we also have a user service, but still lack this one method to get this piece of information.
>
> **[0:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=43)** If you're on the virtual list service, how can you make sure that the needed functionality is implemented on the user service?
>
> **[0:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=51)** Of course you can just ask a team lead or product manager to get this feature.
>
> **[0:56](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=56)** Maybe you bump into them at the coffee machine or you let them know that email or Slack but this is pretty random and also not reproducible.
>
> **[1:05](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=65)** You can only keep nagging until you see this feature and you will only learn about it if someone tells you.
>
> **[1:12](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=72)** So that sounds not like a good way to do this.
>
> **[1:16](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=76)** You can also create an ticket in your system.
>
> **[1:19](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=79)** This is reproducible, but you rely on the other team to make it happen.
>
> **[1:22](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=82)** And this is sometimes slow.
>
> **[1:25](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=85)** Why can't you just contribute this feature to their code?
>
> **[1:29](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=89)** Wouldn't that solve all these problems?
>
> **[1:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=91)** The question is, what do you need to easily contribute to another project?
>
> **[1:37](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=97)** Can you think of an example of many people collaborating with each other with great success?
>
> **[1:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=103)** Ever heard of open source?
>
> **[1:45](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=105)** If you applied techniques from open source to proprietary software development, it's called Inner Source.
>
> **[1:53](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=113)** So what would you need to do to foster this Inner Source spirit at cheaper to enable better cross team collaboration?
>
> **[2:01](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=121)** Inner Source is a large topic, with much documentation to be found online.
>
> **[2:05](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=125)** But you start out with just defining a few simple rules that come with Inner Source to see how it goes.
>
> **[2:12](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=132)** First of all, we need a proper structure in our version control system anyways.
>
> **[2:16](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=136)** And of course each service has to have a repository of its own.
>
> **[2:21](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=141)** Like an open source, there are rules to follow, to get contribution accepted.
>
> **[2:26](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=146)** Maybe one has to create an issue where they describe exactly what they intend to do.
>
> **[2:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=151)** Maybe a certain code style is enforced.
>
> **[2:33](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=153)** It's completely up to the leadership of the respective project or service to define these rules.
>
> **[2:40](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=160)** Then there needs to be technical documentation that on-boards anyone new to the code.
>
> **[2:46](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=166)** This looks like a chore, but if teams start out with writing a specification, along with the code, this will help everyone involved as this captures the reasoning where things are done as they're done.
>
> **[2:58](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=178)** Of course, this specification has to live in the repository in the version control system as well.
>
> **[3:05](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=185)** A side effect of this proper specification is also that it makes it easier to onboard new team members to a specific project.
>
> **[3:14](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=194)** Also, each project has to have comprehensive tests that make sure that the service still works as intended after the code was changed.
>
> **[3:22](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=202)** Automated tests ensure that no contribution breaks to service.
>
> **[3:26](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=206)** Additionally, it's automatically enforced the code style and test coverage, meets the requirements of the project.
>
> **[3:34](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=214)** And now, if the watch lists service follows the guidelines and process, they can simply create a pull request that provides the missing end point, of course, Inner Source won't solve all your problems when it comes to team collaboration, but it is one important step and puts you on the right path of FBN is towards continuous improvement of your organizational processes.
>
> **[3:58](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=238)** So long stories short, our change has now landed in the user service but will this now be pushed into production immediately?
>
> **[4:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=247)** Most likely not.
>
> **[4:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=248)** Likely this change will now run through a pipeline and then be added to a so-called pre-prod environment.
>
> **[4:15](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/streamline-cross-team-collaboration-with-inner-source?u=76281980&t=255)** And we will talk about this continuous integration and delivery in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** finally, (1), let (1), this. (1)
> **Documentation:** specification (3)
> **Env Vars:** fbn (1)
> **Cross-References:** in the next (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Speakers:** - [announcer] (1)

#### Continuous integration and deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=0)** - [Instructor] At cheaper the monolith is currently released around four times a year.
>
> **[0:05](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=5)** This is a highly manual process for everything is put together and thoroughly tested.
>
> **[0:10](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=10)** But in a monolith it's also relatively easy for a developer to test their work.
>
> **[0:16](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=16)** All they have to do is to build the monolith, we know already this takes time, but then just run some tests locally.
>
> **[0:24](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=24)** With switching to microservices, this isn't possible anymore.
>
> **[0:28](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=28)** Sure, unit tests can still be performed for single service but you can hardly test the whole application locally as this means, spinning up all the services and also having all the orchestration of the services ready.
>
> **[0:42](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=42)** This is why we're switching to microservices, you also need to implement continuous integration continuous delivery, and if you're brave, also continuous deployment.
>
> **[0:53](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=53)** So let's look at what this is all about.
>
> **[0:57](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=57)** Everything still starts on the developer's machine, thorough service is developed and the new feature is being added.
>
> **[1:04](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=64)** Once the developer is done and has run the local unit tests they will push the change to the version control system to a dedicated branch for this feature.
>
> **[1:14](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=74)** From there an automated process a so-called pipeline is triggered.
>
> **[1:19](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=79)** First, the service is being built, then the unit tests are run.
>
> **[1:24](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=84)** Needless to say that thorough complete unit tests are needed here.
>
> **[1:28](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=88)** But again, this only tests the one service alone.
>
> **[1:32](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=92)** You see this on the green box here, so building one service and unit testing one service.
>
> **[1:38](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=98)** In the next step, the service is put into a testing environment that is similar to the production environment.
>
> **[1:45](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=105)** There, it will be integrated with the rest of the service infrastructure and tested.
>
> **[1:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=110)** Here of course also automated integration tests need to exist and their frameworks to do exactly this.
>
> **[1:56](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=116)** But as you see here, now we are really testing all the services altogether.
>
> **[2:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=122)** When this all works out well the change is merged back to the main branch.
>
> **[2:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=128)** From there services are continuously packaged and shipped to a so called pre-production environment.
>
> **[2:15](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=135)** This is usually now where manual tests take place.
>
> **[2:18](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=138)** Quality assurance, testing, acceptance testing you name it.
>
> **[2:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=143)** Once this is complete, there's usually a production goal that this manually triggered.
>
> **[2:28](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=148)** Then all services that are currently ready for deployment, ready for update are pushed or deployed into production.
>
> **[2:37](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=157)** Of course at any step tests may fail and the developer will be informed that something along the way went wrong.
>
> **[2:45](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=165)** As you can see, this is really only possible by having an automated process that integrates and tests the service with the rest of the microservice system.
>
> **[2:55](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=175)** Now what is continuous integration and delivery and deployment in this diagram?
>
> **[3:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=180)** Everything from pushing to diversion control system to merging, is called continuous integration.
>
> **[3:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=187)** This means the code is automatically and continuously integrated with every change.
>
> **[3:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=193)** After that, the continuous delivery step starts where the services are continuously delivered into a pre-production system.
>
> **[3:21](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=201)** And then there is also continuous deployment, which means that new changes are continuously pushed to production.
>
> **[3:28](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=208)** But frankly, this happens rather rarely.
>
> **[3:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=211)** Usually, as I said this is still a manual step and it's done rather every two or three weeks after thorough testing, then a new release is cut and deployed to production.
>
> **[3:44](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=224)** Cheaper does not have any of this at this point.
>
> **[3:47](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=227)** I think it's clear that you have to stand up a CICD process at the same time as the development of the first service starts.
>
> **[3:55](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=235)** Here again, the iterative evolutionary process helps you.
>
> **[3:59](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=239)** The team can really learn as they go.
>
> **[4:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=242)** In a perfect world services don't break production after they've been through this process, but unfortunately they still do.
>
> **[4:09](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=249)** How can you detect and mitigate production problems?
>
> **[4:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/continuous-integration-and-deployment?u=76281980&t=253)** Enter observability and monitoring, we will talk about this in the next video.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1), means that (1)
> **Code Keywords:** let (1), this. (1)
> **Cross-References:** in the next (2)
> **Env Vars:** cicd (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Why you need monitoring from the very start
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=0)** - [Instructor] Performance monitoring was always important, but it got quite the boost since microservices became popular.
>
> **[0:08](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=8)** Today, monitoring and observability are big topics in this space, and there is even a dedicated group for it in the Cloud Native Computing Foundation.
>
> **[0:17](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=17)** There are just so many moving parts communicating over the wire, if you use microservices.
>
> **[0:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=23)** Now, imagine that authentication suddenly fails on the front-end.
>
> **[0:27](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=27)** Sure, you'll first look into the auth service but without monitoring, and especially without so-called distributed tracing, you will lose a lot of time until you figure out that actually a data dependency downstream is causing the problem.
>
> **[0:41](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=41)** In short, if you run microservices without the monitoring tool, you're basically flying blind.
>
> **[0:48](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=48)** But also before starting the microservice migration you should invest time to make sure that the monolith is properly monitored already.
>
> **[0:56](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=56)** I'll explain why in this video.
>
> **[0:58](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=58)** At Cheapr you ask the operations team if there is currently some monitoring in place for the monolith.
>
> **[1:05](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=65)** You learn that there is indeed.
>
> **[1:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=67)** First of all, they collect some metrics from the VM or host the monolith is running on.
>
> **[1:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=73)** This is data like CPU or memory utilization that tells them if the VM is properly sized.
>
> **[1:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=80)** Then they also collect metrics emitted from the databases.
>
> **[1:23](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=83)** Usually each database system provides self-monitoring interfaces that give you information about its general performance.
>
> **[1:32](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=92)** Additionally, to know if the application is up and can be reached, they use it external service that does so-called synthetic tests.
>
> **[1:40](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=100)** This means that the site is accessed like a user would do it and some data is collected.
>
> **[1:45](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=105)** If the site is down, this is how operation usually finds out about it.
>
> **[1:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=110)** Finally, they also collected log data from the whole system be it from the host or the application itself.
>
> **[1:58](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=118)** All this data is fed into a time series database and then displayed on a dashboard.
>
> **[2:04](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=124)** This solution helps to get information about host utilization, general performance, and availability.
>
> **[2:11](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=131)** But if we have a closer look, we see that we are looking at the monolith from the outset, which is today referred to as pure monitoring.
>
> **[2:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=140)** The monolith itself does not emit so-called telemetric data.
>
> **[2:24](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=144)** The more telemetric data a system emits the more observable it is.
>
> **[2:30](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=150)** In our case, the monolith isn't observable at all.
>
> **[2:35](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=155)** This means that if there is an outage this kind of monitoring tells you that something went wrong, but not what happened.
>
> **[2:44](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=164)** Now, adding observability to the monolith before starting the microservice initiative may seem counter intuitive.
>
> **[2:50](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=170)** After all the system is going to be replaced anyways.
>
> **[2:54](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=174)** But there are some very good reasons to do so anyways.
>
> **[2:57](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=177)** Let's look into these.
>
> **[2:59](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=179)** First of all, while improving the channel performance is not an explicit goal of your microservice initiative, you likely don't want it to get worse and detect if there is a degradation, right?
>
> **[3:10](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=190)** By switching to a unified tool that will be present before, during, and after the migration, the actual user impact of each migration step can be measured.
>
> **[3:20](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=200)** And if good booked as a success, and if bad used as a trigger to mitigate the problem.
>
> **[3:27](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=207)** Also, you want to understand the complete topology.
>
> **[3:31](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=211)** In the beginning, you sat together with an engineer to understand the whole application but often something is left out or forgotten in this process.
>
> **[3:39](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=219)** By deploying a monitoring tool all components of the monolith are discovered automatically and you won't run into surprises on your way.
>
> **[3:48](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=228)** If it drill deeper, you also want to understand code execution path and dependencies.
>
> **[3:55](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=235)** Performance monitoring systems usually provide agents that can be loaded directly into the applications and they often collect a lot of meta data as well as information on how code is executed.
>
> **[4:07](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=247)** Instead of browsing through the source code you can use a monitoring tool to understand the actual code execution path during runtime.
>
> **[4:14](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=254)** Which methods are calling each other or also which exact database queries are being executed.
>
> **[4:21](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=261)** All this can be collected and displayed by a monitoring tool.
>
> **[4:27](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=267)** Distributed tracing, is one of the main reasons monitoring got so popular with the rise of microservices.
>
> **[4:34](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=274)** While it's rather easy to trace and debug a monolith locally, how can you understand how services call each other and more importantly, find out if there might be a problem?
>
> **[4:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=283)** With distributed tracing all transactions that pass through your microservice infrastructure are being connected, tier to tier.
>
> **[4:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=291)** And if there is a problem the service causing it will light up red.
>
> **[4:56](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=296)** Speaking of that, every migration step imposes the risk of introducing problems that weren't detected during testing.
>
> **[5:04](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=304)** So proper problem detection and alerting will make your life way easier and will make you sleep better on your microservice migration journey.
>
> **[5:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=313)** So that's it.
>
> **[5:14](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=314)** With all this homework done you should now be pretty comfortable kicking off the microservice migration at Cheapr.
>
> **[5:21](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/why-you-need-monitoring-from-the-very-start?u=76281980&t=321)** It's going to be a long journey with roadblocks and bumps along the way, that much you know, but also an exciting one for sure.

> [!info]- Semantic Content
>
> **Code Keywords:** self (1), finally, (1), case, (1), let (1), pass (1)
> **Definitions:** means that (2), is a  (2), is an  (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** cpu (1)
> **Exercise Files:** source code (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Apply your knowledge
> [LinkedIn Learning](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=0)** - [Daniel] Thank you for taking this course.
>
> **[0:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=2)** I hope you liked it and found it valuable.
>
> **[0:04](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=4)** By now you should have a holistic high-level understanding of what a migration to microservices means technically and, also, organizationally.
>
> **[0:13](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=13)** You can now start to apply what you've learned and, on your way, you might come across the topics we've covered and you'll likely want to delve deeper into them.
>
> **[0:22](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=22)** In the library, you'll find another course of mine called [[Node.js- Microservices]].
>
> **[0:26](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=26)** There I cover how to build your own microservice infrastructure using Node.js.
>
> **[0:30](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=30)** If you know Node.js already, this can really get you started in understanding microservice platforms.
>
> **[0:38](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=38)** In general, the library contains learning paths and courses on microservices.
>
> **[0:43](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=43)** Look at an application you're responsible for and start decomposing it, and then take courses as you go to expand your knowledge.
>
> **[0:51](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=51)** Again, I advise you to start with one service, maybe by moving some simple functionality to a serverless function.
>
> **[0:59](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=59)** I'm happy to receive any feedback from you, good or bad.
>
> **[1:02](https://www.linkedin.com/learning/software-architecture-breaking-a-monolith-into-microservices/apply-your-knowledge?u=76281980&t=62)** Please use the Q&A function of this course, or reach out to me directly.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), find (1)
> **File Paths:** node.js (3)
> **Code Keywords:** function (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [daniel] (1)


## Path Context

### In [[Microservices Foundations Professional Certificate by Kong]]
← [[Microservices- Design Patterns]] | **3 of 3**

## Part of

- [[Microservices Foundations Professional Certificate by Kong]]

## Appears In

- [[Microservices Foundations Professional Certificate by Kong]]

## Related Courses

_Courses sharing skills:_

- [[React- Software Architecture]] — Software Architecture
- [[Kubernetes- Microservices]] — Microservices
- [[Microservices- Security]] — Microservices
- [[Case Study- Visualize Complex Microservice Data Using Python]] — Microservices
- [[Creating Spring Boot Microservices]] — Microservices

---

[↑ Back to top](#)