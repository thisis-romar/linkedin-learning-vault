---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: it-service-management-foundations-capacity-and-availability-management
url: "https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management"
duration_minutes: 73
duration: 1h 13m
level: Intermediate
updated: 1/22/2025
learners: 3047
skills:
  - IT Service Management
  - Capacity Planning
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFH2Kn1JVpbtg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1735073943757?e=2147483647&amp;v=beta&amp;t=9kbV3cNEQsHDvn5XKXZObsFeEpM6KLx4Wi7swppRVcI"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your IT Service Management (ITSM) Skills]]'
prev_courses:
  - '[[IT Service Management Foundations- Problem Management]]'
path_nav: '[{"path":"Develop Your IT Service Management (ITSM) Skills","position":5,"total":5,"prev":"IT Service Management Foundations- Problem Management","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/devops
  - topic/network-and-system-administration
  - skill/it-service-management
  - skill/capacity-planning
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/IT%20Service%20Management%20Foundations-%20Capacity%20and%20Availability%20Management.md)

![IT Service Management Foundations: Capacity and Availability Management](https://media.licdn.com/dms/image/v2/D4D0DAQFH2Kn1JVpbtg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1735073943757?e=2147483647&amp;v=beta&amp;t=9kbV3cNEQsHDvn5XKXZObsFeEpM6KLx4Wi7swppRVcI)

# IT Service Management Foundations: Capacity and Availability Management

> Are you new to capacity and availability or wanting to mature your organization's capacity availability service as a service manager? In this course, learn about the key principles of the service that will help define your policy and processes and optimize your services and resources. Instructor Mark Grey explains the advantages of taking time to understand a business need before designing or impl

> [LinkedIn Learning](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management) | 1h 13m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Introduction](#introduction)
  - [What is capacity management?](#what-is-capacity-management)
  - [What is availability management?](#what-is-availability-management)
- [**1. Discovery: Understanding Business Needs**](#1-discovery-understanding-business-needs) (4 videos)
  - [Taking time to understand the business services](#taking-time-to-understand-the-business-services)
  - [Reviewing the ways of working](#reviewing-the-ways-of-working)
  - [Setting out your scope](#setting-out-your-scope)
  - [Setting out policy](#setting-out-policy)
- [**2. Service Capacity Management**](#2-service-capacity-management) (4 videos)
  - [What is service capacity management?](#what-is-service-capacity-management)
  - [Reviewing the infrastructure](#reviewing-the-infrastructure)
  - [Capacity forecasting: Data collection](#capacity-forecasting-data-collection)
  - [Capacity forecasting: Techniques](#capacity-forecasting-techniques)
- [**3. Resource Capacity Management**](#3-resource-capacity-management) (6 videos)
  - [What is resource capacity management?](#what-is-resource-capacity-management)
  - [Assessing resource capacity: Data collection](#assessing-resource-capacity-data-collection)
  - [Resource monitoring: Workload balancing and consolidation](#resource-monitoring-workload-balancing-and-consolidation)
  - [Preparing for future services](#preparing-for-future-services)
  - [How does it work in cloud infrastructure?](#how-does-it-work-in-cloud-infrastructure)
  - [Running capacity sessions](#running-capacity-sessions)
- [**4. Availability Management**](#4-availability-management) (3 videos)
  - [Metrics and reporting](#metrics-and-reporting)
  - [Creating your reporting](#creating-your-reporting)
  - [Challenges to overcome](#challenges-to-overcome)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/introduction?u=76281980&t=0)** - Capacity and availability is a critical function in any organization.
>
> **[0:04](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/introduction?u=76281980&t=4)** This service is not only a very rewarding career path, but also a very impactful one that can save an organization cost, reputational damage, and increase efficiencies in the use of technology.
>
> **[0:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/introduction?u=76281980&t=14)** The focus of this course is the how, rather than the theory, that will allow you to be able to put some of what you've learned and to practice.
>
> **[0:21](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/introduction?u=76281980&t=21)** We'll cover all of the terminology, methods and tasks you should be completing as a capacity and availability manager.
>
> **[0:26](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/introduction?u=76281980&t=26)** Whilst you're exploring the world of the capacity and availability in this course, please feel free to give me any questions or comments.
>
> **[0:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/introduction?u=76281980&t=32)** Thank you again, and let's get started.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - capacity (1)

#### [What is capacity management?](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=0)** - [Instructor] As you might have guessed from the initial introduction, capacity and availability are intertwined.
>
> **[0:06](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=6)** After all, if you're able to balance demand on infrastructure to all services, it will increase your availability or uptime of the services.
>
> **[0:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=14)** Think of it as spinning plates.
>
> **[0:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=16)** If you have enough hands and legs, and it allows you to be able to hold those plates, it means those plates are intact and available to use.
>
> **[0:23](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=23)** However, if you try and spin too many plates in one hand, inevitably they'll smash and be unavailable to use.
>
> **[0:29](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=29)** Simple, right?
>
> **[0:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=31)** What does capacity management entail to ensure you don't run out of hands and legs and smash plates?
>
> **[0:37](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=37)** What activities will you need to undertake to ensure you're being diligent in managing capacity of services and infrastructure?
>
> **[0:44](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=44)** In the simplest of terms, capacity management has two key functions: service capacity management and resource capacity management.
>
> **[0:52](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=52)** As it may sound by the names of these processes, service capacity management is the management of a service, maybe something like email offerings within your organization.
>
> **[1:02](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=62)** It's likely you'll manage and explore data, such as usage stats, the average size of a mailbox, the average size of our email, spikes in demand of the service, and ultimately, how much capacity is required to host that service.
>
> **[1:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=76)** We'll talk about data later, but think about things within that infrastructure used to make that service live that could have capacity limits.
>
> **[1:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=84)** The output from this step is that it'll allow you to understand and be able to report specific services and their uptime.
>
> **[1:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=91)** Not only that, but it'll help you identify risks, opportunities, and be prepared for any future updates and new demand by baselining the performance of the service.
>
> **[1:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=101)** In this course, when we come to explore this element of capacity management, we'll give a more in-depth review of the processes and what kind of data you might want to consider collecting, and how you could use that data to forecast future demand.
>
> **[1:55](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=115)** The next aspect of capacity management is resource capacity management.
>
> **[2:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=120)** Think of this service as being agnostic of all services and focus is in the boiler room of the full organization.
>
> **[2:06](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=126)** It reviews all resources regardless of its utilization.
>
> **[2:10](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=130)** Although it's crucial to review each service individually, you also have to consider the impact this may have on cross-cutting infrastructure.
>
> **[2:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=138)** This isn't related to a specific service.
>
> **[2:21](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=141)** Think about switches and bandwidth utilization, number of virtual services in a specific [[Hardware]] that is hosting multiple services.
>
> **[2:29](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=149)** This specific area is where some technical skills or understanding of how your services are all supported will really help.
>
> **[2:36](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=156)** Don't worry, this role is not about being a technical architect.
>
> **[2:40](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=160)** You can call up all technical teams that will help you get data and better understanding of infrastructure and your organization.
>
> **[2:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=168)** Within resource capacity management, you'll need to cover what kind of data you want to consider collecting, how to consider load balancing and consolidating to maximize performance, and how you could prepare and forecast for future services, and also how this might still work if you work primarily within [[Cloud Infrastructure]].
>
> **[3:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=187)** Later on in the course, we will go into more granular detail of the standard processes expected of capacity management, but hopefully this introduction gives you a good starting point to think about the importance of capacity management in an organization.
>
> **[3:21](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-capacity-management?u=76281980&t=201)** If delivered effectively, you could soon become one of the most important functions that saves time, money, and reputation by successfully managing capacity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[Cloud Infrastructure]] (1)
> **Analogies:** think of it as (1), such as (1)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [What is availability management?](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=0)** - [Instructor] With all the hard work you'll undertake with capacity management, the next step is to demonstrate the fruit of your labor.
>
> **[0:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=7)** Availability management, in its simplest form, is measuring the uptime versus the amount of downtime for service.
>
> **[0:13](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=13)** It also helps you demonstrate trends of the services you provide to customers, and is typically used to show performance versus service level agreements, if you have these, based on agreed level of performance between a customer and a supplier.
>
> **[0:25](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=25)** Availability management can also show many other trends that will help you be proactive and prevent future issues.
>
> **[0:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=31)** But we'll cover that in more granular detail later.
>
> **[0:34](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=34)** There are however, some complexities to this function to consider, which we'll cover.
>
> **[0:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=38)** For example, if one of your customers has an unplanned change or there is a fault on their site, how do you ensure you report on that appropriately?
>
> **[0:46](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=46)** I.E: do you exempt it from your SLE uptime reporting?
>
> **[0:50](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=50)** Within this module, we'll cover exactly that type of scenario and this type of metrics and reporting that's typically expected of availability management as an output.
>
> **[0:59](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=59)** We will also cover the type of data you should consider collecting to make this reporting more accurate.
>
> **[1:04](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=64)** Availability management also covers some more granular reporting metrics, such as meantime between failures of a service, the meantime to repair during an outage, and ultimately highlight risk to an organization on anything related to an uptime of a service.
>
> **[1:19](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=79)** Sounds simple, right?
>
> **[1:21](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=81)** Well, it is in theory, but as with uptime and thinking about exemptions, the same thing applies for each of these metrics.
>
> **[1:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=87)** Don't worry, we'll cover these scenarios and how to manage them in a lot more detail later.
>
> **[1:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=92)** Hopefully this introduction has helped break down a high level importance of sequencing of capacity and availability management.
>
> **[1:39](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=99)** But before we get into the details of the process, let's first talk about service design to ensure it fits with your organization needs.
>
> **[1:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=108)** Just as a reminder, as you undertake this course, not all organizations run in the same way, and even [[ITIL]] 4 is designed as a guide, not a set of instructions per service.
>
> **[1:59](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=119)** As such, you need to ensure that services you design is based on the principles of ITIL, but also meets your organization's requirements.
>
> **[2:08](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=128)** Understanding business needs is fundamental to an effective service.
>
> **[2:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=132)** And we're going to explore the discovery you should complete, ways of working, and time to understand the nuances of your organization's infrastructure to consider.
>
> **[2:20](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=140)** And also ensuring you write effective policy, the details of what you'll provide, and the value you'll bring to.
>
> **[2:26](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=146)** By doing this, you'll get stakeholder buy-in from day one by negotiating, and taking some time to understand the infrastructure.
>
> **[2:33](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=153)** This will hopefully reduce the need to redesign your services as it's just been established.
>
> **[2:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=158)** This will help you identify a minimal viable service, a term used to state what the business perceives as the bare minimum service output they require from you to get the value they get.
>
> **[2:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=168)** When it is identified, it means you provide a great service from day one going live.
>
> **[2:54](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=174)** So with that in mind, how do you go about understanding business needs?
>
> **[2:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-availability-management?u=76281980&t=178)** Well, in the next module we'll cover the the best questions and topics to cover as you start to truly understand what provides value to your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ITIL]] (2)
> **Env Vars:** itil (2), sle (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Discovery: Understanding Business Needs

[↑ Back to Table of Contents](#table-of-contents)

#### [Taking time to understand the business services](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=0)** - [Instructor] Different businesses will have different ways of working with different strategic goals.
>
> **[0:05](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=5)** This means that capacity and availability services also have to change to match the needs of the business.
>
> **[0:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=11)** How you respond to diversity needs is key in determining if you'll need to create an effective service or not.
>
> **[0:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=16)** To create what we call a minimum viable service, basically, a service that meets the basic needs of the organization, you'll need to understand what's important to the business.
>
> **[0:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=27)** If you created a by-the-book [[ITIL]] 4 capacity and availability service, who's to say that that provides a value creation that the organization's looking for?
>
> **[0:35](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=35)** It's very unlikely.
>
> **[0:36](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=36)** Taking some time before you start to try and implement capacity and availability principles will save you a lot of time.
>
> **[0:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=43)** Imagine setting a by-the-book capacity and availability service with a full process map just to find out the team doesn't exist, or it doesn't match with the businesses' critical services list identified by other teams.
>
> **[0:55](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=55)** That's what we're trying to avoid.
>
> **[0:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=58)** What I mean by reviewing business services and needs is, what are the key services the business identifies as critical?
>
> **[1:06](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=66)** What service-level agreements are already in action that you may need to report against?
>
> **[1:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=71)** Who are the key stakeholders and teams?
>
> **[1:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=74)** Remember, other teams that are already established you may have dependencies on may impact how you design a process, so it's vital you understand how your stakeholders work.
>
> **[1:25](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=85)** Next, I would recommend that you use what you've learned to create some of your key articles.
>
> **[1:30](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=90)** As a capacity and availability manager, you will need stakeholder mapping listing out the teams you are likely to interact with if they're an input, an output, or both to your operation.
>
> **[1:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=102)** This will help you not only understand relationships, but help new staff members to bed in quicker knowing who their peers are.
>
> **[1:50](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=110)** The Critical Businesses Services list, if this does not already exist, it is a list of all critical business services.
>
> **[1:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=118)** Typically, it includes any SLAs, a brief description of their purpose, and status, peak production, live, or retired, for example.
>
> **[2:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=127)** This will help you later with reporting structure as critical services are usually the headlines of a report.
>
> **[2:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=134)** Process mapping, this is setting out where you have been involved in existing processes or creating new ones to ensure you can complete your tasks within capacity management.
>
> **[2:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=144)** Don't worry, we'll cover this later in more detail.
>
> **[2:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=147)** This will also continue to change as your understanding of the business continues to grow.
>
> **[2:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=152)** Identifying risks and issues.
>
> **[2:35](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=155)** As you start to build a service or understanding of the infrastructure, it's likely you'll start to identify risks.
>
> **[2:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=162)** You'll need somewhere to record these for action later.
>
> **[2:44](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=164)** Remember, this might already exist within your business, so first, check if they exist.
>
> **[2:50](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=170)** Finally, policy, we'll cover this in more detail later, but your policy will be impacted by all of the above, so take notes and reflect back on them when you're ready to write that policy.
>
> **[3:01](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=181)** Again, it is likely an organization will have a template for you to use, but fear not, we'll cover the key parts later on in this course.
>
> **[3:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=189)** One important point to make here, all the documents above are never complete.
>
> **[3:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=194)** What I mean by this is they are live documents.
>
> **[3:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=198)** A business is never static.
>
> **[3:19](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=199)** Services start. They get retired.
>
> **[3:22](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=202)** Businesses change.
>
> **[3:23](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=203)** You have a change in stakeholders.
>
> **[3:25](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=205)** Risk and issues can appear in a variety of different scenarios.
>
> **[3:29](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=209)** It is your responsibility to ensure these documents are maintained and reflect those changes.
>
> **[3:33](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=213)** After all, if someone leaves who had all of that knowledge in their head but not on paper, you are setting yourself up for failure in the future.
>
> **[3:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=223)** Finally, coming back to the point of the organizations are different.
>
> **[3:47](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=227)** How you work and what artifacts you need to create from scratch is likely to be different in every role that you undertake.
>
> **[3:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=233)** The key takeaway here is that as long as you have an idea of the key artifacts you'll need to create, you can adopt the processes to suit.
>
> **[4:01](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/taking-time-to-understand-the-business-services?u=76281980&t=241)** log your risks and issues, and ultimately, build a minimal viable service that resonates with your senior management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ITIL]] (1)
> **Prerequisites:** you'll need (4)
> **CLI Commands:** find (1), make (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** imagine (1), for example (1)
> **Env Vars:** itil (1)
> **Cross-References:** later in (1)
> **Exercise Files:** template (1)

#### [Reviewing the ways of working](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=0)** - [Instructor] Ways of working may seem standard, but different businesses try to be fully [[Agile Development|agile]], fully [[ITIL]], or a mix of both depending on the variety of work that's completed.
>
> **[0:08](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=8)** There are many more variants out there.
>
> **[0:10](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=10)** This means that although terminology may be standardized in ITIL, it's likely that processes are going to have to adapt to suit to those ways of working.
>
> **[0:19](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=19)** For example, if the organization works with product managers in Agile, you'll want to make sure that any product's being designed, that you are part of those discussions and how it might impact existing infrastructure to mitigate any risk to availability later.
>
> **[0:34](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=34)** [[Microsoft Products|Products]] that are live, you'll want to become a key stakeholder in governance gateways such as change management or technical design authorities.
>
> **[0:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=42)** Just to note here, you'd not typically be expected to capacity manage a product in alpha or in sandbox environments.
>
> **[0:50](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=50)** This is because there will be so much change due to the forming of the product, it'd be highly unlikely you could provide value at this stage.
>
> **[0:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=58)** As you can imagine, in a product-driven environment, you're going to have numerous products in different product lifecycle stages from ideation all the way through to retirement.
>
> **[1:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=69)** So, how do you as a capacity and availability manager cope with that?
>
> **[1:13](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=73)** So at this stage, I want you to consider, based on the artifacts we talked about previously, this.
>
> **[1:21](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=81)** What are my points of engagement and processes where I need to attend technical design authorities or change management sessions?
>
> **[1:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=87)** If so, what points in that process?
>
> **[1:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=91)** Lifecycle processes.
>
> **[1:34](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=94)** Is the product or lifecycle repeatable?
>
> **[1:36](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=96)** For example, is there a known process for getting products from private beta to public beta?
>
> **[1:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=102)** If so, consider breaking up processes by lifecycle stages to show how you fit your services across Agile and ITIL functions.
>
> **[1:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=111)** Roles and responsibilities, RACI.
>
> **[1:54](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=114)** Ensure that you and your team know what you're responsible for, accountable for, along with being consulted and informed on.
>
> **[2:01](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=121)** Also, ensure that when you have this, you share it with other teams, so they also know.
>
> **[2:06](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=126)** This will help you integrate easier within the organization, along with avoiding duplication of work.
>
> **[2:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=131)** Problem identification.
>
> **[2:13](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=133)** How you identify potential risks through your proactive analysis to technical teams?
>
> **[2:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=138)** Is it via [[Problem Management]] tickets?
>
> **[2:20](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=140)** Consider how you engage with conducting proactive analysis of infrastructure, so there's an audit trail of your actions.
>
> **[2:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=147)** And once you've got all of this, make sure you get you get it in a policy.
>
> **[2:30](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=150)** Some of this information you've learned in this discovery will help you write your policy.
>
> **[2:35](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=155)** So, we'll cover this in a different chapter later.
>
> **[2:37](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=157)** Remember, each business is likely to have caveats or differences in the way that they work.
>
> **[2:44](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=164)** It's your responsibility to ensure that you're flexible enough to enhance or support those current ways of working.
>
> **[2:50](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=170)** Nothing is permanent.
>
> **[2:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-ways-of-working?u=76281980&t=171)** Just remember, as processes evolve, it's an opportunity for you to influence them more and add even more value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (3), [[ITIL]] (3), [[Microsoft Products|Products]] (3), [[Problem Management]] (1)
> **Env Vars:** itil (3), raci (1)
> **Analogies:** for example (2), such as (1), imagine (1)
> **CLI Commands:** make (2)
> **Cross-References:** we talked about (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Setting out your scope](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=0)** - [Instructor] You may automatically think that your role should be to come into an organization and manage all infrastructure from a capacity and availability perspective.
>
> **[0:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=9)** But think about this.
>
> **[0:10](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=10)** How do you manage a test environment which is not governed?
>
> **[0:13](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=13)** Where is the value in trying to do this without slowing down your technical colleagues?
>
> **[0:17](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=17)** Simple answer here is it's not in your or the organization's interest to focus on the non-production environment.
>
> **[0:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=24)** After all, your key input is to maximize uptime of services to customers by managing infrastructure that directly impacts live services.
>
> **[0:33](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=33)** Just a reminder here, there could be some caveats to this where some components in a pre-production environment might have an impact on live services.
>
> **[0:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=41)** This is where investigating infrastructure will really help you understand nuances like this as you set out your scope.
>
> **[0:47](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=47)** Another aspect to consider within the live infrastructure that you'll need to be specific on is what parts of the infrastructure is owned by your organization and what's provided by supplier.
>
> **[0:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=58)** After all, it's highly unlikely you would be able to successfully manage another organization or supplier's infrastructure.
>
> **[1:06](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=66)** For example, if your infrastructure is hosted on a site that is a shared data center, it's highly unlikely you would be able to manage or control power or network issues on that site.
>
> **[1:17](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=77)** Your goal at this point is to ensure that you only provide services where it'll provide value to critical services.
>
> **[1:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=84)** You may think at this point, why are we setting out scope when we've not even started setting up the service or delivering a service?
>
> **[1:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=91)** Well, if something goes wrong and uptime of critical services has occurred, the first person that the organization will come to is yourself and your service to understand what's happened.
>
> **[1:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=102)** If you have a document that spells out what your service is accountable for, including infrastructure, it means that your supplier, when your supplier makes a mistake or a test environment goes down, you'll have a document that will help you action those responses in the right place to the right place.
>
> **[1:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=118)** By doing all of the above, it helps you mature your service delivery easier than evolving as you go.
>
> **[2:05](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=125)** The next step would be to take all of the information and create a policy paper, perform at your service delivery.
>
> **[2:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-your-scope?u=76281980&t=131)** On the next module, we will show you the importance of creating an effective policy paper that really shows the value in what you do and ultimately what you're accountable for.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Setting out policy](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=0)** - [Instructor] Now that you spent some time reviewing the organization, how they work, what stakeholders you work with, and infrastructure and setup, the next question I want you to think about is, so what?
>
> **[0:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=11)** Okay, that sounds a bit abrupt, but the point here is what next?
>
> **[0:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=14)** How do you use all of the information you have learned to form a capacity and availability service that adds value?
>
> **[0:20](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=20)** It has a well-defined scope of what your outputs will be and ultimately what you're accountable for and not accountable for?
>
> **[0:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=27)** This is where writing a policy for your service will not only show why you're here, but it'll also protect you and your service from what is often called scope creep.
>
> **[0:36](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=36)** Through times someone's assumptions of who should manage what services or infrastructure can change.
>
> **[0:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=41)** You need something that's formally agreed by your senior management team that states out clearly what your service is and its scope.
>
> **[0:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=48)** A policy will typically be made up of the following sections.
>
> **[0:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=51)** Purpose, high level overview, what this policy will cover.
>
> **[0:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=56)** The main objectives of the capacity and availability, such as ensuring the business meets service level agreements by maximizing availability of services.
>
> **[1:05](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=65)** Scope, highlight what IT services and components will be managed by your service.
>
> **[1:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=72)** Don't list them all out.
>
> **[1:13](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=73)** Just state something like they're all live environment services.
>
> **[1:17](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=77)** Also have a subsection highlighting what is out of scope.
>
> **[1:22](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=82)** Definitions remember, acronyms and terminology need to be explained, so highlight what is meant by capacity management, availability management and metrics you may need to use to record effectiveness of a service, more on metrics later.
>
> **[1:37](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=97)** Core principles and guidelines.
>
> **[1:39](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=99)** This is where you'll elaborate on why you're here.
>
> **[1:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=102)** Explain what your service does and why.
>
> **[1:46](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=106)** Typically, break this down into subsections of capacity management, availability management.
>
> **[1:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=111)** Explain the activities that each area will complete.
>
> **[1:54](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=114)** Don't worry, by the end of this course, you'll have a far better idea.
>
> **[1:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=118)** Procedure and processes.
>
> **[2:01](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=121)** Going a bit more granular than the previous section, you'll highlight the processes you'll conduct.
>
> **[2:06](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=126)** I recommend that you have this as a hyperlink to your process documents you'll need to make later.
>
> **[2:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=132)** Roles and responsibilities.
>
> **[2:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=134)** Remember the stakeholder mapping we talked about?
>
> **[2:17](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=137)** This is where it'll come into handy.
>
> **[2:19](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=139)** You'll want to record what teams are responsible, accountable, consulted, and informed, that racing model and the processes of capacity and availability.
>
> **[2:29](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=149)** Key performance indicators.
>
> **[2:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=151)** In this section, you'll cover all the metrics you'll learn about later in this course.
>
> **[2:35](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=155)** This section is basically how you'll measure success.
>
> **[2:39](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=159)** Compliance and auditing.
>
> **[2:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=161)** This section is short but crucial.
>
> **[2:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=163)** Basically, how will you ensure you adhere to everything stated in your policy?
>
> **[2:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=168)** State annual audits for compliance, but also reviews of the policy insurance still relevant.
>
> **[2:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=173)** This might sound like a lot of work and it is, but the value in the long-term benefit of taking your time to do this will save you ambiguity, knowledge loss of processes due to staff turnover and ultimately scope creep as the organization evolves over time.
>
> **[3:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=187)** A tip that I would suggest is to keep a [[Version Control]] section of what was updated when and by who on the front of the document.
>
> **[3:15](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=195)** It helps with your compliance auditing trial later.
>
> **[3:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=198)** Just one final note here.
>
> **[3:20](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=200)** After a policy has been created, it is likely it's going to be need signed off by a senior team and your organization to ratify that.
>
> **[3:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=207)** It's also agreeing what you offer, so remember, that language needs to be clear.
>
> **[3:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=212)** I would also suggest it's kept somewhere that's central for all teams to access.
>
> **[3:37](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=217)** This isn't a document just for your team, but a guide to anyone that wants to understand what you provide.
>
> **[3:44](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=224)** Although it might be tempting to let it gather dust as you have a lot of practical work to do, maintaining this document is key to ensuring not only you remain compliant, but also you can provide clear documentation and what you do in case of an external audit.
>
> **[3:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=238)** So now you have done your discovery work.
>
> **[4:01](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=241)** Let's now get on to each of the functions of capacity and availability management and give you a more granular look and what each of these areas should be expected.
>
> **[4:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/setting-out-policy?u=76281980&t=251)** Let's start with service capacity management, and we'll come back to this policy document at the very end of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Version Control]] (1)
> **Cross-References:** we talked about (1), later in (1)
> **Prerequisites:** setup (1), you'll need (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Service Capacity Management

[↑ Back to Table of Contents](#table-of-contents)

#### [What is service capacity management?](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=0)** - [Instructor] Capacity management can be split into two functions, service capacity management, and resource capacity management.
>
> **[0:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=7)** In this video, we'll cover service capacity management, as it's easier to start with the higher level function, to then get into the more granular details that resource capacity management covers.
>
> **[0:17](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=17)** Service capacity management, as it sounds, is the management of IT services of your organization by ensuring there is enough capacity available to create high performance services that meet any SLA that you may have to report against.
>
> **[0:30](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=30)** At a high level, what this means for you is your service will need to review the components that make up services and baseline their performance.
>
> **[0:40](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=40)** Look at utilization of each component.
>
> **[0:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=42)** Is there an opportunity to save money or further enhance the performance of those services?
>
> **[0:47](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=47)** Trend analysis.
>
> **[0:49](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=49)** Can you look at historical data and identify any general times the service goes down?
>
> **[0:54](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=54)** We'll cover techniques for this later.
>
> **[0:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=56)** Future growth and further development.
>
> **[0:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=58)** Ensure you know what capacity there is within existing infrastructure to host maybe an upgrade or an added feature.
>
> **[1:05](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=65)** You need to be able to also plan and think about implications of maybe adding another thousand users using video call.
>
> **[1:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=71)** Another example may be implications of new reporting with lots of large graphics being set out during peak hours.
>
> **[1:19](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=79)** This is typically called demand [[Forecasting]] and capacity modeling.
>
> **[1:22](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=82)** Without going into too much detail at this stage, this is where resource capacity management will really help you out later by knowing what other components could be utilized without additional cost.
>
> **[1:34](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=94)** Work with other stakeholders such as [[Problem Management]] if you identify a problem candidate for maybe a service component that goes down, but maybe hasn't caused any user facing issues yet.
>
> **[1:46](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=106)** As you can imagine, this can be a very interesting, gratifying, and valued service within the organization, if it's performed well.
>
> **[1:54](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=114)** It is crucial to remember a couple of things at this point.
>
> **[1:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=118)** You're not expected to be a technical architect and you can do all of this work alone.
>
> **[2:03](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=123)** It will be your job to engage the relevant teams to create workshops that help understand all of the above, but also create a way you can get the data you'll need to baseline services.
>
> **[2:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=134)** By working with other services such as problem management, you'll be able to get more engagement on potential problem areas that help you identify that through your investigation of data.
>
> **[2:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=144)** This internal will help you maximize your availability of your services by becoming the proactive service.
>
> **[2:29](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=149)** This service is also involved with other [[ITIL]] functions, such as change management, as in some places they may want your sign off that you've conducted an analysis of the implications of a change before it's deployed.
>
> **[2:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=162)** Hopefully, though, by this point, you will have already been engaged with those development teams to do an assessment of what's required from a capacity modeling point of view.
>
> **[2:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=171)** As you can see, it's not all technical, but stakeholder management plays a significant role within this space.
>
> **[2:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=178)** Data plays one large aspect of what you need to consider, but from a service design perspective, you also need to understand how the organization provides services from a technical perspective.
>
> **[3:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-service-capacity-management?u=76281980&t=189)** Reviewing the infrastructure will help you add context to the data you have collected throughout this process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Problem Management]] (2), [[Forecasting]] (1), [[ITIL]] (1)
> **Analogies:** such as (3), imagine (1)
> **Env Vars:** sla (1), itil (1)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Reviewing the infrastructure](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=0)** - [Presenter] This might sound really fundamental, but it's also extremely important to ensure you have a good understanding of how those services which you've identified in your critical business list are created within the IT infrastructure.
>
> **[0:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=12)** When considering this space, remember, you are not a technical architect.
>
> **[0:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=16)** You don't need to know how everything works, but you do need to work with technical colleagues.
>
> **[0:21](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=21)** Working collaboratively will help you identify areas of IT infrastructure that may cause capacity issues, thus impact availability of services.
>
> **[0:30](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=30)** One key but sometimes basic thing that is often forgotten is just speaking to our technical colleagues.
>
> **[0:35](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=35)** Get their perspective on the range of topics that will be invaluable starting points for you.
>
> **[0:40](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=40)** Where do they regularly see pressure points on capacity?
>
> **[0:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=43)** Are there any services that regularly require maintenance?
>
> **[0:46](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=46)** Think manual processes to free up space.
>
> **[0:50](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=50)** Are there any components that are not for live production?
>
> **[0:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=53)** During this phase, I would recommend sitting with your appropriate teams, review each critical service, and take note of components that will may impact capacity.
>
> **[1:02](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=62)** What you may find are components are shared with other services, switches, storage servers, servers hosting [[Virtual Machines]], the list goes on.
>
> **[1:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=71)** This will help you join the dots on what components may be heavily used versus the ones that are barely used or mentioned.
>
> **[1:17](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=77)** At this stage, this is not evidence-based, but it gives you a good starting point in what risks to availability may be across the resource capacity management aspect of work you'll complete later.
>
> **[1:28](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=88)** To go one step further and help you validate risks and just generally see the as is of the performance of infrastructure, you need to discuss access to data.
>
> **[1:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=98)** To help in this stage, you should know it's unlikely you'll get admin access or the keys to the kingdom for the business.
>
> **[1:44](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=104)** I'm sure our security colleagues may have something to say about that, but to get around this, consider the following.
>
> **[1:50](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=110)** Monitoring tools.
>
> **[1:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=111)** Can you get access to a dashboard or a report that reports in key components?
>
> **[1:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=116)** If not direct access, can you get regularly emailed reports?
>
> **[2:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=120)** Admin reports?
>
> **[2:01](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=121)** Can someone create reports via [[Microsoft]] Admin, for example, to require you to get the data you need?
>
> **[2:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=127)** Historic data.
>
> **[2:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=129)** If possible, gather historic data on components that allow you to do some trend analysis.
>
> **[2:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=134)** We'll cover a bit more on that later.
>
> **[2:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=136)** And finally, reporting [[Dashboards]].
>
> **[2:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=138)** How can you use the data that you've established in your capacity management functions?
>
> **[2:23](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=143)** Again, we'll cover this in a future chapter.
>
> **[2:26](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=146)** All of the above will help you investigate, formulate reports, and understand the current landscape of the infrastructure, and more importantly, give you a starting point on any quick wins that may arise.
>
> **[2:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=158)** One other key tip here.
>
> **[2:40](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=160)** To help further the information from above is to review changes and incidence and [[Problem Management]] tickets that have occurred from a period of time.
>
> **[2:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=168)** This will help you understand what components of infrastructure are already causing issues, which should be a top priority for you.
>
> **[2:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=176)** All of the above questions will really help you understand and prioritize where you'll investigate capacity with an organization.
>
> **[3:03](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/reviewing-the-infrastructure?u=76281980&t=183)** By taking the time to understand the infrastructure, you're going to help your service to add maximum value to any organization by understanding the key areas of work and reporting you'll need to do and focus on from day one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (1), [[Microsoft]] (1), [[Dashboards]] (1), [[Problem Management]] (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [presenter] (1)

#### [Capacity forecasting: Data collection](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=0)** - [Instructor] Data is central to everything you'll do within capacity management, whether it's service or resource capacity management.
>
> **[0:06](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=6)** So I want to take some time to discuss a few things.
>
> **[0:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=9)** What kind of data should I consider?
>
> **[0:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=11)** What's the best place to look for that data, and what level of access can I have to that data?
>
> **[0:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=16)** And finally, can I get constant or regular reports from those data sources?
>
> **[0:21](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=21)** So let's break this down by potential components.
>
> **[0:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=24)** Firewalls and switches play a crucial role in operations of services.
>
> **[0:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=27)** After all, a switch will be providing access to a wider area network, and a firewall will be ensuring that only authorized traffic is getting through.
>
> **[0:36](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=36)** So for example, thinking of a switch, you'll want to consider the switching capacity typically measured in gigabytes per second.
>
> **[0:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=43)** Essentially, this is how much data your switch can handle at any given time.
>
> **[0:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=48)** You also want to consider power consumption as the wider impact in a data center where you may be charged by per usage.
>
> **[0:55](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=55)** So more switches potentially means more cost.
>
> **[0:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=58)** Now, thinking about firewalls, this has some similarities when thinking about throughput of data going into the firewall.
>
> **[1:05](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=65)** But you might also want to consider the maximum number of active connections it can handle, along with things such as VPN tunnels to your organization if they use them, and the speed at which a firewall can inspect data to ensure it detects and blocks non-authorized traffic.
>
> **[1:20](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=80)** Typically, to find out to get this data, it's very likely the technical team will have access to a lot of this in an admin console, particularly the number of active VPN tunnels and throughput.
>
> **[1:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=91)** However, you may also be able to get this in event monitoring software that exists in your organization.
>
> **[1:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=98)** Also, think about looking up manufacturer's websites to get the out of the box limitations.
>
> **[1:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=102)** If you know this, you then need to only identify the actual usage.
>
> **[1:47](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=107)** Servers also play a fundamental role in key infrastructure.
>
> **[1:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=111)** This is where software and services will likely be hosted with both virtual and physical service.
>
> **[1:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=116)** It is likely you'll want to measure CPU usage, RAM usage, processor cores, and storage.
>
> **[2:04](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=124)** As you'll see, there are a few more components here to consider, such as usage, multiple apps all hosted in one server, and the data that automatically stored can be quickly blend without proper management.
>
> **[2:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=136)** This can also impact another metric to consider, which is response rate, i.e., how long does it take to respond to a request?
>
> **[2:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=144)** In the case of servers and storage and your key objectives, should be looking at risks and highlighting them for actions such as over utilization of any components of the above resources and discuss mitigating actions with technical teams.
>
> **[2:37](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=157)** It's highly likely you can access some reports to pull this data from things such as SCCM, event monitoring tools such as Zabbix and service-specific admin console showing performance of a service.
>
> **[2:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=171)** But it will still required negotiation with teams to ensure you can get the right level of access required.
>
> **[2:57](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=177)** And finally, another data set to consider which is less reliant on technical teams is historic data set on instant records.
>
> **[3:05](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=185)** This will come in handy to ensure you can see where end users have reported issues with the service.
>
> **[3:10](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=190)** We'll come to data cleansing later.
>
> **[3:13](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=193)** The next step I want you to think about is how are you going to get all of the data sets above?
>
> **[3:17](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=197)** This is where your stakeholder management skills will come in.
>
> **[3:21](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=201)** It's likely you won't get ad hoc access whenever you like to all of these data sources.
>
> **[3:25](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=205)** So consider how you centralize data from regular reports.
>
> **[3:29](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=209)** Another aspect to consider is how you track that data month on month.
>
> **[3:34](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=214)** Creating a report, breaking down average utilization per month or week may help with this and see trends over a longer period.
>
> **[3:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=221)** What's normally out of scope for service capacity management is the license management.
>
> **[3:45](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=225)** This is traditionally will be managed by software asset management teams or technical teams, which can be a tricky management in itself.
>
> **[3:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=233)** So I would always advise you to specify this in your policy.
>
> **[3:57](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=237)** Hopefully, this has given you a good starting point for understanding a service and the components you may want to consider when performing this service.
>
> **[4:06](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=246)** Remember, every organization's different and there could be technology I have not mentioned you may want to manage too.
>
> **[4:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=252)** At this stage, I always recommend recording each service, breaking down the components such as indicated earlier, and the data sources you could utilize.
>
> **[4:21](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-data-collection?u=76281980&t=261)** This will help you and your colleagues maintain good knowledge management in the future.

> [!info]- Semantic Content
>
> **Analogies:** such as (6), for example (1)
> **Env Vars:** vpn (2), cpu (1), ram (1), sccm (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Capacity forecasting: Techniques](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=0)** - [Instructor] Now that we have covered the type of data you might want to assess, it's now time to think about what techniques you can use to get trend analysis that's meaningful to capacity, and availability services.
>
> **[0:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=11)** The following techniques will make up some of your metrics you'll need within your availability reporting per service, so this will help you twofold in narrative for reporting, but also trend analysis for proactive analysis.
>
> **[0:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=24)** One thing just before we go on to the techniques, just ensure that any data that you are analyzing, you are confident that the data is cleansed.
>
> **[0:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=32)** What I mean by this is that monitoring tools or admin tools will not be able to tell you when historic changes taken place, which may have increased or decreased utilization of a resource or service.
>
> **[0:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=43)** For example, you may have had a 16 GIG ram allocation to service, which was subsequently upgraded to 32 GIG ram and a plan change.
>
> **[0:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=51)** This will skew the data later as that utilization rate should drop or increase.
>
> **[0:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=56)** In scenarios such as this, I would recommend where you see a change in trend quite suddenly is look at other data sources such as change management tickets or instant tickets to confirm if there was indeed a plan change.
>
> **[1:08](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=68)** If you're still not sure, just ask the technical experts at your disposal.
>
> **[1:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=72)** Finally, take your data from that point of change, if it is indeed a plan change.
>
> **[1:17](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=77)** If not, ask your technical teams to investigate.
>
> **[1:21](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=81)** Okay.
>
> **[1:22](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=82)** So for thinking about our first technique for analyzing your data, you need to understand what normal is.
>
> **[1:28](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=88)** This is where baselining will come in.
>
> **[1:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=91)** By looking at the average CPU usage on the average or the average throughput in that firewall per component, this will help you quickly identify if you have any deviations that you might need to investigate.
>
> **[1:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=102)** Normally, an average will be taken over at least six to 12 months periods.
>
> **[1:47](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=107)** However, it is worth noting, depending on the service, there could be peak times per year for particular services.
>
> **[1:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=113)** Think about end of tax year reporting as an example.
>
> **[1:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=116)** You might see peaks and users utilizing service.
>
> **[1:59](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=119)** This kind of analysis is [[Time Series Analysis]], so although it's key to benchmark the everyday usage, it's also vital to understand the usage at peak times.
>
> **[2:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=131)** This will really help you with your future [[Capacity Planning]].
>
> **[2:15](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=135)** Once you have all of the above, remember to compare the average pair period.
>
> **[2:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=138)** Eventually you'll be able to compare peak time periods, and see if there's any uptick in utilization of resources.
>
> **[2:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=144)** But remember, you may also see trends outside of peak times.
>
> **[2:28](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=148)** Also, what you may need to focus on.
>
> **[2:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=152)** Now that you have a handle of your infrastructure.
>
> **[2:35](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=155)** Let now let's consider the 2B.
>
> **[2:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=158)** To do this, we need to ensure your historic data has been analyzed.
>
> **[2:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=162)** So consider looking at trends in the data for the last six to 12 months.
>
> **[2:47](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=167)** Our CPU utilization rates climbing 5% every quarter, our storage is getting filled pretty quick.
>
> **[2:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=173)** By doing this type of analysis, you can now consider where the future trends may be going, which means some proactive analysis to understand what services could be impacted by service degradation in a number of months, which gives you a good opportunity to maintain a good service availability.
>
> **[3:10](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=190)** Just a tip here, you may want to set up trigger points on when you need to take action.
>
> **[3:15](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=195)** For example, if a service or on a storage server for example, hits 80% full, you may want to send a request ticket to your technical teams to investigate or clear cache data.
>
> **[3:26](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=206)** This will also further help you show the value of capacity and availability.
>
> **[3:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=211)** By doing all of what we've discussed, you'll be able to analyze your data in a more effective way, and be ready for providing really useful reporting on the performance of the services in your organization.
>
> **[3:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=223)** But what impact does one service have on another?
>
> **[3:46](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=226)** What about the infrastructure that is not directly related to one service?
>
> **[3:50](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/capacity-forecasting-techniques?u=76281980&t=230)** This is where resource capacity management will come in and really help you understand, and load balance all services to maximize that availability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Time Series Analysis]] (1), [[Capacity Planning]] (1)
> **Analogies:** for example (3), such as (2)
> **Env Vars:** gig (2), cpu (2)
> **Prerequisites:** you'll need (1), set up (1)
> **CLI Commands:** make (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 3. Resource Capacity Management

[↑ Back to Table of Contents](#table-of-contents)

#### [What is resource capacity management?](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=0)** - [Instructor] Now that you have a good idea of what's involved in managing a service within your organization from a capacity and availability perspective, we now need to take that one step further and go a bit more granular.
>
> **[0:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=12)** As you may suspect, each IT service is unlikely to be hosted within its own bubble, and in fact, most services will rely on the same infrastructure within the same data center as other services.
>
> **[0:23](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=23)** The next logical question you're here to provide answers to is how do we ensure that the shared infrastructure does not overload and impact services?
>
> **[0:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=31)** That is the question that resource capacity management is here to answer.
>
> **[0:35](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=35)** At this stage, you're looking at resources such as switches, servers, virtual servers in the cloud, power usage within a data center, and much, much more.
>
> **[0:45](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=45)** By monitoring and recording the dependencies of each service on shared infrastructure, you can really start to manage capacity in a broader view than just service specific resources.
>
> **[0:55](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=55)** If you have a [[Configuration Management]] team in your organization, they might be able to help out with this dependency mapping.
>
> **[1:01](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=61)** Imagine you have a storage server, which is used for storing emails based on a data retention policy, but also used for storing large size media libraries for marketing, and the organization wants to add another service which is storage hungry.
>
> **[1:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=74)** Well, if you have another storage function which is underutilized, you can move one of those high storage services around to avoid any risk to your storage capacity.
>
> **[1:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=84)** With your monitoring of resources, you'll help ensure that you can make the organization more efficient and cost-effective too.
>
> **[1:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=91)** At the resource capacity management level, you'll be analyzing even more data than at the service capacity management aspects.
>
> **[1:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=98)** You'll also be providing recommendations to your technical teams for consolidating and load balancing, and more crucially, you'll help your organization add new services in the more controlled and safe method than if this service did not exist.
>
> **[1:52](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=112)** Ultimately, avoiding availability issues across your services.
>
> **[1:57](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=117)** One thing to reiterate here.
>
> **[1:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=118)** You're not expected to be a technical architect and you will be relying on your technical teams to help you set up and collect the right data, understand infrastructure and work with you to make the right changes as time goes by.
>
> **[2:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=131)** Your role here is to, as a facilitator, is based on the data you can and analyze.
>
> **[2:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=136)** This means you might not always be able to complete every recommendation due to a technical reason that you would not be expected to know.
>
> **[2:23](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=143)** But it's your role to highlight areas of contention and help those technical teams to manage them and avoid availability issues along with that.
>
> **[2:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=152)** Always remember that to keep a decision log as an audit trail of each meeting, this will help you later if you need to update risks or refer to your reporting, which is something we'll talk about later.
>
> **[2:44](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/what-is-resource-capacity-management?u=76281980&t=164)** So with that in mind, let's now think about what kind of data you might want to consider collating as part of providing that resource capacity management service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Configuration Management]] (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Assessing resource capacity: Data collection](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=0)** - [Instructor] As we delve deeper into resource capacity management compared to service capacity management, you may expect the data involved to become more granular, and you'd be right.
>
> **[0:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=9)** Considering the impact of shared infrastructure, we need to broaden our [[Data Collection]] scope.
>
> **[0:15](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=15)** While data centers are likely the focal point for your data considerations, it's crucial to distinguish between your responsibilities and those of your data center manager, if you have one.
>
> **[0:25](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=25)** In most cases, you wouldn't manage the physical aspects of the number of utilized switch ports, available rack space for new [[Hardware]], or cable availability.
>
> **[0:34](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=34)** These typically fall under the data center manager's purview.
>
> **[0:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=38)** To avoid any ambiguity, ensure your organization's policy documents, as discussed earlier, clearly outlines your scope of responsibilities.
>
> **[0:47](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=47)** Remember, [[ITIL]] 4 serves as a guideline, not a rigid drill book.
>
> **[0:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=51)** Your organization might require you to perform tasks typically handled by a data center manager.
>
> **[0:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=58)** In such situations, it's your responsibility to clearly communicate the limitations and boundaries of your role.
>
> **[1:04](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=64)** One physical area both you and your data center manager might work on together is one of power consumption against a quota supplied by a data center provider.
>
> **[1:13](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=73)** Similarly, you'll be responsible for tracking total bandwidth usage in the data center by all services compared to the provider's quota.
>
> **[1:22](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=82)** This data can usually be obtained through supplier portals or power unit administration portals accessible to your technical teams.
>
> **[1:30](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=90)** Shared resources, particularly hosting servers, are likely to be managed services for multiple virtual servers utilizing shared CPU, RAM, and impacting response times.
>
> **[1:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=101)** Here, your focus shifts from service-specific servers to the physical servers hosting those [[Virtual Machines]].
>
> **[1:49](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=109)** Over-utilization of any of these resources can lead to a network latency or increase server response times, ultimately impacting customer experience and potentially causing availability issues.
>
> **[2:02](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=122)** Another area which can be quite complex is storage.
>
> **[2:06](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=126)** This can be complex because there's so many variables in the type of data, the size of it, growth, and any legal obligations you might have.
>
> **[2:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=134)** Consider this, if you work in the health services industry, you may have to retain patient records for the length of their life, and can only be deleted seven years after death, in case of any investigations.
>
> **[2:26](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=146)** Now, imagine the number of patients that are processed, the average size of a patient's data.
>
> **[2:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=151)** You can quickly see how one service can blend [[Data Storage]] for an organization.
>
> **[2:35](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=155)** Remember, though, shared resources will also have storage requirements for data logs, for audit trails, business report, and much more.
>
> **[2:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=163)** What the above means is storage in the resource capacity management process is a critical area to understand, as it could quickly degrade quality of service or even availability.
>
> **[2:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=173)** So from a data perspective, you should be investigating various factors: total capacity per storage server, if possible by file type, to understand growth impacts; your organization's data retention policies, and much more.
>
> **[3:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=187)** From a performance aspect, you should consider I/O operations per second, latency and throughput, all of which have performance or availability impacts.
>
> **[3:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=196)** Don't forget about switches and firewalls and storage, all of which need consideration, as they all have audit logs, as mentioned in the service capacity management aspect.
>
> **[3:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=207)** Now you have a better understanding of the granular data required for resource capacity management, let's explore higher level trend analysis.
>
> **[3:35](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=215)** Remember, peak usage times for individual services?
>
> **[3:37](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=217)** [[Time Series Analysis]] comes into play here.
>
> **[3:40](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=220)** This analysis helps identify spikes in usage and assess whether multiple services peak simultaneously.
>
> **[3:46](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=226)** Additionally, it allows you to determine how close you came to reaching capacity limitations of shared infrastructure.
>
> **[3:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=233)** This is where bottleneck analysis comes crucial.
>
> **[3:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=236)** Bottlenecks are resources that can throttle the performance of other services.
>
> **[4:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=240)** If you identify such bottlenecks, investigate how to mitigate them and reduce the risks of availability.
>
> **[4:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=247)** Load balance and workloads across your resources as an effective mitigation strategy, which we'll discuss next, along with considerations to help you gain stakeholder support for implementation.
>
> **[4:19](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=259)** Remember, you're not here to solve all the problems, you are there to highlight them and work with your technical stakeholders to look for opportunities to mitigate bottlenecks or other risks as to capacity.
>
> **[4:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/assessing-resource-capacity-data-collection?u=76281980&t=272)** As ever, remember to log these activities in your report, and we'll discuss that later, as it shows your value you provide and an audit trail for any changes that may occur in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (1), [[Hardware]] (1), [[ITIL]] (1), [[Virtual Machines]] (1), [[Data Storage]] (1)
> **Env Vars:** itil (1), cpu (1), ram (1)
> **Best Practices:** don't forget (1), remember to (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Resource monitoring: Workload balancing and consolidation](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=0)** - [Instructor] After analyzing data sources, the next step is to review that analysis to see how best to avoid any risk availability.
>
> **[0:08](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=8)** For example, imagine our online shop in Black Friday happens once per year and is an above average event that could crash your website if you have not considered areas of bottleneck risks on capacity.
>
> **[0:20](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=20)** As you can imagine, by not balancing workloads and your organization runs the risk of losing business and reputation and potentially money too.
>
> **[0:28](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=28)** To avoid that scenario, resource monitoring involves observing infrastructure data to identify opportunities for performance optimization, such as relocationing [[Data Processing]] or rescheduling tasks to avoid bottlenecks.
>
> **[0:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=42)** This is essentially workload balancing and consolidation.
>
> **[0:45](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=45)** Three primary types of workload balancing actions can help achieve a more balanced and cost-effective service.
>
> **[0:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=51)** Load balancing is distributing the requests across multiple servers to prevent performance degradation of potential outages, scheduling, assigning resource-intensive tasks to specific resources to avoid overloading other services, and finally, process mitigation.
>
> **[1:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=69)** Identifying processes that can be executed in different resources to optimize workload distribution.
>
> **[1:15](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=75)** Of the above actions will help you typically avoid any bottlenecks and balance workloads of processes across your organization.
>
> **[1:23](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=83)** However, another aspect to consider is underutilized resources.
>
> **[1:28](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=88)** These are cost saving opportunities and can really show your value.
>
> **[1:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=92)** By identifying underutilized resources, you should now look at how you can utilize that opportunity and consolidate services using less resources.
>
> **[1:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=101)** While consolidating can improve and availability and reduce costs, it's essential, however, to consider the potential challenges to this.
>
> **[1:49](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=109)** Compatibility, ensure services can run on consolidated servers without compatibility issues.
>
> **[1:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=116)** Think about backup disaster recovery.
>
> **[1:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=118)** Be aware of increased stress to data loss and data recovery capabilities.
>
> **[2:04](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=124)** Peak tech trends.
>
> **[2:05](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=125)** Analyze peak usage patterns to determine if consolidating servers can handle out those peak loads once all of those servers are in one particular resource.
>
> **[2:15](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=135)** Workload balancing and consolidating can be challenging but rewarding.
>
> **[2:19](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=139)** Just ensure you collaborate with your technical teams, senior management and customers to help them make more informed decisions and optimize your infrastructure.
>
> **[2:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=147)** The output from this will really show the value of what you do as a service within your organization.
>
> **[2:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=152)** A consideration here is how do you present the output of these actions to senior management or non-technical stakeholders.
>
> **[2:39](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=159)** Well, the simple answer here is two business perspectives, risk mitigation and cost saving.
>
> **[2:45](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=165)** We'll cover the reporting later on the course, but always remember to record actions and quantify them if possible, about the cost avoidance or reduction of consolidating services running a few resources.
>
> **[2:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=176)** This could resonate really well with your audience.
>
> **[3:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=180)** And remember, as a capacity and availability manager, you'll facilitate these opportunities with your technical teams who will agree or may even disagree with completing those actions.
>
> **[3:10](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=190)** That is okay.
>
> **[3:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=192)** There may be planning reasons, what you're unaware of at this stage, or technical risks you'll not be expected to know.
>
> **[3:19](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/resource-monitoring-workload-balancing-and-consolidation?u=76281980&t=199)** But with each opportunity, always log the actions in your reporting, which we'll talk about later on within the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Processing]] (1)
> **Analogies:** imagine (2), for example (1), such as (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Best Practices:** remember to (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Preparing for future services](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=0)** - [Instructor] As with most business services, [[Microsoft Products|products]] follow a life cycle from ideation to production and eventually retirement.
>
> **[0:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=7)** This cycle involves evolving customer needs, new technologies and changes in infrastructure.
>
> **[0:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=12)** As a capacity and availability manager, how do you effectively manage these changes?
>
> **[0:17](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=17)** By this stage, you've likely established a foundation of understanding for your infrastructure, including baseline performances, identifying bottlenecks, and understanding your current state.
>
> **[0:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=27)** Now we need to take that one step further with modeling and [[Forecasting]].
>
> **[0:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=31)** You might have already modeled various scenarios for increasing or decreasing demands on different infrastructure components, like CPU and storage.
>
> **[0:40](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=40)** Now, let's add the stress of new products to this forecast.
>
> **[0:44](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=44)** To do this, you're going to have to work with product management teams who are possibly planning to onboard new services.
>
> **[0:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=51)** From a capacity and availability perspective, you'll be interested in having all components we have discussed up to this point.
>
> **[0:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=58)** Ask questions on how it might create risks through bottlenecks and availability issues.
>
> **[1:03](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=63)** Does it replace a legacy service?
>
> **[1:05](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=65)** If so, can you consolidate some resources?
>
> **[1:08](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=68)** What actions need to happen before it goes live?
>
> **[1:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=72)** Workshops with the technical teams provide an opportunity to understand the product's purpose, design, and potential impacts on servers, storage, switches, and much more.
>
> **[1:22](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=82)** Gather the estimates for resource utilization based on alpha or beta versions.
>
> **[1:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=87)** Remember, you're not an architect; rely on their expertise.
>
> **[1:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=92)** Next, integrate these utilization estimates into your future capacity forecast.
>
> **[1:37](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=97)** Identify potential risks, like CPU overload or storage limitations.
>
> **[1:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=102)** Work with technical teams to address these risks through mitigation strategies, like server migration and adding resources.
>
> **[1:49](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=109)** Ask questions such as, will this product have a fast growth rate?
>
> **[1:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=113)** If so, is it more effective to have a dedicated resource despite a higher resource allocation upfront?
>
> **[2:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=120)** What does the service deliver?
>
> **[2:01](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=121)** Is it critical to the risk, and do the risks reflect that, and what actions will be done to mitigate those unacceptable risks?
>
> **[2:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=129)** Does the service have a high [[Data Storage]] requirement?
>
> **[2:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=132)** How does this impact current storage utilization rates?
>
> **[2:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=136)** During this analysis, don't forget [[Time Series Analysis]].
>
> **[2:20](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=140)** This should be reflected in your future capacity forecasting.
>
> **[2:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=144)** Identifying peak utilization times for existing resources, and consider potential peak usage patterns for the new product.
>
> **[2:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=151)** Incorporate these into your future capacity plan to ensure an adequate support.
>
> **[2:36](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=156)** Beyond technical assessments, remember, your capacity and availability reporting should reflect new services.
>
> **[2:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=162)** We'll cover this in more detail in the availability section, but note that workshops and assessments provide an audit trail of your involvement in products.
>
> **[2:52](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=172)** Existing services can also grow due to upgrades or changing usage patterns.
>
> **[2:57](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=177)** Stay engaged with technical changes presented to your change management team to assess their impact.
>
> **[3:02](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=182)** Finally, remember to log all actions that have been taken to mitigate or prepare for a new or growing service.
>
> **[3:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=189)** If a risk needs to be logged, or, in fact, it replaces a legacy service which was more resource-intensive, remember to report the savings and risk mitigation.
>
> **[3:19](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=199)** Adding new services and managing utilization requires careful planning and collaboration.
>
> **[3:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=204)** Early involvement in [[Product Development]] allows you to identify and address risk proactively.
>
> **[3:29](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/preparing-for-future-services?u=76281980&t=209)** While new products may increase resource demands, remember that some products may also change, reduce, or retire, leading to a more dynamic resource landscape.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (5), [[Forecasting]] (2), [[Data Storage]] (1), [[Time Series Analysis]] (1), [[Product Development]] (1)
> **Best Practices:** remember to (2), don't forget (1)
> **Env Vars:** cpu (2)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [How does it work in cloud infrastructure?](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=0)** - [Instructor] So if you're familiar with [[Cloud Infrastructure]], you may think that this, by design, would mitigate the need for having a capacity and availability manager.
>
> **[0:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=9)** That's because generally in a cloud environment, it is likely there is something called auto-scaling to flex when there is more demand or when there's less demand on a service or on a component.
>
> **[0:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=18)** This, in theory, means that you should not need to worry about demand outstripping supply.
>
> **[0:23](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=23)** Thus, availability's high.
>
> **[0:25](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=25)** Although this is true, that auto-scaling doesn't necessarily take into account a few things.
>
> **[0:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=31)** Spikes in demand means you have more resources allocated all year, when actually it might need to be scaled up for one year or one quarter or whatever the length of demand is.
>
> **[0:40](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=40)** This means you have underutilized resources.
>
> **[0:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=43)** This is generally caused if your technical teams have not correctly set up policies that could go undetected until you come in.
>
> **[0:50](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=50)** Cost effectiveness is impacted.
>
> **[0:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=53)** If not managed and right-sized with some analysis, it is likely your allocation of resources would balloon and your organization spending money that is not required.
>
> **[1:02](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=62)** This is also called excessive scaling, and sometimes human intervention is required.
>
> **[1:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=67)** Think of it as a balloon.
>
> **[1:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=69)** If also not managed, you may eventually get resource contention.
>
> **[1:13](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=73)** This is where there is no more free resource to allocate and in theory, if left, this could lead to performance issues on those affected services.
>
> **[1:22](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=82)** So if you haven't guessed by now, the key thing that a capacity and availability manager can provide in this instance is the same as a non-cloud environment, resource management, cost savings, and provide insight into performance of services.
>
> **[1:37](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=97)** So let's now consider how you would fit into the new developments of new services.
>
> **[1:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=101)** Well, one of the key considerations is rightsizing from day one, which includes determining spikes in use that may occur.
>
> **[1:49](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=109)** This means you can right-size an instance in the cloud and hopefully prevent that auto scale option and save in resources.
>
> **[1:55](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=115)** This will also still require the previous mentioned methods of ensuring the service doesn't grow beyond the right size and through time.
>
> **[2:02](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=122)** But if it does mean managing it in a timely fashion to prevent auto-scaling, adding maybe too many resources, from a practical point of view, you will need a few tools to be able to monitor those resources.
>
> **[2:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=134)** Just remember that the metrics and performance indicators are the exact same, excluding power usage, as [[Hardware]], such as physical servers.
>
> **[2:22](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=142)** The outputs are also the same, availability, cost savings, and cost increases with change.
>
> **[2:30](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=150)** To be able to do this, there are various cloud tools out there to, depending on your host, AWS CloudWatch, [[Microsoft Azure|Azure]] Monitor, GCP Stackdriver, amongst some.
>
> **[2:40](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=160)** As ever, you may need to get direct access to those tools.
>
> **[2:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=163)** But be aware, you can set up alerts, based on reporting lines, such as utilization hitting 80%, set up notifications to SMS, email, direct messengers, messages, and much more.
>
> **[2:55](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=175)** I would suggest lowering the level as what you don't want to happen is you set it too high, and your service becomes more reactive than proactive.
>
> **[3:04](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=184)** For example, if you're alerted at 90 to 95%, it doesn't leave you a lot of time before utilization could could hit 100% of a resource.
>
> **[3:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=194)** Again, auto-scaling should kick in here and do the work for you.
>
> **[3:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=198)** But this is also another good indication if there is a trend of growing demand on a continually inflating, resource-hungry service.
>
> **[3:26](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=206)** On top of this, most of the tools also give you ability to create [[Dashboards]].
>
> **[3:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=211)** In this, you should be able to track some retrospective data too.
>
> **[3:35](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=215)** What this means is you should be able to look at historic data and see if there is already some increase in or decrease in trends, and even handier, you can put all of your key metrics into this dashboard too.
>
> **[3:45](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=225)** Saving you time and your reporting later.
>
> **[3:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=228)** Finally, once you're in a good place and establish a service in a cloud environment, you could, in theory, complete some tasks through automation, such as routine tasks, such as storage limitations hitting 80%, a task may run to complete or delete the temporary files from a server to reduce this, or even email you a dashboard PDF at the end of the month in the format you need for your month-end reporting.
>
> **[4:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=252)** And finally, I hope this has highlighted the impact of effective policies in cloud, and therefore, getting technical teams to review these should be a priority over avoiding over-scaling.
>
> **[4:23](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=263)** There is a whole world of opportunity to automate and add value with cloud infrastructure.
>
> **[4:29](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=269)** As you can see, capacity and availability management is just as important in a cloud environment as it is in a traditional hardware environment.
>
> **[4:36](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=276)** We provide value by balancing the solutions to maximize availability, along with the cost optimization.
>
> **[4:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/how-does-it-work-in-cloud-infrastructure?u=76281980&t=283)** Moving into this new world, none of this changes, just the tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Infrastructure]] (2), [[Hardware]] (2), [[Microsoft Azure|Azure]] (1), [[Dashboards]] (1)
> **Analogies:** such as (4), think of it as (1), for example (1)
> **Env Vars:** aws (1), gcp (1), sms (1), pdf (1)
> **Definitions:** is a  (2), means that (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** aws (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Running capacity sessions](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=0)** - [Instructor] One of the most daunting aspects of when you first start running a capacity and availability service is running a capacity session.
>
> **[0:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=7)** It is likely the first time you're meeting with technical experts in one room, and all eyes are on you to lead and facilitate that meeting with, let's face it, people who have more technical knowledge than you do.
>
> **[0:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=18)** Don't worry, I've done a lot of these sessions now, and I still make that nervous smile face that the guy in this picture's doing.
>
> **[0:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=24)** It's human nature. Don't worry.
>
> **[0:26](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=26)** But there are a few things to remember here.
>
> **[0:28](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=28)** You're a facilitator for decision makers to come together and make an informed decision based on the data you've collected.
>
> **[0:35](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=35)** This means you are not expected to make that decision.
>
> **[0:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=38)** It's not your technical knowledge that's at play here.
>
> **[0:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=41)** It's for the technical experts to agree on the next steps.
>
> **[0:44](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=44)** Knowing this often takes the anxiety out of running these sessions.
>
> **[0:47](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=47)** After all, the data you're using to make this decision has come from the technical teams.
>
> **[0:52](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=52)** You have in that room, and you're presenting it in a different way.
>
> **[0:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=56)** To help clarify this further, I would also recommend you create something called the terms of reference for reoccurring meetings.
>
> **[1:02](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=62)** A terms of reference simply is a document that highlights the objective of the meeting, the intended outcomes, and who the common audience should be.
>
> **[1:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=69)** Also, remember that process part of your policy.
>
> **[1:12](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=72)** You can now link this document as part of this and conduct that process giving you more audit authority.
>
> **[1:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=78)** And don't worry, I'll add a template here too.
>
> **[1:21](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=81)** In terms of the content of the sessions, remember your audience is technical.
>
> **[1:25](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=85)** It's not like you need to simplify the information as you would for a senior management report.
>
> **[1:30](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=90)** In relation to structure, I would suggest running sessions by business services to analyze all capacity actions, but also remember to host a session on infrastructure that's agnostic of business services, i.e., resource capacity management.
>
> **[1:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=103)** The objective of these meetings will be to present bottlenecks, risks, or even opportunities to consolidate or load balance and get teams to accept the potential actions or accept risks.
>
> **[1:54](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=114)** Again, you are pushing the teams to make decisions based on your data.
>
> **[1:58](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=118)** You may also find that you need, maybe need one or two sessions even more on a particular topic, and that's okay.
>
> **[2:05](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=125)** If this occurs, you still have to achieve your objective of a reason, awareness of something that you may need to action.
>
> **[2:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=131)** Just one final point about your structuring content.
>
> **[2:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=134)** You may not always get it right.
>
> **[2:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=136)** What I mean is the structure might not work.
>
> **[2:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=138)** Maybe the data you've presented has missed the crucial variable or some context, or simply the teams are not in a position to make a decision during that session.
>
> **[2:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=147)** All of this is fine.
>
> **[2:29](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=149)** We're all human. We make mistakes.
>
> **[2:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=151)** The key thing from these sessions and challenges like this is to fail fast.
>
> **[2:37](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=157)** Simply put, if an issue occurs, learn from it, and ask yourself and others, how do I prevent that from happening again, and can I improve it further?
>
> **[2:45](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=165)** Don't repeat the same mistakes again and again.
>
> **[2:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=168)** I will happily admit that I had run a few sessions, and it didn't go as planned.
>
> **[2:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=171)** Some were terrible, and although it can be hard not to take that personally, you have to remember that these areas are massively complex, and you will continually learn and improve.
>
> **[3:01](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=181)** And technical teams know that.
>
> **[3:04](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=184)** Within those sessions, I would always recommend you keep an action and decision log along with minutes.
>
> **[3:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=189)** If you haven't already done so, log risks and issues in your organization's risk register for further auditability.
>
> **[3:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=196)** This will help you later as you can add these decisions to your monthly reporting, which we'll cover later on.
>
> **[3:22](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/running-capacity-sessions?u=76281980&t=202)** By setting these behaviors and expecting them to read through your terms of reference and mentally preparing to be a facilitator, not a decision maker, you'll get the most value out of these sessions to have a really effective output.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7), find (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 4. Availability Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Metrics and reporting](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=0)** - [Instructor] You have now gone through the sizable tasks that capacity management requires, thinking about all the components you'll need to monitor, and how to plan for the future and save your organization resource and increase that cost avoidance of buying more infrastructure when it's not required.
>
> **[0:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=14)** But how do you portray the fruits of your labors to the business?
>
> **[0:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=18)** This is where availability management and reporting really start to provide you with a transcript of metrics you can provide and show a coherent list of outputs and show the value in what you do.
>
> **[0:29](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=29)** So let's now go through some of those typical metrics you should consider.
>
> **[0:33](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=33)** First of all, let's take the higher level picture and start thinking about services again around the components.
>
> **[0:40](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=40)** The most obvious place to start is the availability of the service.
>
> **[0:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=43)** This can be calculated by reviewing the total uptime of the service, you'll get this from the data that we previously discussed, versus the number of available errors in a month.
>
> **[0:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=53)** Always remember, not all months are equal, so don't forget your 30 days, 31 days, and 28-day months in your calculations.
>
> **[1:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=60)** Here's an example.
>
> **[1:03](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=63)** For an email service provided in October, 31 days, for a seven days a week, 365 days a year service, the service had a total uptime of 722 hours, according to your [[Data Collection]].
>
> **[1:17](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=77)** So dividing 722 hours of uptime by the total number of hours in October of 744 hours, then times that by 100 equals an availability score of 97.04%.
>
> **[1:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=92)** Compare this score to your SLA agreement to see if you passed or failed SLA for that reporting month.
>
> **[1:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=98)** When considering availability, as we alluded to at the beginning of the course, there are some exemptions you'll need to review over the reporting month.
>
> **[1:46](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=106)** Any situations that could be deemed as not caused by infrastructure or out with your control could be exemptions you should consider.
>
> **[1:54](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=114)** For example, a customer has an outage at site, which, after investigation, was a cleaner pulling out the plug on a server to clean the floor.
>
> **[2:03](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=123)** Yes, this has happened in the past, and it is terrifying.
>
> **[2:06](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=126)** This can happen.
>
> **[2:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=127)** What this means for you is you'll need to review all instance tickets relating to infrastructure outages in the reporting month.
>
> **[2:13](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=133)** This is where working with your instant management team and getting access to instant tickets will really help.
>
> **[2:19](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=139)** This may take time to try and support the service desks using correct categories when logging tickets, such as resolution notes stating a searchable term for you to pick up on.
>
> **[2:30](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=150)** The next key metric is mean time between the failures.
>
> **[2:34](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=154)** This score helps set a baseline on whether a service is starting to see failures more often, regardless of the length of each failure.
>
> **[2:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=161)** We'll come to that later.
>
> **[2:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=163)** To calculate this is very simple.
>
> **[2:45](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=165)** Take the total number of hours in the month, or, if you can only operate in set hours, the total operating hours, and divide that number by the number of outages for that reporting month.
>
> **[2:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=176)** So for example, I have an operational error contract of a service of 9:00 to 5:00 pm.
>
> **[3:02](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=182)** That's potentially 160 hours in that month.
>
> **[3:05](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=185)** Say we have three outages that month.
>
> **[3:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=187)** That means our mean time between failure would be 53.3 hours between failures.
>
> **[3:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=194)** Remember, the higher the number, the better.
>
> **[3:17](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=197)** This means the longer the service has been running between failures.
>
> **[3:20](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=200)** The smaller, the worst.
>
> **[3:22](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=202)** Remember, you'll need to confirm if an outage should be exempt or not before calculating.
>
> **[3:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=207)** And finally, just remember to add any commentary.
>
> **[3:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=212)** So remember, in the mean time between failures, we were not interested in the length of an average failure.
>
> **[3:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=218)** This is why this metric, mean time to repair, is specifically to indicate if there are any trends that a service takes, on average, longer or shorter to repair.
>
> **[3:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=228)** To calculate this metric, look at each legitimate outage for the reporting month, looking at the time from open to close for each, and get a total repair time, then divide that by the number of outages for that month.
>
> **[3:59](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=239)** So for example, my email system went down four times in July, and the total time to repair for all legitimate outages, it was 40 hours.
>
> **[4:10](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=250)** This means my total time to repair would be 10 hours.
>
> **[4:13](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=253)** This metric will help businesses identify if there may be a process gap causing that outage, but also if there's a technical reason for longer repair times, which means you can get ahead of increased outages and reduce the impact on customer satisfaction.
>
> **[4:30](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=270)** And more specific metrics can be also used in mean time to data loss.
>
> **[4:34](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=274)** This is a crucial metric for data-leading businesses who may be at risk of data loss, which is most businesses.
>
> **[4:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=281)** To calculate this, we can look at the total number of hours between a data loss event, something you should be able to confirm from an instant ticket, divided by the number of events.
>
> **[4:51](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=291)** It is likely you'll do this over a reporting period, such as a quarter or even a reporting year, given hopefully an unlikely event of this happening too often.
>
> **[5:01](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=301)** An example of this would be if you have four data loss events over 12 months, which is 8,776 hours, if you're interested.
>
> **[5:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=309)** Divide that number by the number of four data loss events.
>
> **[5:13](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=313)** This should calculate a mean time data loss of 2191.5 hours, or 91 days.
>
> **[5:21](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=321)** This is a lesser used metric, but critical if you work in a data-led environment.
>
> **[5:26](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=326)** The above four metrics make up the data outputs from availability management, but remember, you'll need to add in commentary and context for that business on why metrics may be increasing or decreasing.
>
> **[5:37](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/metrics-and-reporting?u=76281980&t=337)** Next, let's talk about reporting and some of the key points.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (1)
> **Analogies:** for example (3), such as (2), picture (1)
> **Prerequisites:** you'll need (5)
> **Versions:** 97.04 (1), 53.3 (1), 2191.5 (1)
> **Ports:** :00 (2)
> **Env Vars:** sla (2)
> **Definitions:** is a  (2)
> **Best Practices:** don't forget (1), remember to (1)

#### [Creating your reporting](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=0)** - [Instructor] So the metrics have now all been calculated, and you have a good indication of the health of your infrastructure.
>
> **[0:06](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=6)** Now what?
>
> **[0:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=7)** Well, all of that data and interpretation need to go into report.
>
> **[0:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=11)** So remember, you need to know your audience.
>
> **[0:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=14)** It's very likely you'll now need to report all of your findings to an audience who is senior, may not be too technical, and don't necessarily care about the utilization of RAM, but care more about business risks.
>
> **[0:25](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=25)** This is where there's a balance between knowing your audience and giving just enough context to understand an action that you've taken, and ultimately making a meaningful report that generates value.
>
> **[0:36](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=36)** So as I take you through each of the sections you'd expect in the availability report, remember, language should be as nontechnical as possible.
>
> **[0:43](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=43)** And if you make a statement about a component, ask yourself this: "So what?"
>
> **[0:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=48)** Ask it three or four times to yourself, and you may get to why it's important to a senior business leader, to show why it should be on this report and why they should take note.
>
> **[0:57](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=57)** Normal expectations of a capacity and availability report will consist of the following sections.
>
> **[1:02](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=62)** Executive summary.
>
> **[1:04](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=64)** This is where there's a roundup of everything from your report and the key findings.
>
> **[1:08](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=68)** Think of it as an elevator pitch.
>
> **[1:11](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=71)** If you only had two minutes with a decision-maker to tell them the key points, what would they be?
>
> **[1:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=76)** Although this is the first section of the report, write it last, as you want to ensure it reflects in your findings once it's all written down on paper.
>
> **[1:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=84)** Key [[Performance Metrics]], SLA.
>
> **[1:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=87)** Again, one of the parts your audience is most likely to be interested in is, "Have we met our SLA?"
>
> **[1:33](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=93)** Have some nice easy-to-read graphs showing month on month per metric on your report.
>
> **[1:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=98)** For each metric, give some context.
>
> **[1:42](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=102)** What caused something to not meet this SLA?
>
> **[1:44](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=104)** Have you seen some notable improvements month on month?
>
> **[1:47](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=107)** Call it out.
>
> **[1:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=108)** Again, remember not to make it too technical a conversation if you can avoid it.
>
> **[1:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=113)** Per service review, overview.
>
> **[1:55](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=115)** Remember, your audience is probably less interested in the infrastructure as a whole and more about the performance business service within your organization.
>
> **[2:04](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=124)** Within each service, you're going to be reporting and thinking about the following: the uptime of service month on month, mean time between failures, mean time to repair, risk and issues, actions and opportunities.
>
> **[2:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=138)** Repeat this process for each key service, and provide context on risks and what they might mean if they become an issue at a business level.
>
> **[2:26](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=146)** Use your organization's risk process management process and grading.
>
> **[2:31](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=151)** I would also advise adding a link or an appendix item to show your current risk and issues.
>
> **[2:37](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=157)** Also, mention any mitigation actions and alerts you have taken in that month, as it'll likely answer a question from one of your stakeholders will have if they're aware of an outage for that month.
>
> **[2:48](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=168)** Again, adding an action log as an appendix may help here to show actions as a service you've taken across the organization.
>
> **[2:55](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=175)** And finally, adding opportunities for saving space or money.
>
> **[2:59](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=179)** Even better is if you can quantify that as a financial number, as a saving, and show this if it's possible.
>
> **[3:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=187)** Although and above you're calling out per service, how you're responding to alerts, I would also recommend actions which may be more agnostic or services to show where you are adding value across the organization.
>
> **[3:19](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=199)** This includes future planning with new [[Microsoft Products|products]] and how this may impact capacity.
>
> **[3:24](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=204)** Again, some general housekeeping of your document, such as the author, footnotes, page numbers, and, if required, contents page and appendices to all make sure your report is professional-looking and feels like it delivers value.
>
> **[3:38](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=218)** And that's it.
>
> **[3:40](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=220)** You may think, "Hey, Mark, "what about all those capacity metrics "we've worked hard on?"
>
> **[3:44](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=224)** And although you might be right, those are metrics I would recommend you keep for your technical team sessions.
>
> **[3:49](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=229)** Or if you feel it's required to provide more context, add some into your appendices.
>
> **[3:54](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/creating-your-reporting?u=76281980&t=234)** The reason for this is it would take your report to a more technical and more granular level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Performance Metrics]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** sla (3), ram (1)
> **CLI Commands:** make (3)
> **Analogies:** think of it as (1), such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Challenges to overcome](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=0)** - [Instructor] We have now covered what would likely be deemed the minimal viable processes for what you would need to complete to have a basic service within your organization.
>
> **[0:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=9)** It's a very interesting and immersive service to run, and you will learn a lot about technology, problem solving, and becoming the facilitator to get your actions complete.
>
> **[0:18](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=18)** However, as some of you may know, it sometimes can be quite hard to implement a new service and break down some barriers to overcome some challenges that may arise.
>
> **[0:28](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=28)** One of those hardest challenges you will face is a change in the work culture.
>
> **[0:32](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=32)** The infamous phase of we've always done it this way, is often used.
>
> **[0:36](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=36)** Along with this, you're going to lightly be asking teams to attend a few more meetings, take on for some more actions to ensure your service is functional.
>
> **[0:44](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=44)** So how do you overcome that?
>
> **[0:46](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=46)** Well, if you followed the initial plan I outlined at the start of the course of asking about business needs and stakeholder mapping, this might be a bit easier.
>
> **[0:54](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=54)** But it will be your responsibility to sell to your peers about something they should take notice of and actions.
>
> **[1:01](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=61)** The best way to overcome this challenge is with the positive messaging that actually, with a bit of investment of their time overall, this should reduce their time on outages, their own time monitoring capacity and performance, and ultimately, you ensure technology and product teams are have a smoother path to life for new [[Microsoft Products|products]] by ensuring there is capacity, or if required, plan for more capacity before it becomes a bottleneck.
>
> **[1:27](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=87)** Moving away from culture.
>
> **[1:28](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=88)** Let's also consider knowledge.
>
> **[1:30](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=90)** As I've said to you throughout this course, you are a facilitator, not a technical architect.
>
> **[1:36](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=96)** You do not need to know how every process or data flow works within your organization.
>
> **[1:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=101)** However, it will benefit you if you start to learn about the [[Hardware]] or the [[Cloud Infrastructure]] to allow you to not only make more coherent discussions during your sessions, but eventually it will help you make more proactive solutions before you set up those sessions.
>
> **[1:56](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=116)** You can start by doing this, by taking some basic training or even asking the questions you believe are silly, but you learn from 'em.
>
> **[2:04](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=124)** Don't worry, we've all been there.
>
> **[2:06](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=126)** You have to start somewhere and learn those unique caveats of every organization.
>
> **[2:10](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=130)** You'll make mistakes, but it's how you learn from 'em and build confidence going forward.
>
> **[2:15](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=135)** Lucky for you, you're part of [[LinkedIn]] Learning, and you'll learn there is a plethora of different courses, you'll be able to assist with.
>
> **[2:22](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=142)** This will also help you become aware of potential data sources that you're going to have to negotiate different levels of access to, to different tools.
>
> **[2:30](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=150)** Or eventually, you're able to create your own dashboard that allows you to get your data in an automated way without feeling like you're harassing someone for a late report you need later in the month.
>
> **[2:41](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=161)** Finally, you'll be running those meetings to get decisions on consolidation, cost saving opportunities, and might be simply told no, and that's okay.
>
> **[2:50](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=170)** Your job is not to make those decisions.
>
> **[2:53](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=173)** Your job is to inform those decision makers to either accept the risk or mitigate them by following your recommendations.
>
> **[3:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=180)** Remember that risk register we talked about, keep a log of all those decisions made and log them within your monthly report, and that is your audit trail.
>
> **[3:08](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=188)** Overall, you'll probably notice that most of the challenges you will have to overcome are people related and changing behavior.
>
> **[3:15](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=195)** This role is all about bringing people together and making informed decisions.
>
> **[3:19](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/challenges-to-overcome?u=76281980&t=199)** And if you follow everything you've learned in this course, it will help you win those stakeholders over, and show the true value of capacity and availability management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Hardware]] (1), [[Cloud Infrastructure]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (4)
> **Cross-References:** later in (1), we talked about (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/next-steps?u=76281980&t=0)** - So there you have it, we have covered the key concepts, artifacts, actions, and processes that you'll need to set up your service for success.
>
> **[0:07](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/next-steps?u=76281980&t=7)** Hopefully, this course has given you the drive and understanding to see the true value of capacity availability management within your organization.
>
> **[0:14](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/next-steps?u=76281980&t=14)** We've covered the importance of setting yourself up to deliver a minimal viable service based in understanding the organization needs and the caveats that will set up that service in a more value-driven method, (indistinct) for instruction manual method and the complexities that will bring you in the future.
>
> **[0:30](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/next-steps?u=76281980&t=30)** We talked about artifacts, ensuring that if someone came to you and didn't know about capacity availability management, could pick up your policy and understand the value that you bring, but also know what's within your scope, and crucially, what's not within your scope.
>
> **[0:44](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/next-steps?u=76281980&t=44)** We also discussed the importance of processes and understanding where you fit in and where you can add that value.
>
> **[0:50](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/next-steps?u=76281980&t=50)** Moving on to the implementation of the service, we talked about how capacity management can be assessed via service and results capacity management.
>
> **[0:57](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/next-steps?u=76281980&t=57)** We discussed the attributes that you should assess to proactively action any potential bottlenecks, actions, or opportunities to consolidate our resources, and ultimately save the organization money.
>
> **[1:09](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/next-steps?u=76281980&t=69)** Planning and actioning existing actions is crucial, but we also reviewed how to plan for the future to become a more proactive service.
>
> **[1:16](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/next-steps?u=76281980&t=76)** We also talked about availability management and how, if done correctly, can really show those non-technical business leaders what you do, its value, and how to write an effective report.
>
> **[1:26](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/next-steps?u=76281980&t=86)** Finally, I just want to say a big thank you to you for taking my course.
>
> **[1:29](https://www.linkedin.com/learning/it-service-management-foundations-capacity-and-availability-management/next-steps?u=76281980&t=89)** I take a lot of pride in what I do, and we'd be happy to take any questions or comments to further help your understanding of this fascinating space.

> [!info]- Semantic Content
>
> **Cross-References:** we talked about (2), we discussed (1)
> **Prerequisites:** set up (2), you'll need (1)
> **Speakers:** - so (1)


## Instructor

- [[Mark Grey]]

## Skills Covered

- IT Service Management
- Capacity Planning

## Path Context

### In [[Develop Your IT Service Management (ITSM) Skills]]
← [[IT Service Management Foundations- Problem Management]] | **5 of 5**

## Appears In

- [[Develop Your IT Service Management (ITSM) Skills]]

## Related Courses

_Courses sharing skills:_

- [[IT Service Desk- Customer Service Fundamentals]] — IT Service Management
- [[Jira Service Management- Administration]] — IT Service Management
- [[IT Service Desk- Monitoring and Metrics Fundamentals]] — IT Service Management
- [[It Service Desk Service Management]] — IT Service Management
- [[IT Service Management Foundations- Problem Management]] — IT Service Management

---

[↑ Back to top](#)