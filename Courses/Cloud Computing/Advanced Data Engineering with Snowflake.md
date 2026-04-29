---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: advanced-data-engineering-with-snowflake
url: "https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake"
duration_minutes: 139
duration: 2h 19m
level: Intermediate
updated: 5/28/2025
learners: 5986
skills:
  - DevOps
  - Data Pipelines
  - Snowflake
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHcUL6mia0odQ/learning-public-crop_675_1200/B4EZb0xBWkGUAY-/0/1747863214273?e=2147483647&amp;v=beta&amp;t=tpFwKtdR2I78724chmVsw5I26MTCH4ftslVpsZEJ844"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Data Engineering Professional Certificate by Snowflake]]'
prev_courses:
  - '[[Introduction to Modern Data Engineering with Snowflake]]'
path_nav: '[{"path":"Data Engineering Professional Certificate by Snowflake","position":3,"total":3,"prev":"Introduction to Modern Data Engineering with Snowflake","next":null}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/devops
  - skill/data-pipelines
  - skill/snowflake
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Advanced%20Data%20Engineering%20with%20Snowflake.md)

![Advanced Data Engineering with Snowflake](https://media.licdn.com/dms/image/v2/D4E0DAQHcUL6mia0odQ/learning-public-crop_675_1200/B4EZb0xBWkGUAY-/0/1747863214273?e=2147483647&amp;v=beta&amp;t=tpFwKtdR2I78724chmVsw5I26MTCH4ftslVpsZEJ844)

# Advanced Data Engineering with Snowflake

> This is a technical, hands-on course that teaches you how to implement DevOps best practices to build data pipelines, and how to implement observability to maintain and monitor data pipeline health. Discover the most practical Snowflake concepts, features, and tools to help you get you up and running quickly on the platform. Get started by learning about DevOps, DevOps practices, and how DevOps fi

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake) | 2h 19m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (2 videos)
- **[[#2. 1. DevOps with Snowflake]]** (10 videos)
- **[[#3. 2. Observability with Snowflake]]** (11 videos)

### 1. Introduction

#### Scaling data pipelines to meet modern demands
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980)

> [!transcript]- Transcript
>
> **[0:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=11)** In the time that it takes me to complete the sentence, trillions of data points around the world will have been generated, captured, and analyzed.
>
> **[0:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=20)** This real-time data capture is all around us all the time.
>
> **[0:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=24)** For example, in the financial services world, transaction data is used to instantly detect fraud.
>
> **[0:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=30)** This helps financial institutions quickly alert their customers of suspicious activity.
>
> **[0:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=36)** Telecommunications companies continuously monitor network and performance data to detect and mitigate outages or overloads in real time.
>
> **[0:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=46)** And in the manufacturing industry, the practice of predictive maintenance is common, where streaming data from sensors on machine parts can help manufacturers schedule maintenance for those parts and ensuring that they don't fail during critical workloads.
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=62)** All of these workloads require that the data pipeline that serve them can reliably scale with modern demands.
>
> **[1:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=69)** To achieve this scale, pipelines like these ought to be able to support large teams of data engineers working together seamlessly so that they can meet the demands of these workloads.
>
> **[1:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=81)** This means that pipelines need to support practices like collaboration, source control, continuous deployment, and more.
>
> **[1:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=89)** In short, they need to support the practice of DevOps end-to-end.
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=93)** But that's not all.
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=95)** With so many pipelines, it's imperative that teams are able to easily keep an eye on their health.
>
> **[1:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=101)** This is because instant action is usually required by data engineers when the problem occurs.
>
> **[1:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=106)** This means data engineers need to employ Observability using things like alerts, notifications, and other telemetry to keep track of critical pipeline metrics.
>
> **[1:57](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=117)** Hi there. My name is Gilberto Hernandez.
>
> **[1:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=119)** I'm a developer advocate at Snowflake, and I'm excited to welcome you to Advanced Data Engineering with Snowflake.
>
> **[2:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=126)** If I look familiar, you might've seen me in the precursor to this course called [[Introduction to Modern Data Engineering with Snowflake]].
>
> **[2:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=134)** There we covered how to build continuous end-to-end data pipelines.
>
> **[2:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=139)** This course is the follow-up course and builds on the concepts that we covered in the previous course.
>
> **[2:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=145)** We'll specifically cover DevOps and Observability with Snowflake.
>
> **[2:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=150)** I recommend starting with the introductory course to be able to follow along with the concepts covered in this course.
>
> **[2:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=156)** By the end of the course, you'll know how to use Snowflake to incorporate DevOps' best practices for building and maintaining data pipelines, and how to employ Observability to keep an eye on important pipeline metrics to ensure their health.
>
> **[2:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=170)** With this knowledge, you'll be able to build robust and resilient pipelines that can meet the most modern of data engineering demands.
>
> **[2:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=178)** Lastly, let's talk a little about who this course is best suited for.
>
> **[3:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=182)** This course is going to be best suited for folks who have had some prior experience building end-to-end data pipelines.
>
> **[3:10](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=190)** It's also well suited for those that have completed the previous course, [[Introduction to Modern Data Engineering with Snowflake]].
>
> **[3:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=196)** But in general, I do my best to make concepts easily accessible to everyone.
>
> **[3:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=201)** So if you're curious about these topics and perhaps don't have prior experience with data pipelines or haven't completed the prior course, don't worry.
>
> **[3:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=209)** Feel free to join in and learn something new.
>
> **[3:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=212)** And if you do have experience building pipelines, but perhaps using other platforms, then not to worry, you're also in the right place.
>
> **[3:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/scaling-data-pipelines-to-meet-modern-demands?u=76281980&t=220)** With that, join me in the next video to dive a little more into the specifics of what we'll cover in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), let (1), for. (1), new. (1)
> **Cross-References:** we covered (2), in the next (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### What this course will cover
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=1)** Much of what we'll do in this course will expand on the knowledge we covered in the first course.
>
> **[0:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=5)** In the first course, we started from scratch and we contextualized how to build a data pipeline using the ITD framework: ingestion, transformation, and delivery.
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=16)** We also covered orchestration which helped you add automation to the pipeline.
>
> **[0:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=21)** Starting from scratch allowed us to build a pipeline together piece by piece so that you can put the ITD framework to action.
>
> **[0:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=28)** In this course, we'll do things a little differently.
>
> **[0:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=31)** We won't build a new pipeline from scratch.
>
> **[0:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=34)** Instead, we'll start with a prebuilt pipeline and expand it by implementing the concepts covered in this course.
>
> **[0:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=41)** We'll cover two topics, DevOps with Snowflake and Observability for data pipelines.
>
> **[0:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=46)** By the end of the course, you'll know how to take your pipelines to the next level by knowing how to use DevOps to streamline and automate the development of your pipelines, how to implement observability to keep an eye on your pipeline's health, and how to capture and ingest streaming data into Snowflake in near real time.
>
> **[1:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=64)** Just like in the first course, we're going to focus on the practical over the theoretical.
>
> **[1:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=68)** Whenever necessary, we'll provide any background information that you'll need to understand a concept, but generally we're going to focus on the what and the how behind each concept and feature.
>
> **[1:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=79)** This will help you to quickly understand new concepts, enable you to start using them right away in Snowflake, and help you feel confident in what you're doing.
>
> **[1:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=89)** To get you to that outcome, we've designed this course to be hands-on.
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=93)** In fact, this course won't be a passive learning experience.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=96)** For most exercises in the course, you're expected to code along with me to successfully build something together.
>
> **[1:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=103)** This is so that you can learn by doing and get some hands-on experience with the concepts that we'll cover.
>
> **[1:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=108)** We'll actively use tools like the command line, GitHub, SQL, Python, and more.
>
> **[1:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=115)** And as in the previous course, we won't be exhaustive of all advanced data engineering features, techniques, or pipeline architectures. That's intentional.
>
> **[2:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=125)** But what you'll learn in this course will make you dangerously good at building more complex and efficient pipelines with Snowflake.
>
> **[2:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=132)** And in addition, you'll learn enough to feel comfortable exploring concepts and features that we might not cover in this course.
>
> **[2:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-this-course-will-cover?u=76281980&t=139)** Now join me in the next video to learn more about DevOps and data engineering.

> [!info]- Semantic Content
>
> **Env Vars:** itd (2), sql (1)
> **CLI Commands:** python (1), make (1)
> **Cross-References:** we covered (1), in the next (1)
> **Tools:** command line (1), github (1)
> **Analogies:** just like (1)
> **Prerequisites:** you'll need (1)


### 2. 1. DevOps with Snowflake

#### DevOps in the world of data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=0)** If you were to ask 10 different engineers, what is DevOps?
>
> **[0:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=4)** You'd likely get 10 different answers.
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=7)** So before we dive into how Snowflake does DevOps, let's take a quick detour and first understand what we mean by the term DevOps.
>
> **[0:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=15)** To start, DevOps isn't a product.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=18)** It's also not a feature.
>
> **[0:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=20)** It's something more fluid than that.
>
> **[0:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=22)** At a high level, it's most often a core set of philosophies and best practices for allowing teams to quickly deliver and maintain software at scale.
>
> **[0:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=33)** Now I'm sure that even that high-level definition will encourage some debate, but for our purposes, it's just the right scope.
>
> **[0:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=40)** Let's break it down a bit more.
>
> **[0:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=43)** Data pipelines are living engineering systems that, like many engineering systems, have a set of critical requirements to satisfy.
>
> **[0:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=51)** For example, a pipeline may need to be able to quickly react to changes in say, database objects, schemas, and more.
>
> **[0:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=59)** They should also be reliable and minimize pipeline downtime as much as possible.
>
> **[1:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=64)** They might also need to be modern enough to easily integrate with newer approaches like being able to capture streaming data or incorporating a third-party tool into an existing data environment.
>
> **[1:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=75)** These are just a few examples.
>
> **[1:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=76)** There are countless more requirements we could think of.
>
> **[1:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=79)** To satisfy requirements like these, data engineering teams need to be able to quickly evolve data pipelines by deploying changes to them in a fast, but also safe and reliable way.
>
> **[1:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=90)** DevOps best practices help engineering teams do exactly this.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=94)** DevOps practices are common in the world of software development, and more and more they're finding their way into the field of data engineering.
>
> **[1:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=102)** Okay. Enough of the high level, exactly which DevOps practices am I referring to?
>
> **[1:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=108)** The first, source control and collaboration.
>
> **[1:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=111)** Software engineering teams have employed a source control for decades.
>
> **[1:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=115)** This helps them iteratively improve software as well as maintain a source of truth and log for all changes.
>
> **[2:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=122)** This pattern is increasingly finding its way into the building of data pipelines as well.
>
> **[2:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=128)** This helps teams keep track of the immense amount of changes to pipeline objects, logic, and much more.
>
> **[2:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=136)** Next, declarative management of code.
>
> **[2:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=139)** This means being able to incrementally update code without requiring time-intensive or error-prone procedures to advance or roll back source code.
>
> **[2:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=149)** Coupled with source control, this is a powerful way of managing changes in data pipelines.
>
> **[2:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=156)** We'll dive into much more detail on this in an upcoming video.
>
> **[2:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=160)** The third is automation, specifically automation around testing and deployment.
>
> **[2:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=165)** This is frequently known as continuous integration and continuous deployment, also known as CI/CD.
>
> **[2:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=172)** We'll get into the details behind this concept in an upcoming video.
>
> **[2:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=176)** For now, it's enough for you to know that teams must be able to continuously deploy changes to their software or their pipelines.
>
> **[3:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=184)** This is so that software and data pipelines are able to maintain high up times while also reflecting the newest changes.
>
> **[3:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=192)** The practice of automated deployments allows them to do this, meaning they can quickly and safely test, rollout, and roll back changes as needed.
>
> **[3:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=202)** And finally, tooling.
>
> **[3:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=204)** It would be a pain to manually have to do all these things, and one important aspect of DevOps is that teams are able to move quickly.
>
> **[3:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=213)** They do this by using tooling that allows them to incorporate all of these best practices.
>
> **[3:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=218)** Oftentimes, this means teams are using a set of special tools to achieve these outcomes, like product specific command line interfaces as an example.
>
> **[3:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=228)** There are many more best practices in the world of DevOps, but these are the core ones that we'll touch on in this course.
>
> **[3:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=234)** These practices allow data engineering teams to build resilient, reliable, and modern data pipelines.
>
> **[4:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-in-the-world-of-data-engineering?u=76281980&t=242)** Join me in the next video to learn about how Snowflake is supporting DevOps practices.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1), this, (1), finally, (1)
> **Definitions:** known as (2), is a  (1)
> **CLI Commands:** cd (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **Exercise Files:** source code (1)
> **Analogies:** for example (1)

#### DevOps with Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=0)** Continuously evolving data pipelines in a fast yet safe and reliable way is at the heart of what DevOps for data engineering can help do.
>
> **[0:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=9)** In this exercise, we'll cover how Snowflake supports the following DevOps practices, specifically around source control, collaboration, declarative management of code, automation, and tooling.
>
> **[0:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=23)** Let's walk through the key features within Snowflake that support each of these best practices.
>
> **[0:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=28)** First, Snowflake's Git integration.
>
> **[0:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=31)** This feature means you can use Git for source control along with the source control platform like GitHub, for example, and then connect your Snowflake account directly to the repository containing the code.
>
> **[0:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=42)** This means your team can collaborate on your pipeline together, use source control for your code, and run files in Snowflake when needed.
>
> **[0:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=51)** The next feature is a new SQL command that goes hand in hand with source control, CREATE OR ALTER.
>
> **[0:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=58)** The CREATE OR ALTER command allows you to declaratively manage Snowflake objects like tables, for example.
>
> **[1:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=64)** It lets you apply incremental updates to database objects using a declarative, item-potent method.
>
> **[1:10](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=70)** This means you can define your objects once and update them as needed when necessary.
>
> **[1:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=76)** This feature becomes incredibly powerful when paired with source control because you can simply update an object's definition and then use source control to track all changes ever made to that object.
>
> **[1:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=88)** We'll dive into a lot more detail on this topic in an upcoming exercise.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=94)** These next two things will go hand in hand and will round out what we'll cover in this course as it relates to DevOps with Snowflake for data engineering.
>
> **[1:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=102)** I'm referring specifically to Snowflake's command line interface, Snowflake CLI and GitHub Actions.
>
> **[1:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=109)** The Snowflake CLI is a powerful command line interface for doing all sorts of things with Snowflake, from creating applications that run on Snowflake, creating Snowpark projects, managing Snowpark container services, and much more.
>
> **[2:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=122)** In the context of DevOps for our data pipelines, you can use Snowflake CLI for a couple of important things.
>
> **[2:10](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=130)** First, to communicate directly with the Git repository you're using for your data pipeline code.
>
> **[2:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=136)** Second, to integrate with automation platforms like GitHub Actions to enable continuous deployment of changes to your pipelines.
>
> **[2:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=144)** To recap, these are the features and platforms we'll use in this module to implement DevOps practices for data engineering with Snowflake: Snowflake's Git integration with GitHub as a source control platform, Snowflake's CREATE OR ALTER SQL command, Snowflake CLI, and GitHub Actions.
>
> **[2:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=162)** With these features, we can start implementing DevOps practices for robust and reliable data pipelines.
>
> **[2:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/devops-with-snowflake?u=76281980&t=169)** Join me in the next video to learn about exactly what we'll build in the remainder of the module.

> [!info]- Semantic Content
>
> **Env Vars:** cli (4), create (3), alter (3), sql (2)
> **Tools:** github (5), command line (2)
> **Code Keywords:** interface (2), module (2), let (1)
> **CLI Commands:** git (4)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)

#### What we'll build
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=0)** Let's put these DevOps practices to use with a scenario.
>
> **[0:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=4)** The pipeline that we're going to build off of is the pipeline that we built in the first course.
>
> **[0:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=8)** We'll rebuild it together in an upcoming exercise.
>
> **[0:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=12)** The pipeline specifically tracks weather and wind speed in the city of Hamburg, Germany.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=18)** Recall that we built this pipeline because of strange weather-related anomalies that affected food truck sales in that city.
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=25)** You can imagine that you're on a data engineering team and you've been tasked with updating the pipeline with new changes.
>
> **[0:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=32)** The pipeline needs to now do the following: employ source control, support incremental changes to new database objects, and allow continuous deployment to staging and production environments.
>
> **[0:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=44)** To do this, we'll use Snowflake's Git integration and GitHub for source control.
>
> **[0:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=50)** We'll use the CREATE OR ALTER command to declaratively add and modify database objects.
>
> **[0:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=55)** And finally, we'll use Snowflake CLI and GitHub Actions to test and deploy changes to the pipeline.
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=62)** Don't worry if you're not an expert with Git or GitHub, I'll walk you through those steps to make sure you're successful.
>
> **[1:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=68)** By the end of the module, you'll have a modern pipeline that employs DevOps best practices.
>
> **[1:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/what-we-ll-build?u=76281980&t=73)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), finally, (1), module (1)
> **CLI Commands:** git (2), make (1)
> **Env Vars:** create (1), alter (1), cli (1)
> **Tools:** github (3)
> **Analogies:** imagine (1)

#### Source control in Snowflake with Git
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=0)** By now, you know that a key tenant of DevOps practices is source control.
>
> **[0:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=5)** In this exercise, we'll implement source control for our pipeline by connecting Snowflake to GitHub using Snowflake's Git integration.
>
> **[0:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=13)** In the next video, we'll build the pipeline.
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=16)** Thankfully, we won't need to build it from scratch as all of the files that we'll need to set up the pipeline are in the GitHub repository that we'll link to.
>
> **[0:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=24)** Let's go ahead and link the repo to our Snowflake account.
>
> **[0:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=27)** This is a good time to pause the video if you need to log into your GitHub account.
>
> **[0:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=33)** Start by navigating to the advanced data engineering Snowflake repo on GitHub.
>
> **[0:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=38)** This is the repo that will connect to Snowflake.
>
> **[0:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=40)** It also contains files we'll need for this exercise and for subsequent exercises.
>
> **[0:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=45)** To connect this repo to snowflake, start by creating a fork of the repo.
>
> **[0:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=50)** This will create a copy of the repo in your GitHub account, which will allow you to write to it.
>
> **[0:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=55)** Navigate to the top here and click on fork.
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=60)** You can leave everything else as is on this page and now create the fork.
>
> **[1:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=67)** Okay, great.
>
> **[1:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=68)** You now own a copy of the repo in your account.
>
> **[1:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=71)** Before we proceed, I want you to know that forking the repo is the most important step in the module.
>
> **[1:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=76)** If you skip forking, you won't be able to follow along in the rest of the module.
>
> **[1:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=81)** Okay. With our fork ready, let's briefly cover how we'll connect our Snowflake account to the GitHub repo.
>
> **[1:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=87)** There are three things you need to do to connect your account to the repo.
>
> **[1:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=90)** The first is to configure authentication to access GitHub.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=94)** All this means is creating a personal access token or PAT within GitHub and using it as a credential within Snowflake so that Snowflake can communicate with GitHub.
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=104)** The second is to configure an API integration within your Snowflake account.
>
> **[1:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=109)** This integration will use the PAT and specify which URLs your account can interact with.
>
> **[1:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=115)** Finally, we need to create a Git repository object within Snowflake.
>
> **[1:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=119)** This object essentially acts like an external stage, only this time it points to a GitHub repo.
>
> **[2:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=125)** We'll be able to access the files within the repo directly from our Snowflake account.
>
> **[2:10](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=130)** Thanks to the API integration we defined.
>
> **[2:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=132)** Okay, let's do this.
>
> **[2:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=134)** Now is a good time to pause the video if you need to log into your Snowflake account.
>
> **[2:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=138)** Navigate to Snowflake and create a new SQL worksheet.
>
> **[2:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=145)** Next, navigate to the API integration SQL file inside of the module-1 folder.
>
> **[2:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=152)** Copy the contents of the file and paste them into the SQL worksheet.
>
> **[2:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=158)** Set your context by running the first three lines.
>
> **[2:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=165)** This file has several SQL statements that we need to complete.
>
> **[2:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=169)** Let's start by creating the secret.
>
> **[2:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=171)** The secret requires our GitHub username and a personal access token, which we can generate in GitHub.
>
> **[2:57](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=177)** Start by entering your GitHub username here.
>
> **[3:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=183)** Next, we'll need to generate a personal access token from GitHub and use it here as a password.
>
> **[3:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=189)** This is so that we can programmatically access GitHub.
>
> **[3:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=192)** Navigate to GitHub.
>
> **[3:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=193)** Click on your profile and then click on settings.
>
> **[3:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=197)** On the left, click on developer settings.
>
> **[3:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=201)** Click on personal access tokens, then click on fine-grained token.
>
> **[3:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=205)** Click generate a new token. Let's add a name for our token.
>
> **[3:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=210)** I'll call it Snowflake Git Integration Token.
>
> **[3:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=214)** Under repository access, click on all repositories.
>
> **[3:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=218)** Expand repository permissions and scroll down to contents.
>
> **[3:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=223)** Select read and write.
>
> **[3:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=225)** This will ensure that we'll be able to read and write to the repo that will connect.
>
> **[3:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=229)** Finally, click on generate token at the bottom.
>
> **[3:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=234)** A token should be generated for you.
>
> **[4:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=240)** You should treat this token as a password and keep it secure.
>
> **[4:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=244)** Also, once you've generated a token, GitHub will only show it to you once on this page.
>
> **[4:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=249)** If you close the page or forget to write it down, you won't be able to access the token again, and you'll need to repeat this process again.
>
> **[4:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=257)** So be mindful of this token.
>
> **[4:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=259)** Okay. Copy the token to the clipboard.
>
> **[4:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=262)** Next, navigate back to Snowflake and paste it in as a password.
>
> **[4:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=267)** Run the statement.
>
> **[4:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=269)** Okay, great. We've created a secret.
>
> **[4:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=273)** Let's now complete the API integration.
>
> **[4:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=275)** We have some initial statements stubbed out that we need to fill in.
>
> **[4:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=279)** Start by giving the integration a name.
>
> **[4:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=282)** I'll call it Git API Integration.
>
> **[4:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=285)** It's missing values for API allowed prefixes and allowed authentication secrets fields, so let's add those.
>
> **[4:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=293)** For the first field, add the URL to your GitHub profile.
>
> **[4:57](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=297)** All this means is that our API integration should allow us to access any resources under this specific URL, which represents our GitHub user account.
>
> **[5:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=306)** This is perfect because if you check, you'll notice that the path to the fork repo lives as a resource under this URL.
>
> **[5:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=313)** To find the URL, navigate to GitHub.
>
> **[5:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=316)** Click on your profile picture at the top right, then click on your profile.
>
> **[5:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=322)** Copy the URL and the address bar and paste it into the API allowed prefixes field.
>
> **[5:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=327)** Next, specify the secret that we justified.
>
> **[5:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=331)** Type GitHub_PAT. That's it.
>
> **[5:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=336)** Let's run the statement. And there you have it.
>
> **[5:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=338)** We now have an API integration defined.
>
> **[5:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=341)** For more details on API integrations, be sure to check out the relevant Snowflake documentation as there are other possible values for the API provider field here.
>
> **[5:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=351)** Finally, let's complete our Git repo object.
>
> **[5:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=354)** We'll need to specify the values for the three missing fields.
>
> **[5:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=358)** For the API integration, specify our Git API integration.
>
> **[6:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=364)** For origin, specify the path to the GitHub repo that you forked.
>
> **[6:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=369)** Let me show you where to grab this in GitHub.
>
> **[6:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=371)** Navigate to GitHub.
>
> **[6:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=374)** Click on your repositories.
>
> **[6:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=378)** You should see the fork repo there. Click on it.
>
> **[6:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=384)** Next, click on code.
>
> **[6:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=386)** Under code, copy the address.
>
> **[6:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=388)** Navigate back to Snowflake and paste it as a value for origin.
>
> **[6:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=394)** Okay, we're almost done.
>
> **[6:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=395)** All we have to do now is specify the credentials to access this repo on GitHub.
>
> **[6:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=400)** Here, we specify the secret we defined earlier.
>
> **[6:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=403)** I'm using the fully qualified path of course_repo public GitHub_PAT. That's it.
>
> **[6:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=411)** Let's run the statement, and if successful, you should see this output.
>
> **[6:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=418)** Great. We now have a GitHub repo connected to our account.
>
> **[7:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=422)** You can list all the connected repos by running the show Git repositories command.
>
> **[7:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=427)** There it is.
>
> **[7:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=429)** To verify, you can navigate to the object explorer.
>
> **[7:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=432)** Click on the database and schema, and you should see the GitHub repo listed as an object.
>
> **[7:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=438)** If you click on it, you should be able to browse the files that are in the repo directly within Snowflake.
>
> **[7:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=444)** How cool is that?
>
> **[7:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=445)** Okay. With this connection, we can now use source control for our work in Snowflake.
>
> **[7:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=450)** We can also easily run files from the repo directly from Snowflake.
>
> **[7:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=454)** We're well on our way to implementing some DevOps best practices for our pipeline.
>
> **[7:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=459)** Great job.
>
> **[7:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/source-control-in-snowflake-with-git?u=76281980&t=460)** Join me in the next video as we use this integration to set up the pipeline in your Snowflake account.

> [!info]- Semantic Content
>
> **Tools:** github (26)
> **Env Vars:** api (13), url (5), sql (4), pat (2)
> **UI Navigation:** click on (15), navigate to (7), scroll down (1)
> **Code Keywords:** let (11), module (3), finally, (3), this. (1), public (1)
> **CLI Commands:** git (7), find (1)
> **Exercise Files:** github repo (5)
> **Prerequisites:** set up (2), configure (2), you'll need (1)
> **Cross-References:** in the next (2)

#### Set up the data pipeline using snowflake CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=0)** Now that we've connected Snowflake to the GitHub repo, let's set up our pipeline. To complete this exercise, be sure you completed the instructions and the reading that precedes this video.
>
> **[0:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=11)** We'll need to do two things.
>
> **[0:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=13)** First, load the data for the pipeline, and second, build the pipeline objects using that data.
>
> **[0:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=20)** To do this, we're going to use Snowflake CLI.
>
> **[0:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=23)** What is Snowflake CLI?
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=25)** It's the command line interface for working with Snowflake.
>
> **[0:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=28)** It is super powerful and can do many things with your Snowflake projects.
>
> **[0:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=32)** For example, you can use it to start Snowpark objects, execute Snowflake notebooks and SQL directly from the command line, bootstrap a Snowflake native app, and much more.
>
> **[0:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=44)** We're specifically going to use the CLI's snow git execute command.
>
> **[0:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=49)** This command will execute a file or a series of files in a repository path.
>
> **[0:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=54)** These files can be SQL files or Python files.
>
> **[0:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=58)** Here's how we'll use it.
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=60)** We'll use this command to set up our data environment in Snowflake.
>
> **[1:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=64)** We'll run this command against a directory that contains all of the data that needs to be loaded into our Snowflake account and all of the pipeline objects built using that data.
>
> **[1:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=74)** One really neat thing is that we're going to be able to pass in an argument to the command so that we can create staging and production data environments and corresponding data pipelines in each of those environments.
>
> **[1:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=87)** More details on that setup in an upcoming exercise.
>
> **[1:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=91)** Overall, this command is handy for quickly setting up data environments within Snowflake, among other things.
>
> **[1:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=97)** For example, if you require that several Snowflake accounts have a standard data environment, you can use this command to execute a script that sets up the environment for those accounts.
>
> **[1:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=108)** That's essentially what we'll use the command for.
>
> **[1:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=111)** Okay. Let's get started.
>
> **[1:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=112)** Now's a good time to pause the video if you need to log into your Snowflake account.
>
> **[1:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=116)** Let's start by first taking a look at the files we'll run.
>
> **[2:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=121)** Navigate to the module-1 folder of the advanced data engineering Snowflake repo.
>
> **[2:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=126)** Open the hamburg_weather folder.
>
> **[2:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=128)** Expand the pipeline folder and locate the load_tasty_bytes.sql file inside of the data sub-folder.
>
> **[2:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=135)** This file contains all of the code to create our data environments.
>
> **[2:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=139)** You can see this file is parameterized, which you can recognize by the templating used here with the word env.
>
> **[2:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=146)** When we run our CLI command, we'll pass in an argument that this file will interpolate throughout the code.
>
> **[2:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=153)** This will help us easily create our two data environments.
>
> **[2:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=155)** You'll see this in action shortly and it'll make more sense.
>
> **[2:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=159)** Now navigate to the objects folder.
>
> **[2:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=162)** This folder contains all the objects for our pipeline.
>
> **[2:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=166)** The objects will be created using the data in our data environments.
>
> **[2:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=170)** You'll notice a couple things. Objects are also parameterized.
>
> **[2:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=174)** This is so that we can create pipelines in each of these data environments.
>
> **[2:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=178)** Second, you'll notice objects are split up into folders.
>
> **[3:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=182)** We'll learn about why we're doing this in an upcoming exercise.
>
> **[3:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=186)** We'll run the entire pipeline folder using the CLI and pass in arguments to place the pipelines in their corresponding data environments.
>
> **[3:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=195)** Finally, locate the app.py file in the Streamlit's folder.
>
> **[3:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=201)** This file contains the code to visualize and share the output of the pipeline using a Streamlit and Snowflake app.
>
> **[3:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=208)** Let's go ahead and build our pipeline.
>
> **[3:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=211)** Now is a good time to pause the video if you need to open VS Code.
>
> **[3:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=214)** In the terminal, start by typing snow git execute.
>
> **[3:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=219)** This is the beginning of our command.
>
> **[3:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=221)** Next, we'll pass in the path to the file we want to run.
>
> **[3:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=225)** We want to set up our data environments first, so we'll pass in the path to the load_tasty_bytes.sql file.
>
> **[3:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=231)** Type @advanced_data_engineering_snowflake.
>
> **[4:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=240)** This represents the Git repo object in our Snowflake account, which of course is linked to the GitHub repo that you forked.
>
> **[4:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=248)** Next, we need to specify both the branch and the path to the file.
>
> **[4:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=252)** So now type /branches/main.
>
> **[4:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=259)** Let's finish this up by typing the rest of the path to the file.
>
> **[4:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=262)** /module1/hamburg_weather/pipeline /data/load_tasty_bytes.sql.
>
> **[4:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=282)** Okay. Don't run anything yet because we're not done with the command.
>
> **[4:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=287)** If you did, you might encounter an error.
>
> **[4:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=290)** Not to worry, you can simply start again.
>
> **[4:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=292)** We need to pass in the variable that the file should interpolate.
>
> **[4:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=296)** Type -D followed by "env = 'STAGING'".
>
> **[5:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=314)** This will create a data environment that starts with the word staging.
>
> **[5:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=318)** This way, we'll know we're in the staging environment when we're in Snowflake.
>
> **[5:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=323)** Finally, specify the database and schema where this Git repo lives.
>
> **[5:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=328)** Type --database = course_repo and --schema = public.
>
> **[5:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=343)** Okay. That's it.
>
> **[5:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=344)** Let's run it.
>
> **[5:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=345)** Give it a little while to process the command.
>
> **[5:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=348)** Once it's done, navigate over to Snow site and confirm that indeed the data environment was created.
>
> **[6:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=361)** Great. Let's do this once more, but this time pass in prod as the environment argument.
>
> **[6:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=373)** Once again, run the command and give it a little to finish.
>
> **[6:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=377)** You should see another success statement.
>
> **[6:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=383)** Okay. You now have our data environments set up.
>
> **[6:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=386)** Let's now build the pipeline in each of these environments.
>
> **[6:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=389)** We'll follow the same pattern, but this time point to a new path in the repo containing the pipeline objects.
>
> **[6:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=396)** Let's start with the same command.
>
> **[6:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=401)** Now let's update the path.
>
> **[6:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=403)** I'm going to hold down option on my Mac keyboard and click on the part I want to edit.
>
> **[6:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=410)** I'll delete this part of the path backing up to pipeline.
>
> **[6:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=416)** And now type the path to the object's folder.
>
> **[6:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=419)** Make sure it reads objects/.
>
> **[7:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=423)** If I leave the path open-ended like this, it'll run all files in this directory and its sub-directories.
>
> **[7:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=431)** I'll also update my env variable to STAGING, just to follow the same order that we did before.
>
> **[7:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=438)** I'll hit enter and it's done.
>
> **[7:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=443)** It looks like everything was built successfully.
>
> **[7:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=451)** Let's confirm these objects were indeed created in my staging Tasty Bytes database.
>
> **[7:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=457)** And yes, there they are.
>
> **[7:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=461)** We also need to create the production pipeline.
>
> **[7:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=464)** So now let's rerun this command, and this time replace the word STAGING with the word PROD.
>
> **[7:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=476)** Once it's done, go ahead and confirm that the pipeline does indeed exist.
>
> **[8:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=481)** Great job. A quick note, this isn't exactly the same pipeline as before, but it's mostly the same.
>
> **[8:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=488)** The main difference is that we built two pipelines this time, each one being in its own database environment.
>
> **[8:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=496)** These two environments serve specific purposes.
>
> **[8:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=500)** I briefly touched on this, but one database represents the staging environment, and the other represents a production environment.
>
> **[8:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=508)** The staging environment is intended for development purposes and testing.
>
> **[8:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=512)** When used with source control, this pipeline provides a safe environment for introducing and testing new changes.
>
> **[8:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=520)** After testing and confirming that introduced changes work as intended, the changes would be deployed to the production environment, the database that starts with prod.
>
> **[8:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=530)** This pipeline represents the live pipeline being actively used for whatever end purpose, in this case, for building a Streamlit and Snowflake application.
>
> **[9:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=541)** This entire workflow is part of a DevOps best practice known as continuous deployment.
>
> **[9:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=548)** This practice lets data engineers safely introduce new changes and roll them out to the end user after confirming that they work properly.
>
> **[9:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=556)** We'll dive into even more detail on this topic in an upcoming video.
>
> **[9:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=561)** Okay. Let's quickly finish up the pipeline with our Streamlit app.
>
> **[9:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=566)** Navigate to the app.py file in the Streamlit's folder.
>
> **[9:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=569)** Copy the contents of the file.
>
> **[9:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=572)** Next, navigate to Snowflake.
>
> **[9:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=574)** Click on Projects, then click on Streamlit.
>
> **[9:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=577)** Create a new Streamlit app.
>
> **[9:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=579)** Call it whatever you want.
>
> **[9:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=584)** Select the staging environment as its location and select the public schema.
>
> **[9:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=589)** Leave everything else as is. Click create.
>
> **[9:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=599)** Wait for the app to boot up.
>
> **[10:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=601)** Next, click edit.
>
> **[10:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=603)** Delete all of the code in the editor and paste in the code we copied.
>
> **[10:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=608)** Click run.
>
> **[10:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=609)** Oh, oh, you should notice that the app loads, but it's not rendering anything.
>
> **[10:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=616)** It looks like it's broken and maybe some data is missing.
>
> **[10:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=620)** We're going to fix this by introducing a change that follows DevOps best practices.
>
> **[10:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=626)** Okay, that's it.
>
> **[10:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/set-up-the-data-pipeline-using-snowflake-cli?u=76281980&t=628)** Now that we have our pipeline set up along with a broken app that we need to fix, join me in the next video to start introducing changes to the pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), pass (7), this, (3), finally, (2), public (2)
> **Env Vars:** cli (5), staging (3), sql (2), prod (1)
> **UI Navigation:** navigate to (4), click on (3), select the (2), open the (1)
> **CLI Commands:** git (4), make (2), python (1)
> **Code Identifiers:** load_tasty_bytes (3), hamburg_weather (2), advanced_data_engineering_snowflake (1), course_repo (1)
> **Tools:** github (2), command line (2), vs code (1), terminal (1)
> **Prerequisites:** set up (5), setup (1)
> **File Paths:** load_tasty_bytes.sql (2), app.py (2), data/load_tasty_bytes.sql (1)

#### Database change management (DCM)
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=0)** Let's now imagine that we need to introduce changes to our pipeline.
>
> **[0:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=4)** How do we do that in a way that minimizes risk to the end user?
>
> **[0:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=8)** We'll do this through a combination of source control and using a declarative approach for managing database changes.
>
> **[0:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=15)** Before implementing this approach, let's understand a couple of common approaches to managing database changes.
>
> **[0:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=23)** The practice of managing changes to database objects is cleverly known as Database Change Management or DCM.
>
> **[0:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=31)** The terms Database Schema Migration and Schema Change Management are synonymous as well.
>
> **[0:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=38)** My colleague, Jeremiah Hansen has what I feel is a clear and comprehensive definition of this practice.
>
> **[0:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=46)** He says, "Database Change Management, DCM, is the practice of defining all database objects in code, in a Git repository, and then deploying those objects, including changes to those objects, to a database with the help of a dedicated tool."
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=62)** This exercise will cover the first half of that definition, namely, defining objects in code and using Git to implement source control.
>
> **[1:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=71)** We'll cover the deployment of those objects in upcoming videos.
>
> **[1:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=76)** So let's dive deeper into database change management.
>
> **[1:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=79)** Managing a database comes with all sorts of challenges like managing the state and evolution of objects within it.
>
> **[1:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=87)** I'm talking about changes like introducing new tables, adding columns to existing tables, modifying schemas, and much more.
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=95)** How exactly do data engineers handle these kinds of challenges?
>
> **[1:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=100)** One of the most common ways to manage the state of database objects is through an imperative approach.
>
> **[1:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=106)** An imperative approach handles changes to database objects in a step-by-step fashion and allows data engineers to carefully apply or remove changes to those database objects.
>
> **[1:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=118)** Here's what I mean.
>
> **[2:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=120)** Let's consider an object like a table, for example, that goes from state A to state D.
>
> **[2:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=127)** Maybe it's getting new columns added, removed, or something else in it is being modified.
>
> **[2:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=132)** With an imperative approach, it's the norm to have multiple scripts that gradually evolve the table to the desired end state.
>
> **[2:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=140)** For example, I might apply script 01.sql to more of the table in a certain way, followed by script 02.sql, and then finally script 03.sql.
>
> **[2:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=152)** And after applying script 03.sql, I might stand up and celebrate. This imperative approach is a common way of managing database state, but it also comes with its own challenges.
>
> **[2:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=166)** For example, this process can be error-prone because data engineers have to make sure that scripts are applied in the correct sequence.
>
> **[2:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=175)** Without a tool to help you keep track of this, this can quickly become confusing.
>
> **[3:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=181)** This approach can also be cumbersome.
>
> **[3:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=183)** In my previous example, I mentioned three scripts to get a table from state A to state D, but in practice, you may have tens, maybe hundreds of scripts to apply.
>
> **[3:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=195)** And again, you have to make sure they're applied in the correct order.
>
> **[3:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=199)** So evolving objects may be more time-intensive and nerve-wracking than previously thought.
>
> **[3:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=206)** This approach also forces that work onto a human versus say, software or a tool, which I'll get into more in a bit.
>
> **[3:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=214)** And last but not least, if you have multiple databases, you now need to maintain the version or state of each database, and frankly, that can mean a lot of state management.
>
> **[3:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=226)** So as you can imagine, all of this can quickly feel like a challenging undertaking.
>
> **[3:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=231)** So what's the alternative?
>
> **[3:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=234)** These challenges can be addressed using a declarative approach to database change management.
>
> **[4:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=240)** With a declarative approach, you declare objects once and update their definition as it evolves, typically in a single source-controlled file.
>
> **[4:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=251)** This means fewer files to maintain, along with a complete history of changes to the object.
>
> **[4:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=256)** Thanks to source control, making this a lot less error-prone.
>
> **[4:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=261)** And there isn't necessarily a sequence to follow either, so you don't have to worry about making sure that multiple scripts are executed in the correct order.
>
> **[4:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=270)** Now, of course, you may have other important files that also use a declarative approach, but the practice of running several scripts to evolve a single object is greatly minimized if not completely gone.
>
> **[4:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=284)** This approach means we can introduce changes, safely test them out in an environment of our choice, collaborate with teammates on those changes and keep track of it all.
>
> **[4:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=295)** This also means we can minimize risks to the pipeline and therefore the end user, all while maintaining DevOps best practices.
>
> **[5:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=304)** So which approach is better, imperative or declarative?
>
> **[5:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=307)** There isn't necessarily an approach that is better than the other.
>
> **[5:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=311)** The approach you pick is going to depend on what fits your data environment and team the best.
>
> **[5:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=317)** You may already be using an imperative or declarative tool for your approach.
>
> **[5:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=322)** If it works for you and your team, then great, you should stick with it.
>
> **[5:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=326)** In practice, we see that teams may use a combination of both approaches to meet their needs, and you most likely will need to use multiple tools to manage all Snowflake objects.
>
> **[5:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=337)** We also see that teams augment their approach with third-party tools like Schemachange or Liquibase to help them with DCM.
>
> **[5:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=345)** I won't go into detail on the various possible combinations of tools for these approaches in this video, but I am including a reading in this module that provides some more guidance.
>
> **[5:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=355)** Be sure to check it out to get a more holistic view of approaches to DCM with Snowflake.
>
> **[6:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=361)** In the context of DevOps, the declarative approach lends itself much better to DevOps practices for data pipelines, and this is the approach that we'll employ in our pipeline.
>
> **[6:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/database-change-management-dcm?u=76281980&t=372)** Join me in the next video to get hands-on with our declarative approach with Snowflake.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1), module (1)
> **Analogies:** for example (3), imagine (2)
> **File Paths:** 03.sql (2), 01.sql (1), 02.sql (1)
> **CLI Commands:** git (2), make (2)
> **Env Vars:** dcm (4)
> **Definitions:** is a  (2), known as (1)
> **Cross-References:** in the next (1)

#### Declarative approach with CREATE OR ALTER
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=0)** Now that you know a bit about imperative and declarative approaches for DCM, let's dive into Snowflake's declarative approach functionality.
>
> **[0:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=8)** The CREATE OR ALTER command.
>
> **[0:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=11)** You might be familiar with Snowflake's CREATE OR REPLACE command which will create an object if it doesn't exist, that's the CREATE part, or will drop an object and recreate it if it does exist, that's the OR REPLACE part.
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=25)** The CREATE OR ALTER command is a little different.
>
> **[0:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=28)** CREATE OR ALTER allows you to create an object if it doesn't exist or modify it in place by applying only new changes to that object without dropping the object. It's pretty neat, right?
>
> **[0:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=40)** This means we can easily use a declarative approach to manage objects in Snowflake.
>
> **[0:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=45)** And when we couple this with Snowflake's Git integration for source control, we have an approach that allows us to not only easily modify and evolve object definitions over time, but to also keep track of all changes.
>
> **[0:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=59)** All of this is strongly in line with DevOps best practices.
>
> **[1:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=63)** Here's how you would typically use the command.
>
> **[1:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=65)** You define a new object using CREATE OR ALTER.
>
> **[1:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=68)** This is the initial definition of the object.
>
> **[1:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=72)** Say weeks go by and now you need to change the definition of the object.
>
> **[1:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=77)** You'd simply locate the initial definition and make the new changes there.
>
> **[1:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=83)** When you run the command, Snowflake will do the hard work of recognizing only the new changes and applying them for you.
>
> **[1:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=90)** This is great because you can incrementally update objects when business needs require them to evolve.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=96)** What I find even neater is that any associations on that data are preserved.
>
> **[1:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=101)** I specifically mean that things like tag associations, attached policies, and privilege grants on those objects.
>
> **[1:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=109)** Those are not affected and simply remain intact.
>
> **[1:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=113)** Now be careful using this command.
>
> **[1:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=115)** It's so powerful that you can also introduce changes like removing object properties, which could affect data.
>
> **[2:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=123)** For example, if a modification to a CREATE OR ALTER table statement calls for dropping a column, any data that was in that column will also be dropped.
>
> **[2:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=134)** You can of course recover that data using Snowflake's time travel feature, but I call this out to help you be mindful when wielding this powerful statement.
>
> **[2:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=143)** And finally, if you run this command and it turns out that the object already matches the definition, then the object will simply remain unchanged.
>
> **[2:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=152)** Let's get hands-on with our declarative approach and use this command in our pipeline.
>
> **[2:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=156)** Now is a good time to pause a video if you need to log into your Snowflake account.
>
> **[2:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=160)** Okay. Let's start by creating a couple of branches on GitHub.
>
> **[2:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=165)** Start by navigating to your forked repo on GitHub.
>
> **[2:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=169)** Click the branches dropdown and click view all branches.
>
> **[2:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=174)** Next, click new branch. Type in staging.
>
> **[3:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=180)** Click create new branch.
>
> **[3:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=185)** Okay, great.
>
> **[3:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=186)** This branch represents work that we'll do against our staging data environment, which we called Staging Tasty Bytes. Anything merged into the staging branch, we'll deploy into this data environment.
>
> **[3:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=198)** We'll pull this branch into Snowflake shortly.
>
> **[3:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=200)** Let's create another branch.
>
> **[3:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=202)** Click new branch once more and now create a branch called Fix Missing Data.
>
> **[3:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=207)** Make sure you select staging from the dropdown at the bottom.
>
> **[3:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=212)** This will ensure that the Fix Missing Data branch is branched off of the staging branch.
>
> **[3:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=217)** If you don't see it, you may need to refresh your browser.
>
> **[3:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=220)** The flow that we want to follow to introduce changes into our pipeline is create a feature branch off of staging to introduce changes, merge our feature branch into staging.
>
> **[3:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=232)** This will deploy our changes into our staging environment.
>
> **[3:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=236)** Finally, merge from staging into main.
>
> **[3:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=239)** This will deploy our changes into the production environment.
>
> **[4:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=242)** Don't worry about the details of how this will work just yet, we'll implement all of this in the next exercise.
>
> **[4:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=249)** All right.
>
> **[4:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=249)** We're going to use a Snowflake notebook to do our development work.
>
> **[4:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=253)** The cell-based development environment will be perfect for helping us incrementally test code and introduce fixes.
>
> **[4:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=261)** This will help us make sure that our changes work as expected before pushing them up to the repo for review.
>
> **[4:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=267)** In Snowflake, click on projects then notebooks.
>
> **[4:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=271)** At the top, click on the dropdown and click create from repository.
>
> **[4:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=276)** This will open a modal that will allow you to name the notebook and select the notebook file from within a repository.
>
> **[4:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=283)** Name the notebook, Hamburg Pipeline.
>
> **[4:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=287)** Next, click on select IPYNB file.
>
> **[4:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=291)** This will open a modal for you to select the file.
>
> **[4:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=293)** We must first specify the database and where the repo lives.
>
> **[4:57](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=297)** Click select database and select course_repo.
>
> **[5:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=304)** Click on the repo we have connected.
>
> **[5:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=306)** Now let's pull in the branches that we created on GitHub.
>
> **[5:10](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=310)** Click on the fetch button to bring in the branches.
>
> **[5:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=315)** Next, click on branch and set the branch to Fix Missing Data.
>
> **[5:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=321)** Remember, this is the feature branch we want to do our development work on.
>
> **[5:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=325)** Next, locate the notebook file. You'll find it inside of module-1, hamburg_weather notebooks.
>
> **[5:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=333)** Click on the IPYNB file. With it highlighted, click select file.
>
> **[5:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=339)** Next, complete the rest of the modal.
>
> **[5:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=342)** For notebook location, select Staging Tasty Bytes and select the public schema.
>
> **[5:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=348)** Leave the remaining settings as they are.
>
> **[5:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=351)** Click create.
>
> **[5:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=353)** This will create and open the notebook for you on the feature branch.
>
> **[5:57](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=357)** Okay. So what exactly are we going to do?
>
> **[6:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=360)** We're going to fix our broken pipeline using DevOps best practices.
>
> **[6:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=365)** We'll do some exploratory work on this feature branch against our staging environment.
>
> **[6:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=369)** We'll introduce and test some changes out, and when we're ready, we'll apply those changes to the object definition in the source code and push the changes up for review. In the following videos, we'll implement automated deployments, but for now, let's dive back in and fix our pipeline. So what might be wrong with the app?
>
> **[6:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=389)** I remember that it rendered perfectly well, but didn't show any data, so I suspect there's some data missing.
>
> **[6:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=396)** Let's check things out.
>
> **[6:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=397)** Start by running the first cell that sets our context.
>
> **[6:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=401)** This helps us make sure we're working against our staging environment.
>
> **[6:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=405)** Next, let's take a look at the tables that contain the raw data.
>
> **[6:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=409)** These are in the raw POS schema.
>
> **[6:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=412)** Run the next cell.
>
> **[6:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=415)** Okay, yes, it looks like there are two tables that are missing data, country and daily sales Hamburg.
>
> **[7:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=422)** I know that daily sales Hamburg derives its data from the raw tables.
>
> **[7:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=427)** So I suspect the reason it doesn't have any data is because the country table doesn't have any data in it.
>
> **[7:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=433)** And if we're analyzing food truck sales for cities around the world, I imagine that country data is critical to the pipeline.
>
> **[7:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=440)** So let's fix this.
>
> **[7:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=442)** Let's take a look at the Load_Tasty_Bytes.sql file in VS Code.
>
> **[7:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=449)** It looks like the table is created just fine, but why doesn't it have data?
>
> **[7:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=454)** Scrolling down, I see that all the data loading is at the bottom of the file.
>
> **[7:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=461)** Aha, it looks like the data loading for this table was commented out.
>
> **[7:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=466)** So the data was never loaded into the table.
>
> **[7:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=468)** That makes sense.
>
> **[7:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=470)** Let's run that in the notebook.
>
> **[7:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=472)** I'll copy it, paste it in a new SQL cell and uncomment it.
>
> **[8:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=488)** I'll replace ENV with the word STAGING. You could do this programmatically, but for two lines, it's not worth the effort to me.
>
> **[8:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=498)** Let's run the cell.
>
> **[8:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=501)** Oh, oh, there's an error.
>
> **[8:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=504)** It looks like we're trying to load more columns than we defined.
>
> **[8:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=508)** Maybe that's why it was commented out.
>
> **[8:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=510)** So let's fix this.
>
> **[8:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=511)** Let's go back and look at the Load_Tasty_Bytes.sql file in VS Code.
>
> **[8:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=524)** Copy the table definition for the country table and paste it into a new SQL cell.
>
> **[8:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=533)** Let's do two things.
>
> **[8:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=535)** First, I'll rebuild this table in declarative fashion.
>
> **[8:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=539)** Edit the first line to be CREATE OR ALTER.
>
> **[9:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=543)** Update the ENV word to STAGING.
>
> **[9:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=546)** Run the cell to update the table and that's it.
>
> **[9:10](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=550)** That's all it takes to manage an object declaratively in Snowflake.
>
> **[9:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=555)** How easy was that?
>
> **[9:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=556)** Next, I'll add the missing column.
>
> **[9:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=558)** I'll type city_ID(19,0).
>
> **[9:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=567)** Be sure to add this at the end of the column list.
>
> **[9:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=570)** Run the cell once more.
>
> **[9:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=572)** Since it's declaratively managed now, it's easy to add a column in without needing to drop and recreate the table.
>
> **[9:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=579)** Okay, that worked. There's of course still no data in it.
>
> **[9:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=583)** Let's run our previous cell again to load data into it.
>
> **[9:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=588)** Okay, great. It loaded data.
>
> **[9:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=590)** Let's check our app out. Open the editor.
>
> **[10:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=601)** Make sure the ENV environment is set to STAGING.
>
> **[10:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=605)** You can see we templatize here as well with Python f-string.
>
> **[10:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=609)** Run the code and there it is.
>
> **[10:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=613)** The app is fixed. Looks like our changes work.
>
> **[10:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=616)** Great job.
>
> **[10:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=618)** This pattern of writing code, running code, and verifying the code is quite normal.
>
> **[10:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=623)** It's all part of development work.
>
> **[10:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=625)** This helps us make sure that we push up a pull request that we're confident does what we say it does.
>
> **[10:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=631)** It also helps our colleagues to test and reproduce our code in their environments.
>
> **[10:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=636)** Okay. Now I feel really confident about my code.
>
> **[10:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=639)** Let's create a pull request. Open VS Code.
>
> **[10:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=642)** In the terminal, run git fetch.
>
> **[10:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=646)** Next, type git switch fix missing data.
>
> **[10:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=652)** This will switch us to the feature branch that we created earlier.
>
> **[10:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=655)** To confirm, type git branch.
>
> **[10:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=658)** Okay, we're on the correct branch.
>
> **[11:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=661)** Open the Load_Tasty_Bytes.sql file.
>
> **[11:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=666)** Let's add our solution here.
>
> **[11:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=667)** We can simply copy the work from the notebook.
>
> **[11:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=680)** Copy the table definition and paste it into the file.
>
> **[11:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=688)** Make sure we read templatize here.
>
> **[11:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=694)** And let's also uncomment the copy into command.
>
> **[11:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=702)** Save your changes.
>
> **[11:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=704)** Run git status, and we see that our file was modified.
>
> **[11:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=711)** Next, run git add -p.
>
> **[11:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=715)** This will let me see what changes we made to the file as a sanity check.
>
> **[11:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=719)** This looks correct.
>
> **[12:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=720)** So I'll type Y and hit enter.
>
> **[12:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=723)** This also looks correct, so I'll do the same thing.
>
> **[12:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=727)** Okay, let's commit our work.
>
> **[12:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=728)** I'll type git commit -M fix missing data.
>
> **[12:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=735)** Let's now push up our branch.
>
> **[12:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=737)** Type git push origin fix missing data.
>
> **[12:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=743)** Okay, great. It was pushed up.
>
> **[12:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=745)** Let's go to our forked repo on GitHub to create the pull request.
>
> **[12:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=751)** You'll notice a message about recent changes on the branch.
>
> **[12:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=754)** Click on the button here to compare changes and start the pull request.
>
> **[12:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=759)** Be careful about how you create the request.
>
> **[12:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=762)** Make sure that the repo base represents your fork.
>
> **[12:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=766)** After doing that, make sure you select the staging branch as the base branch.
>
> **[12:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=772)** So the UI should show that you want to merge the fixed missing data branch into staging.
>
> **[12:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=778)** Add a title, feel free to add more context, and then create the request.
>
> **[13:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=787)** Okay. Let's stop here for now and pick up in the next couple of videos.
>
> **[13:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=793)** Great job. We did a lot in this exercise.
>
> **[13:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=795)** We identified the issue with our pipeline, declaratively created the country table using CREATE OR ALTER, and loaded data into the table.
>
> **[13:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=804)** This fixed our broken pipeline and faulty application.
>
> **[13:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=808)** We also did all of our work on a feature branch and used a notebook to help us feel confident about our proposed changes.
>
> **[13:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=816)** Finally, we pushed up the changes as a pull request for consideration and now you're on your way to implementing DevOps best practices.
>
> **[13:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/declarative-approach-with-create-or-alter?u=76281980&t=824)** With that, join me in the next video to learn about continuous integration and continuous delivery for data pipelines.

> [!info]- Semantic Content
>
> **Code Keywords:** let (25), finally, (3), this. (2), switch (2), require (1)
> **Env Vars:** create (9), alter (7), env (3), staging (3), replace (2)
> **CLI Commands:** make (9), git (8), find (2), python (1)
> **UI Navigation:** click on (8), select the (4), dropdown (3), open the (3), go to (1)
> **Tools:** github (4), vs code (3), terminal (1)
> **File Paths:** load_tasty_bytes.sql (3)
> **Cross-References:** in the next (3)
> **Code Identifiers:** course_repo (1), hamburg_weather (1)

#### Continuous integration and continuous delivery (CI/CD) for data pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=0)** If DevOps practices help you collaborate with many teammates and increase your velocity in introducing changes, how do they help ensure that those changes are correct and reliable and don't negatively impact say a data pipeline, for example?
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=16)** This is where the concepts of continuous integration and continuous delivery often shortened to CI/CD play an important role.
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=25)** Continuous integration refers to the practice of introducing changes into a central code base and running automated tests and builds on those introduced changes.
>
> **[0:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=36)** This practice helps teams quickly find and address any introduced bugs, while also validating the correctness of those new changes against the existing code base.
>
> **[0:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=46)** If anything is out of the ordinary, say a test fails for some reason due to a breaking change, you're able to address it before the change is rolled out to large swathes of end users or systems.
>
> **[0:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=59)** Oftentimes, this entire workflow is automated through the use of a third-party tool.
>
> **[1:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=65)** Continuous delivery refers to the practice of pushing changes into dedicated environments.
>
> **[1:10](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=70)** By environments, I mean a data environment used for a specific purpose.
>
> **[1:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=76)** For example, when building say apps or pipelines, it's very common for teams to have multiple development environments, each with their own purpose.
>
> **[1:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=85)** One might be a staging environment where teams can safely test out these new changes in a place that won't impact end users.
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=93)** And by test, I don't mean running automated tests, that likely already happened before making it into an environment.
>
> **[1:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=101)** I mean, actually seeing and interacting with the change in the app or pipeline.
>
> **[1:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=106)** This helps engineers observe and interact with that change to see how it works or how it doesn't work.
>
> **[1:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=114)** Another environment might be a production environment, and this typically represents the real environment where end users actually operate.
>
> **[2:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=122)** And these are just a couple of examples.
>
> **[2:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=124)** I've seen environments of all sorts of different names, from development to staging, to testing, to production.
>
> **[2:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=132)** In fact, production is quite common from a naming perspective.
>
> **[2:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=136)** You set up environments just like these earlier.
>
> **[2:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=140)** In this course, we're going to focus on the latter part of CI/CD, continuous delivery.
>
> **[2:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=146)** There are many different testing frameworks and approaches for testing code in an automated fashion and we won't be diving into the details of that.
>
> **[2:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=154)** This is because implementations can vary immensely from data environment to data environment.
>
> **[2:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=160)** Rather, we're going to focus on the functionality and tools that Snowflake provides to help you implement efficient continuous delivery of data pipelines.
>
> **[2:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=169)** We'll focus on introducing changes using source control, deploying those changes to specific environments to test out the changes, and automating this entire workflow with the command line and GitHub Actions.
>
> **[3:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=182)** Here's specifically what we'll do.
>
> **[3:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=184)** First, we're going to use Snowflake CLI.
>
> **[3:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=187)** Earlier, I mentioned using tools to move quickly as part of DevOps, and oftentimes teams use product-specific command line interfaces to achieve this.
>
> **[3:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=198)** We'll use the Snowflake CLI to help with deployment of changes into multiple environments.
>
> **[3:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=204)** Second, since we're using GitHub to host our source-controlled files, we'll also use GitHub Actions to automate the deployment of our pipelines.
>
> **[3:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=213)** We'll dive into the details of different components of this in an upcoming exercise and I'll walk you through the process step by step.
>
> **[3:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=221)** We've now covered two of the three DevOps best practices for data engineering, source control, and declarative change management.
>
> **[3:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/continuous-integration-and-continuous-delivery-ci-cd-for-data-pipelines?u=76281980&t=230)** Let's dive into the third, implementing continuous delivery for our data pipelines.

> [!info]- Semantic Content
>
> **Tools:** github (3), command line (2)
> **CLI Commands:** cd (2), find (1)
> **Analogies:** for example (2), just like (1)
> **Code Keywords:** this. (1), let (1)
> **Env Vars:** cli (2)
> **Definitions:** refers to (2)
> **Prerequisites:** set up (1)

#### Implementing continuous delivery for our data pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=0)** Let's take our DevOps practices full circle for our pipeline and actually implement continuous delivery.
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=7)** For our pipeline, continuous delivery will mean introducing changes that are source-controlled.
>
> **[0:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=13)** We'll use Git and GitHub for this.
>
> **[0:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=15)** It'll also mean deploying and testing changes out in a development environment in Snowflake.
>
> **[0:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=21)** This would happen before deploying those changes to our production environment, which is also in Snowflake.
>
> **[0:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=28)** We'll also automate the deployment of these changes to either environment using a third-party tool.
>
> **[0:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=33)** In our case, we'll use GitHub Actions but you should know that there are several other popular options out there that can do what GitHub Actions does.
>
> **[0:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=42)** And finally, we'll use tools to help speed up continuous delivery.
>
> **[0:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=46)** In addition to GitHub Actions, we'll use Snowflake CLI to deploy changes to our Snowflake environments.
>
> **[0:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=53)** Before diving in, let's quickly reorient ourselves.
>
> **[0:57](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=57)** Remember that the last change we made was to create a table declaratively using CREATE OR ALTER.
>
> **[1:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=63)** This helped us fix our pipeline.
>
> **[1:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=66)** We did all of this on a feature branch called Fix Missing Data and pushed it up to create a pull request.
>
> **[1:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=73)** In this exercise, we'll set up the infrastructure to help us implement continuous delivery.
>
> **[1:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=79)** We'll use GitHub Actions and configure it to deploy changes to our staging and production environments on certain triggers.
>
> **[1:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=87)** The general workflow will push changes to GitHub using Snowflake CLI and GitHub Actions will be able to recognize the push and deploy the changes to the specified environment.
>
> **[1:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=98)** Sounds pretty cool, right?
>
> **[1:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=100)** So what is GitHub Actions?
>
> **[1:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=101)** It's a CI/CD platform by GitHub.
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=104)** It allows us to automate our builds, tests, and our deployments.
>
> **[1:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=109)** It does this by following a set of instructions that we define within GitHub Actions.
>
> **[1:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=114)** It's a very common tool for automating these workflows in engineering teams.
>
> **[1:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=119)** Let's configure GitHub Actions to help us automate our deployments to Snowflake.
>
> **[2:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=124)** Start by navigating to our forked repo on GitHub.
>
> **[2:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=128)** Click on Actions.
>
> **[2:10](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=130)** This is where we can configure an action for our repo.
>
> **[2:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=133)** Click on the green button indicating that you understand your workflows.
>
> **[2:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=137)** Click on new workflow.
>
> **[2:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=139)** Click on set up a workflow yourself.
>
> **[2:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=142)** You'll be taken to a file editor. GitHub is doing some work for us here.
>
> **[2:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=146)** It's creating the directory and the file that will hold the instructions that our GitHub Action needs to follow.
>
> **[2:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=152)** Notice that it creates a .github/workflows directory and places a file in there called main.yaml.
>
> **[2:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=160)** You can name the file whatever you want, I'm going to leave mine as is for now.
>
> **[2:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=165)** So what should we write in here?
>
> **[2:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=167)** Well, workflows in GitHub Actions can be customized quite extensively.
>
> **[2:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=171)** So to stay on the right track, I've written some of the workflow for us.
>
> **[2:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=175)** Navigate to the module-1 folder in our repo and locate the main.yaml file.
>
> **[3:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=180)** It's in the hamburg_weather folder.
>
> **[3:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=183)** Copy its contents and paste it into the main.yaml file that GitHub created for us.
>
> **[3:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=187)** Let's quickly take a look at what this does.
>
> **[3:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=191)** At the top, we specify that this workflow should trigger when there's a push or a pull request that is merged to either the staging or main branches.
>
> **[3:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=200)** Main represents our production branch in this case.
>
> **[3:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=203)** For this workflow to be able to deploy into our Snowflake account, it needs credentials to our account.
>
> **[3:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=209)** So we specify them as GitHub secrets which we'll set up shortly.
>
> **[3:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=213)** We then set environment variables that are used by the workflow based on which branch is merged to or pushed to.
>
> **[3:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=220)** These variables match the environments that we have set up in our Snowflake account.
>
> **[3:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=226)** This is so that when the workflow deploys our changes into Snowflake, it knows which environment to deploy to. The workflow installs Snowflake CLI and then fetches the latest changes in our repo.
>
> **[4:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=240)** Finally, the workflow calls snow git execute.
>
> **[4:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=243)** Remember that you used this command earlier to set up our data environments.
>
> **[4:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=247)** As you can see, it'll execute the data directory in the pipeline folder.
>
> **[4:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=252)** This is where you could configure what you want to execute.
>
> **[4:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=255)** Let's complete the file before we commit our work.
>
> **[4:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=259)** On line 64, this statement is configured to deploy the correct data environment based on what branch we're on, but it's missing the information it needs.
>
> **[4:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=270)** Delete fix me and type ${github_ref_name}.
>
> **[4:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=287)** This will interpolate the value of github_ref_name into the directory here and github_ref_name is a GitHub Actions shortcut for the name of the branch.
>
> **[4:57](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=297)** On the next line, we need to do something similar and set the environment variable.
>
> **[5:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=305)** Type env.deploy_env.
>
> **[5:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=309)** You can see at the top that deploy_env is set based on the target branch we're on.
>
> **[5:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=314)** If it's the staging branch we're on, it's set to STAGING.
>
> **[5:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=318)** If it's on main, it's set to PROD.
>
> **[5:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=321)** So let's save our work.
>
> **[5:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=323)** Commit the changes and select the option to create a new branch in the process.
>
> **[5:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=328)** This way we can first put this workflow onto the staging branch, then later we can put it on main.
>
> **[5:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=334)** Create the pull request.
>
> **[5:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=339)** Be sure to select staging as your base branch.
>
> **[5:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=352)** Then proceed to merge it.
>
> **[6:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=360)** Repeat the process by merging this change into main.
>
> **[6:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=363)** Create a new pull request.
>
> **[6:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=373)** This time, select main as your base branch and merge staging into it.
>
> **[6:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=397)** Proceed to merge it.
>
> **[6:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=401)** Now we have our workflow on both branches.
>
> **[6:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=405)** That's it. Our workflow is now set up.
>
> **[6:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=408)** Our changes are now on GitHub and we need to sync our Git repo object in Snowflake to reflect the latest changes.
>
> **[6:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=415)** Navigate to Snowflake and locate the Git repo object.
>
> **[7:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=425)** Click the fetch button. Great.
>
> **[7:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=429)** Now we're synced to what we have on GitHub.
>
> **[7:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=432)** To get details on when this action runs, navigate to Actions in GitHub.
>
> **[7:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=438)** Oh, look at this.
>
> **[7:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=440)** This entry indicates that the workflow attempted to run but encountered an error.
>
> **[7:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=446)** You'll see here that it's broken because of missing credentials.
>
> **[7:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=450)** So let's set that up. Click on Settings.
>
> **[7:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=454)** Next, click on Secrets and Variables on the left-hand side.
>
> **[7:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=458)** Then click on Actions.
>
> **[7:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=461)** Our workflow is looking for a secret called Snowflake user and Snowflake password.
>
> **[7:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=466)** So let's create these.
>
> **[7:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=468)** Start by creating Snowflake user and input your Snowflake username.
>
> **[7:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=476)** Save the secret.
>
> **[7:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=478)** Now create another secret for Snowflake password and paste in the password to the account.
>
> **[8:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=485)** If you've configured your local config.toml file correctly as indicated in a previous reading, then you can find this info there.
>
> **[8:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=493)** Enter the password and save the secret.
>
> **[8:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=497)** Let's create one more secret for our account identifier.
>
> **[8:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=501)** Call it Snowflake Account.
>
> **[8:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=503)** For the secret, paste in the account identifier.
>
> **[8:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=506)** You can grab this from your local config.toml file or from within Snowflake.
>
> **[8:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=511)** Save the secret. Okay, that's it.
>
> **[8:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=514)** Let's try out our action. Navigate to the pull requests.
>
> **[8:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=518)** Merge in the pull request.
>
> **[8:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=520)** Remember that it's merging into staging.
>
> **[8:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=534)** Let's now go to GitHub Actions and see what's happening.
>
> **[9:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=540)** Navigate to Actions.
>
> **[9:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=541)** Here you'll see the action running.
>
> **[9:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=544)** Click on deploy data environment.
>
> **[9:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=548)** You'll see everything that is being run as part of the action.
>
> **[9:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=552)** These are all the instructions that we specified in the main.yaml file.
>
> **[9:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=556)** We'll need to wait for this entire process to be successful before we can go into Snowflake to observe the deployed changes.
>
> **[9:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=563)** What's cool is that if this fails, you'll also observe the failures here.
>
> **[9:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=569)** Okay. Looks like it was successful, amazing.
>
> **[9:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=572)** Since we pushed our changes to the staging environment, we should navigate to our corresponding staging database in Snowflake which represents that environment.
>
> **[9:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=581)** Let's go ahead and confirm that this object was indeed created.
>
> **[9:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=596)** And yes, those are our changes from earlier.
>
> **[9:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=599)** Let's now imagine that because this change looks good, we create a new pull request on GitHub against the main branch for a teammate to review.
>
> **[10:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=606)** Navigate to your forked repo and then click on pull requests.
>
> **[10:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=612)** Create a new pull request.
>
> **[10:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=616)** We want to introduce our changes into production, so let's set our branches accordingly. Select the forked repo as the base, then select main as the branch. For compare, select staging.
>
> **[10:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=630)** So it should be configured to show that staging is attempting to merge into main.
>
> **[10:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=635)** Add any relevant details below and click create pull request.
>
> **[10:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=653)** Once the pull request or PR has been created, you'd typically tag a teammate here for review.
>
> **[11:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=660)** We're not collaborating with the team here, so let's just imagine you're also the approver.
>
> **[11:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=665)** So let's go ahead and approve the changes and merge them in.
>
> **[11:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=671)** Navigate to Actions once more and click on a running workflow.
>
> **[11:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=678)** Click the one that's running against the main branch.
>
> **[11:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=680)** Let's see if this is successful.
>
> **[11:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=691)** Yes, it was. Let's confirm in Snowflake.
>
> **[11:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=694)** We'll need to check in the production environment this time.
>
> **[11:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=702)** There it is. All right.
>
> **[11:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=706)** You've implemented continuous delivery to deploy changes to our pipeline.
>
> **[11:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=710)** This will help us verify changes in a safe and collaborative way before they're rolled out to production.
>
> **[11:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=716)** This is cutting-edge stuff that you're doing.
>
> **[11:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/implementing-continuous-delivery-for-our-data-pipeline?u=76281980&t=719)** Join me in the next video to recap what we've learned about DevOps with Snowflake.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), this. (2), finally, (2), case, (1), module (1)
> **Tools:** github (24)
> **UI Navigation:** click on (10), navigate to (8), select the (2), go to (1)
> **Prerequisites:** set up (6), configure (4)
> **Env Vars:** cli (3), create (1), alter (1), staging (1), prod (1)
> **File Paths:** main.yaml (4), config.toml (2)
> **CLI Commands:** git (4), cd (1), find (1)
> **Code Identifiers:** github_ref_name (3), deploy_env (2), hamburg_weather (1)

#### Recap and best practices for DevOps with Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=0)** Let's recap everything that you learned about DevOps with Snowflake.
>
> **[0:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=5)** By this point, you understand that DevOps is a collection of best practices that enable teams to easily collaborate, track their work, and deploy changes quickly and safely.
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=16)** There's more to it than that, but these are the practices that we explored in this module.
>
> **[0:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=21)** For our purposes, we focused on how these practices are commonly realized through the use of collaborative tools, automated workflows, source control, and command-line tooling.
>
> **[0:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=33)** We specifically centered on how these practices can be incorporated for data engineering and we implemented them directly into our pipeline.
>
> **[0:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=42)** You also learned how Snowflake supports each of these aspects.
>
> **[0:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=46)** For source control, you know Snowflake's Git integration makes it easy to keep track of changes to your pipeline.
>
> **[0:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=53)** You also saw how Snowflake's declarative functionality, CREATE OR ALTER, makes it easy to incrementally iterate on database objects.
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=62)** Paired with source control, this is a powerful declarative approach.
>
> **[1:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=67)** For collaboration, we use Snowflake's Git integration with GitHub so that we can build pipelines collaboratively with teammates.
>
> **[1:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=75)** For automation, you saw how easy it is to integrate with a third-party tool like GitHub Actions to automate the deployment of changes into Snowflake.
>
> **[1:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=85)** And last, for tooling, you use Snowflake CLI to push changes up to GitHub which triggered deployments into Snowflake.
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=92)** All of this is quite modern.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=94)** This is a workflow that is common in software engineering like application development, for example, and is increasingly becoming more common in data engineering.
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=104)** One thing you should keep in mind is that what you learned in this module is pretty cutting-edge stuff with Snowflake.
>
> **[1:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=110)** Many of the pieces to get started with DevOps are there but just know that our teams are continuously adding new features and constantly improving existing ones.
>
> **[2:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=120)** There are also many other third-party tools to help augment some of the practices we covered here, like Database Change Management.
>
> **[2:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=128)** Great job.
>
> **[2:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-devops-with-snowflake?u=76281980&t=129)** Join me in the next module as we go one step further and learn about how to implement observability into your data pipelines.

> [!info]- Semantic Content
>
> **Code Keywords:** module (3), let (1)
> **Env Vars:** create (1), alter (1), cli (1)
> **Tools:** github (3)
> **Definitions:** is a  (3)
> **CLI Commands:** git (2)
> **Cross-References:** we covered (1), in the next (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)


### 3. 2. Observability with Snowflake

#### Observability for data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=11)** Years ago, I worked as a transmission protection engineer for one of the biggest public utilities in the United States.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=18)** I was tasked with programming relays to make sure transmission lines of the highest voltages recovered independently when there was an electrical fault.
>
> **[0:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=26)** I thought this was a huge responsibility at the time, and it was, but it paled in comparison to what I saw when I visited the headquarters.
>
> **[0:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=35)** There was a huge room full of hundreds of people keeping an eye on all sorts of things on many different screens 24/7.
>
> **[0:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=44)** There were groups keeping track of load on the system, groups keeping track of outages, weather, and much more.
>
> **[0:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=50)** Being able to keep track of dimensions like these was crucial to making sure the electrical grid maintained strict uptime requirements for customers.
>
> **[0:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=59)** There are many parallels in the data engineering world.
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=62)** Data engineers must frequently keep track of important data pipeline metrics to understand pipeline performance and to take action when something is out of line.
>
> **[1:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=71)** This practice is known as Observability.
>
> **[1:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=75)** Observability specifically means employing tools and practices to be able to actively and continuously monitor the flow of data through a data pipeline.
>
> **[1:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=84)** When properly implemented, it can help data engineers diagnose issues so that they can take action and drop solutions when needed.
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=92)** At a high level, observability helps data engineers keep an eye on a pipeline's health and quality.
>
> **[1:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=99)** By now, you know that pipelines are made up of many different parts.
>
> **[1:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=103)** They're made up of ingestion logic, code for transformations, automation schedules, delivery methods, integrations with additional tools, and much more.
>
> **[1:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=113)** This also means that there are many places where a pipeline can potentially fail.
>
> **[1:57](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=117)** As a data engineer, you likely want to be able to take proactive action to ensure things don't fail rather than reactively take action when something does fail.
>
> **[2:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=128)** This is a key reason why pipeline observability is core to building resilient pipelines.
>
> **[2:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=133)** So what exactly are data engineers observing in their pipelines?
>
> **[2:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=138)** Well, all sorts of things.
>
> **[2:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=140)** For example, it's common to keep an eye on things like failures.
>
> **[2:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=143)** This is a big focus and data engineers frequently track failures related to data quality, data loading, failed queries, connection failures, scheduling hiccups, and much more.
>
> **[2:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=155)** Throughput: this refers to the rate at which data is being transferred through the pipeline.
>
> **[2:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=160)** Has it dropped? If so, why?
>
> **[2:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=163)** And what's being affected downstream?
>
> **[2:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=166)** Latency: this is a bit related to throughput, focusing specifically on the speed of certain aspects.
>
> **[2:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=173)** This could be keeping an eye on the rate at which data makes it into Snowflake or the latency related to a query or maybe the end-to-end latency of the pipeline.
>
> **[3:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=182)** Is it successfully delivering its outputs at the required speed?
>
> **[3:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=186)** And if not, is something getting in the way?
>
> **[3:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=189)** Compute utilization, meaning, is the pipeline making the best use of the compute resource associated with it?
>
> **[3:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=196)** Does it need to change?
>
> **[3:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=198)** Cost: you might also keep an eye on the cost of a pipeline, specifically related to the cost to transfer data, any computationally complex queries, and general usage of compute resources.
>
> **[3:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=211)** These are some examples but they generally highlight the core of what data engineers might track for a pipeline.
>
> **[3:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=219)** So how exactly do data engineers implement observability into their pipelines to keep track of metrics like these?
>
> **[3:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-for-data-engineering?u=76281980&t=225)** Join me in the next video to learn about some of the fundamental techniques for doing this.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), known as (1), means that (1), refers to (1)
> **Code Keywords:** public (1), this. (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### Foundational concepts of observability
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=0)** It's one thing to be able to observe a failure, but it's another to be able to pinpoint the exact root cause behind that failure.
>
> **[0:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=8)** This is why understanding the foundational concepts of observability is critical.
>
> **[0:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=14)** Observability is often made up of three core pillars: logs, traces, and metrics.
>
> **[0:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=21)** These are important to understand before diving into implementing observability.
>
> **[0:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=26)** Let's understand each one in a little more detail.
>
> **[0:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=30)** Logs are immutable, timestamped records of events that have occurred.
>
> **[0:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=35)** They capture information about processes that have started, completed, or failed.
>
> **[0:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=40)** You can think of them as receipts for individual events that occur in a system.
>
> **[0:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=45)** Traces, on the other hand, are much more detailed.
>
> **[0:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=48)** They represent the series of related events that occurred for actions taken within a system.
>
> **[0:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=54)** They're often chained together in a time series fashion.
>
> **[0:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=58)** For example, a trace could represent the several events that occurred when moving data from say source to destination.
>
> **[1:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=64)** It might include things like connection requests, connection acknowledgments, transfer initiations, and more.
>
> **[1:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=72)** And each of these events would be connected to a timestamp.
>
> **[1:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=76)** Traces don't necessarily represent a summarized final outcome but rather represent the itemized journey of an activity.
>
> **[1:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=84)** Because of this, traces are absolutely critical when debugging and pinpointing a root cause.
>
> **[1:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=90)** And finally, metrics. Metrics are a little unique.
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=95)** They represent numerical data about a system's performance and health.
>
> **[1:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=100)** Sometimes they might represent a single raw measurement.
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=104)** Other times, they might represent an aggregation of measurements.
>
> **[1:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=107)** They can be used to represent things like total number of requests, CPU, GPU and memory usage, latency distribution, and more.
>
> **[1:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=118)** The combination of these three aspects is what helps data engineers use observability to troubleshoot and fix issues in a pipeline.
>
> **[2:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=126)** This is because metrics provide great information for identifying system-wide issues, traces provide support in identifying which step in a chain is causing the issue, and logs provide support for detailed debugging and root cause analysis.
>
> **[2:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=143)** So if something fails, you probably don't just want a failure output message.
>
> **[2:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=148)** For effective observability, you want a detailed trail of what's occurred so that you can understand exactly what failed to execute, along with the conditions that were present in the system when that thing failed.
>
> **[2:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=162)** Logs, traces, and metrics help you achieve this for data pipelines.
>
> **[2:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=167)** And when used effectively, you'll be able to easily tell whether a failure is related to transformation logic, data quality, compute resources, or anything else you're keeping track of.
>
> **[2:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=179)** And you'd be able to do this without diving into a line-by-line audit of your code.
>
> **[3:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/foundational-concepts-of-observability?u=76281980&t=185)** So join me in the next video to understand how Snowflake supports observability.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1), finally, (1)
> **Env Vars:** cpu (1), gpu (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)

#### Observability with Snowflake Trail
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=0)** We've covered the foundational concepts of observability, so how exactly does Snowflake implement them?
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=7)** Observability with Snowflake is made up of a few foundational objects and features: event tables, alerts, and notifications.
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=16)** Event tables are a special type of table in Snowflake.
>
> **[0:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=20)** They're used for storing logs and traces that are generated from code in your Snowflake environment.
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=25)** They're straightforward to set up and use, and I'll show you how to do that shortly.
>
> **[0:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=31)** If you need to record an alert when data in Snowflake meets certain conditions, you can use a Snowflake alert.
>
> **[0:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=37)** These are very handy when combined with notifications so that you can help promote action on your team, and this is because you can take alerts one step further with notifications.
>
> **[0:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=48)** For example, you can use an alert to send a notification to say an e-mail address or a queue.
>
> **[0:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=55)** You can imagine specific notifications being useful to your teammates who may be keeping track of different dimensions of a data pipeline.
>
> **[1:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=63)** This collective set of native features within Snowflake represents Snowflake's observability framework, formally known as Snowflake Trail.
>
> **[1:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=72)** This framework makes it easy to apply the foundational concepts that we just covered to your data pipelines. Apart from its ease of use, my favorite thing about Snowflake Trail is that it's built on the OpenTelemetry standard.
>
> **[1:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=85)** If you're not familiar with it, the OpenTelemetry standard is a vendor-neutral, open-source standard that defines a consistent way to capture telemetry like logs, traces, and metrics.
>
> **[1:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=98)** This means that if you've worked with Telemetry and other platforms that follow the standard, then your experience with Snowflake Trail will be familiar and seamless.
>
> **[1:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-snowflake-trail?u=76281980&t=107)** So join me in the next exercise to get hands-on with a foundational element of observability in Snowflake, event tables.

> [!info]- Semantic Content
>
> **Definitions:** known as (1), is a  (1), means that (1)
> **Analogies:** for example (1), imagine (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)

#### Event Tables in Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=0)** Event tables are the core foundational object in Snowflake that you can use to store telemetry about your pipelines.
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=7)** They're mostly like your common table object in Snowflake, but they're a little special in the sense that they're specifically designed for capturing telemetry.
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=16)** Event tables are where you'll store logs and traces from code in your Snowflake environment.
>
> **[0:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=21)** Snowflake provides a default event table in all Snowflake accounts, but you can also create your own event tables.
>
> **[0:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=28)** When you create an event table, you'll notice that it's created with a default set of columns.
>
> **[0:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=33)** These columns follow the data model set by the OpenTelemetry standards.
>
> **[0:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=37)** This adherence to an open standard makes it easy to implement observability with familiarity and quickly derive insights from your logs and traces in Snowflake.
>
> **[0:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=47)** Let me show you how easy it is to set up and use event tables.
>
> **[0:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=51)** Now is a good time to pause the video and log into your Snowflake account.
>
> **[0:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=56)** Start by opening a new SQL worksheet.
>
> **[1:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=63)** Set your role to account admin.
>
> **[1:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=66)** Snowflake's default event table lives inside the snowflake.telemetry schema.
>
> **[1:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=71)** Let's query it so that we can view its columns.
>
> **[1:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=74)** Type use database snowflake, use schema telemetry.
>
> **[1:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=86)** Select star from events.
>
> **[1:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=91)** Run this code.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=96)** Of course, there's nothing in this table because we haven't captured any telemetry, but from this query, you can see the columns that the table uses.
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=104)** Let's take a better look.
>
> **[1:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=107)** Type describe table events.
>
> **[1:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=112)** This will give you a better sense of what the columns are intended to capture.
>
> **[1:57](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=117)** If you scroll to the right, you'll see there's a comment describing each column.
>
> **[2:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=121)** As you can see, some of these columns are reserved for future use, some of the columns are related to the timestamps in UTC which represent the event occurrence timestamp, some columns are for tracing, and more.
>
> **[2:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=134)** And again, Snowflake sets up this event table for you by default.
>
> **[2:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=138)** Okay. But rather than use a default event table, let's create our own event table that we can use to capture telemetry.
>
> **[2:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=145)** In the worksheet, type use database Staging_Tasty_Bytes.
>
> **[2:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=151)** Create or replace schema telemetry.
>
> **[2:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=161)** Create or replace event table pipeline events.
>
> **[2:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=169)** Run these few lines of code.
>
> **[2:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=174)** You should see a success message, and if you describe this new table, you'll see that we have the same standard telemetry columns in it.
>
> **[3:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=182)** Type describe table pipeline events.
>
> **[3:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=191)** Let's now run alter account set, event table = Staging_Tasty_Bytes.telemetry.pipeline events.
>
> **[3:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=207)** This will set our newly created event table as our preferred event table in our account.
>
> **[3:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=213)** That's it. In just a few lines of code, you query the default event table and you created your own event table.
>
> **[3:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=221)** We're going to use the pipeline events event table to capture telemetry for our Hamburg weather pipeline.
>
> **[3:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=227)** We're not going to do this in a declarative fashion or introduce these changes using the DevOps practices that we covered in the previous module.
>
> **[3:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=235)** This is so that you can focus on the core concepts and mechanics of observability without getting distracted by how to introduce these new changes with DevOps, which by the way, you already learned how to do in the last module.
>
> **[4:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/event-tables-in-snowflake?u=76281980&t=248)** Okay. Join me in the next video to learn about how to capture logs into event tables.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), module (2), default. (1)
> **Cross-References:** we covered (1), in the last (1), in the next (1)
> **Env Vars:** sql (1), utc (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### Logging in Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=0)** You can think of a log as a record of an activity occurring within a system, and if you want to keep track of certain activities in your pipeline, then it makes sense to generate and capture logs for those activities.
>
> **[0:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=14)** For example, if a piece of transformation logic executes at a scheduled time of day, there might be a log perpetually generated and captured for when that activity occurs.
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=25)** This could be one of many other logs in that logic.
>
> **[0:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=29)** If we imagine that the transformation logic is critical to the pipeline's operation, then there's a good chance that a data engineer might want to track certain aspects of it using logs.
>
> **[0:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=40)** This could help them measure its success and when necessary help them debug it.
>
> **[0:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=45)** Snowflake supports five standard log levels that align with common logging frameworks.
>
> **[0:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=51)** Those levels are debug, which contains detailed diagnostic information.
>
> **[0:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=58)** Info, confirmation that things are working as expected.
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=62)** Warn/warning, which is an indication that something unexpected has happened.
>
> **[1:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=67)** Error, this means a more serious problem prevented software from functioning properly.
>
> **[1:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=72)** And fatal/critical, a severe error that may cause application termination.
>
> **[1:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=79)** Each of these has its own specific meaning which you can see here.
>
> **[1:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=83)** To set a log level in Snowflake, you'd run the alter account set log_level command and set it to a log level that I previously mentioned.
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=92)** When you set a log level, you're establishing a minimum severity threshold, and all this means is that you'll capture that level and all higher severity levels.
>
> **[1:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=102)** So if you set the log level to info, you'll capture info, warning, error, and critical messages, but not debug messages, and all of this is configured before you start generating and capturing logs in your code.
>
> **[1:57](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=117)** Once configured, you can use common logging libraries in your preferred programming language to start generating and capturing logs.
>
> **[2:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=126)** For example, stored procedures are common places to generate logs from.
>
> **[2:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=131)** I prefer writing my procedures in Python, so the Python logging library that I would use would be Logging.
>
> **[2:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=139)** Yes, that's the actual name of the library.
>
> **[2:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=142)** Then using Python in my stored procedure, I could easily generate a log with a command like this.
>
> **[2:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=148)** This log would be captured in my event table, which means I could query it and other logs when I want.
>
> **[2:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=155)** In this exercise, we're going to add logs to the process order header stream stored procedure in our pipeline.
>
> **[2:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=162)** As a quick refresher, this procedure tracks daily sales for the city of Hamburg, Germany.
>
> **[2:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=168)** It processes order data that has been captured in a Snowflake stream and aggregates it by day.
>
> **[2:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=175)** This procedure is an excellent candidate for implementing logging.
>
> **[2:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=179)** This will help us keep an eye on the functional success of its logic.
>
> **[3:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=182)** Now is a good time to pause the video if you need to log into your Snowflake account.
>
> **[3:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=188)** Navigate to the sproc.sql file in the module-2 folder.
>
> **[3:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=193)** Copy its contents and paste them into a new SQL worksheet.
>
> **[3:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=205)** Run the first few lines of code to set your context.
>
> **[3:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=212)** Start by configuring the log level for our account.
>
> **[3:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=215)** Type alter account set log_level = info.
>
> **[3:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=222)** Run the command.
>
> **[3:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=225)** We're now capturing logs of level info and above in our account.
>
> **[3:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=229)** Here's our stored procedure written in Python.
>
> **[3:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=233)** On this line, we create a logging instance and give it a name.
>
> **[3:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=238)** We can use it to generate logs throughout the code.
>
> **[4:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=242)** Under log procedure start, add the following log.
>
> **[4:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=246)** Logger.info starting process_order_headers_stream procedure.
>
> **[4:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=262)** You'll notice the code has been refactored a bit to include a try-catch block.
>
> **[4:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=267)** This is typical because we might want to generate logs for specific conditions.
>
> **[4:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=273)** Under Hamburg account, add a log that captures how many orders were captured from Hamburg.
>
> **[4:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=280)** Type logger.infoF"found{Hamburg_account, orders from Hamburg."
>
> **[5:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=301)** This log interpolates the value from the Hamburg account variable.
>
> **[5:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=308)** Let's add one final log.
>
> **[5:10](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=310)** Let's add a successful completion log right above the return statement.
>
> **[5:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=317)** Type logger.info procedure completed successfully.
>
> **[5:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=328)** Okay, that looks great.
>
> **[5:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=330)** Run this code to create the procedure with these logs.
>
> **[5:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=341)** Call the stored procedure on the next line.
>
> **[5:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=353)** Okay, we see a success message.
>
> **[5:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=356)** This code processes a stream.
>
> **[5:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=358)** Let's insert some dummy data into the table being tracked by the stream.
>
> **[6:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=365)** Run the insert into command.
>
> **[6:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=369)** Okay, great. We have three rows of dummy data inserted.
>
> **[6:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=373)** This should trigger the stream. Call the stored procedure once more.
>
> **[6:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=384)** Okay, great.
>
> **[6:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=385)** Now let's query our event table once more.
>
> **[6:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=394)** Amazing, there they are.
>
> **[6:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=396)** Let's browse this a little bit.
>
> **[6:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=399)** Scroll to the record type column and look for log entries.
>
> **[6:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=405)** Here they are. Now look at the value column.
>
> **[6:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=408)** Look, they're the log messages that we added, and if you want to do some more analysis, you could imagine querying this table by record type where the value is some value you want to explore.
>
> **[7:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=422)** Maybe you want to look at timestamps or some other piece of information.
>
> **[7:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=427)** The final line of code here will get you started so that you can start tinkering.
>
> **[7:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=437)** Great job.
>
> **[7:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=438)** Keep in mind that the level of log detail you'll want to capture in your logs may vary based on your pipeline's environments.
>
> **[7:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=446)** For example, it may turn out that you'll disable less important log levels and say your development environment but have these log levels enabled in your production environment.
>
> **[7:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=457)** A practice like this will help you keep event tables full of sufficient operational data for each environment without capturing too many unnecessary details in either environment.
>
> **[7:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=467)** And finally, always understand what you're generating logs for and what information is being captured.
>
> **[7:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=475)** You could run the risk of accidentally logging sensitive information in an event table.
>
> **[8:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=481)** If you're worried about this, you could consider applying RO access policies to the event table to restrict access to rows containing PII.
>
> **[8:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=491)** You could also consider creating a view on top of the event table and applying a masking policy.
>
> **[8:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=497)** There are several ways to go about this and your approach will depend on your use case.
>
> **[8:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=502)** Okay. You have logs covered.
>
> **[8:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/logging-in-snowflake?u=76281980&t=504)** Join me in the next video to learn how to capture traces in event tables.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), from. (1), this. (1), module (1), finally, (1)
> **Analogies:** for example (3), imagine (2)
> **CLI Commands:** python (4)
> **Code Identifiers:** log_level (2), process_order_headers_stream (1), infof (1)
> **Definitions:** is an  (2), is a  (1)
> **Warnings:** warning (2), keep in mind (1)
> **Env Vars:** sql (1), pii (1)
> **File Paths:** sproc.sql (1)

#### Traces in Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=0)** Capturing traces is a little different from capturing logs in Snowflake.
>
> **[0:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=5)** This is because traces can contain much more information about how events in a system occurred.
>
> **[0:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=11)** This is in contrast to a log which contains information about what occurred and is based on a description that you write.
>
> **[0:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=19)** The practical implementation is different, too.
>
> **[0:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=22)** You used a common Python logging library in the last exercise, but to capture traces, you'll need to use Snowflake-specific libraries that are designed for the handler code you're using.
>
> **[0:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=33)** These libraries are available in Java, JavaScript, Python, Scala, and Snowflake scripting.
>
> **[0:40](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=40)** We're going to use them shortly in a Python environment.
>
> **[0:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=44)** Before we get hands-on, let's learn a little bit more about traces.
>
> **[0:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=48)** They can carry much more information than a log, so it's important to understand how to effectively capture and use traces.
>
> **[0:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=56)** Recall that a trace is a record of the entire journey of a transaction or request as it moves through a system.
>
> **[1:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=64)** You can think of it as following a package from sender to recipient, tracking every stop and hand-off along the way.
>
> **[1:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=71)** This tracking can include the timing of operations as well as dependencies between the operations.
>
> **[1:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=77)** They're essentially a record of a sequence of many events that all belong to a larger single event.
>
> **[1:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=83)** For example, while a log might have summarized information about, say, a successful connection from system A to system B being established, a trace might have all of the detailed steps that were necessary to make that successful connection.
>
> **[1:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=99)** Let's break things down even more.
>
> **[1:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=102)** Traces are made up of three core components: spans, trace events, and attributes.
>
> **[1:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=109)** You can think of a span as the basic unit of work in a trace.
>
> **[1:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=113)** It represents a single operation in a trace and has a parent-child relationship with other spans.
>
> **[2:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=121)** Nested within spans are trace events.
>
> **[2:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=124)** Yes, I know we're really going down the rabbit hole now.
>
> **[2:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=128)** Trace events are discrete events that occur within a span.
>
> **[2:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=132)** They provide even more context about what happened during a span's lifetime.
>
> **[2:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=138)** The hierarchy looks something like this.
>
> **[2:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=141)** A trace is made up of spans.
>
> **[2:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=144)** Inside of spans, there are trace events, but wait, there's more.
>
> **[2:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=149)** Because there can be so much information captured in this hierarchy, you're also able to use what's known as an attribute.
>
> **[2:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=157)** Attributes allow you to tag a span or a log even.
>
> **[2:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=161)** These attributes can help you down the road when you're filtering or analyzing telemetry data.
>
> **[2:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=167)** With this context, you can see why traces are so important in observability.
>
> **[2:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=172)** Let's get hands-on and start capturing traces using Python.
>
> **[2:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=176)** Now is a good time to pause the video if you need to into your Snowflake account.
>
> **[3:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=182)** Let's open up our SQL worksheet from earlier where we added logging.
>
> **[3:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=186)** If you don't have it handy, you can find the code in the solution folder of the module-2 folder.
>
> **[3:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=191)** The file is called solutions_sproc_logs.sql.
>
> **[3:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=196)** Copy the contents of the file and paste them into a new SQL worksheet.
>
> **[3:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=205)** Run the first few lines of code to set your context.
>
> **[3:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=213)** Start by enabling tracing for our account.
>
> **[3:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=216)** At the top, type alter session set trace_level = always.
>
> **[3:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=224)** Run the command. We're now capturing traces.
>
> **[3:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=231)** Next, add the Snowflake Telemetry Python package at the top of the stored procedure.
>
> **[4:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=243)** This is a library we'll need to use to capture traces in our event table.
>
> **[4:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=251)** On this line, you'll notice that we set a variable called trace ID.
>
> **[4:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=256)** It's set to a UUID value.
>
> **[4:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=258)** A UUID is a Universally Unique Identifier.
>
> **[4:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=262)** Every time this stored procedure runs, a UUID will be generated and it'll be used throughout the traces generated in the code.
>
> **[4:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=270)** This helps track our trace telemetry to a specific run of the stored procedure and makes it easy to analyze our telemetry when needed.
>
> **[4:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=279)** Snowflake automatically creates a root span for us when this procedure is run, so we don't need to explicitly open or close spans.
>
> **[4:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=288)** All we need to do is set span attributes.
>
> **[4:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=291)** The attributes allow us to pass in a key/value pair that tags a span with information like, at this point, we're in the query stream step of the process, so let's add a couple of attributes.
>
> **[5:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=306)** On this line type telemetry.set span_attribute "procedure" process_order_headers_stream.
>
> **[5:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=320)** This attribute essentially says we're starting the procedure called process order header stream.
>
> **[5:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=327)** In the try block, we're now in the query stream step of the process.
>
> **[5:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=332)** Let's add an attribute by typing telemetry.set_span_attribute
>
> **[5:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=346)** (process_step, query_stream).
>
> **[5:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=353)** On the next line, let's add telemetry.add_event ("query_begin", {description, starting to query order_header_stream}.
>
> **[6:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=382)** Add_event allows us to mark a specific moment in time within our span.
>
> **[6:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=387)** This line says that the query_begin event occurs at this precise moment in time.
>
> **[6:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=393)** The second argument, the object, allows us to add more context to this event.
>
> **[6:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=399)** The context that we're adding is a description of what is happening.
>
> **[6:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=404)** Okay, let's close this out.
>
> **[6:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=406)** On this line, add telemetry.add_event
>
> **[6:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=414)** ("query_complete", {description, completed query of order_header_stream}.
>
> **[7:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=426)** This time we mark that the query has completed along with some context in the description.
>
> **[7:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=431)** Okay.
>
> **[7:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=432)** Let's rerun our entire worksheet and see how traces are captured in the event table.
>
> **[7:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=453)** You can see from this last line, we're filtering on record types that have the word span in them, and yes, there they are.
>
> **[7:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=461)** You can see span and span event records.
>
> **[7:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=464)** The span record type looks like a record of a run, whereas a span event record looks like the individual events happening in a run.
>
> **[7:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=473)** If you look to the left under the trace column, you can see the trace ID.
>
> **[7:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=479)** This is set to a generated UUID that the spans and span events belong to.
>
> **[8:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=486)** Great job.
>
> **[8:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=487)** If something in your pipeline goes wrong, well-implemented traces will provide you with the entire journey of footsteps necessary to track down the culprit.
>
> **[8:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/traces-in-snowflake?u=76281980&t=496)** Join me in the next video as we step out of logs and traces and start learning about how to use alerts in Snowflake.

> [!info]- Semantic Content
>
> **Code Identifiers:** add_event (2), query_begin (2), order_header_stream (2), solutions_sproc_logs (1), trace_level (1)
> **Code Keywords:** let (9), this. (1), module (1), pass (1)
> **Definitions:** is a  (6), known as (1), is called (1)
> **CLI Commands:** python (5), make (1), find (1)
> **Env Vars:** uuid (4), sql (2)
> **Cross-References:** in the last (1), in the next (1)
> **Analogies:** think of it as (1), for example (1)
> **File Paths:** solutions_sproc_logs.sql (1)

#### Alerts in Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=0)** Generating and querying logs and traces to keep track of what happens in your code is one key part of observability.
>
> **[0:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=8)** Another equally important part is the ability to be alerted when key events occur in your data environment.
>
> **[0:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=15)** This is where Snowflake's alerts feature can help immensely.
>
> **[0:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=19)** Alerts in Snowflake allow you to perform an action in your data environment when specific conditions are met.
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=25)** These actions can include sending out e-mail notifications or even executing a SQL statement, for example.
>
> **[0:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=32)** An alert is made up of three components.
>
> **[0:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=35)** A condition that triggers the alert, the action to perform when the condition is met, and finally, how often to evaluate the condition.
>
> **[0:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=44)** In other words, a schedule to check for the condition.
>
> **[0:48](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=48)** Alerts in Snowflake can be set up using SQL and once defined, can be configured to meet your specific use case.
>
> **[0:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=55)** They frequently play a role across several different aspects of a pipeline.
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=60)** For example, you can use alerts on compute resources for generating notifications on data processing failures, and even for taking action if your data fails to comply with a particular business rule.
>
> **[1:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=72)** These are just some examples.
>
> **[1:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=74)** Alerts are very versatile and can be used for many different types of conditions and use cases.
>
> **[1:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=79)** In this exercise, we're going to set an alert on the order header table.
>
> **[1:24](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=84)** We want to keep an eye on the values for order amount and order total.
>
> **[1:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=88)** If these values are null, we'll create an entry in a table.
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=92)** This will help us keep a record of a potential data quality event.
>
> **[1:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=97)** You can imagine that we might want to be notified immediately if order amounts and totals somehow mysteriously begin disappearing.
>
> **[1:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=105)** Then we'll use the alert to call a stored procedure that notifies the data quality team of a potential issue.
>
> **[1:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=112)** We'll implement the stored procedure and notification in the next exercise.
>
> **[1:57](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=117)** Now is a good time to pause the video and log into your Snowflake account so you can follow along.
>
> **[2:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=123)** Navigate to the module-2 folder and copy the contents of the alert.sql file.
>
> **[2:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=132)** Open a new SQL worksheet in Snowflake and paste the code into it.
>
> **[2:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=137)** Run the first few lines to set your context.
>
> **[2:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=145)** Okay.
>
> **[2:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=146)** Here you see that we created a new table called Data Quality Alerts for our alerts.
>
> **[2:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=151)** If you would prefer to log alerts into the event table, you'd need to create a stored procedure that uses logging libraries to write alerts into the event table.
>
> **[2:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=161)** This is because you can't write to event tables directly.
>
> **[2:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=164)** The approach we use in this exercise will help us focus on the alert's implementation rather than more stored procedures.
>
> **[2:53](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=173)** Now create the table by running the command.
>
> **[2:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=179)** Our alert will look for null values for order amount and order total in the order header table.
>
> **[3:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=186)** If a row on the table matches these conditions, we'll insert a record into our Data Quality Alerts table.
>
> **[3:14](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=194)** Let's define the alert.
>
> **[3:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=196)** Type create or replace alert order_data_quality_alert.
>
> **[3:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=208)** On the next line, set the compute resource that should be used when this alert runs.
>
> **[3:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=213)** Type warehouse = compute_wh.
>
> **[3:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=223)** Finally, give the alert a schedule.
>
> **[3:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=226)** This is how frequently the alert will check for the condition.
>
> **[3:54](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=234)** Set schedule to '30 minutes'.
>
> **[3:59](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=239)** Okay, that's it.
>
> **[4:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=242)** Run the command to create the alert.
>
> **[4:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=249)** Mmh, actually, let's revisit something.
>
> **[4:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=251)** This comment mentions that we should create a serverless alert.
>
> **[4:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=255)** A serverless alert is an alert that doesn't require us to set and manage a compute resource for it. This is pretty easy to do.
>
> **[4:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=263)** Delete the line of code where we set the virtual warehouse.
>
> **[4:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=269)** Now rerun the command to create the alert. That's it.
>
> **[4:34](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=274)** We're now using a serverless alert and Snowflake will automatically rightsize the compute resource for this alert for us.
>
> **[4:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=281)** How cool is that?
>
> **[4:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=283)** Scroll down a bit.
>
> **[4:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=287)** Here we have a comment about calling a stored procedure for a notification.
>
> **[4:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=292)** We haven't covered notifications with Snowflake yet, we'll do that in the next exercise but let's set up our alert to be ready for when we do.
>
> **[5:01](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=301)** Under this comment, type call Staging_Tasty_Bytes.row_pos. notify_data_quality_team.
>
> **[5:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=316)** This object isn't defined and we don't want to run into errors when we run our alert shortly, so be sure to comment it out with two dashes in front of the keyword, call.
>
> **[5:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=329)** Let's recreate the alert once more.
>
> **[5:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=335)** Okay. Excellent.
>
> **[5:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=338)** Alerts all start in a suspended state.
>
> **[5:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=341)** You can verify this by running the next line.
>
> **[5:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=347)** Here you see that the value of state for this alert is suspended.
>
> **[5:51](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=351)** Let's start the alert by running the next line.
>
> **[5:57](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=357)** If you now rerun the previous line of show alerts, you'll notice the alert is now in a started state.
>
> **[6:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=365)** Great. So the alert is started but it hasn't been executed.
>
> **[6:10](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=370)** That's because the schedule is set to 30 minutes and we're not going to sit around for 30 minutes for it to run, so let's manually execute it to start immediately.
>
> **[6:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=381)** Under this comment, type execute alert order_data_quality_alert.
>
> **[6:29](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=389)** Once we run this, we'll want to quickly run the set of the dummy data that we'll insert into order header.
>
> **[6:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=396)** This dummy data contains records with null values that the alert should pick up.
>
> **[6:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=401)** Okay, let's execute the alert.
>
> **[6:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=405)** And now run the insert into statement that inserts the dummy data.
>
> **[6:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=410)** Okay, great.
>
> **[6:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=412)** The alert should have picked up these records based on the conditions that we set in the alert.
>
> **[6:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=416)** Let's query our alert table to make sure this information was captured.
>
> **[7:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=425)** Yes, there it is.
>
> **[7:06](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=426)** You can see the alert time, name, severity level, and message we're logging.
>
> **[7:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=432)** You can also see the number of records with null values that the alert captured at that moment in time.
>
> **[7:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=438)** You could imagine tracking the record count column using widgets in a Streamlit app and then surfacing this app somewhere if you're keeping an active eye on orders.
>
> **[7:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=447)** You did it. Great job.
>
> **[7:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=451)** We're now capturing alerts for potential data quality issues in order data.
>
> **[7:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=455)** As you probably noticed, our alerts are for the moment being captured into more tables.
>
> **[7:42](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=462)** This is important, but to make use of the full power of alerts, we want to be able to take action when a critical alert is generated.
>
> **[7:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/alerts-in-snowflake?u=76281980&t=470)** We've already taken steps to get there by defining a call to a stored procedure, so join me in the next exercise to flesh out the stored procedure and implement notifications for this alert.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), finally, (2), case. (1), module (1), require (1)
> **Code Identifiers:** order_data_quality_alert (2), compute_wh (1), row_pos (1), notify_data_quality_team (1)
> **Analogies:** for example (2), imagine (2)
> **Env Vars:** sql (3)
> **Cross-References:** in the next (3)
> **Definitions:** in other words (1), is a  (1), is an  (1)
> **CLI Commands:** make (2)
> **UI Navigation:** navigate to (1), scroll down (1)

#### Notifications in Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=0)** Notifications in Snowflake allow you to really level up what you're doing with alerts.
>
> **[0:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=5)** And what I love about the notifications feature is that there are so many different ways to use it.
>
> **[0:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=11)** The concept of a notification isn't new.
>
> **[0:13](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=13)** In fact, you probably receive notifications every day from all sorts of different services like web apps, mobile apps, e-mail accounts, text messages, and much more.
>
> **[0:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=25)** That's essentially what notifications with Snowflake allow you to do.
>
> **[0:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=28)** Send notifications to a channel of your choice.
>
> **[0:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=32)** In fact, you're able to send notifications to e-mail addresses, webhooks.
>
> **[0:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=38)** Webhooks are useful for broader team channels like Slack or Microsoft Teams, for example.
>
> **[0:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=43)** And you can even send notifications to cloud provider queues like Amazon SNS, Google Cloud Pub/Sub, and Azure Event Grid.
>
> **[0:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=52)** Notifications are frequently combined with alerts.
>
> **[0:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=56)** For example, imagine that an alert has triggered because throughput in a pipeline has dropped drastically.
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=62)** You can send a notification via e-mail or Slack, for example, to let a team of data engineers know about that drop.
>
> **[1:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=69)** Of course, you can combine a notification with any alert of your choice, and this is what I mean when I say that there are many different ways to use notifications.
>
> **[1:20](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=80)** So let's get hands-on and add a notification for our pipeline.
>
> **[1:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=83)** We'll want to send an e-mail to our data quality team if we observe null values in our order header table.
>
> **[1:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=90)** Now is a good time to pause a video if you need to log into your Snowflake account.
>
> **[1:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=96)** Locate the notification.sql file in the module-2 folder.
>
> **[1:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=103)** Copy its contents.
>
> **[1:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=106)** Open a new SQL worksheet in Snowflake and paste in the code.
>
> **[1:58](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=118)** This code does a couple of things. It defines an e-mail integration, which we need to complete, and it also defines a stored procedure for sending out an e-mail notification.
>
> **[2:08](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=128)** We also need to complete the stored procedure.
>
> **[2:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=132)** You'll also note that this is the stored procedure that our alert calls.
>
> **[2:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=135)** It sends out a basic but important e-mail containing information about null values in the order header table.
>
> **[2:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=142)** Let's complete both of these objects.
>
> **[2:25](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=145)** Start by setting your context.
>
> **[2:33](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=153)** Next, we need to create our e-mail notification integration object.
>
> **[2:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=158)** Type create or replace notification_integration,
>
> **[2:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=167)** e-mail_notification_int.
>
> **[2:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=172)** On the next line, set the type value to e-mail.
>
> **[2:56](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=176)** Then add the recipient's e-mail address on the next line.
>
> **[3:03](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=183)** If you want to see the e-mail in action, and I assume you do, you must use the e-mail associated with Snowflake account you're currently using.
>
> **[3:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=191)** I'll drop my e-mail here.
>
> **[3:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=196)** Okay. Run this block of code to create the integration.
>
> **[3:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=203)** Let's move on to the stored procedure.
>
> **[3:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=207)** Let's start by giving it a name matching the call we make in the alert.
>
> **[3:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=211)** Type Staging_Tasty_Bytes.row_ pos.notify_data_quality_team.
>
> **[3:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=226)** This procedure does a few main things.
>
> **[3:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=229)** It queries records with null values, it gets account of the records, and it formats this information into a table that can be sent via e-mail.
>
> **[4:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=244)** At the bottom, we have the code to actually send the e-mail, let's complete it.
>
> **[4:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=249)** In session.call, type as the first argument, system $ send_email.
>
> **[4:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=259)** This is a system function within Snowflake to send e-mails.
>
> **[4:23](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=263)** On the next line, enter the name of the e-mail notification integration we set up.
>
> **[4:28](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=268)** Type email_notification_int.
>
> **[4:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=275)** Finally, add the same e-mail address on the next line that we added up above.
>
> **[4:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=284)** Okay, great. Run the block of code to create the procedure.
>
> **[4:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=287)** Navigate to the worksheet where you defined the alert and uncomment the call to the stored procedure.
>
> **[5:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=302)** Rerun the block to recreate the alert.
>
> **[5:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=307)** Navigate back to the worksheet where we created the notify data quality team stored procedure. Let's run our alert.
>
> **[5:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=315)** We have records in our table with null values, so the alert should trigger the call to the stored procedure.
>
> **[5:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=321)** So this means we should see an e-mail with the relevant information arriving in our inbox.
>
> **[5:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=326)** On the next line, check the status of the alert.
>
> **[5:31](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=331)** If it's suspended, you can run the next line of code.
>
> **[5:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=335)** My alert has started, so now let's execute the alert.
>
> **[5:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=341)** And now for the moment of truth, let's go check our e-mail inbox for an e-mail.
>
> **[5:46](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=346)** And there it is. You can see it's sent from Snowflake Computing.
>
> **[5:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=350)** And if I open it up, I get this beautifully formatted e-mail with all of the information my data quality team would need to take action. Amazing. Okay.
>
> **[6:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=360)** Let's not forget to stop our alert.
>
> **[6:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=362)** Run the last line of code to suspend the alert.
>
> **[6:10](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=370)** Just remember that this would just suspend the alert.
>
> **[6:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=372)** It'll continue to run on its own schedule.
>
> **[6:15](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=375)** If you want to remove the alert completely, run the last line of code.
>
> **[6:19](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=379)** Drop alert, order_data_quality_alert.
>
> **[6:26](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=386)** Great job.
>
> **[6:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=387)** The code that we implemented focuses on using alerts and notifications based on order data, but remember, you can use alerts and notifications for just about any other use case as well.
>
> **[6:39](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=399)** Alerts can be set up for just about anything like compute resources, services consumption, or even data validation logic.
>
> **[6:47](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=407)** You can then tie these alerts with a notification if you'd like.
>
> **[6:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=410)** This means you can use this pattern for many other aspects of your data pipeline.
>
> **[6:55](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=415)** Now, ideally, your notifications are as close to real-time as possible but, of course, you should weigh this against the type of alert you're triggering off of.
>
> **[7:05](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=425)** For example, an alert that signals a breaking change in a critical pipeline likely warrants a real-time notification, but a warning about a slightly slower-than-expected ingestion speed might not.
>
> **[7:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=438)** It's going to be highly dependent on the variables in your use case.
>
> **[7:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=442)** Okay. We've now covered the core of Snowflake's observability framework, Snowflake Trail.
>
> **[7:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=447)** We've covered event tables, logs, traces, alerts, and notifications.
>
> **[7:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=452)** These are all native capabilities in Snowflake.
>
> **[7:36](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=456)** Understandably, you may be integrating with other third-party observability tools.
>
> **[7:41](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/notifications-in-snowflake?u=76281980&t=461)** So join me in the next video to learn about how Snowflake supports this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), new. (1), pub (1), module (1), function (1)
> **Code Identifiers:** notification_integration (1), mail_notification_int (1), notify_data_quality_team (1), send_email (1), email_notification_int (1)
> **Analogies:** for example (4), imagine (1)
> **Env Vars:** sns (1), sql (1)
> **Tools:** slack (2)
> **Definitions:** is a  (2)
> **Warnings:** note that (1), warning (1)
> **Prerequisites:** set up (2)

#### Observability with third-party tools
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-third-party-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-third-party-tools?u=76281980&t=0)** Observability is natively present throughout Snowflake without needing to use event tables, logs, or traces to implement it.
>
> **[0:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-third-party-tools?u=76281980&t=9)** For example, Snowflake natively offers observability for snow pipes, dynamic tables, data lineage, and more.
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-third-party-tools?u=76281980&t=16)** All of this helps you build flexible, observability-based dashboards within Snowflake.
>
> **[0:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-third-party-tools?u=76281980&t=22)** But observability with Snowflake doesn't end with its native features.
>
> **[0:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-third-party-tools?u=76281980&t=27)** Because Snowflake's Telemetry is built using the OpenTelemetry standards, this means you can easily integrate third-party tools with Snowflake Trail.
>
> **[0:35](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-third-party-tools?u=76281980&t=35)** Platforms like Datadog, Grafana, PagerDuty, and many more are supported and can be used to complement your Snowflake observability implementation.
>
> **[0:45](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-third-party-tools?u=76281980&t=45)** For more information, check out the platform's corresponding documentation.
>
> **[0:49](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/observability-with-third-party-tools?u=76281980&t=49)** Join me in the next video to recap what we've learned about observability.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### Recap and best practices for observability with Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=0)** Let's recap everything that you've learned about observability with Snowflake.
>
> **[0:04](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=4)** We covered the core components that make up Snowflake's observability framework, also known as Snowflake Trail.
>
> **[0:11](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=11)** You specifically learned about event tables, logs, traces, alerts, and notifications.
>
> **[0:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=18)** You also learned that Snowflake Trail is built using OpenTelemetry standards, so implementing observability in Snowflake is fairly frictionless.
>
> **[0:27](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=27)** By this point, you know that event tables are used to capture telemetry data and that they follow OpenTelemetry standards by using standardized table columns for telemetry data.
>
> **[0:38](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=38)** You know that logs represent records of single events happening in your system, in this case, your code.
>
> **[0:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=43)** And that traces contain much more detail by generating the series of events that led up to an outcome.
>
> **[0:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=50)** You also know that logs and traces can easily be captured in event tables using common logging libraries, as well as Snowflake-provided telemetry libraries in your language of choice.
>
> **[1:02](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=62)** You learned how to generate alerts based on conditions in your data environment and how to encourage action by combining alerts with notifications which can be sent to various, different channels.
>
> **[1:12](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=72)** As you might imagine, observability isn't something you implement once and then walk away from.
>
> **[1:18](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=78)** Data pipeline requirements are constantly evolving.
>
> **[1:21](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=81)** There are likely always going to be more dimensions to track, more conditions to alert about, and new notifications to send out for those alerts.
>
> **[1:30](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=90)** And with this core knowledge of observability practices in Snowflake, you're now ready to take your data pipelines to the next level.
>
> **[1:37](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=97)** You can use it to help not only yourself, but your teammates and keep an eye on any aspect of your data pipeline.
>
> **[1:44](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=104)** This helps make sure that your team is able to proactively take action when you notice that something isn't quite right.
>
> **[1:50](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/recap-and-best-practices-for-observability-with-snowflake?u=76281980&t=110)** We've come so far, join me in the next video to close out and recap all that you learned.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), from. (1)
> **CLI Commands:** make (2)
> **Cross-References:** we covered (1), in the next (1)
> **Definitions:** known as (1)
> **Analogies:** imagine (1)

#### Conclusion
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/conclusion?u=76281980&t=0)** I mentioned this in [[Introduction to Modern Data Engineering with Snowflake]] and it's too important not to mention again.
>
> **[0:07](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/conclusion?u=76281980&t=7)** Much of your experience is going to come from putting your hands on the keyboard and tinkering with pipelines using the documentation, videos, tutorials, and more.
>
> **[0:16](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/conclusion?u=76281980&t=16)** This goes for both concepts covered in this course, DevOps and observability.
>
> **[0:22](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/conclusion?u=76281980&t=22)** For DevOps, we covered cutting-edge features within Snowflake that allow teams to build declarative data pipelines that are able to respond quickly to constantly changing demands.
>
> **[0:32](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/conclusion?u=76281980&t=32)** You specifically learned how to use CREATE OR ALTER, Snowflake's Git integration, GitHub Actions, and Snowflake CLI to build a pipeline that can do this.
>
> **[0:43](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/conclusion?u=76281980&t=43)** For observability, we covered Snowflake Trail and you learned about the vast trove of information that you can capture and analyze about your data pipelines.
>
> **[0:52](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/conclusion?u=76281980&t=52)** This includes using event tables to capture logs and traces and using alerts and notifications to prompt action on your team.
>
> **[1:00](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/conclusion?u=76281980&t=60)** Both of these topics build on and extend what you learned in the first course, and they will help you greatly level up your data pipelines as they scale.
>
> **[1:09](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/conclusion?u=76281980&t=69)** So go out and tinker with these concepts to see what you can build, I know that you can do it. I'm Gilberto Hernandez, developer advocate at Snowflake.
>
> **[1:17](https://www.linkedin.com/learning/advanced-data-engineering-with-snowflake/conclusion?u=76281980&t=77)** Thanks for joining me and see you in future courses.

> [!info]- Semantic Content
>
> **Env Vars:** create (1), alter (1), cli (1)
> **Cross-References:** we covered (2)
> **CLI Commands:** git (1)
> **Code Keywords:** this. (1)
> **Documentation:** the documentation (1)
> **Tools:** github (1)


## Instructor

- [[Snowflake]]
- [[Inc]]

## Skills Covered

- DevOps
- Data Pipelines
- Snowflake

## Path Context

### In [[Data Engineering Professional Certificate by Snowflake]]
← [[Introduction to Modern Data Engineering with Snowflake]] | **3 of 3**

## Part of

- [[Data Engineering Professional Certificate by Snowflake]]

## Appears In

- [[Data Engineering Professional Certificate by Snowflake]]

## Related Courses

_Courses sharing skills:_

- [[Leveraging Google Cloud Developer and DevOps Tools]] — DevOps
- [[Learning SnowflakeDB]] — Snowflake
- [[DevOps Foundations- Your First Project]] — DevOps
- [[DevOps Foundations- Monitoring and Observability]] — DevOps
- [[Introduction to Modern Data Engineering with Snowflake]] — Snowflake

---

[↑ Back to top](#)