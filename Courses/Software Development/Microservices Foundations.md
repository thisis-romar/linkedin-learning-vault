---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: microservices-foundations-23469069
url: "https://www.linkedin.com/learning/microservices-foundations-23469069"
level: Beginner
updated: 2/29/2024
learners: 36743
skills:
  - Microservices
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQE5c_GBqVVYtQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709077523412?e=2147483647&amp;v=beta&amp;t=oySZ55Awl-tpuGMc9MmTcYVtsW52836ggVv59NACB7I"
linkedin_topic: Software Development
learning_paths:
  - '[Microservices Foundations Professional Certificate by Kong](../../Paths/Software%20Development/Professional%20Certificates/Microservices%20Foundations%20Professional%20Certificate%20by%20Kong.md)'
  - '[Getting Started with Microservices](../../Paths/Cybersecurity/Learning%20Paths/Getting%20Started%20with%20Microservices.md)'
next_courses:
  - '[Microservices- Design Patterns](Microservices-%20Design%20Patterns.md)'
  - '[Microservices- Design Patterns](Microservices-%20Design%20Patterns.md)'
path_nav: '[{"path":"Microservices Foundations Professional Certificate by Kong","position":1,"total":3,"prev":null,"next":"Microservices- Design Patterns"},{"path":"Getting Started with Microservices","position":1,"total":3,"prev":null,"next":"Microservices- Design Patterns"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/security
  - skill/microservices
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Microservices%20Foundations.md)

![Microservices Foundations](https://media.licdn.com/dms/image/v2/D560DAQE5c_GBqVVYtQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709077523412?e=2147483647&amp;v=beta&amp;t=oySZ55Awl-tpuGMc9MmTcYVtsW52836ggVv59NACB7I)

# Microservices Foundations

> Microservices is a major architectural pattern in the software industry, and having an overview of what this architecture is-and what it isn't-is critical as a starting point to evaluating this model. This course covers the basic concepts of microservices, to help you determine if this architectural model is the right fit for you and your team. Instructor Frank Moley kicks off the course by briefl

> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-foundations-23469069) | Beginner | 37K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Welcome](#welcome)
  - [What you need to know](#what-you-need-to-know)
- [**1. Welcome to Microservices**](#1-welcome-to-microservices) (6 videos)
  - [History of service-based architectures](#history-of-service-based-architectures)
  - [The monolithic application](#the-monolithic-application)
  - [Service-oriented architecture](#service-oriented-architecture)
  - [Microservices: The new kid on the block](#microservices-the-new-kid-on-the-block)
  - [Microservices: Solver of problems but not the silver bullet](#microservices-solver-of-problems-but-not-the-silver-bullet)
  - [Microservices and cloud native](#microservices-and-cloud-native)
- [**2. Microservices Core Concepts**](#2-microservices-core-concepts) (8 videos)
  - [The services](#the-services)
  - [The communication dance](#the-communication-dance)
  - [Distribution and scale](#distribution-and-scale)
  - [The dangers of latency and gridlock](#the-dangers-of-latency-and-gridlock)
  - [Bounded context](#bounded-context)
  - [Data domains as a service boundary](#data-domains-as-a-service-boundary)
  - [No ACID, only BASE](#no-acid-only-base)
  - [The API layer](#the-api-layer)
- [**3. Microservices Advanced Concepts**](#3-microservices-advanced-concepts) (4 videos)
  - [Asynchronous communications](#asynchronous-communications)
  - [Logging and tracing in a microservices architecture](#logging-and-tracing-in-a-microservices-architecture)
  - [Continuous delivery as a requirement](#continuous-delivery-as-a-requirement)
  - [Hybrid architectures: Hierarchy and service-based](#hybrid-architectures-hierarchy-and-service-based)
- [**4. Making Architecture Choices**](#4-making-architecture-choices) (5 videos)
  - [Design considerations](#design-considerations)
  - [The tradeoffs](#the-tradeoffs)
  - [An argument for edge services](#an-argument-for-edge-services)
  - [Embracing DevOps](#embracing-devops)
  - [Monolithic microservices](#monolithic-microservices)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/microservices-foundations-23469069/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/welcome?u=76281980&t=0)** - Today's users expect the software that they use to always be available, as well as responsive, no matter where they are on the globe. [Microservices](../../Skills/Software%20Development/Microservices.md), as an architectural pattern, aims to provide solutions to these problems. Hi, my name is Frank Moley. I'm a software architect, engineer, teacher and perpetual student. I have been leveraging microservices patterns, where appropriate, for almost a decade, working on large-scale global systems. Join me on this journey to learn microservices foundations with a focus on the problems they try to solve and the trade-offs you have to evaluate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (3)
> **Speakers:** - today (1)

#### [What you need to know](https://www.linkedin.com/learning/microservices-foundations-23469069/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/what-you-need-to-know?u=76281980&t=0)** - Making the move to [Microservices](../../Skills/Software%20Development/Microservices.md) is no easy task. It takes a team effort and buy-in from the entire team to make this migration successful. This course is designed for everyone involved in the [Software Development](../../Topics/Software%20Development.md) lifecycle. For the managers and directors, this course should provide you with the basic knowledge of why the work associated with microservices may be worth it. I'll provide you some of the benefits of this architecture and some of the challenges that your team may encounter all while focusing on where your team and bottom line will be positively impacted by moving to this architecture. Because moving to this pattern really takes everyone's buy-in, yours is very critical for obvious reasons. While the non-technical manager may not understand all of the ins and outs of this pattern, there's a clear value in understanding the basics so you can properly empower your teams to do the work needed. To my fellow architects, this course should be a great starting point in looking at this pattern. While I cannot deliver all of the information you'll need in order to make the appropriate decisions when migrating to this architectural model, I can provide you a good baseline to supplement your existing knowledge base.
>
> **[1:37](https://www.linkedin.com/learning/microservices-foundations-23469069/what-you-need-to-know?u=76281980&t=97)** You'll be exposed to the most core concepts of microservices in a way that allows you to start asking the right questions in order to make the best decisions possible for your organization. You'll also be made aware of the challenges that you'll face so you can quickly [react](../../Skills/Web%20Development/React.js.md) to them. For my fellow developers out there, this course should provide you with a great foundation to explain why you're writing the code the way that you are. You'll be exposed to the overall concepts of the pattern in a way that provides you with insight into the questions that should immediately come up when trying to solve real world problems. You'll also be exposed to some new ways of thinking about writing software for a globally distributed user base. While I won't focus on the how-to aspects of writing microservices, most modern languages have frameworks and patterns for delivering Restful, GRPC or even [GraphQL](../../Skills/Web%20Development/GraphQL.md) services that can be used in this architecture. No matter your role, in order to be successful in this course, you just need to have a desire to learn and some basic knowledge of software development. As a developer or architect, you should have some fundamental knowledge of software composition and decomposition. You need to understand basic remote network calls
>
> **[3:13](https://www.linkedin.com/learning/microservices-foundations-23469069/what-you-need-to-know?u=76281980&t=193)** over HTTP in order to grasp some of the complexities associated with the microservices architecture. With that said, let's jump into some history.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (5), [Software Development](../../Topics/Software%20Development.md) (2), [React](../../Skills/Web%20Development/React.js.md) (1), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **CLI Commands:** make (3)
> **Env Vars:** grpc (1), http (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - making (1)


### 1. Welcome to Microservices

[↑ Back to Table of Contents](#table-of-contents)

#### [History of service-based architectures](https://www.linkedin.com/learning/microservices-foundations-23469069/history-of-service-based-architectures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/history-of-service-based-architectures?u=76281980&t=0)** - We cannot have a discussion on "Modern Application Architectures," without taking a brief look at where we have come from. When I started writing code professionally, end tier architectures, usually three tier and monolithic applications were the norm. We used to build a single binary web artifact and then decompose that application internally into layers. You would build a data access layer and then a process layer, and then on top of that, a presentation layer. Each of these layers would often then decompose into layers themselves, often in threes again, over and over. This layered architecture still gives me chills down my spine as I ponder the crazy pass through layers that we would build just to satisfy the architecture. What we did get, however, was separation of concerns from the decomposition of our code into functional components. As monoliths continue to rule the environment, we started to see an anti-pattern that still hinders us today in many situations. The tight coupling of components in monoliths make changes hard. And the older the application was, the more coupling would develop. In addition to the coupling issues,
>
> **[1:35](https://www.linkedin.com/learning/microservices-foundations-23469069/history-of-service-based-architectures?u=76281980&t=95)** monolithic applications require considerable time to build, test, and deploy. The issues with monolithic applications compounded on top of itself as coupling caused code issues, which could only be fixed with long cycles from code 'fix' to deploy, and the issues go on and on. We then saw a shift, and that shift was to service-based architectures, specifically SOA or service-oriented architecture. While these decomposed our applications into smaller modules, it brought about several other issues. Now I will discuss the two that were most impactful to me. One, is the web service technology was based on SOAP, and while not a deal breaker in its own, it makes a lot of compromises that are contrary to how HTTP works. HTTP was designed with response codes, SOAP ignores these except for "OK", or "Internal Server Error." With SOAP, you get a 500 only, yet if the error is recoverable, you have to wrap it. The client then has to inspect the Unmarshaled XML to see if the error is recoverable or not. The second and more prevalent issue
>
> **[3:09](https://www.linkedin.com/learning/microservices-foundations-23469069/history-of-service-based-architectures?u=76281980&t=189)** is with the aggregation layer itself. While the aggregation layer can be written very thin, the reality is that not only do the transformations of XML get added, but eventually Logic Operations started getting added to the bus itself. This added a new level of coupling now between internal and external elements of the system as a whole. SOA was however the hottest architecture pattern of the time. Enter into the picture [Microservices](../../Skills/Software%20Development/Microservices.md). Now, I would be the first to state that microservices based architectures are not the silver bullet. In fact, they bring their own sets of problems. They do however, have the promise of a more [agile](../../Skills/DevOps/Agile%20Development.md) framework that can be extended into a cloud native world much easier than either monolithic applications or SOA based architectures. The rage of microservices is not an accident either. The model fits well in both the web developer and web service developer, in part because HTTP is at the heart of the model when [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) is utilized. Now, some choose [GraphQL](../../Skills/Web%20Development/GraphQL.md) or GRPC, and while they have the same issues that SOAP has,
>
> **[4:43](https://www.linkedin.com/learning/microservices-foundations-23469069/history-of-service-based-architectures?u=76281980&t=283)** they do have benefits as well. As we begin to dig in, keep in mind the trade-offs we will take in microservices and use that to evaluate if this architecture pattern is for you. Now, we're going to dig into this pattern a little more deeply so we can focus on the lessons of the past to make for a better future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (4), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Env Vars:** soap (4), soa (3), http (3), xml (2), grpc (1)
> **CLI Commands:** make (2)
> **Analogies:** picture (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - we (1)

#### [The monolithic application](https://www.linkedin.com/learning/microservices-foundations-23469069/the-monolithic-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/the-monolithic-application?u=76281980&t=0)** - Often when we discuss microservice architecture, the monolithic application is the primary target of our ire, which isn't always justified. Let's spend a moment and consider what is a monolithic application. Much of my experience with monolith comes in two distinct flavors. The first and probably most prevalent for me is large single file deployments. As a [Java](../../Skills/Software%20Development/Java.md) developer for much of my life, we used to package our deployments for J2EE application servers using single files. All the components were built and packaged into the common file structure and ultimately deployed as such. This packaging structure often has both related and unrelated components. While we did encapsulate our work, that package would solve many uses, but the issue was not only the packaging, but also the deployment. A single deployment may contain internal data access components, business processes, web applications, web services, and even some remote procedure calls. All this packaged into one very large artifact. Now, the second issue looks at code use in a traditional monolithic application. Now, I often say as a profession, developers are lazy.
>
> **[1:35](https://www.linkedin.com/learning/microservices-foundations-23469069/the-monolithic-application?u=76281980&t=95)** If there's a shortcut, we take it. Now this isn't an indictment of our community. It's simply a statement of fact. If I can use an object designed for a purpose outside of my use case, but shoehorned it into my use case without writing a lot of code, I usually will do it. It saves time and energy, often with little immediate side effects, but trust me, the side effects exist. That component or object now serves two masters. An enhancement or correction in that component has to solve the needs of both. Often, this causes us to handle very fragile code that is so tightly coupled that getting out of the mess is next to impossible. So now that we've discussed the internal issues, let's look at how this can impact delivery. Let's say we need to make a change to our highly coupled component. That change, assuming it is well tested, can pass all unit tests and still break unexpectedly downstream. So in order to deal with this, we must test the entire deployment as part of the release. That requires massive resources for every code chains to just package the fix or enhancement. As such, we tend to group enhancements
>
> **[3:10](https://www.linkedin.com/learning/microservices-foundations-23469069/the-monolithic-application?u=76281980&t=190)** and bug fixes into large scale releases packaged together, which of course impacts our speed to market of delivering a single business critical feature. Now, let's say we've handled the coupling in our code and handled the testing and packaging needs of our monolithic artifact. It's now time to deploy. I have seen and heard of deployments of monoliths that can take days to accomplish, and then many more days of production validation. In the monolithic world, this pain is even more apparent if a feature coded in day one of the cycle has been broken by the time we get to the deployment stage, because now the whole cycle starts over again. Simply put, agility and maintainability suffered dramatically in a monolithic world. [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) is often impacted as well. Scaling out a monolith requires deploying the entire package even if only one set of functions is under load. Considering the costs associated with monolithic deployments, as well as [Hardware](../../Topics/Hardware.md) and other infrastructure costs, the monolithic application has lost a lot of favor in the development community.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** j2ee (1)
> **Definitions:** is a  (1)
> **Speakers:** - often (1)

#### [Service-oriented architecture](https://www.linkedin.com/learning/microservices-foundations-23469069/service-oriented-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/service-oriented-architecture?u=76281980&t=0)** - I want to start this conversation by stating that I have spent a significant part of my professional career writing and consuming SOAP services, utilizing SOA platforms and, of course, service buses. So my biases come from my experience. I don't want to spend too much time on SOAP, but I do think it's important to discuss it some. SOAP, as a communication mechanism between systems, is not inherently bad. Like I just mentioned, I have done a lot of valuable work leveraging SOAP. I differ with the opinion of so many in the industry in that I don't feel XML is overly verbose. The verbosity of XML adds some validation value that in some places is very critical. Most of my criticisms about SOAP come from how it was implemented, but more on that in a moment. SOAP's value, in my opinion, comes from its strong contract. There is no doubt in my mind that WSDL is the single best part of SOAP. The definition language not only provides a strong contract that can be validated, but it also provides an inherent documentation layer. These benefits often get ignored when discussing SOAP,
>
> **[1:36](https://www.linkedin.com/learning/microservices-foundations-23469069/service-oriented-architecture?u=76281980&t=96)** but it really aids business processing. The SOAP Envelope, in my view, is wasted space on the wire that could have been handled in more efficient manners. My biggest issue with SOAP, however, is that everything is either OK or a 200 response, or a Fault, which is a 500 response. There is nothing in between. And in the real world, flow control requires much more granularity than working or not. The promise of SOA, even with the deficiencies of SOAP, was amazing. Well-defined contracts of disparate systems communicating over a common protocol. The ability to build and deploy services and consume them through a simple contract was amazing. Many of the deployment issues with monoliths were solved with SOA, and we could simply do work. Once a service was built and deployed, then we would wire all the communications through standard business processing known as BPO. And here is where the real weakness of SOA in my mind comes into play. The promise of business users wiring services only worked in certain situations, and, even then, the work they were doing was abstracted
>
> **[3:10](https://www.linkedin.com/learning/microservices-foundations-23469069/service-oriented-architecture?u=76281980&t=190)** from the web service's code. As BPOs got bigger, so did the coupling of the systems. The wiring became just as much part of the code base as the traditional code did, and it was mostly hidden from the view of developers. The bloated systems became riddled with spaghetti code, painful deployments and fragile systems, all of which restricted agility. The industry noted these issues as well, and so its astronomic rise in use was only matched by its crash. It really became easier to just manage the monolith than to manage services and wiring in separate code bases along with the costs associated with these systems. It just wasn't worth it in many people's eyes.

> [!info]- Semantic Content
>
> **Env Vars:** soap (11), soa (4), xml (2), wsdl (1), bpo (1)
> **Definitions:** is a  (1), known as (1)
> **Speakers:** - i (1)

#### [Microservices: The new kid on the block](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-the-new-kid-on-the-block?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-the-new-kid-on-the-block?u=76281980&t=0)** - [Microservices](../../Skills/Software%20Development/Microservices.md)-based architectures are really the new kid on the block, but they aren't babies. In fact, many of the concepts of microservices architecture can be traced to core roots of SOA and other service-based architecture patterns. As with all patterns in [Software Development](../../Topics/Software%20Development.md), there is no silver bullet. And that is the theme of what we will discuss throughout this course. So, let's start the discussion with the 50,000 foot view of what microservices means. At its core, microservices are about decomposing the system into more discreet units of work. In my view, microservice development is about making the architecture at a component level work the way good development practices do with modularization of the code itself. When we are taught how to solve problems in software, we're taught to decompose the problem into smaller problems, and then solve each of these problems in a modular and decoupled fashion. Microservices simply takes this concept and applies it to the system as a whole. There is no real size requirement on microservices. It's about building the services the right size for the use cases. Microservices embraces the concept of protocol aware,
>
> **[1:39](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-the-new-kid-on-the-block?u=76281980&t=99)** heterogeneous interoperability to handle all communications. This means that every call within the service boundaries are solved via a common communication pattern. Most traditionally [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). This common communication allows microservices to be implemented in a true polyglot fashion as long as the language provides some mechanism for creating, responding to, and executing against the common communication endpoints. Microservices are just as much about the communication as the services themselves. In a pure microservices architecture, each unit of work can be called from any other unit of work within the system. This ability to call any service provides a lot of flexibility, but can also lead to headaches. And often, hybrid architectures are leveraged to solve these concerns. This architectural pattern has really gained incredible popularity in both the traditional enterprise, as well as startup communities, and it has done so for a good reason. SOA was expensive to implement and get off the ground. Microservices, however, are cheap.
>
> **[3:12](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-the-new-kid-on-the-block?u=76281980&t=192)** In fact, the entire execution and proxy environment can be done entirely with [Open-Source Software](../../Skills/Cybersecurity/Open-Source%20Software.md) on commodity [Hardware](../../Topics/Hardware.md). Even if you choose to build a cloud native platform to execute your services in, you can do this entirely as open-source, again, on commodity hardware. The more you dig into this pattern, the more power you will see in leveraging OSS, and not just in the code itself. After all, there is no better experience than learning from both the mistakes, as well as the successes of your peers. We did see this level of hotness before with SOA, but it really only applied to enterprise shops for the most part. But that excitement quickly fizzled out. Whereas with microservices, so far it hasn't. While there are many reasons for this, I believe agility and the ability to distribute these systems globally are the biggest reasons why the level of interest continues. As we go through this course, we will focus on the positives that this pattern brings, but we must temper our excitement some as we're also going to look at the costs associated with moving to this pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (12), [Hardware](../../Topics/Hardware.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Open-Source Software](../../Skills/Cybersecurity/Open-Source%20Software.md) (1)
> **Env Vars:** soa (3), rest (1), oss (1)
> **Definitions:** means that (1)
> **Speakers:** - microservices (1)

#### [Microservices: Solver of problems but not the silver bullet](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-solver-of-problems-but-not-the-silver-bullet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-solver-of-problems-but-not-the-silver-bullet?u=76281980&t=0)** - Every architecture decision that is made ultimately comes down to compromises. There is no single silver bullet that solves every use case you have, and even within a pattern, there are compromises that need to be made. As I previously alluded to, there are costs to pay for moving to [Microservices](../../Skills/Software%20Development/Microservices.md) architecture, and I feel it is critical to discuss these some before we dig into the pattern. You and your organization must decide if the benefits you gain from moving to microservices is worth the cost you pay. No matter how hot this pattern is, if it isn't right for you, don't force it. One of the biggest costs you will pay, especially early in the process, is complexity. In a monolithic system, you have one or maybe a few components to manage those components may be large, but if your processes and procedures require a lot of gates in the software life cycle, microservices architectures will dramatically cost you time and money as you move from a few deployed artifacts to many. In addition to the deployment complexity, determining where all of the code lives and operates in a microservices architecture
>
> **[1:34](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-solver-of-problems-but-not-the-silver-bullet?u=76281980&t=94)** can increase the complexity and the costs associated with it. If your churn to production is not a simple case of packaging and deployment, but instead a complicated process, walk lightly with microservices unless you are willing to update your process. Now, if I were the architect consulting your organization and you were dealing with a complex set of processes and gates around deployments, I would investigate those steps and determine how much of it can be automated and how much of it can be trimmed. I don't want to make it sound like a complex process should limit microservices development. You just need to take it into account. Another cost you pay with microservices is the so-called distribution tax. As you build a microservices architecture out, there is a dramatic increase in network communications between the individual services. This increases the total latency of calls across the network as a whole. In addition to individual calls taking more time from the client perspective, the increase in call volume tends to risk congestion, causing catastrophic latency across the network as a whole.
>
> **[3:12](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-solver-of-problems-but-not-the-silver-bullet?u=76281980&t=192)** A single slow call in the stack can cause thread blocking that impacts other clients. Often you see teams move to reactive technologies to alleviate the single-threaded blocking calls. However, the distribution tax still persists. Another similar problem is the reduction of reliability. This is one area where technologies can dramatically help, but as you put more moving parts into a system, there is a decrease in the overall reliability of the system as a whole. If one microservices is sick, the impact can and often does extend to multiple client calls. It becomes critical to evaluate your most core services and determine if they can withstand system unreliability. Again, there are ways to build your system to be more reliable, but if you cannot foresee the system working in a partial state of availability, you may need to evaluate if microservices are the right pattern for you. Ultimately, as we progress through this course, I will continue to point out where these risks come into play. Your ability to make decisions that maximize benefit
>
> **[4:48](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-solver-of-problems-but-not-the-silver-bullet?u=76281980&t=288)** while reducing risks and complications will help spell success for your organization, but making blind decisions will risk failure. Throughout the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course, as I bring up the potential pitfalls of this architecture pattern, my intention is not to discourage you from moving this direction, but instead to arm you with the knowledge needed to make the correct compromises that will lead to success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (10), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Speakers:** - every (1)

#### [Microservices and cloud native](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-and-cloud-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-and-cloud-native?u=76281980&t=0)** - Often when we talk about [Microservices](../../Skills/Software%20Development/Microservices.md), we're talking about cloud native, but that isn't always the case. It's important for us to level set on what the two have in common and what they don't. Cloud native architectures are based loosely on building applications according to the 12 factor or 15 factor methodologies. If you aren't familiar with this concept, please take a look at my course on 12 factor and 15 factor cloud native applications. This current course focuses on microservices and not cloud native, but often they do go together. So let's spend a few minutes and discuss this at a high level. Cloud native architectures include patterns for designing systems to run in cloud-based infrastructure. Now, [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) is a very loose term. Often when people hear cloud, they assume AWS or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), but that's only part of the story. Cloud infrastructures can be public, but they can also be private or even hybrid. [Cloud Computing](../../Topics/Cloud%20Computing.md) is a pattern of globally distributing systems to provide increased uptime, increased [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), and increased distribution. You can build cloud native systems
>
> **[1:34](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-and-cloud-native?u=76281980&t=94)** that run in a single data center with plans on building out more globally, or you can build systems that run in a public cloud that can be further distributed when needed. Microservices tend to fit very nicely into a cloud native architecture because they tend to very easily transition into that pattern. But I do want to be clear that they are two very distinct concepts. You can build monolithic cloud native applications, and you can also build microservices that are not capable of moving to the cloud at all. I hear all too often people confusing the two patterns. To be honest, that concerns me. We must keep the delineation clear so as not to confuse the topics, which is why I am spending this much time discussing it in this course. For all of their differences, as I've said, they do tend to go together. In my professional life, every microservice we build today is aimed at delivering to a cloud native platform. We started our microservices journey before our cloud journey, but the two have quickly merged. Let's a look at where they fit together. A microservice-based application is usually stored in a single code base, which is a requirement for 12 factor.
>
> **[3:11](https://www.linkedin.com/learning/microservices-foundations-23469069/microservices-and-cloud-native?u=76281980&t=191)** A microservice often is also a completely self-contained unit making the move to the cloud much easier. Usually, there are only a few changes in how dependencies are managed and the leveraging of backing services, both of which come naturally in a microservices model. One of the biggest challenges is working with the file systems. These use cases usually require a migration to something like Amazon S3 or some other remote file system. Throughout the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course, I will be focused solely on microservices, but as I just mentioned, in my professional life, we deploy our microservices to a cloud native platform. I will try to share tidbits of information that will help you make this transition from VM or big iron based microservices to a cloud native version. But again, our primary focus is indeed the microservices themselves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (10), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Definitions:** is a  (3)
> **CLI Commands:** aws (1), make (1)
> **Env Vars:** aws (1)
> **Speakers:** - often (1)


### 2. Microservices Core Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [The services](https://www.linkedin.com/learning/microservices-foundations-23469069/the-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/the-services?u=76281980&t=0)** - One of the first questions I am always asked when discussing [Microservices](../../Skills/Software%20Development/Microservices.md) is what makes a microservice just that? And it's a compound answer. I want to start by stressing that it isn't as much about the size of the service, but the operation of the service that really matters. There isn't a finite requirement on size. Before we get into the size question, however, let me answer one of the easiest parts of the question, and that is how the services communicate. In a microservices architecture, all communication between services utilize HTTP, most often [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md), though some people use GRPC, and often frontends will consume [GraphQL](../../Skills/Web%20Development/GraphQL.md). There are other methods like event-based communications. However, the interest service calls are all over HTTP. This is a powerful proposition, especially for large organizations. Consider a company the size of Amazon or Netflix. Both of these companies utilize microservices-based architectures. Each of their teams can build software as they see fit if the services are exposed via HTTP. Each team can then consume the services of another team because they all communicate in a common way. One thing to note: Unification of service documentation is often ignored
>
> **[1:35](https://www.linkedin.com/learning/microservices-foundations-23469069/the-services?u=76281980&t=95)** and shouldn't be. Along with documentation is service discovery, but we'll talk more about that one later on. So let's return to our size conversation. In a microservices world, size isn't as critical as operations. A microservice handles one set of related functions with little or no cross-domain operations. This is where concepts like domain-driven design come into play, and we will spend a significant amount of time talking about domains in a little bit. I like to use the analogy of good [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) practices when describing microservices. In a well-defined OOP space, a class is built to handle one type of thing and provide all of the operations for that type. In a microservices architecture, a service operates on a well-defined domain. Operations aren't defined on data objects or business objects. Instead, it's the domain as a whole. Now, you can, and probably should, provide very low level, data-focused services in a microservices architecture. Often, these specific services expose domain-specific crud operations on the domain object, but that domain can span multiple data objects.
>
> **[3:14](https://www.linkedin.com/learning/microservices-foundations-23469069/the-services?u=76281980&t=194)** You can also build a service to handle a set of related business processes that may span one or more domains. So the answer to the size question isn't size. It's that a domain-focused operation is what matters. In my opinion, this is one of the hardest parts to learn. All too often when a company or team moves into a microservices architecture, they build their services either too fine-grained or conversely, not fine-grained enough. Usually, it's the former. This is a common occurrence, and quickly the distribution tax will hit you hard as the latency of calls really kicks in. As you start building these services, don't be afraid to refactor. And my hope is that by the end of this course, you'll be more willing to experiment. The ability to experiment comes in part from the size of these services. Yes, size isn't part of the answer, but logic will tell you that as you start decomposing these services down, they become smaller and smaller. Smaller services build faster, have fewer test scenarios, deploy quicker and start up much quicker. All of these aid in the willingness to experiment
>
> **[4:49](https://www.linkedin.com/learning/microservices-foundations-23469069/the-services?u=76281980&t=289)** and make mistakes because you can fix those mistakes much faster in smaller components of code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (8), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1)
> **Env Vars:** http (3), rest (1), grpc (1), oop (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - one (1)

#### [The communication dance](https://www.linkedin.com/learning/microservices-foundations-23469069/the-communication-dance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/the-communication-dance?u=76281980&t=0)** - In a [Microservices](../../Skills/Software%20Development/Microservices.md) architecture, the interservice communications can be a source of freedom for growth, but it can also be a source of great pain. I want to spend a little time looking at the network traffic that takes place in a microservices-based system and focus on some of these potential pains. All communication between individual services in a microservices architecture is over HTTP. I will focus on [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) as that is my preferred method. This communication framework allows any service to be developed using any coding language or framework that supports RESTful services. Each service can consume any other service over the same communication strategy. This strategy, as previously mentioned, is called protocol-aware heterogeneous interoperability. In a nutshell, this explains that the services are bound to a protocol, in this case, HTTP, and execute communication over that protocol in a way that works in a mixed or heterogeneous environment. This has a lot of power when we get down to it. The development team is often composed of developers with many different skill sets. You may have backend developers working in [Java](../../Skills/Software%20Development/Java.md) or Go, for instance.
>
> **[1:33](https://www.linkedin.com/learning/microservices-foundations-23469069/the-communication-dance?u=76281980&t=93)** You may have front end developers working in [JavaScript](../../Skills/Software%20Development/JavaScript.md) frameworks like [React](../../Skills/Web%20Development/React.js.md). You may also have data scientists working in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). The beauty of a microservices architecture is that each team member can build the services in a language native to them, and then expose those services for others to consume using HTTP. Other teams that need to consume these services need to have zero knowledge of how the services themselves work, nor do they need to learn some special communication technology. They simply leverage HTTP the same way that they would if they were calling their own services. This emphasizes one of the primary problems this architecture tries to solve, and that is agility. The agility of this model comes from each team working in a language and framework that is natural to them. They can deliver code quickly because they aren't constrained by artificial boundaries imposed by the rules of the architecture pattern. Every modern framework, for instance, can leverage REST. The same cannot be said for communication protocols like SOAP. As the teams work in their own domain as efficiently as possible, they deliver code quicker. Once the code is delivered,
>
> **[3:09](https://www.linkedin.com/learning/microservices-foundations-23469069/the-communication-dance?u=76281980&t=189)** they expose the contract so others can consume the services just as quickly because there is no learning curve. Now this communications dance does come with problems. We're going to spend some time talking about them in depth as they can quickly sour the system as a whole. But for now, we will simply acknowledge that they exist. In this model, at least in its purest form, each service is capable of calling any other service in the system. There are no constraints on who can call what, which means orchestration is key. Each service must maintain a certain level of passivity in their APIs, or there's a risk of system failure. Because any service can call any other service, there is no clear delineation of who may be calling you. You must either have a solid versioning strategy or maintain perfectly passive APIs to prevent calling systems from failing when you release a new version of your API. In a monolithic system, breaking API changes are usually more apparent than in a microservices architecture. So you need to stay focused on this issue from day one.
>
> **[4:44](https://www.linkedin.com/learning/microservices-foundations-23469069/the-communication-dance?u=76281980&t=284)** I recommend a solid versioning strategy, contract testing, and strong passivity rules to prevent this from becoming a major concern in your system. Ultimately, enhance your knowledge of this dance, and you will be much more equipped to handle the issues when they do arise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (5), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Java](../../Skills/Software%20Development/Java.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Env Vars:** http (4), rest (2), api (2), soap (1)
> **Analogies:** for instance (2)
> **CLI Commands:** python (1)
> **Definitions:** is called (1)
> **Speakers:** - in (1)

#### [Distribution and scale](https://www.linkedin.com/learning/microservices-foundations-23469069/distribution-and-scale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/distribution-and-scale?u=76281980&t=0)** - The communication pattern of [Microservices](../../Skills/Software%20Development/Microservices.md) lends itself to a truly distributed model. While global distribution is not a requirement for a microservices architecture, the possibility is one of the benefits of this model as a whole. Along with the ability to distribute your system, the microservices architecture model provides for a highly-scalable system. Both of these properties are very powerful for a modern application suite, but as usual, with software, they also come with a price. Let's start by discussing distribution. Each service is accessed over remote network calls regardless of being in a local or remote data center. Therefore, you can theoretically move you services anywhere you want around the globe and the system would work. Now, from a reality perspective, putting services all over the world is costly, both in infrastructure, but also in the latency of the calls themselves. The benefit of this ability, however, shouldn't be lost on the individual service-to-service call. Microservices distribution solves the problem of getting infrastructure and services globally available when needed without making your entire system globally available.
>
> **[1:37](https://www.linkedin.com/learning/microservices-foundations-23469069/distribution-and-scale?u=76281980&t=97)** Look at this model from the enterprise perspective. You may have customer facing applications and services that need to be regionally or globally distributed to support high-availability or geospatial needs, but you may also have a set of applications and services that are solely enterprise focused. These lines often get blurred as your business grows and you expand your operations, so building out a system of microservices capable of global distribution from day one prepares your enterprise for the future. Likewise, the ability to scale is part of this architectural style. In a microservices architecture, each service is independent of every other service or application in the system. As such, when an individual service comes under load, it can be individually scaled. So let's take a quick look at how this scaling works. Consider a microservice that serves customer data. This is a well-defined domain that handles all of the requests throughout your system for this type of data. Now, imagine that your company releases the hottest new product and you start seeing a large number
>
> **[3:10](https://www.linkedin.com/learning/microservices-foundations-23469069/distribution-and-scale?u=76281980&t=190)** of new customers interacting with your system. Therefore, your customer service starts taking on a significant load. Now, in a traditional model, you would have to scale every component of your system to handle the load increases on that single service. A microservices architecture, however, allows you to simply increase the number of instances of your customer service when you were experiencing that load. Now, assuming that you're using a solid API proxy layer, which we will discuss, your system will have zero changes needed outside the increased count of your customer service. Now here we're talking about horizontal scaling, but vertical scaling also works as well. To experience the real power of this scaling model. Consider how you plan your infrastructure today. Traditionally, you build your system planning for your busiest day. In a well-defined microservices architecture, with the right platform, you can build your system for an average day and allow [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) to solve for the increases or the decreases in traffic volume. This so-called elastic scalability, it's very hard, if not impossible,
>
> **[4:45](https://www.linkedin.com/learning/microservices-foundations-23469069/distribution-and-scale?u=76281980&t=285)** for a monolithic application. Now, I mentioned that all of this comes with a price, and in the next video we'll discuss some of the costs. But I do want to stress that these two topics, scalability and distribution, are some of the most valuable, if not the most valuable benefits of this architecture.
>
> **[5:14](https://www.linkedin.com/learning/microservices-foundations-23469069/distribution-and-scale?u=76281980&t=314)** which we will discuss later, your system will have zero changes needed outside the increased instance count of your customer service. Now here we're talking about horizontal scaling, but vertical scaling works as well. To experience the real power of this scaling model, consider how you plan your infrastructure today. Traditionally, you build your system planning for your busiest day in a well-defined microservices architecture, with the right platform, you can build your system for an average day and allow scalability to solve for the increases or the decreases in traffic volume. This so-called elastic scalability, it's very hard, if not impossible, for a monolithic application. Now, I mentioned that all of this comes with a price, and in the next video, we'll discuss some of the costs, but I do want to stress that these two topics, scalability and distribution, are some of the most valuable, if not the most valuable benefits of this architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (9), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (6)
> **Cross-References:** in the next (2)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - the (1)

#### [The dangers of latency and gridlock](https://www.linkedin.com/learning/microservices-foundations-23469069/the-dangers-of-latency-and-gridlock?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/the-dangers-of-latency-and-gridlock?u=76281980&t=0)** - The communication pattern of a [Microservices](../../Skills/Software%20Development/Microservices.md) architecture improves the ability to scale and distribute your system, but it comes with cost. Blindly moving into this without acknowledging these costs and working to mitigate them can cause a catastrophic failure. Every service invocation in a microservices architecture is a remote network call. As such, there is connection set up, tear down, and wire latency on every single call. This latency is relatively insignificant for a single call, but as the code path becomes more and more complex, that single call can become many. In addition to the latency increases of the calls themselves, as the traffic increases and services come more under load, the risk of latency in response time increases. In a system based on remote invocation of all service calls, any latency added to the normal flow can be detrimental to the system as a whole. Latency in a low-level service or any service for that matter can become exponentially exaggerated in a model where every call is remote.
>
> **[1:36](https://www.linkedin.com/learning/microservices-foundations-23469069/the-dangers-of-latency-and-gridlock?u=76281980&t=96)** At a certain point, this latency can develop into gridlock. While calls are waiting for responses, delays can become unbearable. When this occurs, there can be a catastrophic failure of the entire system. Another path to gridlock can arise due to circular calls. In a pure microservices architecture, any service can call any other service. This call stack can become circular when a calling service is subsequently called by what it's calling. When this occurs, latency can become a problem much more quickly as multiple services can depend on a service involved in this circular call stack. When deciding to move to a microservices architecture, you must spend a significant amount of time evaluating how to control the negative reactions to latency and not just gridlock. One such pattern is to use a circuit breaker within your code. In this pattern, you build a standard flow through your application, and when latency rears its ugly head and timeouts start occurring, you trip the circuit and execute a default behavior that doesn't invoke the troubled service. While you may suffer from a reduced functionality of your system,
>
> **[3:10](https://www.linkedin.com/learning/microservices-foundations-23469069/the-dangers-of-latency-and-gridlock?u=76281980&t=190)** it's often better to do this than to suffer a complete failure. Now, when the services are back to normal, the circuit closes, and the normal operation through your systems returns. Netflix, for instance, released Hystrix as an implementation of this pattern to support their offerings. If search is down, for instance, the platform should still be able to allow users to view movies. By offering such a pattern within their software, the web application or the mobile applications can still function, even if search doesn't, as this degraded level of performance is ultimately the desired state. Now, you don't have to implement a circuit breaker to solve for latency issues, but at the very least, you need a strong timeout logic throughout your system to prevent gridlock from crippling the system as a whole. Strong timeouts, global distribution of all service offerings, scaling of individual services under load, and leveraging patterns like circuit breaker will help alleviate the issues when they do occur. Again, knowledge of these benefits and risks is key to success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (4)
> **Analogies:** for instance (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)

#### [Bounded context](https://www.linkedin.com/learning/microservices-foundations-23469069/bounded-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/bounded-context?u=76281980&t=0)** - When deciding how to size your [Microservices](../../Skills/Software%20Development/Microservices.md), one common strategy is to leverage domain-driven design. And as such, to focus on the bounded context when decomposing a large multi-domain system into individual services. Understanding how to properly decompose an application for a microservices implementation is not an easy task, and this design pattern can help you. The core concept is to investigate your working system and determine the domains, then focus on the boundaries of those domains, as well as the inner workings of them. Use that knowledge to break your services up. Most of the early mistakes in migrating an existing monolith into a microservices architecture comes from either making your services too granular or not granular enough. The key to finding the sweet spot on granularity is to leverage domain-driven design, but to do so in an educated manner first. So let's talk about determining the bounded context for your domains. The gut reaction may be to just break your data domains up and focus on that alone,
>
> **[1:34](https://www.linkedin.com/learning/microservices-foundations-23469069/bounded-context?u=76281980&t=94)** but you run the real risk of having latency creep up when you do this. You really need to spend some time, and analyze the traffic patterns in your code based on real-world use cases. Telemetry is a great tool to help with this. Once you identify the actual use cases of your system, then you can start evaluating the interaction boundaries. Part of the goal in building on your bounded context is to reduce your crossed domain calls where appropriate. Say, for instance, you have a customer domain that is fairly well-defined, but you also have a user domain for your login information. As you look at traffic patterns, you note that every time your user domain is called, it calls your customer domain. Now, this would be an argument for putting both of these domains into a single-bounded context, but you may need to investigate just a little deeper. What if there were only 1% of the calls from your customer domain were from your user domain, and at the same time, there is data in your user domain that needs to be secured in a different manner?
>
> **[3:08](https://www.linkedin.com/learning/microservices-foundations-23469069/bounded-context?u=76281980&t=188)** These may be sufficient arguments to separate them into different bounded contexts. There is no clear-cut pattern here, but once again, knowledge is key. So you may have a feeling about why bounded context matters at this point, and if you're guessing latency, that's right. Latency is such a pain point in microservices. There's frankly no need to add extra calls when they make zero sense. By evaluating the domains and building strong bounded contexts, you can reduce the number of calls made in your system as a whole. By reducing the distribution tax on your system, you will have better overall system health, which, in turn, will make your microservices implementation more successful. One other reason to have strong definitions of the bounded context is for better contracts between services. With well-defined boundaries of your context, you get a self-discovery of your system as a whole. Because you have taken the time to build out these domains and structure them precisely, a consumer of a service on your system should be able to determine the correct location to search for the services
>
> **[4:43](https://www.linkedin.com/learning/microservices-foundations-23469069/bounded-context?u=76281980&t=283)** that they need to consume. So while this process is aimed at improving performance of the system as a whole, it can also improve your agility and speed of your development processes, which, ultimately, is what every team strives for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (5)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)
> **Speakers:** - when (1)

#### [Data domains as a service boundary](https://www.linkedin.com/learning/microservices-foundations-23469069/data-domains-as-a-service-boundary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/data-domains-as-a-service-boundary?u=76281980&t=0)** - Previously, we talked about bounded contexts and leveraging domain driven design for appropriate boundaries on [Microservices](../../Skills/Software%20Development/Microservices.md) in general. When it gets to the data access layer itself, the so-called data services, things get a little different at times. In the data layer, you have to take more into account than simply the bounded context of your domain because now, you have to deal with data transactions. We're going to talk about base versus acid later on, but one of the hardest changes, especially for larger enterprise systems, is removing the transactional boundaries in an existing database. It isn't easy to just stop doing operations transactionally, and if you think you can just leverage distributed transactions to solve these problems in a microservices architecture, stop now. Stick with your monolith. As I promise you, this will be nothing but pain for you and your team. Again, we're going to talk about this more later, but it is important to understand this place is a constraint on the design decision for data domains. Building data domains for low level services is one of the hardest parts of
>
> **[1:34](https://www.linkedin.com/learning/microservices-foundations-23469069/data-domains-as-a-service-boundary?u=76281980&t=94)** a microservices architecture for various reasons. This usually is because it involves decomposing a monolithic database into smaller individual systems. Now, there are a couple of different ways of tackling this problem, and we're going to talk about both. The first strategy is to simply start with the database itself and break it up into smaller [Databases](../../Skills/Software%20Development/Databases.md), and then build the associated services. Now, while this may yield a quicker result, it tends to put you in a bind if you make a mistake. If you are well-versed in your system utilization, it can be a quicker path, so it really depends on what you know and how well you know it. Migrating data is significantly harder in a live system than building services, especially if you leverage an API layer on top of those services. This brings us to the second and more recommended pattern of building your data domains, and that is to start with the services instead of the database. By starting with the services and having them all connect to the monolithic database,
>
> **[3:10](https://www.linkedin.com/learning/microservices-foundations-23469069/data-domains-as-a-service-boundary?u=76281980&t=190)** you'll start to see if your domains are well-defined. You can see the traffic flows across the network and leverage that knowledge to start modeling your data itself. The overall objective is to minimize the cross-domain calls where possible, enforce your needed transaction boundaries, and then you can start decomposing your databases into smaller instances. Building strong data domains is critical to a solid microservices architecture. Most, if not all operations through the system will touch one or more data domains. They can become a large source of pain if you don't take the time upfront to solidify them. A good telemetry and tracing pattern cannot be ignored as a viable tool to utilize when you're doing this work. Take your time with these components and ensure you focus on the most efficient operations throughout your system. You'll thank me later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (2)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - previously (1)

#### [No ACID, only BASE](https://www.linkedin.com/learning/microservices-foundations-23469069/no-acid-only-base?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/no-acid-only-base?u=76281980&t=0)** - Let me start by saying I have done distributed transactions professionally, and not only were they painful to get right, they were also extremely hard to manage. I do understand the desire, especially in a SOA model, to drive for distributed transactions. But this really should be considered a non-starter in a [Microservices](../../Skills/Software%20Development/Microservices.md) architecture. Traditional systems aimed for transactions that were ACID compliant. ACID, or atomic, consistent, isolated, and durable, is the concept of making sure that you have [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) across multiple tables in a traditional relational database. An atomic operation is one that has the properties of either succeeding completely or failing completely with no gray area in between. A consistent operation is one that guarantees all of the constraints or data model rules will be enforced. An isolated operation is one in which the visibility rules are well-defined such that no other transaction can read data that is not in the correct state. A durable operation is one that, once completed, will be guaranteed to be in the data store permanently
>
> **[1:36](https://www.linkedin.com/learning/microservices-foundations-23469069/no-acid-only-base?u=76281980&t=96)** until it is modified in the future. These properties work beautifully in a monolithic application where there is no distribution. In a SOA model, they become painful. In a microservices model, they are close to impossible. In a microservices architecture, we often strive for BASE, or basically available, instead of ACID. In a BASE model, we strive for eventual consistency across the highly available distributed platform, which is the exact use case a microservices architecture aims to work in. In this eventual consistency model, we are not guaranteed immediate, atomic, or isolated consistent transactions. Instead, we aim for a situation where, assuming the data isn't modified again, we will achieve the end state in all of the nodes across our distributed data store. ACID is, in all honesty, a much easier paradigm to work in as a developer or as an architect. You know that when you read or write data that you are guaranteed of its state by the underlying data store. This guarantee allows you complete control of how to handle high throughput systems
>
> **[3:10](https://www.linkedin.com/learning/microservices-foundations-23469069/no-acid-only-base?u=76281980&t=190)** where data changes occur often and must be immediately available. In a microservices architecture, you need to identify where you truly need asset transactions and wrap service boundaries around those operations. You cannot leverage any other model with any real success in this type of architecture. But before you just go out and make everything transactional and create a system of monoliths, I urge you to evaluate if you really need ACID transactions. More often than not, you may find that what people perceive as a need for immediacy is instead just an unnatural expectation. We often expect that users need immediate access to the data, when in reality, they never view the data immediately, and we can solve the same use case by directing them to some other place if they really need to view that data. Now, as I mentioned, there are times when you do really need ACID transactions. Take a moment and consider a [Banking](../../Skills/Software%20Development/Banking.md) system. When you perform a balance transfer, for instance, you have a credit to one account and a debit from another that must occur in a single transaction.
>
> **[4:46](https://www.linkedin.com/learning/microservices-foundations-23469069/no-acid-only-base?u=76281980&t=286)** In these use cases, you will need to model your domains and services to continue to allow these transactions to be atomic. But there may be other places, say applying for a loan, that already have some level of asynchronous operation. These can benefit from eventual consistency model. Now, there are ways to design a system for eventual consistency, including appropriate rollbacks that will help you in this process. And while we discuss some of the tenets of these designs, it really is outside the scope of this course. There are plenty of good materials online and other resources available when you're ready to tackle these problems in the real world. Aim for eventual consistency in as many places as possible, and it will improve your system health as a whole.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (5), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Env Vars:** acid (6), soa (2), base (2)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for instance (1)
> **Speakers:** - let (1)

#### [The API layer](https://www.linkedin.com/learning/microservices-foundations-23469069/the-api-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/the-api-layer?u=76281980&t=0)** - An API layer is often included with [Microservices](../../Skills/Software%20Development/Microservices.md) architectures, and for a good reason. In a pure microservices architecture, an API layer is nothing more than an aggregated proxy of all of your service offerings. The API layer is used to shield the outside world or even your clients from knowing the structure, organization, or even what exact service is exposing a specific operation, which is actually very useful. The API layer provides a standardized proxy interface that will expose whatever service endpoints and API operations we configure it to expose. We need to be careful here that we aren't transforming the APIs. There's a better way to do that for, say, a mobile client versus a desktop client. The API layer, in my opinion, is a pure proxy. Consider our use cases around scaling up our system under load, or scaling down under a lull. If our service consumption model is one in which we are bound directly to the hosts, managing this infrastructure can become painful, especially across multiple data centers. Now, there are some service discovery tools
>
> **[1:36](https://www.linkedin.com/learning/microservices-foundations-23469069/the-api-layer?u=76281980&t=96)** that will aid in this process, but in my opinion, these are really nothing more than a synthetic API layer. In this scaling model, the API layer isolates the client from needing to know the direct IP address and port of the service it's calling. From the API layer, we're calling hundreds of different endpoints without really knowing which service produces the endpoint itself. Let's consider another use case, and that is isolation from change. Regardless of refactoring a monolith or building out new service offerings, if our first step is to implement an API layer, clients will have minimal, if any, changes to make in response to underlying refactoring of the code base itself. If every service is exposed through an API proxy layer, you can break the services up, or aggregate them and simply have the proxy configuration change to match the development operations. The clients will not be impacted, period, unless of course you make a breaking change, which of course, you should avoid at all costs, and maybe consider leveraging versioning.
>
> **[3:12](https://www.linkedin.com/learning/microservices-foundations-23469069/the-api-layer?u=76281980&t=192)** An API layer can also assist you in versioning operations. Now, I'm not going to be prescriptive about how to handle version changes in your system because there's more than one valid way, but your API layer can help you by directing to a legacy version of a service without forcing a client to make changes, even if the deployment model itself changes. While the API layer is usually denoted as being completely optional, I find that it's one of the most crucial components if you want to reduce the overall impact of moving to this architectural model. So as such, please consider it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (2)
> **Env Vars:** api (14)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Prerequisites:** configure (1)
> **Speakers:** - an (1)


### 3. Microservices Advanced Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Asynchronous communications](https://www.linkedin.com/learning/microservices-foundations-23469069/asynchronous-communications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/asynchronous-communications?u=76281980&t=0)** - One of the best strategies for dealing with reducing latency on a [Microservices](../../Skills/Software%20Development/Microservices.md) based system is to not rely on a purely synchronous communication model. Leveraging event-driven asynchronous communications is a fantastic way to improve system health as well as support long-term objectives of moving large amounts of data over long distances in a fairly timely fashion. Asynchronous communications, however, are not easy. You need to put significant work into ensuring that your communications reach their destination and are processed in accordance with predetermined tolerances. Learning how to appropriately handle and respond to air conditions is critical to keeping the system running. Most often when you hear mentions of asynchronous communications in a microservices architecture, people are specifically referring to event-driven microservices as a way to support eventual consistency of the data. In this model, the services put a message into an asynchronous message broker or a temporary data store, and then drive events from this state change. The downstream event processors will process the data and eventually cause the data to be stored in its final data store.
>
> **[1:34](https://www.linkedin.com/learning/microservices-foundations-23469069/asynchronous-communications?u=76281980&t=94)** Mutations will then occur through either distributed data patterns, or subsequent event processing. While this model is the most common one discussed, it is definitely not the only one. Stream data platforms are a very strong pattern when building out a large system, especially with many different but interesting operations. In a stream data platform, events are written to a central message broker. These events then trigger listener operations that take action on the data if it applies to them. These events can trigger operations that format the data, cause other downstream events, or various other activities. These stream data platforms, in my experience, can be highly useful in large distributed systems because often, events trigger multiple operations, not just one. By leveraging a platform like this, you can do more work with less overall stress on the system, which of course improves overall performance, especially in activities like logging, auditing, security, or other data inspections. One of the most overlooked patterns in this space is the transition from pure synchronous operations to asynchronous processing. We are impatient by nature,
>
> **[3:10](https://www.linkedin.com/learning/microservices-foundations-23469069/asynchronous-communications?u=76281980&t=190)** and we seem to always want systems that have immediate feedback, but it is not always needed. Many times, we can simply defer the processing to occur in an asynchronous manner. When we do this, we reduce the latency constraints on the functions that are required to be executed in real time. Part of the goal of moving to asynchronous operations is load reduction, but as I mentioned, it isn't always just a simple move. When moving to asynchronous operations, you need to take care to handle error states correctly and recover from them. If messages cannot be processed for any reason, you cannot simply ignore them. Dead letter queues must be monitored and action must be taken to process the messages, even if the remediation is manual. Data should be routinely monitored for correctness in an automated fashion, and performance must be evaluated to ensure that the message brokers are not getting behind. Now, I encourage you take some time in your system design and investigate how leveraging asynchronous communications can help your team achieve reduced latency and increase throughput.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (3)
> **Definitions:** is a  (1)
> **Speakers:** - one (1)

#### [Logging and tracing in a microservices architecture](https://www.linkedin.com/learning/microservices-foundations-23469069/logging-and-tracing-in-a-microservices-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/logging-and-tracing-in-a-microservices-architecture?u=76281980&t=0)** - One of the hardest operational problems to solve in a [Microservices](../../Skills/Software%20Development/Microservices.md) architecture is evaluating call chains and aggregating logging associated to those call chains. When an issue arises in a microservices architecture, it can become very difficult to see all of the moving parts, especially when you consider that your calls span multiple [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) or containers, many with their own sessions. The good news is that solving these problems can be relatively straightforward, but you need to plan for this observability early in your design process. A unified approach early on in the process will prevent serious rework once you realize the value of these principles in your overall architecture, I would strongly recommend you take this advice seriously and plan for unification on these topics across your entire organization. We will start our discussion with logging. You will find that having unified logging throughout your system will be critical in not only evaluating the day-to-day operations of your system, but also in troubleshooting, maintenance, investigations, and other general tasks. The issue of logging, however, becomes significantly noisier in a microservices environment.
>
> **[1:34](https://www.linkedin.com/learning/microservices-foundations-23469069/logging-and-tracing-in-a-microservices-architecture?u=76281980&t=94)** Part of the issue is simply the larger volume of artifacts in the system, but also because of the [agile](../../Skills/DevOps/Agile%20Development.md) nature that is bred from this architecture, you often have various functional teams building different services. As such, each of these teams may end up developing different logging strategies, as well as formatting of those logs. While the lack of unification of log data may not seem like a big deal, the reality is that as you move to a distributed system, there's an increased need to have some sort of convergence in your logging behaviors. As the system size grows, you may find yourself moving from traditional file system-based logging to log aggregators. These log aggregators make uniformity that much more critical so that you can scan and coalesce them more easily. Part of making logging more powerful in a distributed environment is the ability to determine the actual flow, not only through your service, but through the system as a whole. There is a solution for this problem, and it's often called tracing. Tracing is based on the concept of creating a unique token called a trace and using that trace in all internal logging events for that call stack. By embedding this value in the logging
>
> **[3:08](https://www.linkedin.com/learning/microservices-foundations-23469069/logging-and-tracing-in-a-microservices-architecture?u=76281980&t=188)** and timing output, each service uses the trace and then passes it downstream to all of the service calls it makes. Each of those in turn do the same. There are several different strategies for moving the trace ID from service to service, but the important part is that the trace ID exists in all of the log messages for all services throughout the system for a given call stack. By leveraging this strategy, you can aggregate a set of log messages, as well as timings, when looking at metrics and behavior. Determining the behavior from a single user interaction through a system in a microservices architecture is hard, but tracing makes this problem much simpler. If you structure your log messages in a unified manner and include the trace, you will see a huge benefit when the need does arise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (4), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - one (1)

#### [Continuous delivery as a requirement](https://www.linkedin.com/learning/microservices-foundations-23469069/continuous-delivery-as-a-requirement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/continuous-delivery-as-a-requirement?u=76281980&t=0)** - When building out a [Microservices](../../Skills/Software%20Development/Microservices.md) architecture, one of the goals is agility of your development teams. As your system grows in size, maintaining the agility of your team in all aspects of development can become a challenge. We all know that writing code is only one aspect of the [Software Development](../../Topics/Software%20Development.md) lifecycle and while smaller artifacts make deployment easier, deployments can become a nightmare. As a rule of thumb, you need to invest time in building out a [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) model early in the process. Microservices based architectures have so many moving parts that the chances of success greatly decrease if you don't have an automated way of building and deploying these services. So let's take a look at what it means to build out a CI/CD, or [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and continuous delivery pipeline. A CI/CD pipeline starts with the most basic aspects of building your committed code base in an automated fashion building. Your code can be as simple as executing a script that manages the build cycle itself, or as complex as a large distributed model of containerization and sandbox build operations. The build step compiles and often executes unit tests to ensure
>
> **[1:35](https://www.linkedin.com/learning/microservices-foundations-23469069/continuous-delivery-as-a-requirement?u=76281980&t=95)** that the code is ready for further testing and deployment. Once the build step has completed, we often add a step of automated deployment to a non-production environment. This automated deployment step moves the compiled artifact to a runtime that often mimics production but does not take production traffic. In this environment, we often run integration and system tests, as well as security-focused penetration tests. These tests should provide a clear indication of the safety of moving the code to production. Doing this while automating as much as possible will help breed success. So while there may be manual gates within the process, the end goal is automation. When the code has been sufficiently validated, it will be deployed to production. Once the code is in production, we can use [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) techniques like blue-green deployments to push production traffic to our new code. Obviously, this is the overall goal of the process, but in order to make it most effective, each and every opportunity to automate a task should be taken. Now you may wonder why I state that this process should be considered as a requirement. As previously mentioned, one of the goals of microservices is agility.
>
> **[3:10](https://www.linkedin.com/learning/microservices-foundations-23469069/continuous-delivery-as-a-requirement?u=76281980&t=190)** If you build microservices but don't do the automation around delivery, there is no real improvement in agility. When you look at the development process as a whole, agility is such a strong improvement in this space. You owe it to yourself and your team to make this a priority. When moving to microservices, start small. Focus on building, deploying and basic testing, and then expand from there. Consider adding integration into your ticketing system, your chat system, and other testing frameworks. Advanced automation include things like self registering, your deployment with monitoring and routing systems, and this should be your long-term vision to maximize the value to your team with respect to agility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (5), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1)
> **CLI Commands:** make (3), cd (2)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - when (1)

#### [Hybrid architectures: Hierarchy and service-based](https://www.linkedin.com/learning/microservices-foundations-23469069/hybrid-architectures-hierarchy-and-service-based?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microservices-foundations-23469069/hybrid-architectures-hierarchy-and-service-based?u=76281980&t=1)** - A pure [Microservices](../../Skills/Software%20Development/Microservices.md) architecture can be to many teams, a very daunting task. In addition to the work comprised of moving to this architecture, the "unknown unknown", so to speak, can be hard to wrap into a roadmap. In addition to this, there are some really hard problems to solve, like database segmentation and service boundaries that in the untrained eye of your customers, may have no real tangible value. As such, there are concrete steps you can take in the interim to gain some of the benefits of a microservices architecture without going fully into the matrix. One of my favorite hybrid architectures in this space is a hierarchical service model. While many thought leaders in the industry will strongly advise against this, because of the dynamics around team coupling that can occur, it does prevent some of the risks of circular dependencies in the network, which as we have discussed, can bring a system to its knees. In a hierarchical microservices architecture, you define rules about which service types can or cannot consume other service types. One common pattern here is based on the old N-tier model and is the one that I have had the most success with, especially during the migration of a monolith
>
> **[1:37](https://www.linkedin.com/learning/microservices-foundations-23469069/hybrid-architectures-hierarchy-and-service-based?u=76281980&t=97)** to a microservices model. In the N-tier hierarchy model, you may define a few different classes of services. One common class is the data services that expose data domain specific logic completely to the outside world. Another common class is the business process services that specify high level business processes that are well-defined. You may also create gateway services that build abstractions to external dependencies. Another possibility is you may define edge services that expose your data and business processes to the outside world. These are just a few examples of the types of services that you may define. Once you have a clear taxonomy built about what tasks each of these services do, you can then start to build out rules about which class of service can be consumed by other service classes. You may want to look at the risks of a circular call tree and make a rule that no data service can consume another data service without being involved in a business process. Now, this complex set of rules may, at face value, seem like an easy way to prevent issues. The reality is that they come with risks. Often, you have to adjust your logic
>
> **[3:10](https://www.linkedin.com/learning/microservices-foundations-23469069/hybrid-architectures-hierarchy-and-service-based?u=76281980&t=190)** and flow through the system to accommodate your artificially imposed rules. You may find yourself building and defining business processes that don't really exist in order to play nice in your own sandbox. Sometimes to the point of simple pass through services, which do nothing but at artificial latency. Take this hybrid model and its risks seriously, even if you just consider doing it as a transition method. Another very common architecture is the so-called service-based architecture. In my mind, this is very similar to the SOA model in which you leave the underlying [Databases](../../Skills/Software%20Development/Databases.md) alone and simply carve out your services. By migrating your architecture to this service-based flow, you can gain some of the agility improvements of the microservices model without sharding your data into separate data stores. Again, while this hybrid model has some value, take it lightly. This does start your journey to microservices and is a great starting point, but it can also lead to the so-called monolith of monoliths. When your service offering extends beyond the original scope, because you don't have well-defined domains, you end up hurting yourself in the long run.
>
> **[4:44](https://www.linkedin.com/learning/microservices-foundations-23469069/hybrid-architectures-hierarchy-and-service-based?u=76281980&t=284)** There are many other hybrid models you can see pattern by leading companies or even in your own mind, and while they may solve some issues, they probably come with some baggage as well. Consider all the benefits and risks of any model before diving in head first. Make sure you can manage the risks and maximize your rewards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2)
> **Env Vars:** soa (1)
> **Speakers:** - a (1)


### 4. Making Architecture Choices

[↑ Back to Table of Contents](#table-of-contents)

#### [Design considerations](https://www.linkedin.com/learning/microservices-foundations-23469069/design-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/design-considerations?u=76281980&t=0)** - When starting the process of designing your [Microservices](../../Skills/Software%20Development/Microservices.md), there are a few key points to consider before you write a single line of code. While I have mentioned most of this already, I want to roll it up into a clear concise picture, and explain how your designs should account for this material from the ground floor. One of the first aspects you should consider when designing microservices is your [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) pipelines. Don't write any code until you have a plan on how you will handle these tasks. In my opinion, it is such an important concept in microservices architecture that it honestly should be task number one, model a sample pipeline, and ensure you have the most critical steps of your SDLC documented and automated, if possible. Secondly, consider spending some real time designing your logging, tracing, and telemetry frameworks. This should really be a primary function of every service, so the code required to do this work should be in a common library for every artifact to consume. Consider how you will aggregate and evaluate your logs and metrics and design your code to solve that need. Consider the use of log aggregators
>
> **[1:33](https://www.linkedin.com/learning/microservices-foundations-23469069/design-considerations?u=76281980&t=93)** and search mechanisms for those logs early on so you can structure the data appropriately. Now, as it gets to your service code, you really should consider leveraging domain-driven design. You need to do some real analysis on the system as a whole, and use that knowledge to help you define your service boundaries. Adding telemetry to your existing offerings can help you with this. Consider how you will build your services and what functions they will perform. Will you leverage dedicated data services, or wrap the data access into business processes? Should you consider moving services together to allow for asset transactions where you need them, or will you build out a strategy based on eventual consistency? As you build out these services, plan for designing mechanisms to evaluate and eventually control your latency. Evaluate the use of non-blocking code when possible, but consider standardizing your stack no matter which way you go. I know many developers may not like to hear the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) standardize, but the reality is that the most successful teams when moving into a microservices architecture have standards across the code base.
>
> **[3:11](https://www.linkedin.com/learning/microservices-foundations-23469069/design-considerations?u=76281980&t=191)** You can leverage a different standard than you currently use, but standardization will allow you to shift resources much more easily as the business needs change. I also encourage you to design your system to be asynchronous first. By that, I mean try to create every service as an asynchronous operation until you prove that you need it synchronously. This is probably contrary to how you are currently doing things, but having a solid plan for asynchronous activity will not only reduce latency on your system as a whole, but will allow you to improve your skills on these operations while reducing error rates. Designing a microservices architecture is less about the code and more about the supporting processes, operations, and infrastructure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (5), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** sdlc (1)
> **Analogies:** picture (1)
> **Prerequisites:** required to (1)
> **Speakers:** - when (1)

#### [The tradeoffs](https://www.linkedin.com/learning/microservices-foundations-23469069/the-tradeoffs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/the-tradeoffs?u=76281980&t=0)** - I have said it many times that building a [Microservices](../../Skills/Software%20Development/Microservices.md) architecture is not a silver bullet when it comes to developing software. I have also spent a significant amount of our time talking about what the issues that can arise in this model are. I want to talk about these from the perspective of comparing and contrasting the trade-offs. Many thought leaders in the community have significant documentation on these trade-offs, so I'm just going to apply some of my personal experiences to the information that I have gathered from them. We have talked a lot about the distribution tax. There's a significant cost of building out a distributed system, but you get several benefits from this. One of the biggest benefits is well-defined module boundaries. It is a lot harder to write tightly coupled code when you have to go across the service boundary to make a call. In addition, you get a much easier path of scaling your system. These are real trade-offs that you need to manage, and they may be some of the most critical in the system. We have talked a lot about this and various solutions, like event-driven asynchronous patterns, because they are so critical. Think about a company like Amazon that clearly does business globally
>
> **[1:34](https://www.linkedin.com/learning/microservices-foundations-23469069/the-tradeoffs?u=76281980&t=94)** and has spikes in order activity around Christmas, for instance. And for them to manage their system in a monolithic deployment, it would be next to impossible. They have managed the cost of distribution in order to leverage a clear benefit of doing business globally and under a highly available model. One of the other dichotomies to evaluate in microservices is deployment complexity. We have discussed the ability to scale in this architectural style. However, that ability to scale increases the complexity of our deployments. Now, I would argue that deployments are always a hard part of software delivery. But in microservices, there are just so many more moving parts that the complexity increases dramatically. We've also talked about ways to solve this complexity through [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md). The benefits of scale and reducing the waste associated with it can be measured. The final trade off that I will talk about is the ability to have diversity in your technology stack. We talked about microservices being a heterogeneous model, but this ability to write your services in any technology comes with real operational costs. You can fully embrace polyglot development if you want to,
>
> **[3:11](https://www.linkedin.com/learning/microservices-foundations-23469069/the-tradeoffs?u=76281980&t=191)** but managing these services in production when they follow different rules can be a huge challenge. From my experiences, it is often better in these cases to embrace a smaller set of technologies to improve your ability to manage the operations. I have said this several times as well, but you have to spend some serious time evaluating these trade-offs within your system. Play to your strengths and control your weaknesses, and you will achieve significantly better results. I really hope that I'm imparting in you a real need to plan and not just jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (4), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - i (1)

#### [An argument for edge services](https://www.linkedin.com/learning/microservices-foundations-23469069/an-argument-for-edge-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microservices-foundations-23469069/an-argument-for-edge-services?u=76281980&t=1)** - If you remember when we discussed SOA, the beep layer allowed you to expose various services over a common bus. This bus brought about significant problems in managing your code as often it became bloated with code itself and that bloat decrease the ability to manage the infrastructure. In a [Microservices](../../Skills/Software%20Development/Microservices.md) architecture, you often leverage an API proxy to hide your service implementations behind a common layer. But again, this layer can become bloated if you start transforming your service offerings based on client needs, which is a common approach many are tempted to take. With all of this, you may ask how you can solve multiple client needs which brings us to edge services. The really are two distinct types of edge services in my view, and we will talk about them separately. The first and most common is the outbound edge service. These services are used to expose your client's specific needs to the outside world. The other edge service, often called inbound or translation services, are more important to me in that they are designed to abstract you from third party dependencies. Let's talk about the inbound edge services first.
>
> **[1:36](https://www.linkedin.com/learning/microservices-foundations-23469069/an-argument-for-edge-services?u=76281980&t=96)** Think for a moment about the third party systems you contract with and imagine how often those contracts change. I want to talk about a real use case and that is an [Email Marketing](../../Skills/Data%20Science/Email%20Marketing.md) scenario. Your company most likely leverages a third party send system to handle outgoing email communications so you don't trash your internal email system. Sometimes, these communications are transactional like an order fulfillment or a status notification. But sometimes these communications are marketing based. Either way, you will have some set of content and you will leverage these systems to simply handle the SMTP operations. When you consume these services, you can either call the APIs directly or build an edge service that you own to interact with a third party. If you build the abstraction layer or edge service, you control the impact of vendor API changes in a single place but also provide yourself a path for vendor replacement if the need arises. And hey, most likely it will. After all, technology and pricing changes like crazy. When you build an abstraction layer like this, you minimize the impact of changes
>
> **[3:13](https://www.linkedin.com/learning/microservices-foundations-23469069/an-argument-for-edge-services?u=76281980&t=193)** which is critical to the health of your system as a whole. Imagine a breaking API change from the vendor. Now you can roll that change out to one service or hundreds of them. I prefer the single service. It is true that you have now introduced one more hop in every call to the remote service, but you can manage that through asynchronous operations especially on a service like email sending. Even if you cannot manage the latency through asynchronous operations, the reduction of code changes alone makes this a benefit. Now let's talk about the outbound edge services use case. Not every client that consumes your service needs the same data payload. Mobile scenarios tend to thrive on smaller payloads of data. But you need a place to manage this. You could manage it through your proxy layer or through an API gateway. But I hope at this point you see the potential risks. If however, you manage client specific edge services and simply proxy them, you get several key benefits. The first is that you are managing the transformations in code that is similar to all of the other code in your system. This immediately makes managing this code much easier.
>
> **[4:49](https://www.linkedin.com/learning/microservices-foundations-23469069/an-argument-for-edge-services?u=76281980&t=289)** You also gain another key benefit. Think back a few videos ago when I talked about how critical it was to make your API changes passive or to leverage versioning. This is even more critical for your clients especially those that you cannot immediately update like mobile or desktop clients. By building out edge services, you can continue to provide them a consistent interface even if the underlying services change. Designing your services so they're isolated from changes cannot be underestimated. Spend a little extra effort when designing and coding for these use cases and you will reap the rewards downstream.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Email Marketing](../../Skills/Data%20Science/Email%20Marketing.md) (1)
> **Env Vars:** api (5), soa (1), smtp (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** imagine (2)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - if (1)

#### [Embracing DevOps](https://www.linkedin.com/learning/microservices-foundations-23469069/embracing-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microservices-foundations-23469069/embracing-devops?u=76281980&t=1)** - Throughout this course, we've talked a lot about managing trade-offs in a [Microservices](../../Skills/Software%20Development/Microservices.md) architecture. I have talked about the various improvements to a system that can be achieved through microservices as well as the potential impacts. I've also talked about the operational costs and the need to build out a [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) model. All of what we have discussed boils down to one major thing, culture. The single most effective way to be successful in a microservices architecture is to build it into your culture. A [DevOps](../../Topics/DevOps.md) culture is a perfect fit for building out a microservices architecture because the two complement each other's strengths while mitigating the weaknesses. DevOps aims to bring the conversation between operations and development into the same sphere. It is from this perspective that we will spend some time. I've talked a lot about increased operational complexity for a microservices architecture, from the distribution tax to increased deployment counts for a system. Most of the issues from microservices can be seen as operational issues. The distribution tax in a microservices architecture is one that must be closely monitored to ensure
>
> **[1:34](https://www.linkedin.com/learning/microservices-foundations-23469069/embracing-devops?u=76281980&t=94)** that lag in the system doesn't have major impacts. There are several architectural mitigations we have discussed. But regardless of the mitigations, monitoring the system remains the most important aspect. A platform of [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) and automated responses becomes a necessity for operations. DevOps aims to leverage automation and embed the work into the development function. We spent a significant amount of time talking about common logging and tracing for a reason. They lead to a simpler use case for automated monitoring. Once we have the data and have it structured in a unified and well-defined format, we can write code to respond in an automated fashion. Consider increased response times or increased 500 response codes triggering repaving of the infrastructure, or at the very least, a pager call. By automating these routines, your culture will drive ways to make these automated responses even more efficient, which in turn gives you better responses to system events. Consider also the complexity of deployments in a microservices architecture. Managing the deployment and releases
>
> **[3:08](https://www.linkedin.com/learning/microservices-foundations-23469069/embracing-devops?u=76281980&t=188)** of code manually becomes impossible in this style. Again, we discussed CI/CD as a requirement of microservices, for a reason. Automation of deployments and testing improves the agility of the team. The operational events that are manual in a traditional model are improved with automation, which in turn provides more throughput for the team, as a whole. Ultimately, much of what we has discussed in this course, has been about culture. We want to maximize the positives like scaling, agility, or the ability to globally distribute our system. To do that, we have to automate. We also need to mitigate the latency and complexity of deployments as well. Once again, to do that, we have to automate. The DevOps culture breeds a more successful microservices platform, and a more successful platform breeds a deeper DevOps culture. They go hand in hand for a reason. So don't fight it, embrace it. in this course, has been about culture. We want to maximize the positives like scaling, agility, and the ability to globally distribute our system. To do that, we have to automate.
>
> **[4:42](https://www.linkedin.com/learning/microservices-foundations-23469069/embracing-devops?u=76281980&t=282)** We also need to mitigate the latency and complexity of deployments as well. Once again, to do that, we have to automate. The DevOps culture breeds a more successful microservices platform, and a more successful platform breeds a deeper DevOps culture. They go hand in hand for a reason. So don't fight it, embrace it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (11), [DevOps](../../Topics/DevOps.md) (7), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1), [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) (1)
> **CLI Commands:** make (1), cd (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Speakers:** - throughout (1)

#### [Monolithic microservices](https://www.linkedin.com/learning/microservices-foundations-23469069/monolithic-microservices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microservices-foundations-23469069/monolithic-microservices?u=76281980&t=1)** - Not every single use case is ready for [Microservices](../../Skills/Software%20Development/Microservices.md). In fact, many times, especially in early-stage startups, the concept of microservices is just too much for the small team to deal with. There are, however, very specific steps you can take to prepare a monolith early for an eventual breakup as needed. Let's start with the plan and then get into the arguments for this. The basic idea behind the monolithic microservice is to ensure you are using all of the strategies we have discussed at this point, with the exception of breaking the components up. So, what does that really mean? Well, if we start at the lowest point, we build out our data services in a way that they can be broken apart in the future. We focus on domains and expose those domains with solid APIs. In doing this, extracting these domains later is significantly easier. You can even take this a step further and build your database schemas in a way that you can easily break your [Databases](../../Skills/Software%20Development/Databases.md) up as well. We are talking about domain-driven design still, but keeping the APIs hidden from the outside world. You can continue this pattern up to your presentation layer as you see fit.
>
> **[1:34](https://www.linkedin.com/learning/microservices-foundations-23469069/monolithic-microservices?u=76281980&t=94)** I highly recommend that you encapsulate as many of these potential services as possible. You may not need them all, but you still have built highly testable components within your application, and that is always a good thing. The biggest argument I've seen when working in this space is you have such a large unknown unknown early in a startup's journey. You can spend energy building out a complex microservices architecture, or can keep the end vision in mind, but focus your energy on product-market fit by delivering real features. The key here is keeping a scalable and distributable system in mind at every step of the way, which helps you break it up if you need to. Another big argument for doing this model is, simply, you don't have the staff early on in your journey, nor do you need it. While your application is small, as well as your team, the added complexity of microservices to gain agility is kind of a moot point. Your team is small, so they should be [agile](../../Skills/DevOps/Agile%20Development.md) enough in a monolithic codebase. In addition, the application is small, so building and deploying it is significantly easier. Now, it still is important to consider the future.
>
> **[3:13](https://www.linkedin.com/learning/microservices-foundations-23469069/monolithic-microservices?u=76281980&t=193)** You should use solid CI/CD. You should be focusing on solid encapsulation. But in the end, you can do all of these in a monolith, in a way that you can break it apart in the future. In the end, building out microservices starts with solid principles, and building monoliths still benefit from these principles. Good observability, solid APIs and UIs, solid encapsulation, CI/CD, and everything else we have discussed works to your advantage with any system you build. But as your system gains popularity and use, you will reap rewards by focusing on these key principles, because adding [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) to your system is so much easier when it was designed that way. Don't feel like there's only one answer when building these systems, monolith or microservice-based.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **CLI Commands:** cd (2)
> **Speakers:** - not (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/microservices-foundations-23469069/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-foundations-23469069/next-steps?u=76281980&t=0)** - Throughout this course, I've aimed to give you the base foundation of [Microservices](../../Skills/Software%20Development/Microservices.md). Let's revisit what we've discussed. We started our discussion with the history of microservices and some of the major milestone architectures in the history of this space. We discussed some of the key benefits of the microservices architecture, as well as some of the risks that you need to mitigate. We introduced the concept of cloud native and how it relates to microservices. I then introduced a few key elements of the architecture itself, including the services, the communication patterns between those services, the concept of eventual consistency, and finally, the API layer. We then looked at some of the more advanced concepts of the architecture, including asynchronous messaging, logging and tracing, CI/CD as a requirement, and finally, we spent a little time looking at a couple hybrid architectures. We wrapped up the course talking about the architectural and cultural choices you need to address when moving into this model. All in all, I've shared with you an introductory journey into microservices. I've offered you a taste based on my experiences, but there is a wealth of information out there. I would encourage you to continue learning
>
> **[1:33](https://www.linkedin.com/learning/microservices-foundations-23469069/next-steps?u=76281980&t=93)** and forming your own opinions on what are the most important aspects. One of the things that I have noticed about people discussing this architectural pattern is the passion for sharing knowledge with each other. I would encourage you to read more and listen to some of the thought leaders in this space. There are a lot of them. You can follow me on social media to see who I'm listening to. I want to thank you for your time in this course. It means a lot to me that you have spent this time with me, even virtually. My commitment does not end when this course is over. I respond to requests on social media, on all of my content here, or any other public platform that I present on. I love learning and sharing knowledge, so please reach out to me with questions or ideas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (5)
> **CLI Commands:** cd (1)
> **Env Vars:** api (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Speakers:** - throughout (1)


## Skills Covered

- Microservices

## Path Context

### In [Microservices Foundations Professional Certificate by Kong](../../Paths/Software%20Development/Professional%20Certificates/Microservices%20Foundations%20Professional%20Certificate%20by%20Kong.md)
**1 of 3** | [Microservices- Design Patterns](Microservices-%20Design%20Patterns.md) →

### In [Getting Started with Microservices](../../Paths/Cybersecurity/Learning%20Paths/Getting%20Started%20with%20Microservices.md)
**1 of 3** | [Microservices- Design Patterns](Microservices-%20Design%20Patterns.md) →

## Part of

- [Microservices Foundations Professional Certificate by Kong](../../Paths/Software%20Development/Professional%20Certificates/Microservices%20Foundations%20Professional%20Certificate%20by%20Kong.md)

## Appears In

- [Microservices Foundations Professional Certificate by Kong](../../Paths/Software%20Development/Professional%20Certificates/Microservices%20Foundations%20Professional%20Certificate%20by%20Kong.md)
- [Getting Started with Microservices](../../Paths/Cybersecurity/Learning%20Paths/Getting%20Started%20with%20Microservices.md)

## Related Courses

_Courses sharing skills:_

- [Kubernetes- Microservices](../DevOps/Kubernetes-%20Microservices.md) — Microservices
- [Microservices- Security](../Cybersecurity/Microservices-%20Security.md) — Microservices
- [Case Study- Visualize Complex Microservice Data Using Python](Case%20Study-%20Visualize%20Complex%20Microservice%20Data%20Using%20Python.md) — Microservices
- [Creating Spring Boot Microservices](Creating%20Spring%20Boot%20Microservices.md) — Microservices
- [Node.js- Microservices](../Web%20Development/Node.js-%20Microservices.md) — Microservices

---

[↑ Back to top](#)