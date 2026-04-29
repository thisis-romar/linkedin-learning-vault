---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: openai-api-working-with-files
url: "https://www.linkedin.com/learning/openai-api-working-with-files"
duration_minutes: 36
duration: 36m
level: Intermediate
updated: 2/5/2024
learners: 2764
skills:
  - OpenAI API
  - API Development
  - OpenAI Products
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/openai-api-working-with-files-4556031"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFOZf2CmFd-fg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706825069771?e=2147483647&amp;v=beta&amp;t=fihFsN396gI0FkbniTmZtEI7A4mv40QcIsBByBHJw2M"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your Skills with the OpenAI API]]'
prev_courses:
  - '[[Openai Api Introduction]]'
next_courses:
  - '[[OpenAI API- Function Calling (2023)]]'
path_nav: '[{"path":"Develop Your Skills with the OpenAI API","position":2,"total":10,"prev":"Openai Api Introduction","next":"OpenAI API- Function Calling (2023)"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-api
  - skill/api-development
  - skill/openai-products
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/OpenAI%20API-%20Working%20with%20Files.md)

![OpenAI API: Working with Files](https://media.licdn.com/dms/image/v2/D4E0DAQFOZf2CmFd-fg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706825069771?e=2147483647&amp;v=beta&amp;t=fihFsN396gI0FkbniTmZtEI7A4mv40QcIsBByBHJw2M)

# OpenAI API: Working with Files

> This course provides an in-depth overview of the OpenAI Files API, which allows you to manage extremely large datasets effectively and efficiently for AI applications. Instructor Fikayo Adepoju covers the basics of the Files API including how to configure and set up your development environment as well as how to upload, manage, store, and utilize files.Along the way, develop the skills you need to

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-working-with-files) | 36m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (2 videos)
- **[[#2. 1. Understanding the Files API]]** (2 videos)
- **[[#3. 2. Using the Files API]]** (5 videos)
- **[[#4. Conclusion]]** (1 videos)

### 1. Introduction

#### Uploading large files to the OpenAI API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-large-files-to-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-large-files-to-the-openai-api?u=76281980&t=0)** - [Fikayo] OpenAI's API now allows you to upload large files to be used for modeling, training, testing, and other machine learning applications.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-large-files-to-the-openai-api?u=76281980&t=7)** Whether you're a developer, a data scientist, or just someone passionate about AI, this course is tailored for you.
>
> **[0:14](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-large-files-to-the-openai-api?u=76281980&t=14)** We're keeping this course beginner-friendly, but insightful and hands-on.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-large-files-to-the-openai-api?u=76281980&t=18)** I am Fikayo Adepoju, a software developer and tech instructor with over 14 years' experience developing scalable applications and teaching the next set of developers.
>
> **[0:28](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-large-files-to-the-openai-api?u=76281980&t=28)** If you're ready to unlock the potential of OpenAI files API, let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Code Keywords:** let (1)
> **Speakers:** - [fikayo] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-working-with-files/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you start out to this course, here are some things you need to know.
>
> **[0:04](https://www.linkedin.com/learning/openai-api-working-with-files/what-you-should-know?u=76281980&t=4)** This course was developed to help learners understand the capabilities of the OpenAI Files API.
>
> **[0:10](https://www.linkedin.com/learning/openai-api-working-with-files/what-you-should-know?u=76281980&t=10)** You'll learn what the API can help you to do and how to achieve it.
>
> **[0:14](https://www.linkedin.com/learning/openai-api-working-with-files/what-you-should-know?u=76281980&t=14)** While we are going to be doing some programming in this course and familiarity with the programming language will help you implement the exercises, you can follow along with this course without programming knowledge and still fully understand what the OpenAI Files API can do for you, and how to use it.
>
> **[0:31](https://www.linkedin.com/learning/openai-api-working-with-files/what-you-should-know?u=76281980&t=31)** As long as you have an interest in implementing AI-powered features in your applications, you can follow along with all the tutorials in this course.
>
> **[0:39](https://www.linkedin.com/learning/openai-api-working-with-files/what-you-should-know?u=76281980&t=39)** So strap in, and let's get started learning about the OpenAI Files API.

> [!info]- Semantic Content
>
> **Env Vars:** api (4)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Understanding the Files API

#### The significance of the Files API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=0)** - [Instructor] In this video, we're going to be discussing the significance of the OpenAI Files API and why it is a game changer for handling data for our AI applications.
>
> **[0:09](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=9)** OpenAI's Files API is a tool that helps you upload, manage, and delete large data files for processing.
>
> **[0:17](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=17)** So with this, you can manage all your AI training data and even use them between multiple projects.
>
> **[0:24](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=24)** Now, why is this important?
>
> **[0:26](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=26)** Traditional APIs have limitations in data handling, especially with large data sets.
>
> **[0:31](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=31)** With the Files API, this issue is immediately resolved as you can upload and process bulk data efficiently and securely.
>
> **[0:40](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=40)** The versatility of the Files API allows you to use it for tasks like training custom AI models with large data sets, batch processing, and complex data analysis.
>
> **[0:50](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=50)** One of the key benefits of the Files API is efficiency.
>
> **[0:54](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=54)** You can upload large data sets once and use them multiple times, saving bandwidth and processing time.
>
> **[1:01](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=61)** Security is paramount in data handling.
>
> **[1:03](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=63)** Thus the Files API ensures that your data is processed without exposing it in multiple API requests, offering an added layer of security.
>
> **[1:13](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=73)** The Files API is also invaluable for advanced AI tasks like model training.
>
> **[1:18](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=78)** It helps to streamline the process and make it easier to work with complex data sets.
>
> **[1:23](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=83)** All these make the Files API powerful tool in the OpenAI suite.
>
> **[1:28](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=88)** Its ability to undo large data sets efficiently and securely makes it a must know for anyone working in the artificial intelligence space.

> [!info]- Semantic Content
>
> **Env Vars:** api (9)
> **CLI Commands:** make (2)
> **Code Keywords:** delete (1), this, (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Benefits of the Files API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=0)** - In this video, we'll be describing the benefits of using the OpenAI files API to manage your data sets.
>
> **[0:05](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=5)** And we'll also be looking at some use cases.
>
> **[0:08](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=8)** So one-by-one, let's first take a look at the benefits of using the OpenAI Files API.
>
> **[0:13](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=13)** First, is enhanced data handling.
>
> **[0:16](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=16)** The Files API excels in handling large data sets.
>
> **[0:20](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=20)** This allows it to be efficient for managing bulk data in machine learning operations.
>
> **[0:25](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=25)** Next, is improved security.
>
> **[0:27](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=27)** Data security is crucial when training models for AI applications.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=32)** The Files API ensures that data is uploaded and stored safely, minimizing the risk of exposure during processing.
>
> **[0:40](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=40)** Another key benefit of using the Files API is scalability and flexibility.
>
> **[0:45](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=45)** Whether it's a small or really huge data set, the Files API adapts to your needs, offering immense flexibility.
>
> **[0:53](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=53)** There is also the time and cost efficiency benefit.
>
> **[0:57](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=57)** By streamlining data processing using the Files API, you save valuable time and resources, and also your operational costs are significantly reduced.
>
> **[1:08](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=68)** The last benefit we'll look at is how using the Files API leads to enhanced productivity.
>
> **[1:15](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=75)** Managing and automating data processing using the Files API allows you and your team members to focus on more strategic tasks, rather than wasting time on routine data management tasks.
>
> **[1:27](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=87)** Now that we've seen the benefits of using the OpenAI Files API, let's take a look at some of its use cases.
>
> **[1:34](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=94)** First, is in training machine learning models.
>
> **[1:37](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=97)** With the Files API, we can undo large data sets for creating and fine tuning machine learning models.
>
> **[1:44](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=104)** Batch processing for analytics is another interesting use case.
>
> **[1:47](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=107)** We can leverage the API for efficient batch processing of data that we need for large scale data analytics.
>
> **[1:55](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=115)** We can also use the API to securely manage and process sensitive data for research or business insights, ensuring data privacy and security.
>
> **[2:05](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=125)** For historical data analysis, we can also utilize the Files API to process and analyze sensitive historical data sets.
>
> **[2:13](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=133)** This is useful in fields like market research or historical studies.
>
> **[2:18](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=138)** Finally on our list, we can use the Files API for automated content generation.
>
> **[2:23](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=143)** This can be achieved by applying the Files API to automate generation of content such as reports or articles where large data sets are used as input for AI driven content creation or content creation tools.
>
> **[2:37](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=157)** All that we have discussed in this video further shows why the OpenAI Files API is an invaluable tool to any individual or teams looking to manage their machine learning data sets.
>
> **[2:48](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=168)** But enough talk.
>
> **[2:50](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=170)** In the next chapter, we'll start demonstrating how you can use the Open AI Files API to manage your data sets and get all its efficiency, security, and cost saving benefits.

> [!info]- Semantic Content
>
> **Env Vars:** api (18)
> **Code Keywords:** let (2), case. (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)


### 3. 2. Using the Files API

#### Setting up your development environment
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=0)** - [Instructor] In this video, I'll be showing you how to get your development environment ready for using the OpenAI files API.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=7)** To demonstrate the use of the API we'll be making use of Node.js and also use OpenAI's Node.js SDK package from NPM.
>
> **[0:16](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=16)** However, you can follow along if you won't be using Node.js or if you're not familiar with Node.js.
>
> **[0:22](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=22)** The workflow is very similar for any language or SDK you choose to work with.
>
> **[0:28](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=28)** To get your development environment set up to follow along with the exercises in this course, three core things are required.
>
> **[0:35](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=35)** First, you need to have Node.js installed on your system.
>
> **[0:39](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=39)** This will enable you run the examples in Node.js and using the Node.js OpenAI SDK.
>
> **[0:45](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=45)** To install Node.js and also NPM, which is the package manager for Node.js, simply visit the Node.js website at [nodejs.org](https://nodejs.org).
>
> **[0:54](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=54)** Here you can download and install the appropriate Node.js runtime for your operating system.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=60)** Next, you will need an OpenAI API key.
>
> **[1:04](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=64)** To get this key, you first need to have an OpenAI platform account and use the trial credits or attach a card to your account to be charged as you use the API.
>
> **[1:13](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=73)** To get an API key, first log into your dashboard and on the side menu navigate to the API keys page.
>
> **[1:21](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=81)** Here you can create a new key by clicking the button with the label plus create new secret key.
>
> **[1:28](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=88)** Supply a name for your key, and click the create secret key button to create the key.
>
> **[1:33](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=93)** Once your key is created, you can then copy it for use later.
>
> **[1:37](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=97)** I've already created a key for this course, so I'm not going to be creating one right now.
>
> **[1:41](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=101)** To begin creating our project, let's create a new folder for the project.
>
> **[1:45](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=105)** You can create this folder however you want, but I'll be using the command line 'cause it's just so cool.
>
> **[1:50](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=110)** To create a new folder you say make DIR OpenAI files.
>
> **[1:58](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=118)** You can give this folder any name you want, but this is the name we're going to be using in this course.
>
> **[2:03](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=123)** Click enter to create the folder.
>
> **[2:05](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=125)** CD to go into the folder.
>
> **[2:09](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=129)** And the next thing we're going to do is to initialize this as a Node.js project.
>
> **[2:13](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=133)** To do that I'm going to be using the command NPM init -y.
>
> **[2:19](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=139)** We have added the -y flag to simply accept the default from the Node.js project initialization process.
>
> **[2:25](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=145)** So lets it enter.
>
> **[2:27](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=147)** With the project initialized the next step is to install the Node.js SDK for OpenAI.
>
> **[2:33](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=153)** This SDK can be found on the NPM website and it's the official SDK for working with the OpenAI API in Node.js projects.
>
> **[2:43](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=163)** To install the SDK run the following command in the root of the project, NPM install OpenAI.
>
> **[2:52](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=172)** And lets hit enter to install the package.
>
> **[2:57](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=177)** With the package installed, we can now work with the Node.js SDK for OpenAI to access the OpenAI API.
>
> **[3:04](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=184)** On our package will be installing is the Node.js package that will help us hold our API key in an environment variable.
>
> **[3:11](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=191)** This is the .ENV package.
>
> **[3:13](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=193)** We'll also be running an NPM command to install this package.
>
> **[3:17](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=197)** But first let me clear the screen.
>
> **[3:20](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=200)** Good.
>
> **[3:21](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=201)** And now to install the .ENV package, we say NPM install dotenv.
>
> **[3:29](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=209)** And it enter to trigger the installation.
>
> **[3:33](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=213)** With these two in place, we can now move into Visual Studio Code and start writing some code.
>
> **[3:38](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=218)** Here in VS Code we have our project opened, OpenAI files.
>
> **[3:42](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=222)** We have our Node.js folder that holds our models and we have our package.json and package lock.json files.
>
> **[3:48](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=228)** Now the first step we're going to be taking is to create a .ENV file that is going to hold our API key.
>
> **[3:54](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=234)** So at the root of the project, let's create a .ENV file.
>
> **[4:00](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=240)** In this file we're going to enter the name of the environment variable that will hold our API key.
>
> **[4:05](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=245)** We'll name this environment variable in all caps and call it OpenAI_API_KEY, and set its value to a string.
>
> **[4:19](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=259)** Within this string codes is where we're going to be placing our OpenAI API key.
>
> **[4:24](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=264)** So let's grab that and paste it here.
>
> **[4:28](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=268)** With the key now inserted, ensure that you save this file.
>
> **[4:31](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=271)** Do note that you have to ensure that you secure this key and make sure you do not mistakenly push it to a public repository like GitHub.
>
> **[4:39](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=279)** So this is a good time to add a Git ignore file.
>
> **[4:46](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=286)** And add .ENV that .ENV file as a file to be ignored.
>
> **[4:52](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=292)** With this project skeleton in place, we can now start working with the OpenAI files API.
>
> **[4:57](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=297)** In the next video, we'll be uploading our first file to our OpenAI account.

> [!info]- Semantic Content
>
> **Env Vars:** api (13), sdk (8), npm (7), env (6), dir (1)
> **CLI Commands:** node (18), npm (7), make (2), cd (1), git (1)
> **File Paths:** node.js (18), package.json (1), lock.json (1)
> **Prerequisites:** install (9), set up (1), you need to have (1), initialization (1)
> **Code Keywords:** let (4), public (1)
> **Tools:** command line (1), visual studio (1), vs code (1), github (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Cross-References:** in the next (1)

#### Uploading files
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=0)** - [Instructor] In this video, you'll be learning how to upload the files containing our datasets to openai using the OpenAI Files API.
>
> **[0:09](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=9)** For this purpose, I have added two files to our project, the assistant-queries.txt file, and the spanish-translated-sample-file.jsonl file.
>
> **[0:23](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=23)** First, let's look at the assistant-queries file.
>
> **[0:29](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=29)** Open it and pull this.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=32)** Yep, to the left.
>
> **[0:33](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=33)** Good.
>
> **[0:34](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=34)** Now, the assistant_queries.txt file contains a list of queries, or prompts to test an openai assistant's responses for the purpose it has been trained for.
>
> **[0:46](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=46)** Each line contains a query to which the assistant's response will be tested to determine the accuracy of its responses.
>
> **[0:54](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=54)** Next, let's take a look at the Spanish translated sample file.
>
> **[0:58](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=58)** This JSON-L file is a file used to train an openai model to learn how to translate prompts to Spanish.
>
> **[1:07](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=67)** If I collapse the files menu so that we can see this file very well, you can see that each line consists of a prompt and completion pair.
>
> **[1:16](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=76)** The prompt is in English, and the completion is in Spanish.
>
> **[1:22](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=82)** Each line consists of data to fine-tune the base model from openai to be able to translate English words into Spanish.
>
> **[1:30](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=90)** We'll be uploading these two files to openai using the files API.
>
> **[1:36](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=96)** So, let's begin.
>
> **[1:38](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=98)** First, let me close these files.
>
> **[1:41](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=101)** And the first piece of code we'll be writing is a configuration file for the openai API.
>
> **[1:46](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=106)** This configuration file will allow us to use the configuration across different files without having to repeat the whole process.
>
> **[1:52](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=112)** So, at the root of the project, let's create a new file with the name openaiConfig.js.
>
> **[2:04](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=124)** This file will be responsible for importing the openai library and configuring it with our API key.
>
> **[2:09](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=129)** So first, let's start by importing the openai library.
>
> **[2:13](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=133)** Say import openai from openai.
>
> **[2:21](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=141)** Next, to work with our environment variable, let's also bring in the .env library.
>
> **[2:27](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=147)** Import.
>
> **[2:30](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=150)** Good.
>
> **[2:32](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=152)** To have access to our environment variables, we need to call the config function on the .env library.
>
> **[2:36](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=156)** So, let's go ahead and do that.
>
> **[2:39](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=159)** Say.env and we call the config function.
>
> **[2:44](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=164)** Now we have access to all the environment variables defined in the .env file.
>
> **[2:49](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=169)** The next step is to set up our configuration of the openai Node.js library that allows us to work seamlessly with the files API.
>
> **[2:56](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=176)** To do this, we need to create a new variable called openaiConfig and set it to a new instance of the openai object.
>
> **[3:09](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=189)** Next, we need to pass a configuration object inside this new instance so that we can give it our API key.
>
> **[3:16](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=196)** Our API key can be set in this configuration object by using the API key property.
>
> **[3:23](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=203)** The API key property is a standard property in the configuration object, and its value is the API key we obtained from our openai dashboard.
>
> **[3:31](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=211)** We already have this key set in our environment variable, so let's set this property to the value of our API key in the environment variable.
>
> **[3:46](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=226)** Perfect.
>
> **[3:47](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=227)** With all this set up, let us export openai config from our file so that we can use it in other files.
>
> **[3:56](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=236)** Awesome.
>
> **[3:57](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=237)** Now with these in place, we can now start uploading our files to openai.
>
> **[4:01](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=241)** To do that, let's create a new file to undo our file uploads.
>
> **[4:05](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=245)** At the root of the project, create the file upload_files, upload_files.js.
>
> **[4:16](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=256)** Inside this file, we're going to be uploading any file that we need to upload to our openai account using the openai Files API.
>
> **[4:24](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=264)** Inside this file, let's begin by bringing in our openai configuration model.
>
> **[4:29](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=269)** To do that, we say import.
>
> **[4:32](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=272)** Let's call the import openai.
>
> **[4:36](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=276)** Let's say from and target our openaiConfig.
>
> **[4:44](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=284)** Config start with a capital C.
>
> **[4:46](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=286)** openaiConfig.js file.
>
> **[4:49](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=289)** Because we will be uploading files from our local system, we will also need the Node.js FS module to read our files.
>
> **[4:56](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=296)** So, let's bring that in also.
>
> **[4:59](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=299)** Say import fs from fs.
>
> **[5:05](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=305)** With all these libraries in place, now let's upload our files.
>
> **[5:08](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=308)** The first file we'll upload is the text file that is used to test an openai assistance model.
>
> **[5:14](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=314)** That is our assistant_queries.txt file.
>
> **[5:18](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=318)** To begin, first let's create an async function called main.
>
> **[5:22](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=322)** This is the function that we'll run when we run our file.
>
> **[5:29](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=329)** All the code that is going to be used to upload our files is going to be written inside this main function.
>
> **[5:35](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=335)** Inside the function, let's create a variable called file_upload_response.
>
> **[5:46](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=346)** This variable will then be set to the value of our API call.
>
> **[5:50](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=350)** We start with the await keyword because we are going to be making an asynchronous request.
>
> **[5:56](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=356)** Next, we'll call our openai library and call the files object on the library.
>
> **[6:03](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=363)** The files object is where all the functions and properties for the openai files API reside.
>
> **[6:10](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=370)** To upload a file, we then call the create method on this object and open its braces.
>
> **[6:16](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=376)** The create method on the files object takes in a request object.
>
> **[6:20](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=380)** The request object will take in two main parameters.
>
> **[6:24](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=384)** First is the file we need to upload.
>
> **[6:26](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=386)** And that will be set using a file property.
>
> **[6:30](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=390)** This property will be set to the read stream of the file that we want to upload.
>
> **[6:35](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=395)** So, let's do that using the FS module that we imported from the Node.js standard library.
>
> **[6:43](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=403)** So, we call the create read stream method on the FS module and pass it the file we want to upload.
>
> **[6:50](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=410)** This file is going to be our assistant_queries.txt file.
>
> **[7:01](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=421)** Now that we have our file logged in, the next parameter that is to be set is called the purpose property.
>
> **[7:07](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=427)** But first, let me collapse the files window so that we can have more room.
>
> **[7:12](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=432)** Good.
>
> **[7:13](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=433)** Like I earlier said, the next parameter we're going to be setting is the purpose property.
>
> **[7:19](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=439)** This property defines the function of the file that we are about to upload and also affects the format of the file we are uploading.
>
> **[7:27](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=447)** For example, if you are uploading for the purpose of training, or testing an openai assistant, this parameter can accept both text files and JSON-L files.
>
> **[7:37](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=457)** However, if the purpose is to fine-tune a model, which we are going to be seeing later, this parameter only accepts JSON-L files at the moment.
>
> **[7:47](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=467)** This current upload is for the assistant's purpose.
>
> **[7:49](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=469)** So, let's go ahead and set the value to a string, and that string is going to be assistants.
>
> **[7:56](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=476)** The purpose property comes with a set of standard values, which are assistants, which we're currently using, and fine-tune, which we're going to be using much later.
>
> **[8:04](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=484)** With the request set up in place, let us log the response to our console.
>
> **[8:09](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=489)** To do that, we say console.log file_upload.response.
>
> **[8:20](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=500)** Finally, let's make sure that we run this function by calling it after the definition.
>
> **[8:25](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=505)** So, come down here and call the main function.
>
> **[8:29](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=509)** Perfect.
>
> **[8:30](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=510)** Now, before we run this code, there's one little change we need to do, and that will be in our package.json file.
>
> **[8:37](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=517)** So, let's go into package.json.
>
> **[8:39](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=519)** Currently, our main file is set to this index.js file, which doesn't exist in our project.
>
> **[8:45](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=525)** So, let's change that to upload_files.js.
>
> **[8:51](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=531)** We'll also be adding a type property and be setting it to model.
>
> **[9:01](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=541)** Good.
>
> **[9:02](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=542)** This is to ensure that all our imports work and our files run correctly.
>
> **[9:07](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=547)** So, enough coding.
>
> **[9:08](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=548)** Let's take this out for a run.
>
> **[9:11](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=551)** Now back at the terminal at the root of the project.
>
> **[9:14](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=554)** To run the code that we just wrote that is going to upload our assistant_queries.txt file, let's run the command, node upload_files.js.
>
> **[9:26](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=566)** To upload our file, let's hit enter, wait for the request, and boom.
>
> **[9:33](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=573)** Yup, our file has been successfully uploaded.
>
> **[9:36](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=576)** As you can see, the response returns an object describing the file that we just uploaded.
>
> **[9:41](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=581)** Here you can see the actual file name, which is assistant_queries.txt.
>
> **[9:47](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=587)** There is a file ID, which we're going to be making use of later.
>
> **[9:50](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=590)** And other useful information like the size in bytes, status, and the purpose that we set.
>
> **[9:56](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=596)** Do take note of this file ID, as we'll be using it to retrieve our file in a coming video.
>
> **[10:02](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=602)** But in this video, we have successfully uploaded a file to our openai account.
>
> **[10:06](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=606)** Aside this response as a confirmation that our file has been uploaded, you can also view your files on your openai dashboard.
>
> **[10:13](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=613)** Here on the openai dashboard, if we click the files link on the side menu, you see a page that loads up and now we have our assistant_queries.txt file already uploaded.
>
> **[10:25](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=625)** You can click this file to see more details about the file, which is displayed here on the right-hand side.
>
> **[10:31](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=631)** This file is now available on our account and can be accessed across different projects on our openai account.
>
> **[10:38](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=638)** In the next video, we will learn how we can query this single file from our account using the openai files API.

> [!info]- Semantic Content
>
> **Code Keywords:** let (28), function (9), module (3), import. (2), pass (2)
> **File Paths:** assistant_queries.txt (6), node.js (3), upload_files.js (3), openaiconfig.js (2), package.json (2)
> **Env Vars:** api (15), json (3)
> **Code Identifiers:** assistant_queries (6), openaiconfig (4), upload_files (4), file_upload_response (1), file_upload (1)
> **CLI Commands:** node (4), make (1)
> **Definitions:** is a  (4), is called (1)
> **Prerequisites:** set up (3)
> **Cross-References:** in the next (1)

#### Query a file
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=0)** - [Instructor] Now that we have uploaded the file, let's see how we can query the file using the file's API.
>
> **[0:05](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=5)** From our previous upload, a file ID was returned in our file upload response.
>
> **[0:11](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=11)** In this video, we'll be using that file ID to retrieve the file information.
>
> **[0:16](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=16)** Now, just in case you have cleared your console and you can no longer see your file ID, you can also retrieve your file ID from your OpenAI dashboard.
>
> **[0:24](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=24)** Here on the Open AI dashboard, to get your file ID, make sure that you have selected your file.
>
> **[0:29](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=29)** Once you selected it, your file information displays here on the right and you can hover on your file ID and click to copy it.
>
> **[0:36](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=36)** Now we have our file ID to use in our code.
>
> **[0:39](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=39)** So let's go back to VS Code.
>
> **[0:41](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=41)** To begin writing the code to help us retrieve our file, let's start by creating a file with the name retrieve_file.js.
>
> **[0:48](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=48)** Go to side menu, retrieve_file.js.
>
> **[0:57](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=57)** Inside this file, we'll be importing our OpenAI configuration and creating our main function that will be called when we run the file.
>
> **[1:05](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=65)** So let's go ahead and do that.
>
> **[1:11](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=71)** With our scaffold in place, we can now add our file retrieving function within this main function.
>
> **[1:18](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=78)** To begin, let's create a variable for the request and this variable will be set to our API request to be made using the OpenAI instance.
>
> **[1:28](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=88)** As you can see, we start the request with our await keyword as we're making an asynchronous request and we will then call the files object on the OpenAI instance.
>
> **[1:39](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=99)** To retrieve a file, you call the retrieve function on the file's object, so say .retrieve.
>
> **[1:47](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=107)** The retrieve function takes a single argument, which will be the ID of the file you want to retrieve.
>
> **[1:52](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=112)** Remember the file ID from the file upload request?
>
> **[1:55](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=115)** Yup, that is what goes in here.
>
> **[1:58](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=118)** So within the retrieve braces, inside the string, let us paste in our file ID.
>
> **[2:04](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=124)** Perfect.
>
> **[2:04](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=124)** I'm going to collapse the files window so that we can have more room to see our code.
>
> **[2:09](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=129)** And finally, let us log the retrieve file to our console.
>
> **[2:15](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=135)** Now that we have all our code in place, including the call to the main function, let's run this code in our terminal.
>
> **[2:22](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=142)** Back in the terminal, we run our code by typing the command node retrieve_file.js and now let's hit Enter to run the code.
>
> **[2:34](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=154)** Once the API call completes, the response returns what is known as a file object, which represents a document that has been uploaded to your OpenAI account.
>
> **[2:44](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=164)** Similar to what we saw when we uploaded our file, this object contains properties describing the file that was uploaded.
>
> **[2:52](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=172)** The object property describes the object type, which in the case of the file's API is always the value file.
>
> **[3:00](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=180)** The ID property is the file's unique identifier, which can be referenced in API endpoints.
>
> **[3:08](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=188)** The purpose property describes the intended purpose of the file, while the filename property is the name of the uploaded file, which is the same as its name on your local machine.
>
> **[3:20](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=200)** The bytes property tells you the size of the file in bytes.
>
> **[3:25](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=205)** The created_at property is the Unix timestamp in seconds for when the file was created.
>
> **[3:31](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=211)** And lastly, the status and the status_details properties represent the current status of the file and details on why a fine tuning training file failed validation respectively.
>
> **[3:43](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=223)** According to the OpenAI documentation, the last two properties that is status and status_details will soon be deprecated.
>
> **[3:51](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=231)** In the next video, we'll demonstrate how we can list all the files that have been uploaded to our OpenAI account using the files API.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (6), await (1), finally, (1), type, (1)
> **Code Identifiers:** retrieve_file (3), status_details (2), created_at (1)
> **Env Vars:** api (6)
> **File Paths:** retrieve_file.js (3)
> **Tools:** terminal (2), vs code (1)
> **CLI Commands:** make (1), node (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (1)

#### Listing files
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=0)** - [Instructor] In this video, we'll demonstrate how to list all the files we have uploaded to our OpenAI account.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=7)** So far in this course we have only uploaded one file, so to make things more interesting, let's upload another file.
>
> **[0:15](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=15)** This time we'll be uploading our JSONL file that is meant for training a base model using the fine-tuning API.
>
> **[0:22](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=22)** So let's go back to our upload_files.js file to upload our second file.
>
> **[0:27](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=27)** Here, we only need to change two items in the parameters passed into our request object.
>
> **[0:33](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=33)** First, is the file we are referencing for upload.
>
> **[0:36](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=36)** We're currently referencing the assistant_queries.txt file.
>
> **[0:41](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=41)** So let's change this to the spanish_translated_sample_file.jsonl file.
>
> **[0:49](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=49)** First, let's collapse this, and we'll say spanish_translated_sample_file.jsonl,
>
> **[1:02](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=62)** which is the name of our file, meant for training a base model using the fine-tuning API.
>
> **[1:08](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=68)** The next thing to change is our upload purpose.
>
> **[1:10](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=70)** Currently we're uploading for the purpose of assistants, but this file is for a fine tuning operation, so we'll be changing the purpose from assistants to fine-tune, and we are done.
>
> **[1:24](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=84)** Let's go ahead and run this code to upload our JSONL file.
>
> **[1:28](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=88)** Back in our terminal, let's run the command node upload_files.js to run the code and upload our training file.
>
> **[1:38](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=98)** Press Enter, and our file is successfully uploaded.
>
> **[1:42](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=102)** From the file object returned, we can see the details and confirm that this is indeed the JSONL file.
>
> **[1:48](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=108)** Looking at the file name returned, we now have two files uploaded, so let's go ahead and list our files.
>
> **[1:55](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=115)** Back in VS Code, let's create a new file with the name list_files.js.
>
> **[2:04](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=124)** Inside this file, let us once again write our configuration import and main function definition.
>
> **[2:13](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=133)** With our base scaffold once again in place, we can now write the code to list our files.
>
> **[2:18](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=138)** Let's start by creating a variable named uploadedFiles and set it to our request.
>
> **[2:26](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=146)** On the files object, to list our files, we will need to call the list function.
>
> **[2:33](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=153)** The list function according to its name, lists all the file that we have uploaded to our OpenAI account.
>
> **[2:39](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=159)** Now let's log the files returned to our console.
>
> **[2:44](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=164)** Once the file is saved, and make sure you're calling the main function, we can now head over to our terminal to run this piece of code.
>
> **[2:52](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=172)** Now back in our terminal, let's list our files by running the code node list_files.js.
>
> **[3:01](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=181)** With that in place, let's hit Enter and wait for the API request to be complete.
>
> **[3:06](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=186)** Oh my, as we can see, this returns a complete FilesObjectPage.
>
> **[3:12](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=192)** So much data and metadata in here, but the property we're most interested in is the data property.
>
> **[3:18](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=198)** So let's scroll down to see that.
>
> **[3:21](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=201)** And yep, we have it right here.
>
> **[3:24](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=204)** The data property is a collection of all our file objects.
>
> **[3:28](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=208)** This is returned as an array of file objects, and as we can see, we have the two files that we have uploaded, the fine tuning file and the assistants file.
>
> **[3:38](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=218)** These are all the files returned by the list function on the files object.
>
> **[3:41](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=221)** The list function can also take an optional object where we can filter the files by the purpose.
>
> **[3:47](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=227)** Let's check this out.
>
> **[3:49](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=229)** So currently we have uploaded two files, one for the assistants and one for fine tuning.
>
> **[3:55](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=235)** So let's see how we can return only the files that have been uploaded for the purpose of assistants.
>
> **[4:00](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=240)** To do that, we pass an object into our list function, we set the purpose property, and we set this to assistants.
>
> **[4:11](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=251)** Good. Now let's save the file and run it in our terminal.
>
> **[4:15](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=255)** Back in the terminal.
>
> **[4:17](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=257)** Once again, let's run node list_files.
>
> **[4:21](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=261)** Press Enter, and observe what is returned.
>
> **[4:24](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=264)** Now we see the data property returned, and if you look closely, you'll see that only the files, or the only file that we've uploaded for the assistants, is returned.
>
> **[4:34](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=274)** This no longer returns the file that we uploaded for fine tuning purposes.
>
> **[4:38](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=278)** How cool is that?
>
> **[4:39](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=279)** Now that we have demonstrated how to upload files, query a file, and list files, in the next video, we will learn how to delete a file.
>
> **[4:48](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=288)** This is very important for cleanup work or removing any wrong or corrupted file.
>
> **[4:53](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=293)** See you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), function (7), this, (1), pass (1), delete (1)
> **Code Identifiers:** list_files (3), upload_files (2), spanish_translated_sample_file (2), assistant_queries (1), uploadedfiles (1)
> **Env Vars:** jsonl (3), api (3)
> **Tools:** terminal (5), vs code (1)
> **File Paths:** upload_files.js (2), list_files.js (2), assistant_queries.txt (1)
> **CLI Commands:** node (3), make (2)
> **Cross-References:** in the next (2), go back to (1)
> **UI Navigation:** scroll down (1)

#### Deleting files
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=0)** - [Instructor] Now that we have uploaded and also retrieved our file data using the API, let's demonstrate how we can delete files that we no longer need using the API.
>
> **[0:09](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=9)** Right now we currently have two files uploaded to our account, the Spanish translated file and the assistant queries file.
>
> **[0:17](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=17)** For this demo we're going to be uploading a new file just for the purpose of deleting it.
>
> **[0:22](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=22)** Back in VS Code I have added a new file with the name testfile.txt.
>
> **[0:27](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=27)** This file simply contains over 50,000 lines of the word test file content.
>
> **[0:34](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=34)** We're going to be uploading this file, then later delete it using the OpenAI files API.
>
> **[0:39](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=39)** To upload the file, let's go into our upload underscore file.js file.
>
> **[0:45](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=45)** Let's pull this to the side and then we'll need to change the file parameter and the purpose parameter.
>
> **[0:51](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=51)** So let's do that.
>
> **[0:53](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=53)** First, let's change this file, the file we're referencing to say test file.txt and we'll change this back to assistance.
>
> **[1:08](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=68)** We can now run this file in order to upload our test file.
>
> **[1:12](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=72)** Back in the terminal, let's run our upload file.
>
> **[1:17](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=77)** Our upload response is back. And as you can see, we have successfully uploaded the test file.txt.
>
> **[1:23](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=83)** Back in our dashboard, if we refresh the page, we can now see test file.txt in our list of uploaded files.
>
> **[1:32](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=92)** Now let's go back to VS Code to see how we can delete this file using the OpenAI files API.
>
> **[1:37](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=97)** Back in VS code, let's go back to our test file.txt.
>
> **[1:41](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=101)** So let's assume that we uploaded this file by mistake, or we later realize that we no longer need it, or the file was in the wrong format, or just contains the wrong content.
>
> **[1:51](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=111)** The file's API gives us the ability to delete the file, to write the code that is going to make use of the API to delete this file, let's create a new file and let's call it delete underscore file.js.
>
> **[2:06](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=126)** Inside the file, let's begin by creating our usual scaffold, which involves importing the OpenAI configuration and adding the main function.
>
> **[2:18](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=138)** With our scaffold in place, now let's write the code that helps delete our file.
>
> **[2:23](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=143)** We start by creating a variable called deleted file set to our request, which is in place.
>
> **[2:31](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=151)** We then call the del function on our files object, the del function, which will help us delete our file, takes in one argument, which is the ID of the file we want to delete.
>
> **[2:44](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=164)** So let's get the ID of the file from the previous upload.
>
> **[2:48](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=168)** We can either copy that from our terminal or from the dashboard.
>
> **[2:52](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=172)** Just going to copy it from the dashboard.
>
> **[2:53](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=173)** Here in the dashboard, let's click our file and over on the file ID and click to copy it, now back in VS Code.
>
> **[3:02](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=182)** First I'll put this aside, then let's open a string and paste our file ID.
>
> **[3:09](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=189)** With this in place, let us log our deleted file information to the console.
>
> **[3:18](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=198)** Perfect. We can now run this file and see what happens when we delete a file.
>
> **[3:23](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=203)** Back in the terminal.
>
> **[3:24](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=204)** First I'm going to clear the screen and we're going to run node delete file.js let's hit enter to delete the test file.
>
> **[3:37](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=217)** Once the API request is complete, it returns with a file deletion object with a file ID and a status confirming that the file has indeed been deleted.
>
> **[3:48](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=228)** To further confirm that the file has been deleted, we can come to our OpenAI dashboard and refresh the page.
>
> **[3:55](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=235)** Now as you can see, we no longer have our test file.txt file.
>
> **[3:59](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=239)** The file has been removed from our OpenAI account, so we have successfully deleted the file from our account using the OpenAI files API.
>
> **[4:08](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=248)** And now we know how to upload a file, retrieve a file, list all files or a subset of files, and also delete a file from our OpenAI account.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), delete (13), function (3)
> **File Paths:** file.txt (5), file.js (3), testfile.txt (1)
> **Env Vars:** api (8)
> **Tools:** vs code (4), terminal (3)
> **CLI Commands:** make (1), node (1)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)


### 4. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-working-with-files/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/next-steps?u=76281980&t=0)** - [Instructor] Congratulations, you have successfully completed this course on working with the OpenAI files API.
>
> **[0:06](https://www.linkedin.com/learning/openai-api-working-with-files/next-steps?u=76281980&t=6)** This course is a part of a full series on different parts of the OpenAI API.
>
> **[0:10](https://www.linkedin.com/learning/openai-api-working-with-files/next-steps?u=76281980&t=10)** So I'll advise that you check out other OpenAI courses in the series to get a complete knowledge of all the offerings contained in the OpenAI API Suite of features.
>
> **[0:22](https://www.linkedin.com/learning/openai-api-working-with-files/next-steps?u=76281980&t=22)** Two other courses that I'll be recommending are Morten Rand-Hendriksen's courses on "Fine-Tuning Your Own GPT Model" and "Building Assistants" using the OpenAI API.
>
> **[0:33](https://www.linkedin.com/learning/openai-api-working-with-files/next-steps?u=76281980&t=33)** Both courses are available here on the LinkedIn Learning Library.
>
> **[0:37](https://www.linkedin.com/learning/openai-api-working-with-files/next-steps?u=76281980&t=37)** These courses will further expand your knowledge on how you can apply what you have gained in this course to building AI tools for real world use cases, and also trading AI models to suit your use case.
>
> **[0:49](https://www.linkedin.com/learning/openai-api-working-with-files/next-steps?u=76281980&t=49)** I am also open to answering all your questions regarding this course, so feel free to follow me and shoot me a message on my socials.
>
> **[0:57](https://www.linkedin.com/learning/openai-api-working-with-files/next-steps?u=76281980&t=57)** Thanks for joining me on this incredible journey, learning about the OpenAI Files API, and I hope you add a great time as I did making this course.
>
> **[1:06](https://www.linkedin.com/learning/openai-api-working-with-files/next-steps?u=76281980&t=66)** It's now time to go build some awesome stuff. Happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), gpt (1)
> **CLI Commands:** go build (1)
> **Code Keywords:** case. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Fikayo Adepoju]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/openai-api-working-with-files-4556031)

## Skills Covered

- OpenAI API
- API Development
- OpenAI Products
- Artificial Intelligence (AI)

## Path Context

### In [[Develop Your Skills with the OpenAI API]]
← [[Openai Api Introduction]] | **2 of 10** | [[OpenAI API- Function Calling (2023)]] →

## Appears In

- [[Develop Your Skills with the OpenAI API]]

## Related Courses

_Courses sharing skills:_

- [[Openai Api Introduction]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Vision]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API

---

[↑ Back to top](#)