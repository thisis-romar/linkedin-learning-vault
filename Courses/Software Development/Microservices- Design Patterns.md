---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: microservices-design-patterns-23454771
url: "https://www.linkedin.com/learning/microservices-design-patterns-23454771"
duration_minutes: 97
duration: 1h 37m
level: Advanced
updated: 2/21/2024
learners: 52406
skills:
  - Software Design Patterns
  - Microservices
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFKN7HJHs-plg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1708468657858?e=2147483647&amp;v=beta&amp;t=EPE07Dmuw8BM7BuccZFKSJu15NIg5BbJl1mfb5COL-U"
linkedin_topic: Software Development
learning_paths:
  - '[[Microservices Foundations Professional Certificate by Kong]]'
  - '[[Getting Started with Microservices]]'
prev_courses:
  - '[[Microservices Foundations]]'
  - '[[Microservices Foundations]]'
next_courses:
  - '[[Software Architecture- Breaking a Monolith into Microservices]]'
  - '[[Microservices- Security]]'
path_nav: '[{"path":"Microservices Foundations Professional Certificate by Kong","position":2,"total":3,"prev":"Microservices Foundations","next":"Software Architecture- Breaking a Monolith into Microservices"},{"path":"Getting Started with Microservices","position":2,"total":3,"prev":"Microservices Foundations","next":"Microservices- Security"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/security
  - skill/software-design-patterns
  - skill/microservices
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Microservices-%20Design%20Patterns.md)

![Microservices: Design Patterns](https://media.licdn.com/dms/image/v2/D560DAQFKN7HJHs-plg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1708468657858?e=2147483647&amp;v=beta&amp;t=EPE07Dmuw8BM7BuccZFKSJu15NIg5BbJl1mfb5COL-U)

# Microservices: Design Patterns

> Design patterns save developers from needing to puzzle out solutions to problems that others in their industry have already encountered and solved. In this course, get up to speed with over a variety of different design patterns that you can leverage when building and operating microservices, as well as the common problems they can help you remedy. Instructor Frank Moley goes over decomposition, i

> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771) | 1h 37m | Advanced | 52K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Decomposition Patterns** (6 videos)
- **3. 2. Integration Patterns** (3 videos)
- **4. 3. Data Patterns** (4 videos)
- **5. 4. Operational Patterns** (7 videos)
- **6. Conclusion** (1 videos)

### 1. Introduction

#### Solving microservices problems with patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/solving-microservices-problems-with-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/solving-microservices-problems-with-patterns?u=76281980&t=0)** - As you venture into the world of microservices, one thing becomes very clear.
>
> **[0:05](https://www.linkedin.com/learning/microservices-design-patterns-23454771/solving-microservices-problems-with-patterns?u=76281980&t=5)** The problems that you encounter in building, converting, and operating microservices are not unique just to you.
>
> **[0:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/solving-microservices-problems-with-patterns?u=76281980&t=14)** As with all of software engineering, we as a collective create design patterns so we can fix the problem once and reuse that pattern every time we encounter it.
>
> **[0:26](https://www.linkedin.com/learning/microservices-design-patterns-23454771/solving-microservices-problems-with-patterns?u=76281980&t=26)** Hi, my name is Frank Moley.
>
> **[0:28](https://www.linkedin.com/learning/microservices-design-patterns-23454771/solving-microservices-problems-with-patterns?u=76281980&t=28)** I'm a cloud native developer, an architect, a teacher, and a perpetual student.
>
> **[0:33](https://www.linkedin.com/learning/microservices-design-patterns-23454771/solving-microservices-problems-with-patterns?u=76281980&t=33)** Using the patterns we will introduce in this course will save you time and energy and allow you to focus on your business needs.
>
> **[0:42](https://www.linkedin.com/learning/microservices-design-patterns-23454771/solving-microservices-problems-with-patterns?u=76281980&t=42)** So let's jump in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - as (1)

#### Vernacular of microservices
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=0)** - Before we get too deep into the world of microservices design patterns, I want to level set on the vernacular that I will use when discussing microservices.
>
> **[0:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=11)** These are not authoritative, these are just the terminology I learned and grew up on.
>
> **[0:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=17)** The first set of terms that I want to define are service types.
>
> **[0:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=21)** These will be critical to understanding how various patterns are implemented.
>
> **[0:26](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=26)** A data service is that which connects to a data source within the system.
>
> **[0:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=32)** This does not mean databases alone, because any valid source that can be served through a microservice applies.
>
> **[0:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=41)** Data services are usually bound by domains defined within the global architecture.
>
> **[0:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=48)** A business service or business process service is a higher level of abstraction that builds on data services.
>
> **[0:57](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=57)** Often we need to define business domains that transcend individual data services in order to be correct from the business perspective.
>
> **[1:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=67)** A translation service is any abstraction on a third-party operation that you want to encapsulate under your own facade.
>
> **[1:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=77)** An edge service is responsible for serving data to users and external systems.
>
> **[1:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=84)** These services can be used to provide a web view, a service that delivers the content, and maybe a service that delivers to mobile devices.
>
> **[1:35](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=95)** When defining a platform, there are many different things people can think of.
>
> **[1:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=101)** For the perspective of this course, I will consider the platform as the all encompassing arena for all service operations across multiple data centers.
>
> **[1:52](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=112)** The platform can include the infrastructure, runtime, ancillary services, networking, storage, and the list goes on.
>
> **[2:02](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=122)** If I have learned anything, especially as I have built more publicly visible systems, is that operational components should never be overlooked as part of a platform, and neither should diagnostic components.
>
> **[2:18](https://www.linkedin.com/learning/microservices-design-patterns-23454771/vernacular-of-microservices?u=76281980&t=138)** While these terms are not definitive, they are the terms I will use in this course when talking about microservices patterns.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - before (1)

#### Microservices and cloud native
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=0)** - Let me start by saying one thing very clearly, microservices do not make a system cloud native.
>
> **[0:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=8)** And cloud native doesn't require microservices.
>
> **[0:12](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=12)** All too often, these topics get merged, and I want to be very clear from the beginning about this.
>
> **[0:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=19)** Now, from my perspective, and from the perspective of this course, we're going to focus more on how to utilize microservices in a cloud native pattern for building our system.
>
> **[0:31](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=31)** "Why?" you may ask.
>
> **[0:33](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=33)** Because cloud native can literally run anywhere, not just the cloud.
>
> **[0:38](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=38)** So let's talk a little bit about what cloud native means.
>
> **[0:43](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=43)** First of all, cloud native is an architectural style.
>
> **[0:47](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=47)** What that means is that it isn't a pattern per se, of how to solve a problem.
>
> **[0:52](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=52)** Instead, it's a way of doing processes and building systems to facilitate an end goal.
>
> **[1:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=60)** Cloud native is designed primarily to facilitate operating in the cloud.
>
> **[1:06](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=66)** It includes things like externalizing configuration, focusing on scalability, making your application startup fast and handle immediate shutdowns gracefully.
>
> **[1:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=77)** There's a whole plethora of ways to represent cloud native applications.
>
> **[1:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=83)** I have a course here in the library called "Twelve-Factor and Fifteen-Factor Cloud Native Application Development" that I encourage you to look at when wanting to learn more about cloud native.
>
> **[1:35](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=95)** Cloud native applications are designed to be portable and scalable.
>
> **[1:40](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=100)** Portability comes into play when you can deploy or move your applications anywhere globally, and they still work without additional code.
>
> **[1:51](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=111)** Scalability entails building your applications to run as a single unit or multiple units depending on your overall needs of your system.
>
> **[2:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=120)** Advanced designs like using autoscaling to allow your services to scale up or down based on the overall system load, increase the need for this scalability.
>
> **[2:12](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=132)** It is very important to note that there is nothing that prevents you from building cloud native applications and running them in your corporate single instance data center.
>
> **[2:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=144)** So now let's talk about microservices since that's why you're here.
>
> **[2:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=149)** I want to start by saying that this is very open to personal interpretation.
>
> **[2:35](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=155)** There is no clear definition of what makes a microservice micro.
>
> **[2:40](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=160)** I have seen nano services that go overboard, and I've seen smaller monoliths that don't go far enough.
>
> **[2:47](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=167)** For now, we will just talk about microservices being smaller, scoped units of work.
>
> **[2:54](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=174)** Monoliths usually expose many applications and services in a single artifact.
>
> **[3:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=181)** Scaling these systems was a massive undertaking.
>
> **[3:05](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=185)** Microservices are all about breaking those endpoints up into distinct units of work so we can scale them independently.
>
> **[3:15](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=195)** We often hear these concepts talked about at the same time.
>
> **[3:20](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=200)** Both cloud native development practices and microservices architectures put an emphasis on building scalability into your application and system as a whole.
>
> **[3:33](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=213)** Now, often when building cloud native systems, microservices appear to be the clear path to get there, and this can muddy the water some when talking about these two topics.
>
> **[3:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=226)** It is important to note that you can do cloud native development without building microservices, and likewise, you can build microservices, not targeting cloud native deployments.
>
> **[4:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=240)** It is important to make sure that this is clear.
>
> **[4:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=243)** All too often I hear people talking about one topic and implying the other.
>
> **[4:09](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=249)** Even though they're so distinct, they work so well together to solve the common problem.
>
> **[4:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/microservices-and-cloud-native?u=76281980&t=257)** So please just take into account that even though some may consider them requirements of each other, that is not the truth in any way, shape, or form.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (1), this. (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - let (1)


### 2. 1. Decomposition Patterns

#### Decomposition of a system
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=0)** - We have talked about microservices being smaller, but what does that really mean?
>
> **[0:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=7)** Consider for a moment how you decompose a problem when writing a piece of software.
>
> **[0:13](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=13)** You don't cram everything into a single function and then just finish.
>
> **[0:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=19)** You break the problem into logical steps and convert those steps into reusable functions that can be used as the code base grows.
>
> **[0:30](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=30)** This is much the same with microservices, but instead of a single problem statement, you are looking at all of the problems across the system as a whole.
>
> **[0:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=41)** The first area of decomposition we will talk about is the service types that you can create.
>
> **[0:49](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=49)** These are designed to provide very specific uses across the system as a whole.
>
> **[0:54](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=54)** Each service has a distinct function in the system, and through building these services, we decompose the problems that we need to solve into smaller blocks of work.
>
> **[1:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=67)** Domain-based services are usually one of the first areas we attack when building microservices.
>
> **[1:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=74)** We will discuss how we use domain-driven design to build functional domains and then break up our system on these domain boundaries.
>
> **[1:26](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=86)** Another breaking point in service designs come from your business processes themselves.
>
> **[1:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=92)** Sometimes complex processes have so much inherent coupling that you cannot further break them down into smaller domains while still maintaining sustainable traffic patterns across your system.
>
> **[1:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=108)** Because of the needs of network health, these business process domains become a clear point of delineation within your system without further breaking them down.
>
> **[2:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=120)** Now, in some business models, eventual consistency isn't an acceptable model.
>
> **[2:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=128)** Well, these are few and far between for most industries, however, there are some use cases for this, especially in areas like the financial services realm.
>
> **[2:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=139)** As such, business processes themselves may be too broad to still achieve an atomic state, so you need to build your decomposition model around the atomic transaction itself.
>
> **[2:36](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=156)** Functional use patterns are an important point that we will dig into some, but we need to talk about ways to achieve this in a microservices architecture.
>
> **[2:47](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=167)** The first one that we will discuss is a very powerful strategy to migrate from a monolithic system into a microservices architecture.
>
> **[2:57](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=177)** And this is called the strangler pattern.
>
> **[3:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=180)** It is by far the most common pattern talked about when dealing with microservices because often, we are breaking down monoliths instead of writing new systems.
>
> **[3:12](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=192)** Another strategy that we will discuss that often gets used to promote separation of concerns across the system is the sidecar pattern.
>
> **[3:22](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=202)** This pattern allows us to offload many operational functions into separate components that they themselves get deployed alongside the main service component so that we don't litter our code with all of these functional needs across the system.
>
> **[3:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system?u=76281980&t=221)** So now that we have an overview of decomposition patterns, let's jump into our domain-based services.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), this, (1), let (1)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - we (1)

#### Domain-based microservices
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=0)** - Domain based microservices, as you might imagine, are based on domain driven design patterns, but what does this mean in practice to somebody building out a services architecture?
>
> **[0:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=14)** Data domain decomposition is the lowest level of decomposition that you will usually see in a microservices architecture.
>
> **[0:25](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=25)** The core problem we're trying to solve with this is to make our services more scalable.
>
> **[0:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=32)** As such, you need them smaller and much more focused.
>
> **[0:37](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=37)** Decomposition of the domain level is one of the most efficient ways to do that.
>
> **[0:43](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=43)** These services are driven by the data domain itself.
>
> **[0:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=48)** They focus on serving the data as it will be used throughout the system and applying logic for the domain itself while ignoring all logic outside the domain.
>
> **[1:02](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=62)** And that's the key.
>
> **[1:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=63)** Only worry about the logic within the domain itself.
>
> **[1:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=68)** The underlying schema is not important when designing these services.
>
> **[1:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=74)** The access patterns for the data domains is what is important, even though the two may share similar features.
>
> **[1:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=83)** The key factor is that they focus on the data patterns and the domain itself.
>
> **[1:31](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=91)** You will build decomposed services that focus on one data domain.
>
> **[1:37](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=97)** Sometimes, a domain shares enough functionality with another domain that it may trigger you to merge them into a new single domain.
>
> **[1:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=108)** Sometimes, you'll identify areas where you thought concepts belonged in a single domain, but there isn't enough sharing and you'll need to split them up.
>
> **[1:59](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=119)** But again, the key here is to focus on your data and how it is actually used throughout your system.
>
> **[2:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=127)** When it comes to designing your domain, and hence your domain services, there's not a recipe card that can make this happen.
>
> **[2:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=137)** Much of the design comes from trial and error with fast iteration, but experience will reduce this burden.
>
> **[2:27](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=147)** Telemetry is your biggest friend here.
>
> **[2:30](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=150)** It should provide you more than experience will in that you will have solid data for decisions.
>
> **[2:39](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=159)** Hopefully, it is clear that we should be doing domain driven design.
>
> **[2:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=165)** This course isn't going to be one on domain driven design however, as that is at least one course on its own.
>
> **[2:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=175)** Now for the steps.
>
> **[2:56](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=176)** You need to start with the domain model when building services around data domains, not the database schema.
>
> **[3:05](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=185)** The model itself should represent your domain to the outside world, and you need to consider how the model is represented, utilized, and consumed.
>
> **[3:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=197)** Next, we need to evaluate the actions that we'll need to perform on these models.
>
> **[3:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=204)** Don't think solely in terms of CRUD and don't think solely in terms of REST APIs either.
>
> **[3:31](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=211)** You can work actions into the API if they are applicable to your domain, and many times, these actions are where the real work is getting done.
>
> **[3:44](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=224)** This should yield service definition itself, the API contract.
>
> **[3:50](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=230)** Again, we're focusing on the model and not the underlying data store.
>
> **[3:56](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=236)** Then we work our way down to ultimately the storage of the data and implementation of the actions themselves.
>
> **[4:04](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=244)** Let's take a look at a visual representation of how we would build these services.
>
> **[4:10](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=250)** First, we start with our model design.
>
> **[4:13](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=253)** This includes all of the attributes of our model itself.
>
> **[4:18](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=258)** Next, we define our actions.
>
> **[4:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=261)** Now, you're going to then write your service boundary and expose your actions as APIs.
>
> **[4:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=269)** Finally, you build your data store to store the data or build the functions and translations to utilize the existing data store.
>
> **[4:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=281)** Note, the model doesn't have to match the schema in the data store itself.
>
> **[4:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=288)** Now this is a very simplified view of the pattern because it's all based on domain driven design.
>
> **[4:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/domain-based-microservices?u=76281980&t=295)** Of all the patterns, however, this is the one that you'll use the most.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), crud (1), rest (1)
> **Code Keywords:** yield (1), let (1), finally, (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - domain (1)

#### Business process-based microservices
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=0)** - [Instructor] Oftentimes when building out decompositions, you run into more complex processes.
>
> **[0:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=8)** Often these processes don't fit into a single domain, but the domains themselves can live in a standalone fashion.
>
> **[0:20](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=20)** Enter into the picture business process-based microservices.
>
> **[0:25](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=25)** A business process service can help you build a more structured microservices architecture.
>
> **[0:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=32)** The problem that you may be faced with is that in order to replicate business processes across different components, you have to recreate the same code logic multiple times, especially when they span multiple domains.
>
> **[0:50](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=50)** In order to adhere to the don't repeat yourself principle and to help simplify your architecture, you can leverage business process domains as a higher level of service within your architecture.
>
> **[1:06](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=66)** First and foremost, it provides a higher level of abstraction written around specific business functionality.
>
> **[1:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=74)** This helps you not only encapsulate these use cases, but also scale them more effectively in your system.
>
> **[1:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=83)** It also provides a mechanism to encapsulate your related domains.
>
> **[1:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=89)** A warning here.
>
> **[1:31](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=91)** Building extra layers for uniformity, for instance, only increases your network traffic unnecessarily.
>
> **[1:40](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=100)** One key aspect in business process services is that they usually don't have their own data access.
>
> **[1:49](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=109)** This allows you to not muddy the waters between business domains and data domains.
>
> **[1:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=115)** While this pattern should be considered, many do ignore it.
>
> **[2:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=121)** From my experience however, ignoring this will bring you a lot of headaches going forward if you start merging the two concepts.
>
> **[2:10](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=130)** It is better to keep your boundaries tight and work within the overall architectural model.
>
> **[2:18](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=138)** The final key aspect is that they should have distinct functional uses.
>
> **[2:25](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=145)** You don't want to build out all of your business processes into a single domain package.
>
> **[2:30](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=150)** If they are related, especially in use, it's fine to put them together, but be very careful you don't layer a monolith into your system with business processes.
>
> **[2:44](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=164)** Building a business process is fairly straightforward.
>
> **[2:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=168)** You start by identifying the process with which you want to expose.
>
> **[2:54](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=174)** This may sound simple, but oftentimes, the rules are very specific when it comes to these business processes.
>
> **[3:02](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=182)** As such, you need to spend some time here gathering requirements and ensuring you have the functional needs defined before you start.
>
> **[3:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=194)** Once you have the business process defined, you should be able to identify the data domains that you will need to consume.
>
> **[3:22](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=202)** Next, you need to define the APIs that handle your business processes.
>
> **[3:28](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=208)** Once again, we focus on the contract and not the underlying models.
>
> **[3:35](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=215)** The API should represent the actual processes that are needed, and many times, you may find that the action pattern for RESTful services is very useful in this level of abstraction.
>
> **[3:50](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=230)** Finally, we will build our service and wire the API to the client calls for the domain services.
>
> **[3:58](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=238)** It is recommended that you actually encapsulate your business process code into its own module for easier maintenance.
>
> **[4:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=248)** Let's take a look real quick at a visual representation of the design strategy around building business process services.
>
> **[4:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=257)** First and foremost, we define our processes themselves.
>
> **[4:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=261)** In this case, our service will expose three related, but different processes.
>
> **[4:27](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=267)** Now we can identify the domain or domains that these business processes need to interact with.
>
> **[4:34](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=274)** In this case, we have two unique data domains.
>
> **[4:39](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=279)** Next, we define the APIs for our business processes.
>
> **[4:44](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=284)** In this case, we have one API for each.
>
> **[4:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=288)** Finally, we will implement and wire our service together using client code to interact with our data domains.
>
> **[4:56](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=296)** The implementation should be a black box to the outside world.
>
> **[5:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/business-process-based-microservices?u=76281980&t=301)** Consider using internal modules and solid encapsulation for each process or even step in the process as this will help you iterate as the process changes over time.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), finally, (2), module (1), let (1)
> **Env Vars:** api (3)
> **Analogies:** picture (1), for instance (1)
> **CLI Commands:** find (1)
> **Best Practices:** recommended (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Atomic transaction-based microservices
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=0)** - There are potentially times in a microservices architecture where you need to have true atomic transactions because eventual consistency isn't good enough.
>
> **[0:12](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=12)** When those atomic transactions span multiple data domains, there is a distinct need to build special logic and systems to handle these unique use cases.
>
> **[0:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=24)** One of the primary characteristics of these services is the need to guarantee ACID-compliant transactions across more than one data domain.
>
> **[0:37](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=37)** If you need atomic transactions in a single domain, there is no need to specialize a service, because the underlying implementation is hidden.
>
> **[0:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=48)** However, providing these cross-domain services that support failure domains and rollbacks of the entire domain scope must have a solution.
>
> **[1:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=60)** These services force a blocking API call until the commit is successful.
>
> **[1:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=67)** While you can logically do these asynchronously, usually the caller needs a guarantee of success or an error, so the API must be synchronous and blocking.
>
> **[1:20](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=80)** You may be tempted to use data domains with distributed transactions.
>
> **[1:25](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=85)** I would highly suggest you stop and don't do this because of the complexity that it adds to your system.
>
> **[1:33](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=93)** Designing these atomic services is very straightforward, but you need to do some homework first.
>
> **[1:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=101)** Ensure that you really must have the service be atomic.
>
> **[1:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=106)** While many times people say that they need atomic transactions, the cases of actually needing them are fewer and further between.
>
> **[1:56](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=116)** Spend some time and make sure that your stakeholders understand the complexity as well as the constraints that this puts on your system as a whole.
>
> **[2:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=128)** But in the end, you may really need them.
>
> **[2:12](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=132)** When building such a service, you start by ensuring that your underlying data domains share a database.
>
> **[2:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=141)** If they don't, you need to merge them into a single shared database in order to build your atomic service.
>
> **[2:30](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=150)** This risk also needs to be understood by all involved because now you're modifying existing functionality.
>
> **[2:39](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=159)** You'll then need to get clear and concise rules defined about the transaction.
>
> **[2:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=166)** Because this will be a blocking call, make sure everything, including rollback conditions, are well-defined.
>
> **[2:56](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=176)** Consider documenting these rules in code comments or readme files for future reference.
>
> **[3:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=183)** Finally, you need to implement the service with its rollback handlers.
>
> **[3:09](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=189)** Rollbacks take time, especially in a blocking call, and those confirmations to remote systems can become bottlenecks.
>
> **[3:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=199)** You must exit the function with a complete commit or a complete rollback.
>
> **[3:27](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=207)** A final word here on these.
>
> **[3:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=209)** If you can avoid them, please do.
>
> **[3:33](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=213)** They muddy the water for distributed systems as a whole.
>
> **[3:38](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=218)** You cannot adequately distribute the databases as effectively, nor avoid the potential network congestion.
>
> **[3:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=228)** Try to sell your stakeholders on eventual consistency or simulated rollbacks, of course, explaining their risks as well.
>
> **[3:57](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=237)** Atomic process services are hard to implement, but when they're needed, you must have a solution.
>
> **[4:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices?u=76281980&t=247)** I encourage you to collect as much data as possible to ensure you are making the best decisions.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), acid (1)
> **CLI Commands:** make (2)
> **Code Keywords:** finally, (1), function (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - there (1)

#### Strangler pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=0)** - Now that we have discussed some of the most common decomposition patterns, we need to talk for a bit about how to get there from a legacy system.
>
> **[0:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=11)** So let's talk about the strangler pattern from a high level conceptual point of view.
>
> **[0:18](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=18)** It really is a simple pattern as long as you can plan appropriately.
>
> **[0:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=24)** The idea behind the pattern as a whole is you start with your monolith and then essentially carve your dependencies off of it.
>
> **[0:33](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=33)** You shard your services off piece by piece into new microservice endpoints.
>
> **[0:39](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=39)** Point the internal client to the new microservice, and eventually, deprecate the functionality out of your monolith once all of the dependencies are weaned off of it, and you've now strangled it.
>
> **[0:53](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=53)** You can break your services off at the API layer first by building out the API and underlying service, and then moving the database behind it, assuming it's a data domain service.
>
> **[1:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=67)** You can likewise start at the data store itself and move the domains out, and then traverse up the tree to business processes and so on, depending on which part of your system is causing the most pain.
>
> **[1:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=84)** Knowledge of this will help you determine which of these two strategies to employ.
>
> **[1:30](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=90)** Essentially, both of the same.
>
> **[1:33](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=93)** You're carving functionality out of the monolith and replacing it with a properly designed microservice artifact within your system.
>
> **[1:43](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=103)** You move the processing to the new microservice, and eventually, your monolith is strangled away.
>
> **[1:50](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=110)** Okay, so let's look at the bottom-up type of strangling a monolith.
>
> **[1:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=115)** Now, this, of course, is going to be a very simple example, but we're going to start with our monolith itself.
>
> **[2:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=123)** It has a couple of clients and a database.
>
> **[2:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=127)** Now, within our monolith, we identify two business processes within it.
>
> **[2:13](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=133)** We then define three distinct data access areas that can be defined as data domains.
>
> **[2:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=141)** In the bottoms-up approach, we'll use a single service database design, something we're going to focus on later, but for now, just know that each domain gets its own database, but we don't want to do it all at once.
>
> **[2:39](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=159)** The first thing we need to do is we need to build a new database.
>
> **[2:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=165)** Next, we need to build our data domain.
>
> **[2:49](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=169)** Of course, at some point here, we will need to sync the data and keep it in sync, but that's beyond the scope of this course.
>
> **[2:59](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=179)** Now, we move our client over to use this new data domain.
>
> **[3:04](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=184)** Once all the data is moved over and the usage from all clients are gone from the monolith, we can then remove the data access block and data from our original database, as well as syncing logic that we have put in place.
>
> **[3:22](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=202)** The same pattern can be applied to different service types up to stack.
>
> **[3:28](https://www.linkedin.com/learning/microservices-design-patterns-23454771/strangler-pattern?u=76281980&t=208)** Eventually, with this pattern, you will strangle the monolith completely from being consumed from clients, and at that point, the monolith itself can be deprecated.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1)
> **Env Vars:** api (2)
> **Definitions:** is a  (1), defined as (1)
> **Speakers:** - now (1)

#### Sidecar pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=1)** - The sidecar pattern is used to offload processing of some kind to a separate module.
>
> **[0:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=8)** With the sidecar pattern, you deploy the sidecar as a module associated with every applicable microservice in your system in order to offload the processing through a single code path in an isolated process.
>
> **[0:26](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=26)** The sidecar pattern is more about removing repetitive code across services than anything else.
>
> **[0:34](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=34)** The reason that it is helpful in a microservices architecture is things like logging, monitoring, and network services can be offloaded to a separate module.
>
> **[0:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=46)** So essentially, the problem we are solving is repeating code paths that don't have to be accomplished through repeating code.
>
> **[0:56](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=56)** The details of this design are actually very straightforward.
>
> **[1:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=61)** You start with the process itself.
>
> **[1:04](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=64)** The key here is you need to write the module specific enough for your immediate needs while being generic enough for other parts of your system.
>
> **[1:16](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=76)** This really is the hardest part of sidecars because you have to be willing to get it wrong before you get it right.
>
> **[1:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=84)** Once the design is in place, you simply write your code.
>
> **[1:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=89)** Most runtimes that you would use with the microservices architecture have sidecar processes or strategies depending on how they containerize or provide access to that runtime.
>
> **[1:44](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=104)** The next step is simply to schedule your sidecar to be deployed with the appropriate service.
>
> **[1:53](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=113)** Most of the time, this is accomplished via the parent service manifest or service definition.
>
> **[2:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=121)** Once you deploy it, the functionality should just appear.
>
> **[2:06](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=126)** You never have to actually modify the code of your main application service, and that's really where the power is.
>
> **[2:15](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=135)** Because as we implement one piece of functionality, if that piece of functionality now needs to live somewhere else as well, we simply upload the sidecar with that element and it will inherit the same functionality.
>
> **[2:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=152)** So let's take a look here at a quick visualization of the sidecar pattern itself.
>
> **[2:38](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=158)** We're going to start with three microservices sitting in our virtual network.
>
> **[2:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=165)** Now we add our first sidecar, and in this case, it's a logging sidecar to each service.
>
> **[2:52](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=172)** Note how the representation here is very focused on containerized deployments as this is usually where sidecars are most utilized.
>
> **[3:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=183)** We actually are deploying these sidecar elements to the parent process itself, but we're getting the benefits of the sidecar everywhere while not writing code into each service.
>
> **[3:18](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=198)** Now we're going to go ahead and add another sidecar.
>
> **[3:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=201)** This time, a monitoring one.
>
> **[3:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=204)** Again, applying it to each service, and once again, we are uploading it as part of the parent service when we do the deployment.
>
> **[3:34](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=214)** So all of these run as a single artifact, though they are very distinct processes.
>
> **[3:42](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=222)** Now the last step is that we're going to add a security sidecar, but this time, we're only going to apply it to one of our services.
>
> **[3:51](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=231)** Again, another power behind sidecars.
>
> **[3:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=235)** You pick and choose where you want to apply the functionality and simply apply it.
>
> **[4:02](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=242)** As long as your sidecar is written generic enough, you can apply it anywhere, and that service will automatically inherit the functionality.
>
> **[4:13](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=253)** Now as I scale each one of these services, the sidecar comes along for the ride for free and we inherit that functionality once again.
>
> **[4:26](https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern?u=76281980&t=266)** This sidecar pattern reduces duplicate code, provides unified and focused behavior, and does so natively as part of the natural deployment process.

> [!info]- Semantic Content
>
> **Code Keywords:** module (4), else. (1), let (1), case, (1)
> **Speakers:** - the (1)


### 3. 2. Integration Patterns

#### Gateway pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=1)** - We will now move from decomposition patterns into integration patterns.
>
> **[0:06](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=6)** These patterns allow you to solve orchestration and ingress needs across your system as a whole.
>
> **[0:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=14)** The first pattern that we're going to talk about is the gateway pattern.
>
> **[0:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=19)** The API gateway pattern or gateway pattern is an ingress pattern for clients communicating with your system services.
>
> **[0:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=29)** The problem statement we're trying to solve is that of chaos.
>
> **[0:34](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=34)** If we allow any client of any system to access any service however they wish, operations and maintenance needs will skyrocket across the system as a whole.
>
> **[0:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=48)** This grows even more chaotic as your client set increases, especially if third-party vendors start consuming your APIs.
>
> **[0:58](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=58)** The gateway pattern is designed to provide a buffer between the underlying services and the client needs.
>
> **[1:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=68)** That can be accomplished via facade or a simple proxy, each having risks and rewards.
>
> **[1:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=77)** This single layer becomes the interface for the outside world.
>
> **[1:22](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=82)** This can include client systems that you own.
>
> **[1:26](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=86)** It can simply proxy the calls to your underlying services.
>
> **[1:30](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=90)** It can mutate the calls, or it can limit the calls based on what the gateway itself exposes.
>
> **[1:40](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=100)** This also, however, can become a single point of failure for a system, so care needs to be taken to ensure that it scales and responds well when the need arises.
>
> **[1:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=115)** One of the most powerful aspects of a gateway is the ability to mutate the payloads from your system in a specific way, customized to the consuming client's needs.
>
> **[2:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=131)** In its most simple form, it can proxy the backend calls.
>
> **[2:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=137)** Using a gateway in this way allows you to put your security and authorization logic in a single ingress point.
>
> **[2:26](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=146)** You can restrict or allow access based on the client and its credentials.
>
> **[2:33](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=153)** You can have a simple buffer so your internal system doesn't have to be exposed publicly.
>
> **[2:40](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=160)** Only the gateway itself needs public ingress.
>
> **[2:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=165)** The gateway can also decorate payloads.
>
> **[2:49](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=169)** Oftentimes, we need to have common headers or other data points in the payload that are not necessarily relevant to the underlying service.
>
> **[2:59](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=179)** By using the gateway, we can apply that decoration in one place and in a consistent way.
>
> **[3:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=187)** Another powerful aspect is that we can do aggregations.
>
> **[3:12](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=192)** We have many use cases like high bandwidth desktop clients that can and should consume more data at one time, so we can use the gateway to aggregate the payloads under these approved situations.
>
> **[3:28](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=208)** The gateway makes the underlying calls and assembles the data into a single payload for the client.
>
> **[3:37](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=217)** Be very careful here of not applying business logic when doing this.
>
> **[3:43](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=223)** It can and will lead to an unmanageable gateway.
>
> **[3:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=228)** Do only simple aggregations.
>
> **[3:51](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=231)** For more complex rules, please stay tuned for the process aggregator pattern.
>
> **[3:58](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=238)** In a similar vein, you can limit access.
>
> **[4:02](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=242)** Say for instance, you have a lower bandwidth mobile client that doesn't have the screen real estate, let alone the bandwidth to handle a full call to your underlying API.
>
> **[4:15](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=255)** The gateway allows you to limit the data you send to these clients while not modifying the underlying services or the calls for other clients.
>
> **[4:26](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=266)** One of my favorite benefits of this pattern is it gives me the ability to provide installation.
>
> **[4:34](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=274)** Consider having web, desktop, and mobile clients of your system as well as public API clients that you manage and distribute.
>
> **[4:44](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=284)** The gateway pattern gives you a contract-driven API point.
>
> **[4:49](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=289)** They can be static while the underlying services can change, migrate, and evolve as needed.
>
> **[4:56](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=296)** The gateway implementation may change, but your clients don't need to feel the pain of that change because they adhere to your public contract.
>
> **[5:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=308)** The strategy for building a gateway is actually very straightforward.
>
> **[5:13](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=313)** First, you need to define your contracts.
>
> **[5:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=317)** You can start small here.
>
> **[5:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=319)** Remember, however, that this is your public touchpoint.
>
> **[5:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=323)** Now, you expose these APIs in your gateway component.
>
> **[5:28](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=328)** These APIs are static, or at least passive contracts, and can be tailored for specific clients.
>
> **[5:36](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=336)** You want to keep the contracts solid, so you may build out sets of APIs for each client independently of the rest, or just focus on the most dynamic APIs and expose them as being client-specific along with a core set of global APIs.
>
> **[5:57](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=357)** If you haven't noticed, I've mentioned passive a few times on purpose.
>
> **[6:02](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=362)** These APIs are your public touchpoint.
>
> **[6:06](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=366)** Nothing, and I mean, nothing makes a developer more upset than having to fix code that worked yesterday because someone in a third-party system broke the passivity of a contract.
>
> **[6:20](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=380)** In order to keep these contracts static, you use strict version control, like semantic versioning, to keep your APIs growing, but to help ensure passing behavior.
>
> **[6:34](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=394)** Of course, the versioning isn't enough.
>
> **[6:38](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=398)** You have to make sure your changes are passive as well based on that versioning strategy.
>
> **[6:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=405)** Now, you simply implement your gateway.
>
> **[6:49](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=409)** It is recommended that you build your internal client code indistinct modules and then consume these modules within your implementation.
>
> **[7:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern?u=76281980&t=421)** By doing this, you could isolate the changes that are needed on the backend to support the growth of your internal APIs as a whole while keeping that public contract rock solid.

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), static (3), interface (1), this. (1), let (1)
> **Env Vars:** api (4)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Best Practices:** recommended (1)
> **Speakers:** - we (1)

#### Process aggregator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=0)** - The next integration pattern that we will discuss is an orchestration pattern called the process aggregator pattern.
>
> **[0:10](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=10)** The process aggregator is a very straightforward way within your system to develop complex processes.
>
> **[0:18](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=18)** When we have multiple data domains that need to be called together within a business process, we use a business process service.
>
> **[0:28](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=28)** There may be cases, hopefully and frequently, where you need to do the same for business processes themselves.
>
> **[0:37](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=37)** This is where this pattern comes into play.
>
> **[0:42](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=42)** So the problem that we need to solve is we have built out business processes within our system, but we can see a frequent need to call two or more of them at the same time, in certain use cases, and then build a composite response from it.
>
> **[1:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=61)** This is where this pattern shines.
>
> **[1:05](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=65)** The aggregator provides clients with a single API call.
>
> **[1:10](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=70)** This API contract not only handles the underlying business process calls but assembles the payload for the client system.
>
> **[1:22](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=82)** The process aggregator can, and really should, introduce its own processing logic.
>
> **[1:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=89)** If you are building an aggregator to simply group calls for your clients, you can leverage a gateway aggregator or even just keep the calls in the client.
>
> **[1:43](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=103)** The aggregator really shines from a value perspective when it is also encapsulating the business logic for these aggregation calls.
>
> **[1:54](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=114)** If every client has to reproduce a set of rules when calling multiple business processes, you're breaking the "don't repeat yourself" or DRY principle.
>
> **[2:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=127)** The aggregator encapsulates that logic and then has the added benefit of consolidating the payload for the client for the parts of the model that are relevant for the aggregator call in the first place.
>
> **[2:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=143)** I will urge you to please use this pattern with caution as it can introduce a choke point in your system.
>
> **[2:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=152)** Consider the case of a loan process while there may be several business processes as well as multiple data domains in play.
>
> **[2:42](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=162)** In addition, in order to proceed from one process to the next, you need to complete the first business process call.
>
> **[2:51](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=171)** This can make your aggregation call a very long-running process, which in turn is a blocking call for the API.
>
> **[3:02](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=182)** This choke point can bring a distributed system to a crawl as network IO increases and wait times also increase.
>
> **[3:12](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=192)** Once you get into this realm of large data processing operations, you really need to consider asynchronous patterns instead of aggregators.
>
> **[3:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=203)** Designing and building an aggregator should look very familiar at this point.
>
> **[3:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=209)** The first thing that you need to do is determine which business processes are needed behind the aggregator.
>
> **[3:37](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=217)** Ensuring you know the business processes first will help you make informed design decisions going forward.
>
> **[3:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=226)** Now, you then need to determine the processing rules.
>
> **[3:51](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=231)** Again, once you understand the process and the processing rules, you can make better-informed decisions going forward.
>
> **[4:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=241)** Now, based on the previous steps, you should be able to define a new model for your aggregator.
>
> **[4:09](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=249)** This really shouldn't be a simple pass-through and consolidation of your underlying processes because your internal processing rules will add or modify that model in most use cases.
>
> **[4:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=264)** Once you have your model, you can implement the API based on that model.
>
> **[4:31](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=271)** Many times, if you design that model right, you can use standard REST verbs on these models.
>
> **[4:38](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=278)** But if not, you always have the action pattern as needed.
>
> **[4:43](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=283)** And finally, you need to wire the service together and implement the internal processing features.
>
> **[4:51](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=291)** Once again, and I may sound a little bit like a broken record here, I urge you to encapsulate your internal business processing rules to prevent a risk of changes down the road causing more problems.
>
> **[5:06](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=306)** This encapsulation helps with design as well as maintainability of your system.
>
> **[5:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=314)** The aggregator pattern is useful in some cases and is a good pattern to have in your toolbox.
>
> **[5:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=323)** Just heed the warnings about the pattern before you jump in.
>
> **[5:27](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=327)** Abstraction for the sake of abstraction does you no good in a distributed microservices architecture.
>
> **[5:35](https://www.linkedin.com/learning/microservices-design-patterns-23454771/process-aggregator-pattern?u=76281980&t=335)** And if you find yourself going down that path, I can almost promise you you will see network issues in the future.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), dry (1), rest (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (3), is an  (1)
> **Code Keywords:** pass (1), finally, (1)
> **Warnings:** caution (1)
> **Speakers:** - the (1)

#### Edge pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=0)** - The final integration pattern that we will talk about in this course is another ingress pattern called the edge pattern.
>
> **[0:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=8)** Much like the aggregator was a subset of the gateway pattern, the edge pattern is also a subset of the gateway pattern.
>
> **[0:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=17)** The basic problem that we need to solve with the edge pattern comes into flavors.
>
> **[0:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=23)** The most common is that using a gateway becomes a scalability concern as one client type, say, mobile, contributes to request volume significantly more than other clients.
>
> **[0:37](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=37)** As such, scaling the gateway becomes wasteful.
>
> **[0:42](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=42)** The other flavor is similar to the aggregation in that the client doesn't just need a single touchpoint, it needs special business logic as well that only applies to this client.
>
> **[0:58](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=58)** Edge services really become very much client-specific gateways, and I prefer them as an overall pattern.
>
> **[1:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=67)** They provide the benefits of aggregation, consolidation, and complexity isolation while doing so based on the sole needs of a single client.
>
> **[1:20](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=80)** These edge services focus on a specific client, so their isolation pattern is directly addressing that client.
>
> **[1:30](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=90)** Say we have data that a mobile client doesn't need because it isn't available in the application.
>
> **[1:37](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=97)** When we use an edge service, we can target the payload while allowing the system to scale as needed.
>
> **[1:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=105)** Also, not exposing data that the client itself cannot use.
>
> **[1:51](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=111)** Edge design very much follows the gateway pattern as a whole.
>
> **[1:56](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=116)** First, you need to identify the client and the needs of that client, as well as the constraints.
>
> **[2:05](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=125)** Since you have such laser focus on a specific client, you can spend a lot more dedicated energy on that client.
>
> **[2:16](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=136)** Next, based on that information, you build your contracts and associated models.
>
> **[2:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=143)** You can then implement the APIs and contracts.
>
> **[2:28](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=148)** One benefit here, especially with the very specific client focus, is that your passivity concerns only last as long as your client version is in scope.
>
> **[2:42](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=162)** This is very powerful in worlds like mobile, where you can drive upgrades from within the application and keep your client usage at a relatively current level.
>
> **[2:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=175)** So you can make more non-passive changes by forcing a client upgrade.
>
> **[3:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=183)** So at this point, you may wonder if the edge and gateway patterns are so similar, why have both?
>
> **[3:12](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=192)** And this is a great question, and I'll give you a little early hint here.
>
> **[3:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=197)** I don't use gateways, I only use edge services.
>
> **[3:22](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=202)** On paper, they are very similar.
>
> **[3:25](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=205)** But by focusing on a single client for the edge, you can apply all of the gateway patterns, but to that client only.
>
> **[3:36](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=216)** But in both cases, we're handling things like isolation, consolidation, aggregating, and proxying.
>
> **[3:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=226)** The key is does it apply to the whole system or just one client?
>
> **[3:53](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=233)** The edge becomes much more flexible, in my opinion, because it targets the client specifically.
>
> **[4:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=241)** Any aggregation needs can be handled more robustly in an edge service because the client's needs are being taken into account.
>
> **[4:12](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=252)** Consolidation and isolation needs are also more flexible with an edge service for the same reason.
>
> **[4:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=261)** A big win for the edge pattern is that you can have a more scalable component.
>
> **[4:28](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=268)** Because you are targeting a single client, as that client load increases or decreases, you can scale your service appropriately.
>
> **[4:39](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=279)** You can also better introduce throttling specific to a client type without applying it to your whole system, which is what you would have to do with the gateway.
>
> **[4:53](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=293)** The edge pattern is also more flexible when new clients come on board.
>
> **[4:59](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=299)** By using the edge pattern, no other systems will be impacted with this advent of a new client.
>
> **[5:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=307)** With the gateway, you have to deploy the entire gateway to address the needs of these new clients.
>
> **[5:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=314)** With the edge service, you just deploy the new service and the new client picks it up.
>
> **[5:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=321)** On the same lines, you won't impact as many other types of clients when you do need to deploy new versions of your edge service because they're so targeted.
>
> **[5:33](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=333)** Now, when it comes to maintenance, the gateway wins.
>
> **[5:38](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=338)** You get consolidation of modules and underlying processes, so keeping clients in sync becomes much easier.
>
> **[5:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=346)** You're also deploying fewer instance types across the system, again, improving maintainability.
>
> **[5:54](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=354)** As I stated before, I only use the edge pattern anymore.
>
> **[5:59](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=359)** But I do always use it, and that's the key.
>
> **[6:04](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=364)** Isolation of clients is critical to prevent exposing your entire system to the world and for preventing clients from calling unapproved APIs.
>
> **[6:16](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=376)** Add in OAuth, and you have a very good security footprint on an edge service.
>
> **[6:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/edge-pattern?u=76281980&t=383)** In addition, by targeting this way, I can handle any of the needs of a client much more quickly because I know that there's only one component impacted by changing the edge service.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** type, (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** the key is (1)
> **Speakers:** - the (1)


### 4. 3. Data Patterns

#### Single service database
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=0)** - We will now delve into the world of data patterns in a microservices-based architecture.
>
> **[0:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=7)** There are really only a few ways to solve your data needs, but we will start out with what should be the most common pattern, the single service single database pattern.
>
> **[0:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=21)** As I stated before, the single-service single-database pattern should be the most common pattern for all data-domain-based services.
>
> **[0:30](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=30)** The concept is actually very simple, but can be cost prohibitive if used with proprietary databases or improperly sized databases.
>
> **[0:43](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=43)** The problem that we are solving with this pattern is that of scalability.
>
> **[0:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=48)** In a microservices architecture, the service scalability needs should be proportional to the database's scaling needs.
>
> **[0:57](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=57)** As load on a single service increases, the associated use of the database will also increase.
>
> **[1:06](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=66)** This can cause you to size the database based on single-service peak needs when the entire system is underutilized.
>
> **[1:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=77)** In this pattern, each data domain that you build gets its own dedicated data store.
>
> **[1:25](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=85)** The caveat here is that if the domain also is included in an atomic transaction, you have to be a little bit less fine grained.
>
> **[1:36](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=96)** So hard and fast rules seldom apply.
>
> **[1:40](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=100)** It's really best case effort.
>
> **[1:44](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=104)** As your service scales in this pattern, your data store itself also scales, which is another key benefit of this pattern.
>
> **[1:54](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=114)** Since the data domain is isolated and the data store itself is also isolated, you can scale both of them up or down without impacting this system as a whole.
>
> **[2:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=128)** If you really build this right, you could actually isolate your data per region while your system still functions as a whole unit.
>
> **[2:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=139)** But that's much more advanced than we're going to discuss in this course.
>
> **[2:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=144)** So let's visualize what this will look like in a simplified system's architecture.
>
> **[2:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=152)** You start with a single service and its single datastore.
>
> **[2:38](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=158)** Now, to color this just a little bit, we'll add two more services, each of which has its own database.
>
> **[2:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=166)** Now we introduce load on the first data service, so we scale the services independently of anything else, adding two more instances.
>
> **[2:57](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=177)** This causes increased load on the database, so we need to scale it as well.
>
> **[3:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=183)** Now, most often this is accomplished by making the database itself bigger, giving it more IOPS, and in doing so, we've scaled our service independently of any other service, including the data stores.
>
> **[3:18](https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database?u=76281980&t=198)** A single-service, single-database model isn't perfect, but the distribution of these types of systems as well as the ability to scale them is worth the effort.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), else, (1)
> **Env Vars:** iops (1)
> **Warnings:** caveat (1)
> **Speakers:** - we (1)

#### Shared service database
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=1)** - While the single service, single database pattern is usually a more effective one, there are some times when you must use a shared database.
>
> **[0:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=11)** The shared database pattern isn't really new, especially if you've done some application development in your life.
>
> **[0:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=19)** In reality, this is an enterprise construct that is carried over into a distributed model like microservices, mainly due to contracts that have already been signed, but not always, as we'll see often in startups.
>
> **[0:36](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=36)** There are some ways that we can pattern our data in our data store to be more effective for eventually breaking the database up.
>
> **[0:47](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=47)** The given in this case is that all data domains exist within a single database instance.
>
> **[0:54](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=54)** We can still treat them as separate databases, however, from both a logic as well as a code concept, even if they're in a single engine.
>
> **[1:06](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=66)** Data distribution should be handled by the database itself.
>
> **[1:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=71)** If you're deploying to multiple data centers, you need the database to handle the data synchronization across the data centers themselves.
>
> **[1:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=81)** Pushing that to code will cause databases to become out of sync.
>
> **[1:27](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=87)** Even with some more modern databases, replication across WAN gateways is an afterthought, and you may lose database functionality when you consume them.
>
> **[1:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=101)** So choose your databases well.
>
> **[1:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=105)** While we won't get into the scalability pain points of a single instance database, we can structure our data so that we can isolate it and prepare it for a hopeful breakout one day.
>
> **[2:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=120)** To do this, we need to leverage distinct databases in a single engine, or my favorite way, which is to utilize schemas, key spaces, or similar logical groupings within the database engine itself.
>
> **[2:18](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=138)** These strategies allow our code to be written with a single database isolation model, even if the database is shared.
>
> **[2:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=149)** To ensure we have proper segmentation of our schema, each service that consumes that schema should have unique credentials.
>
> **[2:40](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=160)** Those credentials should never span the logical breaks.
>
> **[2:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=165)** If you have a user that can connect to multiple schemas, you might as well stick with the existing model you have.
>
> **[2:53](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=173)** The idea here is to break it up, even if only logically.
>
> **[2:59](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=179)** - In a similar vein, the data domain should connect to a single schema.
>
> **[3:05](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=185)** Again, we're treating these systems as though they're isolated, even though they aren't.
>
> **[3:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=191)** I alluded to this, but this pattern is extremely useful for startups as well.
>
> **[3:18](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=198)** While in startup mode, your focus should be on product market fit.
>
> **[3:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=203)** You can spend time building multiple database engines and maintaining them, or you can simply plan for the future while also reducing the overhead with a single engine.
>
> **[3:38](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=218)** Your focus can be on new features, but keeping good isolation in play at the same time.
>
> **[3:47](https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database?u=76281980&t=227)** By enforcing this pattern, you can better break the database up at a later point in time because the data and the apps are already logically isolated, even if unfortunately your database has to be shared.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), new, (1)
> **Definitions:** is an  (2)
> **Speakers:** - while (1), - in (1)
> **Env Vars:** wan (1)

#### Command Query Responsibility Segregation
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=0)** - Of all the data patterns for microservices we will discuss in this course, the command query responsibility segregation pattern is by far the most complex of them all.
>
> **[0:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=14)** CQRS is one of the most ethereal concepts of data management.
>
> **[0:20](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=20)** Those that get it well and can implement it successfully can dramatically improve their data behavior across the system as a whole.
>
> **[0:31](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=31)** The core pattern we are trying to solve is that our data access patterns diverge from traditional CRUD to a more complex, multi-model pattern within a single bounded context or data domain.
>
> **[0:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=48)** This becomes more clear as we have multiple interfaces.
>
> **[0:52](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=52)** In a CQRS model, query interfaces may transform and aggregate the schema to represent the model in a very specific use.
>
> **[1:05](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=65)** However, the write interfaces may inject behavior and infer characteristics based on an entirely different model and set of rules, but the underlying data becomes the same through eventual consistency.
>
> **[1:26](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=86)** Now, obviously this is a very clear divergence from CRUD where a model has a unified set of rules about reading and writing.
>
> **[1:37](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=97)** In CQRS, we diverge dramatically and apply different rules, as I previously stated.
>
> **[1:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=105)** As you might imagine, this dramatically increases complexity of the system.
>
> **[1:52](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=112)** When you need this special type of processing, you want to go beyond business processes to accomplish this access pattern.
>
> **[2:02](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=122)** CQRS can be great if implemented correctly, but if it isn't, which unfortunately is common, it can cause a nightmare from a maintainability as well as an operational perspective.
>
> **[2:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=141)** So you may ask, when is the complexity worth it in a CQRS model?
>
> **[2:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=149)** A common place that it is attempted is with task-based user interfaces.
>
> **[2:35](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=155)** As the write model focuses on the tasks, the read models are based on the system state after the interactions from that task.
>
> **[2:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=166)** Because of how these systems work, eventual consistency isn't just something you can live with, it's a must have.
>
> **[2:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=175)** You must fully accept that you cannot read data that was just written and be guaranteed an updated state.
>
> **[3:04](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=184)** As such, your use cases must match this model.
>
> **[3:09](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=189)** Furthermore, event-driven models also play well in this use case.
>
> **[3:15](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=195)** When triggers and system events occur from the write operations, the CQRS model works well because reading what was just written doesn't make sense.
>
> **[3:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=209)** Now, this is the furthest I'm going to go on this topic with respect for this course.
>
> **[3:35](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=215)** We've exposed it and introduced it, but the reality is that I could spend hours working through the ins and outs of how to build this correctly and it still wouldn't solve the needs of your use case.
>
> **[3:49](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=229)** If you find yourself traveling down this road, do some homework on the topic and spend some significant time in design before you even create the empty project that will house your code.
>
> **[4:04](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=244)** This is a very complex topic, and if you read many blog posts, you'll see failure after failure of implementing this because it's not easy.
>
> **[4:15](https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation?u=76281980&t=255)** But like I've said before, when it's done right, it is extremely powerful, and it reduces the complexity of your access patterns in many cases, even though this component itself becomes much more complex.

> [!info]- Semantic Content
>
> **Env Vars:** cqrs (6), crud (2)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** case. (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1)
> **Speakers:** - of (1)

#### Asynchronous eventing
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=0)** - The final data access pattern we will discuss is asynchronous eventing.
>
> **[0:06](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=6)** While it needs to be talked about as a pattern, it is much bigger than this course.
>
> **[0:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=11)** Check out my course in the library, Microservices: Asynchronous Messaging, to dive much deeper into this topic.
>
> **[0:20](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=20)** Many times in a microservices architecture, you run into situations with long-running transactions or complex workflows that just cannot fit into a single blocking API call.
>
> **[0:35](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=35)** Enter into the picture asynchronous eventing.
>
> **[0:39](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=39)** The problems we can solve go beyond what I just described, but essentially in a nutshell, we can describe the superset of problems as some process that cannot be done in real time through a blocking call.
>
> **[0:57](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=57)** The pattern deployed depends upon the use cases, but they all share a common thread, a service API that triggers the event.
>
> **[1:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=67)** The event can cascade asynchronously from the API itself, putting together a series of actions that all happen behind the scenes after the client has received an accepted message from the service API of course.
>
> **[1:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=81)** Oftentimes, you can make a single blocking call and put a message on a messaging system.
>
> **[1:27](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=87)** Once that is done, the service returns and then the behind-the-scenes processing occurs in an asynchronous manner.
>
> **[1:36](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=96)** One key characteristic of this model is how powerful it can be in a distributed system.
>
> **[1:44](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=104)** Nothing is a silver bullet when it comes to software, but there are many complex problems in distributed systems that asynchronous eventing can solve.
>
> **[1:56](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=116)** As I stated before, I encourage you to take the Microservices: Asynchronous Messaging course for a more detailed view of the why we do this, as well as the how to do this for this complex set of patterns.
>
> **[2:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=131)** I just want to leave you with this.
>
> **[2:13](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=133)** Even though I'm deferring this topic to another course, its power cannot be understated.
>
> **[2:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=141)** I have used this class of operations more times than I can count when building out systems.
>
> **[2:28](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=148)** Things like business processing, auditing, security, eventing, infrastructure creations, as well as configurations, just touch the surface.
>
> **[2:38](https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing?u=76281980&t=158)** Other than how you manage your data domains, this may be the most important pattern you can learn.

> [!info]- Semantic Content
>
> **Env Vars:** api (4)
> **Code Keywords:** this, (1), this. (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - the (1)


### 5. 4. Operational Patterns

#### Log aggregation patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=1)** - Now we're going to dive into our final set of patterns, which are operational patterns.
>
> **[0:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=7)** Now, these are unique in that they're more about how to run your system than how to build your system, but these are tried and true methods.
>
> **[0:18](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=18)** The first one that we're going to talk about is log aggregation.
>
> **[0:22](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=22)** So I'll dive into this pattern by first talking about the source of that data, and that is the log messages themselves.
>
> **[0:30](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=30)** The problem that we are trying to solve is that operationally, we need to know what is going on with our systems.
>
> **[0:38](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=38)** When errors occur, we need a way to quickly diagnose and resolve the errors, and logs are one of the single best places to look.
>
> **[0:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=48)** Logs are invaluable if done right.
>
> **[0:51](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=51)** Logs provide detailed information of the runtime behavior of your microservice artifact.
>
> **[0:57](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=57)** Through other operational patterns that we'll talk about, Logs can be written and linked to other system logs as well.
>
> **[1:05](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=65)** As such, logging must be consistent across all services.
>
> **[1:12](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=72)** As we start doing log aggregation and indexing consistency, not only within a single service, but across the entire system becomes critical.
>
> **[1:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=83)** The structure and format of your logs therefore must be consistent and enforced across the whole system.
>
> **[1:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=92)** While polyglot programming can make this more difficult, the time spent making your log output consistent will be well worth it.
>
> **[1:43](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=103)** Beyond simple structure and possibly more important because the ability to process logs via aggregation is the need for a common taxonomy.
>
> **[1:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=115)** Domain level taxonomy and logs should be shared across every consumer and related service.
>
> **[2:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=123)** Identifiers and core values across your log messages should be keyed the same, as well as documented so that everyone knows what those keys are, what keys they should be using, and when to include this data in the log messages.
>
> **[2:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=143)** Log aggregation is a key pattern in the operations of a microservices based system.
>
> **[2:30](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=150)** In monolithic models, the log messages usually all go to the same output.
>
> **[2:36](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=156)** As such, they essentially are aggregated on their own.
>
> **[2:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=161)** With microservices, however, it's a different thing.
>
> **[2:44](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=164)** The problem we need to solve is that our logs are everywhere.
>
> **[2:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=168)** Each service writes its own logs and dumps them to the output of some kind.
>
> **[2:54](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=174)** The output locations usually are unique per service and can be very difficult to follow in a stateless flow.
>
> **[3:04](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=184)** Log aggregation is, as you might imagine, a way to aggregate the various output locations into a single stream of data.
>
> **[3:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=194)** This aggregation takes on many forms, but the key here is that at the end, the logs all end up in one place.
>
> **[3:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=204)** Part of that aggregation can and should be parsing of the logs.
>
> **[3:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=209)** This is where the log structure is so important.
>
> **[3:34](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=214)** Logs usually have a message and a bunch of metadata called tags that are associated with that message.
>
> **[3:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=221)** The more structured the logs are, the less parsing you have to do on them because of a well-defined set of rules.
>
> **[3:51](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=231)** The reality is that the faster you can get your logs aggregated, the faster they can be indexed.
>
> **[3:57](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=237)** Then you can actually use that log data to diagnose issues.
>
> **[4:04](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=244)** Correlation of log messages is where the real power comes into play and why things like structure and taxonomy are so important.
>
> **[4:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=254)** We will talk about tracing later, but ensuring tracing identifiers are injected into logs the exact same way across every service with the same key will allow you to recreate call stacks of errant processes.
>
> **[4:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=272)** In addition, taxonomy will help you identify issues as well as you have a clear picture of what these identifiers actually mean.
>
> **[4:43](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=283)** Logging as a whole is one of those things that you should just use off the shelf components for.
>
> **[4:50](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=290)** Structured logging frameworks exist and almost every language has them.
>
> **[4:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=295)** Log parsing and shipping exists for almost every common aggregation platform.
>
> **[5:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns?u=76281980&t=303)** You just need to build a common taxonomy and document it, and then let the tools do their job across your system as a whole.

> [!info]- Semantic Content
>
> **Code Keywords:** for. (1), let (1)
> **Analogies:** imagine (1), picture (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)

#### Metrics aggregation patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=0)** - In a similar vein to log aggregation, operationally, metrics are an invaluable tool to diagnosing issues.
>
> **[0:09](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=9)** In fact, metrics can be more operationally useful than logging if used correctly.
>
> **[0:16](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=16)** Metrics are also easier than logging because there's really less human interaction.
>
> **[0:22](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=22)** Logging relies on a developer to write and structure the log message.
>
> **[0:27](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=27)** Metrics, however, usually just requires a bit of instrumentation.
>
> **[0:33](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=33)** The problem we're looking to solve is that we need to know what is going on with the system as a whole, while being able to peek into individual services.
>
> **[0:43](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=43)** We aren't really looking at code output.
>
> **[0:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=46)** We're looking for system output.
>
> **[0:49](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=49)** Once again, a common taxonomy is critical with metrics.
>
> **[0:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=55)** Structuring your keys to be consistent and descriptive will help explain what the ultimate dashboards are saying.
>
> **[1:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=63)** Having common keys with metrics and logs is even a better strategy.
>
> **[1:10](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=70)** As with logging, much has been done already and there are standard metrics libraries available in almost every language.
>
> **[1:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=79)** While much of the metrics you collect are system level and runtime component data points, you may want to also decorate your metrics dashboards with custom data.
>
> **[1:31](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=91)** Metrics shipping is accomplished, again, via standard componentry.
>
> **[1:35](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=95)** Most metrics aggregation solutions have one or more shipping standards that already exist, so just use them.
>
> **[1:44](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=104)** Once your metrics are shipped, you can view them usually graphically through a metrics aggregation solution.
>
> **[1:52](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=112)** Dashboards are powerful, especially for on-call activity.
>
> **[1:57](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=117)** Metrics aggregation is relatively simple, but it is critical in an operational model.
>
> **[2:04](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=124)** I have learned the hard way to not ignore metrics ever.
>
> **[2:09](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=129)** As such, I want to share with you a few lessons I have learned over time and how I use them still to this day.
>
> **[2:18](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=138)** First and foremost, I would recommend you build very high level dashboards.
>
> **[2:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=143)** Your on-call engineer can use these high level dashboards as a place to see trouble starting, before it takes hold.
>
> **[2:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=152)** Don't make these dashboards too busy, but make them busy enough that you can see the true health of your system.
>
> **[2:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=161)** In addition to those high level dashboards, you want to build detailed dashboards for each service.
>
> **[2:49](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=169)** The high level is an aggregated and simplified view, but once you think you have a problem, the detailed dashboard can provide much more insight into the service.
>
> **[3:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=181)** I usually embed a link to log queries in my metrics dashboards, because at two in the morning, building a log query with the stress of a potential outage, after being woken up from sleep, isn't very appealing.
>
> **[3:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=197)** Consider also injecting events into your dashboards.
>
> **[3:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=201)** System events that can impact system performance, as well as user events, can help you understand what systems are being impacted.
>
> **[3:31](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=211)** In addition, deployment events can help you understand that you have code issues that are impacting the system as a whole based on a newly introduced code.
>
> **[3:43](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=223)** If you can, put traces on your graphs at alarm points.
>
> **[3:47](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=227)** If you're going to get paged, having a reason for the page visually can help promote a quicker resolution.
>
> **[3:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=235)** Again, consider the middle of the night scenario of being woken up by a page.
>
> **[4:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=241)** Finally, ensure you have runbooks for every alarm and explanations of what metrics and logs to look at.
>
> **[4:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=251)** Metrics and log aggregations, both are about identifying as well as resolving issues.
>
> **[4:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=257)** If you build an alarm, you know why the alarm fired.
>
> **[4:22](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=262)** The runbook will make troubleshooting significantly easier.
>
> **[4:27](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=267)** I embed links to runbooks into the pages themselves, as well as the dashboards.
>
> **[4:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=272)** Again, making life easier for on-call, which ultimately is the point of all operational patterns.
>
> **[4:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns?u=76281980&t=281)** Solid, well-defined metrics will help you understand your system, its errors, its health, and ultimately how you are treating your users.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** finally, (1)
> **Definitions:** is an  (1)
> **Speakers:** - in (1)

#### Tracing patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=0)** - In a microservices-based system, call stacks can quickly get lost.
>
> **[0:05](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=5)** Enter into the picture, tracing patterns.
>
> **[0:09](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=9)** Tracing is one of those things that once you build it, you'll regret not having it before that time.
>
> **[0:16](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=16)** Consider for a moment a monolithic system.
>
> **[0:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=19)** All code execution, from edge to database call, was in a single process.
>
> **[0:25](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=25)** As such, a stack trace will help you recreate the path that the service call took.
>
> **[0:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=32)** In a microservices architecture, however, that is gone because calls span processes as well as the network, not just functions.
>
> **[0:42](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=42)** Tracing gives you a way to recreate the call stack by injecting a trace identifier into every call.
>
> **[0:51](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=51)** The tracing identifier should be injected at the edge and span all the way to the database call, or even to the database itself, if possible.
>
> **[1:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=61)** By spanning the stack, you can inject the trace ID into logs, and that will help you further diagnose issues.
>
> **[1:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=71)** By leveraging tracing, no call is ever lost as long as everyone honors the trace identifier.
>
> **[1:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=79)** Implementations of tracing are relatively straightforward.
>
> **[1:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=83)** First and foremost, use a standards-based approach.
>
> **[1:27](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=87)** I have worked in environments where a pattern was homegrown, and to be honest, it was painful.
>
> **[1:34](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=94)** Open standards allow you to use off-the-shelf tooling to introspect your system.
>
> **[1:40](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=100)** The trace ID should be injected into the entry point of your system, be it a browser or an edge service or any other mechanism, even something like an ETL.
>
> **[1:52](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=112)** Every log message should embed the trace ID.
>
> **[1:56](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=116)** Open standards use headers, so your logging functions should simply pull it out of the header and drop it into the tag on the log message using common taxonomy.
>
> **[2:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=128)** Leveraging tracing tools and APM, or application performance monitoring, can help you visualize the call stacks, which can be helpful to many people when that two a.m. page hits your phone.
>
> **[2:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=141)** As with logging in metrics, don't recreate the wheel.
>
> **[2:25](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=145)** There are very good patterns out there for systems that all play nicely with microservices.
>
> **[2:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns?u=76281980&t=152)** Just use what already exists, but use it.

> [!info]- Semantic Content
>
> **Env Vars:** etl (1), apm (1)
> **Analogies:** picture (1)
> **Speakers:** - in (1)

#### External configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=1)** - Externalized configuration in a microservices architecture isn't a hard and fast requirement like it is for cloud native, but its value becomes operationally important when load and movement of services occurs.
>
> **[0:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=17)** The value proposition in externalized configuration in microservices is more about the operations than distribution.
>
> **[0:26](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=26)** When you have systems running and issues occur, having a clear spot to see configuration outside of code can greatly impact the meantime to resolution.
>
> **[0:40](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=40)** Externalization of your configuration varies based on your runtime as well as the frameworks being used.
>
> **[0:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=48)** Runtimes like Kubernetes and frameworks like Spring have sophisticated models to inject configuration into your application, but many other tools do as well.
>
> **[0:59](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=59)** The key here is to use tooling that makes external environment variables easy to find, as well as manipulate.
>
> **[1:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=68)** While it may not seem like a huge deal, consistent naming is also very helpful.
>
> **[1:16](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=76)** Again, always look at operational patterns from the perspective of the on-call engineer being woken up in the middle of the night.
>
> **[1:25](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=85)** If you consistently call a variable X, except in one case when you get a page on that one case and you will, you may find that your resolution time suffers.
>
> **[1:39](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=99)** When defining which values for configuration should be externalized, my recommendation is to always err on the side of externalization.
>
> **[1:50](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=110)** It doesn't hurt to expose too much config, but if you don't expose enough, resolution or troubleshooting may suffer.
>
> **[2:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=121)** On that line, however, there's a need to protect secrets.
>
> **[2:05](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=125)** Secrets can and should be externalized in most implementations through special constructs.
>
> **[2:13](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=133)** But ensure the on-call team has a path to get them securely while not exposing them to prying eyes.
>
> **[2:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=143)** Externalized config is not a hard concept, but I do want to talk about the pattern and how applies.
>
> **[2:31](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=151)** First, config is usually injected into your service or retrieved as part of your startup routine for your framework.
>
> **[2:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=161)** These values then become available to your code through various mechanisms, and each language has very specific ways of accessing these values.
>
> **[2:52](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=172)** Your service should then be written to utilize these values in favor of embedded values.
>
> **[2:59](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=179)** I say embedded because I do believe in the use of defaults where they make sense.
>
> **[3:06](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=186)** Once again, there's a lot of common libraries, toolings and patterns within each language that will help you consume, use, and flex behavior based on various values.
>
> **[3:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=199)** Once again, use what already exists.
>
> **[3:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=203)** The basic pattern, however, is always the same.
>
> **[3:26](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=206)** Read the config, flex your behavior as necessary and act.
>
> **[3:31](https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration?u=76281980&t=211)** It's simple enough.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Speakers:** - externalized (1)

#### Service discovery
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=1)** - As a microservices architecture grows, so does the complexity of finding the appropriate services that provide the models and behaviors that you need.
>
> **[0:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=11)** Enter into the picture Service Discovery.
>
> **[0:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=14)** Service discovery can save you a lot of time, especially in a dynamic runtime where service locations can vary based on scaling events or geographic location.
>
> **[0:27](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=27)** The problem we are trying to solve here is very simply, what service do I need to call in order to perform some body of work?
>
> **[0:36](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=36)** When you only have a small set of microservices, that may seem very manageable within your configuration.
>
> **[0:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=45)** However, once you go to hundreds or even thousands within a single environment?
>
> **[0:50](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=50)** It's not so manageable.
>
> **[0:52](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=52)** The concept is actually quite simple as well.
>
> **[0:56](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=56)** A central location exists that allows for discovery of services.
>
> **[1:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=61)** As a new service comes online, it advertises itself and what models or behaviors it exposes to the rest of the system.
>
> **[1:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=71)** It does this by in introspection of its URI, essentially saying, "At location foo, you can find services for bar."
>
> **[1:21](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=81)** A service can then query the central location to find out which other services expose the needed behavior and what their location is.
>
> **[1:33](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=93)** Once it's found, a URI to that service is returned from the central location.
>
> **[1:39](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=99)** And it's all based on the aforementioned advertisement.
>
> **[1:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=105)** The service has then been discovered and the client can call the URI from discovery instead of configuration.
>
> **[1:54](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=114)** This model becomes much more extensible than simple config.
>
> **[2:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=120)** Building a discovery system in clients, however, is beyond the scope of this course.
>
> **[2:05](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=125)** But I will say, off the shelf components exist.
>
> **[2:10](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=130)** Use them if possible.
>
> **[2:12](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=132)** Netflix, for instance, has done a great job of open sourcing many of their components around service discovery.
>
> **[2:20](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=140)** And they're an example of a company running thousands and thousands of microservices, all based on that service discovery.
>
> **[2:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=149)** You can start off without this pattern and even run some systems of some size without it.
>
> **[2:35](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=155)** However, you may get to a point where the value of this pattern really shines.
>
> **[2:42](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=162)** The flexibility alone gives it some of that value.
>
> **[2:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery?u=76281980&t=166)** Keep this pattern in your tool belt for when you need it.

> [!info]- Semantic Content
>
> **Env Vars:** uri (3)
> **CLI Commands:** find (2)
> **Analogies:** picture (1), for instance (1)
> **UI Navigation:** go to (1)
> **Speakers:** - as (1)

#### Continuous delivery
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=1)** - When talking about continuous delivery, we need to start with the definition.
>
> **[0:05](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=5)** Continuous delivery is a process by which we constantly deliver new code to production with, in my opinion, full automation.
>
> **[0:15](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=15)** This is really where this operational pattern, that does exist outside of microservices, really shines.
>
> **[0:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=23)** The concept is basically to take the artifacts that were previously built and move them through your non-production environments all the way to production using automated gates.
>
> **[0:36](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=36)** The devil is in the details, however.
>
> **[0:39](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=39)** I want to share with you some of the strategies I have successfully used in my career to achieve this.
>
> **[0:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=46)** Once an artifact has been built and has its unit tests run, the artifact is published.
>
> **[0:53](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=53)** This is the trigger that I use to move this code into non-production environments, that process should be seamless and fully automated.
>
> **[1:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=63)** Once you have your code in non-prod, the work actually begins.
>
> **[1:09](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=69)** One of the first strategies I use is automated integration tests.
>
> **[1:15](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=75)** Now, I'm a big fan of leveraging an API layer to expose a small subset of my services to the outside world.
>
> **[1:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=84)** Because of this, many of my service endpoints are hidden to the outside, including testing tools.
>
> **[1:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=92)** The strategy I use is deploying integration test suites into the environment along with the code itself.
>
> **[1:40](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=100)** These integration test suites exist as single run jobs in my environment.
>
> **[1:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=105)** They set up the data conditions and then execute against my APIs exposed in the code deployment.
>
> **[1:52](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=112)** They do a lot of logging.
>
> **[1:54](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=114)** Since these processes are hard enough to debug, once they pass, the automated gate is cleared.
>
> **[2:04](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=124)** I then add in security testing, it comes in two forms.
>
> **[2:09](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=129)** I use third party tools for both of them.
>
> **[2:13](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=133)** The first flavor is penetration testing.
>
> **[2:16](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=136)** I execute my penetration testing framework on every single deployed and non-prod, not just the UI components.
>
> **[2:26](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=146)** This gives me confidence that any change introduced doesn't impact the overall security of the environment.
>
> **[2:35](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=155)** I then run internal security tests that execute the exact same as my integration tests.
>
> **[2:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=161)** These tests are really about stress testing the most likely areas of security vulnerabilities.
>
> **[2:48](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=168)** CI/CD OWASP top 10 for some ideas here.
>
> **[2:52](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=172)** The final set of tests that I automated in non-production is user acceptance testing.
>
> **[2:58](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=178)** These not only use an external framework, but need a lot of care as the UIs change often.
>
> **[3:06](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=186)** We find the benefit here is proportional to the work that we put into them.
>
> **[3:11](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=191)** So they again, help us have confidence in moving code to production.
>
> **[3:16](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=196)** Now, we execute each of these suites of tests in every environment up to production.
>
> **[3:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=203)** Once we get into production, we drop our UAT, but we have cron operation that continually smoke tests our applications with the most popular workloads, keeping our confidence level high.
>
> **[3:39](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=219)** Now, I don't want to pretend like this is a new concept, however, it's one of the most important aspects for microservices.
>
> **[3:47](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=227)** In my opinion, CI/CD is a requirement of microservices, more so than any other way of developing applications.
>
> **[3:56](https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery?u=76281980&t=236)** So building out strong automation patterns is worth the time and energy.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (2), find (1)
> **Code Keywords:** this. (1), this, (1), pass (1)
> **Env Vars:** api (1), owasp (1), uat (1)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (1)
> **Speakers:** - when (1)

#### Documentation
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=0)** - Documentation is always the last or even forgotten concept in almost all of software.
>
> **[0:07](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=7)** However, with the microservices architecture, it really is critical.
>
> **[0:13](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=13)** Your system may be written by multiple teams with very different focus areas, and having a solid documentation for your APIs can aid in the inter-team communication that will need to happen.
>
> **[0:28](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=28)** In fact, great documentation can turn a stressful situation into a more collaborative event.
>
> **[0:36](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=36)** Now, documenting APIs is nothing new, you should use any pattern that is native to your service definition.
>
> **[0:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=45)** For instance, if you are writing Restful services, OpenAPI is a great tool for documenting your contracts.
>
> **[0:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=55)** Now, I'm an old school, contract-first type developer, but that is in no way the only way to do it.
>
> **[1:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=63)** Most languages and frameworks have integrations for OpenAPI that let you do both contract-first development as well as code-first development.
>
> **[1:14](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=74)** The real niche area of this pattern, however, is how you share that documentation.
>
> **[1:19](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=79)** I believe in a two-pronged approach to solving this concern.
>
> **[1:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=84)** First, I believe each service should expose its documentation at a consistent location.
>
> **[1:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=92)** This means that an HTTP get request at a specific URL, off of the context route, say /docs, will yield an HTML renderable documentation page.
>
> **[1:45](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=105)** Check the documentation framework for the tools you are using.
>
> **[1:49](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=109)** Most likely, this is an easy switch to just turn on and get this.
>
> **[1:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=115)** The key here is that every API renders its documentation at the same URL.
>
> **[2:02](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=122)** Now, from there, you can populate your central documentation repository.
>
> **[2:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=128)** If you automate this step, that's ideal, but you at least need to publish the documentation.
>
> **[2:16](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=136)** Automation is pretty simple too here.
>
> **[2:18](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=138)** You build a system that leverages tools like Service Discovery.
>
> **[2:23](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=143)** You can then get a collection of every service, and because they all expose docs at the same URL, you can crawl them and publish the documentation updates.
>
> **[2:36](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=156)** Consider examples of API consumption in your documentation as well.
>
> **[2:41](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=161)** This really helps the caller know how to use your API.
>
> **[2:47](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=167)** Consider also publishing your team name and direct contacts within the documentation.
>
> **[2:53](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=173)** This way, a consumer knows who to talk to if they have questions.
>
> **[2:59](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=179)** The power of solid documentation directly impacts operations, agility, and improves reuse of code.
>
> **[3:08](https://www.linkedin.com/learning/microservices-design-patterns-23454771/documentation?u=76281980&t=188)** More importantly, in my mind, it helps ensure the code and its APIs are well discussed as these documentation changes should be part of your pull requests.

> [!info]- Semantic Content
>
> **Env Vars:** url (3), api (3), http (1), html (1)
> **Code Keywords:** new, (1), let (1), yield (1), switch (1), this. (1)
> **Documentation:** the documentation (4)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for instance (1)
> **Speakers:** - documentation (1)


### 6. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=1)** - Building a microservices architecture benefits greatly by utilizing patterns other developers have struggled with and solved.
>
> **[0:10](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=10)** This course has provided a base foundation for the patterns, but it is just the beginning.
>
> **[0:17](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=17)** Before we jump into the next steps, however, let's summarize what we've discussed.
>
> **[0:24](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=24)** We started by discussing microservices as a high-level concept.
>
> **[0:29](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=29)** We then dug into some decomposition patterns for breaking down a monolith, as well as defining some specific classes of services.
>
> **[0:39](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=39)** From there, we discussed integration patterns for exposing your APIs internally and more extensively filtering and modifying your offerings externally.
>
> **[0:51](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=51)** We then looked at some data access patterns that you can leverage as you build your systems out.
>
> **[0:58](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=58)** We then spent a lot of time looking at operational patterns.
>
> **[1:03](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=63)** I feel that these are some of the most valuable aspects of this course because operations is so critical to a healthy system.
>
> **[1:13](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=73)** So, what's next for you?
>
> **[1:15](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=75)** I would suggest that you start by looking where you are.
>
> **[1:20](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=80)** Evaluate ways that you can improve your existing system or design by leveraging some of these patterns.
>
> **[1:28](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=88)** Of course, I have only given you a small taste.
>
> **[1:32](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=92)** You will need to enhance your knowledge on these patterns beyond the scope of this course.
>
> **[1:38](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=98)** But oftentimes, knowing what to look for is harder than knowing where to look for information.
>
> **[1:46](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=106)** I want to thank you for your time in this course.
>
> **[1:49](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=109)** It means a lot to me that you have spent this time with me, even virtually.
>
> **[1:55](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=115)** My commitment does not end when this course is over.
>
> **[2:00](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=120)** I respond to requests on social media, on all of my content here, or any other public platform that I present on.
>
> **[2:09](https://www.linkedin.com/learning/microservices-design-patterns-23454771/next-steps?u=76281980&t=129)** I love learning and sharing knowledge, so please reach out to me with questions or ideas.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), public (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - building (1)


## Instructor

- [[Frank P Moley III]]

## Skills Covered

- Software Design Patterns
- Microservices

## Path Context

### In [[Microservices Foundations Professional Certificate by Kong]]
← [[Microservices Foundations]] | **2 of 3** | [[Software Architecture- Breaking a Monolith into Microservices]] →

### In [[Getting Started with Microservices]]
← [[Microservices Foundations]] | **2 of 3** | [[Microservices- Security]] →

## Part of

- [[Microservices Foundations Professional Certificate by Kong]]

## Appears In

- [[Microservices Foundations Professional Certificate by Kong]]
- [[Getting Started with Microservices]]

## Related Courses

_Courses sharing skills:_

- [[JavaScript- Patterns]] — Software Design Patterns
- [[C++ Design Patterns- Structural]] — Software Design Patterns
- [[Spring 6 Design Patterns]] — Software Design Patterns
- [[Kubernetes- Microservices]] — Microservices
- [[C++ Design Patterns- Behavioral]] — Software Design Patterns

---

[↑ Back to top](#)