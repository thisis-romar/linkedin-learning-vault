---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: practical-database-design-implementing-responsible-data-solutions-with-sql-querying
url: "https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying"
duration_minutes: 137
duration: 2h 17m
level: Intermediate
updated: 12/2/2025
learners: 9944
skills:
  - Data Management
  - Database Systems
  - Database Design
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEJyvvVXH1rHw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719007502300?e=2147483647&amp;v=beta&amp;t=gyN7XQNU3wtCS5fWULS6ESFqVhIiHFXxNwGLb73qBuk"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Database Administration Skills]]'
prev_courses:
  - '[[SQL Server Fundamentals- Master Basic Query Techniques]]'
next_courses:
  - '[[Advanced SQL for Query Tuning and Performance Optimization]]'
path_nav: '[{"path":"Advance Your Database Administration Skills","position":7,"total":11,"prev":"SQL Server Fundamentals- Master Basic Query Techniques","next":"Advanced SQL for Query Tuning and Performance Optimization"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-management
  - skill/database-systems
  - skill/database-design
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md)

![Practical Database Design: Implementing Responsible Data Solutions with SQL Querying](https://media.licdn.com/dms/image/v2/D560DAQEJyvvVXH1rHw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719007502300?e=2147483647&amp;v=beta&amp;t=gyN7XQNU3wtCS5fWULS6ESFqVhIiHFXxNwGLb73qBuk)

# Practical Database Design: Implementing Responsible Data Solutions with SQL Querying

> In this hands-on course, learn the fundamental concepts underlying database system design, including not only the design of applications using databases, but also covering the fundamental implementation techniques used in database systems. Instructor Brandeis Marshall takes you through a practical application of database design, database implementation, and data querying to determine when SQL quer

> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying) | 2h 17m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Designing and implementing a data model](#designing-and-implementing-a-data-model)
  - [What you should know](#what-you-should-know)
- [**1. Business Rule Development**](#1-business-rule-development) (7 videos)
  - [How databases help businesses](#how-databases-help-businesses)
  - [The DIKW Model](#the-dikw-model)
  - [What's a business rule?](#whats-a-business-rule)
  - [A business rule vs. a business operation](#a-business-rule-vs-a-business-operation)
  - [A business rule vs. a business practice](#a-business-rule-vs-a-business-practice)
  - [A business rule vs. a business policy](#a-business-rule-vs-a-business-policy)
  - [Example business rules](#example-business-rules)
- [**2. Database Design**](#2-database-design) (6 videos)
  - [Entities and relationships](#entities-and-relationships)
  - [Cardinalities](#cardinalities)
  - [Scoping the database requirements](#scoping-the-database-requirements)
  - [Analyzing the overall data requirements](#analyzing-the-overall-data-requirements)
  - [Connecting entities, relationships, and business rules](#connecting-entities-relationships-and-business-rules)
  - [Identifying data integrity requirements](#identifying-data-integrity-requirements)
- [**3. Data Generation and Datasets**](#3-data-generation-and-datasets) (4 videos)
  - [The data you're given: Now what?](#the-data-youre-given-now-what)
  - [Asking questions of the data](#asking-questions-of-the-data)
  - [The data you're creating: Pros and cons](#the-data-youre-creating-pros-and-cons)
  - [Asking questions of your made-up data](#asking-questions-of-your-made-up-data)
- [**4. Database Implementation**](#4-database-implementation) (5 videos)
  - [Overview of MySQL Workbench](#overview-of-mysql-workbench)
  - [Creating entities in MySQL Workbench](#creating-entities-in-mysql-workbench)
  - [Creating relationships in MySQL Workbench](#creating-relationships-in-mysql-workbench)
  - [Confirming identifying and non-identifying relationships](#confirming-identifying-and-non-identifying-relationships)
  - [Creating the database schema](#creating-the-database-schema)
- [**5. SQL Querying**](#5-sql-querying) (5 videos)
  - [Overview of the SELECT statement](#overview-of-the-select-statement)
  - [Another toy dataset](#another-toy-dataset)
  - [SELECT-FROM clauses](#select-from-clauses)
  - [SELECT-FROM-WHERE clauses](#select-from-where-clauses)
  - [GROUP BY and ORDER BY clauses](#group-by-and-order-by-clauses)
- [**6. Final Project**](#6-final-project) (2 videos)
  - [Bringing it all together](#bringing-it-all-together)
  - [Final project: The Brainery](#final-project-the-brainery)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Designing and implementing a data model](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/designing-and-implementing-a-data-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/designing-and-implementing-a-data-model?u=76281980&t=0)** - Have you ever been given a data set only to realize that you can't turn it into a dashboard? You need to understand the relationship between categories, fill in contextual gaps, and prioritize building a data model. Having conversations with your clients is key to meeting their data insight expectations. In this course, I'll teach you the fundamentals of designing and implementing a data model. Using [[MySQL]] Workbench, we'll walk through the full arc of any database project including business rules, data generation, and [[SQL]] querying. Hi, I'm Brandeis Marshall, a former college professor turned data learning entrepreneur. And [[Data Modeling]] is my tech jam. So let me be your personal coach as we build this project together. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (1), [[SQL]] (1), [[Data Modeling]] (1)
> **CLI Commands:** mysql (1)
> **Env Vars:** sql (1)
> **Speakers:** - have (1)

#### [What you should know](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=0)** - [Instructor] I designed this course for beginner to intermediate data analyst and engineers who have a basic understanding of [[Database Design]] and [[SQL]]. You may currently be in a data role or work with a data team. There's a myriad of data terms and you don't need to know all of them for this course. I'll go over some of the most common ones to help make it easier. I will be using [[MySQL]] Workbench, which is a free, open source [[Database Management]] systems tool. You can download it here. FYI, I'll be using my SQL Workbench 8.0.31 FYI, I'll be using my SQL Workbench 8.0.31 because it's the most stable version. You'll need to select Archives to choose the correct version. If you download a newer version, some of the features may not work correctly. You'll also need to download MySQL Community Server 8.0.36. MySQL Community Server 8.0.36. No need to go to the Archives. Just select the version on the home screen. Well, that should do it. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[MySQL]] (3), [[Database Design]] (1), [[Database Management]] (1)
> **Env Vars:** sql (3), fyi (2)
> **CLI Commands:** mysql (3), make (1)
> **Versions:** 8.0.31 (2), 8.0.36 (2)
> **UI Navigation:** go to (1), select the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Business Rule Development

[↑ Back to Table of Contents](#table-of-contents)

#### [How databases help businesses](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=1)** - [Narrator] Whether you say database or database, you've had to interact with several of them as part of your position duties. There's a backend data structure that you must connect to that helps you complete your task. Behind every login screen, internal search bar and [[Slack]] channel is a database. You rely on those [[Databases]] to be up and running. You rely on them to contain the data that you're looking for. You rely on them to save and store your work [[Microsoft Products|products]] and all the correspondence surrounding them. [[Business Operations]] can't happen without databases. HR departments manage talent recruitment, acquisition and retention strategies. Product departments design, implement and maintain a suite of services and products. Marketing and sales departments execute [[Lead Generation]] campaigns and cultivate client relationships, and IT departments coordinate the integration of systems, tools, and platforms. Data assets are created, manipulated, repurposed, and isolated within businesses to help fulfill business key performance indicators, goals, and objectives and key results.
>
> **[1:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=98)** These data assets come in various [[Forms]]. There's documents, spreadsheets, media, software, [[Dashboards]], and so on. From the organization's CEO to their clients, data is added, updated, retrieved, and deleted daily from a collection of databases, whether you're aware of it or not. While everyone in the organization implicitly engages with databases, it takes an organization's commitment to [[Data Stewardship]] to ensure their data assets are sufficiently protected. Now, data stewardship in a nutshell is concerns with standardizing data definitions, ensuring [[Data Quality]] and managing [[Data Lineage]], and data stewardship calls on all levels of data professionals, including chief data officers, data administrators, database administrators, data scientists, data analysts, and data engineers. All these people evaluate the [[Data Integrity]] for completeness and trustworthiness, along with securing the [[Data Privacy]] of their products and clients. It's you as the data analyst or data engineer who are crucial to help guide the [[Representational State Transfer (REST)|rest]] of the organization in effective execution of data stewardship practices.
>
> **[3:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=196)** You understand at a deep level that if the databases underpinning the organization are poorly modeled, inaccurately sized, or too aged, the whole organization is susceptible to data breaches, compromised reputation and insolvency. You're typically the first to see the impacts of incomplete or poor data quality. You experience the inaccurate outcomes when the databases aren't following a regimented online routine or cadence. So your main responsibility is to quickly evaluate the relevant data insights given the mounds of existing and new data assets within your purview. Going from data assets to data insights takes a good handle on a combination of data skills and business understanding. In the next lesson, we will look at how the data becomes useful to an organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (6), [[Data Stewardship]] (4), [[Microsoft Products|Products]] (3), [[Data Quality]] (2), [[Slack]] (1)
> **Env Vars:** ceo (1)
> **Cross-References:** in the next (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [The DIKW Model](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=0)** - [Instructor] Being a conduit who helps translate unprocessed raw data into valuable insights can be overwhelming unless you anchor your work in a data relationship model for value extraction. Enter the DIKW model, where DIKW stands for Data, Information, Knowledge, Wisdom. DIKW is typically represented as a pyramid to show the stages of transformation from data to wisdom latent observations. The DIKM model has seen its share of criticism. The most common critique is that it's an oversimplification of two key aspects. First, the pyramid structure assumes that each phase produces less content than the previous one. That assumption falls short quickly, as we can attest that data generates more data, and information generates more information, knowledge generates more knowledge, and, of course, acquiring wisdom opens the door to realizing more wisdom. The relationship between data, information, knowledge, and wisdom is much more complicated than represented by the DIKW model. DIKW's sequentially styled progression can appear too elementary
>
> **[1:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=96)** or half-baked for practical execution. Their interdependent and integrated bonds can seem untractable, especially given the public release of [[Generative AI]] in 2022. But as a data analyst and engineer, working with data requires taking the complicated and drilling it down into doable, repeatable steps. The pyramid structure helps us focus on identifying and filtering out irrelevant content. Following every possibility is not only time-consuming, but also very unproductive. Our clients tend to be internal to the organization, from the product team to the CEO, and they desire a clear data story. Being able to delineate between data, information, knowledge, and wisdom also helps us communicate data stories more effectively to our clients. A key to making the DIKW model work for you is in the transitions from one stage to the next. The data to information transition focuses on building connections between the raw data elements. Data comes to us disjointed, and we're often tasked with organizing the disarray. In the database world,
>
> **[3:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=192)** this involves designing a coherent and representative data model. Next comes the information to knowledge transition. It focuses on establishing the proper context. The data industry has adopted the use of statistical modeling, machine learning, and other computational approaches as a first pass of providing context. I'll add that this context isn't a monolith and requires human intervention. The second pass needed to establish proper context considers the cultural, economic, situational, and social implications of the knowledge outcomes. Only then can we be more convinced that our outcomes are important and relevant. Last comes the knowledge to wisdom transition. It centers on being confident in the repeatability and ethical alignment of our outcomes. Additional AI [[Algorithms]] and automated decision systems are implemented alongside extensive verification and validation schemes. Public release of services and [[Microsoft Products|products]] serves as a common approach used to determine if wisdom, bias, or discrimination has been accomplished. During this course,
>
> **[4:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=286)** we'll strengthen our data to information translation skills, appreciating the underlying data model can't be fully understood without grasping its association to business structure. We'll delve into the business side of this equation in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[Algorithms]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** dikw (6), dikm (1), ceo (1)
> **Cross-References:** in the next (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [What's a business rule?](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=0)** - [Instructor] The business world relies heavily on having access to accurate data. As data practitioners, we tend to use our skills to support an organization's product and service development. This sort of application is client facing with tangible impacts. It makes us feel good to see clients interacting with [[Dashboards]]. Within the organization, it's easier to explicitly distinguish the value of the data team from the [[Software Development]] team. Data flows in and out of each business unit. Not only the product department, HR, operations management, IT, finance, marketing and sales departments generate, collect, analyze, and summarize data assets regularly. This means everyone within these departments is an implementer of their department's specific data standards. Well, how does each team member know what the data standards are? It's through establishing business rules. Business rules help guide decision making within an organization. They're integral in framing the relationships between data elements. A business rule interprets a single business related operation to explain a business function using conditional statements, business rules document information and processes that could be repeatable.
>
> **[1:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=97)** Business rules are characterized into three main groups. Structural rule, decision, logic, and process flow. A structural rule is a business rule that's unique to that business. For example, the [[Instagram]] social media platform stipulates the acceptable post, reel and story sizes. If you try uploading media content of other sizes, then your visual content will be awkwardly manipulated to fit or be outright rejected by Instagram. A decision logic business rule focuses on actions needed to implement that business rule across the organization. Continuing with the Instagram post example, there would be a routine that checks the dimension of a post prior to posting to the profile's timeline. These business rules use formal logic quantifiers, such as if then, if else, only if, when, et cetera. And lastly, a process flow business rule coordinates and groups actions together so that they happen sequentially. Once a post is uploaded to a social media platform, there are a series of monitoring actions that happen. The post's engagement rate includes reactions, reposts, and comments is traced.
>
> **[3:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=193)** The original poster is notified of their post's activities, along with the series of protocols to disseminate the post across the poster's network. These three types of business rules are co-created with members of those seven main organizational units and the data practitioners. The data practitioners become the gatekeepers by proxy of the business' operations. An organization runs only as effectively as its ability to translate business function to implementable business rules. Now that we've discussed business rules, let's turn our attention to what exactly is a business operation, and we need to distinguish between business rules and [[Business Operations]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Instagram]] (3), [[Dashboards]] (1), [[Software Development]] (1), [[Business Operations]] (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [A business rule vs. a business operation](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=1)** - [Narrator] So I know what you're thinking. Why do I need to know what a business operation is? [[Business Operations]] are outside of my wheelhouse. I also don't want to take on any more responsibility. I'm a data analyst or a data engineer. That's my lane. As you can attest, our work is embedded in every aspect of the organization. It's easy to experience scope creep. Yes, you're filtering requests from multiple departments, and you're so busy completing tasks that you lose sight of what your main job responsibilities are. This is your reminder that you're not a data generalist. Business operations are the daily, monthly, quarterly, and annual activities that organizations engage in to earn a profit. At a basic level, business operations are the strategic arm of the organization. There's [[Forecasting]], quality control, and [[Supply Chain Management]] activities that need to be ironed out. And these are on top of the HR, finance, and product department activities I've previously mentioned. As you've probably guessed, business operations encompass a lot, including business rules, practices, and policies. For instance, a social media company would consider the type of advertising campaign it needs
>
> **[1:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=94)** to identify highly influential profiles, increase their fan base, and boost length of engagement on their platform. The company's leadership would set the vision for this work while other departments handle the implementation. Those of us in data roles, particularly data analyst and data engineers, focus on how to represent the digital aspects of the leadership's vision through [[Data Management]] business rules. Nothing more. Not every aspect of the business can be expressed or reduced to a digital format or data asset. What's important to consider is staying clear on the one to two frequent business departments that serve as your data source. Also, be aware of the one to two frequent business departments that your data outcomes are sent. Knowing your data inputs and outputs helps you better understand how your work supports strategic operations of the business. The lines between business operations, practices, and policies as a data practitioner blur easily if you're not alert. Next up, I'll give tips on distinguishing between business rules and business practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Business Operations]] (5), [[Forecasting]] (1), [[Supply Chain Management]] (1), [[Data Management]] (1)
> **Analogies:** for instance (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### [A business rule vs. a business practice](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=0)** - [Instructor] We discussed [[Business Operations]] to provide you with the aerial view of how business rules fit within it. But business practices aren't as formal, stable, or clear. In fact, the relationship between business rules and business practices have a limited overlap. Business practices are the team-developed tactics and methods the organization uses to achieve its objectives. These practices are shaped by the members within the team, their managers, and guided by their discipline's code of conduct. The team's dynamics, both good and bad habits, establish how that team communicates and collaborates to complete their assigned projects. A good example of a data-focused business practice is how a team establishes their slate of data [[Microsoft Products|products]] and services. This tech stack discussion is a frequent topic. The data tools, applications, and platforms change often. They are commercial and open source systems. Does your team rely on using both types of systems, or stick with just one? For instance, each team member has a preferred programming language, certain familiarity with specific systems, preferred slate of data tools,
>
> **[1:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=94)** and ways to complete [[Data Modeling]] and analytics tasks. Teams deal with how to effectively leverage their individual skillset, while not using every data tool, system, and platform available. That's not cost effective for the organization, and there's no blueprint on how a team chooses its tech stack. Business practices try to nail down the internal mechanics of how the work gets done. This is an evolving situation, as a team's members, projects, and project scopes can change suddenly. Business rules play a role, though. They give generic guardrails to help keep business practices relevant to the organization's needs. For instance, an organization may decide to create a business rule that stipulates the use of a certain [[Database Management]] system. Now, the development of the data team's business practices will be only for that database management system, and they'll implement it in accordance to standard [[Data Governance]] principles. This process repeats for each project the data team works on. Over time, the data team establishes their own routine. Now that we've discussed business operations and business practices with respect to business rules, we have one more element to talk about,
>
> **[3:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=192)** the relationship between business policies and business rules. That's up next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Business Operations]] (2), [[Database Management]] (2), [[Microsoft Products|Products]] (1), [[Data Modeling]] (1), [[Data Governance]] (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for instance (2)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### [A business rule vs. a business policy](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=0)** - [Host] It may seem unnatural for business policies and business rules to be part of the same conversation, but in day-to-day data team activities, much of our work is guided by the organization's business policies. Business policies take on one of three [[Forms]], facilitating regulatory or restrictive. Each type of business policy provides a blueprint for defining limits of how the organization's team members should be making decisions. Ideally, a business policy is clear, concise, simple, inclusive, and stable in practice however, conflicting business policies are unearthed as they can be developed in silos. [[Data Governance]] committees are formed internally to help provide sufficient and regular checks and balances given specific compliance stipulations. For instance, let's revisit the business rule that checks the dimensions of an [[Instagram]] post prior to posting to the profile's timeline. A business policy would require that the posts not contain explicit or inappropriate content. The data governance committee of data and legal experts would figure out what constitutes explicit and inappropriate content, as well as agree to how to algorithmically establish those parameters.
>
> **[1:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=97)** The [[Banking]], insurance and healthcare industries contend with more comprehensive national oversight to help minimize [[Data Privacy]] breaches. In other industries, business policies concerning [[Data Management]] activities aren't common. The public release of [[Generative AI]] in March, 2023 has altered this landscape. Many organizations are looking and some are shaping [[Agile Development|agile]] implementable AI policies to support better transparency, [[Accountability]], and governance. As you can see, business policies serve as an additional layer of protection for the organization. They also help support the effective implementation of business rules. The ultimate goals of business policies within the data management space remain constant to improve [[Data Quality]], maintain a high standard of documentation, and keep data secure. There have been a lot of terms and scenarios shared so far. Next up, we are going to reinforce what you've learned. We'll see how well you're able to distinguish between a business rule, business operation, business practice, and business policy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Governance]] (2), [[Data Management]] (2), [[Forms]] (1), [[Instagram]] (1), [[Banking]] (1)
> **Analogies:** for instance (1)
> **Speakers:** - [host] (1)

#### [Example business rules](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=0)** [Instructor] - Before we hop into the exercises, let's recap a few important terms. A business rule interprets a single business-related operation to explain a business function. A business operation is a daily, monthly, quarterly, and annual activity that organizations engage in to earn a profit. A business practice is a tactic or method a team within the organization developed to help them to achieve one of their objectives. And lastly, a business policy outlines for the organization's team members the limits and boundaries on how they should be making decisions. Now suppose you've recently been hired as a data analyst or data engineer at The Brainery, a social media platform for educators. You're joining the quickly expanding data team that is housed under the product division. As you're becoming familiar with how your team operates, you're realizing you're performing tasks for every division of the organization. And some activities you don't think should be handled by you. After a team meeting discussion about this, the group decided that charting their activities is the best next step. They create a shared document with these four categories. Now, you're all set up
>
> **[1:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=94)** and can start reviewing your last week's activities. Which category would you put each activity in? When you're ready, you can check your answer. in the document I've included in your exercise files. Additional exercises are also available to give you more practice.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)


### 2. Database Design

[↑ Back to Table of Contents](#table-of-contents)

#### [Entities and relationships](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=0)** - [Instructor] [[Databases]] have come a long way since they were created in the 1960s and [[SQL]] was invented in the early 1970s. We have document databases, graph databases, cloud databases, [[Relational Databases]], and so much more. Regardless of the database type, the building blocks of a useful database starts with well-constructed business rules. These business rules are easily converted into a clear set of entities and relationships. An entity in a database represents a single person label, place type, object or event. For example, in The Brainery, a social media platform for educators, we'll need to represent the Brainery users. Let's call them brainiacs. We'll also need to represent other types of users, like friends and followers, and we can't forget about creating entities that represent brainiacs' posts and direct messages. Entities are powerful digital structures to organize data. They help us not commingle different objects. We don't want to confuse a post with a direct message, for instance. The context of how entities are related or not related to each other is needed. That's where the concept of a relationship fills that gap.
>
> **[1:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=98)** A database relationship indicates how many instances of an entity are associated with how many instances of another entity. It's easier to explain this when you know the relationship type between entities. The one-to-many relationship specifies that one instance from an entity is associated with many instances from the other entity. Now, one-to-many relationships are very popular, so you'll see them most often. Let me share an example. In The Brainery, a brainiac makes many posts, and lastly, there are many-to-many relationships. They specify that many instances from an entity are associated with many instances from another entity. For example, in the Brainery, brainiacs have many followers. When we try to implement the many-to-many relationship inside a real database, we actually run into a problem. That is, how do we create an entity with both sides needing to denote many instances from the other side? But we're getting ahead of ourselves. Next up, we'll clarify the minimum requirement options for each of these relationships.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (4), [[SQL]] (1), [[Relational Databases]] (1)
> **Analogies:** for example (2), for instance (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Cardinalities](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=1)** - [Instructor] Knowing how to specify your entities and relationships are the first important step in crafting an entity relationship model. The hard step, however, comes with nailing down the expected minimum and maximum number of instances that'll appear in your database. This step is commonly referred to as setting the relationship cardinality. A relationship cardinality indicates the expected minimum and maximum number of occurrences for a pair of entities. For instance, in the Brainery, we allow a brainiac to have no to many followers. The minimum cardinality is zero, while the maximum cardinality is many. That means you don't require a brainiac to have any followers before being considered a user of our social platform. Since minimum and maximum relationship cardinalities can be infinite, data model rules were set up to make our lives easier. A relationship cardinality must be one of these four options, mandatory one, mandatory many, optional one, and optional many. Mandatory one says that there's one and only one instance of that entity that's associated with the other entity. For example, the Brainery requires
>
> **[1:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=94)** that a post must be associated with one and only one brainiac user. Mandatory many says that there are at least one to many instances of that entity being associated with the other entity. In the Brainery example, the team decided in order to form a group, at least one group post must be sent with the possibility of many messages amongst the group members. Optional one says that there's none to one instance of that entity being associated with the other entity. So in the Brainery, a brainiac may be affiliated with up to one organization at a time. Optional many says that there's none to many instances of that entity being associated with the other entity. For instance, a brainiac can post zero posts to an unlimited number of posts to their platform. For each relationship type, we are tasked with identifying the relationship cardinality for both entities. Yes, it's a two-way communication we have to represent. So for our optional mini example, we've only described one side of the relationship cardinality,
>
> **[3:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=188)** from the brainiac entity to the post entity. We need to also describe the relationship cardinality from the post entity to the brainiac entity. Using entities, relationships and cardinalities, you have the basics of creating a data model that can represent many aspects that are part of the business world. It can also be structured enough to follow the rules of core [[Database Design]]. Next up, we'll start to bring these concepts together for database requirement specifications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Design]] (1)
> **Analogies:** for instance (2), for example (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Scoping the database requirements](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=1)** - [Narrator] Our recap of the entity relationship model tapped into the foundational mechanics of good [[Database Design]]. However, before we proceed with the digital workings of database design, let's take a minute to emphasize the less discussed analog and more tactical aspects. Many in leadership may not have database experience. Often, they hope that the database can serve as the main landing area for the vast majority of the digital parts of their business, but as a data analyst or data engineer, you know that this is far from reality. We need specificity and details to make the data model make sense for the long haul. Identifying entities and relationships tend to be easy, in most cases, after having regular and focused conversations. The relationship cardinalities, on the other hand, are a different story. Your client may not know how they want their business to operate, so they're more fuzzy on those details, but you're forced to make to make changeable choices as to comply with database design rules. You make these decisions based on your understanding of the real world problem first, and then using your expertise and experience, you translate the problem
>
> **[1:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=94)** into the confining digital infrastructure of a database. I want to remind you to not make these changeable choices in isolation. You have to be intentional in discussing your choices with team members, managers, and leadership. Your understanding of the problem and how the database will address that problem may not match with theirs. Your assumptions may not be their assumptions. It's likely that your client will push to expand the scope of the database, rather than provide you with inner working details you requested. That's the nature of database design. You, as the expert, have to suggest priorities and ask questions so that you receive the answers you're looking for. Your main objective is to help settle on a reasonable database scope that aligns with your client's needs and adjusts their expectations as needed. You and your team communicating what's easily implementable, difficult, and improbable is crucial. Accomplishing this objective results in a database design process with less friction between you and your client. We'll use the remainder of this lesson to demonstrate how to do this, from crafting data requirements to developing a solid, logical database model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Design]] (5)
> **CLI Commands:** make (6)
> **Speakers:** - [narrator] (1)

#### [Analyzing the overall data requirements](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=0)** - [Instructor] To help us reign in a client's expectations, we need to lean into formalizing the organization's data requirements documentation. Data requirements aren't discussed as often. They tend to be assumed or gathered over time, but it's as important as business requirements and software requirements documentations. Both [[Business Operations]] and [[Software Development]] become easier to map out and manage when there's a solid data plan. For most of you, you'll join an organization with an existing [[Database Management]] system. Your intention then is to find, review, and understand the existing data requirements documentation and cross your fingers that the documentation closely reflects what's happening in practice. For everyone else, you'll likely be at a startup or smaller organization that's figuring out data requirements on the fly. Your plan then is to create an outline of the data requirements as you encounter them in your data role. This is definitely more time consuming and an unsupported perspective of the data operations. Data requirements in a nutshell, define and describe how data elements are captured, stored, and processed. Data requirements appear within business operations and software development specification documents,
>
> **[1:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=94)** for instance. The five main parts of a data requirements document are entities, entity features called attributes, relationships, [[Data Validation]] rules, and [[Data Storage]], and retrieval approaches. We've talked extensively about entities and relationships already, so we'll move on to describing the other elements of data requirements. First up, attributes. An attribute is an identifying piece of information that helps describe an entity. For example, in the brainery, the brainiac entity would have at least the following attributes. First name, last name, username, password, and last login. Next, we'll talk about data validation rules. These rules help confirm that the data entered meets predetermined criteria and aligns with business rules. For example, for every new brainiac user, we need to validate their email address. The format of the email needs to be structured in a specific way and will need to certify that the email is attached to a real electronic inbox. Lastly, we must concern ourselves with the data storage and retrieval approaches. These methods are looking to make [[Data Management]] efficient.
>
> **[3:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=189)** We want to choose the best database structure, create effective indexing schemes, and implement optimized data access methods. A good example is for the database to quickly reveal common friends between a brainiac and one of their followers. There's a 10 point checklist I run through to ensure I have a fuller picture of an organization's data needs. These are important to know, but I won't be covering them in depth in this course. I've included my checklist in the exercise files. Taking this step makes crafting a robust data model that closely aligns with the business rules so much easier. We'll see how these elements tie together next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Business Operations]] (2), [[Software Development]] (2), [[Data Validation]] (2), [[Data Storage]] (2), [[Database Management]] (1)
> **Analogies:** for example (2), for instance (1), picture (1)
> **CLI Commands:** find (1), make (1)
> **Documentation:** the documentation (1), specification (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Connecting entities, relationships, and business rules](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=0)** - [Instructor] Now, we're ready to create our conceptual database model. The conceptual database model, sometimes referred to as the conceptual schema, provides a high level interpretation of the business rules, along with the description of the main components of the entity relationship model. The step-by-step process of constructing a conceptual database model goes like so. Number one, gather the business rules through discussions with your client or reading the company's documentation, or both. Number two, isolate the probable entities. Number three, add the presumed relationship between entities based on your initial understanding of the business rules. Number four, add the relationship carnalities as you see fit. And number five, collaborate with other team members and clients to increase data model representation that suits client's needs. Let's demonstrate this process by creating a portion of the conceptual database model for the Brainery. As a social media platform for educators, the Brainery at its core has the following components. Number one, brainiac users can upload posts, while a post must only be associated with one post creator. The entities are therefore brainiac and post.
>
> **[1:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=97)** The [[Microsoft Word|word]] can in this sentence indicates that a brainiac may or may not have uploaded a post or uploaded many posts, so that confirms an optional mini-relationship on the post entity side. A post having one author reflects that a post can't exist without a brainiac, so that lends itself to establishing a mandatory one relationship. We've covered steps one through four. Do step five after you've gone through a few more business rules. Let's run through a few more examples. Number two, every brainiac can have both friends and followers. A friend is the Brainery user who a brainiac follows, while a follower is, well, a user that follows the brainiac. Number three, more precisely, a brainiac can have followers. A follower must follow at least one brainiac. And a brainiac's friend connection occurs when the brainiac initiates the follow and the friend follows back. Now, pause this lesson and see if you can create the entity relationship or ER model as me. We're addressing two business rules.
>
> **[3:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=197)** There's a distinction being made between a follower and a friend for the brainiac. The brainiac follower relationship is affirmed when the follower makes a connection to the brainiac. So a brainiac can have zero to many followers, while a follower must follow at least one person, but could follow many. The opposite situation happens in the brainiac friend relationship. One more business rule description for practice. Number four, a brainiac can only send private messages to their friends, not to followers. Now, this is a bit of a trick example. There's a relationship between the entities, brainiac and friend, that involves another entity called direct message. The direct message relies on knowing the information from both brainiac and friend for the direct message entity to exist. Direct message is an example of an associative entity. Using the Brainery example, we've constructed a conceptual database model. We've implemented the five-step process to isolate entities, establish relationships, and define carnalities. We'll discuss more in the next lesson
>
> **[4:51](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=291)** how to represent this relationship and all the others in the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Identifying data integrity requirements](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=0)** - [Lecturer] Our conceptual database model gives us a great overview of how business rules show up in the data model and how they're connected to each other. What we've created so far is a great visual, but it's not ready to be implemented within a [[Database Management]] system or DBMS. One more element is missing, the attributes for each entity. Attributes are classified in two ways. Number one, attributes that describe the characteristics of that entity. And number two, attributes that describe the relationship between two entities. Every entity must have at least one attribute called the primary key to uniquely identify an instance of that entity. There are typically other attributes that are related to that attribute too. Each Brainiac has a first name, last name, email, password, and last login, and is uniquely identified by their username. No two usernames can be the same, so username is the primary key. The friend, follower, post, and direct message entities need attributes that cover the first category. A friend has three attributes, username, friend type, date connected. Username is the primary key.
>
> **[1:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=96)** A follower has, let's say, two attributes, username, date followed. Username is the primary key. A post has four attributes, post ID, text, date created, and date modified. Post ID is the primary key. A direct message has four attributes, message ID, text, date sent, and date modified. Post ID is the primary key. Now that the descriptive attributes have been added, we can turn our attention to the relationship identifying attributes. Here's were having the conceptual schema and knowing your primary keys are so helpful. The majority of the work has already been done for you. You need to learn how to convert the visual representation into digital form. Every primary key in one entity could be referenced in another entity known as a foreign key. The stipulation is that, one, there must be an existing relationship between the two entities, and two, the foreign key is added to the relationship side that could have many instances. Let's explain this concept with an example, specifically the Brainiac and post one to many relationship. That means one Brainiac can send many posts,
>
> **[3:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=192)** but a post is only associated with one Brainiac. The Brainiac's primary key of username is added to the post entity as a foreign key. Let's do the more complicated case of the Brainiac and friend exchanging a direct message. Since both the Brainiac and friend can send messages, we need to record each message separately. We keep track of who sends which message to whom and when. So, we need to create the direct message entity, which has the Brainiac and friend's primary keys as foreign keys. And these foreign keys are serving double duty as primary keys for the direct message entity. Now, we have a complete logical database model. It's time to shift to what data will populate this data model once implemented in the DBMS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Management]] (1)
> **Env Vars:** dbms (2)
> **Definitions:** is a  (1), known as (1)
> **Speakers:** - [lecturer] (1)


### 3. Data Generation and Datasets

[↑ Back to Table of Contents](#table-of-contents)

#### [The data you're given: Now what?](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=0)** - [Narrator] Before we explore the database tool, we're [[Sketching]] out the type of data that'll eventually populate this database and imagine what good sample data criteria is. This will help build our confidence in our data model. With our need for data, we simply go to the internet. We search, we find, we download, we use. Well, not so fast. Be cautious of using existing datasets. There are three crucial questions to ask. Number one, where did it come from and for what original purpose? What are the data gathering procedures being used and how much harm is introduced? And number three, do you own the rights to do what you want with the data? Each question helps you pinpoint where that procured dataset matches your needs and where there are gaps. Let's say that I decide to use my social media data as a representative sample to help imagine the Brainery's database. Since the dataset is my social media content, I can answer questions one to three with ease. For question one, this data was requested from a social media company to serve as a local copy of all posts sent on that social platform. There's no sensitive information shared in these posts. For question two, the data gathering processes remain unknown.
>
> **[1:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=96)** The social media company provides a request for archive data portal so I can retrieve my content via zip file within 48 hours of the request. And the answer to question three is yes, and the social media company can do what they want with this content as well. If the answer to question three is a yes, proceed. Immediately, you'll notice that there are examples of posts and there's information about the social media profile user, but upon further inspection, you'll see no information about what we've called friends and followers. Lastly, this dataset has no examples of direct communications between two users. Now that you've identified several large gaps, we could abandon this sample dataset and search for another one that's better suited for our needs, or we could search for datasets to append to this one, your choice. On the other hand, for my direct message content, my responses to question three would be very different. I wouldn't want to share content that another party hadn't given their permission. Data ownership, [[Privacy]], confidentiality, and what constitutes as vulnerable data features
>
> **[3:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=190)** take on a whole new meaning in this situation. Either way, you have a beginning of a process for using existing datasets. Number one, determine data ownership with informed consent preferred. Number two, identify privacy, confidentiality, and security aspects of any dataset early on. And number three, pinpoint vulnerable data features early on. We need to consider more factors regarding the fitness of data to build out test scenarios. We discuss some of these next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[Sketching]] (1)
> **Analogies:** imagine (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Asking questions of the data](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=0)** - [Instructor] Establishing data ownership and first pass relevancy of sample data rounds out the first layer of dataset discovery. The second layer is determining the breadth and depth of your existing datasets. We are getting in the data. There are two main broad questions we set out to answer. Number one, how complete is the data in the existing dataset structure? And two, how accurate or correct is the data in the existing dataset structure? Data completeness is concerned with how well populated data entries are throughout the dataset. It's the breadth portion of this second layer. For example, we'd initially scan the user and post related content in my sample Twitter data and see how it matches with the brainery's logical database model. Data correctness or accuracy focuses on how well the true value of these data entries are represented. It's the depth portion of the second layer. For instance, we'll need to learn more about the range and relevancy of these data values. A quick scan isn't going to cut it. Our sample data has too many columns and rows for us to manually summarize or organize. It's time to apply an algorithmic approach.
>
> **[1:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=97)** There are three methods that'll help us assess the completeness and accuracy of our dataset if we're able to read it into a data analysis platform like [[Python (Programming Language)|Python]] [[Pandas (Software)|pandas]]. First up, the info method, when executed, provides us with the number of entries, number of columns, number of entries for each column, data type of each column, and the amount of memory usage. The ideal output would be that all the number of entries and the number of injuries for each column are the same. Next, the describe method gives us the descriptive [[Statistics]] about each numerical column. That's the count again, mean, standard deviation, minimum, 25%, 50%, and 75% quantiles, and the maximum values. It's up to us to decide if these values are within a truthful range by creating histograms or performing a regression analysis. Lastly, we have the deep dive option now called y data profiling. You may know it as pandas profiling. If your dataset isn't too large, you can generate a profile report. This report details a range of statistics with visualizations.
>
> **[3:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=191)** There's also a nifty assessment of where missing values, duplicates, and outliers exist. Now that we have tangible key pieces, we need to discuss and evaluate the dataset with other team members. We can judge whether this existing dataset has substantial, relevant, timely, and quality content to fit our needs for the Brainery. Now, we've discussed repurposing an existing dataset. What would be our approach if creating a dataset from scratch was needed? We'll explore this in the next section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Statistics]] (2), [[Python (Programming Language)|Python]] (1)
> **Analogies:** for example (1), for instance (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [The data you're creating: Pros and cons](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=0)** - [Instructor] Some data environments elect to create synthetic data sets themselves or license them from other organizations. The [[Banking]] and credit lending industry use synthetic [[Financial Data]] to improve fraud detection. Manufacturing companies use synthetic data for better quality control testing and predictive maintenance processes. AI-powered companies use synthetic data to test the robustness of their facial feature recognition and [[Natural Language Processing (NLP)|natural language processing]] systems. In doing so, there are expected pros and cons. Let's discuss the pros first. Top benefits include, number one, your ability to generate data sets that are diverse and realistic. You can mimic characteristics found in the real world and test different models or scenarios relatively easily. Number two, you have the opportunity to save costs. Once data generation is complete, an organization isn't spending a bunch of money repeatedly on real dataset licenses, and you're avoiding the real world [[Data Collection]] process, which is notoriously very costly. And number three, you significantly reduce concerns around data ownership and [[Privacy]].
>
> **[1:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=95)** You can keep sensitive data safe, and it also allows organizations to circumvent regulatory and compliance expectations. On the flip side, top limitations of synthetic data sets include, number one, the quality of your synthetic dataset hinges on your chosen generation model. If your model is lacking, so is your synthetic data. Everything is connected, from the attribute characteristics to the column distribution. Number two, using synthetic data is too risky. The data generation team needs to contend with a myriad of issues. They include, but not limited to, bias propagation, IP infringement, data pollution, and data contamination. And number three, you can't distinguish a good synthetic dataset from a not-so-good one. Assessing the reliability of synthetic data sets is in its infancy. There's a lack of standardization of how synthetic data sets are built, testing their robustness, or how well they mimic the real world. You aren't able to methodically compare one synthetic dataset with another.
>
> **[3:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=191)** So there you have it. We have the pros of potentially generating diverse and realistic data, saving cost, and keeping sensitive data safe. We've shared several limitations of choosing an inadequate data generation model, dealing with a slew of [[Data Integrity]] issues, and not being able to assess reliability. We'll finish up this chapter with important questions to ask if you're planning on developing your own synthetic data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (1), [[Financial Data]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Data Collection]] (1), [[Privacy]] (1)
> **Speakers:** - [instructor] (1)

#### [Asking questions of your made-up data](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=0)** - [Presenter] Being aware of the strengths and weaknesses of synthetic datasets makes it easier for us to develop methodically. We aren't ignorant to its shortcomings so we can adjust our expectations. Creating the perfect dataset isn't the goal as it doesn't truly exist, but the ability to generate a relevant dataset becomes the main objective. The decision to generate synthetic data shouldn't be your sole decision. There are considerations that need to be weighted, and these considerations should be discussed and evaluated with the project team. Having sufficient context of what's needed in the synthetic data will help you avoid making sweeping generalizations. The top considerations include: What are the business and compliance requirements? Which real data will be used as a model? Which data features should and shouldn't be tagged for synthetic generation? Which scenarios are important to represent? And which benchmarking tools help to assess [[Data Quality]]? These considerations and other ones that come up in discussion should be placed in context to the project's goals, scope, and timeline. Addressing issues, managing risks, and adjusting deliverables
>
> **[1:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=95)** come with the territory and practice. It's a lot of complexity. Understandably, you may feel like you don't have the skills to create or even co-create a synthetic dataset. You aren't alone here. It's a big ask. Text-based solutions exist to help relieve some of the synthetic dataset generation burden. First up, we have the open-source synthetic data tools. These tools provide you with code that can be modified and extended. You have the opportunity to build your own customized datasets. Second, we have commercial synthetic data tools. These are typically platforms that allow for modular dataset creation. This plug-and-play approach quickly generates synthetic datasets and provides an out-of-the-box evaluation environment to assess data quality. Lastly, online communities have formed as a support network for those generating and using synthetic datasets. You can ask questions and exchange ideas around test and synthetic data. Also, seek out resources to help you learn recent advances in techniques and overcoming challenges. Well, this wraps up the must-knows when it comes to dataset selection and generation. Whether you use real data, synthetic data, or combination,
>
> **[3:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=194)** stay focused on the type of data that will represent the project's data flows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (2)
> **Speakers:** - [presenter] (1)


### 4. Database Implementation

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of MySQL Workbench](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=0)** - [Instructor] We're ready to digitize your pen and paper logical database model for the Brainery. You can choose from a range of [[Database Management]] systems. We're using [[MySQL]] Workbench. MySQL Workbench provides data analysts, engineers, and other database professionals with a single platform to store their data model, datasets, develop their [[SQL]] queries, and conduct some database maintenance. It's completely free so you don't have to worry about pesky licensing fees. Our first goal is to ensure that every entity, relationship, and carnality from the logical database model is accurately reflected within MySQL Workbench. I'll be using version 8.0.32 because it's the most stable version at the time of this recording. After you install and configure your SQL Workbench, go ahead and open it back up. It's pretty bare, but behind this minimalist layout is a robust interface. You should have one MySQL connections local instance. We'll use it after we are finished adding our data model. Well, I've already opened up MySQL Workbench. Now click on the icon representing three entities
>
> **[1:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=96)** and two relationships. You've just launched the [[Data Modeling]] side of MySQL Workbench. And to create a new data model, click on the + sign.
>
> **[1:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=116)** Now there is a lot of information shared here. The left panel gives a snapshot of the data model if you want to see it. Since we have yet to add anything, it's pretty bare. The right panel provides quick access to templates frequently used by other MySQL Workbench users. I find them rather distracting, so I suggest deactivating them. Click on the two gray and blue icons at the top of your screen. Now the center panel occupies the entire screen. You can see that there are headings: EER Diagrams, Physical Schemas, Schema Privileges, SQL Scripts, and Model Notes. Feel free to expand or collapse them to reveal their contents.
>
> **[3:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=190)** Now what we'll be doing is actually adding a diagram, so that is listed under the EER Diagrams. So all you need to do is just click the Add Diagram icon
>
> **[3:30](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=210)** and it opens up a new EER diagram. One last note, before we proceed don't forget to save this file, Save Model. And I called mine TheBrainery with the extension mwb.
>
> **[4:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=240)** Well, that's all folks. There's your quick tour of the data model side of MySQL Workbench.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (8), [[SQL]] (3), [[Database Management]] (1), [[Data Modeling]] (1)
> **CLI Commands:** mysql (8), find (1)
> **Env Vars:** sql (3), eer (3)
> **UI Navigation:** click on (3)
> **Versions:** version 8 (1), 0.32 (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), configure (1)
> **Best Practices:** don't forget (1)

#### [Creating entities in MySQL Workbench](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=0)** - [Instructor] It's time to set up some data entry. We need to set up our digital [[Data Modeling]] environment. So remember you saved that file. Now we go back in, and we can now double-click TheBrainery under the Models. Of course, go ahead and open the model. Of course ours is completely blank. Once again, it'll open up to a gridded whiteboard. You have those three panels. You can decide to activate or deactivate the left and the right panel as you're comfortable. I'll go ahead and deactivate the left-hand panel, but I'll keep the right panel open. I like having much more whiteboard real estate on my screen. The right-hand panel is really kind of cool to have just because I get to see all the different tables that wind up populating my data model. So the way I get started is actually creating the tables first. So all the entities will be added at once. So by doing that, I click the table icon over on the left-hand side. You can see the little hand motion come up, and I select where I want the table to go anywhere on the screen. I just went ahead and picked the center.
>
> **[1:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=95)** So every time you create a table, table1 is a default label, but of course, that's not the table name that you want to name your tables and your data model. So go ahead and double-click on table1. You will see a second window open up below the whiteboard grid. You can adjust the size of that whiteboard grid as much as you want. I like making sure that I see the table on the whiteboard grid and I see the table name and all of the column information in the secondary window on one screen. So now you can rename your table, and of course, you can add your attributes or your column names as well. So for this example, let me go ahead and add the table Brainiac. Now, once you change the table name, you can now start adding in the columns. Now remember, the very first column name or attribute name needs to be the primary key. And a primary key is also non-null. So by default, when you double click on the column name, the column name that [[MySQL]] Workbench creates is ID Brainiac.
>
> **[3:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=193)** I don't particularly like that naming scheme. So, I am naming my primary key Username,
>
> **[3:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=206)** and you can see a little key icon to the left-hand side of Username populate. I also want to make sure to change the data type to a VARCHAR and make sure that it's no more than 20 characters. So I put up 20 inside of the parentheses. Also what you'll notice is that both PK and NN have been marked. The [[Representational State Transfer (REST)|rest]] of the data types you don't need to be concerned about. So now you can move on to your next attribute name or column name. You can go ahead and double-click to edit. And again, MySQL Workbench has a default name that it will name your column. This one happens to be Brainiac column. Of course that's not what's in your logical database model. So now you need to rename it. And let me rename it FirstName. I'm going to go ahead and keep the data type as VARCHAR(45), but I'm not going to make it a PK or a primary key. I'm going to make sure that it is non-null 'cause of course, anytime there is a username, the username has to map to a real person with a first name. Now, once you've done this first table,
>
> **[5:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=302)** repeat this for all the other strong entities in your logical database model. Recall that a strong entity doesn't have its own primary keys coming from another entity. So for TheBrainery, build out the next four tables and meet me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[Data Modeling]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (4), mysql (2)
> **UI Navigation:** double-click (3), open the (1), click on (1)
> **SQL:** varchar (2)
> **Env Vars:** varchar (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)

#### [Creating relationships in MySQL Workbench](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=0)** - [Narrator] So how did it go? How many strong entities did you create? Four or five? I created four. Brainiac, post, friend and follower. But the DirectMessage entity isn't a strong entity, it's an associative entity. We need to reference the primary keys from both Brainiac and Friend in order to make DirectMessage. So we'll move on by setting up the relationships and I'll start with creating the DirectMessage associative entity. I suggest that you organize your tables so that the relationship lines don't overlap. It's more aesthetically pleasing, in my opinion. So you'll see me moving around the tables and the relationships. We're going to walk through creating two different types of relationships. As I said, we're going to start with a DirectMessage entity.
>
> **[1:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=75)** For DirectMessage, it's what's called a many-to-many relationship. And again, we're looking at Brainiac and Friend. In order to create this entity, you now need to select the N:M icon that's to your left.
>
> **[1:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=98)** Once you select it, you'll see the little hand dial and you select the first entity in the relationship. Let's call that Brainiac. And then you select the second entity in that relationship. And from this case, it's Friend. As you can see, a whole new entity has been created that has Brainiac username and Friend username as the primary keys, but they also serve as the foreign keys as well. The first thing that you'll notice is that Brainiac Has Friend as a table name isn't very descriptive. So what you can do is double click and now you're able to modify the name of this table as well as add any more attributes that are associated with this relationship. So I'm going to be replacing Brainiac Has Friends with DirectMessage. For all my table names, I don't like to have any spaces or underscores or dashes. So I just merge, DirectMessage as one phrase.
>
> **[3:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=184)** Since this secondary window has popped up and I have more attributes to add, I'll go ahead and extend that second window so that I can now add in the other attributes. And they happen to be, which of course, has a different data type. It's not a VARCHAR 45. I want to scroll and make sure that it is of a text and give it a certain number of characters when it comes to text. So for this example, I'm going to say the max is 1,000 characters. Now, because the message needs to be sent, that means that this attribute is not known and that finishes the message attribute. The next two attributes are all around the date. The first one is date sent,
>
> **[4:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=257)** and I want to make sure that the data type has been changed so that it is datetime, and of course, the message that has to be sent at a particular time, which means this attribute cannot be known either. The last attribute however, I'm going to be calling date modified. This one, I've placed here just in case the two individuals want to modify the message that they send to each other after it has been sent. So again, I go ahead and with the data type, I change it to datetime, but this time, it can be a null value. So now I'm done with a DirectMessage entity. Now, to make things a little bit easier to see, you can now move the secondary window down so you can reveal the [[Representational State Transfer (REST)|rest]] of your tables. And now we can move on to the second type of relationship that we're going to go over to today. So let's look at Brainiac and Post. If you recall, a Brainiac can send many different Posts, but a Post is only associated with one Brainiac. This is a one-to-many relationship.
>
> **[5:55](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=355)** In order to create the one-to-many relationship, you need to select a 1:N icon from the left hand side. And then you need to select the Post entity first and then the Brainiac entity. So now what we have is a one-to-many relationship. The one side is associated with Brainiac and the many side is associated with Post. Now what you probably want to do is select Brainiac first and then select Post. But that would reverse the relationship, so you have a many-to-one relationship. That's not what you want to do. If you wind up making a mistake in any type of relationship, all you need to do is select the relationship, right click, and then you're able to delete the relationship. And as you can, see now you have no relationship, there's no association or reference of Brainiac inside of Post. Okay, let me go back and create that one-to-many relationship again since I just deleted it. Select, remember, select Post first and then Brainiac.
>
> **[7:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=452)** And now you've created that one-to-many relationship. What you would immediately see is that in the Post entity, you have Brainiac username. That's now a red key. That's making sure that you know that it is a foreign key to the Post entity. And now you've established that one-to-many relationship. So the one last step, which is to check the carnality. And remember what I said, a Brainiac can send zero to unlimited number of Posts, but a Post must be associated with a Brainiac. So what does this mean for the relationship? That means that when it comes to a Brainiac sending Posts, they could send an optional many. What we have in this relationship is a mandatory one to a mandatory many relationship, and we want to change it. So how do we do that? It's super easy. Just double click on the relationship and the secondary window at the bottom of the screen appears. And you have a name of the relationship, which you can't ignore in the very first tab. Click to the second tab at the bottom called Foreign Key. And now, you're revealing the referencing table,
>
> **[9:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=547)** the carnaility and the reference table information. You can now uncheck or check the mandatory toggles, all depending on whether it's mandatory or optional when it comes to that carnality. So in order to make sure that you have now identified that a Brainiac can send zero to many messages, you just unchecked mandatory on the Post side of this relationship. So now for every relationship that we've created, we want to check to make sure that this relationship has the right carnality, whether or not it's mandatory or optional for each of the relationships that we've created. Now, let's go back to DirectMessage. When it comes to Brainiac to DirectMessage, as well as friend to DirectMessage, are the relationships correct? I think they are. 'Cause remember, the Brainiac and the Friend need to be represented in DirectMessage in order for DirectMessage to actually exist. And in order for DirectMessage to happen, a message needs to be sent. So that means there's a mandatory one type of conversation that happens between Brainiac and Friend. So the mandatory one to the mandatory many on both sides
>
> **[10:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=644)** of these relationships makes sense. Now we have demonstrated the two most common relationships. It's time for you to create the remaining relationships and adjust their carnallites as you see fit. We'll do another pass over these relationships in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (6)
> **UI Navigation:** select the (5), click on (1)
> **Definitions:** is a  (4), means that (2)
> **Cross-References:** go back to (1), in the next (1)
> **SQL:** varchar (1)
> **Env Vars:** varchar (1)
> **Speakers:** - [narrator] (1)

#### [Confirming identifying and non-identifying relationships](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=0)** - [Lecturer] So, I've completed the other relationships that I have in my logical [[Database Design]], and this is what it looks like. So, you've looked at all of your pen and paper sketches of the logical database model many, many times by now. Your [[MySQL]] Workbench data model should be looking pretty close to what you actually have on paper, right? And that's a replica. Hold them up side by side to make sure that each table, attribute, and relationship are the same.
>
> **[0:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=41)** But your two diagrams may not look exactly the same. You may have noticed when we reviewed the carnality, there was this option to make a relationship identifying or non non-identifying. There are relationship lines that could be solid or dotted. We haven't named these different classifications of relationships yet. So let me give you an example. When it comes to Brainiac and Post, this is a solid line indicating and identifying relationship. How do you know that? Double click the relationship. Once again, this will bring up the secondary window. I'm going to pull it up a little bit so you can see all the information when it comes to this relationship. We've already indicated that mandatory on the Brainiac side is unchecked, but then in the center, we have identifying relationship check. What does that really mean? The non-identifying relationship, that means unchecking this identifying relationship button now creates this dotted or dashed line, and it indicates that the foreign key remains a non-key attribute in the table. So, for example, when it comes to Post,
>
> **[2:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=139)** its primary key post ID uniquely identifies that each message has been posted and that message is already linked back to the Brainiac. So, that means that the Post table contains the Brainiac's primary key of Brainiac username as a non-key attribute. Now, let's look at a different type of relationship. So, when it comes to DirectMessage, both Brainiac username
>
> **[3:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=181)** and Friend username are identifying the relationship between Brainiac and Friend for the DirectMessage. Both of these relationships require a solid line. These are both the primary key and the foreign key to the DirectMessage associative entity. So, you want to keep the identifying relationship checked. Now, for the last two relationships between Brainiac and Friend and Brainiac and Follower, you can now check the relationships and decide whether or not you want them to be identifying or non-identifying. I've indicated that both for Follower and for Friend, when it comes to a Brainiac, these are non-identifying relationships. So, now I've unchecked the box on both. So, you will see them as non-identifying relationships. Now, as an FYI, you can decide on whether or not you want to create your relationships as identifying or non-identifying when you create your logical database model inside of MySQL Workbench. So, on the left you can see many different icons to indicate the relationship type as well as the relationship classification.
>
> **[4:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=276)** So, you can create your logic database model with identifying or non-identifying relationships. For any type of relationship that you want to create, just select the icon that you want, either solid line or dotted line. When you're done, I'm happy to tell you you're done with entity relationship modeling. Congrats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[Database Design]] (1)
> **CLI Commands:** mysql (2), make (2)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** fyi (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [lecturer] (1)

#### [Creating the database schema](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=0)** - [Instructor] With the meticulous attention that you paid to the [[Database Design]], you've set yourself up for an easy creation of the database schema, and [[MySQL]] Workbench does the heavy lifting for you. The database schema, as a reminder, is the blueprint that describes how the data is connected to each other and amongst the tables. It consists of [[SQL]] create table definitions. The syntax goes like this. Key [[Microsoft Word|word]] create table with user-defined table name, open parentheses, then list each column name with accompanying data type, list the primary keys, list the foreign keys, as needed, and then close the parentheses with the semicolon at the end. Since your data model has been inputted into MySQL Workbench, you can generate the database schema with just a few clicks. All you need to do is go to File, Export, Forward Engineer, SQL Create Scripts. Now you've launched the MySQL script maker tool. You can save the script to a file
>
> **[1:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=95)** and name it whatever you want. On this top text field, let's name it
>
> **[1:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=108)** TheBraineryDB. You also need to select Generate DROP Statements Before Each CREATE Statement. This makes your debugging a whole lot easier in your database. So that's why I suggest you go ahead and click that. Once you're done, click Continue. Now a new window will appear and ask you which objects to include or exclude from your scripts. You just need to make sure that Export MySQL Table Objects has been checked. It should be 'cause it's the default, and you will see five total objects, and five have been selected underneath. Because views, routines, triggers and user objects are beyond the scope of this course, they should remain unchecked. Now just click Continue. In order to save the file, go ahead and select Save to Another File, and now you can name the file. Let's name this TheBraineryDB.
>
> **[3:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=197)** You can, of course, just put it anywhere that you like and click Save. Now select Finished, and now your MySQL scripting tool window should go away. You're ready to run an SQL script to create our database. We'll be sure to check that the script has no errors. SQL querying, here we come.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (5), [[SQL]] (4), [[Database Design]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** mysql (5), make (1)
> **Env Vars:** sql (4), drop (1), create (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 5. SQL Querying

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of the SELECT statement](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=0)** - [Instructor] Knowing [[SQL]] has skyrocketed as a preferred skill for data analysts and engineers. Learning SQL has stayed relatively the same since the early 1970s. The emphasis is placed on learning the mechanics of structuring an SQL statement. However, we should also focus on understanding the [[Decision-Making]] implications of what an SQL query is retrieving. Let's discuss the mechanics first. The SQL select statement. The select clause is first, which contains the list of columns to be returned back to the user. Then comes the from clause. It holds the list of tables needed to perform the query. After from, we have options, depending on which database items we're trying to retrieve. Most times, we need a where clause. The where clause places conditions on which data elements will be selected and filtered out for each column. And sometimes, especially when we want to cluster or sort, we'll use the group by, having, and/or order by clauses. The group by clause does just that, groups data elements anchored on at least one column. For example, grouping your organization's customer list
>
> **[1:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=100)** based on which continent they reside. The having clause, which is only tied to the group by clause, places conditions on the group after you have created them. For example, your manager says they only want to know which regions have more than 1000 purchases. The order by clause sorts the data in the selected columns in either ascending or descending order. For example, you may want to order your organization's customer list in alphabetical order, or organized by total purchases amount within the last 90 days. Although we write the SQL select statement in this order, the processing order is much different. It goes as follows. Starting with the from clause, then moving on to the where clause, next comes group by, and having clauses, if needed, the select clause happens next, and and the processing order ends with the order by clause. At every stage, we're filtering, which means we're systematically removing tables, then rows, and lastly, columns.
>
> **[3:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=194)** We end up with a selective list of columns and rows that meet the conditions of the SQL query. Now, we can't overlook how null entries can disqualify a row from appearing in a result set, and therefore, making a result sets incomplete. We also can't overlook how important both primary keys and foreign keys are to our [[Database Design]]. Without solid primary keys and foreign keys, our SQL querying would return lackluster results. Pay close attention to the motivation, ethical, and legal impact of which queries are requested and how they are shared. Keeping the SQL processing order top of mind will help you figure out which clauses in the select statement are really needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[Decision-Making]] (1), [[Database Design]] (1)
> **Env Vars:** sql (9)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)

#### [Another toy dataset](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=0)** - [Instructor] Now that we have the database schema, we need to upload it into our [[MySQL]] Workbench database partition. Starting on the home screen, we'll select the MySQL connections, local instance. I've called mine TheBrainery. Go ahead, double click and enter your password. What'll open up is now your database partition side of the MySQL Workbench. You'll see that the format looks very similar to what we had over in the entity relationship modeling side. On the left hand panel, you have a bunch of administration from management to instance to performance. You don't need to worry about any of this in this course. There's also another tab when it comes to schemas. Again, this is outside of this course, so don't need to worry about it. The main panel has the ability for you to write your [[SQL]] scripts. Each number is lined with a particular number associated with it. So of course right now what you see is just a number 1 with the blinking [[Cursor]]. Above that, you have a series of different icons. We'll only be concerned about the lightning bolt that happens to be in yellow. It is the one that helps you execute
>
> **[1:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=94)** and run any of your SQL scripts. So now let me go ahead and open up our database schema. File, open SQL script, and then select the SQL schema, which I called TheBraineryDB. Once you click open, you'll see it populate inside of your SQL scripting space. This should look very familiar to you as we just created it. All the tables with their primary keys, foreign keys, and other information is listed. One thing to note is that you'll see that there's different color codings. The blue tends to indicate a command that is being run if there's two dashes before some text that indicates a comment. So up at the very top, there is a comment that says, "MySQL Script generated by MySQL Workbench." But then you'll actually see a command that would run and execute. For example, you will see set and then a series of instructions. So now let me go ahead and run the script by clicking on the lightning bolt icon up at the top bar.
>
> **[3:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=194)** Now I know that went pretty fast, but right here in the bottom there is a second window just like we had in the entity relationship modeling side. You can expand that window and now you can see that every single command was executed. Each line is given a particular action, status. So you want to see the green. Green means approved and accepted. Anytime you see a yellow, that means that the command could not run, but it did not stop the execution of the next command. If you get a red icon, that means the script was unable to continue processing. You're going to have to start over again and make the corrections before you can complete that script file. In the secondary window, you'll also see what time, what action was taken or what the command was, how long the command took, which is the duration or [[Fetch]] time, as well as the response. The response lets you know how many rows were affected by issuing that particular SQL command. As you can see, all the commands were issued just fine. Now, every table that we have has zero rows in them, and of course we need to populate them.
>
> **[4:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=289)** All we have done is just make sure that the database schema is now loaded in, so now the database could potentially house rows with some data. For this demonstration, we'll only populate the brainiac, friend, follower, post, and direct message tables. As a data scientist and engineer, you likely won't be directly adding data to tables. It's typically performed by another system. For instance, on an [[E-Commerce]] invoice, the items bought, their quantity, total price and details are automatically added to the corresponding database tables. It's part of the transaction operations and processing to track fulfillment orders. To populate a database table directly, you'll need to follow the syntax. Keyword, insert into, and then the table name, open parentheses, the list of the column names, close parentheses, then keyword values, open parentheses, then you list all the values, you close parentheses and then end with the semicolon. For each table, I am adding a certain number of rows that I've put all of my insert statements
>
> **[6:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=385)** into a separate SQL script. I highly suggest doing this method. So you go to file, again, open SQL script, and then select the actual database SQL script file. I called mine TheBrainyDataset. Now all the tables that I'm showing you, I've added synthetically generated content that's all dummy. You can see I have insert into, and then there's a series of brainiac rows that all have different sets of information. Then I go to friend. Next is follower, then post, and then I round everything out with the direct message entity. It's important to realize the order in which I created this SQL script. I started with all of the strong entities, remember what they were, brainiac, friend, follower, and post. But remember, for the direct message entity, it's an associative entity. So it needed to have information from both brainiac and friend. So that is the table that I actually inserted data in last. So now that you have this file open, once again,
>
> **[8:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=485)** you can run this file. Let me go ahead and scroll up so you see the window, the secondary window of all of the output. So you just select the lightning bolt one more time to execute all of these insert statements. Again, it goes really, really fast. So let me scroll up a bit and you can see all of the insert statements from each of the entities have been added. All you see is a sea of green, that is what you want. Now it's time to retrieve data from these files. What I like to do first is confirm that all the data I think should be in these tables are actually in these tables. This means I'm writing select from SQL queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (11), [[MySQL]] (5), [[Fetch]] (1), [[E-Commerce]] (1)
> **Env Vars:** sql (11)
> **UI Navigation:** select the (4), go to (2), scroll up (2)
> **CLI Commands:** mysql (5), make (2)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** for example (1), just like (1), for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [SELECT-FROM clauses](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=0)** - [Instructor] Checking the contents of these database tables that you just added, data may seem unnecessary, but I can attest that there have been times when I've added the wrong data to a table. So I make it part of my practice to run two types of [[SQL]] queries that only use the SELECT and FROM clauses.
>
> **[0:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=29)** To display the data entries from a subset of tables of a specific table, we use a certain SQL syntax. It's keyword SELECT. You list the table names with a comma in between, then the keyword FROM anD ending with the table name and the semicolon at the end, but this right here is where we have the SQL scripts from the last lesson. So now, in order to write A SQL query for the Post table, I can now write the query inside of a new SQL script sheet. All you need to do is just type, SELECT
>
> **[1:33](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=93)** PostID, Message, then FROM and, of course, the table name, which is Post. You end with a semicolon, and you press the lightning bolt. It went super fast. So let me now show you the [[Windows]] that opened up below. So the first window that opens up is actually what's called your result grid. You can now see you have PostID, and you have Message. You have each of the post IDs listed numerically and then the messages for each one of those post ID. Underneath that window is a third window, which, of course, you can expand, and you will see that it shows you the action, the output, the response and of course, the duration times. Of course, it took no times in order to run that simple query, and it retrieved all 81 rows. So if you want to collapse them, you can go ahead and collapse every single one, and now you have the full white space available to you from the SQL script.
>
> **[3:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=186)** Now, you can repeat this type of query for the other tables. As an example, let me go through one more table, and you can do the [[Representational State Transfer (REST)|rest]] on your own. So let me try doing the SELECT FROM query for the brainiac.
>
> **[3:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=207)** So instead of for PostID and Message, let me change that to username and then of course, in the FROM, I want to change that to brainiac. So once again, you select the bolt to run the query. Now that you run the SELECT username FROM brainiac query, you can once again expand the second window to reveal the result grid, and you can see all of the usernames listed on the left-hand side. You can also see how much time it took for that particular query to run, like you did with the last one. It returned all 25 rows. You can, of course, collapse them back to the bottom, so you can hide them from your view. Now, if you want to display the data of all the columns, replace the column names with an asterisk, instead of for the column names. So for example, if you wanted to display all the columns from brainiac, you would need to replace username with this asterisk. If you run the query, that secondary window will populate, and now you will see each of the column names
>
> **[5:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=304)** and their contents listed for you. You can go ahead and collapse the secondary window, so you can reveal all of the white space for the SQL scripting, but in our example, we don't have a whole lot of rows here. It's easy to display them and superficially check them over. If you have thousands or hundreds of thousands of rows, this approach isn't an effective use of your time. So what's an alternative? It's using the SQL function called count. The count function returns the number of rows that matches a specific criterion. You can count the number of rows where data appears in a specific column or columns, but I like to use it initially to count the number of rows in a table. So I'm including all of the columns. Let me show you an example. So let's say I want to know the number of rows that exist within brainiac. So I'm going to replace the asterisk that you see here on the screen by now typing in count before it, open parentheses,
>
> **[6:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=401)** move the space bar one to encapsulate the asterisk and then close the parentheses. So the result of the query, SELECT count (*) FROM brainiac;,
>
> **[7:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=424)** it shows up in the result grid. Now, you might need to expand the column width on this result grid because only one row returned. You're just receiving the number of counts of how many rows exist in the table, and that count is 25 for the table brainiac. Now, we can do this particular query for every one of the tables. So if I were to do this for the Post table, how many rows do you think would be in the result grid? Let me go ahead and press the bolt, and let's see if you are correct. If you said 81, you've got it. Now, you can do these SELECT statements for the other tables. With these two types of SQL queries, you've done a good first pass with the data accuracy check. Your data analytics group may require additional routines that examine the completeness or validity of the data. While [[Data Quality]] is a high priority, we're here to create and run SQL queries to uncover meaningful insights,
>
> **[8:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=518)** and that starts with adding a WHERE clause to our SQL SELECT statements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (11), [[Windows]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Data Quality]] (1)
> **Env Vars:** sql (11), select (8), where (1)
> **SQL:** select (8), where (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** and (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)

#### [SELECT-FROM-WHERE clauses](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=0)** - [Instructor] The majority of your [[SQL]] queries will include two or more tables. They require you to correctly use the primary keys and foreign keys to filter out relevant data. The WHERE clause allows you to match rows with the information that's related to each other across tables. Suppose you want to know a list of posts with the [[Microsoft Word|word]] I-P-S-U-M. So of course, what you want to make sure that you identify are the two tables that you'll need. That'll be Brainiac and post. For simplicity, I've gone ahead and written these queries out and have pasted them into our SQL scripting tool. You'll see that Brainiac and post are listed in the FROM clause. You'll also see in the SELECT clause that you'll have the Brainiac's first name, the last name, as well as the post message that that phrase appears. Now here is the new information. When it comes to the WHERE clause, you now have to identify what are the primary key and foreign key matches that align so that you receive the information you're looking for. The Brainiac's username must match
>
> **[1:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=97)** with the post foreign key Brainiac username, and you now have to make sure that the phrase, content are going to be pattern matched as well. That's coming from the post entity. And as you can see on line three, there's a red X. And remember what I said about red icons? They mean you've done something wrong and there's a correction needed. So this particular line has an error when it comes to the phrase I-P-S-U-M. The asterisk have not copied over correctly. So now if you delete those apostrophes and add them back in on your keyboard, you will now see that that phrase has now changed colors. And of course, the red icon is gone. Go ahead and hit the lightning bolt and you will now see the result grid. Pull up that secondary window, and now you see all of the messages that contain that phrase, I-P-S-U-M. Once you verify the results, you can go ahead
>
> **[3:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=195)** and collapse that secondary window. Now suppose you want to know who someone's friends are. When I'm running through a series of SELECT statements, I like to remove the SELECT statement that I had previously and have a clean sheet. So when I add a new SQL query, all I see is just the results of that SQL query. So I went ahead and removed the previous query, and let me go ahead and add the next one. Once again, I've already written it, so let me go ahead and paste this SQL query that's looking for the number of friends Brandeis has within this particular database. Now, once again, I have a little bit of a problem, but the red icon isn't there. But if I were to go ahead and select the bolt, you're going to see an error pop up at the bottom of the screen. And there it is. There is the red X letting me know that the column of Brandeis cannot be found. That means that once again, I need to make sure that my apostrophes are correct.
>
> **[4:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=290)** Once I change the apostrophes, the word Brandeis has now been color coded, changed, and now I'm able to run the script by hitting that lightning bolt again. And now this particular execution has been successful. I can scroll and expand the secondary window, and now I can see the usernames who are friends of Brandeis. Good data Rick, Joy, B, Lady Mo, and Nina M.
>
> **[5:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=331)** As you can see, I like collapsing the [[Windows]], so it's easier in order to see what are the SQL scripts that I'm running, and then to see the results separately. Okay, last example. Now suppose you want to know the followers that Brandeis has. Once again, I've gone ahead and written this SQL query, so let me go ahead and paste it into this window.
>
> **[6:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=369)** What you will see, of course, is the from tables, Brainiac and follower, you need both them to isolate who are the followers of Brandeis. Now, of course, in the WHERE clause, you are now going to try to match the Brainiac's username with the foreign key from the follower entity, which is called Brainiac username. And you also want to make sure that you match up the right person's name that you're trying to find the follower list for. That happens to be the Brainiac's first name, which of course is Brandeis. And don't forget, go ahead and change the apostrophes to make sure that the word within the apostrophes are a different color code. In the SELECT portion, you want to identify all of the usernames that are distinct, which means you don't want any duplicates. So when you're done, go ahead and run that query. You see that the query has a run and you actually have a result grid. Now, don't forget to expand that list, and as you can see, there's nothing here.
>
> **[7:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=463)** There's no followers in the list. That means that Brandeis has no followers. Even though the result came back with no, it actually is a correct result. As I've demonstrated, the WHERE clause helps us sift through the data in a quick and easy manner, but the SQL query outputs aren't easily organized for human understanding. For example, in the first query, what if we wanted to group these outputs based upon the Brainiac's name? We'll get into slightly more meaningful SQL querying statements in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[Microsoft Word|Word]] (3), [[Windows]] (1)
> **Env Vars:** sql (9), where (4), select (4)
> **SQL:** where (4), select (4)
> **CLI Commands:** make (5), find (1)
> **Definitions:** means that (2), is called (1), is a  (1)
> **Best Practices:** don't forget (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)

#### [GROUP BY and ORDER BY clauses](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=0)** - [Instructor] As a Data Analyst or Engineer, you'll be asked to summarize the contents of a database at different levels of granularity. The ORDER BY clause helps us order the output in ascending or descending order. Let's start with a GROUP BY clause example. Suppose we want to display the Friends of each Brainiac. Now, I've gone ahead and written this query out, so let me go ahead and copy and paste it into the [[SQL]] Scripting Window. (keyboard clicks) As you can tell, we are using both of the tables, Brainiac and Friend. And of course, we want to make sure that we are matching the Primary Key from Brainiac with the Foreign Key that exists within the Friend table as well, in the WHERE clause. Of course, we want to GROUP BY the actual Friends, so we want to make sure our GROUP BY statement has Friends.Username. What we want to return, of course, exists within the SELECT statement, which is the Friend.Username, and of course, the Brainiacs information. So once we're ready, we go ahead and press that lightning bolt. In the Result Grid window, you can see the list of all the Friends associated with each of the Brainiacs. You will see that there are multiple Brainiacs listed for Friends.
>
> **[1:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=95)** Please note, that you need to have the Friend.Username listed not only in the GROUP BY clause, but also in the SELECT clause as well. If you try to run this query without the Friend.Username in the SELECT clause, this will not work. This is actually one of the rules of the GROUP BY statement. You have to make sure that any columns listed in the GROUP BY, also appear in the SELECT clause. But now that you see these results of this GROUP BY, you realize that you're only interested in knowing the Friends of Brainiacs from let's say, the same family with the last name of Smith. Now, you may be tempted to add a condition to the WHERE clause, but that would be a mistake. The new condition is associated with the groupings, not with all of the tables. So this is when you need to use the HAVING clause, which is processed after the GROUP BY clause has been executed. Remember that from the SQL Processing Order, from earlier in this course? So I've gone ahead and added this last part of the query, which is the HAVING clause. It's HAVING Brainiac.LastName is set to Smith. Now don't forget, you have to make sure
>
> **[3:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=191)** your apostrophes are correct and that the words within the apostrophes are highlighted a different color. Once you're ready, go ahead and press that lightning bolt. Now you will see that the results that you had from the GROUP BY query has now been modified and filtered out with this GROUP BY, HAVING query. You can now see that Tuchala Smith has five Friends.
>
> **[3:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=226)** Now, last up is the ORDER BY clause. It's common for your clients, both internal and external to the organization, to want to see the output ordered alphabetically. Suppose you want to display the postings containing the phrase IPSUM organized by Brainiac. This way, you want to see those post groups together by each Brainiac. So let me go ahead and write this query. Of course, this query will look very similar to the one we've seen in previous lessons. Let me go ahead and paste it into our SQL Scripting Window,
>
> **[4:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=280)** and you will now see that you are looking at both the Brainiac and Post Tables. The WHERE clause is matching the Primary Key and the Foreign Keys appropriately. And of course, you're now trying to match that particular phrase. I'm going to do a quick modification to make sure that the phrase is understandable by the system, changing those apostrophes. And now what I've added is this ORDER BY phrase. The ORDER BY clause is now organizing the output by Brainiacs Last Name and then First Name. When you're ready, go ahead and press that lightning bolt, expand that secondary window. And now you see the listing of first name and last name of the Brainiac with the messages that include the phrase that we have requested. Now by default, SQL sorts in ascending order. That's why B is first. And of course, S is last. Now we've gone through several fundamentals of [[Database Design]], Implementation, and SQL Querying. It's time to bring it all together, and for you to gain practice in building your own database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Database Design]] (1)
> **Env Vars:** group (10), sql (5), order (4), select (4), having (4)
> **SQL:** group by (10), order by (4), select (4), having (4), where (3)
> **CLI Commands:** make (5)
> **Cross-References:** earlier in (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


### 6. Final Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Bringing it all together](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=0)** - [Instructor] It's now time for the final project. Let's take everything I've shown you and apply it. Start by making any changes to the existing logical database model. Here's a few suggestions. One, the DirectMessage entity now only allows the brainiac and friend to exchange one message; you want them to be able to share multiple messages. So what type of modifications would you make? Number two, reconsider how the friend and follower information is organized. You want to ensure that you have a clear listing of friends and followers for each brainiac. Think about ways to restructure those entities. You may need to create an associative entity or two. Once you've done that, then try extending your logical database model to include capturing post reactions from a brainiacs, friends, and followers. For example, noting when a post receives a thumbs up or a friend reposts the post. Throughout all of your adjustments, remember to check your relationships and carnalities. Good luck, and meet me in the next video where I show you what I did.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Final project: The Brainery](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980&t=0)** - [Instructor] Well, here you have it. This is my solution to the final project. As you can see, I've added a couple of more tables, including those associative entities that I referenced in the previous lesson. I have the BrainiacFollowerList, as well as the BrainiacFriendList. I've also made a quick update to the DirectMessage where I've added a DirectMessageId. Remember, I also told you about those post reactions? Well, I also added a reaction table as well. That includes the reaction name, ID, and of course, the emoji. Since a repost is either you repost it or you don't repost it, I just added a quick attribute inside of each of the tables. PostReactionByFriend and PostReactionByFollower. I've included this solution file in the exercise files if you'd like to review it.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/next-steps?u=76281980&t=0)** - Congratulations, give yourself a pat on the back. You've done it. It wasn't as overwhelming as you'd imagined, right? If you're interested in gaining more practice in [[SQL]], check out Kedeisha Bryan's advanced SQL course, or to learn more about leading a [[Responsible AI]] organization, Elizabeth M. Adams has a great course on this topic. Well, we've reached the end of our time together for now. Thanks for taking this course. For more conversations about [[Data Ethics]] and building more responsible data practices, follow me on [[LinkedIn]] or visit my company website at [dataedx.com](https://dataedx.com). Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Responsible AI]] (1), [[Data Ethics]] (1), [[LinkedIn]] (1)
> **Env Vars:** sql (2)
> **URLs:** [dataedx.com](https://dataedx.com) (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Dr. Brandeis Marshall]]

## Resources

- Exercise files available

## Skills Covered

- Data Management
- Database Systems
- Database Design
- SQL

## Path Context

### In [[Advance Your Database Administration Skills]]
← [[SQL Server Fundamentals- Master Basic Query Techniques]] | **7 of 11** | [[Advanced SQL for Query Tuning and Performance Optimization]] →

## Appears In

- [[Advance Your Database Administration Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL, Database Design
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL
- [[Using SQL with Python]] — SQL

---

[↑ Back to top](#)