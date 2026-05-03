---
type: course
cssclasses:
  - lle-course
slug: migrating-to-azure
url: "https://www.linkedin.com/learning/migrating-to-azure"
duration_minutes: 100
duration: 1h 40m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGeYa1VQBMDyw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615309726156?e=2147483647&amp;v=beta&amp;t=26cH1vuDrmGXawS7YlKpoudC2P4s2bGtjItAg635gmk"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]'
prev_courses:
  - '[[Developing Ci Cd Solutions With Azure Devops]]'
next_courses:
  - '[[Azure Data Lake for Developers]]'
path_nav: '[{"path":"Advancing Your Azure Developer Skills- Exploring Complex Application Development","position":2,"total":7,"prev":"Developing Ci Cd Solutions With Azure Devops","next":"Azure Data Lake for Developers"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Migrating%20to%20Azure.md)

![Migrating to Azure](https://media.licdn.com/dms/image/v2/C4E0DAQGeYa1VQBMDyw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615309726156?e=2147483647&amp;v=beta&amp;t=26cH1vuDrmGXawS7YlKpoudC2P4s2bGtjItAg635gmk)

# Migrating to Azure

> A successful migration to Azure requires carefully planning your strategy, organizing your existing resources, identifying what should migrate, becoming familiar with Azure services, and managing the deployment of your plan. In this course, instructor James Millar shows you how to work through each piece of an Azure migration and provides best practice guidance for conducting your own migration to

> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-to-azure) | 1h 40m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Starting Your Cloud Journey**](#1-starting-your-cloud-journey) (6 videos)
  - [Introducing the scenario](#introducing-the-scenario)
  - [The Microsoft Cloud Adoption Framework](#the-microsoft-cloud-adoption-framework)
  - [Motivations for migration](#motivations-for-migration)
  - [Defining a migration strategy](#defining-a-migration-strategy)
  - [Planning for migration](#planning-for-migration)
  - [Choosing the right first project](#choosing-the-right-first-project)
- [**2. Becoming Azure Ready**](#2-becoming-azure-ready) (6 videos)
  - [Organizing resources](#organizing-resources)
  - [Managing access](#managing-access)
  - [Managing costs](#managing-costs)
  - [Monitoring and reporting in Azure](#monitoring-and-reporting-in-azure)
  - [Working with Azure Monitor](#working-with-azure-monitor)
  - [Best practice guidance](#best-practice-guidance)
- [**3. Beginning Your Azure Migration**](#3-beginning-your-azure-migration) (6 videos)
  - [Exploring migration scenarios](#exploring-migration-scenarios)
  - [Introducing Azure Migrate](#introducing-azure-migrate)
  - [Migrating a virtual machine](#migrating-a-virtual-machine)
  - [Migrating SQL Server](#migrating-sql-server)
  - [Migrating data](#migrating-data)
  - [Migration best practces](#migration-best-practces)
- [**4. Innovating with Azure Cloud Services**](#4-innovating-with-azure-cloud-services) (6 videos)
  - [Start innovating](#start-innovating)
  - [Introducing PaaS](#introducing-paas)
  - [Introducing App Service](#introducing-app-service)
  - [Going serverless](#going-serverless)
  - [Artificial intelligence](#artificial-intelligence)
  - [Automating repetitive tasks](#automating-repetitive-tasks)

### 1. Starting Your Cloud Journey

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing the scenario](https://www.linkedin.com/learning/migrating-to-azure/introducing-the-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/introducing-the-scenario?u=76281980&t=0)** - [Narrator] So, let me start by introducing you to George. George is the IT manager for H + Sport. H + Sport is a small company making sports supplements, and active wear. And they've been trading for nearly 15 years. They're a small company with two offices, and around 150 employees. To support their business H + rely on several different line of business applications that they host themselves on premise. Now I wouldn't call this a data center as such, but they do have a rack of servers in their main [[Microsoft Office|office]] that hosts things such as their accounting system, Dynamics CRM, [[Microsoft]] Exchange, and some production management software that's essential to the day-to-day operations of their business. In addition to this, they also have a website that's hosted for them by a third party hosting provider. So what's the problem? Well, there are actually several problems, and it's got to a stage now where the current IT infrastructure is starting to impact the business in negative ways. First up, there's the infrastructure. The company isn't keen to make a capital investment in new IT equipment. Many of the servers are several years old, and the cost of maintaining them is starting to mount up. And it's not just the [[Hardware]] that needs maintaining, the software too need regular updates and daily management. And while George tries his best, he's struggling to keep on top of it. Some applications are several years old, and shortly coming out of support. This burgeoning IT system is also impacting the business in other ways too.
>
> **[1:34](https://www.linkedin.com/learning/migrating-to-azure/introducing-the-scenario?u=76281980&t=94)** The management would like to have tighter integration between the website and the CRM system. And a major customer has recently announced plans to move to a digital ordering system. And they want the company to expose an API to enable them to do this. Now, the situation at H + isn't as unusual as you might think. You see, small companies typically start out with a server tucked away under a desk. And as the business grows, they pile more and more infrastructure and services around it. The trouble is that the business then becomes so reliant on the IT that it can actually become a barrier to the core aims of the business. Remember, H + isn't a software company, they make and sell sports supplements, and that's what they'd like to focus on. So, what's the solution? Well, they could make a big capital investment in new infrastructure. They could fill their racks with new servers, and load up the latest versions of the software. They could employ more staff. Spend money on training. That sort of thing. There are two problems here though. Firstly, there's the investment. As the business, they really want to be investing in the profit centers, the parts of the business that generate income. Secondly, it's a short-term fix. The hardware will still need replacing in a few years time. The licenses will still need renewing. And the servers still need maintaining. But there is another option. Instead of hosting all their software and services themselves, H + could migrate their infrastructure to [[Microsoft Azure]]. Now I know what you're going to say next,
>
> **[3:10](https://www.linkedin.com/learning/migrating-to-azure/introducing-the-scenario?u=76281980&t=190)** "What's Microsoft Azure?" Well, there are several ways I could answer that question, but let's try and keep things simple to start with. Microsoft Azure is a cloud platform. Now there are several cloud platforms, including [[Amazon Web Services (AWS)|Amazon Web Services]] and [[Google Cloud Platform (GCP)|Google Cloud]]. [[Microsoft Azure|Azure]] is the offering from Microsoft. Now, you can think of the cloud platform as a collection of services that your company can use to drive your business. In fact, Azure offers over 200 distinct services. Now, using a cloud service such as Azure allows you to benefit from huge economies of scale. Microsoft provide the data centers, and all of the infrastructure, and you, along with many millions of other customers, pay for the services you use, typically on a consumption model. That is, you only pay for the processing time or storage that you consume. Many services are even free, up to a certain point. And there are many tools available for [[Cost Management]]. Now [[Cloud Services]] fall into three categories. Firstly, you have [[IaaS|infrastructure as a service]]. Here we're normally talking about [[Virtual Machines]]. Azure offers [[Windows]] virtual machines, [[Linux]] virtual machines, and a range of container services. There are also many other services in this category too. Such as networking, firewalls and security. What we're doing here is essentially renting a piece of infrastructure. Microsoft looks after the physical hardware and networking, but you're responsible for installing and maintaining the software that's installed on the machine. I'll talk about this more later on in the course.
>
> **[4:46](https://www.linkedin.com/learning/migrating-to-azure/introducing-the-scenario?u=76281980&t=286)** You then have [[PaaS|Platform as a Service]]. Now with Platform as a Service, Microsoft is still responsible for the hardware and networking side of things, but this time they also look after the operating system side of things as well. Now I'm deliberately simplifying this, but essentially with Platform as a Service, your only responsibility is the actual application or code that you run on that service. There are many applications that sit under the banner of Platform as a Service such as Azure App Service, which is used for running web applications. Service fabric, which is a platform for hosting discreet web services at scale. App Servers Mobile apps, which can be used to provide backends for pairing mobile applications. We also have services like Azure [[SQL]], which is a managed [[Microsoft SQL Server|SQL server]] offering. Cosmos DB, which is a powerful, and highly scalable database. And Logic Apps that allow you to build powerful integrations between your different apps and services without writing any code. This is just the tip of the iceberg, and there are many more services. But hopefully this gives you a sense of what's available. Finally, we have [[SaaS|Software as a Service]]. Now think back to H +'s software. They run Dynamics CRM and Exchange on their own infrastructure. They maintain the hardware and the software, and they pay for all of it. Now both Dynamics CRM and Exchange can be purchased on a Software as a Service model, as well as software like [[Microsoft Office]], which is available through Microsoft Office 365.
>
> **[6:20](https://www.linkedin.com/learning/migrating-to-azure/introducing-the-scenario?u=76281980&t=380)** With Software as a Service, it's like a subscription. You don't have to worry about the hardware or the software updates, maintenance, or any of that. You don't need a big upfront investment either. You just pay for what you use. And it's typically licensed on a per-user basis. Now this course is all about how a company like H +, or perhaps a company like your own, can migrate their existing applications, and infrastructure to Azure. And it's not nearly as complicated as you might think. It does however require a little bit of planning. And thankfully, Microsoft provides some excellent tools to help us do that. So let's take a look at those next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[Microsoft]] (6), [[Hardware]] (6), [[PaaS|Platform as a service]] (4), [[Microsoft Azure]] (3)
> **Env Vars:** crm (4), sql (2), api (1)
> **Definitions:** is a  (5)
> **Analogies:** such as (4), it's like (1)
> **CLI Commands:** make (3)
> **Speakers:** - [narrator] (1)

#### [The Microsoft Cloud Adoption Framework](https://www.linkedin.com/learning/migrating-to-azure/the-microsoft-cloud-adoption-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/the-microsoft-cloud-adoption-framework?u=76281980&t=0)** - [Instructor] [[Microsoft]] has published a set of guidance called the Cloud Adoption Framework. And it's designed to give you everything you need for your business to succeed in the cloud. It's made up of best practice guidance, documentation and tools that IT professionals, cloud architects, and key business decision makers need to achieve their objectives. The Cloud Adoption Framework talks about aligning your business and technical strategies, how to deliver [[Operational Excellence]]. And this is where I have a problem. Don't get me wrong, it's a great resource, powerful loads of useful stuff, but it's dense. There's a lot of stuff here and it's designed to cover a wide audience. But when you read it, you do really get the impression that it's aimed more at large corporates and organizations with a lot of resource and less so at a smaller business. So what I want to do is break it down into the bits you really need to know and give you a simplified framework that you can apply to your business. I'm going to use our friend George at HPlus as an example to help us with this. Now, the Cloud Adoption Framework defines six key areas or steps that an organization needs to transition through to complete a cloud migration. Firstly, we need to define our business strategy. That is, we need to understand what our motivations for this project are and what we realistically expect in terms of outcomes. Now, the fact that you're watching this course
>
> **[1:35](https://www.linkedin.com/learning/migrating-to-azure/the-microsoft-cloud-adoption-framework?u=76281980&t=95)** suggests that you're already working through this. Now, there is nothing [[Microsoft Azure|Azure]]-specific here. This is what every business does whenever they engage in any new project. Next we have the planning stage. And the planning stage is all about turning your business objectives into an actionable plan. What assets do we currently have on premise? What team members do we have? Do we have any skills gaps? By the end of this phase, we should have a solid implementation plan that we can use going forward. The readiness phase is where we start to get our hands dirty. This is about setting up our cloud environment ready for the plan changes, configuring a subscription, defining permissions, that sort of thing. We then move on to adoption. Now, the adoption phase initially is going to be about a physical migration, the moving of some software from your own physical server to the Azure platform. Now, I say initially, because it's important to realize that this is an iterative process. Once you've migrated a project, you're going to want to innovate, that is, use the benefits of the cloud to improve and evolve that service for the greater good of the business. In addition to these four main steps, there are two additional steps worth mentioning. Firstly, there is governance. Now, you will already do this in some form with your existing assets. Governance is an ongoing process that looks to apply a set of policies to your infrastructure and software.
>
> **[3:09](https://www.linkedin.com/learning/migrating-to-azure/the-microsoft-cloud-adoption-framework?u=76281980&t=189)** It's a way of managing your digital estate and reducing risk. It's not something we're going to explore in too much detail in this course though. Finally, we have management. And this is the ongoing management of your digital estate. Now, a small company, such as HPlus, will have a very small footprint in Azure with perhaps a handful of services. Management of this is relatively simple. However, at the very least, you should consider things, such as data protection and recovery, and look at ways to monitor performance of your key services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Microsoft]] (1), [[Operational Excellence]] (1)
> **Definitions:** is an  (2)
> **Analogies:** such as (2)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Motivations for migration](https://www.linkedin.com/learning/migrating-to-azure/motivations-for-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/motivations-for-migration?u=76281980&t=0)** - [Instructor] If the only reason that you're migrating to the cloud is because your CEO told you to or because the board thought it was a good idea, then the chances of this being successful are quite small. The first and highest priority step to a successful cloud migration is in understanding what your motivations really are, as these motivations are what's going to define your business outcomes. Now there are various different things that could drive a business towards a cloud migration project. It could be some critical business events, such as a merger or an acquisition, perhaps it's to enable an increase in business agility, or maybe as a way of building new technical capabilities. You're likely to have several different motivations. So let's think about what H+'s motivations might be. Well, firstly, H+ are keen to reduce capital expenditure. They don't want to be investing in new infrastructure. They also want tighter integration between the website and the CRM system, and be able to support the new digital ordering system for their biggest customer. They also want to reduce the amount of day-to-day administration and maintenance, so that they can focus on their core business. Now, don't underestimate motivations. They're important and should be the first thing you think about. Make sure you document them along with everything else. So now we've got some motivations defined, let's think about outcomes. Cloud migration projects can be costly
>
> **[1:34](https://www.linkedin.com/learning/migrating-to-azure/motivations-for-migration?u=76281980&t=94)** and time consuming affairs that will touch many different parts of the business. So being able to talk in terms of business outcomes can help you engage across the company to drive the project forward. This is Angela. Now, Angela is the sales director of H+. Now, Angela is non-technical, so telling Angela that we're migrating to [[Microsoft Azure|Azure]] really isn't going to excite her at all. But if we define business focused outcomes like increasing sales and improving customer relationships, then she's likely to engage more in the project. But how do you work out what your business outcomes are? Well, that's really up to you and your team. Once you have your motivations defined, you need to sit down with the key people in your business and thrash them out. There really is no better way. Now the cloud adoption framework goes into heavy detail here about agility and fiscal outcomes and provide all sorts of examples that you can lean on. There's even a template that you can use to help document them. Personally though, if you're a small to medium-sized business like H+, then I think you can keep things quite simple. What you're trying to figure out here is what do we want out of this? Is it more sales revenue? Is it reduced costs, better mobile engagement? There could be lots objectives or only one. It really depends on your business and what your motivations are. There are a couple of things you need to think about though.
>
> **[3:08](https://www.linkedin.com/learning/migrating-to-azure/motivations-for-migration?u=76281980&t=188)** Firstly, you need to identify the stakeholders. Who is it in your business that sees the most benefit from this change? Early engagement with those key stakeholders will help drive the project forward and help ensure that the business gets the greatest value from the project. Finally, how do you measure them? How will the business know when a business objective has been achieved? If your objective is to reduce operational costs, then by how much over what period? It's important to think these things through carefully. So get the team around a whiteboard and get stuck in. You should aim to come up with a set of realistic, measurable, and more importantly achievable outcomes. And you should try if possible to prioritize them. Be careful though, it's easy to fall into a trap here by setting unrealistic or unachievable outcomes, and this puts you in a position where it's impossible for the project to ever succeed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1)
> **Env Vars:** ceo (1), crm (1)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Analogies:** such as (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Defining a migration strategy](https://www.linkedin.com/learning/migrating-to-azure/defining-a-migration-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/defining-a-migration-strategy?u=76281980&t=0)** - [Instructor] Okay, we've looked at our motivations for doing this project and we thought a little bit about what we might expect as outcomes for the business but how do we actually go about creating a plan to turn all this into reality? What we need to do is take our motivations and our objectives and turn them into something actionable. The cloud adoption plan is what aligns the efforts of the technical team with that overall business strategy. So the first thing we need to do is look at our digital estate as it exists at the moment. We can't even begin to think about migrating until we really know what we're dealing with. So step one, in defining your plan is a thorough audit of your existing assets. Now this includes any [[Hardware]], it includes operating systems, storage, networking. You need to document software versions too as well as any dependencies that they might have. Perhaps your accounting software requires a specific version of [[Java]]. Another thing to think about here is are all of these assets in use? Although you'll need it. Is there anything we can get rid of? It's not uncommon to have software or hardware on the network that's surplus to requirements. We don't want to be migrating anything that doesn't get used. At the end of this phase you should have a comprehensive list of assets that's going to feed into the technical team performing the migration. Next, we need to think about the people. After all it's people
>
> **[1:34](https://www.linkedin.com/learning/migrating-to-azure/defining-a-migration-strategy?u=76281980&t=94)** that are going to be turning our plan into reality. So the first thing we need to do is ensure that someone is responsible for the project. Who is it in your organization that's going to be responsible for the overall cloud migration and adoption project. Now moving all of your infrastructure and software into a new cloud environment is not without risk. So it's a good idea to also have somebody responsible for governance too. Somebody that can ensure that the company isn't exposed to any unnecessary risk. Now, ideally this should be a separate person or team to the one performing the actual migration. Now, another area that the cloud adoption framework falls down on is when it talks about building teams to deliver this project. It talked extensively about how you can transition existing teams to work on cloud migration projects but it makes the assumption that you have teams of software developers and project managers and network administrators. If you're working for a small to medium-sized business like H plus, then that's unlikely to be the case. So what's the answer? How he built a team to migrate to the cloud? Well, obviously it depends on the scale of the project. If we're just looking to perform a simple migration of hardware, then perhaps George can do this himself but in reality, he's probably going to need to build a team to help him with the technical aspects of the migration. Now, there may be people already within the business that he can use or he may even have
>
> **[3:06](https://www.linkedin.com/learning/migrating-to-azure/defining-a-migration-strategy?u=76281980&t=186)** to recruit technical staff on a short-term basis but either way he's going to have to consider the skills that they have and identify any gaps. Take George an example. He's been administering the local [[Active Directory]] domain for many years. So already has many of the skills he needs but in order to work with as your active directory he's going to need to do a little training. Resources like [[LinkedIn]] learning can help greatly with this. Another option is to engage with a [[Microsoft]] partner to help with some of the more complex aspects of the project and while this will certainly increase costs it may help to eliminate some of the risk involved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Active Directory]] (2), [[Java]] (1), [[LinkedIn]] (1), [[Microsoft]] (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Planning for migration](https://www.linkedin.com/learning/migrating-to-azure/planning-for-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/planning-for-migration?u=76281980&t=0)** - [Instructor] Okay, so let's start off by reviewing where we are. So George and some of the key people across the business have spent some time together and defined their motivations for the project as well as defining some business objectives. George has also completed a full audit of the current estate and some old [[Hardware]] and software has been decommissioned as it's no longer needed. Let's take a look at what he's come up with. So George has identified 10 physical servers, all running [[Windows Server]] 2016. These servers host Exchange, Dynamic CRM, some [[Microsoft SQL Server|SQL Server]] [[Databases]], and the production management software. There's also a Raid storage device on the network for file shares and backups, as well as networks, which is security groups, a firewall, and all of the usual things you'd expect on a corporate network. Now, with so many services it can be hard to work out where to start. Now, the suggested approach is to define what's known as a workload. But what exactly is a workload? Well, you should think of a workload as a collection of IT assets such as servers, applications, or data that together support a process. And we're talking about a business process here. So let's take our production planning software as an example. Now, this software currently runs on Windows Server 2016 and it's backed by a SQL Server database. There are multiple instances of [[SQL]] running in a high availability cluster, which is offering
>
> **[1:34](https://www.linkedin.com/learning/migrating-to-azure/planning-for-migration?u=76281980&t=94)** some performance and resilience benefits. Now, this software also communicates with devices installed on the production floor. These sensors monitor the rate of production and provide feedback so the production plan can be constantly updated. So this entire business process and all of the assets it contains [[Forms]] one workload. Once you've identified all of the processes and defined your workloads, you need to give them a priority, which is the most important workload for the business. Now, each workload contains a collection of assets, be that [[Virtual Machines]], data, infrastructure, or applications. And each of these assets will need to be migrated. Now, we're going to look at the technical side of how some of this can be done later on. But for the time being, you need to start thinking about the tasks that are going to be involved. Take data in a SQL Server database as an example. Well, first you're going to need to provision a suitable [[Microsoft Azure|Azure]] SQL instance. You're going to need to configure access and permissions, perhaps using [[Active Directory]]. You're going to need to create databases and implement some form of backup and recovery plan. Finally, you're going to have to upload data from your on-premise database into Azure and test that it all works as expected. Now, you're going to need to document all of these tasks that form part of that workload. And you can use something such as [[Microsoft]] Project for this or you could use Azure [[DevOps]]. Microsoft provides a template for Azure DevOps to make this easier.
>
> **[3:06](https://www.linkedin.com/learning/migrating-to-azure/planning-for-migration?u=76281980&t=186)** Whichever route you go down though, you need to end up with a collection of tasks within your workload. And these will ultimately be assigned to somebody who's actually going to undertake the work. Now, it's worth pointing out here that this should be a collaborative and iterative process. Your team needs to be constantly reviewing and modifying these tasks as your work progresses. With the tasks in place, you should also ideally estimate the effort involved in completing them. Now, if you have a very small team or perhaps you're doing this on your own, then it might be a good idea to use tee-shirt sizing. Is the task a small, medium, or large task? Estimation is going to help you keep track of the progress of the project over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Microsoft SQL Server|Sql server]] (3), [[Windows Server]] (2), [[Databases]] (2), [[SQL]] (2)
> **Env Vars:** sql (5), crm (1)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Choosing the right first project](https://www.linkedin.com/learning/migrating-to-azure/choosing-the-right-first-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/choosing-the-right-first-project?u=76281980&t=0)** - [Instructor] Now, a full cloud migration can be a long and complicated process. There's a lot to think about and a lot to learn. But you don't necessarily need to wait until your plan is complete and all of your workloads are defined before you get stuck in. In fact, there could be some benefit in performing some migration activities in parallel to the development of the cloud adoption plan. Now, I'm not suggesting here that you start migrating your critical business applications before you finish the planning stage but often there are non-essential services that could be migrated or initial setup work that could be performed. Now, there are a few things to consider when choosing a first project to migrate. Firstly, you should think of this as a learning exercise. This first project isn't something that's ever likely to go into production, at least not without substantial effort. But the things you learn while performing it will feed back into the overall plan. Now, when deciding what your first project should be, you should again think back to your motivations and try and align it with those. One of the things that H-Plus needs to do is move the hosting of their website. And they're considering hosting it in [[Microsoft Azure|Azure]] App Service. A good first project might be to set up a non-production test or development environment for this. This would give George some good hands-on experience of how App Service works and what's involved. And the lessons he learns here will feed back into the main workload for the production site. In fact, any non-production workloads
>
> **[1:35](https://www.linkedin.com/learning/migrating-to-azure/choosing-the-right-first-project?u=76281980&t=95)** are good candidates here. Another area you might want to consider is data. Now H-Plus have a network storage device that contains all of the company's files, as well as backup data and that sort of thing. Now, moving this data to Azure would offer many benefits. We'd no longer need the storage device on-premise and having this data in the cloud would give us better disaster recovery options. Migrating on-premise [[Active Directory]] domains to the cloud can also offer early gains and gives a foundation that you can build on as you move throughout the project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Active Directory]] (1)
> **Prerequisites:** setup (1), set up (1)
> **Speakers:** - [instructor] (1)


### 2. Becoming Azure Ready

[↑ Back to Table of Contents](#table-of-contents)

#### [Organizing resources](https://www.linkedin.com/learning/migrating-to-azure/organizing-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/organizing-resources?u=76281980&t=0)** - [Instructor] Before you can start migrating your workloads to [[Microsoft Azure|Azure]], it's important to have your environment set up correctly. In this module, we're going to look at the things that you need to do to get Azure ready. And I'm going to be focusing on resources, security, costs and reporting. In this first video, we're going to be focusing on resources. How you organize your resources in Azure is critical to how you secure them. It also impacts how you track costs across your estate. Now, some companies, particularly those that develop and deploy their own software, will have two Azure subscriptions, perhaps even more. Typically, one for production workloads, and one for non production workloads. Now in this scenario, our very top layer is what's known as a management group. Think of this as a container that allows you to easily manage access, policies and compliance for multiple subscriptions. Now each subscription that's part of this management group automatically inherits these policies, and it makes it much easier for companies to manage and maintain multiple subscriptions. Now, the subscription itself is where we create our resources, and each subscription has limits or quotas on the amount of resources that can be created or used. Now within our subscription, we create resource groups. These resource groups are logical containers that we deploy our different services to. They inherit any policies from the subscription that they belong to.
>
> **[1:34](https://www.linkedin.com/learning/migrating-to-azure/organizing-resources?u=76281980&t=94)** Finally, we have the services themselves, such as web apps, [[Virtual Machines]] and [[Databases]] that sit within these resource groups. Again, these will inherit any policies from their parent container. Now this structure is called the management hierarchy. Now you can apply management settings like policies and role based access control at any of the different management levels, and we'll look at some practical examples of this later on. However, the level you choose determines how widely the setting is applied. Lower levels will inherit settings from higher levels. So when you apply a policy to a subscription, that policy is also supplied to all resource groups and resources within that subscription. Typically, it makes sense to apply critical settings at higher levels, such as the management group or subscription level, and then applying the project specific requirements at lower levels, such as at the resource group, or even resource level. Imagine that you want to make sure all resources for your organization are deployed to certain regions, perhaps Northern Europe. Well one way to do that would be to apply a policy to the subscription that specifies the allowed location. As users in your organization add new resource groups and resources, the policy will be automatically enforced. How you organize your cloud-based resources is critical to how you manage and secure those resources. It also has an impact on how you track any costs associated with running your [[Cloud Services]].
>
> **[3:08](https://www.linkedin.com/learning/migrating-to-azure/organizing-resources?u=76281980&t=188)** So when you're setting up your cloud environment, there are a few things to consider. Firstly, you should decide how you want your subscriptions organized. Now for organizations like H Plus, it probably doesn't make much sense to run multiple subscriptions. However, you may decide that it makes sense for your business. If you do use multiple subscriptions, then you should set up a management group. Secondly, you need to think about how you name your resources in Azure. A good naming standard will help you to identify resources in the Azure portal and on your billing statement. Ideally your naming strategy should include both business and operational details. Finally, you should make use of resource tags. Resource tags are a useful way to quickly identify your resources and resource groups in Azure, and help you to logically organize them. Each tag consists of a name and a value. And after you've applied tags, you can retrieve all the resources in your subscription with the tag name and value. When you organize resources for billing or management, tags can help you retrieve related resources from different resource groups. Tags can also be used to write documentation, automation, and to help with optimizing costs. Now I've already briefly mentioned that you can apply policies, access settings, and compliance settings at various different levels. And that those settings are applied from the top down. So let's have a demo now and see how this works in practice.
>
> **[4:43](https://www.linkedin.com/learning/migrating-to-azure/organizing-resources?u=76281980&t=283)** So here we are in the Azure portal, and what I want to do is create a new policy to ensure that resources can only be created in a particular region. Azure is available across the globe and splits into what is known as regions. Each region representing a data center, or set of data centers in a particular geographic area. Now typically, you deploy resources in regions that are close to your users, or perhaps split your services across multiple regions to provide you some resilience, ensuring your services are still available if a data center suffered some form of outage. So let's start by selecting our subscription. This pane shows you all the details of our subscription. We can see current charges, manage payment methods, and that sort of thing. If we scroll down on the left here, we find the policies option. So let's select that. Here we can define policies that will be applied at the subscription level. Any policy we create here will be inherited by everything within this subscription. Let's create a new policy by selecting assign policy here on the toolbar. If we click here, we can select a predefined policy definition. In the search box, type allowed locations, and then select allowed locations for resource groups. This is going to restrict the locations that we can use when creating resource groups. Next, we need to set out the parameters tab. And then in the allowed locations drop box,
>
> **[6:18](https://www.linkedin.com/learning/migrating-to-azure/organizing-resources?u=76281980&t=378)** select West US two. Finally, click review and create, and then click create. Now it takes about 30 minutes for new policies to be applied. And you can see here that the policy is currently in the not started state. After about 30 minutes, the policy changes to the compliance state. Now we don't currently have any resource groups, so let's start by creating one. Back on the dashboard, select resource groups here at the top, and then select add. Let's try and create a resource group in the East US region. Let's give it a name, and then select review and create. Now straight away we noticed that the operation fails, and we get this error, telling us that it is disallowed by policy. Let's go back and create it in the correct region.
>
> **[7:22](https://www.linkedin.com/learning/migrating-to-azure/organizing-resources?u=76281980&t=442)** Now you can see the resource group is created as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[Virtual Machines]] (1), [[Databases]] (1), [[Cloud Services]] (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** such as (3), imagine (1)
> **Definitions:** known as (2), is called (1)
> **Tools:** azure portal (2)
> **Prerequisites:** set up (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Managing access](https://www.linkedin.com/learning/migrating-to-azure/managing-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/managing-access?u=76281980&t=0)** - [Instructor] In this video, we're going to be looking at how you can secure access to your [[Microsoft Azure|Azure]] resources using what's known as role-based access control. Being able to control who has access to your Azure subscription and the resources it contains is an essential part of how you manage your digital estate. In Azure the primary method for access control is what's known as role-based access control but what is it and how does it work? Well with role-based access control, what we're looking to achieve is a minimum access model. That is we want to give users the minimum amount of access required to perform their job. Now, while we can assign roles to certain users in our organization we can also assign roles to [[Active Directory]] groups, service principles or managed identities. So instead of giving everybody at age plus sport unrestricted access to the entire Azure subscription we can limit access only to those resources that users need. We can also apply these access roles at multiple levels. The management group, the subscription resource groups or even the resource level itself. Now in Azure, there are many different built in roles provided and they vary depending on what service you're dealing with. How about for providing access there are three key ones that we're interested in. Firstly, you have the owner role. Now user with the owner role can manage everything including access to those resources. The contributor role
>
> **[1:32](https://www.linkedin.com/learning/migrating-to-azure/managing-access?u=76281980&t=92)** can manage everything except access to resources and the reader role can view everything but can't make any changes. Let's switch over to use your portal now and look a role in a little more detail. Okay so in this demo, we going to look at how we can provide a read only view of resources to Angela. Angela already has a user account defined in [[Microsoft Entra ID|Azure active directory]] but we need her to be able to view any resources that are created. We don't however want her to be able to create or change anything. So following the principle of least access we're going to assign Angela the reader role. So here we are in the Azure portal and let's start off by finding our resource group. Now there are several ways of navigating around Azure but the simplest is to use the menu here on the left-hand side. So let the menu here and then select resource groups. Here you'll see the resource group that we created earlier on in the course. Select that and then on the left-hand menu here, select access control IIM. Now here is where you can assign user roles and permissions to this resource. In this case, it's a resource group but it could be any other type of resource within Azure. If I click check my access here you can see that it shows what roles I currently have. Here you can see I'm in the owner role. Now in order to grant Angela permission I need to click
>
> **[3:04](https://www.linkedin.com/learning/migrating-to-azure/managing-access?u=76281980&t=184)** the add role assignment button. In the add role assignment pane, you first need to select a role. Now as you can see there are many roles available here but it's the top three roles that we're most interested in, owner, contributor and reader, select reader and then in the select box, type Angela once you've selected Angela, just click save. Okay, so Angela now has reader access. If I log in as Angela and navigate to the resource group you can see Angela is assigned the reader role on this resource group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Active Directory]] (1), [[Microsoft Entra ID|Azure active directory]] (1)
> **Definitions:** known as (2), is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** iim (1)
> **Tools:** azure portal (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### [Managing costs](https://www.linkedin.com/learning/migrating-to-azure/managing-costs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/managing-costs?u=76281980&t=0)** - [Instructor] [[Cost Management]] is key once you're in the cloud. And in this video, we're going to be exploring some best practices for managing costs and setting budgets. So why is cost management important? Cost management is an important aspect of running any business and H+ are keen to effectively plan and control any costs associated with our [[Microsoft Azure|Azure]] migration. Now, it's easy to manage costs in Azure so let's look at what options we have. The Azure Cost Management and Billing feature in Azure is designed to help you plan with costs in mind. Firstly, cost management offers you a way to analyze and explore your costs. You can view aggregated costs for your account or view accumulated costs over time. You can even create budgets and configure alerts that warn you if you're close to exceeding them. Cost management can also help you to perform optimizations by providing recommendations. They can identify idle or underused resources to help you eliminate waste. And finally, you can manage your invoices and payments. Let's take a look at how we can use cost management and billing to set budgets. So here we are in the Azure Portal and let's explore cost management. Assert the hamburger menu here on the left-hand side and click Cost Management and Billing. Here, we can analyze our costs, set budgets and alerts, and manage our invoices and payments. Now, we haven't actually created any resources yet so we don't have any costs to show
>
> **[1:35](https://www.linkedin.com/learning/migrating-to-azure/managing-costs?u=76281980&t=95)** but we're going to be creating things soon and we want to be sure that we don't spend too much. So let's create some budgets. First, let's create a budget for our subscription. Select Budgets on the left-hand menu and then select Add here on the menu bar. Now, budgets are scoped to a certain level. And here we can see this scope is set to our subscription. Let's give our budget a name and select a reset period. This could be based on calendar periods or billing periods. Let's select billing month. We can also set an expiry period too. But let's go with the default here. Finally, we need to specify an amount. I'm going to set a budget of 100 pounds per month for the subscription budget. Click Next and we can now create an alert. Now, I want to be notified when my spending hits 75% of my budget. And I enter my email here. Finally, just click Create. Okay, so that's my budget create for the subscription. But what if I want a budget for a specific resource or resource group? Well, all we need to do here is change the scope of our budget. When we create a budget, we can change the scope. Let's create a budget now for our resource group. Select Change Scope and locate the resource group. Then we can continue as before. Let's set the budget for this resource group as 20 pounds and set the alert level to 50%.
>
> **[3:19](https://www.linkedin.com/learning/migrating-to-azure/managing-costs?u=76281980&t=199)** Great, so now we have budgets and alerts created for our subscription and a resource group, which helps us to manage our costs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cost Management]] (9), [[Microsoft Azure|Azure]] (5)
> **Tools:** azure portal (1)
> **Definitions:** is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Monitoring and reporting in Azure](https://www.linkedin.com/learning/migrating-to-azure/monitoring-and-reporting-in-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/monitoring-and-reporting-in-azure?u=76281980&t=0)** - [Instructor] Being able to see what's going on with your cloud resources is vitally important. You need to know if services are running correctly. If there are any security issues. Are there any changes you can make to make your services run more efficiently? [[Microsoft Azure|Azure]] offers a range of services to help with this. Let's take a look. So first off, let's look at Azure Monitor. Azure Monitor provides a single unified hub where you can access all of your monitoring and diagnostic data. This helps you to find and fix problems as they occur. And make sure that your resources are running at maximum performance. Now Azure Monitor provides three key functions. First up is a sure way to monitor and visualize resource metrics. These metrics are generated by the resources themselves, and include things such as CPU time and network throughput. Keeping an eye on these things can help you understand the overall health of your systems. You can customize charts and create workbooks for reporting. You can also query and analyze both activity logs and diagnostic logs, for Azure resources. Not only that, but you can integrate it with any on-premise solution you might have, which means you can have all of your logs in a central location. With all of this data, you can then run queries to help you troubleshoot or visualize your log data. Finally, you can set up alerts and actions. Alerts notify you when certain conditions are met. Perhaps CPU time exceeds a set threshold. Actions are more advanced and allow you to send data
>
> **[1:35](https://www.linkedin.com/learning/migrating-to-azure/monitoring-and-reporting-in-azure?u=76281980&t=95)** to other management tools that you might be using. Next up, we have Azure Service Health. Now Azure Service Health is where you go to view information about the Azure platform itself. You can see a global view of the status of Azure resources, and also see a personalized view of just the services and regions that you use. Now [[Microsoft]] post information here about active service issues, so that you can better understand the impact that these might have on your service. Microsoft also publishes planned maintenance events here. So you'll know about changes that could affect the availability of your resources going forward. You can also view detailed data about each particular services current health status. Now you can think of Azure Advisor a little like a personal consultant. It's an automatic service that helps you follow and implement best practice. It's constantly monitoring your resources and configuration, and it recommends solutions that can help you keep everything optimized. Now there are five categories of recommendations. For business critical applications, you need high availability. You need your services to continue to work, even if the data center goes down. These recommendations help with that, and might include things such as adding [[Virtual Machines]] to a scale set, or using Azure Traffic Manager. Security is also very important. So, Azure Advisor is also looking for vulnerabilities that might lead to a security breach. You want your Azure services running at their best,
>
> **[3:10](https://www.linkedin.com/learning/migrating-to-azure/monitoring-and-reporting-in-azure?u=76281980&t=190)** so Advisor also makes performance recommendations. These might be things like optimizing sequel queries, or reconfiguring settings. Advisor can also help reduce your costs by recommending you shut down unused resources. Finally, there is [[Operational Excellence]]. Here we're talking about management and policy. So you'll see recommendations here about health alerts and Azure policy rules. You should check Azure Advisor regularly to make sure that your Azure resources are running at their best when your environment is in perfect health. As you might've guessed, Security Centre keeps tabs on the security of your resources. Things like virtual machines, networks, storage and data services. It's clever stuff, and it uses machine learning and behavioral analytics to search for active threats that might be targeting you. In addition to this, it can also help defend against malware, and reduces the attack surface of your resources, protecting you against brute force attacks. When a threat is identified, you receive a security alert, which details the steps you need to take. It also provides a report with information about the threat that was detected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (16), [[Microsoft]] (2), [[Virtual Machines]] (2), [[Operational Excellence]] (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** cpu (2)
> **Analogies:** such as (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Warnings:** troubleshoot (1)

#### [Working with Azure Monitor](https://www.linkedin.com/learning/migrating-to-azure/working-with-azure-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/working-with-azure-monitor?u=76281980&t=0)** - [Instructor] , Okay, so let's start off with a little tour of [[Microsoft Azure|Azure]] Monitor. To access Azure Monitor, you need to select Monitor here on the left-hand menu. Now, if it doesn't show up here, then you can just type monitor here in the search box. Now, we haven't created any resources yet in our subscription. So I've gone ahead and added a few things. I've created an Azure storage account and an Azure app service resource, just so we have some data to show here. We're not going to worry too much about what the data is as we're more interested in what's available and how to find it. Now, the first thing to look at here is the activity log. The activity log details all of the actions that have been taken against all of your Azure resources, things like creating and updating resources, that kind of thing. These logs are created automatically. So there's nothing that you need to do to get this set up. You can filter this list to show you exactly what you want and drill down into more specifics if you need it. Next up, let's look at diagnostic logs. Diagnostic logs allow you to dive into performance issues that you might be having with your application and services. These are special query language that gives you a huge amount of power and flexibility. Unfortunately, there's no data here at the moment because this does need to be configured. If we head over to our resource group, you can see I've created an app service resource. This is the type of resource you might use for hosting a web application. And we'll look at these more later on in the course.
>
> **[1:34](https://www.linkedin.com/learning/migrating-to-azure/working-with-azure-monitor?u=76281980&t=94)** Now, in order to have this resource send diagnostic data to Azure Monitor, I need to configure the diagnostic settings.
>
> **[1:50](https://www.linkedin.com/learning/migrating-to-azure/working-with-azure-monitor?u=76281980&t=110)** With that done, when I head back over here to Azure Monitor, we can explore the logs for our resource. Now, this is a very powerful feature and packed with different options which go way beyond the scope of this course. Just remember that you need to configure your resources to push their data to this log analytics workspace for them to become available. Next up, we have metrics. Now, metrics are time-based data points for your resources, things like network throughput, CPU usage, and the number of connected clients. Here, we start by selecting our resource and then our metric here in the filter bar. Let's select requests as our metric and see how many visitors our app is getting. From here, we can change the chart type to suit our data and even drill into the logs for more information. We can create an alert from here too. Alerts allow you to be notified when certain conditions are reached within your services. Now, these could be based on metrics. You might want to be notified if your number of connections goes too high. But you can also configure alerts based off the activity log. Let's create an alert so we're notified if the app service is stopped. First, we select New Alert Rule and then we set our scope. That's the resource that's going to trigger this alert. Then we set our condition. I'm going to skip forward a few pages and select Stop Web App.
>
> **[3:24](https://www.linkedin.com/learning/migrating-to-azure/working-with-azure-monitor?u=76281980&t=204)** Now we have to set our actions. That is we need to define what Azure should do when this alert is triggered. Here I'm going to select the Application Insight Smart Detection Group, which will ensure that the Azure administrators are emailed. But I could do all sorts here. I could call an Azure function app or a logic app. I could even use a web hook to call into a third-party system and perform some actions there. So as you can see, there is a lot to Azure Monitor and the features you'll use depend very much on the services that you have in your subscription. But it should be the first place you head to if you have any issues with your services or applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11)
> **Prerequisites:** configure (3), set up (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** cpu (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Best practice guidance](https://www.linkedin.com/learning/migrating-to-azure/best-practice-guidance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/best-practice-guidance?u=76281980&t=0)** - [Instructor] While the cloud adoption framework offers a lot of best practice guidance. In this video, I want to focus on just a few key areas. Firstly, we're going to look at some best practice for resource organization before looking at some guiding principles that will help you with identity and access control. Now, when it comes to how you organize your subscriptions and resources it's important to get things right from the start. This will make things much easier going forward. Now [[Microsoft]] recommends that you create at least two [[Microsoft Azure|Azure]] subscriptions. One for production workloads and one for non-production or development tasks. The non-production subscription typically uses a development and test pricing structure, which helps to keep costs down. This non-production subscription is a great place for you to try things out and experiment without worrying about damaging any production systems. If you are using multiple subscriptions, then consider using a management group. This makes it easier to manage policies across those subscriptions. Now, one thing that's often overlooked is naming strategies. You should create a naming strategy that allows you to quickly identify resources within Azure. This can help both operationally and with things like billing. An effective naming strategy helps you to identify the type of resource, its workload, as well as its deployment environment. You should also make use of tagging to help you organize your resources. How you do this depends very much
>
> **[1:34](https://www.linkedin.com/learning/migrating-to-azure/best-practice-guidance?u=76281980&t=94)** on the individual needs of your business though. Now identity and access control is a big subject and contains much more than we can cover in this course. There are however, a few guidelines you can follow that'll make your Azure environment easier to manage and much more secure. So the first thing you need to do is centralize your identity management. If you're anything like H Plus Sport then you already run an [[Active Directory]] domain on-premise that manages your corporate accounts. You should however create an [[Microsoft Entra ID|Azure active directory]] instance and make this the principal authority for everything. You can use [[Microsoft Entra ID|Azure AD]] Connect to keep your on-premise and your Azure instances of active directory in sync. Now we live in a mobiled fast world and we need our users to be able to access our applications and services no matter where they are or what device they're using. To support this you should enable single sign-on. This will ensure that your users can use the same set of credentials to access both on-premise and cloud resources, regardless of where they are or what device they're using. To help keep your identity accounts secure you should enforce [[Multi-factor Authentication]]. This two-step authentication process greatly increases security by sending a code to a mobile phone or a known email address or by using an app like Microsoft authenticator. Finally, you should make sure that you're using role-based access control. Organize your team into functional groups
>
> **[3:08](https://www.linkedin.com/learning/migrating-to-azure/best-practice-guidance?u=76281980&t=188)** and assign access based on those groups using the idea of least privilege. Only assign them the permissions they need to perform their tasks. You should avoid assigning permissions to individuals though and focusing on assigning roles to active directory groups.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Active Directory]] (4), [[Microsoft]] (2), [[Microsoft Entra ID|Azure ad]] (1), [[Multi-factor Authentication]] (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (2)
> **Best Practices:** best practice (2)
> **Speakers:** - [instructor] (1)


### 3. Beginning Your Azure Migration

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring migration scenarios](https://www.linkedin.com/learning/migrating-to-azure/exploring-migration-scenarios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/exploring-migration-scenarios?u=76281980&t=0)** - [Instructor] So far, we've looked at how we can plan our [[Microsoft Azure|Azure]] migration and also at how we can ensure our Azure environment is set up and ready. In this module we're going to start by getting our hands dirty and look at actually migrating resources to the Cloud. Different technologies require us to use different migration approaches. In this video, we're going to explore the different migration patterns that we can use. As we've said before, Cloud migration is complex and there isn't a one size fits all solution when it comes to physically moving your software and services. There are however, several patterns that you can use to help you reach your Cloud migration goals. These patterns fall into four broad categories, Re-host, Refactor, Re-architect and Rebuild. Now, you may use one of these patterns or all of them in your migration, and the patterns you choose will depend very much on the software that you're working with and the business drivers and goals of your migration. Let's look at the re-host pattern first. Now the re-host pattern, often called lift and shift, is an approach that doesn't require any code changes at all. Because of this, it's generally considered to be low risk and quick to execute. Essentially when re-hosting, all you're doing is moving an application, as is, to a new Virtual Machine inside Azure.
>
> **[1:35](https://www.linkedin.com/learning/migrating-to-azure/exploring-migration-scenarios?u=76281980&t=95)** Now, there are several reasons why you may wish to use the re-host pattern. Perhaps you need to move the application quickly, maybe you have to move the application without modifying it or, perhaps, using it as a stepping stone, you need to get your application into the Cloud but don't have the time or resources to change the code at this current time. It may also be you have a third party application like the Production Management software at H+ Sport. This currently runs on [[Windows]] [[Virtual Machines]] on premise. H+ don't have access to the source code so can't make any changes. In this scenario, I lift and shift to an Azure Virtual Machine would make the most sense. The refactor pattern, also known as repackaging, takes things one step further. This time you do modify the code of your application, but you only make the minimal amount of changes so that your application can use the Azure [[PaaS|platform as a service]] [[Microsoft Products|products]]. H+, for example, could modify their website to work on Azure App Service, or perhaps make the changes necessary to move the [[SQL]] [[Databases]] to Azure SQL. Now, this pattern is not always appropriate. Not all applications can easily be repackaged this way, but you need to make sure that you have the development skills needed to complete this work. Taking things one step further we have the Re-architecture pattern. Now here, you're focusing on modifying and extending the code within your application
>
> **[3:10](https://www.linkedin.com/learning/migrating-to-azure/exploring-migration-scenarios?u=76281980&t=190)** to really get the best out of the Cloud, making sure your application is scalable and resilient. Now, this might involve rewrites of applications and the adoption of new patterns and practices, such as [[Microservices]]. It's not just applications though, databases can also be re-architected. You could re-architect both relational and non-[[Relational Databases]] to a fully managed database solution, such as your Azure SQL or Cosmos DB. You typically use this pattern when you need to make big changes or add new capabilities to your applications, or when changes just have to be made to make the application work in the Cloud. If you're keen to use Platform as a service and reduce your reliance on Virtual Machines then this can also push you towards this pattern. Finally, we have the rebuild pattern. Here, you're literally rebuilding an application from scratch or using Cloud-native technologies like App Service, Function Apps and Machine learning. Sometimes applications just aren't suitable for migration to the Cloud and the costs and risks of doing so just might not be worth it. Often, the functionality that those apps provide can easily be rebuilt using [[Cloud Services]]. Again, though, this does typically need some developer resource. Now, for companies like H+ who don't have any developers a physical rebuild of software may not be an option. So, instead of rebuilding they could try replacing.
>
> **[4:46](https://www.linkedin.com/learning/migrating-to-azure/exploring-migration-scenarios?u=76281980&t=286)** There are lots of software companies that offer versions of their software in Azure Marketplace, and it may be that a Cloud-native version of the software you need, or something very similar, may be available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[SQL]] (3), [[Virtual Machines]] (2), [[PaaS|Platform as a service]] (2), [[Databases]] (2)
> **CLI Commands:** make (7)
> **Env Vars:** sql (3)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is an  (1), known as (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Introducing Azure Migrate](https://www.linkedin.com/learning/migrating-to-azure/introducing-azure-migrate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/introducing-azure-migrate?u=76281980&t=0)** - [Instructor] One of the tools that [[Microsoft]] offers that can make migration much easier is the [[Microsoft Azure|Azure]] migration service. Actually the Azure migration service is more a collection of tools that help you to assess your current workloads. That is your [[Virtual Machines]], physical machines, [[Databases]] and web apps and helps you to prepare them for migration. Once you've assessed your workloads they can even perform the actual migration by replicating resources in Azure. It's important to note however that this is following the rehost lift and shift pattern. So migrating resources with Azure migrate is a two-step process. Firstly, you have to assess the resources that you want to migrate. The assessment stage checks your on-premise assets to ensure that they're suitable for running in Azure. It then performs some performance testing so that it knows what size assets it needs to create and finally, it provides cost estimates so you know how much it's going to cost to run those assets in the cloud. Once the assessment has been complete you can then deploy the migration. This performs the actual migration and creates the required assets within Azure. Now the process here does depend on the type of resource you're migrating being a virtual machine or a physical machine. Let's take a look at Azure migrate in the portal and see how it all works. So here we are in the Azure portal and I want to show you how to create
>
> **[1:32](https://www.linkedin.com/learning/migrating-to-azure/introducing-azure-migrate?u=76281980&t=92)** a new server migration project. The first thing we need to do is create a new Azure migrate resource. Here on the left-hand menu, select migrate, how much you can see there are several services here that can help with migration. There is Azure migrate itself as well as the Database migration service and some more specialized services is like Databox, it can be used for migrating large amounts of data. Select as your migrates and in the overview blade, select assess and migrate servers and then click add project. Now this project is used to store all of the details of your migration. They need to create a resource group, give your migration project a name and set your location. With that done click create.
>
> **[2:31](https://www.linkedin.com/learning/migrating-to-azure/introducing-azure-migrate?u=76281980&t=151)** Now you can see here, two tools have been added to your project, a server assessment tool and a serve migration tool. In order for Azure to know what assets and services you have you need to install these server assessment tools locally on your network. These tools scan your infrastructure and services and report the data back to Azure. Now it's not the aim of this course to show you how all this works in detail, everyone's network and infrastructure is different. You could be using Hyper V or VMware for your virtual machines or you could be running physical servers instead. These discovery tools support all of those options but you might need to make changes to your environment to get them to work. If you don't want to or for some reason can't install the discovery tools then you can upload the details of your assets manually using a CSV file. This might be an option if you only have a few servers to migrate. In the next video we'll go through how to use the CSV file to migrate some virtual machines to Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (13), [[Virtual Machines]] (3), [[Microsoft]] (1), [[Databases]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** csv (2)
> **Prerequisites:** install (2)
> **Cross-References:** in the next (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Migrating a virtual machine](https://www.linkedin.com/learning/migrating-to-azure/migrating-a-virtual-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/migrating-a-virtual-machine?u=76281980&t=0)** - [Instructor] So, in this demo we're going to explore how we migrate a Virtual Machine to [[Microsoft Azure|Azure]] using Azure Migrate. So, in the previous video we created an Azure server migration project and we talked about how you can either deploy tools to your network or use a CSV file to provide the migration data to Azure. In this demo, we'll use a CSV file to make things a little easier. So, here we are on Azure migrate and the first thing you need to do is click Discover, here, on the assessment tool. At the top, here, select Import with CSV. First, download the template. It's a good idea to modify this template rather than trying to craft this file yourself. So, here is the template and you can see it contains a lot of columns, some prefilled with some example data. The columns with the asterisks are required fields, everything else is optional. Now, I'm going to be migrating three [[Virtual Machines]] so I can replace the data like so. I'm not providing values for every column but there's enough data here for Azure Migrate to work with. Once you're happy, you can save this and import into Azure. Just select the file and click Import. Now, Azure will tell you, here, if there are any errors and how many records have been imported. Once you've imported the file Azure goes off and analyzes the data determining what resources need to be created. Now this can take 10 minutes or so,
>
> **[1:34](https://www.linkedin.com/learning/migrating-to-azure/migrating-a-virtual-machine?u=76281980&t=94)** but once it's done you can see, here, the number of machines that Azure has detected. Now, the next thing you want to do is create a group. The group is just a collection of machines that you want to analyze and migrate together. You'll typically be working with a group of servers all related to the same workload. We just need to give our group a name and select the machines that we want to include.
>
> **[2:09](https://www.linkedin.com/learning/migrating-to-azure/migrating-a-virtual-machine?u=76281980&t=129)** With our group created, we can now perform an assessment. Simply select the group and click Assess, here at the top. Once the assessment is complete, click view assessments to see the report. The assessment report gives you two essential pieces of information. The readiness for Azure to host the resources and some projected costs. You can make changes to the properties used to calculate this and rerun the assessments, but it gives you some idea of what the migration cost will be. To actually perform the migration we need to use another tool. Select the migration tool and then click Discover. Now, here, we need to use a special tool installed on our on premise host. And there are different tools depending on whether you're using Hyper-V, VMware or a physical host. When this discovery phase is complete, simply select Replicate which will start copying data into Azure. Once this replication is complete, simply select Migrate to complete the process. Now, I'm not actually going to go through this in detail, partly because it can take a long time, but essentially all you need to do is install this tool on your host and replicate your Virtual Machines to Azure. What you'll get is an exact copy of what you have on premise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (13), [[Virtual Machines]] (2)
> **UI Navigation:** select the (4)
> **Exercise Files:** template (3), download the (1)
> **Env Vars:** csv (3)
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1), we talked about (1)
> **Definitions:** is an  (1)
> **Prerequisites:** install (1)

#### [Migrating SQL Server](https://www.linkedin.com/learning/migrating-to-azure/migrating-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/migrating-sql-server?u=76281980&t=0)** - [Instructor] Okay, so we've seen how the [[Microsoft Azure|Azure]] Migrate Services can be used to assess and migrate virtual machine workloads. It can also be used to migrate [[Microsoft SQL Server|SQL Server]] instances to Azure. So here we are back in Azure Migrate. And here on the left-hand side, under Migration Goals, we can select [[Databases]]. Now, as before there are two steps here, the assessment step and the migration step. Now, with databases we need to install [[Microsoft]]'s Data Migration Assistant tool. This you install on your SQL Server instance. Then you can use it to analyze your database schemers and check for compatibility. Now, this process is really similar to migrating [[Virtual Machines]]. So similar in fact that I'm not going to show it in this demo. What I am going to show you is another way of doing things. Let's actually create a new SQL Server managed instance. This is SQL Server running as a [[PaaS|platform as a service]]. No virtual machines to worry about here. You could just create a SQL Server database but managed instances are a better solution for companies like H+ Sport who are running several databases. It also offers the broadest compatibility with any SQL Server you might have running on premise so your database should work just fine. Now, to create a SQL Server managed instance, let's start by selecting the menu here at the top and click and create a resource. Select Databases and then click Azure [[SQL]] managed instance.
>
> **[1:38](https://www.linkedin.com/learning/migrating-to-azure/migrating-sql-server?u=76281980&t=98)** The first thing we need to do here is select a subscription and either sell it to an existing resource group or create a new one. We then need to provide a name for our instance. Remember to follow the naming strategy and also provide a region. Now, we need to configure our instance so it's the right size and has the performance characteristics that our applications will need. Click Configure Managed Instance. This is where you configure the size and performance of your instance. For most scenarios, the general purpose service tier should be sufficient. But if you have a particularly intensive mission critical application, you may consider the business critical tier, although this is going to cost you considerably more. Next, you need to select the number of compute cores that you need as well as the amount of storage. Now, these values can be changed in the future as your database increases or perhaps decreases in size. Notice how this affects the pricing. Now, if like H+ you already have SQL Server on premise and you're part of Microsoft's Software Assurance program, then you can use your existing license here to keep the costs down. Check your current licenses to see if you can benefit from this. Next, you need to provide an administrative account login and password. And the password needs to be at least 16 characters long. With that done, click Review & Create and then click Create. A SQL Server managed instance will actually take about six hours to deploy but once complete
>
> **[3:12](https://www.linkedin.com/learning/migrating-to-azure/migrating-sql-server?u=76281980&t=192)** you'll have a fast, secure, and highly scalable SQL Server environment that you can use to deploy your databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (10), [[Databases]] (5), [[Microsoft Azure|Azure]] (4), [[Microsoft]] (2), [[Virtual Machines]] (2)
> **Env Vars:** sql (11)
> **Prerequisites:** configure (3), install (2)
> **UI Navigation:** select the (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Migrating data](https://www.linkedin.com/learning/migrating-to-azure/migrating-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/migrating-data?u=76281980&t=0)** - [Presenter] Okay, so we've looked at how we can create a [[Microsoft SQL Server|SQL Server]] managed instance in [[Microsoft Azure|Azure]], and that will give us a platform to host our [[Databases]]. But what about the data? How do we move our physical data, that is our files and other resources, into the cloud? Let's start by thinking about what files we actually have. Like many small businesses, H+ has accumulated a lot of data over the years. There are accounting records, invoices, purchase orders, that sort of thing. There's all the user documents for every individual user account, [[Microsoft Word|word]] documents, images, spreadsheets. We then have our production files that feed into our production software. We also have backups from our servers and a whole host of other files. All in all, these files use about four terabytes in storage and they need to be moved to Azure. Now there are several ways we could get this data into Azure. If we're adding faster blob storage, for example, then we can simply add the files manually within the portal. Now this works fine for one or two files, but we've got thousands of files to move. So this probably isn't going to be an option. We could use a tool called Azure Storage Explorer, which lets you connect your Azure Storage and copy files across. This would be easier, but the sheer size of the files would mean that this would take a very long time. It's also not very safe because the network connection could drop out leaving the transfers in an unknown state. If you've got sensitive documents, then you need a secure, encrypted way
>
> **[1:33](https://www.linkedin.com/learning/migrating-to-azure/migrating-data?u=76281980&t=93)** to transport that data. The solution is to use Azure Data Box. Let's look at that now. Azure Data Box is a special service from Azure that allows you to move data both in and out of the cloud in a secure and reliable way. Data Box isn't actually a single product, as such. There are several different Data Box [[Microsoft Products|products]] that you can choose from depending on your needs, and they fall into two categories, online and offline. The offline Data Box products are physical devices that [[Microsoft]] actually ship out to you. You load your data onto these encrypted drives, and then ship them back to Microsoft where they connect them to the cloud and upload the data. Now, these come in three sizes. There is Data Box Disk, which is an eight terabytes solid state drive. There is Azure Data Box, which is a 100 terabyte storage device that can be plugged directly into your network, and it offers 256 bit encryption for safer transit. And then there's Data Box Heavy, which offers a whopping 100 petabytes of storage. Now these devices can be used to import data into Azure as well as export it. They're simple to order and you can do that through the Azure migration service in the portal. There is a cost associated with this though, which varies depending on your region and the product that you select. Physical devices are not the only option though.
>
> **[3:07](https://www.linkedin.com/learning/migrating-to-azure/migrating-data?u=76281980&t=187)** Microsoft also provides a virtual Data Box appliance called Data Box Gateway. Data Box Gateway is a special storage solution that allows you to continuously synchronize data to Azure. It's essentially a virtual machine that you provision on premise that acts as a storage device by exposing NFS and SMB shares. When you copy files to those shares, Data Box Gateway then transfers your data to Azure block blob, paid blob, and Azure Files. It can also work the other way too, allowing you to export data from Azure. Data Box Gateway is the perfect solution for when you need to archive data in the cloud as it allows you to copy hundreds of terabytes of data in a secure and efficient way. Now it's typical for companies to use a Data Box device for an initial upload of data and then use Data Box Gateway to manage the incremental changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (15), [[Microsoft]] (3), [[Microsoft Products|Products]] (2), [[Microsoft SQL Server|Sql server]] (1), [[Databases]] (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** sql (1), nfs (1), smb (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [Migration best practces](https://www.linkedin.com/learning/migrating-to-azure/migration-best-practces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/migration-best-practces?u=76281980&t=0)** - [Instructor] So let's talk about best practice. What things do you need to be doing to ensure speedy and effective migration? Well, let's start by talking about [[Virtual Machines]]. Many companies use VMware for hosting and managing their virtual machines. And if that's the case for your company, that [[Microsoft]] recommends you migrate the entire VMware host to [[Microsoft Azure|Azure]]. This can really accelerate the migration process because every VMware host that you migrate to Azure can move several workloads. These workloads can remain in VMware in the short term until you can move them to other modern cloud capabilities. Using one of the migration patterns. Database instances should also be a priority. Moving the entire database instance, be that [[Microsoft SQL Server|SQL server]], Oracle, [[MySQL]], will also move the [[Databases]] that those instances serve. Moving these instances will accelerate the migration of those workloads and services that those databases support. Now, when it comes to data, the most important thing is to perform a thorough audit of your data. We talked about auditing your state before, but we were more interested in the physical infrastructure. Now we're talking about the data itself. We need to know what data we have. How much space it requires. Where it needs to go. Who needs access to it. Moving data into Azure with Databox can be expensive. So you don't want to be paying to move data unnecessarily.
>
> **[1:36](https://www.linkedin.com/learning/migrating-to-azure/migration-best-practces?u=76281980&t=96)** If you're using Databox gateway then you also need to think about network capacity. How much bandwidth do you have? If you have a huge amount of data then you should probably do the initial seed using an offline Databox. Finally, we need to talk about networking. Now, we've looked at migrating virtual machines in databases but I've deliberately left out networking. Mainly because it's just too big a subject to squeeze into a course like this. Virtual networks within Azure are what are used to connect and segregate all of the apps and services that you create within your subscription. They have IP addresses, firewalls and standard topologies just like a physical network. Now, the design and implementation of your virtual network is one of the most critical steps in an Azure migration. Now, I'm not going to go in to how to create virtual networks, but we'll highlight some best practice that applies specifically to networks when we're performing a migration. And first up is IP addresses. You need to plan your [[IP Addressing]]. And it's very important that the virtual network address space doesn't overlap with any on-premise network address range. This is going to cause problems with connections and rooting. Next, you should make sure that you implement hub-and-spoke topology on your network. What this does is it centralizes the common services such as connections to on-premise networks and firewalls. And it also provides a central point of connectivity to on-premise networks. Now, these hub-and-spoke networks are typically used
>
> **[3:11](https://www.linkedin.com/learning/migrating-to-azure/migration-best-practces?u=76281980&t=191)** by larger enterprises. So smaller companies like H Plus might consider a simpler design to reduce the cost and complexity. Now, virtual networking is a big subject and like most things can be either very simple or incredibly complex. But it's important to get it right from the start. There are lots of courses and training available that cover virtual networking. So please take some time to explore this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Virtual Machines]] (3), [[Databases]] (3), [[Microsoft]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **CLI Commands:** mysql (1), make (1)
> **Analogies:** just like (1), such as (1)
> **Best Practices:** best practice (2)
> **Env Vars:** sql (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Innovating with Azure Cloud Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Start innovating](https://www.linkedin.com/learning/migrating-to-azure/start-innovating?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/start-innovating?u=76281980&t=0)** - [Instructor] Welcome back. So far we've looked at how you plan your migration, how you set up your environment, and how you migrate resources. Now, we can look at the final stage, innovation. Once you've migrated your resources into [[Microsoft Azure|Azure]], the next ongoing process is to innovate. That is to unlock new business opportunities, and expand your capabilities by leveraging the advanced features of the Azure platform. Now, I'm not going to be telling you how to innovate, because that's up to you. But what I want to explore with you, is what options are available for innovation. I think you can break these down into three key areas. Firstly we have data. Surfacing the right data to the right people in your organization can be a key driver in innovation. And we call this data democratization. Data democratization is the process of allowing anyone within your organization access to the data that they need. H Plus Sport generates a lot of data, be that customer data, order data, or perhaps data generated by the production management system. Now at the moment, that data is hard to access. Buried away in [[Databases]], in a format that's hard to understand. If you could somehow surface that data in an easily understandable way, that non-technical people could easily access,
>
> **[1:35](https://www.linkedin.com/learning/migrating-to-azure/start-innovating?u=76281980&t=95)** then they could use that data to drive business decisions. Now to help with this, we could use Azure Data Catalog, which is a fully managed service within Azure that helps you to catalog data across the enterprise. Meaning your staff spend less time looking for data, and more time consuming it. You can also share data efficiently with Azure Data Share. Azure Data Share data allows you to share huge amounts of data in any format. It's serverless, code free, and requires no infrastructure setup or management. There are also services like Time Series Insights, [[Microsoft Power BI|Power BI]], and the various different database technologies available like Cosmos DB and Data Warehouse. Next up we have Applications. Now innovating with Applications can include both modernizing our existing applications, such as the H plus website, as well as building new cloud native applications, using some of the advanced features of the cloud, such as containers or serverless functions. Typically, we're looking for ways to deliver value to our customers faster. Now that could be using something like Azure App Service. App Service is a [[PaaS|platform as a service]] hosting environment for your applications, so no infrastructure to manage, and no operating system to maintain. It can also automatically scale to meet the demands of your users. You could incorporate Azure Cognitive Services into your app.
>
> **[3:07](https://www.linkedin.com/learning/migrating-to-azure/start-innovating?u=76281980&t=187)** Azure Cognitive Services is a set of advanced APIs that uses [[Microsoft]] supported [[Artificial Intelligence (AI)|artificial intelligence]] and machine learning [[Algorithms]] to offer advanced features such as translation, content moderation, [[Speech Recognition]] and [[Computer Vision]]. Adding advanced features in your app like this can greatly increase customer engagement, and opens up a lot of new opportunities. You can also open new lines of communication with your users, and your customers, by using services like Azure Bot Service. Bot Service extends your standard application, by adding a natural bot interface that uses artificial intelligence and machine learning. These bots can be added to different communication channels, such as Skype and [[Facebook]] Messenger, as well as being embedded in your website. And they offer new ways to communicate with your customers. Finally, we've got artificial intelligence and machine learning. H Plus Sport has a lot of data. Data on customers, suppliers, the production system and much more. Imagine if you could use that data to make predictions, perhaps about our customer's future requirements. Or we could use that data to automate a business process. We could even use that data as we engage with customers in new and exciting ways, and to deliver an improved experience. Azure provides lots of services to get you started with machine learning and artificial intelligence.
>
> **[4:43](https://www.linkedin.com/learning/migrating-to-azure/start-innovating?u=76281980&t=283)** We've already mentioned Cognitive Services, but there's also Azure Machine Learning, which is an enterprise grade service for developing and deploying advanced machine learning models. Now artificial intelligence is a complex area, but used correctly, it could really give your business an edge over the competition. And Azure is there ready to help you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (13), [[Artificial Intelligence (AI)|Artificial intelligence]] (5), [[Databases]] (1), [[Microsoft Power BI|Power bi]] (1), [[PaaS|Platform as a service]] (1)
> **Definitions:** is a  (4), we call this (1), is an  (1)
> **Analogies:** such as (4), imagine (1)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Introducing PaaS](https://www.linkedin.com/learning/migrating-to-azure/introducing-paas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/introducing-paas?u=76281980&t=0)** - [Instructor] Okay, so let's look now at [[PaaS|platform as a service]]. Platform as a service will be critical to any efforts you make to innovate in the cloud. And the reasons for that are quite simple. Platform as a service offers a complete development and deployment environment in the cloud. And it enables you to build everything, from the simplest cloud app to the most sophisticated enterprise application. With platform as a service, you purchase the resources you need on a pay-as-you-go basis, only paying for the resources you need when you use them. Just like [[IaaS|infrastructure as a service]], platform as a service includes all of the infrastructure that you need. That is the networking and storage that's provisioned in the data center. As well as this, it includes all the middleware such as development tools, [[Databases]], management systems, and much more. It's designed to support the complete [[Application Development]] lifecycle, supporting you with building testing, deploying, managing, and updating your applications. There are no software licenses to deal with. All you need to do is manage the applications and services that you develop. And [[Microsoft Azure|Azure]] takes care of everything else. Platform as a service has many advantages over a traditional infrastructure as a service approach. Firstly, it can drastically reduce the development time for your project, enabling you to deliver that customer value faster. Things such as directory services, authentication, and search are built right in.
>
> **[1:34](https://www.linkedin.com/learning/migrating-to-azure/introducing-paas?u=76281980&t=94)** Because platform as a service comes with so many features built right in, you can add new features and capabilities without having to hire specialized staff. It's also much easier to build applications that target multiple platforms, including web, mobile, and desktop, again, making it easier to engage with customers. Another great benefit of platform as a service is that it gives you access to advanced, sophisticated tools such as machine learning and [[Business Intelligence (BI)|business intelligence]] that could well be unaffordable if you were to try and purchase them or license them outright. It's also much easier to build highly scalable and resilient applications. You want the amount of resources available to grow in response to the demand of your users, who also want your services to be available across the globe even in the event of a network failure. Platform as a service makes all of this possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PaaS|Platform as a service]] (9), [[IaaS|Infrastructure as a service]] (2), [[Databases]] (1), [[Application Development]] (1), [[Microsoft Azure|Azure]] (1)
> **Analogies:** such as (3), just like (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Introducing App Service](https://www.linkedin.com/learning/migrating-to-azure/introducing-app-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/introducing-app-service?u=76281980&t=0)** - [Instructor] In [[Microsoft Azure|Azure]], the first platform is a service product that you'll probably come across is App Service. App Service is a fully managed service for building and deploying web applications and API. It supports a variety of languages and technologies including dot net, dot net core, node JS, [[Java]], [[Python (Programming Language)|Python]] and [[PHP]] and it can even work with containers. Let's head over to the Azure portal and look at how we can deploy the H Plus Sport website to Azure App Service. Okay so here we are in the Azure portal. What I want to do is publish the H Plus Sport website to an Azure App Service instance. The first thing we need to do is create a new App Service resource. So in the left-hand menu, select App Services click add to create a new App Service. As usual, we need to select a resource group and give our App Service instance a name and this will be used to create your website address. Now you can either publish code to your App Service or use a Docker container. Docker isn't something we've talked about in this course so just make sure code is selected here. Next, you need to select a runtime stack. Now you can use a variety of technologies with App Service, including dot net Java and node. I'm going to select dot net. Now, depending on your application
>
> **[1:33](https://www.linkedin.com/learning/migrating-to-azure/introducing-app-service?u=76281980&t=93)** you can have either a [[Windows]] environment or a [[Linux]] environment. Next select a region and finally configure your App Service plan. Now the App Service plan is essentially the pricing tier. Each tier has different features and options. You can change these later on as your service grows. For now I'm going to use the S one production tier click review and create and then click create.
>
> **[2:13](https://www.linkedin.com/learning/migrating-to-azure/introducing-app-service?u=76281980&t=133)** Once the App Service is deployed, click go to resource. Here on the overview blade you can start and stop your App Service view important metrics and configure authentication and security options and much more. Now in terms of deploying our code to App Service we have lots of options. We can publish directly from Visual Studio or Visual Studio code. We can also use the deployment center here to publish from a range of different services. There are all the usual services like [[GitHub]] and Azure Repos but also some you might not expect like [[Microsoft OneDrive|OneDrive]] and Dropbox. Let me show you how easy it is to publish your website from Dropbox. Select the Dropbox option select the folder and that's it. Azure will pull the files and publish them to your App Service instance. If we go back to the overview blade now and browse the site. We can see our website has been deployed. Now there's one more thing I want to show you and that's scaling. On the left select scale out. Now at the moment, our website is running on a single instance of App Service. Think of an instance as a server. Now, what if we suddenly get a spike in traffic and there're lots of users on our website? Well, we can scale App Service out
>
> **[3:47](https://www.linkedin.com/learning/migrating-to-azure/introducing-app-service?u=76281980&t=227)** that is, add more servers and it's really easy. You can do it manually by simply increasing the number of instances or you can set an auto-scale rule. Auto-scale rules allow you to increase and decrease the number of instances based on certain metrics. Let's say we want to increase the number of instances if the CPU count goes above 70%. Now, obviously you have to pay for the additional resources that you use but using auto-scale rules, you can make sure that you're only ever running the right amount of resources for the traffic that you have.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[Java]] (2), [[Python (Programming Language)|Python]] (1), [[PHP]] (1), [[Windows]] (1)
> **CLI Commands:** node (2), docker (2), make (2), python (1), php (1)
> **Tools:** azure portal (2), visual studio (2), github (1)
> **Env Vars:** api (1), php (1), cpu (1)
> **UI Navigation:** select the (2), go to (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (2)
> **Cross-References:** go back to (1)

#### [Going serverless](https://www.linkedin.com/learning/migrating-to-azure/going-serverless?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/going-serverless?u=76281980&t=0)** - [Instructor] Okay, so now I want to talk about something rather strange and that serverless functions. Wait, what, how can it be serverless? Surely there's a server somewhere. Well, yes, of course there is. In fact there are probably thousands of them but not that you need to worry about any of that. With [[Serverless Computing]] you don't worry about infrastructure or resources at all. In fact all you do is write the code that has to be executed. Consider this example. On the website customers can write reviews sharing their experiences with our great [[Microsoft Products|products]]. Now, currently the marketing team have to manually moderate these reviews which takes considerable time. With a serverless architecture and a little thought we can entirely automate this process. Freeing up considerable time for the marketing team to add value elsewhere. As reviews are added, they're placed on a queue and any images associated or dropped into blob storage. The function app starts when a new review is added to the queue and it invokes the content moderation and [[Computer Vision]] APIs which are part of [[Microsoft Azure|Azure]] cognitive services. These are used to moderate the review and once complete, the review is added to cosmos DB, the website then retrieves moderated reviews from cosmos DB. Sounds simple, right? The function app in this example only runs
>
> **[1:34](https://www.linkedin.com/learning/migrating-to-azure/going-serverless?u=76281980&t=94)** when a new review is added and is your ads as much resources required to complete the task. You only pay for the time that the function is running. Once finished the function is shut down and the resources are de-allocated. So let's have a look now in Azure that how we create a function app. Okay, so here we are on Azure and let's create a new function app. On the left hand side select function app and then click add.
>
> **[2:10](https://www.linkedin.com/learning/migrating-to-azure/going-serverless?u=76281980&t=130)** Select a resource group and give it a name. This is all very similar to creating an app service.
>
> **[2:21](https://www.linkedin.com/learning/migrating-to-azure/going-serverless?u=76281980&t=141)** Again, we have to sell it to run time stack. This determines what language you write your functioning. Next click review and create and then click create. The function app is deployed click go to resource. Now this function app can contain many different functions so let's create one. Select functions here on the left and then click add. Now you can either develop your functions in a tool like visual studio where you can work entirely within the visual portal. And the first thing we need to do is select a trigger. That is where you're actually going to start this function and set it running. This could be a timer say every hour or in response to something that happens elsewhere within Azure like a file being added to storage. Let's select HTTP trigger. We want our trigger to fire when it receives a web request. On the developer menu click code and test. That was your (mumbles) kind enough to provide us with a default implementation. This code simply returns a message when it receives a new web request. Now you would need to replace this code with your own business logic. The important thing to remember about functions
>
> **[3:55](https://www.linkedin.com/learning/migrating-to-azure/going-serverless?u=76281980&t=235)** is that this code doesn't run and there are no servers or infrastructure available for it until the trigger fires. That means you're only paying when the code is executed. So it's ideal for small discreet functions or when you need to integrate separate systems together in some way. We can test this function right here in the portal, click test and run. This is going to create a new hTTP request and send it to our function trigger. It's going to issue a post request. And at the bottom here, you can see the request body. If we click on run you can then see the output response that we receive. It's showing us an HTTP 200 response code which means that the request was successful. And in the output response content, you can see the message that the function returned. Obviously this is a very simple example but you can do a lot of interesting things with functions and there are lots of resources online to help with writing functions. So take a look and see what you can create.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Serverless Computing]] (1), [[Microsoft Products|Products]] (1), [[Computer Vision]] (1)
> **Env Vars:** http (2)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** means that (1), is a  (1)
> **Code Identifiers:** http (1)
> **Tools:** visual studio (1)
> **Analogies:** similar to (1)
> **Prerequisites:** required to (1)

#### [Artificial intelligence](https://www.linkedin.com/learning/migrating-to-azure/artificial-intelligence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/artificial-intelligence?u=76281980&t=0)** - [Instructor] So now I want to talk about [[Artificial Intelligence (AI)|artificial intelligence]]. Artificial intelligence or AI is an area of technology that enables computers to simulate human behavior. And it has many applications. What we're interested in in this video is a field of artificial intelligence called machine learning. Machine learning is all about getting computers to act without explicitly programming them. It uses existing data to predict future events, behaviors, outcomes, and trends. If I gave you all of my supermarket bills for the last 12 months, I'm certain that you could make a reasonable prediction what I was likely to buy on my next trip to the supermarket. And this is essentially what machine learning is all about. And it's everywhere in our society. It's used by banks to detect fraud. It's in your car, maybe even your vacuum cleaner. For companies like H Plus, machine learning can be used for all sorts of things such as predicting future trends, inventory management, [[Forecasting]] demand, and sales forecasting. Now, machine learning is a complex area of computer science so we're not going to be getting bogged down in the technical here but let's look at a high-level view of how machine learning works. The first thing you need to do is build a model. A model essentially defines the problem
>
> **[1:33](https://www.linkedin.com/learning/migrating-to-azure/artificial-intelligence?u=76281980&t=93)** that you're trying to solve. It has inputs, typically sets of data, it has success criteria. and it has outputs. Once you've built your model, you train it. This training step involves running the model with sets of historical data. Every time the model is run, it learns and improves, making the output more accurate. I'm deliberately simplifying this but you get the points. Once your model is trained, then you're ready to use it with live data. And how you do this will depend very much on your application. So [[Microsoft Azure|Azure]] provides a range of [[Microsoft Products|products]] to allow you to work with artificial intelligence and machine learning, the main one being Azure Machine Learning. Azure Machine Learning is a powerful enterprise-ready machine learning platform and it gives you everything you need to work with machine learning. You can use a range of languages and tools to design and build your models, including [[Python (Programming Language)|Python]], R, and Visual Studio. Now, you may be thinking that this is something that's only good for data scientists but that's not the case. Anyone can be productive with Azure Machine Learning, regardless of their skill level. Beginners can use the Azure Machine Learning Designer for an effortless drag-and-drop experience. And [[Automated Machine Learning (AutoML)|automated machine learning]] is designed so that anyone can easily build highly accurate machine learning models. Now, don't get me wrong.
>
> **[3:05](https://www.linkedin.com/learning/migrating-to-azure/artificial-intelligence?u=76281980&t=185)** If you're considering machine learning as part of your innovation, then you're going to need some additional training but it's not nearly as complicated as it sounds. Perhaps start with something simple like shopping suggestions on the company website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Artificial Intelligence (AI)|Artificial intelligence]] (4), [[Forecasting]] (2), [[Microsoft Products|Products]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (1), python (1)
> **Tools:** visual studio (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Automating repetitive tasks](https://www.linkedin.com/learning/migrating-to-azure/automating-repetitive-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-to-azure/automating-repetitive-tasks?u=76281980&t=0)** - [Instructor] The [[Microsoft Azure|Azure]] power platform is a set of tools that enables you to quickly build applications, analyze data, automate processes and build virtual agents all without writing code. The apps and services you build with power platform can even be connected to Azure services as well as hundreds of other apps enabling you to build really powerful tools in no time at all. There are four main tools within the power platform. [[Microsoft Power BI|Power BI]] is a self-service data analytics solution that lets you build powerful visualizations of your data and share those across your organization or embed them in your application or website. It's a great way of unlocking insights into your company's data. Power Automate is a no code automation platform that allows you to interact with legacy systems and to build powerful automation workflows. These can be simple to motions like updating a spreadsheet when you receive an order or more complex scenarios like entering data into a mainframe system. Power Apps gives you a low code approach to rapidly build apps for any device while seamlessly working with Azure services you can build powerful line of business applications in days. Power Virtual Agents enable you to create intelligent no code chat bots which you can easily embed
>
> **[1:31](https://www.linkedin.com/learning/migrating-to-azure/automating-repetitive-tasks?u=76281980&t=91)** in your website. You can also integrate these with existing services by calling customer workflows, using Power Automate as well as being able to extend them further using the [[Microsoft]] bot framework. Visit the Power Apps website for more information on these services. Let's head over to Azure and take a look. So here we are on Azure portal and the first thing we need to do is click all services here in the left-hand menu. In the filter box type power and then select power platform and the first thing to point out is that this isn't really an Azure service. In fact, the power platform is in effect four separate services and you'll notice straight away that only three of them are listed. You can find out more about them on the website. So let's look now at Power Automate. Click here where it says automate your workflows. Now, the first thing you'll notice is that there are lots of pre-built templates that we can use to get started and these cover a range of common scenarios like requesting approval from your manager. Let's build a simple workflow so we can see how these are structured. Click create here on the left-hand side. The first thing we need to do is decide how our workflow is going to be triggered. Is it going to be run automatically in response to some event such as an email being received or a file being uploaded? Is this going to be run manually? Is it going to be running on a schedule perhaps every day or every few hours?
>
> **[3:05](https://www.linkedin.com/learning/migrating-to-azure/automating-repetitive-tasks?u=76281980&t=185)** Desktop flows were an advanced scenario that needed a premium subscription. So we're not going to cover those. Select automated cloud flow what's going to start this workflow? Now you can see lots of suggestions here but I want to use Dropbox. So type Dropbox into the search box and then select when a file is created. Now what I want this workflow to do is send me a notification every time a file is added to my Dropbox. So first I select a folder to watch, next click new step. Here you can see all of the controls that you can use to build your workflow and there's a lot here so please explore what's available, select notifications and then select send a mobile notification. At a message for the notification, you can even add a link here too. Now you see here this dynamic content box. Dynamic content allows you to use values from the previous steps. Here I could use the file name. That's the name of the file that was added to Dropbox, click save and then in the top right-hand side, click test, select manually and then click test. Now when I add a file to Dropbox you'll see the workflow execute. There are lots of different controls here that you can use to build powerful workflows. In fact, there's almost nothing
>
> **[4:36](https://www.linkedin.com/learning/migrating-to-azure/automating-repetitive-tasks?u=76281980&t=276)** that you can't achieve with a little thought. So have a dig around and see what you can come up with. Okay so what have we covered in this course? We started off by looking at how you can plan your Azure migration. We talked about the cloud migration framework and looked at goals, objectives and how we measure success. We moved on to looking at how we set up our Azure environment, how we manage costs and we looked at security and role based access control. We then looked at how you can perform some simple migration activities using Azure migrate. Finally, we looked at innovation, some of the more advanced features of Azure such as machine learning and serverless functions. Now I hope you've enjoyed this course and it's given you some ideas and inspiration for your own cloud migration project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (10), [[Microsoft Power BI|Power bi]] (1), [[Microsoft]] (1)
> **Definitions:** is a  (3)
> **Cross-References:** we covered (1), we talked about (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[James Millar]]

## Path Context

### In [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]
← [[Developing Ci Cd Solutions With Azure Devops]] | **2 of 7** | [[Azure Data Lake for Developers]] →

## Appears In

- [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]

---

[↑ Back to top](#)