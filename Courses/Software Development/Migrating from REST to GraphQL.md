---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: migrating-from-rest-to-graphql-23466102
url: "https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102"
duration_minutes: 64
duration: 1h 4m
level: Advanced
updated: 2/29/2024
learners: 7199
skills:
  - API Management
  - GraphQL
  - Representational State Transfer (REST)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGPRFMsUkMSOQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709073643074?e=2147483647&amp;v=beta&amp;t=EzvLMf_VfMzWbXeB9ERVcN-_yl1a9EFc5QDzsZ4DRdM"
linkedin_topic: Software Development
learning_paths:
  - '[[Stay Ahead in GraphQL]]'
prev_courses:
  - '[[GraphQL Essential Training]]'
path_nav: '[{"path":"Stay Ahead in GraphQL","position":3,"total":3,"prev":"GraphQL Essential Training","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/api-management
  - skill/graphql
  - skill/representational-state-transfer-rest
status: not-started
created: 2026-04-21
---

![Migrating from REST to GraphQL](https://media.licdn.com/dms/image/v2/D560DAQGPRFMsUkMSOQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709073643074?e=2147483647&amp;v=beta&amp;t=EzvLMf_VfMzWbXeB9ERVcN-_yl1a9EFc5QDzsZ4DRdM)

# Migrating from REST to GraphQL

> Are you a back-end developer wondering when to start using GraphQL or how to migrate your current REST API to GraphQL? In this course, GraphQL expert Emmanuel Henri guides you through the process step-by-step, explaining when and why you should make the switch to GraphQL, and how to set it up. Emmanuel covers the basics of adding new data, common queries and their syntax, arguments, fragments, and

> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102) | 1h 4m | Advanced | 7K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- API Management
- GraphQL
- Representational State Transfer (REST)

## Table of Contents

### Introduction

#### Replace REST with GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/replace-rest-with-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/replace-rest-with-graphql?u=76281980&t=0)** - [Emmanuel] GraphQL has evolved into a nearly perfect tool to efficiently query multiple databases.
>
> **[0:06](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/replace-rest-with-graphql?u=76281980&t=6)** For the backend developer, you might be wondering, this course can be taken as a first step if you're wanting to learn how to migrate your RESt API over to GraphQL.
>
> **[0:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/replace-rest-with-graphql?u=76281980&t=16)** First, we'll take a look at when and why you should be moving to GraphQL.
>
> **[0:22](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/replace-rest-with-graphql?u=76281980&t=22)** Then we'll spend some time going over the basics of adding new data to your GraphQL server.
>
> **[0:27](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/replace-rest-with-graphql?u=76281980&t=27)** Next, we'll focus on the most common queries and their syntax, along with arguments, fragments, and aliases.
>
> **[0:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/replace-rest-with-graphql?u=76281980&t=36)** And finally, we'll finalize our typical backend operations with how to delete and update your data in a GraphQL environment.
>
> **[0:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/replace-rest-with-graphql?u=76281980&t=44)** So if you're ready to move your REST API while learning all about GraphQL, open up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), delete (1), let (1)
> **Env Vars:** api (2), rest (1)
> **Speakers:** - [emmanuel] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-you-should-know?u=76281980&t=0)** - [Instructor] If you have some experience with GraphQL, or taking a basics course on it, this course will be easy for you, and you might want to skip some of the initial setup videos.
>
> **[0:10](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-you-should-know?u=76281980&t=10)** But if you've never done GraphQL, this course is also a good fit, as we'll cover some of the basics before we move on to migrating graphs to GraphQL.
>
> **[0:18](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-you-should-know?u=76281980&t=18)** In any case, if you get lost in the weeds with the terms used in this course, feel free to take my Essentials course on GraphQL, and come back to this one after.
>
> **[0:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-you-should-know?u=76281980&t=28)** Although I highly recommend having a good foundation in NodeJS, JavaScript, and rest APIs, as we spend most of this course leveraging these concepts, and I'm not going through the basics of these items.
>
> **[0:42](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-you-should-know?u=76281980&t=42)** You will get lost if you don't have enough experience in these areas.
>
> **[0:46](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-you-should-know?u=76281980&t=46)** GraphQL can be done in Mac, Windows, or Linux, so feel free to use whichever operating system you prefer.
>
> **[0:52](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-you-should-know?u=76281980&t=52)** Also, I'll be using visuals to do code as my editor, but feel free to use whichever one you desire.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 1. First steps

#### Why use GraphQL for REST
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=0)** - [Host] GraphQL has a lot going for it, but I'll focus on the main advantages of moving your rest API to GraphQL.
>
> **[0:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=7)** First of all, you get types which guarantees that the data you get will be of the type expected and prevents many of the common errors with rest.
>
> **[0:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=16)** So if that's been an annoyance for you, you're a good candidate.
>
> **[0:20](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=20)** Also, when you have multiple databases or even different databases serving the same application, GraphQL is a much better approach to this disjointed architecture as it serves a single point to do all your queries versus multiple separate entities.
>
> **[0:38](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=38)** The other advantages of going to GraphQL is the flexibility of the queries.
>
> **[0:42](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=42)** You can query for a very specific type of data, say only one property of the query, like only the first name, and not all the properties.
>
> **[0:51](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=51)** An object may return when you query a list of contacts, for example.
>
> **[0:55](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=55)** So just these small points may already prove to you GraphQL is a much better approach than a simple rest API.
>
> **[1:02](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=62)** However, GraphQL isn't the best solution in all cases.
>
> **[1:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=67)** If you're building a small application or API, REST could be a much better approach.
>
> **[1:12](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=72)** Consider the cost of developing the GraphQL tool versus the value it may provide.
>
> **[1:17](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=77)** If you're going to scale an application beyond the simple queries or already have a big implementation, then yes, GraphQL may make sense.
>
> **[1:27](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=87)** My advice to you is start small with REST.
>
> **[1:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=90)** And as you'll see in this course, implementing GraphQL isn't that big of a deal.
>
> **[1:35](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/why-use-graphql-for-rest?u=76281980&t=95)** And when you're ready, go for it.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), rest (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [host] (1)

#### REST project introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=0)** - [Instructor] We'll now take a look at the project we'll be migrating to GraphQL, one that I have built in another one of my courses where we create a full node express API.
>
> **[0:10](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=10)** So let's take a look at it.
>
> **[0:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=11)** So let me first cover some of the requirements that you'll need to actually run the project.
>
> **[0:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=16)** The first thing that you'll need is to make sure that you run MongoDB on your system.
>
> **[0:21](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=21)** So whatever is your operating system, what you need to do is, go to the website for MongoDB.
>
> **[0:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=28)** And then what you need to do is, go into the resources, you can either go to start with guides or what I usually do to go a lot faster, what I do is MongoDB, like so, download, and then I go to the community server download.
>
> **[0:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=47)** I go here, select packages, and then you select the operating system that you're on.
>
> **[0:56](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=56)** So in this case, I'm on macOS.
>
> **[1:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=60)** But you can go here and select whatever system you're on, Windows, Linux, or macOS, and then you install it.
>
> **[1:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=71)** So you can follow these instructions or go into the community server here or make sure you follow all the instructions.
>
> **[1:19](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=79)** There's also another way to install it through Homebrew, which is actually faster.
>
> **[1:25](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=85)** Follow whatever process.
>
> **[1:26](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=86)** You can research this on Google, so how to install MongoDB, but you need to make sure you're running MongoDB as a service inside of your system before you actually go to the next step.
>
> **[1:38](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=98)** Once you've done with that, what you can do is, close this, and go into the exercise files.
>
> **[1:43](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=103)** In the resources folder here, you have the project that we're going to convert into a GraphQL server.
>
> **[1:51](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=111)** So what I would do is, copy all the files that you have in this folder here into a new folder.
>
> **[1:57](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=117)** So I'm going to do this, create a new folder, and then I'm going to call this whatever it is.
>
> **[2:02](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=122)** So in this case, maybe API or project, like so.
>
> **[2:08](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=128)** And what I'm going to do is, copy all the files here from the exercise files and then copy them inside of my project here, like so.
>
> **[2:17](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=137)** So make sure you also have the hidden file here.
>
> **[2:20](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=140)** So usually babelrc files are hidden.
>
> **[2:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=144)** So if your system is not showing hidden files, you're not going to see this file.
>
> **[2:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=148)** And once you run the project, it's not going to run properly.
>
> **[2:31](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=151)** So you want to make sure that you first see the hinted files inside of your system.
>
> **[2:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=156)** There's a shortcut on macOS to actually do this.
>
> **[2:39](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=159)** I believe it's shift command dot, let's see, yeah.
>
> **[2:43](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=163)** Shift command dot actually show or on shows hinted files.
>
> **[2:48](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=168)** I'm not familiar with the Windows commands.
>
> **[2:50](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=170)** You can research this on Google as well.
>
> **[2:53](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=173)** So as soon as you see this file, you're good to go.
>
> **[2:56](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=176)** So what I'm going to do next is, load this into my visual studio code here, which is the editor that I use for all my projects.
>
> **[3:06](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=186)** Going to bring up the terminal, like so, new terminal.
>
> **[3:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=191)** And the first thing I'm going to do is, install all the dependencies by doing npm i, or you can do install, whichever way you want to do it.
>
> **[3:23](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=203)** And once everything is installed, you can do npm start, which will start the project.
>
> **[3:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=208)** So if you go into the package.json file here, you'll see that the start script, we'll actually start nodemon with the index file here and run babel node, which is why you need to see the babelrc file.
>
> **[3:45](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=225)** Otherwise, this is not going to run properly.
>
> **[3:48](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=228)** Once you see that your server is running on port 3000, you can actually check it if you want.
>
> **[3:53](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=233)** So I'm going to show a new window and then local host.
>
> **[3:58](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=238)** And if you see node and express servers running on port 3000, that means that everything is running properly and you should be good to go.
>
> **[4:06](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=246)** Alright, so this is the actual project.
>
> **[4:09](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/rest-project-introduction?u=76281980&t=249)** Let's move on.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), node (3), npm (2)
> **Code Keywords:** let (4), case, (2), this, (2), this. (1)
> **Prerequisites:** install (5), you'll need (2)
> **UI Navigation:** go to (4), select the (1)
> **Code Identifiers:** macos (3)
> **Tools:** terminal (2), visual studio (1)
> **Ports:** port 3000 (2)
> **Env Vars:** api (2)

#### Set up GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=0)** - [Instructor] So let's go ahead and set up GraphQL inside of our example application.
>
> **[0:05](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=5)** So if we look back at our previous video, one of the things that I recommended to do as quickly as possible is to install MongoDB.
>
> **[0:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=15)** And I found a quick link here that can actually show you exactly which installation you need to do based on the operating system.
>
> **[0:22](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=22)** So if you go to this link here, [mongodb.com/docs/manual/administration/install-community](https://mongodb.com/docs/manual/administration/install-community),
>
> **[0:33](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=33)** it's going to give you for each of these operating systems the proper steps to actually install MongoDB.
>
> **[0:40](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=40)** And also, if you want to use Docker, you have an installation on Docker.
>
> **[0:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=44)** But the one thing that I keep repeating and I mentioned quite a few times in the last video, make sure that MongoDB runs as a service in the background on your operating system.
>
> **[0:56](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=56)** Otherwise, whatever comes next is not going to work.
>
> **[0:59](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=59)** All right, so enough on that.
>
> **[1:01](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=61)** Now the next thing we need to do is install the dependencies that we need for GraphQL.
>
> **[1:08](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=68)** So I'm going to go inside the package.json file here first.
>
> **[1:13](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=73)** I'm just going to close this for screen estate, like so.
>
> **[1:17](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=77)** Close this here and we're going to remove "body-parser" here.
>
> **[1:23](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=83)** So the quickest way to do this is to uninstall it.
>
> **[1:26](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=86)** So you also remove it from the package log.json.
>
> **[1:31](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=91)** So let's go and do npm uninstall body-parser and it's going to uninstall it from your dependencies here.
>
> **[1:42](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=102)** And then what we need to do is install a few things to move along with GraphQL.
>
> **[1:48](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=108)** So I will install, first of all graphql and then there's a package with Express that has GraphQL, which simplifies the coding for whenever you do Node Express servers with GraphQL.
>
> **[2:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=120)** And those are the dependencies that we need.
>
> **[2:03](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=123)** So let's install them.
>
> **[2:05](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=125)** Now we have them here so we can close this.
>
> **[2:08](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=128)** I will close this.
>
> **[2:09](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=129)** And now we need to do a few things inside of our index.js file.
>
> **[2:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=135)** And I'm going to go and go into our index.js file here and let's go ahead and start doing a few imports.
>
> **[2:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=144)** So we still need to have express, we still need, actually we don't need mongoose here, so let's remove it.
>
> **[2:33](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=153)** And we don't need body-parser.
>
> **[2:37](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=157)** We need to import next graphql.
>
> **[2:42](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=162)** Actually we need to import specific things, graphqlHTTP from 'express-graphql' like so, then we need to import { buildSchema } from 'graphql', like so.
>
> **[3:03](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=183)** So the next thing I'm going to do is build my schema, buildSchema, like so.
>
> **[3:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=196)** And we're going to build a very basic schema with a type of query.
>
> **[3:23](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=203)** We'll work on this later on, but for the time being, we'll use that example just to have something working, like so.
>
> **[3:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=212)** We're also going to build a root which we will change in the rest of the course.
>
> **[3:37](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=217)** And the root basically will provide a resolver function, which we'll explain later what it is.
>
> **[3:42](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=222)** Basically resolver function resolves a specific thing from the database.
>
> **[3:48](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=228)** It's a function basically that resolves a query from the database.
>
> **[3:52](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=232)** So provides a resolver function, like so.
>
> **[3:58](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=238)** And we're going to create a root which we'll need and that will resolve hello.
>
> **[4:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=247)** We'll start with this just as an example.
>
> **[4:10](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=250)** It will return 'Hello world'.
>
> **[4:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=255)** In the future, what it's going to do, it's resolve specific queries to the database that we have, in this case Mongo.
>
> **[4:22](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=262)** Okay, so let's go and continue.
>
> **[4:29](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=269)** So let's remove all this, which we don't need anymore.
>
> **[4:37](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=277)** Static files we're going to keep.
>
> **[4:41](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=281)** We actually don't need the routes.
>
> **[4:46](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=286)** Remove this here, same here.
>
> **[4:56](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=296)** We're going to add this detail here in a message.
>
> **[5:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=300)** And finally what we're going to do is set up our Graphql endpoint.
>
> **[5:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=311)** And what we're going to do is do app.use, which is in an Express server function, and then set up the graphql endpoint, which will basically use the HTTP endpoint from the graphql package.
>
> **[5:29](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=329)** And in it we need to pass a schema first, which we'll create.
>
> **[5:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=336)** And if you go up here, we have this base schema that we've built for now.
>
> **[5:40](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=340)** So we can actually run this.
>
> **[5:43](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=343)** The rootValue is going to be root like so.
>
> **[5:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=347)** And do we want to use graphiql?
>
> **[5:49](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=349)** Of course we do 'cause we're going to use it a lot to basically run examples as opposed to use an endpoint.
>
> **[5:58](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=358)** And just as a note for you, this Enables the Graphiql IDE.
>
> **[6:12](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=372)** And now that we've saved this, we can actually run our GraphQL server.
>
> **[6:18](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=378)** So let's go ahead and do an npm start.
>
> **[6:22](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=382)** So if we go into a new window here and do localhost and do graphql, you have GraphiQL that's running right here.
>
> **[6:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=396)** And basically we have set up our first GraphQL server.
>
> **[6:40](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-graphql?u=76281980&t=400)** So now let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (5), this. (3), this, (2), import { (1)
> **Prerequisites:** install (7), set up (4)
> **CLI Commands:** docker (2), npm (2), make (1), node (1), mongo (1)
> **File Paths:** index.js (2), package.json (1), log.json (1)
> **Code Identifiers:** buildschema (2), graphqlhttp (1), rootvalue (1)
> **Env Vars:** http (1), ide (1)
> **Cross-References:** previous video (1), in the last (1)
> **URLs:** [mongodb.com](https://mongodb.com) (1)

#### GraphQL refresher
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=0)** - [Instructor] So for those who are using this course as a first GraphQL course, let me do a quick overview of the GraphQL basics that you may have been covered in another course.
>
> **[0:10](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=10)** At the base, you need to define a schema for your data, so any mutations or queries expect the properties inside your object to be of a certain type.
>
> **[0:19](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=19)** I'll get back to mutations shortly.
>
> **[0:21](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=21)** And this brings me to the next item, Types.
>
> **[0:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=24)** Any properties or data you send or pull to GraphQL expects a type.
>
> **[0:31](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=31)** For example, if it are a friend example here, we have first name, last name, gender values, and more.
>
> **[0:39](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=39)** Each expect a type of string or even a type that I've defined as email.
>
> **[0:45](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=45)** The purpose of this type assignment is to prevent any issues when adding new items to the database.
>
> **[0:51](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=51)** Another term that I just mentioned is mutations.
>
> **[0:54](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=54)** In GraphQL, you query the data or mutate the data.
>
> **[0:58](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=58)** So adding or updating, or even deleting data in GraphQL are mutations.
>
> **[1:04](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/graphql-refresher?u=76281980&t=64)** I'll explain what our fragments, aliases, and user of arguments when we get to these areas later, but they're basically advanced methods to query GraphQL.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (2), let (1)
> **Definitions:** defined as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Add Items with GraphQL

#### Create the initial schema and type
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=0)** - [Instructor] As explored before, we need to set up a schema and phenotypes for each of our properties.
>
> **[0:06](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=6)** So let's go ahead and continue working on our server.
>
> **[0:09](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=9)** So the first thing I'm going to do is go into the source folder of the current server, and I'm going to go in the models here and change the models to data.
>
> **[0:19](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=19)** So let's rename this and I'm going to rename this data.
>
> **[0:25](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=25)** Next thing I'm going to do is go inside the CRM model here, and I'm going to create a new file that will be called schema.
>
> **[0:34](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=34)** Let's keep the CRM model for now because we're going to need some of these things later.
>
> **[0:38](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=38)** But what I'm going to do now is just create a new file.
>
> **[0:41](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=41)** So let's go ahead and call this schema.js.
>
> **[0:48](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=48)** And inside this schema, what I'm going to do is basically import mongoose from Mongoose like so, and then create a schema with mongooses.schema like so.
>
> **[1:05](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=65)** And that's all we're going to do for now for this one.
>
> **[1:08](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=68)** Now the next thing we need to do also is to create a resolver file.
>
> **[1:14](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=74)** So the resolvers, again, are the functions that will make the queries with the database and then return a result inside of GraphQL.
>
> **[1:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=84)** So let's go and create a new file, and we're going to call this resolvers.js.
>
> **[1:33](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=93)** And then finally, we're going to create a file that will be the database connectors.
>
> **[1:40](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=100)** So dbConnectors.js,
>
> **[1:49](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=109)** and this is where we're going to export our ContactSchema and create a new Schema.
>
> **[2:01](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=121)** And then the first thing we're going to do is basically if you want to leverage what we have here.
>
> **[2:10](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=130)** We're going to do that.
>
> **[2:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=131)** So what I'm going to do is leverage everything up to company.
>
> **[2:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=135)** We don't need all the other stuff just for the sake of saving time here, like so.
>
> **[2:21](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=141)** So each contact will have a first name with a type string, and this is required.
>
> **[2:27](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=147)** We are going to have a last name, email, and company like so.
>
> **[2:33](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=153)** So basically what this is, is the schema that we're going to leverage down the road for the official schema here.
>
> **[2:41](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/create-the-initial-schema-and-type?u=76281980&t=161)** So let's save this and then let's move on to the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), continue (1), finally, (1)
> **File Paths:** schema.js (1), resolvers.js (1), dbconnectors.js (1)
> **Env Vars:** crm (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** dbconnectors (1)
> **Cross-References:** next video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Program the initial schema and type
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=0)** - [Instructor] Okay, so let's continue working on our schema.
>
> **[0:03](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=3)** So right now, we have our database connectors, which basically is the dbConnectors here.
>
> **[0:08](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=8)** So this file connects our GraphQL to the database it needs.
>
> **[0:13](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=13)** So if you had multiple databases, this is where you would connect to each one of them.
>
> **[0:18](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=18)** Now, the resolvers is what we're going to work on next.
>
> **[0:20](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=20)** And then the schema is what we're going to be working on now.
>
> **[0:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=24)** So let's delete the crmModel because we don't need this anymore.
>
> **[0:29](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=29)** And then let's continue working on our schema.
>
> **[0:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=32)** So I'm going to close the dbConnectors for now 'cause we're not going to need it.
>
> **[0:35](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=35)** So the first thing I'm going to do is erase all this.
>
> **[0:39](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=39)** I just wanted to do a quick file, so you guys see what we need to work on.
>
> **[0:43](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=43)** But now what we're going to do is import resolvers from the resolver file, like so.
>
> **[0:55](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=55)** Now we need to install a package that's called GraphQL Tools.
>
> **[1:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=60)** And let's go and open the terminal here.
>
> **[1:04](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=64)** And what you need to do is do an npm i @graphql-tools/schema
>
> **[1:14](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=74)** and install this particular package.
>
> **[1:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=76)** If you're seeing any dependency issues, what you could do is force it too.
>
> **[1:21](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=81)** Whenever there is an issue, npm has become more vocal with some dependencies now, which is a great thing when you're running code in production.
>
> **[1:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=90)** But for development purposes, for learning purposes, it's not as much of an issue.
>
> **[1:35](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=95)** But what I would recommend is go through the dependencies when you're running into these issues so you could force it and it's going to install it regardless.
>
> **[1:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=104)** So let's go ahead and make sure that we are closing this.
>
> **[1:49](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=109)** I'm going to close this to have more screen estate and continue with my imports, by importing makeExecutableSchema from the file that we just installed.
>
> **[2:01](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=121)** And then let's start working on our type definition, which is the next thing that we need to do.
>
> **[2:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=131)** And what we're going to do is explicitly call out types here.
>
> **[2:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=136)** So we're going to create a few types.
>
> **[2:18](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=138)** The first one is going to be the Contact type, which is based on the dbConnectors here.
>
> **[2:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=148)** So we have these things here.
>
> **[2:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=150)** So company, email, lastName, and firstName.
>
> **[2:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=152)** So let's go ahead and create that.
>
> **[2:35](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=155)** So we need an id, clearly.
>
> **[2:38](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=158)** Then what we need is a firstName, which will be a type of String.
>
> **[2:45](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=165)** lastName, and basically what we're doing here is we're telling GraphQL that whenever there are queries or mutations that are done on the GraphQL server, these are the types that we're expecting for each of these keys.
>
> **[3:01](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=181)** If the type isn't matching the actual key, then we have an issue.
>
> **[3:05](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=185)** So let's say, for example, I was passing a number or something else in here, it would basically spit out an error, like you're not passing the right type.
>
> **[3:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=196)** But in our case, everything is a string.
>
> **[3:18](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=198)** So if we're sending strings to this particular type, we'll be fine.
>
> **[3:23](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=203)** Then we need to create a type of query.
>
> **[3:26](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=206)** So basically, the query type is what are we going to do with these contacts?
>
> **[3:33](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=213)** So we're querying them.
>
> **[3:35](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=215)** So we need to have a function that's going to be called getContacts, and then it will return an array of contact, which is the type that we define above.
>
> **[3:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=227)** So basically when you're doing type definition, you're basically telling GraphQL what are the transactions that can happen and within those transactions, what are the types that we're supposed to expect, so all of this is predictable and also safer when we're making any changes, mutations or queries inside of GraphQL.
>
> **[4:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=251)** So we're also going to have an input, which is going to be a ContactInput.
>
> **[4:17](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=257)** And then that ContactInput is going to have all the same types that we have in our type Contacts.
>
> **[4:23](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=263)** And what I'm going to do is simply copy and paste the same thing here.
>
> **[4:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=268)** Then what we're going to do is create a mutation which will take that input.
>
> **[4:35](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=275)** So basically, when we are querying GraphQL to get contacts and then get an array of contacts, we are expecting to get these types.
>
> **[4:46](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=286)** When we are making mutations, which is basically creating a new contact inside of the GraphQL and then sending it to the database, we're expecting an input of this type.
>
> **[4:57](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=297)** So you could customize the input specifically when you're creating new contacts, or you can also be specific as to what you're expecting when you're querying GraphQL.
>
> **[5:10](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=310)** So I'm going to create a type of mutation, and this type will basically have this createContact function, which will expect an input.
>
> **[5:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=324)** And guess what?
>
> **[5:25](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=325)** The input will be the ContactInput.
>
> **[5:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=330)** And then what it will do.
>
> **[5:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=332)** Once we have created the contact, it's going to give you a contact or the result of your mutation or basically creating a new contact.
>
> **[5:43](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=343)** So once you're done creating the contact, it's going to give you the input or basically giving you the result of that mutation.
>
> **[5:51](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=351)** Okay, so now our type definition is done.
>
> **[5:54](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=354)** Now we need to create a schema out of this type definition that we just created.
>
> **[6:03](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=363)** And we're passing the typedefs and the resolvers, which we'll work on next.
>
> **[6:09](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=369)** So if you run GraphQL right now, it's not going to work because we are still missing the resolvers.
>
> **[6:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=375)** We'll also have to update the index.js file as well to have all these changes 'cause we're exporting a schema, but we haven't added the schema that we're exporting here inside of our index file yet.
>
> **[6:29](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/program-the-initial-schema-and-type?u=76281980&t=389)** Okay, so let's save this and move on to the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), continue (3), this. (2), type, (2), type. (2)
> **Code Identifiers:** dbconnectors (3), lastname (2), firstname (2), crmmodel (1), makeexecutableschema (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** npm (2), make (1)
> **Prerequisites:** install (3)
> **File Paths:** index.js (1)
> **Cross-References:** next video (1)
> **Tools:** terminal (1)

#### Set up the initial resolvers
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=0)** - [Instructor] In this step, we'll set up our initial resolvers for our queries and the first mutations where we'll be able to add new contacts with GraphQL and into a database.
>
> **[0:10](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=10)** So let's get going.
>
> **[0:12](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=12)** So the first thing you want to do is go into the resolvers file.
>
> **[0:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=16)** So if you don't have it open, it's in the data folder and resolvers.
>
> **[0:21](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=21)** And let's go ahead and start by importing Contacts from our database connectors.
>
> **[0:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=32)** Then we'll create a resolvers as an object, which will hold all the different queries and mutations.
>
> **[0:38](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=38)** So we're going to first start with doing your first query.
>
> **[0:42](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=42)** And that query, as you remember, was called getContacts.
>
> **[0:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=47)** And again, if you go back to our schema here, you're going to see that we have getContacts.
>
> **[0:54](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=54)** And then in our mutations, we're going to create a contact and we'll create that resolver right here.
>
> **[1:02](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=62)** And that getContacts is a function and that will return Contacts.find.
>
> **[1:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=75)** So because we're using right now Mongo, and we're going to use Mongoose to actually do these functions, we're using the function from Mongoose to return our contacts from the database.
>
> **[1:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=88)** And therefore when we use getContacts inside of GraphQL, it's going to resolve that function here, which basically finds new contacts in the database.
>
> **[1:38](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=98)** So that's primarily how it works.
>
> **[1:40](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=100)** Now we're going to do mutations.
>
> **[1:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=104)** And again, we're going to create a contact.
>
> **[1:49](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=109)** In this case, create a new contact takes the root, and then takes an input, right?
>
> **[1:57](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=117)** And is also function.
>
> **[2:03](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=123)** There you go.
>
> **[2:04](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=124)** Little typo here.
>
> **[2:05](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=125)** So what we're going to do first is create a new object, that will be a newContact that will contain all the information that we need from the creation of the new contact.
>
> **[2:22](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=142)** So if we go here, it's going to have all these different inputs here, actually not the idea because the idea will be created by the database, but everything else we're going to need.
>
> **[2:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=152)** So if you want to copy this to save time and then go into the resolver and paste it, you're going to have a portion of the work done.
>
> **[2:43](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=163)** So what we're going to do here is basically do input.firstName and then comma, and then continue with the same thing here.
>
> **[2:54](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=174)** Like so boom, boom, boom.
>
> **[2:58](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=178)** And do something similar here.
>
> **[3:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=180)** So input.firstName, we're going to do input.lastName, and then again, we're going to do input.email, and then finally, input.company.
>
> **[3:19](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=199)** So from that object that we created, we're going to get the contact ID,
>
> **[3:31](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=211)** _id like so.
>
> **[3:35](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=215)** And then finally we're going to return after with the Promise.
>
> **[3:42](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=222)** So we're going to resolve our promise, and we're going to save our new contact.
>
> **[3:52](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=232)** So basically the contact that we've created here, we're going to save it into a database.
>
> **[3:59](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=239)** And then if there's an error, in this case here, we're just going to reject it for now.
>
> **[4:14](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=254)** else resolve a newContact.
>
> **[4:18](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=258)** And that's basically the first few resolvers that we need to create.
>
> **[4:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/set-up-the-initial-resolvers?u=76281980&t=264)** All right, so now that we've created our first resolvers, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (3), case, (1), continue (1), finally, (1)
> **Code Identifiers:** getcontacts (4), newcontact (2), firstname (2), lastname (1)
> **CLI Commands:** find (1), mongo (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Finalize the DB connection
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=0)** - [Instructor] Now let's write our connection to our database with our GraphQL server.
>
> **[0:04](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=4)** So let's get back into data and then dbConnectors.
>
> **[0:08](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=8)** And this is the file that again will connect to one or multiple databases.
>
> **[0:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=15)** So in this case, we're going to connect to MongoDB, but it could also connect to SQL or any other databases.
>
> **[0:22](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=22)** All right, so the first thing we're going to do is remove the export here.
>
> **[0:27](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=27)** We're going to keep that though.
>
> **[0:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=28)** We're going to keep the ContactSchema.
>
> **[0:31](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=31)** And what I'm going to do is import mongoose from "mongoose" first.
>
> **[0:41](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=41)** Then we're going to do the Mongo connection.
>
> **[0:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=47)** And basically we're going to do mongoose.promise = global.promise.
>
> **[0:59](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=59)** And then we're going to connect to our database, which in general should be mongodb like so, local host, forward slash, in this case, contacts.
>
> **[1:17](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=77)** We're actually creating the document contacts.
>
> **[1:21](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=81)** So if you want to change the name of the document, if the schema that you're building is completely different for your own needs, you can change this.
>
> **[1:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=90)** And obviously if your local host or if you're connecting to a different database, this is where you change the connection to.
>
> **[1:39](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=99)** So it could be a connection to an external database, it could be cloud-based, whatever it is that you need or you're using is where you're going to change this.
>
> **[1:49](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=109)** Perfect. So now here we have our ContactSchema.
>
> **[1:53](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=113)** And in this case, what we're going to do is change a bit of this code here.
>
> **[1:56](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=116)** We're going to do a mongoose.Schema, and I'm going to do low cap C in here.
>
> **[2:05](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=125)** And you will remove, in this case the required like so, just keep it type string, type string, type string, like so.
>
> **[2:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=135)** Just keep it simple for the exercise of learning, like so.
>
> **[2:21](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=141)** And then after that, we're going to create the final connection to contacts with the model.
>
> **[2:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=148)** So mongoose.model.
>
> **[2:33](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=153)** And we're using the contacts connection that we created and add the ContactSchema here.
>
> **[2:41](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=161)** And finally, we're going to export Contacts, which will now be available to be used inside of GraphQL.
>
> **[2:50](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=170)** Okay. So that's basically what we've done here.
>
> **[2:53](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=173)** So we've created a connection to our first database.
>
> **[2:57](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=177)** You can add multiple databases here if you want.
>
> **[3:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=180)** And then we created a mongoose schema, which we added the strings of type.
>
> **[3:06](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=186)** Then we've created a connection with the model and the database.
>
> **[3:10](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=190)** And then we exported all this to be used somewhere else in our application.
>
> **[3:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/finalize-the-db-connection?u=76281980&t=195)** So this is all you need to do. Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (3), this. (2), finally, (1), type. (1)
> **CLI Commands:** mongo (1)
> **Code Identifiers:** dbconnectors (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Add a few items with GraphiQL
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=0)** - [Instructor] Okay, so let's finalize our server file to make sure that we can take all the information, the schema, the resolvers that we've built, and finalize our GraphQL server.
>
> **[0:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=11)** So the first thing we're going to do is remove that line here.
>
> **[0:14](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=14)** So the buildSchema, we actually did this in the schema itself.
>
> **[0:18](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=18)** So now what we're going to do is import our schema inside of our application here.
>
> **[0:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=24)** So let's go ahead and import the schema from our src/data/schema, like so.
>
> **[0:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=36)** Now we're going to remove all of this 'cause this was just to build the initial GraphQL server.
>
> **[0:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=44)** And we don't need this anymore.
>
> **[0:46](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=46)** We can keep this, the static files as well.
>
> **[0:49](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=49)** What we're going to do is also remove the root value because we've passed this inside of our schema as well, and we need nothing else for this server to work and we should be good to go.
>
> **[1:01](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=61)** So let's save this, what we're going to do now is open up our terminal.
>
> **[1:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=67)** I'm using the control gravity shortcut, but you can also click on New Terminal here.
>
> **[1:12](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=72)** And I'm going to do an npm start.
>
> **[1:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=76)** It seems like we have a little error, and FYI, when there's little mistakes like this, it's good information for you guys to how to debug little things that happen when you first load a server.
>
> **[1:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=90)** So in this case, it throws a new error of TypeName defined in resolvers, but not in schema.
>
> **[1:37](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=97)** So let's scroll here.
>
> **[1:39](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=99)** Error, mutation defined in resolvers, but not in schema.
>
> **[1:43](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=103)** Okay, so let's take a look at this.
>
> **[1:45](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=105)** So let's go into our resolvers.
>
> **[1:48](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=108)** We have mutation here, that's defined.
>
> **[1:51](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=111)** So yeah, we're good.
>
> **[1:52](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=112)** And let's look into schema.
>
> **[1:56](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=116)** And we look at type mutation.
>
> **[1:58](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=118)** I see exactly what happened.
>
> **[2:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=120)** So I don't know if you see the error here, but mutation has typo here.
>
> **[2:05](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=125)** So if I save this, now it should be back to normal.
>
> **[2:09](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=129)** Your server is running on port, blah, blah, blah, GraphQL.
>
> **[2:12](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=132)** So we're good to go now.
>
> **[2:13](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=133)** Okay, so now it's running.
>
> **[2:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=135)** Let's go to our browser, refresh our browser, and now we have this working.
>
> **[2:22](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=142)** So one of the things when you have GraphQL that is really cool is that you have documents here that you can take a look at to just give you an idea of how to use GraphQL with what you just said.
>
> **[2:34](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=154)** So we have a query type and we have a mutation type.
>
> **[2:37](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=157)** And if we click on mutation type, it takes createContact and an input of ContactInput and Contact.
>
> **[2:45](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=165)** So let's go ahead and do this.
>
> **[2:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=167)** So I'm going to completely delete this.
>
> **[2:50](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=170)** So let's go ahead and create our first mutation, which takes createContact and it takes an input.
>
> **[3:03](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=183)** And that input is firstName.
>
> **[3:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=187)** Let's go ahead and do Manny, lastName Henri.
>
> **[3:17](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=197)** Email me@[me.com](https://me.com).
>
> **[3:21](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=201)** Hopefully nobody has that email.
>
> **[3:23](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=203)** And then company LinkedIn.
>
> **[3:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=208)** Okay.
>
> **[3:29](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=209)** And then what I want is please return to me the ID and the firstName when I run this mutation.
>
> **[3:39](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=219)** So what I'm basically doing here is using our GraphQL server to create a contact inside of my database leveraging GraphQL.
>
> **[3:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=227)** So as I run this, okay, so we have another issue here.
>
> **[3:51](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=231)** So let's take a look at this.
>
> **[3:52](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=232)** So let's go back to our server and we could see that the app crashed.
>
> **[3:57](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=237)** So let's go up, let's take a look at the error message.
>
> **[4:02](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=242)** So it says, throw new Mongoose Error Model.Prototype.save no longer accepts a callback, a-ha.
>
> **[4:12](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=252)** Okay, so we need to change our code a little bit in the resolver here.
>
> **[4:17](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=257)** Okay, so let's go ahead and let me close this for a second, and I'm going to close this as well.
>
> **[4:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=264)** And in our create new contact, we're going to do an async promise here.
>
> **[4:31](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=271)** So it's going to be a bit different in our code just to make sure that we are doing this right, newContact, okay, so the Promise here, we're going to try something different here.
>
> **[4:46](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=286)** All right, I'm going to rewrite that code just for my train of thought, just to make this work.
>
> **[4:52](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=292)** So let's do this.
>
> **[4:54](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=294)** Let's try and await newContact.save.
>
> **[5:02](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=302)** So basically we're going to make sure that this runs properly before we return the newContact as such.
>
> **[5:13](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=313)** And then we're going to do a catch if there's an error, so this way, we're doing this properly.
>
> **[5:20](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=320)** So throw new Error.
>
> **[5:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=324)** Okay.
>
> **[5:25](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=325)** So Error.
>
> **[5:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=328)** Let's do something like Error saving contact, like so.
>
> **[5:35](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=335)** And then add the err.message.
>
> **[5:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=344)** Okay, so that should fix it, let's save this.
>
> **[5:48](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=348)** Let's make sure we have our server running here and we should be good to go.
>
> **[5:54](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=354)** Let's go back to our query here and let's try that again.
>
> **[5:59](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=359)** And now we create a new contact, which has the ID, and saved with the first name of Manny.
>
> **[6:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=367)** So everything is back to normal.
>
> **[6:09](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=369)** I don't know if you understood what just happened.
>
> **[6:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=371)** So basically Mongoose doesn't accept a call back anymore, so we have to use async await catch approach to this, and it's back to working.
>
> **[6:20](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=380)** So this is how you create your first GraphQL server.
>
> **[6:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/add-a-few-items-with-graphiql?u=76281980&t=384)** Let's move on to deepen our knowledge and therefore doing more stuff with GraphQL.

> [!info]- Semantic Content
>
> **Code Keywords:** let (25), this, (6), this. (6), throw (2), async (2)
> **Code Identifiers:** newcontact (3), createcontact (2), firstname (2), buildschema (1), lastname (1)
> **CLI Commands:** make (5), npm (1)
> **UI Navigation:** click on (2), go to (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **URLs:** [me.com](https://me.com) (1)
> **Env Vars:** fyi (1)


### 3. Read Items with GraphQL

#### Simple queries in GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=0)** - [Instructor] So let's go ahead and explore how we can do queries with GraphQL, and we're going to create one where we can actually get only one contact.
>
> **[0:10](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=10)** So the first thing I'm going to do is erase all this, and then I'm going to go and create a query.
>
> **[0:17](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=17)** Very same way that we created the create contact mutation, we're going to get contacts, like so.
>
> **[0:25](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=25)** So now what we need to do at this point is define for our contacts what we want.
>
> **[0:31](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=31)** So let's go ahead and add a few things that we'd like to have from our list of contact.
>
> **[0:35](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=35)** Again, get contacts gets multiple contacts, but you can go granular with what you get back from GraphQL.
>
> **[0:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=44)** So let's say I just want to have the first name and the last name of each contacts.
>
> **[0:50](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=50)** I can run the query like this, and then I would get a list of all the contacts with first name, last name.
>
> **[0:56](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=56)** I could get first name and just the company, and then run this, and then get the first name and which company this person is part of.
>
> **[1:06](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=66)** So let me create another query just to make sure that I have a little bit more data.
>
> **[1:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=71)** So let's say history, let's go into the mutation here, and I'm going to change a few things.
>
> **[1:19](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=79)** Manuelo Henrietto, and from the company Algofields, which is my company.
>
> **[1:29](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=89)** And let's run this.
>
> **[1:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=90)** We got an ID here, so we're good.
>
> **[1:33](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=93)** Let's go back to our get contacts, first name, last name, then run this, and we have three contacts inside of our list.
>
> **[1:41](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=101)** But now what I'd like to do is get just one contact.
>
> **[1:45](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=105)** So what I'm going to do is run a query with IDs, 'cause we're going to get our contacts by IDs, so now I got the IDs for each one of 'em.
>
> **[1:54](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=114)** So let's go back to our code and now create the actual code that we need for getting only one contact.
>
> **[2:02](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=122)** So I'm going to close my server thing here, and the first thing we're going to do is go in our queries here, and then create, let's call it get one contact, as a function.
>
> **[2:17](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=137)** So again, like before, as you can see, we need to make this async, await, same approach, because Mongoose will not accept promises anymore, like I used to do it in the previous version of the course.
>
> **[2:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=152)** So we're passing ID because we need something unique inside of our call.
>
> **[2:38](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=158)** And then let's go ahead and the function will try.
>
> **[2:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=164)** And we're going to build a variable constant, which we'll await and find, inside of our contacts in the database, find by ID.
>
> **[2:57](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=177)** By ID, and pass the ID like so, and then return contact.
>
> **[3:09](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=189)** Oh, I made a mistake here.
>
> **[3:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=191)** Boom.
>
> **[3:13](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=193)** Okay.
>
> **[3:14](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=194)** And then we're going to catch if there's an error, and then throw new error.
>
> **[3:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=204)** I think we're going to basically copy and paste what we've done here just to shorten our coding.
>
> **[3:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=212)** And while I'm here, I'm going to add this here, and therefore, same thing here at the end.
>
> **[3:41](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=221)** Okay, so basically, we're passing an ID, and then we're calling to the MongoDB by using the contacts connection that we've created and using the method find by ID, and then passing the ID here.
>
> **[3:57](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=237)** And then returning that contact therefore is going to resolve inside of GraphQL, and that's basically how it's going to work.
>
> **[4:06](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=246)** Now we need to add it to our schema here, same way we've done it before.
>
> **[4:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=251)** So let's go ahead and add this to our schema.
>
> **[4:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=255)** Get one contact, which requires an ID,
>
> **[4:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=264)** and we're going to return a contact as the result of the resolver.
>
> **[4:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=270)** Okay, now with all this, we can save.
>
> **[4:34](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=274)** Let's make sure everything is running properly.
>
> **[4:37](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=277)** Do we have a problem here?
>
> **[4:41](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=281)** What is the problem?
>
> **[4:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=284)** Oh yeah, we just did, so it should be okay.
>
> **[4:48](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=288)** So let's see.
>
> **[4:50](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=290)** If we look here, get one contact.
>
> **[4:54](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=294)** The get one contact shouldn't be in mutation, actually.
>
> **[4:58](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=298)** It should be in here ,in the queries.
>
> **[5:02](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=302)** There you go.
>
> **[5:03](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=303)** So now it should be back to normal.
>
> **[5:04](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=304)** Okay, so now that we have this fixed, let's go back here, and now let's just refresh our page.
>
> **[5:12](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=312)** And now what I'm going to do is inside of our contacts, I'm going to get one contact, which requires an ID.
>
> **[5:24](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=324)** And let's use one of these, like so, right?
>
> **[5:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=330)** And then here, what we're going to do is add, let me get the first name and the company of that contact that we're running.
>
> **[5:40](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=340)** Boom.
>
> **[5:41](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=341)** And we get the one contact, which was first name and Manny based on that ID.
>
> **[5:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/simple-queries-in-graphql?u=76281980&t=347)** And this is how it works.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), this, (5), function (2), await (2), this. (1)
> **CLI Commands:** make (3), find (3)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### What are aliases and usage
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=0)** - [Instructor] Okay, so now let's explore aliases.
>
> **[0:03](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=3)** What are aliases?
>
> **[0:04](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=4)** They are basically a way to get multiple queries in one pass with different patterns or different things that you want for specific people or a list of people.
>
> **[0:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=16)** So let me give you an example.
>
> **[0:18](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=18)** So right here, I have getOneContact, right?
>
> **[0:22](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=22)** So the way it would work is, for example, you do the one query, but for each of these you can actually label them anything you want.
>
> **[0:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=30)** It could be for example, one, and as you can see, there's no more errors.
>
> **[0:34](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=34)** And then what you could do is do two and then do a second one.
>
> **[0:42](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=42)** So let's go ahead and do the second, getContacts, and let's do the ID that we have here, just for the sake of the example.
>
> **[0:53](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=53)** And then what you need to ask.
>
> **[0:55](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=55)** In this case, let's go and ask for example, last name and the ID, like so.
>
> **[1:02](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=62)** And we need to do getOneContact, that's the error.
>
> **[1:08](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=68)** So in this case, we would get one query that would return for this contact, the first name of the company, and this other query that would return the last name and the ID.
>
> **[1:19](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=79)** So let's run this.
>
> **[1:20](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=80)** So now, as you can see, for the same contact, clearly, we would have the ID, the last name, and then the first name of the company.
>
> **[1:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=88)** So you could do a whole bunch of things here.
>
> **[1:31](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=91)** So let's say for example, you want to do, well, okay, I need all the contacts for this one.
>
> **[1:37](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=97)** So getContacts.
>
> **[1:40](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=100)** And then for all the contacts, I just want the last name, like so.
>
> **[1:45](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=105)** So you would run all these different queries in one pass and you would get this data here.
>
> **[1:52](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=112)** So where this is really useful is in certain cases for your applications, you need very specific things to be returned.
>
> **[2:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=120)** And therefore, what you could do is have the one query have multiple sets of data through GraphQL.
>
> **[2:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=127)** So this is where aliases comes really useful when you have a granular approach to what you need, and therefore you can use different types of query here for even the same contact or different contacts or a list of contacts.
>
> **[2:25](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/what-are-aliases-and-usage?u=76281980&t=145)** So you can always do this and then leverage the information that's returned inside of your state in your application, and basically use this for different contacts in your application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (2), case, (2), this. (1)
> **Code Identifiers:** getonecontact (2), getcontacts (2)
> **Analogies:** for example (4)
> **Speakers:** - [instructor] (1)

#### Fragments basics
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=0)** - [Instructor] Like aliases, fragments are a neat feature that comes built in with GraphQL.
>
> **[0:05](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=5)** It is very useful when we start requesting the same data across several items.
>
> **[0:10](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=10)** So let me demonstrate.
>
> **[0:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=11)** So let's say for example, you wanted to have all three of these specific requests, but with the same data.
>
> **[0:19](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=19)** So instead of having firstName, company, lastName, ID, and just last name for all these different queries, you want it to have the same data show up, you would build a fragment.
>
> **[0:29](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=29)** So let me show what it does.
>
> **[0:31](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=31)** So the way you build a fragment is by typing fragment and then naming the fragment.
>
> **[0:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=36)** So contact, let's say contactFragment_on_Contact.
>
> **[0:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=44)** So therefore you're stipulating that we're actually leveraging Contact for that fragment.
>
> **[0:50](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=50)** So therefore, what exactly do we want?
>
> **[0:51](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=51)** Well, let's say we wanted firstName, lastName, and then the company.
>
> **[0:59](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=59)** So what happens here, you're creating a fragment that stipulates we want these three elements for all of these queries.
>
> **[1:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=67)** So what we would do now to make this work is basically by removing this first, but then doing ... and then contactFragment like such.
>
> **[1:17](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=77)** So you would do that on all three queries and it would allow you to get the same data across all your queries.
>
> **[1:25](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=85)** So let's go ahead and do this.
>
> **[1:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=90)** And it did the query even without me finishing it.
>
> **[1:34](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=94)** But let's go ahead and finish this.
>
> **[1:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=96)** And right now, as you can see, it's still not working.
>
> **[1:39](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=99)** So let's go ahead and run this.
>
> **[1:42](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=102)** So now what it's going to do is, first, my first query is with this ID, I wanted to have all the information or the firstName, lastName, and company on this first query.
>
> **[1:55](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=115)** And this is the same idea.
>
> **[1:57](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=117)** So it's going to give me the same information.
>
> **[2:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=120)** And then on the Contacts, the third query, which is getting all the contacts, it would give me, again, all the same information, but based on the contactFragment here.
>
> **[2:13](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/fragments-basics?u=76281980&t=133)** So this is really useful when you want to have, for example, multiple queries with different users or different parameters, but then you want to have the same information return, you build a fragment, and then you stipulate on that fragment exactly what you'd like to have for the information.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (3), return, (1)
> **Code Identifiers:** firstname (3), lastname (3), contactfragment (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 4. Update Items with GraphQL

#### Overview of mutations
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=0)** - [Instructor] So let's review what mutations are.
>
> **[0:02](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=2)** So if you're not comfortable with the term mutation yet, and if that didn't make sense from the beginning when we started talking about mutations, it is basically the same thing as in the REST API when we add items or when we delete items or when we update.
>
> **[0:18](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=18)** So the usual or typical crowd operations.
>
> **[0:21](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=21)** So with mutations in GraphQL, all the queries are basically when we ask information from the server or the database or multiple databases.
>
> **[0:31](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=31)** And mutations is when we actually mutate or change those databases.
>
> **[0:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=36)** So when we add new items, when we delete items, or when we update items, these are all mutations.
>
> **[0:43](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=43)** So if we look back at our code here, and let me just close this here, we have one mutation where we actually create a contact.
>
> **[0:53](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=53)** And if we look at the resolver that's related to that mutation, we're creating a new contact and we're sending it to the database.
>
> **[1:01](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=61)** So we're mutating our database, adding new things, deleting new things, updating new things.
>
> **[1:08](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=68)** These are all mutations.
>
> **[1:09](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=69)** So if you want to have more information on mutations, what you could do is go and search for GraphQL mutations,
>
> **[1:25](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=85)** and look directly into the mutations areas, which is right here, and read in the documentation.
>
> **[1:34](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=94)** So we have, for example, and GraphQL's documentation, an example of creating a new episode for, I believe this is "Star Wars" here, and then information on that specific episode.
>
> **[1:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=107)** So basically adding new things into the database or GraphQL server is a mutation.
>
> **[1:54](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=114)** Deleting, updating is all mutations.
>
> **[1:58](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/overview-of-mutations?u=76281980&t=118)** So if that doesn't stick yet, go back to the documentation and read on it a little bit further, and over time, it should actually sink in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (2), for, (1)
> **Env Vars:** rest (1), api (1)
> **Documentation:** the documentation (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Code your updated mutation
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=0)** - [Instructor] Okay, so what if we wanted to update a contact?
>
> **[0:03](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=3)** Let's create a new mutation that will allow us to update a new contact.
>
> **[0:08](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=8)** So let's go ahead and create that function here in the mutations.
>
> **[0:13](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=13)** So what I'm going to do, after the createContact, I'm going to put comma and then create a new function here.
>
> **[0:21](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=21)** So update contact, and again, we're going to use the async roach root.
>
> **[0:29](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=29)** And then we need an input.
>
> **[0:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=30)** Again, we need an ID as the input first.
>
> **[0:34](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=34)** Well actually not an ID, the input, because we're going to need multiple items from the input itself and then what we're going to do is try
>
> **[0:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=47)** and then we're going to create updated contact with an await
>
> **[0:57](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=57)** and then use contacts, find one and update.
>
> **[1:03](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=63)** And then we're going to need to pass a few things as parameters.
>
> **[1:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=67)** First of all, we'll need to pass from the input an ID to find what needs to be updated first, and then we're going to pass an input and then we're going to pass new as true.
>
> **[1:25](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=85)** So basically what's going to happen here is that we're going to find the ID and update it with the input and if it's new or if it doesn't find a new one, then create a new one and then return the updated contact if it has been successful.
>
> **[1:45](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=105)** And then we're going to do the catch dot error.
>
> **[1:48](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=108)** And what I'm going to do is basically use this here, literally the same code as here, like so, perfect.
>
> **[1:59](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=119)** So try to update.
>
> **[2:01](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=121)** If it doesn't work, then catch the error.
>
> **[2:04](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=124)** Boom, boom, boom, good to go.
>
> **[2:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=127)** Alright, so now let's go ahead and save this.
>
> **[2:10](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=130)** Now we're going to have an error if we don't add it to the schema and the mutation.
>
> **[2:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=135)** Let's not do the error we done earlier when we added the query inside of the mutations.
>
> **[2:20](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=140)** So now let's make sure that we add the mutation in here.
>
> **[2:26](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=146)** So update contact, which takes an input, contact input,
>
> **[2:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=156)** and it will return our contact.
>
> **[2:39](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=159)** Awesome.
>
> **[2:40](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=160)** So now let's make sure we don't have any errors like before.
>
> **[2:43](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=163)** We're good to go.
>
> **[2:45](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=165)** Let's go back in GraphQL, right here.
>
> **[2:49](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=169)** Let's refresh just for safe measures and let's go ahead and what I'm going to do is let's first get a request.
>
> **[3:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=180)** So what I'm going to do is query, get all the contacts, but give me the IDs as well.
>
> **[3:08](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=188)** So I'm going to run this one and I'm going to grab the first one here with this ID.
>
> **[3:14](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=194)** Okay, so now let's close this and we're going to use our mutation.
>
> **[3:19](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=199)** So what I'm going to do is go ahead and create a mutation.
>
> **[3:26](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=206)** And this time we're going to use update contact and it takes an input.
>
> **[3:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=212)** And now we need to add the input from, first of all, the ID.
>
> **[3:38](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=218)** So I'm going to paste the ID that I just copied, and then I'm going to add what I want to change.
>
> **[3:46](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=226)** Let's go ahead and do this.
>
> **[3:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=227)** So for example, what I'm going to do is first name, I'm going to change it to, let's say David, last name to Henry.
>
> **[4:01](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=241)** Let's keep it Henry and then company.
>
> **[4:08](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=248)** Let's do Nova.
>
> **[4:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=251)** There you go.
>
> **[4:12](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=252)** Okay.
>
> **[4:13](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=253)** So now with this, now we need to return something.
>
> **[4:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=256)** So let's return the first name, let's return the last name, and let's return the company.
>
> **[4:22](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=262)** So now what I've done is added the inputs with the ID, which is required.
>
> **[4:29](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=269)** First name, last name, and company, what I'm going to change or mutate and then let's return the results of that change.
>
> **[4:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=276)** Let's go ahead and return it and what it says now, that updated contact has first name, last name, and company changed.
>
> **[4:45](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=285)** So let's remember A090 as the last one.
>
> **[4:50](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=290)** Now let's run a query of all contacts.
>
> **[4:53](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=293)** Let's just see what happens.
>
> **[4:55](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=295)** So let's run this and now as you can see, the first contact, which 090, now has David Henry as the first name and the last name.
>
> **[5:06](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=306)** If we add the company to the query, now you see that Nova is the company as opposed to LinkedIn as before.
>
> **[5:14](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=314)** So as you can see, mutations is very useful, and especially if you consider the fact that you can have multiple databases connect to this one GraphQL server, which means that you can have SQL, you can have MongoDB, you can have Redis, Postgres, all these different types of databases where this one server can actually query into or mutate into multiple databases.
>
> **[5:42](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-updated-mutation?u=76281980&t=342)** This is where it becomes very powerful to use GraphQL.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), pass (4), function (2), this. (2), async (1)
> **CLI Commands:** find (4), make (2)
> **Env Vars:** a090 (1), sql (1)
> **Code Identifiers:** createcontact (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Update Items with GraphQL

#### Coding our delete mutation
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=0)** - [Instructor] Okay, so what if we wanted to delete a contact?
>
> **[0:03](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=3)** Let's go ahead and add the code to create that mutation.
>
> **[0:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=7)** So the first thing we're going to do, again, is to go into resolvers.
>
> **[0:11](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=11)** And what I'm going to do is do a comma there and then deleteContact like so.
>
> **[0:20](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=20)** And then again, async, pass the root, and then pass an ID.
>
> **[0:27](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=27)** That's the only thing we need for the input on this one.
>
> **[0:30](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=30)** So as long as we have an ID, we're able to delete a unique contact inside of our database, and that's exactly what we need.
>
> **[0:37](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=37)** So what we're going to do is await, go to Contacts.database, and basically use the mongoose function deleteOne.
>
> **[0:47](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=47)** And pass, as easy as it sounds, the ID of that particular contact that we want to delete, like so.
>
> **[0:59](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=59)** And if it's successful, then instead of returning a contact, we don't have anything to return, we'll return an actual message here.
>
> **[1:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=67)** So what we're going to do is successfully deleted contact, boom.
>
> **[1:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=76)** And that's pretty much what we need.
>
> **[1:18](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=78)** And then for the throw error, we're going to do the exact same thing here.
>
> **[1:22](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=82)** Copy and paste, boom, we have our delete function written.
>
> **[1:27](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=87)** So now again, we need to add it to the schema, otherwise it's not going to work.
>
> **[1:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=92)** So let's go ahead and add it here in our mutations, deleteContact, and in this case it takes an ID, and then it will return a string.
>
> **[1:49](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=109)** So basically what we're telling the system here, or the GraphQL server, is that the return is not a contact this time, it's a string.
>
> **[1:58](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=118)** So as you can see, what we're returning is a string.
>
> **[2:01](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=121)** It's not a contact. So that's why we're changing it to that.
>
> **[2:05](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=125)** Okay, so that's pretty much the code that we need to write for this function.
>
> **[2:09](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/code-your-deleted-mutation?u=76281980&t=129)** Let's go to the next video to test all this.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (3), pass (3), function (3), async (1)
> **Code Identifiers:** deletecontact (2), deleteone (1)
> **UI Navigation:** go to (2)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Final test for your mutations
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=0)** - [Instructor] Okay, so let's go ahead and delete the contact or test the last mutation that we've created.
>
> **[0:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=7)** So the first thing I'm going to do is make sure I have the latest and the greatest from my queries here.
>
> **[0:13](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=13)** So I have these three contacts that I created.
>
> **[0:15](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=15)** Let's say I wanted to delete that last one here.
>
> **[0:18](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=18)** So let me go ahead and copy that id.
>
> **[0:22](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=22)** And what I'm going to do here is remove all this and then go mutation.
>
> **[0:29](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=29)** And then delete.
>
> **[0:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=32)** Oh, I need to update this, just to make sure.
>
> **[0:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=36)** deletecontact, there you go.
>
> **[0:38](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=38)** Because I didn't have the latest and the greatest version here.
>
> **[0:41](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=41)** So now I do.
>
> **[0:43](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=43)** So now, I need to add the id that I just copied, like so.
>
> **[0:48](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=48)** And all I have to do is run that mutation and it's going to tell me, Successfully deleted contact.
>
> **[0:57](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=57)** Now, if I go into my history, grab the getContacts and run all of this, the contact that I deleted is no longer there.
>
> **[1:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=67)** So let's go ahead and create a few contacts just for the sake of it.
>
> **[1:12](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=72)** So mutation, let's go into createContact here.
>
> **[1:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=76)** Just run this a couple of times.
>
> **[1:17](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=77)** Boom, boom, boom.
>
> **[1:19](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=79)** And then if I go into getContacts, now I have all these contacts here.
>
> **[1:26](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=86)** So what I could do is just grab any one of 'em, like so, and repeat that.
>
> **[1:33](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=93)** Delete contact mutation here.
>
> **[1:36](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=96)** And again, I'm just using the history to not have to retype all this.
>
> **[1:40](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=100)** If you want to practice, you can practice by simply typing it as well.
>
> **[1:44](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=104)** And then boom, I deleted another contact, so I can getContacts again.
>
> **[1:51](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=111)** 1, 2, 3, 4, 5.
>
> **[1:53](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=113)** I have five.
>
> **[1:54](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=114)** Let's do another one.
>
> **[1:57](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=117)** So you see that it's working.
>
> **[2:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=120)** Run, and then getContacts again.
>
> **[2:02](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=122)** And as you can see, have four.
>
> **[2:04](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=124)** So basically if we close this three and we open the docs, now, if you click on the documentation, you click on mutations, you see that now we have all these different mutations that we created.
>
> **[2:16](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=136)** The createContact, the updateContact, and the deleteContact with all the information that we need.
>
> **[2:23](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=143)** The input takes a ContactInput, and this one takes an id and so on, so forth.
>
> **[2:28](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=148)** So if you ever wonder what you need to input when you actually create something, or when you need to query something, go to the documentation and it's based on the code that you built yourself.
>
> **[2:39](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=159)** So in theory, you should know exactly what to put in there.
>
> **[2:42](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=162)** But if you go back to your code down the road and you don't know, you can always go and look into the documentation.
>
> **[2:49](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=169)** And if your mutations grow a lot, because you have multiple databases and several databases that have different ways of getting the data in, you can also search in the documentation through your mutations, through your queries and so on and so forth.
>
> **[3:04](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/final-test-for-your-mutations?u=76281980&t=184)** So hopefully that was a helpful conversion from a REST API to an actual GraphQL server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), delete (4), this, (2), this. (1)
> **Code Identifiers:** getcontacts (4), createcontact (2), updatecontact (1), deletecontact (1)
> **Documentation:** the documentation (4), the docs (1)
> **UI Navigation:** click on (2), open the (1), go to (1)
> **CLI Commands:** make (2)
> **Env Vars:** rest (1), api (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980&t=0)** - [Instructor] The goal of this course was to help you better evaluate if and when you should migrate to GraphQL as well as the proper migration steps from a REST API.
>
> **[0:10](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980&t=10)** Hopefully, at the end of this course, you'll be able to execute both.
>
> **[0:14](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980&t=14)** If you've arrived at this course with no prior knowledge of GraphQL and truly enjoyed its syntax, then you can continue your journey by following many of our courses on the subject.
>
> **[0:26](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980&t=26)** There is an essentials course, or you can even try GraphQL with Relay.
>
> **[0:32](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980&t=32)** GraphQL is a perfect match for React, and both were created by Facebook.
>
> **[0:38](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980&t=38)** As a backend developer, if you've been looking for the right excuse to learn front-end development, React is ideal for GraphQL.
>
> **[0:45](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980&t=45)** So if you want to learn more, we have dozens of courses related to React, so feel free to look for courses with the keyword React.
>
> **[0:53](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980&t=53)** And finally, if you want to push your backend knowledge further, there are several courses on the subject.
>
> **[0:59](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980&t=59)** Search for courses for database knowledge such as MongoDB, SQL, or even courses related to Node.js and Express.
>
> **[1:07](https://www.linkedin.com/learning/migrating-from-rest-to-graphql-23466102/next-steps?u=76281980&t=67)** Thanks for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Env Vars:** rest (1), api (1), sql (1)
> **Code Keywords:** continue (1), finally, (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Stay Ahead in GraphQL]]
← [[GraphQL Essential Training]] | **3 of 3**

## Appears In

- [[Stay Ahead in GraphQL]]

## Related Courses

_Courses sharing skills:_

- [[Building GraphQL Applications in Laravel]] — GraphQL
- [[Building a GraphQL Project with React.js]] — GraphQL
- [[Spring with GraphQL]] — GraphQL
- [[GraphQL Essential Training]] — GraphQL
- [[Learning Graphql]] — GraphQL

---

[↑ Back to top](#)