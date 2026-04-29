---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: finops-essentials-for-cloud-deployments
url: "https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments"
duration_minutes: 151
duration: 2h 31m
level: Intermediate
updated: 10/30/2025
learners: 8169
skills:
  - System Deployment
  - Financial Operations
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHaZo3bXXOvxw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1666118840440?e=2147483647&amp;v=beta&amp;t=5tcfeftYvSQXg6Q39pNukVup4iH_gKm11UNPj6v2uOs"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Cloud Strategy Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[Cloud for Business- Developing a Cloud Center of Excellence]]'
next_courses:
  - '[[Including Sustainability in Your Cloud Strategy (2022)]]'
path_nav: '[{"path":"Cloud Strategy Professional Certificate by LinkedIn Learning","position":8,"total":9,"prev":"Cloud for Business- Developing a Cloud Center of Excellence","next":"Including Sustainability in Your Cloud Strategy (2022)"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/system-deployment
  - skill/financial-operations
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/FinOps%20Essentials%20for%20Cloud%20Deployments.md)

![FinOps Essentials for Cloud Deployments](https://media.licdn.com/dms/image/v2/C560DAQHaZo3bXXOvxw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1666118840440?e=2147483647&amp;v=beta&amp;t=5tcfeftYvSQXg6Q39pNukVup4iH_gKm11UNPj6v2uOs)

# FinOps Essentials for Cloud Deployments

> FinOps sits at the intersection of finance and cloud operations, where cross-functional teamwork is essential for success. When it comes to cloud computing, FinOps managers are responsible for overseeing cloud costs and building teams across engineering, product, finance, and more. In this course, instructor David Linthicum gives an overview of the basics of cloud FinOps, collaborating with ever-c

> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments) | 2h 31m | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Introduction to FinOps
  - What you should know
- [**1. FinOps Introduction**](#1-finops-introduction) (8 videos)
  - Understanding FinOps and its importance
  - Business need for FinOps for cloud computing
  - Defining cloud computing value and metrics
  - Case study: Cloud budget overage
  - Case study: Multicloud cost mayhem
  - Introduction to FinOps objectives
  - Introduction to FinOps technology
  - Introduction to FinOps best practices
- [**2. Establishing FinOps in Your Organization**](#2-establishing-finops-in-your-organization) (8 videos)
  - Determining your business requirements and business case for FinOps
  - Single-cloud cost tracking
  - Multicloud and hybrid cloud cost tracking
  - Putting your cloud cost data to use
  - Setting up cloud cost observability
  - Setting up cloud cost governance
  - Basic FinOps planning for the enterprise
  - FinOps and AI
- [**3. Externalizing FinOps to the Organization**](#3-externalizing-finops-to-the-organization) (9 videos)
  - Cloud spending visibility
  - Cloud spending benchmarks
  - Communicating the FinOps plan to operators and stakeholders
  - Identifying the steps in your FinOps plan
  - Assigning roles in your FinOps plan
  - FinOps and compliance and agreements
  - FinOps collaboration and culture
  - Challenge: Approach cloud spending visibility for Henry's Hammocks
  - Solution: Review the potential solutions you can leverage
- [**4. Optimizing for FinOps in Your Organization**](#4-optimizing-for-finops-in-your-organization) (10 videos)
  - Cloud spending observability
  - Cloud spending analysis
  - Cloud spending forecasting
  - Cloud spending optimization processes and metrics
  - Cloud spending optimization technology
  - Cloud spending optimization for business value
  - Cloud spending AI tools
  - Cloud spending governance using AI
  - Challenge: Approach cloud spending forecasting for Henry's Hammocks
  - Solution: Review the potential solutions you can leverage
- [**5. Automating for FinOps**](#5-automating-for-finops) (7 videos)
  - Identifying what you should automate
  - Automation best practice considerations
  - FinOps automation technology types and usages
  - Leveraging AI for better FinOps automation
  - Creating AI automation processes
  - Dynmaic automation using AI
  - Demo: FinOps automation with AWS Cost Explorer
- [**6. Operating for FinOps Success**](#6-operating-for-finops-success) (9 videos)
  - FinOps continuous improvement
  - FinOps observability
  - Supporting audits
  - Supporting compliance
  - Defining FinOps operational success
  - Finding value with AI FinOps tools
  - Creating dynamic processes using AI
  - Challenge:  Approaching compliance for Henry's Hammocks
  - Solution:  Review the potential solutions you can leverage
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to FinOps
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops?u=76281980&t=0)** - [David] The ability to create a fully optimized FinOps program to provide visibility and control to Cloud computing costs is critical to the success of all Cloud computing.
>
> **[0:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops?u=76281980&t=9)** The challenges is that many enterprises don't have a FinOps program in place, and thus do not understand how the Cloud computing spending is occurring and have no ability to monitor and control Cloud computing costs that are leading to huge cost overruns.
>
> **[0:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops?u=76281980&t=22)** This course is focused on best practices, proving planning processes, cultural changes needed, and technology choices that make up a successful FinOps program.
>
> **[0:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops?u=76281980&t=31)** This is one stop shopping for those who are looking for a complete set of topics that need to be considered to get FinOps right the first time.
>
> **[0:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops?u=76281980&t=39)** Hi, I'm Dave Linthicom, internationally known Cloud expert and consultant.
>
> **[0:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops?u=76281980&t=43)** In this LinkedIn Learning course I use pragmatic examples including case studies and explain processes to help you gain an understanding of the steps to undertake from making a successful FinOps program the first time.
>
> **[0:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops?u=76281980&t=55)** I wish you luck and good learning.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [david] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, you should have an understanding of the basics of computing, including compute, storage, databases, and networking.
>
> **[0:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/what-you-should-know?u=76281980&t=9)** It's not a requirement that you have a deep understanding of any of these concepts, just the fact that they exist and they're basic functions for cloud-based and non-cloud based solutions.
>
> **[0:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/what-you-should-know?u=76281980&t=19)** It's also helpful to have an understanding of other more advanced topics, including security and governance.
>
> **[0:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/what-you-should-know?u=76281980&t=24)** But if those are not on your list of skills, we'll provide enough information here to help you keep up.
>
> **[0:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/what-you-should-know?u=76281980&t=30)** If you're not yet comfortable around some of the topics mentioned, you should review one, two, or all three of the following courses: Learning Cloud Computing Core Concepts, Cloud Architecture Core Concepts, Learning Cloud Computing: Public Cloud Platforms.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1)
> **Speakers:** - [instructor] (1)


### 1. FinOps Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Understanding FinOps and its importance
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=0)** - [Instructor] FinOps is a buzzword with many meanings depending on whom you talk to.
>
> **[0:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=4)** You've heard it defined as everything from technology and tools to culture and communications, and even business processes.
>
> **[0:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=11)** It's bigger than any single one of those categories.
>
> **[0:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=14)** FinOps is related to cloud financial management.
>
> **[0:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=16)** It's a collaboration of operating models and technologies that combine best practices with technology and culture to improve an enterprise's ability to optimize cloud costs.
>
> **[0:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=27)** It's a collaboration of IT, developers, finance, procurement and others in the business to find the most value from cloud computing technology.
>
> **[0:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=36)** So, why is FinOps important?
>
> **[0:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=38)** Cost overruns are common with those that deploy cloud-based solutions.
>
> **[0:42](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=42)** This is a result of not having a good understanding of what and how the cloud providers are billing for cloud services.
>
> **[0:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=49)** Often the core issue is lack of visibility and controls into how cloud computing spending is occurring.
>
> **[0:57](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=57)** This includes not only what we're building for the utility of using a public cloud service over time, and across different tasks, but also the harder to define costs such as people, productivity, business value generated and removed, and other costs that are not as well understood until they occur.
>
> **[1:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=75)** FinOps is about bringing discipline to these issues and removing any vaguery around what's being spent and what value that spending is bringing to the business.
>
> **[1:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=84)** There are organizations out there, such as the FinOps Foundation that are leading some of the thinking around best practices and tooling for those looking to leverage the concept of FinOps.
>
> **[1:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=95)** Also, there are many technology providers, such as those selling cost monitoring and cost observability tools that attempt to define FinOps around the functionality of the technology they are selling.
>
> **[1:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=107)** Of course, there are also books, articles, and even other courses out there that draw their own line in the sand as to what FinOps is, it's value, and how it's supposed to be leveraged.
>
> **[1:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=118)** This course considers all aspects of FinOps and it's not limited to the way that a single organization or groups of organizations is defining it.
>
> **[2:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=126)** Indeed, we'll survey ideas that we believe are most important and provide you with a basic understanding of what the consensus of what FinOps is as defined by the industry as a whole and how you should think about it in terms of the value it's able to bring your enterprise.
>
> **[2:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/understanding-finops-and-its-importance?u=76281980&t=142)** We believe that's the best place to start on your FinOps journey and will best set you up for success.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), defined as (1)
> **Analogies:** such as (3)
> **CLI Commands:** find (1)
> **Code Keywords:** public (1)
> **Speakers:** - [instructor] (1)

#### Business need for FinOps for cloud computing
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=0)** - [Presenter] The value of cloud computing was over simplified in the early days of the cloud.
>
> **[0:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=4)** It was defined as something that allows you to rent computer time and capacity as you need it and only pay for what you use.
>
> **[0:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=12)** Much like our power and water utilities we leverage for our households.
>
> **[0:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=16)** Of course, businesses soon learned that it was more complex than that.
>
> **[0:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=20)** How public cloud computing providers such as Amazon Web Services, Microsoft and Google, bill for their services varies greatly.
>
> **[0:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=28)** Some bill for time use, some bill for capacity use such as storage and network bandwidth and some provide unlimited use of some services to a specific point where additional charges will apply.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=40)** Some offer deep discounts for a specific commitment to a level of use that you may or may not live up to.
>
> **[0:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=46)** Thus, you could incur monetary penalties where you're paying for a public cloud computing resource that you're no longer able to use or is no longer needed.
>
> **[0:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=56)** There are also harder to determine costs which need to be considered such as the cost of people who are needed to manage the cloud computing service for the enterprise, including security, governance, and monitoring and management of those services.
>
> **[1:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=68)** For many enterprises, this is where most of their money is spent.
>
> **[1:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=72)** Finally, accounting for costs that IT rarely forecasts.
>
> **[1:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=76)** An example of this could be that a company could no longer be able to earn a tax deduction for the depreciation of traditional hardware and data center space.
>
> **[1:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=86)** In some instances, companies end up losing millions of dollars in tax benefits due to IT moving most of their applications and data sets to public cloud providers.
>
> **[1:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=95)** Of course, this depends on your tax jurisdiction and your own unique situation.
>
> **[1:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=100)** Thus, the importance of FinOps emerges.
>
> **[1:42](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=102)** It's a concept getting this all under control including the centralization of controls and spending around cloud computing related costs.
>
> **[1:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=111)** It's not just providing visibility and controls around spending.
>
> **[1:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=115)** That's a big part of it.
>
> **[1:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=116)** It's about placing processes, disciplines, and a culture around how and why cloud spending occurs and considering all aspects of the business in terms of spending and value return to the business for that spending.
>
> **[2:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=129)** Therefore, while cloud ops is a complex topic, it's really more about how cloud computing usage affects the business.
>
> **[2:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/business-need-for-finops-for-cloud-computing?u=76281980&t=136)** It includes all aspects and it's not just about monitoring your monthly cloud bill but a holistic set of processes and technologies and tasks that provide complete control and understanding of what's being spent and what value is returning to the business for that spending.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), finally, (1)
> **Analogies:** such as (3)
> **Definitions:** defined as (1), is a  (1)
> **Speakers:** - [presenter] (1)

#### Defining cloud computing value and metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=0)** - [Instructor] So, if FinOps is about finding the optimized value for the business, for the use of cloud resources, then how do we determine the value of cloud computing?
>
> **[0:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=10)** What metrics should we be leveraging?
>
> **[0:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=12)** We can define the business value of cloud computing into two major categories, hard values and soft values.
>
> **[0:18](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=18)** Hard values are the easiest to define.
>
> **[0:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=21)** These are the direct business value that can be created by the use of one.
>
> **[0:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=25)** Some are many cloud computing services.
>
> **[0:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=28)** Examples of hard values would be operational cost savings using a public cloud-based storage system versus owning and maintaining your own hardware and software.
>
> **[0:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=37)** Saving on cloud computing instances since you're able to purchase cheaper instances at a time.
>
> **[0:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=44)** Shifting from one cloud provider to another cloud provider, reducing the cost of inventory control processes by 30%.
>
> **[0:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=52)** As you can see, by all of the hard value examples listed, the values are easy to determine.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=58)** They end up being hard and definable values that come back to the business as specific cost savings through the optimized use of cloud computing resources.
>
> **[1:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=67)** This is typically the way cloud computing was defined during the early days of cloud computing.
>
> **[1:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=72)** Note that we'll have defined metrics or how we're planning on measuring things such as cost savings and how that returns value to the business.
>
> **[1:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=81)** It's not always one-to-one, meaning that we can't assume that the dollar saved will be a dollar value created.
>
> **[1:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=88)** Instead, we need to look at the actual effectiveness of that cost savings and determine the correct metrics in terms of how it's translated into value for the business.
>
> **[1:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=98)** For example, we're saving 50 cents per gigabyte and using a storage system on a public cloud provider rather than our own physical storage system.
>
> **[1:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=106)** That may be giving up depreciation of physical storage systems which removes some value leveraging cloud-based resources.
>
> **[1:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=114)** Thus, it may only be 40 cents per gigabyte at value that we actually realize.
>
> **[2:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=120)** Soft values are more difficult to determine, but are typically values that exceed hard values by a great deal.
>
> **[2:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=127)** Examples of soft values that may return to the business through the use of cloud-based resources may include increased business agility, which allows the company to move into new markets quicker and thus provides some additional business success.
>
> **[2:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=141)** For example, a car company that needs to pivot to electric vehicles ahead of the market demand can change car designs, factories, and supply chains quickly by using the agile benefits of cloud computing.
>
> **[2:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=154)** Even the ability to enhance employee retention through the use of cloud computing to support a growing remote workforce.
>
> **[2:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=160)** Many businesses find that maintaining good employees is vital to the business generating value.
>
> **[2:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=166)** Cloud computing better supports a remote workforce that in many instances is more productive and sustainable than forcing employees to commute to a common office building daily.
>
> **[2:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=176)** What we depicted here is that value that is returned to the business can be many things and while much value is easy to understand, such as direct and measurable cost savings and cost avoidance from cloud computing, some of the more valuable aspects of cloud computing are more difficult to measure, but should be well understood.
>
> **[3:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=195)** Keep in mind that FinOps is the ability to manage cloud spending well, but also the ability to understand how that cloud spending is returning different values to the business.
>
> **[3:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-cloud-computing-value-and-metrics?u=76281980&t=205)** If we don't get that part, we won't have a complete picture.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1), picture (1)
> **Code Keywords:** public (2)
> **Warnings:** note that (1), keep in mind (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Case study: Cloud budget overage
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=0)** - [Instructor] We'll be following a fictitious hammock company through this course called Henry's Hammocks, or HH.
>
> **[0:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=6)** They manufacture and sell high-end, comfortable, lightweight, and fireproof hammocks for a growing number of campers.
>
> **[0:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=14)** They saw a dramatic increase in business during the pandemic and have had some quick growth in the last few years.
>
> **[0:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=21)** As a result, the growth of HH has moved most of their IT assets to the public cloud, including inventory management, production management, accounting, HR systems, in sales order entry systems.
>
> **[0:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=34)** HH expected the cost of using cloud based resources to be lower than their traditional approach to owning and maintaining their own hardware and software.
>
> **[0:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=43)** They expected their $10 million a year IT budget to be reduced to $8 million a year once their assets are moved to the cloud.
>
> **[0:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=51)** However, in looking at their bill from their public cloud provider, they are well on their way to having spent more than $12 million on cloud usage.
>
> **[1:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=60)** Understanding that this does not consider the cost of migration for HH, only core operational costs.
>
> **[1:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=67)** So what happened?
>
> **[1:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=69)** A few things became apparent to the consulting firm HH hired to look at the cloud computing spending that led to the budget overruns.
>
> **[1:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=77)** No use of cost saving best practices, such as using reserve instances to purchase cheaper capacity ahead of need.
>
> **[1:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=84)** Lack of management monitoring to reduce the number of cloud resources that are allocated, and never deallocated after use.
>
> **[1:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=92)** This generates usage based fees, even though they're not being used by the business.
>
> **[1:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=97)** Lack of understanding of data egress and ingress costs that HH needs to share data with computer systems supporting their supply chain.
>
> **[1:45](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=105)** This is data leaving and entering their public cloud providers, where the public cloud providers charge a cost for the amount of data you move in and out of the public cloud.
>
> **[1:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=115)** HH did not understand that they would be charged for this.
>
> **[1:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=119)** The introduction of basic FinOps concepts would've saved HH as much as $4 million.
>
> **[2:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=124)** Unfortunately, they learned the hard way.
>
> **[2:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=127)** Keep in mind that as long as they lived up to the terms of the agreement, meaning providing uptime per service level agreements that they have no obligation to provide credits for lacking FinOps.
>
> **[2:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=139)** Thus, HH began a FinOps program where many of the mistakes they initially made would be corrected.
>
> **[2:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=146)** This included use of reserve instances were applicable, in support of planning processing, such as ends month and end of year processing, ongoing monitoring and detection of idle instances that are automatically removed, and thus the billing meter stops.
>
> **[2:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=161)** Also, training and culture changes to ensure that the humans that created this problem do not do so in the future.
>
> **[2:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=169)** Management and optimization of data egress and ingress costs that occur in support of the supply chain.
>
> **[2:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=175)** This includes reducing the amount of data sent and received as well as reducing the number of times data is sent and received.
>
> **[3:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=182)** That's allowing for an 80% reduction in egress and ingress fees.
>
> **[3:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=187)** These kinds of cost overages are common as enterprises learn more about how cloud computing services are built and turning shock of an unsuspected high bill into core FinOps processing tooling and training to ensure a more optimized use of cloud spending.
>
> **[3:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-cloud-budget-overage?u=76281980&t=205)** In the case of HH, the half a million dollar a year cost of creating and maintaining a FinOps program ended up saving HH as much as $4 million a year and thus returns more value back to the business.

> [!info]- Semantic Content
>
> **Code Keywords:** public (5), this. (1)
> **Analogies:** such as (2)
> **Cross-References:** in the last (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Case study: Multicloud cost mayhem
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=0)** - [Host] So far we've been considering definitions and the importance of Fin Ops.
>
> **[0:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=4)** Now let's walk through a case study on multi-cloud cost mayhem.
>
> **[0:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=8)** I think you know where we're going with this example.
>
> **[0:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=10)** Let's dive in.
>
> **[0:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=12)** Another large publicly traded company has decided to move from a single cloud deployment to multi-cloud.
>
> **[0:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=17)** This means they were leveraging more than a single cloud, and in this case three different public clouds that perform different roles.
>
> **[0:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=25)** Public cloud A supports 70% of the workloads that run in the public clouds for the company and this includes all sales order processing and related data, inventory processing related data, accounting processing and related data, as well as hosting packaged applications, supporting the customer relationship management system, or CRM.
>
> **[0:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=44)** Public cloud B supports most of R&D operations, including providing development and deployment of new software products that the company sells, as well as a special cloud service in support of those products, including deep analytics and AI system processing.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=58)** This cloud makes up 20% of the workloads that run on public clouds.
>
> **[1:03](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=63)** Finally, public cloud C supports the remaining 10% of the workloads and supports the single task of data analytics for the entire company.
>
> **[1:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=72)** This includes storage of aggregated data from the other clouds and other systems, which can be considered summarized versions of the data.
>
> **[1:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=79)** This includes analytical processing, such as core business intelligence or BI capabilities.
>
> **[1:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=86)** After deployment of the multi clouds, including cloud A, B, and C, the company noticed a few things that they did not expect.
>
> **[1:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=93)** The way that each cloud provider determined the bill was different from provider to provider.
>
> **[1:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=98)** Some focused on time on one system with unlimited data usage and others focus just on data usage, with no regard for the amount of time spent on each specific resource, such as compute, storage, and database.
>
> **[1:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=112)** This led to confusion in terms of how cloud services were built, with many developers and users mistakenly confusing one cloud with another, that's not optimizing the way the cloud is built for use.
>
> **[2:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=124)** This often led to budget overruns, where they thought they were being billed by time and it was by capacity and the other way around.
>
> **[2:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=132)** The terms of each agreement for the cloud providers are different as well.
>
> **[2:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=136)** Cloud A only guarantees two nines uptime and only return the cost of time lost to their customers with no additional multipliers.
>
> **[2:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=144)** So if we lost $200 in cloud services due to an outage, we are only able to recover $200.
>
> **[2:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=151)** Cloud B generated five nines of uptime, or 0.99999 percentage uptime versus outages.
>
> **[2:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=161)** This included terms of 200 times what they would pay for services lost during outages, outside of the five nines guarantee.
>
> **[2:48](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=168)** So if the customer lost a hundred dollars during an outage and lost service, they would credit their customers 200 times or 200 times a hundred, which is $20,000.
>
> **[2:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=179)** Cloud C has simple terms where there are no SLAs applied and the company only pays exactly what resources they use and only by time, not by volume.
>
> **[3:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=191)** Finally, there are significant additional costs in maintaining three clouds versus one.
>
> **[3:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=197)** This in terms of the fact that they need three types of cloud skills, some for cloud A, some for cloud B, and some for cloud C.
>
> **[3:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=204)** This means that they must run more complex and costly hiring program that's able to find talent for each cloud provider, perhaps looking for those that are certified within those providers.
>
> **[3:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=215)** Also, they have to carry out training for at least three different cloud providers as well.
>
> **[3:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=220)** This increased the cost of salaries, training, and recruiting by 40% overall.
>
> **[3:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=226)** Thus, we have a few lessons learned.
>
> **[3:48](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=228)** Similarities won't likely exist from the different clouds in terms of pricing models that you'll leverage as a multi-cloud.
>
> **[3:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=236)** You'll need cost visibility and cost governance tools to understand what those differences are and manage the cost in optimal ways to return the most value to the business.
>
> **[4:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=246)** You'll need to assume that you'll need to deal with each cloud provider on their own terms, pricing model, support model, and billing model.
>
> **[4:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=255)** It would be nice if they all did things the same way, but they don't.
>
> **[4:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=259)** Thus Fin Ops is needed to make sense of complex pricing models and monitor usage in different ways.
>
> **[4:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=267)** Support agreements make huge differences in cloud pricing and if the agreements are complete in favor of the specific cloud provider, you could find that there is no way to claw that cost for frequent business killing outages.
>
> **[4:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=280)** This needs to be negotiated prior to you adopting a specific provider and they need to be held to task as to the performance and thus their impact on the business.
>
> **[4:50](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=290)** People are more costly than you think and may be as much as 80% of the IT and cloud budgets.
>
> **[4:57](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=297)** As a rule, the more complex that you make your cloud deployment, such as leveraging multi clouds, the more it's going to cost you in hiring, training, and overall retention.
>
> **[5:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=308)** You'll need to figure this into the overall cost of doing any cloud, single cloud or multi-cloud deployments.
>
> **[5:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=315)** This is not so much that the cost needs to be mayhem but the fact is there will be a point where the amount of moving parts and the complexity of the cloud computing deployment requires that Fin Ops processes be put in place to manage the complexity.
>
> **[5:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=328)** This means keeping track of costs, billing, terms, provider performance, and even the people costs that surround the business as well.
>
> **[5:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/case-study-multicloud-cost-mayhem?u=76281980&t=336)** The idea is to automate as much as you can and allow automated processes and controls to manage most of this on your behalf, which should reduce the number of mistakes and ensure that the business is getting the most value out of their cloud deployments as they can.

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), let (2), finally, (2)
> **CLI Commands:** make (3), find (2)
> **Prerequisites:** you'll need (4)
> **Analogies:** such as (3)
> **Env Vars:** crm (1)
> **Versions:** 0.99999 (1)
> **Definitions:** means that (1)
> **Speakers:** - [host] (1)

#### Introduction to FinOps objectives
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=0)** - [Narrator] The core objective of FinOps simply put is to bring accountability and visibility to cloud costs for any organization.
>
> **[0:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=7)** While you hear many definitions and objectives, that's the heart of why we're interested in FinOps.
>
> **[0:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=13)** Of course, we've always been concerned with cloud spending even before FinOps concepts, in the early days of cloud computing.
>
> **[0:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=20)** FinOps just put some best practices, structure and technology behind how we monitor and control these costs effectively, and without leveraging too many additional resources.
>
> **[0:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=31)** So we can say that the core FinOps objectives are providing in the ability for organizations to obtain the maximum amount of value from cloud-based spending and resources.
>
> **[0:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=41)** The ability to assist developers, operations, finance and other business teams in understanding and controlling cloud computing costs.
>
> **[0:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=49)** The ability to provide central visibility and supportive data driven business decisions, having near perfect information to make the most optimized decisions.
>
> **[0:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=59)** As part of getting these objectives, FinOps also asserts that teams need to collaborate using open communications, allowing issues to be identified and resolved quickly.
>
> **[1:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=69)** FinOps to be most effective, should be centralized.
>
> **[1:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=73)** This means that command and control comes from a central authority that drives most of the policies, monitoring and controls.
>
> **[1:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=82)** There is a consistent accountability with cloud-based spending, with all of those consuming cloud services taking ownership of their spending and the optimized use of cloud resources.
>
> **[1:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=93)** The focus is always on returning the maximum value back to the business for all cloud computing spending.
>
> **[1:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=100)** Visibility means that all reporting should be accessible by anyone who needs the information and should be current and accurate.
>
> **[1:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=109)** Focusing on optimization, such as taking advantage of discounted models such as reserve instances and other book buying opportunities.
>
> **[1:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=118)** If you get a core theme here it is around bringing discipline to cloud spending and focusing on the needs of the business, rather than just the technology.
>
> **[2:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=129)** FinOps is an evolving concept, and the objective of FinOps may expand as time progresses and as we find that there are issues that need to be considered.
>
> **[2:18](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-objectives?u=76281980&t=138)** For now these are the objectives that we're moving forward with.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), is a  (1), is an  (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** such as (2)
> **Speakers:** - [narrator] (1)

#### Introduction to FinOps technology
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980&t=0)** - [Presenter] FinOps technology is really any technology that assists in monitoring, controlling, and optimizing cloud computing costs.
>
> **[0:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980&t=7)** Thus, it's really any cloud tool that's able to consider costs as well as usage.
>
> **[0:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980&t=13)** A few types of tools that you'll see include: cloud cost governance are tools that are able to limit cloud spending through the use of predefined policies.
>
> **[0:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980&t=21)** Cloud cost monitoring are tools that monitor cloud spending including the terms of each cloud provider and how the cloud provider bills for the resource, such as time versus capacity.
>
> **[0:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980&t=32)** Cloud cost auditing, or the ability to look at existing and historical spending to determine efficiency and compliance.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980&t=40)** Cloud resource optimization, or the ability to monitor and run cloud resources more efficiently to spend less money and return more value to the business.
>
> **[0:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980&t=49)** Cloud cost planning are the ability to use historical cloud spending data to plan cloud spending moving forward and creating budgets around that spending.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980&t=58)** Cloud business operations are the ability to support a central cloud business office, or CBO, in the business operations of cloud computing, including spending management, billing and optimization, as well as monitoring and visibility.
>
> **[1:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980&t=73)** It should be noted that these tools are just a list of general concepts and the features and functions that are being offered in support of FinOps processing.
>
> **[1:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980&t=81)** Some of these tools may have some or all of the tool types listed above, and thus you may end up using between one and five different tools depending on your requirements.
>
> **[1:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980&t=93)** The idea here is to identify the partners of tools that you'll see out there, which is more important than understanding what each tool in the FinOps space does.
>
> **[1:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-technology?u=76281980&t=101)** Unless FinOps is you're calling, it would be unreasonable to attempt to keep up with the technology changes.

> [!info]- Semantic Content
>
> **Code Keywords:** include: (1)
> **Env Vars:** cbo (1)
> **Analogies:** such as (1)
> **Speakers:** - [presenter] (1)

#### Introduction to FinOps best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=0)** - [Instructor] Best practices for FinOps will vary greatly depending on how your organization is leveraging cloud-based resources.
>
> **[0:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=7)** Thus, why we will list several here, you'll find that you'll need to customize these best practices to be more effective for your specific business.
>
> **[0:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=15)** Moreover, these are strategic in nature.
>
> **[0:18](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=18)** For example, we'll tell you that a best practice is to collaborate and communicate among teams, you won't get the information how to do that specifically.
>
> **[0:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=26)** You'll need to figure out what you want, based on your unique needs with that, let's explore some general best practices related to FinOps success.
>
> **[0:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=36)** All must participate, FinOps is not just for a single organization or even a single person.
>
> **[0:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=41)** It's going to take sets of teams that will likely include finance, engineering, accounting, cloud operations, cloud security and a few other teams that may be specific to your business.
>
> **[0:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=52)** Maintain a single source of truth.
>
> **[0:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=54)** This means that we have one centralized set of data that stores most of the FinOps data and we're not replicating that data so much of the data integrity and data accuracy becomes an issue.
>
> **[1:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=66)** You'll find that if you're spreading the data across many different systems, even data that's redundant the data accuracy becomes a problem and the data won't be trusted.
>
> **[1:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=75)** Automate everything, relying on manual processes, which are prone to human error, and also costs more to process is undesirable.
>
> **[1:23](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=83)** We are at a point in time when we're able to find tools and technology to automate most of the processing associated with FinOps, including monitoring, controlling, and planning.
>
> **[1:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=93)** Leverage metrics to guide you.
>
> **[1:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=95)** This means finding units of measurement that can be leveraged consistently, such as cost per transaction, cost to onboard a customer, comparing cost versus what the spending is attempting to accomplish, this allows you to objectively evaluate things, such as additional cloud spending that may be leading to better cost per transactions and thus, a good investment.
>
> **[1:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=118)** Others may only see additional spending and not understanding the benefit to the business.
>
> **[2:03](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=123)** Continuously monitor and improve.
>
> **[2:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=125)** This means that we're constantly looking at spending data, metrics, benchmark, and other data that may be indicating areas that can be improved upon.
>
> **[2:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=136)** This is an ongoing journey and those driving FinOps should always be looking for ways to optimize cloud spending and bring more value back to the business.
>
> **[2:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=145)** Not really anything revolutionary here when it comes to FinOps best practices.
>
> **[2:29](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=149)** Indeed, much of this has roots in business best practices.
>
> **[2:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=153)** This is just an extension of those to cloud-based spending.
>
> **[2:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=159)** As stated above, however, this is indeed something you want to define specifically for your business.
>
> **[2:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/introduction-to-finops-best-practices?u=76281980&t=164)** Using these as an initial framework of thinking.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Definitions:** means that (2), is an  (1)
> **Analogies:** such as (2), for example (1)
> **Prerequisites:** you'll need (2)
> **Code Keywords:** let (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 2. Establishing FinOps in Your Organization

> [↑ Back to Table of Contents](#table-of-contents)

#### Determining your business requirements and business case for FinOps
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=0)** - [Instructor] Of course, each business is different and thus the requirements for FinOps will be different as well.
>
> **[0:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=5)** So we need to determine your specific business requirements for FinOps, including the processes, and best practices.
>
> **[0:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=12)** Fortunately, how businesses use and value FinOps is somewhat consistent.
>
> **[0:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=17)** This includes looking at the following values that FinOps can return to the business.
>
> **[0:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=21)** Once these values are established, they can become the business requirements for FinOps.
>
> **[0:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=28)** This is an informative step because FinOps can be costly to deploy and operate.
>
> **[0:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=32)** And thus, you'll find that board of directors and other leadership are interested in understanding what they are getting for their money.
>
> **[0:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=38)** You need to be prepared to walk leadership through your business requirements for FinOps and establish the business value, the business strategy and the business purpose in order to prove the potential or real return of value to the business.
>
> **[0:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=52)** Things that should be considered when determining business requirements for FinOps, includes define the business goals for FinOps, map the business goals for FinOps to the company goals, acknowledge the pros and cons, define the expected benefits, define how results will be measured, define the cost to implement FinOps, define the costs for taking no action.
>
> **[1:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=71)** Let's explore each.
>
> **[1:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=73)** Defining the business value for FinOps means that we define what we would like FinOps to do for us, such as monitoring cloud costs, optimizing cloud spending and better providing information back to key systems and people as an example of general requirements and objectives that define the value of FinOps.
>
> **[1:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=93)** Map the business goals for FinOps to the company goals, meaning that we're taking the FinOps goals and requirements listed above and mapping them to the business objectives of the company.
>
> **[1:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=103)** For instance, to drive more innovation, to drive more revenue, to drive better customer relationships, et cetera.
>
> **[1:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=109)** Or specific quantifiable goals, such as achieving specific revenue numbers of EPS or earnings per share.
>
> **[1:57](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=117)** Acknowledge the pros and cons means that we're honest with the pros, meaning what benefits we can enjoy versus the cons or the cost it's going to take to implement FinOps practices and technology for your business.
>
> **[2:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=130)** This is where you list risks, such as what happens if some of your FinOps deployment fails?
>
> **[2:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=135)** And what would need to be done?
>
> **[2:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=137)** Define expected benefits, meaning that we're looking at the core benefits to the business, such as value that comes back to the business.
>
> **[2:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=144)** For example, more business agility that leads to more innovation that leads to more revenue, and value of the company.
>
> **[2:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=152)** Define how results would be measured, meaning that we're going to define what success looks like and what failure looks like, and how we're going to improve on these results if they fall short.
>
> **[2:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=163)** Define the cost to implement FinOps, meaning an honest reflection of the people costs, the technology costs and other costs that need to be incurred to define a FinOps practice and technology foundation.
>
> **[2:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=174)** It's not cheap.
>
> **[2:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=176)** Define the cost of taking no action, meaning that we're defining the state of the business that lacks FinOps.
>
> **[3:01](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=181)** This includes cloud costs overruns and surprisingly high cloud bills, failure to support an audit, no ability to optimize cloud spending, and no visibility into key costs and benefits of cloud computing.
>
> **[3:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=194)** By now you get the general idea.
>
> **[3:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=196)** We're defining, in an honest way, what cloud FinOps can bring and not bring to our business.
>
> **[3:23](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/determining-your-business-requirements-and-business-case-for-finops?u=76281980&t=203)** And what are the key business requirements and business cases that we need to consider?

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for instance (1), for example (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Env Vars:** eps (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Single-cloud cost tracking
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=0)** - There are two major cloud deployments for which FinOps is used to manage spending, single cloud and multi-cloud deployments.
>
> **[0:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=7)** In this video will cover single cloud deployments and in the next video we'll cover multi-cloud.
>
> **[0:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=12)** A single cloud deployment is just that, a single cloud that an enterprise is leveraging.
>
> **[0:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=17)** While the cloud can be a single private cloud, public clouds are by far the most common way of leveraging a single cloud.
>
> **[0:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=25)** Public clouds are able to provide many more services such as storage, compute, databases, AI, and so on.
>
> **[0:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=32)** Private clouds typically only provide the most primitive of services, such as just storage and compute.
>
> **[0:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=38)** Single cloud deployment as far as the implementation of FinOps processes and tooling have the following general attributes that you need to consider for a single cloud deployment: The billing is largely through a single vendor and thus a single source, typically, the cloud provider.
>
> **[0:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=54)** They may even bill for third party services on the same billing system as well.
>
> **[0:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=59)** So in many instances, we're getting the cloud spending data from a single origin, which makes things easier.
>
> **[1:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=66)** The cloud provider may provide the FinOps tools that you should be leveraging if indeed it's only a single cloud deployment.
>
> **[1:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=73)** Considering that we're not having to manage more than one cloud, in many instances, the cloud provider will offer the best technology to manage FinOps albeit just for that single cloud.
>
> **[1:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=84)** Server Level Agreements or SLAs that provide cloud customers with some recourse to have money credited back in case of outages or performance issues are also consistent for most services, albeit, depending on who the customer is, may vary at times.
>
> **[1:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=100)** Again, read your agreement carefully for each cloud service agreement, focusing on the terms of the SLAs.
>
> **[1:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=106)** The billing models are likely to be straightforward considering that a single cloud provider is likely to have consistent terms and prices across services.
>
> **[1:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=115)** Thus, you're not dealing with one way of billing for storage, say storage use versus another way of billing for storage say, time on the system.
>
> **[2:03](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=123)** Since we typically have one single agreement with our one single cloud provider, it's consistent across the cloud services and thus easier to track spending.
>
> **[2:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=133)** Finally, there is no comparison between services across cloud, which is part of FinOps.
>
> **[2:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=139)** Since this is our only cloud provider that we're leveraging they pretty much define the terms and prices.
>
> **[2:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=144)** And we use several services without having the opportunity to compare prices and terms of the same types of services on other cloud providers.
>
> **[2:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=153)** This also goes to the cost of cloud lock in where the trade off is simplicity versus choice as far as cloud spending and business value returned.
>
> **[2:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=163)** Key things to understand here around single cloud deployments in FinOps is that they are much simpler to track cost for, considering that the terms and the prices are largely consistent across services and certainly easier to manage versus a multi-cloud deployment that will cover next.
>
> **[2:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=179)** However, there are many exceptions to this, for example, single cloud providers may not be consistent in prices that they charge and in terms that they enforce.
>
> **[3:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=189)** You might have to keep track of several pricing in terms that may be different depending on who's using specific service and for what purpose.
>
> **[3:18](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=198)** This could be a result of a company that negotiated different terms and prices for different parts of the company.
>
> **[3:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=204)** You'll then need to bring cost monitoring under a single FinOps umbrella so you would be dealing with some complexity around that.
>
> **[3:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=213)** Not likely, but you should be aware that these challenges do arrive that will make FinOps more costly and complex.
>
> **[3:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=220)** Those running FinOps often don't make the choice of a single cloud or a multi-cloud deployment as the correct approach.
>
> **[3:48](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=228)** Instead, they're dealing with costs and or spending monitoring for whatever deployments they're asked to provide.
>
> **[3:53](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=233)** FinOps processes and tooling for.
>
> **[3:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/single-cloud-cost-tracking?u=76281980&t=236)** The decisions around deployment impacts the amount of work and the complexity of implementing FinOps successfully and thus you need to be aware of the trade-offs.

> [!info]- Semantic Content
>
> **Code Keywords:** private (2), public (2), finally, (1), for, (1), this, (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), for example (1)
> **Warnings:** be aware (2)
> **Cross-References:** in the next (1)
> **Speakers:** - there (1)

#### Multicloud and hybrid cloud cost tracking
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=0)** - [Instructor] For the majority of FinOps, you'll be dealing with complex cloud deployments, such as hybrid and multicloud.
>
> **[0:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=6)** A hybrid cloud is a paired public and private cloud that provides different platforms based on the needs of the application solutions that run on them.
>
> **[0:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=15)** Hybrid clouds continue to exist but are not being deployed at the same rate as multiclouds due to the declining use of private clouds.
>
> **[0:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=22)** We'll still include hybrid clouds in our FinOps considerations since you may run into them.
>
> **[0:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=28)** Multiclouds are found in almost 95% of the enterprises, so they are more the rule than the exception when it comes to cloud FinOps.
>
> **[0:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=36)** Deploying FinOps processes and tooling for multiclouds is complex, and extremely valuable for tracking spending.
>
> **[0:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=43)** It involves tracking spending across two to four different public cloud providers with different terms, different pricing, and different ways of billing for specific services.
>
> **[0:53](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=53)** FinOps has to be adaptive to track cost and gather spending data by dealing with the differences of each cloud provider and each service, and providing a consistent way of looking at spending data that allows those leveraging FinOps to understand what's being spent, what benefits are being experienced, and what value ultimately is being returned to the business.
>
> **[1:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=75)** With hybrid clouds, we're tracking spending and value being brought back to the business across a cloud where the company owns the hardware and software that makes up the private cloud versus public clouds that were delivered entirely as a service running on hardware and software that you don't own but leverage using a utility model, much the same as you do electricity or water for your home.
>
> **[1:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=99)** Private clouds have their cost tracked very differently than public clouds, considering that we're not getting a monthly bill from a private cloud.
>
> **[1:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=107)** Instead, we have to focus on understanding cost tracking through the more traditional model leveraged when all computer equipment and software was owned outright.
>
> **[1:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=116)** This typically means allocating the costs of the hardware and software over time, typically using a depreciation model where we're allocating some of the cost of private clouds by usage to those departments or specific users that are leveraging the private cloud.
>
> **[2:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=132)** Even if the build does not exist, we're still monitoring usage and allocating costs for that usage.
>
> **[2:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=137)** Of course, the way that this is done specifically depends on how the company wants to allocate costs for assets already owned.
>
> **[2:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=145)** We manage private clouds using FinOps processes within hybrid clouds, much the same way we manage them for single cloud deployments that we covered in the previous video.
>
> **[2:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=154)** Thus, we're not going to repeat that here.
>
> **[2:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=157)** FinOps typically uses tools, which track cost and usage, cost governance, forecasting, et cetera, and the tools hides the differences of each individual pricing and billing system that each cloud provider operates and aggregates the cost to clearly demonstrate the relationship of cost and return on value.
>
> **[2:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=176)** Indeed, the rise of multicloud has much to do with the rise of FinOps considering that those who had to manage and track cost including usage and value returned understood quickly that multicloud deployments are so complex and convoluted that they needed something more sophisticated than just a spreadsheet, which is what many enterprises were using prior to FinOps best practices and tooling appearing in the market.
>
> **[3:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/multicloud-and-hybrid-cloud-cost-tracking?u=76281980&t=200)** Thus we can also say that FinOps is really about dealing with cloud costs and cloud value complexity at the end of the day.

> [!info]- Semantic Content
>
> **Code Keywords:** private (8), public (4), continue (1)
> **Cross-References:** we covered (1), previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Putting your cloud cost data to use
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/putting-your-cloud-cost-data-to-use?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/putting-your-cloud-cost-data-to-use?u=76281980&t=0)** - [Instructor] So now that we're gathering cost and spending data, including usage tracking, what do we do with that data?
>
> **[0:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/putting-your-cloud-cost-data-to-use?u=76281980&t=6)** There are several ways that cloud usage and cloud spending data can be leveraged.
>
> **[0:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/putting-your-cloud-cost-data-to-use?u=76281980&t=11)** Here are the most common that you'll leverage for cloud FinOps: budgetary compliance such as tracking costs and alerting users and systems when spending is trending above allocated cloud spending budgets, also enforcing spending limits around budgetary thresholds, business value analytics such as understanding how cloud spending is related to business values such as agility and innovation that are returning value to the business or even more tactical values such as increasing sales by providing customer service through the use of cloud services, forecasting, as previously covered, or leveraging the current and past data to build models that forecast cloud spending and value returned into the future, planning, which may leverage forecasting for looking at past
>
> **[0:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/putting-your-cloud-cost-data-to-use?u=76281980&t=59)** spending patterns and thus provide better and more accurate budgetary planning moving forward, such as creating end of a year budgeting for cloud cost and cloud investments.
>
> **[1:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/putting-your-cloud-cost-data-to-use?u=76281980&t=69)** Of course, the uses for cloud cost data are extensive considering that the data sits inside a standard database and can be accessed and analyzed for any number of purposes.
>
> **[1:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/putting-your-cloud-cost-data-to-use?u=76281980&t=79)** We can also think up new uses as we need to.
>
> **[1:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/putting-your-cloud-cost-data-to-use?u=76281980&t=84)** Gaining insights from data and continuously optimizing the value that we're returning to the business by the core cloud FinOps processes is a key value add for your business.

> [!info]- Semantic Content
>
> **Analogies:** such as (5)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Setting up cloud cost observability
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=0)** - [Instructor] The term and the concept of observability aren't new at all.
>
> **[0:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=4)** Observability first appeared in the world of engineering and control theory.
>
> **[0:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=8)** At its essence, observability is the measure of how well internal system states can be inferred from knowledge of all external data and states.
>
> **[0:18](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=18)** It's a bit different than monitoring, which is something you do, a verb.
>
> **[0:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=22)** Observability is an attribute of a system or a noun.
>
> **[0:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=27)** Better put as a definition, observability is the ability to leverage the concept of observability and tools that support that concept.
>
> **[0:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=34)** Most cost monitoring tools in the world of FinOps claims some role in observability.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=40)** However, the value is clearly the ability to gain more insights out of the cost data that we've discussed gathering in the previous videos.
>
> **[0:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=49)** In order to set up cost observability, we need to determine what insights we're looking for from our cloud spending data.
>
> **[0:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=56)** Examples may include indications of over or under-spending or over or under-delivery of a business value, cloud spending that's likely to lead to more innovation based on past data and business value generated, when the value of agility is delivered by a certain pattern of cloud spending, et cetera.
>
> **[1:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=76)** We'll cover the observability term as a concept throughout this course.
>
> **[1:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=80)** While the key concepts of observability seem complex, we're focusing in on how to best find insights into our spending and usage data that we're gathering from cloud operations and attempted to find useful patterns within that data.
>
> **[1:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=95)** Considering how we're setting up the data, it's a matter of gathering the data around the most interesting things and understanding that there is really not a lot of downside from gathering and monitoring more cloud data, but if you don't gather and monitor enough, there will not be available data to drive any observability.
>
> **[1:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-observability?u=76281980&t=115)** So when in doubt, monitor and gather cloud usage and spending data to drive useful FinOps solutions now, and perhaps useful solutions in the future, that we've yet to understand.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Setting up cloud cost governance
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-governance?u=76281980&t=0)** - [Instructor] Cloud spending governance is the ability to place guardrails around spending by setting up policies that can be enforced.
>
> **[0:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-governance?u=76281980&t=6)** This is mostly about limiting spending to predetermined budgets by setting spending thresholds using policies for perhaps a specific amount of time.
>
> **[0:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-governance?u=76281980&t=16)** This can also limit other things, such as cloud usage, that while they may be within budgetary limitations, are not driving the business value that's needed to justify the spending.
>
> **[0:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-governance?u=76281980&t=28)** Cost governance is an important aspect of finops considering that we need to set up limitations and metrics that control how cloud spending is occurring and how cloud spending is related to the return of value to the business.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-governance?u=76281980&t=40)** Governance is often looked upon as a negative concept considering that we're limiting or controlling something.
>
> **[0:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-governance?u=76281980&t=47)** However, if it does not exist as part of finops, you'll be dealing with spending overages that you may not be able to recover from.
>
> **[0:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-governance?u=76281980&t=56)** Cost governance is implemented from cost governance tools or even from tools that do basic usage based monitoring that place limits on spending.
>
> **[1:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-governance?u=76281980&t=65)** So no matter if your finops tool is using the term governance or not, it may still be performing governance tasks.
>
> **[1:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-governance?u=76281980&t=73)** Cloud cost governance is fundamental to cloud finops and is also a part of the functionality of many cloud finops tools that monitor and manage spending.
>
> **[1:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-governance?u=76281980&t=81)** It's much better to set these tools up to handle cost of governance through automation versus doing it the old way or having to bug people to stay within spending limits.
>
> **[1:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/setting-up-cloud-cost-governance?u=76281980&t=90)** If you can automate this, you should.

> [!info]- Semantic Content
>
> **Code Keywords:** from. (1), this, (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Basic FinOps planning for the enterprise
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=0)** - [Instructor] Cloud FinOps planning should occur as a dual effort between finance and cloud operations.
>
> **[0:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=5)** Coming up with a common set of objectives, metrics, and processes to implement an effective Cloud FinOps practice in supporting technology stack.
>
> **[0:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=15)** Concepts and questions that typically need to be answered as far as planning goes, includes the core purpose of the FinOps practice and technology set, including core business requirements that need to be considered.
>
> **[0:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=26)** This means finding the core reasons that a Cloud FinOps practice is being established and what needs to occur to live up to the expectations of the business.
>
> **[0:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=35)** Core metrics that need to be gathered including spending data that is needed to calculate these metrics.
>
> **[0:42](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=42)** What is the objective around determining the cost viability of the cloud systems?
>
> **[0:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=46)** And how do we measure success?
>
> **[0:48](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=48)** Duties and roles, including what staff is needed and what skills they should have.
>
> **[0:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=54)** Tools and technology that needs to be leveraged and who will deploy and operate these tools ongoing.
>
> **[1:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=60)** Culture changes that may be needed, such as the acceptance that cloud cost will be monitored, governed, and that business value needs to be demonstrated.
>
> **[1:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=70)** Of course, there are many other items that you may need to add to your specific Cloud FinOps planning for your specific organizational needs.
>
> **[1:18](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=78)** We're just attempting to provide some general examples of Cloud FinOps planning issues that need to be considered.
>
> **[1:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=84)** Also important is the fact that this planning needs to occur.
>
> **[1:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=88)** There needs to be a cross organization understanding of what Cloud FinOps needs to provide to the business, the reasons for spending money on FinOps, and the expected results.
>
> **[1:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=99)** Everyone needs to understand everyone's role and responsibilities and how Cloud FinOps will be successful.
>
> **[1:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/basic-finops-planning-for-the-enterprise?u=76281980&t=106)** If that's not done, Cloud FinOps is likely to fail for your company.

> [!info]- Semantic Content
>
> **Cross-References:** coming up (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### FinOps and AI
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=0)** - [Instructor] FinOps brings together finance, operations and engineering teams to manage and optimize cloud spending.
>
> **[0:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=8)** Its core goal is to create visibility, enable accountability, and drive smarter financial decisions for cloud investments throughout the organization.
>
> **[0:18](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=18)** Modern FinOps relies increasingly on AI driven tools, which enhance the entire cloud cost management lifecycle from initial observability and analysis through forecasting to ongoing optimization.
>
> **[0:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=32)** AI empowers FinOps by automating the collection and correlation of cloud usage, cost and performance data.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=40)** Observability tools enabled by AI go beyond simple dashboards providing the ability to ask deep questions like the causes of unexpected spending spikes, or the business impact of certain technical issues.
>
> **[0:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=56)** This observability is crucial for understanding trends, allocating cost precisely, and supporting business decision making.
>
> **[1:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=65)** In the analysis phase, AI tools automatically surface patterns that are hard to see manually, such as underused resources or cost anomalies.
>
> **[1:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=76)** These insights drive both immediate corrective actions and long-term efficiency improvements.
>
> **[1:23](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=83)** FinOps platforms with embedded analytics can tie costs back to business units, identify key spending drivers, and translate data into actionable intelligence.
>
> **[1:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=96)** Forecasting is another area where AI has elevated FinOps practices.
>
> **[1:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=100)** AI models use historical and current cloud consumption data to predict future costs, taking into account factors like new projects or pricing changes.
>
> **[1:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=111)** By enabling scenario modeling, AI tools help teams plan more accurately, avoid surprise overruns, and negotiate better pricing.
>
> **[2:03](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=123)** When it comes to optimization, AI-driven recommendations help organizations right-size cloud resources, automate policy enforcement and maximize business value, not just reduce spend.
>
> **[2:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=137)** Metrics such as cost per customer, cloud efficiency and value multipliers allow IT and finance teams to measure the business impact of cloud strategies and investments over time.
>
> **[2:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=151)** Continuous monitoring, governance and self-service reporting powered by AI helps FinOps teams sustain a culture of accountability and improvement.
>
> **[2:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-ai?u=76281980&t=164)** In summary, the integration of AI with FinOps transforms cloud spend management from reactive reporting to proactive, value-driven strategy, enabling organizations to not only control costs, but also to measure, forecast, and optimize cloud investments for ongoing innovation and growth.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Code Keywords:** self (1)
> **Speakers:** - [instructor] (1)


### 3. Externalizing FinOps to the Organization

> [↑ Back to Table of Contents](#table-of-contents)

#### Cloud spending visibility
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=0)** - [Instructor] The reason that organizations migrate to the cloud is typically for speed to deploy as well as variability of resource usage.
>
> **[0:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=7)** However, this is the same reasons they struggle to manage costs.
>
> **[0:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=13)** When managing and understanding past and future cloud costs, organizations need to understand some or all of the following cloud spending visibility concepts.
>
> **[0:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=22)** We'll consider each of the following: cost allocation, communication, forecasting, accountability, forecasting costs.
>
> **[0:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=31)** Let's start with cost allocation or the ability to label or tag cloud resources that users are consuming from a public cloud so they can be traced and tracked.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=40)** Tagging is essential to assign useful information in any cloud service and allow you to categorize these resources and better track them.
>
> **[0:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=49)** Tagging in the cloud is a process where cloud administrators can add descriptive meta tags to specific cloud resources.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=58)** These are services that most public cloud providers provide.
>
> **[1:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=62)** Communication or the ability to make sure that whomever needs to see cost data at any level of granularity, can see it if authorized.
>
> **[1:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=71)** This means that those who are assigned to monitor costs can do so in ways that are most productive for them.
>
> **[1:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=76)** Getting the right information at the right time in ways that are most useful for them.
>
> **[1:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=81)** Forecasting or the ability to understand not only what costs are being incurred right now, but what costs will likely be in the near and far future, or a forecast.
>
> **[1:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=92)** Here, we need to figure a few things out.
>
> **[1:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=94)** First, the frequency of how we communicate a forecast of spending to those that are charged with overseeing these costs, or the consumer of cloud services, which can be a human or a system, that generates spending.
>
> **[1:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=107)** Second, we need to determine what our forecasting model is and how it's reflective of how we're determining costs and modeling future spending.
>
> **[1:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=115)** This means creating automated models that can determine what spending will likely be, which may even leverage mechanisms such as AI, or artificial intelligence, to better model future spending.
>
> **[2:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=126)** Accountability, meaning that we need to provide visibility into who's using what resource or resources and holding those consumers accountable for the money spent.
>
> **[2:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=136)** This is carried out by using automation that's able to communicate with the cloud service consumers or system owners and letting them know when the spending is over or even under budget.
>
> **[2:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=148)** Moreover, dealing with overages by holding consumers and system owners responsible, and also adjusting discrepancies in spending forecasts that may be a result of poorly designed forecasting models.
>
> **[2:42](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=162)** Forecasting models need to be continuously improved and updated with real historical spending data to fine-tune the models.
>
> **[2:50](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=170)** Finally, optimizing cost is part of the spending visibility as well in that we're not only looking to track spending but optimizing the value of resources we're consuming for the least amount of spending.
>
> **[3:03](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=183)** This can be achieved by automating cost monitoring and cost governance tooling where we're able to monitor ongoing spending, as well as put limitations or policies around spending, such as disallowing a single cloud user to allocate more than 10 gigabytes of storage at any given time.
>
> **[3:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=201)** While the root of cloud spending visibility is understanding what's being spent on cloud computing services, what will be spent, who will be spending it, also tracking all spending data in past, present, and forecasting spending moving forward.
>
> **[3:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-visibility?u=76281980&t=216)** This is a complex set of approaches that depends on many tools and automated systems that leads to the core objective for FinOps, to optimize costs, to bring the most value to the business.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), let (1), finally, (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Cloud spending benchmarks
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=0)** - [Instructor] Cloud spending benchmarks are used to compare what others are spending on similar IT assets, including cloud-based assets.
>
> **[0:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=7)** These can be widely published industry benchmarks or benchmarks around specific set of companies using cloud that may be similar to your company.
>
> **[0:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=16)** This includes comparing costs and benefits such as core operational costs or what you're spending on specific cloud services, such as storage or traditional services such as hardware and software running within a data center.
>
> **[0:29](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=29)** While it may seem strange to compare non-cloud related spending, again, we're benchmarking our cloud spending with other options including using traditional computing approaches.
>
> **[0:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=39)** People costs are what it costs for talent to build, run and govern and secure your cloud-based system.
>
> **[0:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=46)** Again, comparing what you're spending and what other similar organizations using cloud computing are spending.
>
> **[0:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=52)** Quality of service or QoS, uptime and performance of the cloud-based assets such as compared to quality of service of cloud deployments you're looking to benchmark against.
>
> **[1:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=64)** This is usually defined by the number of outages you're experiencing versus other companies you're benchmarking against.
>
> **[1:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=72)** Efficiency of IT assets as compared with similar cloud deployments.
>
> **[1:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=76)** This typically refers to value return for money spent.
>
> **[1:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=79)** If you're able to return 110% of our dollars spent as defined business value that returns to the business, that's not as good as 150% return to the business in the spending data we're benchmarking against.
>
> **[1:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=94)** Of course, many of you can see some issues with cloud spending benchmarking and that includes the inability to define good analogs for your specific cloud deployment to benchmark against.
>
> **[1:45](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=105)** You need to understand why cloud spending benchmarking is a good data set to consider.
>
> **[1:50](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=110)** It's not the only way you should determine the efficiency of your cloud spending.
>
> **[1:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=116)** However, since this is something that you'll likely run across in your cloud FinOps journey, it's important that we least introduce the concept here.
>
> **[2:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-benchmarks?u=76281980&t=125)** It's something you can leverage or not, depending on the value that cloud spending benchmarking is able to bring to your organization.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), similar to (1)
> **Definitions:** refers to (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Communicating the FinOps plan to operators and stakeholders
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=0)** - [Instructor] It's one thing to create a FinOps plan, it's another thing to suggest that FinOps plan to those that need to carry it out.
>
> **[0:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=7)** This communication needs to include operators of the cloud to have the power to implement the tactical aspects of FinOps, such as cloud monitoring and observability, as well as the leaders of the organization who will leverage cloud computing or the stakeholders.
>
> **[0:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=22)** So how should you go about doing this?
>
> **[0:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=25)** First, it's important that you have a FinOps plan that includes all of the details, such as what needs to be done, when, and why.
>
> **[0:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=33)** This should include playbooks that take any mystery out of implementing FinOps around cloud usage.
>
> **[0:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=39)** That includes tools, processes, skills, roles, and other details that you may need to understand.
>
> **[0:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=46)** Indeed, if FinOps fails, it's often a weakness in the core FinOps plan and a lack of understanding in terms of how each FinOps implementation is carried out.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=58)** People won't usually bother to figure out the missing pieces and the outcome will be failure.
>
> **[1:03](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=63)** You might have to go back and redo the FinOps plan and communicate it out again, but by then, you may find that you lost some credibility.
>
> **[1:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=71)** Getting it right the first time is the best option.
>
> **[1:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=75)** Stakeholder communication of the FinOps plan is a bit easier to accomplish, because these are the people that have a strategic role within FinOps and are not charged with the day by day success of FinOps, as the operators are.
>
> **[1:29](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=89)** Here, the communication is two parts.
>
> **[1:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=91)** First, providing an overview of the FinOps plan specifically focusing on how each stakeholder can contribute to the success of the plan.
>
> **[1:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=99)** For example, you, the stakeholder, needs to approve cost changes during the FinOps process and do so using budget and benchmarking criteria.
>
> **[1:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=109)** Second, ongoing communication with the stakeholders in the form of reports.
>
> **[1:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=114)** That may include an email sent out each week that outlines the cloud spending data and any value measurements that you may be sent, or even access to a dashboard that may be viewed at any time that provides key data and allows the stakeholders to determine the health of the FinOps processes, including what's being spent and what value is being brought back into the business.
>
> **[2:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=139)** Of course, you need to consider your culture when communicating anything.
>
> **[2:23](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=143)** This is not a time to attempt to do something that causes alienation or other negative reactions that can be avoided just by understanding the culture and personalities you're dealing with.
>
> **[2:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=155)** Another pro tip is to rely on the automation of information dissemination that's often built into using FinOps tooling, such as cost governance, cost monitoring, and cost observability.
>
> **[2:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/communicating-the-finops-plan-to-operators-and-stakeholders?u=76281980&t=166)** The more humans need to be in the process of informing all involved with the FinOps processes, the better it typically works.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Best Practices:** pro tip (1)
> **Speakers:** - [instructor] (1)

#### Identifying the steps in your FinOps plan
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=0)** - [Instructor] At this stage in planning, we would likely have a solid FinOps plan, and we've already begun to understand concepts such as cloud spending visibility, cloud spending benchmarks, and how to push the plan out to others in the organization, including operators and stakeholders in our business.
>
> **[0:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=17)** Next, we need to define the steps to take to implement our FinOps plan, and include these people within the plan-making process.
>
> **[0:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=26)** We're doing it at this stage for a few reasons.
>
> **[0:29](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=29)** First, we're going to need buy-in from those that actually have to do the work to roll out our FinOps strategy, tactics, and tooling.
>
> **[0:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=37)** You'll do best if you include them in the planning of what needs to get done.
>
> **[0:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=41)** Second, while we may have a good solid, high-level plan that defines the logical steps in FinOps for our cloud use, we now need to define the physical implementation, which is all about the details and the technology processes and skills we're actually going to leverage.
>
> **[0:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=59)** So currently, the FinOps plan defines what and why FinOps needs to be adopted, and how it fits logically within the current cloud deployments.
>
> **[1:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=69)** Now, we need to establish and define the steps for how this gets done.
>
> **[1:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=73)** We can't have a good FinOps deployment without defining the whys, the whats, and the hows.
>
> **[1:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=79)** Each is needed to define a complete picture.
>
> **[1:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=82)** Determining the steps to carry out a FinOps plan means that we're breaking the concepts out into specific tasks.
>
> **[1:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=88)** For example, cloud spending visibility is a concept, and the steps needed to achieve cloud spending visibility objectives may be different depending on your cloud deployment.
>
> **[1:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=98)** For us, we may need the steps to include tagging, setting up cost monitoring, sending specific alerts, and steps to take if the spending is out of a budgeted threshold.
>
> **[1:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=111)** The same can be said pertaining to other FinOps concepts.
>
> **[1:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=114)** It's one thing to have the logical concept named in the FinOps plan that you've created.
>
> **[2:01](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-the-steps-in-your-finops-plan?u=76281980&t=121)** Now, you need to figure out the steps needed to carry out that concept to find the best FinOps processes, and thus, bring the most value back to the business for the cloud spending that will be occurring.

> [!info]- Semantic Content
>
> **Analogies:** such as (1), picture (1), for example (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Assigning roles in your FinOps plan
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=0)** - Assigning roles and responsibilities for those responsible for making FinOps work for your Cloud deployment relies more on an understanding of people than actual tasks that need to be carried out.
>
> **[0:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=11)** This is due to the fact that you're getting FinOps done through people unless you need to have the right motivations, the right talent, and the right technology and training to accomplish what you need them to accomplish.
>
> **[0:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=25)** The best way to define and assign the right FinOps roles within your organizations to accomplish your FinOps plan is to focus on three major categories of roles.
>
> **[0:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=34)** Strategic, tactical, doers.
>
> **[0:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=37)** Strategic are those that play more of a leadership role.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=40)** A decision maker who may understand FinOps and how it's being deployed, but do not always interact with FinOps tools on an ongoing basis.
>
> **[0:50](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=50)** These people in the organization may include the head of finance, meaning the CFO who's responsible for the whole FinOps strategy, forecasting and FinOps reporting.
>
> **[1:01](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=61)** They may deal with other sea-level executives on a daily basis and are the interface to the board of directors, or the investors, and or stockholders.
>
> **[1:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=71)** Next, we need to consider the tactical roles which are typically more numerous, but no less important.
>
> **[1:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=77)** These roles may be made up of the IT managers who are responsible for full infrastructure visibility and observability which leads to resource usage optimization.
>
> **[1:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=88)** Or team leaders that are able to manage the FinOps processes and tooling directly and coordinate between the teams.
>
> **[1:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=96)** Finally, the doers.
>
> **[1:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=98)** These are those that design, build and test Cloud-based applications, including architects, DevOps engineers, test engineers and operational engineers that are responsible for their proper resource usage in their own responsibilities daily.
>
> **[1:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=112)** They actually carry out most of the FinOps data gathering and optimization needed to pull off a solid FinOps plan.
>
> **[2:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=120)** You may not know that for all, but a few of the Cloud related roles that may just focus on FinOps, that most of these roles include FinOps as an added set of responsibilities.
>
> **[2:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=132)** For example, the CFO, while charged with making FinOps work, perhaps is working with the CIO certainly has other things on his or her plate other than just thinking about cost optimization using FinOps processes and tooling.
>
> **[2:29](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=149)** Thus, it's important to keep this in mind when allocating responsibilities.
>
> **[2:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=153)** Understanding that just adding tasks without consideration of other responsibilities that may need to change will just put more stress on people that you'll need to be successful.
>
> **[2:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=164)** You won't want them leaving the organization if they feel that they're having work piled upon them.
>
> **[2:50](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=170)** You'll find that people are the core mechanism for FinOps success and not just the implementation of processes and tooling.
>
> **[3:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=180)** If you don't do a good job in defining the roles and responsibilities around your FinOps plan, you'll find that failure is a foregone conclusion.
>
> **[3:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/assigning-roles-in-your-finops-plan?u=76281980&t=187)** People in culture are where FinOps succeeds.

> [!info]- Semantic Content
>
> **Env Vars:** cfo (2), cio (1)
> **CLI Commands:** find (2)
> **Code Keywords:** interface (1), finally, (1)
> **Prerequisites:** you need to have (1), you'll need (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - assigning (1)

#### FinOps and compliance and agreements
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=0)** - [Instructor] You have a few legal issues to deal with when implementing FinOps planning.
>
> **[0:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=4)** They are state, province, city, county, federal and other government regulations that have to be complied with or you'll pay a heavy fine go to jail or both.
>
> **[0:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=16)** For example, some countries don't allow for private data to be sent outside of the country.
>
> **[0:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=21)** Privacy policies and other agreements and contracts that you may have with customers or suppliers.
>
> **[0:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=28)** For example, if you signed a privacy agreement with a customer, then you'll need to live up to that agreement, including terms and duration.
>
> **[0:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=38)** Agreements that you have with cloud providers including pricing, terms, service level agreements, or SLAs, or other new or existing agreements that all should follow.
>
> **[0:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=49)** Government regulations are very much in play when considering FinOps considering that they determine how data should be handled.
>
> **[0:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=56)** And thus we need to consider the cost of doing so as part of the FinOps planning and deployment.
>
> **[1:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=62)** For instance, if we have to express the data from a cloud provider as part of the regulatory compliance where the data needs to be stored on two different providers to create redundancy in case of loss data then we need to understand the cost of doing that and build it into our FinOps planning and deployment.
>
> **[1:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=80)** Other things that we need to consider is the cost of logging and supportive audits and special encryption requirements.
>
> **[1:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=87)** Current agreements, policies and other contracts need to be considered as a part of FinOps when dealing with the way that the data needs to be processed and even how audit logs need to be kept.
>
> **[1:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=99)** These very great deal and are defined in terms of other agreements, specifically how private and confidential data should be handled.
>
> **[1:48](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=108)** Finally, and perhaps most importantly is the agreement that you have with your cloud providers.
>
> **[1:53](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=113)** This is very important to FinOps because the agreements provide the price for the services, terms, how you'll be billed such as per minute or per data stored or perhaps per data transmitted.
>
> **[2:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=126)** You'll find that each cloud provider has their own way of billing and pricing for their services.
>
> **[2:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=131)** Agreements need to be considered carefully when negotiating with a cloud provider or understanding the terms and prices to be built into the cloud cost monitoring and observability tooling so we can accurately determine what the cloud services cost, will cost, and how to properly forecast spending.
>
> **[2:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=150)** The reviewing agreement aspect of FinOps is often overlooked, and if so, you do so at your peril.
>
> **[2:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=159)** Missing these items means cost overruns due to not understanding regulations or inaccurate cloud service forecasting due to someone not understanding the details of the agreement with the cloud provider.
>
> **[2:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-and-compliance-and-agreements?u=76281980&t=171)** Don't neglect this aspect of FinOps.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), for instance (1), such as (1)
> **Code Keywords:** private (2), finally, (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### FinOps collaboration and culture
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=0)** - [Narrator] Culture is key to the success of FinOps.
>
> **[0:03](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=3)** This is for a few key reasons.
>
> **[0:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=6)** People and processes are more important than tooling and technology in carrying out FinOps tasks.
>
> **[0:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=11)** Thus, you need to have people that are engaged and a culture that promotes engagement with FinOps as a concept, so all tasks have a better chance of being carried out successfully.
>
> **[0:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=22)** Building a culture that supports FinOps extends beyond just the people who are currently running FinOps.
>
> **[0:29](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=29)** Once you establish a culture of FinOps excellence, those entering the organization will understand quickly that FinOps excellence and continuous improvement are valued greatly.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=40)** And if they are looking to be successful there, they will value these concepts as well.
>
> **[0:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=46)** Building a successful culture requires collaboration or open communication channels that exist between all that are involved with working FinOps on a daily basis.
>
> **[0:57](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=57)** Having an open and honest flow of information around how the current FinOps processes and tooling is working, or perhaps needs improvement, leads to an ongoing culture of improvement.
>
> **[1:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=69)** In this culture, people are not afraid to speak their minds and problems are never ignored.
>
> **[1:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=73)** People admit mistakes and are not punished for doing so.
>
> **[1:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=77)** You offer assistance when you can and ask for assistance when you need it.
>
> **[1:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=82)** Culture is perhaps the easiest FinOps concept to understand, but most difficult to pull off.
>
> **[1:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=88)** Those who deal with toxic and dysfunctional business cultures understand how it's very difficult to change direction.
>
> **[1:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-collaboration-and-culture?u=76281980&t=94)** Building new cultures such as productive cultures in support of FinOps is likely the largest challenge you'll face when implementing FinOps.

> [!info]- Semantic Content
>
> **Code Keywords:** extends (1)
> **Analogies:** such as (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [narrator] (1)

#### Challenge: Approach cloud spending visibility for Henry's Hammocks
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=0)** - [Instructor] Your challenge.
>
> **[0:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=6)** You've been hired as a cloud computing consultant, specializing in cloud FinOps to work with a company called Henry's Hammocks or HH for short.
>
> **[0:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=15)** You've learned on their website that HH is a direct to consumer, D2C, company that sells custom high-end hammocks to hammock enthusiasts throughout the world.
>
> **[0:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=24)** They're considered to be the best in the business, specializing in lightweight and strong fireproof camping hammocks.
>
> **[0:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=31)** This D2C sales model allows HH to sell at a good discount in the market and deliver great value in the minds of the customers.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=40)** Moreover, HH has a fully automated supply chain, meaning that demand for hammock production is typically through website sales is automatically translated into raw materials orders and tracking, as well as integration with hammock production scheduling.
>
> **[0:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=56)** Just as a note, we'll use HH as a case study throughout this course but you don't need to have gone through any of the other case studies to work this exercise.
>
> **[1:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=67)** They can be done independently.
>
> **[1:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=69)** So let's go to our first meeting.
>
> **[1:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=72)** Your first meeting is with the CIO of HH, Janet Smith, who provides you with the following information.
>
> **[1:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=79)** Janet states that HH is moving to cloud-based platforms from a small data center housed within the hammock production building.
>
> **[1:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=87)** She further states that they will be moving 22 applications, including inventory control, production management, accounting and sales management to the Amazon Web Services cloud.
>
> **[1:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=100)** 10 databases, including an existing Oracle database, supporting the inventory and production management applications, and MySQL databases supporting the remainder of the applications.
>
> **[1:53](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=113)** Janet explains that HH understands that before they complete their move to a public cloud that they need to establish FinOps approaches, tooling and a culture that is best able to support FinOps.
>
> **[2:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=125)** Janet is coming to you for help.
>
> **[2:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=127)** You've been asked by Janet to do the following in preparation for adding FinOps processes and tools to the HH cloud solution, specifically looking at cloud spending visibility as covered previously in this section.
>
> **[2:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=139)** The core questions that Janet would like answered includes defining at least two of the major concepts that HH needs to consider that you believe are most important when defining cloud spending visibility for HH's new cloud deployments.
>
> **[2:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=154)** She would like you to explain specifically why you believe these to be the top two cloud spending visibility concepts to be considered.
>
> **[2:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=163)** She can also explain it to Henry who's the CEO of the company.
>
> **[2:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=167)** Also, Janet would like you to define at least one cost optimization approach listed in this course so far that you believe is correct for HH.
>
> **[2:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=176)** Also, she's asking you to define the technology leveraged to automate that approach and has asked that you explain why you feel that approach and/or technology is important to HH.
>
> **[3:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=189)** Again, for her future conversation with Henry.
>
> **[3:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=193)** Janet is just looking for a verbal response and thus, you can either write down your answers or keep them in your head.
>
> **[3:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=199)** However, Janet has asked that your responses should be brief and to the point with the response to each question being something you can explain in a single minute.
>
> **[3:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=208)** Janet asks that the focus here be to understand FinOps concepts and consider them within the use case of HH.
>
> **[3:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=217)** Note that there will be other challenges and solutions forthcoming in this course.
>
> **[3:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-visibility-for-henry-s-hammocks?u=76281980&t=221)** Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** d2c (2), cio (1), ceo (1)
> **Code Keywords:** let (1), public (1)
> **CLI Commands:** mysql (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Review the potential solutions you can leverage
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=0)** - [Lecturer] Before we discuss possible solutions, it's good to keep in mind that you may have other ideas of concepts not mentioned in this course as of yet.
>
> **[0:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=13)** They may be perfectly legitimate options.
>
> **[0:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=16)** Again, we're looking for concepts related to FinOps and the specific topic of cloud spending visibility.
>
> **[0:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=22)** There is no need to list the answers verbatim only that you're able to explain the reasons you feel strongly about some concepts over others.
>
> **[0:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=30)** Thus, you can certainly say predicting cloud spending as another way to describe forecasting which would be acceptable because functionally it's the same concept, thus like horseshoe getting close counts.
>
> **[0:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=44)** Again, we're only dealing with the rudimentary information here that we understand about HH.
>
> **[0:48](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=48)** Obviously, more information provided would perhaps lead to a different response.
>
> **[0:53](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=53)** The idea here is that you understand the concepts that you can leverage to solve FinOps problems including cloud spending visibility, using only a limited amount of information.
>
> **[1:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=64)** You can make your own assumptions to fill in the missing pieces if you'd like.
>
> **[1:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=68)** Consider this for all challenges and solutions we're providing in this course.
>
> **[1:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=73)** Let's review some of the ways that you could have provided acceptable responses to the question posed to you by Henry's Hammocks and their CIO, Janet.
>
> **[1:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=82)** What are at least two of the major concepts that HH needs to consider that you believe are most important when defining cloud spending visibility for HH's new cloud deployments?
>
> **[1:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=91)** Please explain specifically why you believe these to be the top two cloud spending visibility concepts to be considered.
>
> **[1:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=99)** The response here is to list two of any of the concepts presented earlier in this section and explain your reasons for selecting them.
>
> **[1:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=107)** Let's look at each possible answer and the reasons why you may have found these concepts compelling.
>
> **[1:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=114)** Cost allocation or the ability to label or tag a cloud resource that users are consuming from a public cloud provider, so they can be traced and tracked for cloud costs they are occurring.
>
> **[2:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=126)** In selecting this part as your response, you may have explained that we need to keep track of cloud spending by resource at a detailed level.
>
> **[2:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=134)** Thus there would be no question as to who or what leverage to cloud resource, when, and how much they used.
>
> **[2:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=140)** Thus, we can allocate cloud spending accordingly.
>
> **[2:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=145)** Communications or the ability to make sure that whomever needs to see the cost data at any level of granularity can see it if authorized.
>
> **[2:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=153)** You may have selected this considering that it's not just enough to understand what cloud cost data is, but ensuring that those that need to see it, such as the finance department gets that information in a timely manner, so it can be acted upon.
>
> **[2:48](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=168)** Forecasting or the ability to understand not only what costs are being incurred right now, but what costs will likely be in the near future.
>
> **[2:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=178)** This is a compelling concept considering that HH will need a sound forecasting mechanism and approach to make sure that most of the spending is planned for and nothing is a surprise.
>
> **[3:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=189)** Accountability or holding those cloud service consumers accountable for using cloud resources, and thus spending money.
>
> **[3:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=195)** This may sound brutal, but you may point out to HH that we need to have accountability for any machine or human that leverages a cloud service.
>
> **[3:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=205)** Not having accountability means that there will be no consequences for overspending on cloud service usage, which means going over budget and thus removing resources from other areas of the business where they are best needed.
>
> **[3:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=219)** Finally, optimizing costs is part of spending visibility as well and that they're not only looking to track spending but optimize the amount of value of resources, of the resources we're consuming for the least amount of money.
>
> **[3:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=234)** If you selected this FinOps concept, you may have explained that the reason was that it's only one thing to gather spending data and provide visibility into what's being spent in the cloud.
>
> **[4:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=245)** However, it may be more important to leverage this data to provide automated ways to optimize cloud costs, meaning getting the most from the money that's being spent.
>
> **[4:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=254)** We'll dig into this a bit more as we respond to the next question.
>
> **[4:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=259)** Define at least one cloud cost optimization approach listed in this course so far that you believe is correct for HH.
>
> **[4:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=265)** Also define the technology leverage to automate that approach.
>
> **[4:29](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=269)** Explain why you feel that approach and or technology is important to HH.
>
> **[4:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=274)** This does not need to be a long response considering that we listed two good cost optimization solutions already, including automated cost monitoring which is core to cloud cost visibility and cloud cost governance.
>
> **[4:48](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=288)** Keep in mind that automated cloud cost monitoring is just our ability to monitor cloud spending on going as well as maintain historical spending data for forecasting and other purposes.
>
> **[5:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=300)** Cloud cost governance is the ability to place limitations on spending, meaning that we are able to create preset cost government policies that ensure that budgetary limits are not exceeded.
>
> **[5:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=311)** For example, spending more than $10,000 a month on cloud storage for a specific application.
>
> **[5:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=317)** The idea here is that we're using cloud cost consumption information which is monitored by a cloud cost monitoring system or a technology that's able to gather spending data directly from the cloud provider and act upon it.
>
> **[5:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=331)** This includes doing such things as alerting the cloud administrator when a specific spending threshold has been reached.
>
> **[5:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=339)** This optimizes cost because it promotes better behaviors by providing cloud cost spending information to anyone that needs it.
>
> **[5:48](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=348)** Cloud cost governance is also related to cloud cost monitoring, where these cloud cost systems are able to work with external cloud cost monitoring systems or may have monitoring integrated.
>
> **[6:01](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=361)** Cloud cost governance is really the enforcer of spending roles, meaning that we're able to set spending policies within these tools and they can take proactive action to ensure that these spending policies are followed.
>
> **[6:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=374)** For example, disallowing a developer to allocate more cloud storage than is actually needed or budgeted.
>
> **[6:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=381)** In many instances, these are just avoidable mistakes and cloud cost governance systems provide guardrails to ensure that these mistakes are not made in the first place, not just providing information that may or may not be acted upon.
>
> **[6:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=395)** Hopefully you found this exercise useful.
>
> **[6:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=397)** Again, the idea here is not to memorize and repeat specific concepts.
>
> **[6:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-15251177?u=76281980&t=401)** It's understanding the concepts as to their true meaning and how they are applied within establishing FinOps or a specific cloud deployment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), public (1), finally, (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (2)
> **Env Vars:** cio (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [lecturer] (1)


### 4. Optimizing for FinOps in Your Organization

> [↑ Back to Table of Contents](#table-of-contents)

#### Cloud spending observability
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=0)** - [Instructor] Cloud spending observability provides us with the ability to understand what's going on, not just seeing cost data on a screen.
>
> **[0:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=7)** This means that we're able to ask questions to cost observability systems, and the system should be able to provide an answer.
>
> **[0:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=14)** For example, what percentage of spending increased over the last year, and is this trend likely to continue?
>
> **[0:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=21)** This is not a chat bot, but likely is able to respond with information on a screen that outlines the response to your question.
>
> **[0:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=30)** What's key here is that you get information versus just data.
>
> **[0:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=35)** Observability is about providing insights, not just raw data that you have to figure out yourself.
>
> **[0:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=41)** Observability is not just related to finops, but is a concept that also supports operations and security using different tooling, but the same concept.
>
> **[0:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=51)** Indeed, there are some finops capabilities supported by some of these tools, allowing them to provide cost insights along with operational insights that are more useful.
>
> **[1:01](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=61)** For example, if we have a cloud system performance problem, we may also want to understand the cost impact of that problem as well.
>
> **[1:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=67)** Some observability systems will provide both, which is very useful if you're attempting to define the cost impact of a problem.
>
> **[1:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=75)** You should not get wrapped up in the concept observability more than just understanding the advantage of using cost observability, both as a concept and as a set of tools.
>
> **[1:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=86)** The idea is allowing technology to work in providing the insights you need around cloud spending and planning.
>
> **[1:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-observability?u=76281980&t=92)** You just need to understand what questions should be asked to these systems.

> [!info]- Semantic Content
>
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for example (2)
> **Code Keywords:** continue (1)
> **Speakers:** - [instructor] (1)

#### Cloud spending analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=0)** - [Instructor] Once we have the data, we need to understand what's been spent, by whom, why, when, and how much, as well as many other data points that need to be monitored.
>
> **[0:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=9)** Let's explore what we can do, or better yet, what finops technology can do with that data.
>
> **[0:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=16)** The core value here is analysis of that spending, not only to determine the obvious, such as how much is being spent, on what cloud service over what period of time, but insights that may be even more useful, such as understanding how to optimize spending to minimize cloud computing costs.
>
> **[0:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=35)** Basically, you can report on cloud spending in any way that you need to understand it.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=40)** This is done through the mining of cloud spending data that is built over time using some business intelligence tool, or more likely a purpose built finops tool that allows for specifically the analysis and understanding of cloud spending data.
>
> **[0:57](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=57)** Later in this course, we'll look at a few of these tools as demos.
>
> **[1:01](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=61)** There are dozens of these types of systems on the market, either for specific cloud providers or working across cloud platforms.
>
> **[1:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=68)** What's important here is that we find meaningful patterns in the data and allow us to determine insights that lead to the optimization of cloud spending, and having insights into existing cloud spending, past cloud spending, or perhaps even cloud spending planning through spending forecasting, that may be also supported by the same finops tools.
>
> **[1:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=90)** Examples of these types of analysis may include cloud spending via cloud instances that were not shut down after use and remained running, cloud service usage that cost more than originally inspected, which may highlight a forecasting error that needs to be resolved.
>
> **[1:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=107)** Trends on cloud spending over time, including enterprises spending per cloud brands, such as AWS, versus Microsoft, versus Google.
>
> **[1:57](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=117)** Also, how these trends will likely carry on into the future including opportunities to save money by renegotiating a discount for spending more than you did the previous year, or setting different terms.
>
> **[2:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=129)** The sky is a limit in that the existence of detailed spending data allows us to analyze that data in any way that we would find useful.
>
> **[2:18](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-analysis?u=76281980&t=138)** It's the collection of data over time that's key because you have more options pertaining to how the data is understood and the tools that you can leverage for that data for all types of finops purposes.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), aws (1)
> **Analogies:** such as (3)
> **Code Keywords:** let (1)
> **Env Vars:** aws (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Cloud spending forecasting
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=0)** - [Instructor] Forecasting is predicting as accurately as possible, future outcomes.
>
> **[0:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=4)** We're all aware of whether forecasters who can tell you the likely temperature the next day are sometimes further out.
>
> **[0:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=10)** We're also aware that since nobody can predict the future at 100% accuracy, that they are wrong a certain percentage of the time.
>
> **[0:18](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=18)** This is why forecasting, certainly cloud spending forecasting, is a bit tricky.
>
> **[0:23](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=23)** Even though we have approaches and formulas that we leverage, we can't be 100% sure that our spending forecast is going to be exactly right.
>
> **[0:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=31)** Thus, this is about getting as close as possible to what the likely outcome will be.
>
> **[0:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=37)** We do cloud spending forecasting to create a plan around how money will be spent on cloud computing services moving forward.
>
> **[0:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=43)** This allows us to adhere to a budget and an understanding of what will be spent when, and for what, over a period of time.
>
> **[0:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=51)** Budgeting is the reason that we do cloud spending forecasting, both to understand the future patterns of cloud spending and ensure that we have enough budgeted resources to support that spending.
>
> **[1:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=62)** Cloud spending forecasting is not just guessing as to what money will be spent, and for what purpose, but using historical data, business planning that may be occurring elsewhere, and other data points to come up with a forecasting model that covers a period of time.
>
> **[1:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=79)** Typically, a fiscal year, but it could also be by month or by quarter.
>
> **[1:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=84)** Let's take a look at an example.
>
> **[1:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=85)** Say that we're looking to forecast cloud spending for the next year, and we'll be limiting our forecast to cloud storage spending for one specific cloud provider, such as AWS.
>
> **[1:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=96)** We create the forecasting model knowing a few things that'll help us create a spending forecast for just that specific service.
>
> **[1:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=104)** This includes past spending patterns including how much when, and for what services.
>
> **[1:50](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=110)** We'll need this data to grow the trends in spending within the forecast.
>
> **[1:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=115)** Current price in terms of that service, and if the prices or terms will change during that forecast.
>
> **[2:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=122)** Any changes of the business that would affect cloud spending, such as purchasing a company during the forecasted time, which would spike cloud storage usage as systems are migrated over, or downsizing plan sales acceleration or deceleration, or any event that may alter the amount of cloud storage services that we're leveraging.
>
> **[2:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=144)** Once we have the data, we would use a standard spreadsheet to create the forecasting model, or better, we would use our Cloud Cost Observability tool that should contain our past cloud service consumption data to create forecasting models using their tool.
>
> **[2:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=158)** Obviously, using Cost Observability tool would be the best choice, considering that they are purpose-built to do many FinOps functions, including forecasting.
>
> **[2:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=167)** In using these tools, you simply need to enter the other assumptions, such as changes to the business, and it should be able to create a relatively accurate forecast for you.
>
> **[2:57](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=177)** Even when using a tool to grade our forecast models, it's important that we understand the core reason for doing forecasts and what they entail.
>
> **[3:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-forecasting?u=76281980&t=187)** This will be a concept that makes the optimization of cloud spending easier, since we're attempting never to be surprised by a cloud provider's bill.

> [!info]- Semantic Content
>
> **Analogies:** such as (3)
> **CLI Commands:** aws (1)
> **Code Keywords:** let (1)
> **Env Vars:** aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Cloud spending optimization processes and metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=0)** - [Instructor] Cloud spending optimization requires that we establish metrics to measure how optimized our cloud spending is and create our own processes and procedures for determining what metrics are currently what they were in the past and what they will be moving forward.
>
> **[0:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=15)** Metrics are key performance indicators or KPIs that allow us to measure something over time that reflects how well or not so well are cloud service's cost utilization is.
>
> **[0:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=27)** Examples of metrics would include cloud spending per customer or what we're paying for cloud services and support of just a single customer.
>
> **[0:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=35)** This is helpful because it's focused on the success of the business as well as cloud spending utilization.
>
> **[0:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=41)** Our cloud spending may be increasing, but if the number of customers is increasing as well that revenue should support the additional cloud spend.
>
> **[0:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=49)** Cloud spending for each dollar of gross revenue which is kind of the same thing as cloud spending per customer only now we're tracking gross revenue directly.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=58)** Cloud spending as a percentage of overall IT spending is another way to determine spending optimization.
>
> **[1:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=64)** This is due to the fact that we're looking at cloud spending as related to more traditional IT spending, looking for indications that it's more or less optimized.
>
> **[1:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=73)** This gives you a good idea as to whether or not cloud computing is earning its key.
>
> **[1:18](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=78)** Of course, there are dozens of other spending metrics that you can track.
>
> **[1:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=82)** The metrics you pick should be the most helpful to the business and they will likely be a bit different.
>
> **[1:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=88)** We can also look at more strategic metrics that may tell us a much wider story around your cloud spending optimization but nonetheless helpful when you're looking at the bigger picture.
>
> **[1:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=98)** For example, cloud efficiency as a metric not only tells you if the cloud spending is close to being optimized, which is good, but can provide you with valuable knowledge and support of go-to-market decisions.
>
> **[1:50](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=110)** For instance, how to price some products to generate the best cash flow and income.
>
> **[1:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=115)** We can express this metric as cost of goods sold per customer, divided by revenue per customer, which equals cloud efficiency.
>
> **[2:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=124)** So for example, if cloud cost of goods sold per customer equals $100, revenue per customer equals $200, then it's 100 divided by 200, which equals 0.50, or 50% cloud efficiency.
>
> **[2:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=140)** Of course, you need to track this over time to determine ongoing changes to this metric and use this metric consistently over time.
>
> **[2:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=148)** This will allow you to monitor cloud efficiency that may be going out of a good range and allow you to change things to get it back into range.
>
> **[2:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=156)** Metrics that you select are likely to be unique to your business and how you want to measure cloud spending optimization for your business.
>
> **[2:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=163)** You need not use the metrics listed here but your own creation that better reflects how you want cloud spending optimization to be measured for your organization.
>
> **[2:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=172)** Also, many of these metrics may be functions of your cloud observability tool or tools, which is the easiest way to do this.
>
> **[2:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=179)** Again, you have the data already and running these metrics using that data is just a mouse click away.
>
> **[3:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-processes-and-metrics?u=76281980&t=187)** But again, it's good that you understand what metrics are and the processes and procedures that allow us to measure cloud spending optimization properly.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), picture (1), for instance (1)
> **Code Keywords:** this. (1)
> **Versions:** 0.50 (1)
> **Speakers:** - [instructor] (1)

#### Cloud spending optimization technology
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=0)** - [Instructor] Cloud spending optimization technology.
>
> **[0:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=2)** Some of the confusion around this category is that technologies that optimize cloud spending call themselves many things, such as cloud cost intelligence platforms, cloud cost monitoring and reporting platforms, cloud cost management tools, cloud spending monitoring and governance.
>
> **[0:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=20)** You get the idea that its more helpful to consider what the tools do over what they are called.
>
> **[0:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=26)** Therefore, we're going to call this tool category cloud spending observability tools, which covers a great deal of the types of tools and functionality.
>
> **[0:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=36)** These tools have different and similar features and functions, depending on what the tool offers in terms of monitoring, reporting, cost governance, and supportive metrics in KPIs.
>
> **[0:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=47)** Generally speaking, these cloud spending observability tools provide the following features, cloud spending monitoring and data retention, cloud spending governance, including enforcing spending limits, cloud spending analysis and reporting using metrics or KPIs, cloud spending forecasting and planning, cloud spending alerting and self-healing processing.
>
> **[1:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=68)** Of course, there are many features that may be unique to one tool and not others.
>
> **[1:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=73)** You need to do a great deal of homework around what each tool does, and pick the ones that will bring the most value to your cloud spending optimization processes.
>
> **[1:23](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=83)** As part of this course, we'll look at a few tools using demos so you can see firsthand what these tools look like and what they do.
>
> **[1:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=91)** The core objective with this technology is to support your ability to monitor spending, understand spending patterns, and optimize spending, ensuring that you're getting the most value from each dollar spent on cloud services.
>
> **[1:45](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=105)** I suspect that many organizations will need one or two tools to get a handle on more complex spending patterns across cloud providers.
>
> **[1:53](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=113)** Certainly, considering the movement to multi-clouds, the changing prices and terms need to be tracked along with spending data over time and forecasted in the future.
>
> **[2:04](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=124)** The idea is to automate as much of this as we can, turning the processes over to cloud observability tooling, and not something that human or humans need to track.
>
> **[2:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-technology?u=76281980&t=135)** That would not be a fun job for somebody.

> [!info]- Semantic Content
>
> **Code Keywords:** self (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Cloud spending optimization for business value
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=0)** - [Instructor] Business value is a bit different than business revenue.
>
> **[0:03](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=3)** One is just the amount of money that the business is making over a period of time.
>
> **[0:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=7)** Value ever goes to what the business is worth at any given time and if the value is increasing or decreasing.
>
> **[0:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=15)** Those that have taken business finance courses in college understand that the core objective of a business is to maximize the return of shareholder equity or better put, make the owners money.
>
> **[0:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=26)** Sometimes this could be one person, a family, a group of executives working at the company, or often those that have invested in the stock that the company offers on the public stock markets.
>
> **[0:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=38)** They are all owners nonetheless.
>
> **[0:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=41)** Measuring value that's being created by cloud spending is a bit more complex but not that difficult if you break things down.
>
> **[0:48](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=48)** The core objective of understanding the business value that we're getting from spending includes looking at how cloud spending optimization is generating increasing or decreasing value of the business, looking at how spending optimization can be changed to create more value or drive more value, looking for opportunities for innovative ways to deal with cloud spending, including shifting spending to new cloud services to generate more value for renovation.
>
> **[1:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=76)** The best way to understand this is to walk through an example.
>
> **[1:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=79)** Let's say we're optimizing cloud spending for our company and while we want to maximize cloud spending optimization for the business, we want to increase the value of the company as well.
>
> **[1:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=90)** While we've done a great job on cloud spending optimization, the value of the business has remained flat over the years.
>
> **[1:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=96)** An opportunity as arisen as to shifting cloud spending to support innovation of a new service, and it's been determined that a dollar of cloud spending around developing and supporting this new service will return $3 in value back to the business.
>
> **[1:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=111)** This is compared to existing cloud spending that's supporting the existing business that's only returning $1.50 of value back to the business for each dollar of cloud spending.
>
> **[2:01](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=121)** Thus, if we shift cloud spending to the development of this new service, even if we increase cloud spending overall, it will return more value back to the business, increasing the value of the business through a higher stock price or an increase in overall valuation of the business.
>
> **[2:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=137)** This is known as a value multiplier.
>
> **[2:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=139)** We're able to trace our ability to leverage FinOps back to business value.
>
> **[2:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=144)** This can be seen in businesses moving into new and more innovative spaces, such as healthcare companies investing in health tracking services that not only should increase revenue over time, but also make the holistic business more valuable.
>
> **[2:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=158)** So how can we measure value?
>
> **[2:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=159)** It's a matter of determining a good metric to state value such as spending that goes to more innovation, having a higher value driver multiplier than more traditional business systems.
>
> **[2:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=171)** Thus, the value multiplier may define how cloud spending around this business will generate a specific value multiplier, say 1.2, versus other cloud spending around different businesses that will be a value multiplier of 1.9.
>
> **[3:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=185)** Obviously, cloud spending for higher value multiplier returns more value to the business.
>
> **[3:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=190)** Thus, spending more to move this part of the business along faster returns much more value to the business than cloud spending on more traditional business services.
>
> **[3:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=201)** This is important considering that it's not all revenue that determines success but overall growth and value over time.
>
> **[3:29](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=209)** Thus, you have metrics supporting cloud spending optimization that just look at revenue, which unto unto itself drives some value but that's only half the story.
>
> **[3:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=218)** Of course, this takes an understanding of business, new innovations that are occurring, and that there is consensus around how we're going to measure cloud spending optimization to return more value to the business.
>
> **[3:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-optimization-for-business-value?u=76281980&t=231)** It's also important to mention that most businesses that are doing cloud spending optimization processes and leveraging cloud observability tools need to consider all aspects of the business and build metrics around those objectives.

> [!info]- Semantic Content
>
> **Versions:** 1.50 (1), 1.2 (1), 1.9 (1)
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** make (2)
> **Code Keywords:** public (1), let (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### Cloud spending AI tools
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=0)** - [Narrator] AI-powered finops tools are transforming cloud cost management by bringing advanced observability, analysis, forecasting, and optimization capabilities to organizations of all sizes.
>
> **[0:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=12)** At the core, these tools automatically collect and correlate diverse cloud resources and spend data, offering clear financial and operational insights for both business and technical teams.
>
> **[0:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=25)** Many leading cloud platforms now offer AI-driven finops tools.
>
> **[0:29](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=29)** AWS Cost Explorer provides machine learning based recommendations for right sizing resources, and uncovering spend anomalies.
>
> **[0:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=37)** Microsoft Azure Cost Management delivers automated reporting, forecasting, and optimization suggestions, powered by analytics, Google Cloud's Cost Management suite leverages AI to forecast costs and identify savings opportunities.
>
> **[0:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=54)** Third party solutions like VMware's CloudHealth, Apptio's Cloudability, and Spot by NetApp further extends these capabilities with features such as predictive analytics, custom KPIs, or key performance indicators, and multi-cloud spend visibility.
>
> **[1:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=71)** These platforms use embedded AI and machine learning to recognize usage patterns, spot over spending, and suggest concrete actions, such as adjusting discounts, cleaning up unused resources, or modifying reserve instance purchases.
>
> **[1:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=87)** Beyond reporting, AI tools directly support finops by tying cost to specific teams, projects, or business units, making it simple to enforce financial accountability across the organization.
>
> **[1:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=101)** Dashboards, automated alerts and self-service analytics allow users to quickly answer questions about who spent what, where, and why, Supporting better governance and operational decision making.
>
> **[1:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=115)** with their robust forecasting engines, These tools project future spending based on historical patterns, current trends and planned business changes, which helps organizations set realistic budgets and avoid surprise overruns.
>
> **[2:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=131)** Optimization features are particularly powerful, using AI to recommend resource right sizing, negotiate reserved or spot pricing, and identify areas of inefficiency or waste.
>
> **[2:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=144)** These recommendations are often tied to business focus metrics, such as cost per unit, spending per customer or cloud efficiency percentages.
>
> **[2:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=155)** By automating routine monitoring, governance, and reporting, AI finops tools enable organizations to continuously optimize costs, improve value from cloud investments, and align spending with strategic business priorities.
>
> **[2:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-ai-tools?u=76281980&t=169)** In doing so, they make financial discipline and innovation go hand in hand, supporting a culture of ongoing improvement throughout the cloud lifecycle.

> [!info]- Semantic Content
>
> **Analogies:** such as (3)
> **CLI Commands:** aws (1), make (1)
> **Code Keywords:** extends (1), self (1)
> **Env Vars:** aws (1)
> **Speakers:** - [narrator] (1)

#### Cloud spending governance using AI
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=0)** - [Instructor] AI plays a crucial role in the governance of cloud spending by enabling organizations to monitor, control, and optimize costs with greater accuracy, transparency, and efficiency.
>
> **[0:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=13)** Governance in this context means establishing processes, oversight, and automated controls to ensure cloud spending aligns with business goals, is allocated responsibly, and produces measurable value.
>
> **[0:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=26)** AI-powered cloud spending governance starts with robust observability, the continuous collection, and real-time correlation of data on cloud usage, costs, and operational events.
>
> **[0:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=37)** With advanced observability tools, organizations can move far beyond basic spending dashboards.
>
> **[0:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=43)** They can ask deep questions about spending patterns, detect unusual spikes or waste, and understand the business impact of operational changes or performance issues.
>
> **[0:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=54)** AI enables proactive governance through automated alerts, anomaly detection and policy enforcement.
>
> **[1:01](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=61)** For example, AI-driven tools can identify when spending deviates from predefined thresholds, triggering real-time alerts, and suggested corrective actions.
>
> **[1:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=71)** These tools can also automate reporting and access controls, ensuring spending data is shared securely with relevant teams.
>
> **[1:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=81)** In the realm of cloud cost analysis, AI allows for continuous examination of spend data at a granular level, such as per department, project or application, making, cost allocation, and accountability more precise.
>
> **[1:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=97)** As highlighted in the documents, automated analysis identifies key trends, and root causes of overspending, supporting leadership in making informed governance decisions.
>
> **[1:50](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=110)** AI also strengthens governance through forecasting and optimization.
>
> **[1:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=114)** Predictive models help set realistic budgets while optimization features recommend actions like right sizing resources or renegotiating terms, metrics and KPIs or key performance indicators such as cloud efficiency, spending per customer, and cost per revenue are continuously monitored, and reported to support governance goals.
>
> **[2:18](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/cloud-spending-governance-using-ai?u=76281980&t=138)** Ultimately, cloud spinning governance with AI delivers reliable oversight, enforces cloud financial policies automatically, and establishes an environment where value, efficiency, and accountability are continually improved.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Approach cloud spending forecasting for Henry's Hammocks
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=6)** - [Instructor] As Henry Hammocks or HH continues its migration to AWS, your challenge is to design a robust approach to cloud spending forecasting.
>
> **[0:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=17)** Several core FinOps principles, such as cost transparency, cost allocation, and automated monitoring have been introduced to HH, but forecasting remains complicated by the evolving cloud environment and the diversity of workloads in play.
>
> **[0:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=35)** What you should do and think about.
>
> **[0:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=37)** Identify the specific challenges HH faces in forecasting cloud spending.
>
> **[0:42](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=42)** Consider the impact of varying workload sizes, the introduction of new cloud services, fluctuating demands, such as seasonal hammock sales, and prior gaps in cost visibility.
>
> **[0:53](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=53)** How do these factors make prediction difficult?
>
> **[0:57](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=57)** Considering the role of real-time monitoring and cost allocation, how can automated monitoring tools and strict tagging practices support more accurate, up-to-date forecasting?
>
> **[1:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=67)** How might incomplete or inconsistent tagging undermine your financial models?
>
> **[1:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=72)** Evaluate available AWS native tools for forecasting and alerts.
>
> **[1:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=77)** Access how tools like AWS Cost Explorer and budgets can project future costs based on trends.
>
> **[1:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=85)** And think about potential blind spots in the data due to newly migrated services or unexpected usage spikes.
>
> **[1:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=93)** Plan how to integrate forecasts into operational and budgeting decisions.
>
> **[1:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=99)** How would you communicate forecast results to HH leadership and other stakeholders to ensure timely, data-driven decisions and promote a FinOps culture of accountability?
>
> **[1:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approach-cloud-spending-forecasting-for-henry-s-hammocks-27162078?u=76281980&t=109)** Take some time to consider how cloud spending AI tools can solve these challenges for HH, and in the next video, you'll find the solutions to these challenges.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (3), make (1), find (1)
> **Env Vars:** aws (3)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Review the potential solutions you can leverage
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-27161074?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-27161074?u=76281980&t=0)** - [Speaker] To solve the forecasting challenge for HH, implement automated cost monitoring and tagging.
>
> **[0:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-27161074?u=76281980&t=13)** Use AWS native tools such as cost explorer and budgets in combination with comprehensive tagging policy.
>
> **[0:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-27161074?u=76281980&t=20)** This ensures historical data is segmented by business unit, workload or application, which is crucial for accurate trend analysis and forecasting.
>
> **[0:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-27161074?u=76281980&t=31)** Establish regular forecast review cycles, set up automated cost forecasts and alerts.
>
> **[0:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-27161074?u=76281980&t=37)** Review these forecasts monthly and more frequently during high-variance periods.
>
> **[0:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-27161074?u=76281980&t=43)** Adjusting for newly onboarded workloads are rapid changes in usage, regularly reconcile forecasted costs against actuals to improve model accuracy, make forecasts actionable with HH operations.
>
> **[0:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-27161074?u=76281980&t=59)** Develop reporting dashboards for different business units and share forecast information regularly.
>
> **[1:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-27161074?u=76281980&t=66)** Use the forecasts to inform procurement pricing and marketing decisions.
>
> **[1:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-27161074?u=76281980&t=72)** Embedding the practice into routine discussions to drive a culture of cloud-cost accountability.
>
> **[1:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-27161074?u=76281980&t=77)** Think about how you'll be able to apply these solutions to your business.
>
> **[1:23](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage-27161074?u=76281980&t=83)** Now you're ready to face AWS migration and cloud spending forecasting challenges, especially when it comes to cost transparency, cost allocation, and automated monitoring.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2), make (1)
> **Env Vars:** aws (2)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [speaker] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Automating for FinOps

> [↑ Back to Table of Contents](#table-of-contents)

#### Identifying what you should automate
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=0)** - [Instructor] FinOps is about the automation of as many FinOps processes as possible and you'll hear that as a systemic theme of this course.
>
> **[0:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=9)** However, this does not mean that we don't need to ask questions about what needs to be automated, how to automate, and which processes should be automated.
>
> **[0:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=17)** We'll address how to identify FinOps processing to automate here.
>
> **[0:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=21)** Say we have a core FinOps cost governance process identified as key to enforcing FinOps policies.
>
> **[0:29](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=29)** This means that an alert is generated when users, systems, and even whole divisions of a company approach or surpass budgetary limitations.
>
> **[0:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=39)** We've all gotten that call at some point in our careers where we've overspent on things that had preset budgetary limitations.
>
> **[0:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=47)** The finance people typically are not happy with you and this is no different.
>
> **[0:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=51)** So back to our example.
>
> **[0:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=52)** Let's say that we have identified the learning process for possible automation.
>
> **[0:57](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=57)** This process now alerts a single FinOps operator who is charged with sending out emails to those who are at risk of going over budget.
>
> **[1:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=65)** This typically takes several hours and also includes responding to many questions that may arise from the emails.
>
> **[1:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=72)** Another option would be to automate this process, thus auto generating emails to those at risk of going over their cloud budgets and even providing a chat bot to respond to most of the general questions that may arise.
>
> **[1:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=86)** We're using this as an example because this is one of those processes that we can certainly automate but you really need to ask the question around how this will impact the FinOps processes.
>
> **[1:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=96)** In this case, cost governance.
>
> **[1:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=98)** The trade-off is that this could generate resentment and cause issues with compliance overall.
>
> **[1:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=104)** Some cultures are more willing to deal with chat bots than others, and you have to carefully consider the impact.
>
> **[1:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=111)** However, by automating this process, we're freeing up a human and perhaps to do other more important tasks that's making the FinOps operation run better overall.
>
> **[2:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=122)** So this comes with its own set of complexities, including answering such question as, can this process be automated?
>
> **[2:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=128)** Is there an existing off the shelf solution that exists to automate this process?
>
> **[2:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=133)** Or do I need to build this myself?
>
> **[2:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=136)** How much will it cost automate this process?
>
> **[2:18](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=138)** Also, and as we address before, should we automate this process or will it have a positive or negative impact on FinOps overall?
>
> **[2:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=147)** Thus, it's not that you can, it's should you.
>
> **[2:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=152)** Each of these is taken on a case by case basis.
>
> **[2:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=155)** Some processes are easier to decide to automate if existing solutions exist that you can purchase and if there is an overwhelming positive impact on FinOps, those don't require a great deal of thought.
>
> **[2:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=167)** Some processes, however, are not as easy to decide whether not to automate.
>
> **[2:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=172)** Either because the technology does not exist, thus requiring that we build and maintain the FinOps automation in house, or because humans may respond to automation in a negative and unproductive way.
>
> **[3:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=186)** Would be nice if there was a magical formula to determine whether or not to automate.
>
> **[3:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/identifying-what-you-should-automate?u=76281980&t=190)** But at this point, there's not.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), require (1)
> **Definitions:** means that (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### Automation best practice considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=0)** - [Instructor] Best practices are beginning to emerge around FinOps automation, including looking at how others are successful with FinOps automation and how you can find similar success by using their practices and technology to your own advantage.
>
> **[0:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=14)** Let's review a few of these in this video.
>
> **[0:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=17)** First, automate as much of the FinOps processes as you can.
>
> **[0:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=21)** This is something we've covered thus far and basically says that if we have processes, such as cost monitoring, cost governance, and cost optimization processes that can be automated with little or no human involvement, they should be.
>
> **[0:35](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=35)** Second, ensure that there is a centralized automated reporting and automated optimization of all cloud computing costs, including dynamically updating metrics and forecasts based on changes in spending behavior, prices and/or terms of the cloud provider.
>
> **[0:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=51)** This means that we're able to monitor all of the relevant cloud spending in the enterprise.
>
> **[0:56](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=56)** You do this by looking at how spending may be optimized.
>
> **[0:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=59)** We do this by leveraging dynamic analytics that are continuously changing around changing evaluation criteria.
>
> **[1:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=66)** This criteria may be price, terms, metrics, forecast, and other variables that may change the way that we evaluate and optimize costs.
>
> **[1:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=76)** This solves the problem that business is dynamic and ever-changing, and that's how we analyze and optimize cloud costs and metrics should be as well.
>
> **[1:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=87)** Third is about defining automation that's able to maximize the business value return to the business, not just cost savings.
>
> **[1:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=94)** Many, when starting out with FinOps, focus on cost savings only and cost optimization.
>
> **[1:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=99)** FinOps should certainly focus on those things, but the key metric should be how the value is being generated for the business.
>
> **[1:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=107)** You could find that cloud spending rises in many instances but is justifiable because it's generating more value for the business.
>
> **[1:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=114)** Many cloud spending increases can fall into this category and you should understand how to spot them, else you'll end up saving a dime, but it'll cost the business a dollar in value.
>
> **[2:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/automation-best-practice-considerations?u=76281980&t=126)** Other FinOps automation best practices are certainly a part of FinOps, but you'll find out that you'll have to create your own set of best practices that are directly defining how FinOps is to work best for your business and cost-usage patterns.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Definitions:** is a  (1), means that (1)
> **Code Keywords:** let (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### FinOps automation technology types and usages
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=0)** - [Instructor] It's difficult to categorize the FinOps automation technology that's out there considering that many of these tools do very different things and solve very different problems.
>
> **[0:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=10)** Some may provide narrow functionality such as just automating and shutting down of cloud instances that are left running by mistake.
>
> **[0:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=17)** Others may provide more holistic cost monitoring services that may also shut down instances left running as one of 1000 functions.
>
> **[0:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=27)** We can call this as tools that range from the most simple to the most complex.
>
> **[0:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=33)** All of that said, we can still provide some general categories of these tools focusing more on their purpose versus what each tool actually does to approach the FinOps problem.
>
> **[0:42](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=42)** This is perhaps the best way to understand what tools are out there and how you can categorize tools around purpose to pick the best tools for your FinOps automation deployments.
>
> **[0:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=52)** The general categories of most of the tools that drive automation of FinOps processes includes cloud cost monitoring, cloud cost observability, cloud cost governance, cloud cost forecasting, cloud cost reporting, cloud cost operations management.
>
> **[1:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=68)** Out of all of these tools, there is a need to understand that some of these tools only run within a specific cloud provider such as AWS, Google, and Microsoft, such as the tools we'll see in our demo.
>
> **[1:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=80)** These are tools that are created by the cloud providers themselves or sometimes a third party provider that makes the tool that only supports one specific cloud provider.
>
> **[1:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=90)** Some tools are able to work across cloud providers, which is handy when you need to run several clouds at once and want a single tool to simplify FinOps across these clouds.
>
> **[1:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=101)** Cloud cost monitoring is any tool that's able to monitor costs within a single cloud or across clouds.
>
> **[1:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=107)** These tools provide some automation such as alerting when cost is rising above a predetermined threshold and can carry out such automation as locking accounts that go over the limits.
>
> **[1:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=118)** Cloud cost observability is much like cloud cost monitoring with the focuses on finding insights in cloud cost monitoring data, such as trends that may reveal that costs are likely to be over budget based on current, past, and forecasted cost data.
>
> **[2:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=133)** Automated aspects of this tool may be to send alerts to users and FinOps operations staff around core insights related to FinOps.
>
> **[2:23](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=143)** Cloud cost governance provides the ability to place policies around spending that may or may not be enforced through automation, such as looking at policies around certain types of cloud resources that can be leveraged, but only during off peak hours when the prices are lower.
>
> **[2:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=159)** The automated action that would not allow some resources to be leveraged off peak are governing those resources.
>
> **[2:45](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=165)** Cloud cost forecasting, as we covered already, is the ability to forecast spending that is likely to occur by using past data as well as current business assumptions.
>
> **[2:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=174)** These forecasts kick off automated tasks such as alerting FinOps staffers that the forecast is over initial expectations and take action to proactively reduce cloud spending.
>
> **[3:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=186)** Cloud cost reporting is just that.
>
> **[3:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=188)** Reporting on cloud costs, typically working with cloud monitoring and/or cloud observability tools and automation.
>
> **[3:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=194)** Automated actions may include sending alerts to humans and systems that need to understand the results of cloud spending as presented in a report or on a dashboard.
>
> **[3:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=204)** Business intelligence or BI may also be considered a cloud cost reporting tool.
>
> **[3:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=210)** Cloud cost operations management is any tool that carries out cloud FinOps processes ongoing and could leverage any of the tools recovered thus far.
>
> **[3:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=219)** In many ways, this can be seen as an orchestration tool that oversees monitoring, governance, reporting, forecasting, and other aspects of cloud operations, and is able to automate many of these activities that need to occur in support of FinOps.
>
> **[3:53](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=233)** The automation of FinOps through the use of FinOps tools is the only way that you'll be able to allow FinOps to scale in support of cloud spending management for your cloud deployments.
>
> **[4:03](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=243)** Keep in mind that FinOps needs this technology to work and there are many advantages as you see here.
>
> **[4:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-automation-technology-types-and-usages?u=76281980&t=249)** However, as you can see, there are many types of tools that do many things, and thus the challenge for you is to understand what each does and how to select tools that will be productive for you.

> [!info]- Semantic Content
>
> **Analogies:** such as (7)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Cross-References:** we covered (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Leveraging AI for better FinOps automation
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/leveraging-ai-for-better-finops-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/leveraging-ai-for-better-finops-automation?u=76281980&t=0)** - [Instructor] AI, or artificial intelligence, is a part of most systems these days, and FinOps is no exception.
>
> **[0:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/leveraging-ai-for-better-finops-automation?u=76281980&t=6)** Indeed, AI may be a part of many tools that you may leverage, such as cost monitoring, cost observability and cloud cost operations management.
>
> **[0:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/leveraging-ai-for-better-finops-automation?u=76281980&t=14)** Certainly, cloud cost forecasting can benefit from AI considering that much of that is making estimates based on only partial information.
>
> **[0:23](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/leveraging-ai-for-better-finops-automation?u=76281980&t=23)** The purpose of leveraging AI to bring knowledge processing to cloud cost management, monitoring and observability, such as learning about spending patterns in much the same way we learn as humans.
>
> **[0:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/leveraging-ai-for-better-finops-automation?u=76281980&t=34)** Also, leveraging that knowledge to act upon insights that the AI engine determines the need to generate actions, such as spotting that it looks like the storage spending will exceed the budget for this month, and alert those doing FinOps that they need to take action either to avoid the overrun or manage the impact.
>
> **[0:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/leveraging-ai-for-better-finops-automation?u=76281980&t=52)** Some of the reasons that AI is leveraged for FinOps includes provide oversight for cloud cost monitoring, such as spotting when the data seems erroneous or corrupted.
>
> **[1:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/leveraging-ai-for-better-finops-automation?u=76281980&t=62)** Assist in forecasting, such as leveraging an AI system to better determine growth in spending based on analysis of outside forces, such as the economy.
>
> **[1:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/leveraging-ai-for-better-finops-automation?u=76281980&t=72)** Find waste within the current spending data, such as when storage costs and usage are over or under optimized.
>
> **[1:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/leveraging-ai-for-better-finops-automation?u=76281980&t=80)** AI will become a more valuable tool as FinOps progresses and more FinOps tools, including the ones we covered in this course adopt AI as a core engine to drive better results for the tool users.

> [!info]- Semantic Content
>
> **Analogies:** such as (7)
> **CLI Commands:** find (1)
> **Cross-References:** we covered (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating AI automation processes
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=0)** - [Instructor] Creating effective AI automation processes begins by strategically identifying which business operations can and should be automated.
>
> **[0:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=10)** Not every process is an immediate candidate.
>
> **[0:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=13)** Teams must ask whether automation brings measurable improvements, consider cultural readiness, assess costs, and evaluate if off the shelf or bespoke solutions are required.
>
> **[0:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=24)** A careful case by case approach ensures automation targets process with a high positive impact, such as budget alerting and cost governance, while being mindful of organizational sensitivities and potential resistance from staff.
>
> **[0:42](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=42)** AI driven automation extends beyond simply reducing manual effort.
>
> **[0:45](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=45)** It enables centralized dynamic cloud cost management.
>
> **[0:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=49)** Automation processes should cover areas like cost monitoring, governance, optimization, forecasting, and reporting.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=58)** The ultimate goal is to maximize business value with every automated function supporting broader organizational objectives rather than narrowly focusing on cutting expenses.
>
> **[1:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=70)** For example, implementing automated reporting provides real-time insights and adapts to shifting metrics and usage patterns.
>
> **[1:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=79)** Such automation is not just about cost savings, this is about providing additional business value, meaning that the automation itself is traced to creating more sales, creating more customer satisfaction, or other metrics that increase value.
>
> **[1:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=94)** The technology landscape for automation is diverse.
>
> **[1:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=97)** Tools range from single purpose utilities, such as shutting down unused cloud resources to comprehensive suites that handle monitoring, observability, governance, forecasting, and operational orchestration.
>
> **[1:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=109)** When designing AI automation processes, selecting the right blend of tool categories, cost monitoring for alerts, observability for proactive insights, and governance for policy enforcement.
>
> **[2:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=122)** Forecasting for expenditure predictions and reporting for visibility is critical for supporting scalable, resilient FinOps operation practices.
>
> **[2:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=133)** The scope should preferably encompass both provider specific and cross cloud requirements for holistic management.
>
> **[2:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=140)** Crucially, AI elevates FinOps by learning from patterns, surfacing actionable insights, enhancing forecasting accuracy, and detecting waste.
>
> **[2:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=151)** With AI, automation systems can anticipate anomalies, recommend preventive measures and interactively support decision making.
>
> **[2:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=161)** As AI capabilities expand, more sophisticated and autonomous automation processes will emerge, creating opportunities for businesses to optimize cloud spend and operational efficiency proactively.
>
> **[2:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-ai-automation-processes?u=76281980&t=174)** In summary, building AI automation processes requires a thoughtful blend of strategic selection, best practice adoption, tailored technology and continuous advancement powered by AI.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (1)
> **Code Keywords:** extends (1), function (1)
> **Definitions:** is an  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Dynmaic automation using AI
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=0)** - [Instructor] Dynamic automation using AI in FinOps represents a significant evolution beyond traditional rule-based processes, leveraging advanced algorithms to adapt, learn, and optimize in real time.
>
> **[0:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=12)** The core principle behind dynamic automation is responsiveness.
>
> **[0:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=16)** Automated systems continuously analyze data, monitor conditions, and make adjustments as circumstances change.
>
> **[0:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=24)** This means that AI-powered automation isn't limited to static scripts or scheduled tasks.
>
> **[0:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=30)** Instead, it interprets patterns, predicts future requirements, and triggers actions autonomously.
>
> **[0:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=37)** For example, AI can dynamically adjust resource allocation and budgeting based on usage projections, seasonality, and evolving business needs.
>
> **[0:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=46)** The process begins with comprehensive monitoring.
>
> **[0:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=49)** AI systems collect vast amounts of data from across cloud environments, identifying cost anomalies, consumption spikes, and underutilized assets.
>
> **[0:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=59)** Instead of waiting for manual intervention, the automation framework can immediately enforce corrective actions, such as scaling resources, reallocating workloads, or averting stakeholders, thereby preventing cost overruns and unnecessary waste.
>
> **[1:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=76)** Dynamic AI automation also enhances forecasting.
>
> **[1:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=80)** Unlike simple trend lines, AI models process historical and real-time data to generate accurate, context-aware predictions for spending, usage, and capacity.
>
> **[1:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=92)** These insights fed directly into automation pipelines.
>
> **[1:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=96)** For instance, if projected costs exceed targets, the system might automatically recommend or implement budget constraints, spend down unused resources, or update alerting thresholds.
>
> **[1:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=107)** Crucially, dynamic AI automation supports continuous learning.
>
> **[1:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=112)** As business environments and cloud technologies evolve, AI models adapt, improving anomaly detection, refining optimization algorithms, and personalizing responses to organizational preferences.
>
> **[2:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=125)** This creates a feedback loop in which each automation cycle further optimizes financial and operational outcomes.
>
> **[2:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=133)** To maximize the benefits of dynamic automation, organizations must ensure strong data quality and integrate AI systems across FinOps functions: cost monitoring, governance, forecasting, and reporting.
>
> **[2:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=146)** By doing so, they empower cross-functional teams with timely insights and agile workflows, creating a proactive culture for cost management and value optimization.
>
> **[2:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/dynmaic-automation-using-ai?u=76281980&t=156)** Ultimately, dynamic AI automation transforms FinOps from a reactive, manual discipline into a proactive, self-improving engine for business efficiency.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), such as (1), for instance (1)
> **Code Keywords:** static (1), self (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Demo: FinOps automation with AWS Cost Explorer
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=0)** - [Instructor] So in order to understand how FinOps works, it's probably best that we look at a particular FinOps tool.
>
> **[0:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=7)** In this case, this is going to be a native tool or something that only works with a specific cloud provider, in this case, Amazon Web Services or AWS, and the tool is called Billing and Cost Management with Internet Cost Explorer.
>
> **[0:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=28)** So we'll click into the Internet and Billing and Cost Management system for AWS and we'll look at exactly what it provides us here, and it provides us with some helpful information.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=40)** First and foremost, a cost summary.
>
> **[0:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=43)** It allows us to look at the month to date costs.
>
> **[0:45](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=45)** It allows us to look at the total false forecasted cost for the current month or what we're likely to pay based on our current spending patterns.
>
> **[0:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=51)** And it can look at last month's cost for the same time period and also last month's total cost.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=58)** And you can even view your entire bill.
>
> **[1:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=60)** You can do things like cost monitor for budget status, where you're able to set up a monitoring capability that is going to make sure that you don't overspend your budget for a particular type of service, which is very helpful if you're dealing with multiple users who should have spending limits on what they're able to spend on, from this case, the Amazon Web Services cloud provider.
>
> **[1:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=84)** And even cost anomaly status or the ability to look at monitoring cost anomalies or things that are anomalous within your cost and spending, which means something that's odd, something that really should be brought to your attention, which is helpful with FinOps.
>
> **[1:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=100)** And the fact that we're not only controlling and monitoring costs, but we're also optimizing costs and making sure we're not overspending on this technology.
>
> **[1:50](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=110)** It's also able to show us cost breakdown, group costs by services.
>
> **[1:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=114)** We can look at different services here, account region, cost allocation tag, cost categories.
>
> **[2:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=120)** And here the different services that we used, AWS CloudTrail, Amazon Simple Storage Services or S3 and AWS Audit Manager, AWS Glue, and some of the others that are there.
>
> **[2:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=132)** And you can analyze your cost and cost explorer as well.
>
> **[2:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=136)** And we'll do that real quick.
>
> **[2:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=139)** So in a cost explorer, it allows us to look at what our costs are actually at and allow us to break them down into meaningful things and create reports, things like that.
>
> **[2:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=151)** They're going to be useful to us in terms of how we're going to leverage our cloud resources to the best advantages of the business.
>
> **[2:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=160)** And here, we're able to look at cost and usage overviews.
>
> **[2:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=163)** Again, total cost, average cost per month, cost and usage graphs.
>
> **[2:50](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=170)** And again, the different technologies that we're basically running here.
>
> **[2:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=175)** And this again, is not just for the instance of the technology that we're leveraging, this is holistically for an account span.
>
> **[3:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=182)** In other words, not just our account or basically our instructor demo account that we logged in here, but a span of users, a span of domains in this case of the cloud providers that are going to be under your control are things you have to pay for.
>
> **[3:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=200)** Now, the most important thing here is the ability to go off and create reports because reports will tell us the information, how we want to see it.
>
> **[3:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=210)** And we can do things such as create a standard report for a certain date range, in this case, 03-01-2025 to 08-31, which is the time of recordings, just last week.
>
> **[3:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=226)** 2025 granularity month, dimensions, in other words, the service we're looking to leverage.
>
> **[3:53](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=233)** And we want everything by service.
>
> **[3:57](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=237)** And we can select all.
>
> **[4:01](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=241)** Apply.
>
> **[4:03](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=243)** We can use the linked accounts or basically the different accounts that are there.
>
> **[4:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=247)** We're going to go ahead and select all.
>
> **[4:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=249)** So our account, everything else that's under the region.
>
> **[4:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=252)** We can look at the regions or basically where we're going to be looking at the cost, where the costs were spent.
>
> **[4:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=262)** We can look in Northern Virginia, things like that.
>
> **[4:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=264)** In this case, we're going to select all of them.
>
> **[4:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=270)** Sorry, instant type region.
>
> **[4:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=274)** Select all Apply.
>
> **[4:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=283)** And this will allow us, as you see, it changes cost and usage overview.
>
> **[4:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=287)** So we're able to slice and dice how Amazon Web Services is billing us and look at the information or the cost information in any way that's going to be most beneficial to us.
>
> **[4:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=299)** And again, we can bring this down to the lowest granularity down to the user, down to the service, you know, down to the region, down to a very narrow timeframe, or we can look holistically.
>
> **[5:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=309)** In other words, we can look at what we spent, in say, the last three years in terms of an S3 service, and who use that S3 service and for what purpose.
>
> **[5:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=317)** So, it's extremely useful in understanding the source of the cost, the source of the billing.
>
> **[5:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=324)** So other things we're able to do would be usage types.
>
> **[5:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=327)** We'll go ahead and select all, apply.
>
> **[5:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=332)** Usage type groups, not going to select anything there at the resources that we're able to leverage.
>
> **[5:38](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=338)** And those are like S3, AWS Glue, you know, all the resources that Amazon is able to produce are the services that'll allow you to leverage the technology or, basically, assemble these cloud services around application use cases, things like that, cost categories, and tags.
>
> **[6:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=360)** You got to remember, there's also the ability to tag these resources.
>
> **[6:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=365)** In other words, we can tag them not only for what they are, but for their particular usage.
>
> **[6:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=370)** In other words, when we allocate an S3 storage group or a database, things like that, we can tag that for a particular use, and we can use this here as the ability to find tags, and we don't have anything set there yet.
>
> **[6:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=382)** And as we do this, you'll see that the costs change and we can go through here and change some things.
>
> **[6:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=387)** We can say usage type, and instead of select all, we will just say, we'll apply, no, and you'll see the cost change there.
>
> **[6:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=399)** Instance type, and we're just going to look at simple DB.
>
> **[6:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=404)** And click select all and see what that changed.
>
> **[6:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=407)** So notice we didn't use any simple DB resources during the time range that we had, so we can go ahead and understand that we didn't occur any of those costs.
>
> **[6:57](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=417)** Now, if I wanted to add it back in, add additional systems, the cost is going to go up.
>
> **[7:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=422)** So I can eliminate that.
>
> **[7:03](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=423)** Obviously, the cost is going to go back.
>
> **[7:05](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=425)** And I can look at different kinds of systems.
>
> **[7:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=430)** I can exclude different kinds of systems, things like that.
>
> **[7:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=433)** Regions, we can look at, since I had select all.
>
> **[7:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=440)** And we'll just say, oh, let's see if we did anything in Canada Central here.
>
> **[7:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=445)** Apply that, and zero, nothing.
>
> **[7:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=448)** So, the handy thing here is that in Cost Explorer, which is the tool we're looking at here, this is a demo of that, your ability to slice and dice all kinds of things that allow you to understand who's using what resource, how much they used, how much it cost you.
>
> **[7:47](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=467)** And therefore, with this accountability, you can put limitations on those resources.
>
> **[7:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=472)** You can, but put budget constraints around those resources to limit its use by individuals, which is important because people can sometimes turn a service on, leave it on for a long period of time, and then suddenly, you get a very high cloud bill for basically a service you had running for a long period of time that you had no use for.
>
> **[8:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=488)** So, this avoids that, and it's a handy tool.
>
> **[8:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=492)** And you got to remember that all of the cloud providers out there, Microsoft, as well as Google, as well as AWS, which is the one we're looking at here, provides similar tools.
>
> **[8:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=501)** They have to, because they have to put the power of cost control into the hands of the people who are using it.
>
> **[8:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=506)** And it doesn't matter if they're using just a single account.
>
> **[8:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=508)** So, in other words, a person's you know, signing up for AWS and they may be using a few hundred dollars a month and doing application development, deployment, things like that for their websites, whatever.
>
> **[8:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=517)** Or it could be a massive enterprise that is using AWS services and they're doing so under the same cost domain.
>
> **[8:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=526)** And so in other words, they're looking across, not only at the different services and how they're used, but who's using them, which departments for what purpose, what tags are done.
>
> **[8:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=534)** So, just a complete ability to look at a very complex array of cost metrics and figure out which ones are going to be germane to your particular business case.
>
> **[9:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=547)** In other words, how much of these are being used and how much business value is being returned from the utilization of these resources.
>
> **[9:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=554)** And by the way, another part of FinOps, how we can optimize these systems to make sure that we're using these resources in a way that's going to be optimized to return the most value to the business.
>
> **[9:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=566)** So anyway, hope this helped.
>
> **[9:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=568)** You can find free tiers of most of this stuff, most of the different cloud providers.
>
> **[9:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/demo-finops-automation-with-aws-cost-explorer-27150092?u=76281980&t=572)** And if you're able to do it, I urge you to go off and, you know, play around with these tools and understand the power of FinOps in the world of public cloud computing.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (9), make (2), find (2)
> **Code Keywords:** case, (5), for. (2), type, (2), this, (1), let (1)
> **Definitions:** in other words (8), is called (1), is a  (1)
> **Env Vars:** aws (9)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 6. Operating for FinOps Success

> [↑ Back to Table of Contents](#table-of-contents)

#### FinOps continuous improvement
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=0)** - [Instructor] The ops aspect of FinOps is what we're going to focus on in this section of the course.
>
> **[0:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=6)** This is important for a few reasons.
>
> **[0:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=7)** Namely, it's where FinOps actually provides value.
>
> **[0:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=12)** It's one thing to create core FinOps processes and tool selections to automate those processes, but it's another to successfully run them over years.
>
> **[0:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=20)** So we're not only keeping cloud cost monitoring, cost governance, reporting in cloud cost optimization going, but also ABI, or Always Be Improving as we go.
>
> **[0:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=31)** This is the focus of this video.
>
> **[0:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=34)** Continuous improvement is a concept that's a part of traditional and cloud-based operations, as well as DevOps or development in operations.
>
> **[0:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=43)** That simply means we're looking to improve processes, approaches, and tooling as we drive FinOps, never really being completely satisfied with the state of things and consistently looking for new best practices, processes, and technology that will make our FinOps improve incrementally over time.
>
> **[1:01](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=61)** For example, say that we're driving our FinOps processes as a whole, and need to consider how we're improving cost optimization processes and tooling for our multi-cloud deployment.
>
> **[1:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=71)** We're trying new things such as monitoring more or less cost data points and determining how they may improve, or our ability to optimize cloud spending.
>
> **[1:21](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=81)** We could be working to improve a process by adding unused instance monitoring to determine how much waste is occurring on average and how to drive less cost by automating removing those instances left running by some central process versus trusting the developers to do it ongoing.
>
> **[1:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=99)** Most of these improvements are related to automating things that are currently not automated.
>
> **[1:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=104)** When you leave responsibilities in the hands of just humans, often, mistakes are made because, well, they are humans and not machines.
>
> **[1:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=112)** However, automating too much could mean all the manual monitoring is removed, and humans still need to be a part of some of the processes, such as making major decisions such as removing a public cloud and its services from a multi-cloud due to issues with costs and terms.
>
> **[2:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=130)** The key concept here is that we're always looking to improve our FinOps processes and technology solution, and this is ongoing, never stopping.
>
> **[2:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=139)** This may be a weekly scrum meeting where this is discussed, or even a chat channel such as Slack, where it's an ongoing electronic discussion.
>
> **[2:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=147)** There should be staff who are responsible for implementing these IDs and reporting back to the larger team.
>
> **[2:33](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=153)** You'll find that in many instances, you'll attempt something that does not improve FinOps, where many attempts do.
>
> **[2:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-continuous-improvement?u=76281980&t=159)** This is trial and error, or the adage of failing fast to determine what works and what does not.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for example (1)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** public (1)
> **Env Vars:** abi (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### FinOps observability
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=0)** - [Speaker] Operating FinOps Observability systems is not unlike operating observability systems for other concepts such as security and general cloud operations.
>
> **[0:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=9)** The idea is to not only have cloud-cost data coming in from all areas that need to be monitored in all clouds and also some traditional systems, but to leverage the data to find insights or meaning that goes well beyond just looking at raw cloud-cost data.
>
> **[0:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=25)** Thus, this is a bit different from traditional monitoring, as we discussed in a prior video, where we look at some historical and some current data, and decide things in our head as to what the data means.
>
> **[0:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=37)** Observability goes beyond that, allowing you to automatically find hidden meaning, as well as tactical insights around what is going on currently with cloud-spending, and what has occurred in the past, and what is likely to occur in the future.
>
> **[0:51](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=51)** Things that we normally gain from using FinOps Observability may include, spending is trend up, but it's not around more usage.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=58)** It's around optimization of storage resources, in the last few months.
>
> **[1:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=62)** Cost of security is increasing and will increase, and this is related to the rising cost of risk, which is adjusted based on the number of breaches that are occurring outside of the organization, which is an indication of risk for the cloud systems.
>
> **[1:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=76)** Lack of training is causing developer usage of cloud resources to spike.
>
> **[1:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=80)** This is considering that costs are going up with productivity being stable, and mistakes that are costing more money are mistakes that could be avoided with a few more hours of training each month.
>
> **[1:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=91)** FinOps Observability, in order to maintain its operational productivity, needs cost-data that has typically gotten through the cloud-cost monitoring systems.
>
> **[1:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=101)** Observability for FinOps usually populates a database with this information using a unique structure that's designed for specific observability systems, and a structure that better represents how you'd want to find insights into that data.
>
> **[1:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=115)** So, we typically have to deal with a database or databases, core analytical processing, that may or may not include an AI engine, reports or dashboards that are used to provide observability, well observations, internal security to ensure that this data does not fall into the wrong hands, both internal to the company, as well as more traditional hackers outside the company.
>
> **[2:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=137)** Other operational concerns that are related to the specific needs of the observability tool that you're leveraging, et cetera.
>
> **[2:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=144)** None of the FinOps processes and technology are immune from tasking the FinOps team with some work around how they're operated, including security, database administration, and updating the system to continuously improve upon the insights that are being provided.
>
> **[2:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finops-observability?u=76281980&t=159)** This extends to other aspects of FinOps as well, where it's one thing to get a FinOps process and tooling solution up and running, and another to keep it running over time.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Code Keywords:** include, (1), extends (1)
> **Cross-References:** we discussed (1), in the last (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [speaker] (1)

#### Supporting audits
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=0)** - [Instructor] Audits come in the form of internal audits that are looking to validate spending and value return within a company, to external audits that are driven by outside entities.
>
> **[0:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=10)** These entities can be an outside accounting firm that's hired to audit the company holistically, to a government agency that's auditing for compliance purposes.
>
> **[0:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=19)** Whatever the reason, the effects of auditing on FinOps processes, staff, and tools are pretty much the same.
>
> **[0:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=26)** They need to produce any information requested in the formats and organization needed and this needs to be done on demand.
>
> **[0:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=34)** For example, an auditing entity may request that the FinOps team produce an itemized list of all cloud computing spending that occurred over the last year, and they need this information by a specific service such as storage and compute by cloud providers such as AWS, Microsoft, and Google and also by the cloud user that consume these services and created the cloud costs.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=58)** This may be pretty easy to provide since it's basic data that we're collecting using cloud cost monitoring tooling and can even be reported using FinOps reporting platforms and FinOps observability platforms.
>
> **[1:11](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=71)** As long as you're collecting the data, this kind of reporting is possible and easy to generate.
>
> **[1:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=76)** However, it would not be possible if FinOps processing and tooling did not exist which is the case for many organizations.
>
> **[1:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=85)** So what if the data does not exist?
>
> **[1:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=87)** Well, you can certainly go back to each cloud provider and request the data, which they may or may not maintain.
>
> **[1:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=94)** This also means that we need to improve or in some cases, create FinOps processes, so you're prepared to deal with these audits.
>
> **[1:42](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=102)** If we don't, the company may get themselves into some trouble, certainly if there are laws that exist in regards to supporting an audit, but also, you don't have enough visibility into your cloud spending to support the basics of a business using cloud computing.
>
> **[1:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=118)** Audits are something that most people hate, but they are a part of business processing, including FinOps.
>
> **[2:03](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-audits?u=76281980&t=123)** The trick is to be prepared and understand what the audits are attempting to accomplish.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Supporting compliance
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-compliance?u=76281980&t=0)** - [Presenter] Supporting compliance is really much the same as auditing but we're proving that we're complying with state, local, and federal laws and regulations.
>
> **[0:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-compliance?u=76281980&t=9)** Well, this is typically handled through the office of the CFO and not the FinOps team.
>
> **[0:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-compliance?u=76281980&t=14)** The CFO will request some reports and perhaps validation of the cost and spending data to prove to the regulator that we're in compliance with the law or need to take steps to get into compliance.
>
> **[0:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-compliance?u=76281980&t=27)** Not supporting compliance can lead to fines and damage to the reputation of the company around perception of investors or customers.
>
> **[0:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-compliance?u=76281980&t=34)** Thus, it's important to understand what the laws and the regulations are specifically and that FinOps processing data and tooling is in place to comply with them.
>
> **[0:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-compliance?u=76281980&t=46)** Again, this typically means that you're working with your CFO and financial operations team for the company to make sure that they are getting the data that they need to support the audits or other activities around compliance.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-compliance?u=76281980&t=58)** Things that may be asked of you when it comes to compliance may include, but not be limited to, cost data as related to the location of the data to prove data sovereignty compliance that some countries require.
>
> **[1:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-compliance?u=76281980&t=70)** This means that the data is not allowed to leave the country and cloud spending that proves that the data did just that may be needed to validate compliance with these laws.
>
> **[1:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-compliance?u=76281980&t=80)** Cloud spending data is related to tax issues such as deducting cloud spending as part of the tax return of the company, et cetera.
>
> **[1:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-compliance?u=76281980&t=90)** Compliance is one of those things that is not thought much around cloud FinOps, mostly to the fact that other organizations are dealing with the regulators directly and not the FinOps team.
>
> **[1:43](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/supporting-compliance?u=76281980&t=103)** However, as cloud computing becomes more popular and regulators focus more on cloud computing around making laws we'll see more interest in ensuring that cloud FinOps is able to support compliance and even understands what laws need to be complied with.

> [!info]- Semantic Content
>
> **Env Vars:** cfo (3)
> **Code Keywords:** include, (1), require (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [presenter] (1)

#### Defining FinOps operational success
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=0)** - [Instructor] So how do you know if you succeeded in setting up sound operations around FinOps processes and tooling?
>
> **[0:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=6)** It's a matter of setting up metrics for success and then leveraging them to measure if you are successful or not.
>
> **[0:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=13)** Let's focus on what to do and how to do it.
>
> **[0:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=16)** Key metrics as to you having a successful FinOps deployment is different from organization to organization.
>
> **[0:22](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=22)** However, there are some common objectives to consider.
>
> **[0:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=26)** They include cloud cost to value optimization, effectiveness of FinOps reporting, automation to achieve cloud spending optimization.
>
> **[0:36](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=36)** Cloud cost to value optimization refers to the core goal of FinOps to bring the maximum amount of value back to the business for a minimum amount of costs.
>
> **[0:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=46)** While this may seem like an easy concept to understand, the way that you create metrics to measure success is a bit more involved.
>
> **[0:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=55)** First, you need to find the business values we're seeking.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=58)** For some businesses, this will be more agility as to the advantage of using cloud.
>
> **[1:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=62)** Others will value speed to market and others still will value speed to innovation, meaning that we're creating game changing innovations quickly for the business.
>
> **[1:14](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=74)** Second, we need to define spending optimization or the ability to minimize cloud spending, but achieve the maximum business value as we just defined.
>
> **[1:23](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=83)** These are two concepts that work at odds, meaning that the less you spend, you could be driving much less business value, such as the value of innovation.
>
> **[1:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=94)** So there is a balance with what you'll spend on cloud services with the value that returns to the business.
>
> **[1:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=100)** This means that you can under and overspend.
>
> **[1:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=104)** The challenges to find the sweet spot for cloud spending or specific cloud services that drive value at levels where the value is optimized.
>
> **[1:52](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=112)** Effectiveness of FinOps reporting means that we're able to get the right information to the right people or processes and support of Cloud FinOps.
>
> **[2:01](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=121)** This is an important key metric of success considering that it's one thing to monitor the spending, but another to leverage that information effectively.
>
> **[2:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=130)** Thus, it needs to be externalized to humans and processes that can act upon it.
>
> **[2:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=135)** Automation to achieve cloud spending optimization refers to the key metrics of having enough automation of FinOps processes using technology to enable this to happen where the number of manual processes that could be automated is minimized.
>
> **[2:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=150)** Again, we're looking to automate pretty much all of FinOps and your ability to do that defines success.
>
> **[2:37](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/defining-finops-operational-success?u=76281980&t=157)** Success is something you have to define for yourself and certainly leveraging the best practices defined here is a step in the right direction.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), refers to (2), means that (1), is an  (1)
> **CLI Commands:** find (2)
> **Code Keywords:** let (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Finding value with AI FinOps tools
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=0)** - [Instructor] AI FinOps Tools help organizations realize value by fostering continuous improvement in cloud financial operations.
>
> **[0:08](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=8)** Rather than treating optimization as a one-time activity, the tools enable ongoing, incremental adjustments.
>
> **[0:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=16)** Organizations can automate repetitive tasks, identify inefficiencies, and implement best practices through regular review and experimentation, ensuring cloud spending aligns with business objectives over time.
>
> **[0:29](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=29)** Human oversight remains essential with teams collaborating and adapting as needs or technologies evolve, which supports the drive for constant progress.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=40)** Observability is central to AI-powered FinOps tools.
>
> **[0:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=44)** These platforms collect and analyze comprehensive cloud cost data across environments, transforming raw information into actionable insights.
>
> **[0:53](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=53)** This allows stakeholders not only to see where money is being spent, but also understand the reasons behind trends, such as the cost impact of security changes or varying levels of training across teams.
>
> **[1:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=67)** Predictive analytics and automated insights further support decision making it possible to respond proactively to emerging cost issues or opportunities.
>
> **[1:17](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=77)** Supporting audit and compliance requirements is another area where these tools deliver significant value.
>
> **[1:23](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=83)** With reliable, detailed reporting capabilities, organizations are always prepared for internal or external audits.
>
> **[1:31](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=91)** The systems ensure essential data, such as spend by service provider or user, is organized, accurate, and quickly retrievable.
>
> **[1:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=100)** This readiness reduces legal and business risks, supporting data integrity, and gives assurance to both financial teams and [[Executive Leadership]] that regulatory and operational standards are being met.
>
> **[1:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/finding-value-with-ai-finops-tools?u=76281980&t=114)** In summary, AI-enabled FinOps platforms empower organizations to optimize, observe, and audit cloud spend effectively, underpinning better business decisions while maintaining agility and compliance.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### Creating dynamic processes using AI
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-dynamic-processes-using-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-dynamic-processes-using-ai?u=76281980&t=0)** - [Instructor] Creating dynamic processes using AI, as described in the previous videos, centers on the principle of continuous improvement in financial operations.
>
> **[0:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-dynamic-processes-using-ai?u=76281980&t=10)** AI enables systems to automatically monitor performance, identify inefficiencies, and recommend process adjustments without requiring constant human intervention.
>
> **[0:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-dynamic-processes-using-ai?u=76281980&t=20)** This results in evolving workflows in response to changes in cloud use, organizational priorities, and the external regulatory environment.
>
> **[0:30](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-dynamic-processes-using-ai?u=76281980&t=30)** Automation is crucial, reducing manual labor while also allowing human decision makers to focus on strategic oversight and process enhancement.
>
> **[0:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-dynamic-processes-using-ai?u=76281980&t=40)** AI-driven systems gather and analyze vast amounts of operational data to propose incremental improvements, such as adjusting resource allocation, tweaking cost management rules, or flagging new areas of potential waste.
>
> **[0:55](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-dynamic-processes-using-ai?u=76281980&t=55)** These recommendations are regularly reviewed by teams who adapt best practices, experiment with new solutions, and document what works to reinforce organizational knowledge.
>
> **[1:07](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-dynamic-processes-using-ai?u=76281980&t=67)** Dynamic AI processes thrive on ongoing review and collaboration.
>
> **[1:12](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-dynamic-processes-using-ai?u=76281980&t=72)** Staff are encouraged to communicate openly, share findings, and rapidly implement lessons learned from experiments.
>
> **[1:19](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-dynamic-processes-using-ai?u=76281980&t=79)** Over time, this cycle of observation, adjustment, and validation helps organizations remain agile and resilient.
>
> **[1:27](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-dynamic-processes-using-ai?u=76281980&t=87)** The result is a living operational framework that benefits from automated efficiency and the flexibility of human insight, driving measurable gains in performance and cost optimization.
>
> **[1:40](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/creating-dynamic-processes-using-ai?u=76281980&t=100)** In summary, dynamic processes using AI are characterized by automation, constant feedback, and close collaboration, creating financial operations that are adaptable and always aligned with organizational goals.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Challenge:  Approaching compliance for Henry's Hammocks
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approaching-compliance-for-henry-s-hammocks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approaching-compliance-for-henry-s-hammocks?u=76281980&t=0)** - [Instructor] Back to our good friends at Henry's Hammocks and Janet, the CIO of Henry's Hammocks.
>
> **[0:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approaching-compliance-for-henry-s-hammocks?u=76281980&t=9)** The company needs to comply with a law that deals with the country that Henry is doing business with.
>
> **[0:15](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approaching-compliance-for-henry-s-hammocks?u=76281980&t=15)** In that country, customer data is not allowed to be moved outside of the country by any means, including public cloud-based systems.
>
> **[0:23](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approaching-compliance-for-henry-s-hammocks?u=76281980&t=23)** The customer data must remain on a point of presence inside that country, which is just one of the data centers that the cloud providers physically operates.
>
> **[0:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approaching-compliance-for-henry-s-hammocks?u=76281980&t=32)** The regulators in that country require that an audit occur to determine if the laws of that country in terms of the data sovereignty have been complied with.
>
> **[0:41](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approaching-compliance-for-henry-s-hammocks?u=76281980&t=41)** You've been tasked to come up with an approach using FinOps as a way to provide the regulator with that evidence.
>
> **[0:46](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approaching-compliance-for-henry-s-hammocks?u=76281980&t=46)** In this case, using cost data.
>
> **[0:49](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approaching-compliance-for-henry-s-hammocks?u=76281980&t=49)** Janet has asked you to determine the following cost reporting that will provide evidence that the data existed in a cloud data center inside of the country.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/challenge-approaching-compliance-for-henry-s-hammocks?u=76281980&t=58)** This should include an approach and the type of tool that you can leverage to carry this out.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), require (1), case, (1)
> **Env Vars:** cio (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution:  Review the potential solutions you can leverage
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980&t=0)** - [Instructor] So Janet, Henry's Hammock CIO challenged you to determine the cost reporting that will provide evidence that the data existed in a cloud data center inside of the country.
>
> **[0:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980&t=16)** This should include the type of tool that you can leverage to carry this out.
>
> **[0:20](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980&t=20)** There are a few ways to solve this problem, but the best approach is the following.
>
> **[0:25](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980&t=25)** In order to provide proof of compliance with a data sovereignty law that is leveraged by a specific country, we can demonstrate compliance by providing cost reporting for the cloud providers, showing that costs were incurred within a specific region, which means a data center operating within the border of that country.
>
> **[0:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980&t=44)** The reason that this is the preferred solution includes, this is not data from Henry's Hammocks, but data from the cloud provider that's functioning as an objective resource.
>
> **[0:53](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980&t=53)** Thus, there is no conflict of interest in not providing the correct data.
>
> **[0:58](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980&t=58)** It's possible to prove that the data was not copied and that there were no egress fees that states that it was copied outside of the cloud provider's region which would generate a record.
>
> **[1:10](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980&t=70)** Thus, we can prove that it was stored within the country and it was not sent outside of the country.
>
> **[1:16](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980&t=76)** Of course, there are many ways to approach this problem using FinOps, including data access records that generate costs and other ways to determine that the data was used in a way that complies with this specific law.
>
> **[1:28](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980&t=88)** Other state, local, and federal regulations may require that other things be tracked to prove compliance.
>
> **[1:34](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980&t=94)** This could mean the tracking of processing that can be later audited, thus is done by logging the execution of each process to prove that the process was carried out.
>
> **[1:44](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/solution-review-the-potential-solutions-you-can-leverage?u=76281980&t=104)** Or looking at the holistic cloud bills related to a tax event issue, such as not taxing cloud computing costs as some jurisdictions do.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1)
> **Env Vars:** cio (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980&t=0)** - [David] So where do you go from here?
>
> **[0:02](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980&t=2)** FinOps is an evolving area, so part of your journey is to keep up with current thinking around cloud FinOps.
>
> **[0:09](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980&t=9)** For that, you should check out some of the resources on [FinOps.org](https://FinOps.org), which as we discussed earlier is a non-profit organization that assists in defining what FinOps is, including the roles of those who are looking to make a career from FinOps practices and deployments.
>
> **[0:24](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980&t=24)** Other resources would include cloud-related podcasts, such as the ones listed on the screen, and cloud-related blogs that cover FinOps frequently.
>
> **[0:32](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980&t=32)** However, part of your journey is to find your own resources that fit the way that you learn best.
>
> **[0:39](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980&t=39)** If you're looking to make FinOps your career choice, I recommend that you just join a company that needs FinOps staff.
>
> **[0:45](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980&t=45)** This may mean an entry-level position for many of you or if you're already in IT a lateral move building on your previous IT experiences.
>
> **[0:54](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980&t=54)** The good news is that FinOps is a hot space right now and there is a shortage of skilled people.
>
> **[0:59](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980&t=59)** Make sure that if you join a company that's doing FinOps that they are the right cultural fit and are willing to invest in you.
>
> **[1:06](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980&t=66)** You'll need to be a continuous learner to be successful with FinOps, or another cloud computing profession, for that matter.
>
> **[1:13](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980&t=73)** Cloud FinOps is a new and exciting space and one that's likely to grow a great deal as organizations become more dependent on cloud resources and as businesses look to leverage cloud computing to derive the maximum business benefit.
>
> **[1:26](https://www.linkedin.com/learning/finops-essentials-for-cloud-deployments/next-steps?u=76281980&t=86)** Good luck.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (3), find (1)
> **URLs:** [finops.org](https://finops.org) (1)
> **Cross-References:** we discussed (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [david] (1)


## Instructor

- [[David Linthicum]]

## Resources

- Exercise files available

## Skills Covered

- System Deployment
- Financial Operations

## Path Context

### In [[Cloud Strategy Professional Certificate by LinkedIn Learning]]
← [[Cloud for Business- Developing a Cloud Center of Excellence]] | **8 of 9** | [[Including Sustainability in Your Cloud Strategy (2022)]] →

## Part of

- [[Cloud Strategy Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Cloud Strategy Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[Microsoft 365 Teams Administrator Associate Cert Prep Ms 700 Plan Configure And Deploy]] — System Deployment
- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — System Deployment
- [[MLOps Essentials- Model Deployment and Monitoring]] — System Deployment

---

[↑ Back to top](#)