---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-mesh-architecture-core-concepts
url: "https://www.linkedin.com/learning/data-mesh-architecture-core-concepts"
duration_minutes: 31
duration: 31m
level: Intermediate
updated: 12/12/2024
learners: 9944
skills:
  - Data Architecture
  - Mesh
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGsB2LNifdsxw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733160846900?e=2147483647&amp;v=beta&amp;t=AopQiMhItOLfxCmFZPlv0-cTixOutZBOWAyHERDu5o0"
linkedin_topic: Data Science
learning_paths:
  - '[Introduction to Fundamental Skills for Data Work- Data Storage](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Storage.md)'
prev_courses:
  - '[Complete Guide to Data Lakes and Lakehouses](Complete%20Guide%20to%20Data%20Lakes%20and%20Lakehouses.md)'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Storage","position":6,"total":6,"prev":"Complete Guide to Data Lakes and Lakehouses","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-architecture
  - skill/mesh
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Mesh%20Architecture-%20Core%20Concepts.md)

![Data Mesh Architecture: Core Concepts](https://media.licdn.com/dms/image/v2/D4E0DAQGsB2LNifdsxw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733160846900?e=2147483647&amp;v=beta&amp;t=AopQiMhItOLfxCmFZPlv0-cTixOutZBOWAyHERDu5o0)

# Data Mesh Architecture: Core Concepts

> Gather insights into a cutting-edge approach to data management: data mesh architecture. Instructor Lauren Maffeo provides an introduction to data mesh, its significance, foundational concepts, and advantages over conventional data architecture patterns. Explore the four pillars of data mesh, including data domains, data as a product, self-service data access, and federated data governance. Learn 

> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts) | 31m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [What is data mesh?](#what-is-data-mesh)
  - [Why data mesh?](#why-data-mesh)
  - [The data mesh architecture pattern](#the-data-mesh-architecture-pattern)
  - [An intro to data decentralization](#an-intro-to-data-decentralization)
- [**1. The Four Pillars of Data Mesh**](#1-the-four-pillars-of-data-mesh) (4 videos)
  - [An intro to data domains](#an-intro-to-data-domains)
  - [Managing data as a product](#managing-data-as-a-product)
  - [Self-service access in the data mesh](#self-service-access-in-the-data-mesh)
  - [Federated data governance in action](#federated-data-governance-in-action)
- [**2. Designing Your First Data Mesh Architecture**](#2-designing-your-first-data-mesh-architecture) (4 videos)
  - [Choose your data domains](#choose-your-data-domains)
  - [Classify your sub-domains](#classify-your-sub-domains)
  - [Select stewards to serve as product owners](#select-stewards-to-serve-as-product-owners)
  - [Write your own federated standards](#write-your-own-federated-standards)
- [**Conclusion**](#conclusion) (1 videos)
  - [Investment in your future](#investment-in-your-future)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What is data mesh?](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/what-is-data-mesh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/what-is-data-mesh?u=76281980&t=0)** - If you work in data, you've likely worked on projects where clients had no clue which dataset lived where, or it took forever for IT to get you the data you needed. Data [Mesh](../../Skills/Software%20Development/Mesh.md) solves both problems. It keeps your data in one place so it's easier to find, and it assigns ownership to stewards who are experts on the data in their domains. That's because data mesh promotes a product mindset. It views data not as a service to be shared from the top down, but as a valuable product with an ongoing life cycle. I'm Lauren Maffeo, and we'll walk through this crash course on data mesh together. When you're done, you'll know its four key principles, what a data domain is, how to assign ownership of data, and most of all, how to get it set up for yourself. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (3)
> **CLI Commands:** find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - if (1)

#### [Why data mesh?](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=0)** - Tech moves faster than we can keep up, and it seems like there's a new trend to try each week. At first glance, data [Mesh](../../Skills/Software%20Development/Mesh.md) might seem like another buzzword that will come and go, but there's a reason it still has steam years after it was founded. The data mesh approach was founded in 2019 by Zhamak Dehghani while she was a consultant at ThoughtWorks. At the time, AI use was becoming more common and the amount of data that companies used was growing at a fast clip, but there was a big problem. When Dehghani saw the landscape of tools, techniques, and architecture patterns being used to manage data, most of them didn't meet the moment's needs. It was more common for companies to store their data in a wide range of places, from on-premise data warehouses to spreadsheets that lived on someone's server. The more data that companies collected, the less organized it seemed to be. Even if you did know where the dataset you needed lived, the scope of what's considered data was growing. Most data until then was structured, data that fits into tables using predefined formats. But thanks to social media and the [internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md), much more data was becoming unstructured. This data doesn't have standard formats, and it can be anything from social media posts and audio clips to images and survey responses. Knowing which data you have, where it lives, and providing it for users were three big problems in the data space back then. Dehghani developed data mesh to help the sector level up. It's tempting to think data mesh is one tool to buy or technique to try. It's much bigger than that because it's really a shift in how to manage [Big Data](../../Skills/Data%20Science/Big%20Data.md) at scale.
>
> **[1:33](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=93)** Most data doesn't live in the same digital space. It's spread across too many systems and it falls under the IT umbrella, where it's just one of many services to manage and IT gives permission for users to get the data they need if IT can even find it. This traditional [Data Management](../../Skills/Software%20Development/Data%20Management.md) technique views data as a service that's spread out across organizations and managed by a team with too many priorities and too little context about each data type. It's both common and unsustainable for the amount of data that companies own today. Data mesh is different. It views data as a range of [products](../../Skills/Software%20Development/Microsoft%20Products.md) that colleagues use to improve their own work. Each data product has its own consistent lifecycle because new data gets added, which changes the product, and it assigns ownership of each data [Product Strategy](../../Skills/Data%20Science/Product%20Strategy.md) to those who know best, subject matter experts who lead each data product's vertical and can set standards for its success. Data mesh is not one single tool or technique. It's an architecture pattern that helps you keep your data organized by domain. Let's talk about that in our next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (6), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** find (1)
> **Speakers:** - tech (1)

#### [The data mesh architecture pattern](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=0)** - [Presenter] Data [Mesh](../../Skills/Software%20Development/Mesh.md) is an architecture pattern that slots data into different domains and sub-domains that are organized by category. No matter which type of business you have, I'm guessing you have at least four types of data, HR, marketing, product, and legal. You probably do different types of marketing to spread the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) about your business. There's digital marketing to run ads online, [search engine optimization](../../Skills/Data%20Science/Search%20Engine%20Optimization%20(SEO).md) to help users find your website, physical campaigns on billboards, and content to help prospects learn what you offer. Under data mesh, marketing is one of your data domains because it's a core part of your business that generates a lot of data. The four types of marketing, online ads, SEO, billboard campaigns and content, are their own sub-domains, and your chief marketing officer is the data steward for all five data domains and sub-domains. That means they make decisions about marketing data based on their expertise. If your business adds a new marketing technique, your CMO has the autonomy to add this technique as a sub-domain. They also choose success metrics for each data type, like whether an ad campaign met its goals, how many billboard spots you purchased to advertise your product, or how many content types your marketing team makes, like blog posts, videos, and white papers. Your CMO also decides who can access which types of data in the data mesh architecture. Your colleagues shouldn't all be able to find each piece of marketing data you have, especially if it contains personally identifiable information. As the data steward, the CMO tells your data engineers
>
> **[1:36](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=96)** who can access which types of marketing data. This lets your engineers set the right user roles and permissions in the data mesh. This method helps your business in some big ways. First, it gives key categories for your data throughout the domain/sub-domain pattern. This keeps it organized in ways that are rare. If you've ever asked a client where a crucial data set lived and they said, "I don't know," you know what I mean. It also gives subject matter experts in non-technical roles more autonomy over the data in their domains. And finally, it automates access to data based on user roles. Let's say your [Data Science](../../Topics/Data%20Science.md) team needs the data in your content sub-domain to predict which types of content Marketing should produce next. They can request access to the content marketing sub-domain through the data mesh. Based on which user role the CMO assigned them, they'll either get access or request it from the data steward, AKA the CMO. All of these benefits decentralize your data. We'll share what that means in our next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (5), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Search engine optimization](../../Skills/Data%20Science/Search%20Engine%20Optimization%20(SEO).md) (1), [Data Science](../../Topics/Data%20Science.md) (1)
> **Env Vars:** cmo (5), seo (1), aka (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [presenter] (1)

#### [An intro to data decentralization](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=0)** - Data [Mesh](../../Skills/Software%20Development/Mesh.md) is decentralized architecture, which might not make sense at first. If you want to keep all your data in the same space for easy access, why would you decentralize it? The key thing to remember is decentralized ownership. Under data mesh, your governance structure for [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), compliance, and automated standards all live in the same space. What's decentralized is domain ownership within this shared space. Since data mesh organizes data by domains, you'll tag and label data according to the domains and sub-domains that it fits within. Each domain has an owner assigned to it. These data owners are the leads of their domains within your business. If the Chief Marketing Officer is the most senior marketing leader in your org, they'll be the owner for marketing data. If your VP of Sales is the most senior sales leader in your org, they'll own the sales data domain and all sub-domains for categories underneath sales, like inbound and outbound leads. This concept can scare people at first. When I've worked with clients to design [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) programs, the first question I often got is how much time it will cost their team. They also worry about how to involve colleagues who have non-technical roles. This is a tough time for tech teams. Everyone is already doing more with less amidst layoffs and uncertainty. Decentralized ownership and data mesh doesn't mean your CMO will start deploying [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) or pushing to production. It means that as your data domain's most senior leaders, they're the most relevant people to define success for the data in their respective domains.
>
> **[1:34](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=94)** When it comes to data quality standards, data definitions, and confirming sub-domains, your data team likely doesn't have all the context needed to know what's best per domain, but your domain leaders do, and that's why it benefits the business to decentralize ownership so that they can share it. Now that you know this concept, let's talk about how it affects the four pillars that make up data mesh.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (5), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** cmo (1)
> **Speakers:** - data (1)


### 1. The Four Pillars of Data Mesh

[↑ Back to Table of Contents](#table-of-contents)

#### [An intro to data domains](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=0)** - I started my tech career working on websites. I helped design information architecture, which organizes content on your website in a logical way that helps users find what they need. If you go to The Wall Street Journal's website, you'll see several categories on the homepage. Hovering over each section shows a dropdown menu of news organized by topic. This is an example of information architecture. The website is designed to help readers find the news they want to read by organizing it in logical categories. Within data [Mesh](../../Skills/Software%20Development/Mesh.md) domains are like sections of your website. They're logical groups of data that your business collects information about. The number of domains you have depends on how big your business is. But no matter how many employees you have or which industry you're in, most businesses have data about sales, marketing, customers, legal, and HR. When designing data mesh architecture, each of these categories is its own domain with subdomains underneath. When designing your own data domains, you can either choose broad categories like these or you can customize them to meet your business needs. Let's look at this business map for the company Red30 Tech. Their data team broke their data into four domains, HR, marketing, product, and legal. Under each domain, you see subdomains like Features under Product and Billing under Legal. Think of these like tags on a blog post, or labels on the data used to train AI. When you add tags to a blog post, it helps users find the post they're looking for
>
> **[1:34](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=94)** in the website search bar. And when you label the data used to train AI, you improve the algorithm's accuracy so that it doesn't have to guess what it sees. It's the same concept with data mesh. Domains and subdomains keep data organized in categories that have established owners. This tells your data mesh users where the data they need lives and which person they can request it from. Access to data is the most important part, because that's how your data mesh users find the data [products](../../Skills/Software%20Development/Microsoft%20Products.md) they need. We'll cover how to manage data as their own products next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (5), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2)
> **CLI Commands:** find (4)
> **UI Navigation:** go to (1), dropdown (1)
> **Definitions:** is an  (1)
> **Speakers:** - i (1)

#### [Managing data as a product](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=0)** - [Instructor] Data has historically been used as a service or in service of other goals. It is still used this way for the most part. When business leaders need data to make a decision, they often ask IT to give them the data they need. In this data as a service model, data is exchanged between the two groups. One group in this model has more power than the other, but not a lot of context about the data they own. They're also juggling this data as part of a bigger portfolio, which means that giving the right data to the right people isn't their only task. Data [Mesh](../../Skills/Software%20Development/Mesh.md) isn't just an architecture pattern, it's also a mindset shift in your data's value. Data mesh promotes data as a product which views datasets and data domains as standalone [products](../../Skills/Software%20Development/Microsoft%20Products.md) with their own features, managers, and life cycles. Using data as a product, your colleagues become users who need data to improve their own work. Let's say your data scientists needs data on revenue from last quarter's digital ad campaigns. They want to predict how many views the next campaign will get. Using data as a product, this scenario has four key components. A data steward, who acts like the product manager by making strategic decisions about marketing campaign data and gives users access to it, the data domain, which is broken into marketing sub-domains to help you find what you need faster, the business logic, which explains how data moves between the mesh environment and its users, and access to the data, which tells the user, your data engineer, where online campaign marketing data lives, which domain it's part of,
>
> **[1:33](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=93)** who to ask for access, and which rules or [Algorithms](../../Skills/Software%20Development/Algorithms.md) underpin the data. Data products users will vary based on context. So your user might be a data engineer who works in this space, but they might also be a customer care agent who doesn't need to see your entire data mesh. They just need a certain product, not all the details about your [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md). When you give them the dataset they need backed by a data steward, data domain, business logic, and semantic layer that connects data products to users, they gain more trust in the data you have.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (4), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md) (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Self-service access in the data mesh](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=0)** - Self-service data doesn't always have the best reputation. The old adage "If you build it, they will come" is often applied to data [Dashboards](../../Skills/Data%20Science/Dashboards.md) with mediocre results. Just giving someone a username and password to access a new system doesn't mean they'll know how to use it or gain value from it. So why should we expect data [Mesh](../../Skills/Software%20Development/Mesh.md) access to be any different? It goes back to autonomy. Data mesh is set up to let stewards of all data domains build and share data [products](../../Skills/Software%20Development/Microsoft%20Products.md) from the same centralized system. This approach has three core benefits. First, it keeps data domains in the same digital space and gives stewards of each data domain team the freedom to build data products without depending on a different team, like accessing a data set through an IT team that doesn't actually know much about that data set. Second, it lets data domain teams build and share data products from the same space. This differs from most data products that are built using a wider range of disconnected architecture. In her O'Reilly book on data mesh, Zhamak Dehghani writes that keeping your computation fabrics closer to each other helps teams build data products that are closer to their sources. Third, and most importantly, the products built and stored within data mesh are designed for use by general audiences. I worked as an analyst at Gartner for years, where I'd evaluate [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) software vendors. I know from experience that most vendors aren't incentivized to keep their products simple and easy to use. The more complex they are or perceived to be, the more business they can earn by teaching clients how to use them.
>
> **[1:33](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=93)** The data products in your mesh architecture are meant to be accessed and used by colleagues in a wide range of roles, from platform engineers testing new systems they've built to a customer care domain using no-code approaches to build weekly dashboards. That's what self-service means in data mesh, using the same platform to build diverse data products close to their source systems and sharing those products with wide audiences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (10), [Mesh](../../Skills/Software%20Development/Mesh.md) (6), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (2), [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) (1)
> **Prerequisites:** set up (1)
> **Speakers:** - self (1)

#### [Federated data governance in action](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=0)** - [Instructor] Data [Mesh](../../Skills/Software%20Development/Mesh.md) is built for users in all roles to access data quickly and use it as [products](../../Skills/Software%20Development/Microsoft%20Products.md) that solve their own needs. We've talked in this course about how data mesh gives teams closest to each data domain the power they need to own and execute their data products. That sounds great in theory, but the execution can be confusing. Let's talk about federated [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) in detail, connecting each puzzle piece to give you the full picture. In our last lesson, you learned that self-service access involves making and maintaining data products in the same architecture as their sources. You also learned that when you give data stewards the space to maintain data products from the same system as each product source, you boost each data product's quality and transparency. This is how you execute federated data governance via data mesh. In this way of working, data governance standards are defined centrally by the most senior colleague who manages your organization's data strategy. This is likely your Chief Data Officer or your Chief Technology Officer. This person oversees each aspect of the data mesh plan, defining key data domains to organize your data, choosing the best vendor where your data mesh architecture can live. Selecting data stewards to be the subject matter experts per domain, ensuring that each domain has the right pipelines, [Microservices](../../Skills/Software%20Development/Microservices.md), and other infrastructure needed to make each data product, and owning the data dictionary where details about each data domain reside. All of that's defined centrally by data leadership. The execution of it all is where federation comes in.
>
> **[1:34](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=94)** Once the CDO gives these high-level guidelines, your data stewards take it from there. Like any leader, they get the freedom to execute this work how they see fit. From defining which infrastructure is needed to writing data definitions that explain what data means in each domain's context, and deciding which [Metadata](../../Skills/Web%20Development/Metadata.md) maps to the right data. This federated model also gives stewards the power to define access to each data product by assigning the right roles and permissions to each user. Not everyone in your organization should have access to any data they want, especially if it's sensitive or contains PII, Personally Identifiable Information. Within data mesh, stewards can set up automated access to data products for defined user groups, and give additional access on a case-by-case basis. If a user requests data they shouldn't see, the steward can decline this request with an explanation. This federated approach to data has a lot of promise for boosting your data's quality, traceability, and accessibility, it's also resource intensive. I often talk to data teams who feel they lack the time, budget, and headcount to do data mesh well. That's especially true these days where budgets are being slashed to make room for AI, and the teams left behind have to do more with less. Data mesh is work, and it's a big investment. But the good news is that if you're starting from ground zero, you can build a foundation for fulfilling data mesh now that will scale up as you grow. If you start small by defining a few key data domains, selecting data stewards, and giving a few data products the resources to grow,
>
> **[3:08](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=188)** you can start adding strategic value now to build the data mesh you need tomorrow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (10), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (6), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (3), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** cdo (1), pii (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Designing Your First Data Mesh Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [Choose your data domains](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=0)** - The first step to setting up data [Mesh](../../Skills/Software%20Development/Mesh.md) is thinking about the best way to organize your data. We've talked about how domains are logical groups of data that your business consumes and produces. This is the most crucial part of designing data mesh, because the domains you pick will help the mesh users find and use the data in each domain. No matter which type of business you run, most have at least four categories: sales, marketing, HR, and legal. But whichever data domains you choose, keep two things in mind. First, data mesh domains are meant to be managed by leaders of each domain. This means your most senior sales lead will own the sales domain, your chief marketing officer leads the marketing domain, and so on. This allows each business unit, represented as a domain, to manage the data domains based on their expertise, from writing data definitions and attaching the right [Metadata](../../Skills/Web%20Development/Metadata.md) to writing user roles and permissions for who can access the data per domain. This helps each domain leader increase the content and improve the quality of the data in their domains. It also means you should choose domains that have established leaders and teams to manage their upkeep. Strong stewardship helps your domains thrive, so keep your resources per domain in mind when you're choosing them. We'll talk more about choosing the right stewards later in this course. Next, think about the subdomains you can create underneath each domain. Subdomains are the children of each domain, so they don't need their own stewards. Each domain steward leads respective subdomains as well. So if you have several similar yet different subcategories,
>
> **[1:35](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=95)** that's your clue to gather them under a domain that can act like an umbrella. Once you've considered the core areas of your business, you can start defining your data subdomains even further. That's what we'll learn next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (4), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Speakers:** - the (1)

#### [Classify your sub-domains](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=0)** - If data domains are your problem space, each subdomain is a solution space. When you organize data to have clear parent-child relationships, you give context that's needed for users to gain value from it. You just finished the first step of naming parent domains for your data. Now, you'll want to break that down further into subdomains. Doing this for every domain can feel overwhelming, but you're not starting fully from scratch. You can find inspiration from some unlikely sources. When I was researching my book on [Designing Data Governance](Designing%20Data%20Governance.md), I found that [Higher Education](../../Skills/Artificial%20Intelligence%20(AI)/Higher%20Education.md) is one of the most advanced sectors. I was surprised at first because education isn't known for using the latest and greatest tech to get work done, but universities do have large amounts of sensitive data that they need to find on a moment's notice. It could be a financial aid package for an accepted student or an undergrad transcript for an alum. They also tend to make their [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) plans public for transparency's sake. So if you need inspiration for how to set up your own data domains and subdomains, search for schools like the University of Rochester. Their data governance plans, including subdomains, trustees, and descriptions are available online and can be a great case study for how to do this work. Most organizations have financed data, so let's start with that as our sample domain. Defining finance subdomains involves mapping out each area of finance capability, the skills, staff, tools, and processes that fulfill goals for your organization. These are part of your core business, and functioning without them would be hard, if not impossible.
>
> **[1:33](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=93)** Here's what a capability map for your finance data domain might look like. Start with your domain up top, then break it down into subdomains. We'll use four subdomains as examples since a lot of data categories fall under each, operating budget, assets, audits and compliance, and liabilities. Under each subdomain, you see two categories of data, payroll and deductions for operating budget, accounts receivable and overdue payments for assets, et cetera. The exact number of subdomains will differ per domain. Your finance domain might have four, while your marketing data domain might have nine. The key to classifying your subdomains is defining areas of shared meaning or purpose under each domain. In this case, finance. Once you've defined your subdomains, it's time to set them up within your data [Mesh](../../Skills/Software%20Development/Mesh.md). We'll use [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Fabric as an example. The interface for your own data mesh architecture might look different, but you can expect to follow similar steps here. First, find the domain you want to add categories under and click New subdomain. This creates each new subdomain for you while keeping them all under the same domain's admin. Next, assign each subdomain to the right workspaces. You can do this by workspace name, admin, or a capacity. It depends on which naming convention you choose and your business structure. Whichever option you choose, your naming convention should the easiest, most accurate way for users to find the data in the domain. This improves the search functionality in your data mesh
>
> **[3:05](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=185)** by labeling the data in a way that makes it most accessible. Each domain steward will choose their subdomains, assign workspaces, and make naming conventions. They'll also decide when, why, and how to move data between workspaces in the data mesh and which default domain each new subdomain should join. Since data mesh is federated, each domain has its own rules, nuance, and standards. As new data comes in, you can assign it to the right default domain, and then the right subdomains underneath. Your data stewards per domain will own this work as part of their work. Next, we'll tell you how to find those stewards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (5), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (3), [Higher Education](../../Skills/Artificial%20Intelligence%20(AI)/Higher%20Education.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **CLI Commands:** find (5), make (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - if (1)

#### [Select stewards to serve as product owners](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=0)** - Data [Mesh](../../Skills/Software%20Development/Mesh.md) relies on each steward per data domain to maintain the domain's upkeep. To sustain this long term, each data domains team must manage the data as [products](../../Skills/Software%20Development/Microsoft%20Products.md) with ongoing life cycles. This is different from exporting a sales dashboard for your next presentation. Under data mesh, the products in each domain are maintained over time and ideally improve as each domain receives new data. Stewards keep the quality of each data product high by vetting new data against automated [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) standards. This graphic shows how data products work. On the left, you see inputs like CSV files. These inputs go through a range of data transformations, where things like quality rules, usage metrics, and transformation logic apply. At the end, you get data products, which can range from [Algorithms](../../Skills/Software%20Development/Algorithms.md) to [Real-Time](../../Skills/Database%20Management/Real-Time.md) [Dashboards](../../Skills/Data%20Science/Dashboards.md). These standards assess the new data coming in and mitigate data drift, which is when new data enters your domain and degrades its quality with time. To make this work in your own data mesh, you'll select stewards to lead each domain. This means you choose which data products to make and maintain, define each domain in subdomain, and set quality standards for that domain's freshness, schemas, boundary conditions, and more. This is substantial work, and at a time when tech workers already do more with less, it can look overwhelming. That's why you must choose stewards to lead each domain who are invested in getting it right. They already work with senior execs, oversee the visions for their domains, delegate tasks to the right colleagues,
>
> **[1:34](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=94)** and measure the domain's long-term success. They're in a position to influence change and their success in their roles depends on sharing high quality data with the right users at the right time. When I've worked with CDOs on their [Data Strategies](../../Skills/Data%20Science/Data%20Strategies.md), most are skeptical about involving business leads in highly technical work. But being a data steward does not mean you have to be a data architect or scientist. It means you set the vision for how to organize your data domain, then bring the right team on to fulfill that work. It's work that can feel chaotic at first. Business leaders often feel they lack the time and expertise to lead data strategies for their domains. It's also common for them to be siloed from your data team, which boosts the perception that data's not in their wheelhouse or their responsibility. So when choosing the right data stewards for your business, your biggest task is to create a cohesive team. Selecting the right data stewards per domain, and ensuring that you work as a unit to build a culture that will sustain your data mesh. I'm a big proponent of setting up a [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) council where stewards meet to guide key decisions about data in the business. This is how you move [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) from a compliance function to data advocates who are heard at every decision making level. It's also how you create a community of data stewards who are empowered to work in the open with each other. No one wants more meetings on their plate, but I've seen firsthand how this can work. My own organization has an internal architecture review board, where colleagues meet to review proposals for tech decisions that will affect the wider architecture.
>
> **[3:08](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=188)** These written proposals cover everything from API integrations and [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md) patterns to adding new sub-domains and discussing which systems specific business logic should live in. Attendees hear each proposal, vote on it, and delegate next steps to the right colleagues. The cadence and agendas for each meeting depend on your own organization's goals, nuance, and structure. The key takeaway is to make shared space for subject matter experts to become data stewards who have the support to lead their own domains.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (5), [Mesh](../../Skills/Software%20Development/Mesh.md) (4), [Data Strategies](../../Skills/Data%20Science/Data%20Strategies.md) (2), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** make (3)
> **Env Vars:** csv (1), api (1)
> **Speakers:** - data (1)

#### [Write your own federated standards](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=0)** - What does [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) look like across all of the domains you've outlined? As your final lesson, let's walk through the steps of defining federated standards for all domains and then customizing them for the domain at hand. Data without context is one of the reasons quality data degrades over time. Data [Mesh](../../Skills/Software%20Development/Mesh.md) prevents this by keeping data organized under domains and subdomains led by subject matter experts, AKA the data stewards. Context means that each data domain might be different. They'll have different numbers of subdomains, success and fail conditions, components, and more from one schema to another. As your data stewards start managing their domains in the data mesh, they'll likely want a blueprint from you showing which steps they should take. Here's how you can model the steps to write your own standards for a data domain. Let's start with your baseline work, defining data domains and subdomains for finance data. Once you've named the finance subdomains, your next step is to write these details down. Descriptions of each subdomain, which include the types of data within, components that use the data per subdomain, like payment processing systems or mobile apps. Standards for freshness, which is when each subdomains data should be updated, or a timestamp for when it was last updated. Schemas for each subdomain, which show how the data's organized. Business logic, which explains how the data per subdomain communicates with interfaces. Success conditions, which show the boundaries successful data should fall within.
>
> **[1:34](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=94)** And failure conditions, which explain when to reject new data in a subdomain for falling below quality standards. This can be a lot, especially when you're starting out a need to scale this work across every domain. It's also why data mesh isn't really just about the architecture. Tech is the means used to execute this work, but at its heart, data mesh is a cultural transformation. Your organizing leadership, strategy, operations, and business success around your data. You're also giving everyone shared investment in its quality. So as you write the blueprint for data mesh domains, follow these principles and ensure that your stewards do the same. Start by defining your most high priority data domains and sub-domains. While all domains are needed, you first need to assess which ones are most crucial for your business to function. Keep your data mesh architecture small with intent to scale it out. You want to apply your data mesh requirements in a meaningful, manageable way before you add new domains with their own nuances. Consider the scope of what data [products](../../Skills/Software%20Development/Microsoft%20Products.md) are in your organization. A data product can be anything which both helps and hurts when folks need clarity. So do you want data products to just be machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md)? Should you include [Dashboards](../../Skills/Data%20Science/Dashboards.md) that your C-suite wants to see each quarter? The choice is yours, but just like you've set success and failure conditions for data in your domains, you should also set boundaries to define what data products are. When you select stewards
>
> **[3:06](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=186)** and start meeting at [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) councils, much of your early work might focus on which tools to buy that can support data mesh. While you do need the right combination of tech tools, data mesh is not one single solution and no vendor will solve all of your data problems. Instead of searching for a magic bullet, work with your stewards to define which data products domains should offer and how they want to share these products with users of the mesh. These conversations will help you all confirm what you need from whichever tool you choose to buy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (10), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (5), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** aka (1)
> **Analogies:** just like (1)
> **Speakers:** - what (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Investment in your future](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980&t=0)** - Thanks for taking this course with me. I hope you learned why data [Mesh](../../Skills/Software%20Development/Mesh.md) is more than another fad and how its value set it apart from other architecture patterns. There's more pressure than ever on organizations to start building AI, sometimes at the cost of human jobs. But at its core, AI is data, and most data produced today is useless. Without the right teams, standards, structure, and tools, AI will keep producing poor results except for the few orgs with resources to do it right. You can compete using data mesh by structuring your business around your data, not the other way around. If you want to learn more on governance and quality, check out my other [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning courses, [Designing Data Governance](Designing%20Data%20Governance.md) and Automating [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) in Dev Environments. If you need a more comprehensive guide to data mesh, I recommend the book by the founder herself, Zhamak Dehghani's "Data Mesh: Delivering Data-Driven Value at Scale." Data mesh is an investment in your long-term future. It's a lot of work upfront and I know how overwhelming it can feel to get started, but if your long-term goals are to make high-quality data that's easy to discover, I'm confident that this is the best path forward. Good luck getting started and keep in touch to let me know how it's going for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - thanks (1)


## Instructor

- [Lauren Maffeo](../../Instructors/Data%20Science/Lauren%20Maffeo.md)

## Resources

- Exercise files available

## Skills Covered

- Data Architecture
- Mesh

## Path Context

### In [Introduction to Fundamental Skills for Data Work- Data Storage](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Storage.md)
← [Complete Guide to Data Lakes and Lakehouses](Complete%20Guide%20to%20Data%20Lakes%20and%20Lakehouses.md) | **6 of 6**

## Appears In

- [Introduction to Fundamental Skills for Data Work- Data Storage](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Storage.md)

---

[↑ Back to top](#)