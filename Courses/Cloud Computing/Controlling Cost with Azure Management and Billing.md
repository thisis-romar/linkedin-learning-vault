---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: controlling-cost-with-azure-management-and-billing
url: "https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing"
duration_minutes: 49
duration: 49m
level: Intermediate
updated: 6/20/2023
learners: 4424
skills:
  - Cost Management
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGqGEF_98p6ZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686855323962?e=2147483647&amp;v=beta&amp;t=pKzASYM1u1Xy5jgdQA8SYhzbit8zjoirz1V_gexZS4w"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]'
prev_courses:
  - '[[Manage Storage in Azure]]'
path_nav: '[{"path":"Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals","position":8,"total":8,"prev":"Manage Storage in Azure","next":null}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - skill/cost-management
  - skill/microsoft-azure
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Controlling%20Cost%20with%20Azure%20Management%20and%20Billing.md)

![Controlling Cost with Azure Management and Billing](https://media.licdn.com/dms/image/v2/D560DAQGqGEF_98p6ZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686855323962?e=2147483647&amp;v=beta&amp;t=pKzASYM1u1Xy5jgdQA8SYhzbit8zjoirz1V_gexZS4w)

# Controlling Cost with Azure Management and Billing

> Migrating to the cloud offers many advantages, but it can be an extremely expensive process. You’ll get more in terms of overall management and savings benefits; however, without proper monitoring, the costs can be downright prohibitive. In this course, instructor James Millar covers important considerations for monitoring and managing cloud costs using Azure Cost Management and Billing.Examine a 

> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing) | 49m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (1 videos)
- **2. 1. Introduction to Cost Management** (3 videos)
- **3. 2. Managing Costs with Budgets** (4 videos)
- **4. 3. Analyzing Costs with Reporting** (5 videos)
- **5. 4. Reducing Costs with Reservations** (3 videos)
- **6. Conclusion** (1 videos)

### 1. Introduction

#### Control costs with Azure management and billing
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/control-costs-with-azure-management-and-billing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/control-costs-with-azure-management-and-billing?u=76281980&t=0)** - [James] Do you want to reduce the cost of running your services in Microsoft Azure?
>
> **[0:04](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/control-costs-with-azure-management-and-billing?u=76281980&t=4)** Do you sometimes worry that your cloud costs are out of control?
>
> **[0:07](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/control-costs-with-azure-management-and-billing?u=76281980&t=7)** If so, then this course is for you.
>
> **[0:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/control-costs-with-azure-management-and-billing?u=76281980&t=9)** Hey, my name's James Millar, and over the last decade, I've been helping companies large and small move their services to Microsoft Azure.
>
> **[0:17](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/control-costs-with-azure-management-and-billing?u=76281980&t=17)** In this course, I'll be showing you some simple techniques that you can adopt to reduce your cloud spend.
>
> **[0:23](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/control-costs-with-azure-management-and-billing?u=76281980&t=23)** We'll also be exploring the tools and features of Azure specifically designed to help you budget and plan for effective cost management.
>
> **[0:32](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/control-costs-with-azure-management-and-billing?u=76281980&t=32)** This course will give you the knowledge and tools that you need to effectively manage the cost of your Azure products and services.
>
> **[0:39](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/control-costs-with-azure-management-and-billing?u=76281980&t=39)** Let's jump right in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [james] (1)


### 2. 1. Introduction to Cost Management

#### Introducing the scenario
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=0)** - [Instructor] Okay, so let's start things off by looking at cost management.
>
> **[0:04](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=4)** Now I guess you can imagine why cost management is important.
>
> **[0:08](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=8)** Nobody likes to receive an unexpected bill, and costs on any cloud platform can quickly grow, leaving you with a nasty surprise at the end of the month.
>
> **[0:15](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=15)** Now to help us understand this more, we're going to be looking at a case study, H+ Sport.
>
> **[0:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=21)** Let's take a look.
>
> **[0:22](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=22)** Now, if you've seen any of my other Azure courses, then you'll already be familiar with H+ Sport.
>
> **[0:28](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=28)** We followed them from the early stages of their Azure migration project.
>
> **[0:32](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=32)** Now H+ are a small-to-medium-sized company making sports supplements and active wear, and they've been trading for nearly 15 years.
>
> **[0:39](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=39)** Recently, they migrated many of their software and services to the Azure Cloud platform.
>
> **[0:44](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=44)** H+ have several subscriptions and lots of different resources that are used by all aspects of the business.
>
> **[0:50](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=50)** Now one of the main motivations for migrating to Azure was to make sure that the business was more competitive.
>
> **[0:56](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=56)** And part of this was a desire to drive down the excessive costs of running their own IT infrastructure.
>
> **[1:02](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=62)** But there's a problem.
>
> **[1:03](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=63)** Unfortunately, H+ have just received their monthly billing statements and the costs are quite a lot more than they were expecting.
>
> **[1:12](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=72)** Jane, who is the IT infrastructure manager at H+, has been asked by her CIO to investigate how they can better manage their costs.
>
> **[1:20](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=80)** To help answer that question, let's first look at the two main causes of excessive costs.
>
> **[1:26](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=86)** A common reason for high costs is that you simply have resources deployed that just aren't used anymore.
>
> **[1:33](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=93)** Virtual machines and storage services like SQL Azure typically incur charges regardless of whether they're used or not.
>
> **[1:41](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=101)** Overprovisioned services are also a common problem.
>
> **[1:44](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=104)** And what I mean by this is services that are deployed at a higher pricing tier than is really needed.
>
> **[1:50](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=110)** Here you're paying for performance or functionality that you don't actually need.
>
> **[1:54](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=114)** Now these are just two examples of things that can increase your costs, but there are more.
>
> **[1:59](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=119)** Thankfully, Microsoft has provided a range of features and services within Azure that can help you mitigate and manage these issues.
>
> **[2:06](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=126)** So let's take a look at those next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Env Vars:** cio (1), sql (1)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Understanding cost management and billing
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=0)** - [Instructor] Okay, so let's dive straight in and explore the tools available to us within Azure that we can use to help us manage the costs of our cloud infrastructure.
>
> **[0:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=9)** Azure Cost Management and Billing is a service provided within Microsoft Azure that helps users to manage their cloud computing costs by providing visibility and control over their Azure spending.
>
> **[0:22](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=22)** It allows users to monitor, allocate, and optimize their usage and costs by providing insights into their spending, enabling them to identify and eliminate waste and facilitating cost planning and budgeting.
>
> **[0:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=37)** It also provides tools for setting up and managing billing accounts, invoicing, and payment options.
>
> **[0:44](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=44)** Used properly, Cost Management and Billing should help you to minimize your cloud computing costs and allow you to make informed decisions about your Azure usage.
>
> **[0:55](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=55)** Now, a good way to think about this is to imagine the lights in your home.
>
> **[0:59](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=59)** When you go out for the day, do you leave all the lights on?
>
> **[1:03](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=63)** What about the bulbs?
>
> **[1:05](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=65)** Could you use more energy efficient bulbs to reduce your energy usage?
>
> **[1:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=69)** Do you have more lights in your rooms than you really need?
>
> **[1:13](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=73)** You can apply a similar thought process to your resources in the cloud, and that's where Cost Management and Billing comes in.
>
> **[1:20](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=80)** With Azure products and services, you typically only pay for what you use.
>
> **[1:24](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=84)** So as you create and use Azure resources, you're starting to incur costs.
>
> **[1:30](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=90)** Your app might start with a simple database, an Azure app service, but before long, you're adding in load balancer and key vault, and a whole host of other services.
>
> **[1:40](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=100)** All the time, the costs are creeping up, Now, because it's easy to create and deploy new services within Azure, your costs can jump significantly, and if you haven't put the correct analysis and monitoring in place, then you're going to be in for a nasty surprise.
>
> **[1:55](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=115)** So let's look at what Cost Management and Billing actually allows you to do.
>
> **[1:59](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=119)** Well, for starters, it allows you to perform all of the administrative tasks that we need to do, such as actually paying our bill.
>
> **[2:06](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=126)** It's where we can manage our payment methods and that sort of thing.
>
> **[2:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=129)** It's also where we go to download our cost and usage data.
>
> **[2:13](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=133)** This is the data that's used to generate our monthly invoice.
>
> **[2:16](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=136)** It's comprehensive and shows all of the usage details for all of our services.
>
> **[2:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=141)** Now, because there's so much data here, it also helpfully gives us some data analysis tools that we can use to drill into the data to help us understand it more.
>
> **[2:31](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=151)** Setting spending limits and budgets helps us to manage our spend, and we can even use Cost Management and Billing to help identify opportunities to reduce costs.
>
> **[2:42](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=162)** Now we're going to explore all of these options and features throughout the rest of this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Analogies:** imagine (1), such as (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The cost management methodology
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=0)** - [Instructor] So now I'd like to share with you a simple methodology which you can use to optimize the costs of your cloud infrastructure.
>
> **[0:08](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=8)** In fact, as you'll see, you can use this to help manage costs in all parts of your organization.
>
> **[0:13](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=13)** Now, the first thing to understand is that cost management is an organizational problem and it isn't unique to cloud computing.
>
> **[0:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=21)** You will have to manage costs across all areas of your business.
>
> **[0:25](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=25)** Now, to successfully manage costs, there are a few key things that you need to do to guarantee success.
>
> **[0:31](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=31)** First, it's important to recognize that cost management is an ongoing process.
>
> **[0:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=37)** This isn't something that we do just once and then forget about.
>
> **[0:40](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=40)** We have to embed it in our processes and we have to do this early.
>
> **[0:44](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=44)** You should be thinking about this way before you spend a single penny on cloud resources, so make sure you start early.
>
> **[0:52](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=52)** You also need to be prepared with the proper tools for success.
>
> **[0:56](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=56)** In our case, that's the Azure cost management and billing tools that we'll find in the Azure portal.
>
> **[1:02](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=62)** Accountability is also important.
>
> **[1:04](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=64)** If you have a plan to manage your costs, then it's important that you or someone else in your organization is accountable for this action and takes responsibility for it.
>
> **[1:14](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=74)** Finally, once we have a plan as to how we're going to manage our costs, we have to actually action it.
>
> **[1:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=81)** Now, as I said, this is an organizational problem so it's critical that the key groups within your company are aligned.
>
> **[1:28](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=88)** In most organizations, there are really three key teams or types of team that we need to engage with.
>
> **[1:35](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=95)** First up, we have the finance team.
>
> **[1:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=97)** The finance team are usually responsible for approving budget requests across the organization based on spending forecasts.
>
> **[1:45](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=105)** These are the people that will actually pay the bill and assign costs to appropriate cost centers.
>
> **[1:51](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=111)** The management team are the key business decision makers and they need to understand what's being spent and why.
>
> **[1:59](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=119)** Usually these stakeholders are concerned with the business value, and they may be quite customer focused.
>
> **[2:05](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=125)** Finally, we have the development and infrastructure teams.
>
> **[2:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=129)** Here we have the engineers and developers managing the actual cloud resources on a day-to-day basis, developing services to meet the organization's need.
>
> **[2:18](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=138)** Now, these teams need the flexibility to be able to deliver and to create and deploy the infrastructure that they need in order to deliver the most business value, all within their defined budgets of course.
>
> **[2:30](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=150)** Now, to get the most out of cost management and billing, in Azure there are really four phases.
>
> **[2:35](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=155)** First, we have to have comprehensive upfront planning.
>
> **[2:39](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=159)** This allows us to tailor our cloud usage to specific business requirements.
>
> **[2:45](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=165)** Here we need to be asking ourselves questions like what business problem am I solving?
>
> **[2:50](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=170)** What usage patterns do I expect from my resources?
>
> **[2:53](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=173)** The answer to these questions will help us select the right products and services within Azure.
>
> **[2:58](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=178)** We also need visibility.
>
> **[3:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=180)** People need to be informed about the Azure costs that they're responsible for and for the money that they have spent.
>
> **[3:06](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=186)** The tools in Azure give us this insight and visibility and they can help us to find resources that are underused, remove waste and maximize cost saving opportunities to fully understand your organization's Azure spending you should organize your resources to maximize insight.
>
> **[3:23](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=203)** Good organization helps to manage and reduce costs and hold people accountable for efficient spending in your organization.
>
> **[3:32](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=212)** We also need to make the most of the insights and visibility that we get from the cost management and billing tools to help us optimize our resources and drive down costs.
>
> **[3:41](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=221)** We might consider purchase and licensing optimizations or resizing resources to ensure that we're getting the best value for money.
>
> **[3:49](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=229)** Everyone in the organization must engage in this cost management lifecycle.
>
> **[3:54](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=234)** Be rigorous about this iterative process and make it a key tenant of responsible cloud governance in your organization.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **Code Keywords:** finally, (2), case, (1)
> **Definitions:** is an  (3)
> **Tools:** azure portal (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Managing Costs with Budgets

#### Introducing budgets
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=0)** - [Instructor] So one of the best tools we have available to us for managing costs is something called budgets.
>
> **[0:06](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=6)** Budgets allow us to set target costs for our infrastructure.
>
> **[0:10](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=10)** Not only that, but they allow us to perform actions and trigger alerts based on any conditions that we define.
>
> **[0:17](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=17)** In Azure Cost Management and Billing, a budget is a way to track and manage your cloud spending by setting cost limits or thresholds for your resources.
>
> **[0:27](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=27)** You can use budgets to set cost limits for specific services, resource groups, or subscriptions and receive email alerts when your spending approaches or exceeds those limits.
>
> **[0:39](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=39)** Budgets help you to monitor your cloud costs and avoid unexpected charges while also providing insights into how much you're spending and where you can optimize costs.
>
> **[0:51](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=51)** There are five key parts to defining a budget in Azure.
>
> **[0:54](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=54)** The first thing you need to decide is the scope.
>
> **[0:57](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=57)** Now, if you've seen any of my other courses, then you'll be familiar with scope.
>
> **[1:01](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=61)** It's a little like a filter, and really just determines at what level of the hierarchy the budget is defined.
>
> **[1:08](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=68)** Now, there are three main levels in Azure, but we are only really interested in three of them: the subscription, the resource group, and the resource.
>
> **[1:17](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=77)** You could, for example, create a budget at the subscription level.
>
> **[1:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=81)** This would include all of the costs for all of the resources within the subscription.
>
> **[1:26](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=86)** Alternatively, you might want to apply it at the resource group level.
>
> **[1:30](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=90)** Here, you are creating a budget just for that resource group and the resources that it contains.
>
> **[1:36](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=96)** You could even set the scope to the resource level.
>
> **[1:39](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=99)** In fact, there are lots of options for setting scope, and you can get as granular as you like.
>
> **[1:45](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=105)** In reality, you are likely going to want to create budgets at multiple levels, and at a minimum, I'd certainly recommend creating subscription scopes budgets as well as budgets for individual resource groups.
>
> **[1:57](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=117)** Having said that, it really does depend on how your resources are structured within Azure and your company's goals.
>
> **[2:03](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=123)** After you've set the scope of your budget, you need to decide over what time period the budget runs.
>
> **[2:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=129)** Is it per month, per quarter, or per year?
>
> **[2:12](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=132)** Does it reset monthly?
>
> **[2:14](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=134)** And how long does the budget run for?
>
> **[2:16](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=136)** Next, you need to give the budget a value.
>
> **[2:19](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=139)** How much are you expecting or wishing to spend?
>
> **[2:22](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=142)** Now, this is enough to create a budget, but there are two additional options that you have.
>
> **[2:28](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=148)** You can create alerts.
>
> **[2:30](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=150)** That is, you'll receive an email or notification if your budget amount matches a predefined value or rule.
>
> **[2:38](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=158)** Perhaps you want to be notified when you've spent 75% of your budgeted value.
>
> **[2:43](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=163)** Finally, you can create something called action groups.
>
> **[2:46](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=166)** Now, these are really quite cool, and we'll look at these later on but essentially, they allow you to trigger some action based on a predefined rule, such as calling a Logic app or a web service.
>
> **[2:57](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=177)** You can even invoke a runbook to perform automations within your Azure environment, and this is a great way to turn off or scale down resources to save money.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** for example (1), such as (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### Creating a budget
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=0)** - [Instructor] So, in this demo, we are going to walk through the steps involved in creating a budget.
>
> **[0:05](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=5)** If you want to follow along, then you're going to need an Azure subscription, and you can do that by heading to [azure.com](https://azure.com) and signing up for an account.
>
> **[0:14](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=14)** Okay, so let's switch over to the Azure portal and create our first budget.
>
> **[0:20](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=20)** So, once we're signed into the Azure portal, we need to head to "Cost Management and Billing."
>
> **[0:25](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=25)** Now, the best way to do that is to just search for it here in the search bar.
>
> **[0:31](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=31)** Select "Cost Management and Billing" from the results.
>
> **[0:34](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=34)** On the left-hand menu, select Cost Management.
>
> **[0:38](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=38)** This is where we're going to be spending most of our time during this course.
>
> **[0:42](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=42)** In the left-hand menu under Cost Management, select Budgets.
>
> **[0:47](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=47)** Now here, you will see a list of all the budgets that you've created.
>
> **[0:52](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=52)** There's nothing here at the moment, but once we've created our budget, it will appear in this list.
>
> **[0:57](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=57)** Now, we need to tell Azure which level of scope that we want to work with, so let's select Scope here at the top and select the subscription that we're interested in.
>
> **[1:08](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=68)** Now, if you want to, you can filter down to individual resource groups.
>
> **[1:12](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=72)** I'm going to leave that at the subscription level.
>
> **[1:15](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=75)** So, with our scope selected, let's just click Add in the toolbar at the top.
>
> **[1:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=81)** Now, we've obviously selected our scope on the previous screen, but we can add a filter here as well to narrow the scope of our budget.
>
> **[1:30](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=90)** This means we have more granular control over what's included or excluded from the budget.
>
> **[1:36](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=96)** There are lots of options here, and perhaps you just want to look at certain types of resources, or resources with specific tags.
>
> **[1:44](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=104)** Let's leave this for the time being and just create our budget with the current scope.
>
> **[1:48](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=108)** Next, we need to give our budget a name and select the reset period, that's essentially the time the budget is calculated over, and here, you can select between calendar periods and billing periods, either monthly, quarterly, or yearly.
>
> **[2:06](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=126)** I'm going to leave this as a monthly budget.
>
> **[2:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=129)** Next, we can select the creation date and the expiry date.
>
> **[2:14](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=134)** Again, I'm going to leave these as they are, and this budget is going to run for two years.
>
> **[2:20](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=140)** Finally, we need to set the budget amount.
>
> **[2:23](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=143)** Interestingly, we get a, you are given a suggested amount based on the consumption of your resources, but I'm going to set this at 50 pounds.
>
> **[2:31](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=151)** Click Next to move to the next screen.
>
> **[2:34](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=154)** Now, we need to set our alert preferences.
>
> **[2:36](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=156)** Now, I want to be alerted if my forecasted spend hits 50% of my budget, and this will give me the time I need to make any changes to my spending before things get out of hand.
>
> **[2:49](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=169)** Make sure you enter the correct email address, and that's all you need to create a simple budget, and then you should then see the budget in the budget list.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), switch (1), finally, (1)
> **UI Navigation:** select the (3), in the toolbar (1)
> **CLI Commands:** make (2)
> **Tools:** azure portal (2)
> **URLs:** [azure.com](https://azure.com) (1)
> **Speakers:** - [instructor] (1)

#### Automating actions with budgets
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=0)** - [Instructor] So now you've seen how easy it is to create a budget.
>
> **[0:03](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=3)** Let's look now at how we can trigger automatic actions.
>
> **[0:07](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=7)** Log into your Azure portal and go to the cost management and billing page.
>
> **[0:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=11)** Click the budget option on the left hand menu and then select the budget that we created earlier.
>
> **[0:18](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=18)** Click edit budget in the toolbar, and then click set alerts.
>
> **[0:23](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=23)** Now this budget is already configured to send an email alert when we hit 50% of our forecasted budget.
>
> **[0:30](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=30)** But what if we wanted to perform some additional actions?
>
> **[0:33](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=33)** Well, this is where action groups come in.
>
> **[0:36](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=36)** Let's create an action group now.
>
> **[0:38](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=38)** To create an action group, select manage action groups.
>
> **[0:43](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=43)** Now, as we don't have any action groups defined so let's click create action group.
>
> **[0:48](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=48)** Now we need to provide a subscription and resource group and give our action group a name.
>
> **[0:54](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=54)** I'm going to call this HPlus Action.
>
> **[0:57](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=57)** Then click next.
>
> **[0:59](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=59)** Now we can have Azure notify us when the action group is run.
>
> **[1:03](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=63)** I'm going to select email from the notification type.
>
> **[1:07](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=67)** Select the email checkbox and then provide my email address.
>
> **[1:12](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=72)** I also need to give this notification a name.
>
> **[1:16](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=76)** You could also get notified by SMS via the Azure mobile app or even by a voice call.
>
> **[1:22](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=82)** Click next and we now get to configure our actions.
>
> **[1:26](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=86)** Now, if you select the action type dropdown, you'll see that there are several different action types that we can run.
>
> **[1:33](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=93)** For this example, I'm going to select the Azure Logic app.
>
> **[1:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=97)** Again, I need to give this action a name.
>
> **[1:41](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=101)** In the pane that slides out from the right hand side, I also need to make sure that my Logic app is selected.
>
> **[1:48](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=108)** Click okay, and that's it.
>
> **[1:50](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=110)** As this is a group of actions, I could include other actions as well but I'm going to keep this just with the Logic app.
>
> **[1:58](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=118)** Finally, click review and create, and then click Create.
>
> **[2:05](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=125)** Back on our budget screen, we can now use the action group that we've created.
>
> **[2:10](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=130)** Next to our forecasted 50% alert condition, select the HPlus action from the dropdown.
>
> **[2:17](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=137)** Finally, with that done, simply click save.
>
> **[2:19](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=139)** So let's make sure we're clear on what we mean by actions by running through a common scenario.
>
> **[2:25](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=145)** Let's say we've created a budget to keep track of costs of the virtual machines in one of our subscriptions and let's imagine that we've set this budget at a hundred dollars.
>
> **[2:35](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=155)** Now we can configure this budget to trigger an action group when certain conditions are met.
>
> **[2:41](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=161)** Perhaps when we've hit 75% of our budget amounts.
>
> **[2:44](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=164)** This action group can be set up to perform various different actions, such as calling and Azure Logic app or Azure function.
>
> **[2:52](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=172)** It can even call an automation runbook which allows you to perform very advanced tasks such as deploying new resources.
>
> **[2:59](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=179)** It could also call webhooks, which are web URLs exposed as part of an API.
>
> **[3:04](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=184)** We could use this action group to shut down our virtual machines and stop our costs increasing.
>
> **[3:10](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=190)** Now, an important thing to point out here is an action groups are only supported for subscription and resource groups scopes so won't work if your budget is created at the resource level.
>
> **[3:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=201)** Now, I'm not expecting you to know how to do any of this complicated automation stuff which is why I've kept this example quite simple and we've not gone into what happens when those actions are executed.
>
> **[3:32](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=212)** Just know that you can create actions based on your budgets.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), finally, (2), type. (1), function (1)
> **UI Navigation:** select the (5), dropdown (2), go to (1), in the toolbar (1), checkbox (1)
> **Analogies:** such as (2), imagine (1)
> **Prerequisites:** configure (2), set up (1)
> **CLI Commands:** make (2)
> **Env Vars:** sms (1), api (1)
> **Definitions:** is a  (1), is an  (1)
> **Tools:** azure portal (1)

#### Cost management best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=0)** - [Instructor] We've now seen how we can create budgets and use them to perform actions.
>
> **[0:05](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=5)** Now is probably a good time to look at some best practice guidance that you can use to ensure that you get off to a good start on your cost management journey.
>
> **[0:14](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=14)** Cost management is a big area, so I really want to focus here on a few key things that you really need to focus on.
>
> **[0:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=21)** The first thing we need to do is talk about planning.
>
> **[0:24](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=24)** You need to make sure that when you're planning your infrastructure and services, that you consider any cost implications.
>
> **[0:32](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=32)** Is the Azure subscription offer correct for your solution?
>
> **[0:35](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=35)** There are different offers available, ranging from pay-as-you-go through to enterprise agreements, or offers available through Microsoft partners.
>
> **[0:43](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=43)** The offer you have can have a big impact on the price you pay for resources.
>
> **[0:47](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=47)** What about the resources you're planning on using?
>
> **[0:51](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=51)** Often in Azure, there are many different resource types that can be used to achieve the same goal.
>
> **[0:57](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=57)** Choosing wisely here can help you keep costs down.
>
> **[1:01](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=61)** As an example, CosmosDB, which is a globally distributed database, can be expensive, whereas an Azure storage account is relatively cheap and could, in the right circumstances, achieve the same thing.
>
> **[1:15](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=75)** How you organize your resources can greatly improve your ability to monitor and report over their costs.
>
> **[1:22](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=82)** As we've seen already, our budgets, like many other things in Azure, are managed by resource scope, so it's important that we structure our subscriptions and resources correctly, as it makes it easier to manage and report over.
>
> **[1:36](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=96)** This means we're likely to going to need multiple subscriptions.
>
> **[1:39](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=99)** H+ Sport have several subscriptions, one for development, one for testing, and one for production.
>
> **[1:45](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=105)** You can make use of dev test subscription offers that offer a reduced cost for development workflows, although these workflows can't be used for production.
>
> **[1:56](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=116)** Now not all resources fit into a neat bucket, and it's common to have shared resources that are used by different teams or cost centers.
>
> **[2:04](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=124)** Or maybe get used across multiple subscriptions, perhaps Active Directory or an email service would fall into this category.
>
> **[2:12](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=132)** You can tag these resources and mark them as shared, which helps you identify these on the invoice and apportion the costs appropriately.
>
> **[2:20](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=140)** Finally, make sure you size your virtual machines correctly.
>
> **[2:24](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=144)** This is where most people go wrong and end up incurring significant additional costs.
>
> **[2:30](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=150)** You should continually review your virtual machines to make sure that they are deployed at the right size to meet the needs of your workload and make sure that they're turned off when they're not needed.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Definitions:** is a  (2)
> **Code Keywords:** finally, (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Analyzing Costs with Reporting

#### Introducing billing
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=0)** - [Instructor] Let's look now at how you can analyze your costs and report over the cost management data within Azure.
>
> **[0:07](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=7)** Ultimately, when you receive an invoice at the end of the month, somebody needs to pay that.
>
> **[0:12](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=12)** And if you're like most organizations, that cost is going to have to be attributed to different teams, or cost centers within the organization, and that's the focus of this section.
>
> **[0:22](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=22)** Let's start by talking about billing and the relationship between your invoice, or invoices, and the Azure subscription that you have in your accounts.
>
> **[0:32](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=32)** When you first create an Azure subscription, a billing account is created.
>
> **[0:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=37)** A billing account provides a centralized and comprehensive view of your organization's Azure spending, making it easier to manage and optimize your cloud costs.
>
> **[0:48](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=48)** You use this billing account to manage invoices, make payments, and track your spending.
>
> **[0:54](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=54)** You might have access to multiple billing accounts, depending on how your company manages their Azure Cloud infrastructure.
>
> **[1:01](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=61)** Perhaps you have a personal subscription, as well as access to Azure through your organization's enterprise agreements, Microsoft Customer Agreement, or Microsoft Partner Agreement.
>
> **[1:12](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=72)** For each of these scenarios, you would have a separate billing account.
>
> **[1:17](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=77)** Let's take a look at how this works by using a Microsoft Customer Agreement as an example.
>
> **[1:23](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=83)** We're using the Microsoft Customer Agreement here, as it's the most common scenario.
>
> **[1:27](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=87)** While this may differ for other account types, the principles here remain the same.
>
> **[1:32](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=92)** So right at the top we, have the billing account.
>
> **[1:35](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=95)** Now, your billing account might contain one, or more billing profiles.
>
> **[1:40](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=100)** These profiles let you manage your invoices and payment methods.
>
> **[1:45](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=105)** Now, each billing profile contains one, or more invoice sections, and these let you organize costs on the billing profile's invoice.
>
> **[1:55](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=115)** If you have different subscriptions, perhaps for different teams in your organization, then you can use this billing profile to separate, or isolate costs for a particular cost center within your organization.
>
> **[2:08](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=128)** So we use a billing profile to manage invoices and payment methods.
>
> **[2:13](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=133)** A monthly invoice is generated at the beginning of the month for each billing profile in your account.
>
> **[2:19](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=139)** This invoice contains charges for all Azure subscriptions and other purchases from the previous month.
>
> **[2:26](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=146)** Now, a billing profile is automatically created for your billing account when you create your first Azure subscription, and it contains a single invoice section.
>
> **[2:36](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=156)** You can of course create additional sections to easily track and organize costs based on your needs.
>
> **[2:42](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=162)** Perhaps you want to split costs out by project, department, or development environment.
>
> **[2:47](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=167)** You'll see these sections on the billing profile's invoice reflecting the usage of each subscription and purchases you've assigned to it.
>
> **[2:56](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=176)** So each billing profile creates a monthly invoice, and that of course needs to be paid.
>
> **[3:01](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=181)** With that, each profile can have a different payment method, and Azure supports three different payment methods.
>
> **[3:08](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=188)** Firstly, we have Azure credits.
>
> **[3:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=191)** Some Azure offers include free credits.
>
> **[3:14](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=194)** These are automatically applied to any eligible charges on your invoice, reducing the amount that you need to pay.
>
> **[3:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=201)** Some accounts are approved for payment through bank transfer.
>
> **[3:25](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=205)** This probably applies more to enterprise agreements, and this will be subject to a credit check.
>
> **[3:31](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=211)** If this payment method is available to you, then the instructions for payment are given on the invoice.
>
> **[3:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=217)** Finally, the most common payment method is credit card, and if you sign up for your subscription through the Azure website, then this is the payment method that you will use.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Downloading billing data
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=0)** - [Instructor] So in this demo we're going to be looking at how you actually download all of your important billing data.
>
> **[0:06](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=6)** When it comes to billing data, there are two things that you have access to.
>
> **[0:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=11)** Firstly, you have your Azure invoice.
>
> **[0:13](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=13)** That's key for your own financial records.
>
> **[0:16](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=16)** Alongside this, you have the Azure uses and charges file.
>
> **[0:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=21)** Now, this is a detailed breakdown of your Azure charges on what's used to calculate your invoice totals.
>
> **[0:29](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=29)** This is very useful in identifying areas where you can optimize costs, but it's important to have this file to validate and ensure that the charges on your invoice are correct.
>
> **[0:40](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=40)** And in this demo, I'm going to show you where you can get these files.
>
> **[0:44](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=44)** So here we are in the Azure Portal in the Cost Management + Billing section.
>
> **[0:48](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=48)** On the left hand side, under Billing, select Invoices.
>
> **[0:53](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=53)** On this screen, you can see your Default Payment Method, details of your next billing cycle and a list of invoices, typically for the last 12 months.
>
> **[1:05](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=65)** Now, this is where things get a little interesting for us.
>
> **[1:08](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=68)** You'll notice that while I do have invoices, they are all for zero or very small amounts, and this is because I have an Azure subscription that includes free credits and I generally don't incur any charges.
>
> **[1:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=81)** So looking at these invoices isn't going to be that helpful to us.
>
> **[1:25](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=85)** Now, fortunately I can show you some sample invoices, helpfully provided by Microsoft, and we'll look at those shortly.
>
> **[1:33](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=93)** Okay, so this list shows all of the invoices and we can filter this list by subscription, status, or dates.
>
> **[1:42](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=102)** Now, you're probably going to want copies of your invoices sent directly to your finance team.
>
> **[1:47](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=107)** And to do that, you click Receive Invoice by Email in the toolbar.
>
> **[1:52](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=112)** Here, just select the subscription that you are interested in, change the status to true and enter an email, or some additional recipients.
>
> **[2:06](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=126)** Click Save and then your invoices will be automatically emailed each month.
>
> **[2:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=131)** You can also download this list of invoices as a CSV file by clicking the Export to CSV button.
>
> **[2:18](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=138)** If you want to download multiple invoices, just select them in the list and then click Download in the toolbar.
>
> **[2:26](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=146)** If you select an individual invoice in the list then you get an invoice overview screen.
>
> **[2:32](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=152)** And here, we have a few more options.
>
> **[2:35](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=155)** We can download the invoice by selecting the Download link, or we can retrieve our usage file by clicking Prepare Azure Usage File.
>
> **[2:44](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=164)** After a few seconds, we get the option to download the file.
>
> **[2:48](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=168)** This is a large file with a lot of data, so it can be quite difficult to make sense of.
>
> **[2:53](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=173)** So let's look at that next.

> [!info]- Semantic Content
>
> **UI Navigation:** in the toolbar (2), select the (1)
> **Code Keywords:** this, (1), let (1)
> **Env Vars:** csv (2)
> **Exercise Files:** download the (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### Understanding your billing data
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=0)** - [Instructor] Okay, so we've seen where we can download our invoices and our usage and charges files, but if you've looked at these files, you'll see they're a little complicated.
>
> **[0:08](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=8)** Let's dive into them a little more and see if we can understand them a little better.
>
> **[0:12](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=12)** Let's start first by looking at the invoice.
>
> **[0:15](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=15)** Now, this is a sample invoice provided by Microsoft.
>
> **[0:18](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=18)** At the top of this first page, we have the account information section, and this shows information about your profile and subscription.
>
> **[0:25](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=25)** Here is where you'll find the invoice number, invoice date, and payment, and method details, all pretty standard stuff for an invoice.
>
> **[0:33](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=33)** Next up, we have the invoice summary, which lists the total transaction amounts since you last billing period and your current usage charges.
>
> **[0:42](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=42)** This example shows the total cost for this period for a subscription called Production Storage.
>
> **[0:48](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=48)** We can see the previous balance, details of any payments made, as well as any adjustments.
>
> **[0:54](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=54)** Finally, at the bottom of the invoice, we have the usage charges section, and you can think of this as the line items of the invoice, as it gives you the breakdown of your total cost.
>
> **[1:05](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=65)** As your services are metered, this means you pay for every unit that you consume.
>
> **[1:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=71)** That could be units of time, volume of storage, or some other measure.
>
> **[1:15](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=75)** Some services include a free amount.
>
> **[1:18](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=78)** This section shows all of this information and offers a good high level view of your spend.
>
> **[1:23](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=83)** If you want to dig deeper into these charges, then we need to look at the Azure charges usage file that we downloaded, as this contains all of the data that goes to make up this invoice.
>
> **[1:34](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=94)** So here we are in Excel and I've opened the usage file for one of my invoices.
>
> **[1:39](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=99)** Now, straight away you can see that this file contains a lot of data.
>
> **[1:44](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=104)** On the left hand side, we have details such as the billing period and the subscription details.
>
> **[1:50](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=110)** Over to the right hand side, we have details of the resource, such as resource ID, resource name, and resource group.
>
> **[1:57](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=117)** If you wanted to, you could easily filter this data to see how much you're spending on a particular resource, and you could use this file to identify where you could save cost.
>
> **[2:08](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=128)** However, that's not really what this file is about.
>
> **[2:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=131)** We really want this file as a way to validate and check the data on our invoice.
>
> **[2:17](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=137)** If you look at columns T, U, and V, they show us the units used, the price per unit, and the total cost.
>
> **[2:27](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=147)** So if we were to add up all of the values in the total cost column, this should exactly match what is shown on our invoice.
>
> **[2:34](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=154)** If you wanted to, you could then filter this file in different ways to check each individual line item.
>
> **[2:41](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=161)** If all of the numbers match with your invoice, then great, but if not, you should really contact Microsoft for guidance.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Understanding scope
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=0)** - [Instructor] Most organizations have multiple Azure subscriptions, so we need a way to be able to limit our reporting so that we're focusing only on the relevant parts of our data, and for that, we use something called scope.
>
> **[0:13](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=13)** Scope is the level at which we can view and manage costs for our Azure resources.
>
> **[0:18](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=18)** We've already talked about scope in this course, but I want to go into it in a little more detail to make sure that we really understand it.
>
> **[0:25](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=25)** Azure resources can be organized into different scopes, which can be thought of as levels of hierarchy.
>
> **[0:32](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=32)** The scopes available in Azure cost management include management group scope.
>
> **[0:38](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=38)** This is the highest level of hierarchy in Azure.
>
> **[0:41](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=41)** It represents a collection of subscriptions that share a common set of policies, governance, and access control.
>
> **[0:48](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=48)** We have subscription scope.
>
> **[0:50](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=50)** This represents a container for Azure resources and is used to separate and manage costs for different workloads, projects, or departments within an organization.
>
> **[1:01](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=61)** And resource group scope.
>
> **[1:03](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=63)** This represents a single resource within a subscription such as a virtual machine or a storage account.
>
> **[1:10](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=70)** Let's jump back to H+ Sports and look at how their environment is structured.
>
> **[1:15](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=75)** So H+ have a single Azure tenant.
>
> **[1:17](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=77)** They use a management group to manage all of their Azure subscriptions.
>
> **[1:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=81)** If you've watched my course on Azure policy, you'll already be familiar with this.
>
> **[1:26](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=86)** The management group is the top level of our scope hierarchy.
>
> **[1:30](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=90)** Now within the management group, they have two subscriptions, a test subscription and a production subscription.
>
> **[1:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=97)** And these subscriptions contain our resource groups.
>
> **[1:40](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=100)** And this is where our individual resources live.
>
> **[1:43](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=103)** When viewing costs in Azure cost management, you can choose to view costs at any of these levels of scope.
>
> **[1:50](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=110)** For example, we could set our scope at the management group level, in which case we would be reporting over the data for all subscriptions and all resources across the organization.
>
> **[2:01](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=121)** Alternatively, we could set the scope at the subscription level.
>
> **[2:04](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=124)** Then we would of course only see data from within that subscription.
>
> **[2:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=129)** The same applies to the resource groups and resources themselves, further limiting the scope of the data that we can see.
>
> **[2:16](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=136)** By managing costs at the appropriate scope, you can gain more detailed insights into your spending and optimize costs more efficiently.
>
> **[2:24](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=144)** For example, you might identify a particular subscription or resource group that is consuming a large portion of your budget and take steps to reduce costs in that area.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1)
> **Code Keywords:** let (1), this. (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Analyze costs with built-in views
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=0)** - [Instructor] Cost management and billing provides us a way to analyze and monitor our costs with something called built-in views.
>
> **[0:07](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=7)** Let's take a look at that next.
>
> **[0:10](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=10)** So here we are in the Azure portal and I'm already in the Cost Management section.
>
> **[0:15](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=15)** On the left-hand side, select Cost Analysis.
>
> **[0:18](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=18)** Now you'll notice that there's also a preview version of this tool available, which offers more advanced features, but it's not considered generally available at the moment.
>
> **[0:28](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=28)** So if you're following along, you should now see a screen similar to this.
>
> **[0:32](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=32)** We have a filter bar across the top with several colorful charts underneath.
>
> **[0:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=37)** This is showing the accumulated costs for the current billing period.
>
> **[0:42](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=42)** Now again, I'm not incurring any actual costs, but that doesn't matter much at the moment.
>
> **[0:48](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=48)** So you can see these accumulated costs give me some indication of what I can expect as a forecasted cost on my next invoice.
>
> **[0:56](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=56)** Now I could also change the time period.
>
> **[0:59](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=59)** If I select here, I can select from a range of options, including previous invoices for Azure services, previous invoices for marketplace and spot instances, and various relative calendar dates.
>
> **[1:13](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=73)** Now if I select the View dropdown, these are the built-in views that we have available.
>
> **[1:20](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=80)** There are five built-in views available: Accumulated Costs, Cost by Resource, Daily Cost, Cost by Service and Invoice Details.
>
> **[1:30](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=90)** There are also some Preview views available as well.
>
> **[1:34](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=94)** Now if I select Cost by Service as an example, the view now changes, and these graphs show me the breakdown of cost across my various different services.
>
> **[1:45](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=105)** I have Azure DNS, Storage Services, Logic Apps and Bandwidth Charges.
>
> **[1:51](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=111)** Now all of this is highly customizable.
>
> **[1:53](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=113)** I can change the chart type and adjust the granularity.
>
> **[1:58](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=118)** I can also add filters to really drill into the detail of the data.
>
> **[2:02](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=122)** Now you can take these built-in views, customize them and save them as personal views.
>
> **[2:08](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=128)** Once you have the data in the shape that you like it, click Save As in the toolbar, give the view a name and then click Save.
>
> **[2:15](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=135)** You'll notice now that your new view is saved in the views dropdown.
>
> **[2:20](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=140)** Now one of my favorite features is to set up an email subscription.
>
> **[2:24](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=144)** Make sure the view is selected and then click the Subscribe button in the toolbar.
>
> **[2:29](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=149)** Fill in the required recipient's email address and set your schedule and then everyone on the list will receive an email with this view's data.
>
> **[2:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=157)** This is a great way to keep everyone aware of what the current forecasted spend is and helps keep everybody accountable.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (2), in the toolbar (2), select the (1)
> **Code Keywords:** let (1), this. (1)
> **CLI Commands:** make (1)
> **Env Vars:** dns (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)


### 5. 4. Reducing Costs with Reservations

#### Introducing reservations
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=0)** - [Instructor] So you've now received your invoice, know how to download your charging files, now you want to reduce your costs.
>
> **[0:07](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=7)** One of the best ways we have of doing that in Azure is taking advantage of a feature called Reservations.
>
> **[0:13](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=13)** Reservations offer us a way to save money by pre-purchasing Azure services.
>
> **[0:20](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=20)** Now, in order to do this, we need to commit to a one or three year plan for multiple products.
>
> **[0:28](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=28)** Committing like this allows you to get a discount on the resources that you use and this can lead to a reduction in costs of up to 80% compared to pay-as-you go prices.
>
> **[0:39](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=39)** Now obviously that depends on the type of resource that we're talking about.
>
> **[0:43](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=43)** Now it's important to understand that a reservation is just a billing discount and it has no effect on the actual resources themselves.
>
> **[0:52](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=52)** After you've purchased a reservation, the discount then automatically applies to all eligible resources.
>
> **[1:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=60)** Now you can pay for a reservation upfront or monthly and the total cost for upfront or monthly payments is the same.
>
> **[1:08](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=68)** You don't get charged any extra fees for paying monthly.
>
> **[1:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=71)** So which resources are supported by reservations?
>
> **[1:15](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=75)** And how much can you really save?
>
> **[1:17](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=77)** Well, the resource types that can be reserved are subject to change, but at the moment, you can reserve about 26 different types of resource.
>
> **[1:25](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=85)** There are some common resource types here as well as some more specialized services.
>
> **[1:30](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=90)** Reservations for virtual machines can save you up to 80% compared to the normal pay-as-you-go rates.
>
> **[1:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=97)** There are also many Azure Storage services that can be reserved, such as SQL, Storage Accounts, Cosmos DB and Redis Cache.
>
> **[1:45](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=105)** The amount you save changes depending on the resources, but as an example, an Azure SQL Reservation can save a whopping 80% and you can save at least 65% on your Cosmos DB costs.
>
> **[1:59](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=119)** App Service is also available for reservation.
>
> **[2:02](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=122)** Now App Service is a service that can get really quite expensive quite quickly, especially when you have multiple instances, so reserving these can reduce costs by up to 55%.
>
> **[2:14](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=134)** By carefully selecting reservations, you can drastically reduce your overall Azure expenditure.
>
> **[2:20](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=140)** You just need to commit to a one year or a three year deal.
>
> **[2:24](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=144)** But how do you know which services to reserve?
>
> **[2:28](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=148)** Let's look at that next.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), let (1)
> **Env Vars:** sql (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Understanding reservation recommendations
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=0)** - [Instructor] There are two ways that we could use to work out which reservation to purchase.
>
> **[0:05](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=5)** We could manually analyze all of our usage data, looking at what services we spend our money on.
>
> **[0:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=11)** We could then compare that with the cost of reserved instances.
>
> **[0:15](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=15)** Now, while that's possible, it's going to be quite labor intensive, and very difficult to get right.
>
> **[0:22](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=22)** Alternatively, we could let Microsoft do the work with a feature called reservation recommendations.
>
> **[0:28](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=28)** These recommendations are automatically created by Azure based on your resource usage.
>
> **[0:34](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=34)** Microsoft is actively monitoring our usage, and looking for ways to save us money.
>
> **[0:39](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=39)** Now, these recommendations are available in several different places for virtual machine recommendations.
>
> **[0:45](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=45)** These are available in Azure Advisor.
>
> **[0:48](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=48)** We can also see and purchase reservation recommendations in the reservation purchase experience in the Azure portal.
>
> **[0:57](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=57)** We can view recommendations in the cost management Power BI app, although that's not something we'll cover in this course, and we can also see these in Azure API.
>
> **[1:07](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=67)** So let's look at how Azure creates these recommendations.
>
> **[1:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=71)** Now, the first thing that happens is that the recommendations engine looks at the hourly usage for all of our Azure resources over the last seven, 30 and 60 days.
>
> **[1:24](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=84)** And based on this data, the engine then simulates the cost of running these resources without reservations.
>
> **[1:31](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=91)** This gives a forecasted cost based on our actual usage.
>
> **[1:35](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=95)** It then reruns this process, but with the reservations pricing model applied to work out how much you might save, it also simulates using different quantities of resource to try and identify the best recommendations to minimize cost.
>
> **[1:51](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=111)** Now, this is all done using advanced machine learning, and this model eventually generates some recommendations, which are what we see in the portal.
>
> **[2:01](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=121)** Now, this process is ongoing, but it's important to realize that if your resources are shut down regularly, then these simulation won't have enough usage data to work with and as a result, it won't generate any recommendations for that resource type.
>
> **[2:17](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=137)** It can also take some time before Azure generates recommendations for you.
>
> **[2:21](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=141)** So if you don't see any yet, don't panic.
>
> **[2:26](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=146)** Now, let's look in Azure at where we can find these recommendations.
>
> **[2:30](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=150)** So here we are in the Azure portal.
>
> **[2:33](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=153)** Now, the easiest way to find reservation recommendations is by using Azure Advisor.
>
> **[2:40](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=160)** Just type advisor into the search bar, and select Azure Advisor from the list.
>
> **[2:47](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=167)** Select Cost in the left-hand menu to see the cost recommendations.
>
> **[2:55](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=175)** Now, I'm not going to be able to show you any actual recommendations from this screen.
>
> **[3:01](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=181)** The reason for this is simply that there aren't any.
>
> **[3:05](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=185)** I'm already following all of the cost recommendations for my account and there aren't any recommendations for me to purchase.
>
> **[3:13](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=193)** If there were some recommendations, then I would expect them to look like this.
>
> **[3:18](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=198)** This screen shows me three recommendations that impact a total of six resources.
>
> **[3:25](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=205)** And as you can see, by following these recommendations, I could save several thousand pounds every year.
>
> **[3:31](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=211)** If I were to select the middle recommendation here, I would see a screen like this.
>
> **[3:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=217)** From here, I can set each individual recommendation.
>
> **[3:42](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=222)** Here, it's recommending that I purchase a reservation, so it would take me to the reservation system where I can complete that purchase.
>
> **[3:51](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=231)** We're going to look at reservations more in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (2), type. (1)
> **CLI Commands:** find (2)
> **Tools:** azure portal (2)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Creating reservations
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=0)** - [Instructor] Let's look now at how we can create reservations.
>
> **[0:04](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=4)** Now, in this demo, we're going to be looking at how you create reservations in the Azure portal.
>
> **[0:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=9)** But while we're not covering it specifically, it's important to understand that you can also create them using Azure PowerShell, the Azure CLI, or the Azure API.
>
> **[0:19](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=19)** Now, these tools provide much more flexibility and automation for managing reservations at scale.
>
> **[0:26](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=26)** So, here we are in the Azure portal.
>
> **[0:28](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=28)** So, let's navigate to the Reservations page.
>
> **[0:31](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=31)** Now, you can do this by clicking on the Reservations link in the left-hand menu, or if it's not there, searching for reservations in the search bar.
>
> **[0:41](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=41)** Now, if you have any existing reservations, then you'll see those listed on this screen.
>
> **[0:47](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=47)** To add a new reservation, click the Add button in the toolbar.
>
> **[0:53](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=53)** Now we just need to select the type of reservation that we want to create.
>
> **[0:57](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=57)** Now, Azure offers reservations for virtual machines, SQL databases, Cosmos DB, and much, much more.
>
> **[1:05](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=65)** So, choose the type of reservation that best fits your need.
>
> **[1:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=69)** I'm going to choose App Service for this example.
>
> **[1:14](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=74)** We then need to choose the subscription that the reservation will be associated with.
>
> **[1:20](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=80)** If you have multiple subscriptions, make sure you select the correct one here.
>
> **[1:25](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=85)** Now, you can't use a reservation across multiple subscriptions, so it only gets applied to resources in the subscription that you select at this point.
>
> **[1:34](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=94)** Select the scope of the reservation next.
>
> **[1:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=97)** This is where you choose which resources the reservation will apply to.
>
> **[1:42](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=102)** Most of the time, you'll want to leave this as it is.
>
> **[1:45](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=105)** You could, though, choose to apply the reservation at the subscription level, resource group level, or individual resource level.
>
> **[1:52](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=112)** Note that the available scope options may vary depending on the type of reservation that you are creating.
>
> **[1:59](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=119)** Next, choose the term of the reservation that you want to see.
>
> **[2:02](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=122)** This is how long the reservation will last, and Azure offers one-year and three-year reservation terms.
>
> **[2:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=129)** This filters the list to show only your applicable options.
>
> **[2:14](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=134)** We can also search by region and by billing frequency.
>
> **[2:23](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=143)** Once you've selected the reservation that you want to purchase, just click Add to Cart.
>
> **[2:30](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=150)** In the cart, you can now change the billing frequency, if you need to, and adjust the quantity of reservations that you want to make.
>
> **[2:39](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=159)** Review the reservation details and make sure everything is correct.
>
> **[2:43](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=163)** If everything looks good, click the Buy button to complete the reservation purchase.
>
> **[2:49](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=169)** I'm not actually going to buy this, but once the reservation is created, it will be listed on the Reservations page.
>
> **[2:57](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=177)** You can view details about the reservations such as the coverage start and end dates, the quantity of reservations, and the scope of the reservations.
>
> **[3:05](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=185)** Overall, reservations in Azure provide a powerful way to manage costs and optimize your resource usage.
>
> **[3:12](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=192)** By taking advantage of reservations, you can ensure that you have the capacity you need to run your workloads while also saving money on your Azure bills.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (3), navigate to (1), in the toolbar (1)
> **CLI Commands:** make (3)
> **Code Keywords:** let (2), this, (1)
> **Env Vars:** cli (1), api (1), sql (1)
> **Tools:** azure portal (2), powershell (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 6. Conclusion

#### What's next with Azure management?
> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=0)** - [Instructor] Managing costs is an everyday part of running a successful business, with cloud computing, this can sometimes feel daunting as costs can be difficult to identify and monitor.
>
> **[0:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=11)** As your cost management and billing helps us solve this challenge but it's not an easy tool to master.
>
> **[0:17](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=17)** Before we talk about your next steps let's quickly review what we've covered in this course.
>
> **[0:22](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=22)** We started off by looking at the cost management methodology.
>
> **[0:25](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=25)** Cost management is an ongoing iterative process that aims to solve this challenging organizational problem.
>
> **[0:32](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=32)** This is not something that can be solved by you alone and it will acquire input and commitment from all areas of your business.
>
> **[0:39](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=39)** We then looked at budgets.
>
> **[0:41](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=41)** Budgets are the first place to start when trying to manage your costs, as they clearly define your expectation what you are willing to spend on particular resources or services.
>
> **[0:51](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=51)** Now, alongside these budgets, we use action groups and alerts to drive automations and notifications.
>
> **[0:57](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=57)** These letters respond quickly as certain financial triggers are hit.
>
> **[1:01](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=61)** And finally, we looked at reservations.
>
> **[1:04](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=64)** Reservations allow us to pre-purchase Azure services at a discounted rate.
>
> **[1:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=69)** Microsoft automatically makes reservation recommendations for us based on our usage but to take advantage of them, you need to be proactive.
>
> **[1:18](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=78)** So what about next steps?
>
> **[1:20](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=80)** To get the most out of cost management and billing, it's really important to make sure that your resources are structured in a logical way.
>
> **[1:27](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=87)** Try and isolate different cost centers in their own subscriptions.
>
> **[1:31](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=91)** You can have as many subscriptions as you need and each subscription will receive its own invoice.
>
> **[1:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=97)** Make use of tags.
>
> **[1:39](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=99)** You can tag resources and resource groups with helpful identifiers or cost center codes.
>
> **[1:44](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=104)** Again, this will make things more easily identifiable in the reporting.
>
> **[1:48](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=108)** You should set up your own reporting views in cost management analytics to view the data in a way that makes sense to you.
>
> **[1:56](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=116)** You can use this to help identify areas where costs are increasing.
>
> **[2:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=120)** And finally, you should work with the development teams in your company to reduce waste.
>
> **[2:06](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=126)** This can include turning off unused resources or scaling down over provision services.
>
> **[2:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=131)** And remember there is no one size fits all solution here that is going to help you drive down your Azure costs but the data is there to help you make the right decisions.
>
> **[2:22](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=142)** We've only just skimmed the surface of what's available within cost management.
>
> **[2:26](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=146)** But I hope you've seen enough to make your first steps and I wish you luck on the rest of your journey.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Keywords:** finally, (2), let (1)
> **Definitions:** is an  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[James Millar]]

## Skills Covered

- Cost Management
- Microsoft Azure

## Path Context

### In [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]
← [[Manage Storage in Azure]] | **8 of 8**

## Appears In

- [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]

## Related Courses

_Courses sharing skills:_

- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[AI Pricing and ROI- A Technical Breakdown]] — Cost Management
- [[Azure DevOps for Beginners]] — Microsoft Azure
- [[Azure Storage Essential Training (2021)]] — Microsoft Azure

---

[↑ Back to top](#)