---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: designing-data-governance
url: "https://www.linkedin.com/learning/designing-data-governance"
duration_minutes: 39
duration: 39m
level: Intermediate
updated: 12/12/2023
learners: 118419
skills:
  - Program Design
  - Data Governance
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGGor2paUUm6w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702077125639?e=2147483647&amp;v=beta&amp;t=81DwIQXC9YE_3wWHzqvLVGZudHbiOJi62JKd4rihuS8"
linkedin_topic: Data Science
learning_paths:
  - '[Mastering Data Governance and Ethics](../../Paths/Data%20Science/Learning%20Paths/Mastering%20Data%20Governance%20and%20Ethics.md)'
prev_courses:
  - '[Data Steward Foundations](Data%20Steward%20Foundations.md)'
next_courses:
  - '[Automated Data Governance in Practice](Automated%20Data%20Governance%20in%20Practice.md)'
path_nav: '[{"path":"Mastering Data Governance and Ethics","position":4,"total":9,"prev":"Data Steward Foundations","next":"Automated Data Governance in Practice"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/program-design
  - skill/data-governance
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Designing%20Data%20Governance.md)

![Designing Data Governance](https://media.licdn.com/dms/image/v2/D560DAQGGor2paUUm6w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702077125639?e=2147483647&amp;v=beta&amp;t=81DwIQXC9YE_3wWHzqvLVGZudHbiOJi62JKd4rihuS8)

# Designing Data Governance

> More data is produced and ingested than ever before, yet the number of leaders who say they’re data-driven is decreasing. Today’s businesses produce and ingest too much data for one team or leader to manage it all. That’s where data governance comes in. Organizations today must design data governance—the people, processes, and tools to manage your data at scale—into their business plans. In this c

> [LinkedIn Learning](https://www.linkedin.com/learning/designing-data-governance) | 39m | Intermediate | 118K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Building a data-driven culture](#building-a-data-driven-culture)
- [**1. Find Your Data Framework**](#1-find-your-data-framework) (3 videos)
  - [Clarifying your company's mission statement](#clarifying-your-companys-mission-statement)
  - [Writing your data governance mission statement](#writing-your-data-governance-mission-statement)
  - [What are frameworks, and how can they help data governance?](#what-are-frameworks-and-how-can-they-help-data-governance)
- [**2. Select Data Stewards**](#2-select-data-stewards) (4 videos)
  - [What are data stewards?](#what-are-data-stewards)
  - [Key tasks that data stewards perform](#key-tasks-that-data-stewards-perform)
  - [Differences between business and technical data stewards](#differences-between-business-and-technical-data-stewards)
  - [Motivating data stewards to help](#motivating-data-stewards-to-help)
- [**3. Build Your Data Governance Council**](#3-build-your-data-governance-council) (4 videos)
  - [What is a data governance council?](#what-is-a-data-governance-council)
  - [Finding an effective sponsor for data governance council](#finding-an-effective-sponsor-for-data-governance-council)
  - [Convincing colleagues to join your data governance council](#convincing-colleagues-to-join-your-data-governance-council)
  - [Prioritizing actions for your data governance council](#prioritizing-actions-for-your-data-governance-council)
- [**4. Tackle Your First Data Governance Tasks**](#4-tackle-your-first-data-governance-tasks) (4 videos)
  - [Defining data domains](#defining-data-domains)
  - [Data dictionaries](#data-dictionaries)
  - [Writing data dictionaries](#writing-data-dictionaries)
  - [Prioritizing projects for your data governance council](#prioritizing-projects-for-your-data-governance-council)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps and additional resources](#next-steps-and-additional-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building a data-driven culture](https://www.linkedin.com/learning/designing-data-governance/building-a-data-driven-culture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/building-a-data-driven-culture?u=76281980&t=0)** Businesses own more data than ever before. Yet, fewer business leaders say they're data-driven. Data has no inherent value. You have to give it value by using the right quality data to solve your most pressing business problems. Here's the good news. You can design [Data Governance](../../Skills/Data%20Science/Data%20Governance.md), the people, processes, and tools to manage your data at scale into your business plan. I'm Lauren Maffeo and I'm here to help you connect your [Big Data](../../Skills/Data%20Science/Big%20Data.md) back to your business strategy. When we're done with this course, you'll have a plan to build the data-driven culture that most leaders can only dream of. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1)


### 1. Find Your Data Framework

[↑ Back to Table of Contents](#table-of-contents)

#### [Clarifying your company's mission statement](https://www.linkedin.com/learning/designing-data-governance/clarifying-your-company-s-mission-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/clarifying-your-company-s-mission-statement?u=76281980&t=0)** Whether you manage a sales team or a hospital, you should be empowered to boost your team's outcomes using data. It's been implied that having lots of data is inherently valuable, but if you work with [Big Data](../../Skills/Data%20Science/Big%20Data.md) yourself, you know that's not true. Data has no value if you don't know what it is, where it lives, and how you want to use it within your business. So to make sure that you are using data effectively and achieving the right outcomes with data, you need to start with the basics. Start by clarifying why your business exists. This is often answered in your company's mission statement. The one to two sentences that explain your company's purpose. It guides everything your company does. So if your company has a mission statement already, great. If not, now's the time to create one. You're searching for a single sentence that captures why your company exists and how its existence adds value to the world. Let's look at Warby Parker's mission statement as an example. "To offer designer eyewear at a revolutionary price, while leading the way for socially conscious businesses." This brand has a clear reason for existing. It knows the value it brings and what it aims to offer the world. Knowing the reason why your company exists is the first step towards using data well. Once you know the value your business brings, you can start thinking about how data brings value to your business. Think about your mission statement in terms of using data. This clarity will help you answer a crucial question. What's the point of using data at all? This can be answered when you write a [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) mission statement, which we'll talk about next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1)
> **CLI Commands:** make (1)

#### [Writing your data governance mission statement](https://www.linkedin.com/learning/designing-data-governance/writing-your-data-governance-mission-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/writing-your-data-governance-mission-statement?u=76281980&t=0)** You know why your company exists and the value it brings to the world. Now [Zoom](../../Skills/Software%20Development/Zoom.md) in. How does your company's data fulfill that value? Let's answer that question by writing a [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) mission statement. This statement is your North Star for how to use data in your business. It drives everything from which data stewards you need and how many the projects you greenlight and the timelines to complete them. If you're ever in doubt about why you're using specific data, why you're working on a particular data project, or what you're expected to achieve, your data governance mission statement should answer those questions. So how do you write a data governance mission statement? First, look at your company mission statement through a data-focused lens. How do you use data to achieve your mission? Why do you collect and produce the data that you do? What purpose does it serve? Let's look at Warby Parker's mission statement through a data-focused lens. How might Warby Parker use data to offer designer eyewear at a revolutionary price? What data would they need to achieve that goal? Why do they need this specific data to achieve their mission? Who would collect, clean, and manage this data? Where would these colleagues store the data? In on-premise server? In [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) environment? Maybe neither. After you examine your company mission statement through a data-focused lens, it's time to clarify how you want data to enhance your business in one or two written sentences. The more specific you can be, the better. It's not enough to say, "Our company will give all teams the tools and training they need to make data-based decisions."
>
> **[1:35](https://www.linkedin.com/learning/designing-data-governance/writing-your-data-governance-mission-statement?u=76281980&t=95)** That really means nothing. Instead, try something like this. "Our organization will enable all team leads to access data within our BI analytics software of choice, like [Tableau](../../Skills/Data%20Science/Tableau.md) or Databricks. This will empower everyone to achieve our shared business goal of increasing customer satisfaction scores by 10% by 2025." Warby Parker's data governance mission statement could be, "Our direct-to-consumer model helps our team create data-driven recommendations about which eyewear customers need most. This will help our team improve revenue 12% year over year." This statement will guide everything about their data governance plan and your own, from the data stewards you'll recruit to the projects your data governance council will work on. That's because data governance builds on itself. Your data's mission statement confirms the people, processes, and tools used to enable your data at scale. It also gives your data architects, engineers, and scientists a clear goal to work towards. This is crucial because data governance is often viewed as a compliance check that's divorced from the real work of cleaning, preparing, modeling, and analyzing data. The truth is that if your data governance is separate from your technical work, something went wrong. When data governance starts with a clear statement that shares how you want data to help grow your business, you're on the right track and ready for the next step using a framework.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (8), [Zoom](../../Skills/Software%20Development/Zoom.md) (1), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Tableau](../../Skills/Data%20Science/Tableau.md) (1)
> **CLI Commands:** make (1)

#### [What are frameworks, and how can they help data governance?](https://www.linkedin.com/learning/designing-data-governance/what-are-frameworks-and-how-can-they-help-data-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/what-are-frameworks-and-how-can-they-help-data-governance?u=76281980&t=0)** Once you're clear on your company and [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) mission statements, the next step is to adopt a framework. Think of data governance frameworks like you would software frameworks. Software provides functionality for all, while frameworks make that software specific to diverse applications. Data provides information, while frameworks help you manage that data in unique business contexts. Data on its own has minimal value if you don't know how or why you want to use it. For instance, let's say that your digital marketing director gives your data scientists a set of [Statistics](../../Skills/Data%20Science/Statistics.md) about user behavior on your website. Your [Data Science](../../Topics/Data%20Science.md) team wants to build an algorithm predicting which user demographics are more likely to buy certain [products](../../Skills/Software%20Development/Microsoft%20Products.md) and which web pages each user segment is most likely to visit. In this scenario, data is the statistics which share information about user behavior. A governance framework helps your team apply that data in an accountable, business-specific context. Since frameworks are support structures to build upon, your colleagues have the highest chance of success if they do the marketing to data science hand off with a framework already in mind. You don't have to reinvent the wheel when it comes to using a data governance framework. Several already exist and you can apply them to your own organization. Gartner's data governance framework is especially helpful because it covers the key areas your data governance efforts will need to address. Values and outcomes. A value-based framework ensures that all your efforts to govern [Big Data](../../Skills/Data%20Science/Big%20Data.md) tie back to your organization's mission statement or its reason for existing.
>
> **[1:33](https://www.linkedin.com/learning/designing-data-governance/what-are-frameworks-and-how-can-they-help-data-governance?u=76281980&t=93)** Trust. This helps you maximize data's value while minimizing its harm. [Accountability](../../Skills/Data%20Science/Accountability.md). You know who's responsible for decisions about data across all of your teams. Transparency and [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md). This is a clear rationale for how your organization collects data, which data it collects, and why it does so. If you're collecting user data to profit from it, you need to say so. Risk and security. This keeps your company risk-aware by putting [Data Security](../../Skills/Data%20Science/Data%20Security.md) at the center of your C-suite conversations. Education and training. This is your plan to help all colleagues learn why data governance matters and how they can help. Collaboration and culture. This is the most crucial step of your framework and the toughest. Data governance works when everyone views themselves as its co-creator. So as you review components, think about them in the context of our analytics case study. How can you collect user analytics in a way that those users can trust? How will you reduce risk in the [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) and publication processes? Which teams will collaborate on this work, and who's accountable for which pieces of data? For example, risk and security can be managed by your CISO, your chief information security officer. You'll figure out who owns each section as you identify data stewards, which we'll talk about next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (6), [Statistics](../../Skills/Data%20Science/Statistics.md) (2), [Data Science](../../Topics/Data%20Science.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1)
> **Analogies:** for instance (1), for example (1)
> **CLI Commands:** make (1)
> **Env Vars:** ciso (1)
> **Definitions:** is a  (1)


### 2. Select Data Stewards

[↑ Back to Table of Contents](#table-of-contents)

#### [What are data stewards?](https://www.linkedin.com/learning/designing-data-governance/what-are-data-stewards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/what-are-data-stewards?u=76281980&t=0)** You know the businesses have more data than they know what to do with. On top of that, the average CTO schedule is full as is. So how can you ensure [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) at all stages of every data pipeline? Use data stewards. Data stewards own the strategic and tactical decisions for data within their respective business domains. Stewards serve as trusted advisors, providing key context and nuances needed. For example, a director of customer success could serve as a data steward by owning and offering key insights about customer data that your business prioritizes, like the average response time and the number of new accounts per month. By working in a range of business roles, data stewards lead areas of the business that your data team might not touch. Perhaps most crucially, they are experts in their unique domains, whether that be sales, marketing, product, or legal. They have deep knowledge of the company strategy, customer pain points, collaboration processes, and cultural nuances. This knowledge is invaluable to colleagues in [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md), [Data Science](../../Topics/Data%20Science.md), and [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md). They need those insights to inform their own work. Data stewards can hold strategic and tactical roles. Whomever knows the most about the data you need is best qualified to be its steward. This could be someone in a managerial role or an individual contributor. A tactical individual contributor, example, could be. Let's say your data team must redesign the taxonomy within a database about cars. Before that content reaches its database, a team of statisticians collects, downloads, cleans, and analyzes the data for their specific [products](../../Skills/Software%20Development/Microsoft%20Products.md).
>
> **[1:36](https://www.linkedin.com/learning/designing-data-governance/what-are-data-stewards?u=76281980&t=96)** This expertise varies per statistician, whereas one statistician owns the data for BMWs, another owns the data for Audis. Database users tell your user research team that it's too hard for them to find the data they need within this database. So to help users get more value from your database, your data team must redesign the taxonomies for BMW and Audi products. Your team of data scientists, architects, and engineers will rely on statisticians who can steward their respective data, in this case, data about Audi and BMW vehicles. These stewards will work with your data team to help answer crucial questions like, how is the data for these commodities collected? Who collects this data, and where is it stored before it reaches the main database? How many [Databases](../../Skills/Software%20Development/Databases.md) does this data live in? Are they on-premise or in the cloud? How often is new commodity data released to the public? The statisticians who handle data for Audis and BMWs are closest to this data. They know more about it than anyone else in the organization. That's what makes them essential data stewards. Data stewards don't replace data scientists, architects, and engineers. They work alongside them to give your team the crucial context they need to manage data with confidence. Once you identify data stewards, we'll take a look at the tasks data stewards can perform to help you and your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Data Science](../../Topics/Data%20Science.md) (1), [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md) (1)
> **Env Vars:** bmw (2), cto (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)

#### [Key tasks that data stewards perform](https://www.linkedin.com/learning/designing-data-governance/key-tasks-that-data-stewards-perform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/key-tasks-that-data-stewards-perform?u=76281980&t=0)** You know the data stewards play a key role driving [Data Governance](../../Skills/Data%20Science/Data%20Governance.md). They don't replace data scientists, engineers, or any other key roles. They complement these roles by sharing their expertise about the data in their domains, like sales or product data. But if stewards don't replace other data-focused roles and they're already part of your business, that leaves a big question, which tasks do data stewards fulfill? They can do a lot of things. Data stewards could help your data team define [Metadata](../../Skills/Web%20Development/Metadata.md). Metadata is often called data about data because it helps you find the piece of data that you're looking for. If you're searching for specific data in a database, metadata helps you find it faster. Data stewards are often the best people to write, manage, and share attributes for the data in their domains because they're closest to that data and know which metadata would be most helpful. A customer service director might manage details like customer IDs, addresses, and purchase histories per user. If this director serves as a customer data steward, they can keep clean, organized, and secure records of this data to share with colleagues as needed. Data stewards can also advise on [System Architecture](../../Skills/Software%20Development/System%20Architecture.md). If data stewards lack a data architect's insights and expertise, they can still help architects with their work. For example, a data architect who's redesigning a database will need to understand the IT systems that this database must integrate with. A steward who manages these systems can give crucial context to help the architect build an improved model that supports the right integrations, taxonomies, and so on. If they're the team lead in charge of these systems,
>
> **[1:34](https://www.linkedin.com/learning/designing-data-governance/key-tasks-that-data-stewards-perform?u=76281980&t=94)** they are best positioned to give advice on the best path forward. Contribute to data dictionaries. Data dictionaries are centralized spots for information about data. A great data dictionary helps a system's users find all the details about data that they need in one place. Data stewards can play a key role contributing to these dictionaries as writers, editors, and advisors. Think about a date. You likely have an image in your mind of what a date looks like when it's written out, but dates are written differently depending on context. The UK puts the day before the month, while it's reversed in the US. If you have a sales spreadsheet containing data on transactions from both countries, you could find the same data point, a date written differently. Left ungoverned, this can create problems. Your data on dates isn't uniform, and that can become inaccurate over time. But a data steward managing your sales data knows how to reformat dates within the context of your organization's sales team. They also know how to define a date within this context. After all, the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) "Date" can reference several different things. Data stewards can serve business and technical roles along with performing a wide range of tasks. Engaging them effectively means asking the right questions about the right data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (4), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [System Architecture](../../Skills/Software%20Development/System%20Architecture.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** find (4)
> **Analogies:** for example (1)

#### [Differences between business and technical data stewards](https://www.linkedin.com/learning/designing-data-governance/differences-between-business-and-technical-data-stewards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/differences-between-business-and-technical-data-stewards?u=76281980&t=0)** You might wonder if data stewards must hold technical roles. After all, data scientists, engineers, etc., work with all types of data each day. Aren't they most qualified to serve as stewards? The answer is sometimes, but not always. Remember our example about the taxonomy in our database about cars. Within that process we discussed, business stewards own data for business processes and workflows related to their car types. One statistician/steward owns the process for Audis, the other owns it for BMWs. Both stewards own the [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) scheme for [Metadata](../../Skills/Web%20Development/Metadata.md) and metadata which falls under their areas of expertise. In our car database, a statistician who produces data releases for BMWs would serve as a steward for BMWs taxonomic hierarchies. This involves collaborating with colleagues to make sure that these hierarchies are accurate, organized, informative, and intuitive; collecting data and confirming that this data and associated metadata meets quality standards; reviewing and assessing current taxonomies for commodity line items; writing the documentation required for these commodity line items; and leading [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) training for their departments. Technical stewards own data for systems, pipelines, and implementation. These stewards help colleagues learn how to model, create, maintain, and transfer data between systems. Technical [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) tasks might be to maintain all requirements for system implementations,
>
> **[1:33](https://www.linkedin.com/learning/designing-data-governance/differences-between-business-and-technical-data-stewards?u=76281980&t=93)** manage data marts, data warehouses, [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md), and data [Mesh](../../Skills/Software%20Development/Mesh.md) architecture, build and integrate those systems, define parameters for metadata, confirm which data they need to assign different types of content or assets, set limits for which data users and admins can work with, share advice on how to move data from an on-premise to a cloud-based environment, and build data models and [Algorithms](../../Skills/Software%20Development/Algorithms.md) that are defined by business priorities. Whether they hold business or technical roles, data stewards own the strategic and tactical decisions for data within their respective domains. They act as trusted advisors for their teams, giving context and nuance for the data they know best.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (4), [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (1), [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md) (1)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Documentation:** the documentation (1)

#### [Motivating data stewards to help](https://www.linkedin.com/learning/designing-data-governance/motivating-data-stewards-to-help?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/motivating-data-stewards-to-help?u=76281980&t=0)** Once you found the right colleagues to serve as stewards, you'll be faced with a crucial question, "How can I motivate them to help?" As an organizational leader, finding data stewards has clear benefits for you. It helps you build a multifaceted cross-functional team that shares responsibilities for data ownership. Your data team gains allies across diverse areas from marketing to engineering, and you'll get even more resources to help your data efforts. But that's all for nothing if you can't answer the key question in your stewards minds. What's in this for me? You could be asking your head of sales, senior statistician, or clinical intern to do even more work without any obvious benefits for them. This can lead to resentment and an unwillingness to help. To keep stewards engaged for the long haul, you'll need to respect their time and reward their contributions. That involves giving them credit for the work they're putting towards this effort. So review your stewardship list containing your potential data stewards and make a plan to reward their efforts. These rewards should be tangible, whether through bonuses, increased or discounted stock options, or formally adding stewardship tasks to their job descriptions. This last option positions stewards to exceed expectations in their current roles, making them more likely to get promoted. It rewards expertise they already have and positions them to advance their careers based on sharing their valuable knowledge. Be realistic about what you can do with the resources you have. If your team has an annual budget that doesn't reset until each fall, plan ahead to reallocate some budget for data steward bonuses. These examples assume that you're in a position at work to oversee a
>
> **[1:38](https://www.linkedin.com/learning/designing-data-governance/motivating-data-stewards-to-help?u=76281980&t=98)** budget or influence big business functions, like hiring. If that's untrue for you, this is your chance to manage up. Whether you're in a change management role or you're an in-house data scientist, you're in a position to influence authority. Don't forget all the intangible benefits of stewardship, too. That mission statement you wrote and the mission statement for handling data will help you here. All of your stewards need to unite around a shared goal, but they also need to see how [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) will help them in their own roles. So if you haven't shared these statements with your would-be stewards, now's the time. Remember, every business exists for a reason and every role exists to fulfill that reason. Data stewardship is no different. Every steward plays a part to keep their data clean, increase its quality, and help the business work smarter. If you can get your stewards excited about meeting the same goal, you've won more than half the battle. If you're worried that advocating for data stewards and rewarding them fairly is overstepping, remind yourself that this is what leaders do. They build the best teams they can, then reward them for the hard work that they contribute.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (2)
> **CLI Commands:** make (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** you'll need (1)


### 3. Build Your Data Governance Council

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a data governance council?](https://www.linkedin.com/learning/designing-data-governance/what-is-a-data-governance-council?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/what-is-a-data-governance-council?u=76281980&t=0)** When companies start new initiatives, they sometimes put all the work for that initiative on one team or department. They hire a new chief, task them with transforming the whole business while wielding minimal power, often give that chief an underwhelming budget, and keep their initiatives confined to that team. Approaching digital transformations this way ensures that their work will have minimal impact. [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) councils do the opposite. Once you have your data strategy in place and the right stewards to fulfill it, you'll need a way to keep everyone on the same page working towards the same goal. Data governance councils are a shared space for your data stewards to meet often, share updates on data in their domains, cowork on data projects, and discuss new definitions for your data dictionary. As you build your data governance council, be aware of the following: First, you'll need to ensure that you involve both the right stewards per data domain and the right executive sponsor to advocate for your council's work when you're not in the room. We'll discuss sponsors in more detail later in this chapter. Next, you'll need to convince your stewards and their managers to join the council. And finally, you'll need to do the toughest work of all. Make sure that your work leading the data governance council is productive and meaningful for all involved. Creating a productive data governance council is crucial to your success managing data initiatives. The biggest barriers to building data governance aren't technical, they're cultural. 92% of mainstream companies in one survey said that when it comes to launching data projects in their organizations, they still struggle with challenges that range from
>
> **[1:34](https://www.linkedin.com/learning/designing-data-governance/what-is-a-data-governance-council?u=76281980&t=94)** business processes and change management to resistance against that change. You're designing your organization's first data governance plan, which means you're introducing a lot of change. Create a council that will introduce and champion that change for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (6)
> **Prerequisites:** you'll need (4)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Warnings:** be aware (1)

#### [Finding an effective sponsor for data governance council](https://www.linkedin.com/learning/designing-data-governance/finding-an-effective-sponsor-for-data-governance-council?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/finding-an-effective-sponsor-for-data-governance-council?u=76281980&t=0)** We've all dealt with meeting fatigue, where colleagues try to solve problems by filling our calendar with invitations to hop on a quick call. But one less discussed time suck is not having the right people in the room to make key decisions. Sponsors advocate for your work by ensuring that it gets the resources and visibility to thrive. Rather than spending months searching for buy-in only to realize you've talked to the wrong people, you'll confirm that your [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) council's work has support from someone with the power and connections to advocate for your work, even when your council is not in the room. If you're in a C-suite role yourself, you still need a sponsor. This could be your CEO, a member of the board, or a peer. If you report to the CIO, your boss owns the infrastructure for your organization. Their tasks include signing off on procurement for new tech, implementing new IT across the organization, and ensuring that all IT decisions support the business strategy. Now, consider the work your data governance council will do. You'll start by selecting a data-focused project to shepherd through production. To achieve this goal, your data stewards will need to choose the right tech stack, build processes to confirm [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), ensure that all data meets security standards, and document a strategy to prevent data drift post-production, amongst other tasks. Since this work falls under the CIOs domain, your data governance council will need the CIO's buy-in. But you've glimpsed your boss's calendar and know how slammed they are. Adding chairperson duties, that won't go well. In this case, asking them to serve as your council sponsor is a great option. Whomever your council sponsor is, you will need to sell them on your
>
> **[1:36](https://www.linkedin.com/learning/designing-data-governance/finding-an-effective-sponsor-for-data-governance-council?u=76281980&t=96)** data governance efforts. All the work you did from writing your mission statement for data to assigning stewards per section of your framework should reinforce a bigger business goal. Whatever that goal is, from decreasing overhead to boosting customer satisfaction, you'll find the right sponsor for your data governance council if you show that your work will improve theirs. If in doubt about how to choose the right sponsor for your council, it helps to follow this advice from Sylvia Ann Hewlett. Would-be sponsors in large organizations are ideally two levels above you with line of sight to your role. In smaller firms, they're either the founder or president or are part of his or her inner circle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (5), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Env Vars:** cio (2), ceo (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)

#### [Convincing colleagues to join your data governance council](https://www.linkedin.com/learning/designing-data-governance/convincing-colleagues-to-join-your-data-governance-council?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/convincing-colleagues-to-join-your-data-governance-council?u=76281980&t=0)** If you gain one message from this course, I hope it's that all your [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) work should have a higher purpose. The hype around data, coupled with how quickly it's created, leads most organizations to greenlight data projects without the right strategy for them to succeed. A 2021 executive survey by NewVantage Partners found that while 92% of surveyed firms reported investing in [Big Data](../../Skills/Data%20Science/Big%20Data.md) and AI initiatives faster, most companies either failed to make progress or even lost progress managing data as a business asset. Only 29% achieved transformational business outcomes with data, while less than one in four respondents said their company was data-driven within the past year. That's a decline from 37.8% the year before. With your datas mission statement and data governance framework in place, you're prepared to beat these odds. The next step is to write down what your data governance council will do. These principles define the scope of work for your council and its stewards. They help everyone know why this council exists and what it's going to work on. Consider how other organizations manage data. Universities often have published well-defined data governance principles, given how much data they own. Some, like Washington University in St. Louis, have whole websites devoted to data governance that anyone can read. WashU does a strong job defining who sits on its data governance council and what they're responsible for. The data governance council is comprised of data administrators and other senior officials who have planning, policy-level, and management responsibility for data within
>
> **[1:35](https://www.linkedin.com/learning/designing-data-governance/convincing-colleagues-to-join-your-data-governance-council?u=76281980&t=95)** their functional areas. The data governance [office](../../Skills/Web%20Development/Microsoft%20Office.md) will be ex-officio members. The data governance council will: Review and approve data governance policy, standards, guidelines, and procedures, further the overall vision and guiding principles of data governance, resolve issues escalated by data stewards, escalate issues to the executive IT committee, monitor and review overall data governance program, hold ongoing meetings. Incorporating your data mission statement into your principles is a great way to share it with the organization. Likewise, when writing your council's principles, consider having each principal reflect one part of your data governance framework. If you follow this model, you'll write seven principles based on the framework you learned earlier in this course. Trust, transparency and [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md), values and outcomes, risk and security, [Accountability](../../Skills/Data%20Science/Accountability.md) and decision rights, collaboration and culture, and education and training. Anyone in your organization who uses business data needs principles to inform how they'll use it and who owns it. To help your colleagues out, publish your data governance principles in a shared space where all colleagues can access them. When it comes to sharing your data governance framework and principles, no one should doubt what these are or have trouble accessing them. The more transparent your principles are, the more trustworthy your data governance council will become.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (13), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) (1), [Accountability](../../Skills/Data%20Science/Accountability.md) (1)
> **CLI Commands:** make (1)
> **Versions:** 37.8 (1)
> **Cross-References:** earlier in (1)

#### [Prioritizing actions for your data governance council](https://www.linkedin.com/learning/designing-data-governance/prioritizing-actions-for-your-data-governance-council?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/prioritizing-actions-for-your-data-governance-council?u=76281980&t=0)** As remote work has become more common, the thin line between work and home has blurred even more. A 2020 Harvard Business School survey found that the average workday was now 48.5 minutes longer, and the average employee surveyed in this study joined 13% more meetings than they did before 2020. This matters because employees are exhausted, including your colleagues. Their calendars are likely overbooked already without going into all their family obligations. When colleagues already struggle to do heads-down work during business hours, you'll need to show them what they'll gain by joining the council. Luckily, this doesn't have to be as hard as you might think. Data is a team sport that all colleagues must join. I remember completing my journalism internships in high school and college, giddy at the thought of never needing to measure my work's worth in numbers. Less than a decade later, my digital articles lived and died by [Google](../../Glossary/Service/Google.md) Analytics. No matter your role, data plays a part, even if your work is more qualitative. The traditional hierarchy involves data flowing down from the CIO's [office](../../Skills/Web%20Development/Microsoft%20Office.md) with the IT security team controlling all departments access to it. This approach often fails because folks are less open to rules thrust upon them, especially if they had no say in creating them and can't see how they affect their own work. So when you approach prospective data stewards asking them to join your council, emphasize the power that joining offers them. Each data stewards serving on the council should have recognition that they're experts of their functional domains. If colleagues have questions about specific types of data, they should know whom to ask and acknowledge that stewards
>
> **[1:35](https://www.linkedin.com/learning/designing-data-governance/prioritizing-actions-for-your-data-governance-council?u=76281980&t=95)** expertise. Input regarding decisions about data that affect the organization. Each steward should have a clearly defined freedom to work with the council's chair on matters that impact their own data domains. Autonomy to build [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) standards within their data domains. Freedom to collaborate cross-functionally with colleagues who own different data domains. Rewards for assuming a leadership role advancing [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) in the organization. If you manage a budget, consider allocating some of it to bonuses that you can give each steward. Likewise, find alignment between each steward's role and their work on the council. If their data governance contributions go beyond each steward scope of work, you can offer to write mid-year and/or year-end reviews per steward. This formally recognizes the work that each steward does and positions them to advance in their careers. The common threads in those capacities are leadership, visibility, and the chance to make key decisions with their colleagues. The point is not to make these data governance council meetings the only place where stewards can make an impact. Rather, your goal as council chair is to give each data steward the resources and visibility they need to use data in ways that benefit their career goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (3), [Google](../../Glossary/Service/Google.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** cio (1)
> **Versions:** 48.5 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)


### 4. Tackle Your First Data Governance Tasks

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining data domains](https://www.linkedin.com/learning/designing-data-governance/defining-data-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/defining-data-domains?u=76281980&t=0)** Once your data council and stewards are in place, you'll start working on one of your key projects, defining data domains for your organization. A key part of [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) involves correctly categorizing data within all organizational systems and keeping it consistent across systems. So having all stewards align on data domains is the most crucial project you can start working on. Data domains are logical groups of data that address a common purpose, concept, or object. It helps to think of every department in your organization as its own data domain, each with its own subdomains. For example, [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) is one data domain. Within that domain, HR data has several subdomains like recruiting, onboarding, time tracking, and benefits. The exact number of data domains depends on your industry. In the healthcare sector, you might have patient, facility, and medical procedure. Data domains define the model schema and other attributes for each respective business area. For example, you might choose to have data domains for customers, employees, and [products](../../Skills/Software%20Development/Microsoft%20Products.md). The stewards who oversee each domain will define the attributes, format, and [Metadata](../../Skills/Web%20Development/Metadata.md), which confirms how domains should expect to store the data. Your systems need to know how to store and categorize data across the business, so you must make binary standards that data can fit into. For example, let's revisit the healthcare data domains. If you think of your data domains as a dropdown menu, you would see this list: Patient, facility, medical procedure, location, transaction, legal.
>
> **[1:35](https://www.linkedin.com/learning/designing-data-governance/defining-data-domains?u=76281980&t=95)** Within a database, all data should align with one of these six data domains, and any new data should map up to one of the six. A key part of data governance involves correctly categorizing data within all organizational systems and keeping it consistent across systems. So each data steward will need to build their data domains by choosing how to categorize it. This includes categorizing data according to domains and relevant subdomains. Subdomains help data stewards categorize data at a more granular level. If you've chosen patient as a data domain, you can further break this down according to the types of patients; infants, children, geriatrics, etc. The steward per data domain will need to define each relevant subdomain, ensuring a relationship between each subdomain and its parent. It helps to think of subdomains as types of data domains. So if you've chosen facility as a data domain, consider the types of facilities your business engages. That will help you choose appropriate subdomains which you can use to categorize facility data. Whatever you and your data stewards choose, recall that your goal is to create consistent grouping conventions for essential data types that apply across business units, culture, and systems, technical. Throughout my career in tech, I've encountered roadblocks for teams within the same organization define the same data differently. I've also seen naming conventions that differ based on which department I'm engaging in, even if we were discussing the same data. So having your data governance council define data domains and subdomains is a strong way to avoid this blocker.
>
> **[3:09](https://www.linkedin.com/learning/designing-data-governance/defining-data-domains?u=76281980&t=189)** It establishes your data governance council and stewards as a single source of truth and establishes clear owners of your data per domain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (4), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **UI Navigation:** dropdown (1)
> **Definitions:** is a  (1)

#### [Data dictionaries](https://www.linkedin.com/learning/designing-data-governance/data-dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/data-dictionaries?u=76281980&t=0)** A data dictionary stores information about data that lives in all your organization systems. It gives everyone a shared vocabulary for how to discuss data in your organization. Whether it's the CEO, a developer, or a customer service representative, everyone should reference the data dictionary when they're unsure what certain data items mean. This dictionary is a comprehensive space to define rules, regulations, and definitions for your organization's data. Data dictionaries play a key role in your [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) efforts. They reinforce data domains, subdomains, and help teams avoid inconsistencies with data. Having more consistent data makes it easier to analyze. It gives everyone a shared understanding of what different terms mean, and data dictionaries are also a great way to share data standards. These are rules that explain how to collect, record, and explain data to everyone in your organization. You might wonder how a data dictionary differs from a business glossary. Glossaries have key terms with names and definitions. Subject matter experts write glossaries with business users in mind, so readers shouldn't need high levels of technical acumen. Business glossaries can document [Metadata](../../Skills/Web%20Development/Metadata.md) associated with terms in the dictionary. That said, data dictionaries have some key distinctions. Data dictionaries document relationships between data elements, like data's origins, descriptions, and how they're used relative to each other. The details in data dictionaries allow members of technical teams, like developers and data scientists, to share knowledge with each other and communicate quickly. These details include data structure,
>
> **[1:36](https://www.linkedin.com/learning/designing-data-governance/data-dictionaries?u=76281980&t=96)** type, format, and length. As your data governance council's lead, you'll manage the data dictionary, tracking when folks submit new terms and ensuring that your whole organization can access these changes. Each data steward will manage terms for their respective data domains by soliciting terms, ensuring they're correct, submitting them to the data dictionary, and clarifying as needed. As council chair, you'll define relationships between elements. Stewards define what those elements are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Env Vars:** ceo (1)
> **Definitions:** is a  (1)

#### [Writing data dictionaries](https://www.linkedin.com/learning/designing-data-governance/writing-data-dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/writing-data-dictionaries?u=76281980&t=0)** If you're not sure where to start with your data dictionary, look at a database your organization uses. Data dictionaries act like catalogs that show how data inside [Databases](../../Skills/Software%20Development/Databases.md) relates to each other. These dictionaries grow in importance as you build your analytics stack. Once you start integrating data systems and warehouses, you'll need to know which data lives in each environment and how it relates to other data. I've worked on projects with data dictionaries that were incomplete or nonexistent, and since my team's job was to build our client a new data model, the lack of knowledge about which data lived where, when new data deployed to different environments, and what certain terms meant caused a nightmare. Our team figured it out once they gained system access, but if they had this information sooner, they could have moved to production even faster. To avoid this, check if your database has a dictionary. Systems should have space for data dictionaries built in. If so, use that space to document your own work rather than storing your data dictionary in a separate tool. Your [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) council's work will flow most smoothly if you keep your work stored in as few places as possible. Data projects have a lot of moving parts, and your data stewards have a lot in their plates. So review each database your business uses to store data and confirm if they have data dictionaries. If so, use these spaces to document data elements in each respective database. If these databases offer space for reference data, use that to your advantage, as well. This feature lets you reconcile data between systems, which can help your team find missing records as you move
>
> **[1:34](https://www.linkedin.com/learning/designing-data-governance/writing-data-dictionaries?u=76281980&t=94)** data between systems. Since this is par for the course with big-data projects, you'll want to ensure that your data governance council has documented as much reference data as possible prior to starting each project. Lacking this information up front will cause delays once the project begins. Worse, it can cause consistent [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) risks. So documenting your data up-front will save you and your colleagues major headaches in the long run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (2), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **CLI Commands:** find (1)
> **Prerequisites:** you'll need (1)

#### [Prioritizing projects for your data governance council](https://www.linkedin.com/learning/designing-data-governance/prioritizing-projects-for-your-data-governance-council?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/prioritizing-projects-for-your-data-governance-council?u=76281980&t=0)** Whether your business wants to leverage customer data to make tailored recommendations or build new machine learning models, you can't achieve any data-based goal without a plan to get there. You also can't change everything at once. If your [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) council wants to succeed, you'll need to choose a project that the business cares about. To keep your data governance council focused on the right tasks, choose one specific process that you're trying to improve, and add every single step it takes to currently complete that process no matter how small. Your goal is to show all the work needed to complete one specific process. Your end result will be the blueprint for the step that you'll take next. As you document each step per process, be honest above all else. Each process will have exceptions and/or desired flows, but it's essential to make process maps which accurately show what really occurs. I know this might be nerve-wracking. Even when organizations say they want to use data more effectively, they won't always do the introspective work required. If you're not cringing at your current process map, there's a good chance it isn't honest enough. And without the psychological safety established earlier, your stewards won't feel comfortable telling the truth. As you make this map, it might help to start by listing operations, [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md), and [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) as key departments in Lanes 1, 2, and 3. From there, you can get more granular about which parts of the process each department owns. This is an awesome opportunity to find possible roadblocks and start solutioning for your future state. As your [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) team builds the current state process map,
>
> **[1:31](https://www.linkedin.com/learning/designing-data-governance/prioritizing-projects-for-your-data-governance-council?u=76281980&t=91)** keep some crucial ground rules in mind. You'll note that all the work we've done thus far, from crafting your data's mission statement to building a process map, is cultural. If you don't know why and how you want your business to start using data, any data-focused projects will fail to make their biggest possible impact. On a similar note, if your colleagues worry they'll get punished for telling the truth, they won't be honest about current problems or contribute to solutions. To encourage psychological safety, the University of New Hampshire suggests using these ground rules throughout the process. Keep an open mind to change and maintain a positive attitude. Leave rank at the door. One person equals one voice, regardless of position. Everyone on the team participates. Stay focused. Don't leave in silent disagreement. Practice mutual respect. There are no bad ideas or questions. Offer honesty and no blame. This is a blameless environment. Once you've set and shared those ground rules, this process flow map is an ideal task for your data stewards to co-own. If you improve a process that your business cares about, it boosts your chance to get buy-in for your data governance efforts. You'll need that for your future work and once you have it, you're primed to do exceptional work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (3), [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md) (1), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** you'll need (2)
> **Warnings:** note that (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps and additional resources](https://www.linkedin.com/learning/designing-data-governance/next-steps-and-additional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-data-governance/next-steps-and-additional-resources?u=76281980&t=0)** Thanks for taking this course with me. You've reached the end and you have the [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) plan to prove it. You've designed the blueprint for a data-driven culture that helps colleagues across all teams use the right data for the right use cases to help everyone level up. I can't wait to see what you'll do with it, and I hope you'll stay in touch. I'm on the editorial board of CDO magazine and always looking for new sources to speak with. If you'd like to share your experience designing data governance, please reach out. I'd love to connect with you on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). If you're ready for the next steps on your data governance journey, I hope you'll consider buying my book, Designing Data Governance from the Ground Up. The book covers everything we discussed in this course, plus more chapters on writing the roadmap for your first data governance project, embedding data governance into your technical tasks, and monitoring data post-deployment. Remember, data governance should never be a checklist. It informs all the work that your technical team does. Finally, what do you think of this course? Use its Q&A feature to share your experience and learn from fellow coursemates. We use this feedback to improve our work, and we're grateful for yours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (6), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** cdo (1)
> **Cross-References:** we discussed (1)


## Instructor

- [Lauren Maffeo](../../Instructors/Data%20Science/Lauren%20Maffeo.md)

## Skills Covered

- Program Design
- Data Governance

## Path Context

### In [Mastering Data Governance and Ethics](../../Paths/Data%20Science/Learning%20Paths/Mastering%20Data%20Governance%20and%20Ethics.md)
← [Data Steward Foundations](Data%20Steward%20Foundations.md) | **4 of 9** | [Automated Data Governance in Practice](Automated%20Data%20Governance%20in%20Practice.md) →

## Appears In

- [Mastering Data Governance and Ethics](../../Paths/Data%20Science/Learning%20Paths/Mastering%20Data%20Governance%20and%20Ethics.md)

## Related Courses

_Courses sharing skills:_

- [Automated Data Governance in Practice](Automated%20Data%20Governance%20in%20Practice.md) — Data Governance
- [Data Steward Foundations](Data%20Steward%20Foundations.md) — Data Governance
- [Learning Data Governance](Learning%20Data%20Governance.md) — Data Governance
- [AI Data Governance, Compliance, and Auditing for Developers](../Artificial%20Intelligence%20(AI)/AI%20Data%20Governance%2C%20Compliance%2C%20and%20Auditing%20for%20Developers.md) — Data Governance
- [AI Product Security- Building Strong Data Governance and Protection](../Artificial%20Intelligence%20(AI)/AI%20Product%20Security-%20Building%20Strong%20Data%20Governance%20and%20Protection.md) — Data Governance

---

[↑ Back to top](#)