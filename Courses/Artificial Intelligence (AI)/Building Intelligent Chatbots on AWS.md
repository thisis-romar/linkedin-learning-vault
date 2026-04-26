---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: building-intelligent-chatbots-on-aws-22735480
url: "https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480"
duration_minutes: 73
duration: 1h 13m
level: Advanced
updated: 9/20/2023
learners: 2608329
skills:
  - Chatbot Development
  - Artificial Intelligence (AI)
  - Amazon Web Services (AWS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFVuca7pibCRQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695147619822?e=2147483647&amp;v=beta&amp;t=5nJbLKeX1sVhWFmVZXZG_74Fz9rc9Jt5oQBEnvN9KuM"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your AWS Development Skills- Exploring Complex Application Development]]'
prev_courses:
  - '[[Building Serverless Apps with AI Services on AWS]]'
path_nav: '[{"path":"Advance Your AWS Development Skills- Exploring Complex Application Development","position":6,"total":6,"prev":"Building Serverless Apps with AI Services on AWS","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/chatbot-development
  - skill/artificial-intelligence-ai
  - skill/amazon-web-services-aws
status: not-started
created: 2026-04-21
---

![Building Intelligent Chatbots on AWS](https://media.licdn.com/dms/image/v2/D4E0DAQFVuca7pibCRQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695147619822?e=2147483647&amp;v=beta&amp;t=5nJbLKeX1sVhWFmVZXZG_74Fz9rc9Jt5oQBEnvN9KuM)

# Building Intelligent Chatbots on AWS

> Voice control and interaction is becoming more common—and more expected from our apps. Amazon Lex provides speech recognition and natural language understanding, allowing developers to build their own custom logic around it. This course introduces a specific use case for Lex: intelligent chatbots that can respond to and redirect customer inquiries. Discover how to use the Lex API and CLI, build an

> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480) | 1h 13m | Advanced | 2608K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Bear Cahill]]

## Resources

- Exercise files available

## Skills Covered

- Chatbot Development
- Artificial Intelligence (AI)
- Amazon Web Services (AWS)

## Table of Contents

### Introduction

#### Creating chatbots
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-chatbots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-chatbots?u=76281980&t=0)** - Artificial intelligence is leading users to expect more and more from their interactions with your website or app.
>
> **[0:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-chatbots?u=76281980&t=7)** Is yours up to the task?
>
> **[0:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-chatbots?u=76281980&t=8)** AWS Chatbots allow you to manage a conversation with the user and build context along the way.
>
> **[0:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-chatbots?u=76281980&t=14)** You design conversation flows that collect data from the user by asking questions and receiving their answers.
>
> **[0:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-chatbots?u=76281980&t=21)** Based on that data the bot can make decisions about what to do next like ask another question or run some code.
>
> **[0:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-chatbots?u=76281980&t=28)** If your friend said, let's order pizza, you'd probably ask from where?
>
> **[0:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-chatbots?u=76281980&t=34)** A chatbot can work the same way.
>
> **[0:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-chatbots?u=76281980&t=37)** Let me take you through the steps to leverage chatbots to make your user interface conversational and intelligent.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), aws (1)
> **Code Keywords:** let (2), interface (1)
> **Env Vars:** aws (1)
> **Speakers:** - artificial (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, it would be helpful if you have some knowledge of AWS, and its various services and features.
>
> **[0:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/what-you-should-know?u=76281980&t=8)** We'll be using Lex mostly, but also dealing with IAM, Cognito, and Lambda a bit.
>
> **[0:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/what-you-should-know?u=76281980&t=14)** Of course you'll need to use your bot and a client, like an app or website, so knowledge of how you want to use it, and development skills there, will give you insight into how you can use your bot.
>
> **[0:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/what-you-should-know?u=76281980&t=25)** We'll use a JavaScript client in this course, and do most of the work from a command line.
>
> **[0:29](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/what-you-should-know?u=76281980&t=29)** You'll need NPM installed if you want to perform those steps.
>
> **[0:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/what-you-should-know?u=76281980&t=33)** I'll mention it in the video when the time comes.

> [!info]- Semantic Content
>
> **Env Vars:** aws (1), iam (1), npm (1)
> **CLI Commands:** aws (1), npm (1)
> **Prerequisites:** you'll need (2)
> **Code Keywords:** lambda (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 1. AWS Lex Overview

#### Introduction to AWS Lex
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980&t=1)** - [Instructor] Chatbots or bots are supposed to be helpful.
>
> **[0:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980&t=5)** Ideally, they can take input, either spoken or text, and conform it to how they can serve the user.
>
> **[0:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980&t=11)** Whether it's playing music or ordering off the internet, the idea is that a bot takes spoken or text data and determine what task to perform.
>
> **[0:20](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980&t=20)** Lex allows you to create bots that can serve multiple intentions.
>
> **[0:26](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980&t=26)** Typically, the intentions are related, so you might have a bot for your entertainment app that takes input and tries to determine if you want to listen to music or watch a movie.
>
> **[0:35](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980&t=35)** Or maybe you have a dinner app with a bot that needs to determine first if you're ordering a meal, drinks, or dessert.
>
> **[0:43](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980&t=43)** Based on which one you want to do, the bot needs to gather specific data, so it has different questions for each path or different intentions of the user.
>
> **[0:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980&t=54)** Once all the missing pieces are filled in, it can fulfill the request.
>
> **[0:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980&t=56)** Fulfilling the request means doing what it was designed to do once it's gathered all the data.
>
> **[1:02](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980&t=62)** That will vary depending on the design of the bot and the purpose of your app.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### AWS account and console
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=0)** - [Instructor] AWS has a lot of service which can make it confusing and scary.
>
> **[0:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=4)** It's certainly intimidating.
>
> **[0:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=6)** If you're like me, you're only interested in a subset of the offering from AWS.
>
> **[0:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=11)** Like a department or other stores, you probably go to the sections you need and don't worry about the rest.
>
> **[0:16](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=16)** We'll be using the Lex service mostly, but we'll also be looking at a few others.
>
> **[0:20](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=20)** Don't worry. AWS will do the heavy lifting for us.
>
> **[0:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=24)** The work we'll be doing will be like managing a blog or a spreadsheet.
>
> **[0:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=27)** We'll mostly just have to make decisions and translate them into what Lex understands.
>
> **[0:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=32)** Signing up for an AWS account is free and easy.
>
> **[0:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=34)** Yes, both, free and easy.
>
> **[0:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=37)** Go to aws.[amazon.com/free](https://amazon.com/free) and sign up.
>
> **[0:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=41)** Many services are free to use up to a limited use or time.
>
> **[0:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=44)** We'll use free services for this course, but always be mindful of the cost by going to the Billing and Cost Management Dashboard.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (5), make (2)
> **Env Vars:** aws (4)
> **UI Navigation:** go to (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Speakers:** - [instructor] (1)

#### Chatbot concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=0)** - [Instructor] AWS Lex allows you to create chatbots or bots.
>
> **[0:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=4)** Bots are the container for the rest of the settings, configuration details, and integration for chatbots in AWS.
>
> **[0:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=12)** Effectively, they're like a project that holds the various pieces of the bot.
>
> **[0:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=17)** Bots have a purpose or multiple purposes and just like you or me, that makes our bots feel special.
>
> **[0:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=24)** A bot's purpose may be to facilitate ordering food or planning a trip.
>
> **[0:29](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=29)** Each area of need for that purpose is broken down into what is called an intent.
>
> **[0:35](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=35)** Let's say you have a bot for car care.
>
> **[0:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=37)** You may have one intent for requesting oil changes and another intent, in the same bot, for new tires or a bot for ordering food where you order the meal from restaurant A, but place dessert orders from restaurant B because you know restaurant B's apple pie is the best, right?
>
> **[0:55](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=55)** The point is bots can have various intents to fulfill the user's requests.
>
> **[1:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=61)** The information needed in these intents are called slots.
>
> **[1:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=65)** Think of missing words or phrases in a sentence.
>
> **[1:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=68)** I want to order blank from blank to be delivered to blank.
>
> **[1:13](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=73)** The slots are the blanks that the bot needs to fulfill its intent.
>
> **[1:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=77)** Those are the missing pieces it needs from the user.
>
> **[1:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=81)** Slots have types.
>
> **[1:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=82)** Types define the type of information or data needed to fill that slot.
>
> **[1:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=87)** The first blank is a type of food, the second is a restaurant or similar, and the third blank is where to deliver it, the front door, the lobby, and so on.
>
> **[1:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=97)** Once the blanks, or slots, are filled the bot has what it needs and can fulfill its intent.
>
> **[1:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=104)** How the intent is fulfilled is up to you and your bot.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Code Keywords:** let (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Lex API and CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=0)** - [Instructor] In this course, we'll be using the Lex console website, but you can also use the AWS Command Line Interface.
>
> **[0:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=7)** The command line interface can help you create your IAM role in various pieces of your bot, like slots and intents.
>
> **[0:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=14)** Similarly, you can use the AWS API to create and manage bots.
>
> **[0:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=18)** There are various actions to create, manage, and delete the bot items.
>
> **[0:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=22)** Once you're familiar with the concepts and pieces of an AWS Lex bot, that might be the route for you.
>
> **[0:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=27)** It depends on what you're developing.
>
> **[0:29](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=29)** Do you need to be able to create bots on the fly?
>
> **[0:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=32)** Will your app generate bots or manage them in some way?
>
> **[0:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=34)** If so, the API is something that you might want to look into.
>
> **[0:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=38)** This course will get you started on that path.
>
> **[0:40](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=40)** Also, if you intend to call Lambdas from your bots, you'll need to know how those work, too.
>
> **[0:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=44)** So I recommend looking up courses on that.
>
> **[0:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=46)** When you're ready to get started with the command line interface, look into the Getting Started section for Lex.
>
> **[0:52](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=52)** There's also an API reference section there.
>
> **[0:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=54)** The Lex console is where we'll be spending our time making our bots.
>
> **[0:58](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=58)** That will be our bot factory.
>
> **[1:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=60)** Maybe "laboratory" is a better word 'cause our bots are so smart.
>
> **[1:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=64)** As I mentioned, we won't need to do any real coding in creating our bots, though the client apps will need to be coded.
>
> **[1:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=70)** It's still technical, but the heavy-lifting work has been done for us.
>
> **[1:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=74)** The console is where we'll create our bots, their intents, and slots.
>
> **[1:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=79)** It's also a great way to test our bots, interactively.

> [!info]- Semantic Content
>
> **Env Vars:** aws (3), api (3), iam (1)
> **Code Keywords:** interface (3), delete (1)
> **CLI Commands:** aws (3)
> **Tools:** command line (3)
> **Prerequisites:** you'll need (1), getting started (1)
> **Documentation:** api reference (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Creating a Bot

#### Lex Bot creation
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=0)** - [Instructor] Now that you have your AWS account, you can go to the aws.[amazon.com](https://amazon.com) site and sign into the console or you can go directly to console.aws.[amazon.com](https://amazon.com) if you're already logged in.
>
> **[0:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=15)** And here we see the familiar list of services that we've recently visited, and scrolling down, all these other helpful information tabs and sections of the website to lead us in our development.
>
> **[0:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=28)** I'm going to come up here to the search bar and just type Lex and go to Amazon Lex, and here is where I can create my chatbots.
>
> **[0:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=36)** Now, I don't have any chat bots yet, so the list is empty, but later, it will be populated with the one that we create, and it's going to be so easy to create.
>
> **[0:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=44)** It's just basically typing in a name.
>
> **[0:47](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=47)** So I'm going to click Create Bot, and I'm going to create a blank bot.
>
> **[0:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=51)** You can also start with an example or transcripts, and I encourage you to look into that later, but for now, just getting started, I want you to just create a blank bot like me.
>
> **[1:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=60)** In the name, I'm going to name it OrderMeal, and later, we're going to break this up into multiple paths, but for now, we're going to be kind of generic and just say OrderMeal.
>
> **[1:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=70)** You can give it a description, if you like.
>
> **[1:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=72)** We also have to create an IAM permission role, and I'm going to have it create a role for me with the basic Amazon Lex permissions.
>
> **[1:20](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=80)** This is easy, but it also creates the role to be separate from any other roles that are already being used.
>
> **[1:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=87)** If you're familiar with IAM, then you might want to use an existing role, because you're using it across different services or you might want to specify the permissions at this time, and you've already got a role.
>
> **[1:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=99)** I encourage you to go check out the AWS course on IAM for that type of configuration for authorization.
>
> **[1:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=106)** Also, this is not subject to COPPA, so I'm going to click no, and for the idle session timeout, I'll leave it at five minutes.
>
> **[1:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=113)** The advanced options are just for tags, so I'm not going to add any tags.
>
> **[1:57](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=117)** I'm just going to click next.
>
> **[2:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=120)** And once we get to this page, we select our first language we want to add to the bot.
>
> **[2:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=124)** I'm going to leave it as English, and then you pick a voice.
>
> **[2:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=128)** I'm going to scroll down and just pick one.
>
> **[2:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=129)** I'll pick Ruth.
>
> **[2:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=130)** The intent classification confidence score threshold.
>
> **[2:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=134)** Whenever the user provides input, the chat bot gives it a confidence score.
>
> **[2:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=139)** If it falls below the score, as far as the bot can't exactly determine what the user is saying, it will go to the fallback intent, and we'll look at the fallback intent once we get our bot initially created.
>
> **[2:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=152)** So if it's really confident and we know this is exactly what the user said, then it's going to be closer to one.
>
> **[2:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=159)** If it falls below this score, the default of 0.4, then it goes to the fallback intent, not being able to understand what the user wants to do.
>
> **[2:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=166)** Okay, so I'm going to leave it at the default 0.4, click Done, and now I've done everything necessary to create my bot.
>
> **[2:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=173)** This will create a default intent for me.
>
> **[2:55](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=175)** This is a script for the whole process of the bot and the fallback intent for when it doesn't really know what to do.
>
> **[3:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=183)** So we're going to be looking at these intents more right away in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** iam (3), aws (2), coppa (1)
> **CLI Commands:** aws (4)
> **UI Navigation:** go to (3), scroll down (1)
> **URLs:** [amazon.com](https://amazon.com) (2)
> **Versions:** 0.4 (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** getting started (1)

#### Intents
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=0)** - [Instructor] Okay, so I created my first bot and that was super easy.
>
> **[0:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=4)** Just basically gave it a name and said a couple of things and it created for me.
>
> **[0:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=8)** As it says here, we've added an intent to get you started.
>
> **[0:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=11)** My bot's created and it's got its first intent.
>
> **[0:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=15)** Intents are the scripts for our bot to interact with the user.
>
> **[0:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=19)** My first intent was created for me but it's basically blank.
>
> **[0:23](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=23)** I can review the conversation flow.
>
> **[0:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=25)** This kind of gives me an example of what to expect and how the bot can interact with the user.
>
> **[0:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=32)** So this is what you expect to happen, this back and forth collecting of data to be able to get information to determine what the user wants to do inside of your chat bot.
>
> **[0:42](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=42)** I need to provide similar information to the bot so it knows what my users want to do, and specifically in this bot for ordering a meal.
>
> **[0:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=51)** So I can change the name here in the intent details.
>
> **[0:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=54)** And I can add a description.
>
> **[0:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=56)** Here's the ID.
>
> **[0:57](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=57)** We'll need that at some point.
>
> **[0:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=59)** The contexts are basically variables that can be passed into or passed from my intent.
>
> **[1:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=66)** So either from other intents or to other intents and so forth.
>
> **[1:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=70)** The sample utterances, this is what kicks off our bot.
>
> **[1:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=74)** So basically when the user types in something like I want to order dinner, as opposed to, I need tickets to a movie.
>
> **[1:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=82)** When they pick up on these certain utterances of ordering and dinner or a meal, depending on what utterances we put in here, it will know to kick off this script.
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=93)** And then they can start interacting with the bot to collect the information to be able to fulfill this process.
>
> **[1:40](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=100)** After the utterance, the bot has an initial response, some kind of question or information like where would you want to order dinner from?
>
> **[1:48](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=108)** What would you like to order?
>
> **[1:50](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=110)** And so forth.
>
> **[1:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=111)** Slots are kind of internal variables for this intent to be able to get information out of what the user is saying or typing.
>
> **[2:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=120)** So these would be like the blanks in a sentence.
>
> **[2:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=123)** I want to order X.
>
> **[2:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=125)** And what we're looking for there, that slot is what the user wants to order for dinner.
>
> **[2:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=130)** And we have to pick up on that word, and then we store it in a slot.
>
> **[2:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=135)** Then once the interaction's done, we have this confirmation section that can basically ask the user, are you sure you want to order 5,000 pizzas?
>
> **[2:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=144)** And they can say yes or no.
>
> **[2:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=145)** If they say yes, it goes to fulfillment.
>
> **[2:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=148)** If they say no, then it can go back into either the fallback intent or some part of the process that you define.
>
> **[2:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=157)** Finally, once it's all done with fulfillment you can have a closing response.
>
> **[2:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=161)** Down here at the bottom, we can optionally set up a Lambda that gets called.
>
> **[2:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=165)** Lambdas are serverless functions that can be written in a variety of languages.
>
> **[2:49](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=169)** I encourage you to check out the course on Lambdas.
>
> **[2:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=171)** Very, very powerful.
>
> **[2:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=173)** It allows you to use almost all AWS services from code based on logic.
>
> **[2:58](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=178)** So the information could be passed from your intent to the Lambda and it gets processed, checks things in the database, whatever it needs to do to determine how to fulfill this request.
>
> **[3:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=188)** And then it can send it back and you finish.
>
> **[3:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=191)** You can also call Lambdas from these conditional branching pieces which are throughout the intent.
>
> **[3:16](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=196)** We'll be looking at some of those as we go.
>
> **[3:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=199)** If I click up here on the left back to intents, I can see the list of intents that I have now.
>
> **[3:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=205)** I can also see the slot types and a variety of other things about my bot.
>
> **[3:29](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=209)** This would allow me to define more intents with add intent.
>
> **[3:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=214)** I can also define my slot types, which we'll be doing as we go forward.
>
> **[3:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=218)** And if you scroll down, there's also a list of things for deployment, analytics and so forth.
>
> **[3:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=224)** So we have our first intent.
>
> **[3:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=225)** Let's start working on that and we'll do it in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (2), super (1), finally, (1), let (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Kicking off the conversation
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=0)** - A given intent is engaged by Lex when the user says or types of phrase that the bot can match up with an intent, this is defined in the sample utterances of a given intent.
>
> **[0:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=12)** An intent can have several variations here because often users will say the same things in many ways.
>
> **[0:20](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=20)** I'm going to click on new intent here and go into the details, as we looked at in the previous video.
>
> **[0:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=27)** Here, I can change the name, this intent is going to be for ordering food.
>
> **[0:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=31)** So I'll name it, order food as opposed to drinks or dessert or something else.
>
> **[0:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=37)** So I want utterances for this intent that makes sense for the food part of the meal.
>
> **[0:43](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=43)** I'm going to scroll down to sample utterances and I can add additional utterances down here at the bottom of this section.
>
> **[0:50](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=50)** And it has an example, I want to book a flight, of course, that would be for travel, for ordering food as part of a meal, I might say something like, I want to order dinner.
>
> **[1:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=60)** So I'll type that in, hit return and add another one like I am hungry.
>
> **[1:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=66)** Also, can I order food?
>
> **[1:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=69)** We don't put in punctuation here, we don't need to match that from the user.
>
> **[1:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=74)** I'd like to get something to eat, maybe.
>
> **[1:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=79)** And the bot will determine based on the input of the utterances, combinations of these.
>
> **[1:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=87)** So if the user typed in, can I order dinner?
>
> **[1:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=91)** That should work as well.
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=93)** Or I would like to get dinner, or, I'm hungry for dinner.
>
> **[1:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=98)** So variations of this should work perfectly fine to kick off this intent based on those sample utterances.
>
> **[1:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=106)** I can also save this intent on the bottom right and then view it in the visual builder.
>
> **[1:50](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=110)** There's really not much for this one to see just yet but you can see that the utterance starts here.
>
> **[1:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=116)** I want to order dinner and the variations will go into the code hook for the Lambda and then have successful failure or a timeout to end the conversation.
>
> **[2:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=127)** I prefer the flow top to bottom kind of editor here but the visual editor is nice to see that at least you're doing something that makes sense.
>
> **[2:16](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=136)** So now I want to create a second intent,.
>
> **[2:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=139)** so again, I'll save this intent simply because the button is available there for saving and it was active.
>
> **[2:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=145)** Makes me think maybe I didn't save something.
>
> **[2:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=148)** I'm going to create a another empty intent.
>
> **[2:30](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=150)** The built-in intents are for things like canceling, fallback, help, kind of standard stuff that you might want to use if you're going to include some of those, start over or stop, that kind of thing.
>
> **[2:42](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=162)** You don't have to reinvent the wheel there but I'm going to create another empty intent called order dessert.
>
> **[2:47](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=167)** So this one is going to be very similar to what I've already created, but with some different utterances.
>
> **[2:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=173)** Maybe some things like I want to order dessert or I have a sweet tooth, or I'd like something sweet.
>
> **[3:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=186)** How about dessert?
>
> **[3:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=188)** Whatever variations you think might apply to your bot, you could type in here.
>
> **[3:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=192)** And again, Lex should determine the combinations of these, what the user is saying, and if not, go to the fallback.
>
> **[3:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=199)** So I'm going to save this intent and I want to test to make sure that whatever I type it calls the right intent.
>
> **[3:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=204)** So in the next video, that's exactly what I'm going to do.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (1), scroll down (1), go to (1)
> **Code Keywords:** else. (1), lambda (1)
> **Cross-References:** previous video (1), in the next (1)
> **CLI Commands:** make (1)
> **Speakers:** - a (1)

#### Testing the bot
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=0)** - [Instructor] Now that I have my two intents, and depending on what I say or type into the bot, it should do different things and I want to be able to test that.
>
> **[0:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=9)** It's pretty easy.
>
> **[0:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=10)** As long as my intent that I'm editing is saved we're ready to build it, and I can click that on the top right and then I can click test.
>
> **[0:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=19)** Now the building may take 30 seconds ish so once that's ready I can click test and start interacting with my bot.
>
> **[0:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=27)** Now that it's built, I can click test and I can start interacting with my bot by typing into the text field.
>
> **[0:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=33)** And I can say something like, I'm ready for dinner and it's going to kick off the order food bot.
>
> **[0:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=39)** Now we don't do anything.
>
> **[0:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=41)** There's no response, there's no collecting of data so it just says it's fulfilled.
>
> **[0:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=45)** And if I click on the inspect button I can see kind of the summary and I can see the JSON input and output.
>
> **[0:52](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=52)** So this is actually what's being sent back and forth from what I type in to the bot itself and what comes back.
>
> **[0:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=59)** I should also be able to type in here something that would kick off the order dessert like I want dessert and there's order dessert fulfilled.
>
> **[1:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=69)** I wonder if I can confuse the bot to say I want a sweet dinner, and it kicks off the order dessert.
>
> **[1:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=75)** So I might need to kind of refine some of these pieces so that it's using the right utterances with the right intents.
>
> **[1:23](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=83)** I could type something in here like I need a book and it goes to food.
>
> **[1:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=88)** So again, that's not what we want it to do.
>
> **[1:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=91)** What about what time is it?
>
> **[1:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=94)** And it goes to fallback.
>
> **[1:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=96)** So the fallback, again, isn't actually doing anything in this case, and we can build that out to also do things to interact with the user.
>
> **[1:43](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=103)** Maybe even if it just says I'm not sure what you're trying to do.
>
> **[1:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=106)** Would you like to try again?
>
> **[1:47](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=107)** So there's a bunch of things we need to fill in for these things.
>
> **[1:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=111)** We might need to refine our utterances and eventually flesh out the fallback intent as well so that when things go wrong the user knows it and hopefully knows what to do.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1)
> **Env Vars:** json (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Challenge: OrderDrink intent
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-orderdrink-intent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-orderdrink-intent?u=76281980&t=0)** - [Instructor] Okay, it's time for a challenge.
>
> **[0:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-orderdrink-intent?u=76281980&t=8)** For this challenge, I want you to create your own intent.
>
> **[0:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-orderdrink-intent?u=76281980&t=11)** I want you to create when to start taking the drink order for this meal.
>
> **[0:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-orderdrink-intent?u=76281980&t=15)** So you can look back at the previous videos and see how to do it.
>
> **[0:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-orderdrink-intent?u=76281980&t=18)** But I have a feeling it's pretty easy for you.
>
> **[0:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-orderdrink-intent?u=76281980&t=21)** I think you're going to do just fine.
>
> **[0:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-orderdrink-intent?u=76281980&t=22)** You have to think about what kind of utterances you need for that, but I'm sure you're going to do great.
>
> **[0:26](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-orderdrink-intent?u=76281980&t=26)** So good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: OrderDrink intent
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=0)** - [Instructor] Okay, so I hope that challenge was really interesting and informational.
>
> **[0:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=9)** You probably had a pretty easy time with it.
>
> **[0:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=11)** It's pretty straightforward.
>
> **[0:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=12)** I'm going to close this test window over here, and I'm going to go back to my list of intents, and the challenge was to create a new intent for taking the drink order, and so far what we've done with these intents is basically two things.
>
> **[0:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=27)** We create an empty intent, and we just give it a name, and I'm going to call this one OrderDrinks, click Add.
>
> **[0:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=34)** The only other thing we've done so far to create this intent is the sample utterances.
>
> **[0:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=38)** So I would put some things in here for the utterances, such as I want to order drinks.
>
> **[0:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=45)** Maybe, I'm thirsty.
>
> **[0:48](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=48)** I'd like a beverage.
>
> **[0:52](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=52)** What do you have to drink?
>
> **[0:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=56)** Whatever the utterances are that you want to kick off this intent in your bot, that's what you put in here.
>
> **[1:02](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=62)** That's what we've done so far, and then I can save this intent, build it again and test it just like I did before.
>
> **[1:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=68)** I hope that's something along the lines of what you did.
>
> **[1:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=70)** I'm sure it is.
>
> **[1:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=71)** In the next chapter, we're going to start looking at the slots, where we store the data from the user that allows us to fulfill this bot's functionality for their use.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** such as (1), just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Slots and Slot Types

#### Slot types
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=0)** - [Instructor] As the user and the bot step through this intent and go back and forth, the intent needs to fill in the blanks to certain kind of sentences of the information that the user is trying to tell the bot and then the bot can use to fulfill the whole purpose of ordering the food in this case.
>
> **[0:20](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=20)** It may be looking at the type of food that the user wants to order, where to order it from and so on.
>
> **[0:26](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=26)** And these blanks in these sentences, they're called slots.
>
> **[0:30](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=30)** So down in our intent, we have these slots.
>
> **[0:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=33)** For each item that we want to collect from the user, we would create this slot where we put the data.
>
> **[0:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=39)** So in here I can click on info next to slots and I can see these built-in slot types.
>
> **[0:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=45)** If I click on that, it opens up another page in the documentation to these built-in slots.
>
> **[0:50](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=50)** Now there's alphanumeric which is very kind of general and generic.
>
> **[0:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=54)** There's city, country, date.
>
> **[0:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=56)** There's these built-in slots to where if I'm collecting something like an email address or a number, they're predefined to be able to recognize information in a variety of formats depending on what the user says.
>
> **[1:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=68)** So for example, duration, if I click on that we know that people say these things in different forms like 10 minutes, 45 seconds, or they might say a given time or they might say 90 minutes instead of an hour and a half.
>
> **[1:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=82)** Who knows how people are going to say it but this one that's provided by Amazon will handle those pieces for you.
>
> **[1:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=88)** So again, if you have a piece of data, a slot in your intent, and the type of data matches one of these slot types, well then a lot of the work's already done for you.
>
> **[1:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=99)** That doesn't mean if you have some other type of data like food or restaurant type, it's going to be difficult.
>
> **[1:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=104)** That's not the case at all.
>
> **[1:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=105)** It's just those slots are going to be a little bit more ahead of the game as far as like detecting the way people say certain things like time and so forth.
>
> **[1:55](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=115)** But we're going to make our own slots and you're actually going to see it's pretty easy.
>
> **[1:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=119)** If you have something that's a common slot type, then you could use those.
>
> **[2:02](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=122)** But we're going to make our own and we'll start doing that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (2), case. (1)
> **UI Navigation:** click on (3)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Custom slot types
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=0)** - [Narrator] As I mentioned, slots are like the blanks in sentences.
>
> **[0:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=3)** We need to fill with the user's input.
>
> **[0:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=5)** Something like what type of food they want to order.
>
> **[0:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=7)** We need a slot for that.
>
> **[0:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=9)** Now, there isn't a slot type for food but we can create when using alphanumeric and store their data in there.
>
> **[0:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=15)** So once the user says something like, "I want to order dinner, can I order food," so forth and this intent gets kicked off, we have the option of giving them an initial response.
>
> **[0:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=25)** We could say something like, "Okay, let's order food.
>
> **[0:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=31)** And that way they know that they're in the right place, they're running the right bot, as opposed to saying, "What would you like for dessert," or so forth.
>
> **[0:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=39)** Then we start adding our slots again.
>
> **[0:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=41)** This is where we're going to store their responses to the different prompts.
>
> **[0:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=45)** So I'm going to add a new slot.
>
> **[0:48](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=48)** I'm going to name it food.
>
> **[0:50](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=50)** And since there isn't a specific food slot type, I'll just use alphanumeric.
>
> **[0:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=53)** That's perfectly fine.
>
> **[0:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=54)** That'll take their response.
>
> **[0:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=56)** And then in here, I can type something like, what type of food would you like?
>
> **[1:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=63)** And that's the prompt that will be either sent to them in text or spoken to them, depending on how they're interacting with the bot.
>
> **[1:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=70)** I can add that.
>
> **[1:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=71)** And now I can use that slot in the confirmation message.
>
> **[1:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=74)** So I can say something like, "Are you sure you want to order?"
>
> **[1:23](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=83)** And then in brackets, food, the name of the slot.
>
> **[1:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=87)** And if they decline, if they say no, I can say, "Okay, thanks anyway."
>
> **[1:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=91)** Something like that.
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=93)** And then when I build and test this, I can say, "I want to order pizza."
>
> **[1:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=97)** And then I should get that stored in the slot and I can validate that by seeing it in the confirmation message.
>
> **[1:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=106)** Once it's built and ready to test, I can say, "Order dinner."
>
> **[1:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=111)** Sometimes when I see that the session ID is missing, I just refresh the page and it works the next time.
>
> **[1:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=116)** Now that I've refreshed the page, I'm going to click Test again and try it again.
>
> **[2:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=121)** Order dinner.
>
> **[2:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=123)** Okay, let's order food.
>
> **[2:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=124)** What type of food would you like?
>
> **[2:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=125)** Pizza? Are you sure you want to order pizza?
>
> **[2:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=128)** Yes. And then it finishes fleshing out the script of the intent, which doesn't do anything.
>
> **[2:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=134)** So it's fulfilled.
>
> **[2:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=135)** But if I do it again, order dinner.
>
> **[2:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=137)** What type of food would you like?
>
> **[2:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=139)** Pizza. Are you sure you want to order pizza?
>
> **[2:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=141)** No. Then it says, "Okay, thanks anyway," and then it's done.
>
> **[2:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=145)** So now I can start over and order something else.
>
> **[2:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=148)** I could order drinks instead, whatever I need to do.
>
> **[2:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=151)** So this is the way we fill in the slots with the data from the user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type, (1), this, (1), else. (1)
> **Speakers:** - [narrator] (1)

#### User input prompts
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=0)** - [Instructor] I want the user to specify where they want the food to be dropped off.
>
> **[0:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=5)** Unlike the food, which can be basically anything, I want to have some kind of list where they can say certain things and have kind of a short list of options of where to drop the food off.
>
> **[0:16](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=16)** That way they can just say front door, the lobby, mailbox, whatever the locations I want to provide.
>
> **[0:23](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=23)** So to do that, I need to make a custom slot type.
>
> **[0:26](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=26)** So up in my breadcrumb trail, I am going to select the bot.
>
> **[0:30](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=30)** And over on the left side there's the slot type.
>
> **[0:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=34)** So I click on that and I'm going to add a new slot type.
>
> **[0:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=37)** So I click this dropdown, and again, there's some built-in ones and other types that you can look into.
>
> **[0:43](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=43)** For this course, we're just going to use the blank slot type.
>
> **[0:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=46)** So I click that and I give it a name.
>
> **[0:48](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=48)** So I'm going to name it drop off LOC, drop off LOC, like drop off location.
>
> **[0:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=53)** And I'll add that.
>
> **[0:55](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=55)** So from here I can specify if I want to have expand values, which trains over time to understand what are the common values that users respond to for this slot.
>
> **[1:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=67)** I actually want to restrict the slot values.
>
> **[1:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=70)** So I'll click restrict to slot values and then I can specify all the values I want to support.
>
> **[1:16](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=76)** In this case, I'm going to type in front door and then over in the second field I'm going to specify some variations to this.
>
> **[1:23](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=83)** So I'm going to say front, and then I type the tab and then door and maybe entrance or something like that.
>
> **[1:30](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=90)** And then I add that value.
>
> **[1:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=91)** Another place that they could select to drop the food off might be porch, and I'll add patio to that one and deck, for example.
>
> **[1:40](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=100)** Add that value and then finally, I'll have lobby.
>
> **[1:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=104)** So for a building, there might be a lobby.
>
> **[1:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=106)** They might also call it the foyer, entryway, the front desk, something like that.
>
> **[1:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=114)** So I'll add those values and whatever other variations I want to support, I can type those in there.
>
> **[1:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=119)** Then I'll save this slot type and back in my intent I want to add a new slot for this.
>
> **[2:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=124)** So I'm going to go back to my intents over on the left, back to my order food.
>
> **[2:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=132)** And I will scroll down to add a new slot.
>
> **[2:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=137)** So I've already got my what type of food to order.
>
> **[2:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=139)** Now I'm going to add the drop off location.
>
> **[2:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=142)** So I'm going to name this drop off location.
>
> **[2:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=145)** And the slot type will be the one that I justified drop off LOCK.
>
> **[2:29](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=149)** And the prompt will be something like, where would you like the food delivered?
>
> **[2:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=156)** It might be a little confusing.
>
> **[2:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=157)** That might sound like an address.
>
> **[2:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=158)** So maybe dropped off.
>
> **[2:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=161)** And then I'll click this add and I can build and test this again and make sure that I get prompted for the right thing.
>
> **[2:48](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=168)** I can also add this to my confirmation and add to the left at the drop off location in my Confirmation.
>
> **[2:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=179)** Now it should say are you sure you want to order pizza left at the front door, for example?
>
> **[3:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=185)** So if I save this, I can build it and test again.
>
> **[3:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=191)** Once it's ready to test, I can click test.
>
> **[3:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=194)** And again, I can type in for my information or I could use this microphone.
>
> **[3:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=198)** I have to allow permissions, order dinner, would like pizza.
>
> **[3:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=217)** Pizza, front door.
>
> **[3:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=231)** Yes, and since I said yes it fulfilled this because we don't actually have the rest of the intent done, but we're getting there.
>
> **[4:02](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=242)** And you can see it was a little bumpy.
>
> **[4:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=243)** We probably need to make a few changes in there some of the wording and how we word it so that the response is also worded in the way we want but working pretty smooth for just typing in some fields.
>
> **[4:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=254)** I'm pretty encouraged.
>
> **[4:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=254)** I hope you are too.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (4), this. (2), case, (1), finally, (1), this, (1)
> **UI Navigation:** select the (1), click on (1), dropdown (1), scroll down (1)
> **CLI Commands:** make (3)
> **Env Vars:** loc (2), lock (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Confirmation prompts
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=0)** - [Instructor] Okay so we want to be able to handle their responses really well.
>
> **[0:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=3)** We also want to make sure that our sample utterances, our slot types, all these things are worded as best as possible so that we get the information efficiently.
>
> **[0:13](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=13)** There was that typo in here.
>
> **[0:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=14)** "What type of food would like?"
>
> **[0:16](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=16)** It should be you like, that's an easy one to fix.
>
> **[0:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=19)** No big deal there.
>
> **[0:20](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=20)** And I can close my testing now and save my intent.
>
> **[0:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=24)** Also, as we looked at the confirmation, there's more we can do in here as well.
>
> **[0:29](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=29)** If I go into the advanced options, I can actually handle this logic with a little bit of settings in here.
>
> **[0:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=36)** I already have the confirmation prompt and I can handle the response with a confirmation response and the decline response.
>
> **[0:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=44)** So let's say in the confirmation response, I want to add some conditional branching.
>
> **[0:49](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=49)** I might want to do different things depending on the data that's actually in there.
>
> **[0:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=54)** So I could type something in here, like if food equal pizza, then maybe I want the response to be something specific like, "Enjoy the pizza," or "Your pizza will arrive hot soon."
>
> **[1:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=74)** And I can update those options.
>
> **[1:16](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=76)** Whereas the default flow, I might want to have just a generic response like, "Enjoy your meal," and maybe no other conditions or advanced settings.
>
> **[1:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=88)** Similarly, in something like a branch, I could specify some calling of code in here, I can jump to a specific place in an intent.
>
> **[1:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=99)** I can invoke the dialogue code hook.
>
> **[1:42](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=102)** This would invoke a Lambda or I can go straight to the closing response.
>
> **[1:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=106)** Anything I need to specify in here for conditional branching of based on values of the confirmation from the user, I can do in here.
>
> **[1:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=114)** I'm going to cancel that, I didn't change anything, but now I should get a specific message whenever I build this and test and order pizza as opposed to something else.
>
> **[2:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=124)** So once I build this, I should be able to test it again and be able to see if that flow is being handled in the confirmation prompt.
>
> **[2:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=135)** Now that it's ready to test, I should be able to go through it like I did before.
>
> **[2:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=139)** And I'll specify pizza and I'll say front door.
>
> **[2:26](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=146)** And then when I say, yes, "Your pizza will arrive hot soon."
>
> **[2:30](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=150)** Now, if I had ordered something else, it would've just done the normal generic response for the default.
>
> **[2:35](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=155)** And you can put in a bunch of these different branches depending on what you want to do.
>
> **[2:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=158)** Maybe when they say they want pizza, the next step in the conversation would be to call another intent for handling what kind of toppings they want on their pizza, that kind of thing.
>
> **[2:49](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=169)** So you can see how this can get more and more complicated to give you more and more power to create a great interactive bot for your users.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), lambda (1), else. (1), this, (1), else, (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a restricted slot
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980&t=0)** (pleasant music)
>
> **[0:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980&t=5)** - [Instructor] Okay, so in this challenge, I want you to create your own restricted slot.
>
> **[0:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980&t=10)** So going back to the bot itself, you've got your slot types, and I want you to create a new slot type to restrict what restaurant the user can order from.
>
> **[0:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980&t=18)** So you're only going to accept, say, three values.
>
> **[0:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980&t=21)** You can make them up, whatever restaurant names you want, but the user has to select one of those.
>
> **[0:26](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980&t=26)** Obviously, if it's not one of those, it should ask them again, and you don't have to worry about that too much.
>
> **[0:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980&t=31)** But once you create the slot type, I want you to create the new slot using that type and then add the slot to the response.
>
> **[0:40](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980&t=40)** So it would say something like, are you sure you want to order food from restaurant to be left at drop off location?
>
> **[0:48](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980&t=48)** So add the slot type, add the slot, and add it to the confirmation message, good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (2), from. (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant music) (1)

#### Solution: Create a restricted slot
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=0)** - [Instructor] Okay, I hope that challenge was great.
>
> **[0:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=7)** I hope you did awesome, I'm sure you did.
>
> **[0:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=9)** I'm just going to go through how I would do it here.
>
> **[0:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=11)** So in my slot types, I'm going to click on add slot type and select add blank slot type, and I'll give it a name like RestSlot for restaurant slot.
>
> **[0:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=24)** So I'll add that and I want to make sure that it is a restricted slot type, so I'll click restrict to slot values.
>
> **[0:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=31)** And then I need to put the values in here.
>
> **[0:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=33)** In this case, I'm just going to make up some names of restaurants.
>
> **[0:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=36)** So there's not, maybe, going to be many variations.
>
> **[0:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=39)** I might do something like Great burgers and maybe the variation would be something like burgers.
>
> **[0:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=45)** And then I can add that value and then, maybe, I want to have a pizza place, Papa pizza and the variations would be papa and pizza.
>
> **[0:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=56)** And then finally, something like salad nation, so salad and nation, we'll do something like that.
>
> **[1:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=64)** Now, I have my various restricted values in my slot.
>
> **[1:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=68)** I can add it to my intent.
>
> **[1:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=70)** So I'm going to save the slot here and go back to my intents and select the OrderFood intent and this is where I'm going to add the new slot.
>
> **[1:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=81)** So just like I did before, I'm going to add a new slot and the name will be Restaurant.
>
> **[1:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=88)** The slot-type will be rest-type that I just defined, the RestSlot.
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=93)** And the prompt, from where do you want to order?
>
> **[1:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=99)** And I'll add that.
>
> **[1:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=101)** And now, I've got the slot-type in here, but the order is off a little bit.
>
> **[1:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=105)** So I'm just going to drag this restaurant slot up above the drop off location.
>
> **[1:50](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=110)** And now, it's going to ask type of food, from where, and where do you want it dropped off.
>
> **[1:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=114)** And finally, I want to put it into the confirmation.
>
> **[1:57](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=117)** Same thing, I wanted the order to be the same, from restaurant.
>
> **[2:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=124)** Are you sure you want to order food from Restaurant left at the DropOffLocation?
>
> **[2:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=129)** So I'll save it now and once again, I'm going to build it and test it and make sure it prompts me for the restaurant, accepts the valid values, and allows me to see the restaurant location in the confirmation message.
>
> **[2:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=145)** Okay, so if I test it and I say, I want to order food.
>
> **[2:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=151)** What type of food would you like? Pizza.
>
> **[2:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=154)** From where do you want to order? Papa Pizza.
>
> **[2:40](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=160)** Where would you like it dropped off? Door.
>
> **[2:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=164)** Is it the front door? Yes.
>
> **[2:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=166)** Your pizza will arrive hot soon.
>
> **[2:47](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=167)** But what if I say, order dinner and I say, pizza and then I say, clown shoe?
>
> **[2:58](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=178)** From where do want to order?
>
> **[2:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=179)** It won't accept a value that's not in the list or some variation of that.
>
> **[3:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=183)** So this is a great way to limit user selections, but still allow them to be interactive and allow for variety.
>
> **[3:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=191)** So if I say, Papa, there you go, it works good.
>
> **[3:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=195)** So now, we're limiting this, and I hope that challenge went well.
>
> **[3:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=198)** I hope this is basically how you did it, congratulations.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (2), finally, (2), case, (1), this, (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (1), select the (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Responses

#### Closing response
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=0)** - [Instructor] So we've been working our way top down through this intent starting with the sample utterances, where the user kicks off the intent, and then the initial response, the slots that get filled based on the user's input and the confirmation based on telling them, "Well, this is what we understand you want to do.
>
> **[0:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=18)** Do you want to do that?"
>
> **[0:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=19)** We're going to skip fulfillment for now and then we're going to go to the closing response.
>
> **[0:23](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=23)** So in the closing response, we can put something pretty basic.
>
> **[0:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=27)** You notice the example is just thanks.
>
> **[0:29](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=29)** So it could say something like, "Goodbye.
>
> **[0:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=32)** Enjoy the," and then in the curly braces, "food."
>
> **[0:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=38)** I try to keep it really generic because all the different paths through here and getting the different data, we might've already said something like enjoy your food, so I try to keep this one pretty simple.
>
> **[0:48](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=48)** You notice again, the example was just thanks.
>
> **[0:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=51)** You can also provide variations of this.
>
> **[0:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=53)** You might want to just say, "Thanks.
>
> **[0:58](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=58)** Goodbye.
>
> **[0:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=59)** See you soon."
>
> **[1:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=60)** Something like that.
>
> **[1:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=61)** There's also this more response options.
>
> **[1:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=63)** We can click on this and see some additional things we can do in here.
>
> **[1:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=67)** Now, most of these settings are the same but we have this Add button up here that we can have text message group, a card group, and so forth.
>
> **[1:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=74)** This card group is what I want to focus on.
>
> **[1:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=77)** This allows you to present the user with a user interface to select options.
>
> **[1:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=82)** So that would work great for our restaurants, right?
>
> **[1:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=85)** So if I close this and go back up to my prompts for the restaurants, here it is, and click on Advanced Options, I can add a card here and I'm going to do that in the next video.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (1)
> **Code Keywords:** this. (1), interface (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Prompting with card group
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=0)** - [Instructor] So I want to be able to prompt the user for the restaurant without them having to even specify it.
>
> **[0:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=5)** I can provide them with the options.
>
> **[0:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=6)** So back up in my slots, I'm going to expand the restaurant prompt and go to advanced options, and then I'm going to scroll down to the slot prompts and expand that, and go to more prompt options.
>
> **[0:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=21)** Then in here I go down to slot prompts and click add, and there's the card group.
>
> **[0:26](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=26)** This will present them basically a card where they can select the input.
>
> **[0:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=31)** So I'm going to scroll down to the card group.
>
> **[0:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=36)** You can put an image URL in here.
>
> **[0:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=38)** You can set a title, like where do you want to order from?
>
> **[0:43](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=43)** Subtitle, restaurant, or you could reverse this, whatever you want it to display like.
>
> **[0:49](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=49)** And then you can specify these buttons.
>
> **[0:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=51)** Now the buttons are going to present something to the user, but then the value of the button is going to be what they would have typed in to make the same selection.
>
> **[1:02](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=62)** So I might put something in here like Great Burgers, and then in here I just put burger, something like that.
>
> **[1:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=69)** Whatever the value from this slot type, that's valid.
>
> **[1:13](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=73)** So I might just put great burgers in here.
>
> **[1:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=75)** Then add another button, and I could put in Papa Pizza, and over here, put in papa.
>
> **[1:23](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=83)** I think that would work.
>
> **[1:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=85)** And then the last one was Salad Nation, and over here I could put in salad or one of the other variations.
>
> **[1:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=92)** Those should work.
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=93)** It would be when they tap this button, it's as if they typed in Great Burgers.
>
> **[1:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=98)** So now I'm going to update the prompts, update the slot, build and test again, and this time, I should be prompted for the options for the restaurant.
>
> **[1:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=113)** Now when I test it, I can specify I want to order dinner.
>
> **[1:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=119)** What would you like?
>
> **[2:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=120)** Pizza, and then I get the cart.
>
> **[2:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=123)** This is where the image would go if I put in a URL for that.
>
> **[2:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=126)** I'm going to say Great Burgers, and then it's going to say, where do you want it dropped off?
>
> **[2:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=131)** Front door, and it gets the input from the prompt, instead of me typing or speaking.
>
> **[2:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=137)** It works the same.
>
> **[2:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=138)** This would be great for things like sizes, do I want small, medium, or large drink, or pizza or whatever?
>
> **[2:26](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=146)** So when you have a limited number of options for a response, you can restrict the slot, but then also use this card to present them with the only acceptable options.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), scroll down (2), select the (1)
> **Code Keywords:** this, (1), type, (1)
> **Env Vars:** url (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Closing response for dessert
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=0)** - [Instructor] Okay, it's challenge time.
>
> **[0:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=7)** In this challenge I would like you to add a response card to your closing response of your order food intent.
>
> **[0:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=17)** I want you to prompt the user with a card that basically asks if they want to order anything else, drinks or dessert.
>
> **[0:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=25)** Since they're ordering food you might want to switch to one of those.
>
> **[0:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=28)** You don't have to do anything with it for now, I just want you to ask them if they want to.
>
> **[0:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=32)** And then their response for those buttons could be order drinks, order dessert, which would kick off the other intents.
>
> **[0:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=39)** So there can be one really tricky thing about this and it has to do with the confirmation message up here.
>
> **[0:47](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=47)** In the advanced options if you followed along and did like I did and had this conditional branching, there's a difference between what happens when the food is pizza and the default flow.
>
> **[1:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=60)** So if you check both those out try each one and one may work and one may not, and you can try to figure out the difference but don't beat your head against the wall forever.
>
> **[1:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=71)** It's kind of a bonus little challenge.
>
> **[1:13](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=73)** But if you get one working, that's great and I'll show you the details in the next video.
>
> **[1:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=77)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** else, (1), switch (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Closing response for dessert
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=0)** - [Instructor] Okay, so let's check out this challenge on the closing response.
>
> **[0:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=8)** So I'm going to click on, if I don't already have the closing response, I'd want to expand that, and I'm going to select more response options, and then under the add, I will add the card group.
>
> **[0:20](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=20)** I scroll down and I see that card group, and I might say something like, "If you want to order more, click below."
>
> **[0:29](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=29)** And then the subtitle would be something maybe like options, and then I want to add a couple of buttons.
>
> **[0:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=37)** I could say drinks, and then that would basically be the same as if the user typed in order drinks, and then for button two, I could have dessert, and that would be as if they typed in order dessert.
>
> **[0:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=51)** So now I can update that response, save it, and it should be good to go.
>
> **[0:57](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=57)** I should be able to build and test it, but remember in the last video, I said there was kind of a little tricky situation here, and it's in this confirmation section.
>
> **[1:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=65)** If I go to the advanced options and scroll down where I see the branches, I have default flow, and when I expand the values, it goes to the closing response.
>
> **[1:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=78)** But this branch, what does it do?
>
> **[1:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=81)** It ends the conversation.
>
> **[1:23](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=83)** So I actually want to go to the closing response.
>
> **[1:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=87)** Otherwise, it won't prompt them for this input.
>
> **[1:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=92)** So I'll update the options, save the intent, and then build this and test it.
>
> **[1:40](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=100)** Now when I test it, I should get prompted at the end if I want to order anything else.
>
> **[1:47](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=107)** I want to order dinner, I'm going to say pizza.
>
> **[1:52](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=112)** From where would you order?
>
> **[1:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=113)** Papa, door, yes, and then I get prompted if I want to do some more, and I could say, I want to order drinks, and that automatically gets fulfilled.
>
> **[2:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=125)** If I hadn't done this, it would've just ended the conversation for when I ordered pizza.
>
> **[2:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=130)** It looks like I've got some quotes here.
>
> **[2:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=131)** Probably want to take those out.
>
> **[2:13](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=133)** That is in the closing response.
>
> **[2:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=137)** Just remove the quotes, save the intent, and I'm good to go.
>
> **[2:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=142)** So I hope that went well for you.
>
> **[2:23](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=143)** I'm sure it did.
>
> **[2:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=145)** Oops, I put a plus sign in there.
>
> **[2:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=148)** What do you know?
>
> **[2:29](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=149)** Okay, let's move on.
>
> **[2:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=151)** I hope you're having a great time.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (2), go to (2), click on (1)
> **Code Keywords:** let (2), else. (1), this, (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Publishing

#### Versions and aliases
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=0)** - [Instructor] Even before my bot is completely done, I may want to start thinking about how I'm going to test this.
>
> **[0:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=6)** And we can do that with versions and aliases.
>
> **[0:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=9)** If I click on Versions at the top in this breadcrumb trail, I can see the different versions that have been created for me.
>
> **[0:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=15)** There's one called the Draft version and I can create more versions.
>
> **[0:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=19)** So I might want to create versions every once in a while, of course, whenever there's a milestone in the feature set.
>
> **[0:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=25)** So I'm going to create a version as if I was just creating a version for let's say, testing.
>
> **[0:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=31)** 'Cause that's probably what I'm doing here.
>
> **[0:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=33)** And I really don't have to specify anything.
>
> **[0:35](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=35)** It's just going to create a version for me and it's not being used at all.
>
> **[0:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=39)** Version 1, there it is.
>
> **[0:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=41)** That's fine.
>
> **[0:42](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=42)** And I could create more versions of this as it goes.
>
> **[0:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=45)** So I have Version 1, but how do I use it?
>
> **[0:47](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=47)** Well, right now, I'm not.
>
> **[0:48](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=48)** I have to create an alias to point to this version.
>
> **[0:52](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=52)** So I'm going to click on Aliases over here on the left.
>
> **[0:55](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=55)** Now when I create an alias, I'm going to point it at a version.
>
> **[0:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=59)** So I might have an alias like test and this could be the testing alias, and it could point to whatever version is currently being tested.
>
> **[1:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=68)** So we'll say Version 1, no problem.
>
> **[1:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=71)** So I'll create that.
>
> **[1:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=72)** Well then later when I'm ready to release this, maybe I create another alias called production and point it at Version 1.
>
> **[1:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=79)** And then I create another version called Version 1.1 or 2 and I point test to that version.
>
> **[1:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=88)** That becomes the new test version.
>
> **[1:30](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=90)** And production is still on Version 1.
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=93)** So you can iterate these as you go and build out the new features.
>
> **[1:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=97)** And as you're ready to test or deploy them, set up the aliases to point to the applicable version.
>
> **[1:43](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=103)** That's how we set it up to be ready to test.
>
> **[1:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=106)** Now, we need to look at setting up a client to be able to use these for testing.

> [!info]- Semantic Content
>
> **Versions:** version 1 (6)
> **Code Keywords:** this. (1), while, (1), let (1), this, (1)
> **UI Navigation:** click on (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Client creation
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=0)** - [Instructor] Now that my bot's ready to test in AWS, I want a local client to be able to access it and run some of the commands, some of those utterances from the client so that I can test this interaction.
>
> **[0:13](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=13)** Now normally when I would do this in a project, I'd use Amplify or Amplify Studio.
>
> **[0:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=17)** These are great tools by AWS to configure and kind of manage your project.
>
> **[0:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=22)** In this case I'm just going to do it manually just to kind of cut to the chase and get to the point of connecting to this bot.
>
> **[0:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=28)** But typically, I would definitely use Amplify to manage this whole thing.
>
> **[0:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=33)** From the Amplify docs at docs.amplify.aws, I can see the typical "Get started for free" button.
>
> **[0:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=41)** I could jump directly to a language and platform by clicking one of those logos underneath it as well.
>
> **[0:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=46)** I'm just going to click on the "Get started for free".
>
> **[0:49](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=49)** I'm going to select JavaScript from the dropdown and then I'm going to go right to the Libraries tab over here.
>
> **[0:57](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=57)** This is going to get me integrate this into a project really quickly.
>
> **[1:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=61)** So I've got the prerequisites I need to have Node.js which we'll install NPM as well.
>
> **[1:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=66)** So I've already done that.
>
> **[1:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=68)** I've got that installed, but you would need to do that.
>
> **[1:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=70)** Don't really need to do NPM separately or Git.
>
> **[1:13](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=73)** I've already got an AWS account and I'm not going to use the Amplify CLI.
>
> **[1:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=78)** Again, I'm just going to straight to manually setting this up.
>
> **[1:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=81)** So I really don't need these other pieces of setting up this command line interface and associating it with an account and everything by configuring it.
>
> **[1:30](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=90)** So I'm just going to skip all these pieces.
>
> **[1:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=92)** Just make sure that I have NPM installed.
>
> **[1:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=94)** And then I'm going to go to Create your application.
>
> **[1:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=97)** Again, I pick my platform.
>
> **[1:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=99)** I'm going to use NPX so I'm going to copy this and I'm going to bring up the terminal.
>
> **[1:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=104)** In the terminal, I'm going to switch to my desktop and I'm going to run those commands which will create a directory, create a boilerplate project in there, and then also change directory to that directory.
>
> **[2:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=120)** Okay, so once that runs, I should have my basic project in there.
>
> **[2:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=124)** I can do an LS in this directory, and I could even do an NPM start to make sure that it will run this in a browser.
>
> **[2:13](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=133)** Once that starts up, looks good, I have the server running and my project was installed correctly.
>
> **[2:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=139)** If go back to the terminal, I probably want to stop that to run my next commands from the setup instructions.
>
> **[2:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=145)** So again, back and the documentation.
>
> **[2:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=147)** I'm going to skip the Amplify steps, and I'm going to go down to installing the framework that I need, the library, the AWS Amplify Library that I want to use inside my client.
>
> **[2:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=158)** Back in the terminal, I'll run that.
>
> **[2:42](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=162)** Once that's installed, I have everything locally I need.
>
> **[2:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=165)** I just need to start writing the code.
>
> **[2:47](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=167)** Now, this is creating the application.
>
> **[2:49](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=169)** I want to go into a specific service, and in this case it's interactions.
>
> **[2:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=173)** This is where the chatbots are.
>
> **[2:55](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=175)** Again, the getting started is all about setting these things up.
>
> **[2:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=179)** We have the version 2 portion down here at the bottom where we have this code for interacting with the service, or at least setting up the configuration.
>
> **[3:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=188)** So I'm going to copy that.
>
> **[3:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=190)** And again, back in the terminal, I'm going to edit the index.js.
>
> **[3:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=195)** I'm using VI. You can use whatever editor you want.
>
> **[3:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=198)** I'm going to delete all of the lines in here and I'm going to paste in the code that I just copied.
>
> **[3:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=208)** The only other thing that I need to add is this one part down at the bottom of also importing the interaction.
>
> **[3:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=213)** So I'm just going to copy that and back up at the top of the file, I'll add that to the import from Amplify.
>
> **[3:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=221)** So I already have Amplify being imported.
>
> **[3:43](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=223)** Now I'm going to import the interactions from that.
>
> **[3:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=226)** And notice we have a lot of fields we need to enter.
>
> **[3:49](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=229)** We have some Cognito identity pool and region and then a lot of settings for our bot.
>
> **[3:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=234)** So we're going to get these in the next two videos where we set up a Cognito pool.
>
> **[3:58](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=238)** Again, we're just going to do it quick and manually and then we're going to put in our bot settings and then all we have to do is start interacting with our bot.
>
> **[4:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=246)** So we're getting close. We're almost there.
>
> **[4:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=248)** So we'll go over those in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (5), npm (4), make (2), node (1), git (1)
> **Env Vars:** aws (4), npm (4), cli (1), npx (1)
> **Tools:** terminal (5), command line (1)
> **Prerequisites:** configure (1), install (1), setup (1), getting started (1), set up (1)
> **UI Navigation:** click on (1), dropdown (1), go to (1), switch to (1)
> **Code Keywords:** interface (1), switch (1), delete (1)
> **Cross-References:** in the next (2), go back to (1)
> **File Paths:** node.js (1), index.js (1)

#### Client preparation
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=0)** - [Instructor] The code I copied has several fields I need to fill in.
>
> **[0:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=3)** The first two have to do with an identity pool which is used in authorization.
>
> **[0:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=8)** Cognito is used to create identity pools.
>
> **[0:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=12)** AWS uses Cognito to give users permissions to call services.
>
> **[0:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=17)** Users get assigned permissions based on if they're logged in or not.
>
> **[0:20](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=20)** Users who are logged in tend to have authorization to use more services.
>
> **[0:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=25)** To create an identity pool, I need to go to Cognito and AWS.
>
> **[0:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=31)** From there, I can click on the left menu and select identity pools.
>
> **[0:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=36)** This will take me to creating a new identity pool.
>
> **[0:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=39)** All I have to do is give it a name and I'm going to name it MyBotPool.
>
> **[0:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=44)** And I do want to give unauthenticated users access into the pool.
>
> **[0:49](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=49)** So I'm going to enable access to unauthenticated identities with the checkbox.
>
> **[0:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=53)** And then down at the bottom right, I'll click create pool.
>
> **[0:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=59)** As it's creating this pool, I can view the details and see what the names of the roles are.
>
> **[1:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=65)** Particularly, I want to make note of this unauthenticated role.
>
> **[1:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=69)** So MyBotPoolUnauth, that's the one I need to add permissions to be able to hit the Lex bot.
>
> **[1:16](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=76)** So unauthenticated users can still access the bot.
>
> **[1:20](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=80)** So I'll click allow and then I'm done.
>
> **[1:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=84)** Now I've got some information for integrating this bot into various clients.
>
> **[1:29](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=89)** And here I have the region and the pool ID.
>
> **[1:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=92)** And that looks very similar to the information that I have in the code.
>
> **[1:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=97)** So I'm going to copy this pool ID right out of the text and notice that it's got the region built right into it, us-east-1.
>
> **[1:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=105)** So I'm going to copy that pool ID, and I'm going to come back here in my code and paste it right in there.
>
> **[1:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=111)** And then for the region, I can either copy and paste that or just type us-east-1.
>
> **[1:58](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=118)** So I want to make sure I save that.
>
> **[2:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=120)** And now the code is set up, but I need to go to IAM to make sure I give that unauthenticated role access to be able to hit the Lex bot.
>
> **[2:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=128)** Otherwise, I'd have to add login information to my client, let users log in, give them permission, so forth.
>
> **[2:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=134)** We just want to be able to test this, so we're going to let unauthenticated users hit it.
>
> **[2:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=139)** So back in AWS, I'm going to go to IAM.
>
> **[2:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=142)** I'm going to select roles on the left side and I want to look for that unauthenticated role.
>
> **[2:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=148)** And here it is, Cognito MyBotPoolUnauth Role, I'll click on that and I'm going to click over here on the right on add permissions and attach policies.
>
> **[2:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=158)** Now there's tons of policies that are provided by AWS and I encourage you to check out the IAM course here.
>
> **[2:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=166)** But I know that I want to add the LexRunBotsOnly policy.
>
> **[2:50](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=170)** So I'm going to check that and add permissions.
>
> **[2:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=173)** So now any client that uses this identity pool with an unauthenticated user will have access to be able to hit our bot.
>
> **[3:02](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=182)** Next, I need to get all of the Lex bot details from my code and fill in these other fields down at the bottom.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (4), make (3)
> **Env Vars:** aws (4), iam (3)
> **UI Navigation:** go to (2), checkbox (1), click on (1)
> **Code Keywords:** let (2), this, (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Gathering configuration data
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=0)** - [Instructor] So the next section in the code is for the interactions.
>
> **[0:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=3)** This is where we specify all the details about our bot and the alias that we wanted to hit.
>
> **[0:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=8)** So that's kind of related to the version and so forth.
>
> **[0:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=11)** So I'm going to go down to this section and see if there's anything that I can add without having to look it up.
>
> **[0:16](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=16)** So the first thing is the bot name.
>
> **[0:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=17)** And I know my bot name is OrderMeal and the second one is the same thing, it's the bot name.
>
> **[0:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=24)** So I'll just type in OrderMeal again.
>
> **[0:26](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=26)** And I know that the region is the same as the identity pool so I'll just type in us-east-1.
>
> **[0:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=32)** The Lex version two provider isn't something we have to change.
>
> **[0:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=36)** That's imported up here at the top, so we're fine there.
>
> **[0:40](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=40)** So I need to look up the alias id, the bot ID, and the locale id.
>
> **[0:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=45)** So the alias ID is easy enough to look up in AWS.
>
> **[0:49](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=49)** Here I'm at the aliases for the bots.
>
> **[0:52](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=52)** I'm going to click on the test alias that I created and there's the id.
>
> **[0:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=56)** So I can just copy that and paste it into the code.
>
> **[0:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=59)** So that's the alias id.
>
> **[1:02](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=62)** And then for the bot id, it's just as simple but instead I go to the bots, OrderMeal, and there's its id, and I can paste that in as well.
>
> **[1:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=75)** And the last one, for the locale id, I can look this up.
>
> **[1:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=78)** It's basically the language that's supported.
>
> **[1:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=81)** And so I can look that up in the documentation.
>
> **[1:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=84)** If I go back to the browser, I can go to aws.[amazon.com](https://amazon.com), go to the documentation, view all documentation down here under the services.
>
> **[1:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=98)** I can look up Lex.
>
> **[1:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=101)** In here, I can look at the developer guide.
>
> **[1:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=104)** Under how it works, I can look up supported languages.
>
> **[1:48](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=108)** And then here's English.
>
> **[1:50](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=110)** Now that was kind of a pain to get to.
>
> **[1:52](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=112)** You could probably get there a lot faster if you just Google AWS supported languages or Lex V2 supported languages.
>
> **[1:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=119)** I just wanted to show you this as one way to get into it and how to access it.
>
> **[2:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=124)** So back in the code, I'm going to put in that language.
>
> **[2:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=127)** And now I have all of my settings in here.
>
> **[2:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=129)** I should be ready to test this and I'll do that in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (3)
> **UI Navigation:** go to (3)
> **Env Vars:** aws (2)
> **Cross-References:** go back to (1), in the next (1)
> **Documentation:** the documentation (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Speakers:** - [instructor] (1)

#### Testing the bot with text
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=0)** - [Instructor] Now that I have the configuration done, I can add code to actually hit the bot.
>
> **[0:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=5)** It will use this identity pool so it will allow unauthenticated users access to the bot, and that should work great for us, and then we can see the output in the browser's console.
>
> **[0:16](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=16)** So back at the Lex documentation for JavaScript, I'm going to scroll to the bottom and go to the next section for interact with bots.
>
> **[0:23](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=23)** I can also click on that over here on the left.
>
> **[0:26](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=26)** This gives me some code to be able to interact with the bot.
>
> **[0:29](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=29)** So I'm going to copy this and then I'm going to paste this into my same index.js file.
>
> **[0:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=36)** So back in VI, I'm going to scroll down to the bottom, type I for insert, and I'm going to paste that code.
>
> **[0:43](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=43)** Now I need to change this, of course, to be for my bot.
>
> **[0:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=46)** So instead of reserving a hotel, I'm going to say order dinner.
>
> **[0:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=54)** And we already have the import of the interactions above.
>
> **[0:58](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=58)** So I'm going to hit double D to delete that.
>
> **[1:02](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=62)** And we're not using the BookTrip bot, we're using our OrderMeal bot.
>
> **[1:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=67)** So again, I'm going to delete that and change it with OrderMeal.
>
> **[1:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=72)** Now there is one problem with this code, that we want to actually print out response.messages.
>
> **[1:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=78)** If you leave it as message, you're going to get a weird enable JavaScript error and nothing's going to work and it's going to say this is undefined, so make sure you change that to messages.
>
> **[1:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=88)** So now I'm going to escape this.
>
> **[1:30](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=90)** I'm going to write and quit for this file to get saved out, and then I'm going to run it with NPM start, and it should start the server load, the browser.
>
> **[1:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=99)** And I should be able to look at the console to see the output as the response from the text I sent up of, "I want to order dinner."
>
> **[1:47](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=107)** So if I go to the browser now and I have view, developer, developer tools, and I'm on the console in Chrome, I can expand the response and I see, "What type of food would you like to order?"
>
> **[2:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=123)** So that's what we should be responding with, and now I can continue that interaction however I define the client.
>
> **[2:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=130)** If you have a different platform, of course, you're going to want to look at this dropdown here to see what other type of platforms you can support and develop your client to interact with your bots however you need to do for your specific project.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), this, (1), this. (1), continue (1)
> **UI Navigation:** go to (2), click on (1), scroll down (1), dropdown (1)
> **CLI Commands:** make (1), npm (1)
> **File Paths:** index.js (1)
> **Env Vars:** npm (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Engage bot from CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=0)** - [Instructor] Okay, in this challenge, I want you to extend the conversation besides just saying you want to order dinner.
>
> **[0:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=11)** I want you to send responses to the questions that you know are being asked like from where do you want to order your food and where do you want it dropped off, are you sure, and so forth.
>
> **[0:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=22)** So you can do this in the same code just like we sent it here with Interactions send OrderMeal user input where I want to order dinner.
>
> **[0:30](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=30)** You can do more of these awaits after this with things like pizza and the name of the restaurant where you want it dropped off.
>
> **[0:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=38)** And then the final yes for confirmation.
>
> **[0:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=41)** I changed mine up just a little bit and created a new version in Version 2 and then a new alias to point to that version.
>
> **[0:50](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=50)** So I had to change the alias ID in my code.
>
> **[0:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=53)** I wanted to include in the responses to the user their responses for the order.
>
> **[0:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=59)** From where do you want to order pizza?
>
> **[1:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=61)** Where would you like the pizza dropped off?
>
> **[1:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=63)** And you could do the same thing with the restaurant.
>
> **[1:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=65)** You could put in there, where do you want pizza from Papa's to be dropped off?
>
> **[1:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=69)** Something like that.
>
> **[1:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=71)** So again, if you create another version using this Create Version button and then create a new alias that points to that version, you need to replace the ID in your code.
>
> **[1:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=82)** Then you can add those additional sends for the responses to the questions.
>
> **[1:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=87)** So, good luck with this.
>
> **[1:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=88)** I think you'll have a lot of fun.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1)
> **Versions:** version 2 (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Engage bot from CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=0)** - [Instructor] Okay, so I hope you did great on that challenge.
>
> **[0:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=7)** It's kind of fun to me to see the back and forth and the responses and the communication and everything.
>
> **[0:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=12)** So I hope you got something similar.
>
> **[0:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=14)** I'm going to show you my code here with my new alias ID in there.
>
> **[0:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=18)** On this first one, I set the, "I want to order dinner" to a variable and pass that in just like the code I copied from AWS.
>
> **[0:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=25)** But after that, I just put it right in the line.
>
> **[0:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=28)** So I have another response here, "order meal" and I'm saying pizza 'cause I know what the question was.
>
> **[0:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=32)** What do you want to order?
>
> **[0:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=33)** And then it asks me from where, and I say, "Papa".
>
> **[0:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=37)** And then it says, where do you want me to leave it?
>
> **[0:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=39)** "Door."
>
> **[0:40](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=40)** Do you want to order pizza from Papa's Pizza and leave it at the door? "Yes."
>
> **[0:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=44)** So my interaction looks like this.
>
> **[0:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=46)** Pretty cool.
>
> **[0:47](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=47)** And so however you design your client you can allow obviously the user of your app or website to type these things in or select them from a list of restaurants, whatever it is.
>
> **[0:57](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=57)** But you can see how the interaction works.
>
> **[0:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=59)** Anyway, I hope that challenge was great.
>
> **[1:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=61)** I hope it was a lot of fun, really cool for me to be able to see that interaction back and forth from the server with a bot that I created.
>
> **[1:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=67)** And I feel like an AI scientist, and I hope you do too.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), this. (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Functionality of Lambdas

#### Lex and Lambdas
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=0)** - [Instructor] So I've mentioned the aspect of Lambdas within Lex.
>
> **[0:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=3)** Lambdas are serverless functions.
>
> **[0:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=6)** Yes, server development without the server administration, dreams do come true.
>
> **[0:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=12)** I love that.
>
> **[0:13](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=13)** I love how powerful Lambdas are.
>
> **[0:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=15)** You can write code in Python, PHP in a variety of different languages have access to basically all AWS services, databases, push notifications, basically everything in AWS.
>
> **[0:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=28)** So Lambdas are your gateway from your bot into just about everything else.
>
> **[0:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=34)** Back in the Lex documentation, I can scroll down to Enabling custom logic with Lambda functions.
>
> **[0:40](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=40)** And it gives you a list of places where you can call a Lambda.
>
> **[0:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=44)** Before the conversation starts.
>
> **[0:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=46)** For example, after telling the user the recognized intent.
>
> **[0:49](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=49)** So this is right after the intent starts.
>
> **[0:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=51)** After eliciting a slot value.
>
> **[0:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=54)** So whenever the user responds to a message from the bot asking what they want to do, you can run a Lambda.
>
> **[1:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=63)** Between each retry, when confirming the intent, fulfilling the intent, and so forth.
>
> **[1:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=67)** There's all these places in your intent that you can call the Lambda.
>
> **[1:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=72)** So if I look at my intent here, I see the details up at the top, the context and so forth.
>
> **[1:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=77)** And then here's the initial response.
>
> **[1:20](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=80)** Pretty much anywhere I see advanced options, I can call the Lambda.
>
> **[1:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=84)** So I click on Advanced options, and when I see set values, I have this next step in conversation.
>
> **[1:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=91)** I can jump to the Lambda from here, or in conditional branching, I can call the Lambda from here.
>
> **[1:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=99)** So there's a couple different places I can jump into a Lambda based on if I hit a certain spot of my intent, like the acknowledgement of the user request or if there's something specific, like if the food were pizza in this slot then I might want to set the value to jump to a Lambda and then that way it could process what toppings are available and prompt the user for that.
>
> **[2:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=126)** So basically, any of these places that I see advanced options is somewhere that I can call the Lambda.
>
> **[2:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=132)** So again, that's for slots, advanced options, the confirmation advanced options, the fulfillment can be a Lambda and it has that setting right here at the top.
>
> **[2:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=145)** And even in the closing, I can have branching.
>
> **[2:29](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=149)** And then down here is where I turn it on and off.
>
> **[2:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=151)** Use a Lambda function for initialization and validation.
>
> **[2:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=154)** I can turn that on.
>
> **[2:35](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=155)** So I don't specify the Lambda here.
>
> **[2:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=157)** We do that actually in the alias.
>
> **[2:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=159)** In the next video, we're going to look at creating a new bot and then we'll look at creating Lambdas to attach to that bot.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (13), else. (1), function (1)
> **CLI Commands:** aws (2), python (1), php (1)
> **Env Vars:** aws (2), php (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### BookTrip sample bot
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=0)** - [Instructor] Okay, so now I'm going to create a completely new bot, or at least a different bot from this one.
>
> **[0:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=6)** And from there I'm going to create Lambdas and associate with it.
>
> **[0:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=10)** If you remember when we created our initial bot, we had a few options.
>
> **[0:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=14)** We had a blank bot, an example, and transcripts.
>
> **[0:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=17)** This time I'm going to create a bot starting with an example.
>
> **[0:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=21)** And there's a handful of 'em here, BookTrip, MakeAppointment, OrderFlowers.
>
> **[0:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=24)** I'm going to use BookTrip.
>
> **[0:26](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=26)** And it gives me an idea of how it works.
>
> **[0:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=28)** I'd like to book a hotel. Sure, which city?
>
> **[0:30](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=30)** City, date, check-in, stuff like that.
>
> **[0:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=33)** So I'm going to name this one BookTrip, the same name as the example.
>
> **[0:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=38)** I can give it a description.
>
> **[0:40](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=40)** I'm going to let Lex create my IAM role for me with the permissions necessary.
>
> **[0:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=46)** And it's not subject to COPPA, so I'll say no.
>
> **[0:50](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=50)** And I'll use the rest of the defaults.
>
> **[0:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=51)** So all I did was pick an example of the BookTrip and give it a name.
>
> **[0:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=56)** And now I'm going to click Next.
>
> **[0:58](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=58)** Once it's created, I can select a voice.
>
> **[1:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=61)** I'm going to select Ruth.
>
> **[1:03](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=63)** And I'll leave the classification confidence score threshold the same and click Done.
>
> **[1:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=69)** Now in this bot, I can see I have two intents for booking a car, a hotel, and then the fallback intent.
>
> **[1:15](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=75)** Going down through the BookHotel, I can see that my sample utterances are book a hotel, I want to make a hotel reservation, and so on.
>
> **[1:23](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=83)** And then for the slots, we have the city, the location where we're going, check-in date, number of nights, and the room type.
>
> **[1:31](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=91)** So the car would be fairly similar as far as the dates and everything and the type of car.
>
> **[1:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=96)** I'm going to save this intent, and now I'm going to build it, and then I want to test the booking of the hotel.
>
> **[1:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=106)** Now that it's built, I can test it by saying something like, I want to book a hotel.
>
> **[1:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=113)** What city will you be staying in? Denton.
>
> **[1:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=116)** What day do you want to check in? Tomorrow.
>
> **[1:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=119)** How many nights? Five.
>
> **[2:02](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=122)** What type of room? Regular.
>
> **[2:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=127)** Okay.
>
> **[2:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=129)** Yes, we'll book that, and then it's fulfilled.
>
> **[2:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=132)** So it did do a lot of validation because I just said a regular room.
>
> **[2:16](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=136)** and that wasn't even in the list.
>
> **[2:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=137)** So we're going to see how Lambdas can help us out moving forward with this validation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), type. (1)
> **Env Vars:** iam (1), coppa (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Creating and connecting Lambdas
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=0)** - [Instructor] Now that I've got my bot defined that I want to be able to use a Lambda from, I want to go create the Lambda, then I can come back and start setting it up to be called from here.
>
> **[0:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=9)** So up at the search bar at the top, I'm going to type "Lambda" and I'm going to Command + click Lambda so it'll open it up in its own tab.
>
> **[0:17](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=17)** Here I can create a function just by clicking Create a Function.
>
> **[0:20](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=20)** And there's some options kind of like we saw with the bots.
>
> **[0:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=24)** In this case, I'm going to use a blueprint and I'm going to click on this Hello World function and do a search for book trip, and there's Book a Trip with Lex.
>
> **[0:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=34)** That's the one I want.
>
> **[0:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=36)** I can give it my own name for it.
>
> **[0:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=37)** So I could say MyBookTrip or whatever I want to call it.
>
> **[0:40](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=40)** I'm just going to call it BookTrip and use the rest of the defaults that are already set up for me.
>
> **[0:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=45)** I can see the code down here and how it validates the different slots for things like the car types and the hotel types, the room types here and the various cities.
>
> **[0:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=56)** And I can check that out.
>
> **[0:57](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=57)** And then when I'm ready, I can just click Create Function.
>
> **[1:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=60)** So this will create the function.
>
> **[1:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=61)** Unfortunately, this function actually doesn't work with Lex Version 2, so this is great for Lex Version 1.
>
> **[1:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=68)** But I did find some code that works for Lex Version 2.
>
> **[1:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=71)** So I'm going to go to [github.com/aws-samples](https://github.com/aws-samples) and scroll down a little bit to the Find a Repository.
>
> **[1:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=79)** And I am going to search for "booktrip."
>
> **[1:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=84)** And there is Lex V2 for the booktrip bot.
>
> **[1:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=88)** I can get the function's code with the lambda_function.py file.
>
> **[1:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=92)** And I'm going to click Raw.
>
> **[1:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=94)** And similarly, we can see that this handles a lot of the same things as far as the car types, room types, hotel, and so forth.
>
> **[1:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=105)** Notice that it's Nueva York 'cause this is actually set up for Spanish, but I don't think there's any other differences.
>
> **[1:50](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=110)** The types of the hotel rooms are king, queen, deluxe, and so forth.
>
> **[1:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=114)** So I'm going to actually just copy all of this code and go back to my Lambda, and scroll down here where I can edit it.
>
> **[2:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=121)** And I'll copy all that, paste the new code, and deploy these changes.
>
> **[2:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=127)** Now Lambdas are super powerful as I mentioned before.
>
> **[2:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=131)** They can use just about everything else in AWS.
>
> **[2:13](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=133)** So I really encourage you to check out the course on Lambdas and see what other functionality you can do that can really help you out with anything that you're developing as far as your app goes and your bots and so forth.
>
> **[2:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=145)** Anyway, now we have a Lambda set up, BookTrip.
>
> **[2:28](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=148)** We can go back to our bot and set it up to be able to call this Lambda whenever it needs to validate input, and we'll do that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (7), function (7), from, (1), case, (1), super (1)
> **CLI Commands:** find (2), aws (2)
> **UI Navigation:** scroll down (2), click on (1), go to (1)
> **Versions:** version 2 (2), version 1 (1)
> **Cross-References:** go back to (2), in the next (1)
> **Prerequisites:** set up (3)
> **File Paths:** lambda_function.py (1)
> **Code Identifiers:** lambda_function (1)

#### Testing with Lambdas
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=0)** - [Instructor] Okay, now that I have my bot and now that I have my Lambda I'm ready to connect them together so that they can work towards this validation.
>
> **[0:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=7)** And of course, again those Lambdas can do just about anything.
>
> **[0:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=11)** So this is going to be a fairly simple example.
>
> **[0:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=14)** You can play with the other ones as well for like the ordering flowers and so forth but you'll get a sense of how Lambdas can be used in your Lex.
>
> **[0:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=21)** And by checking out Lambda courses you can see that it can do so many more things.
>
> **[0:25](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=25)** Lambdas are incredibly powerful.
>
> **[0:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=27)** Okay, so in my book, Hotel Intent, I'm going to check use a Lambda function for initialization and validation.
>
> **[0:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=34)** So I check that and I'm going to save the intent.
>
> **[0:38](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=38)** And I'm also going to set up the alias to use this lambda for the language.
>
> **[0:44](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=44)** So I'm going to go back to the bot level, click on aliases click on the alias name.
>
> **[0:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=51)** And this is kind of weird but you set up the Lambda per language.
>
> **[0:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=54)** So I'm going to set this one up for English.
>
> **[0:57](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=57)** So I'm going to click on English.
>
> **[0:58](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=58)** And then now the source is the Lambda function.
>
> **[1:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=61)** For me, it was book trip so I'll pick that and use the latest version and save that.
>
> **[1:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=67)** So now the alias is set up, the intent is set up.
>
> **[1:10](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=70)** I can build and test this and it should use that validation now for things like the city and the hotel room type and so on.
>
> **[1:18](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=78)** So I'm going to build this one and then I'll be able to test it.
>
> **[1:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=81)** Now, it didn't set it up for car.
>
> **[1:22](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=82)** We could also set the coding hook for the car and it would use it the same as book hotel would because I already set it up for the alias.
>
> **[1:30](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=90)** But I'm just going to build this for the book hotel testing, you can try it on the car.
>
> **[1:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=94)** And again, on the other bots like ordering flowers and so forth.
>
> **[1:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=97)** Of course, on your own Lex Bots, that would be fun.
>
> **[1:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=101)** Create a Lambda and set it up to be used in your bot.
>
> **[1:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=105)** Now if we look over the documentation again, I mentioned before we have this section on enabling custom logic with Lambdas.
>
> **[1:53](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=113)** Here's the documentation on setting up the Lambda with the alias, and also sections on interpreting the input what's being sent to the Lambda and the response format back from the Lambda.
>
> **[2:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=126)** So if you're familiar with Lambdas this would be really helpful.
>
> **[2:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=128)** Otherwise, again, I encourage you to check out the course on Lambdas.
>
> **[2:12](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=132)** So back where my test should be done.
>
> **[2:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=134)** Now it is, I'm going to click test and I'm going to say I would like to book a hotel.
>
> **[2:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=141)** What city will you be staying in?
>
> **[2:23](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=143)** Last time I used Denton, I'll use that again.
>
> **[2:26](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=146)** What city will you be staying in?
>
> **[2:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=147)** It doesn't recognize that now, it doesn't allow that now because the Lambda is preventing it based on the list of cities it supports.
>
> **[2:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=154)** So I'll put in El Paso and now it says, what day do you want to check in?
>
> **[2:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=159)** Tomorrow How many nights?
>
> **[2:41](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=161)** Six, what type of room?
>
> **[2:43](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=163)** Regular, what type of room?
>
> **[2:45](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=165)** Okay, fine.
>
> **[2:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=166)** I'll get a king size room.
>
> **[2:48](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=168)** And then there I can approve that.
>
> **[2:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=171)** And there's my answer in Spanish.
>
> **[2:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=174)** This is because of that Lambda being the Spanish language version of the code.
>
> **[2:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=179)** You can update that, or of course, create your own.
>
> **[3:02](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=182)** Anyway, this is a great way to be able to add this type of functionality to your bot and just expand the functionality as well as doing things like validation.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (12), function (2)
> **Prerequisites:** set up (4), initialization (1)
> **UI Navigation:** click on (3)
> **Documentation:** the documentation (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Continue training your chatbots
> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=1)** - Order dinner, please.
>
> **[0:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=4)** - [Lex] What would you like to eat?
>
> **[0:06](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=6)** - Pizza.
>
> **[0:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=9)** - [Lex] From where would you like to order?
>
> **[0:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=11)** - Monica's.
>
> **[0:13](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=13)** - [Lex] Where would you like the food dropped off?
>
> **[0:16](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=16)** - The lobby.
>
> **[0:19](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=19)** - [Lex] Are you sure you want to order pizza from Monica's?
>
> **[0:21](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=21)** - No.
>
> **[0:24](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=24)** - [Lex] Okay, I'll delete your order.
>
> **[0:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=27)** - [Bear Cahill] Well, that's a lot to go over, but I hope you agree that a lot of the heavy work is being done by AWS.
>
> **[0:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=33)** It understands text and speech very well.
>
> **[0:37](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=37)** I don't think I'd know how to write all that.
>
> **[0:39](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=39)** On your side, you'll need to provide the functionality to book a hotel, order food, or whatever you need to do.
>
> **[0:43](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=43)** However, a Lex bot can sit in front for the user to give their input, and hopefully you've learned how to create those bots now.
>
> **[0:52](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=52)** Next, I recommend experimenting with sharing information between intents.
>
> **[0:56](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=56)** We saw a little bit of that at the end with the BookTrip bot.
>
> **[0:59](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=59)** Also, check out courses with Lambdas to see what power that can bring.
>
> **[1:04](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=64)** And feel free to let me know what you're working on, and keep in touch at [brainwashinc.com](https://brainwashinc.com), @brainofbear, and on LinkedIn.
>
> **[1:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=71)** Thanks.

> [!info]- Semantic Content
>
> **Speakers:** - [lex] (5), - order (1), - pizza (1), - monica (1), - the (1)
> **Code Keywords:** delete (1), let (1)
> **CLI Commands:** aws (1)
> **URLs:** [brainwashinc.com](https://brainwashinc.com) (1)
> **Env Vars:** aws (1)
> **Prerequisites:** you'll need (1)


## Path Context

### In [[Advance Your AWS Development Skills- Exploring Complex Application Development]]
← [[Building Serverless Apps with AI Services on AWS]] | **6 of 6**

## Appears In

- [[Advance Your AWS Development Skills- Exploring Complex Application Development]]

## Related Courses

_Courses sharing skills:_

- [[Exploring Million-Token Models with Google Gemini Pro 1.5]] — Artificial Intelligence (AI), Chatbot Development
- [[Building a Project with the ChatGPT API]] — Artificial Intelligence (AI), Chatbot Development
- [[Hands On Ai Build Your Own Gpts]] — Artificial Intelligence (AI), Chatbot Development
- [[Introduction to AWS AI Services for Developers]] — Artificial Intelligence (AI), Amazon Web Services (AWS)
- [[Hands-On AI- Build an AI Chatbot with GPT-4o and Next.js]] — Artificial Intelligence (AI), Chatbot Development

---

[↑ Back to top](#)