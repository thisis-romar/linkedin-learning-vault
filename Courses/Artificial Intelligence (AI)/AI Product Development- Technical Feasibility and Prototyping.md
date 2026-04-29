---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ai-product-development-technical-feasibility-and-prototyping
url: "https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping"
duration_minutes: 126
duration: 2h 6m
level: Intermediate
updated: 4/29/2025
learners: 6387
skills:
  - AI Software Development
  - Prototyping
  - Artificial Intelligence (AI)
  - Product Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQE6q6oYZ-mdhQ/learning-public-crop_675_1200/B4EZYcb5jbHMAc-/0/1744233798227?e=2147483647&amp;v=beta&amp;t=N-gCi3lQBXKFOfl4wQvj79JHYlCWKzeT15XPN10orKA"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[Responsible AI Framework for Your Enterprise AI Product]]'
next_courses:
  - '[[AI Data Strategy- Data Procurement and Storage]]'
path_nav: '[{"path":"Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning","position":4,"total":6,"prev":"Responsible AI Framework for Your Enterprise AI Product","next":"AI Data Strategy- Data Procurement and Storage"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/software-development
  - skill/ai-software-development
  - skill/prototyping
  - skill/artificial-intelligence-ai
  - skill/product-development
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AI%20Product%20Development-%20Technical%20Feasibility%20and%20Prototyping.md)

![AI Product Development: Technical Feasibility and Prototyping](https://media.licdn.com/dms/image/v2/D4E0DAQE6q6oYZ-mdhQ/learning-public-crop_675_1200/B4EZYcb5jbHMAc-/0/1744233798227?e=2147483647&amp;v=beta&amp;t=N-gCi3lQBXKFOfl4wQvj79JHYlCWKzeT15XPN10orKA)

# AI Product Development: Technical Feasibility and Prototyping

> In this course, learn how to evaluate the technical feasibility of AI solutions by considering critical factors such as data availability, resources, ethical implications, technology constraints, and security concerns. Instructor Maria Parysz shows you how to select appropriate AI models and tools that align with specific project requirements, ensuring optimal performance and compatibility. The co

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping) | 2h 6m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - Introduction
- [**1. What Is "Feasible"?**](#1-what-is-feasible) (2 videos)
  - The goal: Feasibility and prototyping
  - Building options
- [**2. Tech Feasibility in Detail**](#2-tech-feasibility-in-detail) (16 videos)
  - "Must knows" for feasibility
  - Proof of concept, part 1
  - Proof of concept, part 2
  - Core AI architecture concepts, part 1
  - Core AI architecture concepts, part 2
  - How to do tech feasibility
  - Questions for different implementation options
  - Who can help you out? Storage and computing power
  - Architecture, latency, standalone vs. connected
  - Security, ethics, and compliance
  - Endpoints and data
  - Talent
  - Maintenance and retraining
  - Scaling and testing
  - Metrics and time and budget updates
  - Best practices of working with vendors
- [**3. Prototyping**](#3-prototyping) (10 videos)
  - Fundamentals of prototyping and prototyping timeline
  - Prototyping roles, personas and expected outcome
  - Minimum viable product (MVP)
  - Six strategies for building prototypes, part 1
  - Six strategies for building prototypes, part 2
  - Prototyping best practices
  - The process of gathering feedback from users
  - Best practices for gathering feedback from users
  - Drawing conclusions after the feedback
  - Demo
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/introduction?u=76281980&t=0)** - In today's corporate environment, 50% of AI projects end in failure.
>
> **[0:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/introduction?u=76281980&t=6)** It's not about the quality of the design, but rather when the product doesn't meet the business needs.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/introduction?u=76281980&t=13)** AI managers will be in a very high demand to manage the process of visibility and prototyping.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/introduction?u=76281980&t=21)** In this course, you'll learn how to add super power to your product and make it feasible, and with prototyping, make sure your users will love it.
>
> **[0:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/introduction?u=76281980&t=33)** My name is Maria Parysz and I have worked in AI for more than nine years.
>
> **[0:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/introduction?u=76281980&t=40)** I want to share with you my hands-on experience as an AI product builder, advisor, and United Nations Speaker.
>
> **[0:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/introduction?u=76281980&t=47)** If you're ready, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** super (1), let (1)
> **Speakers:** - in (1)


### 1. What Is "Feasible"?

> [↑ Back to Table of Contents](#table-of-contents)

#### The goal: Feasibility and prototyping
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=0)** - Imagine you have a brilliant idea that feels like it's worth a billion dollars.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=7)** You get so excited by how much it will help people and how it will make you rich and famous.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=13)** But when you look closer, the idea is more detailing before you decide to invest all your savings in the development.
>
> **[0:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=23)** Feasibility is the process of evaluating whether a product idea is viable before investing significant time and resources into its development.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=35)** Actually, feasibility is a very broad term that answers the question is it worth our attention, money, and effort?
>
> **[0:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=44)** Many companies select their AI ideas for the wrong reasons.
>
> **[0:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=50)** For example, staying trendy.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=52)** Some companies just like riding the AI hype wave, and if everyone's got their own chatbot, they want one too.
>
> **[1:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=62)** The second, staying competitive.
>
> **[1:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=65)** Sometimes companies decide on an investment simply because the competition is doing it and they want to keep up not being sure if it will benefit them at all.
>
> **[1:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=76)** The third one is the other approach.
>
> **[1:20](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=80)** They trust Their instincts over data, I just know is the right product.
>
> **[1:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=87)** And lastly, sometimes companies implement AI because headquarters says so.
>
> **[1:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=93)** No deep dive into local needs, just blindly following headquarters case study.
>
> **[1:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=100)** We don't want that.
>
> **[1:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=103)** So we'll want to use the feasibility analysis, a process that will help us analyze if we actually want to invest in AI idea.
>
> **[1:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=115)** Feasibility is a very broad term that answers questions like, is there demand on the market?
>
> **[2:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=122)** Who are the target customers?
>
> **[2:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=124)** What is the competition like?
>
> **[2:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=126)** This market feasibility.
>
> **[2:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=129)** Can the product be built with current technology and resources?
>
> **[2:14](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=134)** That's technical feasibility.
>
> **[2:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=136)** Will it be profitable?
>
> **[2:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=138)** What are the costs and expected revenue?
>
> **[2:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=142)** That's financial feasibility.
>
> **[2:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=145)** Does the company have the right skills, infrastructure and supply chain to deliver the product?
>
> **[2:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=150)** That's operational feasibility.
>
> **[2:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=153)** And are there any legal, ethical or compliance barriers?
>
> **[2:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=159)** That's compliance and legal feasibility.
>
> **[2:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=162)** As you can see, there are different types of feasibility and there can be many more like environmental friendliness, cultural fit, sales capabilities and more.
>
> **[2:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=175)** In this course, we'll focus on technical feasibility.
>
> **[3:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=180)** We'll be asking questions that I use with my clients before they finally decide the project is worth the investment.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=189)** Simply speaking, our goal is to save money, time, and resources for the best AI initiatives.
>
> **[3:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=197)** That makes sense and that's the key.
>
> **[3:20](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=200)** What constitutes sense and how much effort should we be investing to check it out?
>
> **[3:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=208)** A feasibility study itself comes with a cost, so it's important to keep it efficient.
>
> **[3:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=215)** The goal is to gather enough insights to make an informed decision without overspending time and resources before the project even starts.
>
> **[3:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=226)** Because it is you who will decide on how long to spend on analysis.
>
> **[3:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=231)** You want to keep it concise, focused, and time limited.
>
> **[3:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=236)** In the next video, I'll guide you step by step on how the visibility can be done and the must have steps.
>
> **[4:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=244)** So if you are ready to learn more about visibility in practice, let's go.

> [!info]- Semantic Content
>
> **Analogies:** imagine (1), for example (1), just like (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - imagine (1)

#### Building options
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=0)** - [Instructor] Some people get confused about when feasibility should happen.
>
> **[0:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=5)** There are actually three points in time where you evaluate the AI idea and decide if it's worth further attention.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=13)** Let's briefly look at AI project lifecycle to show you these three moments.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=21)** The first moment is ideation.
>
> **[0:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=23)** This is where we gather and brainstorm AI ideas that are based on customer pain points and operational inefficiencies.
>
> **[0:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=31)** The goal is to generate as many options as possible without worrying about feasibility just yet.
>
> **[0:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=38)** First and foremost, we remove overlaps and duplicates, then non-compliant ideas.
>
> **[0:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=45)** Then we engage data scientists and business experts for a very limited time to do the second evaluation, early feasibility, potential impact, and alignment with strategic goals.
>
> **[1:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=60)** At this stage, we don't need full feasibility studies, but we do need enough clarity to make meaningful comparisons between projects.
>
> **[1:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=71)** If you want to know more about these steps, check out my course on [[AI Product Ideation- Principles and Practical Applications]].
>
> **[1:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=81)** Once we've narrowed the list down significantly, we move to the third and most critical moment, feasibility analysis and prototyping.
>
> **[1:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=92)** At this stage, we've already decided that the project makes sense from a business perspective.
>
> **[1:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=98)** Now we need to see if it will actually work from both a technological and user standpoint.
>
> **[1:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=106)** We analyze whether the required AI models exist, whether the data is available and usable, and whether the project is technically achievable with current resources.
>
> **[2:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=121)** A small-scale prototype, or proof of concept helps validate assumptions and highlights potential roadblocks early.
>
> **[2:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=131)** Let me be clear.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=132)** At this point, we will not be checking the business case.
>
> **[2:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=138)** I assume that this has been done and until the outcome of the tech feasibility and prototyping says that it needs redesigning, we do not need to come back to the business calculations.
>
> **[2:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=151)** Feasibility and prototyping is for deciding whether the project should proceed to full-scale development and fine-tune it accordingly before committing further investment.
>
> **[2:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=167)** Sometimes when companies are in a hurry, they skip the traditional phase approach and go straight into gorilla development.
>
> **[2:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=176)** In this approach, prototyping isn't a separate step.
>
> **[3:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=180)** It becomes part of the development itself.
>
> **[3:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=184)** Instead of validating the concept before starting, the company moves forward knowing that they will implement the AI project no matter what.
>
> **[3:14](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=194)** However, they fine-tune the concept as they go, usually through a series of prototypes, making adjustments in real-time based on feedback, technical challenges, and evolving business needs.
>
> **[3:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=208)** This can be a highly effective method, especially in fast moving industries where speed is critical.
>
> **[3:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=215)** However, it requires an experienced team skilled in agile AI development.
>
> **[3:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=222)** Without strong technical leadership, gorilla development can easily turn into chaos, so don't assume it's the best option simply because it's the fastest one.
>
> **[3:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=233)** Okay, so what happens after feasibility?
>
> **[3:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=237)** The product concept gets refined and it becomes a full blown AI project.
>
> **[4:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=244)** We all want that, so let's meet in the next video to learn some more.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case. (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 2. Tech Feasibility in Detail

> [↑ Back to Table of Contents](#table-of-contents)

#### "Must knows" for feasibility
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=0)** - Before we move to analyzing feasibility, I want you to get familiar with several AI technology-related elements you need to be aware of.
>
> **[0:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=11)** First, options for AI implementation.
>
> **[0:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=16)** Second, the idea behind proof of concept.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=21)** And third, the core AI architecture concepts.
>
> **[0:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=26)** I'll explain everything in simple terms, so even without a technology background, you'll be able to understand it.
>
> **[0:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=34)** These concepts will help you benefit more from the next chapter, so I strongly encourage you to go through them and dig deeper.
>
> **[0:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=43)** If any of the presented concepts are new to you, I cover them in my other LinkedIn Learning course, The new AI Tech Stack: AI Literacy for Tech Leaders, so feel free to check it out.
>
> **[0:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=57)** Now let's start with options for AI implementation.
>
> **[1:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=63)** You see each option brings different challenges to the table, so, naturally, the visibility for each one will be conducted in a slightly different way.
>
> **[1:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=73)** For example, with the buy option, you want to check licensing.
>
> **[1:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=78)** While for the build, you will be assessing the computational power and storage.
>
> **[1:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=86)** The option for implementation is usually selected during the first or second evaluation, but it can change at the feasibility and prototyping phase as well.
>
> **[1:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=98)** Let's start with the first option, buying prebuilt AI solutions.
>
> **[1:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=105)** If you want a fast and simple way to integrate AI, buying an off the shelf solution is the easiest option.
>
> **[1:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=113)** These are AI tools designed for specific tasks like customer service, marketing automation, or data analytics.
>
> **[2:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=123)** Examples include ChatGPT, Claude, or Gemini for answering customer questions, ElevenLabs for voice automation, or Tableau for data visualization.
>
> **[2:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=136)** These solutions can be SaaS, PaaS, or even on-premise, depending on your needs.
>
> **[2:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=145)** The biggest advantage is that it usually works right away.
>
> **[2:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=148)** However, they can be less flexible and may not fit your exact needs.
>
> **[2:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=155)** For companies with unique requirements, building an AI custom model is a better option.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=163)** This means developing AI from scratch, either with an in-house team or by working with an external AI firm.
>
> **[2:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=172)** Custom AI is best when there is no existing solution that meets your needs, or when current AI models aren't specific enough to add real value.
>
> **[3:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=184)** However, this approach requires time, money, and high quality data.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=189)** Some companies start with prebuilt solutions first, then move to custom AI once they understand what they really need.
>
> **[3:20](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=200)** If you want something customized but don't want to start from scratch, fine tuning might be the best approach.
>
> **[3:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=208)** For example, you could fine tune a large language model to respond to customer emails in your brand's voice or add company-specific data like product catalogs or pricing.
>
> **[3:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=222)** Fine tuning is a cost-effective way to get a more personalized AI without the time and expense of building an entire model.
>
> **[3:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=233)** Sometimes the best approach isn't one AI tool, but a combination of several working together.
>
> **[4:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=240)** This is where AI agents come in, automated systems that connect different AI models to perform complex tasks automatically.
>
> **[4:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=252)** For example, a customer service AI agent might integrate a chatbot, a CRM system, and an analytics tool to provide a seamless support experience.
>
> **[4:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=264)** And the last option is to use AI services available on the cloud.
>
> **[4:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=270)** Platforms like AWS, Google Cloud, and Microsoft Azure offer ready-made AI tools for tasks like speech recognition, image processing, predictive analytics, and more.
>
> **[4:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=285)** They also allow you to easily fine tune models.
>
> **[4:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=289)** You don't need to build or maintain AI infrastructure yourself.
>
> **[4:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=294)** It's all managed in the cloud.
>
> **[4:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=296)** However, it's rather a costly option and data security should be considered.
>
> **[5:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=303)** Now that you know the implementation options, what's next?
>
> **[5:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=308)** A super useful proof of concept for AI.
>
> **[5:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=312)** I can't wait to share it with you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), super (1)
> **Analogies:** for example (3)
> **Env Vars:** crm (1), aws (1)
> **Definitions:** is a  (2)
> **CLI Commands:** aws (1)
> **Cross-References:** next chapter (1)
> **Warnings:** be aware (1)
> **Speakers:** - before (1)

#### Proof of concept, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=0)** - [Instructor] Imagine a company wants to build an AI powered prediction mechanism to reduce long tails and predict which product should they sell in their e-commerce.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=13)** The leadership team is excited, the budget is approved, and developers start working on a complex AI model.
>
> **[0:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=22)** Months go by, the team struggles with data quality issues because data is scars and poor quality, the model isn't performing as expected and integrating it into existing systems turns out to be much harder than they thought.
>
> **[0:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=41)** Eventually, after spending thousands of hours and resources, they realize the AI system doesn't actually solve the problem and they will never use it.
>
> **[0:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=54)** This happens all the time in AI development.
>
> **[0:58](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=58)** The issue isn't a lack of ambition, it's a lack of early validation.
>
> **[1:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=64)** In AI projects, before we look into data and test the first algorithms, it is very hard to say if the predictions will be at the satisfactory level.
>
> **[1:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=75)** This is when proof of concept enters the scene.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=79)** A POC is a small scene, experimental version of an AI solution that helps us to test whether an idea is technically and practically feasible.
>
> **[1:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=93)** I use it when I'm not sure how good the data is.
>
> **[1:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=98)** The project is relatively new and there is not many resources on the effectiveness of AI for this problem.
>
> **[1:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=107)** When client has high expectations from AI and we are not sure if the expected accuracy is possible in the given time or when a hypothesis is completely new, and we don't know if AI can solve the problem at all.
>
> **[2:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=125)** Remember that POC in the AI world is not a document, but a real project where you clean a part of your data and build and test models to check if the data will give you nice returns or not.
>
> **[2:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=141)** A couple of times I recommended not to continue a project after a POC and the company saves a lot of money rather than pushing through with the full project.
>
> **[2:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=152)** Okay, so how does this work?
>
> **[2:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=155)** Start with defining the hypothesis and the North Star.
>
> **[2:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=159)** Set a specific measurable goal to keep the POC focused.
>
> **[2:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=165)** For example, instead of saying improve film predictions with AI, ask can an AI predict which movie will become a blockbuster before the movie release with over 80% of accuracy?
>
> **[3:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=184)** Then you need to agree on the timing.
>
> **[3:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=187)** So how long will the POC last?
>
> **[3:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=190)** I usually suggest three to five months for the POC and for large projects around six months.
>
> **[3:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=198)** Remember, at this point we don't want a full project, but the project verification.
>
> **[3:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=205)** POC is an important topic, so we have another video to explore it in depth.
>
> **[3:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=210)** See you in the next video then.

> [!info]- Semantic Content
>
> **Env Vars:** poc (7)
> **Code Keywords:** new, (1), continue (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** imagine (1), for example (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Proof of concept, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=0)** - [Instructor] POC is like a standard project, but significantly smaller.
>
> **[0:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=4)** You need to do business analysis and data preparation.
>
> **[0:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=9)** Obviously, first you need to collect the data, clean it, and move on with testing some algorithms.
>
> **[0:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=16)** For the sake of POC, you can use just part of the data and then estimate what the accuracy could be if you use the complete data set.
>
> **[0:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=27)** I prefer to use the whole data set from the beginning.
>
> **[0:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=31)** It saves time for the future once the project gets accepted for full development.
>
> **[0:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=37)** Obviously, assuming I have available computational power, if not, I use small data sets and simple infrastructure.
>
> **[0:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=46)** Then select the best method based on the problem type or use a pre-trained model if you want to fine tune it, and trained algorithm on the data you prepared.
>
> **[1:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=60)** You don't need to train the full model.
>
> **[1:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=64)** The goal is to verify the hypothesis and estimate how the model will learn if given more time and potentially more data.
>
> **[1:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=73)** Just to remind you, and POC, we are usually not building any front end nor back end.
>
> **[1:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=81)** We are simply testing the AI capabilities, meaning AI models.
>
> **[1:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=86)** For the front end testing, there are simpler ways to check if it is user-friendly, then to build it.
>
> **[1:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=94)** The last two steps are preparation of findings and suggestions and presenting it to the decision makers.
>
> **[1:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=102)** For this, you'll need to have detailed documentation proving what you manage to achieve.
>
> **[1:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=109)** I always have a brainstorming session with my team to decide on the options we can propose to the client and which we find the most sensible given the client's situation.
>
> **[2:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=123)** The main suggestions should be to move forward with certain requirements and adjustments or not to go with the project at all.
>
> **[2:14](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=134)** Presenting these conclusions to decision makers takes time, so a one hour meeting is a bare minimum.
>
> **[2:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=142)** It usually takes up to two hours as the decision makers want to know how we came up with the conclusions and the results, both positive and negative.
>
> **[2:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=153)** I know it might sound awful to propose a no-go decision, but honestly, sometimes it is the best option.
>
> **[2:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=160)** Even if the POC fails, the insights gain can guide future improvements.
>
> **[2:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=167)** One time my client heard the suggestion, supported by information that the data is too small and they decided to push the project forward until they gathered the data.
>
> **[3:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=180)** Nine months later, we finally launched the successful project.
>
> **[3:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=184)** Okay, now let's move on to the next video where I'll explain to you important and highly practical AI concepts.

> [!info]- Semantic Content
>
> **Env Vars:** poc (4)
> **Code Keywords:** this, (1), let (1)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Core AI architecture concepts, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=0)** - [Instructor] Let's explore some of the most exciting parts of artificial intelligence that you will use as a foundation for our deeper tech dives later.
>
> **[0:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=11)** Think of this as both a great introduction and a cool refresher if you are already familiar with these ideas.
>
> **[0:20](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=20)** First, you need to know that in most cases, you need hardware to use ai except when you plan to go the buy option in the form of SaaS, software as a service where the solution is on someone else's server.
>
> **[0:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=39)** A tech stack is the mix of hardware and software that runs your AI project.
>
> **[0:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=47)** It includes the processing power, mostly from GPUs and the storage that holds all your data.
>
> **[0:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=55)** A strong tech stock means your AI can work fast, process more data, do more computations, hence deliver more advanced AI in less time.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=68)** The stronger the tech stock you have, the better, but it also means higher cost.
>
> **[1:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=75)** Computing power is how fast is your computer to run computations.
>
> **[1:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=81)** The faster GPU and the more GPUs you have, your model building will be faster and easier.
>
> **[1:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=89)** Storage on the other hand, refers to the capacity to hold the vast amounts of data that AI projects require.
>
> **[1:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=99)** This includes not only the raw data like images, text or sensor readings, but also the models, training checkpoints, user feedback and logs generated during the process.
>
> **[1:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=115)** And the second point, you need to understand the difference between building an AI model and building an AI system.
>
> **[2:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=125)** Building a model focuses on creating the smart algorithms that make predictions or decisions, but on its own, it's not yet a working system.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=137)** You can either connect the model with an existing system through API in your architecture, or you can build it from scratch.
>
> **[2:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=146)** Building a system from scratch means creating the front end, which is what people see and interact with, and the backend that does the heavy lifting with data and processing.
>
> **[2:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=159)** Simple example, you can input AI based sales predictions into an ERP, or you can build a separate system for that.
>
> **[2:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=170)** Moving on to the third point.
>
> **[2:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=172)** I mentioned API a moment ago.
>
> **[2:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=176)** APIs are like bridges that let different software systems talk to each other.
>
> **[3:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=182)** They allow your AI to share information and functions with other applications easily.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=189)** You'll need them to connect AI model with any system and also to bind several AI into a process.
>
> **[3:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=198)** The fourth element is MLOps.
>
> **[3:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=202)** MLOps is all about putting machine learning into practice after the deployment.
>
> **[3:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=208)** Regular maintenance and retraining is a must have as new data comes in.
>
> **[3:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=214)** Remember, retraining is not an option, it's a must have.
>
> **[3:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=218)** And it should be taken into consideration while analyzing visibility.
>
> **[3:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=224)** Then the fifth point, who is working with AI models?
>
> **[3:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=229)** At a minimum, you'll need data scientists to create and train the models or to fine tune them.
>
> **[3:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=235)** Also, engineers integrate these models into larger systems and developers to build apps.
>
> **[4:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=243)** Data engineers are also important because they prepare and manage the data.
>
> **[4:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=248)** Additional common roles are data analysts, machine learning engineers, and also business roles like AI project or product management.
>
> **[4:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=258)** And if possible, also hire AI ethicists and AI UX designers.
>
> **[4:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=264)** This is not the end of the list guys, so join me in the next video for five additional important concepts.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), gpu (1), erp (1)
> **Code Keywords:** let (2), require (1)
> **Definitions:** refers to (1), is a  (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Core AI architecture concepts, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=1)** We'll continue with our list of AI concepts that are super important for assessing feasibility.
>
> **[0:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=9)** We left off on the fifth.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=13)** The sixth one is the device you design for, like a smartphone, computer, smartwatch, IoT gadget, or a robot.
>
> **[0:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=24)** It greatly influences your development choices.
>
> **[0:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=28)** Each device has its own strengths and limits in terms of power, memory, and user interface, and each one has a separate OS, meaning, operational system you would be writing the code for.
>
> **[0:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=45)** The more endpoints, the more costly and complicated the project will be.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=52)** Then the seventh point, data sources.
>
> **[0:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=56)** And they can come from different places: synthetic, external, and internal.
>
> **[1:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=63)** Internal data is gathered from within your organization and are considered the best and cheapest source.
>
> **[1:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=72)** Synthetic data is generated by computers when you don't have enough real data, which can be really handy but requires resources and time.
>
> **[1:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=82)** And external data that comes from outside sources, like public datasets, adding extra context to your models, but you need to clean and thoroughly check them.
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=95)** You can either scrape them, download from an open data source, or buy them.
>
> **[1:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=102)** Scraping brings some risks and challenges, especially around data privacy and ownership and buying, you know, costs.
>
> **[1:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=113)** Then the eighth element.
>
> **[1:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=115)** You need to know what RAG is.
>
> **[1:58](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=118)** RAG, or retrieval-augmented generation, is the most popular fine-tuning strategy, a method that helps AI models fetch extra information before generating a response.
>
> **[2:14](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=134)** This makes the answers more accurate and tailored to what you need, with less risk of hallucinations.
>
> **[2:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=142)** However, sometimes you might want to do standard fine-tuning that takes longer and is less flexible, but it's more coherent, especially if you want to sell the product to someone.
>
> **[2:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=155)** Then the ninth element, AI security, is all about protecting your data, models, and systems from unauthorized access and attacks.
>
> **[2:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=168)** It involves measures like encryption, secure coding practices, and continuous monitoring to keep everything safe.
>
> **[2:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=176)** And obviously the more prone to attacks the project is, the more costly and potentially less feasible it will be.
>
> **[3:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=186)** And then the tenth, last element, the metrics.
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=191)** Feasibility largely depends on the AI metrics you set.
>
> **[3:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=196)** Because higher expectations for accuracy means you'll need more resources.
>
> **[3:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=201)** This includes investing extra time, computing power, and the larger amount of quality data to train your model effectively.
>
> **[3:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=209)** In simple terms, the more ambitious your goals for model performance, the more you'll need to put into making it a reality.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), super (1), for, (1), interface (1), for. (1)
> **Env Vars:** rag (2)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (1)

#### How to do tech feasibility
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=0)** - [Speaker] How to do tech feasibility.
>
> **[0:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=3)** I share a little secret with you.
>
> **[0:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=6)** It's actually very simple.
>
> **[0:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=8)** I make a straightforward process for you, so even people with no technical background can follow it.
>
> **[0:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=16)** You start with your project idea.
>
> **[0:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=18)** Describe it first in an initial template and then in the detailed one, and then you just work through the list of questions I have prepared.
>
> **[0:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=30)** For each question, you should decide if the project is feasible from the particular point of view.
>
> **[0:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=37)** If it's not, think about what would need to happen to make it feasible.
>
> **[0:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=43)** Maybe that means buying additional computing power or using cloud resources.
>
> **[0:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=48)** Once you've answered all the questions and added the appropriate comments, just sum up your responses along with any potential activities and costs required to make the project work.
>
> **[1:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=63)** Then you present your findings to the decision-makers.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=68)** We prepared for you an additional file, a checklist with all the questions we just mentioned.
>
> **[1:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=77)** It is done in a form of a table where you go point by point and you feel such elements are, the selected option, whether it's feasible or not feasible, what is required to get it feasible, and your additional comment.
>
> **[1:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=96)** Okay, so there is a template that you can use for checking out your AI ideas and also a filled-out template for you to see how I would do it.
>
> **[1:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=110)** I hope you'll find it useful.
>
> **[1:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=112)** Make sure to check your exercise file.
>
> **[1:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=117)** Before we move on to the list of questions.
>
> **[2:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=120)** Let's first define what it means for an element to be feasible.
>
> **[2:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=127)** Take computing power, for example.
>
> **[2:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=129)** It's not about having the resource at hand, but also ensuring that using it is realistic or achievable.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=137)** If training a model would use up all your GPUs for the next six months, leaving no room for other initiatives, it might be technically possible but not really practical.
>
> **[2:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=150)** In that situation, you'd mark it as potentially feasible and add a note that if the company is ready to invest in additional GPUs, then it becomes truly feasible.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=163)** The same with achievable. Let me give you an example.
>
> **[2:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=167)** Let's say the expectation is to have a model of 99% of accuracy.
>
> **[2:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=171)** That's pretty high, but achievable.
>
> **[2:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=174)** However, in a significantly longer time and with much more resources engaged, such high-expectations can make the project possible, but hardly achievable, hence less feasible.
>
> **[3:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=188)** Okay, so let's have a look at the list of main questions that you should be asking during feasibility analysis.
>
> **[3:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=198)** First, do we have enough computing power?
>
> **[3:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=201)** Think enough GPUs.
>
> **[3:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=203)** Second, do we have sufficient storage?
>
> **[3:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=206)** Think space and systems to store, manage, and quickly assess data.
>
> **[3:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=212)** Third, do we integrate with existing systems or build standalone?
>
> **[3:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=217)** The fourth one, what is the architecture and is our network capacity enough?
>
> **[3:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=223)** The fifth one, are we meeting all security and regulatory standards?
>
> **[3:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=229)** Sixth one, what are the compliance and ethical risks?
>
> **[3:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=234)** Is the solution explainable?
>
> **[3:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=236)** Seventh, what devices are we designing for?
>
> **[4:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=240)** Eighth, is the data available and of good quality?
>
> **[4:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=245)** The ninth is our in-house talent up to the task?
>
> **[4:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=250)** The 10th one, what is our plan for maintenance and retraining?
>
> **[4:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=255)** 11th, how do we plan to scale?
>
> **[4:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=258)** 12, what kind of testing and validation will be required?
>
> **[4:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=263)** 13th, how likely are we going to achieve the metrics?
>
> **[4:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=267)** And additionally, check once again, the budget and timeline.
>
> **[4:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=271)** If after your analysis, it needs some tweaks and updates, so you ask two additional questions in the end. The 14th, what will the overall costs look like?
>
> **[4:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=283)** And the 15th is the project timeline realistic?
>
> **[4:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=288)** Once we have questions, we'll dive deeper into them in the next videos.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (1)
> **Code Keywords:** let (4)
> **Exercise Files:** template (3), exercise file (1)
> **Prerequisites:** required to (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)

#### Questions for different implementation options
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=0)** - [Instructor] In one of the previous videos, you learned about five different options for AI implementation.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=7)** Remember, buy, build, fine tune, connect into agents and use cloud.
>
> **[0:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=15)** Great.
>
> **[0:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=17)** So you need to know how you should adopt the list of feasibility questions for each of these options.
>
> **[0:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=23)** So it reflects the architecture of this particular solution.
>
> **[0:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=28)** Let me explain with examples.
>
> **[0:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=31)** With buy, we would be focusing mainly on the installation, security, data, maintenance and retraining because all the other points are being taken care of by the vendor.
>
> **[0:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=46)** However, we would be adding additional questions like, what is the stage of product development?
>
> **[0:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=53)** Is it alpha, beta?
>
> **[0:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=55)** Is it fully operational?
>
> **[0:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=56)** How long has it been on the market?
>
> **[0:59](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=59)** Remember that for the buy, we need to check all the points from the list above, but they would be phrased somehow differently.
>
> **[1:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=67)** For example, what data was used for training the system?
>
> **[1:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=71)** Is the system secure?
>
> **[1:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=73)** What level of latency is the product promising?
>
> **[1:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=77)** How secure the data is that will be flowing through the sauce?
>
> **[1:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=82)** It means that we are still interested in all the feasibility points, but instead of checking it on our end, you need to check it with the supplier.
>
> **[1:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=92)** The supplier should be taking care of everything except for the integration.
>
> **[1:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=97)** There will be a separate video on the best practices of working with suppliers, and external product providers.
>
> **[1:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=105)** With built, you simply go through the list above.
>
> **[1:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=110)** With fine tune.
>
> **[1:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=111)** You install the external system in your environment, and it still requires your own data, installation experts, testing, storage, processing power and more.
>
> **[2:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=126)** The most typical application of fine tune is to buy the AI system, and make it safe on local premises.
>
> **[2:14](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=134)** With Connect into agents, you should focus on connections, latency, but also on the security of separate elements of the network, so-called the Internet of Agents.
>
> **[2:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=149)** As with all the networks, it's as strong as its weakest link, so you need to focus on that.
>
> **[2:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=158)** And lastly, with cloud, you simply must add these questions.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=163)** Where is our data stored?
>
> **[2:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=166)** How safe is the cloud?
>
> **[2:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=168)** What is promised in the SLA?
>
> **[2:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=171)** What applications are available on the cloud?
>
> **[2:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=175)** Will it allow us to easily scale, add new components, retrain, test and debug and monitor?
>
> **[3:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=185)** Okay, guys.
>
> **[3:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=186)** Well done.
>
> **[3:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=188)** We are finally ready to dig into the feasibility questions from our list.
>
> **[3:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=193)** We'll do it one by one starting in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** sla (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Who can help you out? Storage and computing power
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=0)** - [Instructor] Before we move on, I'd like to clarify that feasibility analysis is a team exercise and should include several experts.
>
> **[0:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=11)** You must engage a data scientist who understands the model; a developer who gets architecture and connections; a data person, for example a data engineer, who knows the state of data in your organization.
>
> **[0:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=27)** And quick checks with the infrastructure managers, resource planning manager, and someone from security, regulations like AI Act, compliance, or risk.
>
> **[0:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=41)** Now, let's jump into feasibility questions.
>
> **[0:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=47)** The first question is: Do we have enough computing power?
>
> **[0:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=52)** In the context of AI projects, this usually means having powerful GPUs because they are optimized for the large-scale parallel computations needed for tasks like training and fine-tuning LLMs.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=68)** You should estimate your project in the number of GPU hours or GPU days.
>
> **[1:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=75)** For example, if your project is 1,000 GPU hours, it means that either one GPU will be working for 1,000 hours or 10 GPUs per 100 hours nonstop.
>
> **[1:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=91)** The more GPUs you have at your disposal, the better.
>
> **[1:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=96)** More GPUs can handle larger models or multiple tasks simultaneously.
>
> **[1:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=103)** For example, having a cluster of GPUs can significantly speed up the process compared to using a simple GPU.
>
> **[1:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=112)** Not all GPUs were created equal.
>
> **[1:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=115)** There are faster and slower models, and the price tag usually follows the speed.
>
> **[2:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=122)** The market is practically monopolized by NVIDIA chips, which are considered the best, but there are many other suppliers.
>
> **[2:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=131)** Do you need to go for the best?
>
> **[2:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=133)** The fact is you usually work with what you have, except for the strategic projects for which the company can agree to buy special set of GPUs.
>
> **[2:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=142)** If you don't have GPUs, you either need to buy them, use the cloud, or select the buy option where computing power is not necessary.
>
> **[2:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=153)** Okay, to summarize.
>
> **[2:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=155)** First, you go to data scientist for the estimate and then to the hardware experts to check if this is possible.
>
> **[2:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=165)** Or in reverse, check what is available and calculate the time of the project.
>
> **[2:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=172)** The second question is about storage you need for the project.
>
> **[2:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=177)** For this, you need to contact hardware experts, the data scientists, and data engineers to give you data estimates.
>
> **[3:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=185)** So, you should get an estimate in gigabytes, terabytes, or for the largest projects, in petabytes.
>
> **[3:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=195)** And it should be estimated over time because the data will only get larger.
>
> **[3:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=201)** To do some savings, remember, you don't always need the high-quality pictures for training computer vision models.
>
> **[3:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=209)** Consider if lower quality is enough.
>
> **[3:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=213)** The good news is that storage can be shared within one company and that there are several options, including data warehouse, data lakes, and more.
>
> **[3:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=225)** Adding additional storage sounds easy, but it usually takes time, so we are often stuck with what the company has.
>
> **[3:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=234)** This is not the case when the company uses the cloud for data storage.
>
> **[3:58](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=238)** In that case, you can scale up in minutes, assuming you have budget, to cover additional demand.
>
> **[4:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=245)** Remember that the data expert should advise what combination of cert will work best for you.
>
> **[4:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=252)** Suppose you're working on a large language model that processes millions of sentences.
>
> **[4:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=258)** The raw text data might not take up a lot of space, but once you start creating multiple versions of your model and saving intermediate training results, the storage requirement increases dramatically.
>
> **[4:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=272)** In such cases, using a combination of local and cloud storage might be the best approach.

> [!info]- Semantic Content
>
> **Env Vars:** gpu (5), nvidia (1)
> **Code Keywords:** let (1), this, (1), case, (1)
> **Analogies:** for example (3)
> **UI Navigation:** select the (1), go to (1)
> **Definitions:** is a  (1), means that (1)
> **Prerequisites:** assuming you have (1)
> **Speakers:** - [instructor] (1)

#### Architecture, latency, standalone vs. connected
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=0)** - [Instructor] Let's continue with the next questions.
>
> **[0:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=3)** The third one is, do we integrate with existing systems or build standalone?
>
> **[0:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=9)** This is about deciding whether your AI solution should be built to work within an already existing system like your company's current software, or as a completely separate independent application.
>
> **[0:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=24)** Remember, not all models come with frontend nor backend, so either you need to build it or connect the model to an existing system.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=35)** If you decide to build standalone, you need to consider extra time, cost, additional talents, security, and all the elements that are usually connected to building an IT system.
>
> **[0:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=49)** Sometimes, this is easier than connecting the model to an existing system.
>
> **[0:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=55)** If you want to connect, make sure to analyze if the current systems use technology or data formats that your AI solution must work with.
>
> **[1:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=65)** Add extra time for testing the connection and potential changes in the interface of the existing system, and be sure to check the risk of AI slowing down the existing system.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=79)** The fourth question is what is the architecture, and is our network capacity enough?
>
> **[1:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=88)** Depending on the option of implementation you selected, this question will be either about connection with internal systems for the buy, using RAG or a set of RAGs for the fine tune, how the AI model works for the build, the agentic flow for the connecting to agents, and the relation between systems on cloud.
>
> **[1:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=114)** For this, I like drawing the simple structure and then analyzing connections, the inputs and outputs.
>
> **[2:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=124)** You also need to decide whether you want to use batch processing or a real time model.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=132)** Real-time AI applications are much more demanding and usually more expensive to build and maintain.
>
> **[2:20](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=140)** For example, for applications requiring fast responses, like real-time fraud detection or online recommendation systems, low latency is crucial.
>
> **[2:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=151)** For that, you must check if your network can handle peak loads.
>
> **[2:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=158)** Latency is the delay between when data is sent and when it is received.
>
> **[2:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=164)** For example, if you click a button in an online game, the time it takes for your action to register on the screen is the latency.
>
> **[2:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=173)** Lower latency means faster response times.
>
> **[2:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=176)** However, low latency always comes at a cost.
>
> **[3:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=181)** The architecture you choose, for example, RAG, will affect the latency.
>
> **[3:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=186)** RAG will slow it down in comparison to a fully fine-tuned model, which is why such concepts as CAG, cash augmented generation, are being applied.
>
> **[3:20](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=200)** At this point, you should also analyze your network capacity and if your current network infrastructure can support the data flow required by your AI application.
>
> **[3:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=212)** A common mistake is to assume the app will be used in large cities and in the offices with fiber.
>
> **[3:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=220)** Come on.
>
> **[3:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=221)** This is obviously completely unrealistic.
>
> **[3:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=226)** So first, you put together an architecture potentially in two, three options, and then analyze its feasibility and apply changes accordingly.
>
> **[4:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=240)** As one of the steps, I strongly recommend creating a flow chart showing how data moves through the system and where potential bottlenecks might occur.
>
> **[4:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=252)** I also add stress tests into the project's schedule and budget because at this time, they are just assumptions.
>
> **[4:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=262)** Now let's continue with security, ethics, and compliance.
>
> **[4:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=266)** See you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (2), interface (1), this, (1)
> **Env Vars:** rag (3), cag (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Best Practices:** make sure to (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)

#### Security, ethics, and compliance
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=0)** - [Instructor] Okay, now let's focus on the fifth question.
>
> **[0:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=5)** Are we meeting all security and regulatory standards?
>
> **[0:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=9)** The first point is about regulations.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=13)** Is your AI solution compliant with laws and guidelines that apply to AI solutions?
>
> **[0:20](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=20)** Think of it as making sure your project follows all the rules of the road for technology.
>
> **[0:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=28)** Depending on the region and country, the regulations can be different.
>
> **[0:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=33)** For example, if you want to operate on the European Union market, you need to comply with the AI Act, Digital Act, and GDPR for the data.
>
> **[0:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=45)** In the USA, check out HIPAA, and in Canada, the PIPEDA.
>
> **[0:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=51)** Regulations are evolving, so make sure to check their latest versions.
>
> **[0:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=57)** Additionally, you should check out the specific regulations for industries.
>
> **[1:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=63)** Usually healthcare is quite demanding because of the personal health data, but also utilities and banking, which are traditionally rather tightly regulated.
>
> **[1:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=76)** Let's say you are building an AI health diagnosis tool.
>
> **[1:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=81)** It must protect patient data through encryption, limit access to sensitive information, and follow healthcare regulations.
>
> **[1:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=90)** So it will affect the whole project from privacy-oriented architecture to additional time and budget for data preparation and anonymization.
>
> **[1:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=101)** The second element is security.
>
> **[1:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=105)** You need to verify with cybersecurity experts if your concept is vulnerable at any level.
>
> **[1:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=112)** The security team should also help you in adding certain steps to your schedule during the project that will help in securing the development, for example, security tests.
>
> **[2:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=124)** Obviously, while checking the feasibility of regulations and security, you can't say that it's not compliant or insecure because no one will accept it for implementation.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=137)** If at this point you come up with some vulnerabilities, make sure to change the project accordingly.
>
> **[2:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=144)** Time for the sixth question.
>
> **[2:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=147)** What are the compliance and ethical risks?
>
> **[2:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=152)** Is the solution explainable?
>
> **[2:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=154)** Okay, there are two points here.
>
> **[2:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=156)** Compliance and ethical risks and explainability.
>
> **[2:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=160)** They are connected, but not the same.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=163)** Analysis of ethical risks involves looking at potential issues that arise from how your AI system operates, makes decisions, and processes data.
>
> **[2:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=176)** For example, does your system unintentionally discriminate or does it operate in any way that isn't fair?
>
> **[3:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=186)** Ethical risks also include concerns about transparency and accountability.
>
> **[3:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=192)** Ethical analysis at this point should be done by an AI ethics expert, but if there is none, make sure you engaged as many people as possible.
>
> **[3:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=202)** A super important rule is you should never make ethical decisions alone because whether we want it to be or not, we are all biased.
>
> **[3:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=215)** It is a simple checklist that should be filled out.
>
> **[3:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=219)** I have added a list of resources that you can use in the exercise files.
>
> **[3:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=225)** Ultimately, what you're looking for are potential risks that should be summarized in the feasibility form.
>
> **[3:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=233)** Now, explainability.
>
> **[3:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=235)** Explainability means that the users will understand how the system works and will be able to use it properly.
>
> **[4:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=243)** It should also be transparent to decision makers.
>
> **[4:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=246)** If something goes wrong, stakeholders should be able to see why the AI made a certain decision.
>
> **[4:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=253)** My personal opinion is that all AI systems can be made explainable.
>
> **[4:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=259)** It's just a matter of their architecture, front end, and documentation, and it just takes time and effort.
>
> **[4:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=268)** So if I would say it is less about verification and more adapting the project, so the explainability requirement is met.
>
> **[4:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=278)** Okay, now that you know about ethics, compliance, regulations, and explainability, let's move on to the end points and data in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** let (3), super (1)
> **Env Vars:** gdpr (1), usa (1), hipaa (1), pipeda (1)
> **Analogies:** for example (3), think of it as (1)
> **Best Practices:** make sure to (2), you should never (1)
> **Definitions:** is a  (1), means that (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)

#### Endpoints and data
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=0)** - [Speaker] Welcome back.
>
> **[0:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=2)** Let's continue with our feasibility questions.
>
> **[0:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=5)** The seventh question is about endpoints.
>
> **[0:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=9)** What devices are we designing for?
>
> **[0:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=12)** Typically, people don't remember that when you design an AI application, you need to decide about the type of devices that will be using it.
>
> **[0:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=22)** The design requirements for a mobile app, a desktop application, a robot, or an embedded system like IoT devices are very different.
>
> **[0:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=33)** For each device, you typically use different codes because you use different operational systems.
>
> **[0:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=39)** If you want to write for several endpoints, it will be pretty costly and require significant resources.
>
> **[0:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=47)** You should consider factors like processing power, screen size, battery level, and connectivity options when designing for various devices.
>
> **[0:58](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=58)** Imagine you are developing a voice assistant.
>
> **[1:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=62)** Designing for a smartwatch means you need to account for limited processing power and battery life.
>
> **[1:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=69)** While designing for a smart speaker might allow for more processing power and a constant power supply, but requires excellent sound quality.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=79)** So first, you need to list all devices where your AI will be used, and then understand the requirements and limitations of each device.
>
> **[1:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=90)** Next, make a fast-track estimate and decide on the final list of endpoints.
>
> **[1:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=96)** Then simply adjust the project, including scope, time, and budget to meet the specific needs and constraints of each device.
>
> **[1:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=107)** The eighth question we should talk about is data.
>
> **[1:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=111)** That is a very lengthy point, and we'll go into more detail in a separate video.
>
> **[1:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=117)** In general, you need to assess the following elements at this point.
>
> **[2:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=124)** Do we have enough data? Does data cover the scope?
>
> **[2:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=129)** Is the data good quality?
>
> **[2:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=131)** What is the risk of data being biased?
>
> **[2:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=135)** Enough data is obviously relative and depends on the project type and scope.
>
> **[2:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=141)** Data scientists should tell you how much data you need.
>
> **[2:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=145)** This is usually defined by the size of data sets and sometimes, the time period.
>
> **[2:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=150)** For example, one terabyte of sales data from the last five years.
>
> **[2:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=154)** Sometimes, data is narrow, so it doesn't cover the scope.
>
> **[2:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=160)** Good data is varied and deep.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=163)** If data is too small or not varied enough, you can consider several strategies including acquiring, scraping, or synthesizing data.
>
> **[2:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=174)** You should estimate the cost of such data-related activity and add it to your feasibility form.
>
> **[3:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=181)** You can also decide to wait for the data to be generated organically.
>
> **[3:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=186)** In that case, you should add such information to the form suggesting a project delay due to lack of data.
>
> **[3:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=195)** Good quality data means that data is complete.
>
> **[3:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=199)** There aren't duplicates or any misplaced information, and the data can be easily connected from several sources.
>
> **[3:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=208)** For this, you first take data samples and ask data scientists or data engineers to verify the quality and estimate the time required to clean and prepare data for training the model.
>
> **[3:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=221)** Lastly, at this point, the same team should help you with assessing if data may hold some kind of bias that the model would perpetuate.
>
> **[3:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=232)** See you in the next video where we'll be talking about how to verify talent that you need for your project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), continue (1), require (1), case, (1), this, (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** imagine (1), for example (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [speaker] (1)

#### Talent
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=0)** - [Instructor] Now that we are back, let's discuss how to assess if we have the talent needed for the project.
>
> **[0:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=8)** In a previous video, we covered that for each project, you'll need a different set of talents from the list of necessary resources.
>
> **[0:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=18)** I suggest doing this assessment at the end of your analysis, as it should reflect all the scope changes you might make over the feasibility analysis.
>
> **[0:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=31)** You can do it two ways.
>
> **[0:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=33)** Either you estimate who you need and then check with the person responsible for resources in your company, or check the available resources and place the scope and project length accordingly.
>
> **[0:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=48)** Remember that some roles are interchangeable.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=52)** For example, data scientists can most of the time do the jobs of data analysts, ML engineers, testers, and also data engineers.
>
> **[1:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=64)** You can also support your project by inviting some external experts.
>
> **[1:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=69)** If there aren't trained experts on board, try working with a trusted vendor that can either contract out a complete team or do the project for you.
>
> **[1:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=81)** At this point, remember this one thing, AI experts shouldn't be generalists anymore.
>
> **[1:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=89)** AI has grown in the huge field with so many technologies under the AI umbrella.
>
> **[1:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=96)** They usually require different technologies, different set of scales, different software, and sometimes even hardware.
>
> **[1:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=104)** This means that you should engage people who are experienced in the particular technology you want to use in your project.
>
> **[1:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=112)** At the feasibility stage, you can engage generalists, but for the project, plan for the field, utilize experts like time series experts, voice GenAI experts, recommendation engine experts, and so forth.
>
> **[2:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=129)** And now, pro tip from my projects.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=132)** I engage one super expert and the rest follow this person's lead.
>
> **[2:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=139)** Many people forget that one of the crucial talents necessary for AI project success is the skilled AI manager or AI product manager.
>
> **[2:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=150)** Take this role into consideration in your estimates, because in many companies, the lack of this role can be one of the main bottlenecks.
>
> **[2:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=159)** Okay.
>
> **[2:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=160)** I'm pretty sure you know who you should engage in your AI project, so let's talk about maintenance and retraining.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), require (1), super (1)
> **Cross-References:** previous video (1), we covered (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Best Practices:** pro tip (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Maintenance and retraining
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=0)** - [Instructor] Hi.
>
> **[0:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=1)** Now let's have a look at the most underappreciated element of visibility.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=7)** The 10th question is about our plan for maintenance and the retraining.
>
> **[0:14](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=14)** Many people assume that what happens after an AI project gets deployed is not a project matter anymore.
>
> **[0:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=23)** I disagree.
>
> **[0:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=24)** Yes, maintenance is taking place after the deployment.
>
> **[0:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=28)** While it's unwise to assess the feasibility of the project only for the short term, you should also consider what will make the AI system a success in the long term.
>
> **[0:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=40)** I suggest finding answers to following questions.
>
> **[0:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=45)** Is there a team to maintain the AI system?
>
> **[0:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=49)** Did you plan for the data from the system to be safely stored?
>
> **[0:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=53)** Do you have storage?
>
> **[0:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=55)** You'll need both correct and faulty system predictions when it comes to retraining.
>
> **[1:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=62)** How do you plan to monitor the AI app?
>
> **[1:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=65)** Maybe you need to buy a system for that.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=68)** Monitoring is an absolute must.
>
> **[1:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=71)** As you'll hear in a moment, all AI systems decay in time.
>
> **[1:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=75)** And the fourth one, how do you plan to arrange feedback loops?
>
> **[1:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=79)** In other words, how do you plan to gather feedback from users or stakeholders about the AI systems performance?
>
> **[1:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=86)** And finally, what are the retraining requirements and can you afford it?
>
> **[1:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=92)** Retraining means that every couple of months you update the AI model with new data so that it stays accurate and relevant.
>
> **[1:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=105)** The model decay or data drift, as some people call it, is a standard way all models behave in time.
>
> **[1:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=112)** AI quickly becomes less accurate simply because the real world conditions change.
>
> **[2:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=120)** How often do you need to do it, depends on several elements.
>
> **[2:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=124)** Like the industry.
>
> **[2:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=126)** E-commerce typically changes faster than finance.
>
> **[2:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=130)** The importance of the model and how fast the data changes.
>
> **[2:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=135)** You can learn more about retraining from my course, the new AI tech stack.
>
> **[2:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=141)** AI literacy for tech leaders.
>
> **[2:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=143)** Typically, it's done every six months or so, but not later than a year.
>
> **[2:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=150)** There is also an option of a constant retraining loop that is installed in the system.
>
> **[2:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=156)** It is very convenient, but quite complicated when it comes to development and maintenance.
>
> **[2:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=162)** It involves additional costs and a specific architecture you'll need to develop during your project.
>
> **[2:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=170)** Typically, companies decide on the periodical retraining.
>
> **[2:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=175)** Okay, so with retraining, you should analyze the frequency of such retraining.
>
> **[3:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=181)** Think how much it will cost you what data is necessary.
>
> **[3:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=184)** If you plan to acquire data for the core project, you need to do the same for the retraining, right?
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=191)** And what talent is necessary.
>
> **[3:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=195)** Please remember that with each retraining round, you need to do testing and that it is an additional cost.
>
> **[3:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=203)** If you don't know how often you should do retraining, you can assume six months.
>
> **[3:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=209)** Well done.
>
> **[3:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=210)** Meet me in the next video for the scaling and testing.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), in other words (1), means that (1), is a  (1)
> **Code Keywords:** let (1), finally, (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Scaling and testing
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=0)** - [Instructor] Okay, we're almost there.
>
> **[0:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=3)** In this video, we'll be talking about scaling, testing and validation.
>
> **[0:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=9)** The 11th question is, what is the plan for scaling?
>
> **[0:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=15)** Typically, when we plan our AI projects, we tend to think that it will be used by a couple of hundred users with stable internet connection, that understand application language well and are AI native, meaning they will be able to use all our functionalities with ease.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=35)** That is rarely the case.
>
> **[0:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=37)** Even if this is at first, in time, the system will grow and should have more data, more users, more tasks, more functionalities, and more connections with existing systems.
>
> **[0:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=53)** Why should you bother at this stage?
>
> **[0:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=56)** Because how you plan the project now will affect the ease of scalability.
>
> **[1:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=63)** The potential for larger volumes must be planned into your architecture.
>
> **[1:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=69)** Obviously, some systems are meant to stay small, but most are designed to get larger and more complicated in time.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=79)** This is especially important for client-facing systems, because you don't know when your system will take off, and you need to be prepared to scale fast.
>
> **[1:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=90)** Imagine you have developed an AI chatbot for customer service that works well with 100 users.
>
> **[1:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=99)** However, your company grows and 10,000 customers start interacting with it.
>
> **[1:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=106)** The system needs to be able to manage that higher load.
>
> **[1:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=110)** If it isn't designed to scale, the chatbot might become slow or unresponsive.
>
> **[1:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=117)** So, in the feasibility form, you need to state how many users, data, and connections the system is designed for, if the system can be easily scaled, and to what size.
>
> **[2:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=133)** The 12th and the next question is about testing and validation.
>
> **[2:20](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=140)** Obviously, you do testing to ensure that your AI system works as intended and meets quality standards, but with AI, you need to test several times, and each of them requires budget, time, and different talent.
>
> **[2:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=157)** So the first one is model validation.
>
> **[2:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=161)** This test performed by data scientist is to check your models accuracy in terms of predictions, comparing predictions against historical data, so-called back testing, and running pilot programs to see how it performs in real time.
>
> **[3:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=180)** The second standard system testing, like UATs, unit tests, performance tests, stress tests, and more.
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=191)** You want to catch errors and verify performance.
>
> **[3:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=195)** If your AI architecture is to connect the model with the existing system, you obviously should test the integration.
>
> **[3:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=202)** This is done by developers or testers.
>
> **[3:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=205)** And the third one, ethical and UX testing, where you test if the system is free from bias, and whether users intuitively know how to use it.
>
> **[3:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=216)** Each of these tests bear considerable costs.
>
> **[3:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=220)** With more advanced systems, you will need more thorough testing.
>
> **[3:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=224)** So for the testing, plan it with the people who will help you.
>
> **[3:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=229)** Data scientists, developers, testers, ethical experts, and UX testers, as they should estimate the necessary amount of tests for the minimum and maximum levels.
>
> **[4:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=243)** All clear? Great!
>
> **[4:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=245)** Let's meet for one of the last videos in this chapter.
>
> **[4:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=249)** The metrics.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), for, (1), let (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Metrics and time and budget updates
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=0)** - [Narrator] We still need to address three points to properly fill out our feasibility template.
>
> **[0:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=8)** Metrics are the 13th question and actually one of the most important components for feasibility.
>
> **[0:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=15)** Why?
>
> **[0:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=16)** Because you'll plan your project differently knowing that the decision makers expect 70% of accuracy versus a situation with 99% accuracy.
>
> **[0:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=29)** These would be completely different systems in terms of time, budget, talent, level of testing, amount of data security, and computing power.
>
> **[0:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=42)** As we set the metrics, the system design should follow.
>
> **[0:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=46)** Let's look at the three types of metrics.
>
> **[0:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=50)** The first one, strategic related to business goals.
>
> **[0:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=54)** For example, increasing sales from recommendations to X percent, or decreasing cost of customer service by X percent.
>
> **[1:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=63)** The second one is the project metrics related to system performance.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=68)** For example, error rate or time to achieve goal.
>
> **[1:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=72)** And the third one, the data science metrics related to how good the predictions are.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=79)** For example, 90% of accuracy.
>
> **[1:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=83)** If you think that it would make sense to set these metrics up before you start doing the feasibility, you are right.
>
> **[1:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=92)** However, that is one of the most common mistakes, and companies don't set goals only to learn that a couple of months later they didn't achieve much.
>
> **[1:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=104)** Here's how to set metrics.
>
> **[1:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=106)** Either contact business experts and set some metrics with them and then do the feasibility against them, or you do your own assumptions and list the metrics that could be the effect of the system.
>
> **[2:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=121)** You can build with resources you currently have.
>
> **[2:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=125)** Obviously at this point, it'll be a high level estimate rather than a detailed analysis.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=132)** Okay, we are left with two elements, budget and timeline updates.
>
> **[2:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=138)** It is very common to change both of them during the feasibility analysis, adapting the time and budget based on the information you gather.
>
> **[2:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=148)** Let's say you need more storage or additional experts, you need to put it in the budget as an extra cost.
>
> **[2:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=157)** Put information about changes to the budget and to the schedule in the feasibility form.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=163)** For the sake of simplicity, I like to prepare several scenarios for the decision makers.
>
> **[2:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=169)** For example, Scenario A.
>
> **[2:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=172)** Since we don't have enough data, we need to acquire it or synthesize it at a certain cost in time.
>
> **[2:59](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=179)** Scenario B.
>
> **[3:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=180)** We buy existing product, but the metrics will not be met and the cost would be X.
>
> **[3:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=188)** And then Scenario C.
>
> **[3:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=190)** We delay the project for six months to gather minimal amount of data to start the project.
>
> **[3:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=198)** Sometimes the feasibility goes like check, check, check because you have everything for the project success in the expected scope, but to be honest, it only happens in maybe 25% of the cases, so you should prepare for the scenario building.
>
> **[3:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=214)** Wow, well done.
>
> **[3:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=215)** You learned so much in this chapter time.
>
> **[3:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=220)** For a quick break, grab some coffee or tea and meet me in the next chapter where I'll share with you how to do prototypes and why they are necessary for your project success.

> [!info]- Semantic Content
>
> **Analogies:** for example (4)
> **Code Keywords:** let (2), break, (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Speakers:** - [narrator] (1)

#### Best practices of working with vendors
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=0)** - [Instructor] Hi friends.
>
> **[0:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=2)** In one of the previous videos, I promised to share with you a couple of best practices on how to work with vendors in AI.
>
> **[0:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=12)** I engage vendors for two things.
>
> **[0:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=15)** Either I want to use their off-the-shelf product, or I want them to create a tailor-made solution for me.
>
> **[0:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=26)** Let's split the best practices into two categories then.
>
> **[0:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=31)** When buying off-the-shelf solutions, you should take into consideration where they took the data from.
>
> **[0:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=41)** If they won't tell, you know something is off.
>
> **[0:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=44)** A serious company will at least give you the scale of dataset they use and the industry.
>
> **[0:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=51)** Obviously, you want to select suppliers with solid, transparent data practices.
>
> **[0:58](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=58)** Then how often the retraining will be done and who is responsible for that.
>
> **[1:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=64)** It should be explained in the documentation, but you need to ask these questions to make sure that the model will stay relevant.
>
> **[1:14](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=74)** Then data security.
>
> **[1:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=77)** You must know where your data is going if the solution is based on SaaS approach.
>
> **[1:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=83)** You should also make sure that your data will not be used to train the model without your consent.
>
> **[1:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=90)** Then performance metrics.
>
> **[1:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=93)** You need to know how accurate the model will be and if the company guarantees that it'll stay at that accuracy level.
>
> **[1:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=103)** And obviously, it's worth asking about the support and point of contact.
>
> **[1:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=109)** This is a must if your business will rely on that AI solution.
>
> **[1:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=114)** And for engaging a vendor to build a tailor-made solution for you, make sure to establish a tight, fixed budget.
>
> **[2:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=125)** I usually do a fixed price with time and material addition after my consent.
>
> **[2:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=131)** This allows for flexibility, but only if you actually see the need for extras.
>
> **[2:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=138)** Then take care of the data and make sure you control it.
>
> **[2:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=142)** There are lots of ways, including anonymization, but also giving secure access to data, even to the point that suppliers work on your premise.
>
> **[2:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=153)** And just like with the off-the-shelf, make sure your data stays yours and that the supplier can't use it for training any additional model.
>
> **[2:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=164)** Then it's important to clarify responsibilities around model retraining.
>
> **[2:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=170)** Both options are fine, but be sure to clarify who bears this cost and how often it should happen.
>
> **[2:58](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=178)** If the vendor is being paid additionally, make sure to set the fixed price for that.
>
> **[3:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=184)** If the vendor does the retraining, make sure to agree on how often this is done or what triggers the retraining.
>
> **[3:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=193)** Then confirm if you can make any changes to the product.
>
> **[3:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=198)** Sometimes the licensing agreement says that if you do that, you can lose your guarantee.
>
> **[3:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=205)** Then define expected metrics and performance benchmarks upfront, clearly state what success looks like and what the accepted thresholds are.
>
> **[3:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=217)** Lastly, documentation.
>
> **[3:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=219)** Make sure the vendor is responsible for providing details and complete documentation.
>
> **[3:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=226)** You might ask how this affects the feasibility analysis.
>
> **[3:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=231)** Since choosing the vendor or a supplier is a part of the stage, you must know how to do it and what to take into consideration.
>
> **[4:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=241)** All right, ready for the next chapter.
>
> **[4:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=245)** Super interesting stuff ahead of us.
>
> **[4:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=247)** You'll learn a lot about prototyping.

> [!info]- Semantic Content
>
> **CLI Commands:** make (9)
> **Code Keywords:** let (1), from. (1), super (1)
> **Best Practices:** make sure to (3)
> **Definitions:** is a  (2)
> **Cross-References:** next chapter (1)
> **Documentation:** the documentation (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 3. Prototyping

> [↑ Back to Table of Contents](#table-of-contents)

#### Fundamentals of prototyping and prototyping timeline
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=0)** - [Instructor] In this chapter, we'll dive into fundamentals of prototyping AI products.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=7)** Prototyping is the process of creating an early, simplified version of an AI solution.
>
> **[0:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=15)** Think of it as a trial run that lets you test ideas before committing to full-scale development.
>
> **[0:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=25)** There are actually two moments in time where you can do prototyping.
>
> **[0:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=30)** First is at the stage of feasibility analysis.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=35)** The goal is to test with the users if your product concept will solve their problem.
>
> **[0:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=42)** This prototyping focuses mostly on the inter, and the second stage is during the project development, where you build an MVP and test the solution on a small scale.
>
> **[0:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=57)** In this course, we'll be focusing on the first, feasibility prototyping.
>
> **[1:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=64)** However, we'll touch on the MVP in one brief video.
>
> **[1:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=70)** The main goal of prototyping is to validate AI ideas as quickly and efficiently as possible.
>
> **[1:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=78)** This is simple.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=79)** Show your AI concept to your future users and gather their feedback if this is what they have expected.
>
> **[1:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=88)** To do that you need to show them something, right?
>
> **[1:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=92)** This is a prototype.
>
> **[1:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=94)** It's a kind of a "Wizard of Oz" because you are showing something that doesn't exist yet.
>
> **[1:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=101)** To be clear, a prototype is not a working application, so it's not an MVP.
>
> **[1:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=109)** With prototyping, we want to test if the concept works as intended by the users, gather feedback, and identify potential issues early on, so we can redesign our project if necessary.
>
> **[2:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=126)** And importantly, based on the feedback, decide if it's worth investing further resources to actually build the product.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=137)** For example, if you are designing an AI chat bot, a prototype might help you see if users understand the responses and find the interaction helpful before you invest in more complex features.
>
> **[2:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=155)** You can use prototyping once you have a clear concept of what you want to build.
>
> **[2:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=161)** So we usually do prototyping at the same time as testing and the feasibility analysis.
>
> **[2:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=170)** Let's have a look at the prototyping steps and timeline.
>
> **[2:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=175)** I assume, at this point, you know system architecture, system functionalities, and the desired outcome.
>
> **[3:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=185)** First, start with deciding what functionalities you want to prototype and what strategy to select.
>
> **[3:14](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=194)** We usually test complete functionalities, but there is typical stuff like logging in that you can easily skip.
>
> **[3:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=202)** Here are several strategies to choose from: Paper based, application based, presentation based, designer tools and UI based, AI tools based, and basic code based.
>
> **[3:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=218)** We'll cover them in depth in the next video.
>
> **[3:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=222)** Next, you need to select the testers.
>
> **[3:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=226)** They should reflect project personas.
>
> **[3:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=229)** Then, prepare the prototypes and arrange the place for testing.
>
> **[3:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=235)** The next step is to conduct the testing and collect feedback.
>
> **[4:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=240)** And finally, we want to implement feedback we found valuable to the product concept.
>
> **[4:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=247)** If you are implementing considerable changes to the product, you might want to do another iteration of prototyping.
>
> **[4:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=256)** Prototyping is rather a costly process that since it's not confirmed as a project yet should be minimized in terms of time and budget.
>
> **[4:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=269)** Depending on the prototyping strategy, it should take you around four to six weeks to conduct the full iteration.
>
> **[4:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=278)** I usually do one week for preparation; one, two weeks to prepare a prototype; one week of testing; and one week to analyze the feedback and make decisions if we want to redesign the product.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), from: (1), finally, (1)
> **Env Vars:** mvp (3)
> **CLI Commands:** find (1), make (1)
> **Analogies:** think of it as (1), for example (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Prototyping roles, personas and expected outcome
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=0)** - [Narrator] You are probably curious who is engaged in prototyping.
>
> **[0:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=5)** Prototyping is a team effort, where project or product managers coordinate the process.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=13)** Data scientists and developers draft system functionalities.
>
> **[0:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=18)** UX designers generate the interface and conduct the testing process.
>
> **[0:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=24)** Most of the time I was doing the coordination and conducting tests on my own.
>
> **[0:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=31)** Data scientists and devs were drafting the system on a whiteboard and the graphic designer was preparing the interface.
>
> **[0:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=40)** Then altogether, we were analyzing feedback and deciding on redesigns.
>
> **[0:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=48)** To do effective prototyping, you need to define personas, representations of the different types of users who will interact with your AI system.
>
> **[0:59](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=59)** There are typically two types of personas for AI systems.
>
> **[1:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=63)** The client type, for example, someone who is interacting with the system, and the support type, for example, someone in the company who is overviewing the process.
>
> **[1:14](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=74)** You will need to select some people to test your prototypes.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=79)** I like to have five to 10 testers for each persona group, but if you have three to four, it might also do.
>
> **[1:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=88)** So, what do we actually want to test?
>
> **[1:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=92)** The basic elements are: Does the system have all the functions users expected?
>
> **[1:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=99)** Do users know how to interact with it without special instructions?
>
> **[1:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=105)** Do users know what the proper system behavior is?
>
> **[1:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=110)** Do they understand what AI does for them?
>
> **[1:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=113)** For example, if you prototype an AI that automates complaints, you want to test if the users know how to use it if they expect communication to be conducted in a certain way.
>
> **[2:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=127)** How the system reacts with incomplete complaints, and how the complaint manager is interacting with the complaint console, which sometimes asks him to make a decision.
>
> **[2:20](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=140)** Just from this description, you can tell that the tests must be conducted according to certain scenarios that you will need to prepare.
>
> **[2:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=151)** These scenarios are usually a list of activities that the testers should conduct on their own.
>
> **[2:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=159)** The expected outcome of the prototyping process is a processed feedback from the testers in a form of list of changes and new functionalities that needs to be applied to the product design.
>
> **[2:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=175)** Their changes should be prioritized and grouped into three categories: Must-have changes, nice-to-have changes, and changes we consciously don't want to implement.
>
> **[3:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=188)** Remember, there is a higher goal, to test if it makes sense to develop the concept further.
>
> **[3:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=196)** Okay, now that you know what prototyping is, let's move on to understanding the difference between prototyping and MVP.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), type, (2), let (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Env Vars:** mvp (1)
> **Speakers:** - [narrator] (1)

#### Minimum viable product (MVP)
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=0)** - [Narrator] Many people think that MVP is a prototype.
>
> **[0:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=5)** That is only partially true.
>
> **[0:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=8)** You see, a prototype is like a rough sketch or a model of your idea, a product draft to test design choices and gather early feedback.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=21)** The product doesn't exist at this stage.
>
> **[0:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=25)** With prototyping, we want to learn if it makes sense to build it.
>
> **[0:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=30)** In contrast, an MVP, which stands for minimum viable product, it's an actual product.
>
> **[0:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=38)** It is a minimum version of the product that includes just enough core features to satisfy early users and validate your idea in a real world setting.
>
> **[0:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=51)** Prototypes are tested with potential users and MVP is released to the market.
>
> **[0:58](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=58)** While no one will pay you for the prototype, for the MVP, you should get paid.
>
> **[1:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=65)** It's actually the ultimate verification of the MVP.
>
> **[1:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=70)** If someone is willing to pay for the system that solves their problem, then it's worth growing the product.
>
> **[1:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=78)** The best explanation of MVP I know is the lean startup picture of how not to build a car.
>
> **[1:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=86)** In the top row, how not to develop a product.
>
> **[1:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=90)** Each stage delivers only part of a future car, a wheel, then two wheels, so forth, which isn't functional or useful until the very last step.
>
> **[1:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=103)** From the customer's perspective, there is nothing that brings them value until the last step.
>
> **[1:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=109)** Such development is usually lengthy and costly, and in fact, you don't know if the client will like it at all.
>
> **[1:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=117)** That's what makes this approach very risky.
>
> **[2:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=121)** In the bottom row, how to develop a product.
>
> **[2:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=124)** Each step is a fully usable solution, starting from a very simple skateboard, then moving to a scooter, a bicycle, a motorcycle, and finally, a car.
>
> **[2:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=136)** Even though it's not the final version, at each stage, the customer can still get value out of the product and the development team can gather real feedback to guide to the next iteration.
>
> **[2:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=151)** Not to mention that the earlier you release the product, the more likely you will become a market leader, even if the product is not ideal yet, it already brings value to customers.
>
> **[2:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=167)** This approach helps you avoid investing a lot of money and time into building something that clients may not want.
>
> **[2:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=177)** This is actually the main reason for startup failure, the product that was unfit to the market needs.
>
> **[3:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=185)** This brings us to the problem.
>
> **[3:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=188)** Once you know what the user's problem is, you can build an MVP.
>
> **[3:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=193)** In the car example, the problem is I want to get from point A to B faster than by walking.
>
> **[3:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=201)** You see, it is not about having a car at all.
>
> **[3:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=205)** However, if the problem were I want to show off how much money I have, the car would be probably the MVP.
>
> **[3:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=215)** Let's have a look at the AI example.
>
> **[3:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=218)** Let's say you want to build an AI chatbot.
>
> **[3:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=223)** Your MVP could be a chatbot that can answer a limited set of frequently asked questions and provide basic customer support, and the full product would be a sophisticated chatbot that can handle complex inquiries, can integrate with various customer service platforms, that sentiment analysis, and has a voice mode.
>
> **[4:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=249)** In summary, the MVP is a strategic tool in product development, and I strongly recommend applying it to all AI products, simply because the AI world is fast these days.
>
> **[4:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=265)** You have probably noticed that many popular AI solutions are being released to the market at a crazy pace, even with minor bugs and deficiencies.
>
> **[4:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=274)** All clear?
>
> **[4:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=276)** Great, now let's come back to prototyping.
>
> **[4:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=279)** See you in the next video where we'll understand prototyping strategies.

> [!info]- Semantic Content
>
> **Env Vars:** mvp (10)
> **Definitions:** is a  (4), stands for (1)
> **Code Keywords:** let (3), finally, (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)

#### Six strategies for building prototypes, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=2)** You're going to like this video, as we will cover six strategies for building prototypes.
>
> **[0:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=9)** Selecting the best strategy depends on how much time you have, how advanced the product is, how strategic is it for the company, and what implementation strategy.
>
> **[0:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=22)** You remember, buy, build, fine-tune, and so you choose.
>
> **[0:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=27)** For all the strategies, I have prepared a special resource list in the Exercise Files for you.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=35)** You'll find links to interesting articles, as well as names of useful tools worth testing out.
>
> **[0:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=44)** The first one on our list is paper-based prototype.
>
> **[0:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=48)** It is very simple, just simple sketches or mockups on paper that illustrate how the AI system or interface will function.
>
> **[0:59](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=59)** Look at the pictures.
>
> **[1:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=60)** You draw several screens and show interactions between them.
>
> **[1:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=65)** When you show it to someone, you simply switch between screens based on a virtual pay-per-click.
>
> **[1:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=72)** Many people think it's old school, especially for AI, but I found it one of the most effective strategies when you don't have time, and you need to create prototypes on the spot.
>
> **[1:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=87)** Imagine you are at a client meeting or in a workshop, and you discuss a new idea of an AI product.
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=95)** Instead of explaining using words, I usually sketch how this app or a functionality could look, and immediately, I gather feedback.
>
> **[1:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=105)** I love to use it especially because users can instantly draw how they would like the functionality look, and with other types of prototypes, it's not that simple.
>
> **[1:58](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=118)** This method is extremely quick and low cost.
>
> **[2:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=122)** If you have more time, it's always better to prepare something more advanced.
>
> **[2:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=128)** The second type is presentation-based prototype.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=132)** This is also a very simplistic approach where you present AI functionalities in a presentation.
>
> **[2:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=138)** Why presentation?
>
> **[2:20](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=140)** Because it's widely used in large organizations, and it's very quick to build.
>
> **[2:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=146)** Slide decks can be built with any presentation tool, but you can use also tools, such as Canva, that give you access to design templates for computers, laptops, and smartphones.
>
> **[2:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=160)** It is a simple drag-and-drop solution.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=163)** Canva allow you to easily share your presentation in several formats, including a video with voice.
>
> **[2:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=171)** The third type is a designer tools and UI-based prototype.
>
> **[2:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=177)** There are plenty of online tools that allow you to design interfaces and interactions.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=183)** They are usually used by UX and UI designers and usually require some level of fluency to use them, but they are no-code tools, and they are available to everyone.
>
> **[3:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=198)** The most popular tools are Figma, Sketch, Adobe XD, Envision, Azure, UXPin, Miro, and Canva.
>
> **[3:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=209)** You can easily create clickable mockups that simulate how the AI solution would look and feel.
>
> **[3:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=217)** All of these tools have some kind of free access, so you can test it before buying, and don't worry about having to learn it the hard way.
>
> **[3:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=227)** All of them have hundreds of good tutorials available on YouTube.
>
> **[3:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=233)** I like using this type of prototyping because it looks almost like a real-life application you can send to testers just by sharing the link, and it allows them to comment on elements that are unnecessary or too complicated.
>
> **[4:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=250)** Okay, there are three more strategies ahead of us.
>
> **[4:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=253)** Meet me in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), function (1), switch (1), require (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), such as (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Tools:** figma (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Six strategies for building prototypes, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=0)** - [Instructor] Good to see you again.
>
> **[0:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=2)** Let's learn more about prototypes.
>
> **[0:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=5)** There are three more for us to explore.
>
> **[0:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=8)** The first strategy for prototyping is an application-based prototype.
>
> **[0:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=15)** These are online tools that allow you to design a website or an application in a very simple way, just like you are doing it with designer tools, but instead of dummy elements, you create an actual interface.
>
> **[0:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=30)** To build a basic working app, I'm using off-the-shelf components preset in the system.
>
> **[0:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=37)** Such tools as Webflow, Framer, Wix, and even Bubble allow you to quickly design an interface, and later on you can use the design for an actual system just by clicking Publish.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=52)** Interestingly, there are some preset connections between the UI-based prototyping tools and application-based ones.
>
> **[1:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=61)** For example, you can create a prototype in Figma and easily export it to Webflow to create a real working website.
>
> **[1:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=70)** Check these connections now and then, because there are more and more of them, and they make our life so much easier.
>
> **[1:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=78)** The fifth one is AI tools-based prototype, where you use GenAI to design the prototype for you.
>
> **[1:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=87)** It requires some practice to design the whole product experience just by GenAI, but for some mockups, it is more than enough.
>
> **[1:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=97)** The main advantage of such tools is that they are extremely fast and getting more and more effective.
>
> **[1:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=104)** Okay, so it works like all GenAI tools.
>
> **[1:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=107)** You input a prompt and the system generates a design for you.
>
> **[1:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=112)** There are general LLM-based tools that can help you out, like Claude, and also specialized AI-based tools that are great for designing websites, interfaces, and mockups like Bolt, Lovable, Cursor or VZERO.
>
> **[2:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=131)** My pro tip for such tools is to join some Reddit and Discord UI designers groups that share prompts for designing interfaces.
>
> **[2:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=143)** To show you how these tools work, I have two videos for you, where with the help of bolt.new, we'll build an AI-based prototype in a couple of minutes.
>
> **[2:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=155)** Make sure to check them out.
>
> **[2:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=158)** The last one, and usually the most demanding, is code-based prototype.
>
> **[2:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=165)** For this option, you use coding to show how the system is going to work.
>
> **[2:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=170)** In other words, you build a simplified version of an actual application.
>
> **[2:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=175)** With AI coding tools like Cursor, GitHub Copilot, Claude, DeepSeek, Grok, Gemini, or ChatGPT, coding becomes super easy, because in some of these tools, you immediately see the outcome of automatically-generated code.
>
> **[3:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=195)** However, you still need to have basic coding skills to change the code, if needed.
>
> **[3:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=202)** Just to be clear, you don't need to use the AI tools if you prefer to code in a standard way.
>
> **[3:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=209)** Whichever way is faster for you.
>
> **[3:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=212)** So with all these awesome strategies, how do you pick the right one?
>
> **[3:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=218)** They were presented to you in a way that reflects time engagement, from minimum to maximum, as well as level of complexity.
>
> **[3:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=228)** It is fairly simple.
>
> **[3:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=229)** First, check how much time you have.
>
> **[3:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=233)** If you don't have much, go for the simpler solutions.
>
> **[3:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=237)** Then think about who can do these prototypes for you.
>
> **[4:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=243)** If you have great talent on board, use their skills, but if not, again, go for the simplest ones.
>
> **[4:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=250)** I say simplest, and for each one of you, simplest strategy may be different.
>
> **[4:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=256)** Some people like drawing, some coding, some prompting, and some drag and dropping.
>
> **[4:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=262)** I always look at the client expectations as well, meaning the more advanced the client is, the higher quality of mockups they will expect.
>
> **[4:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=272)** Also, for the more complex projects like advanced AI functionalities, a more advanced mockup may be a good idea, so the user will be able to actually test it and provide feedback.
>
> **[4:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=286)** Phew, ha! That was something!
>
> **[4:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=288)** You learned so much.
>
> **[4:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=290)** Now let me share with you best practices on how to do these prototypes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (2), new, (1), super (1)
> **Tools:** figma (1), discord (1), github (1)
> **CLI Commands:** make (2)
> **Env Vars:** llm (1), vzero (1)
> **Definitions:** is an  (1), in other words (1)
> **Analogies:** just like (1), for example (1)
> **Best Practices:** pro tip (1), make sure to (1)
> **Speakers:** - [instructor] (1)

#### Prototyping best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=0)** - [Instructor] Welcome to the next video.
>
> **[0:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=2)** Let me share some of my best practices of working with prototypes.
>
> **[0:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=8)** First, number of prototypes.
>
> **[0:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=10)** If you don't have time, the answer is simple, but if you do, then it's often helpful to create two or three prototypes each focusing on different aspects of your AI solution.
>
> **[0:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=24)** You can think of it as different versions of your system.
>
> **[0:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=28)** Let users tell you which of them they like more.
>
> **[0:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=33)** Second, time allocation.
>
> **[0:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=36)** Prototyping, especially the testing part, tends to take longer than expected.
>
> **[0:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=41)** After all, you're dealing with people that have their own lives and responsibilities.
>
> **[0:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=45)** I always add a week buffer to the estimated time.
>
> **[0:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=50)** Third, if you want to go with online versions of prototypes, think about testers' computers and networks.
>
> **[0:59](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=59)** Ask them to use a fast connection.
>
> **[1:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=62)** Otherwise, they will focus on how slow moving the prototype is rather than on the functionalities.
>
> **[1:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=70)** Fourth, iterations.
>
> **[1:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=73)** Prototyping isn't a one and done process.
>
> **[1:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=77)** After creating an initial prototype and gathering feedback, you can refine the prototype, add or remove features, and then repeat the prototyping cycle.
>
> **[1:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=90)** This sounds cool, but be careful.
>
> **[1:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=93)** Since your project is in the design phase, there will be always something to make better.
>
> **[1:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=100)** Plan in advance for the number of iterations.
>
> **[1:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=103)** With standard AI projects, I usually go with one, with more complicated projects, two.
>
> **[1:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=109)** If this is not enough, this means the project is simply poorly designed and you should go back to the ideation phase.
>
> **[2:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=121)** Fifth, focus on core functionality.
>
> **[2:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=125)** I suggest avoiding feature overload in early prototypes.
>
> **[2:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=129)** Concentrate on the essential AI capabilities that demonstrate the solution's potential value.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=137)** Sixth, document everything.
>
> **[2:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=141)** Plan the prototyping and testing carefully and keep clear records of all the decisions, assumptions, data sources, and potentially system touch-ups.
>
> **[2:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=154)** Good documentation helps you trace the best ideas and later on confirm your decisions.
>
> **[2:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=162)** Seventh, never ask users for what they like.
>
> **[2:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=166)** While it might seem intuitive to directly ask users what features or solutions they desire, experience shows that users often struggle to explain their true needs.
>
> **[2:59](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=179)** They might give you answers that will seem sensible, but these users wouldn't necessarily be willing to pay for these functionalities.
>
> **[3:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=188)** Instead, observe user behavior, focus on their problems, and gather feedback through real interactions with the system.
>
> **[3:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=198)** Eighth, the Occam's Razor, or in other words, the KISS rule, keep it simple, stupid.
>
> **[3:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=205)** Occam's Razor suggests that the simplest solution, one with the fewest assumptions, is often the best.
>
> **[3:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=213)** In practice, this means focusing on the core features and tests that are simple to follow, rather than advanced and usually more complicated processes.
>
> **[3:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=224)** Keep the process simple and list of questions short.
>
> **[3:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=228)** Ninth, the budget.
>
> **[3:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=231)** I always say don't overdo it.
>
> **[3:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=233)** This is still a preparatory phase.
>
> **[3:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=236)** As the initiative can be stopped, if someone decides that it's not feasible or beneficial enough, usually the biggest cost is the cost of people's time who are prototyping, and later on conducting the test.
>
> **[4:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=251)** Tools that I mentioned are rather cheap if bought for just a few people.
>
> **[4:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=257)** In total, try not to go over 30 man-days for one prototyping iteration, including the test.
>
> **[4:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=266)** Great.
>
> **[4:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=267)** Now it's time to tell you more about the testing process and gathering feedback from users.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Cross-References:** next video (1), go back to (1)
> **CLI Commands:** make (1)
> **Env Vars:** kiss (1)
> **Definitions:** in other words (1)
> **Analogies:** think of it as (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### The process of gathering feedback from users
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=0)** - So you are building an AI prototype to test it, right?
>
> **[0:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=5)** We'll focus on this now and in the next video.
>
> **[0:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=10)** You'll want to gather feedback from users, not only about the functionalities of the system, but also on additional elements like usability, interpretability, easiness of use, and transparency.
>
> **[0:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=26)** You first want to test what you have prepared, but also want to get constructive feedback.
>
> **[0:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=32)** What functionalities could be added by asking the user if the system solves all their problems.
>
> **[0:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=41)** Once you have prototype, you need to plan for testing sessions.
>
> **[0:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=46)** First, decide on who you are going to invite.
>
> **[0:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=49)** Prepare a longer list as probably not everyone will want to participate.
>
> **[0:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=54)** Obviously, focus on personas you defined earlier.
>
> **[0:58](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=58)** Also, make sure that these people are prepared to spend the needed amount of time with you.
>
> **[1:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=64)** Depending on how large your system is, such a meeting will take somewhere between 40 to 60 minutes.
>
> **[1:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=72)** I always suggest getting acceptance from their employers so they feel it's a part of their work and treat these tests seriously.
>
> **[1:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=82)** You need to know that there are basically three types of tests.
>
> **[1:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=86)** In-person where you meet with participants face to face and observe how they interact with the prototype.
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=95)** Online testing, where participants get access to the prototype.
>
> **[1:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=100)** And based on the list of tasks, they conduct the tests in front of you.
>
> **[1:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=105)** Such sessions are usually recorded.
>
> **[1:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=109)** And third, using a prototyping tool like Maze, UserTesting or Lookback.
>
> **[1:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=116)** They allow you to conduct the tests online and track user behavior through, for example, heat maps.
>
> **[2:03](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=123)** They are designed in a way that the user can take the test in their own time.
>
> **[2:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=129)** Although unlike all the automations, I believe that in-person testing is absolutely the best.
>
> **[2:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=136)** If you have time and access to users, always go for this option.
>
> **[2:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=141)** Okay, so once you decide on the type of test, decide when you'll be testing your prototype and make sure you have a clear agenda.
>
> **[2:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=151)** An agenda that works best for me always follows these steps.
>
> **[2:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=156)** Before the meeting, I send a short email to participants explaining how the test will be conducted.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=163)** However, I don't reveal the test questions because I want to simulate a real life situation where users are using the system for the first time.
>
> **[2:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=174)** In the email, I usually explain how they should prepare for the test, including organizational matters that they should have stable connection if we meet online, or that they should be prepared to have their own computer and smartphone if we meet in person.
>
> **[3:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=193)** So once we meet, I start with introducing myself the goal, and explain how the test would be conducted.
>
> **[3:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=202)** Then I remind testers that the meeting will be recorded, but will use the recording only for product development.
>
> **[3:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=211)** Then I give a list of tasks to the tester and ask is everything is clear.
>
> **[3:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=217)** Usually I get a couple of questions and I answer.
>
> **[3:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=221)** Then the tester continues with the tasks that are on the list, and I do absolutely nothing.
>
> **[3:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=228)** I don't comment and I don't say if the task was done correctly or not.
>
> **[3:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=234)** After the tester finishes all the tasks from the list, I usually ask a couple of questions about the experience of using the system.
>
> **[4:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=242)** Like, was it easy, was it intuitive, was it enjoyable?
>
> **[4:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=247)** And most of all, does the system do everything that was expected of it?
>
> **[4:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=253)** Then if we have time, I give space for the tester to share their thoughts.
>
> **[4:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=259)** And finally, I close the session and inform the tester about the next steps.
>
> **[4:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=264)** For example, about the plan timeline for product development.
>
> **[4:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=268)** Brilliant, now you know the process.
>
> **[4:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=271)** So let's focus on best practices of conducting the test sessions.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** finally, (1), let (1)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - so (1)

#### Best practices for gathering feedback from users
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=0)** - [Instructor] Some people say that prototype testing is a science, and some call it art.
>
> **[0:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=6)** I think it's both.
>
> **[0:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=8)** Let me share with you best practices for conducting prototype testing.
>
> **[0:14](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=14)** Start with a warm welcome and explain how the test will go.
>
> **[0:20](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=20)** The second one, no judgment.
>
> **[0:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=23)** Encourage honest opinions so the testers share their thoughts without fear of criticism.
>
> **[0:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=30)** The third one, ask open-ended questions.
>
> **[0:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=34)** Instead of yes/no questions, ask questions like, "What did you think about how the AI responded," to get more detailed insights.
>
> **[0:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=44)** The fourth one, test the features and experience.
>
> **[0:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=48)** First test if the system works as planned, and then try to understand how the prototype makes users feel and what they expect.
>
> **[0:59](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=59)** The fifth one, stay neutral and avoid leading.
>
> **[1:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=64)** As the facilitator, you shouldn't be giving hints or correcting mistakes immediately.
>
> **[1:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=71)** Allow users to express difficulties on their own to get genuine feedback.
>
> **[1:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=77)** Even if the testers get stuck, it tells you something about the product design, right?
>
> **[1:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=83)** A wise person once told me that there are no human mistakes, just poorly designed products.
>
> **[1:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=91)** The sixth one, sometimes, especially with more advanced products, I like to ask testers to think out loud and verbalize their thoughts as they use the prototype.
>
> **[1:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=103)** It's super useful as you understand the best way of interacting with users.
>
> **[1:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=109)** The seventh one, observe not only what users do, but also their body language and facial expressions.
>
> **[1:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=117)** These nonverbal messages can indicate frustration, confusion, but also pleasure and joy.
>
> **[2:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=124)** The eighth one, use a test list as a guideline rather than a rule.
>
> **[2:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=130)** Be flexible.
>
> **[2:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=131)** On one hand, test all the main features, but on the other, be open to hear additional feedback.
>
> **[2:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=139)** The ninth one, do the summary immediately after the session, while they're still fresh, even if you recorded it.
>
> **[2:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=147)** Additionally, at the end of each test, briefly review with the tester their experience.
>
> **[2:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=155)** And last, but definitely not the least, record the session.
>
> **[2:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=159)** With participant's consent, record video or screen interactions, so you can review the session later, and during the session, you can focus on the tester instead of taking notes.
>
> **[2:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=173)** Remember that not all feedback is valuable.
>
> **[2:58](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=178)** Valuable feedback is specific, actionable, and focused on the core features of your prototype.
>
> **[3:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=187)** For example, rather than just saying, "It's confusing," testers should explain which part of the interface was unclear, or how the system's response didn't match their expectations.
>
> **[3:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=201)** This way, you'll know what to improve.
>
> **[3:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=204)** Lastly, let's talk about documentation.
>
> **[3:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=207)** I admit it's not my favorite part, but it's a must.
>
> **[3:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=211)** Shortly after, you'll need to draw conclusions from the feedback, and you'll need some notes for that.
>
> **[3:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=218)** During the testing session, I usually listen, observe, and note only my observations, something that will be not presented in the standard voice transcript.
>
> **[3:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=229)** I note down surprising facial expressions, timestamps for significant moments, like when a tester hesitates or looks confused.
>
> **[4:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=240)** For example, you might note, "At 3:15, users struggled with the chatbots prompt saying, 'I don't understand what to do next.'"
>
> **[4:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=250)** After the session, create a transcript using AI tools, compile your handwritten notes, and organize feedback by themes, like usability issues or feature requests.
>
> **[4:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=264)** I'll share more about what happens after the testing session in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), super (1), interface (1)
> **Analogies:** for example (2)
> **Prerequisites:** you'll need (2)
> **Ports:** :15 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Drawing conclusions after the feedback
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=0)** - [Instructor] After an AI prototyping session, the work is far from over.
>
> **[0:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=5)** It's time to process, sort, and act on the valuable feedback you have gathered.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=13)** The first step is to consolidate all the documentation.
>
> **[0:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=18)** This means gathering your session notes and conclusions, video recordings, and any transcripts from recorded user's interactions.
>
> **[0:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=29)** For example, if a tester hesitated while interacting with a chatbot feature, you'd note the exact moment and context.
>
> **[0:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=39)** Step two is to sort all the feedback into manageable snippets, then sort them into categories.
>
> **[0:49](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=49)** You can use a simple spreadsheet, Post-it notes, or project management tool like Trello or Asana.
>
> **[0:57](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=57)** For this task, Trello is my personal favorite.
>
> **[1:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=61)** You should create columns for different categories such as usability, functionality, design, and technical issues.
>
> **[1:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=70)** You can also use your own categorization, like which functionalities was the feedback about?
>
> **[1:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=77)** Another approach is thematic analysis, where you identify recurring themes or pain points by grouping similar feedback together.
>
> **[1:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=89)** This helps you see patterns and user behavior that might indicate that the project needs to be redesigned.
>
> **[1:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=98)** So while you analyze documentation, assign each piece of feedback to one of these categories.
>
> **[1:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=106)** But wait, AI can do this for you as well.
>
> **[1:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=110)** A cool way to analyze your documentation is to use your trusted LLM and share all your documents.
>
> **[1:58](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=118)** First, ask for all documents combined, then for listing all pain points, then sorting them into categories.
>
> **[2:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=128)** And lastly, you can also ask the LLM for the summary of suggested changes in the system.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=137)** Once your feedback is sorted, it's time to prioritize.
>
> **[2:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=142)** You should consider factors such as frequency, severity, and impact.
>
> **[2:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=148)** For example, if multiple testers reported a core feature is confusing, that issue should be high on your list.
>
> **[2:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=158)** In contrast, a single comment about a minor aesthetic detail might be less urgent.
>
> **[2:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=165)** One practical method I like to use is a simple scoring system.
>
> **[2:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=170)** I rate each issue on a scale from one to five for frequency, impact and ease of resolution.
>
> **[3:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=180)** I sum up all the points to get an overall score.
>
> **[3:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=185)** Imagine we have a list of 50 suggestions, prioritized and analyzed, but it's not like you always take the top ones.
>
> **[3:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=195)** These are just suggestions.
>
> **[3:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=197)** What you want to do instead is organize a meeting to decide on which feedback to implement.
>
> **[3:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=205)** Bring together your data scientists, devs, and business experts to review the prioritized list.
>
> **[3:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=213)** Discuss the feasibility of implementing changes and balance them against your project's goals and timeline.
>
> **[3:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=223)** Remember to keep your eyes on the goal, which is solving the key problem your AI product is addressing.
>
> **[3:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=231)** After that, redesign your AI prototype and potentially do one more testing.
>
> **[3:58](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=238)** If you don't plan to do another round, then just update your designs, plans, budgets, schedules, and don't waste time on updating your prototype.
>
> **[4:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=249)** I always like sending thank-you notes to the testers summarizing the feedback we got, but this is optional.
>
> **[4:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=257)** Lastly, you should document everything.
>
> **[4:20](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=260)** I mean the changes you have implemented to your AI project.
>
> **[4:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=264)** And that's it, my dear friends.
>
> **[4:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=267)** Once you use the gathered feedback to make your product better and you update all the plans, you go for the green light.
>
> **[4:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=276)** Once you get it and the project gets approval, you simply implement your plan knowing that prototyping and visibility prepared you for nothing else but success.
>
> **[4:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=290)** I wish you good luck.
>
> **[4:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=292)** Happy AI building.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (2), imagine (1)
> **Env Vars:** llm (2)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Demo
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=0)** - [Instructor] Hello and welcome to the video where I would be showing you how you do prototyping with one of the AI tools.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=13)** You know the power of AI, you know the power of LMS and you know that if you put any prompt, the system should return what you want.
>
> **[0:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=23)** We can do exactly the same with AI tools for prototyping.
>
> **[0:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=29)** I selected the easiest tool I know, and you don't need any coding for that.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=35)** The system would be showing you the code and actually implementing it instantly.
>
> **[0:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=42)** Okay, without further ado, let's move on to work.
>
> **[0:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=46)** I will be using bolt.new in a almost free version.
>
> **[0:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=51)** You just need to log in and you get some credits to build a couple of websites so you can play with it completely for free.
>
> **[1:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=61)** And later on you can decide if you like this tool or maybe the others that I'm providing you in the exercise files.
>
> **[1:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=69)** Okay, cool.
>
> **[1:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=70)** So I have a couple of prompts prepared for today so it goes faster.
>
> **[1:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=75)** I want you to build an app for the ice cream mansion.
>
> **[1:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=78)** Look at that, I'm not providing any technical information.
>
> **[1:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=83)** I'm clicking Go and we wait.
>
> **[1:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=86)** The system at the same time is telling you what it does and it's doing some kind of coding.
>
> **[1:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=92)** Don't need to worry about that at all.
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=95)** We will switch into preview in a couple of moments when the system finishes.
>
> **[1:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=101)** Of course, the faster your system is, the faster it will generate the code and the preview.
>
> **[1:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=108)** Let's see what it does for us.
>
> **[1:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=112)** Okay, we have our preview.
>
> **[1:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=116)** Look at that, "Ice Cream Mansion, where dreams are served in scoops."
>
> **[2:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=120)** I love it.
>
> **[2:01](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=121)** Okay, so it created a kind of a website for us, featured, classics, look at that.
>
> **[2:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=127)** I can click on that and I have some menu.
>
> **[2:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=131)** It gets bigger, oh cool.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=137)** Oh, "Visit us."
>
> **[2:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=138)** Okay, that's kind of cool, look at that.
>
> **[2:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=141)** What we did is we put just one line, so I just wanted to give you the preview of how powerful this system is, but now let's do more.
>
> **[2:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=153)** I would be showing you how to add an additional AI functionality to an existing website.
>
> **[2:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=160)** It's kind of more demanding, because you would be working with an existing application.
>
> **[2:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=167)** I have a website for Wisdom Pet Medicine and I would like to add something to the contact section.
>
> **[2:56](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=176)** We'll do a screenshot, because we would be working with this section.
>
> **[3:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=180)** We want to add an additional AI section here.
>
> **[3:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=184)** Okay, and we want of course to use it to show it to the owners of the website, how the new AI functionality would be working.
>
> **[3:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=193)** I just took a simple, simple snapshot of a website and what I do, I just dropped it in here.
>
> **[3:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=204)** Kind of easy, right?
>
> **[3:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=206)** So, and I have a couple of prompts prepared to save your time.
>
> **[3:31](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=211)** Yes, both.
>
> **[3:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=212)** You can help us.
>
> **[3:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=213)** "To the website, I attach, add a button that would lead us to the AI veterinary prescreening.
>
> **[3:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=221)** Keep the same styling and keep all the existing elements."
>
> **[3:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=224)** Okay, cool, so we are just adding a button here and now in a moment we will add a functionality.
>
> **[3:51](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=231)** You already know how it works, so it's just adding a button.
>
> **[4:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=240)** Okay, kind of easy.
>
> **[4:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=248)** Okay, cool, what it did, look at that.
>
> **[4:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=251)** It rearranged the contact section.
>
> **[4:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=255)** This is something, sometimes it does it.
>
> **[4:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=257)** So it removed the cutie dog with a phone, but it has has Send and AI veterinary prescreening.
>
> **[4:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=266)** Okay, cool.
>
> **[4:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=268)** And a cutie dog.
>
> **[4:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=269)** Okay, so some rearrangements here.
>
> **[4:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=272)** Sometimes it's quite difficult to keep the original website.
>
> **[4:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=278)** So what we want the system to do now for us is to upload additional instruction, connect the button, start prescreening, right?
>
> **[4:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=293)** That's AI veterinary, "AI veterinary prescreening to the sub-website for AI Vet.
>
> **[5:04](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=304)** Explain in steps how this works.
>
> **[5:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=307)** First, tell us about your friend.
>
> **[5:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=309)** Second, upload pictures and condition explanation."
>
> **[5:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=312)** So we want to help owners, dog or animal owners until they can get and reach the vet what to do with their pets that's suffering somehow.
>
> **[5:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=324)** "Three, get recommendation and prescreening suggestions."
>
> **[5:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=328)** Okay, so we are adding an actual AI functionality where we want to simulate and analyze the condition of a pet before the pet comes to the vet.
>
> **[5:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=342)** Okay, so we want our website to be advanced and of course AI-powered.
>
> **[5:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=355)** Okay, let's look what it did for us.
>
> **[6:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=360)** So what we do have, we have contact, looks similar.
>
> **[6:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=366)** The cutie dog is here.
>
> **[6:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=368)** Okay, so what happens if we click on AI veterinarian prescreening?
>
> **[6:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=373)** Look at that.
>
> **[6:14](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=374)** We got our new functionality.
>
> **[6:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=377)** Okay, there are some symbols for a process.
>
> **[6:19](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=379)** "Tell us about your pet, pet's name, pet species."
>
> **[6:22](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=382)** Oh, that's kind of cool.
>
> **[6:24](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=384)** We didn't ask for that.
>
> **[6:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=385)** "Breed, age, weight."
>
> **[6:27](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=387)** Okay, cool.
>
> **[6:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=388)** So it probably, we can put doggy species.
>
> **[6:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=395)** It's a dog.
>
> **[6:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=397)** Breed.
>
> **[6:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=400)** Unknown, Right, age, five years.
>
> **[6:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=404)** Weight.
>
> **[6:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=406)** 20.
>
> **[6:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=407)** Okay, cool.
>
> **[6:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=408)** Oh yeah, we have a second step.
>
> **[6:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=410)** "Describe the condition and upload photos."
>
> **[6:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=412)** Just as we want it.
>
> **[6:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=414)** Okay, it looks sick.
>
> **[6:59](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=419)** And upload photos.
>
> **[7:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=422)** Oh, how awesome is that?
>
> **[7:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=425)** Oh, I love this tool.
>
> **[7:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=427)** Okay, for desktop, I won't be doing that, but yeah, you can tell that you can click on that.
>
> **[7:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=433)** And it also says that it's optional.
>
> **[7:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=435)** Okay, we'll skip that.
>
> **[7:17](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=437)** I want to see the last screen, AI prescreen results.
>
> **[7:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=441)** So we have our preliminary assessment.
>
> **[7:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=445)** Oh, for doggy, our AI system suggests the following.
>
> **[7:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=449)** Okay.
>
> **[7:30](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=450)** "May require veterinary attention."
>
> **[7:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=453)** For animal owners.
>
> **[7:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=454)** And next steps and there should be schedule appointment.
>
> **[7:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=459)** Oh good.
>
> **[7:40](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=460)** What happens?
>
> **[7:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=461)** Oh, and we are back to Contact.
>
> **[7:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=464)** Let's see, what if I want to connect this particular button.
>
> **[7:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=472)** I mean schedule appointment.
>
> **[7:54](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=474)** You seen that, schedule appointment, and it should open a new window for scheduling appointments with the calendar.
>
> **[8:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=485)** Let's go.
>
> **[8:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=491)** Okay.
>
> **[8:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=493)** Okay, let's see.
>
> **[8:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=495)** We are working on that.
>
> **[8:18](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=498)** Let's be very quick.
>
> **[8:21](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=501)** Unknown.
>
> **[8:23](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=503)** Five.
>
> **[8:25](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=505)** 20.
>
> **[8:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=506)** Okay, next.
>
> **[8:28](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=508)** Describe.
>
> **[8:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=509)** It looks sick.
>
> **[8:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=513)** Okay, and photos are optional.
>
> **[8:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=515)** Okay, so we got schedule appointment.
>
> **[8:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=519)** Yes, we had it before.
>
> **[8:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=521)** And look at that.
>
> **[8:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=523)** Yes.
>
> **[8:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=524)** Schedule it for what?
>
> **[8:47](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=527)** For July.
>
> **[8:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=528)** And select time.
>
> **[8:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=530)** These times are available.
>
> **[8:52](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=532)** Okay, your name, let's say it's 123456789.
>
> **[9:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=540)** Email, aa@[aa.org](https://aa.org).
>
> **[9:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=548)** Additional notes?
>
> **[9:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=550)** Nope.
>
> **[9:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=551)** And confirm appointment.
>
> **[9:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=553)** Okay, appointment scheduled successfully.
>
> **[9:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=556)** Can you imagine that here we would have a connection with an actual appointment-arranging website, or some kind of a calendar or CRM, whatever, a working website that would be giving to our API a return that the appointment was actually scheduled successfully.
>
> **[9:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=579)** So this is how it's done, guys.
>
> **[9:41](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=581)** Can you imagine how many additional elements could we put into our current websites and show to our decision makers and potential users how they are working with that?
>
> **[9:53](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=593)** I can easily tell that our testers could tell, "Okay, this is working for me."
>
> **[10:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=600)** Or, "This doesn't work for me."
>
> **[10:02](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=602)** Anyway, thank you for your time.
>
> **[10:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=606)** Thank you for your attention.
>
> **[10:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=607)** I hope you like this video.
>
> **[10:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=609)** Just check the other resources that we have put into exercise files for you.
>
> **[10:16](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=616)** For now, I thank you so much and have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), switch (1), require (1)
> **Env Vars:** lms (1), crm (1), api (1)
> **UI Navigation:** click on (2)
> **Exercise Files:** exercise files (2)
> **Analogies:** imagine (2)
> **URLs:** [aa.org](https://aa.org) (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980&t=0)** - Congratulations, you've made it to the end of this course.
>
> **[0:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980&t=5)** By now, you know how to successfully check the feasibility for selecting the most valuable AI ideas that clients will love.
>
> **[0:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980&t=15)** You have also learned how to use prototyping to gain valuable client feedback to make the next superstar AI product.
>
> **[0:26](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980&t=26)** With great power comes great responsibility, and as you gain so much powerful knowledge, be sure to use it responsibly.
>
> **[0:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980&t=36)** I hope we will stay in touch.
>
> **[0:39](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980&t=39)** I'd love to connect with you on LinkedIn.
>
> **[0:42](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980&t=42)** I'll be happy to answer questions, as well as to hear about your personal stories and AI successes.
>
> **[0:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980&t=50)** The more successful you are as AI managers, the safer our world will be for us, and future generations.
>
> **[1:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980&t=60)** So I can't wait to see your next brilliant AI product.
>
> **[1:05](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980&t=65)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Maria Parysz]]

## Resources

- Exercise files available

## Skills Covered

- AI Software Development
- Prototyping
- Artificial Intelligence (AI)
- Product Development

## Path Context

### In [[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning]]
← [[Responsible AI Framework for Your Enterprise AI Product]] | **4 of 6** | [[AI Data Strategy- Data Procurement and Storage]] →

## Part of

- [[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[Welcome To The Building Ai Products Prototyping Essentials Professional Certificate]] — Artificial Intelligence (AI), AI Software Development, Prototyping
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[AI Foundations- Ideating and Prototyping]] — Artificial Intelligence (AI), Prototyping
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)