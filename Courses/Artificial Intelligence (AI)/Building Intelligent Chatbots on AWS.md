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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20Intelligent%20Chatbots%20on%20AWS.md)

![Building Intelligent Chatbots on AWS](https://media.licdn.com/dms/image/v2/D4E0DAQFVuca7pibCRQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695147619822?e=2147483647&amp;v=beta&amp;t=5nJbLKeX1sVhWFmVZXZG_74Fz9rc9Jt5oQBEnvN9KuM)

# Building Intelligent Chatbots on AWS

> Voice control and interaction is becoming more common—and more expected from our apps. Amazon Lex provides speech recognition and natural language understanding, allowing developers to build their own custom logic around it. This course introduces a specific use case for Lex: intelligent chatbots that can respond to and redirect customer inquiries. Discover how to use the Lex API and CLI, build an

> [LinkedIn Learning](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480) | 1h 13m | Advanced | 2608K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Creating chatbots](#creating-chatbots)
  - [What you should know](#what-you-should-know)
- [**1. AWS Lex Overview**](#1-aws-lex-overview) (4 videos)
  - [Introduction to AWS Lex](#introduction-to-aws-lex)
  - [AWS account and console](#aws-account-and-console)
  - [Chatbot concepts](#chatbot-concepts)
  - [Lex API and CLI](#lex-api-and-cli)
- [**2. Creating a Bot**](#2-creating-a-bot) (6 videos)
  - [Lex Bot creation](#lex-bot-creation)
  - [Intents](#intents)
  - [Kicking off the conversation](#kicking-off-the-conversation)
  - [Testing the bot](#testing-the-bot)
  - [Challenge: OrderDrink intent](#challenge-orderdrink-intent)
  - [Solution: OrderDrink intent](#solution-orderdrink-intent)
- [**3. Slots and Slot Types**](#3-slots-and-slot-types) (6 videos)
  - [Slot types](#slot-types)
  - [Custom slot types](#custom-slot-types)
  - [User input prompts](#user-input-prompts)
  - [Confirmation prompts](#confirmation-prompts)
  - [Challenge: Create a restricted slot](#challenge-create-a-restricted-slot)
  - [Solution: Create a restricted slot](#solution-create-a-restricted-slot)
- [**4. Responses**](#4-responses) (4 videos)
  - [Closing response](#closing-response)
  - [Prompting with card group](#prompting-with-card-group)
  - [Challenge: Closing response for dessert](#challenge-closing-response-for-dessert)
  - [Solution: Closing response for dessert](#solution-closing-response-for-dessert)
- [**5. Publishing**](#5-publishing) (7 videos)
  - [Versions and aliases](#versions-and-aliases)
  - [Client creation](#client-creation)
  - [Client preparation](#client-preparation)
  - [Gathering configuration data](#gathering-configuration-data)
  - [Testing the bot with text](#testing-the-bot-with-text)
  - [Challenge: Engage bot from CLI](#challenge-engage-bot-from-cli)
  - [Solution: Engage bot from CLI](#solution-engage-bot-from-cli)
- [**6. Functionality of Lambdas**](#6-functionality-of-lambdas) (4 videos)
  - [Lex and Lambdas](#lex-and-lambdas)
  - [BookTrip sample bot](#booktrip-sample-bot)
  - [Creating and connecting Lambdas](#creating-and-connecting-lambdas)
  - [Testing with Lambdas](#testing-with-lambdas)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue training your chatbots](#continue-training-your-chatbots)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating chatbots](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-chatbots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-chatbots?u=76281980&t=0)** - [[Artificial Intelligence (AI)|Artificial intelligence]] is leading users to expect more and more from their interactions with your website or app. Is yours up to the task? AWS Chatbots allow you to manage a conversation with the user and build context along the way. You design conversation flows that collect data from the user by asking questions and receiving their answers. Based on that data the bot can make decisions about what to do next like ask another question or run some code. If your friend said, let's order pizza, you'd probably ask from where? A chatbot can work the same way. Let me take you through the steps to leverage chatbots to make your user interface conversational and intelligent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **CLI Commands:** make (2), aws (1)
> **Env Vars:** aws (1)
> **Speakers:** - artificial (1)

#### [What you should know](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, it would be helpful if you have some knowledge of AWS, and its various services and features. We'll be using Lex mostly, but also dealing with IAM, Cognito, and Lambda a bit. Of course you'll need to use your bot and a client, like an app or website, so knowledge of how you want to use it, and development skills there, will give you insight into how you can use your bot. We'll use a [[JavaScript]] client in this course, and do most of the work from a command line. You'll need [[npm]] installed if you want to perform those steps. I'll mention it in the video when the time comes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[npm]] (1)
> **Env Vars:** aws (1), iam (1), npm (1)
> **CLI Commands:** aws (1), npm (1)
> **Prerequisites:** you'll need (2)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 1. AWS Lex Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to AWS Lex](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/introduction-to-aws-lex?u=76281980&t=1)** - [Instructor] Chatbots or bots are supposed to be helpful. Ideally, they can take input, either spoken or text, and conform it to how they can serve the user. Whether it's playing music or ordering off the internet, the idea is that a bot takes spoken or text data and determine what task to perform. Lex allows you to create bots that can serve multiple intentions. Typically, the intentions are related, so you might have a bot for your entertainment app that takes input and tries to determine if you want to listen to music or watch a movie. Or maybe you have a dinner app with a bot that needs to determine first if you're ordering a meal, drinks, or dessert. Based on which one you want to do, the bot needs to gather specific data, so it has different questions for each path or different intentions of the user. Once all the missing pieces are filled in, it can fulfill the request. Fulfilling the request means doing what it was designed to do once it's gathered all the data. That will vary depending on the design of the bot and the purpose of your app.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [AWS account and console](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/aws-account-and-console?u=76281980&t=0)** - [Instructor] AWS has a lot of service which can make it confusing and scary. It's certainly intimidating. If you're like me, you're only interested in a subset of the offering from AWS. Like a department or other stores, you probably go to the sections you need and don't worry about the [[Representational State Transfer (REST)|rest]]. We'll be using the Lex service mostly, but we'll also be looking at a few others. Don't worry. AWS will do the heavy lifting for us. The work we'll be doing will be like managing a blog or a spreadsheet. We'll mostly just have to make decisions and translate them into what Lex understands. Signing up for an AWS account is free and easy. Yes, both, free and easy. Go to aws.[amazon.com/free](https://amazon.com/free) and sign up. Many services are free to use up to a limited use or time. We'll use free services for this course, but always be mindful of the cost by going to the Billing and [[Cost Management]] Dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Cost Management]] (1)
> **CLI Commands:** aws (5), make (2)
> **Env Vars:** aws (4)
> **UI Navigation:** go to (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Speakers:** - [instructor] (1)

#### [Chatbot concepts](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=0)** - [Instructor] AWS Lex allows you to create chatbots or bots. Bots are the container for the [[Representational State Transfer (REST)|rest]] of the settings, configuration details, and integration for chatbots in AWS. Effectively, they're like a project that holds the various pieces of the bot. Bots have a purpose or multiple purposes and just like you or me, that makes our bots feel special. A bot's purpose may be to facilitate ordering food or planning a trip. Each area of need for that purpose is broken down into what is called an intent. Let's say you have a bot for car care. You may have one intent for requesting oil changes and another intent, in the same bot, for new tires or a bot for ordering food where you order the meal from restaurant A, but place dessert orders from restaurant B because you know restaurant B's apple pie is the best, right? The point is bots can have various intents to fulfill the user's requests. The information needed in these intents are called slots. Think of missing words or phrases in a sentence. I want to order blank from blank to be delivered to blank. The slots are the blanks that the bot needs to fulfill its intent. Those are the missing pieces it needs from the user. Slots have types. Types define the type of information or data needed to fill that slot. The first blank is a type of food, the second is a restaurant or similar, and the third blank is where to deliver it,
>
> **[1:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/chatbot-concepts?u=76281980&t=94)** the front door, the lobby, and so on. Once the blanks, or slots, are filled the bot has what it needs and can fulfill its intent. How the intent is fulfilled is up to you and your bot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Lex API and CLI](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-api-and-cli?u=76281980&t=0)** - [Instructor] In this course, we'll be using the Lex console website, but you can also use the AWS Command Line Interface. The command line interface can help you create your IAM role in various pieces of your bot, like slots and intents. Similarly, you can use the AWS API to create and manage bots. There are various actions to create, manage, and delete the bot items. Once you're familiar with the concepts and pieces of an AWS Lex bot, that might be the route for you. It depends on what you're developing. Do you need to be able to create bots on the fly? Will your app generate bots or manage them in some way? If so, the API is something that you might want to look into. This course will get you started on that path. Also, if you intend to call Lambdas from your bots, you'll need to know how those work, too. So I recommend looking up courses on that. When you're ready to get started with the command line interface, look into the Getting Started section for Lex. There's also an API reference section there. The Lex console is where we'll be spending our time making our bots. That will be our bot factory. Maybe "laboratory" is a better [[Microsoft Word|word]] 'cause our bots are so smart. As I mentioned, we won't need to do any real coding in creating our bots, though the client apps will need to be coded. It's still technical, but the heavy-lifting work has been done for us. The console is where we'll create our bots, their intents, and slots. It's also a great way to test our bots, interactively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Env Vars:** aws (3), api (3), iam (1)
> **CLI Commands:** aws (3)
> **Tools:** command line (3)
> **Prerequisites:** you'll need (1), getting started (1)
> **Documentation:** api reference (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Creating a Bot

[↑ Back to Table of Contents](#table-of-contents)

#### [Lex Bot creation](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=0)** - [Instructor] Now that you have your AWS account, you can go to the aws.[amazon.com](https://amazon.com) site and sign into the console or you can go directly to console.aws.[amazon.com](https://amazon.com) if you're already logged in. And here we see the familiar list of services that we've recently visited, and scrolling down, all these other helpful information tabs and sections of the website to lead us in our development. I'm going to come up here to the search bar and just type Lex and go to Amazon Lex, and here is where I can create my chatbots. Now, I don't have any chat bots yet, so the list is empty, but later, it will be populated with the one that we create, and it's going to be so easy to create. It's just basically typing in a name. So I'm going to click Create Bot, and I'm going to create a blank bot. You can also start with an example or transcripts, and I encourage you to look into that later, but for now, just getting started, I want you to just create a blank bot like me. In the name, I'm going to name it OrderMeal, and later, we're going to break this up into multiple paths, but for now, we're going to be kind of generic and just say OrderMeal. You can give it a description, if you like. We also have to create an IAM permission role, and I'm going to have it create a role for me with the basic Amazon Lex permissions. This is easy, but it also creates the role to be separate from any other roles that are already being used. If you're familiar with IAM, then you might want to use an existing role, because you're using it across different services
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-bot-creation?u=76281980&t=93)** or you might want to specify the permissions at this time, and you've already got a role. I encourage you to go check out the AWS course on IAM for that type of configuration for authorization. Also, this is not subject to COPPA, so I'm going to click no, and for the idle session timeout, I'll leave it at five minutes. The advanced options are just for tags, so I'm not going to add any tags. I'm just going to click next. And once we get to this page, we select our first language we want to add to the bot. I'm going to leave it as English, and then you pick a voice. I'm going to scroll down and just pick one. I'll pick Ruth. The intent classification confidence score threshold. Whenever the user provides input, the chat bot gives it a confidence score. If it falls below the score, as far as the bot can't exactly determine what the user is saying, it will go to the fallback intent, and we'll look at the fallback intent once we get our bot initially created. So if it's really confident and we know this is exactly what the user said, then it's going to be closer to one. If it falls below this score, the default of 0.4, then it goes to the fallback intent, not being able to understand what the user wants to do. Okay, so I'm going to leave it at the default 0.4, click Done, and now I've done everything necessary to create my bot. This will create a default intent for me. This is a script for the whole process of the bot and the fallback intent for when it doesn't really know what to do. So we're going to be looking at these intents more right away in the next video.

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

#### [Intents](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=0)** - [Instructor] Okay, so I created my first bot and that was super easy. Just basically gave it a name and said a couple of things and it created for me. As it says here, we've added an intent to get you started. My bot's created and it's got its first intent. Intents are the scripts for our bot to interact with the user. My first intent was created for me but it's basically blank. I can review the conversation flow. This kind of gives me an example of what to expect and how the bot can interact with the user. So this is what you expect to happen, this back and forth collecting of data to be able to get information to determine what the user wants to do inside of your chat bot. I need to provide similar information to the bot so it knows what my users want to do, and specifically in this bot for ordering a meal. So I can change the name here in the intent details. And I can add a description. Here's the ID. We'll need that at some point. The contexts are basically variables that can be passed into or passed from my intent. So either from other intents or to other intents and so forth. The sample utterances, this is what kicks off our bot. So basically when the user types in something like I want to order dinner, as opposed to, I need tickets to a movie. When they pick up on these certain utterances of ordering and dinner or a meal, depending on what utterances we put in here, it will know to kick off this script. And then they can start interacting with the bot
>
> **[1:35](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=95)** to collect the information to be able to fulfill this process. After the utterance, the bot has an initial response, some kind of question or information like where would you want to order dinner from? What would you like to order? And so forth. Slots are kind of internal variables for this intent to be able to get information out of what the user is saying or typing. So these would be like the blanks in a sentence. I want to order X. And what we're looking for there, that slot is what the user wants to order for dinner. And we have to pick up on that [[Microsoft Word|word]], and then we store it in a slot. Then once the interaction's done, we have this confirmation section that can basically ask the user, are you sure you want to order 5,000 pizzas? And they can say yes or no. If they say yes, it goes to fulfillment. If they say no, then it can go back into either the fallback intent or some part of the process that you define. Finally, once it's all done with fulfillment you can have a closing response. Down here at the bottom, we can optionally set up a Lambda that gets called. Lambdas are serverless functions that can be written in a variety of languages. I encourage you to check out the course on Lambdas. Very, very powerful. It allows you to use almost all AWS services from code based on logic. So the information could be passed from your intent to the Lambda and it gets processed, checks things in the database, whatever it needs to do to determine how to fulfill this request.
>
> **[3:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/intents?u=76281980&t=188)** And then it can send it back and you finish. You can also call Lambdas from these conditional branching pieces which are throughout the intent. We'll be looking at some of those as we go. If I click up here on the left back to intents, I can see the list of intents that I have now. I can also see the slot types and a variety of other things about my bot. This would allow me to define more intents with add intent. I can also define my slot types, which we'll be doing as we go forward. And if you scroll down, there's also a list of things for deployment, analytics and so forth. So we have our first intent. Let's start working on that and we'll do it in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Kicking off the conversation](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=0)** - A given intent is engaged by Lex when the user says or types of phrase that the bot can match up with an intent, this is defined in the sample utterances of a given intent. An intent can have several variations here because often users will say the same things in many ways. I'm going to click on new intent here and go into the details, as we looked at in the previous video. Here, I can change the name, this intent is going to be for ordering food. So I'll name it, order food as opposed to drinks or dessert or something else. So I want utterances for this intent that makes sense for the food part of the meal. I'm going to scroll down to sample utterances and I can add additional utterances down here at the bottom of this section. And it has an example, I want to book a flight, of course, that would be for travel, for ordering food as part of a meal, I might say something like, I want to order dinner. So I'll type that in, hit return and add another one like I am hungry. Also, can I order food? We don't put in punctuation here, we don't need to match that from the user. I'd like to get something to eat, maybe. And the bot will determine based on the input of the utterances, combinations of these. So if the user typed in, can I order dinner? That should work as well.
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=93)** Or I would like to get dinner, or, I'm hungry for dinner. So variations of this should work perfectly fine to kick off this intent based on those sample utterances. I can also save this intent on the bottom right and then view it in the visual builder. There's really not much for this one to see just yet but you can see that the utterance starts here. I want to order dinner and the variations will go into the code hook for the Lambda and then have successful failure or a timeout to end the conversation. I prefer the flow top to bottom kind of editor here but the visual editor is nice to see that at least you're doing something that makes sense. So now I want to create a second intent,. so again, I'll save this intent simply because the button is available there for saving and it was active. Makes me think maybe I didn't save something. I'm going to create a another empty intent. The built-in intents are for things like canceling, fallback, help, kind of standard stuff that you might want to use if you're going to include some of those, start over or stop, that kind of thing. You don't have to reinvent the wheel there but I'm going to create another empty intent called order dessert. So this one is going to be very similar to what I've already created, but with some different utterances. Maybe some things like I want to order dessert or I have a sweet tooth, or I'd like something sweet. How about dessert?
>
> **[3:08](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/kicking-off-the-conversation?u=76281980&t=188)** Whatever variations you think might apply to your bot, you could type in here. And again, Lex should determine the combinations of these, what the user is saying, and if not, go to the fallback. So I'm going to save this intent and I want to test to make sure that whatever I type it calls the right intent. So in the next video, that's exactly what I'm going to do.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (1), scroll down (1), go to (1)
> **Cross-References:** previous video (1), in the next (1)
> **CLI Commands:** make (1)
> **Speakers:** - a (1)

#### [Testing the bot](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=0)** - [Instructor] Now that I have my two intents, and depending on what I say or type into the bot, it should do different things and I want to be able to test that. It's pretty easy. As long as my intent that I'm editing is saved we're ready to build it, and I can click that on the top right and then I can click test. Now the building may take 30 seconds ish so once that's ready I can click test and start interacting with my bot. Now that it's built, I can click test and I can start interacting with my bot by typing into the text field. And I can say something like, I'm ready for dinner and it's going to kick off the order food bot. Now we don't do anything. There's no response, there's no collecting of data so it just says it's fulfilled. And if I click on the inspect button I can see kind of the summary and I can see the [[JSON]] input and output. So this is actually what's being sent back and forth from what I type in to the bot itself and what comes back. I should also be able to type in here something that would kick off the order dessert like I want dessert and there's order dessert fulfilled. I wonder if I can confuse the bot to say I want a sweet dinner, and it kicks off the order dessert. So I might need to kind of refine some of these pieces so that it's using the right utterances with the right intents. I could type something in here like I need a book and it goes to food. So again, that's not what we want it to do. What about what time is it?
>
> **[1:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot?u=76281980&t=94)** And it goes to fallback. So the fallback, again, isn't actually doing anything in this case, and we can build that out to also do things to interact with the user. Maybe even if it just says I'm not sure what you're trying to do. Would you like to try again? So there's a bunch of things we need to fill in for these things. We might need to refine our utterances and eventually flesh out the fallback intent as well so that when things go wrong the user knows it and hopefully knows what to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** json (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: OrderDrink intent](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-orderdrink-intent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-orderdrink-intent?u=76281980&t=0)** - [Instructor] Okay, it's time for a challenge. For this challenge, I want you to create your own intent. I want you to create when to start taking the drink order for this meal. So you can look back at the previous videos and see how to do it. But I have a feeling it's pretty easy for you. I think you're going to do just fine. You have to think about what kind of utterances you need for that, but I'm sure you're going to do great. So good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: OrderDrink intent](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-orderdrink-intent?u=76281980&t=0)** - [Instructor] Okay, so I hope that challenge was really interesting and informational. You probably had a pretty easy time with it. It's pretty straightforward. I'm going to close this test window over here, and I'm going to go back to my list of intents, and the challenge was to create a new intent for taking the drink order, and so far what we've done with these intents is basically two things. We create an empty intent, and we just give it a name, and I'm going to call this one OrderDrinks, click Add. The only other thing we've done so far to create this intent is the sample utterances. So I would put some things in here for the utterances, such as I want to order drinks. Maybe, I'm thirsty. I'd like a beverage. What do you have to drink? Whatever the utterances are that you want to kick off this intent in your bot, that's what you put in here. That's what we've done so far, and then I can save this intent, build it again and test it just like I did before. I hope that's something along the lines of what you did. I'm sure it is. In the next chapter, we're going to start looking at the slots, where we store the data from the user that allows us to fulfill this bot's functionality for their use.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** such as (1), just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Slots and Slot Types

[↑ Back to Table of Contents](#table-of-contents)

#### [Slot types](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=0)** - [Instructor] As the user and the bot step through this intent and go back and forth, the intent needs to fill in the blanks to certain kind of sentences of the information that the user is trying to tell the bot and then the bot can use to fulfill the whole purpose of ordering the food in this case. It may be looking at the type of food that the user wants to order, where to order it from and so on. And these blanks in these sentences, they're called slots. So down in our intent, we have these slots. For each item that we want to collect from the user, we would create this slot where we put the data. So in here I can click on info next to slots and I can see these built-in slot types. If I click on that, it opens up another page in the documentation to these built-in slots. Now there's alphanumeric which is very kind of general and generic. There's city, country, date. There's these built-in slots to where if I'm collecting something like an email address or a number, they're predefined to be able to recognize information in a variety of formats depending on what the user says. So for example, duration, if I click on that we know that people say these things in different [[Forms]] like 10 minutes, 45 seconds, or they might say a given time or they might say 90 minutes instead of an hour and a half. Who knows how people are going to say it but this one that's provided by Amazon will handle those pieces for you. So again, if you have a piece of data, a slot in your intent, and the type
>
> **[1:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/slot-types?u=76281980&t=94)** of data matches one of these slot types, well then a lot of the work's already done for you. That doesn't mean if you have some other type of data like food or restaurant type, it's going to be difficult. That's not the case at all. It's just those slots are going to be a little bit more ahead of the game as far as like detecting the way people say certain things like time and so forth. But we're going to make our own slots and you're actually going to see it's pretty easy. If you have something that's a common slot type, then you could use those. But we're going to make our own and we'll start doing that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **UI Navigation:** click on (3)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Custom slot types](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=0)** - [Narrator] As I mentioned, slots are like the blanks in sentences. We need to fill with the user's input. Something like what type of food they want to order. We need a slot for that. Now, there isn't a slot type for food but we can create when using alphanumeric and store their data in there. So once the user says something like, "I want to order dinner, can I order food," so forth and this intent gets kicked off, we have the option of giving them an initial response. We could say something like, "Okay, let's order food. And that way they know that they're in the right place, they're running the right bot, as opposed to saying, "What would you like for dessert," or so forth. Then we start adding our slots again. This is where we're going to store their responses to the different prompts. So I'm going to add a new slot. I'm going to name it food. And since there isn't a specific food slot type, I'll just use alphanumeric. That's perfectly fine. That'll take their response. And then in here, I can type something like, what type of food would you like? And that's the prompt that will be either sent to them in text or spoken to them, depending on how they're interacting with the bot. I can add that. And now I can use that slot in the confirmation message. So I can say something like, "Are you sure you want to order?" And then in brackets, food, the name of the slot. And if they decline, if they say no, I can say, "Okay, thanks anyway." Something like that.
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/custom-slot-types?u=76281980&t=93)** And then when I build and test this, I can say, "I want to order pizza." And then I should get that stored in the slot and I can validate that by seeing it in the confirmation message. Once it's built and ready to test, I can say, "Order dinner." Sometimes when I see that the session ID is missing, I just refresh the page and it works the next time. Now that I've refreshed the page, I'm going to click Test again and try it again. Order dinner. Okay, let's order food. What type of food would you like? Pizza? Are you sure you want to order pizza? Yes. And then it finishes fleshing out the script of the intent, which doesn't do anything. So it's fulfilled. But if I do it again, order dinner. What type of food would you like? Pizza. Are you sure you want to order pizza? No. Then it says, "Okay, thanks anyway," and then it's done. So now I can start over and order something else. I could order drinks instead, whatever I need to do. So this is the way we fill in the slots with the data from the user.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### [User input prompts](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=0)** - [Instructor] I want the user to specify where they want the food to be dropped off. Unlike the food, which can be basically anything, I want to have some kind of list where they can say certain things and have kind of a short list of options of where to drop the food off. That way they can just say front door, the lobby, mailbox, whatever the locations I want to provide. So to do that, I need to make a custom slot type. So up in my breadcrumb trail, I am going to select the bot. And over on the left side there's the slot type. So I click on that and I'm going to add a new slot type. So I click this dropdown, and again, there's some built-in ones and other types that you can look into. For this course, we're just going to use the blank slot type. So I click that and I give it a name. So I'm going to name it drop off LOC, drop off LOC, like drop off location. And I'll add that. So from here I can specify if I want to have expand values, which trains over time to understand what are the common values that users respond to for this slot. I actually want to restrict the slot values. So I'll click restrict to slot values and then I can specify all the values I want to support. In this case, I'm going to type in front door and then over in the second field I'm going to specify some variations to this. So I'm going to say front, and then I type the tab and then door and maybe entrance or something like that. And then I add that value. Another place that they could select
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=93)** to drop the food off might be porch, and I'll add patio to that one and deck, for example. Add that value and then finally, I'll have lobby. So for a building, there might be a lobby. They might also call it the foyer, entryway, the front desk, something like that. So I'll add those values and whatever other variations I want to support, I can type those in there. Then I'll save this slot type and back in my intent I want to add a new slot for this. So I'm going to go back to my intents over on the left, back to my order food. And I will scroll down to add a new slot. So I've already got my what type of food to order. Now I'm going to add the drop off location. So I'm going to name this drop off location. And the slot type will be the one that I justified drop off LOCK. And the prompt will be something like, where would you like the food delivered? It might be a little confusing. That might sound like an address. So maybe dropped off. And then I'll click this add and I can build and test this again and make sure that I get prompted for the right thing. I can also add this to my confirmation and add to the left at the drop off location in my Confirmation. Now it should say are you sure you want to order pizza left at the front door, for example? So if I save this, I can build it and test again.
>
> **[3:11](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=191)** Once it's ready to test, I can click test. And again, I can type in for my information or I could use this microphone. I have to allow permissions, order dinner, would like pizza. Pizza, front door.
>
> **[3:51](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/user-input-prompts?u=76281980&t=231)** Yes, and since I said yes it fulfilled this because we don't actually have the [[Representational State Transfer (REST)|rest]] of the intent done, but we're getting there. And you can see it was a little bumpy. We probably need to make a few changes in there some of the wording and how we [[Microsoft Word|word]] it so that the response is also worded in the way we want but working pretty smooth for just typing in some fields. I'm pretty encouraged. I hope you are too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Word|Word]] (1)
> **UI Navigation:** select the (1), click on (1), dropdown (1), scroll down (1)
> **CLI Commands:** make (3)
> **Env Vars:** loc (2), lock (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Confirmation prompts](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=0)** - [Instructor] Okay so we want to be able to handle their responses really well. We also want to make sure that our sample utterances, our slot types, all these things are worded as best as possible so that we get the information efficiently. There was that typo in here. "What type of food would like?" It should be you like, that's an easy one to fix. No big deal there. And I can close my testing now and save my intent. Also, as we looked at the confirmation, there's more we can do in here as well. If I go into the advanced options, I can actually handle this logic with a little bit of settings in here. I already have the confirmation prompt and I can handle the response with a confirmation response and the decline response. So let's say in the confirmation response, I want to add some conditional branching. I might want to do different things depending on the data that's actually in there. So I could type something in here, like if food equal pizza, then maybe I want the response to be something specific like, "Enjoy the pizza," or "Your pizza will arrive hot soon."
>
> **[1:14](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=74)** And I can update those options. Whereas the default flow, I might want to have just a generic response like, "Enjoy your meal," and maybe no other conditions or advanced settings. Similarly, in something like a branch, I could specify some calling of code in here, I can jump to a specific place in an intent. I can invoke the dialogue code hook. This would invoke a Lambda or I can go straight to the closing response. Anything I need to specify in here for conditional branching of based on values of the confirmation from the user, I can do in here. I'm going to cancel that, I didn't change anything, but now I should get a specific message whenever I build this and test and order pizza as opposed to something else. So once I build this, I should be able to test it again and be able to see if that flow is being handled in the confirmation prompt. Now that it's ready to test, I should be able to go through it like I did before. And I'll specify pizza and I'll say front door. And then when I say, yes, "Your pizza will arrive hot soon." Now, if I had ordered something else, it would've just done the normal generic response for the default. And you can put in a bunch of these different branches depending on what you want to do. Maybe when they say they want pizza, the next step in the conversation would be to call another intent for handling what kind
>
> **[2:46](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/confirmation-prompts?u=76281980&t=166)** of toppings they want on their pizza, that kind of thing. So you can see how this can get more and more complicated to give you more and more power to create a great interactive bot for your users.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a restricted slot](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980&t=0)** (pleasant music)
>
> **[0:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-create-a-restricted-slot?u=76281980&t=5)** - [Instructor] Okay, so in this challenge, I want you to create your own restricted slot. So going back to the bot itself, you've got your slot types, and I want you to create a new slot type to restrict what restaurant the user can order from. So you're only going to accept, say, three values. You can make them up, whatever restaurant names you want, but the user has to select one of those. Obviously, if it's not one of those, it should ask them again, and you don't have to worry about that too much. But once you create the slot type, I want you to create the new slot using that type and then add the slot to the response. So it would say something like, are you sure you want to order food from restaurant to be left at drop off location? So add the slot type, add the slot, and add it to the confirmation message, good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant music) (1)

#### [Solution: Create a restricted slot](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=0)** - [Instructor] Okay, I hope that challenge was great. I hope you did awesome, I'm sure you did. I'm just going to go through how I would do it here. So in my slot types, I'm going to click on add slot type and select add blank slot type, and I'll give it a name like RestSlot for restaurant slot. So I'll add that and I want to make sure that it is a restricted slot type, so I'll click restrict to slot values. And then I need to put the values in here. In this case, I'm just going to make up some names of restaurants. So there's not, maybe, going to be many variations. I might do something like Great burgers and maybe the variation would be something like burgers. And then I can add that value and then, maybe, I want to have a pizza place, Papa pizza and the variations would be papa and pizza. And then finally, something like salad nation, so salad and nation, we'll do something like that. Now, I have my various restricted values in my slot. I can add it to my intent. So I'm going to save the slot here and go back to my intents and select the OrderFood intent and this is where I'm going to add the new slot. So just like I did before, I'm going to add a new slot and the name will be Restaurant. The slot-type will be [[Representational State Transfer (REST)|rest]]-type that I just defined, the RestSlot.
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=93)** And the prompt, from where do you want to order? And I'll add that. And now, I've got the slot-type in here, but the order is off a little bit. So I'm just going to drag this restaurant slot up above the drop off location. And now, it's going to ask type of food, from where, and where do you want it dropped off. And finally, I want to put it into the confirmation. Same thing, I wanted the order to be the same, from restaurant. Are you sure you want to order food from Restaurant left at the DropOffLocation? So I'll save it now and once again, I'm going to build it and test it and make sure it prompts me for the restaurant, accepts the valid values, and allows me to see the restaurant location in the confirmation message. Okay, so if I test it and I say, I want to order food. What type of food would you like? Pizza. From where do you want to order? Papa Pizza. Where would you like it dropped off? Door. Is it the front door? Yes. Your pizza will arrive hot soon. But what if I say, order dinner and I say, pizza and then I say, clown shoe? From where do want to order? It won't accept a value that's not in the list or some variation of that. So this is a great way to limit user selections, but still allow them to be interactive
>
> **[3:09](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-create-a-restricted-slot?u=76281980&t=189)** and allow for variety. So if I say, Papa, there you go, it works good. So now, we're limiting this, and I hope that challenge went well. I hope this is basically how you did it, congratulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (1), select the (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Responses

[↑ Back to Table of Contents](#table-of-contents)

#### [Closing response](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=0)** - [Instructor] So we've been working our way top down through this intent starting with the sample utterances, where the user kicks off the intent, and then the initial response, the slots that get filled based on the user's input and the confirmation based on telling them, "Well, this is what we understand you want to do. Do you want to do that?" We're going to skip fulfillment for now and then we're going to go to the closing response. So in the closing response, we can put something pretty basic. You notice the example is just thanks. So it could say something like, "Goodbye. Enjoy the," and then in the curly braces, "food." I try to keep it really generic because all the different paths through here and getting the different data, we might've already said something like enjoy your food, so I try to keep this one pretty simple. You notice again, the example was just thanks. You can also provide variations of this. You might want to just say, "Thanks. Goodbye. See you soon." Something like that. There's also this more response options. We can click on this and see some additional things we can do in here. Now, most of these settings are the same but we have this Add button up here that we can have text message group, a card group, and so forth. This card group is what I want to focus on. This allows you to present the user with a user interface to select options. So that would work great for our restaurants, right? So if I close this and go back up to my prompts for the restaurants, here it is,
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/closing-response?u=76281980&t=93)** and click on Advanced Options, I can add a card here and I'm going to do that in the next video.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Prompting with card group](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=0)** - [Instructor] So I want to be able to prompt the user for the restaurant without them having to even specify it. I can provide them with the options. So back up in my slots, I'm going to expand the restaurant prompt and go to advanced options, and then I'm going to scroll down to the slot prompts and expand that, and go to more prompt options. Then in here I go down to slot prompts and click add, and there's the card group. This will present them basically a card where they can select the input. So I'm going to scroll down to the card group. You can put an image URL in here. You can set a title, like where do you want to order from? Subtitle, restaurant, or you could reverse this, whatever you want it to display like. And then you can specify these buttons. Now the buttons are going to present something to the user, but then the value of the button is going to be what they would have typed in to make the same selection. So I might put something in here like Great Burgers, and then in here I just put burger, something like that. Whatever the value from this slot type, that's valid. So I might just put great burgers in here. Then add another button, and I could put in Papa Pizza, and over here, put in papa. I think that would work. And then the last one was Salad Nation, and over here I could put in salad or one of the other variations.
>
> **[1:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/prompting-with-card-group?u=76281980&t=92)** Those should work. It would be when they tap this button, it's as if they typed in Great Burgers. So now I'm going to update the prompts, update the slot, build and test again, and this time, I should be prompted for the options for the restaurant. Now when I test it, I can specify I want to order dinner. What would you like? Pizza, and then I get the cart. This is where the image would go if I put in a URL for that. I'm going to say Great Burgers, and then it's going to say, where do you want it dropped off? Front door, and it gets the input from the prompt, instead of me typing or speaking. It works the same. This would be great for things like sizes, do I want small, medium, or large drink, or pizza or whatever? So when you have a limited number of options for a response, you can restrict the slot, but then also use this card to present them with the only acceptable options.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), scroll down (2), select the (1)
> **Env Vars:** url (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Closing response for dessert](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-closing-response-for-dessert?u=76281980&t=0)** - [Instructor] Okay, it's challenge time. In this challenge I would like you to add a response card to your closing response of your order food intent. I want you to prompt the user with a card that basically asks if they want to order anything else, drinks or dessert. Since they're ordering food you might want to switch to one of those. You don't have to do anything with it for now, I just want you to ask them if they want to. And then their response for those buttons could be order drinks, order dessert, which would kick off the other intents. So there can be one really tricky thing about this and it has to do with the confirmation message up here. In the advanced options if you followed along and did like I did and had this conditional branching, there's a difference between what happens when the food is pizza and the default flow. So if you check both those out try each one and one may work and one may not, and you can try to figure out the difference but don't beat your head against the wall forever. It's kind of a bonus little challenge. But if you get one working, that's great and I'll show you the details in the next video. Good luck.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Closing response for dessert](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=0)** - [Instructor] Okay, so let's check out this challenge on the closing response. So I'm going to click on, if I don't already have the closing response, I'd want to expand that, and I'm going to select more response options, and then under the add, I will add the card group. I scroll down and I see that card group, and I might say something like, "If you want to order more, click below." And then the subtitle would be something maybe like options, and then I want to add a couple of buttons. I could say drinks, and then that would basically be the same as if the user typed in order drinks, and then for button two, I could have dessert, and that would be as if they typed in order dessert. So now I can update that response, save it, and it should be good to go. I should be able to build and test it, but remember in the last video, I said there was kind of a little tricky situation here, and it's in this confirmation section. If I go to the advanced options and scroll down where I see the branches, I have default flow, and when I expand the values, it goes to the closing response. But this branch, what does it do? It ends the conversation. So I actually want to go to the closing response. Otherwise, it won't prompt them for this input. So I'll update the options, save the intent,
>
> **[1:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-closing-response-for-dessert?u=76281980&t=96)** and then build this and test it. Now when I test it, I should get prompted at the end if I want to order anything else. I want to order dinner, I'm going to say pizza. From where would you order? Papa, door, yes, and then I get prompted if I want to do some more, and I could say, I want to order drinks, and that automatically gets fulfilled. If I hadn't done this, it would've just ended the conversation for when I ordered pizza. It looks like I've got some quotes here. Probably want to take those out. That is in the closing response. Just remove the quotes, save the intent, and I'm good to go. So I hope that went well for you. I'm sure it did. Oops, I put a plus sign in there. What do you know? Okay, let's move on. I hope you're having a great time.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (2), go to (2), click on (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Publishing

[↑ Back to Table of Contents](#table-of-contents)

#### [Versions and aliases](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=0)** - [Instructor] Even before my bot is completely done, I may want to start thinking about how I'm going to test this. And we can do that with versions and aliases. If I click on Versions at the top in this breadcrumb trail, I can see the different versions that have been created for me. There's one called the Draft version and I can create more versions. So I might want to create versions every once in a while, of course, whenever there's a milestone in the feature set. So I'm going to create a version as if I was just creating a version for let's say, testing. 'Cause that's probably what I'm doing here. And I really don't have to specify anything. It's just going to create a version for me and it's not being used at all. Version 1, there it is. That's fine. And I could create more versions of this as it goes. So I have Version 1, but how do I use it? Well, right now, I'm not. I have to create an alias to point to this version. So I'm going to click on Aliases over here on the left. Now when I create an alias, I'm going to point it at a version. So I might have an alias like test and this could be the testing alias, and it could point to whatever version is currently being tested. So we'll say Version 1, no problem. So I'll create that. Well then later when I'm ready to release this, maybe I create another alias called production and point it at Version 1. And then I create another version called Version 1.1 or 2 and I point test to that version. That becomes the new test version. And production is still on Version 1. So you can iterate these
>
> **[1:35](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/versions-and-aliases?u=76281980&t=95)** as you go and build out the new features. And as you're ready to test or deploy them, set up the aliases to point to the applicable version. That's how we set it up to be ready to test. Now, we need to look at setting up a client to be able to use these for testing.

> [!info]- Semantic Content
>
> **Versions:** version 1 (6)
> **UI Navigation:** click on (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Client creation](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=0)** - [Instructor] Now that my bot's ready to test in AWS, I want a local client to be able to access it and run some of the commands, some of those utterances from the client so that I can test this interaction. Now normally when I would do this in a project, I'd use Amplify or Amplify Studio. These are great tools by AWS to configure and kind of manage your project. In this case I'm just going to do it manually just to kind of cut to the chase and get to the point of connecting to this bot. But typically, I would definitely use Amplify to manage this whole thing. From the Amplify docs at docs.amplify.aws, I can see the typical "Get started for free" button. I could jump directly to a language and platform by clicking one of those logos underneath it as well. I'm just going to click on the "Get started for free". I'm going to select [[JavaScript]] from the dropdown and then I'm going to go right to the Libraries tab over here. This is going to get me integrate this into a project really quickly. So I've got the prerequisites I need to have [[Node.js]] which we'll install [[npm]] as well. So I've already done that. I've got that installed, but you would need to do that. Don't really need to do NPM separately or [[Git]]. I've already got an AWS account and I'm not going to use the Amplify [[CLI]]. Again, I'm just going to straight to manually setting this up. So I really don't need these other pieces of setting up this command line interface and associating it with an account and everything by configuring it. So I'm just going to skip all these pieces.
>
> **[1:32](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=92)** Just make sure that I have NPM installed. And then I'm going to go to Create your application. Again, I pick my platform. I'm going to use NPX so I'm going to copy this and I'm going to bring up the terminal. In the terminal, I'm going to switch to my desktop and I'm going to run those commands which will create a directory, create a boilerplate project in there, and then also change directory to that directory. Okay, so once that runs, I should have my basic project in there. I can do an LS in this directory, and I could even do an NPM start to make sure that it will run this in a browser. Once that starts up, looks good, I have the server running and my project was installed correctly. If go back to the terminal, I probably want to stop that to run my next commands from the setup instructions. So again, back and the documentation. I'm going to skip the Amplify steps, and I'm going to go down to installing the framework that I need, the library, the AWS Amplify Library that I want to use inside my client. Back in the terminal, I'll run that. Once that's installed, I have everything locally I need. I just need to start writing the code. Now, this is creating the application. I want to go into a specific service, and in this case it's interactions. This is where the chatbots are. Again, the getting started is all about setting these things up. We have the version 2 portion down here at the bottom where we have this code for interacting
>
> **[3:05](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-creation?u=76281980&t=185)** with the service, or at least setting up the configuration. So I'm going to copy that. And again, back in the terminal, I'm going to edit the index.js. I'm using VI. You can use whatever editor you want. I'm going to delete all of the lines in here and I'm going to paste in the code that I just copied. The only other thing that I need to add is this one part down at the bottom of also importing the interaction. So I'm just going to copy that and back up at the top of the file, I'll add that to the import from Amplify. So I already have Amplify being imported. Now I'm going to import the interactions from that. And notice we have a lot of fields we need to enter. We have some Cognito identity pool and region and then a lot of settings for our bot. So we're going to get these in the next two videos where we set up a Cognito pool. Again, we're just going to do it quick and manually and then we're going to put in our bot settings and then all we have to do is start interacting with our bot. So we're getting close. We're almost there. So we'll go over those in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (4), [[JavaScript]] (1), [[Node.js]] (1), [[Git]] (1), [[CLI]] (1)
> **CLI Commands:** aws (5), npm (4), make (2), node (1), git (1)
> **Env Vars:** aws (4), npm (4), cli (1), npx (1)
> **Tools:** terminal (5), command line (1)
> **Prerequisites:** configure (1), install (1), setup (1), getting started (1), set up (1)
> **UI Navigation:** click on (1), dropdown (1), go to (1), switch to (1)
> **Cross-References:** in the next (2), go back to (1)
> **File Paths:** node.js (1), index.js (1)

#### [Client preparation](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=0)** - [Instructor] The code I copied has several fields I need to fill in. The first two have to do with an identity pool which is used in authorization. Cognito is used to create identity pools. AWS uses Cognito to give users permissions to call services. Users get assigned permissions based on if they're logged in or not. Users who are logged in tend to have authorization to use more services. To create an identity pool, I need to go to Cognito and AWS. From there, I can click on the left menu and select identity pools. This will take me to creating a new identity pool. All I have to do is give it a name and I'm going to name it MyBotPool. And I do want to give unauthenticated users access into the pool. So I'm going to enable access to unauthenticated identities with the checkbox. And then down at the bottom right, I'll click create pool. As it's creating this pool, I can view the details and see what the names of the roles are. Particularly, I want to make note of this unauthenticated role. So MyBotPoolUnauth, that's the one I need to add permissions to be able to hit the Lex bot. So unauthenticated users can still access the bot. So I'll click allow and then I'm done. Now I've got some information for integrating this bot into various clients. And here I have the region and the pool ID. And that looks very similar to the information
>
> **[1:35](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/client-preparation?u=76281980&t=95)** that I have in the code. So I'm going to copy this pool ID right out of the text and notice that it's got the region built right into it, us-east-1. So I'm going to copy that pool ID, and I'm going to come back here in my code and paste it right in there. And then for the region, I can either copy and paste that or just type us-east-1. So I want to make sure I save that. And now the code is set up, but I need to go to IAM to make sure I give that unauthenticated role access to be able to hit the Lex bot. Otherwise, I'd have to add login information to my client, let users log in, give them permission, so forth. We just want to be able to test this, so we're going to let unauthenticated users hit it. So back in AWS, I'm going to go to IAM. I'm going to select roles on the left side and I want to look for that unauthenticated role. And here it is, Cognito MyBotPoolUnauth Role, I'll click on that and I'm going to click over here on the right on add permissions and attach policies. Now there's tons of policies that are provided by AWS and I encourage you to check out the IAM course here. But I know that I want to add the LexRunBotsOnly policy. So I'm going to check that and add permissions. So now any client that uses this identity pool with an unauthenticated user will have access to be able to hit our bot. Next, I need to get all of the Lex bot details from my code and fill in these other fields down at the bottom.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (4), make (3)
> **Env Vars:** aws (4), iam (3)
> **UI Navigation:** go to (2), checkbox (1), click on (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Gathering configuration data](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=0)** - [Instructor] So the next section in the code is for the interactions. This is where we specify all the details about our bot and the alias that we wanted to hit. So that's kind of related to the version and so forth. So I'm going to go down to this section and see if there's anything that I can add without having to look it up. So the first thing is the bot name. And I know my bot name is OrderMeal and the second one is the same thing, it's the bot name. So I'll just type in OrderMeal again. And I know that the region is the same as the identity pool so I'll just type in us-east-1. The Lex version two provider isn't something we have to change. That's imported up here at the top, so we're fine there. So I need to look up the alias id, the bot ID, and the locale id. So the alias ID is easy enough to look up in AWS. Here I'm at the aliases for the bots. I'm going to click on the test alias that I created and there's the id. So I can just copy that and paste it into the code. So that's the alias id. And then for the bot id, it's just as simple but instead I go to the bots, OrderMeal, and there's its id, and I can paste that in as well. And the last one, for the locale id, I can look this up. It's basically the language that's supported. And so I can look that up in the documentation. If I go back to the browser, I can go to aws.[amazon.com](https://amazon.com), go to the documentation, view all documentation
>
> **[1:36](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/gathering-configuration-data?u=76281980&t=96)** down here under the services. I can look up Lex. In here, I can look at the developer guide. Under how it works, I can look up supported languages. And then here's English. Now that was kind of a pain to get to. You could probably get there a lot faster if you just [[Google]] AWS supported languages or Lex V2 supported languages. I just wanted to show you this as one way to get into it and how to access it. So back in the code, I'm going to put in that language. And now I have all of my settings in here. I should be ready to test this and I'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **CLI Commands:** aws (3)
> **UI Navigation:** go to (3)
> **Env Vars:** aws (2)
> **Cross-References:** go back to (1), in the next (1)
> **Documentation:** the documentation (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Speakers:** - [instructor] (1)

#### [Testing the bot with text](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=0)** - [Instructor] Now that I have the configuration done, I can add code to actually hit the bot. It will use this identity pool so it will allow unauthenticated users access to the bot, and that should work great for us, and then we can see the output in the browser's console. So back at the Lex documentation for [[JavaScript]], I'm going to scroll to the bottom and go to the next section for interact with bots. I can also click on that over here on the left. This gives me some code to be able to interact with the bot. So I'm going to copy this and then I'm going to paste this into my same index.js file. So back in VI, I'm going to scroll down to the bottom, type I for insert, and I'm going to paste that code. Now I need to change this, of course, to be for my bot. So instead of reserving a hotel, I'm going to say order dinner.
>
> **[0:54](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-the-bot-with-text?u=76281980&t=54)** And we already have the import of the interactions above. So I'm going to hit double D to delete that. And we're not using the BookTrip bot, we're using our OrderMeal bot. So again, I'm going to delete that and change it with OrderMeal. Now there is one problem with this code, that we want to actually print out response.messages. If you leave it as message, you're going to get a weird enable JavaScript error and nothing's going to work and it's going to say this is undefined, so make sure you change that to messages. So now I'm going to escape this. I'm going to write and quit for this file to get saved out, and then I'm going to run it with [[npm]] start, and it should start the server load, the browser. And I should be able to look at the console to see the output as the response from the text I sent up of, "I want to order dinner." So if I go to the browser now and I have view, developer, developer tools, and I'm on the console in Chrome, I can expand the response and I see, "What type of food would you like to order?" So that's what we should be responding with, and now I can continue that interaction however I define the client. If you have a different platform, of course, you're going to want to look at this dropdown here to see what other type of platforms you can support and develop your client to interact with your bots however you need to do for your specific project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[npm]] (1)
> **UI Navigation:** go to (2), click on (1), scroll down (1), dropdown (1)
> **CLI Commands:** make (1), npm (1)
> **File Paths:** index.js (1)
> **Env Vars:** npm (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Engage bot from CLI](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/challenge-engage-bot-from-cli?u=76281980&t=0)** - [Instructor] Okay, in this challenge, I want you to extend the conversation besides just saying you want to order dinner. I want you to send responses to the questions that you know are being asked like from where do you want to order your food and where do you want it dropped off, are you sure, and so forth. So you can do this in the same code just like we sent it here with Interactions send OrderMeal user input where I want to order dinner. You can do more of these awaits after this with things like pizza and the name of the restaurant where you want it dropped off. And then the final yes for confirmation. I changed mine up just a little bit and created a new version in Version 2 and then a new alias to point to that version. So I had to change the alias ID in my code. I wanted to include in the responses to the user their responses for the order. From where do you want to order pizza? Where would you like the pizza dropped off? And you could do the same thing with the restaurant. You could put in there, where do you want pizza from Papa's to be dropped off? Something like that. So again, if you create another version using this Create Version button and then create a new alias that points to that version, you need to replace the ID in your code. Then you can add those additional sends for the responses to the questions. So, good luck with this. I think you'll have a lot of fun.

> [!info]- Semantic Content
>
> **Versions:** version 2 (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Engage bot from CLI](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/solution-engage-bot-from-cli?u=76281980&t=0)** - [Instructor] Okay, so I hope you did great on that challenge. It's kind of fun to me to see the back and forth and the responses and the communication and everything. So I hope you got something similar. I'm going to show you my code here with my new alias ID in there. On this first one, I set the, "I want to order dinner" to a variable and pass that in just like the code I copied from AWS. But after that, I just put it right in the line. So I have another response here, "order meal" and I'm saying pizza 'cause I know what the question was. What do you want to order? And then it asks me from where, and I say, "Papa". And then it says, where do you want me to leave it? "Door." Do you want to order pizza from Papa's Pizza and leave it at the door? "Yes." So my interaction looks like this. Pretty cool. And so however you design your client you can allow obviously the user of your app or website to type these things in or select them from a list of restaurants, whatever it is. But you can see how the interaction works. Anyway, I hope that challenge was great. I hope it was a lot of fun, really cool for me to be able to see that interaction back and forth from the server with a bot that I created. And I feel like an AI scientist, and I hope you do too.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Functionality of Lambdas

[↑ Back to Table of Contents](#table-of-contents)

#### [Lex and Lambdas](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=0)** - [Instructor] So I've mentioned the aspect of Lambdas within Lex. Lambdas are serverless functions. Yes, server development without the server administration, dreams do come true. I love that. I love how powerful Lambdas are. You can write code in [[Python (Programming Language)|Python]], [[PHP]] in a variety of different languages have access to basically all AWS services, [[Databases]], push notifications, basically everything in AWS. So Lambdas are your gateway from your bot into just about everything else. Back in the Lex documentation, I can scroll down to Enabling custom logic with Lambda functions. And it gives you a list of places where you can call a Lambda. Before the conversation starts. For example, after telling the user the recognized intent. So this is right after the intent starts. After eliciting a slot value. So whenever the user responds to a message from the bot asking what they want to do, you can run a Lambda. Between each retry, when confirming the intent, fulfilling the intent, and so forth. There's all these places in your intent that you can call the Lambda. So if I look at my intent here, I see the details up at the top, the context and so forth. And then here's the initial response. Pretty much anywhere I see advanced options, I can call the Lambda. So I click on Advanced options, and when I see set values, I have this next step in conversation. I can jump to the Lambda from here,
>
> **[1:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/lex-and-lambdas?u=76281980&t=94)** or in conditional branching, I can call the Lambda from here. So there's a couple different places I can jump into a Lambda based on if I hit a certain spot of my intent, like the acknowledgement of the user request or if there's something specific, like if the food were pizza in this slot then I might want to set the value to jump to a Lambda and then that way it could process what toppings are available and prompt the user for that. So basically, any of these places that I see advanced options is somewhere that I can call the Lambda. So again, that's for slots, advanced options, the confirmation advanced options, the fulfillment can be a Lambda and it has that setting right here at the top. And even in the closing, I can have branching. And then down here is where I turn it on and off. Use a Lambda function for initialization and validation. I can turn that on. So I don't specify the Lambda here. We do that actually in the alias. In the next video, we're going to look at creating a new bot and then we'll look at creating Lambdas to attach to that bot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[PHP]] (1), [[Databases]] (1)
> **CLI Commands:** aws (2), python (1), php (1)
> **Env Vars:** aws (2), php (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [BookTrip sample bot](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=0)** - [Instructor] Okay, so now I'm going to create a completely new bot, or at least a different bot from this one. And from there I'm going to create Lambdas and associate with it. If you remember when we created our initial bot, we had a few options. We had a blank bot, an example, and transcripts. This time I'm going to create a bot starting with an example. And there's a handful of 'em here, BookTrip, MakeAppointment, OrderFlowers. I'm going to use BookTrip. And it gives me an idea of how it works. I'd like to book a hotel. Sure, which city? City, date, check-in, stuff like that. So I'm going to name this one BookTrip, the same name as the example. I can give it a description. I'm going to let Lex create my IAM role for me with the permissions necessary. And it's not subject to COPPA, so I'll say no. And I'll use the [[Representational State Transfer (REST)|rest]] of the defaults. So all I did was pick an example of the BookTrip and give it a name. And now I'm going to click Next. Once it's created, I can select a voice. I'm going to select Ruth. And I'll leave the classification confidence score threshold the same and click Done. Now in this bot, I can see I have two intents for booking a car, a hotel, and then the fallback intent. Going down through the BookHotel, I can see that my sample utterances are book a hotel, I want to make a hotel reservation, and so on. And then for the slots, we have the city, the location where we're going, check-in date, number of nights, and the room type. So the car would be fairly similar
>
> **[1:33](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/booktrip-sample-bot?u=76281980&t=93)** as far as the dates and everything and the type of car. I'm going to save this intent, and now I'm going to build it, and then I want to test the booking of the hotel. Now that it's built, I can test it by saying something like, I want to book a hotel. What city will you be staying in? Denton. What day do you want to check in? Tomorrow. How many nights? Five. What type of room? Regular. Okay. Yes, we'll book that, and then it's fulfilled. So it did do a lot of validation because I just said a regular room. and that wasn't even in the list. So we're going to see how Lambdas can help us out moving forward with this validation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** iam (1), coppa (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Creating and connecting Lambdas](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=0)** - [Instructor] Now that I've got my bot defined that I want to be able to use a Lambda from, I want to go create the Lambda, then I can come back and start setting it up to be called from here. So up at the search bar at the top, I'm going to type "Lambda" and I'm going to Command + click Lambda so it'll open it up in its own tab. Here I can create a function just by clicking Create a Function. And there's some options kind of like we saw with the bots. In this case, I'm going to use a blueprint and I'm going to click on this Hello World function and do a search for book trip, and there's Book a Trip with Lex. That's the one I want. I can give it my own name for it. So I could say MyBookTrip or whatever I want to call it. I'm just going to call it BookTrip and use the [[Representational State Transfer (REST)|rest]] of the defaults that are already set up for me. I can see the code down here and how it validates the different slots for things like the car types and the hotel types, the room types here and the various cities. And I can check that out. And then when I'm ready, I can just click Create Function. So this will create the function. Unfortunately, this function actually doesn't work with Lex Version 2, so this is great for Lex Version 1. But I did find some code that works for Lex Version 2. So I'm going to go to [github.com/aws-samples](https://github.com/aws-samples) and scroll down a little bit to the Find a Repository. And I am going to search for "booktrip." And there is Lex V2 for the booktrip bot. I can get the function's code with the lambda_function.py file. And I'm going to click Raw.
>
> **[1:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/creating-and-connecting-lambdas?u=76281980&t=94)** And similarly, we can see that this handles a lot of the same things as far as the car types, room types, hotel, and so forth. Notice that it's Nueva York 'cause this is actually set up for Spanish, but I don't think there's any other differences. The types of the hotel rooms are king, queen, deluxe, and so forth. So I'm going to actually just copy all of this code and go back to my Lambda, and scroll down here where I can edit it. And I'll copy all that, paste the new code, and deploy these changes. Now Lambdas are super powerful as I mentioned before. They can use just about everything else in AWS. So I really encourage you to check out the course on Lambdas and see what other functionality you can do that can really help you out with anything that you're developing as far as your app goes and your bots and so forth. Anyway, now we have a Lambda set up, BookTrip. We can go back to our bot and set it up to be able to call this Lambda whenever it needs to validate input, and we'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[GitHub]] (1)
> **CLI Commands:** find (2), aws (2)
> **UI Navigation:** scroll down (2), click on (1), go to (1)
> **Versions:** version 2 (2), version 1 (1)
> **Cross-References:** go back to (2), in the next (1)
> **Prerequisites:** set up (3)
> **File Paths:** lambda_function.py (1)
> **Code Identifiers:** lambda_function (1)

#### [Testing with Lambdas](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=0)** - [Instructor] Okay, now that I have my bot and now that I have my Lambda I'm ready to connect them together so that they can work towards this validation. And of course, again those Lambdas can do just about anything. So this is going to be a fairly simple example. You can play with the other ones as well for like the ordering flowers and so forth but you'll get a sense of how Lambdas can be used in your Lex. And by checking out Lambda courses you can see that it can do so many more things. Lambdas are incredibly powerful. Okay, so in my book, Hotel Intent, I'm going to check use a Lambda function for initialization and validation. So I check that and I'm going to save the intent. And I'm also going to set up the alias to use this lambda for the language. So I'm going to go back to the bot level, click on aliases click on the alias name. And this is kind of weird but you set up the Lambda per language. So I'm going to set this one up for English. So I'm going to click on English. And then now the source is the Lambda function. For me, it was book trip so I'll pick that and use the latest version and save that. So now the alias is set up, the intent is set up. I can build and test this and it should use that validation now for things like the city and the hotel room type and so on. So I'm going to build this one and then I'll be able to test it. Now, it didn't set it up for car. We could also set the coding hook for the car and it would use it the same as book hotel would because I already set it up for the alias. But I'm just going to build this for the book hotel testing, you can try it on the car.
>
> **[1:34](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=94)** And again, on the other bots like ordering flowers and so forth. Of course, on your own Lex Bots, that would be fun. Create a Lambda and set it up to be used in your bot. Now if we look over the documentation again, I mentioned before we have this section on enabling custom logic with Lambdas. Here's the documentation on setting up the Lambda with the alias, and also sections on interpreting the input what's being sent to the Lambda and the response format back from the Lambda. So if you're familiar with Lambdas this would be really helpful. Otherwise, again, I encourage you to check out the course on Lambdas. So back where my test should be done. Now it is, I'm going to click test and I'm going to say I would like to book a hotel. What city will you be staying in? Last time I used Denton, I'll use that again. What city will you be staying in? It doesn't recognize that now, it doesn't allow that now because the Lambda is preventing it based on the list of cities it supports. So I'll put in El Paso and now it says, what day do you want to check in? Tomorrow How many nights? Six, what type of room? Regular, what type of room? Okay, fine. I'll get a king size room. And then there I can approve that. And there's my answer in Spanish. This is because of that Lambda being the Spanish language version of the code. You can update that, or of course, create your own. Anyway, this is a great way to be able to add this type of functionality to your bot
>
> **[3:07](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/testing-with-lambdas?u=76281980&t=187)** and just expand the functionality as well as doing things like validation.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (4), initialization (1)
> **UI Navigation:** click on (3)
> **Documentation:** the documentation (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue training your chatbots](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980)

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
> **[0:27](https://www.linkedin.com/learning/building-intelligent-chatbots-on-aws-22735480/continue-training-your-chatbots?u=76281980&t=27)** - [Bear Cahill] Well, that's a lot to go over, but I hope you agree that a lot of the heavy work is being done by AWS. It understands text and speech very well. I don't think I'd know how to write all that. On your side, you'll need to provide the functionality to book a hotel, order food, or whatever you need to do. However, a Lex bot can sit in front for the user to give their input, and hopefully you've learned how to create those bots now. Next, I recommend experimenting with sharing information between intents. We saw a little bit of that at the end with the BookTrip bot. Also, check out courses with Lambdas to see what power that can bring. And feel free to let me know what you're working on, and keep in touch at [brainwashinc.com](https://brainwashinc.com), @brainofbear, and on [[LinkedIn]]. Thanks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Speakers:** - [lex] (5), - order (1), - pizza (1), - monica (1), - the (1)
> **CLI Commands:** aws (1)
> **URLs:** [brainwashinc.com](https://brainwashinc.com) (1)
> **Env Vars:** aws (1)
> **Prerequisites:** you'll need (1)


## Instructor

- [[Bear Cahill]]

## Resources

- Exercise files available

## Skills Covered

- Chatbot Development
- Artificial Intelligence (AI)
- Amazon Web Services (AWS)

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