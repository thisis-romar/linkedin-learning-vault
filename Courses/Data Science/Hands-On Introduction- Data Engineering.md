---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: hands-on-introduction-data-engineering
url: "https://www.linkedin.com/learning/hands-on-introduction-data-engineering"
duration_minutes: 93
duration: 1h 33m
level: Beginner
updated: 6/18/2024
learners: 140701
skills:
  - Data Engineering
exercise_files: true
github: "https://github.com/LinkedInLearning/hands-on-introduction-data-engineering-4395021/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQF2-XpACOT2ew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713900511583?e=2147483647&amp;v=beta&amp;t=CFp3O8T0c6lKkjCy01p6HDN8xloYCURODyde3QOYlNw"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your Scala Skills for Data Engineering]]'
  - '[[Develop Your Rust Skills for Data Engineering]]'
  - '[[Data Engineering Foundations Professional Certificate by Astronomer]]'
  - '[[Data Engineering Hands-On Practice]]'
  - '[[Explore a Career in Data Engineering]]'
prev_courses:
  - '[[Data Engineering Foundations]]'
  - '[[Data Engineering Foundations]]'
  - '[[Complete Guide to Python for Data Engineering- From Beginner to Advanced]]'
  - null
  - '[[Data Engineering Foundations]]'
next_courses:
  - '[[Hands-On Introduction- Scala]]'
  - '[[Rust Essential Training]]'
  - '[[Learning Apache Airflow]]'
  - '[[Hands-On Advanced Python- Data Engineering Basics]]'
  - '[[Introduction to Data Warehouses]]'
path_nav: '[{"path":"Develop Your Scala Skills for Data Engineering","position":2,"total":6,"prev":"Data Engineering Foundations","next":"Hands-On Introduction- Scala"},{"path":"Develop Your Rust Skills for Data Engineering","position":2,"total":6,"prev":"Data Engineering Foundations","next":"Rust Essential Training"},{"path":"Data Engineering Foundations Professional Certificate by Astronomer","position":3,"total":6,"prev":"Complete Guide to Python for Data Engineering- From Beginner to Advanced","next":"Learning Apache Airflow"},{"path":"Data Engineering Hands-On Practice","position":1,"total":7,"prev":null,"next":"Hands-On Advanced Python- Data Engineering Basics"},{"path":"Explore a Career in Data Engineering","position":2,"total":7,"prev":"Data Engineering Foundations","next":"Introduction to Data Warehouses"}]'
path_count: 5
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/database-management
  - topic/cloud-computing
  - skill/data-engineering
status: not-started
created: 2026-04-21
---

![Hands-On Introduction: Data Engineering](https://media.licdn.com/dms/image/v2/D4E0DAQF2-XpACOT2ew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713900511583?e=2147483647&amp;v=beta&amp;t=CFp3O8T0c6lKkjCy01p6HDN8xloYCURODyde3QOYlNw)

# Hands-On Introduction: Data Engineering

> Suggested prerequisites

Know basic Python data types, control structures, functions, and classes.
Have a good enough understanding of SQL to write queries to extract, transform, and load data in Apache Airflow pipelines.
Have some knowledge of Bash script or Unix for basic Airflow installation and administration.
Be familiar with text editors.
Know some of the basic principles behind cloud comput

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering) | 1h 33m | Beginner | 141K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Vinoo Ganesh]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/hands-on-introduction-data-engineering-4395021/codespaces)

## Skills Covered

- Data Engineering

## Table of Contents

### Introduction

#### Hands-on data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/hands-on-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/hands-on-data-engineering?u=76281980&t=0)** - Have you ever struggled to integrate different datasets, or have you faced challenges in processing large volumes of data?
>
> **[0:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/hands-on-data-engineering?u=76281980&t=7)** If so, this hands-on data engineering course is right for you.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/hands-on-data-engineering?u=76281980&t=12)** You'll learn the skills to build and extend data pipelines, deploy a best in class open-source tool, and effectively apply the ETL framework.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/hands-on-data-engineering?u=76281980&t=21)** Hi, I'm Vinoo Ganesh, and I've spent my career building mission-critical data products for the healthcare, defense, and financial services industries.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/hands-on-data-engineering?u=76281980&t=31)** I've personally seen the challenges with operationalizing data and have directly applied the principles taught in this course.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/hands-on-data-engineering?u=76281980&t=38)** If you're ready to solve the most pressing data challenges at your organization, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** etl (1)
> **Speakers:** - have (1)

#### Background knowledge
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=0)** - [Narrator] Welcome to the wonderful world of data engineering.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=4)** A data engineer is a modern enterprise Swiss army knife.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=8)** They are versatile technologists who have a knack for automation.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=12)** It is one of the fastest growing professions of the last five years, and data engineers are considered enterprise drivers of digital innovation.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=20)** That being said, before you begin on your data engineering journey, there's a bit of background that will help optimize your journey.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=27)** First, basic programming skills, especially in Python and SQL.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=33)** Airflow, the predominant technology that we use in this course, is written in Python, so it's crucial to have a good understanding of the Python programming language.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=42)** You should know basic data types, control structures, functions, and classes in Python.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=48)** Similarly, data is usually stored in databases.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=52)** Therefore, you should have a good understanding of SQL to write queries to extract, transform, and load data in your airflow pipelines.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=62)** Second, some familiarity with bash script or Unix will be helpful for basic airflow installation and administration.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=70)** In this class, we'll use some basic Unix commands and utilities to navigate around the file system.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=76)** We'll also do some work in some text editors as well.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=79)** Cloud computing.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=81)** It may be helpful to know some of the principles behind scaling and cloud computing.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=86)** The cloud has become one of the primary environments that data engineers operate in, and having a strong foundation will unquestionably be beneficial.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=95)** This background should be enough to kickstart the data engineering journey.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=98)** In this class, we'll also cover some of the terminology and frameworks in the data engineer ecosystem.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/background-knowledge?u=76281980&t=105)** If you have all this background or are ready to do some minor brushing up along the way, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Code Keywords:** class, (2), let (1)
> **Env Vars:** sql (2)
> **Tools:** bash (1)
> **Definitions:** is a  (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [narrator] (1)

#### The history of data in the enterprise
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=0)** - Before we talk about how to become a data engineer, let's talk about how we got here.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=6)** You've probably heard phrases like the world has been flooded with data in the past.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=11)** But let's be concrete about this.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=13)** By 2025, global data company Statista projects that global data creation will grow to 180 zettabytes.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=22)** For context, a zettabyte is a thousand exabytes, an exabyte is a thousand petabytes, a petabyte is a thousand terabytes, and a terabyte is a thousand gigabytes.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=33)** That's a lot of data.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=36)** This proliferation of data has provided a rich resource for businesses looking to gain insights, optimize operations, and improve customer experiences.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=46)** However, it can be cumbersome and difficult to consume this data effectively.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=51)** Seeing this companies deployed their software engineers against this problem.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=56)** Let's be clear, though, the idea of engineers focused on data is not a new concept.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=62)** Enterprises have long relied on data to gain insights into their operations, optimized processes, and drive decision making and software engineers were at the forefront of this innovation.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=74)** The challenge came when these engineers realized the unique aspects of dealing with modern data, both from a scale and volume perspective.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=85)** They quickly established best practices for handling this data and distributed these best practices.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=91)** These engineers became the first data engineers.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=95)** Despite their work, though, many organizations are only beginning their data journey.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=100)** A recent survey conducted by NewVantage Partners found that 97% of participating organizations are investing in data initiatives, but just 19.3% indicate that they've established a data focused culture.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=115)** That means there's still a lot of work to be done using data efficiently and effectively.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=121)** The adoption of modern data platforms, such as data lakes and data cloud warehouses, has made it easier to analyze, manage, and access large amounts of data across the organization.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=133)** This has led to an increase in data literacy across different business functions with data being used to drive decisions in areas such as finance, marketing, and operations.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=145)** This increase in data volume has also led to a new iteration of enterprise business intelligence processes.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=152)** Decisions are now backed by concrete data that has been analyzed through BI tools and data analysts.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=159)** That data in turn has been sourced from systems, cleaned, loaded, and mined for value.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=167)** The modern enterprise is heavily reliant on data to drive informed decision making.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=173)** As this trend continues, the volume and types of data sourced will continue to increase.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-history-of-data-in-the-enterprise?u=76281980&t=178)** Enterprises must ensure that their workforce has the right skillset to thrive in this environment and this represents your opportunity as a data engineer.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), continue (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (2)
> **Versions:** 19.3 (1)
> **Speakers:** - before (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] This course uses the GitHub Codespaces feature to bring a live hands-on and coding experience to the data engineering skillset.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=9)** GitHub Codespaces allows you to author code and live deploy that code onto a running VM.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=16)** In Codespaces, you are free to follow along or try any of the exercises in this video series without the risk of breaking your local setup.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=26)** Accompanying this series of videos is a corresponding GitHub repository.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=30)** That repository contains the most up-to-date segments of code, and for the follow along portions the relevant before and after setup.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=40)** You can provision a GitHub codespace off of one of the branches of the repository.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=45)** This video series provisions the starting state of the codespace off of the video's begin branch.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=52)** We'll talk a little bit about branch naming convention shortly.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=56)** LinkedIn Learning's use of GitHub Codespaces relies on exercises that are broken down on a per branch basis, with before and after states.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=66)** In the accompanying GitHub repository you'll find a number of branches.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=71)** The main branch corresponds to the main line of the repo and won't be used much in the exercise portion of this course.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=78)** Instead, you'll find branches with the following convention, chapter-video.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=84)** For example, a branch that corresponds to the exercise covered in chapter two video three, would be listed as 02-03.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=95)** In some situations the videos will have before and end states.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=100)** In these situations, the branch will be suffixed either with a b for beginning, or an e for end.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=107)** For example, a branch that corresponds to the beginning state of chapter two video five, would be named 02-05b.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=118)** And a branch that corresponds to the end state would be named 02-05e.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=126)** Using this methodology, you should be able to start with any of the b suffixed branches, follow the steps in the video, and arrive in the exact same state as a corresponding e suffixed branch.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=139)** To create a codespace, you can select the Open code space button right from your course homepage.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=146)** This will open up the Codespace's configuration landing page for the course.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=151)** To create the codespace, first mouse over the dropdown caret of the green Create codespace on main button, and change the option to configure and create codespace if it's not already selected.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=165)** From there, press the green Configure and create codespace button.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=170)** This will bring up the next screen here, you can select from the branch dropdown the branch you wish to create a codespace off of.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=178)** Once everything is properly selected, you can press Create codespace.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=183)** That will start the process of setting up your codespace.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=187)** This course includes the installation and configuration of Apache Airflow as part of the teaching material.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=194)** So for many of the exercises in chapter three you will need to manually install and configure Airflow separately.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=202)** For ease of use, I have provided a utility script that will take care of the installation and configuration process for you.
>
> **[3:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=210)** Codespaces offers a powerful and interactive way to follow along and participate.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=215)** I'd highly encourage you to take advantage of this feature and follow along yourself.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/how-to-use-github-codespaces-with-this-course?u=76281980&t=220)** Now, let's get started.

> [!info]- Semantic Content
>
> **Tools:** github (6)
> **Prerequisites:** configure (3), setup (2), install (1)
> **CLI Commands:** find (2), apache (1)
> **UI Navigation:** dropdown (2), select the (1)
> **Analogies:** for example (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Your Bearings

#### Data engineering and data pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=0)** - Welcome to the wonderful world of data engineering.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=3)** You might be here because you've heard the phrase data engineering in the workplace, or you may have heard that it's one of the fastest growing jobs in the technology sector.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=13)** Either way, now is a great time to be getting into the data engineering space.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=18)** Let's start with what data engineering actually is.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=22)** Here's our mostly academic definition.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=25)** Data engineering is the process of designing, building and maintaining the infrastructure necessary to collect, store, process, and analyze data.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=37)** It involves developing and implementing software, tools and frameworks to enable the acquisition, transformation, storage and retrieval of data.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=48)** All of that is true, but in practice, data engineers serve as the backbone of the analytical and data-driven components of the modern enterprise.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=57)** They have a complex and deep understanding of the technical, operational, and increasingly frequently the business context of the modern enterprise, meaning, they understand why the business needs what it needs, and how to build it.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=72)** The modern data engineers are experts at operationalizing data.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=78)** They have the ability to manage data through its journey from usable to operationally critical.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=84)** They understand both on-prem and cloud deployment models and have detailed knowledge about how to handle scale problems.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=92)** They're armed with a deep toolkit of tools, services, skills, and technologies that enable them to accelerate their business impact.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=102)** At their core though, data engineers are experts at automation.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=107)** They have a unique ability to take an ill-defined, data-oriented task, manually complete it and then build the automation required to remove the need to perform that task manually again.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=120)** One of the primary tools in the data engineers toolkit is the data pipeline.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=125)** A data pipeline is a series of interconnected systems and processes that enables the flow of data from its source to its destination in an optimal and usable way.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=137)** The term data pipeline is not actually a technical term as it can encompass a different number of methodologies and ideas, a few of which we'll discuss in this series.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=148)** Broadly though, modern data pipelines are responsible for ingesting data from some source system, transforming and cleaning that data and storing that data in a persistent medium.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=160)** The goal of most data pipelines is to ensure that the stored data is in a state that makes it straightforward to analyze.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=169)** Weld is data pipelines can unlock new data-driven insights, fuel data-driven transformations and improve overall business efficiency.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/data-engineering-and-data-pipelines?u=76281980&t=180)** The journey to data engineering starts with an understanding of the principles that make up the data engineers problem solving mentality and that's where we begin.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - welcome (1)

#### Orchestration: In the modern sense
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=0)** - Let's talk about orchestration.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=3)** The operating environment of the modern enterprise is fairly complex.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=7)** People and technology work together to drive business outcomes and speed and efficiency is top of mind.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=15)** These working models can become more and more complex and ensuring that the right set of steps occur in the right order can be difficult.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=23)** Furthermore as the amount of work increases and organizations set their goals higher, the more work that can be automated in a fixed and scheduled way, the better.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=35)** The data engineering workflow is rooted in automation.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=40)** The best data engineers are able to take complex workflows and distill them into actionable and repeatable tasks.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=50)** Orchestration is the process of coordinating the various stages and components of a data pipeline to ensure that data is processed efficiently and accurately.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=63)** In the context of data engineering, orchestration involves designing and implementing a repeatable system that automates the flow of data through the pipeline.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=74)** Orchestration isn't a new concept, but it has taken on a new meaning given the rise of the data engineer.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=82)** Historically there have been several approaches to the data pipeline orchestration ecosystem.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=88)** One of the earliest approaches was to use custom scripts and manual processes to move data from one stage of the pipeline to the next.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=97)** However this approach was error-prone and time-consuming as it required significant manual effort to coordinate and monitor the pipeline.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=107)** As data volumes grew more sophisticated, orchestration solutions emerged.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=112)** These were focused on monitoring, tracking, scaling, and visualization.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=118)** One of the earliest of these was Apache Airflow, an open-source platform that allowed users to create and manage data pipelines as workflows.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=128)** Airflow provides a simple interface for defining the various stages of a pipeline and supports a wide range of data sources and destination.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=138)** Airflow has become popular in the data community and has been widely adopted by companies such as Airbnb, Lyft, and Netflix.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=149)** Another popular orchestration platform is Apache NiFi which was initially developed by the US NSA.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=157)** NiFi provides a graphical interface for designing data pipelines and includes a wide range of built-in processors for data ingestion, transformation, and storage.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=168)** NiFi is particular particularly well-suited to handling large volumes of streaming data and is currently used by organizations such as the US DOD and the National Oceanic and Atmospheric Administration.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=181)** Finally, there are a number of open-source tools such as Prefect, Dagster, and Airbyte that are continuing to develop in this space.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=191)** These days however, the technology band orchestration has become much more cloud-based.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=197)** Solutions such as Amazon Web Service Step Functions and Google Cloud Composer have emerged as popular orchestration platforms.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=205)** These solutions allow users to create and manage data pipelines in the cloud and offer a range of features such as serverless execution, automatic scaling, and high availability.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=217)** One thing worth mentioning is that some of these cloud vendors have also deployed managed versions of open source tools.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=223)** For example, Amazon has developed MWAA which is their hosted Airflow offering.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=230)** In a world where automation is king, orchestration plays a critical role in the data pipeline design and management.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/orchestration-in-the-modern-sense?u=76281980&t=237)** As data volumes and complexity continue to grow, it is likely we will see continued innovation in the field of data pipeline orchestration.

> [!info]- Semantic Content
>
> **Analogies:** such as (5), for example (1)
> **Code Keywords:** interface (2), let (1), finally, (1), continue (1)
> **CLI Commands:** apache (2), composer (1)
> **Env Vars:** nsa (1), dod (1), mwaa (1)
> **Speakers:** - let (1)

#### Extract, transform, load (ETL)
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=0)** - The extract, transform, load pattern is a common approach to building pipelines in the field of data engineering.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=7)** The ETL process involves extracting data from a source system, transforming it into a format that's suitable for analysis, and loading it into a target system such as a data warehouse or database.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=21)** Let's look at this visually.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=23)** In the ETL process, data is extracted into a staging area.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=28)** That data is then transformed into a format suited for future analysis.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=33)** Finally, that data is loaded into a persistent storage medium which may be a database, data warehouse, or something else.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=41)** While not a new concept, ETL is pivotal to the modern data engineer.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=47)** Historically, ETL has been used in a variety of industries such as finance, healthcare, and retail.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=54)** One of the earliest examples of ETL can be traced back to the 1960s when banks started to use mainframe computers to process financial transactions.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=64)** At the time, banks were still using slow and error-prone paper-based systems.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=69)** With the help of mainframe computers, banks were able to automate the process of processing financial transactions, which led to significant improvements in speed and accuracy.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=81)** In the 1980s and 1990s, the use of ETL became more widespread as organizations began to realize the value of data-driven decision making.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=91)** As data volumes grew, ETL solutions became more sophisticated with the introduction of tools such as iBM InfoSphere and Informatica PowerCenter.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=101)** Today, ETL continues to be a widely used approach to building data pipelines.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=107)** One of the key advantages of ETL is that it allows organizations to integrate data from a variety of sources such as databases, files, and web services.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=118)** ETL also allows organizations to transform data into a format that's suitable for analysis which can include tasks such as data cleaning, data enrichment, and data aggregation.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=130)** In recent years, however, there's a shift towards more modern approaches to data pipeline design such as stream processing and real-time data processing.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=140)** Furthermore, there are new operating models such as ELT that have recently emerged.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=146)** In the ELT operating model, data is first loaded into a warehousing or data cloud system before it's transformed into business-usable data.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=157)** However, ETL remains a critical component of many data pipelines, particularly in cases where data needs to be integrated from multiple sources and transformed for analysis.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=170)** As mentioned, there are many ETL tools available today both open source and proprietary which can be used to build data pipelines.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=179)** Some of the popular ETL tools include Apache NiFi, Apache Airflow, Talend, and Microsoft [[SQL Server Integration Services]].
>
> **[3:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=189)** For these reasons, I perceive the real power of ETL to be in the structure of thinking.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=195)** The majority of data engineering problems can be broken down into a set of ETL steps.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=200)** Learning to apply the ETL thought process to your data engineering challenges is an important and powerful skill.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extract-transform-load-etl?u=76281980&t=208)** As we go hands on, we'll see the skill in practice and how it can be put to use.

> [!info]- Semantic Content
>
> **Env Vars:** etl (16), elt (2), sql (1)
> **Analogies:** such as (7)
> **Code Keywords:** let (1), finally, (1), else. (1)
> **CLI Commands:** apache (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** ibm (1)
> **Speakers:** - the (1)

#### Tasks, DAGs, and dependencies
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=0)** - Now that we understand the history of orchestration in ETL, let's talk about some of the terms that are directly applicable to our data engineering process, tasks, DAGs, and dependencies.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=13)** These are key concepts that are used to describe the structure and operation of data processing workflows.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=20)** A task in a data pipeline represents a discreet unit of work that needs to be performed, such as reading data from a file, applying a transformation, or writing data to a database.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=33)** Tasks can be simple or complex, and can be composed of multiple sub-tasks.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=39)** A DAG, directed acyclic graph, is the data structure that represents the dependencies between tasks in a pipeline.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=48)** In a DAG, each task is represented as a node.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=52)** And the edges between nodes indicate the order in which tasks need to be executed.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=58)** DAGs ensure that tasks are executed in the correct order that the output of one task is available as the input of the next task in the pipeline.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=71)** Dependencies refer to the relationships between tasks in a DAG.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=75)** A task may have one or more dependencies, meaning it relies on successful completion of one or more other tasks before it can start.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=84)** By analyzing the dependencies in a DAG, it is possible to determine the optimal order in which the tasks should be executed, in order to minimize the time and resources required to complete the entire set of tasks.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=98)** In summary tasks, DAGs, and dependencies are fundamental concepts in the field of data engineering, and are used to design, manage, and operate complex data processing workflows.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=112)** These concepts have a rich history in the field of computer science, and have evolved over time to support the growing demand for data-driven decision making in a wide range of industries.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/tasks-dags-and-dependencies-22217570?u=76281980&t=123)** With this information, we have everything we need to begin our hands-on journey into data engineering.

> [!info]- Semantic Content
>
> **Env Vars:** dag (4), etl (1)
> **CLI Commands:** node (1)
> **Code Keywords:** let (1)
> **Analogies:** such as (1)
> **Speakers:** - now (1)


### 2. Airflow Introduction

#### Introduction to Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=0)** - [Instructor] Apache Airflow is an open source project originally developed in 2014 by Airbnb.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=6)** It is a platform to programmatically author, schedule, and monitor workflows.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=12)** It is a tool for building and managing complex data pipelines, making it easier to orchestrate, automate, and monitor data processing tasks.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=21)** With Airflow, you can create workflows that include a variety of tasks, such as extracting data from sources, transforming it, and loading it into target systems.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=32)** It also supports scheduling and monitoring of these workflows, making it easier to handle data processing at scale.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=39)** Airflow allows developers and data engineers to create, manage, and monitor complex workflows made up of multiple tasks called DAGs in a repeatable, monitored, and orchestrated way.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=52)** Airflow is written and developed in Python, making it an easily sensible and flexible solution.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=59)** In fact, the power of Airflow is rooted largely in its extensibility.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=64)** Airflow exposes operators, which allow for the seamless and straightforward integration of a variety of tools, databases, and systems.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=73)** These operators are largely open source and allow DAG authors to integrate with external systems quickly and efficiently.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=80)** Given this flexibility, Airflow has emerged as one of the most heavily used tools in the data engineering ecosystem.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=87)** As such, it is the focus of this series of videos.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=91)** Airflow has a series of fundamental principles that guide its development, usage, and operations.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=99)** First, Airflow is dynamic.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=101)** Pipelines are configured as code, and thus can be edited, created, and removed dynamically.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=108)** All Airflow DAGs exist as Python files on the file system, as you'll soon see.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=114)** Second, Airflow is extensible.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=116)** It's easy to define new operators, executors, and even extend the Airflow library itself, such that you as a developer can use Airflow at the level of abstraction that you see fit.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=129)** Third, Airflow is designed to be elegant.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=132)** The pipelines are lean and explicit.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=134)** And they use Jinja powered parameters that allows you as a DAG author to access the internal state of Airflow during a DAG execution, as well as execution-specific information.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=146)** Finally, Airflow is scalable.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=150)** Airflow leverages async workers that are able to be spun up and spun down dynamically.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=155)** DAG executions in Airflow are able to be triggered and sent to any number of workers.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=160)** This allows you to, as Airflow says, "scale to infinity."
>
> **[2:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=165)** While we talk about Airflow, I do want to remind you that there are a number of similar orchestration tools in the industry, including Dagster, Airbyte, Prefect, and others.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=175)** Most of these principles are true for them as well, and may be cross-applied seamlessly.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=180)** Airflow is a powerful addition to the data engineer's toolkit that enables automation in a visible and extensible way.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=188)** As we dive into this topic, I'd encourage you to reflect on where Airflow's features and functionalities can be helpful in your life.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=196)** Have you had data engineering challenges involving extending a workflow where limitations of the system prevented you from accomplishing your goal?
>
> **[3:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=205)** Have you had to create the same integrations that you made at a previous company simply due to lack of library sharing?
>
> **[3:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=211)** Have you struggled with data issues at scale due to lack of available resources?
>
> **[3:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/introduction-to-airflow?u=76281980&t=216)** If you've had these challenges before, you'll pretty quickly see how Airflow can add tremendous value to your organization and operations.

> [!info]- Semantic Content
>
> **Env Vars:** dag (4)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** python (2), apache (1)
> **Code Keywords:** finally, (1), async (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Installing Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=0)** - [Narrator] Let's kick off our hands-on work by installing Apache Airflow.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=5)** Airflow can be set up in a number of ways, but for our purposes, we're going to install it using pip.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=12)** It is important to note that Airflow is a constantly updating piece of software with hundreds of contributors.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=19)** As new versions of Airflow are released, installation instructions, functionality, and the appearance of the Airflow UI may change.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=28)** Before you install Airflow in a production environment, it is critical to review the instructions on Airflow's own website.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=37)** I want to make it clear that the instructions that you see correspond to the specific version of Airflow that I am installing.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=45)** Installation instructions can be different between versions of Airflow and it's critical that you make sure to follow the right set of instructions for your particular version of Airflow.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=56)** Similarly, Airflow's UI can and will change in different versions of the product.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=63)** If your UI doesn't look exactly like mine does, don't worry.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=67)** It probably has to do with your Airflow version.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=70)** Before we begin the installation process, here's the rough set of steps involved in installing Airflow.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=76)** First, we'll run the pip install of Airflow.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=80)** Then we'll initialize the Airflow database.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=83)** After that, we'll add a user to the Airflow database.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=87)** We will then configure Airflow to work in codespaces, and then disable CSRF.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=95)** We'll be deploying Airflow in codespaces for this video.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=99)** GitHub Codespaces has its own security constraints and will need to perform some workarounds to get things working properly in codespaces.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=107)** Sometimes you may see a bad request error message in codespaces, or you may need to manually edit the URL.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=116)** When we start up these services, I'll discuss how to solve some of these issues.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=121)** This video will walk through a manual install of Airflow.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=124)** However, for subsequent exercises, you should feel free to use the provided utility scripts.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=130)** You can see a description of the utility scripts here.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=136)** Now, let's look at the actual command necessary to install Airflow.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=140)** To get started working with Apache Airflow, we need to install it using Python's PIP package Installer.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=148)** Here, you can see the generic command for installing Airflow.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=152)** The first thing to notice is that I manually specify the variable, Airflow home.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=157)** This sets the location of my Airflow install.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=160)** Next, I specify the Airflow version in my pip install command.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=165)** Finally, it's best practice when installing Airflow with pip to also include a constraints file.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=172)** Normally, libraries keep their dependencies open while applications pin their dependencies.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=177)** However, with Airflow, users can manage their dependencies on their own, which allows for more flexibility in upgrading libraries on a case by case basis.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=187)** While this flexibility sounds positive, it can result in broken installations.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=191)** Including the constraints file ensures the set of libraries you install with Airflow all work together.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=197)** Now let's switch over to codespaces and perform the installation.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=203)** I'm going to increase the size of my terminal window here.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=207)** Let's first check which version of Python we have for our constraints file.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=213)** It looks like we're running with Python 310, so we'll want to make sure we pick the constraints file for Python 310.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=220)** Let's now craft the install command that we want to use.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=225)** We know that we want our Airflow home to be the home directory of our Airflow project.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=231)** We're going to choose to install Airflow version 2.6.3.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=237)** Finally, we're going to include the constraints file that corresponds again to Python 310.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=242)** Let's hit Enter.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=246)** The Airflow installation process can take some time.
>
> **[4:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=257)** After the installation command completes, you're able to use the Airflow command right from the command line.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=264)** You can see the full set of functions available by just typing the Airflow keyword into the shell.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=270)** Airflow uses a relational database as its backend to store configuration data.
>
> **[4:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=276)** By default, this is a SQL light database, which will be stored in your home directory's Airflow/Airflow.db.
>
> **[4:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=284)** To initialize this database, we run the Airflow DB init command In production, we should use a more robust database than the SQL Light database.
>
> **[4:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=298)** Oftentimes, this can be a standalone database or an AWS RDS instance.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=304)** Next, we need to create a user who can log into the Airflow UI.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=309)** We can do this by running a command in the terminal to create a user with admin permissions named Admin.
>
> **[5:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=317)** Once this is done, we'll see a message confirming that the user has been created.
>
> **[5:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=323)** You'll notice that Airflow has been installed in the /workspaces/hands-on-introduction-data-engineering-4395021/
>
> **[5:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=334)** Airflow-Directory, or just as directory, right here.
>
> **[5:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=338)** There's a variety of configuration files present, including an Airflow.cfg file, which is the main Airflow configuration file and the web server, _config.py file, which is the main web server, configuration file.
>
> **[5:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=352)** The final step in our installation process is to open the web server config.py file and look for a setting named WTF_CSRF_enabled.
>
> **[6:04](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=364)** Right now, it's set to true.
>
> **[6:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=367)** We're going to set this to false.
>
> **[6:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=371)** Changing this value to false disables CSRF, which is necessary to operate Airflow in our GitHub Codespaces developer environment.
>
> **[6:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/installing-airflow-23800633?u=76281980&t=381)** Save this file and you've officially installed Airflow.

> [!info]- Semantic Content
>
> **CLI Commands:** pip (5), python (5), make (3), apache (2), aws (1)
> **Prerequisites:** install (11), set up (1), configure (1)
> **Code Keywords:** let (6), finally, (2), switch (1), default, (1)
> **Env Vars:** csrf (2), sql (2), url (1), pip (1), aws (1)
> **Tools:** github (2), terminal (2), command line (1)
> **File Paths:** airflow.cfg (1), _config.py (1), config.py (1)
> **Versions:** version 2 (1), 6.3 (1)
> **Definitions:** is a  (2)

#### Running the Airflow webserver and scheduler
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=0)** - [Instructor] Airflow is both a library and an application, and in this context, we'll be setting up the application side of Airflow.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=8)** We'll cover the two key components of Airflow, the web server, and the scheduler, and their respective roles in the Airflow ecosystem.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=17)** We'll also discuss how to start and stop them.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=20)** The Airflow Webserver is a web-based UI that is commonly used in production to provide an overview of all DAGs and their execution flow.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=30)** It offers several ways to manage administrative settings, connections, variables, and other components of Airflow through a web interface.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=39)** The web server is also capable of responding to HTTP requests and it can be configured with different viewer and editor modes.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=48)** It is worth noting that the web server is not a required component of the Airflow ecosystem and can be managed entirely from the command line, although this may not be the most user-friendly option.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=62)** The Airflow Scheduler is a process that continually monitors all tasks and DAGs in Airflow.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=68)** It starts subprocesses that keep track of the heartbeat of all DAGs and checks whether any active tasks can be triggered.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=76)** Although it's possible to run the web server without the scheduler, it's not recommended.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=81)** Now let's switch to Codespaces.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=85)** To run the web server, you can execute the following command, "Airflow webserver."
>
> **[1:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=93)** You can run it as a background process using the dash D flag.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=104)** At this point, we can actually open the Airflow UI and see the running UI.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=110)** Before I do that though, I want to mention something important.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=114)** As part of our Airflow installation process, we disabled CSRF.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=119)** If you open webserver_config.py, you'll see that WTF_CSRF_ENABLED equals false.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=128)** This disables CSRF, which is critical if we want to use Airflow in Codespaces.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=135)** However, this doesn't fix all of our issues as we'll soon see.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=140)** In Codespaces, you can click on the ports tab and open up the line that says "Port 8080."
>
> **[2:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=146)** You can click on this globe icon to open the Airflow UI.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=152)** Once the UI has loaded, you'll see the login page.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=157)** You will also see the next parameter in the URL is incorrect and we'll need to manually fix it.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=164)** Let's first enter the username and password that we set up in the previous step, the username being "Admin" and the password being "Password."
>
> **[2:53](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=173)** Now hit sign in.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=176)** Codespaces abstract support into the URL so you don't need to specify it, but Airflow isn't aware of that, so we need to remove the port 8080 in the URL for Airflow to open properly.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=191)** When you run a DAG for the first time, you may need to make the exact same change in Airflow.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=197)** Once you've logged into Airflow, you'll see a number of warnings.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=201)** The first one is Airflow alerting us the scheduler does not appear to be running.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=206)** Let's talk about that.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=208)** Let's switch back to Codespaces and run the Airflow DAGs list command.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=216)** This command prints out all of the DAGs that exist in Airflow.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=219)** You'll notice there are a number of example DAGs that are shown when running the command, but that don't appear in the Airflow UI.
>
> **[3:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=227)** That's because the scheduler is responsible for keeping track of the DAGs in Airflow and we haven't run it yet, so let's fix that.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=235)** To run the scheduler, you can type in "Airflow scheduler," and again, use the dash D flag to run it as a background process.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=247)** Congratulations, you now should have a fully-running Airflow web server and scheduler.
>
> **[4:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=252)** Let's switch back to Airflow and refresh this page to ensure that we can now see the example DAGs.
>
> **[4:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=259)** It looks like we can.
>
> **[4:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=262)** Let's switch back to Codespaces.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=264)** To stop both the web server and scheduler, you'll need to kill their respective processes.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=270)** But first, let's figure out how to find their processes.
>
> **[4:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=273)** There are two ways to look up the process ID of the web server and scheduler.
>
> **[4:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=278)** First, upon startup, both the web server and scheduler write process ID files.
>
> **[4:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=284)** Let's open these files and have a quick look.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=287)** Here's the scheduler process ID or PID file, and here's the web server process ID or PID file.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=295)** The number corresponds to the process ID that is running on the box.
>
> **[5:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=300)** The second way is we can look up and filter through all processes running on the box.
>
> **[5:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=306)** When the web server and scheduler start, they actually spin up multiple processes, so we have to make sure we stop the parent process.
>
> **[5:14](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=314)** Here's a quick command you can use to look up the process ID of the web server, and here's a quick command you can use to look up the process ID of the scheduler.
>
> **[5:28](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=328)** We can see at least for the web server that 7587 matches the process ID in the PID file.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=335)** And for the scheduler, 9158 matches the process ID output by this command.
>
> **[5:42](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=342)** Once you have the process ID, you can kill the process by typing "Kill," in this case, "7587."
>
> **[5:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=350)** That will stop the web server process.
>
> **[5:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=352)** We can also type "Kill 9158," and that will stop the scheduler process.
>
> **[5:59](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=359)** If we go back to the Airflow UI and refresh the page, we can see that Airflow is now down.
>
> **[6:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=365)** For good measure, let's rerun our ps -ef commands to make sure the process are actually stopped on the box.
>
> **[6:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=375)** Great, it seems like both of them have successfully stopped.
>
> **[6:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/adjusting-airflow-configuration-settings?u=76281980&t=379)** For convenience, I've also included this stop_airflow.sh script, which does pretty much the same thing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), switch (4), interface (1), abstract (1), case, (1)
> **Env Vars:** url (3), pid (3), csrf (2), http (1), wtf_csrf_enabled (1)
> **UI Navigation:** open the (2), click on (2), switch to (1)
> **CLI Commands:** make (3), find (1)
> **File Paths:** webserver_config.py (1), stop_airflow.sh (1)
> **Code Identifiers:** webserver_config (1), stop_airflow (1)
> **Ports:** port 8080 (2)
> **Definitions:** is a  (2)

#### Adjusting Airflow configuration settings
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=0)** - [Instructor] Airflow's power is in its flexibility to fit your business needs and specifications.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=6)** Some enterprises have high-throughput needs, some have on-prem versus cloud needs, some have customized executor needs.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=13)** To handle the wide landscape of business needs, Airflow provides a multitude of configuration options.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=20)** Let's see how we can adjust these configuration settings to set up Airflow in an optimal way for our environment.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=27)** Upon installation, Airflow will create an airflow.cfg file that lives in the Airflow installation directory.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=34)** To see where that directory is, you can run echo AIRFLOW_HOME.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=40)** Now that we know where Airflow is, we can navigate to the directory and look at some of our settings.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=45)** Let's first get an overview of the available categories that we can tune.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=51)** As you can see, Airflow has a number of configuration options broken down by section, including core, database, logging, API, operators, and many, many more.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=65)** The airflow.cfg file is the primary entry path for all Airflow settings, but beware.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=72)** Airflow also allows settings to be configured in environment variables.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=77)** Interestingly enough, environment variables actually take precedence over the settings in this file.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=83)** For that reason, anytime I'm on a new box, I start by checking if any of the environment variables have been set for Airflow.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=92)** In this case, it looks like I only have AIRFLOW_HOME set, so I should be good to go.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=98)** Let's open up the airflow.cfg file.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=102)** The settings are laid out as key value pairs that look like setting name and setting value.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=109)** For example, if I look for the dags folder config setting, I can see that Airflow is expecting my DAGs to be in a directory inside of the Airflow install, called dags.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=121)** To change any of the configuration settings, you simply replace the value with the value that you desire.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=129)** When we open up Airflow, we see all of the DAGs in the example category listed.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=136)** While this is great for an introduction to Airflow, we likely don't want these example DAGs in production, so let's turn them off.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=146)** We can go back to the airflow.cfg file and look for the load-examples setting.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=152)** As you can see, it's set to True.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=155)** Let's change the setting to False.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=159)** To pick the changes up, we're going to restart Airflow.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=162)** Depending on the setting that you change, a restart isn't always necessary, as there are fixed intervals where Airflow will live reload some settings, but we'll restart it just for good measure.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=173)** Now that we've killed the processes, let's start it up again.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=179)** If we go back to the Airflow UI and refresh the page, it may take a while to start up.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=187)** We will see that our example DAGs are no longer there, and we have a clean, production-ready Airflow instance.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=195)** We've just successfully changed the Airflow configuration file and updated Airflow.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/running-the-airflow-webserver-and-scheduler-24002396?u=76281980&t=200)** Great work so far.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (1)
> **File Paths:** airflow.cfg (4)
> **Env Vars:** airflow_home (2), api (1)
> **Cross-References:** go back to (2)
> **Prerequisites:** set up (1), install (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Build a 1 Task DAG
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=0)** - [Instructor] Airflow is designed to construct and manage orchestrated directed acyclic graphs, or DAGs.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=7)** In other words, Airflow provides a way to programmatically arrange repeatable, monitored, and interdependent operations in a specific order.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=17)** Our first task is to build and run a simple DAG in Airflow.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=21)** This particular DAG will consist of a single node that create this file, .txt, with the contents, Hello, LinkedIn Learning.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=31)** In Airflow DAGs are represented as Python scripts located within a specific directory.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=37)** To create a new DAG, simply create a new Python script, and place it in this directory.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=43)** As long as the script is properly formatted and error-free, Airflow scheduler will automatically pick it up during the next heartbeat.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=52)** Let's switch back to our Code Spaces environment and first check where Airflow is expecting DAGs to be.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=58)** To do that, you can run the following command.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=62)** This command reads the Airflow.cfg file and looks for the value of the DAGs folder setting.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=68)** We can see that our DAGs folder is set to the DAGs directory inside the Airflow install.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=74)** This code space comes with an empty file called one_task_dag.py.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=80)** This file will define a basic OneNote DAG that uses a bash command to create a file with the text, Hello, LinkedIn Learning.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=89)** Let's open it up and start writing our DAG.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=93)** I have pre-written this DAG in my environment, but we'll copy and paste it in here.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=98)** I'll go through line by line to explain what each of them actually do.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=103)** We'll start with importing the date time package, which we'll use to specify a start date.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=109)** All DAGs then require importing the DAG class from the Airflow package.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=114)** Additionally, since we're using a bash command, we'll also import the bash operator.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=120)** Operators are libraries that facilitate the interface with external tools and systems.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=127)** All DAGs accept a set of default arguments, such as the owner, email, retry behavior on failure, and alert options.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=137)** For this example, we'll set some default options just to demonstrate how they look.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=143)** Next, we'll create the actual DAG object.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=146)** The first object, the DAG ID, is the name of the DAG.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=150)** In this case, one task DAG.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=153)** Then, we'll provide a number of named arguments including a description, schedule interval, which is the frequency at which the DAG should run, and we'll pass in the default arguments that we previously defined.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=167)** Finally, we'll create a bash operator, called Task One, to run the command to create the file.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=174)** The task ID, One Task, is the name of the task within the DAG.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=178)** As mentioned previously, this DAG will have only one task.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=183)** We specify the actual bash command to run in the bash command argument.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=188)** In this case, the bash command will echo Hello LinkedIn Learning to a file called createthisfile.txt.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=196)** To validate the syntax of the file, you can run the regular Python command against the file.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=205)** I use the - W ignore flag to make sure that we ignore any unnecessary warnings that pop up when checking this DAG for syntax validity.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=215)** It seems like this completed with no errors.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=217)** Therefore, our DAG has the correct syntax.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=224)** Let's open our Airflow UI.
>
> **[3:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=227)** We can now see one_task_dag appears here in the UI.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=232)** To run the DAG, press the play button on the right side of the DAG.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=236)** Once the DAGs status changes to light green, the DAG is running.
>
> **[4:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=240)** When the DAG's status changes to dark green, the DAG is run successfully.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=245)** If any of the tasks in a DAG fail, they'll be marked red.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=249)** It looks as though our DAG status is now dark green, implying that it completed successfully.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=255)** It's always best practice to also make sure to check the contents after DAG runs to make sure our output is as expected.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=264)** Let's switch back to Code Spaces and cat out the file that we expected to create.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=271)** We successfully see the text, Hello, LinkedIn Learning, meaning our operation has completed successfully.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=277)** Congratulations.
>
> **[4:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=278)** We've just successfully created and run a one task DAG in Airflow.
>
> **[4:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-1-task-dag?u=76281980&t=284)** As you can see, all Airflow DAGs are specified in code, which makes the authoring process simple, flexible, and straightforward.

> [!info]- Semantic Content
>
> **Env Vars:** dag (25)
> **Code Keywords:** let (4), switch (2), case, (2), require (1), interface (1)
> **CLI Commands:** python (3), make (3), node (1), cat (1)
> **Tools:** bash (7)
> **File Paths:** airflow.cfg (1), one_task_dag.py (1), createthisfile.txt (1)
> **Code Identifiers:** one_task_dag (2)
> **Best Practices:** best practice (1), make sure to (1)
> **Definitions:** in other words (1)

#### Build a 2 Task DAG
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=0)** - [Instructor] The power of the Directed Acyclic Graph, or DAG, is that it allows authors to set explicit task dependencies.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=9)** Meaning there's a strict requirement that a directed edge between task one and task two means that task one must be executed before task two.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=19)** Thus far, we've only created one Python file with one DAG and with one task.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=26)** As you can imagine however, we can create one Python file with one DAG with multiple tasks.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=33)** A two-task DAG in airflow is a simple DAG with two tasks.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=38)** Where one task depends on the successful completion of another task.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=43)** In this case, we will build a two-task DAG where T1 depends on the successful completion of T0.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=51)** Let's switch back to our code spaces and navigate into the airflow DAGS directory.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=57)** As a reminder, you can run this command to find the location of the DAGs directory.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=63)** We can see that we already have a file named two_task_dag.py already created.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=70)** Let's edit that file.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=72)** I have pre-written this DAG in a separate environment and will first copy and past it here before going line by line to explain what we see.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=81)** First, add in our necessary import statements and import date time, the Bash operator, and the DAG class itself.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=90)** We'll set up our default ARGs and create a new DAG with the DAG ID Two Task DAG.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=96)** Once again, we'll set our schedule interval to none.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=100)** Add a brief description and pass in our default ARGs.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=104)** In this example, T0 and T1 are two Bash operator tasks that print some text to the console T1 depends on T0 to successfully complete, so the double greater than sign operator is used to set the dependency between the two tasks.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=121)** When this DAG is run, T0 will first run and print first airflow task to the console and once T0 completes successfully, T1 will sleep for five seconds and then print second airflow task to the console.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=137)** To check whether the syntax of our DAG is correct, you can use the regular Python command against the file itself.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=144)** I always use the -w ignore flag to tell Python to ignore warnings.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=149)** Given that we have no output, we know our DAG is successful from a syntax checking perspective.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=156)** Let's switch to the airflow UI.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=160)** In the airflow UI, you can see that two_task_dag successfully appears.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=166)** We can click on this DAG and introspect information about this DAG.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=171)** By clicking on the graph view, you can see the explicit task dependencies.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=177)** To run this DAG, we can press the play button in the upper right hand corner and press Trigger DAG.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=183)** Once a DAG is triggered, you'll get a message above saying Triggered two no dag and its status will change from green for the first task, dark green for the first task, and light green for the second task, until it's completion.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=198)** As you can see, this DAG has completed successfully.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=201)** To check out the logs, you can press one of the tasks and press the log button.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=207)** We can see that in our first task, we have the output First Airflow task.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=214)** If I go back to our graph view and press the second task and press the log view, we can see that after our first task successfully ran, we have the output Second Airflow task.
>
> **[3:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=228)** We can now tell that our DAG has been successfully run.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=232)** As you can likely infer, a two-task DAG is just the beginning.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/build-a-2-task-dag?u=76281980&t=236)** Dags can get larger and much more complex with the ability to represent more complex business transformations and operations all from this level of abstraction.

> [!info]- Semantic Content
>
> **Env Vars:** dag (22), dags (1)
> **Code Keywords:** let (3), switch (2), case, (1), pass (1)
> **CLI Commands:** python (4), find (1)
> **Code Identifiers:** two_task_dag (2)
> **Tools:** bash (2)
> **UI Navigation:** switch to (1), click on (1)
> **Definitions:** means that (1), is a  (1)
> **File Paths:** two_task_dag.py (1)


### 3. Basic ETL in Airflow

#### ETL in Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=0)** - [Presenter] Today we're going to be talking about the ETL paradigm and how it relates to Airflow.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=5)** ETL stands for extract, transform, and load, and is used extensively in the data engineering world.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=13)** The ETL process involves extracting data from a source system, transforming that data, and then loading it into a final system.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=22)** This allows data practitioners to clearly define a workflow for working with data in the enterprise.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=27)** In the past, organizations relied on discreet and difficult to manage jobs across vendors, platforms, and data centers to prepare data for analysis, but with ETL, we can streamline the process and make it more manageable.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=44)** One tool we'll be using in this course is Airflow.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=47)** Airflow is a powerful data engineering tool that is flexible and easy to use.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=52)** One of the great things about Airflow is the community offerings that have been built around it.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=58)** Enterprises who are just beginning their journey in Airflow have immediate access to a rich corpus of both built-in and external libraries that are readily available.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=68)** Airflow has pre-built operators that allow DAG authors to extract, transform, and load data in configurable, stable, and secure ways.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=79)** DAG authors can easily find, import, and leverage these operators to immediately integrate into their source systems.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=88)** In this chapter, we'll focus on applying the ETL principles to the Airflow DAG authorship process.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=94)** However, it's important to note that the data engineering ecosystem is a fast moving ecosystem, and many fundamentals change over time as the industry continues to develop.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=104)** One of the new entrants is the ELT principle, which involves loading data into a storage system and then transforming the data.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=112)** Luckily, Airflow also has a number of operators that can help with the ELT principle too.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=119)** For now, let's stick with ETL.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=121)** In Airflow, it's best to minimize the amount of work in each task.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=126)** That makes it easier to manage and debug pipelines.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=129)** As such, in the ETL paradigm, we create a separate task for the extract functionality, a separate task for the transform functionality, and a separate task for the load functionality.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=140)** Virtually every data engineering task can be broken down into some variation of these three steps.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/etl-in-airflow?u=76281980&t=146)** With that in mind, let's get started and solve our first real-world data engineering challenge.

> [!info]- Semantic Content
>
> **Env Vars:** etl (7), dag (3), elt (2)
> **Code Keywords:** let (2), import, (1)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** make (1), find (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [presenter] (1)

#### A real-world data engineering task
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=0)** - [Instructor] As a data engineer, you are the Swiss Army knife of the modern enterprise.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=5)** You have the ability to simplify complex data-centric requirements into discreet and manageable tasks.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=12)** In addition to technical knowledge, you also have a deep understanding of the business context of your organization.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=20)** Your work often involves taking vague requests and turning them into repeatable workflows.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=25)** For example, analysts might ask for pipelines to perform healthcare analytics or understand population movement.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=32)** Each of these tasks may differ in size, depth, or urgency, but they all share one common element.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=39)** They're able to be distilled into the ETL model.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=43)** To see this in practice, let's look at a real world data engineering example.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=48)** One day a business manager asks you, as a data engineer, the following.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=53)** "Every day, I download a file from the internet containing the list of top level domains.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=59)** I ask my team to give me a list of only the generic top level domains and save it to my computer.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=66)** I want to analyze trends in a time-series way, but I can't easily do that in my setup.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=71)** Can you help me solve this problem?"
>
> **[1:14](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=74)** At first, it may seem challenging to see how such a request can fit into the ETL model, but let's break it down.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=81)** First, we know there must be a data set of top level domains somewhere.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=86)** Once we find this we'll want to extract it from the source system.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=91)** Second, it sounds like there's going to be some work required to prepare this data set for analysis over time.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=98)** That's the transform part of our operation.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=101)** Finally, for our business manager to perform analysis, the data must reside somewhere the team can perform analysis.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=109)** We'll then load this data into a storage system.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=113)** As you can see, we've successfully distilled this requirement into the extract, transform, and load paradigm.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=120)** Many business challenges will look similar to this one.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=123)** Over time, distilling these requirements becomes more and more straightforward.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/a-real-world-data-engineering-task?u=76281980&t=127)** Now that we've understood the business requirements and how they fit into the ETL paradigm we can get started building our DAG.

> [!info]- Semantic Content
>
> **Env Vars:** etl (3), dag (1)
> **Code Keywords:** let (2), finally, (1)
> **Analogies:** for example (1), similar to (1)
> **CLI Commands:** find (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Extracting data manually
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=0)** - [Instructor] As a data engineer, the first step in any ETL process is to extract data from a source system.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=6)** This involves pulling data from an external system to a predetermined staging area.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=11)** The staging area can be local, a database, a data warehouse, or any number of other storage mediums.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=19)** Let's briefly return to our business request.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=21)** Our user mentioned that every day, they download a file from the internet.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=26)** They must be saving this file somewhere.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=28)** That process is the extract operation that they undergo every day.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=33)** Given that the extract operation relies on the existence of a staging area, it is crucial to ensure that the selected staging area is properly set up for the extract operation.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=43)** For example, if you're extracting a large amount of data from a source system, make sure that the available storage in your staging area is sufficient to accommodate the data you'll be extracting.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=55)** Additionally, ensure that you have the necessary permissions to read the data from the source system, and write the data to the directory where the file will be saved.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=65)** To illustrate this process, we'll be manually extracting data from a source system and saving it to disc, just like our business user does.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=73)** Specifically, we'll extract the data set from [datahub.io](https://datahub.io) that includes a list of the top level domain names, their type, and their sponsoring organization.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=83)** In this video, our goal is to extract this data manually, meaning we won't be using any orchestration tools just yet.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=90)** We'll run through this whole process as though it's a one-off request.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=95)** First, let's open up Codespaces.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=98)** Navigate to the directory where we'll do the manual work.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=101)** In this case, it's lab slash manual.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=104)** To extract the data, we're going to use the W get command.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=108)** This command allows us to download files over HTTP or HTTPS.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=113)** I'm going to rename this file for organization purposes to manual extract data.csv.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=120)** We're going to do this in one step using W gets dash O flag.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=124)** Great, it looks like our command completed successfully, but it's always wise to double check and make sure.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=131)** Let's open up the file on the left-hand side of our page in the lab slash manual directory.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=137)** We can see that manualextractdata.CSV exists.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=141)** Let's double click it.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=143)** It looks like things have worked as expected.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=146)** Congratulations, you've successfully extracted data manually and stored it locally.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=151)** Now imagine if you had to do this every morning.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=154)** How would you design it?
>
> **[2:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=156)** Would you write a new file per day?
>
> **[2:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=158)** How would you monitor to delete old data and old files?
>
> **[2:41](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=161)** Let's say the W get fails one day.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=164)** How would you detect this?
>
> **[2:46](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=166)** These are just a few of the challenges associated with manually pulling this data.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-manually?u=76281980&t=170)** Luckily, and as we'll soon see, there are good ways of automating this process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), type, (1), case, (1), delete (1)
> **Env Vars:** etl (1), http (1), https (1), csv (1)
> **Analogies:** for example (1), just like (1), imagine (1)
> **File Paths:** data.csv (1), manualextractdata.csv (1)
> **CLI Commands:** make (2)
> **URLs:** [datahub.io](https://datahub.io) (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** set up (1)

#### Extracting data with Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=0)** - [Instructor] The process of automating manual work in Airflow can often be as easy as wrapping the commands you'd use to manually accomplish the same task.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=9)** We've used the Wget command to extract data.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=12)** Let's see if we can automate just this process.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=15)** As an aside, the wealth of resources available in the Airflow ecosystem make it tempting to immediately jump into using external libraries to build tasks, but it's best practice to start with automating what works.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=30)** In this video, we'll use the Wget command to extract data from DataHub.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=36)** Let's first navigate to the Airflow DAGs directory and open up the blank extract_dag.py file.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=44)** This file will be the place where we create a one task extract pipeline.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=49)** Let's begin the process of designing our DAG.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=52)** I'll copy and paste the completed DAG here first, and we'll run through it line by line.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=60)** First, we import datetime, the BashOperator, and the DAG object from Airflow.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=67)** We'll then create a DAG with the DAG ID extract_dag and some other basic parameters.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=73)** We'll define our extract task as a bash operator and use the Wget command to extract data, write the data to a file called airflow-extract-data.csv.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=85)** This file will live in the lab/orchestrated directory.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=89)** Now that our DAG is done, let's open the Airflow UI.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=94)** We can see that our DAG extract_dag is present in the UI.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=98)** Click on this DAG and click the Graph button.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=103)** You'll see this DAG consists of one task named extract_task.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=107)** Now run the DAG.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=109)** To run this DAG, press the play button in the upper right hand corner of Airflow and click Trigger DAG.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=117)** Once a DAG is run successfully, you'll see a dark green box.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=122)** Let's verify our DAG accomplished its intended task.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=126)** We can switch back to code spaces and I locate the file that we just wrote.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=132)** We can see our data looks as expected and we can safely conclude that our extract task was successful.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=139)** As you can see, creating an extract task in Airflow is simple and straightforward.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/extracting-data-with-airflow?u=76281980&t=144)** As I previously mentioned, there are a multitude of operators both built-in and custom that will allow you to extract data from a source system as well.

> [!info]- Semantic Content
>
> **Env Vars:** dag (14)
> **Code Keywords:** let (5), switch (1)
> **CLI Commands:** wget (3), make (1)
> **Code Identifiers:** extract_dag (3), extract_task (1)
> **UI Navigation:** navigate to (1), open the (1), click on (1)
> **File Paths:** extract_dag.py (1), airflow-extract-data.csv (1)
> **Tools:** bash (1)
> **Best Practices:** best practice (1)

#### Transforming data manually
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=0)** - [Instructor] The process of transforming data is critical in the data engineering lifecycle.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=5)** Transforming is also known as the preparation or cleaning process, depending on the organization.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=11)** In spite of the differing terminology, the transformation step involves manipulating the data such that it is useful to those who will eventually consume it from the end system.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=22)** To understand where transformation comes into play, it is important to look at our real Business Ask.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=27)** Our business manager has requested assistance in understanding the growth of generic top-level domains over time.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=34)** There are actually two different requests here.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=37)** First, they would like to understand only the generic top-level domains.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=42)** Second, they would like to ensure they can perform this analysis over time.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=47)** Keeping these two in mind, let's see how we may be able to help.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=50)** Depending on the type, scale, and location of the data, data engineers employ a handful of tools to manipulate data.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=58)** Many use Spark, SQL, or Python, all of which come with a number of libraries to accelerate this process.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=66)** A leading library in this space is called pandas.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=70)** Pandas is a powerful open-source data manipulation library built on top of Python.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=75)** It provides easy-to-use and efficient data structures, such as dataframes and series that allow users to analyze, clean, and transform data.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=85)** As such, it is a longtime favorite of data engineers.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=89)** Today, we'll use pandas to clean, manipulate, and transform the dataset that we previously extracted.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=97)** Let's switch to Codespaces and navigate to our manual directory.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=101)** Pandas is already installed in our Python environment, but in the event that it isn't, it can be installed using pip.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=107)** Let's open up Python and use pandas to investigate our dataset.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=112)** Let's set up some imports that we're going to use throughout the course of our investigation and let's read in our file into a pandas dataframe.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=122)** We can do a quick sanity check and type DF to see our dataset.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=127)** Now recall that we want to filter to generic top-level domain names.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=131)** Let's see what the values in the type column are currently.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=136)** You can see there are a number of results, including generic, country code, sponsored, infrastructure, generic restricted, and test.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=145)** We want to remove anything that's not of type generic per our business manager's request.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=151)** Finally, we note that the manager wants to analyze the domains over time and we can see that our current dataset schema doesn't include a date component.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=160)** Let's grab today's date since we've pulled the data today and append it to a new column named date.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=166)** You can ignore the setting with copy warning for now.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=170)** Finally, let's save our transform dataset as a CSV.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=174)** We'll call this dataset manually-transform-data.csv.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=180)** As a sanity check, let's make sure our dataset looks as expected.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=183)** We can navigate to the lab, manual directory, and open the manual-transform-data.csv dataset.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=191)** Nice work.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=192)** We've successfully manually transformed the dataset.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=196)** Now, imagine you what to come in every day and do this by hand.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=199)** It would be tedious and error-prone.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-manually?u=76281980&t=202)** Luckily, we can use tools like Airflow to automate this process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), finally, (2), type, (1), switch (1)
> **CLI Commands:** python (4), pip (1), make (1)
> **UI Navigation:** navigate to (2), switch to (1), open the (1)
> **Definitions:** is a  (2), known as (1), is called (1)
> **File Paths:** manually-transform-data.csv (1), manual-transform-data.csv (1)
> **Env Vars:** sql (1), csv (1)
> **Analogies:** such as (1), imagine (1)
> **Warnings:** note that (1), warning (1)

#### Transforming data with Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=0)** - [Instructor] In Airflow, the repetitive tasks associated with data transformation can be automated.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=6)** Today we will create a DAG with a single transform task.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=10)** This task will read in the CSV that was written by the previous Extract dag, transform that data, and write that data back to disk.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=20)** We've discussed the power of Airflow operators, and we'll expand our toolkit to include the Python operator.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=27)** The Python operator is an Airflow operator that makes executing Python code straightforward and easy.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=34)** We will use this operator to execute our PANDAS-based transformation work.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=39)** Let's first open up our dag.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=41)** We can see the empty transform dag.py.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=45)** I will first show the completed DAG, and then discuss it line by line.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=51)** We'll begin our transformation DAG by importing some necessary Python libraries.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=55)** We'll import daytime PANDAS, our Python operator, and DAG from Airflow.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=61)** Then we create a new DAG named Transform dag.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=66)** Now we'll see the power of our Python operator.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=69)** To perform transformation on top of the data, let's create a function called Transform Data that reads in the extracted data, applies our transformations on it, and writes out the transform data set.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=82)** In the transform data function, we will first get today's date, which we'll use later in the function, then read in our CSV.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=91)** From there, we'll filter the data frame down to only the rows with the type being generic, and then append a new column named date with a nicely formatted version of today's date.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=103)** Finally, we'll write out our new CSV.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=107)** To use this function in the Python operator, we simply pass it to the Python callable named Argument.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=113)** Now, when this task runs it will execute the code in the transform data function.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=119)** Let's switch back to the Airflow UI.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=122)** We can see that transform DAG has appeared here.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=125)** Let's click on it.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=127)** To run the dag, press the play button in the upper right hand corner of Airflow and select Trigger dag.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=135)** While the task is running, it will be outlined in a light green box, and when it is run successfully, it will be outlined in a dark green box.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=143)** As always, let's verify that our DAG accomplished its intended task with a quick eyeball check.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=150)** Switch back to Code Spaces and let's open up our lab file.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=155)** We can see the Airflow transform data that CSV file exists.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=159)** Let's double click it.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=162)** As we can tell, it looks like our Airflow transform data CSV file looks correct.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=168)** As we saw in the case of the extract operation, creating a transform task in Airflow is simple and straightforward.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=175)** There are numerous operators that can help accelerate this process as well.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=179)** The transformation part of the data engineering workflows tend to be the bulk of where processing occurs.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/transforming-data-with-airflow?u=76281980&t=186)** Ensuring this step is managed and monitored seamlessly is key to any successful data engineering project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (5), switch (2), finally, (1), pass (1)
> **Env Vars:** dag (7), csv (5), pandas (2)
> **CLI Commands:** python (8)
> **File Paths:** dag.py (1)
> **Cross-References:** as we saw (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Loading data manually
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=0)** - The last step of any ETL process is to load data into the end system.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=5)** This step involves taking the transform data and uploading it to a destination where it will be used for further analysis.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=13)** In practice, the destination is usually a database, data warehouse, lakehouse or a similar persistent storage system.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=22)** The load step comes largely from a time when data sets were blessed for global use and published to specified shared resources.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=31)** The blessed data sets were then treated as the root data sets for all investigation and analysis workloads.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=38)** As an aside these days, data may be further transformed to address specific use cases even after it's loaded.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=45)** So interestingly enough, in some enterprises the load step can no longer be considered the last step of the modern data pipeline.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=54)** Regardless, we'll continue to follow our ETL frameworks which hold true for the majority of enterprises.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=60)** In this video, we'll discuss the load component of the ETL process, and as always, we'll build it manually first.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=68)** When assessing requirements, we always start with the business request.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=72)** Per the request, our user is currently saving data locally to their computer.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=77)** This is generally a bad practice for a number of reasons, namely security and reusability.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=84)** Furthermore, data saved locally is only usable by the person using that machine.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=89)** And should something go wrong, it may be lost forever.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=93)** As a data engineer when investigating solutions, it is best to also suggest or propose improvements to the current operating model.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=102)** In this case, using a persistent storage technology is a significant improvement over files saved locally.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=109)** So rather than scripting something that would save the files locally let's help the business out and instead load the files into a persistent storage medium.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=118)** Let's switch back to Codespaces and navigate to our manual work directory.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=124)** As part of the Bootstrap process you'll find a file named manual-load-db.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=129)** This database has been created with a single table named top_level_domains.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=135)** Type Command + Shift + P and type SQLite.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=139)** Then select the open database button and open manual-load-db.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=145)** If you look at the bottom left-hand side of your window, you'll see the SQLite Explorer pane.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=150)** Let's click and expand it.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=152)** We can open manual-load-db and see the table underneath it.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=157)** That table's name is top_level_domains.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=160)** If you expand the table, you can see the four columns underneath it.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=165)** Domain, Type, SponsoringOrganization, and Date.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=170)** The schema of the table matches our transform data perfectly.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=174)** Now we want to upload our transform data into this database.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=178)** And let's start by connecting to the database.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=182)** Since we're using SQLite3, our manual import step is actually going to be fairly easy.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=187)** The sqlite3 command-line utility allows us to use the .import command to import a CSV.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=194)** First, we'll set the SQLite mode to CSV.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=198)** To run the import we use the .import command with the file name as well as the table name that we want to import to.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=205)** Keep in mind though, the first row of our transform file is the header which we don't want to ingest.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=211)** We'll use the --skip 1 parameter to skip that first row.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=216)** Once the import has completed, let's perform a quick sanity check to make sure our import worked as expected.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=222)** Open the SQLite Explorer tab and click the play button next to the table name.
>
> **[3:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=228)** Taking a look at the rows we can see that our data has been loaded successfully.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=232)** Now, let's say you have to run this task manually every day.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=236)** You need to log onto the server, ensure the extract and transform steps completed successfully, load the data and perform a sanity check.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=245)** It would be fairly cumbersome and time intensive.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-manually?u=76281980&t=248)** Luckily, we can use Airflow's powerful automation capabilities to automate this process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), continue (1), case, (1), switch (1), type, (1)
> **Env Vars:** etl (3), csv (2)
> **CLI Commands:** sqlite3 (2), find (1), make (1)
> **UI Navigation:** navigate to (1), select the (1), open the (1)
> **Code Identifiers:** top_level_domains (2)
> **Definitions:** is a  (1)
> **Best Practices:** bad practice (1)
> **Warnings:** keep in mind (1)

#### Loading data with Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=0)** - [Instructor] The last step of the ETL process is to load the data into a storage system for broader consumption.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=6)** While this seems to be the most straightforward part, it's also the most important.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=11)** This is a step that allows our business users to perform their analysis.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=15)** Without proper data loading, all of our extract, and transform operations will be done for nothing.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=22)** Similar to the extract and transform cases, Airflow provides a number of out-of-the-box operators to assist it in the data loading process.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=31)** In fact, this is one of the areas where the Airflow community has created a very comprehensive offering.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=37)** These operators allow for integration with Snowflake, Databricks, BigQuery, Redshift, MySQL, SQLite, and many others.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=46)** In this video, we'll orchestrate the loading process.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=50)** We'll use an on-disk SQLite database as our end storage system.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=54)** As mentioned previously, this isn't the most optimal, or persistent storage system, but for our purpose, we're focusing on building the loading step rather than the storage technology.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=64)** Let's navigate to the Airflow DAGS directory.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=67)** We can see that we have a file named load_dag.py ready for our use.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=73)** I'll open it from the side panel.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=76)** As always, I'll first show the completed DAG, and then discuss it line by line.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=82)** We'll start with our imports and we'll import date time, the Bash Operator and the DAG class.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=88)** We're going to use the Bash Operator, because the SQLite 3 command line utility makes loading CSV files straightforward and easy.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=96)** We could instead use the Airflow SQLite Operator, but that would involve having to generate insert statements on a per row basis, which could get cumbersome.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=104)** Instead, we'll use the Bash Operator capability to simply call SQLite Command.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=110)** As a quick aside, it may seem as though we're using the Bash Operator a fair amount.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=115)** That is because as a data engineer, we aim to use the best tool for the job given the environment.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=120)** In our Codespaces environment, basic Bash commands drive many of our workflows.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=125)** For that reason, we use Bash Operator frequently.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=129)** In production settings, you'll frequently see many other kinds of operators.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=134)** Let's get back to our DAG.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=136)** We give it the DAG ID, load_dag and create a Bash Operator using the same .import command that we've seen prior.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=143)** We've configured this job to read data from airflow-transform-data.csv, and to import data to airflow-load-db.db.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=153)** Now, let's switch to the Airflow UI.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=157)** As you know, the scheduler will dynamically pick up new DAGs, which will be displayed in the Airflow UI.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=163)** We can see that load_dag has appeared.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=165)** Let's click on the DAG and let's run it.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=168)** To run the DAG, you can press the play button in the upper right-hand corner of Airflow, and select Trigger DAG.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=175)** While the DAG is running, it'll be outlined in a light green box, and once it's run successfully, it'll be outlined in a dark green box.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=183)** It looks like our DAG has just completed successfully.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=185)** Now, let's switch back to Codespaces.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=189)** As always, let's verify that our DAG accomplished it's intended task.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=193)** Type CMD+Shift+P and type SQLite.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=197)** Then select Open Database.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=201)** Now, open the airflow-load-db.db database.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=207)** Once you've selected that, look at the bottom left of your window, and you'll see the SQLite Explorer pane.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=213)** Click it to open it and select the database.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=216)** Once you've done that, select the table below it and press the play button next to the table name.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=221)** Taking a look at the rows, we can see that our data has been successfully loaded into SQLite.
>
> **[3:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=228)** Congratulations.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=229)** We have finished, run and tested the load_dag, meaning we've now completed the discrete parts of the E, the T, and the L Workflow.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=239)** But we're not done.
>
> **[4:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/loading-data-with-airflow?u=76281980&t=240)** Now, we need to find a way to string all of these together, and ensure that each of them happen sequentially.

> [!info]- Semantic Content
>
> **Env Vars:** dag (10), etl (1), dags (1), csv (1), cmd (1)
> **Code Keywords:** let (7), switch (2), class. (1)
> **Tools:** bash (7), command line (1)
> **UI Navigation:** select the (2), navigate to (1), switch to (1), click on (1), open the (1)
> **Code Identifiers:** load_dag (4)
> **File Paths:** load_dag.py (1), airflow-transform-data.csv (1)
> **CLI Commands:** mysql (1), find (1)
> **Definitions:** is a  (1)

#### Building an ETL DAG with Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=0)** - [Instructor] We've assembled the building blocks of our ETL pipeline through our Extract DAG, transform DAG, and Load DAG.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=7)** However, each of the DAGs that we built operates independently from one another.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=13)** In a concrete ETL workflow, there must be a specific ordering in these tasks.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=18)** Specifically, each step in the ETL process must build upon the successful completion of the previous step.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=25)** Given this insight, it should become apparent that the ETL process itself is a DAG.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=31)** The Extract step is the first task in our DAG.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=34)** Once it is successfully completed and the data is extracted, the Transform task should begin.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=41)** Once the Transform task is successfully completed, the Load task should begin.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=46)** Once the Load task successfully finishes, our ETL process will be complete.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=52)** Let's quickly review our business request one last time.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=56)** Our goal was to automate the process of extracting a list of top-level domains, transforming that list to keep only the generic top-level domains, as well as introducing a date component, and finally, loading the data into a storage system where it can be further analyzed.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=73)** If we can tie each of our individual DAGs together into a larger ETL DAG, we will have achieved our goal.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=81)** Let's switch back to codespaces.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=84)** First, let's navigate to the Airflow DAGs directory.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=89)** We can see a file called basic_etl_dag.py exists.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=94)** This is where we'll author our basic ETL pipeline.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=98)** I'll open it on the sidebar here.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=100)** I'll first show the completed DAG, and then discuss it line by line.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=105)** This DAG will include all of the components of the Extract, Transform, and Load tasks, so, we'll need to import all of the libraries and operators that we used across all of these tasks.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=116)** We'll then create a new DAG named basic_etl_dag, and nest the Extract, Transform, and Load tasks underneath it.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=125)** In order to chain tasks into the dependency structure where one task depends on the other, we'll use what looks like the right bit shift operator.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=133)** This looks like two greater-than signs back to back.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=137)** For example, to represent the ordering, Extract, Transform, Load, I can write, extract_task >> transform_task >> load_task.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=149)** I can also use the left bit shift operator to express this similarly.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=154)** In either of these, the task on the less-than side depends on whatever task is on the greater-than side.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=161)** That means the subsequent task will only start when the previous one finishes.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=166)** In this case, the relationship is linear, but you can imagine some of the more complex ways we can string tasks together using this methodology.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=175)** Now that we've completed our DAG, let's switch back to the Airflow UI.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=180)** As you know, the scheduler will dynamically pick up new DAGs, which will be displayed in the Airflow UI.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=186)** We can see that basic_etl_dag has appeared.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=189)** Let's click on this DAG.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=192)** Let's click on the Graph button.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=194)** We can see the DAG's visualization in the true directed acyclic graph format underneath the Graph button.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=202)** Now, let's run the DAG.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=204)** To run the DAG, click on the Play button in the upper right-hand corner of Airflow, and select Trigger DAG.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=211)** While the DAG is running, it will be outlined in a light green box, and when it's successfully completed, it will be outlined in a dark green box.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=219)** This is true for the individual tasks in a DAG, as well.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=223)** It looks like our DAG has successfully completed.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=225)** Now, let's switch back to codespaces.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=229)** As always, let's verify our DAG accomplished its intended task with a quick eyeball check.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=236)** If we open the lab/end-to-end directory, we can see that the basic-etl-extract-data.csv and basic-etl-transform-data.csv have been created.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=249)** We can click on them to verify they look correct.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=253)** Now, let's check our database.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=255)** Type Control+Shift+P and type in SQLite.
>
> **[4:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=259)** Let's open the database titled basic-etl-load-db.db.
>
> **[4:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=266)** On the bottom left, you'll see the SQLite Explorer pane.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=269)** Select the open database, and select the table named top_level_domains.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=275)** Click the Play button next to the table name to see a visualization of the table.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=279)** Taking a look at the rows, we can see that our data has successfully been loaded into SQLite.
>
> **[4:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=285)** It looks like everything in our basic ETL pipeline completed successfully.
>
> **[4:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=290)** Now, let's think back to a real-world business user request.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=295)** This basic ETL pipeline can run every day at a fixed time in a monitored way.
>
> **[5:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=300)** It persists information to a database that our business user can easily run SQL commands against.
>
> **[5:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=306)** Most importantly, the fact that it's automated means it can run automatically, and that we, as data engineers, will only need to get involved if something breaks.
>
> **[5:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=316)** Congratulations on running your first basic ETL DAG in Airflow.
>
> **[5:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=321)** The power of chained, dependency-based tasks should now be clear.
>
> **[5:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=326)** I'd like you to take a moment to think about where this kind of orchestration can be helpful in your organization.
>
> **[5:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=331)** Are there repetitive tasks that you'd like to automate in a monitored way?
>
> **[5:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=335)** Or even other potential systems that you haven't worked with simply because setting up the integration pipeline was too complex?
>
> **[5:42](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/building-an-etl-dag-with-airflow?u=76281980&t=342)** These are all great use cases and questions to guide us on our data engineering journey.

> [!info]- Semantic Content
>
> **Env Vars:** dag (20), etl (10), sql (1)
> **Code Keywords:** let (12), switch (3), finally, (1), case, (1)
> **UI Navigation:** click on (4), open the (2), select the (2), navigate to (1)
> **Code Identifiers:** basic_etl_dag (3), extract_task (1), transform_task (1), load_task (1), top_level_domains (1)
> **File Paths:** basic_etl_dag.py (1), basic-etl-extract-data.csv (1), basic-etl-transform-data.csv (1)
> **Analogies:** for example (1), imagine (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Review ETL questions
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=0)** - [Lecturer] Now that we've run through an example of taking a business user's request, distilling it into the ETL components and building a pipeline and airflow together, I'd like to give you the opportunity to practice building one on your own.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=18)** Imagine this, your business analyst approaches you with the following request.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=23)** I'm doing some financial analysis on S&P 500 companies and would like to understand the aggregate number of companies in each sector in the S&P 500 on a daily basis.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=36)** I need it in a SQLite database.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=39)** Can you help me automate this analysis?
>
> **[0:42](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=42)** For purposes of this problem, we're going to assume that the S&P 500 rebalances daily, meaning new stocks, can enter and exit the listing on a daily basis.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=52)** Before you get started, here are some pointers.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=55)** Just as we have done, your final output should be a runnable Airflow DAG written in Python.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=61)** Don't worry about setting the schedule for now as that's easy to add in once everything is tested.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=66)** You can access the daily updating listing of S&P 500 companies using the DataHub link provided here.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=74)** Remember to follow the ETL framework to break down your problem into individual components and tasks.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=81)** This will make it much easier to know how to break down the various pieces of your overall task.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=86)** You can use the lab/challenge directory for your work.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=90)** Create your DAG in a file named challenge_dag.py and name your DAG the same thing.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=97)** Additionally, make sure you look at the schema of the challenge-load-db.db to format the final version of your transformed data correctly.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=107)** Let's quickly switch to Codespaces.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=109)** To get started on this challenge, you'll want to create a code space off of branch 03-11 as we've done here.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=117)** From there, make sure to install and configure airflow using either the install_and_run_airflow.sh script or installing it on your own.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=127)** Finally, this is where we put everything together that we've learned so far in this course.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/challenge-review-etl-questions?u=76281980&t=132)** Take a minute to appreciate how much you've learned throughout this process, and most importantly, have fun.

> [!info]- Semantic Content
>
> **Env Vars:** dag (3), etl (2)
> **CLI Commands:** make (3), python (1)
> **Code Keywords:** this, (1), let (1), switch (1), finally, (1)
> **File Paths:** challenge_dag.py (1), install_and_run_airflow.sh (1)
> **Code Identifiers:** challenge_dag (1), install_and_run_airflow (1)
> **Best Practices:** remember to (1), make sure to (1)
> **Prerequisites:** install (1), configure (1)
> **UI Navigation:** switch to (1)

#### Solution: Solutions to ETL questions
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=0)** - [Instructor] Congratulations on completing your first challenge.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=8)** In this video, we'll review the solution to our data engineering challenge.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=12)** As always, let's start with our business request.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=15)** It sounds like our user is doing analysis on S&P 500 companies.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=20)** We know that this data must be pulled from somewhere.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=23)** That is our extract step.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=25)** I've highlighted it in blue here.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=27)** Next, we know that our user wants to understand the aggregate number of companies in each sector.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=33)** That's our transform step, and it's highlighted in orange here.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=37)** Finally, we know that our user wants this output in a SQLite database.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=41)** That's pretty straightforward and has a clear indication of the load step, that is highlighted in green here.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=47)** Great work.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=48)** We now know which aspects of the ET&L process correspond to which parts of the business request.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=56)** Let's switch to Codespaces.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=59)** First, we want to make sure we understand what the output of our ETL process will be.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=64)** We know that our prompt requested that we write the data to a database named challenge-load-db.db, so let's open this up and look at its schema.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=75)** To open this, you can type Cmd + Shift + P and type in SQLite.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=80)** From there, select Open Database and open the challenge-load-db database.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=87)** The SQL Explorer will appear on the bottom left hand corner of your page.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=91)** Let's open up the database.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=94)** We can see that the table consists of three columns: sector, count, and date.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=100)** That means that the end state of our transformed dataset must match these columns so we can perform a trivial load operation.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=108)** Now let's change focus to our extract step.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=111)** First, let's manually download our data to see how it looks, cd to lab/temp.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=118)** From there, we can wget the file.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=121)** It looks like the file is named constituents.csv.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=125)** Let's open up the file and take a look at it.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=129)** We can see the file consists of three columns: symbol, name, and sector.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=136)** This should give us all the information that we need to build our DAG.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=140)** Let's move back to the airflow dag directory and open up challenge_dag.py.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=147)** As always, I'm going to copy and paste the DAG here and go line by line to explain what we see.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=154)** First, we set up our imports.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=156)** We're going to use a BashOperator for our wget a PythonOperator for transforming the data, and a BashOperator again to load the data into an end system.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=167)** Let's create our DAG with the name challenge_dag.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=171)** We won't set a schedule interval for now because we want to make sure this works first.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=176)** Now let's build our extract_task.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=179)** The extract_task is a BashOperator that wgets the file and saves it under the lab/challenges directory with the name challenge-extract-dag.csv.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=190)** Let's move on to our transform operation.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=193)** First, we'll look at the transform_data function.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=196)** This function sets the date to today and reads in our extracted data.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=201)** We know that our business user is interested in the aggregate number of companies per sector, so we'll use the Pandas groupby function to get this information and use the reset_index function to give the aggregated counts a column header Count.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=216)** We'll also add in a column named Date that contains today's date as this is data from today.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=223)** Now we know our transform_data matches the schema of the table we'll eventually load it into.
>
> **[3:48](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=228)** We'll finally then save the transform data to disk as challenge-transform-data.csv.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=236)** Then we'll use this transform_data function in our transform_task, which itself uses the PythonOperator.
>
> **[4:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=243)** We'll then move to the last step, which is the load step.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=246)** We'll use the BashOperator to take advantage of the SQLite 3 command line utilities import CSV capabilities.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=254)** The data will be imported into the challenge-load-db.db database in the sp_500_sector_count table.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=263)** Now let's switch back to the Airflow UI.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=267)** In the Airflow UI, we can see that our challenge_dag has appeared.
>
> **[4:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=272)** Let's click on it and click on the Graph view.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=275)** The Graph view allows us to visualize our DAG.
>
> **[4:40](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=280)** To run the DAG, press the Play button in the upper right hand corner of the screen and select Trigger DAG.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=287)** While each task in the DAG is running, it will be outlined in a light green box.
>
> **[4:52](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=292)** And when it is finished, it will be outlined in a dark green box.
>
> **[4:57](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=297)** It looks like our DAG has completed successfully.
>
> **[5:01](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=301)** Let's switch back to Codespaces.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=304)** As always, let's verify that our DAG accomplished its intended task with a quick eyeball check.
>
> **[5:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=311)** Type Ctrl + Shift + P and type SQLite.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=315)** Select Open Database and open challenge-load-db.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=320)** On the bottom left hand corner, you'll see challenge-load-db and the table name sp_500_sector_count listed underneath it.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=329)** Let's press the Play button on this table.
>
> **[5:32](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=332)** Taking a look at the rows, we can see that our data has been loaded successfully into SQLite, and we've achieved our goal.
>
> **[5:39](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=339)** Every day this runs, we'll have more data appended to the end of our table with a new date.
>
> **[5:45](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=345)** Great work participating in this challenge and pushing the boundaries of your knowledge.
>
> **[5:50](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=350)** I hope you're excited because this is just the beginning.
>
> **[5:53](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=353)** You can expand the skills that you've learned to automate a multitude of different tasks across the entire data engineering ecosystem.
>
> **[6:01](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/solution-solutions-to-etl-questions?u=76281980&t=361)** So let's go ahead and start building.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (5), switch (3), finally, (1), this, (1)
> **Env Vars:** dag (9), etl (1), sql (1), csv (1)
> **Code Identifiers:** challenge_dag (3), transform_data (3), extract_task (2), reset_index (1), transform_task (1)
> **CLI Commands:** make (2), wget (2), cd (1)
> **File Paths:** constituents.csv (1), challenge_dag.py (1), challenge-extract-dag.csv (1), challenge-transform-data.csv (1)
> **UI Navigation:** click on (2), switch to (1), open the (1)
> **Definitions:** means that (1), is a  (1)
> **Tools:** command line (1)


### Conclusion

#### The future of data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=0)** - The field of data engineering has been rapidly evolving over the past few years and is likely to continue to do so in the future.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=8)** As more and more companies rely on data to drive their decision making processes, the importance of data engineering will only increase.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=17)** There are a number of industry trends that are just beginning are all already well underway.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=23)** Understanding the direction and trajectory of these trends can better equip both you and your organization for the new developments.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=31)** With the proliferation of data, there's an increased focus in the topics of data governance and security.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=38)** Data management, access control, cloud security, and operational readiness are all key topics and areas of responsibility for the modern data engineer.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=49)** Cloud deployment and adoption.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=51)** As many organizations continue their digital transformation processes, cloud-based offerings technologies and services have led the pack through their cost-effective, flexible, and easily scalable solutions.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=65)** As such, more data engineers are adopting and working with cloud-native offerings.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=71)** Real-time data.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=72)** The ETL paradigm that we discussed was developed and tailored to a batch processing workflow.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=79)** As the demand for real-time data processes increases and as companies look to make data-driven decisions in real time, there is an emergence of real-time processing data technologies.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=91)** Crossing collaboration.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=93)** The rise of the data practitioner is well underway.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=97)** Individuals and teams that previously did not use data as a fundamental part of their workflows, have begun adopting it.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=104)** As such, data engineering, data science, business intelligence, and strategy and operations are now collaborating in an unprecedented way.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=114)** Opportunities for further collaboration in this space will continue and new tools and technologies will streamline this process.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=123)** AI and ML.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=124)** It's clear that the AI revolution has emerged in a powerful and meaningful way over the past year.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=130)** Democratized access to large language models have shown the power of ML and enterprises are primed to begin mass adoption.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=138)** As this begins, data engineers will be tasked to create the tools, systems, and pipelines to support the creation and deployment of AI and ML models.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=150)** The future of data engineers is bright and I'm excited to have you along for the journey.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-introduction-data-engineering/the-future-of-data-engineering?u=76281980&t=155)** Thank you for joining me for this Hands-on Data Engineering LinkedIn Learning course.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (3)
> **CLI Commands:** make (1)
> **Env Vars:** etl (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is an  (1)
> **Speakers:** - the (1)


## Path Context

### In [[Develop Your Scala Skills for Data Engineering]]
← [[Data Engineering Foundations]] | **2 of 6** | [[Hands-On Introduction- Scala]] →

### In [[Develop Your Rust Skills for Data Engineering]]
← [[Data Engineering Foundations]] | **2 of 6** | [[Rust Essential Training]] →

### In [[Data Engineering Foundations Professional Certificate by Astronomer]]
← [[Complete Guide to Python for Data Engineering- From Beginner to Advanced]] | **3 of 6** | [[Learning Apache Airflow]] →

### In [[Data Engineering Hands-On Practice]]
**1 of 7** | [[Hands-On Advanced Python- Data Engineering Basics]] →

### In [[Explore a Career in Data Engineering]]
← [[Data Engineering Foundations]] | **2 of 7** | [[Introduction to Data Warehouses]] →

## Part of

- [[Data Engineering Foundations Professional Certificate by Astronomer]]

## Appears In

- [[Develop Your Scala Skills for Data Engineering]]
- [[Develop Your Rust Skills for Data Engineering]]
- [[Data Engineering Foundations Professional Certificate by Astronomer]]
- [[Data Engineering Hands-On Practice]]
- [[Explore a Career in Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Databricks Certified Data Engineer Associate Cert Prep]] — Data Engineering
- [[Big Data Analytics with Hadoop and Apache Spark]] — Data Engineering
- [[Transition from Data Science to Data Engineering]] — Data Engineering
- [[Introduction to Modern Data Engineering with Snowflake]] — Data Engineering
- [[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]] — Data Engineering

---

[↑ Back to top](#)