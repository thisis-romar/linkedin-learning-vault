---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: microservices-security
url: "https://www.linkedin.com/learning/microservices-security"
duration_minutes: 146
duration: 2h 26m
level: Advanced
updated: 1/24/2025
learners: 52406
skills:
  - Application Security
  - Microservices
  - Java
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQH8Fu75tuxcpw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1605131101472?e=2147483647&amp;v=beta&amp;t=2Tt95Y7dspLxmLq-Kv05a52UW-mVmVQnaUxGclzNGuM"
linkedin_topic: Cybersecurity
learning_paths:
  - Getting Started with Microservices
path_count: 1
tags:
  - course
  - topic/security
  - topic/software-development
  - skill/application-security
  - skill/microservices
  - skill/java
status: not-started
created: 2026-04-20
---

![Microservices: Security](https://media.licdn.com/dms/image/v2/C4D0DAQH8Fu75tuxcpw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1605131101472?e=2147483647&amp;v=beta&amp;t=2Tt95Y7dspLxmLq-Kv05a52UW-mVmVQnaUxGclzNGuM)

# Microservices: Security

> Cyberattacks are on the rise—and your microservices may very well be underprotected. Microservices present new safety considerations, and while protective techniques exist, the implementation can be complex and challenging to understand. This course provides developers with a playbook for safeguarding such services using various strategies and levels of security. Learn about security concepts that

> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security) | 2h 26m | Advanced | 52K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Kevin Bowersox]]

## Skills Covered

- Application Security
- Microservices
- Java

## Table of Contents

### Introduction

#### Securing microservices
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/securing-microservices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/securing-microservices?u=76281980&t=0)** - [Kevin] Innovation in the microservice space has outpaced security.
>
> **[0:05](https://www.linkedin.com/learning/microservices-security/securing-microservices?u=76281980&t=5)** When teams acknowledge the security gap and attempt to secure their microservices, there's normally a lot of confusion, because it's the intersection of two deep spaces.
>
> **[0:16](https://www.linkedin.com/learning/microservices-security/securing-microservices?u=76281980&t=16)** Frustrated, they'll default to applying security tactics that worked in the past.
>
> **[0:21](https://www.linkedin.com/learning/microservices-security/securing-microservices?u=76281980&t=21)** These tactics will turn their microservices into unmanageable, distributed monoliths.
>
> **[0:28](https://www.linkedin.com/learning/microservices-security/securing-microservices?u=76281980&t=28)** Hi, I'm Kevin Bowersox.
>
> **[0:30](https://www.linkedin.com/learning/microservices-security/securing-microservices?u=76281980&t=30)** As an engineer, I've built secure microservices for systems where security was a top priority.
>
> **[0:37](https://www.linkedin.com/learning/microservices-security/securing-microservices?u=76281980&t=37)** In this course, I'll teach you patterns, standards and best practices so you can confidently integrate security into a microservice-based system without sacrificing the benefits they deliver.
>
> **[0:49](https://www.linkedin.com/learning/microservices-security/securing-microservices?u=76281980&t=49)** We'll go in depth into how platforms like API gateways and identity providers can be used to deliver secure microservices and save you time by not reinventing the wheel.
>
> **[1:02](https://www.linkedin.com/learning/microservices-security/securing-microservices?u=76281980&t=62)** So join me on my LinkedIn Learning course to learn the foundations of microservice security.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Speakers:** - [kevin] (1)

#### Microservices learning curve
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=0)** - [Instructor] Before we take a closer look at microservice security, let's talk a bit about who the course is for and what information you should know ahead of time.
>
> **[0:10](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=10)** When I first encountered microservice security, it was a bit overwhelming.
>
> **[0:14](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=14)** Building microservices is already complicated.
>
> **[0:17](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=17)** However, I was now confronted with a bunch of new security technologies, standards, and techniques.
>
> **[0:24](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=24)** It seemed like the old playbooks were thrown out the window.
>
> **[0:28](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=28)** At the same time, I was excited for a new challenge and I began to furiously read security specifications, talk to experts, and build prototypes.
>
> **[0:38](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=38)** After a few years of building and securing microservice-based systems, I began to clarify the concepts for others to help them understand how to build secure microservices.
>
> **[0:51](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=51)** So this course captures those conversations and it's intended to help anyone with a role or an interest in building a microservice-based system get past the initial information overload.
>
> **[1:05](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=65)** Given the new way of working introduced by microservices and DevOps, this creates a pretty wide audience.
>
> **[1:12](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=72)** I've had conversations with people in all sorts of positions, including application developers, security engineers, pipeline developers, and even scrum masters.
>
> **[1:22](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=82)** If you're in one of these roles, you can benefit from the information in this course.
>
> **[1:28](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=88)** Microservices and security are a pretty deep space that tends to layer concept on top of concept.
>
> **[1:35](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=95)** I can unpack most of that information but you're going to get the most from this course if you have a little background in how systems are built and architected.
>
> **[1:44](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=104)** If you haven't worked in a team to build a traditional information system before or haven't heard of concepts like APIs and containers, there may be other courses in the LinkedIn Learning platform that would benefit you more, like Microservice Foundations.
>
> **[2:01](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=121)** That's all there is to know.
>
> **[2:03](https://www.linkedin.com/learning/microservices-security/microservices-learning-curve?u=76281980&t=123)** I can guide you through the rest of the lessons from here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 1. Microservice Security Foundations

#### Microservice concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=0)** - [Instructor] Microservice Architectures have introduced a fundamental shift that changes how developers build, operate, and secure technical systems.
>
> **[0:11](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=11)** Before microservices many systems were built using a three tier architecture that consisted of a presentation layer that runs in the browser, a logic tier that ran server side and a database tier where information was stored.
>
> **[0:26](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=26)** In this architecture the logic tier contains a set of services that work together to provide the systems business capabilities and data.
>
> **[0:36](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=36)** In a hypothetical e-commerce system this might include services for business functions like the product catalog, inventory, pricing, shopping cart, and delivery.
>
> **[0:47](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=47)** In a monolith we develop, package and deploy these business services as a single executable, which allows them to communicate in process to complete business functions.
>
> **[1:00](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=60)** On the contrary microservice architectures separate the services in a systems application tier into separate components that are hosted and executed independently of one another.
>
> **[1:12](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=72)** Since microservices execute in their own process space, all communication and collaboration between services occurs over a network protocol, typically HTTP.
>
> **[1:25](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=85)** Access to a microservices data and capabilities occur strictly through a well-defined interface that is exposed as a rest API.
>
> **[1:35](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=95)** Microservice architectures deliver a number of benefits that are related to their loose coupling and independence.
>
> **[1:42](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=102)** When a system is built using microservices each service within the system can be developed and maintained by a separate team.
>
> **[1:52](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=112)** The decoupled nature of the services allows these teams to isolate their development and avoid scheduled dependence.
>
> **[2:01](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=121)** Once a change to a service is ready it can be least independent of the other services in the system because microservices are autonomous.
>
> **[2:12](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=132)** The services are developed, packaged and deployed separately from each other.
>
> **[2:17](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=137)** Eliminating the need to coordinate the timing of a big bang deployment that releases the entire system all at once.
>
> **[2:25](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=145)** The autonomous nature of microservices also allows them to be scaled independently.
>
> **[2:32](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=152)** If a specific service such as the catalog service comes under heavy load we can horizontally scale only that service to meet the demand.
>
> **[2:41](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=161)** This allows us to efficiently allocate resources such as CPU and memory to where they are most needed in our system.
>
> **[2:50](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=170)** Finally, microservice architectures can be more resilient.
>
> **[2:55](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=175)** If a service within the distributed system begins to fail microservices can implement several fault tolerance strategies to keep the system intact.
>
> **[3:05](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=185)** One resiliency pattern is the circuit breaker pattern which redirects traffic intended for a failing service to another service that provides a basic or default implementation of the service.
>
> **[3:19](https://www.linkedin.com/learning/microservices-security/microservice-concepts?u=76281980&t=199)** These characteristics differentiate a microservice architecture from the traditional three tier monolith and will require it different security strategies be applied to achieve confidentiality integrity, and availability.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), finally, (1), require (1)
> **Env Vars:** http (1), api (1), cpu (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Security fundamentals
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=0)** - [Instructor] Before we discuss microservice security, let's talk about several security fundamentals that apply to any system architecture.
>
> **[0:09](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=9)** When securing an information system, there are three primary security objectives, confidentiality, integrity and availability.
>
> **[0:19](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=19)** Confidentiality ensures that information remains private by only allowing authorized users to access it.
>
> **[0:27](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=27)** Integrity ensures that information can be trusted because it has not been tampered with.
>
> **[0:33](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=33)** Availability ensures that systems are accessible and can make information available to authorized users when they need it.
>
> **[0:41](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=41)** To achieve these goals, security strategies and controls are selected and applied to a systems architecture to the extent they are required.
>
> **[0:51](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=51)** Access control is one security technique applied to protect sensitive resources.
>
> **[0:58](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=58)** If you've ever taken a flight, you've experienced two key components of access control, authentication and authorization.
>
> **[1:06](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=66)** To board a flight, you must authenticate or prove your identity by showing your ID at the security gate.
>
> **[1:13](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=73)** Next, you show your boarding pass to prove you're authorized to be on the flight.
>
> **[1:18](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=78)** Only after completing these two steps will you be granted access to the airplane.
>
> **[1:25](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=85)** When securing information systems, authentication is an important security control because it establishes a user's identity which is necessary to make an access decision.
>
> **[1:37](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=97)** Systems may need to authenticate both human users and other systems, which is accomplished through the exchange of something you know such as a password or something you have such as a token.
>
> **[1:50](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=110)** Highly sensitive systems may apply additional security measures like multi-factor authentication that combines several authentication methods such as a password and a one-time pin.
>
> **[2:05](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=125)** Once identity is established, a system uses the authorization process to control access to resources based upon a user's privileges.
>
> **[2:15](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=135)** Privileges are used to determine if users should be granted access to the resources they requested.
>
> **[2:22](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=142)** Modern authorization protocols such as OAuth permit access privileges to be delegated by a resource owner to third parties, allowing the third party to access resources on behalf of a user.
>
> **[2:38](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=158)** Trust is another very important security concept because it determines to what extent something is believed to be true.
>
> **[2:47](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=167)** Systems must frequently decide whether to trust various pieces of information such as a user's identity, access privileges, tokens and transactional business data.
>
> **[2:59](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=179)** This determination is made based upon factors such as the source of the data, it's age and the integrity checks it is undergone.
>
> **[3:08](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=188)** Additionally trust domains can cause one segment of a system to trust a piece of information.
>
> **[3:15](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=195)** However, if that data crosses a trust boundary to another segment of the system, it is no longer trusted.
>
> **[3:24](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=204)** A system's attack surface comprises all of the paths that can be used to get data into or out of an application.
>
> **[3:32](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=212)** A systems user interface, open ports, API, and database can all present opportunities for an attacker to compromise a system.
>
> **[3:41](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=221)** So they are considered part of the attack surface.
>
> **[3:45](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=225)** Reducing and hardening the attack surface is an effective strategy to enhance a system security.
>
> **[3:52](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=232)** These security goals and concepts are universal to any architecture, but how we achieve or apply them will be drastically different from microservice architecture.
>
> **[4:04](https://www.linkedin.com/learning/microservices-security/security-fundamentals?u=76281980&t=244)** Most of the strategies used to secure a monolith need to be re-engineered to secure a distributed system.

> [!info]- Semantic Content
>
> **Analogies:** such as (6)
> **Code Keywords:** let (1), private (1), pass (1), interface (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (2)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### Microservice security challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=0)** - [Instructor] Microservice Architectures present unique security challenges that require us to rethink how we approach application security.
>
> **[0:09](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=9)** Security strategies used in monolith are well established when compared to a Microservice Architecture.
>
> **[0:16](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=16)** In a monolith, the number of exposed ports is kept to a minimum to reduce the applications attack surface.
>
> **[0:24](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=24)** Requests entering the system are intercepted by a security filter that ensures users are authenticated and permitted to access the system.
>
> **[0:33](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=33)** Upon authentication, a security context is established that contains the authenticated users identity, roles and permissions.
>
> **[0:42](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=42)** Since the entire system executes within a single process, this security context is used throughout the monolith to authorize granular access to data and capabilities.
>
> **[0:55](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=55)** Essentially, the entire monolith shares the same trust domain.
>
> **[1:01](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=61)** Microservice Architectures are fundamentally different, so we need to rewrite the playbook.
>
> **[1:07](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=67)** By design, these distributed systems are made up of independent components that must expose a port in order to be cold.
>
> **[1:16](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=76)** This broadens the system's attack surface.
>
> **[1:20](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=80)** The attack surface is also dynamic.
>
> **[1:22](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=82)** It changes as we scale a service or when a new service is introduced.
>
> **[1:29](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=89)** Access control poses another challenge as outside network traffic enters the system also known as North/South Traffic.
>
> **[1:37](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=97)** We must decide where to perform authentication and subsequently authorization.
>
> **[1:44](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=104)** Building authentication into each service isn't a good option, because requests from the same principle to another service would require reauthentication.
>
> **[1:55](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=115)** Security controls may also be necessary for traffic between services also known as East/West Traffic, in order to maintain confidentiality and integrity of data pass between services.
>
> **[2:09](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=129)** This task becomes more complicated when the traffic between services spans multiple trust domains.
>
> **[2:16](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=136)** Once the user's identity is established, sharing that information across services while maintaining it's integrity requires specialized strategies.
>
> **[2:27](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=147)** Microservice security isn't all doom and gloom.
>
> **[2:30](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=150)** There are a few bright spots.
>
> **[2:33](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=153)** Because services are independent of one another, there can be advantages when it comes to availability.
>
> **[2:42](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=162)** For example, a denial of service attack could crash a non-essential service.
>
> **[2:48](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=168)** However, since the attack only hit one service, it's possible for the rest of the system to remain available.
>
> **[2:57](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=177)** If a service were exploited, the impact might be confined to a smaller portion of the system because it is harder for an attacker to move laterally.
>
> **[3:08](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=188)** To secure a Microservice Architecture, it's important to take the time upfront to understand these unique aspects of securing a distributed system.
>
> **[3:17](https://www.linkedin.com/learning/microservices-security/microservice-security-challenges?u=76281980&t=197)** That way the appropriate security strategies can be applied.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), pass (1)
> **Definitions:** known as (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Identity Management and Access Control

#### Distributed access management patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=0)** - [Instructor] As microservices have matured, so have the techniques used to secure them.
>
> **[0:06](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=6)** In security domains, such as identity and access management, you're going to even discover general patterns that have emerged, like the ones we're about to discuss.
>
> **[0:16](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=16)** Using patterns allows us to abstract away the finer implementation details to see how a system works at a high level.
>
> **[0:24](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=24)** Our discussion will leave a few key points for later.
>
> **[0:27](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=27)** However, it's important we highlight two concepts before we proceed, clients and tokens.
>
> **[0:34](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=34)** Client is a general term that describes any hardware or software calling a service.
>
> **[0:39](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=39)** For microservice architectures, this could be a mobile device, a single page application, a Java backend, a batch process, or another company's application.
>
> **[0:50](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=50)** Now, clients are also used by end users to access their data on APIs or microservices.
>
> **[0:58](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=58)** We're also going to talk about tokens.
>
> **[1:00](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=60)** You can think of these as digital keys that contain security credentials, that open doors to resources like our microservices.
>
> **[1:10](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=70)** Like real life keys, tokens come in various formats.
>
> **[1:13](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=73)** Some are as simple as random strings of characters, like a UUID, while others contain more detailed information.
>
> **[1:22](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=82)** These two concepts will play a key role in our discussion of access control.
>
> **[1:27](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=87)** Similar to other parts of a microservice architecture, the responsibility of managing a party's identity, privileges, and access is isolated to a separate distributed component.
>
> **[1:40](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=100)** For now, we're going to call this component the identity service.
>
> **[1:45](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=105)** The service is important because it provides tokens to client applications after an authentication event.
>
> **[1:52](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=112)** These tokens are passed in calls to the microservices by the client to demonstrate its permission to access them.
>
> **[2:01](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=121)** From here, the pattern can take several forms.
>
> **[2:05](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=125)** In simple and direct implementations, microservices will pass the token back to the identity service to verify its authenticity before granting access to a resource.
>
> **[2:18](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=138)** There's problems with this approach.
>
> **[2:20](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=140)** It can create a lot of traffic to the identity service, and as new services are added, it becomes apparent the approach does not scale well.
>
> **[2:29](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=149)** The identity service quickly becomes the busiest service in the system and critical issues will start to appear when the system is placed under load.
>
> **[2:39](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=159)** One way to resolve these issues is to route traffic destined for the microservices through a reverse proxy placed in front of them.
>
> **[2:49](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=169)** Before the reverse proxy allows any traffic through, it will validate the token against the identity service.
>
> **[2:58](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=178)** After validation by the reverse proxy, the traffic enters what is considered a trusted portion of the network, where it can access the microservices without further scrutiny.
>
> **[3:11](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=191)** Unfortunately, implicitly trusting the network is sort of an anti-pattern.
>
> **[3:16](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=196)** Just establishing trust beyond the gateway introduces security concerns that are not acceptable for most systems.
>
> **[3:25](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=205)** This leads us to the next evolution of the pattern, where the identity service places additional information regarding the identity and permissions of the end user into the token when it's created.
>
> **[3:39](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=219)** Now, the client can pass information regarding the user and its permissions within the token to the API gateway and subsequently to the microservices.
>
> **[3:51](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=231)** The microservices use the identity and privileges found in the token to enforce access policies without the need for any additional traffic to the identity service or just blindly trusting the network.
>
> **[4:05](https://www.linkedin.com/learning/microservices-security/distributed-access-management-patterns?u=76281980&t=245)** There are a few more security details that must be applied when using any form of this pattern, but when it comes to microservices, these patterns combined with token based strategies are the most adopted when it comes to identity and access management.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), abstract (1)
> **Env Vars:** uuid (1), api (1)
> **Analogies:** such as (1), similar to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Identity and Access Management platforms
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=0)** - [Instructor] In a microservice architecture, the identity service provides two critical capabilities: authentication and token management.
>
> **[0:10](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=10)** Now, as a general rule of thumb, in the security domain, you do not want to build your own solutions.
>
> **[0:17](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=17)** You want to source them from expert providers.
>
> **[0:21](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=21)** Luckily, there are many open-source and commercial identity and access management platforms that provide authentication and token management right out of the box.
>
> **[0:32](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=32)** We can use these solutions in order to fulfill the capabilities required for our identity service.
>
> **[0:41](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=41)** Now if you're in an enterprise setting, it's highly likely that your IAM platform has been selected for you.
>
> **[0:50](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=50)** As a developer or a security engineer, you're going to find yourself integrating microservices with the IAM platform in order to secure them.
>
> **[1:01](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=61)** From an integration perspective, we're primarily interested in four capabilities provided by these platforms: authentication, identity management, security standard implementations, and token management.
>
> **[1:17](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=77)** Authentication is extremely complex and it's really easy to get it wrong.
>
> **[1:22](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=82)** That's why you want to source that capability from an IAM platform.
>
> **[1:27](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=87)** Leading platforms seamlessly integrate with many different types of identity stores in order to authenticate the user.
>
> **[1:35](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=95)** Identity store store users credentials, and information like permissions about them that we can use to make access control decisions within a system.
>
> **[1:46](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=106)** Identity stores range from local databases, to corporate held apps, to even social networking sites that allow users to use their credentials on that platform to authenticate in another system.
>
> **[2:01](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=121)** For extra sensitive scenarios, IAM platforms also support multi-factor authentication.
>
> **[2:08](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=128)** Using this technique, we combine their credentials with another form of authentication, like a one-time pin or biometrics.
>
> **[2:18](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=138)** Identity management is another important security capability provided by these platforms.
>
> **[2:24](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=144)** It's essential to understand who or what is accessing a resource, and specifically, what permissions they have to access them.
>
> **[2:33](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=153)** There are many advanced scenarios for accessing a microservice that go beyond role-based permissions, such as when a user delegates permission to their data to another application.
>
> **[2:45](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=165)** Using the identity management capabilities found in an IAM platform, we can satisfy these scenarios.
>
> **[2:53](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=173)** These solutions are also great sources for implementations of security standards and protocols used by microservices, such as OAuth two, OpenID Connect, and JSON Web Token.
>
> **[3:06](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=186)** These are the details I mentioned in our pattern discussion.
>
> **[3:10](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=190)** And a one item that clearly fall into the category of concepts you need to understand, but do not want to build yourself.
>
> **[3:18](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=198)** If you find yourself building an authorization server, it's time to take a step back and readdress the situation.
>
> **[3:26](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=206)** Tokens are also extremely important for securing microservices, and you'll find capabilities for managing them within many identity and access management platforms.
>
> **[3:37](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=217)** The capability to create and verify tokens is handled by an authorization server, which is defined in the OAuth two specification, and implemented in many IAM platforms.
>
> **[3:49](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=229)** Beyond these basic capabilities, you'll find advanced support for different token formats, refresh tokens, token revocation, and token storage.
>
> **[4:01](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=241)** Across the IAM solutions you'll find support for many different hosting configurations, including on-prem, cloud, and hybrid.
>
> **[4:09](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=249)** These should satisfy all the different needs that you'll see across microservice-based systems.
>
> **[4:15](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=255)** When choosing a platform, do a very careful assessment of these solutions to find the one that best suits your needs.
>
> **[4:23](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=263)** Identity and access management platforms are the keystone of how many systems are secured.
>
> **[4:29](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=269)** Microservices are no different.
>
> **[4:32](https://www.linkedin.com/learning/microservices-security/identity-and-access-management-platforms?u=76281980&t=272)** However, you'll discover they interweave many of the latest IAM capabilities in order to secure them.

> [!info]- Semantic Content
>
> **Env Vars:** iam (8), json (1)
> **CLI Commands:** find (6), make (1)
> **Analogies:** such as (2)
> **Documentation:** specification (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)

#### API gateways
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=0)** - [Instructor] The reverse proxy is another component in our pattern that provides a large set of features In a microservice-based system.
>
> **[0:08](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=8)** A reverse proxy acts as a front end that all traffic to a server or multiple servers passes through.
>
> **[0:15](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=15)** This helps to create a single entry point that hides details of the underlying servers from the client and allows functionality to be centralized in the gateway.
>
> **[0:27](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=27)** In many microservice-based systems, an API gateway platform, which is one type of reverse proxy, is placed at the edge of the microservice deployment, where the traffic enters.
>
> **[0:38](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=38)** To reach the microservices, all traffic must first pass through an API interface located in the gateway.
>
> **[0:46](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=46)** This creates a secure access point into the microservices and shields the clients from any changes made beyond the gateway.
>
> **[0:55](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=55)** As traffic travels through the proxy, it provides the opportunity to introduce security controls into the system.
>
> **[1:03](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=63)** Before allowing the traffic to pass through, it is common for a gateway to verify a client's token by passing it to the IAM platform for verification.
>
> **[1:13](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=73)** This allows the identity and access management platform to confirm the token's validity and ensure that it hasn't expired.
>
> **[1:21](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=81)** We can also enforce access control within the gateway by protecting specific resources or endpoints.
>
> **[1:29](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=89)** Other controls, such as spike arrest policies, focus on limiting the amount of traffic sent to the microservices by preventing large bursts of traffic from degrading API performance or causing an outage.
>
> **[1:43](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=103)** Another policy ensures that client requests stay within a particular quota.
>
> **[1:48](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=108)** This helps increase availability of our microservices and doesn't allow one client to consume all of the resources.
>
> **[1:56](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=116)** Aside from policies, API gateways also provide visibility into the traffic that enters our microservices.
>
> **[2:04](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=124)** We can monitor and trace this traffic via dashboards built into the tool, and these can be helpful when we need to investigate a security incident.
>
> **[2:13](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=133)** Additionally, there are many features not related to security that we can interject into an API gateway, like monetization.
>
> **[2:23](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=143)** API gateways often ship with portals, where internal and external developers can register their applications or clients to consume the APIs implemented by our microservices.
>
> **[2:36](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=156)** This feature can integrate with the IAM platform to meet OAuth standards surrounding client registration, in order to provide a seamless and secure access to the microservices.
>
> **[2:47](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=167)** If you've ever consumed a Facebook API or a stack overflow API, you've had to register your client, and this is the capability that a developer portal can provide.
>
> **[3:00](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=180)** As you explore identity and access management platforms and API gateways, do not be surprised if you find a bit of overlap between their capabilities.
>
> **[3:10](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=190)** It's not uncommon to find a little bit of OAuth in an API gateway or some reverse proxy style capabilities in an IAM platform.
>
> **[3:18](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=198)** For smaller systems, you may determine that a single product meets your needs after a bit of research.
>
> **[3:24](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=204)** Also, you'll find that API gateways are available in many hosting configurations, including on-prem, cloud, and hybrid models.
>
> **[3:32](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=212)** Just make sure that whatever you choose, it adheres to your organization's policies.
>
> **[3:38](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=218)** As you secure microservices, you'll likely find and yourself integrating one or both of these platforms into your services.
>
> **[3:46](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=226)** They provide many security capabilities that are not practical for development teams to build on their own, but are necessary for securing microservices.
>
> **[3:55](https://www.linkedin.com/learning/microservices-security/api-gateways?u=76281980&t=235)** We'll look deeper into these platforms to shed light on the additional security layers nested inside so that you can confidently connect the wires between your microservices and these platforms.

> [!info]- Semantic Content
>
> **Env Vars:** api (11), iam (3)
> **CLI Commands:** find (4), make (1)
> **Code Keywords:** pass (2), interface (1)
> **Documentation:** stack overflow (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Access scenarios
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=0)** - [Instructor] Whether you are building microservices or a client calling them through an API, it is helpful to understand the wide array of complex access scenarios that can influence your security scheme.
>
> **[0:13](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=13)** Access to a microservice occurs through a client, which is the system making the call to the service.
>
> **[0:20](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=20)** Microservices are not directly accessed by end users.
>
> **[0:24](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=24)** In many cases, clients don't directly access a microservice.
>
> **[0:28](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=28)** All of their calls are passed through the API gateway.
>
> **[0:32](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=32)** Additional complexity is introduced when we start to consider the different types of clients that are possible.
>
> **[0:39](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=39)** Some clients known as public clients are unable to maintain the confidentiality of their credentials.
>
> **[0:47](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=47)** For example, single page applications are unable to store credentials securely because they run in the browser where their credentials could be accessed by an attacker.
>
> **[0:59](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=59)** On the other hand, confidential clients can protect the confidentiality of their credentials to some degree.
>
> **[1:06](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=66)** This is because they run in a trusted domain.
>
> **[1:09](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=69)** These clients typically will reside on the server side where access to their internals is limited to a small group of authorized users.
>
> **[1:19](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=79)** It's also important to consider who owns a client application.
>
> **[1:23](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=83)** When we talk about first-party clients, we're referring to clients owned by the same organization that built a microservice.
>
> **[1:31](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=91)** On the other hand, there can be third-party clients who are outside parties and partners that will access the microservice.
>
> **[1:40](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=100)** This makes things harder from a security perspective because we do not control their security policies, and we cannot confirm that the security posture of their client is adequate.
>
> **[1:51](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=111)** In general, organizations tend to make their microservice security controls more stringent for third-party clients.
>
> **[1:58](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=118)** However, some organizations will implement a strategy where they require their own first-party clients to satisfy the same stringent security controls applied for third parties.
>
> **[2:11](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=131)** Another thing to consider is whether client resides inside or outside of your network.
>
> **[2:17](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=137)** Internal applications such as those used by the workforce, sit within the company firewall and can receive some benefits from their limited accessibility.
>
> **[2:28](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=148)** External public facing applications typically face a wider audience of potential attackers, making them more accessible to attack.
>
> **[2:37](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=157)** In any case, an application's position inside or outside of your network should never be a case for fewer security controls because of the threat of insiders or lateral attacks that can occur once the perimeter of your system is breached.
>
> **[2:55](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=175)** When we start to think about how the end user fits into the picture, other scenarios develop.
>
> **[3:01](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=181)** In most basic situations that involve a human end user, a first-party web application or first-party single page application will make calls to a microservice owned by the same organization that built the service.
>
> **[3:16](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=196)** If you've adopted an IAM platform, you'll often find capabilities that integrate transparently into your architecture to handle this scenario.
>
> **[3:26](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=206)** In more advanced situations, a human will consent to a third-party application accessing some or all of their resources on a microservice operated by a different organization.
>
> **[3:40](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=220)** Think of it like allowing somebody to borrow your car.
>
> **[3:43](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=223)** They don't own it, but they can use it, and maybe there's some restrictions like only to the store and back.
>
> **[3:49](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=229)** When microservices are exposed to third parties or partners, the security behind them must be prepared to handle these types of digital delegated access scenarios.
>
> **[4:01](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=241)** If a networking site has ever requested to access your contact lists hosted somewhere else, you've seen this scenario in action.
>
> **[4:10](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=250)** In some scenarios, humans are not involved at all, and the communication is machine to machine similar to when using a service account.
>
> **[4:19](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=259)** In these scenarios, microservice security must support a non-human access scenario for first-party clients, and in some cases, third-party business partners.
>
> **[4:30](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=270)** This is actually one of the simplest scenarios to secure.
>
> **[4:34](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=274)** Microservice deployments must support a wide array of access scenarios to keep up with the demands of an interconnected world.
>
> **[4:42](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=282)** This makes another strong case for using pre-existing platforms and leveraging the established security standards.
>
> **[4:50](https://www.linkedin.com/learning/microservices-security/access-scenarios?u=76281980&t=290)** As we explore OAuth, we'll see how the access scenarios can determine which flow is used by a client to obtain an access token.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), require (1), case, (1), else, (1)
> **Analogies:** for example (1), such as (1), picture (1), think of it like (1), similar to (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** api (2), iam (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Work with IAM platforms
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=0)** - [Instructor] In this lesson, we're going to get hands-on with an IAM platform so that you can better understand the underlying concepts and how they help secure our microservices.
>
> **[0:11](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=11)** For our exploration, we'll be using Microsoft Entra.
>
> **[0:16](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=16)** It's one of the most widely used identity and access management platforms.
>
> **[0:21](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=21)** Now Entra is really an entire family of security services offered by Microsoft, and here you can see all of the great capabilities that it delivers.
>
> **[0:33](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=33)** The feature set that we'll be using is Microsoft Entra ID because it's where we find core capabilities like app registration and OAuth configurations that we'll need to secure microservices.
>
> **[0:47](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=47)** To work with Entra ID, you'll need to log into the admin center by navigating to entra.[microsoft.com](https://microsoft.com) within your web browser.
>
> **[0:57](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=57)** Now, if you worked with the Azure Cloud, the layout and style of this portal should feel familiar, and that's because Microsoft Entra Identity is primarily a cloud-based Identity as a Service.
>
> **[1:11](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=71)** In the past, the service was known as Azure Active Directory, so just know that you might encounter its former name if you're looking at older information on the web.
>
> **[1:23](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=83)** Over here on the sidebar, within this identity group, we'll find the capabilities that we need to architect and build a secure distributed system composed of microservices.
>
> **[1:35](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=95)** So imagine the microservices we're building are part of an internal system that's meant for use only by the employees of an organization.
>
> **[1:46](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=106)** An identity store is one of the core capabilities that we'll need to create this system because we need a way to authenticate the employees and determine if they're authorized to access the data and capabilities that our microservices provide.
>
> **[2:03](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=123)** With Entra, the identity store is built right into the platform, right here in this section named users.
>
> **[2:13](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=133)** Now this identity store contains all of the internal user accounts for the organization and their Azure tenant.
>
> **[2:21](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=141)** So these user identities and their associated credentials can be used for authentication and authorization purposes across many applications within the organization, including the microservices that we're going to secure.
>
> **[2:38](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=158)** So let's go ahead and create a new user identity that can access our microservice base application.
>
> **[2:47](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=167)** To do that, we're going to click on all users, and then here within this dropdown, I'm going to select create a new user.
>
> **[2:58](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=178)** The first thing we'll need to do is provide the user principle name of the user.
>
> **[3:04](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=184)** This is kind of like their username.
>
> **[3:06](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=186)** I'm going to keep it short here, and we'll just go with msecuser1 for microservice security user one.
>
> **[3:14](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=194)** Then for the display name, I'm going to specify Test User 1.
>
> **[3:20](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=200)** And then finally, we need to provide a password for this user.
>
> **[3:24](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=204)** I'm not going to auto generate it, so I'll uncheck this box, and then here I'll provide a password that I've already created.
>
> **[3:33](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=213)** If you're following along, you'll want to take note of this password so that you don't forget it.
>
> **[3:38](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=218)** Okay, everything's in place.
>
> **[3:40](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=220)** So let's go ahead.
>
> **[3:41](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=221)** We'll click on the review and create button.
>
> **[3:44](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=224)** We'll take one last look at the information to make sure everything looks good, and then we'll go ahead and create the user.
>
> **[3:51](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=231)** Now once the user is created, we should see it appear in this list.
>
> **[3:57](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=237)** Right there's Test User 1.
>
> **[3:59](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=239)** Now let's go ahead, and we're going to copy the user principle name because we're going to attempt a login with this user.
>
> **[4:09](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=249)** So in order to log in with the user, we can head over to the Azure portal, and once we're prompted to authenticate, I'm just going to provide the user principle name here, and then I'll click on the next button where we can provide the credentials for the user to sign them in.
>
> **[4:31](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=271)** All right, then we'll be prompted for the password we created for the user.
>
> **[4:36](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=276)** So just go ahead and provide that and then hit sign in.
>
> **[4:40](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=280)** Okay, so you can see that we were successful with our login for the user, and now it's going to have us change their password on the first login.
>
> **[4:50](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=290)** So let me go ahead, and I'll do that.
>
> **[5:03](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=303)** And then after we change the password, it's going to warn us that we need to enable multifactor authentication.
>
> **[5:11](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=311)** Now we have 14 days to do this, so for now we're just going to disregard it by clicking on Ask later.
>
> **[5:18](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=318)** All right, and then finally, we'll specify that we want to stay signed in, and we have our first successful login to the Azure portal with the new user that we created.
>
> **[5:30](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=330)** Having identities for authentication and authorization is one of the core building blocks you'll need when securing a microservice.
>
> **[5:39](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=339)** So we started with the simple step of exploring the identity store, and we're going to expand upon that as the course progresses.
>
> **[5:49](https://www.linkedin.com/learning/microservices-security/work-with-iam-platforms?u=76281980&t=349)** In the next chapter, we'll be coming back to Entra as part of a deeper dive into protocols like OAuth and concepts like token management, which are essential for securing a microservice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (2), this, (1)
> **UI Navigation:** click on (3), dropdown (1)
> **CLI Commands:** find (2), make (1)
> **Tools:** azure portal (2)
> **Analogies:** imagine (1), kind of like (1)
> **Prerequisites:** you'll need (2)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Env Vars:** iam (1)


### 3. Token-Based Security and Standards

#### Tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=0)** - [Instructor] Microservices depend heavily upon tokens for establishing identity and enforcing access control.
>
> **[0:07](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=7)** Tokens help overcome the challenges posed by a distributed system.
>
> **[0:12](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=12)** In a microservice architecture, there is not a shared session between all of the services that can hold information about the end user and their privileges.
>
> **[0:22](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=22)** It is also not feasible for an end user to authenticate each time a service is accessed, nor should we pass their credentials around between the services.
>
> **[0:32](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=32)** A token overcomes these challenges, because it allows a client to hold some information that can identify the end user and the access granted to the client.
>
> **[0:43](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=43)** It also avoids the problem of having the client hold the end user's credentials.
>
> **[0:49](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=49)** At a high level, tokens fall under one of two formats, reference or structured.
>
> **[0:55](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=55)** The major difference between these two tokens is where the token's actual metadata is stored.
>
> **[1:02](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=62)** A reference token is an opaque string that doesn't contain any meaningful data.
>
> **[1:08](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=68)** Instead, it is passed in a request and used as an identifier to look up the token metadata in a repository of stored tokens inside the IAM platform.
>
> **[1:20](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=80)** On the other hand, structured tokens hold metadata about the token itself, the authentication event, and the end user inside the token's payload.
>
> **[1:30](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=90)** The metadata is stored in key value pairs known as claims, which are grouped together into a claim set.
>
> **[1:38](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=98)** One of the standards for formatting structured tokens commonly used inside microservices is JSON web token.
>
> **[1:46](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=106)** When discussing JSON web tokens, you'll hear the term pronounced as either JWT or jot.
>
> **[1:53](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=113)** I wouldn't get caught up in how to pronounce it.
>
> **[1:56](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=116)** The JWT standard defines a structure that uses a signature and optional encryption to securely transmit a JSON object between two parties, like our client and our microservice.
>
> **[2:09](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=129)** The jot structure defines three segments, a header, the payload, and a signature.
>
> **[2:16](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=136)** The JOSE header of a jot specifies how the token was cryptographically protected, allowing the holder of the token to understand what algorithms or techniques were used to sign or encrypt the token.
>
> **[2:29](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=149)** The payload or claim set of a jot contains information formatted in key value pairs that pertain to the end user or authentication event.
>
> **[2:40](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=160)** The final segment of a jot, the signature, is very important.
>
> **[2:45](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=165)** It is cryptographically derived from the token's header, payload, and a secret key.
>
> **[2:51](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=171)** The signature is used to verify that a token hasn't changed since it was created.
>
> **[2:57](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=177)** This is a way to ensure the token has maintained its integrity as it's passed from one party to the other.
>
> **[3:04](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=184)** Structured tokens and reference tokens can be used for several different purposes.
>
> **[3:10](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=190)** We have primarily been talking about access tokens, which are tokens used to gain access to a microservice, and they can be either reference or structured tokens.
>
> **[3:21](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=201)** Another type of token, known as a refresh token, is a reference token that allows a new access token to be obtained after the current one held by a client has expired.
>
> **[3:33](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=213)** ID tokens are another type of token that uses a jot structure to provide authentication information regarding the user for use by the client.
>
> **[3:45](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=225)** These tokens will progress through a life cycle that begins with their issue and ends with their expiration or revocation.
>
> **[3:53](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=233)** In the interim, they will be used by microservices to make access decisions and to establish end user identity.
>
> **[4:01](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=241)** Most events in this lifecycle are governed by well-defined industry standards like OAuth or jot, and you can find them implemented in open sourced and commercial IAM platforms.
>
> **[4:14](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=254)** Tokens fill the void in microservices where the session used to be in a monolith.
>
> **[4:19](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=259)** However, the trade-off is that tokens are much more difficult to manage.
>
> **[4:25](https://www.linkedin.com/learning/microservices-security/tokens?u=76281980&t=265)** In upcoming discussions, we'll layer in how various standards and cryptography are used to protect the integrity and confidentiality of tokens in microservice-based systems so that they can securely be used for access control.

> [!info]- Semantic Content
>
> **Env Vars:** json (3), iam (2), jwt (2), jose (1)
> **Definitions:** known as (2), is a  (2), is an  (1)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** pass (1), protected (1)
> **Speakers:** - [instructor] (1)

#### OAuth 2 primer
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=0)** - [Instructor] OAuth is an authorization standard that supports token based security approaches like those used for securing microservices.
>
> **[0:09](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=9)** OAuth can be a little complicated but it's really important to understand.
>
> **[0:13](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=13)** So we'll spend some time mastering the fundamentals before covering the details.
>
> **[0:19](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=19)** Let's start by diving into some OAuth two terminology that defines the four roles or actors that participate in token based access strategies.
>
> **[0:30](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=30)** First is the resource owner.
>
> **[0:32](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=32)** Think of this as the end-user who owns the information found in a microservice and can access it.
>
> **[0:39](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=39)** Next is the resource server which is the server hosting the API in front of the microservices.
>
> **[0:46](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=46)** The resource server makes a resource owner's information accessible if an access token is provided.
>
> **[0:55](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=55)** The authorization server is responsible for issuing that access token to a client and verifying the integrity of access tokens pass to the resource server.
>
> **[1:06](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=66)** Finally, the client is an application that accesses resources on behalf of a resource owner.
>
> **[1:13](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=73)** It is granted a token by the authorization server.
>
> **[1:18](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=78)** These roles are part of the OAuth two standard which describes the mechanism for clients to obtain and use an access token to achieve secure access to protected resources like our microservices.
>
> **[1:32](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=92)** How you access a hotel room is a great high level comparison to the mechanics of OAuth.
>
> **[1:39](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=99)** As a client of the hotel, you need to access a room that is owned by the hotel owner, who would be the resource owner.
>
> **[1:46](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=106)** The hotel staff at the front desk serves as the authorization server.
>
> **[1:51](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=111)** They ensure the hotel owner has authorized your stay usually by confirming your payment.
>
> **[1:57](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=117)** And if so, they issue a key card which is your token.
>
> **[2:02](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=122)** To access the room, which is the protected resource, you must swipe the key card or token against the lock, which acts as the resource server because it protects the room from unauthorized access.
>
> **[2:14](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=134)** If the key card is valid, your token grants you access to only your specific room for the length of your reservation.
>
> **[2:22](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=142)** And afterwards, the card is deactivated.
>
> **[2:26](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=146)** The hotel analogy is helpful but it can not reflect every exact detail of an OAuth flow.
>
> **[2:32](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=152)** The OAuth two standard specifies the details of each step in one of four flows a client can follow to be issued an access token containing specific scopes.
>
> **[2:45](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=165)** Each series of steps known as a grant type defines an ordered sequence of HTTPS calls that occur between the client, resource owner and authorization server.
>
> **[2:56](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=176)** When requesting this token, the client specifies a parameter that indicates the scope of the access request.
>
> **[3:04](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=184)** A scope is a protected action defined on an API that an end-user can authorize a client to perform on their behalf.
>
> **[3:13](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=193)** You can think of OAuth as a playbook and each grant type as a play that is best suited for certain scenarios.
>
> **[3:22](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=202)** One strength of the OAuth playbook is its flexibility, which it achieves through careful omission of certain implementation details.
>
> **[3:31](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=211)** For example, at points in the standard, it indicates a resource owner must be identified but it clearly states the authentication mechanism is beyond the scope of the specification.
>
> **[3:44](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=224)** It also avoids dictating the format of an access token, how a client registration occurs or how tokens should be verified.
>
> **[3:53](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=233)** Beyond the scope of the specification is littered throughout the standard.
>
> **[3:57](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=237)** But that's where the flexibility comes in.
>
> **[4:01](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=241)** These careful omissions in the OAuth standard allow it to act as a fill in the blank protocol where implementers can use their preferred techniques for areas the specification leaves open, such as authentication, client registration and token format.
>
> **[4:18](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=258)** To help fill in the blanks, the community surrounding OAuth has produced specifications like OpenID Connect, JWT, JWS and many others that extend or compliment the core OAuth standard.
>
> **[4:32](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=272)** When securing microservices using a token, the OAuth two family of specifications and a few others play a vital role.
>
> **[4:40](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=280)** The standards provide guidance on how to securely perform certain events throughout a token's life cycle.
>
> **[4:47](https://www.linkedin.com/learning/microservices-security/oauth-2-primer?u=76281980&t=287)** As we discuss access control strategies for microservices, we'll dive deeper into these standards and the role they play when integrating into our security platforms.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (3), let (1), pass (1), finally, (1)
> **Env Vars:** api (2), https (1), jwt (1), jws (1)
> **Definitions:** is an  (2), is a  (2), known as (1)
> **Documentation:** specification (3)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### OAuth in Microsoft Entra
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=0)** - [Instructor] In OAuth, key concepts, like the resource owner, resource server, clients, and authorization server form the backbone of how access control works.
>
> **[0:11](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=11)** In this lesson, we'll get hands-on to explore how some of these OAuth concepts come to life, using Microsoft Entra.
>
> **[0:19](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=19)** So we have those four basic building blocks in OAuth, like I mentioned, the authorization server, the resource owner, the resource server, and the client.
>
> **[0:30](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=30)** Now, within Entra, one of the major features of Microsoft Entra is that it serves as an authorization server according to the OAuth protocol.
>
> **[0:41](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=41)** That means it's capable of issuing and managing access tokens.
>
> **[0:46](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=46)** Now, just to get a glimpse of its support, let's head over here to the application section, and then we'll go to app registrations, and then we'll navigate to the endpoints tab.
>
> **[1:00](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=60)** Here, you'll notice in this panel, that we see some of the endpoints that are featured in the OAuth standard, and these endpoints can be used to orchestrate flows that obtain an access token.
>
> **[1:16](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=76)** Now we're going to save a deeper discussion of how tokens are issued for a more dedicated lesson because it's a bit involved.
>
> **[1:25](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=85)** Now let's move on to our next concept, the resource owner, and we've already covered a little bit about how this works in Entra.
>
> **[1:35](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=95)** Remember in the previous lesson where we have created this user, test user one?
>
> **[1:42](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=102)** Well, this user is going to work with different applications inside of our Azure tenant, and it's going to own various resources within those apps.
>
> **[1:53](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=113)** So for example, if our organization creates a messaging app, this user might own resources, like chat messages, that they're going to control the access to.
>
> **[2:06](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=126)** Now those chat messages or resources are going to live within the resource server.
>
> **[2:13](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=133)** Let's turn our attention to that concept.
>
> **[2:16](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=136)** This is going to be the microservice that's going to store the data of the resource owner, things like those chat messages.
>
> **[2:25](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=145)** Now, to register our microservice as a resource server within the authorization server, we can use an app registration within Microsoft Entra.
>
> **[2:36](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=156)** So let's go back to that section, and here we can begin the process of registering our microservice with Entra.
>
> **[2:47](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=167)** To do that, we just click on the new registration button, and then we provide a name for our application.
>
> **[2:54](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=174)** In this case, I'm going to call it the Chat Microservice, and then here, we'll need to specify what type of application this is.
>
> **[3:04](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=184)** Now, this application is going to be internal.
>
> **[3:07](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=187)** It will only be available for users of this organization.
>
> **[3:14](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=194)** So we're going to leave this setting, which specifies it as a single tenant app, in place.
>
> **[3:21](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=201)** All right, from there we can go ahead and click on the register button to create our new app registration.
>
> **[3:29](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=209)** Now there's some important information that we get on this essentials tab.
>
> **[3:35](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=215)** You'll notice this application or client ID.
>
> **[3:40](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=220)** This is the client ID that is specified within the OAuth standard.
>
> **[3:46](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=226)** So you'll want to take note of this.
>
> **[3:48](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=228)** It's an important piece of information, and you shouldn't confuse it with the object ID.
>
> **[3:53](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=233)** Those are two different things.
>
> **[3:55](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=235)** Now, the next thing we're going to do is create a scope for this microservice or resource server within Entra.
>
> **[4:03](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=243)** You'll recall that a scope is an action that the API exposes, so maybe something like an operation to get my messages from the microservice, or to save a new contact within the messaging microservice.
>
> **[4:21](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=261)** The purpose of a scope is to define some protected action that we use for authorization decisions.
>
> **[4:30](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=270)** To set up a scope in Entra, we can navigate to this expose and API operation blade.
>
> **[4:38](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=278)** And within this panel, you'll see the button to add a scope.
>
> **[4:42](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=282)** Go ahead and click on it, and you'll notice that Entra wants us first to create this application ID URI.
>
> **[4:52](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=292)** So this is kind of a prefix that all of our scopes created for this microservice will have.
>
> **[4:58](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=298)** You can almost think of it like a namespace or a qualifier for the microservice's scopes.
>
> **[5:06](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=306)** We're going to go ahead and accept the default here, so we will just save and continue.
>
> **[5:12](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=312)** And now we can proceed with creating our scope.
>
> **[5:15](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=315)** The first thing we need to do is provide our scope with a name.
>
> **[5:20](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=320)** I'm just going to call it chat.messages.
>
> **[5:23](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=323)** And then we need to specify who can authorize this scope for a client of our microservice.
>
> **[5:30](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=330)** In this case, we're going to allow both admins and users to authorize this scope.
>
> **[5:37](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=337)** And then finally, we just need to provide a small description for the scope so folks can understand what they are consenting to.
>
> **[5:46](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=346)** I'll just go ahead and specify read messages, and then I'm going to copy that for the display name and these descriptions.
>
> **[5:54](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=354)** You'll want to make sure that the scope is enabled for the app registration, and once all those things are in place, you can go ahead and click on this button to add a scope.
>
> **[6:06](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=366)** Excellent, there we can see our new scope and you can see that prefix, which is the app URI.
>
> **[6:15](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=375)** So that covers three of the four major building blocks of OAuth and how they materialize in Microsoft Entra.
>
> **[6:22](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=382)** Now we still need to discuss the final OAuth building block, which is the client.
>
> **[6:27](https://www.linkedin.com/learning/microservices-security/oauth-in-microsoft-entra?u=76281980&t=387)** That's where we're going to pick it up in our next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2), this. (1), protected (1), continue (1)
> **UI Navigation:** click on (4), navigate to (2), go to (1)
> **Env Vars:** api (2), uri (2)
> **Analogies:** for example (1), think of it like (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)

#### Register client applications
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=0)** - [Instructor] The final OAuth building block that we'll check out in Microsoft Entra is the client.
>
> **[0:06](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=6)** You'll recall the client is some application or service that wants to access the resource owners protected resources, which are held by the resource server, and that's our microservice.
>
> **[0:19](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=19)** Now, clients are also registered as app registrations in Microsoft Entra, similar to how our microservice was.
>
> **[0:27](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=27)** However, there's a few configurations that differ.
>
> **[0:31](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=31)** Let me show you what I mean.
>
> **[0:33](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=33)** We're going to begin registering our client by creating a new app registration.
>
> **[0:39](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=39)** The first thing we'll do is give our client a name, so I'm going to call it microservice-client.
>
> **[0:47](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=47)** We'll leave the single tenant option selected for the account type, and then we need to provide this configuration for the redirect URI.
>
> **[0:58](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=58)** This is a URI that's going to be used during OAuth flows to exchange information between the authorization server, Entra, and the client.
>
> **[1:10](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=70)** The first thing we need to do for the redirect URI is select the type of platform.
>
> **[1:16](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=76)** In this case, it's going to be web, and then here we provide the URI.
>
> **[1:21](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=81)** Now we're going to be conducting our OAuth flows on our local workstation, so I'm just going to specify localhost here.
>
> **[1:30](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=90)** All right. Once that's in place, we can go ahead and click this button to register our new client application, and you'll notice that it also gets an application or client ID.
>
> **[1:43](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=103)** This will be important during our OAuth flows.
>
> **[1:47](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=107)** Now we're going to add some permissions to this client application to allow it to access the scope that we created on our microservices.
>
> **[1:58](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=118)** To do that, we come over here to API permissions, and then we click on this button to add a permission for our app registration.
>
> **[2:09](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=129)** This will open a panel that displays all of the applications used within our organization's tenant.
>
> **[2:18](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=138)** Now, to find our microservice that we registered previously, select this API's my organization uses option, and then here, just type chat, and that will filter to our chat microservice.
>
> **[2:33](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=153)** Now, once we select that, we can see the scope that we created on that microservices app registration.
>
> **[2:42](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=162)** So click on this and hit add permissions, and now you'll see that scope appear within the API permissions of our clients.
>
> **[2:54](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=174)** Now, for this permission, I'm going to consent as an administrator for all of the users within the tenant by clicking this grant admin consent button.
>
> **[3:06](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=186)** Once I do that, it's going to allow this client application to access the chat messages of all the users within this organization.
>
> **[3:16](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=196)** The final configuration we'll need to put in place is a client secret.
>
> **[3:21](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=201)** It's a credential this client is going to use to authenticate with the authorization server.
>
> **[3:27](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=207)** To put that in place, we'll click on the certificates & secrets blade, and then we'll click this button to create the new client secret.
>
> **[3:36](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=216)** It's going to open this dialogue over on the right hand side, and we can add a description for the secret.
>
> **[3:43](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=223)** I'll just say it's the client secret, and then we can go ahead and click on the add button and the secret will be generated for us.
>
> **[3:53](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=233)** Now, you'll notice the value for this secret is displayed right here.
>
> **[3:57](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=237)** At this point, you want to copy this secret because you will not have access to it.
>
> **[4:02](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=242)** Again, this is a credential and it should be handled securely.
>
> **[4:07](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=247)** Let me go ahead and store that away.
>
> **[4:10](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=250)** All right, so that covers the final building block of OAuth and how it works within Microsoft Entra.
>
> **[4:18](https://www.linkedin.com/learning/microservices-security/register-client-applications?u=76281980&t=258)** Let's move on to our next lesson where we'll see the role that these building blocks play when we orchestrate OAuth flows.

> [!info]- Semantic Content
>
> **Env Vars:** uri (4), api (3)
> **Code Keywords:** let (3), protected (1), type, (1), case, (1)
> **UI Navigation:** click on (4), select the (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Issuing tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=0)** - [Instructor] Being issued an access token is the first step for clients that need to securely access a microservice.
>
> **[0:07](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=7)** Tokens are issued to a client after a series of calls are orchestrated between the resource owner, the client application and the authorization server.
>
> **[0:17](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=17)** The first part of this exchange is very important because the resource owner authenticates with the authorization server using their credentials.
>
> **[0:26](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=26)** Then the resource owner consents to the client, accessing their protected resources.
>
> **[0:32](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=32)** This causes the authorization server to create or mint an access token that is provided to the client.
>
> **[0:40](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=40)** If the access token is a reference token, it must be stored at this point in time.
>
> **[0:45](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=45)** Let's highlight a few key points and advantages of this exchange.
>
> **[0:50](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=50)** First, the microservice is not required to store user credentials because authentication is handled centrally by the authorization server.
>
> **[1:00](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=60)** The client never handles the credentials either because they are only provided to the authorization server.
>
> **[1:06](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=66)** This prevents a password from being stolen from a client that stores it.
>
> **[1:11](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=71)** It also avoids a lot of issues with information confidentiality and integrity.
>
> **[1:17](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=77)** For example, if a client uses the resource owners credentials, the system cannot distinguish between the two of them.
>
> **[1:25](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=85)** This complicates how system actions can be attributed to the end-user.
>
> **[1:30](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=90)** To understand the exact details of how tokens can be issued, the OAuth two framework specifies four grant types.
>
> **[1:38](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=98)** We'll dive into the details of the two most commonly used for microservices, the authorization code grant and the client credentials grant.
>
> **[1:48](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=108)** Both grant types define HTTPS calls to specific end points expected on the authorization server that are used by the client in the process of obtaining a token.
>
> **[2:00](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=120)** Before this takes place, the client and it's a redirect URI are expected to be registered with the authorization server.
>
> **[2:09](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=129)** Registration is completed by the developer of the client application, using a registration form in the developer portal.
>
> **[2:17](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=137)** Once the form is completed, a client ID and client secret will be issued to the application.
>
> **[2:23](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=143)** The client's credentials in a redirect URI are used by the authorization server to authenticate the client and prevent against redirection attacks.
>
> **[2:33](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=153)** Once these prerequisites are satisfied, clients can complete the sequence of HTTPS calls for authorization flows, like the authorization code grant.
>
> **[2:44](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=164)** The flow starts when the resource owner visits the client website within their browser.
>
> **[2:49](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=169)** The browser then redirects the client to the authorization end point on the authorization server.
>
> **[2:56](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=176)** In the redirect, it passes a response type parameter to indicate it's an authorization code grant.
>
> **[3:03](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=183)** It also passes the client ID, the redirect URI, the requested scope and a state parameter to protect against CSRF.
>
> **[3:12](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=192)** If the resource owner is not authenticated, they will be prompted to supply their credentials within a log in page provided by the authorization server, which will be used to confirm their identity.
>
> **[3:24](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=204)** After being authenticated, they will be asked to grant the client the requested permissions or scopes.
>
> **[3:30](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=210)** After they have granted permission via consent page provided by the authorization server, the authorization server will redirect the resource owner's browser back to the client's redirect URI with an authorization code.
>
> **[3:46](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=226)** From there, the client will send an HTTP post to the token endpoint on the authorization server with the authorization code it received.
>
> **[3:56](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=236)** Other parameters like its client ID and client secret will also be sent.
>
> **[4:01](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=241)** In the response to the post request, the authorization server will supply the client with an access token that can be used by the client to access resources on the API.
>
> **[4:13](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=253)** Identity and access management platforms will expose the necessary authorization and token end points as part of their authorization server implementations.
>
> **[4:24](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=264)** These allow clients to directly orchestrate authorization flows with the server.
>
> **[4:30](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=270)** Some IAM platforms we'll build a product over top of these flows to shield first-party clients from the complexity of them.
>
> **[4:39](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=279)** Now let's turn our attention to the client credentials grant.
>
> **[4:43](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=283)** This grant is used to obtain an access token for machine to machine scenarios and it's much easier to orchestrate.
>
> **[4:50](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=290)** In this flow, a registered client simply post their client ID and secret to the token endpoint, along with the specified grant type.
>
> **[5:00](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=300)** In the response, the authorization server returns an access token that can be used to access a microservice.
>
> **[5:07](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=307)** The OAuth's standard prescribed secure tactics for clients to obtain tokens that are issued to access protected resources.
>
> **[5:15](https://www.linkedin.com/learning/microservices-security/issuing-tokens?u=76281980&t=315)** The flexibility of the standard allows IAM platforms to implement variants of the authorization server that can meet the security needs of both builders and consumers of microservices.

> [!info]- Semantic Content
>
> **Env Vars:** uri (4), https (2), iam (2), csrf (1), http (1)
> **Code Keywords:** protected (2), let (2), type. (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Work with OAuth 2.0 endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=0)** - [Instructor] To get a better sense of how an OAuth flow works, we're going to secure and access a small .NET microservice.
>
> **[0:09](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=9)** For our example, I built a small web API that returns a user's chat messages, which are stored in a SQL server database.
>
> **[0:19](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=19)** So, this is the microservice that we registered in Microsoft Entra, and now we will implement token-based authorization for it.
>
> **[0:28](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=28)** .NET Has great integration with Microsoft Entra that makes it really simple to achieve that for a microservice.
>
> **[0:37](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=37)** If you've worked with any web framework before, you're probably familiar with the concept of a controller, or something similar that processes a web request.
>
> **[0:48](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=48)** Here, in this controller, you'll notice we defined these two annotations, authorize and required scope.
>
> **[0:57](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=57)** These allow our microservice to authorize incoming requests using an access token.
>
> **[1:03](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=63)** The authorized attribute will cause .NET to validate the token it receives from the client, and then, the required scope attribute points to a scope's property that's defined in our app settings.json configuration file, which we can see over here.
>
> **[1:25](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=85)** In this file, we've configured the scope property to require that clients accessing the web API have been authorized for the chat.messages scope that we set up for the chat microservice.
>
> **[1:39](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=99)** You'll also notice that we provide the client ID of the chat microservice, and its Azure tenant ID.
>
> **[1:47](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=107)** We've obtained all of these values from the app registration page for the chat microservice that's located within the Azure portal.
>
> **[1:57](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=117)** You can see them all over here.
>
> **[1:59](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=119)** So, now everything is in place for this microservice to use tokens to ensure only authorized access is permitted to the chat messages.
>
> **[2:11](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=131)** Let's now shift our attention to the client.
>
> **[2:15](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=135)** The client is going to access those resources on behalf of the resource owner.
>
> **[2:22](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=142)** To do that, it needs to obtain an access token that it can include with the request to our chat microservice.
>
> **[2:31](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=151)** To demonstrate this flow, I'm going to use a REST client named Insomnia.
>
> **[2:36](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=156)** Here, in Insomnia, I've created a GET request against the messages operation on our chat microservice.
>
> **[2:45](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=165)** Now, within the auth tab, we've set up the configuration values that we'll need to retrieve an access token via an OAuth authorization code flow.
>
> **[2:58](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=178)** Now, within the auth tab of the request, we've provided the necessary configuration values to retrieve an access token via an OAuth authorization code flow.
>
> **[3:11](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=191)** You'll recognize the fields on this tab from our discussion of the authorization code grant.
>
> **[3:18](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=198)** There is the authorization URL, where the user will grant permission for the client to access their resources.
>
> **[3:26](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=206)** And then, you'll notice the token URL, where the client is going to exchange the code return to the redirect URI for an access token.
>
> **[3:36](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=216)** Now both of these standard OAuth URLs are available in the Azure portal on the app registration page that we saw before.
>
> **[3:45](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=225)** To find them, just look through the URLs on this page and locate the ones that apply.
>
> **[3:53](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=233)** So, here is the OAuth 2 authorization endpoint, and you'll want to be using V2.
>
> **[4:00](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=240)** And if we come down here, we can see the token endpoint for OAuth.
>
> **[4:05](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=245)** To configure the authorization code flow, we also need to provide the client ID and the client's secret for the client.
>
> **[4:14](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=254)** These values are used by the client to authenticate itself with the authorization server when requesting an access token on behalf of a user.
>
> **[4:24](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=264)** To find the client ID, navigate to the app registrations page for the microservice client.
>
> **[4:31](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=271)** And then you can see here, the value for the application client ID.
>
> **[4:37](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=277)** Now, we also configured a secret for this client, and I've used variables here in Insomnia to supply them, but you can directly paste those values into these fields in order to authenticate the client.
>
> **[4:53](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=293)** Just be careful that you pick the right values within the app registrations page, because it's easy to confuse them.
>
> **[5:00](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=300)** You'll also notice that, within Insomnia, we provided two other values.
>
> **[5:05](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=305)** One is the redirect URI of our microservice client, and the other is the scope that we created on the chat microservice for reading messages.
>
> **[5:18](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=318)** Okay, so that's where to look in Entra to find all of these configuration values that you'll need for the flow.
>
> **[5:25](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=325)** Let's go ahead and we can test this out.
>
> **[5:28](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=328)** Imagine that our Insomnia client is actually some web application that's being used by the test user we created earlier in Microsoft Entra.
>
> **[5:40](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=340)** When the user hits the web app, the client's going to initiate the authorization code flow to get the user's consent to access their messages stored on the microservice.
>
> **[5:52](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=352)** So, let me go ahead and submit the request to begin the flow.
>
> **[5:56](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=356)** And, once we kick this off, you're going to notice a few things.
>
> **[6:00](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=360)** First, Entra requires our test user to authenticate.
>
> **[6:05](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=365)** It needs to establish its identity.
>
> **[6:08](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=368)** So, let's go ahead and we can log in as our test user.
>
> **[6:22](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=382)** Okay, now, once we are authenticated, the OAuth flow can continue, and you'll notice down here that we have obtained this access token.
>
> **[6:35](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=395)** And if we look at the timeline, we can see the different requests in the flow and how they occurred.
>
> **[6:42](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=402)** And when we get to the bottom of this chain of requests, you'll see the final response that provides the access token here.
>
> **[6:51](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=411)** Now, if we look at the preview, we can see that our microservice client was able to successfully retrieve the chat messages.
>
> **[7:01](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=421)** And here, in the console, you can see where it passed the access token as a bearer token to our chat microservice.
>
> **[7:12](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=432)** So, that's a quick look at the OAuth authorization code flow in action.
>
> **[7:17](https://www.linkedin.com/learning/microservices-security/work-with-oauth2-endpoints?u=76281980&t=437)** You'll notice we lean quite a bit on the support provided by our IAM platform and the REST client to orchestrate this flow.

> [!info]- Semantic Content
>
> **Env Vars:** net (3), api (2), rest (2), url (2), uri (2)
> **Tools:** insomnia (5), azure portal (2)
> **Code Keywords:** let (4), require (1), continue (1)
> **Prerequisites:** set up (2), configure (1), you'll need (1)
> **CLI Commands:** find (3)
> **File Paths:** settings.json (1)
> **API Endpoints:** get  (1)
> **Cross-References:** earlier in (1)

#### Issuing identity tokens with OIDC
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=0)** - [Instructor] The OAuth two standard does leave a bit of a gap because it's solely focused on authorization.
>
> **[0:06](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=6)** The standard does not provide any guidance on how to identify or authenticate end-users.
>
> **[0:13](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=13)** To fill this gap, OpenID Connect was introduced.
>
> **[0:17](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=17)** OpenID Connect is a thin identity layer that sits on top of OAuth.
>
> **[0:22](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=22)** The standard describes how capabilities like authentication and user profile information are delivered using an authentication request, an ID token and a user info endpoint.
>
> **[0:34](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=34)** OpenID Connect or OIDC, establishes a standalone identity provider that is separate from the client application.
>
> **[0:43](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=43)** The architecture allows multiple client applications to leverage the same identity service for authentication.
>
> **[0:51](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=51)** This is opposed to each one building their own and storing credentials.
>
> **[0:55](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=55)** You've probably seen this scenario before.
>
> **[0:59](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=59)** Organizations like LinkedIn, Google or Facebook allow applications they don't own to use their identity provider.
>
> **[1:07](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=67)** If you've ever used a sign in with button, you've seen OpenID Connect in action.
>
> **[1:12](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=72)** The standard is also used in enterprise scenarios, where identity providers are used to authenticate users for an organization's entire suite of applications.
>
> **[1:23](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=83)** When we refer to an identity provider, we're referring to an authorization server that meets OIDC standards.
>
> **[1:32](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=92)** To satisfy these standards, authorization servers must expose a new user info endpoint, in addition to the authorization and token endpoints specified in the OAuth two specification.
>
> **[1:45](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=105)** This endpoint allows the client to pass an access token to it and in return, provides identity information about the resource owner.
>
> **[1:55](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=115)** OpenID Connect also returns a new structured ID token, in addition to the access token from the token endpoint.
>
> **[2:03](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=123)** It contains standard claims about the authentication event and the user's identity represented in a jot.
>
> **[2:11](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=131)** The authorization code flow only changes slightly within OIDC.
>
> **[2:16](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=136)** There's just a few key additions.
>
> **[2:19](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=139)** In the initial redirect, the client adds the OpenID scope to create an authentication request.
>
> **[2:26](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=146)** The redirect sends the resource owner to the identity provider where they're authenticated and consent to the client accessing their profile.
>
> **[2:35](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=155)** After this, the flow continues just like it does in regular OAuth.
>
> **[2:41](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=161)** And the authorization code is provided to the client.
>
> **[2:45](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=165)** Finally, when the client exchanges the authorization code with the identity provider, it receives an ID token, in addition to the access token.
>
> **[2:56](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=176)** The identity token, which is in jot format, contains a standard set of claims that provide information regarding the authentication event, the token issuer, the end-user and the token expiration.
>
> **[3:09](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=189)** There's also three optional claims that can be included.
>
> **[3:13](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=193)** Since the ID token is a jot, it contains a cryptographic signature that protects the token from being tampered with.
>
> **[3:21](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=201)** Identity tokens should only be used by clients and should not be used for API access.
>
> **[3:28](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=208)** To establish user identity within a microservice, the access token can be passed to the identity provider's user info endpoint to receive claims with information about the end-user.
>
> **[3:42](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=222)** This allows the micro-service to get information about the end-user.
>
> **[3:48](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=228)** To see OpenID connect in action, we can use the OpenID Connect playground provided by AuthO.
>
> **[3:56](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=236)** This tool allows us to step through each request in the open ID connect authentication flow.
>
> **[4:02](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=242)** The authentication flow is very similar to OAuth's authorization code flow.
>
> **[4:08](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=248)** There's just a few key differences.
>
> **[4:11](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=251)** Here we see the first step in the authentication flow, which is to create an authentication request.
>
> **[4:18](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=258)** To do that, we need to make sure that we specify the OpenID scope within the request.
>
> **[4:25](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=265)** This prompts the identity provider to authenticate the end-user.
>
> **[4:30](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=270)** We're also able to provide more granular scopes, like profile, email, phone and address.
>
> **[4:36](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=276)** These are going to provide the client with access to information on the end-user's profile.
>
> **[4:44](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=284)** So once we've constructed the authentication request, we can send it to the authorization endpoint.
>
> **[4:50](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=290)** This is going to redirect the end-user and cause them to authenticate.
>
> **[4:56](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=296)** So here, I'm going to authenticate with Google, using an account that I created specifically for the situation.
>
> **[5:04](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=304)** So we'll just enter in the credentials.
>
> **[5:09](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=309)** Okay, now after we authenticate, a code is returned back to the client.
>
> **[5:15](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=315)** The client can then exchange that code for an access token and an ID token.
>
> **[5:22](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=322)** So let's go ahead and we're going to perform that exchange.
>
> **[5:26](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=326)** And you'll notice that when we get the response back, we get an ID token and then, there's also an access token.
>
> **[5:35](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=335)** Now, if we take a closer look at the ID token, you'll notice it starts with EYJ, that's a jot.
>
> **[5:42](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=342)** Once we hit next, we're given the opportunity to verify the ID token.
>
> **[5:48](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=348)** We can see that it was signed using the HS256 algorithm.
>
> **[5:52](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=352)** So if we click on the verify button, we can verify the integrity of the claims within that jot.
>
> **[6:00](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=360)** And we're also able to see them decoded.
>
> **[6:04](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=364)** So if we take a look at those claims, you'll see information about the end-user.
>
> **[6:08](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=368)** You can see when they were authenticated, you can see the client that sent them there and then you're going to get the standard OpenID Connect claims, here towards the bottom.
>
> **[6:19](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=379)** So you can see how OpenID Connect augments OAuth to provide a useful identity layer on top of the protocol.
>
> **[6:26](https://www.linkedin.com/learning/microservices-security/issuing-identity-tokens-with-oidc?u=76281980&t=386)** The capabilities that are provided by this layer, especially the identity token and user info endpoint, provide an extremely useful specification for establishing a user context across microservices.

> [!info]- Semantic Content
>
> **Env Vars:** oidc (3), api (1), eyj (1), hs256 (1)
> **Code Keywords:** pass (1), return, (1), this, (1), finally, (1), let (1)
> **Documentation:** specification (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Token validation
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=0)** - [Instructor] Tokens are sensitive pieces of information that must be validated because they grant access to the microservices that sit behind an API.
>
> **[0:10](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=10)** In a token-based security scheme, the token is held by the client between requests and it is passed to the resource server with each request.
>
> **[0:19](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=19)** The resource server cannot blindly trust every token it receives because an attacker may have stolen and tampered with it.
>
> **[0:27](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=27)** In order to make an access control decision, a microservice must validate the authenticity of the token.
>
> **[0:35](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=35)** The measures used to verify a token depend upon the type of the token.
>
> **[0:40](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=40)** If the token is a reference token, it needs to be introspected at the authorization server.
>
> **[0:46](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=46)** Meaning we send it back to the authorization server to learn more about the state of the token or in simple terms, we learn if it's valid.
>
> **[0:55](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=55)** The OAuth 2.0 token Introspection Standard is an extension of OAuth that governs this process.
>
> **[1:02](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=62)** If using introspection, it's best to centralize this feature at the API gateway.
>
> **[1:07](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=67)** It's also important that the authorization server has clustering and caching in place so that it can scale to meet heavy loads.
>
> **[1:17](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=77)** Validating and protecting structured tokens is a much deeper and more complicated space, which is defined by the JSON object signing and encryption specifications.
>
> **[1:28](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=88)** These are also known as JOSE.
>
> **[1:30](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=90)** JOSE is a group of four specifications that work together to ensure the integrity and confidentiality of a token by providing instructions for how to sign and encrypt them.
>
> **[1:41](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=101)** JSON web token defines the token structure and it's at the core of the JOSE specifications.
>
> **[1:48](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=108)** The JSON web signature specification outlines the steps required to create the JWT signature which further references the JSON web algorithms and JSON web key standards.
>
> **[2:01](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=121)** If you need to encrypt the JWT to protect sensitive claims, you can use the JSON web encryption standard.
>
> **[2:09](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=129)** The easiest way to understand the JOSE specifications is to see them in action.
>
> **[2:14](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=134)** So we're going to use a tool provided by the [jwt.io](https://jwt.io) website in order to take a closer look.
>
> **[2:21](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=141)** If we navigate down to the middle of the page, we'll see the tool.
>
> **[2:25](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=145)** It allows us to encode and decode a JWT.
>
> **[2:29](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=149)** Now, if you take a look at the left side of the screen, you'll see your first JWT.
>
> **[2:33](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=153)** And it's easy to tell it's a JWT because of the first three characters EYJ.
>
> **[2:39](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=159)** JWTs are Base64 URL encoded.
>
> **[2:41](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=161)** So it's going to look like a random string of characters, but EYJ is the Base64 encoding for an opening curly brace and a quotation mark which are the characters that all JWTs start with.
>
> **[2:55](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=175)** So if you see that, you're most likely working with a JWT.
>
> **[2:59](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=179)** Now, if we look at this dropdown at the top of the page, you're going to see a list of algorithms.
>
> **[3:05](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=185)** These come from the JSON Web algorithm specification and these are the options that we have for signing the JWT.
>
> **[3:14](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=194)** In general, each of the algorithms uses the same computation to create the signature with just some different inputs.
>
> **[3:22](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=202)** It takes the header and Base64 URL encodes it, concatenates it with a period.
>
> **[3:28](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=208)** And then Base64 URL encodes the payload, and concatenates that.
>
> **[3:33](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=213)** It then takes a key which it uses for the algorithm that computes the signature and that gets appended to the end of the JWT.
>
> **[3:44](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=224)** Let's take a look at this in action.
>
> **[3:46](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=226)** So we're going to use the HS256 algorithm that is specified at the top of the page by default.
>
> **[3:54](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=234)** This is a symmetric key algorithm.
>
> **[3:57](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=237)** So it's going to use the same key in order to create the signature as it's going to use to verify it.
>
> **[4:05](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=245)** So let's just enter a really simple key here.
>
> **[4:08](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=248)** I'm going to name it Mykey and then I'm going to change the JWT just a little bit.
>
> **[4:14](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=254)** You'll notice it's changing on the left-hand side as it creates the new JWT.
>
> **[4:20](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=260)** So let's put my name there.
>
> **[4:22](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=262)** You can put yours if you would like.
>
> **[4:24](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=264)** But in the end, we wind up with this new token.
>
> **[4:28](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=268)** Go ahead and copy that token.
>
> **[4:31](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=271)** Don't forget your key and then hit the refresh key.
>
> **[4:36](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=276)** So a JWT allows us to verify that the token has not been tampered with, as it goes from one party to another.
>
> **[4:45](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=285)** So let's imagine that we're the party receiving this JWT.
>
> **[4:49](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=289)** And let's say that we put the wrong key in here.
>
> **[4:53](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=293)** And then we paste the JWT into the tool.
>
> **[4:59](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=299)** You'll notice at the bottom, it's going to alert us to the fact that the signature is invalid.
>
> **[5:05](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=305)** So let's run this scenario again and I'm going to refresh the page and then hopefully I'll remember my key.
>
> **[5:13](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=313)** So let's put it into the bottom of the page where the signature is verified.
>
> **[5:19](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=319)** And now I'm going to go ahead and paste the JWT one more time.
>
> **[5:23](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=323)** You'll notice this time, the signature verifies.
>
> **[5:27](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=327)** Now, depending upon which algorithm you use, you might need a different key.
>
> **[5:32](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=332)** So if we take a look at an RS256 algorithm you'll notice it's going to look for a public and private key.
>
> **[5:41](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=341)** So you'll need those to create the signature.
>
> **[5:44](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=344)** Now, if you receive this JWT, you're going to need the public key in order to verify the signature.
>
> **[5:52](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=352)** And one way that's provided by an identity provider is through a JSON web key set that's typically exposed via an endpoint.
>
> **[6:00](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=360)** We can take a look at an example.
>
> **[6:02](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=362)** This is the JSON web key set from Auth0 from one of the demonstrations they provide.
>
> **[6:08](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=368)** Now, it looks a little bit cryptic.
>
> **[6:10](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=370)** So what I'm going to do, is take the JSON and go over to a lina.
>
> **[6:14](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=374)** And then here, I'm going to validate the JSON.
>
> **[6:18](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=378)** And you'll notice that we get this array of keys.
>
> **[6:22](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=382)** So this is a JSON web key set and inside that array, is a JSON web key.
>
> **[6:27](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=387)** These are all specified in the specifications that accompany JOSE.
>
> **[6:34](https://www.linkedin.com/learning/microservices-security/token-validation?u=76281980&t=394)** If you receive a JWT and you have the JSON web key set, you can go ahead and select the corresponding key and use that to verify the signature to ensure the JWT hasn't been tampered with.

> [!info]- Semantic Content
>
> **Env Vars:** jwt (17), json (14), jose (5), url (3), api (2)
> **Code Keywords:** let (7), public (2), default. (1), private (1)
> **Definitions:** is a  (6), is an  (1), known as (1)
> **Documentation:** specification (2)
> **UI Navigation:** dropdown (1), select the (1)
> **Best Practices:** it's best to (1), don't forget (1)
> **Prerequisites:** required to (1), you'll need (1)
> **CLI Commands:** make (1)

#### Token maintenance and protection
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=0)** - [Instructor] After a token has been issued, a few maintenance activities may take place before the token reaches its end of life.
>
> **[0:08](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=8)** To help manage these activities, the identity and access management platform may add some token management features that are optional or not completely defined for authorization servers in the OAuth specification.
>
> **[0:23](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=23)** In the best case scenario, a token is used for appropriate access by a client until it reaches its expiration date.
>
> **[0:31](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=31)** At this point, it no longer can be used for access to a microservice.
>
> **[0:36](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=36)** This is typically achieved by setting an expires in claim on the access token or storing information regarding its expiration date.
>
> **[0:46](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=46)** In general, it is best to keep the access token short-lived, so that if it were to be compromised, it doesn't provide access for a long period of time.
>
> **[0:56](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=56)** In some scenarios, clients may be provided with a refresh token that allows them to obtain a new access token without the resource owner involved.
>
> **[1:07](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=67)** This is helpful when the client needs to access information when the resource owner is offline.
>
> **[1:14](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=74)** Now there's one big problem with refresh tokens.
>
> **[1:16](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=76)** If they're stolen, they're very similar to a password.
>
> **[1:21](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=81)** To help mitigate the threat of a stolen refresh token, they can be rotated by issuing a new refresh token every time an access token is obtained using a refresh token.
>
> **[1:33](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=93)** They just continue to rotate.
>
> **[1:35](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=95)** In the worst case scenario, access tokens or refresh tokens are compromised, because they're not well-protected, and they need to be revoked.
>
> **[1:44](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=104)** This is not an easy task, because it requires tokens to be persisted into storage and may require all tokens consented to by a user to be revoked.
>
> **[1:55](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=115)** If tokens are not stored, it may not be possible to revoke them until all of the tokens have expired.
>
> **[2:04](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=124)** In other situations, revocation can occur naturally, like when a logout occurs.
>
> **[2:09](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=129)** Sometimes a client is unregistered, or a resource owner revokes a client's access to their resources.
>
> **[2:18](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=138)** To support these scenarios, the token revocation specification extends OAuth by introducing an endpoint that allows a token to be revoked.
>
> **[2:28](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=148)** After the token's revoked, it can no longer be used.
>
> **[2:32](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=152)** Finally, let's just cover a few general best practices for working with tokens.
>
> **[2:38](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=158)** It's almost a universal standard at this point, but I do want to point out that all of the calls that we talked about in OAuth should take place over TLS to prevent credentials or tokens from being compromised.
>
> **[2:51](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=171)** You should never transport any of this information in the clear.
>
> **[2:55](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=175)** Additionally, tokens should be protected like passwords, because anybody with access to a token can access a microservice.
>
> **[3:03](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=183)** The same sort of protection should apply to the client ID and client secret issued to a client.
>
> **[3:10](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=190)** Also, be sure to include an expiration date on every access token, keep the expiration short, and use refresh tokens if necessary.
>
> **[3:20](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=200)** Without an expiration, you could be issuing access to a resource forever, which is not ideal.
>
> **[3:26](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=206)** Finally, don't include highly sensitive information inside the payload of a token that leaves your control.
>
> **[3:33](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=213)** If you need to access sensitive information from a microservice, there's patterns that can be used to secure the information.
>
> **[3:42](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=222)** We've discussed the general purpose of tokens, their life cycle, and a few best practices.
>
> **[3:47](https://www.linkedin.com/learning/microservices-security/token-maintenance-and-protection?u=76281980&t=227)** Understanding how they are used, when they are used, and the different standards that apply will allow you to be certain your microservices are securely using them.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (2), finally, (2), continue (1), require (1), extends (1)
> **Documentation:** specification (2)
> **Env Vars:** tls (1)
> **Cross-References:** we talked about (1)
> **Analogies:** similar to (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)


### 4. Security between Microservices

#### MTLS
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=0)** - [Instructor] Identity plays an important role in digital security and microservices are not an exception.
>
> **[0:06](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=6)** Some microservice security schemes choose to simply trust the network after a request has passed a certain point in the architecture.
>
> **[0:16](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=16)** Services within a certain segment of the network are simply permitted to call each other without any scrutiny of the request or identification of the calling party.
>
> **[0:27](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=27)** This breaks the important concept of defense in depth and creates a major vulnerability if an attacker breaches the network because they now have unimpeded access to the microservices in a deployment.
>
> **[0:40](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=40)** Large segments of the network shouldn't be established as trust boundaries.
>
> **[0:45](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=45)** Instead, the trust boundary should be the microservice itself.
>
> **[0:50](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=50)** The microservice should not trust any external information or parties by default.
>
> **[0:55](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=55)** Instead, the microservice should verify the identity of any calling party and the integrity of the information it receives.
>
> **[1:04](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=64)** This is the concept of zero trust and we can incorporate it into how our microservices communicate to add some depth to our defense.
>
> **[1:13](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=73)** Digital certificates are the most common way to assert the identity of a digital entity.
>
> **[1:20](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=80)** A digital certificate contains information that identifies an entity, a public key and information regarding the certificate authority that issued it.
>
> **[1:30](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=90)** in transport layer security or TLS, a digital certificate and PKI allow two parties to communicate information via an encrypted channel.
>
> **[1:41](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=101)** This is established using a certificate and an encryption key that are exchanged.
>
> **[1:46](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=106)** In the scenario, it's only one way authentication using the certificate because the server hasn't verified the identity of the client using its digital cert.
>
> **[1:57](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=117)** It's only the client that verifies the server's identity, checking that its certificate was issued by a trusted list of certificate authorities maintained in the browser.
>
> **[2:09](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=129)** You've most likely seen this in your browser when visiting a sensitive website, like an online banking platform.
>
> **[2:17](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=137)** A little lock displaced to the left of the URL, where you can see the website cert.
>
> **[2:22](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=142)** The digital certificate allows you to verify that it's actually your bank's website and not a spoof site that tends to steal your credentials.
>
> **[2:32](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=152)** Because our browser trusts the certificate authority that issued the bank cert, we know the site can be trusted.
>
> **[2:40](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=160)** Additionally, it's an indicator that our browser is communicating with the web server securely over TLS.
>
> **[2:47](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=167)** So we can be sure that any information we send is not in clear text.
>
> **[2:53](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=173)** To secure microservices, we can take the concept of TLS one step further by implementing mutual TLS.
>
> **[3:01](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=181)** When using mutual TLS, both parties authenticate by providing their digital certificate that was issued by a mutually trusted certificate authority before the secure channel is established.
>
> **[3:15](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=195)** Mutual TLS is one of the most common approaches for securing microservices use today.
>
> **[3:21](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=201)** It allows the services to identify each other and be confident in each other's identity before communicating.
>
> **[3:29](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=209)** When using mutual TLS, each microservice is deployed with a certificate and private and public key pair that allows them to identify each other when they communicate and to establish secure connections.
>
> **[3:43](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=223)** Additionally, mutual TLS should be used to secure the communication between the API gateway and the microservice deployment.
>
> **[3:51](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=231)** This adds an extra level of protection because if an attacker found their way into the network, they couldn't call a microservice without a trusted digital certificate.
>
> **[4:02](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=242)** This is the depth in our defense.
>
> **[4:05](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=245)** One of the challenges with mutual TLS is management and provisioning of the certificates.
>
> **[4:11](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=251)** Most microservices are hosted in a femoral containers that will spin up and down on a whim.
>
> **[4:17](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=257)** So provisioning a certificates needs to be automated.
>
> **[4:21](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=261)** There is also the problem of how we rotate certificates that are about to expire.
>
> **[4:26](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=266)** This should also be handled via automation because of the number of instances we can spin up of a microservice.
>
> **[4:34](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=274)** While this may seem overwhelming, there are container orchestrators and service meshes that have built in features for managing mutual TLS.
>
> **[4:44](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=284)** Configuring mutual TLS capabilities adds another layer of security to your microservices that is extremely effective and worth the effort.
>
> **[4:53](https://www.linkedin.com/learning/microservices-security/mtls?u=76281980&t=293)** If you choose to trust the network, be aware you're putting your microservices at risk.

> [!info]- Semantic Content
>
> **Env Vars:** tls (11), pki (1), url (1), api (1)
> **Code Keywords:** public (2), default. (1), assert (1), private (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Securing east to west traffic
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=0)** - [Instructor] Well-designed microservices are created with the single responsibility pattern in mind.
>
> **[0:05](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=5)** They do one thing and they do it well.
>
> **[0:08](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=8)** And hearing to this principle creates the need for microservices to consume other microservices.
>
> **[0:14](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=14)** This generates East, West traffic inside of the cluster of services.
>
> **[0:19](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=19)** The sideways traffic between the microservices creates new security considerations, such as how we identify a user and how we make access decisions within the cluster of services.
>
> **[0:32](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=32)** Let's consider a simple e-commerce scenario where a customer is placing an order.
>
> **[0:38](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=38)** We'll assume the customer has already authenticated and the client owned by the e-commerce company is holding a valid access token.
>
> **[0:46](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=46)** To place the order, the order service will need to call the payment service, which can issue a financial transaction using the account details of the customer who is our resource owner.
>
> **[0:58](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=58)** One anti-pattern is to use a single access token with a shared scope that allows access to both services.
>
> **[1:06](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=66)** This isn't ideal because it starts to form a distributed monolith where the scopes use to protect both services must align and we start to build tight coupling.
>
> **[1:17](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=77)** We also violate the concept of lease privilege because the access token could be used to call the more sensitive payment service directly by the client or even the resource owner who has access to the access token.
>
> **[1:32](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=92)** One strategy to avoid this situation is for the order service to perform a client credentials grant to obtain a new access token prior to calling the payment service.
>
> **[1:43](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=103)** This allows the order service and the payment service to have decoupled scopes.
>
> **[1:49](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=109)** The new access token with the payment scope is only held by the order service which avoids providing the client with elevated access.
>
> **[1:58](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=118)** Unfortunately, while this approach is somewhat better it still takes us closer to a distributed monolith.
>
> **[2:05](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=125)** Without the original tokens, the payment service has no awareness of the end user's identity.
>
> **[2:12](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=132)** It is forced to defer access control decisions to the order service because the order service can obtain the identity of the end user using something like the sub-claim on a JWT or using the OIDC user info endpoint.
>
> **[2:29](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=149)** Without any information about the end user's identity, the payment service has no choice but to trust the calls it receives from the order service.
>
> **[2:39](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=159)** If an attacker or an insider could compromise the order service, they could issue a payment from any of the customers.
>
> **[2:47](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=167)** To solve this problem, we can use a JWT containing claims about the end-user that is passed along with our new access token from the order service to the payment service.
>
> **[2:59](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=179)** Sometimes this is done by nesting one token inside of the other.
>
> **[3:03](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=183)** The payment service can read these claims after verifying the integrity of the token using at signature.
>
> **[3:11](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=191)** With this information, the payment service can identify the user and make a decision about whether or not to authorize the payment that's been requested.
>
> **[3:21](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=201)** When using this approach, we can apply a pattern that helps us protect sensitive information about our end-user.
>
> **[3:29](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=209)** In this pattern, the client is issued a reference token that it holds to access the microservices.
>
> **[3:36](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=216)** When the reference token enters the network through the API gateway, it is passed to the IAM platform where it is switched from a reference token into a structured token.
>
> **[3:48](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=228)** This structured token or JWT contains claims about the identity of the end-user.
>
> **[3:54](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=234)** This approach better protects information about the end-user because it never sends a structured token with claims to the client.
>
> **[4:03](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=243)** However, it does exchange the reference token for a structured token at the API gateway that can be passed back to our microservices, which use it to identify the end-user.
>
> **[4:15](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=255)** These techniques allow microservices to securely communicate and helps establish a user context without any state stored between the services.
>
> **[4:26](https://www.linkedin.com/learning/microservices-security/securing-east-to-west-traffic?u=76281980&t=266)** When building microservices that must collaborate, it's important to closely examine calls from one service to another to ensure scope or claims based security decisions do not become intertwined to couple the services together.

> [!info]- Semantic Content
>
> **Env Vars:** jwt (3), api (2), oidc (1), iam (1)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Monitoring and logging
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=0)** - [Instructor] Being able to observe the activity taking place in a system is important for many reasons.
>
> **[0:06](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=6)** However, from a security perspective, it's essential.
>
> **[0:11](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=11)** Having visibility into a system through its logs can alert us to suspicious behavior that detects an ongoing attack.
>
> **[0:19](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=19)** If a security incident is discovered in a system that has good logging, it's possible to identify the attack vector, the extent of the attack, and possibly the attacker.
>
> **[0:31](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=31)** Logs can also serve as great mechanisms for establishing audit trails for sensitive operations that may be exploited by insiders.
>
> **[0:41](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=41)** Like most other security concerns, microservices present a unique challenge, because sensitive operations that once occurred in process now span multiple distributed components.
>
> **[0:54](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=54)** This causes logging to be fragmented across the multiple services, and discrepancies can arise between logging strategies used by different teams.
>
> **[1:06](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=66)** Tracing is one of the most important techniques that we can use to overcome these challenges related to logging in microservice architectures.
>
> **[1:15](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=75)** Using a correlation ID associated with each request, we can trace an event that is distributed over several microservices.
>
> **[1:24](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=84)** When each microservice includes the correlation ID of the event in their logs, the event can be reassembled at a later point in time using a common thread of information.
>
> **[1:36](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=96)** This is helpful for aggregating system activities into a single event.
>
> **[1:41](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=101)** We can then use this information to support a security inquiry or to determine what went wrong in an incident.
>
> **[1:49](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=109)** To make logs more useful and easy to consume, a common logging structure should be established across the teams that build your microservices.
>
> **[1:59](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=119)** Typically, it's standard to include information about when an audited event took place, who was involved, what type of event it was, and what section of the code invoked it.
>
> **[2:11](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=131)** If you're using the same language across your microservices, I would highly recommend deciding upon a standard logging framework and mandating a configuration file that establishes the logging pattern used across your teams that build microservices.
>
> **[2:28](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=148)** Teams should also remember to log unsuccessful activities that were attempted as well, because these events like authorization failures, error in HTTP codes, and invalid endpoint URLs, can indicate an attempted attack or an attacker running a scan.
>
> **[2:46](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=166)** Since microservices are distributed, and there may be many instances of a single microservice, all of your logs should be sent to a central host where they're collected and aggregated.
>
> **[2:58](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=178)** This allows all of the log information to be gathered in one spot where it can be searched to provide a complete picture of activity into the distributed system.
>
> **[3:09](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=189)** There are many open-source and commercial tools available to perform this job.
>
> **[3:14](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=194)** If you're interested in an open-source tool, check out the elastic stack platform.
>
> **[3:19](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=199)** it's very feature-rich and includes capabilities for monitoring, which we're going to discuss next.
>
> **[3:26](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=206)** Once the information from your microservices is logged centrally, automated monitoring can identify and alert developers to suspicious behavior in the system.
>
> **[3:38](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=218)** These alerts typically focus on traffic that fails due to mutual TLS, invalid access tokens, or excessive traffic which can be an indicator of an attacker probing your system.
>
> **[3:50](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=230)** Once detected, alerts can be issued through an instant response system that proceeds through a series of escalated notifications to ensure they receive the appropriate attention.
>
> **[4:03](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=243)** Application logs are invaluable, not just for troubleshooting, but from a security standpoint.
>
> **[4:09](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=249)** If you apply monolithic logging strategies to a microservice architecture, you'll quickly be disappointed and frustrated with the level of observability that you get into your system.
>
> **[4:21](https://www.linkedin.com/learning/microservices-security/monitoring-and-logging?u=76281980&t=261)** The strategies we discuss can give you a holistic view of your distributed system, that provides valuable insights into the security position of its operations.

> [!info]- Semantic Content
>
> **Env Vars:** http (1), tls (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Service mesh
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=0)** - [Instructor] To help manage the complexities of service-to-service communication inside of a microservice-based system, we can use a platform known as a service mesh.
>
> **[0:11](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=11)** When using a service mesh, there are a few prerequisites.
>
> **[0:15](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=15)** Your microservices must run in containers, with Docker pretty much being the standard these days.
>
> **[0:21](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=21)** They must also be deployed in a container orchestration system like Kubernetes.
>
> **[0:26](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=26)** You can find many vendors that package a container runtime in container orchestrator, or you can leverage the open source distributions of these platforms.
>
> **[0:37](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=37)** Once you satisfy these prerequisites, you can use a security mesh to establish a network of proxies that sit next to the containers that host your microservices.
>
> **[0:49](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=49)** These proxies, known as sidecars, intercept the traffic entering and exiting a service, providing an excellent point to apply security tactics, like mutual TLS, access policies, and audit logging.
>
> **[1:04](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=64)** As more instances of a microservice are deployed, so are the proxies that sit alongside them.
>
> **[1:10](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=70)** This begins to form an interconnected service mesh.
>
> **[1:15](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=75)** The mesh is transparent to microservices because it runs a proxy in a container that shares the same pod as the container running our service.
>
> **[1:26](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=86)** The fabric formed by the mesh delivers an excellent strategy for managing and controlling the operations of the microservice deployment by intercepting the traffic between them.
>
> **[1:38](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=98)** If we inspect the high level architecture of Istio, a popular security mesh provided by Google, we'll find that it splits logically into a data plane and a control plane.
>
> **[1:51](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=111)** The data plane contains the set of proxies that microservices use to communicate with each other inside of the service mesh.
>
> **[1:59](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=119)** The policies and configuration of the proxies in the mesh is managed, configured, and deployed by the control plane.
>
> **[2:07](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=127)** Using a component known as Pilot, the control plane is able to push these policies and configurations to the proxies inside the mesh without any code changes to the actual microservices.
>
> **[2:21](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=141)** The policies can define authorization roles enforced by the proxies.
>
> **[2:26](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=146)** These policies can range from very high level, such as which services are permitted to communicate with each other to very low level, such as requiring claims on a jot that is passed to a service.
>
> **[2:39](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=159)** We can combine these authorization strategies with other security tactics to create a deep defense in-depth strategy for our microservices.
>
> **[2:49](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=169)** In addition to receiving policies, the proxies can also extract information, such as traces or logs from the mesh into a logging platform.
>
> **[3:00](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=180)** Istio's tracing capabilities increase the observability of our microservices.
>
> **[3:06](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=186)** It allows them to be better monitored.
>
> **[3:09](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=189)** Istio's tracing capabilities increase the observability of our microservices to allow them to be better monitored.
>
> **[3:17](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=197)** Request tracing within Istio uses a quest ID and a trace ID header that allows individual requests to be monitored as they are flow through each service in the mesh.
>
> **[3:30](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=210)** These headers can be extracted and used as a correlation ID in our microservice logs.
>
> **[3:37](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=217)** Istio also has its own internal access logging that allows for detailed auditing of network transactions that can be visualized in order to see the path a request takes through our system.
>
> **[3:52](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=232)** One of the major benefits of Istio is that it provides mutual TLS with just a little bit of configuration, right out of the box.
>
> **[4:00](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=240)** Istio bundles a certificate authority named Citadel into the control plane that has extensive functionality.
>
> **[4:08](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=248)** Citadel can mount the certificate and key pair into a Kubernetes pod when it's created.
>
> **[4:14](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=254)** It's also capable of automating the rotation of certificates within the pods.
>
> **[4:20](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=260)** Using Citadel, you get mutual TLS with only a little configuration, and that's a lot of value and security for your microservices.
>
> **[4:29](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=269)** A service mesh in general provides a wealth of features that make management of service-to-service communication less daunting and more secure.
>
> **[4:38](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=278)** If you're considering tactics, like mutual TLS, it's a great option to consider.
>
> **[4:43](https://www.linkedin.com/learning/microservices-security/service-mesh?u=76281980&t=283)** Service meshes are also relatively new, so as innovations arise, they're likely to play a greater role in microservice architectures.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), docker (1), make (1)
> **Env Vars:** tls (4)
> **Definitions:** known as (3)
> **Analogies:** such as (3)
> **Code Keywords:** new, (1)
> **Speakers:** - [instructor] (1)


### 5. Application and Container Security

#### Throttling and rate limiting
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=0)** - [Instructor] As an API gains adoption and its usage increases, it's important to maintain the experience and to meet the performance demands of its clients.
>
> **[0:10](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=10)** Often, the operations found on an API are composed from those made available in a cluster of microservices.
>
> **[0:18](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=18)** These microservices must remain stable as traffic increases.
>
> **[0:23](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=23)** Scaling is the first strategy to consider when demand for a micro-service begins to exceed its capacity.
>
> **[0:31](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=31)** By design, microservices are intended to scale easily through features like auto-scaling that are provided by container orchestrators.
>
> **[0:42](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=42)** However, auto scaling has its limitations because constraints such as costs or available resources may limit the number of microservice instances that are able to be spun up.
>
> **[0:55](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=55)** Underlying each container orchestrator is a plane of host VMs.
>
> **[1:01](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=61)** Once their capacity is exhausted, there's nowhere for another container to be deployed.
>
> **[1:06](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=66)** In some cases, such as a denial of service attack, you may not even want to scale.
>
> **[1:12](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=72)** Seeing an increased demand for your API is great, but it may not be feasible to allow every client unrestricted consumption of it because it could bring down the API for all clients.
>
> **[1:26](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=86)** Throttling the number of requests is one strategy used to control the amount of API usage by clients.
>
> **[1:34](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=94)** It is based on the principle that it is better to deny some traffic to preserve the existing usage, than to crash the system and have no traffic at all.
>
> **[1:45](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=105)** At a high level, you can think of throttling like a speed limit for APIs.
>
> **[1:50](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=110)** The most basic strategy for throttling an API is to apply a universal cap on the concurrent number of requests made to a service for all clients.
>
> **[2:01](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=121)** This cap is typically placed just below the maximum capacity for the service.
>
> **[2:07](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=127)** There's problems with using a universal cap.
>
> **[2:11](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=131)** It can allow one client to unfairly consume the majority of the capacity of the microservices.
>
> **[2:18](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=138)** A better strategy is to create a quota and a rate limit for each API client.
>
> **[2:24](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=144)** The quota defines the number of calls permitted by a client over a long period of time, like a day or a month.
>
> **[2:32](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=152)** A rate limit focuses on preventing bursts of concurrent calls over a much shorter timeframe that could take down the microservice.
>
> **[2:41](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=161)** In some cases, certain clients may have higher rate limits and quotas than other clients.
>
> **[2:48](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=168)** For instance, a first party client may have a higher rate limit than a third party.
>
> **[2:54](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=174)** For things like admin tools, we may not want to apply a throttle at all, since they're used to resolve issues.
>
> **[3:01](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=181)** For APIs that are monetized, you'll see different tiers that are available, via an API plan that allows consumers to purchase more quota or an increased rate limit.
>
> **[3:14](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=194)** Rate limits and quota can also be tracked and enforced at more granular levels.
>
> **[3:20](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=200)** Restricting quota by end user can prevent a particular user from consuming the entirety of a client's quota.
>
> **[3:28](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=208)** This allows available resources to be fairly assigned across all users of a client.
>
> **[3:34](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=214)** When applying this strategy, the claims on a jot can be used to determine the identity of the end user and the client.
>
> **[3:43](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=223)** Another effective throttling strategy is to apply a rate limit and quota for each particular operation on an API.
>
> **[3:52](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=232)** API operations normally span multiple microservices.
>
> **[3:56](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=236)** Each of these microservices may have their own resource profile with some consuming more memory and CPU than others.
>
> **[4:06](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=246)** By having separate throttling limits applied for each operation, clients consume less resource intensive operations more frequently while heavier operations are made less available to prevent downtime.
>
> **[4:20](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=260)** Availability often gets overlooked when it comes to security, especially when it's valid end users that bring down a service.
>
> **[4:29](https://www.linkedin.com/learning/microservices-security/throttling-and-rate-limiting?u=76281980&t=269)** Luckily, there are many techniques for throttling your API that you can choose from to keep your microservices available.

> [!info]- Semantic Content
>
> **Env Vars:** api (11), cpu (1)
> **Analogies:** such as (2), for instance (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Container runtime security
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=0)** - [Instructor] To receive the full benefits of a microservice architecture, it takes a flexible execution environment that allows for rapid yet stable deployments.
>
> **[0:10](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=10)** This is why the majority of developers choose to deploy microservices inside of containers.
>
> **[0:15](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=15)** And in most cases, that means Docker.
>
> **[0:19](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=19)** Like each new technology in the stack, containers have their own attack surface and expose new attack vectors.
>
> **[0:26](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=26)** When running microservices on containers, security measures can be applied to harden various components within the architecture, including the host and the container runtime.
>
> **[0:39](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=39)** The host where the container engine is installed is a starting point for securing the container platform.
>
> **[0:45](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=45)** It should have a very limited number of users that can access it directly.
>
> **[0:50](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=50)** If you're using a container orchestrator like Kubernetes, this number should be even smaller, because the need to access the host is diminished.
>
> **[0:59](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=59)** When choosing an operating system for the host, it's best to use a thin distro specifically designed for using containers, like Red Hat's Fedora CoreOS.
>
> **[1:10](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=70)** These distros reduce the attack surface on the host by removing non-essential applications.
>
> **[1:16](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=76)** This lowers the number of vulnerabilities found within the operating system.
>
> **[1:21](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=81)** The host should also be hardened in accordance with the same security strategies taken to secure other VMs in your environment.
>
> **[1:30](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=90)** When running containers, whether it be directly with the container runtime or preferably with the help of a container orchestrator, there are several important runtime security configurations that need to be applied.
>
> **[1:43](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=103)** Since Docker is the defacto standard for containers, the remainder of our security discussion is going to be pretty specific to Docker.
>
> **[1:52](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=112)** A good best practice is to configure containers to run with the least amount of privileges necessary.
>
> **[1:59](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=119)** An effective way to achieve this is to drop all the kernel capabilities initially, and then add in only those capabilities that are necessary to run the container.
>
> **[2:11](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=131)** This should be accompanied by the no-new-privileges flag, which prevents the process inside the container from gaining new privileges during execution.
>
> **[2:22](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=142)** Another dangerous configuration option to be aware of is the privileged flag.
>
> **[2:27](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=147)** This flag should be avoided at all cost.
>
> **[2:30](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=150)** It grants a large amount of capabilities to the underlying Docker process running the container, which can be used to escape the container and launch attacks on the underlying host.
>
> **[2:43](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=163)** It's also important to set the user that will be used when running the image.
>
> **[2:48](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=168)** This is done either with the image configuration or when the container is launched.
>
> **[2:54](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=174)** If a user is not set, your container will run as root by default, and root inside the container is root on the host.
>
> **[3:03](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=183)** If an attacker manages to escape the container, they will have complete access to the underlying host.
>
> **[3:10](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=190)** Finally, running containers using a read-only file system and volumes is a great way to reduce the blast radius of any containers that are compromised.
>
> **[3:21](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=201)** These runtime configurations can help secure your Docker containers in a microservice system.
>
> **[3:28](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=208)** If you're looking for a tool to help ensure your containers are securely configured, you can use Docker Bench to check for security misconfigurations.
>
> **[3:37](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=217)** This tool will scan running containers and report on any configurations that deviate from benchmark industry security standards.
>
> **[3:47](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=227)** To secure containerized microservices at runtime, you must account for the additional layers in the stack and understand the security implications of how they are configured.
>
> **[3:58](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=238)** This responsibility may span across multiple positions in an organization.
>
> **[4:03](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=243)** So it's important to standardize these best practices via automation.
>
> **[4:09](https://www.linkedin.com/learning/microservices-security/container-runtime-security?u=76281980&t=249)** Once your containers are running securely, your microservices can truly enjoy the benefits of the flexible deployment and scaling without serious security risks.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (6)
> **Code Keywords:** default, (1), finally, (1)
> **Definitions:** is a  (2)
> **Best Practices:** it's best to (1), best practice (1)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Image security
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=0)** - [Teacher] When securing microservices in containers, a lot of attention is paid to the runtime configuration.
>
> **[0:07](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=7)** However, we need to keep in mind that securely building and sourcing images is just as important.
>
> **[0:14](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=14)** Images are built from instructions found in a Dockerfile.
>
> **[0:18](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=18)** These instructions add our microservice to the image and configure it to run the service.
>
> **[0:24](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=24)** You can think of a Dockerfile almost like source code for an environment.
>
> **[0:29](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=29)** Once the Dockerfile is ready, it is built into a container image which is similar to how developers compile the source code for an object into a class.
>
> **[0:39](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=39)** When we are ready to run the image, an instance of it known as a container is created, and it is ran on the container engine.
>
> **[0:48](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=48)** If you're a developer, this is like creating an instance of a class.
>
> **[0:53](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=53)** Just like classes in object-oriented programming, you can use a class written by another developer, you can build your own or a combination of the two.
>
> **[1:03](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=63)** Containers are the same way.
>
> **[1:05](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=65)** Typically when developers build their own image, they start from one that is provided to them, which is known as the base image.
>
> **[1:13](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=73)** Then for each instruction in their Dockerfile, a new layer is added to the image.
>
> **[1:18](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=78)** Finally, when the image is ready, it is built and stored in the registry where it can be pulled and run as a container.
>
> **[1:27](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=87)** Now, let's layer some security principles on top of all this.
>
> **[1:31](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=91)** First, it's very important that the base image is an official base image provided by a trusted source through a trusted repository.
>
> **[1:40](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=100)** Typically, you'll be getting these images from major technology players like Microsoft, Red Hat or official Linux distros.
>
> **[1:49](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=109)** If you pull an image from an untrusted source, it is possible to introduce a malicious container into your environment that has been planted by an attacker.
>
> **[1:59](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=119)** This is one form of a supply chain attack where malicious code is inserted into the build process, ultimately leading to a corrupt container running in production.
>
> **[2:10](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=130)** Many organizations manage their own image registries, and only allow their container platforms to pull approved images from them.
>
> **[2:20](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=140)** They only permit official trusted images into the repository and only allowed developers to add images through the CICD pipeline.
>
> **[2:30](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=150)** Combined with effective security scanning, this strategy effectively seals where images can be sourced and introduced, helping to prevent vulnerable images from entering the environment.
>
> **[2:43](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=163)** Now, just because an image was deemed secure at one point in time, doesn't mean a vulnerability can't be found against it.
>
> **[2:50](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=170)** So here we're looking at a Red Hat Python image.
>
> **[2:54](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=174)** And you'll notice that if we look at the latest version of the image, it is secure.
>
> **[3:00](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=180)** Now, if we go back and just take a look at the image 18 days ago, you'll notice that a CVE was found against this image or a piece of software that it uses.
>
> **[3:13](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=193)** Now, this isn't a knock on Red Hat, it's actually very good that they're keeping up-to-date with the vulnerabilities, but it does create the need for users of the image to follow it and make sure they're using the latest version.
>
> **[3:26](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=206)** Most providers of official images will routinely update them to address critical vulnerabilities identified in CVEs.
>
> **[3:34](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=214)** So it's important to follow them and stay up-to-date.
>
> **[3:38](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=218)** To ensure you're using the latest secure images, the image registry should be scanned frequently using an automated toll like Snyk that detects potential vulnerabilities related to an image.
>
> **[3:50](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=230)** This can help identify containers created without a date base images that have recently discovered CVEs and vulnerabilities against them.
>
> **[3:59](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=239)** Typically, this is fixed by rebuilding the image with a new version of the base image, and then redeploying the container to replace the older instances that are running with the vulnerabilities.
>
> **[4:12](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=252)** Another best security practice is to choose a thin base image, which limits the tolls it contains, because it helps to reduce the attack surface of the container and it can limit an attackers options, if they were to compromise a microservice.
>
> **[4:29](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=269)** Technologies like containers place control of the entire stack into the hands of developers, who may unknowingly do the wrong thing.
>
> **[4:38](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=278)** It is important to establish good security practices surrounding images that give developers the power to deliver new microservices while staying within some security guard rails.
>
> **[4:50](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=290)** To achieve this, you may need to take a closer look at your toll chain to ensure it supports new technologies like containers and microservices.
>
> **[4:59](https://www.linkedin.com/learning/microservices-security/image-security?u=76281980&t=299)** Many of these technologies have outpaced traditional security practices.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2), finally, (1), let (1), this. (1), this, (1)
> **CLI Commands:** python (1), make (1), rails (1)
> **Definitions:** known as (2), is an  (1)
> **Env Vars:** cicd (1), cve (1)
> **Exercise Files:** source code (2)
> **Analogies:** similar to (1), just like (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)

#### Audit container security
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=0)** - [Instructor] When assessing the security posture of any component within a system, it's best to rely upon a tool to check for vulnerabilities and the enforcement of best practices.
>
> **[0:12](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=12)** When it comes to running Docker containers, Docker Bench is one of the best tools for the job.
>
> **[0:19](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=19)** Docker Bench is a small script that inspects the container host to show how it complies with the Center for Internet Securities Docker Benchmark.
>
> **[0:29](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=29)** This is a formal list of security best practices for Docker.
>
> **[0:35](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=35)** Now let's get hands-on and I'll show you how Docker bench works.
>
> **[0:40](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=40)** So here in Windows subsystem for Linux, I've installed Docker on Abuntu.
>
> **[0:46](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=46)** And then within Docker I have a single container running our microservice.
>
> **[0:55](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=55)** Now let's analyze the security posture of the host and the container with Docker bench.
>
> **[1:02](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=62)** The first thing that we'll do is clone the Docker bench repository so that we can get a copy of the script on our host.
>
> **[1:12](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=72)** Alright, after the repository is cloned, we can go ahead and change directory into the repository, and then from there we will execute the script.
>
> **[1:23](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=83)** The name of the script is Docker-Bench-Security.sh.
>
> **[1:30](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=90)** Let's go ahead and kick that off.
>
> **[1:39](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=99)** All right, it looks like Docker Bench has completed its security analysis.
>
> **[1:43](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=103)** Let's take a quick look at the output to see what type of findings it came up with.
>
> **[1:56](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=116)** The output is arranged in sections that correspond with the host, the Docker Damon, container images, and the running containers.
>
> **[2:05](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=125)** Within the output you'll want to pay close attention to the red warning tags because these are here to alert you to a potential security misconfiguration in your container platform.
>
> **[2:19](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=139)** Let's take a look at the warnings in the container runtime section where Docker Bench has analyzed the security posture of the running containers.
>
> **[2:28](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=148)** It's down here in section five.
>
> **[2:32](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=152)** You'll notice that within this section we have several of these red warnings.
>
> **[2:37](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=157)** Let's just take a peek at a few of them that illustrate the best practices we spoke about in our last lesson.
>
> **[2:45](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=165)** For example, in finding 5.13, Docker Bench is warning us that our container is not running on a read-only file system.
>
> **[2:57](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=177)** This was one of those best practices we talked about.
>
> **[3:00](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=180)** We can fix this by starting the container with the read-only flag.
>
> **[3:06](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=186)** And then here we can see finding 5.26, which tells us that the container isn't restricted from acquiring new privileges.
>
> **[3:16](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=196)** We can fix this by running the container with the no-new-privileges flag.
>
> **[3:21](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=201)** So you get the idea here with Docker bench.
>
> **[3:24](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=204)** You run the automated analysis and then inspect the findings, looking for opportunities to harden the containers based on the findings it shows you.
>
> **[3:34](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=214)** I highly recommend that you consider running Docker Bench.
>
> **[3:38](https://www.linkedin.com/learning/microservices-security/audit-container-security?u=76281980&t=218)** It's a great way to improve the security posture of your microservices.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (17)
> **Code Keywords:** let (6)
> **Versions:** 5.13 (1), 5.26 (1)
> **Definitions:** is a  (2)
> **Warnings:** warning (2)
> **File Paths:** docker-bench-security.sh (1)
> **Cross-References:** we talked about (1)
> **Analogies:** for example (1)

#### Secrets management
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=0)** - [Instructor] Microservices often need to store secrets.
>
> **[0:03](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=3)** Things like client credentials, database passwords, and SSL certificates that must be kept confidential.
>
> **[0:11](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=11)** Unfortunately, many developers take a trust the network or security through obscurity approach to protecting secrets.
>
> **[0:18](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=18)** This causes secrets to wind up in difficult but not impossible to reach places.
>
> **[0:23](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=23)** You'll find them in properties, files, hard-coded strings docker files, container images, and environment variables.
>
> **[0:31](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=31)** If you use these techniques, your microservices secrets won't be so secret anymore with a little bit of access to source control in image registry or host.
>
> **[0:43](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=43)** Luckily, container orchestration platforms like Kubernetes, OpenShift and others provide better approaches to managing your secrets.
>
> **[0:51](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=51)** Now there's no excuse to bake them into a container image.
>
> **[0:55](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=55)** These platforms typically have an embedded secrets management capability that allows you to create and securely store, secrets like credentials or certificates for use in a pod.
>
> **[1:07](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=67)** A pod is just a Kubernetes concept that is kind of like a group of containers.
>
> **[1:12](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=72)** When attaching secrets, you'll typically have two options.
>
> **[1:15](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=75)** You can inject them as an environment variable, or, you can mount them to the container using a file written in a volume.
>
> **[1:24](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=84)** Writing a file to a volume is the most secure route.
>
> **[1:27](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=87)** So I would recommend going that approach.
>
> **[1:29](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=89)** If you're using a container orchestrator.
>
> **[1:32](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=92)** An orchestrator is an easy way to handle secrets because it's built right into the platform.
>
> **[1:38](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=98)** However, using this approach you cannot share secrets outside of a microservice cluster.
>
> **[1:44](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=104)** This leads many organizations to adopt a solution for secrets management from a vendor product or their cloud host.
>
> **[1:52](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=112)** Let's take a look at a popular option named Vault.
>
> **[1:56](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=116)** Vault is secrets management platform provided by HashiCorp.
>
> **[2:00](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=120)** It provides several strategies for microservices to securely store and access all sorts of secrets, including API keys, passwords, or certificates.
>
> **[2:11](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=131)** To allow its clients, like microservices, to access secrets, Vault provides an API that can be used to easily obtain them.
>
> **[2:20](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=140)** Another configuration model provided by vault is the Vault Agent.
>
> **[2:25](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=145)** The agent provides tight integration with container orchestrators like Kubernetes by using a Sidecar model to provide microservices with transparent access to secrets.
>
> **[2:36](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=156)** The Vault Agent handles the initial authentication with the API using an init container.
>
> **[2:42](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=162)** It also allows templates to be created for microservice configuration files that have secrets injected into them.
>
> **[2:50](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=170)** This approach eliminates the need to write code that retrieves the secrets from the vault API using HTTP calls.
>
> **[2:59](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=179)** Dynamic Secrets are another advanced capability provided by Vault that allows credentials like those used for a database, to rotate transparently inside the microservice.
>
> **[3:11](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=191)** This increases the security of the system because a stolen credential has a short life span.
>
> **[3:17](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=197)** Another type of dynamic secret known as a lease, issues new short-lived credentials each time a client requests access to a protected resource.
>
> **[3:27](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=207)** Managing credentials can be incredibly insecure using historical practices that are not suited for dynamic environments like containers.
>
> **[3:36](https://www.linkedin.com/learning/microservices-security/secrets-management?u=76281980&t=216)** When supplying secrets to your microservices, I highly recommend considering a third party secrets management platform or, at a minimum using the storage provided by your container orchestrator.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), ssl (1), http (1)
> **CLI Commands:** find (1), docker (1)
> **Code Keywords:** let (1), protected (1)
> **Definitions:** is an  (1), known as (1)
> **Speakers:** - [instructor] (1)

#### Secure pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=0)** - [Instructor] DevOps pipelines are a key enabler to achieving the rapid delivery cadence that draws most development teams towards microservices.
>
> **[0:09](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=9)** If you think of a pipeline as a function, it accepts commits from a developer as inputs.
>
> **[0:16](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=16)** And in the ideal scenario, outputs a container running the software the commit was made against.
>
> **[0:22](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=22)** A lot happens between these two points.
>
> **[0:26](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=26)** First, the code needs to be written and committed, which triggers the CI portion of the pipeline, where the software is built and tested.
>
> **[0:35](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=35)** Then it's packaged into a container image stored in the artifact repository.
>
> **[0:41](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=41)** When the CD portion of the pipeline is invoked, it pulls the container out of the repository and deploys it onto the container runtime using an orchestrator.
>
> **[0:52](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=52)** In this flow, there is ample opportunity to inject automated security controls into the process.
>
> **[0:59](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=59)** These controls act as gates that prevent vulnerable code or images from ever being deployed.
>
> **[1:07](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=67)** As a strategy, it's best to detect and correct security vulnerabilities as early as possible in this process to prevent them from traveling further downstream towards production.
>
> **[1:21](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=81)** Starting with the actual development, static code analysis tools that run on developer workstations can provide the first line of defense.
>
> **[1:29](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=89)** These tools alert developers to security issues before they even reached the code repository.
>
> **[1:36](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=96)** Even with scans in place on developer workstations, you should still run static code analysis on the CI build and fail the build for code that doesn't live up to the security standards.
>
> **[1:49](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=109)** Access to the source code repository should be limited to actual contributors and there should be a pull request model in place that restricts who can commit code to release branches.
>
> **[2:01](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=121)** Some tools like sneak allow you to incorporate security scans directly into your pull requests, providing direct feedback before the code hits the repository.
>
> **[2:12](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=132)** When a microservice is built, all third party libraries should be sourced from a trusted artifact repository that provides a central point to access approved libraries and container images.
>
> **[2:26](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=146)** After the microservice is built into an artifact, a barrage of unit and integration tests are typically ran against it.
>
> **[2:35](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=155)** This provides an excellent point to inject some interactive security testing.
>
> **[2:41](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=161)** These tests detect security issues while the code executes and alerts you to them.
>
> **[2:47](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=167)** This provider it's additional feedback that can help the tech vulnerabilities.
>
> **[2:51](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=171)** If all of the tests pass, the microservice is built into a container image that is placed in the artifact repository.
>
> **[3:00](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=180)** Here, a registry scanner, which has provided as a capability in most artifact repositories can be used to detect new vulnerabilities that have arisen since the container was created.
>
> **[3:15](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=195)** Access to the artifact repository should also be closely guarded.
>
> **[3:20](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=200)** This prevents anyone from going around the security gates that are enforced by the pipeline.
>
> **[3:25](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=205)** After the CI pipeline finishes, the CD pipeline triggers the container orchestrator to deploy the microservice images to a lower environment for further testing.
>
> **[3:38](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=218)** This process should have strict controls, regarding the artifact version that is released.
>
> **[3:43](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=223)** It should ensure that the artifact has been vetted through the earlier security gates.
>
> **[3:49](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=229)** The same control should be applied once again, when an artifact is about to be released to production.
>
> **[3:57](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=237)** In lower environments, the microservice can be subjected to dynamic testing that actively probes the service for a slew of well-known vulnerabilities.
>
> **[4:08](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=248)** Typically, this is done through automated pen testing where a tole scans and probes against the microservice.
>
> **[4:16](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=256)** These tools can integrate with the pipeline to gate any vulnerable images from advancing to production.
>
> **[4:23](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=263)** Pipelines have many configurations.
>
> **[4:26](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=266)** So we've boiled our discussion down to some common points within these platforms where security gates can be introduced to better secure your microservices.
>
> **[4:36](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=276)** It is important to hone these automated security scans to focus on critical vulnerabilities because they can overwhelm development teams with false positives that create alert fatigue.
>
> **[4:48](https://www.linkedin.com/learning/microservices-security/secure-pipelines?u=76281980&t=288)** Baking these security tests into your pipeline can help keep up your release velocity without compromising on security.

> [!info]- Semantic Content
>
> **Code Keywords:** static (2), function (1), pass (1)
> **CLI Commands:** cd (2)
> **Exercise Files:** source code (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Prevent leaked credentials
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=0)** - [Narrator] One of the best ways to secure your microservices is to add automated verifications into a CI/CD pipeline with static security analysis tools.
>
> **[0:11](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=11)** To show you how these tools can provide immediate security, we're going to walk through a pull request workflow using Azure DevOps, where I've enabled a credential scanner in my pipeline.
>
> **[0:29](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=29)** So I have this change sitting in Git that I just finished.
>
> **[0:33](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=33)** This change updates the password that our microservice uses for its database connection.
>
> **[0:40](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=40)** Unfortunately, we have to rotate this password every 90 days, so we need this change for our microservice to continue pulling data from the database.
>
> **[0:51](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=51)** Everything looks good here locally, so I'm going to go ahead and push this change up to Azure DevOps so that I can create a pull request.
>
> **[1:04](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=64)** All right, let's head over to Azure DevOps and we can get to work on that pull request.
>
> **[1:14](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=74)** All right, here we can see that my changes were detected and I can click on the Create a pull request button, which will allow me to easily submit this pull request for the repository.
>
> **[1:28](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=88)** Now once the pull request is submitted, you'll notice that we have configured a build pipeline to be kicked off automatically, and this pipeline is going to run various checks to ensure the quality and security of the code that we've just pushed.
>
> **[1:47](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=107)** Let's go take a look at the pipeline and see what it finds.
>
> **[1:54](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=114)** Yikes, it looks like the pipelines failed for our pull request.
>
> **[1:58](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=118)** Let's dive in and see what happened.
>
> **[2:01](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=121)** Here we can see that our credential scanner has flagged the credential that we submitted in our change.
>
> **[2:09](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=129)** That's because, as a security best practice, secrets shouldn't be checked into a Git repository.
>
> **[2:16](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=136)** So you can see how automation is a very powerful tool for securing microservices.
>
> **[2:22](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=142)** A credential scanner is just one example of the many SaaS tools that you can incorporate into your pipelines for better security.
>
> **[2:30](https://www.linkedin.com/learning/microservices-security/prevent-leaked-credentials?u=76281980&t=150)** Now let's move on to our next lesson, and I'll show you how we can securely handle this credential required for our microservice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), static (1), continue (1)
> **CLI Commands:** git (2), cd (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [narrator] (1)

#### Keep secrets with Key Vault
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=0)** - [Instructor] In this lesson, we're going to get hands-on with Azure Key Vault to learn how to securely handle the secrets required by our microservice.
>
> **[0:09](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=9)** So you'll recall this connection string from our previous lesson that we use to establish a database connection from our microservice.
>
> **[0:20](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=20)** Now the challenge we face is how to securely store and access this connection string from our microservice.
>
> **[0:28](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=28)** For that task we're going to use Azure Key Vault and the Azure SDKs.
>
> **[0:33](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=33)** So let's begin by removing the secret from our configuration, and then we're going to navigate to the Azure portal where we'll create a key vault resource.
>
> **[0:45](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=45)** To start that process click on Create a Resource, and then come down here to the Create link below Key Vault.
>
> **[0:53](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=53)** This is going to open up a form where we will provide different details about the key vault resource that we're going to create.
>
> **[1:01](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=61)** The first thing we'll do is select a resource group where this key vault is going to live.
>
> **[1:07](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=67)** Then we need to provide a name for our new key vault.
>
> **[1:12](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=72)** I'm going to call my key vault "chatmicroservice-vault."
>
> **[1:18](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=78)** Okay.
>
> **[1:19](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=79)** And then you'll want to select a region that is close to you or where your service operates.
>
> **[1:26](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=86)** And then after that, just leave all the other values set to their default settings.
>
> **[1:31](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=91)** All right, now we can click on Review and Create.
>
> **[1:34](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=94)** And then once our resource details are reviewed, we can go ahead and create the key vault.
>
> **[1:42](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=102)** This is going to start the provisioning of the resource, and soon we'll have a place to store our secrets.
>
> **[1:53](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=113)** All right, it looks like our key vault has finished provisioning.
>
> **[1:57](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=117)** Let's go to the resource where we'll need to put some additional configurations in place.
>
> **[2:03](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=123)** The first configuration that we'll need to establish is RBAC.
>
> **[2:08](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=128)** So we need to give ourself role-based access control permissions in order to be able to create secrets within the vault.
>
> **[2:17](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=137)** So to do that, click on the Access Control blade, and then come up here to Add. and then Add Role Assignment.
>
> **[2:26](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=146)** This is going to present us with a list of rules that we can choose from to assign to a user.
>
> **[2:33](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=153)** In our case, we're going to select the Key Vault Secrets Officer role, and then we'll come over here to the Members tab, and we're going to click on Select Members, and then we're going to find our account so that we can be assigned the permissions.
>
> **[2:49](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=169)** So once you find your account, click on it, and then hit Select, and then come down here and click on Review and Assign, and then click on it one more time to create the role assignment.
>
> **[3:04](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=184)** All right, now that that permission is in place we can create our secret.
>
> **[3:10](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=190)** And that's done by clicking on this Secrets tab, and then coming up here to Generate and Import.
>
> **[3:17](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=197)** All right, the first thing we'll need to do is name our secret.
>
> **[3:20](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=200)** I'm going to call mine the dbConnectionString.
>
> **[3:24](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=204)** And then we have to provide a value for our secret.
>
> **[3:28](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=208)** Here's where we're going to place that connection string that we copied from the configuration.
>
> **[3:35](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=215)** All right, once that's in place we can go ahead and create the secret within our key vault.
>
> **[3:42](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=222)** There you can see it in our list of secrets.
>
> **[3:45](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=225)** Let's just take a quick look at this.
>
> **[3:48](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=228)** You'll notice that the secret can be versioned.
>
> **[3:52](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=232)** And then if we come into the Secret page, we can actually see the secret value or we can copy it to our clipboard if needed.
>
> **[4:04](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=244)** With our key vault established, we can now turn our attention to retrieving the secret from Key Vault using its SDK.
>
> **[4:13](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=253)** So here in the NuGet packages for our microservice, you can see that I've included the Azure.Security.KeyVault.Secrets package as well as the Azure.Identity packages.
>
> **[4:28](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=268)** These NuGet packages will give us some types that we can work with to securely retrieve those secrets from the key vault.
>
> **[4:37](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=277)** We can see the code that works with those types in the ChatDbContext class.
>
> **[4:44](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=284)** This is an entity framework class that sets up our database connection.
>
> **[4:49](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=289)** And here you can see that we've overridden the OnConfiguring method.
>
> **[4:54](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=294)** Within that method, we use the secrets SDK in order to create a SecretClient that is pointing at the new key vault that we just created.
>
> **[5:10](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=310)** Now, in order to log in and authenticate to get the secrets from the key vault, we use a default Azure credential.
>
> **[5:17](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=317)** And this is going to source an access token using the identity that we logged into Visual Studio with.
>
> **[5:26](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=326)** So in this case, it's my account within Azure.
>
> **[5:30](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=330)** Now, once we have the SecretClient, we're going to use this GetSecret call to fetch that dbConnectionString secret that we just created within the vault.
>
> **[5:42](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=342)** Once we have that connection string value, we pass it into Entity Framework in order to set up our connection to the SQL Server database.
>
> **[5:55](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=355)** All right, let's go ahead and launch the app and then we'll head over to Insomnia to test out this call.
>
> **[6:04](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=364)** All right, I can see that our microservice is up, and I've already obtained an access token within Insomnia that we can pass along for authorization when retrieving our chat messages.
>
> **[6:18](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=378)** So all I need to do is just send the request.
>
> **[6:21](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=381)** And once we send the request we should see chat messages returned if our integration with Azure Key Vault is established correctly.
>
> **[6:31](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=391)** And there we do see our messages.
>
> **[6:35](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=395)** So that's a look at how to store and retrieve secrets from Key Vault.
>
> **[6:39](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=399)** It's slightly more involved than just placing the secret right in the configuration.
>
> **[6:44](https://www.linkedin.com/learning/microservices-security/keep-secrets-with-key-vault?u=76281980&t=404)** However, it's a much more secure approach for handling secrets within our microservices, and the SDKs help us out a lot here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2), pass (2), import. (1), this. (1)
> **UI Navigation:** click on (7), go to (1)
> **Env Vars:** sdk (2), rbac (1), sql (1)
> **Tools:** insomnia (2), azure portal (1), visual studio (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** dbconnectionstring (2)
> **Cross-References:** coming up (1)
> **Definitions:** is an  (1)


### Conclusion

#### Securing microservices
> [LinkedIn Learning](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=0)** - [Kevin] Thanks for watching this course on microservice security.
>
> **[0:04](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=4)** In the course I've provided you with strategies for securing microservices that overcome the security challenges of a distributed system by using leading standards and platforms.
>
> **[0:17](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=17)** Before we wrap up the course I want to provide you with some recommendations for what to explore next and give you some information about my other courses.
>
> **[0:26](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=26)** If you want to get to the expert level I highly recommend reading the specifications discussed in this course, such as those for OAuth 2 and JWT.
>
> **[0:36](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=36)** These materials will deepen your understanding of the standards used to secure microservices and allow you to teach them to others.
>
> **[0:46](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=46)** Throughout my career I've learned the most through hands-on prototyping.
>
> **[0:50](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=50)** I encourage you to download or sign up for some of the platforms mentioned in this course and to build small proof of concepts against them with the techniques we discussed.
>
> **[1:00](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=60)** Prototypes pay huge dividends.
>
> **[1:04](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=64)** If you've liked my teaching style I have a few other courses on the LinkedIn Learning platform that might interest you.
>
> **[1:11](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=71)** "Git for Teams" is a course I built that deliver strategies for teams that use Git.
>
> **[1:17](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=77)** It can make your team's development much more fluid.
>
> **[1:20](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=80)** "Building APIs with Swagger" covers a design first approach to creating APIs with the OpenAPI specification.
>
> **[1:28](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=88)** "Java EE 8 Essential Training" covers 13 of the most widely used Java EE APIs and gives you a rock solid foundation for building Java web applications.
>
> **[1:40](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=100)** "Spring Batch" can provide you with a proven architecture to construct complex batch jobs that run on the JVM using Spring.
>
> **[1:49](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=109)** "Migrating beyond Java 8" will teach you how to navigate the Java ecosystem to handle the new release cadence and newly introduced language features.
>
> **[2:00](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=120)** So that's all I have for you for now.
>
> **[2:02](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=122)** Congratulations on finishing this course and thanks again for taking it.
>
> **[2:07](https://www.linkedin.com/learning/microservices-security/securing-microservices-2?u=76281980&t=127)** Now put your new skills to the test and best of luck securing your microservices.

> [!info]- Semantic Content
>
> **CLI Commands:** git (2), make (1)
> **Env Vars:** jwt (1), jvm (1)
> **Versions:** java 8 (1)
> **Cross-References:** we discussed (1)
> **Documentation:** specification (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [kevin] (1)


## Path Context

### In [[Getting Started with Microservices]]
← [[Microservices- Design Patterns]] | **3 of 3**

## Appears In

- [[Getting Started with Microservices]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More]] — Java

---

[↑ Back to top](#)