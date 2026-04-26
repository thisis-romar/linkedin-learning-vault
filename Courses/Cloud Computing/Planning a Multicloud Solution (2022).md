---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: planning-a-multicloud-solution-2022
url: "https://www.linkedin.com/learning/planning-a-multicloud-solution-2022"
duration_minutes: 89
duration: 1h 29m
level: Intermediate
updated: 8/4/2022
learners: 17019
skills:
  - Cloud Strategy
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQG2JMplYIj4qw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1659469560604?e=2147483647&amp;v=beta&amp;t=Bzge8_b0CaUdOdpNsomcATHHZ60k-F5u3myNsed7nBI"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Cloud Strategy Professional Certificate by LinkedIn Learning]]'
  - '[[Build your Cloud Computing Skills]]'
prev_courses:
  - '[[Cloud Security Architecture for the Enterprise]]'
  - '[[Practical Cybersecurity for IT Professionals]]'
next_courses:
  - '[[Cloud for Business- Developing a Cloud Center of Excellence]]'
  - null
path_nav: '[{"path":"Cloud Strategy Professional Certificate by LinkedIn Learning","position":6,"total":9,"prev":"Cloud Security Architecture for the Enterprise","next":"Cloud for Business- Developing a Cloud Center of Excellence"},{"path":"Build your Cloud Computing Skills","position":3,"total":3,"prev":"Practical Cybersecurity for IT Professionals","next":null}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/cloud-strategy
status: not-started
created: 2026-04-21
---

![Planning a Multicloud Solution (2022)](https://media.licdn.com/dms/image/v2/C560DAQG2JMplYIj4qw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1659469560604?e=2147483647&amp;v=beta&amp;t=Bzge8_b0CaUdOdpNsomcATHHZ60k-F5u3myNsed7nBI)

# Planning a Multicloud Solution (2022)

> As cloud strategies continue to evolve, organizations are now frequently realizing that in order to build a cloud architecture that fully meets their needs, they must use multiple cloud computing services. For example, an enterprise may use separate cloud providers for infrastructure (IaaS) and software (SaaS) services, or use multiple infrastructure (IaaS) providers. In this course, instructor Da

> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022) | 1h 29m | Intermediate | 17K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[David Linthicum]]

## Skills Covered

- Cloud Strategy

## Table of Contents

### Introduction

#### Planning a multicloud
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/planning-a-multicloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/planning-a-multicloud?u=76281980&t=0)** - [Dave] The ability to create a fully optimized multicloud architecture, including making the right technology and architectural choices, is critical to the success of multicloud computing.
>
> **[0:09](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/planning-a-multicloud?u=76281980&t=9)** The challenge is that many enterprises are making decisions that are not fully optimized for the business or don't meet the requirements in other ways.
>
> **[0:16](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/planning-a-multicloud?u=76281980&t=16)** Indeed, it's the choices that multicloud architects and planners make that really make up the value of the multicloud computing solution.
>
> **[0:23](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/planning-a-multicloud?u=76281980&t=23)** Thus, this course is focused on best practices, proven planning processes, architectural components, and technology choices that make up successful multicloud deployment.
>
> **[0:34](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/planning-a-multicloud?u=76281980&t=34)** This is one-stop shopping for those who are looking for a complete set of topics that need to be considered to get multicloud right the first time.
>
> **[0:41](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/planning-a-multicloud?u=76281980&t=41)** Hi, I'm Dave Linthicum, internationally known expert and consultant.
>
> **[0:44](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/planning-a-multicloud?u=76281980&t=44)** In this LinkedIn Learning course I'll use pragmatic examples, including case studies.
>
> **[0:49](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/planning-a-multicloud?u=76281980&t=49)** I'll explain processes to help you gain an understanding of the steps to undertake for making successful multicloud deployments the first time.
>
> **[0:57](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/planning-a-multicloud?u=76281980&t=57)** I wish you luck and good learning.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Speakers:** - [dave] (1)

#### What is multicloud?
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=0)** - [Instructor] Multicloud is the use of more than one cloud computing service, typically a public cloud in a cloud deployment.
>
> **[0:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=8)** Public clouds include Amazon Web Services, Microsoft and Google, as well as other clouds where storage and compute services exist away from those who are consuming it.
>
> **[0:18](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=18)** For our purposes, we'll talk about multicloud as a cloud deployment that leverages more than a single public cloud, which may or may not include a private cloud and or a legacy system.
>
> **[0:29](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=29)** Many of you have heard of hybrid, or paired private, and public clouds.
>
> **[0:35](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=35)** This can be confusing because this type of deployment has more than a single cloud.
>
> **[0:40](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=40)** Both multicloud and hybrid cloud refer to cloud deployments that integrate more than one cloud.
>
> **[0:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=46)** They differ in the kinds of cloud infrastructure they include.
>
> **[0:49](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=49)** NIST or the National Industry Standards and Technology Organization defines hybrid cloud as a cloud infrastructure that is a composition of two or more distinct cloud infrastructures, such as private, community, or public, that remain unique entities but are bound together by standardized proprietary technology.
>
> **[1:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=70)** However, legacy systems paired with a public cloud are also called hybrid clouds.
>
> **[1:16](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=76)** Whereas multicloud is the use of multiple cloud computing and storage services from different vendors in a single architecture with the goal of improving cloud capabilities and reducing cost.
>
> **[1:28](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=88)** Examples of public clouds can be many things including two, three, four, and even seven public cloud providers that are leveraged at the same time.
>
> **[1:38](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=98)** The more public clouds you're leveraging the more complex your multicloud deployment will be.
>
> **[1:43](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=103)** Here's a typical multicloud deployment.
>
> **[1:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=106)** Not that we're focused on the clouds themselves but what exists between the clouds and how they are leveraged as a group?
>
> **[1:52](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=112)** The focus here is not what a specific multicloud looks like.
>
> **[1:56](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=116)** It's what it means to build and manage a multicloud deployment.
>
> **[2:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud?u=76281980&t=120)** Thus will focus on how multi clouds are leveraged to the advantage of the business and what you need to do to build, deploy, and operate a multicloud.

> [!info]- Semantic Content
>
> **Code Keywords:** public (9), private (3), include. (1)
> **Env Vars:** nist (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Why multicloud?
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=0)** - [Instructor] The core reason that businesses leverage multi-cloud is choice.
>
> **[0:04](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=4)** By leveraging more than a single public cloud provider, we now have more choices in terms of the cloud services.
>
> **[0:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=10)** So there's an opportunity to create a solution that meets your business's unique cloud infrastructure needs.
>
> **[0:17](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=17)** This includes storage, compute, databases, artificial intelligence systems, and other services that may be found to be best of breed, are better cloud services that are optimal in building solutions, thus by finding the best of breed cloud service for multiple vendors, we have the ability to build solutions that should be superior to solutions that are built around a single cloud provider.
>
> **[0:40](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=40)** This allows us to mix cloud services that are closer to solving the problems at hand, not being forced to select from a limited number of services that are part of a single cloud provider.
>
> **[0:50](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=50)** The reasons for leveraging multi-cloud are frequently different for each business.
>
> **[0:54](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=54)** Some view it as a means to avoid lock in.
>
> **[0:57](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=57)** Others as a means to have better price negotiating power, since you're able to leverage choice as a way of finding lower prices, much as you would when purchasing appliances for a house where you can purchase from more than a single source.
>
> **[1:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=70)** Lock in can't be avoided when leveraging multi-cloud.
>
> **[1:13](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=73)** This means that you're leveraging a public cloud service such as storage and compute, and it's difficult or costly to move off that service to another similar cloud service.
>
> **[1:22](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=82)** Keep in mind that if you're building solutions to a public cloud service, that you're locked into that service no matter how many clouds you have around within a multi-cloud configuration.
>
> **[1:32](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=92)** The real issue here is one of business value.
>
> **[1:34](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=94)** Does it make sense to leverage a multi-cloud in terms of value that it can return to the business?
>
> **[1:40](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=100)** As we'll see in other videos, there's an upside and a downside to leveraging multi-cloud.
>
> **[1:45](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/why-multicloud?u=76281980&t=105)** Key here is that value is returned to the business, else it doesn't make sense to leverage.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3)
> **CLI Commands:** make (2)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Multicloud advantages
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=0)** - [Instructor] We began our conversation around the advantages of multicloud in the last video.
>
> **[0:04](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=4)** Now let's dig a bit deeper.
>
> **[0:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=6)** The advantages of multicloud can be summarized by the ability to leverage best of breed, opportunities to reduce costs, and lower risk to the business.
>
> **[0:17](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=17)** The ability to leverage best of breed means that we're able to find the best cloud service solution from a holistic catalog of services that are made up of all the public clouds that we have within our multicloud deployment.
>
> **[0:28](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=28)** This means that we're able to select the best cloud service for our applications by not being limited to a single public cloud provider's set of services.
>
> **[0:37](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=37)** As a result, we're able to build better and more innovative solutions, and developers are not limited by the services that they are able to leverage, at least to the extent of the combined cloud services that can be created by a multicloud deployment.
>
> **[0:52](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=52)** Opportunities to reduce costs, meaning that while we can't always reduce costs, that when leveraging multicloud, that we have the ability to select services that are more cost efficient than others.
>
> **[1:03](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=63)** Keep in mind, the ability to deliver business value is the primary objective, so in some cases, the services may actually cost more, but are able to deliver more value back to the business.
>
> **[1:15](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=75)** So, you need to consider both business value and the cost of each service.
>
> **[1:19](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=79)** Lowering risk to the business.
>
> **[1:21](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=81)** By leveraging more than a single cloud provider, we're able to remove dependency on a single cloud provider.
>
> **[1:28](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=88)** The advantage here is that we have the ability to more easily move between providers if one cloud provider proves to be untrustworthy and begins to leverage other business practices that may be undesirable.
>
> **[1:41](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-advantages?u=76281980&t=101)** That means we can switch more easily and remove some of the risk of just leveraging a single cloud provider.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), let (1), switch (1)
> **Definitions:** means that (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Multicloud disadvantages
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980&t=0)** - [Instructor] Of course, while there are clear advantages to multi-cloud, there are some disadvantages to consider as well.
>
> **[0:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980&t=6)** They include cost of complexity, cost of operations and cost of security.
>
> **[0:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980&t=12)** Cost of complexity refers to the fact that we have many public cloud services to deal with.
>
> **[0:17](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980&t=17)** For example, we may go from 1000 cloud services that are leveraged from a business application to as many as 5,000 cloud services.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980&t=26)** The ability to have choice to select best of breed technology often leads to more services being leveraged by these applications.
>
> **[0:34](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980&t=34)** The next disadvantage to consider is that when the number of services to manage increases, the cost of operation also increases.
>
> **[0:42](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980&t=42)** There are ways to minimize this impact.
>
> **[0:44](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980&t=44)** However, we'll cover those later in the course.
>
> **[0:48](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980&t=48)** Then the next disadvantage to consider with multi-cloud is the cost of security.
>
> **[0:53](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980&t=53)** Again, related to the increased complexity, you have more services to secure and must do so using security tooling that is able to operate across clouds.
>
> **[1:02](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980&t=62)** This means that security like operations will be more expensive.
>
> **[1:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-disadvantages?u=76281980&t=67)** Thus you'll again have to figure out the value that's being returned to the business versus the additional cost that we're encountering here.

> [!info]- Semantic Content
>
> **Definitions:** refers to (1), means that (1)
> **Code Keywords:** public (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, you should have an understanding of enterprise architecture for both traditional and cloud-based systems.
>
> **[0:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-you-should-know?u=76281980&t=8)** And it's helpful to understand the basics of computing, including compute, storage, and networking.
>
> **[0:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-you-should-know?u=76281980&t=14)** It's also helpful to have an understanding of other more advanced topics, including security and governance.
>
> **[0:20](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-you-should-know?u=76281980&t=20)** But if those are not on your list of skills, we'll provide enough information here to help you keep up.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-you-should-know?u=76281980&t=26)** If you're not yet comfortable around some of the topics mentioned, I suggest you review one, two, or all three of the following courses: Learning Cloud Computing: Core Concepts, [[Cloud Architecture- Core Concepts]], Learning Cloud Computing: Public Cloud Platforms.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1)
> **Speakers:** - [instructor] (1)


### 1. Preparing for Multicloud

#### Business case for multicloud
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=0)** - [Instructor] A business case for multi-cloud is largely related to the specific needs of the business.
>
> **[0:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=5)** It isn't helpful to simply generically list off what's considered to be the value of multi-cloud computing.
>
> **[0:13](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=13)** What is important is to calculate adding value to your business as related to leveraging multi-cloud.
>
> **[0:19](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=19)** What's often promoted is value for multi-cloud may not be in any way a benefit to you.
>
> **[0:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=25)** Some enterprises adopt multi-cloud for the wrong reasons such as avoiding lock in when that's not typically a value or wanting to reduce cost, but in fact multi-cloud typically costs more.
>
> **[0:37](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=37)** The value can be found in multi-cloud in the soft values that it's able to bring.
>
> **[0:42](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=42)** These values that are not easy to define such as the value of having more business agility, speed to market and the biggest value driver, the ability to leverage choice to support best of breed, to support innovation.
>
> **[0:54](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=54)** This potential for innovation could enable your business to become an industry disruptor or avoid being disrupted.
>
> **[1:02](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=62)** In order to understand the business case for multi-cloud, it's helpful to look at a simple case study.
>
> **[1:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=67)** Let's say there is a company called Henry's Hammocks, which focuses on manufacturing high quality hammocks that they sell directly to consumers on their website and via other eCommerce sites.
>
> **[1:18](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=78)** Henry, the owner of Henry's Hammocks is looking to take his business to the next level and is looking to adapt game-changing technology to get there.
>
> **[1:27](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=87)** Henry's sales and marketing departments and working with his IT group have defined a strategy to transform the business in terms of the customer experience they were able to provide.
>
> **[1:37](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=97)** To do this, they are looking to leverage a multi-cloud.
>
> **[1:39](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=99)** This allows the marketing and sales departments to leverage best of breed cloud services, including artificially intelligence systems from one provider, a database from another provider and a development platform from yet another provider.
>
> **[1:53](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=113)** Together, these will form new customer oriented systems that allow the customer to design and customize their own hammocks via mobile app.
>
> **[2:02](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=122)** Those hammocks will then be automatically made and shipped with the customer able to monitor the entire process.
>
> **[2:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=128)** Assuming that this disruptive innovation goes well, it could lead to tripling of their business.
>
> **[2:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=134)** This considering that other hammock makers did not think innovatively enough to build this disruptive technology.
>
> **[2:22](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=142)** As a result, the value of Henry's Hammocks tripled in value.
>
> **[2:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/business-case-for-multicloud?u=76281980&t=146)** Some of this value is attributed to the use of multi-cloud and thus it contributes to the business case for using multi-cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1)
> **Analogies:** such as (2)
> **Code Identifiers:** ecommerce (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Migration planning
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=0)** - [Instructor] Migration to multicloud is much the same as traditional single-cloud migration, with a few additions to the process.
>
> **[0:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=7)** The general process is, determine the applications and data sets that you need to move.
>
> **[0:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=12)** Understand the core business requirements around the applications and data sets.
>
> **[0:17](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=17)** Determine how the applications will be moved and what needs to be done.
>
> **[0:21](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=21)** Migrate, test, and operate.
>
> **[0:24](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=24)** Let's take a closer look at each step.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=26)** Determining the application and data sets that you need to move refers to picking applications in data stores that are part of the migration project.
>
> **[0:34](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=34)** Note, it's not a good idea to pick too many applications or too few.
>
> **[0:39](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=39)** Pick applications that are somewhat related, such as sharing the same data, a part of the same logical grouping, such as sales, marketing, human resources, things like that.
>
> **[0:50](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=50)** Understanding the core business requirements around the application and data set refers to understanding the core business purpose for each application that currently exists.
>
> **[0:59](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=59)** This allows you to review the business purpose, ensuring that the application is important enough to migrate to the multi-cloud deployment and that all of the core business requirements are being addressed.
>
> **[1:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=70)** Determine how the application will be moved and what needs to be done, meaning that we're looking at what needs to be done to the application to make it live up to the business requirements.
>
> **[1:20](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=80)** This includes putting the application in coupled data stores in one of the following categories, rehost, replatform, refactor/rearchitect, repurchase, retire, and retain.
>
> **[1:34](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=94)** Rehost means that we're just moving it from one type of server on premise to the same server in the cloud, such as Windows NT to Windows NT in the cloud.
>
> **[1:43](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=103)** Replatform means that we're changing the platform.
>
> **[1:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=106)** We're removing from Red Hat Linux on premises to AWS Linux in the cloud.
>
> **[1:51](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=111)** Refactor means that we're changing some or all of the application to have code that's able to run better in the cloud.
>
> **[1:58](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=118)** Repurchase, meaning we're replacing the system with a SaaS-based cloud.
>
> **[2:03](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=123)** Retire means removing the application altogether.
>
> **[2:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=127)** Retain means leaving it where it is.
>
> **[2:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=130)** Migrate, test, and operate.
>
> **[2:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=132)** This is actually doing the migration testing of the applications in data stores on the multi-cloud deployment, then figuring out how to operate the applications ongoing.
>
> **[2:22](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=142)** Migration to multicloud is not unlike migration to a single cloud, with the added complexity of dealing with two or more target public clouds.
>
> **[2:30](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/migration-planning?u=76281980&t=150)** It's a good idea to focus on what you're looking to accomplish and don't pick too many applications and data sets to move.

> [!info]- Semantic Content
>
> **Definitions:** means that (3), refers to (2)
> **Analogies:** such as (3)
> **CLI Commands:** make (1), aws (1)
> **Code Keywords:** let (1), public (1)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)

#### Security planning
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=0)** - [Instructor] It's essential to do security planning before selecting your multi-cloud security model.
>
> **[0:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=5)** Since we need to figure out our security requirements then the logical security model, and how we plan on deploying it to our multicloud.
>
> **[0:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=12)** If you would like more in depth information about this you can find courses here that are focused specifically on cloud security.
>
> **[0:20](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=20)** A cloud security planning process is made up of the following steps: Understanding multicloud security requirements, creating a logical multicloud security model, creating the technical multicloud security solution, and then multicloud security deployment.
>
> **[0:36](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=36)** Understanding multicloud security requirements means first we want to define what security is needed for our business.
>
> **[0:42](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=42)** This means that we're looking at the type of data we're securing, the processes that we need for security, and any specialized requirements such as mobile and edge based computing security.
>
> **[0:54](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=54)** Creating our logical multicloud security model means once we understand our security requirements, we'll focus on a logical security solution to meet the needs of the business.
>
> **[1:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=65)** This means that we're defining a logical security architecture or conceptual architecture that does not yet need to include specific security technologies such as encryption and an identity access management.
>
> **[1:18](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=78)** This allows us to define the perfect multicloud security architecture without placing limits on ourselves, in terms of the technology we're leveraging.
>
> **[1:27](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=87)** Creating a technical multicloud security solution is really just the logical architecture with the security technology added.
>
> **[1:34](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=94)** Typically the type of technology we're leveraging for multicloud security will include, but is not limited to, identity access management or IAM, encryption, security managers, role-based security, things like that.
>
> **[1:49](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=109)** Again, you match the technology to the requirements and don't let the technology determine how you're going to address your requirements.
>
> **[1:57](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=117)** Multicloud security deployment is implementing the security architecture, including the technology.
>
> **[2:03](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=123)** This is the installation and testing of the multicloud security technology solution and then defining an operations approach for security.
>
> **[2:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=132)** This is also called security operations or SecOps.
>
> **[2:16](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=136)** All too often security is not well planned for cloud deployments.
>
> **[2:19](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-planning?u=76281980&t=139)** For multicloud, security planning is even more important considering the sheer number of architectural components we have to deal with.

> [!info]- Semantic Content
>
> **Code Keywords:** include, (1), let (1)
> **Definitions:** means that (2)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Env Vars:** iam (1)
> **Speakers:** - [instructor] (1)

#### Governance planning
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980&t=0)** - [Instructor] Governance is critically important to multi-cloud considering that not only are we controlling access to services within a single cloud provider, but we're also controlling access to services within many cloud providers.
>
> **[0:13](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980&t=13)** Governance is able to place guardrails around using resources, such as cloud storage and cloud compute or specific services such as one of the tens of thousands of microservices that may make up a system.
>
> **[0:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980&t=25)** These guardrails are in place to put limits on how, when, and for what purpose that these services and resources are being assessed.
>
> **[0:33](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980&t=33)** For this topic as well, you can find in-depth courses on cloud governance right here.
>
> **[0:38](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980&t=38)** When doing governance planning for multi-cloud, it's important to consider that multi-cloud governance exists across all clouds and is not just existing within a single cloud platform.
>
> **[0:48](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980&t=48)** It's not useful or scalable to deploy governance solutions or security and operations, for that matter, within a single cloud provider or you'll end up with multiple different security, governance, and operations solutions for each cloud provider you're using within your multi-cloud.
>
> **[1:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980&t=66)** This would add more complexity and cost more than it should.
>
> **[1:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980&t=70)** Governance planning is looking at the overreaching business requirements as related to governance.
>
> **[1:15](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980&t=75)** This is typically around policies needed to control access such as dealing with compliance issues or looking to control the number of resources that a specific human and/or process can leverage at a single time.
>
> **[1:29](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980&t=89)** For example, say we're a hospital and thus must enforce compliance rules and laws that are related to that industry doing so by using governance and governance policies that are written to place proper limits and control on use of resources such as data in order to adhere to the law.
>
> **[1:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980&t=106)** The end product of governance planning for multi-cloud is a logical governance architecture which is built to address the specific business requirements.
>
> **[1:54](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/governance-planning?u=76281980&t=114)** Then we build a physical architecture that includes the specific multi-cloud governance technology we're looking to leverage.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for example (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Operations planning
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/operations-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/operations-planning?u=76281980&t=0)** - [Instructor] Operations, or ops planning, for multicloud deployment is perhaps one of the most important tasks that we can do as those who are designing, building, and deploying multicloud solutions.
>
> **[0:11](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/operations-planning?u=76281980&t=11)** This is due to the fact that multicloud deployments are very complex, and thus difficult and costly to operate if you're not taking time to understand the best and the most optimized way to operate your multicloud deployment.
>
> **[0:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/operations-planning?u=76281980&t=25)** we approach operations much the same way that we approach governance and security, looking for solutions that are able to span clouds.
>
> **[0:33](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/operations-planning?u=76281980&t=33)** Once again, if you're looking to understand more about cloud operations, you can find courses here to provide you with more in depth information.
>
> **[0:41](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/operations-planning?u=76281980&t=41)** When doing multicloud operations planning, it's important to understand both the requirements of the business, such as uptime expectations, as well as requirements for the technology you're running within your multicloud deployment.
>
> **[0:54](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/operations-planning?u=76281980&t=54)** For example, how the databases, serverless systems, container clusters, and other technologies that you have in place need to be operated as well as secured and governed.
>
> **[1:04](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/operations-planning?u=76281980&t=64)** Keep in mind that successful operations is how most businesses perceive the value of multicloud.
>
> **[1:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/operations-planning?u=76281980&t=70)** You may have built the most elegant and useful solution for the business, but if it's not operated properly moving forward, most will consider your multicloud deployment a failure.
>
> **[1:20](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/operations-planning?u=76281980&t=80)** You need to get all aspects of multicloud right.

> [!info]- Semantic Content
>
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Skills and tools needed
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=0)** - [Instructor] You'll need layers of skills and talent to design, build, and deploy a multicloud solution.
>
> **[0:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=6)** They include: cloud and multicloud architects, security, governance, and operations planning subject matter experts, security, governance, and operations technology subject matter experts, cloud application developers, and cloud platform subject matter experts such as Amazon Web Service architects or Microsoft Azure architects.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=26)** Cloud and multicloud architects are people who have many different skills and knowledge that allows him or her for a fully optimized cloud and multicloud solution.
>
> **[0:36](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=36)** These people typically have a large array of eclectic skills ranging from security, governance, operations, application development, databases, networking, storage and compute.
>
> **[0:47](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=47)** This is a critical role in that they can make or break a multicloud deployment if the wrong decisions are made.
>
> **[0:53](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=53)** Security, governance, and operations planning subject matter experts are those who can do the planning around how the business requirements map to these multicloud solutions, both logically and physically.
>
> **[1:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=66)** Security, governance, and operations technology subject matter experts focus on the specific technology solutions that are leveraged.
>
> **[1:13](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=73)** These people have specific skills around specific technologies, including how they are configured, deployed, tested, and operated.
>
> **[1:21](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=81)** Often, these are provided by technology vendors themselves or the vendors create these skills through training programs.
>
> **[1:27](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=87)** Cloud application developers are those people who know how to build, deploy, and test application solutions on a multicloud or a specific public cloud provider.
>
> **[1:37](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=97)** They also typically have DevOps skills or development and operations, such as setting up tool chains, DevOps tools, or anything that is needed to design, build, test and deploy applications on a multicloud platform.
>
> **[1:50](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=110)** Cloud platform subject matter experts are people you need to have around since private and public clouds are needed.
>
> **[1:57](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=117)** You'll need SMEs or subject matter experts that are skilled with specific platform services such as storage, compute, databases, AI, and other systems that may be needed.
>
> **[2:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=127)** No two multicloud projects are exactly the same, and you'll likely find that you need different skills for each multicloud deployment.
>
> **[2:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=134)** These may include edge computing, SMEs or subject matter experts, serverless computing SMEs, containers, and container orchestrations and such, and other technologies that may not even be understood at this time.
>
> **[2:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/skills-and-tools-needed?u=76281980&t=146)** Keep an open mind around who you'll need to leverage to meet the unique needs of your project.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), include: (1), private (1)
> **Analogies:** such as (3)
> **Prerequisites:** you'll need (3)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Other things to consider
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=0)** - [Instructor] It's almost impossible to anticipate everything you need to successfully deploy a multi-cloud, thus you need to proactively think about what needs to be done, and be willing to add and remove steps as needed by the business.
>
> **[0:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=14)** So the first thing you need to consider is to be flexible and open-minded around how you leverage multi-cloud related technology.
>
> **[0:22](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=22)** Here are a few essentials to consider.
>
> **[0:24](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=24)** Because this is not a one and done type project, and we'll be continually improving our multi-cloud deployment, including adding and removing cloud services and even clouds based on the changing needs of the business.
>
> **[0:36](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=36)** This is a marathon, not a sprint, so be prepared to fund and staff the ongoing journey to multi-cloud.
>
> **[0:43](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=43)** Keep in mind that you'll have to change your approaches to operations, security, governance, and other systems within your multi-cloud as technology evolves and your business evolves.
>
> **[0:53](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=53)** You'll have to constantly be looking around for better ways and technology to do all the things multi-cloud needs.
>
> **[1:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=60)** You should design, build, and deploy your multi-cloud to facilitate change.
>
> **[1:04](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=64)** This means that you'll want to architect and design your multi-cloud solution to allow for easy change.
>
> **[1:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=70)** While the details around how you do this are really around the fundamentals of cloud architecture, the gist of this is that you allow for change using configuration changes, and not time consuming and costly redevelopment.
>
> **[1:24](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=84)** For example, instead of deploying our security solution by being forced to change scripts, you now have the ability to change our configuration using a drag and drop interface.
>
> **[1:34](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=94)** That's much easier to leverage and does not require scripting skills.
>
> **[1:39](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=99)** Prepare for process and storage distribution, meaning that as we move to edge computing and other technologies that we promote controlled distribution of processes, storage, and that the future of multi-cloud is going to be more about distribution of processes, such as storage and compute.
>
> **[1:56](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=116)** We have to allow for those changes and how that technology is going to evolve over time.
>
> **[2:02](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=122)** Keep in mind that multi-cloud deployments are large, complex, and expensive.
>
> **[2:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=125)** Without a good deal of planning, as we highlighted in this section, you'll likely not be able to deal with the complexity and scope of multi-cloud.
>
> **[2:13](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/other-things-to-consider?u=76281980&t=133)** It's a must do.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), require (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for example (1), such as (1)
> **Warnings:** keep in mind (2)
> **UI Navigation:** drag and drop (1)
> **Speakers:** - [instructor] (1)


### 2. Selecting Technology

#### Public clouds
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=0)** - [Instructor] Multi-clouds are typically made up of more than one public cloud.
>
> **[0:04](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=4)** Those public clouds are foundational to a multi-cloud architecture.
>
> **[0:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=7)** Simply put, IaaS, or infrastructures-as-a-service public clouds are public cloud services that provide infrastructure, such as storage and compute.
>
> **[0:16](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=16)** Besides IaaS public clouds, other types of public clouds include, software as a service, or SaaS, as well as platform as a service, or PaaS.
>
> **[0:27](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=27)** SaaS public clouds, or software as a service, are basically applications delivered over the internet as a very dynamic website, such as [salesforce.com](https://salesforce.com), even Google Docs.
>
> **[0:39](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=39)** PaaS, or platform as a service, is basically application development, deployment and operations as a service.
>
> **[0:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=46)** While there are three basic types of public clouds, we're focusing on infrastructure as a service, or IaaS, in this course, since it's most relevant to what a multi-cloud is.
>
> **[0:57](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=57)** This is because public IaaS clouds offer infrastructure that you typically find inside most traditional data centers, such as storage, compute, databases, network, things like that.
>
> **[1:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=68)** Public clouds are able to offer things as a service for use by anyone who can pay for their usage and thus, they are delivered over the open internet.
>
> **[1:17](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=77)** This means that while we once had to purchase our own storage systems and compute systems as well as find a place to run them, now we can rent these services over the internet for usage prices that are a fraction of what buying the hardware or software would cost.
>
> **[1:32](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=92)** IaaS clouds provide specific advantages, such as the ability to save capital resources by not having to purchase hardware, software and data center space to invest back into more strategic resources of the business.
>
> **[1:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=106)** This is CapEx, or capital expenditures, versus OpEx, or operational expenditures, that has been the value of public clouds since they came onto the scene, more than 15 years ago.
>
> **[1:57](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=117)** These days we're leveraging public clouds, most often, in either single or multi-cloud configurations for additional reasons.
>
> **[2:04](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=124)** These reasons include most of the innovation is occurring on public cloud these days.
>
> **[2:09](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=129)** So no matter if you're talking about security, software, databases or AI, they have better technology on the public clouds than on more traditional systems.
>
> **[2:19](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=139)** Public clouds can even provide more value when they leverage two, three or four at a time or a multi-cloud.
>
> **[2:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=146)** This is due to the fact that we have more choice and thus, more ability to find the best of breed cloud services.
>
> **[2:31](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=151)** This means that we're able to leverage the best of the best, in terms of cloud services, that meet our specific needs.
>
> **[2:38](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=158)** So what we're looking for when we're selecting public clouds for a multi-cloud is the ability to provide services that are the best fit for existing and future solutions.
>
> **[2:48](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/public-clouds?u=76281980&t=168)** These will be public cloud services that are part of our multi-cloud service catalog, where the greater the number of services, the more ability we'll have to create the most optimized solution.

> [!info]- Semantic Content
>
> **Code Keywords:** public (17), include, (1)
> **Analogies:** such as (4)
> **CLI Commands:** find (3)
> **Definitions:** means that (2)
> **URLs:** [salesforce.com](https://salesforce.com) (1)
> **Speakers:** - [instructor] (1)

#### Private clouds
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=0)** - [Instructor] Private clouds are basically versions of public cloud systems that are able to run on our own hardware within our own data center.
>
> **[0:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=7)** Private clouds have been used in the past when considering that many enterprises viewed public clouds as unsecure considering they were not run on hardware that the enterprises owned.
>
> **[0:18](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=18)** These days, public clouds are typically more secure than on-premise systems.
>
> **[0:22](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=22)** This can in part be attributed to the fact that most of the innovation in security has occurred in the public cloud.
>
> **[0:29](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=29)** While private clouds can be part of a multicloud solution, these days, we see it less and less.
>
> **[0:35](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=35)** Private cloud systems such as OpenStack, an open source private cloud platform, have fewer features and advantages than public clouds.
>
> **[0:42](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=42)** Thus, they're being sought after less often when building a cloud or multi-cloud solution.
>
> **[0:48](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=48)** However, they may still have a place within our solution depending on what the business requirements are.
>
> **[0:53](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=53)** And so that's why we're including a discussion about private clouds here in a course on multi-clouds.
>
> **[0:59](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=59)** Like everything else we're saying here, it's a matter of matching your requirements to the technology.
>
> **[1:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=65)** While private cloud is often not a solution you want to employ, that does not mean for some enterprises it's not the correct solution.
>
> **[1:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=72)** When selecting a private cloud, you really need to consider private cloud system such as OpenStack, an open source private cloud software system, as any other system that you deploy on premise.
>
> **[1:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=85)** This is due to the fact that it's a popular and well supported private cloud operating system platform that's an open source system.
>
> **[1:32](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/private-clouds?u=76281980&t=92)** Much like virtualization systems, private clouds are able to provide basic infrastructure as a service cloud service, such as storage and compute, much the same way as public clouds do.

> [!info]- Semantic Content
>
> **Code Keywords:** private (12), public (6)
> **Analogies:** such as (3)
> **Speakers:** - [instructor] (1)

#### Tools for operations
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-operations?u=76281980&t=0)** - [Instructor] Operations is perhaps the most important aspect of creating and running a multicloud, and the technology that you pick to do better cloud operations, or CloudOps, for multicloud is perhaps one of the most important decisions that you'll make.
>
> **[0:15](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-operations?u=76281980&t=15)** There are several types of tools for operations, some of which are security monitoring and management, governance monitoring and management, database monitoring and management, compute, storage, and other infrastructure monitoring and management, performance operations, network operations, et cetera.
>
> **[0:32](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-operations?u=76281980&t=32)** Keep in mind, this is any tool or technology for monitoring operations ongoing, as well as fixing any issues that may arise.
>
> **[0:41](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-operations?u=76281980&t=41)** When you hear more about multicloud operations, you'll likely hear the term observability.
>
> **[0:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-operations?u=76281980&t=46)** At its essence, observability is the measure of how well internal system states can be inferred from knowledge of external data and states.
>
> **[0:55](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-operations?u=76281980&t=55)** It's a bit different than monitoring, which is something you do, or a verb.
>
> **[1:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-operations?u=76281980&t=60)** Observability is an attribute of a system, or a noun.
>
> **[1:04](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-operations?u=76281980&t=64)** We use this concept more these days since it defines the value that we can get out of our monitoring and management tools, and it's more than just monitoring.
>
> **[1:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-operations?u=76281980&t=74)** The trend is towards observability, so keep that in mind as you select your tools for operations.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Tools for security
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=0)** - [Instructor] Security is a complex topic considering the type of security that you'll use, and thus the types of tools that you use, vary greatly from multicloud to multicloud.
>
> **[0:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=10)** There are three types of security tools to consider, audit tools, encryption tools, and IAM, or identity and access management.
>
> **[0:18](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=18)** Audit tools assist you with auditing systems to deal with legal compliance or other reasons that you want to perform an audit.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=26)** For example, some healthcare regulations require that you keep track of how things are secured and how the data is locked up and how the processing has occurred on the data dealing with security.
>
> **[0:38](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=38)** So your ability to look at these audit records will prove to some legal organization or law enforcement that you're actually tracking the information you need to track in terms of how it's secured and how your records are kept around security.
>
> **[0:53](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=53)** Encryption are tools that allow you to hide data from those who are not authorized to see it.
>
> **[0:58](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=58)** This means that you can keep data on public cloud and remove the risk that others will be able to read it.
>
> **[1:04](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=64)** Identity and access management, or IAM, this is security that allows you to track users, services, and other entities that interact with your multicloud.
>
> **[1:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=72)** IAM uses a directory to keep track of entities, such as Microsoft Active Directory.
>
> **[1:18](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=78)** IAM services allow access or not depending on their identity and if they are provided with partial or complete access.
>
> **[1:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=86)** For complex distributed systems, this is typically the best approach to security.
>
> **[1:31](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=91)** Other types of security include specialized security, such as security testing tools for developers and security technology that is made specifically for edge computing and IoT devices.
>
> **[1:42](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-security?u=76281980&t=102)** Other data security allows data storage systems to operate effectively with security systems that are provided by the database provider or third-party tools.

> [!info]- Semantic Content
>
> **Env Vars:** iam (4)
> **Analogies:** such as (2), for example (1)
> **Code Keywords:** require (1), public (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### Tools for governance
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=0)** - [Instructor] Governance is the ability to place guardrails around resources and service we may leverage from cloud, either single or multicloud.
>
> **[0:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=8)** These are policies or rules that we place around resource usage.
>
> **[0:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=12)** Examples of governance could be only leveraging a cloud service at a specific window of time, such as work hours, or not leveraging more than an allocated amount of resources, such as money for cloud usage.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=26)** Given the role of governance, it's important that this work well within all multicloud deployments.
>
> **[0:31](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=31)** You'll need to track usage of thousands of resources and services, and that would be impossible for you to do manually.
>
> **[0:38](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=38)** There are several types of governance that you may employ, including resource governance, service governance, compliance governance, and cost governance.
>
> **[0:47](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=47)** Resource governance, or infrastructure governance, as it's often called, is the ability to place usage policies around cloud resources, such as storage and compute.
>
> **[0:56](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=56)** These are coarse-grain resources, or resources that are more broadly leveraged services, such as storage and compute, versus services which may be a part of a resource.
>
> **[1:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=66)** Basically you're controlling access by using governance policies that are enforced by the governance tool.
>
> **[1:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=72)** Service governance is governancing cloud services or APIs that are typically a part of larger resources, as we just covered.
>
> **[1:21](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=81)** These are discrete services that usually carry out a single function, such as updating a date in a database or doing a credit check for a customer.
>
> **[1:30](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=90)** Something that's small and is a service that when combined with other services creates an application.
>
> **[1:37](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=97)** These work by the application or human calling the service governance system to access the API or service, which will allow access according to policy.
>
> **[1:48](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=108)** Compliance governance is much like service and resource governance and is created especially to deal with the legal compliance around the use of cloud resources and services.
>
> **[1:59](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=119)** An example of this is checking to ensure that a transaction is legal as defined by the country and local laws that may be applicable, such as forcing the recording of a to-the-minute timestamp so that it can easily be audited by authorities.
>
> **[2:15](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=135)** Cost governance places limits on the amount of money that can be spent in the cloud, and by whom, and for what purpose.
>
> **[2:22](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=142)** Cost governance often works with cost-monitoring applications, again using set of policies to put limitations on what can be spent and for what purpose.
>
> **[2:33](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=153)** This keeps you out of trouble and not getting an unexpectedly large cloud bill due to a cloud user not shutting down a cloud service after use, or other ways to overspend in the cloud.
>
> **[2:45](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=165)** Governance is a handy thing when considering the number of resources and services that you have to keep track of when building and deploying a multicloud.
>
> **[2:54](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/tools-for-governance?u=76281980&t=174)** Thus, planning and selection of the right governance tooling should be a focus of your multicloud architecture and design.

> [!info]- Semantic Content
>
> **Analogies:** such as (6)
> **Definitions:** is a  (2)
> **Code Keywords:** function (1)
> **Env Vars:** api (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Connecting legacy systems
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/connecting-legacy-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/connecting-legacy-systems?u=76281980&t=0)** - [Instructor] Multi-clouds typically include some legacy connectivity, and for a good reason.
>
> **[0:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/connecting-legacy-systems?u=76281980&t=5)** Most of the enterprise data is still housed in legacy systems.
>
> **[0:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/connecting-legacy-systems?u=76281980&t=8)** Thus, they need to work and share data with a multi-cloud deployment in ways that are nearly seamless.
>
> **[0:15](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/connecting-legacy-systems?u=76281980&t=15)** The tools to connect and share data between traditional systems and public clouds within a multi-cloud are numerous.
>
> **[0:20](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/connecting-legacy-systems?u=76281980&t=20)** Thus, it really depends on what data you need to share, where it exists in the legacy system, and where it exists within your multi-cloud deployment.
>
> **[0:30](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/connecting-legacy-systems?u=76281980&t=30)** Most of the time, it's databases residing on legacy systems, such as Db2 or Oracle, that are exchanging data with databases within a multi-cloud, such as AWS's DynamoDB, or hundreds of other databases that exist on public clouds.
>
> **[0:45](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/connecting-legacy-systems?u=76281980&t=45)** For this, we'll leverage some type of data integration technology that's able to connect to a database on the legacy system, extract the data, and then change the structure of the data and sometimes the content, so it's understood by the databases receiving the data on the cloud.
>
> **[1:01](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/connecting-legacy-systems?u=76281980&t=61)** Sometimes, this technology works in the cloud and does the data integration from that platform.
>
> **[1:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/connecting-legacy-systems?u=76281980&t=66)** Sometimes it works on more traditional systems, such as those found in a data center.
>
> **[1:11](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/connecting-legacy-systems?u=76281980&t=71)** What's important to understand is that these tools are available to you at work for decades and should be able to allow for data to be exchanged for any reason at any time for all use cases.
>
> **[1:23](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/connecting-legacy-systems?u=76281980&t=83)** There should be little or no barriers to allowing clouds on legacy systems to work and play well together.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), this, (1)
> **Analogies:** such as (3)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)

#### Data integration between clouds
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/data-integration-between-clouds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/data-integration-between-clouds?u=76281980&t=0)** - [Narrator] Just as we need to exchange data between cloud providers and legacy systems, also, we need to exchange data between cloud brands as well.
>
> **[0:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/data-integration-between-clouds?u=76281980&t=8)** For example, a database and data storage system running on Amazon web services to the same, running on Microsoft.
>
> **[0:15](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/data-integration-between-clouds?u=76281980&t=15)** Much the same approaches apply here.
>
> **[0:17](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/data-integration-between-clouds?u=76281980&t=17)** The ability to leverage data integration, cloud services, or software that can connect both data stores, and deal with the differences as the data moves from one database on one cloud to another.
>
> **[0:29](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/data-integration-between-clouds?u=76281980&t=29)** Sometimes many databases to many databases, and other more complex integration patterns.
>
> **[0:36](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/data-integration-between-clouds?u=76281980&t=36)** Keep in mind that this data should move in real time on request.
>
> **[0:40](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/data-integration-between-clouds?u=76281980&t=40)** Thus, there is little latency with the application that's requesting the data and the data being read by that application.
>
> **[0:48](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/data-integration-between-clouds?u=76281980&t=48)** This allows us to build a multi-cloud that's able to exchange data as needed, when needed, and to support any business process.
>
> **[0:56](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/data-integration-between-clouds?u=76281980&t=56)** This makes the data more usable by the business and ensures that the data won't be copied or replicated so there is a single source of truth for the business.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### Linking things together
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/linking-things-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/linking-things-together?u=76281980&t=0)** - [Instructor] All of the tools we're listing here also need to work and play well together.
>
> **[0:04](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/linking-things-together?u=76281980&t=4)** This means that our governance tool is working with our security tools and our security tool is working with our operations tools and so on.
>
> **[0:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/linking-things-together?u=76281980&t=12)** This is important with multi-cloud, considering the number of tools that we need to leverage, and that we never want to use more tools than we need.
>
> **[0:20](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/linking-things-together?u=76281980&t=20)** Thus, we're not focused on selecting tools that exist within a single cloud provider but tools that are able to work with other tools and also across providers.
>
> **[0:30](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/linking-things-together?u=76281980&t=30)** The objective here is to simplify the complexity that multi-cloud brings by leveraging the same tooling across clouds, as much as we can.
>
> **[0:37](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/linking-things-together?u=76281980&t=37)** This means that we're not dealing with three different security tools for each cloud provider when a single tool working across cloud providers works better.
>
> **[0:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/linking-things-together?u=76281980&t=46)** Same with operations, governance, et cetera, where we're looking for single layers that are able to operate across clouds, not only solving problems within a single cloud provider.
>
> **[0:55](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/linking-things-together?u=76281980&t=55)** Of course, we're not always going to find cross-cloud solutions that work best for a specific needs and you'll find that you'll have to make some trade offs to get our multi-cloud functional and optimize.
>
> **[1:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/linking-things-together?u=76281980&t=66)** However, in the future, you'll need to find replacement technologies and leverage them if they are better fit and remove the complexity from our multi-cloud deployment.
>
> **[1:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/linking-things-together?u=76281980&t=74)** You'll find that fighting complexity within our multi-cloud is an ongoing battle.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), make (1)
> **Definitions:** means that (2), is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 3. Approaching Ops

#### Building an ops process
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=0)** - [Narrator] When building an ops or operations process, let's discuss multicloud operations first since ops are the hardest problem to solve.
>
> **[0:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=8)** This is due to the fact that the number of moving parts that we need to monitor and correct at times, which makes ops complex.
>
> **[0:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=14)** When developing multicloud operations we're often doubling or tripling the amount of services under management, as well as managing many different types of brands of services running at the same time.
>
> **[0:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=25)** So why are we leveraging more than one storage system or several different databases?
>
> **[0:30](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=30)** It's to take advantage of best of breed, meaning that developers and application builders are picking the technology, in this case cloud services, that they find to be best fit for the types of problems they are solving.
>
> **[0:42](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=42)** So how do we build an ops process around operating very complex multicloud deployments?
>
> **[0:48](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=48)** You just need to think in terms of what problems you need to solve and create processes around that idea.
>
> **[0:53](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=53)** We can break this process down into SecOps, or security operations.
>
> **[0:59](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=59)** Or how we're going to run and monitor core security systems such as identity and access management and encryption.
>
> **[1:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=66)** GovOps, or government operations, are how we're going to monitor governance systems such as resource, service, and cost governance.
>
> **[1:13](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=73)** PerOps, or performance operations are how we're going to monitor the performance of all running components such as storage, compute, and databases.
>
> **[1:22](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=82)** App Ops, or application operations, are how we're going to monitor the applications that are running.
>
> **[1:28](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=88)** Data Ops, or data operations, are how we're going to monitor and operate databases in data storage in general.
>
> **[1:35](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-an-ops-process?u=76281980&t=95)** Other ops or everything else that should need to be a part of this process, such as edge computing operations, and other types of systems that may or may not be a part of your multicloud.

> [!info]- Semantic Content
>
> **Analogies:** such as (4)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)

#### Building ops automation
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=0)** - [Instructor] Defining an ops process is only half of the solution.
>
> **[0:04](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=4)** We also need to define how we're going to automate that process using tools that are able to carry out ops automation without the need for humans to be involved.
>
> **[0:13](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=13)** However, while many of these processes can be automated, there's still a need for humans to become involved.
>
> **[0:19](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=19)** People are needed for fixing issues that only humans can fix, such as restarting a cloud-based server manually or even fixing issues with the ops automation itself.
>
> **[0:29](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=29)** The main objective of building ops automation is to select the tools that will meet the needs of both operations and automation.
>
> **[0:38](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=38)** We do this by defining the requirements for each component of our multi-cloud, such as security, performance, applications, containers, et cetera, including everything that was named as part of our automation process from GovOps or Other Ops, or anything that you feel you need to be a part of your deployment.
>
> **[0:57](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=57)** As you can see here we're listing six things to consider, including SecOps or security operations, GovOps or government operations, PerfOps or performance operations, App Ops or application operations, Data Ops or data operations, and Other Ops, meaning everything else.
>
> **[1:15](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=75)** Edge computing, IOT, things that may go into a particular ops process that you need that are specific to your deployment.
>
> **[1:23](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=83)** Then it's a matter of looking at the marketplace and discovering what technologies are available to perform these automations.
>
> **[1:29](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=89)** You then select tests, and accept each ops automation technology.
>
> **[1:33](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=93)** So can you automate all aspects of multi-cloud ops?
>
> **[1:36](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=96)** Not really, this is about automating most of what you can automate.
>
> **[1:40](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=100)** At times, this is going to be almost everything depending on the size and complexity.
>
> **[1:44](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=104)** Other use cases, there will be unique attributes of your multi-cloud that won't allow much automation at all.
>
> **[1:50](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-ops-automation?u=76281980&t=110)** What's important here is that we automate as much as we can.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Code Keywords:** else. (1)
> **Env Vars:** iot (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Building reactive ops
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-reactive-ops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-reactive-ops?u=76281980&t=0)** - [Instructor] There are two main types of ops automation.
>
> **[0:02](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-reactive-ops?u=76281980&t=2)** Reactive ops are those automations that respond to problems.
>
> **[0:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-reactive-ops?u=76281980&t=7)** For example, a storage server goes down and then restart operations are launched to correct the issues.
>
> **[0:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-reactive-ops?u=76281980&t=12)** Proactive ops are those automations that are able to discover problems before they actually cause problems, such as network packet errors that may indicate a network switch is going to fail and replacing it before a complete failure.
>
> **[0:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-reactive-ops?u=76281980&t=25)** Let's take a closer look at tools that support reactive operations including anything that can monitor, detect, and react.
>
> **[0:33](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-reactive-ops?u=76281980&t=33)** Monitor, a cloud service or resource ongoing looks at what's working and what may not be working.
>
> **[0:39](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-reactive-ops?u=76281980&t=39)** Detect, to determine when something goes wrong, such as a storage server failure within the public cloud provider.
>
> **[0:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-reactive-ops?u=76281980&t=46)** This means that it finds an issue and kicks off events and notifications to fix the issue.
>
> **[0:52](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-reactive-ops?u=76281980&t=52)** Finally, react means that some process sees the notifications or event that something has gone wrong and takes actions to fix it such as automatically rebooting a storage system to reset it and get it back online.
>
> **[1:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-reactive-ops?u=76281980&t=66)** Our multi-cloud deployment needs to be operated with automation that's not only spotting issues where humans must intervene, but issues that must be taken care of using automation or an automated reaction.
>
> **[1:18](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-reactive-ops?u=76281980&t=78)** If you focus on this, you'll find that multi-cloud operations will take care of many things itself.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (1), let (1), public (1), finally, (1), this, (1)
> **Analogies:** such as (3), for example (1)
> **Definitions:** means that (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Building proactive ops
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-proactive-ops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-proactive-ops?u=76281980&t=0)** - [Narrator] So there are two types of ops automation.
>
> **[0:03](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-proactive-ops?u=76281980&t=3)** Now let's talk about the second type, proactive ops.
>
> **[0:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-proactive-ops?u=76281980&t=6)** Here, we're looking at systems ongoing to determine when issues are likely to arise.
>
> **[0:11](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-proactive-ops?u=76281980&t=11)** For example, if we're getting I/O errors from a storage system, that's a good indication that we're heading to a failure in the short term.
>
> **[0:19](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-proactive-ops?u=76281980&t=19)** Thus, we're able to correct the problem before it actually becomes a complete failure.
>
> **[0:24](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-proactive-ops?u=76281980&t=24)** This is more helpful than just running ReactiveOps considering that in ReactiveOps we're waiting for something to fail and thus negatively impact the business before we can respond and correct the issue.
>
> **[0:36](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-proactive-ops?u=76281980&t=36)** ProactiveOps is the future of all cloud operations or cloud ops and specifically multi-cloud operations.
>
> **[0:42](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-proactive-ops?u=76281980&t=42)** Indeed, we are seeing new technologies emerge such as AI Ops or artificially intelligent operations.
>
> **[0:48](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-proactive-ops?u=76281980&t=48)** These are ops tools that are able to monitor systems over time finding and fixing problems.
>
> **[0:54](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-proactive-ops?u=76281980&t=54)** By doing this they're able to learn as they monitor and fix systems becoming much better at finding patterns that are likely to lead up to a failure and reinforce their learning ongoing through experiences that teaches the AI engine.
>
> **[1:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-proactive-ops?u=76281980&t=68)** For example, you can see here where we're able to find issues that can lead up to major failures such as finding an increase in error messages for storage systems that may be leading to a catastrophic failure thus executing an emergency backup to protect the data.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (2)
> **Code Keywords:** let (1), type, (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### Case study: Multicloud operations
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-operations?u=76281980&t=0)** - [Instructor] To understand multi-cloud operations better, it's best to look at a use case or a case study.
>
> **[0:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-operations?u=76281980&t=6)** Henry's Hammocks needs to deploy a multi-cloud to support its growing operations around the production and sales of special custom hammocks.
>
> **[0:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-operations?u=76281980&t=14)** As such, it needs to figure out a set of operational processes, automation, approaches and tooling to support a multi-cloud that includes Amazon Web Services, Microsoft and Google.
>
> **[0:27](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-operations?u=76281980&t=27)** Henry's first task is understand what their multi-cloud solution is, including services and resource that will be under operational control.
>
> **[0:35](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-operations?u=76281980&t=35)** They need to build a multi-cloud operations process around SecOps, or identity access management that spans all clouds, GovOps, a service governance system that spans all clouds, PerfOps, a database and application performance monitoring system, App Ops, monitoring Henry's 100 core applications, Data Ops, monitoring their SQL server database systems as well as older Oracle databases that may be running in the cloud, Other Ops, in this case, an edge-based computing system that operates on the factory floor.
>
> **[1:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-operations?u=76281980&t=68)** Henry is able to automate about 80% of the types of operations listed above, including about 40% of the automation tools that are reactive in nature and 60% that are more proactive in nature, leveraging AI Ops and other state-of-the-art operational tools.
>
> **[1:24](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-operations?u=76281980&t=84)** Using this process, automation, technology, approaches and ops configuration, Henry is able to maintain a good up-tying record for their multi-cloud deployment, including the ability to detect issues prior to them stopping production, in many instances.
>
> **[1:39](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-operations?u=76281980&t=99)** Most of the success with ops deployment is around Henry's ability to abstract the operational complexity away from the humans that operate the system, instead of dealing with the details around monitoring and management all of the cloud services within a multi-cloud deployment, much of this, automated and controlled through a user interface that's able to provide a single pane of glass, in terms of how all of the complex systems are seen, monitored and corrected.
>
> **[2:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-operations?u=76281980&t=125)** Indeed, as Henry adds more services, the way that he'll approach ops should not require any additional human resources.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), abstract (1), this, (1), interface (1), require (1)
> **Env Vars:** sql (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)


### 4. Approaching Dev

#### Building a dev process
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=0)** - [Instructor] Since this is a course about multi-cloud architecture, we're not going to focus on the details behind development or what development is.
>
> **[0:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=7)** Here, we're going to focus on how development is related to the deployment of a multi-cloud and some of the basic concepts that you need to understand, and we'll be approaching development from a POV, or a point of view, of a multi-cloud architect, who understands development but is more concerned about the holistic multi-cloud solution or architecture.
>
> **[0:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=25)** If you're interested in learning more details on development in the cloud, there are several courses here that will provide you with deeper knowledge on that topic.
>
> **[0:33](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=33)** So what do you need to understand about development in multi-cloud?
>
> **[0:36](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=36)** First, that we are changing the way that we do development from something that is very static and inflexible to something that is very flexible, agile and focuses on delivering value.
>
> **[0:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=46)** For those of you charged with building and development approach in a development architectures to support design, development, integration, testing and deployment on a multi-cloud, there are a few basics that become important, especially regarding what is done to build the development platform of a multi-cloud.
>
> **[1:04](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=64)** We're building the tool chain and basic process to allow developers to succeed.
>
> **[1:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=68)** So we need to understand what's needed, obtain the tools, configure the tools, define the skills and get out of the way.
>
> **[1:17](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=77)** The developers define what they need to be successful, and it's your job as the architect to select the tools, technology and processes that will work best for them based on what they need.
>
> **[1:29](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=89)** Typically, questions that need to be answered include, what's the business requirements, including the purpose of the application that the developer intends to build for the business?
>
> **[1:38](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=98)** What's the purpose for building and deploying applications, including the use of agile and DevOps?
>
> **[1:44](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=104)** what tool chains are needed for the developers to become successful?
>
> **[1:47](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=107)** What platforms or public cloud or clouds they're going to need to deploy, and what configuration they will likely use?
>
> **[1:54](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=114)** What about security and governance requirements?
>
> **[1:57](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=117)** What about databases and other storage requirements?
>
> **[2:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=120)** Any special technology needed, such as AI, IoT, serverless, et cetera?
>
> **[2:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=127)** Multi-cloud is not just a platform where enterprise applications reside, but a platform where we build net new applications as well.
>
> **[2:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-dev-process?u=76281980&t=134)** This is a fundamental reality we need to get right as part of any multi-cloud deployment.

> [!info]- Semantic Content
>
> **Code Keywords:** static (1), include, (1), public (1)
> **Definitions:** is a  (2)
> **Env Vars:** pov (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Building automation
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-automation?u=76281980&t=0)** - [Instructor] Automation of the development process for multicloud is really just a use case for DevOps automation.
>
> **[0:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-automation?u=76281980&t=6)** You'll find that many of the tools, processes, and culture changes are the same.
>
> **[0:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-automation?u=76281980&t=12)** If you're looking for more detail on DevOps and the automation of DevOps processes and tools to support software development for multicloud or cloud computing in general, make sure to check out the other courses here that are specific to DevOps in the cloud.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-automation?u=76281980&t=26)** For our purposes here, we can look at a typical DevOps tool chain and understand how things are automated, generally speaking.
>
> **[0:32](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-automation?u=76281980&t=32)** The process, as well as the types of tools leveraged, can be changed to meet your specific requirements.
>
> **[0:37](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-automation?u=76281980&t=37)** There are two major groups of tools.
>
> **[0:39](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-automation?u=76281980&t=39)** Build automation is tooling that it takes to design and build software applications, passing it on to automated testing.
>
> **[0:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-automation?u=76281980&t=46)** Anything that's related to building software here, including continuous integration tools, that combine all subsystems into a single unified software system.
>
> **[0:55](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-automation?u=76281980&t=55)** Release automation is moving to testing, perhaps staging, and then deployment.
>
> **[1:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-automation?u=76281980&t=60)** Both of these groups of tools are leveraged to build and deploy software systems to a multicloud.
>
> **[1:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-automation?u=76281980&t=66)** Also, they will be engineered to make sure that the target platforms, which could be any system running within a multicloud, are considered when building and deploying the software.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Continuous everything
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/continuous-everything?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/continuous-everything?u=76281980&t=0)** - [Narrator] One of the main themes of building systems using Agile and DevOps processes and tool chains is that we're iterating everything or being continuous.
>
> **[0:09](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/continuous-everything?u=76281980&t=9)** By saying continuous, I mean, we're always developing, always designing, always testing, and always improving the software during the development process as it's being defined and deployed from the tool chain, but also continuously releasing better versions for any reason at any time.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/continuous-everything?u=76281980&t=26)** So, a key theme here in terms of doing development for multi-cloud is that we're no longer leveraging static software releases such as, 1.0, 2.0, etcetera.
>
> **[0:37](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/continuous-everything?u=76281980&t=37)** We're going through all the process continuously as needed by the business to ensure that the software not only lives up to the needs of the business, but changes and updates are made quickly as the business needs the changes.
>
> **[0:49](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/continuous-everything?u=76281980&t=49)** And looking at our example of continuous testing, you can see that we never stop iterating through the process.
>
> **[0:54](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/continuous-everything?u=76281980&t=54)** Testing is ongoing as deployment, integration, development, and other parts of the DevOps process.
>
> **[1:01](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/continuous-everything?u=76281980&t=61)** This is a value of DevOps that's acceptable to all types of deployed platforms, including multi-cloud.
>
> **[1:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/continuous-everything?u=76281980&t=67)** It's a culture, set of tools, and a process that supports this.

> [!info]- Semantic Content
>
> **Code Keywords:** static (1), this. (1)
> **Versions:** 1.0 (1), 2.0 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Integration of dev and ops
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=0)** - [Instructor] Before we leave the topic of development of software for multi-cloud, we need to address the most important aspect of development in DevOps, or how ops and dev work together.
>
> **[0:11](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=11)** Development operations were traditionally groups that did not work together.
>
> **[0:15](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=15)** Indeed, it was more a rival relationship, considering that development would put software into production, and the operations team would have to deal with any operational problems.
>
> **[0:24](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=24)** These problems could be traced back to poor development practices or a lack of testing or both.
>
> **[0:30](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=30)** Having two groups working separately caused its own share problems, such as speed to fix, having to follow a slow bureaucratic process to deal with problems, such as needing formal requests to flow between the two groups, causing latency.
>
> **[0:44](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=44)** Thus, if the business needed something fixed, even small problems, it could take days or weeks.
>
> **[0:49](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=49)** Speed to solution, considering that dev followed a slower process in building and deploying software that relied on the fact that one task is completed before another one begins.
>
> **[0:59](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=59)** Moreover, any issues with the software release to operations means that the process is slowed down even more.
>
> **[1:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=65)** Businesses had to wait months to get solutions that are needed to automate the business, which without these solutions, revenue suffers.
>
> **[1:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=74)** So when looking at what DevOps is, it's about automating more productive ways to build, deploy and operate systems on multi-cloud and single clouds.
>
> **[1:23](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=83)** This is especially important in the world of multi-cloud, considering that the target systems are heterogeneous, meaning many types and brands of clouds exist and thus, that makes both dev and ops more complex.
>
> **[1:35](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=95)** Therefore, the need to have dev and ops teams working together and thus, promoting a culture of collaboration to speed up development and fixes.
>
> **[1:44](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/integration-of-dev-and-ops?u=76281980&t=104)** It's critical that we're leveraging this for multi-cloud, else you will not be able to find the same amount of business value as you could if DevOps processes, tooling and the culture was not leveraged.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Case study: Multicloud development
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-development?u=76281980&t=0)** - [Instructor] Back to our friends at Henry's Hammocks.
>
> **[0:02](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-development?u=76281980&t=2)** They're looking to leverage a multi-cloud to bring more value to their business.
>
> **[0:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-development?u=76281980&t=6)** So we're looking at how Henry is leveraging DevOps to redo his development processes, including his development and operations team, to build and deploy applications to create the maximum amount of value as the company can from the use of multi-cloud based applications.
>
> **[0:23](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-development?u=76281980&t=23)** Since the multi-cloud will support several brands of clouds, including Amazon Web Services, Microsoft, and Google, the development processes and development tools, including design, coding, testing, and deployment need to work with many different target platforms.
>
> **[0:38](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-development?u=76281980&t=38)** Thus, Henry's Hammocks will need to consider this and the process they create as well as the tools they leverage in the tool chains.
>
> **[0:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-development?u=76281980&t=46)** The company has chosen to go with a cloud only DevOps tool chain, meaning that the DevOps tool chain will run across three cloud providers using the best tool for the job, no matter what cloud platform the application is being built to deploy on.
>
> **[1:01](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-development?u=76281980&t=61)** Instead of creating three different ops teams to support the three different public clouds, the company will leverage a unified DevOps team.
>
> **[1:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-development?u=76281980&t=67)** By that, I mean the developer and operation engineers will be in the same group, and they will need to work together to ensure that the applications are being developed, tested, and deployed promptly.
>
> **[1:19](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-development?u=76281980&t=79)** The operations team is working closely with the developer to ensure that the deployed applications are operating in an optimized way, and any problems are fixed using a flexible agile process and supporting tool chain.
>
> **[1:32](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-development?u=76281980&t=92)** By leveraging this, the company is able to deploy solutions in one third the time as before they leveraged DevOps and fixes occur 20 times faster as prior.
>
> **[1:44](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-development?u=76281980&t=104)** Considering the value that multi-cloud is able to bring and the value that DevOps brings to this value, the company will end up having an IT operations and development efficiency rating that's likely to improve 200%.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), this, (1)
> **Speakers:** - [instructor] (1)


### 5. Approaching Gov

#### Resource governance and multicloud
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980&t=0)** - [Instructor] Resources are anything that provides a holistic service from a cloud provider such as storage, compute, databases, AI, et cetera.
>
> **[0:09](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980&t=9)** They're also known as coarse grained services considering that they can be broken down into much smaller services or microservices.
>
> **[0:16](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980&t=16)** We need to govern these services considering the value that each brings.
>
> **[0:20](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980&t=20)** Value defining just how applications and other services and humans are allowed to access these resources, thus putting guardrails around them to avoid accidental erroneous misuse of these resources.
>
> **[0:33](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980&t=33)** Policies are created to define how resources may be assessed, and those that need a specific service from these resources need to go through a resource governance tool as a gatekeeper to access those resources, using the limitations that are outlined by the policies.
>
> **[0:49](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980&t=49)** Governance policies, which are systemic to all types of governance tools, can be considered small programs where you're able to define these rules of access, even defining more complex policy logics, such as "if this, then that, else this."
>
> **[1:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980&t=65)** Capabilities that you'll find in most programming languages.
>
> **[1:09](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980&t=69)** This is specifically important for multi-cloud deployment.
>
> **[1:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980&t=72)** Considering that we're leveraging two to four public clouds, we have hundreds of coarse grained resources that we have to keep track of and make sure they are leveraged correctly.
>
> **[1:20](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980&t=80)** Coarse grained refers to a service that does a great many things such as storage, compute, databases, et cetera.
>
> **[1:28](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980&t=88)** Holistic governance of multi-cloud deployment is something that a human could not do without resource governance automation.
>
> **[1:35](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/resource-governance-and-multicloud?u=76281980&t=95)** This is pretty much a mandatory capability if you're looking to deploy a multi-cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), this. (1), public (1)
> **Analogies:** such as (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** known as (1), refers to (1)
> **Speakers:** - [instructor] (1)

#### Service governance and multicloud
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=0)** - [Instructor] Services are typically a sub-component of a resource, such as storage and compute, and the APIs that are provided by that resource to carry out specific functions.
>
> **[0:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=10)** Many refer to these services as fine-grained, whereas resources themselves are coarse-grained.
>
> **[0:15](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=15)** For example, add data to an Amazon Web Services storage bucket, which is a small function that updates the bucket with a small amount of data, update a table with specific customer information, such as a single customer, allocate more processors to a specific task or ask the cloud provider to add more CPUs.
>
> **[0:34](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=34)** Keep in mind that microservices are an example of a fine-grained service.
>
> **[0:38](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=38)** These types of services carve out very specific and narrowly defined activities.
>
> **[0:43](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=43)** It's important that we control access to put limitations on these fine-grained clouds or application services as well.
>
> **[0:50](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=50)** This service governance process includes many of the same types of limitations and rules that are written into service governance policies, such as who can access the specific service, when, or what purpose, and how many times service governments access can take place over a specific time window.
>
> **[1:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=68)** You can see how this relationship works on this graphic, where we have a single service governance layer that operates across all services on all clouds within a multi-cloud deployment.
>
> **[1:19](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=79)** Service governance is especially important for multi-cloud deployment.
>
> **[1:22](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=82)** This considering that we're leveraging two to four public clouds.
>
> **[1:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=86)** Thus, 1000s of services have to be kept track of and governed.
>
> **[1:30](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=90)** Service governance is something that humans could not do without service governance automation.
>
> **[1:36](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=96)** Service governance does a few things.
>
> **[1:38](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=98)** First, it allows developers to access services, confident they won't be hurting something, such as accidentally deleting all the data in the database.
>
> **[1:45](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=105)** Limitations bring safety.
>
> **[1:47](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=107)** Second, it provides protection for how the services should be used, defining a specific use case, and never allowing other use cases to leverage a specific service.
>
> **[1:57](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=117)** For example, using a database update service to insert a fraudulent SSN or Social Security number, with that data being checked for the service policy, and perhaps the database integrity checks as well.
>
> **[2:09](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/service-governance-and-multicloud?u=76281980&t=129)** Finally, works with the multi-cloud security system to ensure that access is allowed via security before the governance policies are even leveraged.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for example (2)
> **Code Keywords:** function (1), public (1), case, (1), finally, (1)
> **Env Vars:** ssn (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Cost governance and multicloud
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=0)** - [Instructor] Cost governance provides the capability to track resources and service usage in terms of how much these resources are costing ongoing.
>
> **[0:09](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=9)** Put limitations of costs around resource usage, such as hitting a budget limitation of a storage system for a given month.
>
> **[0:15](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=15)** Just as with other governance systems, this is carried out through policy enforcement.
>
> **[0:20](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=20)** Track the who, what, and when of anything that costs money to leverage in the cloud.
>
> **[0:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=25)** Using cost governance, there is no mystery in terms of who used a service, thus spending the money including the time, place, and duration.
>
> **[0:35](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=35)** Provide chargebacks and show backs, ensuring that we're allocating costs to budgets accurately between divisions within a company, the company itself, and specific human users.
>
> **[0:45](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=45)** Provides demand planning capabilities, such as planning for budgets of costs of cloud resources in the future based on what was spent in the past as learning patterns.
>
> **[0:55](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=55)** Cost governance is also related to the concept of FinOps, which will be covered in another video.
>
> **[1:01](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=61)** FinOps, or financial operations, is related to the cost of cloud computing as a set of concepts, processes, and disciplines that are related to managing the cost of cloud computing and the value that it may be able to deliver.
>
> **[1:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=74)** One can consider cost governance as tools that allow FinOps to monitor and control cloud computing cost properly.
>
> **[1:21](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=81)** FinOps includes: inform, means getting visibility into all cloud spending, optimize, meaning automating and rightsizing resources, and operate, meaning continuously improving cost efficiency.
>
> **[1:34](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=94)** Just like resource and service governance, cost governance is mandatory for most cloud deployments given the number of cloud resources and cloud services you have to keep track of.
>
> **[1:44](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/cost-governance-and-multicloud?u=76281980&t=104)** Without having automated monitoring and enforcement of cost policies, this could not be tracked manually.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), just like (1)
> **Speakers:** - [instructor] (1)

#### Security governance and multicloud
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=0)** - [Instructor] Security and governance need to work together to operate a multicloud deployment successfully.
>
> **[0:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=5)** Thus, there can be no point where governance system is not leveraging security and the other way around.
>
> **[0:11](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=11)** Security provides authentication of who and what can access a resource, service, application or other things that need to be authenticated one to another.
>
> **[0:20](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=20)** Governance provides limitations on what those whos and whats can do with those resources, services or applications.
>
> **[0:28](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=28)** So you really can't have one working optimally without the other.
>
> **[0:32](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=32)** They serve different roles and are especially important for multicloud deployments, considering the complexity of those deployments and the need to keep track of all resources, services, humans, etc.
>
> **[0:42](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=42)** and doing so by using automated services that are not likely to make a mistake.
>
> **[0:48](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=48)** In this graphic, we show that security governance spans many cloud services across cloud brands.
>
> **[0:52](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=52)** All of these services in the right-hand side of your screen are going to exist in different cloud providers.
>
> **[0:58](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=58)** Such as Amazon Web Services, Microsoft and Google.
>
> **[1:01](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=61)** This is in contrast to cloud deployment where we are attempting to leverage manual processes to track services and resource usage and governance of those resources.
>
> **[1:11](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=71)** While it's extremely difficult to pull off for a single cloud deployment, it's pretty much impossible for a multicloud deployment.
>
> **[1:18](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/security-governance-and-multicloud?u=76281980&t=78)** In other words, you need to get governance and security right and they must have the ability to work together through automation.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Case study: Multicloud governance
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=0)** - [Narrator] Back to our company Henry's Hammocks, and moving them closer to a multicloud deployment.
>
> **[0:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=5)** Now that we have operations planning well defined, Henry needs to have the ability to govern several AWS object storage systems, govern 10 compute and storage instances on the Google cloud in support of manufacturing processes, govern five different databases running on the Microsoft cloud, as well as five more compute instances.
>
> **[0:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=25)** Additionally, Henry's IT group needs to manage cross-cloud security including user and process authentication, manage cross-cloud governance that are able to enforce custom policies for all resources, services, applications, and databases, provide core cost monitoring and governance services, and or automations.
>
> **[0:44](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=44)** In order to provide governances needed by Henry's multi-cloud deployment, his IT group needs to do the following, define the resources and services that need to be governed on all public clouds that are a part of Henry's multi-cloud.
>
> **[0:56](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=56)** This means what they do, what purpose they serve, who owns them, and any defined rules of access.
>
> **[1:03](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=63)** Define the business usage for each service and or resources on the cloud, what they do, what they should cost, and current allocated budgets for cloud services and resources.
>
> **[1:13](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=73)** Evaluate and select a resource governance tool, cost governance, and service governance tools, selecting the best tools that are able to fit the governance needs of Henry's multi-cloud.
>
> **[1:24](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=84)** Define draft policies for each resource service, database, and other assets that need to be governed.
>
> **[1:29](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=89)** This by working with developers, data administrators, application owners, and so on.
>
> **[1:34](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=94)** Working with cloud governance, subject matter experts to define right and deploy the right policies.
>
> **[1:40](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=100)** Test and deploy each policy ensuring that they meet the expectations of the asset owners who are also able to work and play with multi-cloud security systems that have been deployed or will be deployed.
>
> **[1:50](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=110)** Establish cost governance policies by working with accounting and finance group at Henry's.
>
> **[1:55](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=115)** This by establishing budgets, spending limitations, or related authorization to what can be spent, for what, and by whom.
>
> **[2:02](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=122)** This includes reporting demand planning for the finance group in support of year end budgeting.
>
> **[2:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=127)** As you can see from this use case, multi-cloud governance is complex and takes time to plan and deploy the right solutions.
>
> **[2:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-governance?u=76281980&t=134)** However, just as with Henry's Hammocks, you're likely to see success during your first multi-cloud deployment if your foundational governance system is in place covering all the assets you need to control.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), case, (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Speakers:** - [narrator] (1)


### 6. Approaching FinOps

#### What is multicloud FinOps?
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980&t=0)** - [Instructor] FinOps is short for financial operations.
>
> **[0:02](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980&t=2)** It's a financial cloud management approach that combines best practices, a culture of efficiency, and effective systems to produce absolute financial and operational control for cloud computing spending.
>
> **[0:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980&t=14)** As we covered in the video defining cost governance, it's essential for multicloud when considering the complexity of the multicloud platforms different ways that usage is billed, our own systems accounted for.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980&t=26)** This in relation to the value that multicloud-based applications and systems are able to bring to the business.
>
> **[0:33](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980&t=33)** So, one can consider FinOps as bringing process automation and discipline to leveraging multicloud computing.
>
> **[0:39](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980&t=39)** This ensures all money spent will be considered and that FinOps will see continuous financial improvements to cost efficiencies of cloud-based usage and including the ways to bring more value back into the business from the use of multicloud deployments.
>
> **[0:54](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980&t=54)** FinOps is made up of three major concepts.
>
> **[0:56](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980&t=56)** Inform, the ability to provide visibility and observability for all costs and usage, automating many of the responses to this information.
>
> **[1:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980&t=65)** Optimize, the ability to find more cost efficiency within the ways that cloud computing is being used.
>
> **[1:11](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980&t=71)** Operate, the ability to continuously improve on operational cost efficiencies by leveraging the other two concepts.
>
> **[1:18](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980&t=78)** Thus, the challenge here is how to define a FinOps process, culture, and tooling that's going to support each concept.
>
> **[1:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/what-is-multicloud-finops?u=76281980&t=85)** This includes new skills, best practices, and new technology that can be leveraged to ensure that our journey to multicloud is going to bring the most value to the business for the least amount of cost.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** for. (1)
> **Cross-References:** we covered (1)
> **Definitions:** short for (1)
> **Speakers:** - [instructor] (1)

#### Multicloud cost usage monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=0)** - [Instructor] Cost usage monitoring is a fundamental part of FinOps because it enables us to keep track of what we're spending and how we're spending it.
>
> **[0:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=8)** Cloud providers bill usage differently.
>
> **[0:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=10)** Some bill by time, others by usage, such as network bandwidth use, and some providers bill by both.
>
> **[0:16](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=16)** Usage monitoring for cloud providers is complex because the cost monitoring systems have to consider current billing terms, rates, and other factors that change all of the time.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=26)** Usage monitoring for multicloud is even more complex, considering that we're not just looking at the usage, terms, and pricing for a single cloud provider, but for each cloud provider that's part of our multicloud.
>
> **[0:38](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=38)** We also need to consider costs that are specific to multicloud deployments, such as ingress and egress costs, or when the data moves in and out of public clouds to on-premise enterprise data centers, more often other public cloud providers.
>
> **[0:52](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=52)** Most cloud providers charge you when the data is transmitted to and transmitted from a public cloud provider.
>
> **[1:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=60)** Multicloud usage monitoring tools must also consider SLAs, or service-level agreements.
>
> **[1:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=65)** These are terms that specify if a monetary credit is given for an outage and other interruptions of service from performance issues to services that are unavailable.
>
> **[1:15](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=75)** This usually means a credit in favor of the cloud customer, but often, they have to be requested.
>
> **[1:21](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=81)** Usage monitoring systems can do this automatically.
>
> **[1:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=85)** Cost usage monitoring is the heart of any FinOps system and organization.
>
> **[1:29](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-monitoring?u=76281980&t=89)** We could not optimize costs if we don't understand what those costs are or how they're being incurred.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Multicloud cost usage reporting
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-reporting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-reporting?u=76281980&t=0)** - [Narrator] Of course, it's one thing to collect the cost and usage data and other events such as SLA or service level agreement related issues, but that data also needs to be presented in a logical way to humans or on other systems such as financial systems.
>
> **[0:16](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-reporting?u=76281980&t=16)** The good news is that once the data is in a cost usage database, it can be externalized any number of ways that provide the most value to the company.
>
> **[0:24](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-reporting?u=76281980&t=24)** This may be a dashboard that allows you to see many things at once or a structured report to provide any level of detail or data that senses any financial system such as a general ledger system, to keep a record of the transaction and also pay the cloud bill.
>
> **[0:39](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-reporting?u=76281980&t=39)** When selecting a multi-cloud cost usage system, reporting should be a core consideration, need to understand and act upon the data in a timely way, and that we need to understand how the data exists in the context of other data such as comparing costs from last month to this month.
>
> **[0:57](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-usage-reporting?u=76281980&t=57)** Reporting is key to FinOps considering that we don't know what's going on without the information being brought to us in meaningful ways.

> [!info]- Semantic Content
>
> **Analogies:** such as (4)
> **Env Vars:** sla (1)
> **Speakers:** - [narrator] (1)

#### Multicloud cost controls
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-controls?u=76281980&t=0)** - [Narrator] Cost controls for multicloud provide the ability to place limitations.
>
> **[0:04](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-controls?u=76281980&t=4)** These controls are usually in the form of policies and put controls on what people and applications can spend and use in terms of cloud resources and that's money.
>
> **[0:13](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-controls?u=76281980&t=13)** All this may seem to be something that many multicloud users will not like.
>
> **[0:17](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-controls?u=76281980&t=17)** The reality is that this puts the burden on cost control on the cost control system rather than on the humans that are consuming the cloud services.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-controls?u=76281980&t=26)** Since other processes is watching out overspending, this removes the stress that you'll run over budget and have to deal with the fallout over that.
>
> **[0:35](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-controls?u=76281980&t=35)** Indeed these cost control systems such as cost governance systems or other types of cloud cost management systems are there to remove the chance of mistakes being made and cost overruns occurring.
>
> **[0:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-controls?u=76281980&t=46)** This can be building applications that are not as cost efficient as they should be and that's the cost control system points to improvements that need to be made or leaving a resource running when it should have been shut down, such as a cloud-based storage system that's no longer needed.
>
> **[1:01](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-controls?u=76281980&t=61)** It does us no good if we're able to gather cost data but not react to the data in terms of controlling spending.
>
> **[1:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/multicloud-cost-controls?u=76281980&t=68)** Cost control allow us to put limits on what cloud spending can occur and keeps cloud users out of trouble.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Speakers:** - [narrator] (1)

#### Case study: Multicloud FinOps
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-finops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-finops?u=76281980&t=0)** - [Instructor] In moving to implementation of multi-cloud deployment for Henry's Hammocks, the IT staff of the company must begin to plan for FinOps to monitor and control the ongoing cost of running a multi-cloud.
>
> **[0:11](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-finops?u=76281980&t=11)** In order to define a successful FinOps program for Henry's Hammocks, the IT shop needs to take the following steps.
>
> **[0:19](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-finops?u=76281980&t=19)** Define the FinOps requirements, including usage-tracking requirements, reporting, cost controls, SLA management and the integration with existing financial systems, define core FinOps tools to be leveraged, including usage monitoring that works across public clouds, usage monitoring and cost controls that place limits on what cloud resources can be leveraged and for what reason, provide training for the use of FinOps-related tools, including anyone who will be leveraging cloud resources and needs to understand how the FinOps systems work and what purpose that they serve, define core business processes that need to change around the use of FinOps and FinOps tools to be leveraged.
>
> **[0:57](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-finops?u=76281980&t=57)** Finally, the IT group needs to operationalize the FinOps, meaning that the core processes and tools automation needs to be part of multi-cloud operations.
>
> **[1:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-finops?u=76281980&t=67)** This includes core integration with most of the cloud-based systems existing within the multi-cloud and also has the ability to continuously improve the systems as business needs change, and other opportunities arise.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), finally, (1)
> **Env Vars:** sla (1)
> **Speakers:** - [instructor] (1)


### 7. Putting Together a Multicloud Strategy

#### Logical planning
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=0)** - [Instructor] Logical planning is about removing the physical technology from the solution, and thus, defining the logical architecture.
>
> **[0:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=7)** We do this in order not to let technology determine the ultimate architecture and instead focus on planning a logical or macro architecture that's best for the business.
>
> **[0:18](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=18)** Technology will be added in the next step, but only after we have a good understanding of the logical solution.
>
> **[0:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=25)** So, in order to create a sound logical design for our multi-cloud, the focus is on what technology patterns need to be applied, not what specific technology.
>
> **[0:35](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=35)** As you can see here, we're configuring infrastructure, such as storage and compute, applications, including connected databases, security, and governance which are systemic to operational tooling, such as anything dealing with management, monitoring, and the concept of observability.
>
> **[0:51](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=51)** Note that our logical architecture may be different based on your requirements.
>
> **[0:56](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=56)** Also note that we're not listing specific technology, here.
>
> **[1:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=60)** that comes later.
>
> **[1:02](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=62)** You may have noticed that we've not solved the multi-cloud problem yet.
>
> **[1:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=66)** Indeed, we need to pick specific technologies, such as public cloud providers themselves, and related storage and compute systems that are part of the cloud providers, thus moving up to the application-specific attributes that may exist within a single cloud provider that's part of our multi-cloud deployment or across cloud providers as an application that hosts assets on different cloud providers.
>
> **[1:29](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=89)** The idea here is not to nail a solution from the start, but to provide a solution that's able to change around changing business needs.
>
> **[1:37](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=97)** So, we're not creating a logical architecture to meet the needs of the business in a single instance, but rather, to meet the changing needs of the business.
>
> **[1:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/logical-planning?u=76281980&t=106)** In other words, we're designing our multi-cloud to easily change.

> [!info]- Semantic Content
>
> **Analogies:** such as (3)
> **Code Keywords:** let (1), public (1)
> **Warnings:** note that (2)
> **Cross-References:** in the next (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Physical planning
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/physical-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/physical-planning?u=76281980&t=0)** - [Instructor] The physical architecture or physical plan is the logical architecture with the technology defined along with the concepts.
>
> **[0:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/physical-planning?u=76281980&t=7)** For example, we may have defined the logical concept of object storage in the logical architecture, and in the physical, we defined a specific technology, say, Amazon Web Services S3 object storage.
>
> **[0:19](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/physical-planning?u=76281980&t=19)** We're also defining the cloud providers that we're going to leverage, as well as any technologies that we may employ as part of those cloud providers.
>
> **[0:27](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/physical-planning?u=76281980&t=27)** This can be the easiest step or the most complex step, depending on the technology you're looking to define.
>
> **[0:33](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/physical-planning?u=76281980&t=33)** Here's an example of a physical architecture where the specific technologies are added for each logical concept, such as storage and compute as the concept for logical planning, and AWS for physical planning.
>
> **[0:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/physical-planning?u=76281980&t=46)** For most multicloud deployments, selecting the best storage and compute systems that are part of the public cloud will just be looking at the features, functions, and prices for public-cloud-based systems, all of them pretty similar.
>
> **[1:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/physical-planning?u=76281980&t=60)** However, you'll also have to pick less-understood specialized technologies, such as DevOps, edge computing, special purpose databases.
>
> **[1:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/physical-planning?u=76281980&t=68)** They're going to take more analysis and testing.
>
> **[1:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/physical-planning?u=76281980&t=70)** Not to be overly concerning, but picking the wrong technology here can end up costing time and money.
>
> **[1:16](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/physical-planning?u=76281980&t=76)** So, be careful to understand your requirements specifically, as well as the technology that is a part of major brands of public cloud services or third-party providers, which are rapidly expanding.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Building a strategy
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-strategy?u=76281980&t=0)** - [Instructor] This is only one type of process for building a strategy.
>
> **[0:03](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-strategy?u=76281980&t=3)** You may have different needs and thus have a strategy and process that looks very different.
>
> **[0:09](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-strategy?u=76281980&t=9)** Note that we're suggesting a process here with specific outcomes.
>
> **[0:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-strategy?u=76281980&t=12)** The duration of this process may be one month or one year, depending on the complexity and scope.
>
> **[0:18](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-strategy?u=76281980&t=18)** The process we suggest in building a multi-cloud strategy includes business requirements or defining what business requirements are specific to the business.
>
> **[0:27](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-strategy?u=76281980&t=27)** This includes any benefits and value that the use of multi-cloud can bring to the business.
>
> **[0:32](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-strategy?u=76281980&t=32)** Business case or how a multi-cloud can make use of money, this includes hard benefits, such as cost savings and soft benefits such as the value delivered to the business.
>
> **[0:42](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-strategy?u=76281980&t=42)** Logical planning or the creation of a logical architecture and logical plan as we covered in the previous video; physical planning or defining which technology we're going to leverage within our multi-cloud deployment; operations planning or defining how the multi-cloud will be operated holistically including processes, tools, and policies; governance and security planning or defining what technologies and processes we're going to leverage to provide security and governance services that run across the multi-cloud deployment; configuration and testing or final configuration of the multi-cloud architecture and testing to ensure that it meets business expectations; deployment or actually creating the production ready multi-cloud systems ready to be leveraged and operated.
>
> **[1:28](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-strategy?u=76281980&t=88)** What's important to understand here is that we'll need a plan to roll out our multi-cloud solution.
>
> **[1:33](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/building-a-strategy?u=76281980&t=93)** It's needed considering that there are many moving parts and many details that need to be considered.

> [!info]- Semantic Content
>
> **Cross-References:** we covered (1), previous video (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Deployment planning
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/deployment-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/deployment-planning?u=76281980&t=0)** - [Instructor] Deployment planning means that we're defining how we're going to move our physical multicloud solution into production.
>
> **[0:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/deployment-planning?u=76281980&t=7)** Keep in mind, we typically have dozens of moving parts to keep track of.
>
> **[0:11](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/deployment-planning?u=76281980&t=11)** Technologies that need to perform a specific function.
>
> **[0:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/deployment-planning?u=76281980&t=14)** You'll reuse this process several times a year, typically.
>
> **[0:17](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/deployment-planning?u=76281980&t=17)** Although deployment planning may be a bit different for you depending on your core business requirements, a good list starts with DevOps integration planning or defining core DevOps processes and tool chains to be deployed to support your multicloud, configuration management planning or defining configuration management solutions including processes and tooling, security and governance planning.
>
> **[0:39](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/deployment-planning?u=76281980&t=39)** How we're going to address security and governance after deployment.
>
> **[0:42](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/deployment-planning?u=76281980&t=42)** Staging planning, how we're going to stage platforms and application changes to ensure that they're done properly before they're placed in production.
>
> **[0:51](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/deployment-planning?u=76281980&t=51)** Production and operations planning to ensure the applications and multicloud platform will have successful long-term operations with minimal outages and issues.
>
> **[1:02](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/deployment-planning?u=76281980&t=62)** While planning is not an activity that we all want to do with our days, you need to do enough here to get deployment right.
>
> **[1:09](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/deployment-planning?u=76281980&t=69)** This considering that multiclouds are complex and take careful planning to get right.
>
> **[1:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/deployment-planning?u=76281980&t=74)** Mistakes are costly to fix.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Bringing it all together
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/bringing-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/bringing-it-all-together?u=76281980&t=0)** - [Instructor] Multicloud deployment planning is really a matter of understanding that everything provided in this section in terms of how to understand, plan, and deploy a multicloud is a holistic process that really never stops.
>
> **[0:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/bringing-it-all-together?u=76281980&t=14)** Indeed, while we're defining this as a set of orderly procedures, you'll find that you'll have to iterate through many of these again and again as business needs change or as you make mistakes.
>
> **[0:24](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/bringing-it-all-together?u=76281980&t=24)** Mistakes are just part of this.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/bringing-it-all-together?u=76281980&t=26)** They are going to be made, and you need to focus on learning from them.
>
> **[0:30](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/bringing-it-all-together?u=76281980&t=30)** The end state here is a multicloud that's optimized to the needs of the business and has no other objective.
>
> **[0:35](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/bringing-it-all-together?u=76281980&t=35)** This is not building something you believe is exciting to our industry.
>
> **[0:40](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/bringing-it-all-together?u=76281980&t=40)** It's only purpose is to serve the business.
>
> **[0:43](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/bringing-it-all-together?u=76281980&t=43)** Often those building multiclouds look outside of the organization and the hype that leads the cloud computing industry and the media guidance for how they need to define in builder solutions.
>
> **[0:55](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/bringing-it-all-together?u=76281980&t=55)** That's never a good idea.
>
> **[0:57](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/bringing-it-all-together?u=76281980&t=57)** We're looking to serve the needs of the business, period.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Code Keywords:** this. (1)
> **Speakers:** - [instructor] (1)


### 8. Deployment and Testing

#### Staged deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=0)** - [Instructor] Staged deployment is about how to take a multicloud architecture into production.
>
> **[0:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=5)** It's a process that you use several times a year and should be continuously improved.
>
> **[0:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=10)** You can add and remove parts of this process as needed.
>
> **[0:13](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=13)** It's important that we get this right, since we're going to be repeating this over and over again as we change and improve upon our multicloud.
>
> **[0:21](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=21)** You may need to adapt this process to accommodate different or special business requirements.
>
> **[0:27](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=27)** Although you may customize these processes, the basic steps in a staged deployment of a multicloud include selection and deployment of public cloud, cloud platforms, such as Amazon Web Services, Microsoft, and Google.
>
> **[0:40](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=40)** Monitoring and management are any operational tools that you need to put in place to watch and operate your multicloud.
>
> **[0:47](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=47)** DevOps, including tool chains that are designed specifically for the types of applications that are going to be built and deployed on our multicloud.
>
> **[0:54](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=54)** Security and governance, including any security and governance tooling that runs across the multicloud.
>
> **[1:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=60)** Databases and storage, meaning any storage needs to support the applications or the business in general.
>
> **[1:07](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=67)** Also, et cetera, other specialized systems that you may need to deploy, such as edge computing, containers, serverless and such.
>
> **[1:17](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=77)** Deployment is the act of putting your multicloud design into production.
>
> **[1:21](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=81)** Thus, it's where many things can and will go wrong.
>
> **[1:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-deployment?u=76281980&t=85)** The core idea here is to reduce the mistakes as much as you can, and even if they are made, we're going to always loop around and improve as we go.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Code Keywords:** public (1)
> **Speakers:** - [instructor] (1)

#### Staged testing
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=0)** - [Instructor] Stage testing is the process of testing each component, cluster of components, and then the entire solution or architecture.
>
> **[0:08](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=8)** The idea is to create a repeatable testing process that can be automated.
>
> **[0:12](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=12)** Here too, the process needs to be continually improved and refined.
>
> **[0:17](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=17)** We are touching upon testing here considering that before you deploy your multi-cloud solution that it's properly tested to meet the needs of the business.
>
> **[0:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=25)** While many skip or limit testing due to time or funding restrictions, chances are that will actually cost you more money once the problems are found during production, and you're dealing with the productivity issues around that as well as finally fixing the issue.
>
> **[0:41](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=41)** There are many types of testing to consider with a multi-cloud deployment.
>
> **[0:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=46)** For our purposes, we'll focus on unit testing, or testing something as a standalone component, such as an application or a database.
>
> **[0:54](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=54)** Regression testing, or testing a system holistically by regressing through the various subsystems.
>
> **[1:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=60)** Smoke testing, or rudimentary testing that just checks for basic functionality.
>
> **[1:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=66)** Black box testing, or testing a system, platform, or component by just looking at the systems that are externalized such as the user interface or API.
>
> **[1:16](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=76)** White box testing, which is black box testing with the added functionality of looking at what the system is actually doing behind the scenes, such as testing a storage system and using the storage system monitoring system to look at how the internal systems are working.
>
> **[1:32](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=92)** You've heard the term trust but verify.
>
> **[1:34](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=94)** That's exactly what we're doing here.
>
> **[1:36](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=96)** We're testing to ensure that the technology decisions we made are sound and that the final multi-cloud solution works as planned.
>
> **[1:43](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/staged-testing?u=76281980&t=103)** You should never skip this step.

> [!info]- Semantic Content
>
> **Analogies:** such as (3)
> **Code Keywords:** interface (1)
> **Env Vars:** api (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### Case study: Multicloud deployment and testing
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=0)** - [Instructor] Back to Henry's Hammocks, who are now ready to deploy and test their multi-cloud solution.
>
> **[0:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=5)** To recap, the IT group at Henry's Hammocks is worried that the planning, design and configuration may not be correct to meet the needs of the business and is looking not only to deploy their solution that has been defined previously but ensure that it's working correctly by testing the solution before it goes into production.
>
> **[0:24](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=24)** Henry's Hammocks IT group is using a subset of the processes previously defined to include selection and deployment of public cloud platforms such as Amazon Web Services, Microsoft and Google.
>
> **[0:38](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=38)** Monitoring and Management or any operational tools that need to be placed to watch and operate your multi-cloud.
>
> **[0:45](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=45)** In this case, the IT group has selected tools that are able to monitor systems across public cloud providers which provides the lowest risk and cost.
>
> **[0:55](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=55)** DevOps, including tool chains that are designed specifically for the types of applications that are going to be built and deployed, with the IT group selecting a single coding, development tool, continuous integration tool, continuous testing tool and continuous deployment tool that supports all cloud platforms existing in their multi-cloud.
>
> **[1:15](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=75)** Security and governance, including any security and governance tooling that runs across the multi-cloud.
>
> **[1:20](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=80)** In this case, the IT group is leveraging IAM, Identity and Access Management tool, to deal with security across cloud providers.
>
> **[1:29](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=89)** Databases and storage, meaning any storage needs to support the applications or business in general.
>
> **[1:35](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=95)** In this case, the IT group is deploying several object databases and a few relational databases running on the public cloud.
>
> **[1:42](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=102)** Examples would be Amazon Web Services, DynamoDB running on AWS or Amazon Web Services, and SQL Server running on Microsoft.
>
> **[1:53](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=113)** Some of the testing carried out by the IT group included regression testing or testing the system holistically by progressing through the various subsystems.
>
> **[2:02](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=122)** In this case, testing applications that have been migrated to the multi-cloud, running on a single cloud provider to ensure that the port and recompile has resulted in a working application.
>
> **[2:13](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=133)** Smoke testing or rudimentary testing that just checks for basic functionality which was performed on the remainder of the applications ported to the multi-cloud.
>
> **[2:22](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/case-study-multicloud-deployment-and-testing?u=76281980&t=142)** If all the proper procedures have been followed, Henry's Hammocks should be enjoying a well defined, well designed, fully tested and fully operational multi-cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (4), public (3)
> **Env Vars:** iam (1), aws (1), sql (1)
> **CLI Commands:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Final considerations for a successful multicloud deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=0)** - [Instructor] Although we've covered a great deal, it's impossible to tell you everything that you'll run into when designing and building a multi-cloud in a single course.
>
> **[0:09](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=9)** The complexity and breadth of what a multi-cloud is means that it's many times more complex than just a single system.
>
> **[0:16](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=16)** It's dozens of platforms, hundreds of databases.
>
> **[0:19](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=19)** thousands of applications, and all that needs to work together to support the business in an optimized way.
>
> **[0:26](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=26)** Some of the words of advice that we have include, don't be afraid to change processes outlined here to meet your needs specifically.
>
> **[0:33](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=33)** We all are working for different businesses, and we have specific ways that we need to bring multi-cloud solutions to those businesses, if they indeed need multi-cloud solutions in the first place.
>
> **[0:45](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=45)** Question everything.
>
> **[0:46](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=46)** This means the best way to do something is not always to do what others are doing.
>
> **[0:51](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=51)** Often, enterprises make the mistake of following and replicating solutions that are from other businesses.
>
> **[0:56](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=56)** And while it might work for them, may not meet your needs.
>
> **[1:01](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=61)** The way that you're doing multi-cloud this year will not be the same as years to come.
>
> **[1:05](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=65)** Approach multi-cloud development readiness to continuously improve and learn.
>
> **[1:10](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=70)** Technology processes as well as best practices improve over time, and you need to adjust to take advantage of these new opportunities.
>
> **[1:17](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=77)** This is a journey, and this course will get you through the first few steps.
>
> **[1:21](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/final-considerations-for-a-successful-multicloud-deployment?u=76281980&t=81)** The rest is a process of learning and ingesting as you learn.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Code Keywords:** include, (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/next-steps?u=76281980&t=0)** - [Instructor] Make sure you keep up with all of the developments in cloud technology by taking additional courses here, as well as keeping up in terms of reading books, blogs, and listening to podcasts.
>
> **[0:11](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/next-steps?u=76281980&t=11)** For multicloud news, I cover multicloud architecture topics a great deal for my "InfoWorld" blog.
>
> **[0:16](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/next-steps?u=76281980&t=16)** Here, we'll focus on what's changing and new technologies that are emerging.
>
> **[0:21](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/next-steps?u=76281980&t=21)** Other sites that are helpful include TechTarget, ZDNet, and "InformationWeek", all that cover cloud topics, including multicloud.
>
> **[0:29](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/next-steps?u=76281980&t=29)** If you've yet to work in a cloud architecture, or even the cloud space especially, and want to do so, I urge you to join a company that has entry-level openings for people like yourself who invested in self-learning to get to a place where you're ready to experience the process of defining, building, and deploying cloud solutions.
>
> **[0:48](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/next-steps?u=76281980&t=48)** You may be new, and thus, not ready to lead a team, which means you can join a team as an entry-level contributor.
>
> **[0:55](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/next-steps?u=76281980&t=55)** Or, if you're more experienced in IT, can leverage that experience to attain more senior-level cloud builder jobs, and eventually leading a multicloud architecture and development team.
>
> **[1:06](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/next-steps?u=76281980&t=66)** Many of you are here because the salaries for multicloud and cloud professionals in general are high.
>
> **[1:11](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/next-steps?u=76281980&t=71)** This is due to the fact that the skills are in demand.
>
> **[1:14](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/next-steps?u=76281980&t=74)** While this is a good thing, it also means that lack of skills is driving many bad decisions being made as enterprises are compromising on who they hire due to the shortage.
>
> **[1:25](https://www.linkedin.com/learning/planning-a-multicloud-solution-2022/next-steps?u=76281980&t=85)** Make sure that you rise above this, always looking to discover what the correct and proper things are to do in terms of following best practices and leveraging much of the knowledge you gained here.

> [!info]- Semantic Content
>
> **Code Keywords:** self (1), new, (1), this, (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Cloud Strategy Professional Certificate by LinkedIn Learning]]
← [[Cloud Security Architecture for the Enterprise]] | **6 of 9** | [[Cloud for Business- Developing a Cloud Center of Excellence]] →

### In [[Build your Cloud Computing Skills]]
← [[Practical Cybersecurity for IT Professionals]] | **3 of 3**

## Part of

- [[Cloud Strategy Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Cloud Strategy Professional Certificate by LinkedIn Learning]]
- [[Build your Cloud Computing Skills]]

## Related Courses

_Courses sharing skills:_

- [[Including Sustainability in Your Cloud Strategy]] — Cloud Strategy
- [[Including Sustainability in Your Cloud Strategy (2022)]] — Cloud Strategy
- [[Determining Your Cloud Strategy- Planning for Roadmap, Infrastructure, and Deployment]] — Cloud Strategy

---

[↑ Back to top](#)