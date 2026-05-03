---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-machine-learning-with-knime
url: "https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime"
level: Beginner
updated: 7/21/2023
learners: 18486
skills:
  - CRISP-DM
  - Knime
  - Machine Learning
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFYyCXjRas0qw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567113931299?e=2147483647&amp;v=beta&amp;t=hqcbSWu_HbeGES9s1bx4XD2l5-pTSlRjUHImpNkOiRg"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Learning Codeless Machine Learning with KNIME]]'
next_courses:
  - '[[Machine Learning and AI Foundations- Decision Trees with KNIME]]'
path_nav: '[{"path":"Learning Codeless Machine Learning with KNIME","position":1,"total":5,"prev":null,"next":"Machine Learning and AI Foundations- Decision Trees with KNIME"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/software-development
  - skill/crisp-dm
  - skill/knime
  - skill/machine-learning
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Introduction%20To%20Machine%20Learning%20With%20Knime.md)

![Introduction To Machine Learning With Knime](https://media.licdn.com/dms/image/v2/C4E0DAQFYyCXjRas0qw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567113931299?e=2147483647&amp;v=beta&amp;t=hqcbSWu_HbeGES9s1bx4XD2l5-pTSlRjUHImpNkOiRg)

# Introduction To Machine Learning With Knime

> KNIME is an open-source workbench-style tool for predictive analytics and machine learning. It is highly compatible with numerous data science technologies, including R, Python, Scala, and Spark. With KNIME, you can produce solutions that are virtually self-documenting and ready for use. These reasons and more make KNIME one of the most popular and fastest-growing analytics platforms around. In th

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime) | Beginner | 18K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Open-source machine learning with KNIME](#open-source-machine-learning-with-knime)
  - [Who is this course for?](#who-is-this-course-for)
- [**1. How Does KNIME Complement Your Existing Analytics Toolkit?**](#1-how-does-knime-complement-your-existing-analytics-toolkit) (3 videos)
  - [Why use an Analytics Workbench?](#why-use-an-analytics-workbench)
  - [Using CRISP-DM to evaluate tools](#using-crisp-dm-to-evaluate-tools)
  - [Why choose KNIME?](#why-choose-knime)
- [**2. Getting Comfortable with KNIME**](#2-getting-comfortable-with-knime) (5 videos)
  - [The KNIME interface](#the-knime-interface)
  - [Find case studies on the Examples Server](#find-case-studies-on-the-examples-server)
  - [The KNIME Hub](#the-knime-hub)
  - [Add thousands of nodes with Extensions](#add-thousands-of-nodes-with-extensions)
  - [Search and Help](#search-and-help)
- [**3. Accessing Data**](#3-accessing-data) (3 videos)
  - [Accessing data](#accessing-data)
  - [File reader node](#file-reader-node)
  - [Database access with KNIME](#database-access-with-knime)
- [**4. Data Understanding**](#4-data-understanding) (3 videos)
  - [Describe data and verify data quality](#describe-data-and-verify-data-quality)
  - [Explore data: Scatterplot](#explore-data-scatterplot)
  - [Explore data: Boxplot](#explore-data-boxplot)
- [**5. Data Integration and Merging**](#5-data-integration-and-merging) (7 videos)
  - [Merging with the Joiner node](#merging-with-the-joiner-node)
  - [Aggregating with the GroupBy node](#aggregating-with-the-groupby-node)
  - [Creating new variables with Construct](#creating-new-variables-with-construct)
  - [Select data with Column Filter](#select-data-with-column-filter)
  - [Balancing data with Row Sampling node](#balancing-data-with-row-sampling-node)
  - [Clean data with the Missing Value node](#clean-data-with-the-missing-value-node)
  - [Format with Cell Splitter](#format-with-cell-splitter)
- [**6. Modeling**](#6-modeling) (5 videos)
  - [KNIME modeling options](#knime-modeling-options)
  - [Regression example](#regression-example)
  - [Decision tree](#decision-tree)
  - [Decision tree: Scoring new data](#decision-tree-scoring-new-data)
  - [Components in KNIME: AutoML and XAI](#components-in-knime-automl-and-xai)
- [**7. A World of Possibilities**](#7-a-world-of-possibilities) (4 videos)
  - [PMML](#pmml)
  - [R and GGPLOT2](#r-and-ggplot2)
  - [Python options in KNIME](#python-options-in-knime)
  - [Certification in KNIME](#certification-in-knime)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Open-source machine learning with KNIME](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/open-source-machine-learning-with-knime-22655522?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/open-source-machine-learning-with-knime-22655522?u=76281980&t=0)** - Almost every day, I'm doing some kind of work in [[Predictive Analytics]], whether it's consulting with my clients, leading seminars at analytics conferences, or software training. In my work, I encounter dozens of different software options, so many, that it's hard to keep track. [[Knime]] is a popular open source option that is very easy to learn. It offers just about all the functions you could ever need natively, but for that rare function that isn't available, you can always use R and [[Python (Programming Language)|Python]] right in KNIME. I'm Keith McCormick, and I've been doing predictive analytics for more than 20 years now. In this course, we're going to stick to the basics, but we'll cover all the highlights. So whether you want to click along or just want to watch the demonstrations, I think you'll enjoy the ride. KNIME might very well be the predictive analytics tool you've been waiting for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive Analytics]] (3), [[Knime]] (3), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** knime (3)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - almost (1)

#### [Who is this course for?](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/who-is-this-course-for?u=76281980&t=0)** - So, who should consider learning [[Knime]]? If you're a student of [[Data Science]] and [[Predictive Analytics]], you'll need a tool that's easy enough to use that you can focus on practicing data exploration and [[Predictive Modeling]] without getting stuck. So if you're trying to teach yourself regression, [[Decision Trees]], clustering ensembles, or almost anything else, you can start in KNIME. Another group are practitioners that need an easy to use, open-source option because their workplaces are still sorting out what tools to use. My advice is, you don't need to wait for some official decision. Start practicing and start [[Prototyping]]. Also, team leaders that have a diverse team. It can actually be a powerful way of combining the contributions of multiple team members, even if some use R, some use [[Python (Programming Language)|Python]], and others are rookies and haven't really mastered a tool yet. Finally, you might be someone like me. As an active consultant and seminar leader, there's a problem that I run into all the time. Someone wants help on a project but they don't have access to a tool yet. Or I'm asked to do a seminar for folks from a variety of organizations and industries and I don't want to just use slides. I might want to actually show them how it's done. Since KNIME is free and easy to use, it's a great choice for data science instruction. So what should you know to fully enjoy the course? To appreciate KNIME, you'll have to have a big picture sense of what predictive modeling is all about. So, if you're brand new to the field, you might want to check out my course, Essential Elements of [[Data Mining]] and Predictive Analytics.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/who-is-this-course-for?u=76281980&t=95)** This would be especially helpful if you're never heard of [[CRISP-DM]], the cross-industry standard process of data mining, because I'm going to mention it from time to time in the course. Also, if you're truly starting from scratch and you've never built a predictive model before, you'll probably want to check out at least a little bit of theory. My course on decision trees in the library would be a good choice. We're going to keep it pretty basic and fast-moving, however, so you could probably watch a decision tree course after this if you choose. Okay, just a couple more things that you should know and have set up before you begin. You're going to want to install KNIME. I've chosen not to include a KNIME install lesson because it's very straightforward. Just go to [knime.com](https://knime.com) and you'll be able to find good support for multiple platforms, including video support. Okay, now, there's going to be one lesson where we're going to be using R, so I'm going to encourage you to install [[RStudio]] and that will allow you to do that lesson. What we're going to be discovering is that you can use R code right within KNIME. One final note, don't worry about the KNIME extensions just yet. I'm going to be walking you through that process. So let's get started with the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (9), [[Data Science]] (2), [[Predictive Analytics]] (2), [[Predictive Modeling]] (2), [[Decision Trees]] (2)
> **Env Vars:** knime (8), crisp (1)
> **Prerequisites:** install (3), you'll need (1), set up (1), before you begin (1)
> **CLI Commands:** python (1), find (1)
> **URLs:** [knime.com](https://knime.com) (1)
> **UI Navigation:** go to (1)
> **Analogies:** picture (1)
> **Speakers:** - so (1)


### 1. How Does KNIME Complement Your Existing Analytics Toolkit?

[↑ Back to Table of Contents](#table-of-contents)

#### [Why use an Analytics Workbench?](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/why-use-an-analytics-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/why-use-an-analytics-workbench?u=76281980&t=1)** - So why use an Analytics Workbench? Most analysts and their managers divide advanced analytics choices into just two buckets, tools with graphical user interfaces and coding, notably of course R and [[Python (Programming Language)|Python]]. And survey show that most analysts do indeed learn some R or Python along the way. But I think that some, especially if they're new and unestablished, are afraid that unless they write raw code, that they won't be taken seriously. So given the choice between easy and hard, why is the more difficult choice so popular? Well, there's good reasons to favor code, the idea's that code is going to be more deployment-friendly and it will more completely document your work. Also the feeling is that anyone that overcomes the challenge of learning R or Python will also be a good modeler. While this is often true it's not always true. Some code is badly documented and unfortunately, not all coders are good analysts. So what's the solution? Well, there is good reason that some are worried about fancy graphical user interfaces, they're often associated with analytics tools that are largely automated and that can be used by business users that haven't learned about [[Data Science]] and [[Predictive Analytics]]. The marketplace is still sorting out the role of these tools and vendors are still working
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/why-use-an-analytics-workbench?u=76281980&t=93)** to make [[Automated Machine Learning (AutoML)|automated machine learning]] a reality. We'll leave that debate for another time. However, graphical user interface versus coding is a false dichotomy, there are numerous options and for many an Analytics Workbench is a great solution. It offers what is often called visual programming. You can rapidly prototype, by drawing what is essentially a flowchart, but it's completely customizable. These are tools that workees can acclimate to with some training, but are powerful enough for true experts, they offer a middle ground between fully automated and raw code, which makes working in them faster and easier, especially for routine tasks. In fact, routine data prep was the inspiration for the first workbench-style interface, which was developed almost 30 years ago. Colin Shearer, who designed the very first workbench, described it this way, "We were finding that [[Data Mining]] projects involved a lot of hard work, and that most of that work was boring. Unearthing significant patterns and delivering accurate predictions, that part was fun, but most of our effort went on mundane tasks, such as manipulating data into the formats required by the various modules and [[Algorithms]] we applied". So that's why an option like [[Knime]] makes so much sense. It eliminates or at least speeds up the boring tasks, yet it's essentially self-documenting and because the flowchart is easy for anyone to read
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/why-use-an-analytics-workbench?u=76281980&t=187)** when it comes time to deploy you've got a well-documented production-ready process. And if you ever have a need that isn't met with a KNIME itself, you can incorporate any raw code that you like, including R, Python and many other languages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Knime]] (2), [[Data Science]] (1), [[Predictive Analytics]] (1), [[Automated Machine Learning (AutoML)|Automated machine learning]] (1)
> **CLI Commands:** python (4), make (1)
> **Env Vars:** knime (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - so (1)

#### [Using CRISP-DM to evaluate tools](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/using-crisp-dm-to-evaluate-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/using-crisp-dm-to-evaluate-tools?u=76281980&t=0)** - [Instructor] Okay, we're going to keep organized by using [[CRISP-DM]], the Cross-industry standard process for [[Data Mining]] to be a structure by which we can move to the various nodes within [[Knime]], and I think it's actually a fabulous way to evaluate software like KNIME. How good a job we might ask does it do at all the different tasks? So I find that the most reliable way to find the CRISP-DM document is to go to the Wikipedia page, and then if you go down to the references you'll be able to find copies of it here. So I've got it open and this is the famous circular diagram that many folks have come across, but what I want to draw your attention to is the task diagram. And this shows us the 24 tasks that fall under the six phases. Now we're going to stay focused on those tasks that are software oriented. Data understanding, [[Data Preparation]], and modeling. Now clearly we're also very focused on deployment, but as you can see, some of the deployment tasks are not really software related, like producing the final report and so on. But what we are going to do is go through each and every one of the tasks in data understanding, data prep, and modeling, and find nodes within KNIME that are capable of those tasks. That way, even though we're going to move briskly through KNIME, we're going to get a real tremendous variety of the nodes that we see.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/using-crisp-dm-to-evaluate-tools?u=76281980&t=93)** I want to give you a preview of just that. So the first task in the data understanding phase is collect initial data, which includes data loading, so we're going to see the final reader node. But additional tasks in the data understanding phase include describe data and verify [[Data Quality]], and the data explorer node is going to help us with that. But we're also going to do some data visualizations, specifically the scatter plot node and the box plot node. Moving on to data preparation, which of course is a very labor intensive phase, we have a number of CRISP-DM tasks to discuss here. So CRISP-DM describes integrate data as those methods where information is combined from multiple tables or records. This is of course an important task, so we're going to be doing merging with a joiner node and aggregation with the groupby node. Additional data preparation tasks include construction, and lately folks have been talking about this kind of thing as [[Feature Engineering]]. We're going to do just a simple example with the math formula node, but data construction is what is often called these days feature engineering. CRISP-DM describes the select task as deciding on what data is going to be used for the analysis. You know, a lot of folks just try to use all the data, and you actually have to be more thoughtful about that. Nodes that will help us control what data is presented to the modeling [[Algorithms]]
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/using-crisp-dm-to-evaluate-tools?u=76281980&t=189)** are going to include nodes like the column filter node and the row sampling node. In fact, we'll take a quick peak at balancing. We're also going to use the row filter node to select only our complete data, and then use the missing values node to impute missing data. Finally, we'll correct some formatting issues with the cell splitter node. Moving on to the modeling phase, we're going to see how to do train test partitioning with the partitioning node, and we'll do a [[Linear Regression]] example. Then we'll do a decision tree example, also with partitioning, but showing the ROC curve node as well as the scorer node. In short, KNIME is comprehensive. It has examples of all the different tasks that we would have to perform, so walking through CRISP-DM is a really good way to organize our time. It's also a good way for you to learn KNIME.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CRISP-DM]] (6), [[Knime]] (6), [[Data Preparation]] (3), [[Feature Engineering]] (2), [[Data Mining]] (1)
> **CLI Commands:** node (15), find (4)
> **Env Vars:** crisp (6), knime (6), roc (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Why choose KNIME?](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/why-choose-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/why-choose-knime?u=76281980&t=0)** - [Instructor] So with the dozens, if not hundreds, of options, why choose [[Knime]]? Let's first talk a little bit about my general advice on picking an analytics tool. Plan on having more than one, the surveys I've been reading lately, including one of my favorites, the Rexer Survey, indicates that most of us that do this every day, use something like five analytics tools. Now was a result, of not committing to just one, you can also avoid a couple of mistakes. Like overweighting the tool choice in hiring. Hiring only individuals that are experts in a particular tool. I don't think that's a great idea. Nor do I think it's a great idea to choose a tool that fits one particular project, and then committing everything to that one tool. Just plan on having more than one. Do your homework before a vendor demo, or a proof of concept. What will happen is folks will feel overwhelmed, they'll have the vendor tackle their initial project, and the next thing you know, the weeks or months have gone by, and you feel all this momentum, and you feel locked into a tool. Experiment with them, try them, before you get that locked in feeling. Focus on collaboration and deployment. Since you're not going to commit on just one tool, what you're really going to be focused on is how can you have several team members that use different tools, collaborate effectively, and how can you get your work both into and out of your tool of choice. If you focus on this,
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/why-choose-knime?u=76281980&t=92)** you won't be stressed about getting locked in. Finally, try them. The great thing about something like KNIME, is you can spend an hour with it and get a sense of whether you like it or not. I want to tell you a bit about what I look for personally in analytics tools. Certainly one of the things that you know that I would emphasize is good support for all the phases and tasks of [[CRISP-DM]]. Since I know that good projects are going to hit all those phases, and tasks, I want to make sure that I have software support for each. Also I want good documentation and what one would generally call design coherence. I really like the idea that if I learn how to do something in one aspect of the software, I can translate that learning to another aspect of the software. Now since KNIME is community based, community based software sometimes runs the risk of not having fabulous design coherence, but I think that the KNIME folks have navigated that pretty well. It should be quick to prototype and try things. One of the things that I love about KNIME is that as someone that consults most of the year, but also leads seminars, I need a way that I can demonstrate something like a decision tree, and only spend 10 or 15 minutes getting everybody comfortable with the software, and then spend our time on [[Decision Trees]], not on pointing and clicking, or on code, you see, so it can be very helpful to me. Also, I'm looking for things that are both customizable, yet also play well with others. So compatibility with things like R and [[Python (Programming Language)|Python]] is terribly important. Want to comment just a little bit on what Gartner has to say about KNIME, they rate it quite highly.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/why-choose-knime?u=76281980&t=187)** One of the things they say is they call KNIME the market's Swiss Army knife. Which I think is kind of a nice description. Also, they emphasize the ease of use for the intermediate user. So as we've seen, you don't have to commit to a graphical user interface tool that does all of the work for you, in KNIME, you're doing the thinking, but it's addressed some of the root-inized tasks, so Gartner describes that really as the intermediate user. Certainly you could also be an expert user with KNIME. Gartner and this is their own phrase, describes it as having a low barrier to entry, and low total cost of ownership. So here's my own take on why I think KNIME addresses many of these issues well. You really can do something basic in less than 15 minutes, even if you've never seen it before. It doesn't really limit you, therefore, it also isn't limiting your team. You can have a diverse team, that uses a lot of different tools, It has good documentation, and the KNIME folks that I've gotten to know are very friendly and very supportive. They're really there to help the user base. Finally, there's a really active user community. In fact, they have two big events each year, one in Berlin, and one in Austin, where they have offices. And these are fun events, several hundred people go, the number of people that attend has been growing exponentially, and it really gives you the sense that KNIME is doing well, that users enjoy it, and everyone is there for an exchange of ideas and to grow the functions that KNIME supports.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (13), [[CRISP-DM]] (1), [[Decision Trees]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** knime (13), crisp (1)
> **CLI Commands:** make (1), python (1)
> **Speakers:** - [instructor] (1)


### 2. Getting Comfortable with KNIME

[↑ Back to Table of Contents](#table-of-contents)

#### [The KNIME interface](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/the-knime-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/the-knime-interface?u=76281980&t=0)** - [Instructor] Okay, let's launch [[Knime]]. This is just a default location. I haven't changed a thing since I installed it. Okay, when you first look at KNIME so many [[Windows]] pop up that it might be slightly overwhelming at first. But let's take a quick look. When you're installing this on your own, take the time to look over the welcome page. There's numerous links to additional support. But I'm going to tell you what you need to know for now so you don't have to worry about that at the moment. So let's take a look at the node repository on the bottom left. And you're going to get a sense of just how much functionality there is here. So for instance, under iO we have ways to read and write, including numerous ways to read in data. We also see that under analytics we have statistical functions, we have [[Data Mining]] functions, and if you go into one, let's say, like Naive Bayes Learner, then help will pop up in the upper-right-hand side. But what I'm going to show you is probably the easiest way of all to start. We can go to the example workflows found under the local menu here and I'm going to go to one of the basic examples and just choose the first one, building a simple classifier. Now as you can see you can't see it well, so let's maximize that window and you can see just how thoroughly they have documented this. So in my experience
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/the-knime-interface?u=76281980&t=94)** the easiest way to go back is up here, go to View, Reset Perspective. Say Yes, and you return to that main screen. So it's really as simple as that. That's your very first look at KNIME.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (3), [[Windows]] (1), [[Data Mining]] (1)
> **Env Vars:** knime (3)
> **UI Navigation:** go to (3)
> **CLI Commands:** node (1)
> **Code Identifiers:** io (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Find case studies on the Examples Server](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/find-case-studies-on-the-examples-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/find-case-studies-on-the-examples-server?u=76281980&t=0)** - [Instructor] Let's jump in and take a closer look at the examples server. I'm going to expand this, and then it says double click to see the examples. This is absolutely one of my favorite features. What I like about these, is that these are the examples that I'll tend to borrow and then repurpose. So let's take a look. I can go down to analytics, and for instance regressions, and here's one that I've used a lot learning a simple regression tree. Double click on that, and then let's maximize it. Okay, so now I want to zero in on a little bit on how to read this traffic light feature that [[Knime]] has. You'll notice over here on the file reader there's a yellow dot below. So I'm going to right click on that, and I can click on execute. So as I do so, let me explain what the yellow means. It means it hasn't been run yet, but it's ready to run. That's what yellow means. Red, in contrast, means that there's some setting that has to be adjusted. Now you notice it's turned green. So we know that it actually has been executed successfully. And if I right click on it one more time, I can go down way to the bottom and say file table, and I actually see the data set that's involved. This, as you may recognize, is the famous Iris data set
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/find-case-studies-on-the-examples-server?u=76281980&t=92)** that has been used for decades as a practice data set. I'll close that, and let's take a closer look at the [[Representational State Transfer (REST)|rest]] of the example. We see the same yellow symbol in many circumstances. So notice that I could go all the way here to the learner, and right click and say execute and open views, maximize it, and I even have a regression tree that's already been built after just a couple of minutes. Which I can then expand and take a closer look and so on. Now we're not going to launch into a discussion of regression trees at the moment, but I wanted to give you an idea of how rapidly you can be up and running with these example server case studies. So what I do in a typical Knime session, is find the example that's as close as possible to what I need, then go over to the file reader and tell it what file I want to use in that particular session. And we'll be spending more time with the file reader later on in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** click on (4)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [The KNIME Hub](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/the-knime-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/the-knime-hub?u=76281980&t=1)** - [Instructor] Okay, so the example server is a great way to access lots of worked-out examples, but there's another way as well, and it's powerful. It's the [[Knime]] Community Hub, so I'm on my browser right now looking at the webpage for the KNIME Community Hub, and you can see that as of today there's over 15,000 workflows that you can practice with and to get examples from. I'm going to go ahead and search for myself, which I've done recently, so it's in Recent searches, and you can see that I've got, as of this moment, a couple dozen workflows, but I'm going to click on the icon for me 'cause I want you to see it from this standpoint. You can see that I have an Intro_KNIME page. That's in support of this course. Go ahead and click on it, and you can see the supporting files for this course are in that folder, and it makes it very easy, so let me just grab, for instance, one for Chapter 4, and there's a fantastic feature here. You can see it even before you drag it into KNIME, but if I hover the mouse here, you can see that it's a drag-and-drop feature. Yes, you can download the workflow and then import it, but you can also drag and drop from the browser directly into KNIME. They make it very, very easy to do, so again, that's a page specifically for Intro_KNIME. Let me show you what it looks like in KNIME when you do this, so here I am in KNIME,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/the-knime-hub?u=76281980&t=94)** and I want to make note a version here. The hub is newer than the example server, so if you don't see it, it could possibly be a version difference. I'm in version 4.7, and if I go over to my KNIME Hub... Now, you have to sign up on the web page, and then you're going to have to log in here, but once you do, those same KNIME Hub pages that I showed you show up here, so it makes it really easy, and if I go to Intro_KNIME, our course, our workflows are here, and then I can just click on, for instance, the Chapter 1 example, and it's going to load, and there it is, and then I'm going to want to save it locally here, but that's another additional way to find examples, not only for this course, but thousands of additional examples, so please do sign up for and take advantage of the KNIME Community Hub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (9)
> **Env Vars:** knime (9)
> **UI Navigation:** click on (3), drag and drop (1), go to (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for instance (2)
> **Versions:** version 4 (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)

#### [Add thousands of nodes with Extensions](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/add-thousands-of-nodes-with-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/add-thousands-of-nodes-with-extensions?u=76281980&t=0)** - Okay, don't forget the reset perspective trick to go back to this main window. So, what we're going to talk about now is extensions. Might seem like an obvious thing, but there are hundreds and hundreds of nodes that get installed if you install extensions, that otherwise you wouldn't have access to. So, I've worked with a number of folks in [[Knime]], and sometimes they'll see a fantastic example on the web, they'll go to do it, perhaps even searching for the node, for instance, there's a lot of things that use [[Java]] script and then they sometimes won't find a particular node, so, this is actually a really important trick. So what you want to do is go to File, Install KNIME extensions, notice you can also update KNIME. And we can click on Select All and Next, and Next again, you're going to get some idea of how many, I'm going to go ahead and accept. You're going to notice in the bottom right, you have installing software in a percentage, and this might last a few minutes actually because there really are a very large number of extensions. While, that's installing, I want to show you another source of extensions. Here it is, this is a website you can visit, this is a NodePit for KNIME, and if you scroll down, it's going to tell you more about how to do it. There's a lot of great examples here, now, remember KNIME is open source,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/add-thousands-of-nodes-with-extensions?u=76281980&t=94)** but there's also a large community and if you install only the official nodes, you're not going to get all the different functions that you want. If you want to get the community contributions, this is a good way to do it. So, as you can see, you're going to go to preferences and you're going to ask for available software sites. Let's take a look. If I go to File, Preferences and under install update, available software sites, I can say that I want partner updates as well as table community contributions. Now, I suppose this is a decision that you'll have to make on your own, but I've had very good luck with these community contributions that I use them frequently, so, I'm certainly going to encourage you to use them as well. Okay, for NodePit we're going to click on the add button, and want to have to actually typed in the URL which is found on the website that we just saw. So, we're going to type in [downloadnotepit.com](https://downloadnotepit.com) then slash nodepit, slash one more time 3.7 again, you can either see that on the screen here or right there on the website. And we'll call that NodePit. And click on OK. And there you have it, this installation can take quite a while, but when you're done, you're going to be surprise
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/add-thousands-of-nodes-with-extensions?u=76281980&t=188)** that how many new functions have become available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (5), [[Java]] (1)
> **UI Navigation:** go to (4), click on (3), scroll down (1)
> **Env Vars:** knime (5), url (1)
> **CLI Commands:** node (2), find (1), make (1)
> **Definitions:** is a  (4)
> **Prerequisites:** install (4)
> **URLs:** [downloadnotepit.com](https://downloadnotepit.com) (1)
> **Versions:** 3.7 (1)

#### [Search and Help](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/search-and-help?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/search-and-help?u=76281980&t=0)** - [Instructor] Okay, so you can see after an install and a reboot that we have a ton of new functionality. That can prompt a bit of a problem. How am I going to find things? Well, two folders in particular that I want to draw your attention to are the Community Nodes and the [[Knime]] Labs. So, remember that since we selected that we wanted to include these as part of our updates, KNIME will always be searching for new community nodes and KNIME labs as long as we've given it permission to install those kinds of extensions. So, for instance, in the Community Nodes, we can see just a ton of them in here, okay? All kinds of things, even ESRI mapping, Shapefiles, and so on. And then, under the KNIME Labs, again a huge variety, including things like [[JavaScript]] Views, and [[Deep Learning]]. But how are you going to find what you need because there really are a lot of them, in fact more than 2,500 at current count. So let's say you're looking for the very popular XGBoost algorithm. Just type it out, and you'll be able to find it, and sure enough we now have access to this because we installed the KNIME Labs nodes. It's found in that folder. And then if we choose it, for instance, the XGBoost Linear Ensemble Learner, we get the help shows up in the upper, right. Frequently, this help will have hypertext
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/search-and-help?u=76281980&t=97)** that takes you to additional support, like the documentation found here. But, for now, let's return to our journey through the basic functionality of KNIME, visiting one CRISP DM task at a time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (6), [[JavaScript]] (1), [[Deep Learning]] (1)
> **Env Vars:** knime (6), esri (1), crisp (1)
> **CLI Commands:** find (3)
> **Analogies:** for instance (2)
> **Prerequisites:** install (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


### 3. Accessing Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Accessing data](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/accessing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/accessing-data?u=76281980&t=0)** - [Instructor] Okay let's talk a little bit about accessing data. So naturally one place that we might look is to go to the IO folder here and specifically to read and we see that we have a number of choices. The things is though, if you're new to [[Knime]], should you be using let's say a file reader or a table reader? So let's take a quick look at the two descriptions and we see that the file reader node, I'm going to get the console out of the way so we can see this more clearly. This node can be used to read data, it can be configured to read various formats, that's kind of the key phrase, okay? In contrast, the table reader is actually a proprietary KNIME format so if you export data to a table and then read it in as a table, you'll get some efficiencies, things will run a little bit faster in KNIME, but it's generally speaking not the one you want. So in short, file reader is more than likely the way to go, however, I'm going to encourage you to be a bit more persistent than this because you might run into the mistake of thinking that only the ones that are visible in this folder right now are the ones you're going to need. Let's say for instance you have somewhat more exotic needs. Let's say for instance you're doing some [[Text Mining]]. Well if I start to type text, I actually find there's all kinds of cool things. Document grabber, PDF parser, and so on.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/accessing-data?u=76281980&t=96)** So remember that this is community based and that we went through the trouble of installing the extensions which means if you only look in the standard folders, you're going to be missing out. So now when you go to actually use your file node, what should you do next? You might instinctively go to get a new workflow, I'll just let that go to the default location and drag file reader over and we're all ready to go but I'm going to encourage you yet again not to do it this way. What I'm going to suggest instead is grab one of the examples and when you do that, you're at least going to know that you have something that's currently working and then you can modify it to do what you need it to do. So for instance I could go to the example server examples, go to data access, common type files, and I've got use the file reader. I can double click on that and I've already got an example that I can right click on and execute. When you get comfortable enough, you'll know when you've outgrown that trick, but while you're acclimating to KNIME, I urge you to start with an example that's already complete, for instance, this one on the Iris data set as we've seen and then modify it for your needs. That way you're starting from something
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/accessing-data?u=76281980&t=188)** that's already working, rather than starting from something that's blank.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (4), [[Text Mining]] (1)
> **UI Navigation:** go to (6), click on (2)
> **Env Vars:** knime (4), pdf (1)
> **CLI Commands:** node (3), find (1)
> **Analogies:** for instance (4)
> **Speakers:** - [instructor] (1)

#### [File reader node](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/file-reader-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/file-reader-node?u=76281980&t=0)** - Okay, so let's check in on where we are on our journey. We're still talking about accessing data. The first task of data understanding is collect initial data which includes data loading. So, we're going to talk some more about the File Reader node. Okay, here's where we left off and we've got an example from the example server that's reading in the Iris dataset. So, let's right click and configure. And there's a couple of things that I want to draw your attention to. Remember that the File Reader is very flexible. You can read in a number of different types of data. So, we can determine our column delimiter which is correct for the Iris dataset with a comma but then when we bring in another file, we might have to change that. I also want to draw your attention to these letters at the top, D, S, and so on. That's going to prove to be very important. So, as a demonstration, I'm going to go ahead and use the famous Titanic dataset which I provided for you but also is frequently accessed from Kaggle. I've got it on the desktop in my Exercise Files. It's called train.csv. I'm going to go ahead and click on that and it looks it's going to be delimited just fine. Everything looks correct in the columns but again I want to draw your attention to these letters. They're actually extremely important. As hopefully you know, level of measurement, whether or not a variable
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/file-reader-node?u=76281980&t=94)** is nominal, ordinal or scale, is terribly important in [[Data Science]] and [[Predictive Analytics]]. The way that it works though in [[Knime]] is that you have to know the following trick. If you want to declare a number as a nominal variable, you have to declare it as a string here in the File Reader. So, in other words, there is no separate special node where you declare a level of measurement in KNIME, you do it here. And it's very important that you do so. So, Survived as in I meaning integer, it's going to treat that a number which then means if I declare that as my dependent or target variable and I try to do a tree, it's going to do a decision tree and not a classification tree. So, this is a big deal, everybody. So, Survived, I actually want to declare as a string. And passenger class, it's not really meaningful to talk about a passenger class being 1.7 or 2.2. It's first, second or third class. This is a ordinal variable. So, I want to declare that as a string as well. This absolutely will affect your modeling [[Algorithms]] and other things in KNIME. So, it's terrible important that you do this. I also want to draw your attention to a tab that we'll mention briefly now and not mention again in this particular course. That's the Flow Variables tab. You're going to see Flow Variables, and Job Manager Selection and memory Policy all along the top.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/file-reader-node?u=76281980&t=187)** They are not specific to the File Reader node. All KNIME nodes have this, so a flow variable, for instance, are parameters that flow through the entire workspace but not specific to this KNIME. We won't be talking about flow variables in this course. So, we only have to worry about the settings tab. Let's click on OK. Click on OK again. Then notice that it's yellow but not green because it's indicated to us that the settings have changed. I can right click and execute. Now I get the green light and I can right click and File Table and there you go, not only has everything been read in okay, we have declared Survived and Passenger Class as nominal variables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (5), [[Data Science]] (1), [[Predictive Analytics]] (1), [[Algorithms]] (1)
> **Env Vars:** knime (5)
> **CLI Commands:** node (3)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (2), in other words (1)
> **Versions:** 1.7 (1), 2.2 (1)
> **File Paths:** train.csv (1)
> **Exercise Files:** exercise files (1)

#### [Database access with KNIME](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/database-access-with-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/database-access-with-knime?u=76281980&t=1)** - [Instructor] Okay, we're going to talk about the numerous database nodes that are supported in [[Knime]]. Now we're going to demonstrate just one of them, and it's going to be a very simple example, but it's important, for you to know that numerous database nodes exist, within Knime that should be able to support the [[Databases]] that you would need. But again, we'll start with a very simple example. So I've searched the Knime hub, and I found database Simple IO is the name of the hub post. And remember the very handy drag and drop feature, that's going to allow us to bring this into Knime, so that we can manipulate it and see how it works. So let's do just that and switch over to Knime. Okay, here we are in Knime. So just a reminder that when you do the drag and drop, you drag it over into local, and then double click on the workflow. And here we are. So this is the SQ light connector. Let's take a look inside. It's very simple and it's been set up by Knime in this case but again, they can be considerably more complex, and they can include nodes where you're giving your login, and signing in with password and so on. But in this case, the Knime folks have set it all up for us. So I'm going to click on cancel,
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/database-access-with-knime?u=76281980&t=95)** I'm going to execute. It's turned green, so it's accessing that. No problem. And now what I want to do is I really want to emphasize, that you can use [[SQL]] if you like, or you can just use the menus. It's up to you. So we can type in database table, but I want to draw your attention to something. The database table selector has already been identified by the workflow coach is something that we might need, if we have these four nodes in our workflow. So in this case it's, it gets the highest rating, it's floated right up to the top. So that's very handy. We actually don't need to type it in to search for it, because of that feature. And we can hook this up, and I'm going to configure this as well. Now notice that we have to know the name of the table, or you know, search the the [[Metadata]] to find it. But I happen to know that the name of the table, is simply called data. And now we can execute that. It's turned green, so I can right click on this, and go down to DB data. And we don't see any rows yet, because we have to tell it how many rows we want to read in. I'm just going to go with the default. So I'm going to click on cache number of rows a hundred there. And we actually see that it's the famous IRIS data set.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/database-access-with-knime?u=76281980&t=192)** So I'm going to go ahead and close this. And now again, I want to emphasize that we've got a choice. So we can go here to the DB query reader. That's the node that was already here. And the prepared example, I can go to configure, and the Knime folks have kindly provided the necessary SQL. It's very simple, of course, it's select star from data. And we can click on, okay, and we can execute and then we can do the same thing. We can go down to Knime data table. In this case, actually, we don't have the cache step, but we're seeing the data just like we did before. It's the same data. I can close that. And then let's take a look at the group buy. I'm just going to jump right to the execution of it and then group table. And clearly it's doing something because, we don't have a hundred or more rows, we have just three. So it's produced a little table. Now this is being done. I'll show you, with some menu operations. In fact, this tab is kind of where the action is. But you could also do this step, with SQL if you chose, entirely up to you, based upon what you're more comfortable with, and what your existing skills are.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/database-access-with-knime?u=76281980&t=285)** I'm going to click on cancel. And then finally there's a way to write it back to the database. We don't have to demonstrate that now, but there you go. So there's extensive database support. And then once you're connected to the database, you can use various nodes, like the table selector that are menu based. Or you can use nodes that are SQL based, like the database query reader.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (10), [[SQL]] (4), [[Databases]] (1), [[Metadata]] (1)
> **UI Navigation:** click on (6), drag and drop (2), go to (1)
> **Env Vars:** sql (4), iris (1)
> **Prerequisites:** configure (2), set up (1)
> **CLI Commands:** find (1), node (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 4. Data Understanding

[↑ Back to Table of Contents](#table-of-contents)

#### [Describe data and verify data quality](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/describe-data-and-verify-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/describe-data-and-verify-data-quality?u=76281980&t=0)** - Okay, we're going to continue with data understanding tasks. In particular, describe data and verify [[Data Quality]] using the data explorer node. It's going to allow us to tackle both of these tasks, at least in part. Lets take a look. Okay, we are in the chapter four workflow which is part of the intro nine workflow group which will be provided to you, but all I have is two file reader nodes. One with the titanic data and one with the auto data, and both of those files will be provided to you as well. So starting with the titanic data, lets go ahead and get the data explorer. So I'm just going to start to type in [[Microsoft Word|word]] explorer here, and we can see it. We can see the data explorer, and notice it's under [[JavaScript]] View Labs. So again, you really want to make sure that you're using the extensions and that you're not just searching in the default areas because that's where some of the best nodes are to be found. So I'm going to bring over the data explorer, and you're going to be able to tell right away what's going on. Now notice that it has the red symbol showing, stop symbol. That's obviously because we haven't hooked it up yet. So lets do so. Draw an arrow there. It's now yellow. Saying that it seems to be happy, it just hasn't been run yet. So I'm actually going to choose execute and open views, and that will take me right where I have to be. So lets take a closer look.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/describe-data-and-verify-data-quality?u=76281980&t=93)** Here we are, okay. We can see that age, sibling, spouse, parent, child, and fare have been identified as numeric variable, and then over in nominal we can see that survived and passenger class are in nominal, but, remember, that's only because we have discussed how we have to declare survived and passenger class's string in order to do that, okay. So I'm going to go back to the data explorer, and I want to show you something else. We have some variables that really aren't nominal, things like cabin. I'm going to show you here in just a moment. So this max number of nominal values is a bit high for my tastes. I'm going to lower it to 100. There's no magic rule on what it should be, and we're only exploring the data so there's no critical implication in any analysis that we've done so far, but let me show you what happens when we declare that as 100. Now for the nominal variables we can see that name, which is really not a predictive variable, has been identified as being kind of special, and it's not trying to do a graphic for it. And the same is true for ticket and for cabin. These variables are really unique identifiers. They may not be literally unique because there are multiple folks per cabin, but there's just too darn many of them for us to use them as predictive variables,
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/describe-data-and-verify-data-quality?u=76281980&t=187)** but we can get a quick look at some of our variables already. We can see that passenger class three is the most common, you know that bar being a little bit taller than the others. Nothing super exciting here in the nominal area. Going back to numeric, though, there's a lot of information that we've gotten very quickly. Now remember, you could have more than 100 variables. You could have 500 or 1,000 variables. So getting a quick report like that is really quite useful, and we can see, for instance, that age has a large number of missing variables, 177. So that's something that we would want to know. So the data explorer isn't going to do everything for you, but, gosh, it's a great place to start. If we go to the data preview, we could also call this up in a table, but while we're in this same interactive environment, we can see that. We can even do some very basic things like sorting and so on. So seek out the data explorer. It's going to be , in many cases, that first node that you'll want to try on a data set that you're unfamiliar with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (1), [[Microsoft Word|Word]] (1), [[JavaScript]] (1)
> **CLI Commands:** node (2), make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - okay (1)

#### [Explore data: Scatterplot](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/explore-data-scatterplot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/explore-data-scatterplot?u=76281980&t=0)** - Okay, let's continue with the explore data task of the data understanding phase, and we'll start with the scatter plot node. I want to use the auto data for this one, so what I can do is again, search for what I want. And you might think, why not just go through the folders. Well, you're going to see that you've got choices. So, whenever it comes to data visualization and NIME, you're going to want to favor the [[JavaScript]] options. That's really the direction they're going in for the most contemporary look in NIME at the moment. So, we'll drag that over, and why switch data sets? Well, I want to comment on that as well. When you do a scatter plot, you want to be looking at two scale variables. So this data set is going to have more scale variables to choose from. That's what's going to take some time when you do the explore data task of the data understanding phase is that all the different pairs of variables are going to require a different style visualizations. So once more, level of measurement is always a critical thing, so we'll configure this and we've got to tell what the two variables we want. We can do miles per gallon as the Y, actually. And, I can predict that with weight. Let's see how that looks. Execute in open views, and great, we've got a nice little scatter plot here. So, you're going to find
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/explore-data-scatterplot?u=76281980&t=95)** that if you use the default scatter plot in NIME, it's not as nice as this, so you get a nice little effective scatter plot. Okay, so something that we can do in NIME which is kind of fun, is that we can do more of these without leaving and coming back in. So, I can change the X to horsepower, for instance, and I can apply that, but what you want to keep in mind now, we get a warning that there is a couple of missing data points for that variable. What we want to keep in mind though is we want true scale variables. If we use what are really ordinal variables, it's not going to be as effective as a scatter plot, and we might want to consider a different short type, so again, level of measurement is always, always important. So, if we go to cylinders, for instance, this doesn't really work very well as a scatter plot for a couple of reasons. We've got decimal places down at the bottom for the cylinders, and of course, you can't be in between cylinders, and we have dead space at seven, because there are no cylinders at seven. This just doesn't look right. So, you're going to always want to consider a different chart type when you have an ordinal and a scale. So, this cylinder experiment wasn't terribly successful. Be careful what variables you choose. You want those scale variables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Env Vars:** nime (4)
> **Warnings:** keep in mind (2), warning (1), be careful (1)
> **CLI Commands:** node (1), find (1)
> **Analogies:** for instance (2)
> **UI Navigation:** go to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - okay (1)

#### [Explore data: Boxplot](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/explore-data-boxplot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/explore-data-boxplot?u=76281980&t=0)** - [Instructor] Okay, we're going to do another chart type now. We're still doing the explore data task of the data understanding phase. But we really need to do another chart type, because I want to underscore that every different pair of variables in terms of their level of measurement is going to require a somewhat different approach when exploring the data visually. So scatter plot only works when you have a scale variable on the x axis and a scale variable on the y axis. But what if you want to compare a categorical variable to a scale variable? That's not going to work effectively and we need to that a different way. So we're going to try a box plot. Aligning the chart type with the level of measurement of the underlying variables is actually a huge topic. And entire books have been written about it. Stephen Few is an author who has really specialized in this. And although he doesn't write about [[Knime]], his graph selection matrix, which you can find on the internet, is extremely helpful for this purpose. So since we're focused on KNIME and we're not doing a full data visualization course, we're just going to stick to scatter plot and box plot. But this chart will help you identify which chart to use for different combinations of variables. So here we are in KNIME and I've typed in box, and I find that there's a bunch of choices. I have a regular box plot, and a conditional box plot, both under [[JavaScript]], and then I have some other choices as well, okay.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/explore-data-boxplot?u=76281980&t=96)** And you're going to want to favor the JavaScript options when you can. In terms of the direction that KNIME is going, you're going to want to emphasize the JavaScript options. So I'm going to ahead and bring over conditional box plot, make some room for it. Now, why conditional box plot and not what appears to be a regular box plot? Well, a regular box plot is only going to look at one variable at a time, and we want to continue to compare two variables at a time. So we're about to run our conditional box plot but it's important to note that I have declared cylinder as a string here. That's going to signal to KNIME that we want to treat it as a nominal variable and not as a scale. Otherwise, this won't work, very important. Okay, so I'm going to go into the configuration and up at the top, the category column, cylinders now appears because it's been declared as a string variable. But if you don't see it there, it's because you have not declared it as a string variable. And let's go ahead and show miles per gallon here. And we'll go ahead and click on okay. Execute in open views. And there we go, so this work very nicely. You might recall that earlier, we tried doing a scatter plot with cylinders in the x axis and it just didn't look right.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/explore-data-boxplot?u=76281980&t=188)** But now we have a different category for each and if you're not familiar with a box plot, the bottom of these rectangular areas are the 25th and then at the top, the 75th percentile, so half of the data is in that shaded region. And then the circles and x's reflect things like outliers and extremes. So this is actually, I think, a pretty effective way to look at miles per gallon by cylinder. But this would not work unless we had the right mix of variables. Cylinders declared as a string and miles per gallon as a scale variable and in the appropriate axes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (5), [[JavaScript]] (3)
> **Env Vars:** knime (5)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 5. Data Integration and Merging

[↑ Back to Table of Contents](#table-of-contents)

#### [Merging with the Joiner node](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/merging-with-the-joiner-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/merging-with-the-joiner-node?u=76281980&t=0)** - Okay, we're going to move on to a crisp DM task that is very labor intensive in a real world project. We're going to move on to integrate data, which is part of the [[Data Preparation]] phase. There are numerous functions within Nine to support this, but we're going to start with the joiner node. Okay, here we are in Nine and I've got two files that we're going to merge. Let's take a quick look at them. The first one is a bunch of transactions. I've got a product code, a transaction ID, a customer ID. Notice several transactions from the first customer here. Many transactions from the second customer. It looks like I've got a time stamp, but one of the things that I don't have, I have what they've paid, but I don't really know what they bought. I have a product code, but I don't have any explanation of the product or what type of product it is. Let's now take a look at the other one. Okay, here's the second file. Taking a look at that, we can see the product codes, much smaller table of course. We've got the product codes, we know what department or category they're in, and we have the unit price. Okay, so what we're going to go ahead and do now is merge these two. First, I've got to find the joiner node. I'm going to go to manipulation, column, split and combine, and you see the wealth of functionality here. There's more than a dozen in this folder alone,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/merging-with-the-joiner-node?u=76281980&t=94)** and we're going to get the joiner node. Now, as I'm sure you would guess, to use the joiner node, I need a variable in common. And in this case, that's going to be product code. I choose product code from both files. I'm doing an inner join, but it's not the only choice. Click on okay. Execute. It takes a moment. Here's the joined table and we can see that we've got those transactions, here's a transaction ID, here's a time stamp, but we've now added the information from the other file, notably the product category. That's what we really wanted to bring in and we've done that successfully, so there you go. That's a node that you're certain to use frequently, the joiner node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1)
> **CLI Commands:** node (6), find (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - okay (1)

#### [Aggregating with the GroupBy node](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/aggregating-with-the-groupby-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/aggregating-with-the-groupby-node?u=76281980&t=0)** - [Instructor] We're going to continue with the same example, demonstrating the Group By node, which is how you do aggregations in [[Knime]]. Okay, so we need to do Group By. We can actually search for it. So when you're performing an aggregation, which is something you're going to have to do on pretty much every project, we're going to go ahead and take those transactions and get it down to one row per customer. Okay, so we're going to group by customer ID. Then the question is, what new variables do we want to generate? There's numerous, numerous choices, but let's go ahead and do some very basic ones. So we'll do total quantity. Going to go ahead and choose a sum here. Also do total sales amount. This is exactly the kind of thing that you would always do, but you might do dozens of these on a real project. I'm also going to do this. I'll go ahead and take the timestamp and bring it in twice. I'll do the first timestamp and the last timestamp. That would certainly come in handy down the way, to find out how long they've been a customer, that kind of thing. I'm going to execute that. Take a moment. And there's the resulting table. So I've got one row per customer ID now. I have the two sums that I've requested, as well as the first and last timestamp.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/aggregating-with-the-groupby-node?u=76281980&t=94)** You're going to be using that one a lot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (1)
> **CLI Commands:** node (1), find (1)
> **Env Vars:** knime (1)
> **Speakers:** - [instructor] (1)

#### [Creating new variables with Construct](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/creating-new-variables-with-construct?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/creating-new-variables-with-construct?u=76281980&t=0)** - [Instructor] Moving on to the math formula node. So this node is going to be just one example of many, many that we could do of the data construction task of the [[Data Preparation]] phase. We're going to proceed by adding a formula to our workflow. I've been on real world projects where I have hundreds of formulas like this, so if you've heard a lot of talk about so called [[Feature Engineering]], you know, its basically the whole idea of creating new variables from the variables that you're starting with, although this is a very basic example, it essentially is an example of feature engineering, so let's give it a go. We want the math formula node. We'll hook that up, take a look. And again, you might be doing a lot of these but I'm just going to demonstrate a very simple one. I'm just going to take sales amount, divided by quantity. Now remember that we got that through the aggregation and that's precisely what makes this so common that we're starting with a tall data set, then we're making it shorter, and then once it's shorter, we start to create new variables. That's the classic approach. But we probably want to take the time to give this a new name, so we're going to call it average spend per order.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/creating-new-variables-with-construct?u=76281980&t=85)** Going to execute that. And we can take a look and our new variable is visible here. Before moving on, I want to talk about a couple of other nodes that are related that I want you to be aware of. Okay, so one of them is right next to the one that we just did. It's the math formula multi column. If you're doing a calculation that repeats, for instance, you have a dozen variables and you want to perform the same calculation on all of them, for instance, you want to standardize all of them, then under those circumstances you can use the multi column version, okay. So what you're doing would otherwise require multiple nodes but it requires that you're doing the same expression for more than one column. That's what allows you to use the multi column, so when you have repetitive calculations, you want to consider that one. The other one that I want to mention is the column expressions node. This is a newer node so you might not notice it in the documentation, but what's interesting about this one is that there's no restriction on the number of lines an expression has and the number of functions it uses. So, if you run into an issue that is complicated enough that the math formula node or the math formula multi column node
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/creating-new-variables-with-construct?u=76281980&t=178)** is giving you trouble, you want to reach out to this one. In fact, if we take a quick look inside, you can see that stylistically, it's very different. By adding the plus symbol, you can add line after line. So complex if then statements, and things like that, you really won't get limited by using this node for those more complicated calculations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (2), [[Data Preparation]] (1)
> **CLI Commands:** node (8)
> **Definitions:** is a  (2), essentially is (1)
> **Analogies:** for instance (2)
> **Documentation:** the documentation (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Select data with Column Filter](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/select-data-with-column-filter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/select-data-with-column-filter?u=76281980&t=0)** - [Narrator] We're going to proceed to the select task of the [[Data Preparation]] phase. Starting with column filter, a bit of house keeping. I'm going to go ahead and get rid of the multi column and the column expressions note which we didn't use. And move this up towards the top. I'm sticking with the same work flow just so we can have a single work flow for chapter five. Okay, I need another file reader to bring back our titanic data. And it's not critical in this case but I'm going to go ahead and declare survived and passenger class as string because remember otherwise, they will get confused and not recognize those as nominal ordinal variables. Okay, so let's go to manipulation and column. And notice there's a whole folder for filter. Column filter is one but there's others. So, over time you'll get increasingly comfortable finding the nodes that you need. But between the search that I frequently use, navigating the folders and the workflow coach. Hopefully, you'll get an increasingly large vocabulary of nine nodes. So here's the column filter. And what I'm going to do is remove name, ticket and cabin. Cause those are basically ID fields. Well there are as many rows as names
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/select-data-with-column-filter?u=76281980&t=95)** and there's almost as many cabins and tickets as names. So we don't want to send that to a report or to a modeling algorithm and that's why that's going to be helpful. Now, you may be familiar with software where perhaps you do that kind of selection when you get to the modeling algorithm but one of the reasons that I chose to show you the column filter is that nine typically. You want to get variables that you don't need out of your way because in the modeling nodes as we will later see. They don't have a convenient way to get rid of the variables at that point. So getting rid of them early is a good idea. So that's the column filter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Balancing data with Row Sampling node](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/balancing-data-with-row-sampling-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/balancing-data-with-row-sampling-node?u=76281980&t=0)** - [Instructor] We're going to continue with the select task of the [[Data Preparation]] phase with the row sampling node, but we're also going to talk a bit about balancing. Let's take a look. Okay we're going to continue where we left off and let me just start to type in sampling. We actually see a bunch here so I want to draw your attention to something. We have the row sampling node which is the one that we want, but also if we scroll down, there are numerous things. We have a database version of sampling in the [[Knime]] Labs. We have a Spark version of row sampling. So we don't want to forget all the additional power here. What will happen over time is by using the combination of all of the different ways of pulling up these nodes, you're going to start to learn all of the numerous ones that might apply to your particular situation. So let's start with the most basic one: the row sampling node. I think, generally speaking, folks are too afraid to sample, or rather, I think most of us could be a little bit more bold in how often we turn to something with like sampling. Obviously we can do a simple 10% that we draw at random, you can also do stratified sampling here. So very briefly, why would you sample at all? You would sample if you have a large amount of data and maybe you want to try 30, 40 different modeling [[Algorithms]]. Why not run those models
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/balancing-data-with-row-sampling-node?u=76281980&t=92)** on 10% of your data, get a sense of which models are doing best, and then once you've narrowed down the pool of algorithms you want to consider, then go ahead and run all the data? So in other words, don't be afraid to sample. But, rather than continuing with this basic row sampling node, I actually want to show you one that I think is going to be of greater interest to us: the equal size sampling. Let me drag it into place. I mentioned that we would talk a bit about balancing. One thing about the Titanic data set, is that more people died than survived. Many modeling algorithms will perform better if our two categories are equally sized. So if we go into this node and we tell it that the column that we're interested in is survived, now notice that has to be string otherwise it wouldn't have appeared there. We can then use this equal size sampling. We click on okay, we go ahead and execute that, and the number of rows is 684. That's noteworthy because just a moment now, we're going to go back. If we had run that back here, we have 891. It's obviously discarded some rows. What has it done? It's kept all the folks that survived, but it's discarded the folks that died at random until they become equally sized.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/balancing-data-with-row-sampling-node?u=76281980&t=187)** That's called balancing, that's a classic technique and it's terribly convenient that KNIME has a specialized node for us that makes doing this common process so fast and easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), [[Knime]] (2), [[Data Preparation]] (1)
> **CLI Commands:** node (6)
> **Env Vars:** knime (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Clean data with the Missing Value node](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/clean-data-with-the-missing-value-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/clean-data-with-the-missing-value-node?u=76281980&t=0)** - [Instructor] Moving on to a new task, the clean data task of the [[Data Preparation]] phase, starting with row filter, but then also talking about the Missing Values node. So we're on the missing data theme. I'm going to go ahead and remove the Row Sample node. We can keep the Equal Size Sampling for now, certainly. And I'm going to go ahead and type on row, and actually a number of things come up. Here we go. We've got row filter, but again, once more, we have a bunch of different choices. We're just going to go with a standard one. And one of the things that we can do with row filter, very easily, that keeps us on the [[Data Cleaning]] theme, is I can say that only missing values match, specifically on the age variable. I know that the age variable has more than 100 missing cases, and I can either include only missing. Let's take a look. I actually want to make quick note of this error because this will happen to you sometimes. If you view the table before you've executed, this is what you're going to get. If you spend the whole day and night, at some point you will get this error. Notice that it's still showing yellow. If I execute first, on the other hand, and it turns green, then we can go ahead and look at the filtered data. And notice, it's only cases that are missing on age. In contrast,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/clean-data-with-the-missing-value-node?u=76281980&t=94)** I can say exclude rows, and if I exclude the missing, again execute, then none of them will be missing. There you go. Now none are missing. See? So, I'm going to go back and actually set aside that node there, because that's one way that I could tackle missing. But there's another way. I could also use the Missing Value node. I'm going to come in from a different direction here, and the reason that I'm doing so is that this isn't going to do anything if there's no missing data. You'll see why in a moment. I'm going to go ahead and indicate that for age, I want to replace with the median age. And when I do that, there isn't going to be missing data anymore. So two distinct ways of tackling missing data. One is to remove all of my missing data, and another is to replace the missing data with the median. And there you have it. Two different ways of tackling missing data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1), [[Data Cleaning]] (1)
> **CLI Commands:** node (4), make (1)
> **Speakers:** - [instructor] (1)

#### [Format with Cell Splitter](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/format-with-cell-splitter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/format-with-cell-splitter?u=76281980&t=0)** - [Instructor] Okay, next is the format task of [[Data Preparation]] and we're going to do a quick example with the cell splitter node. Okay, so we're going to continue along the path after the missing values node. And I'll just start to spell this here, cell splitter. In order to do this example, I'm going to return back to the column filter and bring back the name because that's what we're going to use for this example. Then I'm going to go to the missing value node and take a look at it at that point in the stream. Let's pause for a moment and take a look. The Titanic data set has some odd variables in some ways. It has a column called SibSp, sibling spouse, and it has another one, parent child, but when you try to do something as basic as trying to figure out family size, things get complicated because this was, a famous accident as everybody knows, folks were traveling with nannies and, and other individuals that were part of the group but not part of the nuclear family, so what if we simply wanted to extract the last name of these passengers to try to sort all that out? That's what we're going to do right now. So in cell splitter, I'm going to choose name and then I'm going to say the delimiter is the comma
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/format-with-cell-splitter?u=76281980&t=98)** and that's it. I'll execute that. And we'll take a look. And sure enough, that easy, we were able to get the surnames pulled out and then in the other column the other portion of the person's name. So, we really have made progress towards family size but we're not really there yet, so let's try one more step and see how it goes. We've already learned group by, and that's going to be quite helpful for us here.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/format-with-cell-splitter?u=76281980&t=136)** Because I can group on surname, we could have given that a better name, but that's the one that had our surname, and then under manual aggregation we can say how many different names do we have under each surname? And to make it easier to see, let's add a sort. We'll add a sorter node which is a simple one that we actually haven't used before. And we'll sort descending on count. Execute. And take a look. So it appears that the Anderson family is the largest family along with the Carter and Johnson families, but something to think about is that we balanced the data. So if we wanted to focus on this kind of information but we were not focused on modeling at the moment, we could take out the equal sized sampling and we would get more complete results. It would depend on what we were trying to do. So there you go, cell splitter in combination with group by and the sorter node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1)
> **CLI Commands:** node (5), make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Modeling

[↑ Back to Table of Contents](#table-of-contents)

#### [KNIME modeling options](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/knime-modeling-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/knime-modeling-options?u=76281980&t=0)** - I'd like to overview the wealth of modeling options in [[Knime]]. To help us get acclimated on this topic, let's call up one of the KNIME examples for building a simple classifier. In this course, we're going to be doing examples of our own, specifically in regression and [[Decision Trees]], but I want to just get us oriented. So one of the things that you should be looking for, in addition to things you've already seen like the file reader and so on, is the partition node. It's the job of the partition node to really quite easily divide our data randomly into a training set and a test set. And notice that the training data flows through the decision tree learner, whereas the test data does not. So both the training set and the test set get scored, but only the training set is sent to the algorithm. So you'll notice that this pale green learner and dark green predictor is something that you're going to see again and again when you search for [[Algorithms]]. Let's start from the very top. We know that the two major classes of modeling techniques are supervised and unsupervised. They're certainly not the only two, but they're arguably the most important two. So let's go to analytics, and then mining and see what we have. And I think you'll agree, there's quite a variety here. But remember that since KNIME is community-based, don't assume that everything you need is going to be found
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/knime-modeling-options?u=76281980&t=95)** in this folder. And we're going to talk some more about that in just a moment. But in terms of unsupervised, we have clustering, including both hierarchal and k-means. In fact, even k-medoids, which you don't always see. We also have item sets and association rules, normally falls under the unsupervised umbrella in most textbooks and discussions of [[Data Mining]]. So we have pretty good coverage there. I don't want to imply those are only two, but we know that we have pretty good coverage based on just that. By the way, you may find it interesting, I certainly do, that there's a folder specifically on feature selection. And it's not just factor analysis and principal components, that's also found in here, but a folder specifically on nodes that are trying to help you pick the best features. Okay, so that's unsupervised. Just a taste. Now let's talk about supervised. And I thought it might be interesting to take the list of algorithms that I chose for my classification modeling course right here in the library. The reason I'm doing that is I didn't plan that course with KNIME specifically in mind. It's a concepts course. But I did put a great deal of thought into trying to identify the most important classification algorithms. So let's just work through a short list that I've assembled here and see if we can find them. So discriminant analysis for instance. As we look, there's no obvious place that discriminant analysis might be, but let's start to type it in. And we actually find that it is here,
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/knime-modeling-options?u=76281980&t=189)** but it falls under [[Statistics]] in the KNIME labs. So we've even got linear discriminant analysis, which has been around since the '30s. More statistical in nature, less associated with machine learning, but it's great that we have it. So how about [[Logistic Regression]]? Well, going back to our folder there, we can see that absolutely, we've got good coverage for logistic regression. Now remember what we've seen, we have both the learner and the predictor. Remember how those work together. So you're always going to expect to see those in pairs. And moving down my little informal list here, what about decision tree? So notice something that's interesting about decision tree is it's just called decision tree. It's not called CART or C5 and so on. What you're going to find is that if you go into the settings for decision tree, you can essentially turn it into a couple of different algorithms. We'll say a bit more about that when we do a decision tree example. Notice we also have regression tree here. Once more going down my little unofficial list, what about k-nearest neighbors? Quite sure it's in here. Notice it doesn't seem to be in a folder of its own. Let's find out where KNIME has decided to put it. Remember, we can always search for it. K-nearest... Here we go, it's actually under miscellaneous classifiers. So again, be a bit persistent. Don't give up when you don't find it right away.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/knime-modeling-options?u=76281980&t=283)** How about support-vector machines? Certainly a popular one. And we do have support for support-vector machines. What about [[Neural Networks]]? We do indeed. Multilayer perceptron, which is the one that most of you would be familiar with, and then we also have here PNN learner and predictor. What about Bayesian? We've got a Naive Bayes learner. You may have also heard of Bayesian networks. Just out of curiosity, let me see. If we start to type in Bayes... And look at this, it looks like as part of Weka. Weka you may think of as a competing technology, and in a sense it is. It's another way of doing machine learning. But KNIME is compatible with a massive list of other technologies, including Weka. So there you go. We have Naive Bayes natively in KNIME but we also have Bayes net as part of Weka. I have just one more on my little informal list and that's ensembles. And I know that we're going to find it here, there's going to be a lot. So we have decision tree ensembles specifically. Most famously, perhaps, random forest, but as you know, gradient boosted trees very much in the news right now. And we have support for both of those. In fact, you can see that we have folders inside of folders, so there's a number of different variations. Now again, don't hesitate.
>
> **[6:17](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/knime-modeling-options?u=76281980&t=377)** In fact, you really must also search more widely. You may find XGBoost supported in different ways. For instance, a [[Big Data]] version that might run using Spark. Also keep in mind, if you read about or you go to a conference and you hear about something and you can't find it in KNIME, you can always run it through R or [[Python (Programming Language)|Python]]. Let's take a closer look specifically at that. You'll notice that there's the entire scripting tab. And we've mentioned this before, but notice that you have Python and R support right here inside of KNIME. So it's almost inconceivable that you would have no options. Just because it's not running natively in KNIME doesn't mean that you couldn't do it if you chose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (11), [[Algorithms]] (4), [[Logistic Regression]] (2), [[Python (Programming Language)|Python]] (2), [[Decision Trees]] (1)
> **CLI Commands:** find (9), node (2), python (2)
> **Env Vars:** knime (11), cart (1), pnn (1)
> **UI Navigation:** go to (2)
> **Analogies:** for instance (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - i (1)

#### [Regression example](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/regression-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/regression-example?u=76281980&t=0)** - Okay, so our first modeling example is going to be [[Linear Regression]]. We're going to be using the linear regression learner, and the partitioning node. Okay, the time has arrived to build a little bit more of an elaborate work flow. Let's build a regression model. Here we go, I'm going to need a file reader. I'm going to use the data set that we have used before. It's in the exercise files, auto. Quick reminder of what this looks like, it's a bunch of car names, and miles per gallons, and variables that we can use to predict miles per gallon. Okay, so since we're going to build a predictive model, we're going to want to create train and test partitions, so let's do that, and we see the partitioning node is a row transform node, but just by spelling it out it's very easy to find. We'll go inside and we want not just the first hundred rows, we want a relative 80%. 80% is not a very [[Big Data]] set, frankly. And that's it. So what we can do, is take a look at our first partition. I didn't execute that, let's see, execute. Let's take a look at our first partition. Here goes, and the first car in the first partition is the Chevy Malibu, okay? So just kind of remember that, it will be interesting
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/regression-example?u=76281980&t=93)** because we're going to build the model on this partition, but then check our work on the other partition. All right, and then if we right click, and go down to the second partition, we see the first car in the second partition is the Chevy Impala. This is an older data set, by the way, this data set will be provided to you, but it's also on the UC Irvine Data Repository, which is a famous place for practice data sets. Okay, so now let's bring in our regression node. If we go to anylytics and mining, there's a folder for linear and polynomial regression, and remember we always see these in pairs. The learner and the predictor. So we want the learner at the moment. And we'll hook this up and we'll create a little bit of room for where the predictor will go. And let's take a look inside, and we're going to predict miles per gallon, and let's do so with our scale variables. We certainly don't want car name, can't use that. Can't use model year, not without doing something else with it. There's going to be too many categories for a data set this size, and it's just not a variable that we want to use without transforming. The [[Representational State Transfer (REST)|rest]] of these look okay, except for cylinder is a bit of a strange one, because in this data set there are no seven cylinder cars, and we probably wouldn't anticipate a per cylinder effect. I'm not a mechanical engineer, but I think there's probably more of a qualitative difference
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/regression-example?u=76281980&t=187)** in the design, at least we'd want to explore it that way. So for now I'm going to set cylinder aside. But that gives me displacement, horsepower, weight, and acceleration. Execute and open views. And actually, I'm glad we saw this error, because the default on regression, is to fail on observing missing values. Now remember that [[Knime]] supports replacing with the median, and a variety of different things, but for now we can simply say ignore rows with missing values, but don't forget that that missing value support is also there. Okay. Execute and open views, and let's take a look. Now I don't want to turn this short video into a mini course on regression, but there are a couple of things that we want to take a look at here. We notice that some of the P values are large, now a small P value will be near zero, so horsepower is small .00. And then weight is small, because that's in scientific notation, so obviously very small. But we also have displacement and acceleration, not so small, 0.8 is not considered small in a P value, because we're looking for values that are 0.05 or less. So below .05. So, displacement and acceleration, we should probably remove, so let's do that. Out goes displacement, out goes acceleration.
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/regression-example?u=76281980&t=281)** Frankly, if you know your regression, I bet you can anticipate what's goin' on here. We have too many variables that are telling us the same story, so we're going to drop it down to just horsepower and weight. Go ahead and continue, execute and open views. And this looks a little bit better. Again, it's a very simplistic example. I just want to kind of give you the mechanics of how to build a regression model in Knime. But let's be slightly more ambitious. Let's go ahead and deal with cylinders. So what we can do is, we can say that we think that cylinder should be treated as and ordinal variable. One could debate that, but I'm going to treat it that way, and let's see what we find. So if I treat that as a string, then I can go into manipulation, and column, and transform and what I need is the one too many node. Which we have not seen yet. Going to bring this into place here and connect it up. Now I'm not going to do anything with car name, but I'm going to ask that cylinder be dummy coded, which means that it will be transformed into a series of ones and zeros. You'll see what it's done in just a moment. So I'm going to go ahead and execute that. And then, we'll take a look. What we now see, is that for our Chevy Malibu, which is an eight cylinder,
>
> **[6:19](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/regression-example?u=76281980&t=379)** eight is yes, four cylinder is no, six cylinder is no, three cylinder is no, and five cylinder is no, okay? So let's go back, and what we can do is in the regression, we can tell it that we want all of these variables, except for the three cylinder one, to be used in the model. And what that's going to tell us, is how much more gasoline these use compared to the three. So the three becomes what's called the reference group. I'm just trying to insert some basic regression functions into our little Knime regression work flow. So, if we do that, and we execute and open views, what we find is that they're all significant. Uh, I guess not six, it should be below .05, it's at .09, but we'll keep it in because we're really just talking about functions here. But it does seem to make a bit of sense. It's basically saying that as horsepower goes up, miles per gallon goes down, as weight goes up, miles per gallon goes down. But compared to the three cylinder, the eight, the four, the six and the five all use more gas than the three cylinder, okay? Not a terribly elaborate model, but we gotten to rehearse some basic things, so let's bring this to a close by bringing in the remaining very important piece, which is the predictor.
>
> **[7:53](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/regression-example?u=76281980&t=473)** So what we can do is bring in our regression predictor by going to analytics, and here it is, that folder's still open, we bring that over here, and by the way while I'm highlighting on this, you're going to see that one of the things that you see in help, is what the input ports and what the output port means in this case. So we're going to hook these two together, and then we're going to connect this together. That sends our model to the predictor node, but it sends our second partition, also to the predictor node, and if we do that, and we go to the predictive data, oh look at that I didn't execute it, execute. We do that and we go to the predictive data, we see our Chevy Malibu here. Going to move these so they're closer together, has an actual miles per gallon of 18, and a predicted miles per gallon of 19. So we've done pretty well. This one is a pretty good job. Also, the Chevy Impala, not quite as good as the others we've got an actual of 14 and a predicted of 10 and a half. But there you go, that's a quick demonstration of regression in Knime.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (4), [[Linear Regression]] (2), [[Big Data]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (7), find (3), make (1)
> **Definitions:** is an  (2), is a  (2), means that (1)
> **UI Navigation:** go to (3)
> **Versions:** 0.8 (1), 0.05 (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - okay (1)

#### [Decision tree](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/decision-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/decision-tree?u=76281980&t=0)** - [Instructor] K, we're going to do a decision tree example, so we're going to use the Decision Tree Learner, the partitioning node but we're also going to perform the assess model task of the modeling phase using the ROC curve node and the scorer node. Okay, so I'm calling this workflow chapter6_2 because we'll need room, we're going to be doing a number of different things. I've already prepped the Titanic dataset to use one more time but what we're going to want to do now is use the column filter because there were some nodes we don't want to send to the modeling nodes. Namely Ticket, Cabin, and Name. Those just aren't good candidates for any kind of predictive model, so we'll get those out of the way using the column filter node. Then we need to partition here, so just start to spell that and we see our partitioning node. Dataset isn't huge, so we'll do 80%. K and then let's add our decision tree learner. Notice the workflow coach is pretty clever, it's figuring out what I need as I go along, so let's go in here and I want to declare Survived is my class column I'm also going to make a couple of changes here, so I hope the changes don't seem arbitrary. What I'm trying to do is adopt settings that would be consistent with an algorithm called Cart.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/decision-tree?u=76281980&t=95)** There's nothing in the menu here that actually says Cart but if I do the Gini Index, along with pruning and then do binary nominal splits, I'm doing something that's awfully close to Cart. If you're not familiar with Cart, it's one of the topics I talk about in my decision tree course but it's a famous algorithm. Nonetheless, the settings don't matter that much, we just want to get a feel for how [[Knime]] handles [[Decision Trees]]. K, so let's try execute and open views. And there's my decision tree, so I can see that I have an overall survival rate of 38.5%, survival rate for women much higher, 74%, survival for men, 19%. And I can expand this. We don't have to worry about interpreting the whole tree but it looks like passenger class is also a factor, fair is also a factor. Then the tree seems to stop on this side. Looks like it's about to come to a stop over here as well. Wants to go one more layer. We can adjust the zooming so that we can see that a little bit better. But we get our nice decision tree again. We don't have to interpret every leaf node. But we're not done yet because we have to see how well this is going to do on new data, so we need our decision tree predictor, put that over here, and we'll hook up the model so the decision tree predictor knows what the model is but then we want the other group
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/decision-tree?u=76281980&t=187)** to flow to our predictor. Remember that the partition node has the first partition which we actually use in the model and then the second partition is our check to see how good a job we're doing. But how do we now evaluate how well we've done? That's what we need the scorer node for. So, we'll grab the scorer node and this is going to require a little bit of setup. Notice it's flashing red here. It's not happy with us at the moment. That's because I have to request the scores. We're going to need that later on. We're doing both the score node and the ROC curve, you see, so we're going to want those probabilities, so check that off and then in the scorer node, I'm going to explain to it that one column is the actual Survived and then the second column is the prediction of Survived. This is going to be what it needs to create what's called the confusion matrix. I'm going to click on OK, it's now happy, it's gone from red to yellow. I'm going to right click and call up Confusion matrix. Oh, I apologize, I didn't execute it. Right click execute. There we go. Now I can take a look at my confusion matrix and I find out that my accuracy is 79%. And there's some additional details here like getting into the false positive and the false negative. In fact, in the scorer node,
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/decision-tree?u=76281980&t=281)** you can go down and request accuracy [[Statistics]] and you get a more detailed print out but we won't worry about that at the moment because I want to show you the ROC curve node. So, we can just spell that out. And here we go. Generally when there's a [[JavaScript]] option, you're going to want the JavaScript option. So, we'll go up here and we're not done yet because we have to give it some information, okay? So, our class column is Survived. We're interested in those that died, presumably we're trying to prevent the deaths, you see? So, we're going to go ahead and do positive class value zero which is the folks that died and then over here, I want the variable that represents that. So, died here for positive class value and died over here as well. Click on OK. Right click, execute and open views. And I've got my JavaScript ROC curve. So, what this is telling me is if I wanted to develop some kind of intervention strategy where I was trying to prevent deaths by identifying the 20%, see down here on the x-axis the .2, by identifying the 20% that's the most likely to die, I've identified almost 65% it looks like of those that died. That's a lift of more than three if that makes sense, more than 60 divided by 20. See, I'm getting a lift of three.
>
> **[6:15](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/decision-tree?u=76281980&t=375)** So, the model really is helping me identify those individuals that have an elevated risk of dying. There you have it, there's numerous more things that we could explore but clearly KNIME has pretty good functionality for decision trees.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[Knime]] (2), [[Decision Trees]] (2), [[Statistics]] (1)
> **CLI Commands:** node (13), make (1), find (1)
> **Env Vars:** roc (4), knime (2)
> **UI Navigation:** click on (2), in the menu (1)
> **Versions:** 38.5 (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Decision tree: Scoring new data](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/decision-tree-scoring-new-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/decision-tree-scoring-new-data?u=76281980&t=0)** - [Instructor] Okay, we're going to pick up where we left off. One of the fun things about using the Titanic data set is there's a completely separate file that we can use to practice scoring new data. So let's do that. I'm going to make a copy of my file reader. Okay, bring that over here. And I'm going to grab the test file, test.csv, which I provided for you but you can also get it from the Kaggle data set. And there's a couple of things you might notice. First is if you look for Mr. James Kelly and Mrs. James Wilkes and others, you're going to find that they weren't in the original data set. The other thing that you're going to find is that this data file does not have the variable survived. That's the whole point of building a predictive model, we don't know what the survival rate is going to be in this group, so we're going to go ahead and use the model and score them. I'll make a copy of the decision tree predictor. I could also grab a new one, but that just seemed easier. And I'm going to hook up the model, same model that we were using before, and I'm going to hook up the new data. Okay, so I'll go ahead and execute. Then let's take a look at this data set. So I'm going to expand it and, again, what we find is that the actual survival is not know in this data set, or rather it's not revealed. Actually, what's happening if you visit the Kaggle data set, is this is the somewhat secret one that you would use in the practice competition. But I do have a predicted value.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/decision-tree-scoring-new-data?u=76281980&t=95)** This person's predicted to die, this person is predicted to survive. And I've got the propensity scores, or rather the accuracy scores. So there we go, it's really that simple to score new records in [[Knime]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (1)
> **CLI Commands:** find (3), make (2)
> **File Paths:** test.csv (1)
> **Env Vars:** knime (1)
> **Speakers:** - [instructor] (1)

#### [Components in KNIME: AutoML and XAI](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/components-in-knime-automl-and-xai?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/components-in-knime-automl-and-xai?u=76281980&t=1)** - [Speaker] Okay, I want to talk about what are called components in [[Knime]]. And I'm actually going to show you two components that would be particularly helpful during modeling. Now, they both have a lot of aspects so we're not going to do a deep dive into them but let's start with what a component is. So if you take a look here, I'm on the Knime Hub and I've searched for any support for workflows for the AutoML component. Now we're going to take a look at this in Knime, but if you notice, the first node has this gray boundary. It just looks a little bit different stylistically. And then the AutoML node itself, notice that it's AutoML regression and further down we can see AutoML for a classification. But that slightly different node, what is that all about? Well, that's a component and we're going to take a look inside of one. We can't do that here in the hub article, but what we're going to do is take a look at the actual workflow. Now don't forget that we've already seen how to do drag and drop, it makes it very easy. So let's take a look at this workflow in Knime. Okay, here we are in Knime. I did a drag and drop into the local workspace and here it is. So the key thing is, we're going to go ahead and right click on one of these components and check it out. So I'm going to go down to the classification
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/components-in-knime-automl-and-xai?u=76281980&t=96)** portion of the workflow and right click on where it's reading in the dataset. And we can go to component and open and you can see that there's a lot going on. So what a component ultimately is, is a lot of coding in the form of this visualization within the components. So it makes it very easy to use, but a lot of hard work has gone behind it. So it's so important to know about components because nodes aren't the only support that you get in Knime. You really do want to search the hub, not just the node repository to make sure that you're learning about all of this wonderful functionality that they're providing us. So if I go up to the top and click on the tab of the workflow itself, we can take a look not at the, under the hood part of the components, so to speak but how we would use it in a workflow. So for instance, I can right click and configure and I get a dialogue and notice that there's a bunch of data sets that I can choose from, which is pretty cool. I'm just going to keep the one that they have and I'm going to execute it and it will turn from red to green and we're ready to go. Again, we won't do a complete work through example. Both of these are well worth additional study and there's actually an entire course in the library on AutoML that includes a Knime demo, but it's primarily about AutoML itself.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/components-in-knime-automl-and-xai?u=76281980&t=188)** And then there's actually a course on the second topic we're going to see in this video explainable AI, both implemented through components. So if I go to the AutoML itself and configure, I really want you to take a look at this because it's so powerful. It is well beyond the scope of what we can do in a single video to talk about all these modeling methods. But I want you to see that we've got naive bays that I can turn on and off, [[Logistic Regression]], a whole bunch of them. So of course we've just seen [[Decision Trees]] but there are many more, and you can guess what the inside of the component looks like. It's tons of nodes to implement all of these which each would get their own Knime nodes. So components are very powerful and they do all the work for us. Let's look at a second one. So I'm going to click on cancel here. We're back in our workflow. We don't have to drag another workflow into place. Let's just take a look at it on the Knime blog. So here we go, I've looked it up for us. XAI, a view of you to explain single predictions. So again, we have a whole course on XAI which has countless Knime demonstrations in it. But the reason I want you to see it now in the context of this introductory course is components are not only a way to combine a bunch of modeling techniques like we just saw in AutoML. They can also combine visualizations
>
> **[4:42](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/components-in-knime-automl-and-xai?u=76281980&t=282)** in something that looks very much like a dashboard. Let me show you what it looks like. So if we scroll down, and of course they explain what the example is all about. Look at this, isn't it great? It looks, it really, to me looks just like a dashboard and you can see that there's multiple tables and visualizations within it. And the blog post is very good, they walk you through what some of the these do but I don't want to get into the theory right now, I want to stay focused on components. And if we go down to the workflow, we don't necessarily have to drag it into Knime. What we can do instead is just [[Zoom]] in and you can see that that dashboard is being implemented by what they call the local explanation view. That's the name that they've given this component. But notice the icon indicates that indeed it's a component. So what they've essentially done is implemented multiple visualizations, then combine them in a component to produce this dashboard like result. So the AutoML component is wonderful the XAI component is wonderful, but, you've also just learned about the power of components themselves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (11), [[Logistic Regression]] (1), [[Decision Trees]] (1), [[Zoom]] (1)
> **UI Navigation:** drag and drop (2), go to (2), click on (2), scroll down (1)
> **CLI Commands:** node (4), make (1)
> **Env Vars:** xai (3)
> **Analogies:** for instance (1), just like (1)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)


### 7. A World of Possibilities

[↑ Back to Table of Contents](#table-of-contents)

#### [PMML](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/pmml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/pmml?u=76281980&t=0)** - [Instructor] Something that the [[Knime]] folks have certainly put a lot of time and thought into is making KNIME compatible with what's called PMML. Let's type it in here. It stands for Predictive Model Markup Language, but you can see there's many, many nodes that support this. So, what is it all about? Well, I've called up the workflow from our regression example. And I'm going to go ahead and take the PMML Writer, and you can read here it says that, "This node a PMML model from a PMML model port into a PMML compliant file." What is that all about? Well, let's give it a try. It's a way that I can take my regression model and then send it to be scored not quite everywhere I want, but in many, many places. Many, many organizations were involved in PMML. So, let me show you what it looks like. I'll configure this, and I've got to give it a place to go. So, I'm going to send it to the exercise files. I'm in a simple text editor and I'm going to say file, open, exercise files, and there it is. Exercise files PMML. And there is. It doesn't look like much unless you look more closely, and you start to parse it. But it's got pretty much everything we need to run this somewhere else. The notion is with Predictive Model Markup Language that we're not stuck inside of KNIME.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/pmml?u=76281980&t=95)** We can build the model in KNIME, but then we can deploy it in something like SPSS Modeler. Or we can build the model SPSS, but then deploy it in KNIME. Or we can build it in KNIME, and then scored on the cloud with [[Amazon Web Services (AWS)|Amazon Web Services]]. You see, that's the whole idea. The notion is to get things out of the environment where you built the model, and then scoring them somewhere else. So, let's take a closer look at how widely supported this is, because it may be new to you but this is extremely powerful. There's two more things that I want to make clear About PMML. One is how widely supported it is within KNIME. Not just reading it in and pushing it out, but a bunch of other features as well. For instance, if we scrolled down you can see a large number of supported nodes. Including nodes in the manipulation folder. Meaning that it's PMML representing [[Data Preparation]] steps. And if I go a bit further down. I want to draw your attention to what's called the Appenders. We have a Transformation Appender, and we have a Model Appender. And you can read here in the help what it does. "This Node combines two PMML documents fragments where one contains a model and the other transformations." Folks, that's really powerful because you can build a model without data prep. The fact that you can push all of this out for use somewhere else is a fabulous feature. Finally, I want to give your notion of
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/pmml?u=76281980&t=189)** how widely used outside of the KNIME community this is. Because there's no point in exporting PMML if other applications cannot import it. If you visit the website for the [[Data Mining]] group, which is the nonprofit consortium that maintains PMML, through participation of variety of vendors. You can see there's numerous vendors here that participate in the PMML community. Including some big players like IBM, and of course, here we see KNIME.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (9), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Data Preparation]] (1), [[Data Mining]] (1)
> **Env Vars:** pmml (13), knime (9), spss (2), ibm (1)
> **CLI Commands:** node (2), make (1)
> **Tools:** notion (3)
> **Exercise Files:** exercise files (3)
> **Definitions:** stands for (1), is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)

#### [R and GGPLOT2](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/r-and-ggplot2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/r-and-ggplot2?u=76281980&t=0)** - [Presenter] OK, I'm in [[RStudio]], because what we want to do in this video is attempt something in RStudio and then bring that R code into [[Knime]], which should be both interesting and fun. But, what I'd like to do is GGPLOT2, it's just one of my favorite R packages, so I figured that's the one we could use, and since this is right after install, it's not installed yet, so I start to type it, you can see it visible there. I'm going to click on install. It's installing as you can see. OK, the installation is complete. I cleared the console just so we can see better what we're doing. If you ever care to do that, the little icon up here that looks like a broom is handy. Then I can open a dataset, one that we've used before. In the Resources, it's the auto dataset. There we go. Then, you'll have to ensure that GGPLOT2 has been checked off in the Packages tab. So now we're going to proceed to do a quick example using GGPLOT. I won't go into depth about the command, only because I want to keep the focus on KNIME. Notice there's a little bit of auto-complete here. RStudio is popular for a good reason, it really does help you out. So we've got cylinder here and then miles per gallon are going to be the variables I'm using. Then as you probably know, if you want to have a continuation of a line in R, you want a plus on the end.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/r-and-ggplot2?u=76281980&t=94)** Now we're going to add our violin geom and you can see that as long I give it a V here, it already kind of knows where I'm headed, so I'm going to let that auto-complete help me out. Again, adding a plus to continue. And we're going to get a little fancy. Through jittering, we're going to add, so that we can see the actual data points, in addition to the violin shape. You're going to see what it looks like in a moment. And then just a little formatting to make sure that it looks nice. There we go. And there's our violin chart. So, I chose this because I happen to like this chart type, but also it's not something that's supported in KNIME so what we can do is having shown that this R code works, we can do this R code or something very similar in KNIME and get the same chart in KNIME, even though it's not supported there natively. OK, I'm back in KNIME and we're going to run the code here. So I need a File Reader node, and I've got to access the auto file. There it is. And while I'm in here, I'm going to declare a cylinder as a String, 'cause I want to treat it as a category and not a continuous. And, I'll execute that, seems to be working just fine. And I need an R Snippet node. There it is. I'll bring that over. And it's really pretty great, because I hooked that up and it recognizes the variables that are coming in from the File Reader node. So let's start with something really simple. I'll just do a mean, open parens and I can bring in miles per gallon here. I double-clicked on it, added some additional grammar,
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/r-and-ggplot2?u=76281980&t=190)** and I can evaluate the script, and it calculates my average miles per gallon. So, so far so good. Now I'm going to go to RStudio and grab that code, but before I do, I have to add another line in here, require GGPLOT2. K? And I'm going to go over to RsSudio, here we go, where we left off. I'm going to go ahead and do a Control + C on that to copy it, switch over to KNIME, and then good idea to double check my punctuation here. I've got the plus at the end, and then I have an extra plus over here, which is not going to be good, but I can edit that out. That's a common mistake to make. I do that myself all the time. So, let's go ahead and evaluate this script. And click on Show Plot. And there you have it, we have a violin plot. Again, I'm rather partial to this, but what we've really demonstrated is that code that we use in RStudio, we were able to bring over and use in the R Snippet node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (7), [[RStudio]] (5)
> **Env Vars:** knime (7), ggplot2 (3), ggplot (1)
> **CLI Commands:** node (4), make (2)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** install (2)
> **Warnings:** common mistake (1)
> **Speakers:** - [presenter] (1)

#### [Python options in KNIME](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/python-options-in-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/python-options-in-knime?u=76281980&t=0)** - [Instructor] Let's talk about an exciting or be it advanced feature of [[Knime]]. You can use [[Python (Programming Language)|Python]] code right in KNIME and I want to show you how. Now, since this is an introductory course we're not going to get deep in this demo but I want to make you aware of the functionality and I'm going to tell you where to go for more. So first we talked about the KNIME Hub at the beginning of the course, and I've accessed that. Notice that these are public pages. There's a page for our course intro_ KNIME. There's also a page on the hub you can search for me or Advanced Trees with KNIME , and you'll find it for the Advanced Trees with KNIME course, which is right here in the library and as part of the KNIME learning path. So if I go in there, there's a bunch of different things and we're not here to talk about [[Decision Trees]] but I'm going to go down to... There's two of them in particular I want to draw your attention to. There is the Python script node up at the top and then there's the Conda node. We're going to start with the Python script nodes so I'm going to double click on that. Okay, there were three ways to incorporate Python into your KNIME workflows, starting with the easiest Python script node.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/python-options-in-knime?u=76281980&t=98)** The next level of sophistication is Conda. We're going to talk about that next. And then the third level of sophistication, I'm only going to mention I'm not going to show you, and that is that if you are a Python coder, and more than that you really have some [[Software Development]] type skills you can actually develop your own KNIME nodes by making your own KNIME extension just like the extensions that we learned how to download to expand our functionality in KNIME. So it's all very exciting. Now, I am demonstrating this in KNIME 4.7 and that's important because the way that Python works now is different than in recent years. It used to be that you had to know some [[Java]] so that Python could talk to the workflow because the workflow nodes and diagram and so on are done in Java, but they've eliminated that extra step. So it's easier than ever before. Let's take a look. I'm going to double click on this and go inside and we don't have to worry about all of this. This is the decision tree doing its work. However, if you are interested in learning more I discussed this example in considerably more detail in the Advanced Decision Trees course. That's why it's in that folder of course, what was the goal of that example?
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/python-options-in-knime?u=76281980&t=190)** It was to use a algorithm that was not available natively in KNIME, but was available in sklearn. So all of this from top to bottom is Python. No other languages, no additional things to worry about. If you know Python, you can do this quite easily. Now, in addition to importing sklearn, there's some lines of code here that basically import the information from the workflow into the script and then output it back out. And again, I go into this in more detail in the other course, but it's very powerful and you should be aware of this even if you are not a Python programmer, one of your colleagues might be and the Conda node will also help with that relationship, if you are not a Python coder, but you are working with a colleague who's going to add additional functionality for the benefit of the whole team. And that's really what Conda is all about. You're wondering what it's referring to. You may have heard of Anaconda, which is a way of downloading Python along with a bunch of libraries and other functionality. So the Python script node is what you use if you're using a popular library like sklearn, the Conda node is what you do if it's not one
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/python-options-in-knime?u=76281980&t=286)** of the libraries that's automatically downloaded with KNIME and available through the Python script node. But it is indeed a Python library and you have to do an extra step you have to download Conda, and then somebody with some coding skills has to set up the Conda environment. That takes somebody, again with considerable programming skills. But once it's done, then your entire team whether you know Python or not can then use these nodes just like other nodes in a workflow. So I know that's a very basic introduction, and if you are curious about it, I'm sure you want to know more. But that's as far as we're going to take it in this intro course. But please do visit the more extended example in the Advanced Decisions Trees course. If you want to know more about the Python script node and or the Conda node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (18), [[Knime]] (14), [[Decision Trees]] (2), [[Java]] (2), [[Software Development]] (1)
> **CLI Commands:** python (18), node (9), make (1), find (1)
> **Env Vars:** knime (14)
> **UI Navigation:** click on (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** just like (2)
> **Versions:** 4.7 (1)
> **Cross-References:** we talked about (1)

#### [Certification in KNIME](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/certification-in-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/certification-in-knime?u=76281980&t=0)** - [Instructor] I've got exciting news. [[Knime]] has a certification program and you have learned enough material in this course to attempt the Level One exam. Let me tell you a little bit more about it. I'm on the KNIME website, specifically their page for the certification program, and if you scroll down, I want to tell you a little bit about the different levels. So let's pause here at the L1: Basic Proficiency level. KNIME has a self-paced course that you can take. They also have in-person courses that you can take to prepare for the L1 exam. However, the KNIME folks have looked over the material in this course, and they assure me that you have a good shot at passing the L1 exam based upon what you've learned in this course, even though their official course is longer than this one is. So I encourage you to give it a go if you want to establish your KNIME skills, perhaps post them in [[LinkedIn]], and so on. Now, if you try it, and for any reason you don't quite get the necessary 70%, you can make note of where you struggled, review a bit, including the material that they provide, and you can take it again. You're allowed to do so. So there's really no harm in giving it a shot, and I encourage you to try. Now, beyond that, there are more advanced courses, and these courses would require more knowledge of KNIME
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/certification-in-knime?u=76281980&t=97)** than we've covered in this introductory course. For instance, the Level Two gets into things like flow variables, which we didn't even define in this course, and some data prep issues, and so on. But when the time comes, once you've passed Level One, if certification is something you want to pursue, you can look at these different levels. I also want to warn you that when you get to the highest level of certification, what they've done is they've divided it up by role. So if you're in a [[Data Engineering]] role, you might take a different exam at the highest level than you would if you're in a different role. We won't get into that now. I just want you to be aware that there's quite a journey that you can take with the KNIME certification, if that's going to be of value to you in your training and in your career. Good luck with the Level One exam.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (7), [[LinkedIn]] (1), [[Data Engineering]] (1)
> **Env Vars:** knime (7)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for instance (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/next-steps-22651562?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-machine-learning-with-knime/next-steps-22651562?u=76281980&t=0)** - [Instructor] Thanks for joining me for this course. I want to offer some suggestions for possible next steps. To start, go to the [[Knime]] hub and search for topics of interest. They make it very easy. Then download a workflow and give it a try. Now as far as courses go when you want to learn more about KNIME right here in the [[LinkedIn]] library, it couldn't be simpler. There's an entire learning path that has been thoughtfully assembled in terms of the sequence and you've already completed the first course in the learning path. Also, you should have learned enough to take the certification test, it's free. And if you were to have trouble the first time you just make note of areas to review and you can take it again. So give it a try. The KNIME folks are familiar with the material in this course and they think that it makes you ready to give the Level One certification a go. Let me know about your experience with the test. I'll be cheering you on. Whichever of those you choose, I hope that you'll stay in touch by following me on LinkedIn and signing up to watch my monthly [[Microsoft Office|office]] hours. In fact, if you search prior Office Hours events you'll find one where I'm joined by the KNIME team and we discuss certification. And I hope you'll join me for the next one. And if you see me at a conference, I hope you'll say hi.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (4), [[LinkedIn]] (2), [[Microsoft Office|Office]] (2)
> **Env Vars:** knime (4)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available

## Skills Covered

- CRISP-DM
- Knime
- Machine Learning
- Artificial Intelligence (AI)

## Path Context

### In [[Learning Codeless Machine Learning with KNIME]]
**1 of 5** | [[Machine Learning and AI Foundations- Decision Trees with KNIME]] →

## Appears In

- [[Learning Codeless Machine Learning with KNIME]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Advanced Decision Trees with KNIME]] — Artificial Intelligence (AI), Machine Learning, Knime
- [[Machine Learning and AI Foundations- Decision Trees with KNIME]] — Artificial Intelligence (AI), Machine Learning, Knime
- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)