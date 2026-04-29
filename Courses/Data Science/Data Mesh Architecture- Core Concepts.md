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
  - '[[Introduction to Fundamental Skills for Data Work- Data Storage]]'
prev_courses:
  - '[[Complete Guide to Data Lakes and Lakehouses]]'
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
created: 2026-04-29
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
  - What is data mesh?
  - Why data mesh?
  - The data mesh architecture pattern
  - An intro to data decentralization
- [**1. The Four Pillars of Data Mesh**](#1-the-four-pillars-of-data-mesh) (4 videos)
  - An intro to data domains
  - Managing data as a product
  - Self-service access in the data mesh
  - Federated data governance in action
- [**2. Designing Your First Data Mesh Architecture**](#2-designing-your-first-data-mesh-architecture) (4 videos)
  - Choose your data domains
  - Classify your sub-domains
  - Select stewards to serve as product owners
  - Write your own federated standards
- [**Conclusion**](#conclusion) (1 videos)
  - Investment in your future

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### What is data mesh?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/what-is-data-mesh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/what-is-data-mesh?u=76281980&t=0)** - If you work in data, you've likely worked on projects where clients had no clue which dataset lived where, or it took forever for IT to get you the data you needed.
>
> **[0:09](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/what-is-data-mesh?u=76281980&t=9)** Data mesh solves both problems.
>
> **[0:11](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/what-is-data-mesh?u=76281980&t=11)** It keeps your data in one place so it's easier to find, and it assigns ownership to stewards who are experts on the data in their domains.
>
> **[0:19](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/what-is-data-mesh?u=76281980&t=19)** That's because data mesh promotes a product mindset.
>
> **[0:22](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/what-is-data-mesh?u=76281980&t=22)** It views data not as a service to be shared from the top down, but as a valuable product with an ongoing life cycle.
>
> **[0:28](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/what-is-data-mesh?u=76281980&t=28)** I'm Lauren Maffeo, and we'll walk through this crash course on data mesh together.
>
> **[0:33](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/what-is-data-mesh?u=76281980&t=33)** When you're done, you'll know its four key principles, what a data domain is, how to assign ownership of data, and most of all, how to get it set up for yourself.
>
> **[0:41](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/what-is-data-mesh?u=76281980&t=41)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Prerequisites:** set up (1)
> **Speakers:** - if (1)

#### Why data mesh?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=0)** - Tech moves faster than we can keep up, and it seems like there's a new trend to try each week.
>
> **[0:05](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=5)** At first glance, data mesh might seem like another buzzword that will come and go, but there's a reason it still has steam years after it was founded.
>
> **[0:13](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=13)** The data mesh approach was founded in 2019 by Zhamak Dehghani while she was a consultant at ThoughtWorks.
>
> **[0:18](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=18)** At the time, AI use was becoming more common and the amount of data that companies used was growing at a fast clip, but there was a big problem.
>
> **[0:27](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=27)** When Dehghani saw the landscape of tools, techniques, and architecture patterns being used to manage data, most of them didn't meet the moment's needs.
>
> **[0:35](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=35)** It was more common for companies to store their data in a wide range of places, from on-premise data warehouses to spreadsheets that lived on someone's server.
>
> **[0:44](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=44)** The more data that companies collected, the less organized it seemed to be.
>
> **[0:48](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=48)** Even if you did know where the dataset you needed lived, the scope of what's considered data was growing.
>
> **[0:54](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=54)** Most data until then was structured, data that fits into tables using predefined formats.
>
> **[1:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=60)** But thanks to social media and the internet of things, much more data was becoming unstructured.
>
> **[1:05](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=65)** This data doesn't have standard formats, and it can be anything from social media posts and audio clips to images and survey responses.
>
> **[1:14](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=74)** Knowing which data you have, where it lives, and providing it for users were three big problems in the data space back then.
>
> **[1:21](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=81)** Dehghani developed data mesh to help the sector level up.
>
> **[1:24](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=84)** It's tempting to think data mesh is one tool to buy or technique to try.
>
> **[1:28](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=88)** It's much bigger than that because it's really a shift in how to manage big data at scale.
>
> **[1:33](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=93)** Most data doesn't live in the same digital space.
>
> **[1:36](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=96)** It's spread across too many systems and it falls under the IT umbrella, where it's just one of many services to manage and IT gives permission for users to get the data they need if IT can even find it.
>
> **[1:48](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=108)** This traditional data management technique views data as a service that's spread out across organizations and managed by a team with too many priorities and too little context about each data type.
>
> **[2:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=120)** It's both common and unsustainable for the amount of data that companies own today.
>
> **[2:05](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=125)** Data mesh is different.
>
> **[2:06](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=126)** It views data as a range of products that colleagues use to improve their own work.
>
> **[2:11](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=131)** Each data product has its own consistent lifecycle because new data gets added, which changes the product, and it assigns ownership of each data product strategy to those who know best, subject matter experts who lead each data product's vertical and can set standards for its success.
>
> **[2:27](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=147)** Data mesh is not one single tool or technique.
>
> **[2:30](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=150)** It's an architecture pattern that helps you keep your data organized by domain.
>
> **[2:34](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/why-data-mesh?u=76281980&t=154)** Let's talk about that in our next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** try. (1), type. (1), let (1)
> **CLI Commands:** find (1)
> **Speakers:** - tech (1)

#### The data mesh architecture pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=0)** - [Presenter] Data mesh is an architecture pattern that slots data into different domains and sub-domains that are organized by category.
>
> **[0:08](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=8)** No matter which type of business you have, I'm guessing you have at least four types of data, HR, marketing, product, and legal.
>
> **[0:16](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=16)** You probably do different types of marketing to spread the word about your business.
>
> **[0:20](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=20)** There's digital marketing to run ads online, search engine optimization to help users find your website, physical campaigns on billboards, and content to help prospects learn what you offer.
>
> **[0:32](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=32)** Under data mesh, marketing is one of your data domains because it's a core part of your business that generates a lot of data.
>
> **[0:39](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=39)** The four types of marketing, online ads, SEO, billboard campaigns and content, are their own sub-domains, and your chief marketing officer is the data steward for all five data domains and sub-domains.
>
> **[0:53](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=53)** That means they make decisions about marketing data based on their expertise.
>
> **[0:58](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=58)** If your business adds a new marketing technique, your CMO has the autonomy to add this technique as a sub-domain.
>
> **[1:04](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=64)** They also choose success metrics for each data type, like whether an ad campaign met its goals, how many billboard spots you purchased to advertise your product, or how many content types your marketing team makes, like blog posts, videos, and white papers.
>
> **[1:20](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=80)** Your CMO also decides who can access which types of data in the data mesh architecture.
>
> **[1:25](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=85)** Your colleagues shouldn't all be able to find each piece of marketing data you have, especially if it contains personally identifiable information.
>
> **[1:33](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=93)** As the data steward, the CMO tells your data engineers who can access which types of marketing data.
>
> **[1:39](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=99)** This lets your engineers set the right user roles and permissions in the data mesh.
>
> **[1:45](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=105)** This method helps your business in some big ways.
>
> **[1:47](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=107)** First, it gives key categories for your data throughout the domain/sub-domain pattern.
>
> **[1:53](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=113)** This keeps it organized in ways that are rare.
>
> **[1:55](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=115)** If you've ever asked a client where a crucial data set lived and they said, "I don't know," you know what I mean.
>
> **[2:02](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=122)** It also gives subject matter experts in non-technical roles more autonomy over the data in their domains.
>
> **[2:09](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=129)** And finally, it automates access to data based on user roles.
>
> **[2:13](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=133)** Let's say your data science team needs the data in your content sub-domain to predict which types of content Marketing should produce next.
>
> **[2:20](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=140)** They can request access to the content marketing sub-domain through the data mesh.
>
> **[2:25](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=145)** Based on which user role the CMO assigned them, they'll either get access or request it from the data steward, AKA the CMO.
>
> **[2:32](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=152)** All of these benefits decentralize your data.
>
> **[2:35](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/the-data-mesh-architecture-pattern?u=76281980&t=155)** We'll share what that means in our next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** cmo (5), seo (1), aka (1)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** type, (1), finally, (1), let (1)
> **Definitions:** is an  (1)
> **Speakers:** - [presenter] (1)

#### An intro to data decentralization
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=0)** - Data mesh is decentralized architecture, which might not make sense at first.
>
> **[0:05](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=5)** If you want to keep all your data in the same space for easy access, why would you decentralize it?
>
> **[0:11](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=11)** The key thing to remember is decentralized ownership.
>
> **[0:14](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=14)** Under data mesh, your governance structure for data quality, compliance, and automated standards all live in the same space.
>
> **[0:22](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=22)** What's decentralized is domain ownership within this shared space.
>
> **[0:26](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=26)** Since data mesh organizes data by domains, you'll tag and label data according to the domains and sub-domains that it fits within.
>
> **[0:35](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=35)** Each domain has an owner assigned to it.
>
> **[0:37](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=37)** These data owners are the leads of their domains within your business.
>
> **[0:41](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=41)** If the Chief Marketing Officer is the most senior marketing leader in your org, they'll be the owner for marketing data.
>
> **[0:48](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=48)** If your VP of Sales is the most senior sales leader in your org, they'll own the sales data domain and all sub-domains for categories underneath sales, like inbound and outbound leads.
>
> **[0:58](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=58)** This concept can scare people at first.
>
> **[1:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=60)** When I've worked with clients to design data governance programs, the first question I often got is how much time it will cost their team.
>
> **[1:08](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=68)** They also worry about how to involve colleagues who have non-technical roles.
>
> **[1:12](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=72)** This is a tough time for tech teams.
>
> **[1:14](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=74)** Everyone is already doing more with less amidst layoffs and uncertainty.
>
> **[1:18](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=78)** Decentralized ownership and data mesh doesn't mean your CMO will start deploying data pipelines or pushing to production.
>
> **[1:25](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=85)** It means that as your data domain's most senior leaders, they're the most relevant people to define success for the data in their respective domains.
>
> **[1:34](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=94)** When it comes to data quality standards, data definitions, and confirming sub-domains, your data team likely doesn't have all the context needed to know what's best per domain, but your domain leaders do, and that's why it benefits the business to decentralize ownership so that they can share it.
>
> **[1:50](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-decentralization?u=76281980&t=110)** Now that you know this concept, let's talk about how it affects the four pillars that make up data mesh.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Code Keywords:** let (1)
> **Env Vars:** cmo (1)
> **Speakers:** - data (1)


### 1. The Four Pillars of Data Mesh

> [↑ Back to Table of Contents](#table-of-contents)

#### An intro to data domains
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=0)** - I started my tech career working on websites.
>
> **[0:03](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=3)** I helped design information architecture, which organizes content on your website in a logical way that helps users find what they need.
>
> **[0:11](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=11)** If you go to The Wall Street Journal's website, you'll see several categories on the homepage.
>
> **[0:16](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=16)** Hovering over each section shows a dropdown menu of news organized by topic.
>
> **[0:20](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=20)** This is an example of information architecture.
>
> **[0:23](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=23)** The website is designed to help readers find the news they want to read by organizing it in logical categories.
>
> **[0:30](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=30)** Within data mesh domains are like sections of your website.
>
> **[0:34](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=34)** They're logical groups of data that your business collects information about.
>
> **[0:37](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=37)** The number of domains you have depends on how big your business is.
>
> **[0:41](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=41)** But no matter how many employees you have or which industry you're in, most businesses have data about sales, marketing, customers, legal, and HR.
>
> **[0:53](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=53)** When designing data mesh architecture, each of these categories is its own domain with subdomains underneath.
>
> **[0:59](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=59)** When designing your own data domains, you can either choose broad categories like these or you can customize them to meet your business needs.
>
> **[1:08](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=68)** Let's look at this business map for the company Red30 Tech.
>
> **[1:11](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=71)** Their data team broke their data into four domains, HR, marketing, product, and legal.
>
> **[1:18](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=78)** Under each domain, you see subdomains like Features under Product and Billing under Legal.
>
> **[1:25](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=85)** Think of these like tags on a blog post, or labels on the data used to train AI.
>
> **[1:30](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=90)** When you add tags to a blog post, it helps users find the post they're looking for in the website search bar.
>
> **[1:36](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=96)** And when you label the data used to train AI, you improve the algorithm's accuracy so that it doesn't have to guess what it sees.
>
> **[1:43](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=103)** It's the same concept with data mesh.
>
> **[1:45](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=105)** Domains and subdomains keep data organized in categories that have established owners.
>
> **[1:50](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=110)** This tells your data mesh users where the data they need lives and which person they can request it from.
>
> **[1:56](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=116)** Access to data is the most important part, because that's how your data mesh users find the data products they need.
>
> **[2:02](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/an-intro-to-data-domains?u=76281980&t=122)** We'll cover how to manage data as their own products next.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Code Keywords:** let (1), from. (1)
> **UI Navigation:** go to (1), dropdown (1)
> **Definitions:** is an  (1)
> **Speakers:** - i (1)

#### Managing data as a product
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=0)** - [Instructor] Data has historically been used as a service or in service of other goals.
>
> **[0:05](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=5)** It is still used this way for the most part.
>
> **[0:08](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=8)** When business leaders need data to make a decision, they often ask IT to give them the data they need.
>
> **[0:13](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=13)** In this data as a service model, data is exchanged between the two groups.
>
> **[0:18](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=18)** One group in this model has more power than the other, but not a lot of context about the data they own.
>
> **[0:24](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=24)** They're also juggling this data as part of a bigger portfolio, which means that giving the right data to the right people isn't their only task.
>
> **[0:32](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=32)** Data mesh isn't just an architecture pattern, it's also a mindset shift in your data's value.
>
> **[0:38](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=38)** Data mesh promotes data as a product which views datasets and data domains as standalone products with their own features, managers, and life cycles.
>
> **[0:47](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=47)** Using data as a product, your colleagues become users who need data to improve their own work.
>
> **[0:53](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=53)** Let's say your data scientists needs data on revenue from last quarter's digital ad campaigns.
>
> **[0:58](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=58)** They want to predict how many views the next campaign will get.
>
> **[1:01](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=61)** Using data as a product, this scenario has four key components.
>
> **[1:05](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=65)** A data steward, who acts like the product manager by making strategic decisions about marketing campaign data and gives users access to it, the data domain, which is broken into marketing sub-domains to help you find what you need faster, the business logic, which explains how data moves between the mesh environment and its users, and access to the data, which tells the user, your data engineer, where online campaign marketing data lives, which domain it's part of, who to ask for access, and which rules or algorithms underpin the data.
>
> **[1:39](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=99)** Data products users will vary based on context.
>
> **[1:42](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=102)** So your user might be a data engineer who works in this space, but they might also be a customer care agent who doesn't need to see your entire data mesh.
>
> **[1:50](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=110)** They just need a certain product, not all the details about your data architecture.
>
> **[1:55](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/managing-data-as-a-product?u=76281980&t=115)** When you give them the dataset they need backed by a data steward, data domain, business logic, and semantic layer that connects data products to users, they gain more trust in the data you have.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Self-service access in the data mesh
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=0)** - Self-service data doesn't always have the best reputation.
>
> **[0:04](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=4)** The old adage "If you build it, they will come" is often applied to data dashboards with mediocre results.
>
> **[0:09](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=9)** Just giving someone a username and password to access a new system doesn't mean they'll know how to use it or gain value from it.
>
> **[0:16](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=16)** So why should we expect data mesh access to be any different?
>
> **[0:20](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=20)** It goes back to autonomy.
>
> **[0:21](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=21)** Data mesh is set up to let stewards of all data domains build and share data products from the same centralized system.
>
> **[0:29](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=29)** This approach has three core benefits.
>
> **[0:32](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=32)** First, it keeps data domains in the same digital space and gives stewards of each data domain team the freedom to build data products without depending on a different team, like accessing a data set through an IT team that doesn't actually know much about that data set.
>
> **[0:47](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=47)** Second, it lets data domain teams build and share data products from the same space.
>
> **[0:52](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=52)** This differs from most data products that are built using a wider range of disconnected architecture.
>
> **[0:58](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=58)** In her O'Reilly book on data mesh, Zhamak Dehghani writes that keeping your computation fabrics closer to each other helps teams build data products that are closer to their sources.
>
> **[1:08](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=68)** Third, and most importantly, the products built and stored within data mesh are designed for use by general audiences.
>
> **[1:16](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=76)** I worked as an analyst at Gartner for years, where I'd evaluate business intelligence software vendors.
>
> **[1:21](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=81)** I know from experience that most vendors aren't incentivized to keep their products simple and easy to use.
>
> **[1:27](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=87)** The more complex they are or perceived to be, the more business they can earn by teaching clients how to use them.
>
> **[1:33](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=93)** The data products in your mesh architecture are meant to be accessed and used by colleagues in a wide range of roles, from platform engineers testing new systems they've built to a customer care domain using no-code approaches to build weekly dashboards.
>
> **[1:47](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/self-service-access-in-the-data-mesh?u=76281980&t=107)** That's what self-service means in data mesh, using the same platform to build diverse data products close to their source systems and sharing those products with wide audiences.

> [!info]- Semantic Content
>
> **Code Keywords:** self (2), let (1)
> **Prerequisites:** set up (1)
> **Speakers:** - self (1)

#### Federated data governance in action
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=0)** - [Instructor] Data mesh is built for users in all roles to access data quickly and use it as products that solve their own needs.
>
> **[0:07](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=7)** We've talked in this course about how data mesh gives teams closest to each data domain the power they need to own and execute their data products.
>
> **[0:15](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=15)** That sounds great in theory, but the execution can be confusing.
>
> **[0:19](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=19)** Let's talk about federated data governance in detail, connecting each puzzle piece to give you the full picture.
>
> **[0:25](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=25)** In our last lesson, you learned that self-service access involves making and maintaining data products in the same architecture as their sources.
>
> **[0:34](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=34)** You also learned that when you give data stewards the space to maintain data products from the same system as each product source, you boost each data product's quality and transparency.
>
> **[0:44](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=44)** This is how you execute federated data governance via data mesh.
>
> **[0:48](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=48)** In this way of working, data governance standards are defined centrally by the most senior colleague who manages your organization's data strategy.
>
> **[0:56](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=56)** This is likely your Chief Data Officer or your Chief Technology Officer.
>
> **[1:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=60)** This person oversees each aspect of the data mesh plan, defining key data domains to organize your data, choosing the best vendor where your data mesh architecture can live.
>
> **[1:11](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=71)** Selecting data stewards to be the subject matter experts per domain, ensuring that each domain has the right pipelines, microservices, and other infrastructure needed to make each data product, and owning the data dictionary where details about each data domain reside.
>
> **[1:28](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=88)** All of that's defined centrally by data leadership.
>
> **[1:30](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=90)** The execution of it all is where federation comes in.
>
> **[1:34](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=94)** Once the CDO gives these high-level guidelines, your data stewards take it from there.
>
> **[1:39](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=99)** Like any leader, they get the freedom to execute this work how they see fit.
>
> **[1:43](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=103)** From defining which infrastructure is needed to writing data definitions that explain what data means in each domain's context, and deciding which metadata maps to the right data.
>
> **[1:53](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=113)** This federated model also gives stewards the power to define access to each data product by assigning the right roles and permissions to each user.
>
> **[2:02](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=122)** Not everyone in your organization should have access to any data they want, especially if it's sensitive or contains PII, Personally Identifiable Information.
>
> **[2:11](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=131)** Within data mesh, stewards can set up automated access to data products for defined user groups, and give additional access on a case-by-case basis.
>
> **[2:20](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=140)** If a user requests data they shouldn't see, the steward can decline this request with an explanation.
>
> **[2:27](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=147)** This federated approach to data has a lot of promise for boosting your data's quality, traceability, and accessibility, it's also resource intensive.
>
> **[2:36](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=156)** I often talk to data teams who feel they lack the time, budget, and headcount to do data mesh well.
>
> **[2:42](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=162)** That's especially true these days where budgets are being slashed to make room for AI, and the teams left behind have to do more with less.
>
> **[2:49](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=169)** Data mesh is work, and it's a big investment.
>
> **[2:52](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=172)** But the good news is that if you're starting from ground zero, you can build a foundation for fulfilling data mesh now that will scale up as you grow.
>
> **[3:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/federated-data-governance-in-action?u=76281980&t=180)** If you start small by defining a few key data domains, selecting data stewards, and giving a few data products the resources to grow, you can start adding strategic value now to build the data mesh you need tomorrow.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** let (1), self (1)
> **Env Vars:** cdo (1), pii (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Designing Your First Data Mesh Architecture

> [↑ Back to Table of Contents](#table-of-contents)

#### Choose your data domains
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=0)** - The first step to setting up data mesh is thinking about the best way to organize your data.
>
> **[0:05](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=5)** We've talked about how domains are logical groups of data that your business consumes and produces.
>
> **[0:10](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=10)** This is the most crucial part of designing data mesh, because the domains you pick will help the mesh users find and use the data in each domain.
>
> **[0:19](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=19)** No matter which type of business you run, most have at least four categories: sales, marketing, HR, and legal.
>
> **[0:27](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=27)** But whichever data domains you choose, keep two things in mind.
>
> **[0:31](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=31)** First, data mesh domains are meant to be managed by leaders of each domain.
>
> **[0:35](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=35)** This means your most senior sales lead will own the sales domain, your chief marketing officer leads the marketing domain, and so on.
>
> **[0:43](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=43)** This allows each business unit, represented as a domain, to manage the data domains based on their expertise, from writing data definitions and attaching the right metadata to writing user roles and permissions for who can access the data per domain.
>
> **[0:57](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=57)** This helps each domain leader increase the content and improve the quality of the data in their domains.
>
> **[1:03](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=63)** It also means you should choose domains that have established leaders and teams to manage their upkeep.
>
> **[1:08](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=68)** Strong stewardship helps your domains thrive, so keep your resources per domain in mind when you're choosing them.
>
> **[1:15](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=75)** We'll talk more about choosing the right stewards later in this course.
>
> **[1:19](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=79)** Next, think about the subdomains you can create underneath each domain.
>
> **[1:23](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=83)** Subdomains are the children of each domain, so they don't need their own stewards.
>
> **[1:27](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=87)** Each domain steward leads respective subdomains as well.
>
> **[1:31](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=91)** So if you have several similar yet different subcategories, that's your clue to gather them under a domain that can act like an umbrella.
>
> **[1:39](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=99)** Once you've considered the core areas of your business, you can start defining your data subdomains even further.
>
> **[1:45](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/choose-your-data-domains?u=76281980&t=105)** That's what we'll learn next.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Speakers:** - the (1)

#### Classify your sub-domains
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=0)** - If data domains are your problem space, each subdomain is a solution space.
>
> **[0:05](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=5)** When you organize data to have clear parent-child relationships, you give context that's needed for users to gain value from it.
>
> **[0:12](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=12)** You just finished the first step of naming parent domains for your data.
>
> **[0:16](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=16)** Now, you'll want to break that down further into subdomains.
>
> **[0:19](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=19)** Doing this for every domain can feel overwhelming, but you're not starting fully from scratch.
>
> **[0:23](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=23)** You can find inspiration from some unlikely sources.
>
> **[0:27](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=27)** When I was researching my book on [[Designing Data Governance]], I found that higher education is one of the most advanced sectors.
>
> **[0:33](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=33)** I was surprised at first because education isn't known for using the latest and greatest tech to get work done, but universities do have large amounts of sensitive data that they need to find on a moment's notice.
>
> **[0:45](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=45)** It could be a financial aid package for an accepted student or an undergrad transcript for an alum.
>
> **[0:50](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=50)** They also tend to make their data governance plans public for transparency's sake.
>
> **[0:56](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=56)** So if you need inspiration for how to set up your own data domains and subdomains, search for schools like the University of Rochester.
>
> **[1:03](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=63)** Their data governance plans, including subdomains, trustees, and descriptions are available online and can be a great case study for how to do this work.
>
> **[1:12](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=72)** Most organizations have financed data, so let's start with that as our sample domain.
>
> **[1:17](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=77)** Defining finance subdomains involves mapping out each area of finance capability, the skills, staff, tools, and processes that fulfill goals for your organization.
>
> **[1:28](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=88)** These are part of your core business, and functioning without them would be hard, if not impossible.
>
> **[1:33](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=93)** Here's what a capability map for your finance data domain might look like.
>
> **[1:37](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=97)** Start with your domain up top, then break it down into subdomains.
>
> **[1:41](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=101)** We'll use four subdomains as examples since a lot of data categories fall under each, operating budget, assets, audits and compliance, and liabilities.
>
> **[1:52](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=112)** Under each subdomain, you see two categories of data, payroll and deductions for operating budget, accounts receivable and overdue payments for assets, et cetera.
>
> **[2:02](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=122)** The exact number of subdomains will differ per domain.
>
> **[2:06](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=126)** Your finance domain might have four, while your marketing data domain might have nine.
>
> **[2:11](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=131)** The key to classifying your subdomains is defining areas of shared meaning or purpose under each domain.
>
> **[2:17](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=137)** In this case, finance.
>
> **[2:19](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=139)** Once you've defined your subdomains, it's time to set them up within your data mesh.
>
> **[2:23](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=143)** We'll use Microsoft Fabric as an example.
>
> **[2:26](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=146)** The interface for your own data mesh architecture might look different, but you can expect to follow similar steps here.
>
> **[2:32](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=152)** First, find the domain you want to add categories under and click New subdomain.
>
> **[2:37](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=157)** This creates each new subdomain for you while keeping them all under the same domain's admin.
>
> **[2:43](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=163)** Next, assign each subdomain to the right workspaces.
>
> **[2:47](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=167)** You can do this by workspace name, admin, or a capacity.
>
> **[2:51](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=171)** It depends on which naming convention you choose and your business structure.
>
> **[2:56](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=176)** Whichever option you choose, your naming convention should the easiest, most accurate way for users to find the data in the domain.
>
> **[3:03](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=183)** This improves the search functionality in your data mesh by labeling the data in a way that makes it most accessible.
>
> **[3:10](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=190)** Each domain steward will choose their subdomains, assign workspaces, and make naming conventions.
>
> **[3:16](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=196)** They'll also decide when, why, and how to move data between workspaces in the data mesh and which default domain each new subdomain should join.
>
> **[3:26](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=206)** Since data mesh is federated, each domain has its own rules, nuance, and standards.
>
> **[3:31](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=211)** As new data comes in, you can assign it to the right default domain, and then the right subdomains underneath.
>
> **[3:37](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=217)** Your data stewards per domain will own this work as part of their work.
>
> **[3:41](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/classify-your-sub-domains?u=76281980&t=221)** Next, we'll tell you how to find those stewards.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5), make (2)
> **Code Keywords:** public (1), let (1), case, (1), interface (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - if (1)

#### Select stewards to serve as product owners
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=0)** - Data mesh relies on each steward per data domain to maintain the domain's upkeep.
>
> **[0:05](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=5)** To sustain this long term, each data domains team must manage the data as products with ongoing life cycles.
>
> **[0:12](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=12)** This is different from exporting a sales dashboard for your next presentation.
>
> **[0:16](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=16)** Under data mesh, the products in each domain are maintained over time and ideally improve as each domain receives new data.
>
> **[0:24](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=24)** Stewards keep the quality of each data product high by vetting new data against automated data quality standards.
>
> **[0:31](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=31)** This graphic shows how data products work.
>
> **[0:33](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=33)** On the left, you see inputs like CSV files.
>
> **[0:36](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=36)** These inputs go through a range of data transformations, where things like quality rules, usage metrics, and transformation logic apply.
>
> **[0:44](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=44)** At the end, you get data products, which can range from algorithms to real-time dashboards.
>
> **[0:50](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=50)** These standards assess the new data coming in and mitigate data drift, which is when new data enters your domain and degrades its quality with time.
>
> **[0:59](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=59)** To make this work in your own data mesh, you'll select stewards to lead each domain.
>
> **[1:04](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=64)** This means you choose which data products to make and maintain, define each domain in subdomain, and set quality standards for that domain's freshness, schemas, boundary conditions, and more.
>
> **[1:16](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=76)** This is substantial work, and at a time when tech workers already do more with less, it can look overwhelming.
>
> **[1:22](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=82)** That's why you must choose stewards to lead each domain who are invested in getting it right.
>
> **[1:27](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=87)** They already work with senior execs, oversee the visions for their domains, delegate tasks to the right colleagues, and measure the domain's long-term success.
>
> **[1:37](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=97)** They're in a position to influence change and their success in their roles depends on sharing high quality data with the right users at the right time.
>
> **[1:46](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=106)** When I've worked with CDOs on their data strategies, most are skeptical about involving business leads in highly technical work.
>
> **[1:53](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=113)** But being a data steward does not mean you have to be a data architect or scientist.
>
> **[1:58](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=118)** It means you set the vision for how to organize your data domain, then bring the right team on to fulfill that work.
>
> **[2:05](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=125)** It's work that can feel chaotic at first.
>
> **[2:07](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=127)** Business leaders often feel they lack the time and expertise to lead data strategies for their domains.
>
> **[2:13](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=133)** It's also common for them to be siloed from your data team, which boosts the perception that data's not in their wheelhouse or their responsibility.
>
> **[2:21](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=141)** So when choosing the right data stewards for your business, your biggest task is to create a cohesive team.
>
> **[2:27](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=147)** Selecting the right data stewards per domain, and ensuring that you work as a unit to build a culture that will sustain your data mesh.
>
> **[2:34](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=154)** I'm a big proponent of setting up a data governance council where stewards meet to guide key decisions about data in the business.
>
> **[2:41](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=161)** This is how you move data stewardship from a compliance function to data advocates who are heard at every decision making level.
>
> **[2:49](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=169)** It's also how you create a community of data stewards who are empowered to work in the open with each other.
>
> **[2:55](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=175)** No one wants more meetings on their plate, but I've seen firsthand how this can work.
>
> **[2:59](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=179)** My own organization has an internal architecture review board, where colleagues meet to review proposals for tech decisions that will affect the wider architecture.
>
> **[3:08](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=188)** These written proposals cover everything from API integrations and data architecture patterns to adding new sub-domains and discussing which systems specific business logic should live in.
>
> **[3:19](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=199)** Attendees hear each proposal, vote on it, and delegate next steps to the right colleagues.
>
> **[3:24](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=204)** The cadence and agendas for each meeting depend on your own organization's goals, nuance, and structure.
>
> **[3:30](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/select-stewards-to-serve-as-product-owners?u=76281980&t=210)** The key takeaway is to make shared space for subject matter experts to become data stewards who have the support to lead their own domains.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** csv (1), api (1)
> **Code Keywords:** function (1)
> **Speakers:** - data (1)

#### Write your own federated standards
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=0)** - What does data quality look like across all of the domains you've outlined?
>
> **[0:04](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=4)** As your final lesson, let's walk through the steps of defining federated standards for all domains and then customizing them for the domain at hand.
>
> **[0:13](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=13)** Data without context is one of the reasons quality data degrades over time.
>
> **[0:18](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=18)** Data mesh prevents this by keeping data organized under domains and subdomains led by subject matter experts, AKA the data stewards.
>
> **[0:27](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=27)** Context means that each data domain might be different.
>
> **[0:30](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=30)** They'll have different numbers of subdomains, success and fail conditions, components, and more from one schema to another.
>
> **[0:38](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=38)** As your data stewards start managing their domains in the data mesh, they'll likely want a blueprint from you showing which steps they should take.
>
> **[0:46](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=46)** Here's how you can model the steps to write your own standards for a data domain.
>
> **[0:51](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=51)** Let's start with your baseline work, defining data domains and subdomains for finance data.
>
> **[0:56](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=56)** Once you've named the finance subdomains, your next step is to write these details down.
>
> **[1:02](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=62)** Descriptions of each subdomain, which include the types of data within, components that use the data per subdomain, like payment processing systems or mobile apps.
>
> **[1:12](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=72)** Standards for freshness, which is when each subdomains data should be updated, or a timestamp for when it was last updated.
>
> **[1:20](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=80)** Schemas for each subdomain, which show how the data's organized.
>
> **[1:24](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=84)** Business logic, which explains how the data per subdomain communicates with interfaces.
>
> **[1:29](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=89)** Success conditions, which show the boundaries successful data should fall within.
>
> **[1:34](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=94)** And failure conditions, which explain when to reject new data in a subdomain for falling below quality standards.
>
> **[1:41](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=101)** This can be a lot, especially when you're starting out a need to scale this work across every domain.
>
> **[1:47](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=107)** It's also why data mesh isn't really just about the architecture.
>
> **[1:51](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=111)** Tech is the means used to execute this work, but at its heart, data mesh is a cultural transformation.
>
> **[1:57](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=117)** Your organizing leadership, strategy, operations, and business success around your data.
>
> **[2:03](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=123)** You're also giving everyone shared investment in its quality.
>
> **[2:06](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=126)** So as you write the blueprint for data mesh domains, follow these principles and ensure that your stewards do the same.
>
> **[2:14](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=134)** Start by defining your most high priority data domains and sub-domains.
>
> **[2:18](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=138)** While all domains are needed, you first need to assess which ones are most crucial for your business to function.
>
> **[2:25](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=145)** Keep your data mesh architecture small with intent to scale it out.
>
> **[2:29](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=149)** You want to apply your data mesh requirements in a meaningful, manageable way before you add new domains with their own nuances.
>
> **[2:38](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=158)** Consider the scope of what data products are in your organization.
>
> **[2:42](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=162)** A data product can be anything which both helps and hurts when folks need clarity.
>
> **[2:46](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=166)** So do you want data products to just be machine learning algorithms?
>
> **[2:50](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=170)** Should you include dashboards that your C-suite wants to see each quarter?
>
> **[2:54](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=174)** The choice is yours, but just like you've set success and failure conditions for data in your domains, you should also set boundaries to define what data products are.
>
> **[3:04](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=184)** When you select stewards and start meeting at data governance councils, much of your early work might focus on which tools to buy that can support data mesh.
>
> **[3:13](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=193)** While you do need the right combination of tech tools, data mesh is not one single solution and no vendor will solve all of your data problems.
>
> **[3:21](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=201)** Instead of searching for a magic bullet, work with your stewards to define which data products domains should offer and how they want to share these products with users of the mesh.
>
> **[3:31](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/write-your-own-federated-standards?u=76281980&t=211)** These conversations will help you all confirm what you need from whichever tool you choose to buy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** aka (1)
> **Analogies:** just like (1)
> **Speakers:** - what (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Investment in your future
> [LinkedIn Learning](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980&t=0)** - Thanks for taking this course with me.
>
> **[0:02](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980&t=2)** I hope you learned why data mesh is more than another fad and how its value set it apart from other architecture patterns.
>
> **[0:09](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980&t=9)** There's more pressure than ever on organizations to start building AI, sometimes at the cost of human jobs.
>
> **[0:15](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980&t=15)** But at its core, AI is data, and most data produced today is useless.
>
> **[0:20](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980&t=20)** Without the right teams, standards, structure, and tools, AI will keep producing poor results except for the few orgs with resources to do it right.
>
> **[0:29](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980&t=29)** You can compete using data mesh by structuring your business around your data, not the other way around.
>
> **[0:35](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980&t=35)** If you want to learn more on governance and quality, check out my other LinkedIn Learning courses, [[Designing Data Governance]] and Automating Data Quality in Dev Environments.
>
> **[0:44](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980&t=44)** If you need a more comprehensive guide to data mesh, I recommend the book by the founder herself, Zhamak Dehghani's "Data Mesh: Delivering Data-Driven Value at Scale."
>
> **[0:54](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980&t=54)** Data mesh is an investment in your long-term future.
>
> **[0:57](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980&t=57)** It's a lot of work upfront and I know how overwhelming it can feel to get started, but if your long-term goals are to make high-quality data that's easy to discover, I'm confident that this is the best path forward.
>
> **[1:09](https://www.linkedin.com/learning/data-mesh-architecture-core-concepts/investment-in-your-future?u=76281980&t=69)** Good luck getting started and keep in touch to let me know how it's going for you.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is an  (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Lauren Maffeo]]

## Resources

- Exercise files available

## Skills Covered

- Data Architecture
- Mesh

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Storage]]
← [[Complete Guide to Data Lakes and Lakehouses]] | **6 of 6**

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Storage]]

---

[↑ Back to top](#)