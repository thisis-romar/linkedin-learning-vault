---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: problem-solving-strategies-for-data-engineers
url: "https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers"
duration_minutes: 115
duration: 1h 55m
level: Intermediate
updated: 6/30/2023
learners: 346997
skills:
  - Data Engineering
  - Problem Solving
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHbAbSH4NO6OQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687393016434?e=2147483647&amp;v=beta&amp;t=zgcuvpASDV1aptR6vh5JPqJmdcZCebBIYuuyMv_-Cbw"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Data Engineering Skills]]'
prev_courses:
  - '[[Data Engineering With Dbt]]'
next_courses:
  - '[[ETL in Python and SQL]]'
path_nav: '[{"path":"Advance Your Data Engineering Skills","position":2,"total":10,"prev":"Data Engineering With Dbt","next":"ETL in Python and SQL"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/devops
  - skill/data-engineering
  - skill/problem-solving
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Problem-Solving%20Strategies%20for%20Data%20Engineers.md)

![Problem-Solving Strategies for Data Engineers](https://media.licdn.com/dms/image/v2/D560DAQHbAbSH4NO6OQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687393016434?e=2147483647&amp;v=beta&amp;t=zgcuvpASDV1aptR6vh5JPqJmdcZCebBIYuuyMv_-Cbw)

# Problem-Solving Strategies for Data Engineers

> Data engineers face a wide variety of problems every day—and often variations of the same problems. In this course, data engineer Andreas Kretz takes you through a variety of common problems you may face and shares her problem-solving strategies for typical problems within all phases of engineering projects. Andreas teaches you how to recognize which phase of a data project you’re in—planning, des

> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers) | 1h 55m | Intermediate | 347K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Roles and Phases]]** (3 videos)
- **[[#2. Planning]]** (3 videos)
- **[[#3. Design]]** (4 videos)
- **[[#4. Implementation]]** (4 videos)
- **[[#5. Operations]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/introduction?u=76281980&t=0)** - Data engineers face a wide variety of challenges daily.
>
> **[0:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/introduction?u=76281980&t=4)** Do you feel like you're stumbling from one problem to the next?
>
> **[0:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/introduction?u=76281980&t=8)** You're not alone.
>
> **[0:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/introduction?u=76281980&t=9)** In this course, I will take you through successful problem-solving strategies for data engineers.
>
> **[0:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/introduction?u=76281980&t=16)** We'll take a practical approach through all phases of data projects, from planning to operations.
>
> **[0:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/introduction?u=76281980&t=23)** Hi, my name is Andreas Kretz, and I'm a data engineer with over a decade of experience with all phases of data projects.
>
> **[0:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/introduction?u=76281980&t=31)** Join me to take your problem-solving skills to the next level and let's make engineering fun.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - data (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980&t=0)** - This course will be helpful for you if you are interested in data engineering, if you are already a data engineer or if you are a software engineering coming from the software engineering side because that's what data engineers also do a lot, software engineering.
>
> **[0:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980&t=14)** As mentioned in the introduction, stumbling from one problem to the next is something a lot of engineers struggle with and it's absolutely no fun.
>
> **[0:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980&t=23)** I have made a lot of these mistakes or had a lot of these problems in the beginning when I got into data engineering.
>
> **[0:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980&t=29)** So let's have you not make the same mistakes.
>
> **[0:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980&t=33)** One thing I want to mention in the beginning is big problems.
>
> **[0:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980&t=37)** A lot of people struggle with big problems, having big problems, and needing to solve big problems.
>
> **[0:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980&t=43)** But remember one thing, every big problem was once a small problem.
>
> **[0:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980&t=47)** And if you would have noticed it and taken care of the small problem, you would not have a big problem now.
>
> **[0:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980&t=54)** And that's what good engineers do.
>
> **[0:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980&t=56)** Good engineers are problem solver.
>
> **[0:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980&t=59)** They're going to find the problems early and they're going to solve them early to not have big problems later.
>
> **[1:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/what-you-should-know?u=76281980&t=67)** So let's start the course and let's look into the role of the data engineer.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - this (1)


### 1. Roles and Phases

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The data engineer
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=0)** - [Instructor] Let's start with a macro view of data engineering.
>
> **[0:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=3)** So what you usually have is on the left, you have a data source.
>
> **[0:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=7)** This is where your data is coming from.
>
> **[0:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=9)** And on the right is a person or a system that is actually using the data.
>
> **[0:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=13)** And everything in the middle here, that is a pipeline.
>
> **[0:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=17)** That part that takes the data from the left and puts it to the right.
>
> **[0:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=20)** Of course, there's multiple steps.
>
> **[0:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=23)** This pipeline is not just a single thing.
>
> **[0:25](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=25)** From a macro view, that's all that engineering is.
>
> **[0:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=30)** So what engineers do is we design, build, and we actually maintain these systems.
>
> **[0:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=38)** And the purpose for what we are doing this is we want to collect the data from the source, we want to store it somewhere, make it accessible for people, for systems, that then analyze the data.
>
> **[0:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=52)** Pretty straightforward, right?
>
> **[0:55](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=55)** What are examples for this?
>
> **[0:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=57)** The first example I have is where I'm actually coming from, what I did a lot in my past, is processing data from IoT devices, from the Internet of Things, where a device has a sensor that's on the internet, it's going to send you data and a user on a user interface might want to then look at that data from that device.
>
> **[1:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=78)** Could also be that you have an ecommerce store and the analytics team wants to improve the stock that they hold or the sales optimization that they want to do.
>
> **[1:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=94)** So for that, they would need to analyze actually the order data, and the engineer then takes the order data and makes it available to the analyst.
>
> **[1:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=104)** The other part would be a bit more complicated, where you want to analyze the web traffic and the sales together to gain insight into, okay, how are people actually behaving on our website, what are they doing, at what point are they buying and what are they buying, to improve the experience for the user and also to make more sales.
>
> **[2:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=127)** So included in that, with what we've talked before, design, build, maintain systems, infrastructure and end-to-end pipelines.
>
> **[2:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=137)** That's something that the engineer is responsible for.
>
> **[2:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=141)** The infrastructure, that is actually like the cloud and the systems on the cloud that are needed for processing the data databases, processing frameworks, scheduling tools, message queues and more, and we are in charge of the end-to-end pipelines usually.
>
> **[2:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=160)** Basically, we will use the infrastructure that is there to create complex processes to make the data available, where we query the data from sources, where we process the data, multiple steps, do some transformations, do some data cleaning, do some data modeling, and then store it in a destination.
>
> **[3:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=181)** So a pipeline, if you'll then look at it in a bit more complex way, and this is still a very, very simple ETL pipeline where we have our data left in our data source, we have our data integration tool or our data integration process that extracts the data out of the source, then we do 1, 2, 3, n transformation steps, we do data cleaning, and after that we store it into a data store that we've modeled where then later the data can be used by a person.
>
> **[3:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=214)** So a person can go into a visualization tool and then request the data from our store.
>
> **[3:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=221)** The skills data engineers need very often is first of all software engineering because we're developing a lot of code, so software engineering, coding, we need to collaborate with our colleagues, with the business and so on, and we need to do operations also for our software, for our developed pipelines.
>
> **[4:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=244)** Then we need to do data integration.
>
> **[4:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=246)** That was the left part in that image of the data engineering process, right?
>
> **[4:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=252)** There are some sources and the sources can vary a lot from online tools to databases to message queues to APIs.
>
> **[4:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=262)** We need to work on how can we integrate these sources into our pipelines so that we can then later process the data.
>
> **[4:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=270)** This might be a streaming data, where the data comes in constantly, it might also be batch processing, where we schedule processes.
>
> **[4:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=278)** And then of course databases.
>
> **[4:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=280)** That database is one of the basics for an engineer, at least relational database knowledge where we know, okay, this is how we can design a database and this is how we can use the database.
>
> **[4:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=293)** Of course, they're not just relational, we know all kinds of stores with experienced, relational, NoSQL databases like Evalue stores and wide-column stores and documents stores.
>
> **[5:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=306)** We also know data warehouses or data lakes.
>
> **[5:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=311)** Another part is analysis.
>
> **[5:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=312)** We're also working on analysis, but not the way that you might think.
>
> **[5:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=317)** Not like a scientist where we analyze the data to get some business value, but we are analyzing the data to better understand what's happening in our system, so we most of the time use quality data from our systems, from our processes to analyze what's actually happening.
>
> **[5:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=336)** As you can see, engineering is critical.
>
> **[5:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=338)** A lot of people think, "Let's have some data and let's have a scientist or an analyst and we are going to have a nice system."
>
> **[5:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=346)** That thing in between the source and the thing or the person that is actually using the data, that pipeline, that is super important.
>
> **[5:55](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=355)** That is critical.
>
> **[5:55](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=355)** Without the engineering in between, you will not have automation, you will not have a productive system.
>
> **[6:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=362)** Now, who do we work together, the data engineers?
>
> **[6:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=366)** Very often we're working with analysts because they sit on the right side, they work with the data, same with scientists, but we're also working with the business because we need to understand what are the business needs, what do we actually solve here, what are our goals, so we work with the business, and fourth, last but not least, we're also going to work together with other engineers.
>
> **[6:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=393)** It might be data engineers, might be some hardware engineers, some system engineers, because like in that example on the left side, that database that is the source for our data, that might be owned by another engineer in the company and that engineer is responsible, so we need to talk to this engineer and we need to figure out how we can work together.
>
> **[6:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-data-engineer?u=76281980&t=416)** All right, let's look next at the phases of a data project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), from. (1), from, (1), interface (1), for. (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Env Vars:** etl (1)
> **Speakers:** - [instructor] (1)

#### All important data engineering project phases
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=0)** - [Instructor] When you look at the phases of data projects you always have four phases.
>
> **[0:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=4)** You have the planning phase, you have the design phase, the actual implementation, and then the operations.
>
> **[0:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=11)** But you can look at this like a cycle that once you are at the operations phase, once everything is designed, once everything is implemented and now it's running in production, you are going to start from the beginning to make improvements.
>
> **[0:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=27)** So you're making improvement cycles here.
>
> **[0:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=29)** You start again, plan everything, then do the design, then do another implementation and another operations.
>
> **[0:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=37)** Now, let's look at the planning.
>
> **[0:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=39)** Think of for the planning like a pyramid.
>
> **[0:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=42)** And the most important thing for the pyramid is having a good foundation.
>
> **[0:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=49)** The foundation for every project is defining or understanding the requirements of what is it that we want to achieve with this project?
>
> **[0:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=59)** What are our goals?
>
> **[1:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=61)** What is the goal for the business in this?
>
> **[1:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=65)** Then once we understood the goals, we need to come up with the right KPIs, the right key performance indexes that we are going to measure and we are going to use for our development.
>
> **[1:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=80)** After that, we need to understand the status quo, because you don't want to start in the green field always.
>
> **[1:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=87)** You want to figure out, okay, what do we have right now?
>
> **[1:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=91)** What works, what doesn't work?
>
> **[1:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=94)** What do we need to do?
>
> **[1:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=97)** And once you have that knowledge, most likely somebody from the business or who is in charge of the project is going to come to you and is going to ask, okay, how much money is this going to take us, and how much time is this going to take us?
>
> **[1:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=110)** So you need to eyeball the efforts that you need for this project.
>
> **[1:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=118)** There are two design goals that you need to look at.
>
> **[2:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=121)** It needs to be quick and it needs to be cheap.
>
> **[2:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=124)** That's always the thing that is important.
>
> **[2:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=127)** And there is a trade off, right?
>
> **[2:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=129)** Sometimes it takes long and it's costing a lot of money, but it's good, or it's quick, it's cheap, and it's not that good, right?
>
> **[2:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=140)** So there's always a trade off between how well designed, how good is this going to be, and how much money and time it's going to take us.
>
> **[2:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=148)** So take care of this.
>
> **[2:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=150)** Look at time, the money, and the quality of the work, the quality of the design.
>
> **[2:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=158)** So within the design phase, what we need to look at is the efforts.
>
> **[2:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=162)** Basically, what do we think in the design phase is going to be the effort for the implementation versus what's going to most likely be the real implementation efforts.
>
> **[2:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=173)** There is always a difference, but we're going to look at how to solve that problem.
>
> **[2:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=178)** Then we're going to look at choosing the right architecture and frameworks, predicting costs and scaling better, and also the right benchmark of the existing tools.
>
> **[3:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=191)** In the implementation phase, this is where we're going to look at the issues that can happen during the implementation.
>
> **[3:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=199)** We're going to look at defining work packages and responsibilities for these packages.
>
> **[3:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=204)** How to test stuff, testing the right parts.
>
> **[3:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=209)** This is also something where documentation comes into play because you need to have a good documentation.
>
> **[3:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=215)** What do you need to take care of there?
>
> **[3:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=218)** And also ensuring governance and the data catalog.
>
> **[3:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=223)** In the fourth phase of operations, this is where monitoring is very important.
>
> **[3:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=230)** Set up monitoring, finding the right approaches to finding and fixing bugs.
>
> **[3:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=238)** This is also where we need to take care of training other staff, training our colleagues, current or new ones, on the pipelines on the things that we have built.
>
> **[4:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=251)** And operations is also the last but the first point of the cycle again, right?
>
> **[4:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=258)** Because the next we want to improve this, we are going to start with the planning again.
>
> **[4:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=264)** So, four phases.
>
> **[4:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=266)** Planning, design, implementation, and operations.
>
> **[4:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/all-important-data-engineering-project-phases?u=76281980&t=269)** Now, before we get into planning, let's look at some general problems that I see all the time and you need to know.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1), this, (1)
> **Prerequisites:** you need to have (1), set up (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### General challenges faced
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=0)** - [Instructor] Before we get into each stage and the problems in the stages of a data project, I want to talk about the general problems that data engineers face.
>
> **[0:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=9)** And you can think of this like a pyramid where the foundation, the foundation is super important but the foundational problem is usually miscommunication.
>
> **[0:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=18)** And for miscommunication, everything else goes wrong, right?
>
> **[0:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=21)** So you have miscommunication, and because of the miscommunication the requirements are changing all the time.
>
> **[0:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=30)** And because the requirements are all over the place, you're going to set unrealistic milestones.
>
> **[0:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=36)** And because these milestones are unrealistic, you're going to have budget issues and time issues.
>
> **[0:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=42)** So, keep that in mind.
>
> **[0:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=45)** These are general problems, but the foundation here is always communication that needs to be really, really good.
>
> **[0:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=54)** Of course, we're also going to look here quick into supporters and adversaries, but let's first look into miscommunication.
>
> **[1:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=63)** How can you communicate well?
>
> **[1:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=66)** So, a few things that you need to look at is you need to be clear and concise in your words.
>
> **[1:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=71)** Don't ramble on about, try to be to the point and try to make sense in small amounts of words because people need to understand what you're talking about.
>
> **[1:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=81)** Be transparent, and do me a favor, leave out your emotions, or at least try.
>
> **[1:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=88)** I don't like it when people hide their true intentions or hide their opinions because for a project it is good that people are talking about their opinions, people share their ideas.
>
> **[1:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=103)** It will make everything better.
>
> **[1:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=106)** But, some people get emotional.
>
> **[1:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=109)** Try to leave out the emotional stuff.
>
> **[1:51](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=111)** It helps absolutely nobody.
>
> **[1:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=114)** So share your ideas, as I said, and don't worry about others.
>
> **[2:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=120)** It's a lot better to not have regrets and to share openly what your ideas are.
>
> **[2:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=126)** Listen to other's arguments and ask questions because this will help you to get into a conversation and this will make stuff a lot clearer.
>
> **[2:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=136)** Another thing is be open to compromise.
>
> **[2:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=139)** Sometimes people sit on their opinion and don't change it.
>
> **[2:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=146)** There is always room for compromise and it's super important to realize that.
>
> **[2:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=153)** Don't be a flag in the wind though, that your ideas or your opinion changes all the time.
>
> **[2:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=159)** Make up your mind.
>
> **[2:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=160)** If it's super important to you, be difficult.
>
> **[2:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=164)** Don't be easy.
>
> **[2:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=166)** I've been difficult so many times.
>
> **[2:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=169)** You can imagine how difficult, but if it's okay and I think that's a point where I can compromise, then try to find a compromise, okay?
>
> **[3:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=180)** Another part for communication is write things down at the end of the meeting.
>
> **[3:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=185)** So write a meeting minutes and send this out to people so that everybody knows, okay, this is what we discussed, this is what we decided, and send that to the everybody who was there.
>
> **[3:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=198)** Send it to people who should have been there, but weren't.
>
> **[3:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=201)** You could also send this to leadership for information, maybe not directly, but in CC, in carbon copy.
>
> **[3:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=209)** And if stuffer comes up in these arguments and you can't solve it, then escalate it quickly to the leadership because they are then going to bring everybody back onto the table and the communication is going to start again.
>
> **[3:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=224)** Also, update your team as much as possible.
>
> **[3:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=227)** Of course there is not going to be everybody there all the time, so take care of your team, inform them what's going on.
>
> **[3:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=236)** Now, the problem that I said before, changing requirements.
>
> **[3:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=239)** That often leads from miscommunication, and this is why you need to work together on the specification of the requirements.
>
> **[4:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=248)** Work together on this and together decide on deadlines.
>
> **[4:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=252)** When is the deadline that requirements for this part of the project can change?
>
> **[4:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=259)** Because then everybody knows in the specification, okay, we can change something until that point, and from there on they're going to start maybe with the implementation and then it's off limits.
>
> **[4:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=272)** When you do that, get your counterpart with whom you're doing the specification, sign off on it, and send this out in the minutes, again update your team if necessary, and if it's a difficult person that you know from experience then send this out to the leadership.
>
> **[4:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=290)** I had to do this actually a few times before.
>
> **[4:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=294)** Unrealistic milestones is also something.
>
> **[4:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=297)** I know the business always wants to have it quicker, have it shorter, have it cheaper, but if the milestones and the budget is going to be unrealistic, make sure to raise your concerns immediately.
>
> **[5:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=313)** Make sure your concerns are documented.
>
> **[5:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=317)** If you want, create an overview of your opinion, of your ideas, and show the consequences and then send this to somebody.
>
> **[5:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=327)** The main point here is no regrets.
>
> **[5:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=330)** If you're unhappy with something, if you don't agree to something, say that you don't agree and tell others about it.
>
> **[5:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=338)** And document it so nobody after two or three months can come back to you and can say, "Yeah, well you agree to this, right?"
>
> **[5:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=347)** Now, one thing, especially in larger companies, that is very difficult is some people might work with you, some people actually might work against you.
>
> **[5:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=359)** So you need to find out who has the right motivation to support you in your journey.
>
> **[6:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=364)** I know, in theory, always everybody's happy and we all collaborate, but it can be very, very tricky.
>
> **[6:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=372)** So find out who supports you and who doesn't.
>
> **[6:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=376)** Bring these supporters on board, update them, inform the leadership, communicate with your team.
>
> **[6:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=383)** And sometimes you have somebody there who might seem to lack motivation.
>
> **[6:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=389)** Find out why.
>
> **[6:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=390)** It's most likely it's a simple thing.
>
> **[6:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=393)** It's, again, it's communication, communication communication here.
>
> **[6:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=398)** To find out who you need to handle and how, you can do a short stakeholder analysis, which is a really, really cool tool.
>
> **[6:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=406)** It doesn't need a lot of effort, but it's very, very informative.
>
> **[6:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=413)** Make a graph like this where on the Y-axis you have power, low to high, and on the X-axis you have interest, low to high, and then you make four quadrants.
>
> **[7:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=425)** Everybody who is high interest, high power, these people are going to have a direct influence on your project, so you need to manage them closely and help them understand what you're doing and get together with them, right?
>
> **[7:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=442)** Then you have people that are in high power, but not a lot of interest, so you keep them satisfied, keep them informed.
>
> **[7:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=450)** If they have questions, you answer their questions.
>
> **[7:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=452)** If they have ideas, you think about the ideas, you try to implement the ideas, and give them feedback.
>
> **[7:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=460)** Then you have other people with low interest and low power.
>
> **[7:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=466)** These are the people that you need to monitor because sometimes these are the people that can become problematic for you.
>
> **[7:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=474)** And for people that have low power but high interest, these might be a supporter so keep them informed, keep them on board.
>
> **[8:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=484)** You can see the main thing here communication, communication, communication.
>
> **[8:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/general-challenges-faced?u=76281980&t=489)** Now let's get into the planning phase and let's look at understanding the status quo.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), find (5)
> **Code Keywords:** super (3), let (3), try. (1), raise (1), this, (1)
> **Documentation:** specification (3)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 2. Planning

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding the status quo
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=0)** - Let's look at the first part of the planning phase and that is figuring out the status quo.
>
> **[0:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=6)** A lot of people skip this but it's super important to figure out what is the current status because you don't want to always start reinventing the wheel and start on the green field, right?
>
> **[0:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=20)** Unfortunately, too many people do this.
>
> **[0:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=23)** So what do you need to look at?
>
> **[0:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=26)** First, look at who is involved in this project.
>
> **[0:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=30)** Who can I talk to?
>
> **[0:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=32)** Who can I work with?
>
> **[0:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=34)** I mean the people and the roles of these people.
>
> **[0:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=39)** Then look at the goal of the platform or of the system that you're building.
>
> **[0:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=45)** Figure out what is already there that supports this goal or what was the current goal with the system as it is.
>
> **[0:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=58)** When you do that, also look into which systems are in place right now.
>
> **[1:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=65)** What is it?
>
> **[1:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=67)** What is working with this that is in place with this pipeline, and where are the problems right now?
>
> **[1:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=76)** Then you need to figure out why do we need to redesign or why do we need to improve parts of this?
>
> **[1:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=83)** Also, look at scalability.
>
> **[1:25](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=85)** How does the current system scale?
>
> **[1:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=87)** Are there any problems with the scaling of that system right now?
>
> **[1:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=90)** Are there upper boundaries where, okay, if we reach that amount of clients, then it's over.
>
> **[1:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=98)** We are actually stalling the system and nothing works anymore.
>
> **[1:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=102)** What are the options here?
>
> **[1:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=105)** Look at the cost.
>
> **[1:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=106)** How much does this cost right now?
>
> **[1:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=109)** Is this a cost efficient solution as it is?
>
> **[1:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=113)** Super important.
>
> **[1:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=114)** And also look at how does this fit into the larger strategy of the company.
>
> **[2:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=121)** Is this where the company is going, is actually now if this goes towards, let's say, a data warehouse, let's say Snowflake.
>
> **[2:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=131)** If this old system is built on Snowflake, is the company actually moving towards Snowflake or are we moving in a different direction?
>
> **[2:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=142)** Super important.
>
> **[2:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=143)** So look at these topics.
>
> **[2:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=144)** Try to understand the status quo.
>
> **[2:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=147)** Try to figure out what's good, what's not good, where are the issues?
>
> **[2:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=150)** Where do we need to improve this?
>
> **[2:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=152)** This is already a good step if you started figuring out the status quo and not always try to reinvent the wheel 'cause most likely people already thought of some really, really good solutions.
>
> **[2:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/understanding-the-status-quo?u=76281980&t=163)** All right, let's look next at requirements.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), super (3), this. (1)
> **Speakers:** - let (1)

#### Collecting the right requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=0)** - [Instructor] Let's look at requirements, because the requirements are very important in the early phases of your project.
>
> **[0:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=7)** And it's also where a lot of engineers struggle with.
>
> **[0:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=10)** Usually they struggle here because of two problems with the KPIs, with the key performance indicators.
>
> **[0:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=16)** One is that the engineers don't know the KPIs, or don't know all the KPIs.
>
> **[0:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=22)** Or, that the KPIs that they're told are actually the wrong KPIs for what they want to do.
>
> **[0:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=30)** Both cases make it very, very difficult to build pipelines to build the project and solve the problems that the business requires.
>
> **[0:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=39)** Looking at wrong KPIs, very often there are a few things that come out of having wrong KPIs, and the problem is they lead usually to unexpected problems.
>
> **[0:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=50)** So you build something around the KPIs that you have, and then you figure out, okay, there's another thing that I haven't looked at, and now I'm having problems because I need to integrate this other KPI to solve my goal.
>
> **[1:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=66)** This also leads to additional costs, and this, in worst case, can also make it that you need a early redesign.
>
> **[1:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=78)** 'Cause now you've built it, everything is done, and there are coming new KPIs in, and now this doesn't fit anymore to what you've built.
>
> **[1:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=87)** Usually there are two types of KPIs that you need to look at, the project KPIs.
>
> **[1:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=94)** That's usually oriented towards the bigger project, towards the management, towards the business.
>
> **[1:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=101)** And then there are the day-to-day KPIs.
>
> **[1:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=104)** These KPIs are usually more technical, for the implementation directly, and also for a monitoring that you need to implement during operations than later.
>
> **[1:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=116)** Project KPIs.
>
> **[1:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=117)** That's something that you find all the time, like budget, budget per month or budget per year, so that you know what you can build and which tools you can use, you know, the frame in which you operate.
>
> **[2:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=132)** The expected required scalability, because then you know, okay, our system is running at this level today, and at that level in six months, I have a few more details on that in a second.
>
> **[2:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=146)** Then you have something with data or system availability.
>
> **[2:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=150)** Which for data availability would be something like, for instance, data retention.
>
> **[2:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=155)** Am I going to keep all the data, forever, or are we throwing away certain data after six months?
>
> **[2:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=163)** Super important.
>
> **[2:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=165)** System availability is something like, okay, I have a database.
>
> **[2:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=169)** Now what level of availability can this database offer me?
>
> **[2:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=174)** Is this a database that is available 99.99999% of the time?
>
> **[3:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=181)** Or is this a lower availability, because you need to work around that later.
>
> **[3:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=186)** We're going to talk about that for problem solving.
>
> **[3:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=190)** Then you have backup and recovery.
>
> **[3:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=193)** An important topic that also needs to have its own KPIs, like are we doing backups?
>
> **[3:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=198)** Are we having a way of making sure that our data is secure and that if something goes wrong, we can actually also recover it?
>
> **[3:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=207)** So backup and recovery, super important.
>
> **[3:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=212)** In modern tools like the NoSQL databases very often use scale horizontally and the data is replicated automatically.
>
> **[3:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=221)** But for typical relational databases, that is something you need to factor in, for instance.
>
> **[3:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=227)** But your KPI is also important for the data sources, and for the integration of these data sources, what are the data sources, how much data can they deliver to me?
>
> **[3:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=237)** What are the upper boundaries of how much can I request?
>
> **[4:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=243)** Which data sources do I need to integrate by when?
>
> **[4:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=248)** Stuff like that.
>
> **[4:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=249)** And then a last point, security and privacy.
>
> **[4:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=252)** Okay, now, what are the requirements here for internal and external measures?
>
> **[4:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=258)** How do I need to secure my data for internal access?
>
> **[4:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=264)** Think about privacy, like, do I need to mask data so that certain amount of people cannot see the data, the addresses of people in the database?
>
> **[4:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=276)** That's more privacy, security would be, how are, for instance, the access patterns.
>
> **[4:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=282)** Who can access which tools, who can access which systems, who's allowed to do what?
>
> **[4:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=287)** All this needs to have KPIs and specifications in the requirements of your project, otherwise, you're going to be in big trouble.
>
> **[4:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=299)** Let's have a quick spotlight at scalability, so what would be important for scalability to look at?
>
> **[5:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=306)** One of the things are predictions.
>
> **[5:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=309)** Like, let's set up our KPIs, how is this going to behave in six months' time, how is this going to behave in 12 months of time, like what are the predictions for the data volume, the data that comes in, or expected users that are going to work on the systems.
>
> **[5:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=329)** Because that influences the scaling.
>
> **[5:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=334)** Is it okay with my relational database, can I scale this up, can I make the database bigger and bigger and more powerful?
>
> **[5:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=341)** Or am I getting, even in 12 months or in six months, to a point where the database cannot grow anymore and I'm getting stuck and I need to find another way, like horizontal scaling, like using a NoSQL database or something.
>
> **[5:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=357)** - Also KPIs towards the team, Outlook of the team size, for instance, are important, because that influences how you need to build your project, how you need to build your pipelines, how you need to set up the systems.
>
> **[6:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=373)** Do you have the operations capability in six months to actually supply this, or do you need to find a simpler solution that might not have that much of power or capability, but is then easier to service later?
>
> **[6:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=389)** Or also the expansion capability of your tools, of your systems, of your processes.
>
> **[6:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=398)** Can you expand the amount of data that is getting processed in there, is the system able to support this?
>
> **[6:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=407)** So these were all project KPIs.
>
> **[6:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=410)** Let's look at just a few day-to-day KPIs.
>
> **[6:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=414)** And again, day-to-day KPIs are usually the ones that you have where you are going to monitor them on a daily basis later, and that are very technical.
>
> **[7:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=426)** And things like that is usually the data volume.
>
> **[7:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=429)** Which data volume do you need to process, again, predictions from today to six, 12 months out.
>
> **[7:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=437)** The data quality, for instance, as well.
>
> **[7:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=440)** Like are there KPIs that indicate how well the data source is able to send me data?
>
> **[7:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=449)** Basically how much errors are we going to in there?
>
> **[7:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=452)** How much missing data are we going to have in there?
>
> **[7:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=456)** Is there already information on that, to find out the quality?
>
> **[7:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=460)** Another KPI would be processing latency.
>
> **[7:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=463)** Right, so you're getting data, you sent this through your whole pipeline.
>
> **[7:48](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=468)** How much time is expected?
>
> **[7:51](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=471)** The go by from getting the data to finishing the processing.
>
> **[7:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=476)** What are the boundaries here, is one second enough?
>
> **[8:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=481)** Or is two seconds already too much?
>
> **[8:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=484)** Is half a second too much?
>
> **[8:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=487)** That is very important.
>
> **[8:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=488)** Query performance, for instance.
>
> **[8:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=491)** Exactly KPIs of, how are people going to query the data?
>
> **[8:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=495)** How much data are they going to query?
>
> **[8:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=498)** How much people are working on this?
>
> **[8:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=501)** And with this you can basically figure out, do I have the right data storage solution for this use case in the future?
>
> **[8:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=510)** Resource utilization.
>
> **[8:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=513)** Something very typical that, okay, we don't want to go above 60% of utilization on the database, otherwise we don't have enough time to scale or stuff like that.
>
> **[8:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=529)** The typical hardware topics.
>
> **[8:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=533)** As you see, it has a lot to do with KPIs, collecting the right KPIs, defining the right KPIs.
>
> **[9:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/collecting-the-right-requirements?u=76281980&t=540)** So let's look a bit more into KPIs and how you can define and recognize good or bad KPIs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (2), super (2), case, (1)
> **CLI Commands:** find (4), make (3)
> **Analogies:** for instance (6)
> **Env Vars:** kpi (3)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1), - also (1)
> **Versions:** 99.99999 (1)

#### Defining good KPIs
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=0)** - [Narrator] As we've seen in the last video, KPIs are super important for collecting the right requirements and then understanding exactly what to do, what the goals are.
>
> **[0:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=11)** Now with KPIs, there are usually two problems, you get KPIs from others and you need to figure out is this a good KPI, so does that make sense, or is this a bad KPI or if you come up with KPIs yourself, you need to set them correctly, you need to create good KPIs.
>
> **[0:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=32)** So let's, in this video, take a look at that because bad KPIs is always a problem because they allow a lot of interpretation and interpretation that leads to confusion that leads to bad communication that leads to systems not built right that need leads to redesigns that leads to more effort to more cost that leads to problems.
>
> **[0:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=59)** So let's look at how to define KPIs.
>
> **[1:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=63)** The thing is with good KPIs, first of all, the KPIs need to be relevant and I mentioned this before, sometimes you might get KPIs, but these KPIs are not really relevant for you for you to build your platform, to build your pipelines, so the KPIs need to be relevant for your goals and need to provide actionable information.
>
> **[1:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=88)** They need to be very specific, so there's no broad KPIs.
>
> **[1:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=94)** Broad KPIs are terrible and measurable.
>
> **[1:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=97)** That's something as a software engineer or when you're working projects, usually you know this of measurable goals.
>
> **[1:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=106)** You need to make your goals measurable all the time.
>
> **[1:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=109)** So relevant, specific, measurable, and also they need to have a time in it.
>
> **[1:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=117)** So it needs to be a specific time mentioned until when does this need to happen, until when does this need to be done?
>
> **[2:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=126)** Three things that make good KPIs and where you see good KPIs immediately is that they're easy to understand, so there's no complicated language.
>
> **[2:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=136)** If you read them, you immediately know what is going to happen.
>
> **[2:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=139)** They are comparable.
>
> **[2:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=140)** That means you have the KPI and you are measuring it and it's very easy to compare what you have to that KPI and also they are reliable, that they're not going to change, they're going to stay the same and they're very hard facts.
>
> **[2:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=161)** Alright, let's look at a few KPIs.
>
> **[2:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=164)** How are you going to define these KPIs now?
>
> **[2:48](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=168)** The center of this is always that you have an action, a detail, a value, a unit, and then a deadline.
>
> **[2:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=178)** That is something if you set a KPI, look for these things.
>
> **[3:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=184)** An action, his is what you need to do, a detail that explains that a bit more, then a measurable value and the unit, and until when does this need to be done?
>
> **[3:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=198)** Let's look at a few examples.
>
> **[3:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=199)** So one example would be decrease end-to-end processing time by five seconds until 31st of March, 2023, right?
>
> **[3:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=212)** There's the action, you need to decrease something.
>
> **[3:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=216)** Then there's the detail, what do you need to decrease, the end-to-end processing time, then there's the value by five, five what, the unit five seconds, okay, I need to decrease the end-to-end processing time by five seconds, and then there's the time, the deadline until 31st of March.
>
> **[3:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=237)** Ah, okay.
>
> **[3:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=238)** That is a KPI that you can work with.
>
> **[4:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=241)** That is a goal that you can work with, right?
>
> **[4:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=245)** Very clear.
>
> **[4:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=246)** The other way around as well.
>
> **[4:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=247)** Increase system availability to 99% per month by 31st March, 2023, right?
>
> **[4:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=256)** You need to increase, what do I need to increase, system availability.
>
> **[4:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=261)** You could add another detail here for our database to 99.99% per month, so this is measured per month and 99% needs to be available in each month by 31st of March.
>
> **[4:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=277)** Decrease pipeline errors to one per day.
>
> **[4:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=281)** There's missing the date, so this is not as good, right?
>
> **[4:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=285)** So we could say tomorrow, but this gives you the idea here.
>
> **[4:51](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=291)** Decrease, okay, we need to decrease the pipeline errors, okay, for our whole pipeline to one error per day.
>
> **[5:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=300)** Another example would be implement log monitoring that makes it possible to identify the root cause within two minutes by next quarter, right?
>
> **[5:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=309)** Okay, so you need to implement something here.
>
> **[5:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=312)** You need to implement lock monitoring that makes it possible to identify root cause of the errors within two minutes by the next quarter.
>
> **[5:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=322)** So keep that in mind.
>
> **[5:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=324)** Good KPIs need to have a few pieces of information there.
>
> **[5:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=329)** Check the KPIs that you get.
>
> **[5:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=331)** They might be called KPIs.
>
> **[5:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=333)** They also might be called goals.
>
> **[5:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=337)** Check them.
>
> **[5:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=337)** Do they have an action?
>
> **[5:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=340)** Do I need to increase something?
>
> **[5:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=341)** Do I need to decrease something?
>
> **[5:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=343)** Do I need to hold something steady?
>
> **[5:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=345)** Do I need to implement something or remove something?
>
> **[5:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=349)** Then the detailed explanation of what I need to do with the value and a unit and a deadline.
>
> **[5:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=357)** So much for the KPIs.
>
> **[6:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=360)** I hope this helps you a lot.
>
> **[6:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=362)** Maybe go through the KPIs that you have already gotten or that you have seen.
>
> **[6:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=368)** Try to remember what you've seen in the past.
>
> **[6:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=370)** Most likely you're going to find things that weren't as good and that then give you problems.
>
> **[6:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/defining-good-kpis?u=76281980&t=378)** Next, let's look at estimation of effort.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), super (1)
> **Env Vars:** kpi (6)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2)
> **Versions:** 99.99 (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [narrator] (1)


### 3. Design

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Keeping implementation efforts in mind
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=0)** - [Instructor] The first thing that you need to keep in mind in the design phase is actually the efforts of the implementation later.
>
> **[0:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=7)** Because you might do the design and some other people are going to do the implementation or you might do the design and you and a team needs to do the implementation.
>
> **[0:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=17)** And the problem here is supposedly super clever designed by you can actually have unforeseen consequences than later in the implementation.
>
> **[0:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=27)** There are these memes, expectation versus reality where the designer actually design something, and then there are these expectation versus reality memes that you find on the internet a lot.
>
> **[0:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=40)** Expectation is what the designer actually designed and then the reality is what the team built which usually looks a lot different or terrible compared to what the designer designed.
>
> **[0:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=53)** So that is something super important.
>
> **[0:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=57)** It's something that you need to keep in mind.
>
> **[0:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=59)** You might think complexity is the only factor here.
>
> **[1:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=62)** It's actually not complexity.
>
> **[1:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=65)** Yes, of course, complexity can be a big factor that you think you design something super clever and then it's too complex actually for the implementation.
>
> **[1:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=74)** And the implementation team is going to take too long take.
>
> **[1:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=78)** It's going to cost too much, and so, it's going to be watered down and not look as expected.
>
> **[1:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=84)** That can be, but that is not the only factor and here's what you need to look for.
>
> **[1:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=91)** Typically, in data engineering is, again, we were talking before with the infrastructure and the pipelines.
>
> **[1:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=98)** These are the two things that engineers do.
>
> **[1:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=101)** You need to think of, okay, which systems are we actually using?
>
> **[1:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=105)** Are we using infrastructure as a service where the cloud for instance, give us the virtual machines and we work with them?
>
> **[1:55](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=115)** Are we using software as a service tools where we just need to put our code there and everything is done?
>
> **[2:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=121)** Or are we using platform as a service where we're just doing click, click, and everything is ready?
>
> **[2:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=128)** You need to keep that in mind because the implementation efforts for these are very, very different.
>
> **[2:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=136)** Also, you need to think of, okay, how easy is it actually to work with these tools?
>
> **[2:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=142)** You can have something that is super nice.
>
> **[2:25](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=145)** You can have Spark, you can set up a super nice processing with Apache Spark, but for beginners, it's not very easy to work with.
>
> **[2:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=157)** Generally, it's not super easy to work with.
>
> **[2:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=159)** I remember a case back a few years at work where it was actually the case of doing machine learning, and one of my data scientist colleagues was saying like, "Oh yeah this library, we can use this library.
>
> **[2:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=173)** This library is great for doing machine learning, but it's super difficult to get the data in and get the results out."
>
> **[3:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=182)** So it's super difficult to use.
>
> **[3:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=185)** The actual training is super nice, but the surrounding is terrible, and of course, we didn't do that than later.
>
> **[3:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=193)** We didn't use that library.
>
> **[3:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=195)** We didn't use that tool.
>
> **[3:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=197)** Keep that in mind.
>
> **[3:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=198)** How easy is it to work with?
>
> **[3:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=200)** Because that is a big factor.
>
> **[3:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=202)** Also, another factor is like are the tools mature, actually, that I want to use?
>
> **[3:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=210)** Are there updates for this regularly?
>
> **[3:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=213)** Is there a community working on this in the background?
>
> **[3:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=217)** How much service and support am I getting?
>
> **[3:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=219)** Do I need to solve every problem on my own or is there a support team that can actually help me on this?
>
> **[3:48](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=228)** Related to, is the tool easy to work with?
>
> **[3:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=232)** Do the skills of the team that you have actually fit to the selected tools?
>
> **[3:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=237)** In case of Apache Spark, like is my team actually able to code with Spark to write spark chops or am I doing a very clever design here?
>
> **[4:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=250)** But nobody can use it, although it might be easy to use, but it's going to take them some time to actually figure out how to use it.
>
> **[4:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=259)** Super important.
>
> **[4:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=260)** Do the skills of the team fit to the select tools?
>
> **[4:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=264)** Is it a flexible solution?
>
> **[4:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=266)** Sometimes, you're starting to build something and of course, we were talking about that earlier with the requirements that you need to set the requirements and have that in writing.
>
> **[4:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=276)** Sometimes over time, solutions are going to change.
>
> **[4:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=280)** You might be done with it and then in six months, in 12 months, something changes.
>
> **[4:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=286)** Is this a flexible solution or do I then need to do a complete redesign and then struggle in 12 months?
>
> **[4:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=294)** Or the other thing is do I really need a NoSQL database that allows me to horizontally scale the database performance by adding more servers or is this absolutely overkill and a normal relational database for this shop would actually be enough because we will never get to that point where we actually need that horizontal scaling and that NoSQL, and so, that clever design, that overhead that you're building is actually not necessary and will result in more effort, in more implementation work and more time, and more money spent on this whole thing.
>
> **[5:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=339)** So it's super important.
>
> **[5:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=342)** It comes back to what we've also talked earlier, time and money.
>
> **[5:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=346)** You need to keep that in mind.
>
> **[5:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=349)** Something very important for the implementation efforts.
>
> **[5:55](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=355)** Is this a solution that has a good time versus money factor?
>
> **[6:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=361)** Okay, Implementation Efforts.
>
> **[6:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/keeping-implementation-efforts-in-mind?u=76281980&t=363)** Let's talk next about Architecture and Frameworks.

> [!info]- Semantic Content
>
> **Code Keywords:** super (11), for. (1), let (1)
> **CLI Commands:** apache (2), find (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Choosing the right architecture and framework
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=0)** - [Instructor] Choosing the right platform or tools for your project can be a nightmare, super difficult.
>
> **[0:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=8)** There are a lot of factors to actually look at and here in this video, unfortunately I cannot tell you which is the best platform for your use case, which is the best cloud platform, which is the best processing tool.
>
> **[0:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=22)** However, what I can tell you is that there is actually more, there are more factors than just technicals that you need to consider.
>
> **[0:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=32)** As engineers, of course, we like to look at the technical stuff, we like to look at the details, but there are other factors, and most engineers don't even know what these factors are.
>
> **[0:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=44)** So let's look at these in this video.
>
> **[0:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=47)** One thing that engineers in big companies often don't know and ignore and then later regret is to find out: Is there actually a corporate strategy in place for the tools or platforms to use?
>
> **[1:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=62)** Sometimes a organization is going to give out the dogma that we need to build everything on GCP, we are going to put every project on AWS.
>
> **[1:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=76)** So it doesn't make sense for you to come up with the solution on Azure because the corporate strategy is going to be towards GCP, right?
>
> **[1:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=86)** So then you're going to start with the design, you're going to then show this to people, and at some point somebody's going to come to you and say, "Well, listen our corporate strategy is GCP, so you can't do Azure, it's not going to work."
>
> **[1:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=102)** So super important, figure that overall strategy of the company out.
>
> **[1:48](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=108)** Sometimes the company doesn't have that, very often companies have that.
>
> **[1:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=113)** Even I, as a startup, my own company, I have the strategy that I use Google and that I use Google Drive and Google Sheets and everything.
>
> **[2:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=122)** Even in these smaller organizations are always these strategies that you need to take care of.
>
> **[2:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=129)** This goes sometimes so far down that you need to ask, "Are we actually allowed to use these tools?
>
> **[2:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=138)** Is there a corporate governance in place that allows us or does not allow us to use these tools?"
>
> **[2:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=146)** Super important, I remember a case where back in the days I wanted to use, for some network scanning on my dev environment, I wanted to use Wireshark to actually read out network packages, and in the organization that I was, I actually wasn't allowed to use that tool because that was among the hacker tools or something, which is not.
>
> **[2:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=170)** But I think you get the point here.
>
> **[2:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=174)** In the design phase figure out: Is there a corporate strategy for the tools or the platforms?
>
> **[3:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=180)** And if you have something custom that you want to use, am I actually allowed to use this, to build this into a live project?
>
> **[3:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=190)** Privacy is also something you need to consider nowadays.
>
> **[3:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=194)** I know it's not the super popular topic, but believe me, I spent months on privacy, on GDPR, on making everything safe for projects.
>
> **[3:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=209)** So, which privacy regulations do you need to consider for which type of data, for which parts of the system?
>
> **[3:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=218)** You need to ensure that sensitive data is protected, that it's secure, that it's backed up.
>
> **[3:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=225)** You need to figure out the access permissions and who you grant access to and so on.
>
> **[3:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=233)** So, privacy is a big factor because also the tools that you're going to use and the platforms that you're going to use have some limitations there.
>
> **[4:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=246)** So think about privacy and also think about security here.
>
> **[4:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=251)** Then it comes back again to the efforts, we've talked about that in the last video.
>
> **[4:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=257)** Does the team actually have experience with these tools, experience with these techniques, experience with these cloud platforms?
>
> **[4:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=264)** Super important to have the right people on this job.
>
> **[4:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=268)** But also not just for building, because you could say, "Okay then, ah, we don't have the team for this.
>
> **[4:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=274)** Let's get somebody external, let's hire some company to actually build us this."
>
> **[4:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=282)** Ask yourself, "Is there then somebody who can actually maintain the solution?"
>
> **[4:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=290)** Because you need somebody who's doing operations, who's doing maintenance, doing updates, sometimes it's something stupid like updates that needs to be done.
>
> **[4:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=299)** So, is there somebody here who can actually maintain the solution?
>
> **[5:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=305)** Generally, of course, the simplest solution, we engineers like to make this difficult sometimes, like to overcomplicate things: Is this a scaling solution?
>
> **[5:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=316)** Is this flexible?
>
> **[5:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=318)** And will this offer a good value for money ratio?
>
> **[5:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=322)** So, think about that when choosing tools, think about that when choosing platforms, very important.
>
> **[5:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/choosing-the-right-architecture-and-framework?u=76281980&t=329)** Let's look next at predicting the costs and the scaling of the platform.

> [!info]- Semantic Content
>
> **Code Keywords:** super (5), let (4), this. (2), case, (1), this, (1)
> **Env Vars:** gcp (3), aws (1), gdpr (1)
> **CLI Commands:** make (2), find (1), aws (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Predicting costs and scaling better
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=0)** - [Presenter] A big problem is usually the costs, and specifically two things, that sometimes it's very, very hard to calculate the actual costs today or 12 months down the road, and, also, while in production that the costs are suddenly running away, because you need to scale the systems, and that is because of pricing models, and how pricing models work.
>
> **[0:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=28)** There's a simple and there's a difficult pricing model.
>
> **[0:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=30)** The simple pricing models or schemas is something with, for instance, software licenses, where you pay dollar amount per user per month, or per software installation per month.
>
> **[0:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=46)** Then there is, for instance, maintenance licenses, where you don't pay per user, but you pay for the company that is supplying you that is the vendor for this tool.
>
> **[0:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=57)** You purchase a maintenance license.
>
> **[1:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=60)** That means they are giving you support, they're giving you updates, they're maybe... Support means premium support via email within a day or via phone, and you pay an X amount of dollar per month.
>
> **[1:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=77)** Another thing that is very common on the cloud that is quite simple is instance size, that you pay per instance size, per dollar per hour, like, you are having a small instance, that might cost 50 cents per hour.
>
> **[1:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=93)** You might have a big instance with a lot of CPU, RAM, and GPU, and HDD, and that costs $10 per hour.
>
> **[1:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=101)** That's a typical scheme on the cloud for resources, and what you do is you take your instance size, times the number of instances, and then you have your costs.
>
> **[1:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=114)** Pretty simple, right?
>
> **[1:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=116)** Even simpler is data storage, where you're storing X amount of gigabytes per month, and the gigabyte is going to cost you X dollars.
>
> **[2:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=126)** These are very, very simple pricing schemas that will help you calculate the cost.
>
> **[2:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=131)** Now, it's not always like this, because there are also difficult pricing schemas, and that's what makes it difficult to calculate, especially on the cloud.
>
> **[2:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=141)** Very often you have a pricing schema that is based on data throughput, for instance, where you pay X amount of dollar per gigabyte throughput through your systems, and that makes it hard to actually calculate, right, because you need to figure out, "Okay, how much data is this going to be?"
>
> **[2:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=160)** Because the data is going to also look in different stages of your pipeline differently, so how much is this going to be?
>
> **[2:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=167)** Or you're going to be charged by processing time, dollars per minute.
>
> **[2:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=172)** Some companies even make this more complicated, that they use dollars per processing unit.
>
> **[2:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=178)** Very, very complicated, because, now, okay, let's say you have a process, you want to do some transformation, how long is this going to take in each step?
>
> **[3:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=188)** Maybe you have no idea how much it is.
>
> **[3:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=190)** It's very, very difficult to calculate.
>
> **[3:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=193)** Then you have other stuff like messages processed.
>
> **[3:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=197)** You pay X amount per a thousand messages.
>
> **[3:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=201)** Then you need to figure out, "Okay, how many messages is this going to be?"
>
> **[3:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=206)** So these are the difficult schemas that make it difficult to calculate, and it's going to be even more difficult, because what a lot of companies do is that they actually combine these simple and these more difficult pricing schemas, that you're going to pay for the processing time.
>
> **[3:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=222)** Like, for instance, with Databricks you're going to pay for the processing time, but you are also going to pay for the allocated resources on your AWS account, for instance, right?
>
> **[3:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=232)** So then you already have two models of pricing that you need to look at, and that you need to factor in, and that makes it very difficult, because, of course, the pipeline has many systems, many processes in between, so you need to take a lot of these in account.
>
> **[4:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=250)** How can you do this?
>
> **[4:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=252)** Well, the calculation, a good thing is, very often, cloud tools like AWS, they have a pricing calculator, so you can use the pricing calculator of AWS to actually come up with good numbers.
>
> **[4:25](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=265)** But you can also revert back, like I did many times before, to the old school spreadsheet, where you take spreadsheet, and you put in different scenarios, you play out different scenarios, and you put in the numbers, and then come up with scenarios that fit and that don't fit.
>
> **[4:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=285)** One thing that is very important in this, and I want to give this for you as a tip, a problem that people always have is Platform as a Service, Software as a Service, versus Infrastructure as a Service, because Infrastructure as a Service is usually seen as the expensive part.
>
> **[5:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=304)** Now, how this works though, is look at this chart.
>
> **[5:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=308)** This chart has the price on the Y-axis, and on the X-axis is tasks or data, right?
>
> **[5:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=315)** The amount of data you push through.
>
> **[5:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=317)** Blue here, the line with the steps, that is our Infrastructure as a Service, and the red line, that is proportional line, basically in 45-degree angle, is the Software as a Service line.
>
> **[5:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=331)** As you can see, in the beginning here, the Infrastructure as a Service is going to have overhead, is going to be more expensive.
>
> **[5:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=340)** And the Software as a Service one is going to be cheaper.
>
> **[5:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=343)** And that's why people always say, "Oh, whoa, whoa, Infrastructure as a Service, super expensive."
>
> **[5:48](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=348)** Eh, in the beginning, yes, but later, when you have more data, when you have more workload on your whole platform, on your whole pipeline, what is going to happen is, because the pricing schema of this is different, is based on the servers and not of on the throughput of the data directly, or of users, or of processing time, you're going to have these smaller steps here whenever you add new resources to your infrastructure.
>
> **[6:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=381)** But on the far right, the Infrastructure as a Service is actually lower than the Software as a Service.
>
> **[6:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=388)** That is just scaling one to one.
>
> **[6:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=392)** Right? So keep this in mind.
>
> **[6:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=393)** Keep this image here in mind.
>
> **[6:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=396)** If you can afford having that overhead in the beginning, go with the Infrastructure as a Service, because at the right side here, you're going to benefit from it.
>
> **[6:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=410)** If you don't have that, you might want to make that switch at some point, to make that switch from Software as a Service to Infrastructure as a Service.
>
> **[6:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=419)** That's why these tools like Apache Spark Standalone or Apache Kafka, or Airflow exist, at some point, the Software as a Service version of these tools is going to become too expensive, so they switch to the self-hosted Infrastructure as a Service version.
>
> **[7:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=442)** All right, let's look next.
>
> **[7:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=444)** We already were talking a bit about benchmarking here.
>
> **[7:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=447)** This is already part of the benchmarking.
>
> **[7:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/predicting-costs-and-scaling-better?u=76281980&t=449)** Let's look at benchmarking.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (3), this, (2), super (1), self (1)
> **CLI Commands:** make (4), aws (3), apache (2)
> **Env Vars:** aws (3), cpu (1), ram (1), gpu (1), hdd (1)
> **Analogies:** for instance (5)
> **UI Navigation:** switch to (1)
> **Speakers:** - [presenter] (1)

#### The right benchmarking of existing tools
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=0)** - [Instructor] A lot of people actually struggle with benchmarking because they are not sure what to benchmark, or they're trusting the wrong benchmarks, or they're only benchmarking the obvious, the performance, the throughput, the processing speed for instance.
>
> **[0:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=19)** So take a look at practical benchmarks.
>
> **[0:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=21)** First, look at the fit to the use case.
>
> **[0:25](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=25)** That means, for instance, for a database, you have a database model in mind.
>
> **[0:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=30)** Is that database that you selected actually able to implement that database model?
>
> **[0:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=35)** Is it possible to query the data with good performance like you want it to?
>
> **[0:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=40)** Because sometimes, databases are good to query the data from one angle.
>
> **[0:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=45)** If you come from another angle, it's terrible and takes forever.
>
> **[0:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=49)** Or when you look at a processing framework, is the processing framework able to process the data in a way that you need it?
>
> **[0:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=57)** I remember back in the days when I was working with Apache Spark and with Java on Apache Spark, I had problems that were super difficult to solve with Java.
>
> **[1:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=67)** Then I moved to Python, and it was super easy.
>
> **[1:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=69)** So take this into account, the fit to the use case, super important.
>
> **[1:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=76)** And also other practical things that you should benchmark.
>
> **[1:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=80)** Is this easy to use or is this difficult to use?
>
> **[1:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=83)** Does this have a super steep learning curve, that means takes forever to get good in, a big factor, especially when you look at the team.
>
> **[1:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=93)** How is that with the scalability in the future?
>
> **[1:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=96)** Can this system, this tool, actually scale with your requirements with the more throughput, the more processing on your platform?
>
> **[1:48](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=108)** And also, security benchmarks.
>
> **[1:51](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=111)** How is the security of the tool?
>
> **[1:55](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=115)** Now, what do you benchmark?
>
> **[1:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=117)** Always benchmark individual tools, never benchmark whole pipelines, because then you don't really know where the bottleneck is and so on.
>
> **[2:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=126)** Benchmark individual tools and never trust synthetic benchmarks.
>
> **[2:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=131)** I know a lot of companies love to take the standard tool, the gold standard, and compare their tool to the gold standard and show, "Wow we're quicker here, we're faster there, "we have more throughput, we have less latency," and so on and so on, but the benchmarks are maybe not real world.
>
> **[2:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=152)** So take this into account with a grain of salt, I personally never trust the benchmark.
>
> **[2:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=160)** What I do instead, and also recommend this for you, try to simulate real world workloads with your own data, your own data that you either have laying around, or you create your own synthetic data that looks like the data is going to look in the real world when this thing goes into production.
>
> **[2:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=179)** So super important, never trust synthetic benchmarks.
>
> **[3:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=183)** Do your own benchmarking.
>
> **[3:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=186)** Now what could you benchmark?
>
> **[3:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=188)** Things that people benchmark a lot on the technical side is throughput, processing time.
>
> **[3:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=194)** Also benchmark the scaling.
>
> **[3:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=196)** How much is this scaling for the future?
>
> **[3:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=198)** I've created for you a few charts.
>
> **[3:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=201)** Like in this chart here, I have processing time on the y axis and data throughput on the x axis, so the more data is coming in, the higher the processing time is going to be.
>
> **[3:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=214)** So the processing time is going up.
>
> **[3:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=217)** Now you can test this with a standard setup and figure out what are this line going to look like with the standard setup?
>
> **[3:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=225)** And you can say, "Okay, now let's scale.
>
> **[3:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=227)** "Let's add five servers, let's add 10 servers," and then do the same thing again up to your workload that you expect, and then see how this whole thing's scaling.
>
> **[3:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=237)** How is the data throughput, the processing time and so on, reacting to these new variables?
>
> **[4:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=246)** How do you do that?
>
> **[4:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=248)** I recommend that you do a few scenarios here.
>
> **[4:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=251)** Of course, this line is not a straight line, this has measuring points.
>
> **[4:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=256)** And I would recommend that you say, "Okay, now let's do a comparison.
>
> **[4:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=261)** "Let's create one point with a starting today value.
>
> **[4:25](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=265)** "We're going to go live today.
>
> **[4:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=267)** "This is going to be the value, "then maybe six months, "maybe 12 months forecasted throughput here "or 24 month throughput."
>
> **[4:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=277)** Because once you do this and once you do the scaling thing, you can overlay these lines, so you see then you have still the processing time over data throughput, and then you see your data points.
>
> **[4:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=290)** You can create a line and you can see, "Okay, if I scale here, this will actually work.
>
> **[4:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=296)** "This will scale really, really good, "or this will not scale."
>
> **[5:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=301)** Super important.
>
> **[5:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=303)** Also, another thing is when you benchmark latency that means something, for instance, a message queue data is coming in.
>
> **[5:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=311)** How long does it take until the data is being able to query it out?
>
> **[5:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=315)** Or with a database or with your processing the data is the processing starts, how long is it going to take till the processing is end?
>
> **[5:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=323)** So this latency, super important that you actually measure this.
>
> **[5:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=330)** Another thing, one side note here, for if you're on the cloud and if you have serverless functions, there is something like cold start of serverless functions.
>
> **[5:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=342)** And this is basically a latency from when the function is triggered to when the function actually starts.
>
> **[5:48](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=348)** And here I have an exemplary chart of these things, like how is this on AWS?
>
> **[5:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=353)** How is this on GCP?
>
> **[5:55](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=355)** How does this work on Azure?
>
> **[5:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=358)** So take good care of this, do good benchmarking, do benchmarking of scaling, do benchmarking of throughput, and so on and so on, and always look for bottlenecks then.
>
> **[6:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=367)** Because you're doing this for each individual tool, you can see, okay, which tool is going to be the bottleneck in my pipeline later on?
>
> **[6:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=375)** Right, because you're later going to chain these together.
>
> **[6:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=380)** Also, what you need to do is you need to look at environmental benchmarks, so these are not technical benchmarks but support.
>
> **[6:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=389)** Are you getting on-call support?
>
> **[6:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=391)** Are you getting premium email support?
>
> **[6:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=393)** Are you getting regular updates for this tool?
>
> **[6:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=396)** How is this tool maintained?
>
> **[6:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=398)** Is there a big community behind it?
>
> **[6:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=400)** Is there a big vendor behind it or is this a super niche project?
>
> **[6:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=404)** What are the pricing models?
>
> **[6:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=407)** Thinking back of the pricing.
>
> **[6:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=409)** Flexibility for use cases, right?
>
> **[6:51](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=411)** Is this just going to work for my use case, or maybe could we also roll this out that other people within the company can use this for their own use case?
>
> **[7:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=421)** Very important thing to benchmark.
>
> **[7:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=424)** Same goes for vendor lock-in.
>
> **[7:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=426)** Benchmark that if you build this, are you actually locked into that vendor?
>
> **[7:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=432)** If you build this on Databricks are you locked in Databricks and you can never go somewhere else without huge effort?
>
> **[7:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=438)** Super important to benchmark.
>
> **[7:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=442)** Generally, once you have these measuring points, once you have that data, also look around, you can compare this to synthetic benchmarks people ran, figure out what you're doing, is this is an industry standard performance?
>
> **[7:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=459)** If this is a subpar performance, not good, then most likely you don't want to use it.
>
> **[7:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=466)** But if this is industry standard or above industry standard, really, really good.
>
> **[7:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/the-right-benchmarking-of-existing-tools?u=76281980&t=472)** All right, so let's look next into the implementation.

> [!info]- Semantic Content
>
> **Code Keywords:** super (9), let (6), case, (2), function (2), this, (2)
> **CLI Commands:** apache (2), python (1), aws (1)
> **Analogies:** for instance (3), compare this to (1)
> **Env Vars:** aws (1), gcp (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** setup (2)
> **Speakers:** - [instructor] (1)


### 4. Implementation

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Definition of work packages and responsibilities
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=0)** - [Instructor] Let's talk about the implementation and let's talk about work packages.
>
> **[0:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=5)** That's actually a problem that a lot of people have as they don't understand the work packages that are already defined, so the packages are unclear.
>
> **[0:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=16)** The progress tracking is terrible for the packages, usually, because they're very big, responsibilities are not clear, who is in charge of what, and there are unforeseen dependencies that actually become a problem.
>
> **[0:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=32)** Now, historically, development was like that.
>
> **[0:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=36)** We're developing for a week, a month, two months, six months, and then we do a launch.
>
> **[0:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=44)** Nowadays with agile development, what you do is you do the exact opposite of this.
>
> **[0:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=50)** You create small packages, you develop in small increments, and from there you can then act to things that are coming up, like you can add new packages, if something new needs to be packaged in, you can drop stuff that you see, okay, that is too much, or that we don't need that drop it.
>
> **[1:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=74)** Or you can reschedule work any time that, if you now need to do this a week later, you can take a small part and schedule this later in.
>
> **[1:25](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=85)** And so it's very easy to manage, very agile.
>
> **[1:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=89)** Also, problem solving during the development becomes a lot easier because of this agility.
>
> **[1:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=95)** Now, how are you defining these work packages?
>
> **[1:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=99)** Again, split the larger deliverables, the larger features, after you identified them into small packages.
>
> **[1:48](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=108)** Usually these packages are a few days in agile development so people can work and can shortly finish these packages.
>
> **[2:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=120)** What you also do is in these packages, when you define them, you add a time for the packages so that people understand how long will this take, how long is this supposed to take?
>
> **[2:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=132)** Once you set the packages, you add a descriptive title.
>
> **[2:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=137)** That's very important.
>
> **[2:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=139)** Once people come in and they look at all the work packages that are going to be done this week, the title of the package needs to be so descriptive that people immediately understand what is going to happen there.
>
> **[2:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=152)** After that, you add a detailed description with more information about this package, and, of course, the time so that then your team is able or somebody else who is going to look at the progress of work, is going to be able to very quickly assess the situation.
>
> **[2:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=172)** How many people are working on work packages?
>
> **[2:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=174)** Usually you say a package has one responsible person and that person is going to work on that package.
>
> **[3:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=182)** Now we said the package is small, so they're easy to track but how are you tracking this?
>
> **[3:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=188)** And there's actually a great tool, I've worked with this for years, Azure DevOps is actually a tool that I've worked for years with.
>
> **[3:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=197)** It's super easy.
>
> **[3:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=198)** For instance, if you do scrum, you can add your stories here, which are basically the packages and add information, make it visible.
>
> **[3:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=209)** How long will this whole development take?
>
> **[3:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=212)** See who is responsible for what?
>
> **[3:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=214)** What's the status of each work package?
>
> **[3:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=216)** So take a look at tools like Azure DevOps.
>
> **[3:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=219)** There are also others, but I recommend highly Azure DevOps to use for the tracking of your development.
>
> **[3:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=229)** Let's look next at something that is related to this.
>
> **[3:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/definition-of-work-packages-and-responsibilities?u=76281980&t=232)** Let's look at risk assessments.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (2), super (1)
> **Cross-References:** coming up (1), later in (1)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Risk assessment
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=0)** - [Instructor] Now that we've talked about work packages, let's talk about risk assessments.
>
> **[0:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=5)** Risk assessments actually are going to be done through all stages of a project.
>
> **[0:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=10)** But for you as an engineer and for you who's doing the implementation and maybe setting the work packages, this is something that is very important and where a lot of mistakes come out of it.
>
> **[0:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=22)** Because unforeseen risks often become unforeseen problems.
>
> **[0:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=28)** So you need to look at the risks.
>
> **[0:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=31)** The idea here is you need to mitigate risks.
>
> **[0:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=35)** And how you are going to do this is first you need to identify the assets that are involved in this project.
>
> **[0:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=44)** So you need to go in, and here's the example again, with our standard pipeline.
>
> **[0:51](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=51)** On the left we have our data source, then we have a transformation process, then we have a storage system.
>
> **[0:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=58)** And on the right side we have a visualization tool with a person in the back of it.
>
> **[1:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=64)** So you look at this, then you would say, okay, data source, transformation, storage.
>
> **[1:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=71)** And on the right, the visualization tool, that's actually, those are assets for me.
>
> **[1:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=77)** After I looked at the involved assets, now the goal is for you to identify potential threats to these assets because they need to be looked at during the development process and during setting the work packages.
>
> **[1:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=96)** So what you would do is you would think of, okay, let's look at the data source on the left, you would identify the threats.
>
> **[1:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=104)** What would be threats here to this database asset?
>
> **[1:48](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=108)** So what could happen is user access could be denied, that you get a access denied password not recognized error.
>
> **[1:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=118)** The whole database could be not available.
>
> **[2:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=121)** And the data could be old data, so it's not updated in the specified time.
>
> **[2:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=127)** Or there could be data missing sometimes, or even malformed data where the data doesn't have the right format or the data is actually wrong, not what you've expected.
>
> **[2:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=142)** That can all happen during operations.
>
> **[2:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=144)** Plus something that somebody goes in and says, okay, I'm going to do a schema change.
>
> **[2:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=149)** And they do a schema change on the database, on the source database, and don't tell you about it and so your whole pipeline breaks.
>
> **[2:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=158)** So it's a really big risk and it's the most annoying thing because that is going to take a long time for you.
>
> **[2:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=167)** So next step would be analyze the potential impact of each of these threats and prioritize the risks based on that impact.
>
> **[2:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=176)** And then afterwards you would develop risk mitigation strategies for this to reduce the likelihood of impact or the likelihood that something is happening.
>
> **[3:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=187)** We're going to talk about the mitigation strategies in a second.
>
> **[3:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=189)** How would you do this, that you analyze the potential impact?
>
> **[3:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=195)** The old school way is the way that a lot of people do it is, get out a spreadsheet, make three columns, a risk column, a likelihood column, a severity column.
>
> **[3:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=206)** On the risks side, you add all your risks.
>
> **[3:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=210)** User denied, database not available, data not updated, missing data, wrong data, schema changes.
>
> **[3:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=216)** And then you go through and think of, okay, first of all, what's the likelihood of this?
>
> **[3:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=222)** So likelihood of user access denied, one.
>
> **[3:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=226)** Database not available.
>
> **[3:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=227)** Mm, that's also very unlikely.
>
> **[3:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=230)** That the data is not updated.
>
> **[3:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=232)** That can happen very often.
>
> **[3:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=236)** That data is missing sometimes.
>
> **[3:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=239)** Basically mildly.
>
> **[4:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=240)** And I rated this from one to five here.
>
> **[4:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=243)** Wrong data, I said two.
>
> **[4:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=245)** And schema changes, I set also to two, maybe there's a lot of stuff happening in the background of this source database.
>
> **[4:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=253)** And then again, now you have the risks, the likelihood, and then you'll look at the severity.
>
> **[4:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=257)** User access denied, how severe would this be?
>
> **[4:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=260)** This most likely will be two because it will take you some time to figure out why this is.
>
> **[4:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=267)** You might have to talk to the engineers on the data source side.
>
> **[4:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=271)** So let's say that's two of five.
>
> **[4:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=274)** Then database not available.
>
> **[4:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=276)** Let's say severity here is one of five.
>
> **[4:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=279)** There's nothing happening on your side, and for you there's not a lot of things you can do about it.
>
> **[4:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=286)** Data not updated.
>
> **[4:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=287)** This might be severity three, that if something's happening and it takes a long time always in between, that might be super annoying.
>
> **[4:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=296)** Missing data, let us say is four, because it would be bad if some parts of the data is missing.
>
> **[5:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=305)** So you get, let's say the source database has five tables and only four are filled, and you get the data set and there's data missing.
>
> **[5:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=314)** So that's, it's terrible.
>
> **[5:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=316)** Wrong data is even worse because what happens if the data is wrong and you process it, output is going to be also wrong.
>
> **[5:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=326)** And also let's add schema changes here, five out of five.
>
> **[5:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=329)** Because if the schema changed, you need to manually go in.
>
> **[5:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=334)** You need to do development.
>
> **[5:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=335)** This might cost you a day or something.
>
> **[5:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=338)** So this way you have a table, you have an overview of the risks, plus the likelihood and the severity of it.
>
> **[5:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=345)** And then you would try to think of mitigation strategies.
>
> **[5:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=350)** What could you do to mitigate these problems?
>
> **[5:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=353)** You could try to avoid problems.
>
> **[5:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=356)** So can I do something to actually avoid this issue all at once?
>
> **[6:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=360)** Can I transfer this issue to somebody else?
>
> **[6:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=363)** Like in this case with our database not available, that is already transferred to somebody else, to the person who is in charge of the source database.
>
> **[6:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=378)** Mitigation would be, okay, can I reduce the risk?
>
> **[6:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=382)** For instance, for our missing data we could implement strategies to actually find out is this data right or does this look wrong?
>
> **[6:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=394)** This can be something really simple like that, you check the types of the data, but this could also be some checks on the values.
>
> **[6:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=402)** If it's above 20, it's highly unlikely or it's not logical that this is the case.
>
> **[6:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=409)** So these are things that you can mitigate.
>
> **[6:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=413)** Then you can look at acceptance, and that's basically database not available here.
>
> **[6:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=419)** Likelihood, one, severity of one.
>
> **[7:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=421)** Okay, let's just accept this.
>
> **[7:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=422)** This is a problem that might arise.
>
> **[7:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=426)** This is the thing that can happen, so who cares?
>
> **[7:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=430)** It's going to be back up.
>
> **[7:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=433)** All right.
>
> **[7:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=434)** That much about risk assessment.
>
> **[7:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/risk-assessment?u=76281980&t=435)** Now the next part is we're going to look into documentation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (2), super (1), else, (1), case. (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Testing the right parts
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=0)** - Now that the development is done, or mostly done, you most likely are going to think about testing all of this.
>
> **[0:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=6)** There are two issues that people have with testing is, first, they don't know what to test, and they don't know how to test their pipelines, or their systems.
>
> **[0:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=18)** And this is connected to what we talked last with the risk assessment.
>
> **[0:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=23)** Because out of the risk assessment, you already get some ideas.
>
> **[0:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=26)** What are you going to test here?
>
> **[0:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=29)** Now let's look at this.
>
> **[0:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=31)** Because one thing is, you don't want to forget to test something.
>
> **[0:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=36)** If you forget to test something, most likely it's going to come up in production.
>
> **[0:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=42)** It's going to spike to a real problem.
>
> **[0:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=45)** And then it will lead back to you, and we need to do problem solving, and it's going to take you a long time.
>
> **[0:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=54)** So, when you think about the testing order, what are you going to do first?
>
> **[0:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=59)** First, you're going to start with an individual tool, or with an individual part of the pipeline.
>
> **[1:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=66)** It's super important that you're doing that, and that you're not testing end-to-end first.
>
> **[1:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=74)** Go look at each individual part.
>
> **[1:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=76)** Test each individual part.
>
> **[1:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=78)** The more fine grained these tests are, the better is it.
>
> **[1:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=82)** The more stuff you put in there, the more stuff you test, the better is it.
>
> **[1:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=88)** Then it's time to actually test the whole thing end-to-end.
>
> **[1:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=93)** But not before that.
>
> **[1:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=96)** The other thing is that people don't know with which data to test.
>
> **[1:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=101)** And it's a huge problem.
>
> **[1:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=103)** Very often, people write unit tests, for instance, for their Python code, and they don't know with which data to test.
>
> **[1:51](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=111)** There are two different types of data.
>
> **[1:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=113)** It's okay data, and it's bad data, that you need to test with.
>
> **[1:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=117)** I know bad data might be complicated to generate, and annoying.
>
> **[2:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=122)** And okay data might be super easy.
>
> **[2:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=125)** But never just test the green path, the okay path, and forget about the bad data.
>
> **[2:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=132)** Always test both.
>
> **[2:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=133)** I know that because I, in the past, I have to admit, I needed to make some decisions, and I only tested the green path because of time.
>
> **[2:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=144)** It's not good. So test both.
>
> **[2:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=146)** Test okay with okay data.
>
> **[2:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=148)** And with bad data, because with bad data, that allows you to identify potential problems.
>
> **[2:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=155)** And for that, you need to, most of the time, create synthetic bad data that you think of.
>
> **[2:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=160)** Okay, what could go wrong? Again, from a risk assessment.
>
> **[2:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=165)** And for the source database, you look at the data model, and think about what could happen there.
>
> **[2:51](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=171)** And then you actually create data for this.
>
> **[2:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=174)** And you feed that, your test, for the processing step.
>
> **[2:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=179)** Sometimes there is existing bad data, but most of the time bad data doesn't count.
>
> **[3:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=185)** Bad data isn't locked. Bad data isn't saved.
>
> **[3:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=188)** So you need to come up with your own.
>
> **[3:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=190)** So what are you going to look for in these tests?
>
> **[3:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=193)** You're going to look for your KPIs, your functional requirements.
>
> **[3:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=197)** Are they fulfilled? Generally.
>
> **[3:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=199)** Functional requirements fulfilled?
>
> **[3:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=202)** Is this delivering the results that I want?
>
> **[3:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=206)** Is the performance okay?
>
> **[3:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=208)** Is the performance as I expect it to be?
>
> **[3:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=211)** Are security requirements taken into account, and actually work?
>
> **[3:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=215)** And then, when you look with the bad data, is the error handling implemented?
>
> **[3:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=220)** Is that functional?
>
> **[3:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=222)** Is this throwing exceptions?
>
> **[3:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=224)** Is this writing stuff in the log?
>
> **[3:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=227)** Is this writing me good error messages for the bad data, that is possible to arrive?
>
> **[3:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=234)** You also need to think about, is this easy to maintain what I have done here?
>
> **[3:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=238)** Is this nice code that I have written?
>
> **[4:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=241)** Can somebody else work with this?
>
> **[4:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=243)** Or is this super difficult, and I need to do one or two more rounds of optimizing my code?
>
> **[4:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=250)** For the testing, where do you deploy this?
>
> **[4:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=252)** Where do you test?
>
> **[4:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=253)** There are three environments that you have.
>
> **[4:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=256)** That is the best case. That's the optimal case.
>
> **[4:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=259)** And I highly recommend that you do it like this.
>
> **[4:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=262)** So you have a development environment.
>
> **[4:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=264)** That could be, for instance, your PC, your local machine.
>
> **[4:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=268)** Where you are actually doing the development.
>
> **[4:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=272)** Where everything goes, you can do whatever you want on this.
>
> **[4:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=275)** That can be reset at any time, most likely by you.
>
> **[4:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=280)** And very often, that has old data, or synthetic data, on it.
>
> **[4:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=284)** So that's the dev environment.
>
> **[4:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=287)** Then you have the quality and the production environment.
>
> **[4:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=289)** The quality environment is near production environment.
>
> **[4:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=294)** That usually how this is built is that the quality uses the same systems as the production environment, but it doesn't have the amount of resources as the production environment.
>
> **[5:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=305)** So it's a bit weaker than the production environment.
>
> **[5:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=308)** But it's the same thing for the processes, and for the data.
>
> **[5:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=313)** How the data is handled is usually in regularly cycles.
>
> **[5:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=318)** The data is mirrored from the production environment to the quality environment.
>
> **[5:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=324)** This way, you work with new data regularly on the quality environment, and you are up to date there.
>
> **[5:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=331)** Once it's past quality, then it goes into production.
>
> **[5:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=334)** And production is really, that's the live environment.
>
> **[5:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=338)** This is where the customers are working on.
>
> **[5:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=340)** This is where the live processes are happening.
>
> **[5:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=343)** This is where nothing should go wrong, right?
>
> **[5:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=346)** 'Cause there are customers working internal, or external, doesn't matter.
>
> **[5:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=350)** Customers are working on its live data.
>
> **[5:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=353)** It's problematic if you mess something up there.
>
> **[5:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=356)** So these three environments, dev, quality, production. Very important.
>
> **[6:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=360)** Understand this. Start with dev.
>
> **[6:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=362)** Then move to quality, and then into production.
>
> **[6:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=365)** What is also very important for testing is writing a good documentation.
>
> **[6:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=371)** We're going to look at test documentation later.
>
> **[6:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/testing-the-right-parts?u=76281980&t=374)** But let's, in the next step, talk about the documentation of your development, of your implementation, first.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (6), super (3), let (2), case. (2)
> **CLI Commands:** python (1), make (1)
> **Analogies:** for instance (2)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Speakers:** - now (1)

#### Having a good documentation
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=0)** - [Instructor] Let's talk about documentation.
>
> **[0:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=2)** The biggest problem with documentation usually is there is no documentation.
>
> **[0:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=7)** I know documentation is sometimes quite annoying.
>
> **[0:11](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=11)** Documentation takes time.
>
> **[0:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=12)** Very often we don't have time for the documentation, but nevertheless, having no documentation is absolutely terrible.
>
> **[0:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=22)** Most of the time, the problem with having no documentation is you need to maintain a piece of pipeline and you have no idea what it does, what each part does, what part of source code does.
>
> **[0:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=36)** Super difficult.
>
> **[0:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=38)** Or the other way that something needs improvement, not that it's not broken, but it needs improvement, and you need to go in and improve a piece of the pipeline and that piece isn't documented and you need to spend hours going through everything figuring out what it is, how it works, and that's super terrible and you don't want to do that.
>
> **[1:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=60)** And you also don't want to have others do that.
>
> **[1:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=64)** So these are common problems.
>
> **[1:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=68)** Another common problem is you are writing a piece of code and you don't know what to document, right?
>
> **[1:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=74)** How do you write a good documentation?
>
> **[1:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=77)** Now, we could spend two hours on this topic, but here are a few things that are very important.
>
> **[1:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=84)** First of all, why is no documentation so difficult?
>
> **[1:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=88)** As I mentioned, you don't understand what the pipeline or the part does, and that is you don't want to have that to you.
>
> **[1:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=96)** You need to have that.
>
> **[1:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=97)** The other part is if there is a problem, finding the exact location of the error doesn't help you because it will lead to somewhere in the source code and that part is also not documented and you have no idea what that does, you have no idea what the part above that does or before that does.
>
> **[1:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=117)** It's super annoying.
>
> **[1:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=118)** It also will lead to that.
>
> **[2:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=121)** You need to peel the onion, right?
>
> **[2:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=123)** That you need to go from the outside.
>
> **[2:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=126)** As I mentioned, you need to go from the outside, and you need to figure out what does the whole program and what does each individual part of this do.
>
> **[2:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=135)** Super difficult, super annoying.
>
> **[2:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=138)** You don't want to do this.
>
> **[2:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=140)** It also makes it super difficult to test because you don't know what to expect.
>
> **[2:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=144)** What does each part expect of data?
>
> **[2:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=148)** What does each part return for data?
>
> **[2:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=153)** It's very important to have the documentation also for testing.
>
> **[2:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=158)** An issue here might be, let's say the original developer left the company or is unavailable and you cannot ask this person how this worked and you need to go from zero basically.
>
> **[2:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=172)** Or on the other side, you will leave the company and others need to struggle through your code.
>
> **[2:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=178)** This is why having no documentation is super difficult.
>
> **[3:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=182)** Also, bad documentation as well.
>
> **[3:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=185)** How to do this?
>
> **[3:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=187)** There are two ways, internal, external documentation.
>
> **[3:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=190)** External documentation is something where you document the whole pipeline in each part and you explain everything and you put this, for instance, into an internal wiki.
>
> **[3:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=201)** You could put this on GitHub or a repository.
>
> **[3:25](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=205)** So there are a lot of ways, and to document this, I mean, in the old days, we've been writing PDF documents or Word documents and putting everything in Word and then documenting it there.
>
> **[3:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=220)** External documentations are very important for people to get an overview to have a nice way of documenting it.
>
> **[3:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=227)** I mean, with internal wikis, very often you can use it like Wikipedia.
>
> **[3:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=232)** You can add images, you can add text, you can add source code and so on and so on.
>
> **[3:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=237)** There's a lot of freedom.
>
> **[3:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=239)** And then you have the internal documentation, and usually how you do this is you go from file to function and to individual lines, right?
>
> **[4:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=247)** When you think about a Python, piece of Python code, you have the piFile, and that's your source file.
>
> **[4:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=255)** So you start, you're beginning on the file level to document.
>
> **[4:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=260)** Okay, what is this file?
>
> **[4:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=261)** What is this doing?
>
> **[4:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=262)** Then you go where you call the functions.
>
> **[4:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=264)** You write a documentation for each function.
>
> **[4:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=267)** What is this function doing?
>
> **[4:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=269)** What data is it expecting?
>
> **[4:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=271)** What data is it going to return?
>
> **[4:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=274)** Then you're going to go into these functions and for important lines of code, you are going to document what is this doing.
>
> **[4:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=285)** What does this specific line do?
>
> **[4:48](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=288)** Especially if it's complicated or super important, then you should write some inline documentation for individual lines as well.
>
> **[4:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=298)** And then you have basically everything.
>
> **[5:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=300)** You have an external documentation.
>
> **[5:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=302)** Very detailed that people can look for.
>
> **[5:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=304)** And if somebody goes in and looks at code and needs to figure out what the code does, this person can do this very easily as well.
>
> **[5:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=315)** How do you write this language?
>
> **[5:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=317)** Just like when we were talking about the KPIs, use simple language, simple explanation.
>
> **[5:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=323)** People should immediately understand what this documentation means.
>
> **[5:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=329)** You should be consistent in a format and in a style.
>
> **[5:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=332)** Don't change the format all the time.
>
> **[5:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=335)** Use the same format.
>
> **[5:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=336)** Sometimes in larger companies, there is actually a specification how to do documentation.
>
> **[5:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=343)** Use speaking variables.
>
> **[5:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=344)** That's also something big.
>
> **[5:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=345)** Don't use variables like P1, P2, P3.
>
> **[5:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=349)** Use speaking variables that will tell somebody, "Okay, I'm looking at that variable."
>
> **[5:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=356)** This variable already tells me in there will be the original dataset.
>
> **[6:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=363)** Inline documentation, always short and to the point.
>
> **[6:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=366)** Don't write long paragraphs because otherwise it's going to be terrible to go through the code if there are then 10 lines of inline documentation.
>
> **[6:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=374)** You can also use short examples when possible if that fits.
>
> **[6:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=380)** Now this is all with the documentation.
>
> **[6:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=382)** There are some things that need to be documented towards the governance part.
>
> **[6:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=387)** So not only the technical part of the how does the pipeline work, what's the technical solution, but also governance.
>
> **[6:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=395)** And you find this very often with data lakes.
>
> **[6:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=399)** For instance, the data lakes gets swamped.
>
> **[6:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=401)** Everybody's just putting data in the data lake because there is no access control, like who is allowed to actually put data in.
>
> **[6:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=410)** There's no data catalog that tells people, okay, this data with that kind of a format is there and you can access it in there.
>
> **[7:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=420)** There is no data quality known if, is that data actually good data?
>
> **[7:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=424)** Is that bad data here?
>
> **[7:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=426)** Does this have errors?
>
> **[7:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=428)** There is no lineage known from a governance and lineage point that the data has been processed.
>
> **[7:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=434)** So you think about it as in there's original data coming in and then you're doing multiple transformation steps and you might want to store the data from these transformation steps and that is a lineage, right?
>
> **[7:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=448)** Think about from left to right, the data source to the destination, to the user.
>
> **[7:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=453)** There are multiple steps of processing and each step creates a different output.
>
> **[7:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=459)** And also documentation for security and privacy.
>
> **[7:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=462)** Sometimes it's not clear which user role does what, which user role is allowed to see which data.
>
> **[7:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=470)** Super annoying this kind of stuff if this is missing.
>
> **[7:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=473)** So think about technical documentation and governance for the documentation part, and you will be all right.
>
> **[8:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=481)** Internal documentation and external documentation is super important.
>
> **[8:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=486)** With that, the development is basically done.
>
> **[8:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=490)** It's everything is implemented, everything is documented.
>
> **[8:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/having-a-good-documentation?u=76281980&t=493)** Now, let's talk about the operations part, which is also a very big part.

> [!info]- Semantic Content
>
> **Code Keywords:** super (10), let (3), function (3), this, (2), this. (1)
> **Documentation:** the documentation (4), specification (1)
> **CLI Commands:** python (2), find (1)
> **Exercise Files:** source code (3)
> **Analogies:** for instance (2), just like (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** pifile (1)
> **Env Vars:** pdf (1)


### 5. Operations

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Approaches to monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=0)** - [Instructor] All right, blending is done, design is done, implementation is done.
>
> **[0:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=5)** Let's look at the last part, which is a super important part, the operations.
>
> **[0:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=13)** And for operations, what you need to look at and what you need to solve is monitoring.
>
> **[0:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=20)** People are having a lot of problems with monitoring or without monitoring because they don't have it.
>
> **[0:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=27)** The typical problems that you're going to find there is pipelines, individual pipelines, or whole systems fail without anyone noticing, which is super bad.
>
> **[0:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=39)** Or available system resources go low unnoticed and then somebody needs to do an emergency upgrade or emergency work on the whole pipeline or on individual systems, always very hectic.
>
> **[0:55](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=55)** Or data starts missing and you don't know where.
>
> **[0:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=59)** You don't know where in the chain, what happened, you have no idea.
>
> **[1:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=63)** Data just goes missing.
>
> **[1:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=65)** And maybe in combination with the first one, that you don't even notice it at first.
>
> **[1:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=70)** So basically these two things, stuff is happening without anyone noticing and data goes missing or something is happening but you don't know where exactly it's happening.
>
> **[1:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=83)** Those two are the most important things, the biggest problems that people have.
>
> **[1:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=89)** And why do they have this problem?
>
> **[1:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=91)** It's always the same, because there's no centralized view of the system KPIs.
>
> **[1:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=97)** So there is no dashboard or something where people can actually figure out what is happening, what's going on.
>
> **[1:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=104)** There's no such thing, no monitoring solution.
>
> **[1:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=107)** Also, very often there is no alarming structure, no alarming automation.
>
> **[1:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=113)** There is no hierarchy in the alarming, which is a really, really bad combination.
>
> **[1:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=119)** No centralized view, no monitoring system, and no alarming.
>
> **[2:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=123)** Super important that you need to figure this out and you need to look at this.
>
> **[2:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=128)** What do I mean with centralized view of the KPIs?
>
> **[2:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=132)** You need to think of it, like in the middle here, that's your monitoring system.
>
> **[2:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=137)** And the satellites out on the left and on the right, that's, on the left, for instance, these are systems.
>
> **[2:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=144)** These could be virtual servers, database instances.
>
> **[2:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=149)** So systems that send you statistics data.
>
> **[2:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=152)** And on the right side, that could be processes, that could be parts of pipelines that are actually sending you statistics data that you then monitor.
>
> **[2:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=162)** And you can bring this all together in one monitoring system.
>
> **[2:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=165)** You can build dashboards, you can do analytics on the data, you can do alarming there.
>
> **[2:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=173)** That's what I mean, centralized view.
>
> **[2:55](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=175)** These systems need to send their KPIs in there.
>
> **[2:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=179)** There are two types of KPIs that you have and that is basically belongs to the systems and the processes, system KPIs and process KPIs.
>
> **[3:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=188)** System KPIs very often are resource-oriented, right?
>
> **[3:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=193)** The overall system status, what's the CPU, the RAM, the hard drive usage?
>
> **[3:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=200)** What's the network throughput?
>
> **[3:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=202)** Is the system sending internal errors somewhere?
>
> **[3:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=206)** System KPIs.
>
> **[3:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=207)** And then you have your process KPIs.
>
> **[3:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=209)** This is from data transformation, data cleaning from processing, where you're talking about data throughput, processing time, processing lag, we talked about lag before, or internal errors, error codes from your processing.
>
> **[3:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=226)** So two different types.
>
> **[3:48](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=228)** Super important that you've noticed this, that you keep track of the system KPIs, that's more towards resources, and process KPIs, that's more towards the processing.
>
> **[4:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=241)** And then you need alarming structure, right?
>
> **[4:04](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=244)** So if you track now these KPIs, this data, you're going to look at your dashboard and maybe you have on the dashboard charts.
>
> **[4:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=254)** And here I have a chart for processed messages.
>
> **[4:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=258)** On the y-axis is my number of messages and on the x-axis is the time that goes.
>
> **[4:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=264)** And so as you can see in the beginning, this is quite stable.
>
> **[4:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=268)** The number of messages is basically breaking down to zero.
>
> **[4:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=273)** And then you have zero messages for some time.
>
> **[4:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=275)** Then it's coming up, being stable for a short time.
>
> **[4:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=279)** And then you have a large peak of data, of processed messages, which then goes back down.
>
> **[4:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=287)** Now if you have no logging, no monitoring, you will not see this.
>
> **[4:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=293)** In this case, if you have that data, you could say, "Okay, let's add two thresholds here.
>
> **[4:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=298)** "Let's add a threshold here for the zero "or for shortly after zero, "so that if no data is coming in, "then we will throw an alarm message."
>
> **[5:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=310)** Or that we say, "Okay, we are putting up a threshold "for upper that if there are peaks, "that we're also looking at alarms and getting notified "that something out of the ordinary is happening right now."
>
> **[5:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=324)** It's not super alarming because it's not too high.
>
> **[5:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=327)** But we could say, "Okay, here we put out a warning."
>
> **[5:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=332)** Now this chart could also look different, that let's say something is going completely that you are not getting sent zeros, but you're getting sent no data.
>
> **[5:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=343)** And then usually what you can do is you can define "If this metric doesn't get data in one minute, "then throw an error."
>
> **[5:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=352)** Or you could have something different.
>
> **[5:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=354)** Let's just keep with the processing, let's say processing performance.
>
> **[5:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=358)** We're looking at the processing performance.
>
> **[6:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=360)** So the processing time here is on the y-axis, the normal time is here on the x-axis.
>
> **[6:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=367)** And as you can see, the processing performance is quite stable for some time.
>
> **[6:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=372)** And then it starts actually going up.
>
> **[6:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=376)** And what you can do here, can set three types of thresholds.
>
> **[6:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=381)** You can set an information threshold.
>
> **[6:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=383)** So once it's getting over the normal, would be an information.
>
> **[6:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=389)** Once it's getting higher but it's still okay, you set a warning.
>
> **[6:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=393)** And if something is happening and it's taking way too long, then you would throw an alarm and this alarm then would get sent out to people, right?
>
> **[6:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=402)** So they can notice it.
>
> **[6:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=404)** They can also then track your chart in the monitoring and act on this.
>
> **[6:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=410)** With the alarming, let's quickly talk about the processing or the alarming hierarchy.
>
> **[6:55](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=415)** Very often what you have is you have like a table where you have the status information, warning, alarm.
>
> **[7:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=421)** You could also set critical.
>
> **[7:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=422)** It's totally up to you how many status levels you are going to set.
>
> **[7:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=429)** And then you have the channels where this notification is going out.
>
> **[7:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=433)** So for informations would be just the UI.
>
> **[7:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=435)** For warnings, they would go over Slack, and alarms via email or critical via phone call, or old school via SMS.
>
> **[7:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=447)** And then you would define the users who is getting notified.
>
> **[7:30](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=450)** So for the UI, this is basically like a silent alarm.
>
> **[7:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=456)** Warnings would go out to the admins via Slack, alarm would go to email via admins, and critical ones would go to the admins and to the leadership, for instance.
>
> **[7:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=467)** Or could be phone call for admins and leadership would get an email, alarm email, something like that.
>
> **[7:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=474)** So again, monitoring, super important that you implement something like this.
>
> **[8:01](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=481)** You need to know at all times what is happening because it's the worst case that can happen that you have no idea how your system behaves and most likely something is developing and you don't notice it and at some point it, everything is breaking down.
>
> **[8:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=498)** Then the alarm bells are ringing.
>
> **[8:21](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=501)** All right, now monitoring, that already leads us towards bug-fixing.
>
> **[8:27](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-monitoring?u=76281980&t=507)** So let's talk a bit about bug-fixing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), super (6), this. (4), throw (3), this, (1)
> **Env Vars:** cpu (1), ram (1), sms (1)
> **Warnings:** warning (3)
> **Cross-References:** we talked about (1), coming up (1)
> **Tools:** slack (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (2)

#### Approaches to bug fixing
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=0)** - [Instructor] Let's talk about problems with error handling and with back fixing.
>
> **[0:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=5)** Typical things that you're going to see is that the errors are in log files, which is a big problem because you don't have an central hub where you can look at the logs, a central collection unit.
>
> **[0:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=19)** You don't know where to start so you just try stuff out in the debugging phase.
>
> **[0:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=24)** You don't know if the error is in the code or in the data and you don't know how to actually debug the pipeline.
>
> **[0:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=31)** These are things that are usually problematic with error handling, with bug fixing.
>
> **[0:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=37)** Let's look at the first point here.
>
> **[0:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=39)** Let's look at log files.
>
> **[0:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=41)** What I recommend is don't make the mistake of using individual files.
>
> **[0:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=46)** Set up a central system that where all the logs are going to go, all the messages, something like Elasticsearch that can collect the logs and is a central hub for you to query data, to make queries to Elasticsearch and find errors very quickly.
>
> **[1:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=65)** How do these messages look in Elasticsearch that are in your log?
>
> **[1:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=68)** There are a few things that a good message has, has a message status with info error or debug or something.
>
> **[1:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=77)** Processing stage is going to be in there that you know where is this message going to come from?
>
> **[1:25](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=85)** The timestamp.
>
> **[1:25](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=85)** When has this message arrived?
>
> **[1:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=88)** For very small data it makes sense to store the raw data in there but I usually, I would only have the raw data in debug messages where you activate a debug mode and then you send the raw data into the log.
>
> **[1:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=103)** You could put in there the amount of not processed data.
>
> **[1:47](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=107)** So if an error occurs, data is not processed.
>
> **[1:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=110)** You could put in there processing time for ETL processes so you can keep up, keep information on the processing time if that changes.
>
> **[2:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=120)** And sometimes it also makes sense to add a free text here, a description where out of your processing there comes a better description of what exactly does this error mean.
>
> **[2:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=133)** Now you might wonder, where does the error come from, the data or my code?
>
> **[2:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=138)** Most of the time the problem actually comes from the data because the data is what changes.
>
> **[2:24](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=144)** So there are two choices.
>
> **[2:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=146)** Data is okay, and if something breaks and the data is okay, then something normal is happening.
>
> **[2:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=153)** But you have, or the developer hasn't taken this into account when developing the pipeline, when developing the code.
>
> **[2:41](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=161)** So then the problem is in the code, if there is faulty data and it's throws an error, then of course data is malformed, data is missing, parts are missing.
>
> **[2:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=172)** The fault originates from the source.
>
> **[2:55](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=175)** So you need to start at the source and not at your code.
>
> **[2:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=179)** If it's your code, do the debugging, understand the data at the source, then find the stage where the problem occurs.
>
> **[3:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=189)** This might not be it because the problem might be earlier but that is the next point here.
>
> **[3:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=195)** You need to inform yourself what kind of data each stage requires and each stage puts out because then you can actually figure out, okay, the error arrived in this stage here but the data that came into this stage or into this process was actually already malformed.
>
> **[3:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=213)** So the error is going to be earlier.
>
> **[3:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=216)** How did the problematic data look at the start of the stage or at even in the beginning at the source?
>
> **[3:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=225)** A tip here is if you're unsure try to request that data again manually.
>
> **[3:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=233)** If you can do that, it's super easy then to debug.
>
> **[3:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=236)** This will help you in the debugging phase but it might not be.
>
> **[4:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=242)** Again, as we're talking here, the lineage is super difficult.
>
> **[4:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=245)** It's one of the most important topics of all here, but it's very, very difficult to actually monitor how did the data look in each step or after each step.
>
> **[4:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=256)** So again, how do you pinpoint the error stage?
>
> **[4:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=259)** Don't go in blind.
>
> **[4:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=260)** Don't test out stuff.
>
> **[4:22](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=262)** Test individual steps, not the whole pipeline at once.
>
> **[4:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=266)** If you are unsure, then test from the beginning and look at each individual stage.
>
> **[4:31](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=271)** It's also what you can do if there's no real error coming out.
>
> **[4:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=274)** You need to start from the beginning, right?
>
> **[4:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=277)** If you have the option of enabling a debug logger that is going to write the outputs of the stages in the log that makes it a lot easier to actually find problems 'cause then you can you just need to compare what is expected here, what is coming out here, what is expected here, what is coming out here.
>
> **[4:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=296)** When you then go and you want to debug code, the thing is always you need to try to find the exact location where things go wrong.
>
> **[5:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=305)** It's super easy if your process is throwing an exception and that exception has actually the information in it so you can then go backwards from the error.
>
> **[5:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=316)** If that's not the case, then this is harder.
>
> **[5:19](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=319)** So you need to go step by step through the code, step by step through the pipeline and figure out where the problem is.
>
> **[5:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=328)** What helps you there, as always, and we talked about this before, source code documentation, project documentation, inline documentation here, super important.
>
> **[5:39](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=339)** This will help you a lot to understand what is happening to understand how did the data look here and there and what is the point of these lines of code and so on.
>
> **[5:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=350)** If possible, you can work with debug points.
>
> **[5:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=354)** So you write the data at certain points into the log.
>
> **[5:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=357)** That also makes sense.
>
> **[5:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=359)** That points where it's not really foreseen that the data gets saved but you add debug points yourself where you write then the data into the log and therefore you even have a more fine-grained view of the data and what is happening.
>
> **[6:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=376)** Again, this is very, very important.
>
> **[6:18](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=378)** Debugging individual code is easier than debugging whole pipelines and with engineering pipelines often get complicated but I think these tips will help you here.
>
> **[6:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=393)** So let's talk next about training of staff, about ops documentation, because that is also part here of monitoring, part of debugging.
>
> **[6:44](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/approaches-to-bug-fixing?u=76281980&t=404)** It's another step.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), super (4), from, (1), case, (1)
> **CLI Commands:** find (4), make (2)
> **Definitions:** is a  (2)
> **Env Vars:** etl (1)
> **Cross-References:** we talked about (1)
> **Exercise Files:** source code (1)
> **Warnings:** don't make the mistake (1)
> **Prerequisites:** set up (1)

#### Awesome training of staff, current and new
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=0)** - We were already talking about documentation in the implementation phase, but it's also important for the operations phase.
>
> **[0:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=8)** And it's basically coming on top of the implementation documentation.
>
> **[0:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=13)** Now, what's important for ops here is a detailed section for ops with system architecture diagrams, with technical design documents, could be sketches, could be detailed technical information with deployment and configuration management information like how do you deploy X?
>
> **[0:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=32)** How do you configure Y?
>
> **[0:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=34)** Super important topics.
>
> **[0:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=36)** Could also be maintenance procedures, like, okay, you need to maintain this part.
>
> **[0:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=42)** At first, you need to shut down the database.
>
> **[0:45](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=45)** You need to shut down the other processing and then you can shut down this and then you can do a maintenance on this part, right?
>
> **[0:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=53)** Like, what is the procedure here?
>
> **[0:56](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=56)** Could be disaster recovery plans.
>
> **[0:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=59)** Okay, something really, really terrible is happening.
>
> **[1:02](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=62)** What are we going to do?
>
> **[1:03](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=63)** And in what order are we going to do it?
>
> **[1:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=67)** Security policies, if not already documented.
>
> **[1:10](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=70)** Like, who is responsible for what and who is allowed to do what?
>
> **[1:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=75)** Monitoring and alerting procedures that if somebody then does the bug fixing, does the operations want to add more monitoring?
>
> **[1:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=83)** How are you going to do this?
>
> **[1:25](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=85)** What's the plan for the project to add more of this information?
>
> **[1:33](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=93)** Incidents report procedures.
>
> **[1:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=96)** Okay, there is something happening.
>
> **[1:37](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=97)** How are we logging our incidents so that if something happens again, we can go back and we can look at the incident that already happened and learn from it and get better, get faster.
>
> **[1:50](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=110)** Also, stuff like release notes.
>
> **[1:52](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=112)** Okay, we did an update of one of our processings in the pipeline.
>
> **[1:58](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=118)** We increased the performance, so we did this and that and these are the release notes for the different versions.
>
> **[2:06](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=126)** Super important.
>
> **[2:07](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=127)** And this all goes on top of your standard implementation documentation.
>
> **[2:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=132)** So keep that in mind.
>
> **[2:14](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=134)** There is a operations documentation specifically with technical details, with procedures for the ops team.
>
> **[2:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=143)** And the ops team also needs to add more and more information on top of this, right?
>
> **[2:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=149)** Because if some new information comes to play, if new errors are getting recognized, you need to log them.
>
> **[2:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=156)** You need to help others fix this quicker.
>
> **[2:42](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=162)** All right, so much for the documentation part.
>
> **[2:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=166)** Ultimately, what does this do?
>
> **[2:48](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=168)** This part of the documentation, this is going to be used to teach others, right?
>
> **[2:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=174)** To teach your current colleagues, to teach somebody who's coming in, who's new in your project, who's new with the ops of the pipelines, who's a new developer so to get better and to save time.
>
> **[3:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/awesome-training-of-staff-current-and-new?u=76281980&t=189)** Now, the last thing that I want to talk about is how to improve your processes.

> [!info]- Semantic Content
>
> **Code Keywords:** super (2), this, (1)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (1)
> **Speakers:** - we (1)

#### How to improve processes
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=0)** - When I was talking in the beginning about the phases of data projects, I was talking about that this is a cycle basically.
>
> **[0:09](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=9)** That once everything is done, we're going to start improving everything and we're going to start again with the design.
>
> **[0:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=17)** Now, what are we going to improve?
>
> **[0:20](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=20)** That is actually a question that a lot of people have.
>
> **[0:23](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=23)** They don't know what to improve, and it's a bit more than just the performance.
>
> **[0:28](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=28)** Of course, performance is the first thing that you think of, "Okay, if we're going to improve something, let's improve the performance."
>
> **[0:35](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=35)** But a big thing is automation.
>
> **[0:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=38)** Improving the automation of the whole pipeline, improving the automation of processes, where maybe there was a manual step at some point, remove that manual step and automate everything.
>
> **[0:54](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=54)** This way, it's the most efficient for your pipeline, and that's a big improvement.
>
> **[0:59](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=59)** It's most likely a bigger improvement than improving a part of the pipeline that the processing of 0.5 seconds.
>
> **[1:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=68)** Then, automation, scalability.
>
> **[1:12](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=72)** Scalability's also something that you need to work on.
>
> **[1:16](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=76)** Maybe you have processes in there that are very difficult to scale, that are not optimized for scaling, that although maybe your processing is going to be horizontal scaling by adding more machines, but your processing doesn't allow it.
>
> **[1:32](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=92)** Or a data source that, in the long run, cannot scale with the requirements.
>
> **[1:38](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=98)** So that is something you need to able to improve over the long run.
>
> **[1:43](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=103)** The same with monitoring and logging, right?
>
> **[1:46](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=106)** You might start with a simple monitoring of KPIs, a simple dashboard, but the more volume you have through the data pipeline, the more work this thing does, the more users are online, the more difficult it gets to actually see what is happening.
>
> **[2:05](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=125)** So you're going to improve the monitoring, and with that, you're going to also improve the logging so that the processes and the systems are sending you more data.
>
> **[2:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=135)** Then you have maybe data quality issues that you actually want to improve, where data is going quite far in your pipeline until it's recognized that it's wrong.
>
> **[2:26](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=146)** So you want to optimize this, that you want to find out the data quality a lot earlier in the beginning.
>
> **[2:34](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=154)** Could be privacy and security that you want to increase the security of your systems, you want to find new methods of firewalling this whole system so that nobody can intrude, or that you add more privacy to your APIs.
>
> **[2:49](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=169)** That's something that you're able to improve.
>
> **[2:53](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=173)** Same with CICD, continuous integration, continuous deployment.
>
> **[2:57](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=177)** So that when somebody is doing some development, it's very quickly checked and it's very quickly deployed then onto the live system.
>
> **[3:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=188)** So many points here other than just performance doing, right?
>
> **[3:13](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=193)** And with that, we have it.
>
> **[3:15](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/how-to-improve-processes?u=76281980&t=195)** So let's make a conclusion here and let's talk about what to do next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** cicd (1)
> **Versions:** 0.5 (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Conclusion and outlook
> [LinkedIn Learning](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/conclusion-and-outlook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/conclusion-and-outlook?u=76281980&t=0)** - Alright, so we went through all the phases of a data project and now you should be well-prepared for your work as a data engineer.
>
> **[0:08](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/conclusion-and-outlook?u=76281980&t=8)** Do me a favor, create a post on LinkedIn with all the engineering problems that you encountered and tag me in that post so we can have a chat.
>
> **[0:17](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/conclusion-and-outlook?u=76281980&t=17)** If you want to learn data engineering, check out my academy at [learndataengineering.com](https://learndataengineering.com), where I teach you how to become a data engineer or how to use data engineering in your job.
>
> **[0:29](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/conclusion-and-outlook?u=76281980&t=29)** If you want to learn more here on LinkedIn Learning, check out my Creating a Data Project with Neo4j course.
>
> **[0:36](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/conclusion-and-outlook?u=76281980&t=36)** Otherwise, have a really great day and all the best to you.
>
> **[0:40](https://www.linkedin.com/learning/problem-solving-strategies-for-data-engineers/conclusion-and-outlook?u=76281980&t=40)** See you later, bye.

> [!info]- Semantic Content
>
> **URLs:** [learndataengineering.com](https://learndataengineering.com) (1)
> **Speakers:** - alright (1)


## Instructor

- [[Andreas Kretz]]

## Skills Covered

- Data Engineering
- Problem Solving

## Path Context

### In [[Advance Your Data Engineering Skills]]
← [[Data Engineering With Dbt]] | **2 of 10** | [[ETL in Python and SQL]] →

## Appears In

- [[Advance Your Data Engineering Skills]]

## Related Courses

_Courses sharing skills:_

- [[Databricks Certified Data Engineer Associate Cert Prep]] — Data Engineering
- [[Big Data Analytics with Hadoop and Apache Spark]] — Data Engineering
- [[Transition from Data Science to Data Engineering]] — Data Engineering
- [[Introduction to Modern Data Engineering with Snowflake]] — Data Engineering
- [[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]] — Data Engineering

---

[↑ Back to top](#)