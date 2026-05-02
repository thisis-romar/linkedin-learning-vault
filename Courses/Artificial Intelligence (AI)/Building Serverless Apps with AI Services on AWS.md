---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-serverless-apps-with-ai-services-on-aws
url: "https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws"
duration_minutes: 190
duration: 3h 10m
level: Intermediate
updated: 5/17/2024
learners: 1884
skills:
  - Serverless Computing
  - Amazon Web Services (AWS)
exercise_files: true
github: "https://github.com/LinkedInLearning/buidling-serverless-apps-AI-4454235"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFP8u36n9BS5g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715735518041?e=2147483647&amp;v=beta&amp;t=sbjC63InFEcvXgjVORp-8qXaoe_V1xbQMkCbkc5KTH4"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your AWS Development Skills- Exploring Complex Application Development]]'
prev_courses:
  - '[[AWS Security Best Practices for Developers]]'
next_courses:
  - '[[Building Intelligent Chatbots on AWS]]'
path_nav: '[{"path":"Advance Your AWS Development Skills- Exploring Complex Application Development","position":5,"total":6,"prev":"AWS Security Best Practices for Developers","next":"Building Intelligent Chatbots on AWS"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/serverless-computing
  - skill/amazon-web-services-aws
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20Serverless%20Apps%20with%20AI%20Services%20on%20AWS.md)

![Building Serverless Apps with AI Services on AWS](https://media.licdn.com/dms/image/v2/D4D0DAQFP8u36n9BS5g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715735518041?e=2147483647&amp;v=beta&amp;t=sbjC63InFEcvXgjVORp-8qXaoe_V1xbQMkCbkc5KTH4)

# Building Serverless Apps with AI Services on AWS

> Looking to pair the flexibility and efficiency of serverless architecture with the power of generative AI? In this course, instructor Marcia Villalba shows you how to build serverless applications using AI services on AWS. The course focuses on integrating various services such as Amazon AI Service, Amazon Bedrock, AWS SAM, AWS Step Functions, and EventBridge. Along the way, practice your new skil

> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws) | 3h 10m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Serverless apps with AI services on AWS](#serverless-apps-with-ai-services-on-aws)
  - [What you should know](#what-you-should-know)
  - [What you are going to build in this course](#what-you-are-going-to-build-in-this-course)
- [**1. Introduction to AI**](#1-introduction-to-ai) (5 videos)
  - [Introduction to AI](#introduction-to-ai)
  - [Introduction to Amazon AI Services](#introduction-to-amazon-ai-services)
  - [Introduction to Gen AI](#introduction-to-gen-ai)
  - [Introduction to Amazon Bedrock](#introduction-to-amazon-bedrock)
  - [Challenges when building AI and Gen AI applications](#challenges-when-building-ai-and-gen-ai-applications)
- [**2. Getting started with Serverless**](#2-getting-started-with-serverless) (3 videos)
  - [What is serverless?](#what-is-serverless)
  - [Why serverless is great to build AI apps](#why-serverless-is-great-to-build-ai-apps)
  - [Using Amazon Bedrock from serverless services](#using-amazon-bedrock-from-serverless-services)
- [**3. Infrastructure as code**](#3-infrastructure-as-code) (4 videos)
  - [The important role of infrastructure as code](#the-important-role-of-infrastructure-as-code)
  - [Introducing AWS SAM](#introducing-aws-sam)
  - [Installing and configuring AWS SAM](#installing-and-configuring-aws-sam)
  - [Getting started with the project](#getting-started-with-the-project)
- [**4. Introduction to Step Functions**](#4-introduction-to-step-functions) (9 videos)
  - [Understanding Step Functions](#understanding-step-functions)
  - [Creating your first workflow in the AWS console](#creating-your-first-workflow-in-the-aws-console)
  - [Creating a workflow as IaC](#creating-a-workflow-as-iac)
  - [Introduction to ASL](#introduction-to-asl)
  - [Introduction to flow states](#introduction-to-flow-states)
  - [Step Functions integrations](#step-functions-integrations)
  - [Modifying the workflow with simple integration](#modifying-the-workflow-with-simple-integration)
  - [Challenge: Modify the state machine to add an integration to AI service](#challenge-modify-the-state-machine-to-add-an-integration-to-ai-service)
  - [Solution: Modify the state machine to add an integration to AI service](#solution-modify-the-state-machine-to-add-an-integration-to-ai-service)
- [**5. Building a Workflow with AI**](#5-building-a-workflow-with-ai) (8 videos)
  - [Modifying the existing state machine to use Amazon Bedrock](#modifying-the-existing-state-machine-to-use-amazon-bedrock)
  - [Challenge: Integrate with Amazon Bedrock](#challenge-integrate-with-amazon-bedrock)
  - [Solution:  Integrate with Amazon Bedrock](#solution-integrate-with-amazon-bedrock)
  - [What is event-driven architecture?](#what-is-event-driven-architecture)
  - [How to trigger a state machine when there is a new S3 file](#how-to-trigger-a-state-machine-when-there-is-a-new-s3-file)
  - [How to send an email from the state machine](#how-to-send-an-email-from-the-state-machine)
  - [Challenge: Integrate to EventBridge event bus to send an event](#challenge-integrate-to-eventbridge-event-bus-to-send-an-event)
  - [Solution: Integrate to EventBridge event bus to send an event](#solution-integrate-to-eventbridge-event-bus-to-send-an-event)
- [**6. Build a Chatbot with GenAI**](#6-build-a-chatbot-with-genai) (9 videos)
  - [What is an Amazon Bedrock agent?](#what-is-an-amazon-bedrock-agent)
  - [What you are going to build](#what-you-are-going-to-build)
  - [Creating a Lambda function for the agent](#creating-a-lambda-function-for-the-agent)
  - [Creating an Open API for the function](#creating-an-open-api-for-the-function)
  - [What is an Amazon Bedrock knowledge base?](#what-is-an-amazon-bedrock-knowledge-base)
  - [Creating a knowledge base](#creating-a-knowledge-base)
  - [Creating an Amazon Bedrock agent](#creating-an-amazon-bedrock-agent)
  - [Challenge: Add another function to the agent](#challenge-add-another-function-to-the-agent)
  - [Solution: Add another function to the agent](#solution-add-another-function-to-the-agent)
- [**Conclusion**](#conclusion) (3 videos)
  - [What we built](#what-we-built)
  - [Cleaning up the environment](#cleaning-up-the-environment)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Serverless apps with AI services on AWS
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/serverless-apps-with-ai-services-on-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/serverless-apps-with-ai-services-on-aws?u=76281980&t=0)** - Artificial intelligence is in everybody's mind right now.
>
> **[0:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/serverless-apps-with-ai-services-on-aws?u=76281980&t=4)** But as a developer, how you can get started building AI applications without knowing about machine learning or being a data scientist?
>
> **[0:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/serverless-apps-with-ai-services-on-aws?u=76281980&t=14)** The answer is very relying on third party APIs that provide the functionality you're looking for.
>
> **[0:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/serverless-apps-with-ai-services-on-aws?u=76281980&t=20)** There are many services out there that offer generative AI models ready to use and APIs to solve problems with AI.
>
> **[0:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/serverless-apps-with-ai-services-on-aws?u=76281980&t=29)** In this course, I will help you get started orchestrating AI applications using a programmatic approach and generative AI.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/serverless-apps-with-ai-services-on-aws?u=76281980&t=38)** I will cover services like AWS Step Functions, Amazon Bedrock, and many AWS AI services.
>
> **[0:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/serverless-apps-with-ai-services-on-aws?u=76281980&t=46)** I'm Marcia Villalba, principal developer advocate at AWS, and I have been developing software for over 20 years.
>
> **[0:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/serverless-apps-with-ai-services-on-aws?u=76281980&t=53)** I'm a big proponent of cloud computing, serverless and automation.
>
> **[0:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/serverless-apps-with-ai-services-on-aws?u=76281980&t=57)** So let's get started with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (4), aws (3), [[Generative AI]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), data (1)
> **CLI Commands:** aws (3)
> **Env Vars:** aws (3)
> **Speakers:** - artificial (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=0)** - [Instructor] This is an intermediate level course.
>
> **[0:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=2)** In order to follow along, you need to have a bit of knowledge in different areas.
>
> **[0:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=8)** You will code part of the project of this course using Node.js and JavaScript.
>
> **[0:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=13)** It'll be great if you have some experience with this programming language.
>
> **[0:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=17)** If you don't have any, you can find basic courses on Node.js in our library.
>
> **[0:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=22)** However, if you're a senior developer with experience in another language, I'm pretty sure that you can follow along with no problems.
>
> **[0:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=31)** You don't need to have any knowledge of AWS.
>
> **[0:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=33)** During the course, you will need an AWS account.
>
> **[0:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=36)** If you don't have one and you don't know how to create it, check the LinkedIn Learning Library for a course that will help you.
>
> **[0:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=44)** Many of the services that we are going to use are covered in the AWS Free Tier.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=50)** However, Amazon Bedrock knowledge base has a cost during the time it's used.
>
> **[0:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=56)** This is why it's so important that if you stop working in this course, you go to the last section of the course, and follow the cleanup instructions to remove all the resources that you have deployed.
>
> **[1:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=68)** I will be developing the projects of this course using Visual Studio Code on a Mac.
>
> **[1:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-should-know?u=76281980&t=73)** However, you can use any code editor you feel comfortable with and follow the course on Windows, or Linux machine as all the tools are supported in all the platforms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (3), [[Node.js]] (2), [[JavaScript]] (1), [[Programming]] (1), [[LinkedIn]] (1)
> **CLI Commands:** aws (3), node (2), find (1)
> **Env Vars:** aws (3)
> **File Paths:** node.js (2)
> **Tools:** visual studio (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you need to have (1)

#### What you are going to build in this course
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build-in-this-course?u=76281980&t=0)** - [Narrator] In this video, let's look at what problems you are going to solve during this course.
>
> **[0:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build-in-this-course?u=76281980&t=5)** I will call these problems the projects.
>
> **[0:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build-in-this-course?u=76281980&t=8)** There will be two projects in this course, and by the end of the course, you'll have two working applications that you can use to keep experimenting and learning.
>
> **[0:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build-in-this-course?u=76281980&t=18)** These projects come from use cases and working experience.
>
> **[0:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build-in-this-course?u=76281980&t=22)** They're a simplification of very common problems that organizations face.
>
> **[0:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build-in-this-course?u=76281980&t=28)** The first project is a document processing application in which the users upload a video or audio file to permanent storage, and that file gets processed in real time.
>
> **[0:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build-in-this-course?u=76281980&t=39)** The processing of these files involves different AI services like transcription, translation, and generative AI.
>
> **[0:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build-in-this-course?u=76281980&t=48)** When the workflow completes different parts of the process notifies the stakeholders by sending an email or by putting an event into an event bus so other applications can process the results further if needed.
>
> **[1:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build-in-this-course?u=76281980&t=61)** The second project is a chatbot that talks in real time with the users in natural language.
>
> **[1:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build-in-this-course?u=76281980&t=67)** The user requests to chatbot the weather of a city and the chatbot will get this information from external APIs and internal data sources and provide the information to the customer in a friendly manner.
>
> **[1:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build-in-this-course?u=76281980&t=80)** Both projects are example of orchestration of AI applications, and in this course you'll learn how these two projects differ and how much they resemble, and how you can build similar solutions for your use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** chatbot (3), ai (2), application (1), [[Generative AI]] (1), data (1)
> **Definitions:** is a  (2)
> **Speakers:** - [narrator] (1)


### 1. Introduction to AI

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to AI
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=0)** - [Presenter] This course is called Building Serverless Applications with Artificial Intelligence.
>
> **[0:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=5)** That's why I want to start by introducing what artificial intelligence means and some important concepts.
>
> **[0:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=11)** Also, I want to show you some use cases where you can see artificial intelligence in action.
>
> **[0:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=17)** Artificial intelligence or AI is, as I will refer it in the future, is a general term for making computers perform some tasks that require human intelligence.
>
> **[0:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=27)** As developers, we code a set of instructions on the computer and the computer follows the steps in order to perform a task.
>
> **[0:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=35)** When working with an AI applications, developers don't code the steps.
>
> **[0:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=39)** They just ask the computer to use its intelligence to produce a result.
>
> **[0:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=44)** For example, we might want the computer to tell us what it sees in an image or to analyze the sentiment of a text, or to classify some items in different categories, or we can ask the computer to write a story based on a prompt.
>
> **[0:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=59)** There are many techniques in order to get a computer to think to produce this intelligent response.
>
> **[1:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=66)** All these techniques are under the AI umbrella.
>
> **[1:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=70)** Machine learning or ML is a technique that makes computers learn from data and experience to improve their performance on some task.
>
> **[1:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=79)** Machine learning uses different algorithms to learn from the data and make inferences without explicit programming.
>
> **[1:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=87)** Then there is deep learning.
>
> **[1:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=89)** That is a subset of ML.
>
> **[1:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=91)** Deep learning uses multi-layered artificial neurals network.
>
> **[1:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=95)** This categorization tries to mimic how the human brain works.
>
> **[1:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=99)** Artificial neural networks learn by example, similar to how humans learns.
>
> **[1:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=105)** This consists of at least three layers of networks: an input layer, a hidden layer, and an output layer.
>
> **[1:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=113)** Each layer contains nodes or neurons, which have weighted inputs that compute the output.
>
> **[1:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=119)** The value of the weights is what needs to be trained to produce a desire output.
>
> **[2:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=125)** And finally, there is generative AI.
>
> **[2:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=127)** That is a subset of deep learning.
>
> **[2:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=130)** We'll have a full video later in this section about this topic.
>
> **[2:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=135)** Another way to classify AI is by narrow AI and general AI.
>
> **[2:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=140)** Narrow AI is about getting machines to do one task very well, like image recognition or playing chess.
>
> **[2:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=148)** General AI means computers can do everything that humans do and more.
>
> **[2:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=153)** We are not there yet.
>
> **[2:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=155)** AI has been around for a while.
>
> **[2:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=157)** For example, many organizations have trained models on how to detect fraudulent operations.
>
> **[2:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=163)** For this, they use different classification algorithms that can label a transaction as fraudulent or not.
>
> **[2:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=170)** Personalized recommendations is another use case that you might have seen in your favorite e-commerce or streaming platforms.
>
> **[2:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=178)** These companies train machine learning models with customers behaviors and obtain personalized recommendations for those specific customers improving their experience.
>
> **[3:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=189)** Your email service provider might detect spam.
>
> **[3:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=193)** These companies train specific models to recognize unwanted spam emails and remove them from your inbox.
>
> **[3:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=201)** Translation tools: You might have used an automated translation tools many times in which you input the original text in one language and get the result in another.
>
> **[3:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=212)** This is achieved by training language-specific models to translate.
>
> **[3:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=216)** These models can not create new text.
>
> **[3:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=219)** They just translate word by word, and in some cases, they can understand common phrases.
>
> **[3:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=226)** There are many more use cases.
>
> **[3:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-ai?u=76281980&t=228)** I cannot cover them all here, but AI nowadays is everywhere and more and more developers are asked to build applications that use it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (10), [[Artificial Intelligence (AI)|Artificial intelligence]] (4), [[Deep Learning]] (3), data (2), [[Algorithms]] (2)
> **Definitions:** is a  (4), is called (1)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Speakers:** - [presenter] (1)

#### Introduction to Amazon AI Services
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=0)** - [Instructor] In the previous video, you learned what AI is.
>
> **[0:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=3)** Let's go one step further and look what services you can find in AWS to help you build AI applications.
>
> **[0:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=11)** At AWS, there is the AI ML stack that represents all the services and solutions that AWS offers to their customers to build applications.
>
> **[0:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=22)** The stack is divided into three layers.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=25)** The first layer is the ML frameworks and infrastructure.
>
> **[0:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=29)** This layer is usually for ML experts and providers.
>
> **[0:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=33)** You can find here the different frameworks that AWS offers, the different silicone solutions like Inferentia and Trainium and the core service that is Amazon EC2 to to run all these.
>
> **[0:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=45)** Organizations that are experts in ML and AI use this layer to build everything from scratch.
>
> **[0:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=51)** The second layer is the Amazon SageMaker layer.
>
> **[0:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=55)** This layer is for the ML experts that want to tune existing models and take advantage of all the tools that AWS offers.
>
> **[1:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=63)** The top layer is the AI services that are catered for the consumers.
>
> **[1:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=69)** This is a layer we are going to focus this course on.
>
> **[1:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=72)** Here you can find our Generative AI services that we are going to talk about in the following video, and also the specialized and core AI services.
>
> **[1:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=83)** Lets look at this layer in a little bit more detail.
>
> **[1:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=86)** The services that are in this layer are ready to use AI services that allow you to add intelligence to your applications.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=94)** These services integrate with your applications easily using an API, and you can use them to address common use cases like recommendations, recognize things in images and videos, and the text frauds.
>
> **[1:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=108)** If you navigate to the AWS AI Service page, you can find all the services that are inside the category.
>
> **[1:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=115)** If you navigate to the AWS AI Service page, you can find all the services that are inside this category, group by categories.
>
> **[2:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=126)** And if you click in the AI service tab on that page, you can go directly to each service and learn more about it.
>
> **[2:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=135)** All these services might seem very different, but they are easily integrated in your applications using APIs or the AWS SDK as we are going to see later in this course.
>
> **[2:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=147)** One of the AI services that you're going to use in this course is Amazon Transcribe.
>
> **[2:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=152)** That is a service that automatically converts a speech to text.
>
> **[2:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=156)** This is a very useful service as you can pass a video or audio file, and it returns a transcript of ease.
>
> **[2:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=163)** Transcribe has many features.
>
> **[2:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=165)** One of the most useful is that you can obtain a subtitle file from a video or an audio.
>
> **[2:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-ai-services?u=76281980&t=171)** Later in this course you'll learn how to use transcribe in your applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (11), aws (8), [[Amazon EC2]] (1), [[Generative AI]] (1), api (1)
> **CLI Commands:** aws (8), find (5)
> **Env Vars:** aws (8), ec2 (1), api (1), sdk (1)
> **Cross-References:** later in (2), previous video (1)
> **Definitions:** is a  (3)
> **UI Navigation:** navigate to (2)
> **Speakers:** - [instructor] (1)

#### Introduction to Gen AI
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=0)** - [Instructor] When we introduced AI in this section, we also briefly introduced generative AI as a subset of deep learning, but we didn't talk about it.
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=9)** Let's do that in this video.
>
> **[0:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=11)** To understand a bit better why generative AI or GenAI is so powerful, you need to understand the two types of ML models that are out there.
>
> **[0:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=20)** Deterministic models and probabilistic models.
>
> **[0:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=24)** First, there are deterministic models.
>
> **[0:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=27)** These are the traditional models where data scientists train a model with data sets for a specific problem.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=34)** For example, classifying images.
>
> **[0:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=37)** The data is labeled and then the model is trained with that data.
>
> **[0:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=41)** These models can later predict the label of a new image.
>
> **[0:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=44)** For example, you can train a model to classify images based on your product categories, and when there is a new image, the model can add the right label to that image based on what it learned.
>
> **[0:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=55)** These models always return the same result for the same input, so given an image, you always get the same category.
>
> **[1:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=64)** Then there are the probabilistic models.
>
> **[1:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=66)** These models are also trained with large data sets and they're trained to generate the next token given an input.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=74)** The probabilistic models might return different answers to the same input.
>
> **[1:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=79)** These are the models that we will see in generative AI.
>
> **[1:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=82)** That is why when we ask the same questions to GenAI chatbot, it may produce a different answer.
>
> **[1:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=89)** A generative AI model always tries to predict what is the next token given an input.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=94)** For example, if we say to the model, Today, I want to, the model will try to fill the gap with store, office, mall, but not with tomato, as tomatoes are not a place.
>
> **[1:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=106)** The next token generated based on the input and the learned experience of the model.
>
> **[1:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=112)** Therefore, generative AI is a type of AI that can create new content, like videos, images, stories, audios, and more.
>
> **[2:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=121)** AI attempts to mimic human intelligence and GenAI is the next step in this journey.
>
> **[2:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=128)** GenAI works with ML models, very large models that are pre-trained on a vast amount of data.
>
> **[2:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=135)** These are called foundational models.
>
> **[2:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=137)** Foundational models or FMs are ML models trained on a broad spectrum of generalized and unlabeled data, and they can perform a variety of general task.
>
> **[2:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=149)** You can see different use cases for GenAI nowadays in applications that use it to enhance customer experience, to boost employee productivity, or to optimize business processes.
>
> **[2:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=162)** For example, chatbots or virtual assistance are a great example of a use case for generative AI to improve customer experience, as they can interact with customers using natural language and perform different actions that the customer needs.
>
> **[2:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=177)** In this course, you will learn how to build a simple chatbot.
>
> **[3:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=181)** Code generation or content creation tools are great examples of how AI helps to boost employees' productivity.
>
> **[3:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=188)** For example, Amazon Code Whisperer is a code companion that you install in your IDE, and it will do code recommendations as you type, making you solve problems faster.
>
> **[3:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=200)** Another use case for GenAI is to process documents.
>
> **[3:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-gen-ai?u=76281980&t=203)** You're going to see an example of this in this course when we are going to take a video and automate the processing of it using AI and GenAI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[Generative AI]] (6), ai (5), next (4), chatbot (2)
> **Analogies:** for example (5)
> **Definitions:** is a  (3)
> **Env Vars:** ide (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Introduction to Amazon Bedrock
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=0)** - [Instructor] Amazon Bedrock is the AI service that you are going to be using in this course for your projects.
>
> **[0:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=6)** But what is Bedrock?
>
> **[0:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=8)** Bedrock is a fully-managed service that offers a selection of high-performing foundational models along with a broad set of capabilities to build gen AI applications.
>
> **[0:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=18)** Let's go into that definition and break it out into parts.
>
> **[0:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=22)** Bedrock is a serverless service.
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=23)** You will learn what it means to be serverless in the next section.
>
> **[0:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=27)** Bedrock offers many foundational models.
>
> **[0:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=30)** Bedrock hosts those foundational models, and you, using the same API, can switch the model of your application.
>
> **[0:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=37)** You can find models from AI21, Anthropic, Cohere, Meta, Stability AI, and Amazon.
>
> **[0:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=45)** All these models can be used in different use cases, so you have to choose the right model for the right problem.
>
> **[0:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=52)** You can also adapt your models with data, either by fine-tuning them or using your own datasets or by creating knowledge basis of your data.
>
> **[1:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=63)** At the end of the course, you are going to learn how to create these knowledge bases.
>
> **[1:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-amazon-bedrock?u=76281980&t=68)** And then Bedrock offers a set of capabilities to build gen AI applications, capabilities that range from RAG, retrieval-augmented generation, Bedrock agents, Guardrails, and many other features that allows you to build secure gen AI applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (5), data (2), next (1), api (1), application (1)
> **Env Vars:** api (1), ai21 (1), rag (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Challenges when building AI and Gen AI applications
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=0)** - [Instructor] Up to now, you learned what AI and Gen AI are, their use cases, and what AWS offers you to build those AI applications.
>
> **[0:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=10)** But if you are taking this course, most probably you're a developer or an architect, not a data scientist, or maybe not an expert in ML.
>
> **[0:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=18)** You might be wondering how I can build AI applications.
>
> **[0:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=22)** That is a very valid question.
>
> **[0:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=24)** Nowadays, as you saw in this section, you don't need to be an expert in ML to build intelligent applications.
>
> **[0:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=31)** You can rely on AI services provided by AWS or third parties to build your applications.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=38)** At the end, everything is an endpoint.
>
> **[0:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=40)** It is important that you think of these AI services as you were using any other API in the past.
>
> **[0:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=48)** Building applications using APIs to external services is very common.
>
> **[0:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=52)** Calling a booking service, a reservation API, or a ticketing system.
>
> **[0:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=57)** Now there are APIs for AI services.
>
> **[1:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=61)** However, some of these APIs are like APIs we are familiar with.
>
> **[1:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=66)** You send the request formatted in a specific format and you get a response in a format that your application is familiar with.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=74)** In other cases, like when working with Gen AI and foundational models, you need to craft these calls using what is known prompt engineering.
>
> **[1:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=84)** This course won't get into the details of prompt engineer, but you can find in the LinkedIn Learning Library a course dedicated to this topic.
>
> **[1:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=93)** Another challenge you will face when building AI applications is that you'll need to orchestrate how you are going to call all these different AI services.
>
> **[1:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=103)** You will need to transform the data from one service to another, chain the prompts together, or stitch different AI services together.
>
> **[1:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=111)** In this course, we are going to focus on this challenge.
>
> **[1:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenges-when-building-ai-and-gen-ai-applications?u=76281980&t=115)** You'll learn two different strategies to orchestrate your applications, one programmatic and one using generative AI and agents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (11), aws (2), data (2), api (2), application (1)
> **Env Vars:** aws (2), api (2)
> **CLI Commands:** aws (2), find (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** as you saw (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 2. Getting started with Serverless

[↑ Back to Table of Contents](#table-of-contents)

#### What is serverless?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=0)** - [Instructor] We already introduced AI in the previous section.
>
> **[0:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=3)** Now it's time to introduce the other keyword in the name of this course: Serverless.
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=9)** What does it mean that an application is serverless?
>
> **[0:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=13)** One of the first things people say to me whenever I mention the word serverless is that there are still servers in serverless.
>
> **[0:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=20)** Yes, there are.
>
> **[0:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=22)** However, with serverless, we don't manage those servers.
>
> **[0:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=24)** They're abstracted away.
>
> **[0:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=26)** Similar analogy happens with virtual servers.
>
> **[0:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=30)** They are bare metal machines running providing capacity to the virtual servers, but you don't need to manage them.
>
> **[0:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=36)** Serverless applications are some levels of abstraction up.
>
> **[0:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=41)** There are three main characteristics of serverless services.
>
> **[0:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=45)** You don't need to manage infrastructure, or your configuration of infrastructure is minimal, you pay for what you use and the service automatically scales up and down following your needs.
>
> **[0:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=57)** When people think of serverless, they think about compute, and that is not complete.
>
> **[1:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=62)** Serverless services can be a compute service in which to run your code, as well as managed services that you can use to build your applications.
>
> **[1:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=72)** Sometimes those services are refer as functions as a service, or FaaS.
>
> **[1:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=78)** And the managed services are back end as a service, or BaaS.
>
> **[1:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=82)** Most serverless applications are composed of managed services with functions to implement the specific business logic.
>
> **[1:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=90)** Back end as a service or managed services are quite an old concept.
>
> **[1:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=95)** Amazon S3 was one of the first back end as a services and AWS launched it in 2006.
>
> **[1:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=101)** S3 allows you to store objects in the cloud without provisioning any storage infrastructure.
>
> **[1:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=107)** It scales the storage capacity as much as you need, and you pay exactly for what you use.
>
> **[1:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=112)** In this course, you will learn a lot of managed services and the AI services fall in this category, Amazon Bedrock as well, and also AWS Step Functions and EventBridge, two services that provides a lot of the logic for the applications that you will be building in this course.
>
> **[2:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=130)** One of the first example of function as a service is AWS Lambda.
>
> **[2:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=133)** AWS Lambda was launched in 2014.
>
> **[2:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=137)** Lambda allows you to run code in the cloud without the need to deploy any server.
>
> **[2:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=142)** Just write a simple function and upload it to the cloud.
>
> **[2:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-serverless?u=76281980&t=145)** You are going to use AWS Lambda together with Amazon Bedrock in one of the last section of this course to provide business logic to a generative AI chatbot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (5), cloud (3), ai (2), business (2), application (1)
> **CLI Commands:** aws (5)
> **Env Vars:** aws (5)
> **Speakers:** - [instructor] (1)

#### Why serverless is great to build AI apps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=0)** - [Instructor] Now you know what serverless means.
>
> **[0:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=2)** You learn about what services AWS offers to build AI applications and you know some challenges that developer face when building AI applications.
>
> **[0:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=11)** Let's talk about why serverless is a great technology to build AI applications.
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=16)** The first reason is that all the AI services that AWS offers and also Amazon Bedrock are serverless.
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=23)** You don't need to provision or manage any infrastructure to use these services.
>
> **[0:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=27)** You have an API that you call from your applications and AWS does all the heavy lifting for you.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=34)** An architecture like this is recommended using other serverless components to embrace the scalability of the application.
>
> **[0:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=41)** So all the different services that compose the application can scale together, and you don't need to plan the capacity you need for your application.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=50)** For orchestration of the data and calling these endpoints, serverless is a great way to go, as there are already services built in AWS that provides solutions to these problems.
>
> **[1:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=61)** For example, you can use AWS Step Functions to create the logic for the application, call all the different services, and transform the data as you need.
>
> **[1:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=70)** Step Functions is a serverless service that provides workflow management with no code start and scalability built in.
>
> **[1:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=79)** You can also take advantage of Amazon EventBridge for creating an application in real time that responds to different events, such as customer uploading a file or clicking a button.
>
> **[1:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=89)** Amazon EventBridge is a fully managed event bus that allows you to route events between different services and application without the need to provision any infrastructure.
>
> **[1:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=99)** Or you can use AWS Lambda to add business logic to your application or to perform complex data transformations.
>
> **[1:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=106)** AWS Lambda is a serverless compute service that scales according to the usage.
>
> **[1:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=112)** In all the serverless services, you don't need to pay for any infrastructure that you don't use.
>
> **[1:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=118)** One of the main benefits of using serverless services like this is that you don't need to write a lot of extra code or boilerplate or code that doesn't add any value.
>
> **[2:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=128)** The code you don't write is the code that you don't need to maintain in the future.
>
> **[2:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=133)** Another benefit is that because all the services are serverless, you only pay for the resources you consume.
>
> **[2:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/why-serverless-is-great-to-build-ai-apps?u=76281980&t=139)** You can iterate your application, build multiple versions very fast without worrying about having a lot of resources that are not used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (8), aws (7), ai (4), data (3), [[Scalability]] (2)
> **Env Vars:** aws (7), api (1)
> **CLI Commands:** aws (7)
> **Definitions:** is a  (5)
> **Analogies:** for example (1), such as (1)
> **Exercise Files:** boilerplate (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Using Amazon Bedrock from serverless services
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=0)** - [Instructor] You can use Amazon Bedrock from AWS Lambda and AWS Step Functions with ease.
>
> **[0:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=6)** If you want to use Bedrock with AWS Lambda, you just need to use the AWS SDK.
>
> **[0:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=12)** The AWS SDK is a software development kit and it allows you to call the AWS services using an API.
>
> **[0:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=19)** In this example, I'm using AWS SDK for JavaScript version 3 to invoke a Bedrock model.
>
> **[0:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=26)** You need to pass the configuration to the SDK and invoke the model.
>
> **[0:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=30)** The configuration contains the prompt, some data that the model needs, and then the model name.
>
> **[0:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=36)** The result of invoking the model will be returned to the function.
>
> **[0:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=41)** If you're using Amazon Bedrock from Lambda, you need to give permissions to the function to access the particular foundational model that you want to invoke.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=50)** For that in your function configuration, you need to give that permission.
>
> **[0:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=53)** In this example, I show you how you can configure it with AWS SAM.
>
> **[0:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=58)** We are going to learn more about SAM in a following video.
>
> **[1:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=62)** I will leave you a video with some resources for demos using Lambda if you want to go this way, as I will not cover this in the course.
>
> **[1:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=72)** If you want to use Bedrock with Step Functions, there is even a simpler way.
>
> **[1:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=77)** In the workflow, you can just drag and drop Bedrock integration and configure it accordingly.
>
> **[1:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=83)** Don't worry if you don't know this part yet.
>
> **[1:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/using-amazon-bedrock-from-serverless-services?u=76281980&t=85)** I will show you how to do Bedrock with Step Functions in detail in a future video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (8), [[Software Development]] (1), api (1), [[JavaScript]] (1), prompt (1)
> **Env Vars:** aws (8), sdk (4), sam (2), api (1)
> **CLI Commands:** aws (8)
> **Prerequisites:** configure (2)
> **Versions:** version 3 (1)
> **UI Navigation:** drag and drop (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Infrastructure as code

[↑ Back to Table of Contents](#table-of-contents)

#### The important role of infrastructure as code
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=0)** - [Instructor] I know this is a serverless and AI course.
>
> **[0:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=3)** You might be wondering why there is even a video about this topic.
>
> **[0:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=8)** Because infrastructure as code is one of the fundamental practices when working with serverless applications in production at the scale.
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=16)** Let's start by answering the question, what is infrastructure as code?
>
> **[0:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=20)** Infrastructure as code involves using a high level programming language to control the infrastructure of IT services.
>
> **[0:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=26)** When you treat your infrastructure as code, you can start applying the same techniques to the infrastructure that you apply to the code, like testing, code reviews, automatic testing, and others.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=38)** When the infrastructure is in the coded form, you can replicate it many times, minimizing the errors.
>
> **[0:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=44)** All of these will improve the quality of your infrastructure.
>
> **[0:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=48)** Infrastructure as code means that you are not going to the console of your cloud provider and type and click and tick check boxes to create the infrastructure.
>
> **[0:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=58)** It means that you are going to create scripts in where you define the infrastructure of your application.
>
> **[1:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=63)** You will define your Lambda functions, your step functions workflows, the rules that you're going to use for event breach, and any AWS resource as code.
>
> **[1:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=72)** It can be in YAML, JSON, or even JavaScript or Python, depending on the infrastructure as code framework you choose.
>
> **[1:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=80)** You then store these as scripts in a code repository as you do with code and put them through code reviews and tests.
>
> **[1:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=88)** As with code, when these scripts change, you have a register of who made the changes and why.
>
> **[1:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=95)** And you don't need to go to the AWS console to create these resources.
>
> **[1:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=99)** You can store all the code in the code repository and use CI/CD pipelines to deploy the infrastructure automatically and replicate the same infrastructure in multiple AWS accounts.
>
> **[1:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=111)** Some advantages of infrastructure as code are, you can manage the infrastructure programmatically.
>
> **[1:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=117)** No need for manual configurations that can generate many errors.
>
> **[2:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=121)** It's possible to deploy the same infrastructure into multiple environments such as production, testing, and development.
>
> **[2:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=128)** One employee can manage a massive infrastructure.
>
> **[2:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=131)** You gain development speed as you can now reuse pieces of your infrastructure you already have in other projects and evolve the infrastructure with more security.
>
> **[2:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=141)** And the chances of creating bugs get reduced.
>
> **[2:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=144)** There are many ways to build applications using infrastructure as code.
>
> **[2:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=148)** If you're working with AWS, the native way is to use AWS CloudFormation, or you can use AWS SAM Serverless Application Model like we are going to do in this course.
>
> **[2:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=159)** Later in this chapter, you will learn more about AWS SAM.
>
> **[2:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=163)** Or you can use AWS CDK Cloud Development Kit, a framework that allows you to define cloud infrastructure with real code.
>
> **[2:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=172)** Or some third party framework like Terraform, serverless frameworks, and many others.
>
> **[2:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=176)** It doesn't matter which one you choose.
>
> **[2:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/the-important-role-of-infrastructure-as-code?u=76281980&t=177)** The important thing is that you use one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Infrastructure as code (IaC)|Infrastructure as code]] (8), aws (8), application (2), ai (1), [[Programming]] (1)
> **Env Vars:** aws (8), sam (2), yaml (1), json (1), cdk (1)
> **CLI Commands:** aws (8), python (1), cd (1), terraform (1)
> **Definitions:** means that (2), is a  (1)
> **Cross-References:** later in (1)
> **Tools:** aws console (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)

#### Introducing AWS SAM
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=0)** - [Instructor] In the previous video, you learned that building serverless applications directly on the AWS console is tedious and prone to error.
>
> **[0:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=8)** Usually, this is not the way you want to build production applications.
>
> **[0:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=12)** For production applications, you want to have a process that can be maintained over time and replicated in different environments, such as testing, development, and production.
>
> **[0:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=21)** When building serverless applications for production, it's recommended to use Infrastructure as Code.
>
> **[0:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=26)** You can implement the Infrastructure as Code practice in different ways when building serverless applications.
>
> **[0:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=32)** One way is to code the infrastructure directly and package the scripts and deploy them to the cloud.
>
> **[0:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=39)** Another way is to use a framework that already has some of the tools to assist you in developing and deploying applications.
>
> **[0:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=46)** In this course, you will use AWS SAM, AWS SAM, Serverless Application Model.
>
> **[0:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=52)** It's an open source framework for building serverless applications.
>
> **[0:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=56)** AWS SAM has two parts.
>
> **[0:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=58)** First, the transform templates.
>
> **[1:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=61)** These templates help you to express serverless infrastructure with a simple notation.
>
> **[1:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=65)** You can easily define functions, APIs, and database tables that are quite common resources needed in serverless applications.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=74)** The infrastructure is defined in a YAML file, and then it can be deployed with the help of the SAM CLI to the cloud.
>
> **[1:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=82)** That is the second component of AWS SAM.
>
> **[1:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=85)** Some templates are built on top of AWS CloudFormation.
>
> **[1:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=89)** During the packaging process, some templates get transformed into CloudFormation templates, and because of this, you can also use CloudFormation syntax to extend some templates.
>
> **[1:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=101)** AWS CloudFormation is the AWS Infrastructure as Code syntax for defining AWS resources.
>
> **[1:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=107)** This is very portable within different accounts, and it's very maintainable, as some templates contains the definitions and configuration of the AWS services that make your application.
>
> **[1:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=119)** All these can be deployed as one entity.
>
> **[2:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=121)** Don't be afraid of the code here.
>
> **[2:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=123)** We are going to get into that in the following videos.
>
> **[2:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=128)** SAM comes with a rich set of features available to developers.
>
> **[2:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=132)** AWS SAM local.
>
> **[2:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=134)** SAM local allows you to do local testing and debugging of your cloud applications.
>
> **[2:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=139)** It provides an emulation of some of the serverless services in your local machines so you can test without taking your code to the cloud.
>
> **[2:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=146)** AWS SAM Accelerate.
>
> **[2:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=148)** SAM Accelerate allows you to increase your development speed when working on Lambda functions by making parallel builds of multiple components, allowing you to update your code in the cloud without redeploying the infrastructure or getting all the logs for your functions aggregated in your terminal.
>
> **[2:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=166)** Code deployment.
>
> **[2:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=167)** SAM integrates with many CI/CD tools, like AWS CodeBuild, AWS CodeDeploy, and AWS CodePipeline.
>
> **[2:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=175)** Also, it provides simple commands to create CI/CD pipelines using the AWS SAM Pipelines command.
>
> **[3:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=183)** If you want to learn more about AWS SAM, check the product page so you can learn more about the different features it provides.
>
> **[3:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introducing-aws-sam?u=76281980&t=190)** This course uses SAM to build and deploy the infrastructure, but it will not cover many of the advanced features that SAMs provide.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (17), cloud (5), [[Infrastructure as code (IaC)|Infrastructure as code]] (3), application (2), ci (2)
> **Env Vars:** aws (17), sam (14), yaml (1), cli (1)
> **CLI Commands:** aws (17), cd (2), make (1)
> **Tools:** aws console (1), terminal (1)
> **Cross-References:** previous video (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Installing and configuring AWS SAM
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=0)** - [Instructor] Now that we know why it's important to use a framework like AWS SAM for developing serverless application, let's install it and configure it in your computer.
>
> **[0:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=10)** Before installing AWS SAM, you need to have an AWS account, an IAM admin user, an access key and secret key for the user to access AWS programmatically.
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=23)** If you don't have those prerequisites, follow the video creating IAM users in the Learning Lambda course in the LinkedIn Learning Library.
>
> **[0:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=32)** Also, you need to have an AWS CLI installed and configured in your machine.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=38)** For doing that, you can follow the installations instructions in the installation guide of the AWS CLI for your operating system.
>
> **[0:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=48)** After you install the CLI, you can check the version that you have installed by going to your terminal and typing aws --version.
>
> **[1:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=61)** In the AWS SAM prerequisites, you can see all the prerequisites I already mentioned.
>
> **[1:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=65)** Have your AWS account, create your IAM users, have an access key and secret access key, install the AWS CLI, and finally, you need to use the AWS CLI to configure the AWS credentials.
>
> **[1:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=80)** You can check those steps and follow along before installing SAM.
>
> **[1:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=86)** When you have fulfilled all the SAM prerequisites, you can move on to the installation instructions.
>
> **[1:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=93)** You can find them in the SAM page, and if you go down, you can see the installation instructions for each of the operating systems.
>
> **[1:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=102)** Now you have all the prerequisites from AWS perspective, but you might be missing Docker in order to run SAM, so if you don't have it, install it, and follow the installation instructions from SAM CLI in your operating system.
>
> **[1:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/installing-and-configuring-aws-sam?u=76281980&t=118)** When you're ready, you can go to your terminal and type sam --version to make sure that it's installed and the latest version has been installed in your computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (13), [[CLI]] (6), application (1), [[LinkedIn]] (1)
> **Env Vars:** aws (12), sam (8), cli (6), iam (3)
> **CLI Commands:** aws (13), find (1), docker (1), make (1)
> **Prerequisites:** install (4), configure (2), you need to have (2)
> **Tools:** terminal (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Getting started with the project
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=0)** - [Instructor] In this video you're going to create the AWS sam project that you will be using for half of the course for the project1.
>
> **[0:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=8)** The first thing we want to do is to create a folder in where to put that project.
>
> **[0:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=12)** So I will make mkdir project1 and then just go inside.
>
> **[0:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=19)** Good.
>
> **[0:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=20)** There I can create a template file, touch template.yml.
>
> **[0:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=26)** This will allow me to put the all the infrastructure inside a file.
>
> **[0:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=30)** We are going to do that in a second, at least for just a demo example.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=34)** And then I'm going to create another file called app.js.
>
> **[0:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=37)** And here is where I will put the code of my function that we are going to test.
>
> **[0:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=42)** So if we go to the Visual Studio Code, we can see the two files.
>
> **[0:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=45)** They're empty.
>
> **[0:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=47)** So the first thing we want to do is to just add some infrastructure.
>
> **[0:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=52)** This is a super simple sam template that we know is a sam template because of this, we tell CloudFormation to transform this template into CloudFormation is a sam template.
>
> **[1:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=65)** And then we have only one resource that is our function and it's the type of a function.
>
> **[1:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=72)** And then we have the properties where they can find the code in the root directory.
>
> **[1:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=76)** And the handler is where in which file the code is, in this case in the app.js, in the method handler, and then the runtime for our function that is node 20.
>
> **[1:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=87)** So we can save this and then we can go to the code for our function.
>
> **[1:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=93)** As well it's empty, but we can write something.
>
> **[1:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=96)** We can put in the handle method because that's the method that we define in the infrastructure.
>
> **[1:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=101)** I don't know, whatever we want the function to do that is in this case run Hello World.
>
> **[1:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=106)** Now we are ready to deploy this to the cloud.
>
> **[1:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=109)** In order to deploy to the cloud, we are going to use sam.
>
> **[1:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=112)** We will do the command sam deploy --guided.
>
> **[1:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=118)** This will guide us through the deploying configuration and we will need to run this command only once when we deploy the project for the first time.
>
> **[2:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=126)** So let's put a name, sam linkedin project 1.
>
> **[2:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=133)** Then we need to pick the AWS region.
>
> **[2:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=135)** I have this region by default and the region in this case is important because we are going to use Bedrock for our project.
>
> **[2:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=144)** And Bedrock is not yet available in all AWS regions.
>
> **[2:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=148)** So I'll recommend you to pick either Virginia, Oregon, or other regions where Bedrock is available.
>
> **[2:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=154)** I'm pick Oregon.
>
> **[2:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=155)** That is the one that you have seen there.
>
> **[2:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=157)** That is US West 2.
>
> **[2:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=160)** So I will leave that one and then I will go through all the defaults because I don't need any more configuration for this.
>
> **[2:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=169)** What is happening here, a new file called samconfig.toml is getting created with all this configuration in place and then it's creating all the resources for my CloudFormation stack.
>
> **[3:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=181)** In this case, it's just role and a function that later will be expanding into a lot of more things, but for now it's just a simple role and a function.
>
> **[3:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=192)** Now we can see in the terminal that the creation of these resources is in process.
>
> **[3:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=196)** It will take a few minutes to get it done.
>
> **[3:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=199)** And we can see also in our AWS account if we go to CloudFormation that the stack is being created.
>
> **[3:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=207)** So you can see here sam linkedin project and we can see exactly the same events that we have in on the terminal.
>
> **[3:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=216)** So now the creation is complete.
>
> **[3:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=218)** So we can go back to our terminal and we can run the invoke to see if this function is working.
>
> **[3:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=227)** So this is the command that we need sam remote invoke function.
>
> **[3:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=234)** And the stack name that we just put the MyFunction is the name of the resource in the CloudFormation template.
>
> **[4:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=240)** And we can see here that the invoking of the function is working, it returned a Hello World so we are good.
>
> **[4:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/getting-started-with-the-project?u=76281980&t=246)** Our first function is working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (4), cloud (2), [[LinkedIn]] (2), node (1)
> **CLI Commands:** aws (4), make (1), mkdir (1), find (1), node (1)
> **Exercise Files:** template (7)
> **File Paths:** app.js (2), template.yml (1), samconfig.toml (1)
> **Env Vars:** aws (4)
> **Tools:** terminal (3), visual studio (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (3)


### 4. Introduction to Step Functions

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding Step Functions
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=0)** - [Instructor] In this course you learn about AI and the challenges that developers face when building these kind of applications.
>
> **[0:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=8)** One challenge that we mentioned was the need to orchestrate the calls to the different AI services, how to transform the data from one service to another, how to chain prompts together, or how to stitch different services together.
>
> **[0:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=21)** This challenge is solved by orchestrating the application.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=25)** There are many ways to do that.
>
> **[0:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=28)** We could build a big function or method that does the orchestration.
>
> **[0:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=32)** The main issue with the solution is that all the calls are coupled together, and if we want to change something, we need to change also the main function.
>
> **[0:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=42)** In addition, testing and maintaining this piece of code is complex as it has so many integrations with different services.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=50)** Also, this code doesn't really add any value as it's mostly boiler plate to call different services.
>
> **[0:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=57)** In addition, if the orchestration is too complex, the code might be hard to read and understand in the future.
>
> **[1:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=64)** What if we could replace that orchestration code with something more visual, something that when you open it after six months, you can tell exactly what it's doing.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=74)** For that, we can use a service that allow us to build workflows to orchestrate the calls to the multiple APIs.
>
> **[1:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=83)** As we are in the AWS world, we can use AWS step functions for this purpose.
>
> **[1:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=88)** AWS step functions is a serverless workflow service that make it easy to coordinate multiple AWS services, calls to third-party APIs and other integrations into scalable, serverless workflows.
>
> **[1:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=101)** As the functions uses a visual workflow that are made of a series of steps, workflows are made of steps that can invoke different APIs in a reliable and scalable matter.
>
> **[1:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=114)** This steps perform a discrete operations such as calling an API or executing Lambda function.
>
> **[2:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=121)** In addition, steps can be connected in different ways like in parallel or in series.
>
> **[2:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=125)** Later in this section, you will learn about the different flow mechanisms.
>
> **[2:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=130)** A step function's automatically triggered, and track each step, handles the errors, and follow the workflow definition to ensure that your application executes in the right order every time.
>
> **[2:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=142)** So when you use the step functions, there are many use cases for this service.
>
> **[2:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=147)** Here is my top ones.
>
> **[2:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=149)** Microservice orchestration.
>
> **[2:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=151)** This is the use case of our problem, orchestrating services.
>
> **[2:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=155)** Instead of having a big function, we use a workflow.
>
> **[2:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=159)** Batch processing.
>
> **[2:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=160)** Step functions are great for processing large batches of data.
>
> **[2:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=164)** Some of the flow states allow 10,000 parallel executions.
>
> **[2:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=169)** Data migration.
>
> **[2:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=170)** You can use step functions to build your data migration scripts to move data from one service to another.
>
> **[2:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=177)** Machine learning.
>
> **[2:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=178)** Step functions can be used to build end-to-end machine learning workflows that combine data preparation model training, evaluation, deployment, and retraining steps.
>
> **[3:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=187)** I will leave you a link in the resources of this video with an article on how one of the companies is doing this.
>
> **[3:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=195)** Manual processes.
>
> **[3:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=196)** Step functions is an ideal service if you need to build a workflow that contains a manual process, like a user accepting a request or something in that area, as it provides different asynchronous integration mechanisms.
>
> **[3:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=210)** Finally, let's summarize some of the benefits of step functions.
>
> **[3:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=214)** Removing boilerplate.
>
> **[3:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=215)** By using step functions, you can avoid a lot of the boilerplate that is needed to invoke an AWS service or HTP endpoint as a step function provides direct integration.
>
> **[3:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=226)** In this example, you can see in the left the code that you need to write in Lambda function to perform a GetItem from Dynamo, and how the same code looks in step function.
>
> **[3:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=239)** Visual workflows.
>
> **[4:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=240)** Step functions provide the workflow studio to build and visualize all your workflows.
>
> **[4:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=246)** Error handling.
>
> **[4:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=247)** Step functions provide different error handling mechanisms built in, like retrys, cache, timeouts, and redrives.
>
> **[4:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=256)** End-to-end tracing.
>
> **[4:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=257)** You can visualize every execution of a workflow, how long each step took, and what are the inputs and outputs for that step, allowing you to debug the application.
>
> **[4:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=268)** Scaling. Step functions is a serverless service that scale.
>
> **[4:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/understanding-step-functions?u=76281980&t=271)** You can increase the traffic and the amount of parallel execution workflows will have no problem on handle that scale.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), aws (5), [[Orchestration]] (4), application (3), parallel (3)
> **Env Vars:** aws (5), api (1), htp (1)
> **CLI Commands:** aws (5), make (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** we mentioned (1), later in (1)
> **Exercise Files:** boilerplate (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Creating your first workflow in the AWS console
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=0)** - [Instructor] Great.
>
> **[0:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=1)** Now you know a little bit about the functions.
>
> **[0:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=4)** So it's time to create our first workflow so you can see it in action.
>
> **[0:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=8)** For this, we are going to the AWS Management console and to the workflow studio.
>
> **[0:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=14)** Later on this series we are going to build everything as infrastructures code, but I think it's good that you see how it's done in the console.
>
> **[0:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=22)** So the first thing you need to do is to go to step functions.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=25)** If you don't know where it is, just type on this bar step functions and it will take you here.
>
> **[0:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=31)** So now it's time to create the first state machine.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=34)** So go to state machines in the left and create a new one.
>
> **[0:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=39)** We are going to pick a blank canvas so we can make sure that we make everything ourself.
>
> **[0:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=46)** This is the workflow studio and it has a lot of visual components that help us to build.
>
> **[0:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=53)** We can see the design here and if we press here, we can see the code of the state machine.
>
> **[0:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=57)** In this case, it's very empty.
>
> **[0:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=59)** And finally, the configuration of the state machine, like the name.
>
> **[1:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=64)** So let's go to the design and throw here a lambda function.
>
> **[1:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=69)** You can see here all the actions that are available and you can search.
>
> **[1:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=73)** There are over 9,000 of them, so you might need to search.
>
> **[1:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=76)** But the most popular is the invoke lambda function.
>
> **[1:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=79)** And we have Lambda function from our previous video.
>
> **[1:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=81)** So we can do that.
>
> **[1:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=82)** Later we are going to see the flow mechanisms more in detail so you can find them here as well.
>
> **[1:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=88)** So let's grab the Lambda function and throw it in the diagram.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=94)** Now our state machine will run this Lambda function, but what Lambda function it is, well we can configure it here.
>
> **[1:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=102)** The first thing we need to do is to select it from the dropdown.
>
> **[1:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=105)** This will look for all the lambda functions that we have in our account in this particular region, and it will show it to us.
>
> **[1:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=111)** And this is the one that we just deployed in the previous video.
>
> **[1:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=114)** So now we can create the state machine.
>
> **[1:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=118)** This will create the role for us and it will give permissions to the state machine to invoke this lambda function and also to put information into the observability tools, in this case x-ray.
>
> **[2:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=131)** So I will just confirm and this will create everything for me.
>
> **[2:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=135)** Now it's being created.
>
> **[2:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=138)** When the state machine is created we can start an execution.
>
> **[2:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=143)** Here you can put any input that you need.
>
> **[2:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=146)** In our case, we are just testing, so we can just start an execution and see what happens.
>
> **[2:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=151)** This should execute this lambda function that we just created.
>
> **[2:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=156)** If we go here, we can see the input to the lambda function to that particular state.
>
> **[2:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=161)** The output, that is the hello word message that our lambda function provides.
>
> **[2:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=165)** And then some details on running this API.
>
> **[2:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=169)** We invoke lambda function.
>
> **[2:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=171)** We can go to the logs of the lambda function in particular.
>
> **[2:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=174)** We can see how long it durates the time that this lambda was implicated.
>
> **[3:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=180)** And we can see also the definition for this task in code, how it looks.
>
> **[3:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=187)** If we go down, we can see all the events that executed in order for this state machine to complete.
>
> **[3:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=193)** The execution started, then we started planning that task and then we execute that task successfully and then the execution of the state machine completed.
>
> **[3:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-your-first-workflow-in-the-aws-console?u=76281980&t=203)** So this is a very interesting visual so we can understand how our workflow worked.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (2), aws (1), management (1), [[Microsoft Word|Word]] (1), api (1)
> **UI Navigation:** go to (4), dropdown (1)
> **CLI Commands:** make (2), aws (1), find (1)
> **Env Vars:** aws (1), api (1)
> **Cross-References:** previous video (2)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Creating a workflow as IaC
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=0)** - [Instructor] In the previous video, you learned how to create a workflow from the AWS console.
>
> **[0:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=5)** But we have talk how important is to have all the resources that we want built as infrastructure as code.
>
> **[0:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=12)** So let's build that workflow as infrastructure as code.
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=16)** So we are back into our SAM project, the one that we created some videos ago.
>
> **[0:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=21)** And here we are going to template YAML.
>
> **[0:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=24)** Now we need to create a new resource for that.
>
> **[0:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=28)** I'm going to create a state machine.
>
> **[0:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=33)** Make this smaller.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=34)** So the name is going to be my state machine of the type state machine.
>
> **[0:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=40)** And then here there are some properties that we need.
>
> **[0:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=42)** The first one is where we are going to find the definition of the state machine.
>
> **[0:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=47)** All the state machines have a definition that can be a YAML or a JSON.
>
> **[0:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=53)** Even if we are working on the visual studio console, we can see the definition here it is for the one that we just created previously.
>
> **[1:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=63)** So we need to give a directory or this state machine will be defined.
>
> **[1:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=70)** Then we have the definition substitutions, and we are going to cover that in a second.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=74)** But this will point the function that we created previously to the function that will execute in the workflow.
>
> **[1:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=82)** So this is how you create these connections.
>
> **[1:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=85)** And then finally, we are giving permissions to the state machine to invoke that Lambda function.
>
> **[1:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=91)** Do you remember when we created the workflow in the console that it was creating the permission for us?
>
> **[1:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=97)** Well, if we do it as infrastructure as code, we need to do it ourselves.
>
> **[1:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=101)** And all the resources in AWS are born without permissions, meaning that if we don't give the permissions to the state machine to invoke the Lambda, it will not be able to do it even if they're in the same account and created by me.
>
> **[1:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=116)** So now that we have the infrastructure, the next thing we need to do is to create the definition for our state machine.
>
> **[2:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=125)** So we are going to put that directory there and then we are going to create this file.
>
> **[2:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=133)** You can see the file has a name statemachine.asl.yaml.
>
> **[2:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=138)** ASL is the Amazon state language and is a language that originates from JSON that defines state machines.
>
> **[2:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=146)** We are not going to get into the details on how to do that right now.
>
> **[2:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=150)** So we are going to just go to our state machine that we created previously, go to edit, and then in code you can do actions, export definition as a YAML file.
>
> **[2:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=164)** And this will get you the definition of this state machine as a YAML that you can use in your project.
>
> **[2:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=172)** So I will open that and paste it here.
>
> **[2:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=177)** So here is the definition.
>
> **[2:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=178)** We can just copy it and paste it.
>
> **[3:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=185)** So you can see here that this is the exact same definition of our state machine.
>
> **[3:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=189)** And if you're using Visual Studio Code, you can get the AWS extension for Visual Studio Code.
>
> **[3:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=195)** And that will enable this little button here that will allow you to render the state machine.
>
> **[3:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=200)** So you can preview what is going on in this state machine.
>
> **[3:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=205)** But if you see there is only one task, that is the one state that is the Lambda invoke and it's pointing to this function name.
>
> **[3:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=214)** And in order to make it simpler and more re-utilizable for you, if you want to download this, I'll change this to MyFunctionArn.
>
> **[3:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=226)** And this is the definition substitutions, meaning now anything that has this MyFunctionArn and is pointing up here will be the one that will appear here.
>
> **[3:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=239)** And because everybody that is doing this course will have a different function name function, function ARN, then they can just download the code and re-utilize it.
>
> **[4:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=249)** So it's very important not to leave these hard coded values in our state machines so we can deploy this in multiple accounts, in multiple regions, in multiple environments, whatever we want.
>
> **[4:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=260)** So this will link to this function.
>
> **[4:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=264)** So now let's deploy this and see what happens because we already have deployed some template before I just running sam deploy.
>
> **[4:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=274)** And this will be uploading the changes into CloudFormation.
>
> **[4:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=278)** And in this case, we'll be creating the state machine with all the resources needed to support the state machine.
>
> **[4:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=284)** And we can see here that is going to create a new role for my state machine and a new workflow.
>
> **[4:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=291)** And then it'll update my function as well.
>
> **[4:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=296)** So we need to wait for a moment for this to complete, and then we can see it in action, for example from the console.
>
> **[5:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=305)** We can go to state machines and we'll see it here when it's ready.
>
> **[5:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=314)** So I think it's this one that we just created here.
>
> **[5:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=318)** If we go to the definitions, we can see it here.
>
> **[5:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=322)** And we can also start an execution in the same way that we did with the previous one.
>
> **[5:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-workflow-as-iac?u=76281980&t=329)** This will invoke the Lambda function and you can explore and see that it's exactly the same as the previous one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (3), [[Infrastructure as code (IaC)|Infrastructure as code]] (3), [[JSON]] (2), next (1)
> **Env Vars:** yaml (4), aws (3), json (2), sam (1), asl (1)
> **CLI Commands:** aws (3), make (2), find (1)
> **Tools:** visual studio (3), aws console (1)
> **UI Navigation:** go to (4)
> **Exercise Files:** template (2), download the (1)
> **File Paths:** statemachine.asl.yaml (1)
> **Cross-References:** previous video (1)

#### Introduction to ASL
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=0)** - [Instructor] In the previous two videos, you built a workflow.
>
> **[0:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=3)** In the first one, we built it from the console.
>
> **[0:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=5)** Using the workflow studio, you drag and drop components and boom, the workflow wrote itself.
>
> **[0:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=11)** In the second video, you built it using infrastructure as code, but you copy and paste the workflow that you build previously without really understanding what was going on.
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=23)** In this video, let's look a little bit more about ASL Amazon State Language.
>
> **[0:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=29)** That is the language used to define these workflows.
>
> **[0:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=33)** ASL is a JSON base, and you can also represent this as a YAML as you saw in the previous video.
>
> **[0:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=40)** Structural language used to define your state machine, a collection of states that do work.
>
> **[0:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=45)** These are called task states, that determine which states the transition makes, these are the flow states.
>
> **[0:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=52)** And error handle needed.
>
> **[0:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=55)** There is a full page documenting ASL.
>
> **[0:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=58)** I will not be providing you a course on it, but I want to go over some of the most important fields and how a simple workflow is constructed so you can build your own.
>
> **[1:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=69)** The first object we want to define is the workflow itself.
>
> **[1:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=73)** A workflow has an array of states and you need to define which one is the initial one.
>
> **[1:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=78)** Defining the states is very important.
>
> **[1:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=81)** Each state must have a unique name and have a type.
>
> **[1:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=86)** This refers to the type of the state that we are going to learn in the next session, but for this example, we have a task state.
>
> **[1:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=95)** Each type of state has different required attributes.
>
> **[1:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=98)** For example, for a task state, the resource is a must-have.
>
> **[1:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=102)** A state needs to have a next state or end state in order to tell step functions where to go next.
>
> **[1:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=111)** Handling the data between the states is important.
>
> **[1:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=115)** Each state has an input and an output and step functions will pass those around if you don't do anything.
>
> **[2:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=122)** But sometimes you need to modify part of the input or access a specific attribute.
>
> **[2:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=128)** Here is where the dollar sign becomes very useful.
>
> **[2:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=132)** When you want to access a field in the input path, you can use the dollar sign and name the attribute.
>
> **[2:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=139)** All the fields that are referenced using the dollar sign need to be defined with a dot dollar sign.
>
> **[2:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=145)** Another really cool feature about ASL is the use of intrinsic functions.
>
> **[2:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=151)** This allows you to perform simple programming functions directly in the workflow.
>
> **[2:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=158)** For example, you can create a new ID, manipulate strings and arrays and code and decode by 64 strings, perform math operations and much more.
>
> **[2:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=168)** In this example, the intrinsic function builds a new string that says hello to a user with its first and last name.
>
> **[2:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=175)** Those values are coming from the input of the workflow or from the state input in this case.
>
> **[3:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=182)** I will leave you a list of all the intrinsic functions available in the resources of this video.
>
> **[3:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=188)** We'll be using a lot of intrinsic functions in this course, so you will see them in action in no time.
>
> **[3:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=194)** And finally, I want to show you error handling.
>
> **[3:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=198)** Any state type can encounter errors, and when the state reports an error, you can edit the default course of action of the state machine.
>
> **[3:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=207)** You can define retries, fallback states, or catch a specific error.
>
> **[3:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=212)** All of that can be defined using ASL directly in our workflow.
>
> **[3:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=217)** This example shows a state that has a retried configure and a fallback state when those retries are exhausted and will still have an error.
>
> **[3:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=226)** Don't worry if you are not yet confident writing all this by hand.
>
> **[3:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=231)** Step functions offers the Workflow Studio that can help you out.
>
> **[3:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-asl?u=76281980&t=235)** And if you want to have the Workflow Sudio in your IDE like Visual Studio code, you can check a video I leave you in the resources of this course where you can learn more about how to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), [[JSON]] (1), data (1), feature (1), [[Programming]] (1)
> **Env Vars:** asl (5), json (1), yaml (1), ide (1)
> **Definitions:** is a  (3), refers to (1)
> **Cross-References:** as you saw (1), previous video (1), in the next (1)
> **Analogies:** for example (2)
> **Tools:** visual studio (1)
> **UI Navigation:** drag and drop (1)
> **Prerequisites:** configure (1)

#### Introduction to flow states
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=0)** - [Presenter] In the previous video, you learn about ASL and workflows.
>
> **[0:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=4)** And I mentioned many times the flow states, and the different types of states that a workflow can have.
>
> **[0:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=10)** In this video, let's look at those states types in more detail.
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=16)** A state is a step in a workflow, and this state performs a discreet operation.
>
> **[0:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=21)** As you learn in the first video about step functions.
>
> **[0:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=24)** This operation can be executing work, or performing some flow mechanism.
>
> **[0:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=30)** Let's start with the first type of state that is the most common one.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=34)** That is the task state.
>
> **[0:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=36)** This is the state type that performs work.
>
> **[0:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=39)** A state of this type can call another AWS service like a Lambda function, or you can call a third party HTTP endpoint.
>
> **[0:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=48)** The parallel state can be used to create parallel branches of execution in your state machine.
>
> **[0:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=53)** A parallel state provides each branch with a copy of its own input data, iterates output that is an array with one element for each of the branches containing the output for that branch.
>
> **[1:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=68)** If a parallel branch fails, the whole parallel state fails.
>
> **[1:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=73)** The map state can be used to run a set of steps for each element in an input array.
>
> **[1:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=80)** While the parallel state executes multiple branches of steps using the same input, a map state will execute the same step for multiple entries of an array in the input.
>
> **[1:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=92)** The map state can be used to build dynamically parallel fan out, and scatter gather patterns in minutes.
>
> **[1:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=99)** Map state has two modes, distributed and in-line mode.
>
> **[1:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=103)** When we work with the in-line map state, the concurrent iterations are limited to 40 items.
>
> **[1:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=110)** If your input array has more than 40 items, then the following iterations won't begin until the previous iterations are completed.
>
> **[1:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=118)** You can also define the maximum concurrency to be lower than 40.
>
> **[2:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=124)** The output of the map state is a chason array, with the output from each iteration, and if any iteration fails, the entire map state fails, and all the iterations are terminated.
>
> **[2:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=138)** Then we have the distributed mode that supports up to 10,000 concurrent executions.
>
> **[2:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=143)** You can as well configure the maximum concurrency to your needs.
>
> **[2:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=147)** The input for this state can be passed as the form of a previous state, or it can iterate over objects that are in an S3 bucket, a JSON file, or a comma separated value pass in S3.
>
> **[2:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=162)** Iterations in this case, start as a child workflow execution in their own independent execution history.
>
> **[2:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=170)** The output of this map state is a JSON array with an output for each iteration, and can be stored in S3.
>
> **[2:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=178)** Then we have a set of different states that can help you to build the flow of your workflow.
>
> **[3:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=184)** Choice, adds branching logic to a state machine.
>
> **[3:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=188)** It's like a switch.
>
> **[3:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=190)** A pass state passes its input to its output without performing any work.
>
> **[3:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=195)** This is a handy state to transform state data.
>
> **[3:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=198)** If you need to perform some changes in the state, pass it's a great way of doing it.
>
> **[3:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=204)** We'll look more about this later on in the demos.
>
> **[3:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=209)** Await states delays the state machine from continuing for a specific amount of time.
>
> **[3:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=215)** You can make that the state machine waits for a few seconds up to a year.
>
> **[3:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=221)** When the state machine is waiting, its execution is not paused.
>
> **[3:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=225)** And finally, we have succeed and failed states.
>
> **[3:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=229)** Succeed states stops and execution successfully.
>
> **[3:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/introduction-to-flow-states?u=76281980&t=232)** While a failed state stops the execution of the state machine and market as a failure, unless it is caught by a catch block.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** parallel (7), data (2), concurrent (2), [[JSON]] (2), aws (1)
> **Env Vars:** json (2), asl (1), aws (1), http (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** aws (1), make (1)
> **Cross-References:** previous video (1)
> **Analogies:** it's like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [presenter] (1)

#### Step Functions integrations
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=0)** - [Instructor] When we start out learning about Step Functions, you learn some use cases like the Step Functions are great for manual workflows or that is well suited to connect multiple microservices together.
>
> **[0:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=12)** But how this is achieved?
>
> **[0:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=15)** That is possible because of the different integrations patterns that Step Function provides.
>
> **[0:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=20)** In this video, you'll learn the free ones that are available.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=25)** Service integration patterns are how Step Functions integrate directly with the different AWS services and legacy services and manual services.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=34)** You can call a service from a workflow and let Step Function progress to the next state immediately after it gets an HTTP response.
>
> **[0:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=43)** You can call a service and have Step Functions pass the workflow until the job completes, or you can call a service with a TaskToken and have Step Function pause the workflow until the TaskToken is returned.
>
> **[0:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=56)** Request response integration pattern.
>
> **[0:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=59)** The first service integration pattern to cover is the simplest one.
>
> **[1:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=62)** That is the request response.
>
> **[1:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=64)** To implement this pattern, you need to specify in a service the resource string of your task type and provide the API, as we see in the slide.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=74)** This is how we have been invoking the Lambda function in the previous videos.
>
> **[1:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=80)** When this happens, Step Functions calls the APIs and wait for an HTTP response, and then it progresses to the next state.
>
> **[1:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=87)** In this diagram, we can see that it calls a GetObject API from S3.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=94)** This is sync request, so when S3 responds with the object, Step Functions will move to the next step in the workflow.
>
> **[1:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=101)** The next step is also a sync request.
>
> **[1:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=103)** It's invoking lambda function synchronously.
>
> **[1:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=106)** This means that the Step Function will wait for the Lambda to complete its execution, and then it will get the result from the function in its output.
>
> **[1:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=114)** In the case that we want to invoke the Lambda function asynchronously, then Step Functions will start the function and move to the next step without waiting for the output of the function.
>
> **[2:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=126)** As is the case when calling EventBridge, this is an asynchronous API.
>
> **[2:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=131)** Step Functions calls to publish an event, and then gets back an acknowledgement and moves back to the next step.
>
> **[2:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=140)** The second integration pattern available in Step Functions allows you to call a long-running API and have Step Functions pause the workflow until the job completes.
>
> **[2:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=150)** This pattern is very useful, so your state machine can be paused and not cost anything during that time.
>
> **[2:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=156)** This pattern is only available for standard state machines that can run up to one year.
>
> **[2:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=163)** This means that your state machine can be waiting up for one year.
>
> **[2:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=168)** When working with this standard state machine, you only pay for state transitions, and here, because the wait is managed by Step Functions, you don't have to pay for any of that idle time.
>
> **[3:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=180)** This can be done only with the services that we have, an integrated integration like AWS Batch, Amazon ECS or Step Functions.
>
> **[3:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=188)** On the slide, you can see all the services that we have support for, and this integration pattern doesn't support AWS SDK integrations.
>
> **[3:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=198)** To have a workflow wait for a request to complete before progressing to the next state, you need to specify in the Resource field, in your task state definition with the .sync suffix appended to your API URI.
>
> **[3:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=212)** For example, if you have a state machine that queries a data set using Athena, that service has support for .sync calls.
>
> **[3:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=221)** The Step Function will do a .sync call to Athena and then pause itself until the service completes the job.
>
> **[3:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=229)** When Athena completes querying the data, the workflow resumes from the next state.
>
> **[3:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=233)** Here is a normal response request integration to get the results from Athena, and then calls EventBridge with an asynchronous API to put an event into the event bus.
>
> **[4:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=245)** The last integration pattern available for Step Functions is the wait for callback.
>
> **[4:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=250)** Here, you can call a service, any service, not limited to the optimized integrations, with the TaskToken and Step Functions will post the workflow until that TaskToken is returned.
>
> **[4:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=261)** This pattern is super useful when we want to integrate a workflow to a legacy service, external service, or manual operation in some kind.
>
> **[4:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=270)** In this example, you can see how to call the API with a WaitForTaskToken.
>
> **[4:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=276)** Just append the TaskToken request at the end of the API call.
>
> **[4:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=280)** You can get the TaskToken from the context object.
>
> **[4:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=284)** Your implementation will need to store the token somewhere and return it later to restart execution.
>
> **[4:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=291)** In this example, we have a workflow that put a message in a queue to start some kind of work.
>
> **[4:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=296)** Maybe this is invoking some legacy service that is fronted by a queue.
>
> **[5:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=301)** If the task succeed, then the workflow completes and if the task fails, then a function will be invoked to handle the function.
>
> **[5:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=309)** When the state queue works, a message to the queue will be sent with the TaskToken.
>
> **[5:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=315)** This queue can trigger any kind of service on the other side.
>
> **[5:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=318)** It's not relevant for this example.
>
> **[5:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=321)** When the task succeed, the state machine needs to resume, and that can be done with the API SendTaskSuccess and passing the task the TaskToken.
>
> **[5:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=333)** If the task fail, the workflow can be resumed with a SendTaskFailure API call and the TaskToken.
>
> **[5:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/step-functions-integrations?u=76281980&t=339)** We don't need to know in any of these cases the execution ID or the name or ARN of the Step Functions, just the TaskToken.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (10), next (8), aws (3), data (2), [[Microservices]] (1)
> **Env Vars:** api (10), aws (3), http (2), ecs (1), sdk (1)
> **Definitions:** means that (2), is an  (1), is a  (1)
> **CLI Commands:** aws (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Modifying the workflow with simple integration
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=0)** - [Marcia] Now that you have learned a bit of ASL, and the different state types, it's time to modify our existing workflow, and add a request response integration to an AI service.
>
> **[0:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=12)** So we are going back to our project, and we are going to replace this lambda function that we are using in our state machine to call a service called transcribe.
>
> **[0:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=24)** Transcribe is a service that allow us to do transcription.
>
> **[0:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=27)** So basically you can upload an audio or a video, and it will get the text from there, transcription from what they're saying.
>
> **[0:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=36)** And it has an API, I will leave you the link for this API in the resources.
>
> **[0:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=42)** And it has a lot of different things that it can do.
>
> **[0:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=46)** We are going to use the API StartTranscriptionJob, transcribe this API is asynchronous, so we will start the job then transcribe will do whatever it needs to do and we can get back to it.
>
> **[0:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=59)** So let's go to our state machine and modify it.
>
> **[1:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=64)** So let's open the state machine, and here always in the side, you can verify how it looks.
>
> **[1:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=70)** I will close it so we have a better view of the code.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=74)** I remove the state, lambda invoke, because we don't want it anymore.
>
> **[1:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=80)** And I will add a new state called transcribe text.
>
> **[1:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=87)** And we need to make sure that we are calling transcribe text at the start.
>
> **[1:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=98)** So now, this is a task and it's calling this API, the StartTranscriptionJob.
>
> **[1:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=104)** It has some parameters, and you can see the parameters in the API definition.
>
> **[1:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=108)** So these are coming from the API definition.
>
> **[1:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=112)** You can see here the request syntax, and what are the request parameters.
>
> **[1:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=117)** So you can check that out there.
>
> **[1:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=119)** But it requires us to have a file from S3 in the format of URI.
>
> **[2:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=125)** And here you can see that I'm using already intrinsic functions to format this.
>
> **[2:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=130)** The input is the bucket name that I'm getting from the input of the state machine and the object key of the file that I will be getting from there.
>
> **[2:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=144)** Then the TranscriptionJobName.
>
> **[2:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=146)** I will use the execution name of this state machine that I'm getting from the context of the state machine.
>
> **[2:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=153)** So it's unique.
>
> **[2:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=155)** The input language will be in English for my case, but you can do whatever you want.
>
> **[2:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=159)** You can do it from Spanish to English or whatever.
>
> **[2:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=162)** Just make sure that you change this code as you need, and then transcribe will save that transcription into bucket.
>
> **[2:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=171)** So we can pass the output bucket name here as a definition substitution.
>
> **[2:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=175)** So we are going to do that in a second in our infrastructure.
>
> **[3:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=180)** And then the key for that file will be another intrinsic function that will have the name of the original file.txt.
>
> **[3:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=190)** So in that case, this is how it's going to get formatted.
>
> **[3:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=196)** So we can go now to our infrastructure, and start adding the different infrastructure bits that we need.
>
> **[3:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=203)** Let's remove the function, we don't need it anymore.
>
> **[3:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=207)** And here instead, we can create a new bucket.
>
> **[3:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=213)** Buckets in AWS needs to have a unique name.
>
> **[3:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=217)** So I will call it something, and you cannot use it, exactly the same name, because it will not work for you.
>
> **[3:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=227)** So something like that, linkedin-serverless-ai-marcia-input-bucket.
>
> **[3:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=234)** Then we are going to modify the state machine.
>
> **[3:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=238)** The definition already stay the same because it's the same, but now we have a transcription bucket where the output will go and also the input.
>
> **[4:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=246)** So we are going to use the same bucket for the inputs and outputs.
>
> **[4:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=252)** So we can replace that, and then we are going to give policies, permissions to read, and write into that bucket.
>
> **[4:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=263)** So we can do that.
>
> **[4:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=266)** Let's remove that lambda policy that we have, and change it for permissions to read and write.
>
> **[4:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=273)** These policies, if you don't know, they're coming from the SAM policies.
>
> **[4:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=276)** So this is something specific for SAM that it provides you a list of policies already defined.
>
> **[4:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=283)** You can find this link in the internet where there is all the different policies that SAM will make for you so you don't need to write them.
>
> **[4:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=292)** In the case of transcribe, we don't have a managed policy, so we need to build it ourself.
>
> **[4:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=298)** And for that we are going to use the typical way of writing policies in AWS that is creating a statement with an allow, an action, in this case to start a transcription job over a resource, and because transcribe is a managed service that we don't create any resource on, we just give the asterisk.
>
> **[5:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=320)** And then one thing we can do is to output in our terminal the bucket name so we know what this end up being called.
>
> **[5:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=330)** So this is our infrastructure, this is our state machine.
>
> **[5:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=333)** We can deploy it and see what happens.
>
> **[5:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=335)** So let's go to the project folder and do sam deploy.
>
> **[5:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=341)** Now, it will take a while, it will deploy and we can check it out.
>
> **[5:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=348)** This will take a moment.
>
> **[5:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=349)** It's creating all the different resources.
>
> **[5:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=351)** We can see all the resources that are being created, and removed in here in the CloudFormation stack changeset.
>
> **[5:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=358)** We can see that we are adding a bucket, that we are modifying the state machine and it's roles, and we are deleting the function and it's roll.
>
> **[6:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=365)** So it will delete automatically that function that we removed from the template.
>
> **[6:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=369)** So we don't need to do that manually.
>
> **[6:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=370)** So that's really handy, but it takes a little while to do everything.
>
> **[6:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=375)** As always, you can see it from your CloudFormation if you don't like to see it from the template, if you go to CloudFormation, you can see it from here.
>
> **[6:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=386)** Well, now, the update is completed, so that's good.
>
> **[6:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=388)** We can go and check the state machine.
>
> **[6:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=397)** Here is our state machine with our definition, transcribe text.
>
> **[6:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=402)** So this is what we have created.
>
> **[6:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=404)** Then we need to go to S3, and we can see the bucket that we just created.
>
> **[6:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=411)** We have the output of the bucket here.
>
> **[6:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=414)** This is a name, remember to make unique name.
>
> **[6:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=418)** So here is our bucket and here, we can upload a new file.
>
> **[7:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=424)** So I'll just grab something from my computer, and I will upload it there.
>
> **[7:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=432)** So I'm bringing a file from my computer.
>
> **[7:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=435)** I am uploading it manually using the console, but if you want, you could upload it from the CLI.
>
> **[7:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=444)** This file is a step function file that I recorded.
>
> **[7:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=448)** Little piece of introduction to step functions, short video, and it takes around four, three minutes to upload.
>
> **[7:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=458)** So you need to wait until this is uploaded, and then we can see what happens with the transcription.
>
> **[7:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=468)** Okay, now, after the file uploaded, we can go to our state machine, and we can start the execution.
>
> **[7:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=477)** Now, we need to pass a parameter to the execution.
>
> **[8:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=482)** So we need to pass the bucket name, and the object name.
>
> **[8:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=488)** So we can see here that we are getting that from the input.
>
> **[8:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=493)** So that's the first thing we are going to do.
>
> **[8:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=496)** I will grab this, and I will be taking it here, so we can build that input.
>
> **[8:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=507)** So it needs to be something in this format.
>
> **[8:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=516)** And then the name of the object is something like this.
>
> **[8:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=523)** So this is our input.
>
> **[8:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=525)** We can save it if we want, and we will be always using the same input.
>
> **[8:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=531)** So for now, I will just keep it in my Visual Studio Code, because we might need to start this machine with this input many times.
>
> **[8:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=539)** Remember the name of the bucket is the one that you created.
>
> **[9:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=542)** The name of the file is the one that you just uploaded.
>
> **[9:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=545)** So we can start execution.
>
> **[9:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=550)** So what will happen now is that this will start, and it will finish right away.
>
> **[9:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=554)** And it doesn't mean that the transcription is done.
>
> **[9:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=557)** This means that the transcription job has started, but the transcription is not ready.
>
> **[9:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=562)** So if we go to the bucket, we can see here that there is no transcription yet.
>
> **[9:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=569)** So what happened now?
>
> **[9:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=571)** What happened is that our StartTranscriptionJob is an asynchronous thing.
>
> **[9:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=576)** It's an asynchronous API.
>
> **[9:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=578)** And in order to be able to process this transcription, we need to get the transcription status of the job to make sure that it's completed.
>
> **[9:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=590)** How we do that?
>
> **[9:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=591)** Well, first, we need to modify our state machine.
>
> **[9:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=595)** So let's go here and let's go to our state machine, and let's modify it.
>
> **[10:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=602)** So the first step is correct, transcribe text.
>
> **[10:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=607)** But instead of finishing here, we are going to have another step, and we are going to call this one, Wait For Transcribe.
>
> **[10:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=619)** So now we are going to use a wait state in order to wait for our transcription job to be completed.
>
> **[10:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=628)** So let's add it here, Wait For Transcribe, and this will wait for one minute, and check the transcription job.
>
> **[10:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=636)** Then we'll do the check of the transcription job by calling that API, Get Transcription Job, and we want to check on the transcription job ID that we created previously.
>
> **[10:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=654)** So here is the TranscriptionJobName and this is the same.
>
> **[11:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=660)** So it's the execution ID.
>
> **[11:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=664)** And then we are going to use a choice state that will tell us, depending on the status of this job, if it's completed or it has failed.
>
> **[11:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=677)** And if not, we keep on waiting, because the transcription is not yet done.
>
> **[11:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=682)** If the job failed for any reason, we are going to failed state, and we mark the whole execution as failed.
>
> **[11:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=694)** If not, we go to a succeed state.
>
> **[11:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=700)** So now, we can look at the our state machine.
>
> **[11:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=703)** I know, it became a little bit bigger than it was before.
>
> **[11:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=707)** Let's deploy it and before deploying it, let's see at the permissions, because we have here only permissions to start the transcription job, and we need to add the permission to get the transcription job.
>
> **[11:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=719)** Permissions are granular, and we want to give the right permissions to the right APIs.
>
> **[12:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=726)** And with that, now we can deploy it.
>
> **[12:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=728)** And while we deploy it, I can explain you, and show you a little bit what is going on.
>
> **[12:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=735)** Now it's deploying.
>
> **[12:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=736)** Let's close this for a while, and let's go here to our transcription, our state machine.
>
> **[12:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=743)** So we can see now that our state machine has many states, and they're all a little bit different.
>
> **[12:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=748)** They're all different types of states.
>
> **[12:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=749)** We have transcribed text, and check transcription job status, there are tasks and they're calling the API for transcription and AI service.
>
> **[12:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=757)** Then we have a wait state, that wait for 60 seconds, and this will wait for 60 seconds, check the status of the job, if the job is completed or not, it will be decided by this choice state that will check on a variable that you will get from the result of the job status.
>
> **[12:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=777)** And if it's completed, it will finish with a successful.
>
> **[13:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=781)** And if it is completed but has failed, it will finish with a failure.
>
> **[13:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=786)** But if it's yet not completed, it will keep on waiting for 60 seconds more, check the status, and then evaluate again.
>
> **[13:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=794)** So in this way we are awaiting on our state machine.
>
> **[13:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=797)** And you may be wondering, Marcia, why you are not using the integration patterns that you show us.
>
> **[13:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=803)** Well, first, the wait for asynchronous task, the .sync that we talked before, is not available for transcribe.
>
> **[13:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=811)** We could use the callback token, the task token integration, but then we will need something like a lambda function, or something like that to do this iteration for us in a way.
>
> **[13:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=824)** So this is one of the optimal ways to do this particular integration.
>
> **[13:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=829)** So good, now, it's updated.
>
> **[13:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=831)** So let's go back to our state machine.
>
> **[13:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=835)** Let's see it now, the definition, it updated and now, we can start an execution.
>
> **[14:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=842)** We can either start an execution from here, and pass the input that we have saved in Visual Studio Code.
>
> **[14:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=849)** Or if you're lazy, you can start open the last execution, and click new execution, and it will start with exactly the same parameters.
>
> **[14:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=860)** So we can see now how this works in action.
>
> **[14:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=864)** So this is in progress.
>
> **[14:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=865)** As you can see, the transcribed text went very fast, but the transcription is not ready yet.
>
> **[14:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=870)** So now, we'll wait for one minute in order to check for the transcription job status, and we will see this updating in real time as it goes.
>
> **[14:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=882)** One thing that you can do is adjust those 60 seconds to something that is more suitable for the size of the videos that you are uploading.
>
> **[14:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=889)** I put 60 seconds because it's a safe bet, but you might want to put it to 10, or 20 seconds so it will go faster.
>
> **[14:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=897)** Remember, because we are in a standard workflow, we are going to pay for transitions.
>
> **[15:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=902)** So we might not want to do a lot of iterations, a big loop here because we are going to be paying for that.
>
> **[15:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=910)** So finding the optimal amount of transition time, of wait time is important.
>
> **[15:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=916)** So yes.
>
> **[15:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=919)** So if you click in any of the states, it will open that, you can see everything went green.
>
> **[15:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=925)** That's good.
>
> **[15:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=926)** And if you have zoomed out a little bit, because this is just so big for you to see, you can see exactly the same in the side.
>
> **[15:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=934)** You can see the input, the output, the details of the state, how long it took and all those things.
>
> **[15:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=939)** So go ahead and click and now, we can go to our S3 packet, and we can see here their result that we have.
>
> **[15:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=948)** This is transcribed text so you can download it, and you can see it in your download files.
>
> **[15:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=956)** So open it.
>
> **[15:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=958)** So here it is, it's a very ugly file, but at the beginning you can see the transcript status is completed, the transcript of the file of the video in this case.
>
> **[16:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=971)** And then you can see some pronunciation, and the confidence of each of the slots.
>
> **[16:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=978)** And some of them don't have a very good confidence.
>
> **[16:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=981)** Some of them has better, and the more native the English speaker is the better it will be.
>
> **[16:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-workflow-with-simple-integration?u=76281980&t=988)** But yeah, so this is the file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (10), ai (3), aws (2), [[LinkedIn]] (1), [[CLI]] (1)
> **Env Vars:** api (10), sam (3), aws (2), asl (1), uri (1)
> **UI Navigation:** go to (9), open the (2)
> **CLI Commands:** make (5), aws (2), find (1)
> **Definitions:** is a  (5), means that (1), is an  (1)
> **Tools:** visual studio (2), terminal (1)
> **Exercise Files:** template (2)
> **File Paths:** file.txt (1)

#### Challenge: Modify the state machine to add an integration to AI service
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=0)** - [Instructor] In the previous video, you modify the workshop to transcribe a video file that is uploaded to us free.
>
> **[0:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=11)** Now we can add another step that will translate that transcribed video into any language that we want.
>
> **[0:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=18)** For example, I will be using Spanish as the destination language, but pick anything that you like.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=25)** For this challenge, you will use Amazon Translate service, another of the AWS AI services.
>
> **[0:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=32)** Amazon Translate API is asynchronous for small amount of text.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=38)** This is how the API looks for translate.
>
> **[0:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=41)** This is the name, the API name that you will need in your state machine, and these are the parameters.
>
> **[0:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=46)** In my case, the source language will be English, the target language will be Spanish, and the text is whatever is transcribed before.
>
> **[0:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=56)** So I imagine if you're thinking about this, this is the expected workflow that you are going to build.
>
> **[1:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=63)** Basically, it'll be the output of the transcription, and pass it to a translation, and we should be good.
>
> **[1:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=70)** But if you try to do this, you will notice something weird in that translation.
>
> **[1:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=76)** The translation file that you will get as a result has a lot of unnecessary text that we are not interested.
>
> **[1:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=84)** I'm wondering if you can polish the solution a little bit more to translate just the right amount of text, meaning the transcription text.
>
> **[1:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=93)** Let me give you a couple of hints on how you can achieve this.
>
> **[1:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=97)** This is the final workflow that you should have.
>
> **[1:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=100)** That red box is the steps that you need to add to your existing workflow, and maybe you're a little bit confused what they do.
>
> **[1:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=107)** Let's look at them a little bit in more detail.
>
> **[1:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=110)** So the transcription job stores a transcribed text in an S3 bucket in a file there, so until there, we are good.
>
> **[2:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=120)** This is the output of the transcription job.
>
> **[2:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=123)** This is the file structure of how that file looks.
>
> **[2:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=127)** So if you don't load the file, you will notice that it looks something like this.
>
> **[2:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=129)** This is a JSON object, and it has a lot of information.
>
> **[2:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=133)** It's a very long file, I just summarized it for you.
>
> **[2:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=137)** But the part that we are interested is in the transcribed text, that thing that is inside results, transcripts, transcript.
>
> **[2:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=144)** So we need to clean that result out, and for that we need to get the object from S3.
>
> **[2:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=151)** For that, we are going to use the get object API that S3 provides.
>
> **[2:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=156)** When we get the object, we'll have it in our payload from our state machine, and we can use a pass state type to just grab the part of the object of the JSON that we are interested in.
>
> **[2:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=172)** And with that, then we can pass it to translate to do the translation on only the transcribed text.
>
> **[3:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=180)** In the following video, you can see how I solve this problem step by step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (4), [[JSON]] (2), aws (1), ai (1)
> **Env Vars:** api (4), json (2), aws (1)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** aws (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Modify the state machine to add an integration to AI service
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=0)** - [Instructor] Let me show you my solution for the challenge number one.
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=9)** So we have our statemachine here, and it looks something like this.
>
> **[0:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=15)** So we need to add those three states here for getting the file from S3, doing the cleanup, and do a translation.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=25)** So let's do that.
>
> **[0:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=27)** Let's check where this one ends.
>
> **[0:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=30)** So somewhere here.
>
> **[0:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=33)** And the first thing we want to do is to get that transcribed or the transcription.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=38)** So for that we are going to create a new state called Get Transcribed File.
>
> **[0:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=45)** And this state will be called whenever the transcription is completed.
>
> **[0:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=51)** So now instead of calling Succeed, we just call that.
>
> **[0:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=56)** And this one, what it does is calls the getObject from the S3 bucket.
>
> **[1:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=65)** And the bucket is the one that we have in our definition substitution for the state machine, that input bucket that we created.
>
> **[1:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=73)** And here you can see that we are using intrinsic function to get the file name.
>
> **[1:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=82)** This is very complex, but basically, you can always start looking for the intrinsic functions from the button in.
>
> **[1:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=89)** So here we have the TranscriptionJob URI file.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=94)** We are splitting it based on these dashes, we are getting the portion number four.
>
> **[1:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=101)** And in that way is how we are going to build this key.
>
> **[1:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=105)** That will be in the perfect transcribed/ and whatever comes from here.
>
> **[1:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=112)** So this is a change I'm going to do in the code in general to have our results organized somehow so then we don't end up in a mess because now everything goes to the root of the bucket file and things will starting to get complex.
>
> **[2:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=129)** So to tackle this, where I will go is up to where we are doing the transcribe.
>
> **[2:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=136)** In the output key, I'm going to change this for something like this.
>
> **[2:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=143)** So now we are storing that transcription into that transcribed folder in the bucket.
>
> **[2:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=151)** So it's easy to know that all the transcriptions will be inside this folder, and later on, you will thank me because it's something that will cause problems if not.
>
> **[2:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=163)** So let's go back to our Get Transcribed File.
>
> **[2:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=167)** So we have the bucket, that is that bucket.
>
> **[2:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=170)** The key that is that transcribed file that we just created.
>
> **[2:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=175)** The API is the getObject, and you can always search for these APIs in something like that.
>
> **[3:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=182)** AWS API GetObject S3, and you can always find it right away.
>
> **[3:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=190)** And here you can find all the APIs for S3 and you can always find all the responses and requests for that particular API.
>
> **[3:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=199)** And then we'll do a ResultSelector.
>
> **[3:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=202)** In this case, we are going to get the whole body of the file and we are going to put it in this ResultPath called transcription.
>
> **[3:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=212)** The next thing we want to do is to add a new state step called clean output.
>
> **[3:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=218)** So this is our past state that basically what will grab is the transcription that we have in this place and it will put it in the transcribed text, that this is the thing that we are going to send to translate.
>
> **[3:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=232)** So we are basically grabbing the whole object from S3 and then we are just grabbing that particular information from that JSON file.
>
> **[4:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=242)** And then finally, we are calling the Translate API.
>
> **[4:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=247)** And this is the API that will be calling Amazon Translate with that API.
>
> **[4:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=252)** And we have the language of the source that is English and the target is Spanish.
>
> **[4:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=258)** And this is the text that is the one that we just put in this attribute.
>
> **[4:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=263)** So now we're good, we should be fine.
>
> **[4:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=266)** We can save and we can see what happens if our state machine is doing what we want.
>
> **[4:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=273)** Yes, it's looking good.
>
> **[4:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=275)** One more thing before we move on to deploy and test is to give permissions to this state machine to use translate.
>
> **[4:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=284)** So let's do that.
>
> **[4:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=288)** Make sure you have the right indentations because YAML are like that.
>
> **[4:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=293)** You might have them wrong and then nothing works.
>
> **[4:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=296)** And then with this, now we are ready to deploy.
>
> **[4:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=299)** So let's do sam deploy and let's see what happens.
>
> **[5:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=306)** So we can see in the stack chainset that the StateMachine is going to get modified and also the role because we are giving these new permissions.
>
> **[5:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=314)** So this will take a little bit and then we can test it.
>
> **[5:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=318)** To test it, you can use that input that we have saved.
>
> **[5:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=323)** I have it here in the Visual Studio Code.
>
> **[5:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=327)** And that will help us to like being able to test.
>
> **[5:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=332)** So this is the input that we want to pass to state machine.
>
> **[5:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=335)** That is the bucket name that we created and the file that we uploaded.
>
> **[5:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=340)** So let's go back to the state machine.
>
> **[5:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=343)** We can make sure that the definition changed.
>
> **[5:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=345)** So let's refresh this.
>
> **[5:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=349)** Let's check the definition.
>
> **[5:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=350)** And it has the new states, the starter execution, the space, that input, and the start.
>
> **[6:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=360)** Again, this will take a little while because we have the 60 seconds for transcribe, but then after that, this should be quite fast because translate is synchronous.
>
> **[6:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=370)** Amount of text that we are translating is quite small.
>
> **[6:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=373)** So then we should be good.
>
> **[6:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=375)** So we are waiting now for transcribe.
>
> **[6:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=378)** We can also open if you want S3 so you can see what is going on there.
>
> **[6:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=387)** And now you can see that we have a folder for transcribed.
>
> **[6:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=390)** So here is where the transcribed files are going to go.
>
> **[6:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=395)** And when these finish, then everything will turn green in a second and we can see the results.
>
> **[6:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=405)** So now we have finished the waiting with the transcription is successful.
>
> **[6:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=410)** Now it's calling transcribe.
>
> **[6:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=413)** We are getting the transcribed file.
>
> **[6:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=414)** We are cleaning the output and we are doing the translation.
>
> **[6:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=417)** So here in the output we can see our translation.
>
> **[7:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=421)** You can see here the translation of that file.
>
> **[7:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=425)** It's in Spanish. It looks quite okay.
>
> **[7:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=428)** And if we go to our S3 bucket, we can see here that we have the transcribed file that we have originally in the root of the file.
>
> **[7:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-modify-the-state-machine-to-add-an-integration-to-ai-service?u=76281980&t=436)** So everything looks good. Now we are ready to move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (6), [[Search]] (1), aws (1), next (1), [[JSON]] (1)
> **Env Vars:** api (6), uri (1), aws (1), json (1), yaml (1)
> **CLI Commands:** find (3), make (2), aws (1)
> **Code Identifiers:** getobject (2)
> **Cross-References:** go back to (2)
> **Tools:** visual studio (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)


### 5. Building a Workflow with AI

[↑ Back to Table of Contents](#table-of-contents)

#### Modifying the existing state machine to use Amazon Bedrock
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=0)** - [Instructor] Let's jump directly into adding generative AI to our workflow.
>
> **[0:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=6)** In this video, you will learn how to call Bedrock from your workflow, and what we want to do is to create a summary of the translated text.
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=16)** So let's look at our state machine.
>
> **[0:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=18)** We can check it out here.
>
> **[0:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=22)** This is state machine that we have.
>
> **[0:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=24)** First we have the transcription of the text.
>
> **[0:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=27)** We have a video, we upload it.
>
> **[0:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=29)** Then that transcription gets translated.
>
> **[0:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=33)** And now what we want to do is use Generative AI to get a summary of that translated text in the original language.
>
> **[0:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=42)** So in order to do that, we need to modify a little bit our existing state machine.
>
> **[0:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=49)** I will add somewhere here the invocation of Bedrock.
>
> **[0:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=54)** But in order to invoke Bedrock, we need to transform the data that we have from the translation.
>
> **[1:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=61)** So the first thing we want to do is to create the prompt.
>
> **[1:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=65)** So we need to create the prompt that we are going to give the Gen AI model.
>
> **[1:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=72)** Then we want to combine the prompt with the translated text.
>
> **[1:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=75)** Then we need to create the place where we are going to store these results from invoking Bedrock.
>
> **[1:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=83)** Then we invoke Bedrock.
>
> **[1:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=84)** So there is quite a lot of work that we need to do here in order to get this working.
>
> **[1:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=91)** So let's go after the translation and start adding the different bits and pieces.
>
> **[1:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=97)** So the first thing we want to do is to create the prompt.
>
> **[1:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=104)** So here you can see I added a new state called add basic prompt to the output.
>
> **[1:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=109)** And it's the type pass.
>
> **[1:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=111)** And what it does, it has a prompt, "Given the transcript provided at the end of this prompt, "return a summary of 160 characters of the transcript.
>
> **[2:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=120)** "Keep the original language of the transcript.
>
> **[2:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=122)** "If the transcript is provided in Spanish, "return the summary in Spanish, and here is the transcript."
>
> **[2:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=127)** And you can see that there is nothing.
>
> **[2:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=128)** So that's the next step.
>
> **[2:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=130)** We need to combine the translation with the prompt.
>
> **[2:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=136)** So we are going to add another pass state called Combine Prompt that will format these basic prompt together with the translated text.
>
> **[2:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=151)** So that's what we want.
>
> **[2:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=154)** And then finally, what we need in order to get prepped is another state, another pass state in where we are going to create the URI or where we are going to store their result of invoking Bedrock.
>
> **[2:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=170)** So for that, we are again formatting a string with an URI.
>
> **[2:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=176)** And this is a S3 URI in the transcription bucket in the directory results.
>
> **[3:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=183)** And the name of this file will be the file name.
>
> **[3:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=187)** This is a variable that we don't have in our application, so we need to modify a little bit our states that we have before to add those in place.
>
> **[3:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=201)** So we are going to the clean output.
>
> **[3:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=205)** And here where we are getting the transcript in the transcribed text that we did before, we will create a new variable here, called file name.
>
> **[3:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=218)** And here we are going to get the file name of where this transcription is.
>
> **[3:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=225)** So this is something we want to have.
>
> **[3:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=229)** And then in the translate text, we need to do a couple of modifications.
>
> **[3:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=234)** First we want to preserve that input data.
>
> **[4:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=240)** So we are going to create that.
>
> **[4:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=242)** And then the resolve path of this translation is going to get stored in this transcripted text.
>
> **[4:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=249)** So then we can get it from here.
>
> **[4:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=253)** And one last thing is that we need to call this state from here.
>
> **[4:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=260)** So now we are only missing the Bedrock invoke model.
>
> **[4:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=265)** So this is the way that we can invoke Bedrock directly from our workflows.
>
> **[4:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=273)** So this is a task type event, and we are calling this API.
>
> **[4:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=279)** That is the invoke model.
>
> **[4:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=280)** We are going to use the foundation model AI 21 Ultra.
>
> **[4:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=287)** Then we are going to pass the output, this URI that we created in the previous step.
>
> **[4:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=295)** And the prompt is the one that we just completed in the steps before that.
>
> **[5:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=301)** We have a maximum tokens that we can configure.
>
> **[5:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=304)** And then we are putting the results in this results variable, but it's also getting stored in this URI.
>
> **[5:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=310)** So we are going to check that one.
>
> **[5:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=312)** So we can save this.
>
> **[5:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=315)** And then we need to go to the template YAML and give permissions to our state machine to access Bedrock.
>
> **[5:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=325)** So that's another thing we need to do.
>
> **[5:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=328)** So we go to the state machine, into the policies, and we give permissions to Bedrock.
>
> **[5:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=335)** So that's great.
>
> **[5:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=337)** Now we can deploy this, but before deploying, we need to do one thing in our AWS account that is in Bedrock.
>
> **[5:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=346)** So we can search for Bedrock or if you have not used it yet, or you have it in your recent, and then you can go to the sidebar, all the way down, model access.
>
> **[6:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=361)** And in here you need to manage the model access, select the ones that you want to use.
>
> **[6:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=366)** For this demo, we are using Jurassic-2-Ultra, but you can use whatever makes you happy.
>
> **[6:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=372)** Select them.
>
> **[6:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=373)** And then because I already have the permissions, I cannot do it.
>
> **[6:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=377)** But select them all, save changes.
>
> **[6:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=379)** And that will grant your account permissions to use that model.
>
> **[6:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=383)** So that's an important thing.
>
> **[6:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=385)** So now we are ready to do some deploy and test this in the cloud.
>
> **[6:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=390)** So this will now modify our state machine, our workflow, and the role of our workflow because we are giving permissions to the state machine to access Bedrock.
>
> **[6:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=404)** So we need to wait for all of these things to get updated.
>
> **[6:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=408)** So if we look now while that deploys to our new state machine, you can see that this is a very long bar.
>
> **[6:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=416)** We get the file, we transcribe it, then we translate it, and then we create the prompt.
>
> **[7:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=422)** We combine the prompt with the translated file.
>
> **[7:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=425)** We create the URI where we want to store the results.
>
> **[7:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=428)** Then we involve Bedrock, and then we are done.
>
> **[7:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=432)** So this is deployed.
>
> **[7:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=434)** Let's go to our state machine, and we can start a new execution.
>
> **[7:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=440)** If you remember, we have saved the input.
>
> **[7:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=444)** So that's something you want to grab.
>
> **[7:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=448)** We will fix that in a second, in a few videos.
>
> **[7:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=451)** Now we start the state machine, and this execution will start.
>
> **[7:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=456)** So again, the transcription will take around a minute because we are waiting for the transcription.
>
> **[7:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=462)** And this is a wait task that is 60 seconds.
>
> **[7:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=467)** So we need to wait for that long.
>
> **[7:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=469)** But this is a short video, so it should be done in those 60 seconds.
>
> **[7:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=473)** And then after that we can check the status of everything.
>
> **[8:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=480)** So now our state machine finished, and we can see the results.
>
> **[8:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=484)** So we can check all the different states and well, there is quite a lot of information, but let's go to the S3 bucket.
>
> **[8:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=495)** S3.
>
> **[8:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=497)** Let's see our bucket.
>
> **[8:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=501)** And let's go into the results folder.
>
> **[8:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=503)** That's the folder where we decided we want to have the file.
>
> **[8:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=506)** Here it is.
>
> **[8:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=508)** We download it, and then we can open it with some kind of visualization.
>
> **[8:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=515)** I open it with Firefox.
>
> **[8:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=518)** That makes a nice view of the Json.
>
> **[8:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=522)** And if we go to completions, we can see here in data, the text that it is "Step Functions in a visual workflow tool "consisting of a series of discrete operations," and blah, blah, blah.
>
> **[8:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/modifying-the-existing-state-machine-to-use-amazon-bedrock?u=76281980&t=533)** This is like the summary of this video that is about step functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (13), data (3), [[Generative AI]] (2), ai (2), next (1)
> **Env Vars:** uri (6), api (1), yaml (1), aws (1)
> **UI Navigation:** go to (6), select the (1)
> **Definitions:** is a  (6)
> **CLI Commands:** aws (1)
> **Tools:** firefox (1)
> **Exercise Files:** template (1)
> **Prerequisites:** configure (1)

#### Challenge: Integrate with Amazon Bedrock
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=0)** (intriguing music)
>
> **[0:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=5)** - [Instructor] Great.
>
> **[0:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=6)** Now you know how to integrate a workflow, step-functions workflow with Amazon Bedrock.
>
> **[0:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=12)** So I have a challenge for you.
>
> **[0:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=14)** Can you now make Amazon Bedrock write a poem for you instead of a summary of the video?
>
> **[0:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=21)** And can you make that in parallel of the summarization that you have done before?
>
> **[0:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=28)** So this is the workflow I'm asking you for.
>
> **[0:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=32)** You can see here that you do the transcription, you get the transcribed file with a clean output, and then we have a parallel state that from one side we have what we have been doing, the translation and the summarization to Bedrock, And then that red outline shows that we want to have Bedrock to create a poem based on the transcription file that we have for it.
>
> **[0:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=56)** So the input for the workflow doesn't change, it's exactly the same, the bucket and the object name.
>
> **[1:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=62)** And for the parallel branch, the input is at least a transcription file, the transcription text from the video or the audio.
>
> **[1:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=70)** And if you need to add more things, feel free to add.
>
> **[1:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=73)** The results should be stored in that results directory in the S3 bucket with the name, for example, poem, the name of the original file, the json.
>
> **[1:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=83)** And in the next video I will show you the solution that I came out from this challenge.
>
> **[1:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=88)** One thing is that I just put a poem to put something a little bit funny, but feel free to ask generative AI for other things.
>
> **[1:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-with-amazon-bedrock?u=76281980&t=95)** You can ask the top most important concepts of the video or to create a social media post out of the video or whatever you imagine, so feel free to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** parallel (3), [[JSON]] (1), next (1), [[Generative AI]] (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), imagine (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (intriguing music) (1)

#### Solution:  Integrate with Amazon Bedrock
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=0)** - [Instructor] Let me show you how I solve the challenge number two.
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=9)** The first thing we want to do is to go to our state machine and modify it.
>
> **[0:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=14)** So we have the state machine and we want to add a parallel branch here.
>
> **[0:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=19)** So basically starting from the clean output is where we want the parallel branch.
>
> **[0:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=24)** So let's go to the clean output, and after that we can add the prioritization.
>
> **[0:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=32)** So let's go up, clean output, and let's add a parallel state.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=38)** So here you will see, this is how you write the parallel state.
>
> **[0:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=43)** You put the name, parallel state, whatever, just any name.
>
> **[0:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=46)** Type parallel, next succeed, that is the end.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=50)** And then you need to define the branches.
>
> **[0:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=52)** So you can have as many as you need.
>
> **[0:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=55)** And you will define where these branches start.
>
> **[0:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=59)** So the same way that you define the workflow at the beginning that you say start at and then you have an array of states, you will do the same for the parallel branch.
>
> **[1:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=69)** So we want to start at translate text.
>
> **[1:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=71)** This is our first branch.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=74)** So I will grab all these and then I will make it so that the indentation goes under the states, so it's in the right level.
>
> **[1:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=87)** This is YAWL, so indentation is very important.
>
> **[1:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=90)** So you can see here that now it's good.
>
> **[1:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=95)** Then we need to change this clean output to parallel, so things are looking good.
>
> **[1:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=102)** And then it says that we don't have a terminal state, so don't worry, we will go to the bottom of this and we will change this last state in our branch, in our original branch from next succeed to end true because that's the end of the branch.
>
> **[2:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=124)** So this should be a functional state machine, but we don't have still the solution to the problem.
>
> **[2:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=129)** So now we can add another branch.
>
> **[2:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=132)** So we can say, "Hey, let's add another branch."
>
> **[2:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=136)** So we need to make sure that we are in the right indentation, somewhere here.
>
> **[2:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=143)** And let's go to the bottom of this, ticky, ticky, ticky.
>
> **[2:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=148)** And StartAt, and then here we can add the first state.
>
> **[2:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=156)** So the states will be very similar to the ones that we already have.
>
> **[2:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=161)** We have the first thing we are going to do is to create the prompt.
>
> **[2:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=166)** Then we are combining the prompt with the, in this case, the transcribed text.
>
> **[2:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=171)** And then we are going to create the URI, where we want to store that file.
>
> **[2:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=177)** And then finally, we invoke bedrock.
>
> **[3:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=180)** So everything, it's very similar to what you did before.
>
> **[3:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=185)** So let's put this, the first state in the parallel branch is to add, create the prompt for the output, so that's how we are going to do.
>
> **[3:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=196)** And this is a silly prompt, "Given the transcript provided, at the end of the prompt, return a poem of eight lines based on the transcript.
>
> **[3:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=204)** Here is the transcript."
>
> **[3:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=206)** Then we are going to combine the prompts together with the original text.
>
> **[3:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=211)** So we are going to do that.
>
> **[3:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=213)** This is exactly the same as we have done before.
>
> **[3:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=216)** But instead of using the translation, we're using the transcribe.
>
> **[3:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=220)** Then we are going to create the URI for storing the file.
>
> **[3:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=227)** So this is again, another intrinsic function, very similar to the one we have done before with the URI of S3 and storing that with the file name, poem.
>
> **[3:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=238)** And finally, we are going to invoke bedrock.
>
> **[4:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=243)** And now we are going to call exactly the same model.
>
> **[4:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=248)** The URI is the one that we just built.
>
> **[4:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=250)** The prompt is that poem prompt press the transcribed file, and then we'll get the result here.
>
> **[4:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=259)** So with that, then we should have everything that we need to deploy, so let's do some deploy.
>
> **[4:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=269)** And let's see what happens when this is deployed.
>
> **[4:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=273)** So we can see now that our state machine has a branch here for translating the text and doing the summarization.
>
> **[4:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=284)** And then another branch here to make a poem out of the transcribed file.
>
> **[4:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=291)** But again, you can do anything.
>
> **[4:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=292)** It doesn't need to be a poem.
>
> **[4:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=294)** So this is updating. Now it's done.
>
> **[4:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=298)** Let's go to our state machine.
>
> **[5:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=300)** Let's go here to new execution.
>
> **[5:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=304)** You have to input what you have and we can start the execution.
>
> **[5:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=309)** The input is exactly the same as before.
>
> **[5:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=312)** We are not yet working on that.
>
> **[5:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=314)** And now we need to wait for a little bit for the transcription to finalize.
>
> **[5:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=319)** And then we will see how the parallel works.
>
> **[5:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=325)** So now our state machine complete.
>
> **[5:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=327)** And you can see here the parallel has two branches and they are both in green, so everything is good.
>
> **[5:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=333)** And then if we go back to our results folder, we should see the poem here and we can download it.
>
> **[5:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=339)** This can be quite a mess because sometimes generative AI is not that great at making poems.
>
> **[5:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=346)** But, well, let's see.
>
> **[5:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=348)** Let's open this with Firefox and see what happens inside the completitions.
>
> **[5:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=355)** If we go to text, well, has the functions of a workflow service.
>
> **[5:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=359)** So it didn't make much of a poem, but (chuckles) you can play with this and see what happens.
>
> **[6:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=366)** But you might need to tweak the prompt that you pass.
>
> **[6:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-with-amazon-bedrock?u=76281980&t=372)** So here is the prompt that we have passed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** parallel (11), prompt (9), next (2), functional (1), [[Generative AI]] (1)
> **Env Vars:** uri (4), yawl (1)
> **UI Navigation:** go to (5)
> **CLI Commands:** make (4)
> **Tools:** terminal (1), firefox (1)
> **Analogies:** similar to (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### What is event-driven architecture?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=0)** - [Instructor] Have you noticed that we have been inputting the file name and the location manually every time we want to run the workflow?
>
> **[0:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=8)** Wouldn't it be great if the workflow starts every time you upload a new file to the bucket?
>
> **[0:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=15)** Here is where adding some event-driven characteristics might help us out.
>
> **[0:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=20)** In this video, let's look at a brief introduction of what event-driven architectures are.
>
> **[0:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=27)** Event-driven architecture is an architecture style that uses events and asynchronous communication to loosely couple an applications component Event-driven architectures can help you to boost agility and build reliable scalable applications.
>
> **[0:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=42)** Before getting started with event-driven architectures, it's important to understand the difference between tight and loose coupling.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=50)** Coupling is the measure of dependency each component of an application has on one another.
>
> **[0:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=56)** For example, a component needs to call another in order to complete its task and the order in which things are called matter.
>
> **[1:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=66)** Tightly coupled systems can be particularly effective if the application has few components or if a single team or developers owns the entire application.
>
> **[1:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=77)** However, when components are more tightly coupled, it becomes increasingly likely that a change or operational issue in one component will propagate to others.
>
> **[1:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=88)** For complex systems with many teams involved, having a system that is tightly coupled can have drawbacks.
>
> **[1:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=95)** When components are tightly interdependent, it can be difficult and risky to make changes isolated to a single component without affecting others.
>
> **[1:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=106)** This can slow development processes and reduce the feature velocity.
>
> **[1:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=111)** Tightly coupled components can also affect an application scalability and availability.
>
> **[1:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=116)** If two components depends on one another, a synchronous responses, a failure in one will cause the other to fail.
>
> **[2:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=124)** These failures can reduce the application overall fault tolerance.
>
> **[2:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=129)** For example, an e-commerce application might have multiple services: orders, billing, shipping, inventory, and make a synchronous change of calls between the services.
>
> **[2:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=141)** A failure in one of those services will impact all the others.
>
> **[2:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=147)** Reducing the coupling is the art of reducing interdependency between components and the awareness each component must have of one another.
>
> **[2:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=158)** Event-driven architectures achieve loose coupling through asynchronous communications via events.
>
> **[2:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=165)** This happens when one component doesn't need another to respond.
>
> **[2:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=170)** Instead, the first component might send an event and continue without impact should the second component delay or fail.
>
> **[2:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=179)** When communicating with events, components only need to be aware of the independent events.
>
> **[3:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=186)** Then, they require knowledge of transmitting component or any other components behavior like error handling or retrial logic.
>
> **[3:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=194)** So, as long as the event remains the same, changes in a single component won't impact the others.
>
> **[3:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=203)** This allows making changes to an application less risky.
>
> **[3:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=207)** When asynchronous events abstracts components from one another, complex applications become more resilient and maintainable.
>
> **[3:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=216)** For example, in this case, we have event producers and event consumers all connected using an event broker.
>
> **[3:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=223)** We are going to see more about event brokers a little bit when we play with event bridge.
>
> **[3:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=230)** The benefits of event-driven architectures are a shift in mindset is required when building an event-driven architecture due to the unique characteristics and considerations of asynchronous systems.
>
> **[4:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=242)** Build and deploy applications independently in loosely coupled applications.
>
> **[4:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=248)** Development teams working on individual services have fewer dependencies.
>
> **[4:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=253)** Changing one service will have less risk on impacting others.
>
> **[4:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=257)** Build new features using events without changing existing applications.
>
> **[4:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=262)** Extend your applications since components emit events, event-driven architectures can easily be extensible.
>
> **[4:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=269)** Events can also be analyzed for business reports and audits if needed.
>
> **[4:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=274)** Scale and fail components independently in loosely coupled components.
>
> **[4:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=279)** Applications with loosely coupled components have fewer single points of failure as well as increased resiliency.
>
> **[4:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=287)** Event-driven architectures possess three key components.
>
> **[4:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=290)** Event producers that publish events, for example, it can be websites, microservices, internet of things devices, AWS service, or software as a service applications.
>
> **[5:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=304)** Event consumers are the downstream components that get activated when events arrive.
>
> **[5:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=310)** Multiple consumers may be found in the same event.
>
> **[5:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=314)** Consuming events include starting workflows, running analysis, updating databases, doing some kind of compute.
>
> **[5:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=323)** Event brokers mediate between producers and consumers of events.
>
> **[5:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=327)** They grab the events and know where to route them into the event consumers.
>
> **[5:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=333)** Usually these include event routers that push events to target and event stores from which consumers can pull events.
>
> **[5:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=341)** And finally, we have the event concept, that is something we have been mentioning a lot in this video.
>
> **[5:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=348)** An event is the signal that something changed in our system, something changed in the state of our system.
>
> **[5:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=355)** For example, a shopping cart, or some order, or a credit card application, whatever.
>
> **[6:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=363)** Events occur in the past, like the order is created, the application submitted, and they're immutable, they cannot be changed.
>
> **[6:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=372)** This helps in distributed systems because there are no change in components to keep in sync.
>
> **[6:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=380)** Events are observed and not direct.
>
> **[6:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-event-driven-architecture?u=76281980&t=382)** A component emits an event with no particular destination in mind, nor aware of the downstream components that might consume the event.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (9), teams (2), feature (1), [[Scalability]] (1), [[E-Commerce]] (1)
> **Analogies:** for example (5)
> **CLI Commands:** make (2), aws (1)
> **Env Vars:** aws (1)
> **Definitions:** is an  (1)
> **Warnings:** be aware (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### How to trigger a state machine when there is a new S3 file
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=0)** - [Instructor] Great!
>
> **[0:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=1)** Now you know a bit about event-driven architectures.
>
> **[0:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=5)** Why we want our systems to react to events that are happening.
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=9)** So, how you can trigger a step function workflow to react to those events?
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=16)** There are many ways to invoke a workflow.
>
> **[0:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=19)** You can do it by calling an API and integrating it directly to API gateway.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=25)** Or from other services, like running Lambda function using the AWS SDK, and invoking the Step machine.
>
> **[0:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=33)** Or you can add it as a target of an EventBridge rule to react when there is something going on, like an event happening on our state machine inbox.
>
> **[0:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=46)** In our example, we want to trigger the workflow every time that there is a new file in a particular bucket.
>
> **[0:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=53)** So for that, we need to add an EventBridge rule that targets that workflow when there is a new object in the bucket.
>
> **[1:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=62)** This might sounds a little scary, but it's very simple to do, and let's see how to that in the code.
>
> **[1:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=71)** So let's go to our code here.
>
> **[1:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=73)** And the first thing we want to do is to modify the template.yml.
>
> **[1:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=79)** So we have this bucket that we created quite early on in this course, this InputBucket.
>
> **[1:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=86)** It's here.
>
> **[1:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=88)** And for that, we need to add a little bit of configuration.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=94)** The configuration we are going to add is the NotificationConfiguration with EventBridge.
>
> **[1:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=100)** So this, what we we'll do is, we'll enable the notifications to EventBridge, it will send events to the EventBridge.
>
> **[1:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=109)** The EventBus was that something has happened in this packet.
>
> **[1:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=112)** Either a file has been created, deleted, modify, or whatever, so now our bucket is omitting events, something happened.
>
> **[2:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=122)** We now need to modify our workflow to get trigger when there is a new change in that bucket.
>
> **[2:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=131)** So let's go here, under Policies, and let's create a new attribute that says Events.
>
> **[2:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=141)** And here under Events, we can add the new event.
>
> **[2:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=146)** And this is an S3MediaTrigger, we can put any name we want.
>
> **[2:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=150)** From the Type, EventBridgeRule.
>
> **[2:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=153)** And we are listening to the default EventBus.
>
> **[2:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=157)** There is many EventBuses that we can configure in EventBridge, for our particular case, we care about the default one.
>
> **[2:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=165)** And the Pattern that we are listening of the event is aws.s3.
>
> **[2:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=170)** The object has been created in the InputBucket.
>
> **[2:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=174)** That is the one that we have here.
>
> **[2:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=177)** And in the directory uploaded, we don't have that directory yet.
>
> **[3:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=182)** So you can go and create it in your bucket.
>
> **[3:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=185)** I already have done it, and uploaded the file there so we can test faster.
>
> **[3:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=191)** So this is the directory, uploaded, and the file.
>
> **[3:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=195)** And whenever we have a new file in this directory, then the state machine will trigger.
>
> **[3:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=204)** This is great, but we need to do one more change into our state machine in order to make sure that everything is working, and that is to work to store the transcribed file.
>
> **[3:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=217)** 'Cause now we are just grabbing this name from the input.
>
> **[3:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=223)** And if we continue in this line, what will happen is that the name of the input will be 'uploaded.', whatever the file name is, and that's not what we want.
>
> **[3:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=232)** We want to clean it up a little bit.
>
> **[3:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=236)** So I will do a little bit of data transformation here and use a little bit more intrinsic functions, where I'm formatting the output key to be stored in transcribed directory.
>
> **[4:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=249)** And we are basically splitting the string that we get from the details.
>
> **[4:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=254)** And we are just getting the first part, that is basically the position 0 is uploaded and the position 1 is the name of the object.
>
> **[4:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=264)** So that's what we are getting, and we are pasting it here.
>
> **[4:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=268)** So now with this, we can then do some deploy.
>
> **[4:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=274)** And these will modify our infrastructure, will modify our packet, and it will modify our state machine.
>
> **[4:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=283)** So you can see here that we have the new trigger.
>
> **[4:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=289)** That we are adding is an AWS rule.
>
> **[4:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=292)** We are adding also a role for that, and we are modifying the input bucket.
>
> **[5:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=301)** So now the stack has been deployed, we can go to our state machine.
>
> **[5:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=308)** And now we don't need to trigger it, it'll just trigger automatically.
>
> **[5:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=312)** So I'll zoom this out a little bit so you can see the new execution coming in.
>
> **[5:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=319)** And then I will go to the bucket.
>
> **[5:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=322)** And here, we are going to upload it.
>
> **[5:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=326)** I already uploaded the file, so I will just rename this file a little bit.
>
> **[5:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=331)** So then the notification will get trigger, and this will create an object, create that notification.
>
> **[5:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=337)** So I will have saved that change.
>
> **[5:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=341)** And now we should see that the state machine is running.
>
> **[5:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=346)** So if you don't see it, just refresh.
>
> **[5:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=348)** And you can see it that it's running.
>
> **[5:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=349)** You don't need to create and start an execution every time.
>
> **[5:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=353)** And if you click on the running state machine, you'll see the workflow that you're familiar with.
>
> **[6:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=360)** And you can see here the execution, input and output.
>
> **[6:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=364)** So this has quite a lot of information, but if you remember the input that you have saved to work initially, it has this structured detail bucket.
>
> **[6:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=377)** The name of the bucket, object, the key.
>
> **[6:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=381)** So this is exactly the same format that we had before, with more information, but the rest of the information is being ignored by the state machine.
>
> **[6:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=391)** So we need to wait a little bit for this to complete, but it will complete successfully.
>
> **[6:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=397)** And now everything will get stored in its directories.
>
> **[6:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=401)** So now we have the results in the result folder, the transcriptions in the transcribed folder, and the uploaded in the upload folder.
>
> **[6:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=410)** We can remove this.
>
> **[6:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=412)** We don't need it here anymore.
>
> **[6:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=416)** And everything should be now in its own directory.
>
> **[6:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=419)** Why this is good, because then we make sure that everything, it's inside the directory, so if we create new files here, this will trigger the state machine.
>
> **[7:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=428)** But because everything is going to be stored in its own directory, it will not trigger the state machine.
>
> **[7:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-trigger-a-state-machine-when-there-is-a-new-s3-file?u=76281980&t=434)** So good. Now we have completed. This is done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), aws (3), api (2), [[Data Transformation]] (1), [[Zoom]] (1)
> **CLI Commands:** aws (3), make (2)
> **Env Vars:** api (2), aws (2), sdk (1)
> **UI Navigation:** go to (3), click on (1)
> **Definitions:** is a  (2), is an  (2)
> **File Paths:** template.yml (1)
> **Exercise Files:** template (1)
> **Prerequisites:** configure (1)

#### How to send an email from the state machine
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=0)** - [Instructor] Now you know how to trigger the workflow automatically from an event when a new object is uploaded to the S3 bucket.
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=9)** But what about getting a notification when the workflow ends, like an email?
>
> **[0:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=14)** We can easily make the workflow send notifications in the form of an event breach event or an email using the Amazon Simple Notification Service, SNS.
>
> **[0:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=26)** In this video, I will show you how you can do the second one, like sending an email, and you're going to send a notification email to yourself when the poem is created.
>
> **[0:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=39)** So, in order to do that, first we need to create the resources in our infrastructure.
>
> **[0:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=44)** We are going to use SNS.
>
> **[0:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=46)** SNS is a service that allow us to send notifications.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=50)** It can be in the form of push notifications or emails or just notifications into a topic that some system or third party service can read.
>
> **[1:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=60)** In our case, we are just sending an email.
>
> **[1:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=64)** So it's very simple to create a notification topic.
>
> **[1:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=67)** We just build that notification, the topic, and then we add a subscription.
>
> **[1:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=72)** And in this case, we are going to use email, so I'm going to add a subscription email.
>
> **[1:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=78)** And I'm going to use a parameter, so we can define this email in our parameters file, and I don't need to put it in the infrastructure as code.
>
> **[1:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=87)** So now, the next time you deploy this, you do some deploy --guided as you did in the first time, and you will get the prompt to put the email.
>
> **[1:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=97)** You will see it in a second.
>
> **[1:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=99)** So now, when we have the notification here, we have the email, then the next step is to give permissions to the state machine to put a message into that topic.
>
> **[1:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=113)** So we are going to the policies, and we are going to use one managed policy to publish a message into that topic.
>
> **[2:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=124)** So, that's the whole thing that we need to do in our infrastructure.
>
> **[2:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=129)** Then, we need to modify a little bit our state machine.
>
> **[2:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=133)** We want to add, after the poem is generated, that the notification is sent.
>
> **[2:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=138)** So, what we are going to do is we are going to create a new state at the end of everything.
>
> **[2:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=146)** So let's look for the poem. This is the branch of the poem.
>
> **[2:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=151)** So, after we invoke Bedrock somewhere here, we are going to send email notifications.
>
> **[2:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=159)** So we need to change this to be something like this.
>
> **[2:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=166)** And now, we are going to send this email notification that is calling the API, SNS published a message to the topic, and the topic, ARN, is something that we need also to pass to our state machine and that we do in our infrastructure.
>
> **[3:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=187)** I forgot, it's important.
>
> **[3:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=189)** So in the definition substitutions, you just send the notification topic that you just created here.
>
> **[3:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=199)** And now it'll be appearing here.
>
> **[3:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=202)** And the message is, "A new poem has been created.
>
> **[3:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=207)** "Check the S3 bucket for more info."
>
> **[3:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=210)** We could send here the link to the load, the file, but we need to add more logic and more data transformation into this workflow in order to do that.
>
> **[3:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=220)** If you want to do it, go ahead and do it.
>
> **[3:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=223)** In the resources of this course, I will leave you links with GitHub repos that does that, so if you want to go and check it out, it will be there.
>
> **[3:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=232)** But for now, let's just make this notification.
>
> **[3:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=236)** So now, we do sam deploy, and then we put --guided, and here we are going to be prompt our configurations, so I will be putting the stack name.
>
> **[4:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=250)** I just push enter to confirm everything, and here we have the email.
>
> **[4:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=256)** So I will put the email and then I will move forward with confirming everything.
>
> **[4:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=263)** And now, the next time we deploy, we don't need to run the configuration.
>
> **[4:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=267)** It's just this time, because we modify the parameters.
>
> **[4:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=272)** So now we wait for these to complete, and then we can move forward.
>
> **[4:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=280)** Good, now our step function is deployed and our infrastructure, we can go back to our state machine.
>
> **[4:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=289)** We can refresh this.
>
> **[4:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=291)** Let's see if the definition is already refreshed, and we can see that we have the email there.
>
> **[4:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=298)** So before moving on, you might need to go to your email, and you might need to confirm your subscription.
>
> **[5:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=306)** You will get something like this in your email, and you press confirm subscription, and that will make sure that you receive the emails that SNS will send you.
>
> **[5:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=317)** So now we can test, and to test, you might need to go again to your uploaded folder and rename this file.
>
> **[5:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=326)** Or then you can pass whatever we were passing in the past, that will also work.
>
> **[5:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=331)** So I would just save this.
>
> **[5:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=333)** This will trigger the state machine.
>
> **[5:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=337)** So we can go in executions, and we can see that one execution is running.
>
> **[5:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=342)** And we can wait for all these to complete until we get the email notification, so this takes a few minutes, and then you should check your email and see that email notification appearing.
>
> **[5:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=358)** Good, it's completing.
>
> **[6:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=361)** So you should see the notification when this finish uploading.
>
> **[6:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=366)** If it didn't, you just wait for a few seconds.
>
> **[6:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=370)** Good, and you should get an email that looks something like this.
>
> **[6:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=374)** The new poem has been created.
>
> **[6:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=376)** Check the S3 bucket for more information.
>
> **[6:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/how-to-send-an-email-when-from-the-state-machine?u=76281980&t=378)** So, that's the email.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), prompt (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (1), api (1), [[Data Transformation]] (1)
> **Env Vars:** sns (5), api (1), arn (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Integrate to EventBridge event bus to send an event
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=0)** - [Instructor] In this challenge, I want you to send an event from the workflow to an EventBridge event path when the translated summary is ready.
>
> **[0:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=15)** For doing this, you will need to add a new state to the workflow to send this message as you did when you sent an email in the previous video.
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=23)** This is how the workflow should look after you finish this challenge.
>
> **[0:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=29)** Here is the information you need in order to create the task event to put an EventBridge event.
>
> **[0:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=35)** The API name is the one that you can see in the screen, and these are the parameters that you can copy and paste them into the workflow and add whatever you want in the message.
>
> **[0:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=46)** Don't forget to give permissions to the workflow to put events in EventBridge.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=50)** Here is the managed policy you need to use in order to do that.
>
> **[0:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=55)** To test this, you will need to create an EventBridge rule that matches that event.
>
> **[1:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=61)** So when an event with some of the properties that we are interested come in, it match against that particular rule.
>
> **[1:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=69)** Then you can add a target to that rule.
>
> **[1:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=72)** In this case, we can add a CloudWatch log group.
>
> **[1:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=75)** So a log entry will appear in the log group every time the rule matches.
>
> **[1:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=80)** Let me show you how to modify the template YAML so you can do the testing in your example.
>
> **[1:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=88)** So here we have our code.
>
> **[1:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=89)** It's the template YAML with the bucket notification topic on the state machine.
>
> **[1:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=96)** And now we need to add a couple of more things.
>
> **[1:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=99)** The first thing we want to add is the testing rule.
>
> **[1:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=101)** So we can add it somewhere here.
>
> **[1:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=105)** And this is an EventBridge rule with a event pattern.
>
> **[1:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=109)** So basically everything that matches this source will be matching against this rule.
>
> **[1:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=114)** So when you create your rule, make sure that the source of the rule is this one.
>
> **[2:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=120)** You can create other pattern matching techniques, but let's keep it simple.
>
> **[2:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=124)** And then let's have a target, and in this case, the TestingLogGroup.
>
> **[2:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=128)** We have not created that one yet.
>
> **[2:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=130)** So let's create a CloudWatch log group.
>
> **[2:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=133)** Let's put it here.
>
> **[2:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=135)** So the target for this rule is whenever our event comes in, it matches this rule and then it puts a message in this log group, CloudWatch log group.
>
> **[2:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=146)** And the only thing we need to do is to give a name.
>
> **[2:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=149)** One important thing that we are missing, and this is something you might need to copy paste because it's a kind of lot of JSON, is the permissions.
>
> **[2:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=159)** So because EventBridge needs permissions in order to write and create the log streams, you need to give permissions to EventBridge to do that.
>
> **[2:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=169)** So we will create a policy.
>
> **[2:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=171)** This is a policy that allows EventBridge to put the log streams and to put the logs into the log group we just created.
>
> **[3:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=181)** So you can see that this policy has two parts.
>
> **[3:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=183)** The first one is to create the log streams that allows EventBridge to create the log streams into that log group that we just created here.
>
> **[3:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=195)** And the second one is allowing EventBridge to put logs into that log group.
>
> **[3:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=201)** And the thing is that we want to make sure is that the rule matches the one that we just created.
>
> **[3:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=207)** So this is a condition.
>
> **[3:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=209)** You can remove this if you want, but with all this now, you should be able to do the challenge.
>
> **[3:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=215)** So in the next video, I will show you how I solve this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (1), [[JSON]] (1), next (1)
> **Env Vars:** yaml (2), api (1), json (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1), in the next (1)
> **Exercise Files:** template (2)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Solution: Integrate to EventBridge event bus to send an event
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=5)** - [Instructor] So let me show you how I solved this challenge.
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=9)** So the first thing you need to do is to add the infrastructure that I showed you when I presented the challenge, the TestingRule, the LogGroup and the permissions for EventBridge to put logs into the LogGroup and to create log streams.
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=23)** So you should have that.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=25)** Then I mentioned that you need to give permissions to the StateMachine to be able to put events into EventBridge.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=34)** So that's what we are going to do.
>
> **[0:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=36)** So in the template.yml, we go to our workflow and in there, we will use a managed policy that looks something like this.
>
> **[0:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=45)** It's called EventBridgePutEventsPolicy.
>
> **[0:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=47)** And the name of the bus is the EventBus for default.
>
> **[0:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=51)** That's where we want to put our events.
>
> **[0:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=54)** Then we want to create the new state.
>
> **[0:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=57)** So we go to statemachine and we look for where we want the state to be.
>
> **[1:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=63)** So we want it to be in the summary.
>
> **[1:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=67)** So after we translate the text and we invoke Bedrock, so it's in the branch of Translate Text.
>
> **[1:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=73)** So let's go down after we invoke Bedrock and somewhere here, we will create our new state.
>
> **[1:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=83)** And this state will be putting events in EventBridge.
>
> **[1:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=86)** So we need to change the previous step to do a Next and that it goes to the right place.
>
> **[1:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=96)** And then here, always make sure that your indentation is correctly 'cause this is YAML and YAML is always a problem if you have wrong indentation.
>
> **[1:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=107)** So our new state is a Task state and the API is the one that you had in the examples of this challenge.
>
> **[1:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=116)** And the parameters are the ones that I gave you.
>
> **[1:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=119)** So the detail, it's a message and in this case, I'm just passing the file name.
>
> **[2:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=125)** You can pass whatever you want.
>
> **[2:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=126)** The DetailType is the execution name.
>
> **[2:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=129)** The EventBus is default and the source is the StateMachinePutEvent.
>
> **[2:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=133)** And in here, you need to really make sure that the source matches the one that you put in the rule definition.
>
> **[2:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=140)** If not, then this will never match.
>
> **[2:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=142)** So this needs to be exactly the same.
>
> **[2:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=145)** And with this in place, now you can go to your console and test it and do sam deploy.
>
> **[2:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=152)** And then this will deploy the StateMachine with all the rules and everything you created into the cloud, and then you're ready to test.
>
> **[2:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=163)** So I already deployed it before this, so we can speed it up and we can see the StateMachine here.
>
> **[2:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=171)** We can start a new execution or we can re-upload the object in S3.
>
> **[2:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=178)** You pick that.
>
> **[2:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=179)** I will start a new execution by providing the input that we have saved so it works in a similar way.
>
> **[3:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=187)** Then packet name and the object key.
>
> **[3:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=190)** And then while this executes, I can show you a little bit of what happened in the EventBridge side.
>
> **[3:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=196)** So we have here EventBridge.
>
> **[3:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=198)** So if you have never used it, you should search in the box EventBridge and you will be taken into this window.
>
> **[3:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=205)** And then if you go down, you can go to rules.
>
> **[3:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=210)** And in here, you need to make sure that you are in the default bus.
>
> **[3:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=213)** And you can see the rule that we created.
>
> **[3:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=218)** You can see here that the event pattern is the source.
>
> **[3:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=221)** So it only needs to match events with this source exactly like this.
>
> **[3:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=227)** And then if we go here, we have the target.
>
> **[3:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=230)** And the target is a CloudWatch log group.
>
> **[3:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=233)** And here you can find the ARN for it.
>
> **[3:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=236)** So if we click on the log group, it'll open it.
>
> **[3:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=238)** I already tested this, so there should be some messages in that log group, but we can test it together in a second when the StateMachine finish executing.
>
> **[4:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=249)** So you can see that there are different log streams because we gave permissions to EventBridge to create log streams.
>
> **[4:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=256)** And then inside the log streams, there are log events that also EventBridge has permissions to put.
>
> **[4:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=262)** And the events look something like this.
>
> **[4:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=264)** You can see that there are the events coming from the StateMachine.
>
> **[4:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=268)** It shows all the information from the StateMachine that we wanted.
>
> **[4:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=274)** And the message is that URL from S3, and we can wait for a second to this finish executing.
>
> **[4:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=282)** Now it finish.
>
> **[4:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=283)** You can see here that the event has been put and here we can see the definition and the output and all this information.
>
> **[4:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=293)** So if we refresh, well, it's actually here.
>
> **[4:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=296)** It already refresh it for us and we can click and we can see that the event is exactly the same.
>
> **[5:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-integrate-to-eventbridge-event-bus-to-send-an-event?u=76281980&t=303)** So this is the solution for the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1), api (1), cloud (1), [[Search]] (1)
> **Env Vars:** yaml (2), api (1), arn (1), url (1)
> **UI Navigation:** go to (4), click on (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2)
> **File Paths:** template.yml (1)
> **Exercise Files:** template (1)
> **Best Practices:** always make sure (1)


### 6. Build a Chatbot with GenAI

[↑ Back to Table of Contents](#table-of-contents)

#### What is an Amazon Bedrock agent?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=0)** - [Instructor] In the first project of this course, you learn how to create a workflow to orchestrate your application.
>
> **[0:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=7)** You program that orchestrator using step functions.
>
> **[0:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=11)** You decide what was needed to call, in what order, with which parameters, you manually program all the data transformation that was needed in order to call those services.
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=23)** What if you could use generative AI to orchestrate all those calls and do that for you?
>
> **[0:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=29)** In this part of the course, you are going to learn how you can do that.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=34)** For that, the first thing you need to know is that you're going to use an agent.
>
> **[0:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=40)** An agent is trying to mimic human behaviors.
>
> **[0:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=43)** Like traditional applications, these agents don't follow a script.
>
> **[0:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=47)** They can remember, retrieve, and interact with different systems.
>
> **[0:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=52)** Based on what the user ask them to do, they will decide the calls and the data transformations to the different services and databases by using reasoning.
>
> **[1:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=63)** Agents are ideal for synchronous communications between users and machines.
>
> **[1:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=68)** As the user can ask the agents to do many things and the agents can return the answer to the users.
>
> **[1:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=76)** For example, agents are very good at doing customer service roles or to be sales representative, or to help customers to answer questions that they need to access, for example, to organization data that the model is not trained with.
>
> **[1:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=90)** These agents, for example, can book flights, file insurance claims, order replacement parts by interacting with different company systems.
>
> **[1:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=100)** When working with Amazon Bedrock, you can build Bedrock agents.
>
> **[1:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=105)** Bedrock agents plan and execute a multi-step task by calling different APIs and looking into different data sources.
>
> **[1:54](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=114)** In this section, you'll learn how to create a Bedrock agent.
>
> **[1:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=119)** Bedrock agents analyze the request that the user makes, create a plan on how to orchestrate all the different calls, and then performs all the actions to fulfill the user's request.
>
> **[2:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=131)** When working with Bedrock agents, you can do all these without engineering prompts, managed session context, or manually connecting the systems, and sometimes it feels a little bit like magic.
>
> **[2:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=144)** Because it feels like magic, Bedrock agents gives you visibility on the chain-of-thought, reasoning for transparency.
>
> **[2:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-agent?u=76281980&t=152)** With this, you can also troubleshoot the agent and modify the configuration for better responses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), application (1), [[Data Transformation]] (1), [[Generative AI]] (1), [[Databases]] (1)
> **Analogies:** for example (3)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### What you are going to build
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=0)** - [Presenter] Great!
>
> **[0:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=1)** You're going to build an agent, but what really are you going to build?
>
> **[0:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=6)** In this video, you will learn a little bit more of the architecture of the agent you're going to be implemented in this project.
>
> **[0:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=13)** Your agent will be a weather agent.
>
> **[0:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=15)** You can ask questions to the agent about like, what is the weather for today in a particular city?
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=23)** Or you can ask similar questions of what is the weather forecast in the next five days for a particular city?
>
> **[0:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=30)** And the agent will get an answer to you in a friendly way that is readable, that is nice, and that it displayed good, so not adjacent.
>
> **[0:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=40)** You are going to build this using an Amazon Bedrock agent and an Amazon Bedrock knowledge base and AWS Lambda functions.
>
> **[0:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=49)** A knowledge base in a nutshell is a data source of proprietary information that your agents can access to answer some query that the user has.
>
> **[0:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=58)** But don't worry if you don't understand what it is.
>
> **[1:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=60)** We have a whole video dedicated to knowledge bases.
>
> **[1:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=64)** The agent will connect to the knowledge base and to the function to resolve the query that the customer has.
>
> **[1:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=71)** Our agent will respond to two types of queries, as I show you: the weather for a location right now, for today, and the weather for a location in the next five days.
>
> **[1:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=82)** Each of these questions will be answered by calling a different API as the agent doesn't have access to the internet directly to figure this out by himself.
>
> **[1:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=93)** For that, the agent will call Lambda function and that function will call an external service to get the weather.
>
> **[1:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=101)** The cost to third-party service are very specific, and the agent needs to know how to populate all the different parameters that the function needs in order to call that weather service.
>
> **[1:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=111)** For that, every functionality that the agents needs from the Lambda functions needs to be defined with an OpenAPI schema.
>
> **[1:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=119)** In our example, our OpenAPI definition will have two APIs defined: one for the weather today and one for the weather forecast in the next five days.
>
> **[2:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=129)** In that schema definition, you will find all the inputs and output parameters for each of the functionalities.
>
> **[2:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=136)** You will see how this is done later in this section.
>
> **[2:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=140)** In our example, the third-party API takes us an input a latitude and a longitude.
>
> **[2:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=145)** To make it easier for the user, we want the user to ask for the weather using the city name and the country as nobody really knows the latitude and longitude of the different cities.
>
> **[2:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=156)** Here is where the knowledge base comes into play.
>
> **[2:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=159)** The knowledge base will have a list of all the cities with its latitude and longitude.
>
> **[2:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=164)** When they use a request the weather forecast for a city, the agent will go and fetch the latitude and longitude for that city from the knowledge base before calling the Lambda function.
>
> **[2:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=175)** And it will pass to the Lambda function, only the latitude and the longitude instead of the city name.
>
> **[3:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=182)** And with all this in place, you will have a working agent.
>
> **[3:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-you-are-going-to-build?u=76281980&t=185)** Let's build it in the following videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), api (2), aws (1), data (1), [[Fetch]] (1)
> **Cross-References:** in the next (3), later in (1)
> **CLI Commands:** aws (1), find (1), make (1)
> **Env Vars:** api (2), aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### Creating a Lambda function for the agent
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=0)** - [Instructor] Now you know what an agent is, but we are not going to start building an agent yet, because the first step in order to have an agent is to develop the functions that the agent needs in order to fulfill the user request.
>
> **[0:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=17)** So our agent will be giving the weather for now.
>
> **[0:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=21)** That's one of the things that the user can request.
>
> **[0:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=24)** So we want to create a function that calls this external API to get the current weather for a particular location.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=34)** For doing this, we are going to use a service that is called Explore California (Weather), that is built by the LinkedIn team.
>
> **[0:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=43)** This is a fake weather service so the data that you will getting back looks weird if you know the place.
>
> **[0:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=48)** So don't panic, but it returns a five-day forecast for 7,000 cities around the world.
>
> **[0:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=56)** It's fake, but it works for the demo purposes.
>
> **[0:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=59)** I will leave you this PDF where you can find the API definition as an attachment so you can get it and you can see how it works.
>
> **[1:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=67)** And if you want to get the real values, you can see how easy is with the code that I'm providing you to exchange this API with a real API that gives you the weather.
>
> **[1:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=77)** So now that you know that, let's go to the project and start building.
>
> **[1:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=84)** So the first thing we want to do is to create a new directory.
>
> **[1:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=86)** I will call it project2.
>
> **[1:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=89)** And in here what I will do is I create the template.yml.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=94)** So I will put in the template.yml basically similar start that we had before and we will have one Lambda function for now.
>
> **[1:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=103)** This Lambda function will get the current weather for our user and it'll have the code based on the root directory of the project2 in a file called app in the method code handler.
>
> **[1:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=115)** So we can go and create that.
>
> **[1:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=119)** And you'll see that this function has some weird things and this is not something to be worried.
>
> **[2:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=127)** It's because of the integration with Bedrock.
>
> **[2:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=130)** So when we define these Lambda functions, you need to make sure that your Lambda functions get triggered and understand the event object that Bedrock is sending, and also can respond in a way that Bedrock can understand.
>
> **[2:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=145)** So I will leave you this link as well in the video's material where you can find what is the input that Bedrock will send to Lambda and also what is the response that Lambda should send to Bedrock.
>
> **[2:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=158)** But we'll see this in a second in more detail when we get started building our function.
>
> **[2:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=163)** So the first thing we are going to do is to use a third-party library called axios.
>
> **[2:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=168)** And this will allow us to call third-party libraries like this Get Weather API.
>
> **[2:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=173)** Then we are going to start building the handler.
>
> **[2:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=176)** And for that, we are going to get an event object.
>
> **[3:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=180)** If you want to know what is in your event object, you are always free to print it out in the console so you can see what is there.
>
> **[3:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=188)** We can get the apiPath.
>
> **[3:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=190)** And if you see this apiPath, it's in the input and it's here.
>
> **[3:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=197)** And this will tell us what is the API that Bedrock agent decided that wants to execute because we could have many functionalities inside one function.
>
> **[3:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=209)** So in this case, we can do if the Weather API is weather.
>
> **[3:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=215)** That's the one that we might want to direct this call.
>
> **[3:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=219)** Then we can get the latitude and the longitude from the parameters.
>
> **[3:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=223)** And again, these parameters are coming from these parameters that are here in the event object.
>
> **[3:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=230)** How I know which one is one and two?
>
> **[3:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=233)** We'll see it in a second when we define the API for this.
>
> **[3:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=237)** Then the next thing I'm going to do is to call the third-party API to get the weather, pass in that latitude, that longitude and the amount of days that I'm interested in getting.
>
> **[4:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=248)** Now it's one, it's the current weather and then I'm populating that response object with the weather for today.
>
> **[4:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=257)** Now let's build the response that the function will have.
>
> **[4:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=262)** So the response is this object called result.
>
> **[4:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=266)** And you can see that it's a very similar format that the one that is in the documentation.
>
> **[4:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=272)** A lot of these things in this result object comes from the event object itself.
>
> **[4:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=278)** So basically we are just passing it through the actionGroup, the apiPath, the httpMethod, all those are just basically getting from the event object and passing it to the response.
>
> **[4:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=288)** Then we can decide if this was a successful code, what is the response in this case, the weather for today.
>
> **[4:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=296)** And then if there is some sessionAttributes or promptSessionAttributes that we want to be aware.
>
> **[5:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=302)** Let's send that back to Lambda.
>
> **[5:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=304)** And this is done.
>
> **[5:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=307)** Well, kind of because we are missing the calling of the third-party API.
>
> **[5:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=312)** So let's add that.
>
> **[5:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=314)** And this is the part that you can replace with whatever API you're using.
>
> **[5:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=319)** If you don't want to use the fake one, don't use it, just use your own URL.
>
> **[5:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=324)** And here we just pass the latitude, the longitude, the amount of cities we want the result and the unit I wanted in Celsius.
>
> **[5:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=332)** And then we call the response.
>
> **[5:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=333)** And because this returns many days, I will just get the amount of days, it's an array.
>
> **[5:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=340)** If I want one day, I need to do one minus one.
>
> **[5:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=343)** So I get zero position and I will just return that back.
>
> **[5:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=348)** So now we have our function, we have our template.yml.
>
> **[5:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=353)** We are missing one thing that is to initialize this project 'cause this is a Node project and we might want to initialize it so then we can run the install axios.
>
> **[6:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=367)** This is a dependency, a third-party dependency that we need to have in our Node modules and our package.json before deploying so it works.
>
> **[6:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=376)** Now the next step is to deploy this and we would like to deploy it with sam deploy --guided and follow the steps as we have here.
>
> **[6:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=386)** So sam-linkedin-serverless-ai-project2
>
> **[6:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=394)** can be a good name.
>
> **[6:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=396)** Then the region is the one where you have enabled Bedrock or if you want to use a different region, make sure that you have enabled Bedrock.
>
> **[6:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=404)** But we have enabled it for this region in the previous exercise and now we go through all the defaults and we wait for this to deploy.
>
> **[6:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=415)** While this deploy, I will be creating a new file here called payload.jsonN.
>
> **[7:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=422)** And in here I want to put some testing data so we can test this function.
>
> **[7:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=429)** So this will be kind of brief event object that the Lambda will get from Bedrock, the weather API, the "httpMethod": "GET", the actionGroup we can call whatever we want.
>
> **[7:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=440)** And the parameters here for the city.
>
> **[7:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=444)** The city, if you don't know, it's Montevideo, Uruguay.
>
> **[7:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=447)** So we can test and invoke the API.
>
> **[7:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=451)** So now let's do that. Let's clear a little bit here.
>
> **[7:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=454)** The function has been deployed and we can do sam remote invoke.
>
> **[7:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=461)** That's just the stack name.
>
> **[7:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=462)** This is the stack name that you just created, the deployed.
>
> **[7:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=465)** If you don't remember it, you can always check it in your samconfig file.
>
> **[7:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=469)** It's there.
>
> **[7:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=470)** Then the event-file is that payload.json.
>
> **[7:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=473)** So make sure that your payload.json is inside the same directory.
>
> **[7:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=476)** And this is the name of the function, the GetWeatherFunction.
>
> **[8:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=480)** So let's click enter and this will invoke the function in the cloud.
>
> **[8:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=485)** And we can see here the response of the function.
>
> **[8:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=488)** So to make sure that it makes sense, it has the same format that what we expect.
>
> **[8:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=495)** And you can see here the response body, this is the date of today, the temperature, it doesn't make any sense because in Uruguay, it never gets to minus degrees, but well, maximum temperature, season minimal, season maximal, condition_name and you can see watch out for storms.
>
> **[8:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=512)** And there is some videos and things like that that we can see.
>
> **[8:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=515)** So this is working.
>
> **[8:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=518)** Now, you have a working function that takes a latitude and a longitude and returns a JSON with the weather for that city.
>
> **[8:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=524)** As you see, the JSON is not very friendly and it has a lot of information that we don't need.
>
> **[8:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=530)** But don't worry, let's see what kind of magic the agent can do in order to get a response that is friendly for the user.
>
> **[8:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-a-lambda-function-for-the-agent?u=76281980&t=537)** You will see it in the following videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (13), [[JSON]] (5), [[LinkedIn]] (2), data (2), next (2)
> **Env Vars:** api (13), json (2), pdf (1), url (1)
> **Code Identifiers:** apipath (3), actiongroup (2), httpmethod (2), sessionattributes (1), promptsessionattributes (1)
> **CLI Commands:** make (5), find (2), node (2)
> **File Paths:** template.yml (3), payload.json (2), package.json (1)
> **Definitions:** is a  (3), is called (1)
> **Exercise Files:** template (3)
> **Warnings:** be aware (1), watch out (1)

#### Creating an Open API for the function
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=0)** - [Instructor] You might be wondering how the agent knows which function to call and how to call it.
>
> **[0:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=6)** I told you that there is some magic involved, but honestly, there is just an API definition for this to work.
>
> **[0:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=13)** For the agent to know what is in the API, you need a file that defines that API so the agent will know how to invoke it and when to invoke it.
>
> **[0:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=24)** In this video, I will show you how to do that.
>
> **[0:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=27)** In order to fulfill the user request, the agent will call one or more Lambda functions.
>
> **[0:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=32)** But in order to do so, it needs to understand what each function does, what parameters the function needs as an input, and what it produce as an output.
>
> **[0:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=41)** For doing that, Amazon Bedrock agents use open API definition that you can write for each of your Lambda functions.
>
> **[0:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=48)** So let's do that.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=50)** The first thing we want to do is to create a new file, called whatever you want, but I will call it openAPI.json.
>
> **[1:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=62)** So this file will have the definition for our open API.
>
> **[1:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=66)** It's a json as the title says, and it has some structure.
>
> **[1:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=70)** If you want to learn more, just search in the internet for the definition.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=74)** This is standardized definition.
>
> **[1:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=75)** And the first thing we want to do is to write the info about the API.
>
> **[1:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=82)** title, Weather Agent API, descriptions, exposes the weather agent functionality.
>
> **[1:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=88)** And then the interesting bits is the paths.
>
> **[1:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=92)** So the path is for each of our API path that you remember that when we created the app, we have here this API path.
>
> **[1:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=102)** So for each of those, we need to have a definition.
>
> **[1:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=108)** And then we can define if it's a get or something, but let's keep it with the get.
>
> **[1:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=113)** So here, the first important thing is to have a description of the API path.
>
> **[1:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=119)** We are using generative AI, and generative AI looks at texts like human will do.
>
> **[2:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=125)** So here, descriptions becomes very, very important.
>
> **[2:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=128)** And this is something you can keep on tweaking and exploring if the definition doesn't help you.
>
> **[2:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=134)** This one, I put gets the weather for today for a specific latitude and longitude that represents a city.
>
> **[2:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=140)** The next thing we want is the parameters.
>
> **[2:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=142)** So the parameters are another very important thing that we need to define for each of our API paths.
>
> **[2:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=151)** Do you remember that I told you that we have parameter one is the latitude, and parameter two is the longitude.
>
> **[2:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=157)** Well, it comes from here.
>
> **[2:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=159)** Parameter one is the latitude, and then parameter two is the longitude.
>
> **[2:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=164)** This is how Bedrock and the Lambda will know in which order they are.
>
> **[2:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=170)** And again here, the description is very, very important.
>
> **[2:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=173)** Just make sure that you state what is this parameter.
>
> **[2:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=179)** And then finally the response.
>
> **[3:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=181)** And this is the final bit of our definition.
>
> **[3:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=185)** We have one API.
>
> **[3:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=186)** So here in the response, we will say the description is very important.
>
> **[3:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=190)** What is that we are returning?
>
> **[3:12](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=192)** Today's weather description for the given city.
>
> **[3:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=195)** We can be more descriptive, yes, but yeah, that's what it is.
>
> **[3:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=198)** And then because we are returning a json, we want to make sure that we are returning it in that format.
>
> **[3:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=207)** So now we are ready.
>
> **[3:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=209)** We have our API definition here.
>
> **[3:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=212)** And what we can do is upload it to the cloud.
>
> **[3:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=217)** So, there is many ways to do it, but I would like to create a bucket for this particular purpose.
>
> **[3:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=223)** So I will be creating a new S3 bucket, and I will create it in the infrastructure so then it's easy to remove.
>
> **[3:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=230)** And I will call this bucket Agent Bucket.
>
> **[3:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=235)** So let's create it here.
>
> **[3:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=237)** And this bucket will have a name, and the name, it will come from your parameters because you know buckets need to have a unique name.
>
> **[4:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=246)** And if I give one here and then you deploy this file, it will fail.
>
> **[4:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=250)** So when we create this, we were going to do some deploy that's just guided again, because we want these parameters to update.
>
> **[4:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=260)** We can then, here, put the bucket name that we want.
>
> **[4:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=265)** Feel free to do whatever you want.
>
> **[4:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=266)** I will put this one.
>
> **[4:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=268)** You cannot use it because I might have this one already owned by me.
>
> **[4:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=272)** And then we say yes to all the defaults.
>
> **[4:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=275)** This will update the configuration and create the bucket and will not touch the Lambda function because we have not touched it.
>
> **[4:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=282)** And then when the bucket is created, we can upload that openAPI.json file, and we are ready to continue with our agent.
>
> **[4:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=291)** So, let's wait for this to deploy.
>
> **[4:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=295)** So we have our bucket in place.
>
> **[4:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=299)** And now that is created, let's upload that open API file to the bucket.
>
> **[5:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=306)** To do so, you can run this command, aws S3 cp, copy the API json to that bucket, and that will make the trick for you, upload the file into the bucket.
>
> **[5:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-open-api-for-the-function?u=76281980&t=316)** And if you go to your AWS console, you will see it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (15), [[JSON]] (5), [[Generative AI]] (2), aws (2), [[Search]] (1)
> **Env Vars:** api (15), aws (1)
> **CLI Commands:** make (3), aws (2), cp (1)
> **File Paths:** openapi.json (2)
> **Code Identifiers:** openapi (2)
> **Tools:** aws console (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### What is an Amazon Bedrock knowledge base?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=0)** - [Instructor] In a previous video, I mentioned knowledge bases.
>
> **[0:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=3)** Let's explore what are those in this video.
>
> **[0:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=7)** You can use a knowledge base to connect foundational models in Bedrock to your company data for retrieval augmented generation, or what is called as RAG.
>
> **[0:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=17)** RAG is the technique that invokes fetching data from a company at the source, and enriching the prompt with that data to deliver more relevant and accurate responses.
>
> **[0:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=28)** Knowledge bases for Amazon Bedrock is a fully-managed RAG that allows you to customize your foundational model's responses with contextual and relevant company data.
>
> **[0:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=39)** This is really, really useful when you don't want to retrain the models because the models are big and it's a lot of information, but you just want to enrich that response with your own data.
>
> **[0:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=51)** So you can get models to access a specific information from your organization to generate more relevant context, specific and accurate responses without the need to retrain the model.
>
> **[1:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=63)** And when this information is fetched from the knowledge base, it comes with a source attribution to improve transparency and hallucinations.
>
> **[1:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=75)** Knowledge bases for Amazon Bedrock automates the end-to-end RAG workflow, including the ingestion, retrieval, and prompt augmentation, eliminating the need for you to write custom code to integrate the data sources and manage the queries.
>
> **[1:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=90)** With your project, you're going to build a knowledge base with a list of cities with its latitude and longitude.
>
> **[1:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=97)** The agent will know how to fetch the data and how to use it to call the lambda function in the next step.
>
> **[1:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=104)** But you'll see that a knowledge base can have all kind of organizational information.
>
> **[1:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-is-an-amazon-bedrock-knowledge-base?u=76281980&t=111)** You can put your sales data, your inventory, a collection of reports with trends of your company's marketing, and the knowledge base will make sure that the data is accessible when you create it and when you query it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), rag (4), prompt (2), [[Fetch]] (1), next (1)
> **Env Vars:** rag (4)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Creating a knowledge base
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=0)** - [Instructor] Now that you know what a knowledge base is, let's create one.
>
> **[0:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=4)** The first thing we want to do is to get some data to populate that knowledge base.
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=9)** For that and for our demo purposes, what we'll do is get a list of cities, latitudes and longitudes from this website called SimpleMaps that allows you to download these files.
>
> **[0:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=21)** So if you click download, you will be able to get these comma separated value file that it looks something like this.
>
> **[0:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=33)** It has the city and then the latitude and longitude for thousands and thousands of cities, so this is very convenient.
>
> **[0:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=43)** So you download that, I put it in the project, so it's easy to know where it is.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=50)** But then the next thing you need to do is to upload it to S3, so the Bedrock Knowledge Base can find it.
>
> **[0:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=57)** And for doing that, we are going to use the same command that we did before.
>
> **[1:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=61)** That is the AWS S3, copy the name of the file to the bucket that we created in the previous video.
>
> **[1:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=70)** So we wait for a second, that uploads this file, and then we are ready to go and create the knowledge base.
>
> **[1:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=80)** So let's wait for this a second and now let's go to our AWS console.
>
> **[1:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=86)** We could create the knowledge base as infrastructure as code, but because this is quite a long process, I want to show it to you from the console.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=94)** But if you would like to know how it's done as infrastructure as code, I will give you some material in the resources of this video.
>
> **[1:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=101)** So in Bedrock, you go here, Knowledge base, and then you can create a knowledge base.
>
> **[1:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=111)** So here we will put a name, we will call it the cities-lat, longitude, I don't know.
>
> **[1:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=118)** And then here we will put a description for this knowledge base.
>
> **[2:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=122)** We can put something like, "List of cities with its latitude and longitude."
>
> **[2:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=134)** We will create the permissions, we will let this do it for us, and if you want to add some tags, you can do that next.
>
> **[2:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=141)** Now let's choose the bucket that we created previously and look for that file.
>
> **[2:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=147)** So we can browse that bucket and you can see here, that is this worldcities CSV file.
>
> **[2:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=158)** So we can get the URL, here, copy, URL, and we can paste it here and then we can click Next.
>
> **[2:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=172)** The next thing we want to do is to select the embeddings model and this is how the data is going to be transformed into vectors.
>
> **[3:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=180)** I will just put the Titan, but feel free to pick the one that you want.
>
> **[3:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=185)** And then you can decide what kind of database you're going to use to store that.
>
> **[3:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=190)** I will recommend to go for the create a new one unless you have something already so let's create, Next.
>
> **[3:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=200)** And now you are ready to get started so let's create the knowledge base.
>
> **[3:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=208)** This will take a while because it needs to basically grab the data, transform it into vectors, and store it in the vector database.
>
> **[3:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=219)** And also it needs supervision, the Amazon OpenSearch Serverless vector store in our account, so this is a process that will take several minutes to complete.
>
> **[3:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=230)** When this is ready, I will be back and we can test it together.
>
> **[3:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=235)** So now the knowledge base is created, you can see here, and we can make sure that the data is synced.
>
> **[4:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=245)** So it'll take a second to sync the data source, if something change in the S3 bucket and then we can test it.
>
> **[4:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=256)** So you can see here that there is a testing knowledge base, and here we can test that the knowledge base that what we want.
>
> **[4:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=265)** So we need to wait for the sync to complete, and then we can test.
>
> **[4:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=274)** You can see here that the data is syncing.
>
> **[4:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=277)** It should be done in any time and this takes a little while.
>
> **[4:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=286)** While we wait, we can select a model in where we want to test.
>
> **[4:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=289)** I will use the Claude here, if it allows me then... So zoom out, I cannot see the apply.
>
> **[4:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=299)** And now we have the model and we just need to wait for this to finish.
>
> **[5:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=305)** And then we can start testing the knowledge base.
>
> **[5:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=311)** So now that the knowledge base is created and sync, we can test, so we selected the model already.
>
> **[5:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=318)** So we can put something like this, and then we wait for the response to be generated.
>
> **[5:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=329)** What will happen here is that it will go to the source and look for the answer.
>
> **[5:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=335)** So it show us here the source details, so we can see the chunk where it's looking for the information.
>
> **[5:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=342)** So somewhere here it says Paris, and it's returning the information for that.
>
> **[5:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=349)** We can do the same with other cities like Madrid, and it should return as well, that information.
>
> **[6:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=362)** So here we can see the Madrid and we can do some configurations on the different search type so I keep the default, but you can play and see which one is better.
>
> **[6:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=373)** For now, I just keep that default one and if we want to check, I don't know... For another city, we can run the same.
>
> **[6:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=382)** And this will always go to the source and find the details.
>
> **[6:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-knowledge-base?u=76281980&t=386)** And this is the knowledge base, now we are ready to get the agent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), next (5), aws (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (2), database (2)
> **CLI Commands:** find (2), aws (2), make (1)
> **Env Vars:** aws (2), url (2), csv (1)
> **UI Navigation:** go to (2), select the (1)
> **Definitions:** is a  (2)
> **Cross-References:** previous video (1)
> **Tools:** aws console (1)
> **Speakers:** - [instructor] (1)

#### Creating an Amazon Bedrock agent
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=0)** - [Instructor] Now you have all the pieces that you need to create your agent.
>
> **[0:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=4)** You have the function that calls that external API to get the weather with the latitude and longitude.
>
> **[0:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=10)** You have the open API definition, so the agent should know how to call that function.
>
> **[0:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=15)** You also have the knowledge base, with a list of cities, names, and the latitude and longitude, so we can figure that out.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=25)** And let's now build an agent that can provide the current weather in a friendly manner.
>
> **[0:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=31)** So, we are going to create an agent from the console again.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=34)** So, Agents.
>
> **[0:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=36)** And here, we can create an agent.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=38)** We can put a name, agent1, and then we can put some kind of description, just whatever you want.
>
> **[0:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=48)** And we will have user input, so this means that we'll have a chat with the user, so that's something we want.
>
> **[0:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=56)** And we will let these consult to create the permissions for us.
>
> **[1:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=60)** So, let's go Next.
>
> **[1:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=62)** Now we need to select what model we want.
>
> **[1:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=64)** We will use Anthropic and Claude 2.1.
>
> **[1:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=69)** And this is important, these are the instructions for the agent, what the agent will be doing.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=74)** So, this one, you might need to tune a couple of times in order to get something that works for you.
>
> **[1:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=80)** But I will write something like this.
>
> **[1:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=81)** You're an agent designed to help customers get the weather details for a city.
>
> **[1:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=85)** The customers will provide you with the city name and country, and you will need to translate that information into the latitude and longitude for the city.
>
> **[1:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=93)** With that information, you can fetch the weather information for the customer in a friendly manner.
>
> **[1:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=100)** And here, we have the action groups, and this is the calls to the different lambda functions.
>
> **[1:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=104)** So we can call agent-lambda-1, and then some description, lambda that returns the weather.
>
> **[1:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=115)** Here, we look for the function that we have deployed previously.
>
> **[1:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=119)** And here what we need is the URI of the openAPI.
>
> **[2:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=124)** So, we can search for this bucket, and the openAPI definition.
>
> **[2:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=130)** So, we can copy the URI, and then paste it here.
>
> **[2:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=134)** You can also Browse S3 from here and get that information.
>
> **[2:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=139)** And then we click Next.
>
> **[2:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=140)** Then it's time to configure the knowledge base, we only have one.
>
> **[2:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=144)** And again, here we need to have some instructions to the knowledge base.
>
> **[2:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=148)** And we can put something like this, "Search for the latitude and longitude for the city and country that the user has provided in the input."
>
> **[2:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=156)** Good.
>
> **[2:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=157)** Now we review this.
>
> **[2:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=159)** We can modify it later if we want, but we can create agent.
>
> **[2:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=163)** This will take a little while, and when this is completed, we can test.
>
> **[2:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=169)** But before testing, we need to do one thing, that is to give permissions to the agent to access the lambda function, because if we try it now, it will fail.
>
> **[3:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=180)** So one thing that you need to have now is the agent ARN, and you have it here.
>
> **[3:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=187)** So, keep that one in mind.
>
> **[3:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=189)** And then let's go to the template YAML from the project2, and add a couple things here.
>
> **[3:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=197)** First, we want to add the parameter, AgentARN, so we can pass it in our parameters, everybody will have a different one.
>
> **[3:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=207)** And then we will get some permissions for lambda.
>
> **[3:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=212)** So, we will put it here.
>
> **[3:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=214)** And what this will do is we allow the agent to invoke the lambda function from bedrock.
>
> **[3:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=221)** So, this is important for us to be able to call the function.
>
> **[3:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=224)** So, let's save this, and run sam deploy --guided so we can update those parameters.
>
> **[3:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=235)** The stack name, everything stays the same, but now we need to pass the agent ARN.
>
> **[4:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=240)** So, let's grab it from here, paste it here, and then let's go with all the defaults.
>
> **[4:08](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=248)** Now this should deploy the template YAML with the parameters that we just changed, so that's good.
>
> **[4:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=257)** You can see the ARN for the agent is updated, so when we test the agent, it will just work.
>
> **[4:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=266)** Let's wait for this to deploy, and then we can go to test.
>
> **[4:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=271)** So now, we have everything ready, and we are ready to test.
>
> **[4:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=275)** Let's ask the agent for something, so we can, "Give me the weather for today for Paris," and see if this returns something.
>
> **[4:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=283)** It should be looking for the latitude and longitude in the knowledge base.
>
> **[4:48](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=288)** And then it should invoke the Lambda function to give us the weather.
>
> **[4:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=293)** So, let's see what happens.
>
> **[4:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=296)** I don't know, it didn't understood the city.
>
> **[5:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=300)** So, we can give it again.
>
> **[5:04](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=304)** This is because we have asked the agent that it accepts user input, so it will chat with us, so if it doesn't understand something, it will ask for more information, so this is kind of the smart part of the agent, even though we have given the city in the prompt, in the initial prompt.
>
> **[5:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=324)** So, "Here is the weather for today in Paris, this is the date, the condition is partially clouded.
>
> **[5:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=330)** Temperature range from 5 to 9."
>
> **[5:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=332)** So, you can see, this is very different from what the JSON is returning from the external API, it's formatted.
>
> **[5:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=339)** But we can see here the trace, and this is something that is quite interesting when we are working with this generative AI orchestration.
>
> **[5:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=347)** So, we can click here, and we can see what the agent is doing.
>
> **[5:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=352)** So, this is all the orchestration the agent is creating, and it's based on all the prompts that we passed, and the API.
>
> **[6:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=361)** So, "The user has confirmed the city is Paris, now I will look for that using the search tool."
>
> **[6:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=367)** So you can see, now it's going to knowledge base, and it's asking what is the latitude and longitude for Paris, and then the knowledge base is responding, "This it is."
>
> **[6:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=378)** And if we continue going down, then we have step three.
>
> **[6:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=384)** Let's see what is going on here.
>
> **[6:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=388)** We have the information.
>
> **[6:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=393)** And in some point, we should be calling the lambda function.
>
> **[6:38](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=398)** But you can look at all this information, and it says, "Well, I have the latitude and longitude for Paris from the search tool is this one, now I will use these to get the coordinates to get the weather for today in Paris."
>
> **[6:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=410)** And you can see, it creates that invocation input that we have defined in the lambda functions, this thing that we needed, the weather parameters it knows with API, and which parameters to pass, and then it will call the action group, and then it will execute it, and it will get the JSON back, and then it'll transform it.
>
> **[7:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/creating-an-amazon-bedrock-agent?u=76281980&t=431)** So, all of this, the agent will take the decision by itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (5), [[Search]] (4), next (2), prompt (2), [[JSON]] (2)
> **Env Vars:** api (5), arn (3), uri (2), yaml (2), json (2)
> **Code Identifiers:** openapi (2)
> **UI Navigation:** go to (2)
> **Exercise Files:** template (2)
> **Prerequisites:** configure (1), you need to have (1)
> **Versions:** 2.1 (1)
> **Definitions:** means that (1)

#### Challenge: Add another function to the agent
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=5)** - [Instructor] I have another challenge for you.
>
> **[0:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=7)** Can you add new functionality to the agent that it can also return the weather for the next five days for a city?
>
> **[0:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=14)** This is how the agent should look after you make the change.
>
> **[0:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=18)** Weather forecast for Berlin, Germany.
>
> **[0:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=21)** And here's the five-day weather forecast for Berlin, Germany, and it shows you the five days.
>
> **[0:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=27)** So this is more or less what you need to do.
>
> **[0:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=31)** Some information that you might want to have in mind.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=34)** You can use the same Weather API, at least the one that is provided by LinkedIn Learning allows you to return like 10 days.
>
> **[0:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=42)** So you might need to modify the code that we have before so you can get the five-day forecast, which only one day.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=50)** And don't forget to add the API definition to the OpenAPI.json and upload it to S3 so that it's ready for the agent to use.
>
> **[1:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=60)** And when you do that change, you can go to the agent, work in draft and click prepare.
>
> **[1:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=67)** That will get the OpenAPI information into the agent so it'll get ready for you to test.
>
> **[1:15](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/challenge-add-another-function-to-the-agent?u=76281980&t=75)** In the next video, I will show you how I solve this problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), api (2), [[LinkedIn]] (1), [[JSON]] (1)
> **Env Vars:** api (2)
> **File Paths:** openapi.json (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Solution: Add another function to the agent
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=0)** - [Instructor] Let me show you how I solve the challenge number four.
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=9)** The first thing I did was to go to our function, our existing function, and modify.
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=16)** Do remember the API path.
>
> **[0:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=17)** So I create a new one.
>
> **[0:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=19)** We have weather that returns the current weather, and then I created one that says weather for the next five days.
>
> **[0:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=26)** The inputs are the same.
>
> **[0:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=28)** And then I call this get weather with five instead of one.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=34)** So let's see, because I also did a modification in this get weather method that now I'm doing a splice between zero and the amount of days.
>
> **[0:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=44)** So if I get like one day it will return the position that is in zero.
>
> **[0:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=49)** If I get five days, it'll return from zero to five.
>
> **[0:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=53)** And that's the array and resulting.
>
> **[0:56](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=56)** So we can deploy this and test it.
>
> **[1:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=60)** So some deploy this will deploy it to the cloud and then we can run and invoke the function.
>
> **[1:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=69)** For invoking the function, we can test with the payload that we had and make sure that the one day also works.
>
> **[1:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=78)** And we can also test with a new payload that I created.
>
> **[1:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=83)** So we can have payload number two here, that test with the five days forecast.
>
> **[1:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=90)** So we can see how both of these APIs work.
>
> **[1:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=96)** So let's wait for this to complete the deployment and test it.
>
> **[1:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=102)** So now this is deployed and we can do a remote sum invoke with the payload one, this only test one day.
>
> **[1:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=111)** So let's see if the result's still working, invokes the lambda function and we can see that the response and the response body is here.
>
> **[2:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=123)** It has one day, so that's good.
>
> **[2:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=126)** And then we can run the same query, but with the payload two.
>
> **[2:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=131)** And that is invoking the API for the five days forecast.
>
> **[2:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=136)** And let's see if it returns five days.
>
> **[2:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=141)** And now we can see here 1, 2, 3, 4, 5.
>
> **[2:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=148)** So everything is good.
>
> **[2:29](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=149)** So the next thing we need to do is to modify the open API JSON.
>
> **[2:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=156)** So I already did that.
>
> **[2:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=157)** We have the existing one here with the weather and that stays the same.
>
> **[2:42](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=162)** And then I added the weather five days, exactly the same name as you can find in the function.
>
> **[2:50](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=170)** Get.
>
> **[2:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=171)** And I added some descriptions, get the weather for the next five days for a specific latitude and longitude that represents a city.
>
> **[2:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=178)** The parameters are the same, but I make sure that we change if there is anything about the current weather.
>
> **[3:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=185)** And then the response.
>
> **[3:06](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=186)** Now we are returning an array and I specify exactly what is inside that array so it's easier for bedrock to understand.
>
> **[3:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=198)** After this, we can make sure that we upload that file to S3 so it's updated.
>
> **[3:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=206)** And when we have that, we can go back to our agent and prepare it.
>
> **[3:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=214)** This will grab all the information from the open API or whatever change in the function and bring it to the working draft.
>
> **[3:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=223)** So now we are ready to test.
>
> **[3:45](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=225)** Let's test this.
>
> **[3:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=227)** And the first query we can run is the weather forecast for Berlin, Germany, to make sure that it returns the five days weather forecast now.
>
> **[4:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=240)** And here is the response.
>
> **[4:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=242)** Here is the five day weather forecast for Berlin, March 21.
>
> **[4:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=245)** March 23, March 24, March 25.
>
> **[4:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=249)** That's great.
>
> **[4:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=250)** And if we click again, we can see the trace and we can ask also for the forecast for today for Berlin, Germany.
>
> **[4:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=257)** And let's see if this still understand us.
>
> **[4:20](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=260)** Let's ask it a little bit different.
>
> **[4:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=263)** One thing, if you start seeing that your prompts are not being understood, you can always change and play with the prompts here.
>
> **[4:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=273)** This is an advanced thing and I will not recommend it unless you really know what you're doing.
>
> **[4:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=279)** But usually prompts are the hardest part with generative AI.
>
> **[4:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=283)** So you might need to try out different ones and fine tune them in order to get the right results.
>
> **[4:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=291)** So I have not done this for this demo, but if you want to use input production, that is the thing that will take you the most time.
>
> **[5:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=302)** So you can always debug the results by looking here.
>
> **[5:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=309)** And sometimes you can also clear the chat to start a new session and also might help.
>
> **[5:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=319)** So here you can see that now it worked.
>
> **[5:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=321)** Sometimes because we have the whole history in this chat, then it gets a little bit confused.
>
> **[5:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=328)** So if you want to try again, just clean the history and start again.
>
> **[5:32](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=332)** And that will start with no session information and you might get a result.
>
> **[5:37](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/solution-add-another-function-to-the-agent?u=76281980&t=337)** So these are a couple of tips for debugging the agents to have in mind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (4), next (3), cloud (1), [[JSON]] (1), [[Generative AI]] (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** api (4), json (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### What we built
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=0)** - [Instructor] In this course, you built two projects.
>
> **[0:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=3)** Let's review them.
>
> **[0:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=5)** The first project was an asynchronous orchestration project in which you upload a file, like an audio or video to S3, and that triggers a workflow.
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=16)** The workflow contains the orchestration for an application that uses different AI services and generative AI.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=25)** The application called different AI services to perform tasks like transcription, translation, and generative AI to produce a summary and a poem.
>
> **[0:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=36)** Also, the workflow at the end sends an email when the process is done or puts an event to event breach when the summary is completed.
>
> **[0:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=47)** This project is a good example of event-driven architectures as the workflows respond to environment events and also puts events into different event buses and notifications when things are completed.
>
> **[0:59](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=59)** These orchestrations are great for asynchronous applications and when you have a series of tasks that you need to accomplish to get a result, when you need to combine multiple AI services, or you want to call different foundational models.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=74)** Also, this orchestration approach is great when you need control over data transformation and service calls, as you control the API calls and you transform the data as you need to.
>
> **[1:24](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=84)** However you need to plan for all the application path and if some new personality gets added, you'll need to change the orchestration implementation.
>
> **[1:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=95)** The second project was a synchronous orchestration creating a chatbot using generative AI.
>
> **[1:41](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=101)** This project was built using bedrock agents, knowledge bases, and Lambda functions.
>
> **[1:47](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=107)** This chatbot responds to a customer asking for the weather in a city, the current weather, or the weather in the next five days.
>
> **[1:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=115)** The agent, in order to fetch their answers from the API to answer these questions, needs to enrich the request with data obtained from the knowledge base.
>
> **[2:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=125)** So it will get the latitude and the longitude from the knowledge base, and then call the external weather API with that latitude and longitude for the city that the user has provided.
>
> **[2:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=138)** Here, the agent is the one responsible for creating the orchestration, for making the calls to the different services, to deciding which services need to be called and when.
>
> **[2:30](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=150)** It will fetch the data needed from the data sources and then call the APIs as needed.
>
> **[2:36](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=156)** This solution is great for synchronous scenarios where you don't know the exact workflow that the user will do, or that the user might not provide all the necessary information to fulfill the request, as the agent can ask for more information if they need it, and consult data sources to fill the gaps of knowledge.
>
> **[2:55](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=175)** However, as the data transformations and calls to the different services are orchestrated by the agents, the results that you can obtain are unpredictable.
>
> **[3:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=185)** And the way to improve those results is by tuning natural language prompts that are built into the agent, and in some cases can be harder to configure and to get right than traditional integration.
>
> **[3:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/what-have-we-built?u=76281980&t=198)** I hope that by the end of this course, you feel confident in deciding which orchestration model can be the best for your problem and how to leverage generative AI and AI as a developer, as there are many services out there to help you to build your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Orchestration]] (7), data (6), application (4), ai (4), [[Generative AI]] (4)
> **Env Vars:** api (3)
> **Prerequisites:** you'll need (1), configure (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Cleaning up the environment
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=0)** - [Instructor] When you finish this course or you want to stop working on this course for an extended period of time, I recommend you remove all the resources created from your AWS account.
>
> **[0:10](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=10)** Most of the services you use in this course are built in a pay-per-use manner.
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=16)** However, it's a good practice to remove everything you're not going to use and it's important to know that the knowledge base that you created if you leave it on can be quite expensive, so make sure you turn it off immediately after completing the course.
>
> **[0:31](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=31)** All the resources created during this course, like AWS Lambda, S3 buckets, the functions workflows that were created with AWS SAM are easy to remove using the AWS CLI.
>
> **[0:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=43)** Other resources like the Bedrock agents and knowledge bases, you will need to delete them from the console.
>
> **[0:49](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=49)** Project1 infrastructure was created with AWS SAM and is quite easy to clean up, but the first thing you need to do is to remove everything that you have in the bucket, like the uploaded videos, all the transcriptions and everything so you can remove the bucket as well.
>
> **[1:05](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=65)** So go to the bucket and then basically delete everything that is in there.
>
> **[1:11](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=71)** You can do this as well from the CLI if you want to, but it's very easy.
>
> **[1:17](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=77)** Just permanently delete all the different files.
>
> **[1:22](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=82)** When you're ready, now you can go to the project and type sam delete to remove everything that it's in your project, so make sure you're in the project directory.
>
> **[1:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=95)** I'm in project1, sam delete, and then it will ask me if I want to delete the stack.
>
> **[1:39](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=99)** I will say yes.
>
> **[1:40](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=100)** Then it will ask me if I want to remove the bucket for SAM where all the artifacts are.
>
> **[1:46](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=106)** I will say yes, and then everything will start getting deleted.
>
> **[1:51](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=111)** It will delete everything that is defined in the stack so we can make sure that nothing was left behind.
>
> **[1:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=118)** This takes a while because it's deleting everything, but you can always recover everything by just running sam deploy in your AWS account and you will get back everything.
>
> **[2:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=133)** When everything is deleted, now you can move to deleting project number two.
>
> **[2:18](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=138)** Removing project number two is a little bit more tricky because the first thing you need to do is as you did with project number one, go to the S3 bucket, remove everything you have in the bucket.
>
> **[2:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=148)** In this case, it's the OpenAPI.json and the wolrdcities.csv file.
>
> **[2:33](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=153)** Then you can go to the project number two and type SAM DELETE there to remove the bucket and all the Lambda functions, and all the different things that you created.
>
> **[2:44](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=164)** And finally, when you delete everything from the S3 bucket and from the SAM infrastructure, you can go to Bedrock and delete the agent and the knowledge base.
>
> **[2:53](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=173)** So go to the knowledge base that you created.
>
> **[2:57](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=177)** You can click here and say Delete.
>
> **[3:01](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=181)** This will take a while and then you can go to the agent as well and click Delete.
>
> **[3:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=193)** Then everything is getting deleted and you can find that the agent was deleted successfully and the knowledge base has been deleted successfully.
>
> **[3:23](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=203)** So you're good to go.
>
> **[3:26](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=206)** Remember, you can redeploy any part of the application that was built with AWS SAM easily just by running the command sam deploy.
>
> **[3:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=214)** If you have that SAM configuration file that was created before, you don't need to add the --guided because you have already the stack configured.
>
> **[3:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=223)** If you don't have that file because you remove it and you're just getting the project back from GitHub, you just type sam deploy --guided and input all the parameter's configurations as we have been doing during this course and you're ready to go.
>
> **[3:58](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=238)** SAM deploy will recreate all the AWS resources with new ARNs, Amazon Resource Names, but the applications will work exactly as before.
>
> **[4:07](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/cleaning-up-the-environment?u=76281980&t=247)** For other parts that you build using the AWS console, you will need to follow the steps that we provided in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (9), [[CLI]] (2), [[JSON]] (1), application (1), [[GitHub]] (1)
> **Env Vars:** aws (9), sam (8), cli (2), delete (1)
> **CLI Commands:** aws (9), make (3), find (1)
> **UI Navigation:** go to (7)
> **File Paths:** openapi.json (1), wolrdcities.csv (1)
> **Tools:** github (1), aws console (1)
> **API Endpoints:** delete  (1)
> **Definitions:** is a  (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=0)** - [Marcia] And this bring us to the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=3)** At this point, you should be able to understand how to use AWS AI services and Amazon Bedrock, how to create a workflow using Step Functions, and how to create an Amazon Bedrock agent with a knowledge base and Lambda functions.
>
> **[0:19](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=19)** Also you should be able to create and deploy many of these things using infrastructure as code, in this case, AWS SAM.
>
> **[0:28](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=28)** And you can test these different resources as part of your application, but this is not the end of your learning.
>
> **[0:35](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=35)** I encourage you to keep experimenting and learning about these projects and also use the projects that you have built, extend them, add them more things, and play around because there is a lot of things that you can do in order to improve these projects and learn by doing so.
>
> **[0:52](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=52)** If you want more resources to learn more, I leave you here, my YouTube channel where I have over 300 videos related to AWS and serverless and generative AI.
>
> **[1:02](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=62)** Serverless Land is the website that aggregates a lot of the serverless content curated by AWS serverless developer advocates.
>
> **[1:09](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=69)** You can find there examples on AWS SAM.
>
> **[1:13](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=73)** Other infrastructure as code like Terraform and CDK, blog posts are learning guides to keep on learning.
>
> **[1:21](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=81)** You can follow me on social media, for example, Twitter, Instagram, or LinkedIn.
>
> **[1:27](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=87)** I always update them with news and announcements from different AWS serverless services.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=94)** And don't forget to check back here often as we continue to add more AWS and serverless courses to our LinkedIn Learning library.
>
> **[1:43](https://www.linkedin.com/learning/building-serverless-apps-with-ai-services-on-aws/next-steps?u=76281980&t=103)** Again, my name is Marcia Silva and thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (7), [[Infrastructure as code (IaC)|Infrastructure as code]] (2), [[LinkedIn]] (2), ai (1), application (1)
> **Env Vars:** aws (7), sam (2), cdk (1)
> **CLI Commands:** aws (7), find (1), terraform (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [marcia] (1)


## Instructor

- [[Marcia Villalba]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/buidling-serverless-apps-AI-4454235)

## Skills Covered

- Serverless Computing
- Amazon Web Services (AWS)

## Path Context

### In [[Advance Your AWS Development Skills- Exploring Complex Application Development]]
← [[AWS Security Best Practices for Developers]] | **5 of 6** | [[Building Intelligent Chatbots on AWS]] →

## Appears In

- [[Advance Your AWS Development Skills- Exploring Complex Application Development]]

## Related Courses

_Courses sharing skills:_

- [[Building Serverless Applications in AWS]] — Amazon Web Services (AWS), Serverless Computing
- [[AWS- Monitoring, Logging, and Remediation (2021)]] — Amazon Web Services (AWS)
- [[Complete Guide to AWS Software Deployment]] — Amazon Web Services (AWS)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Amazon Web Services (AWS)
- [[Twilio Essentials Unit 3- All Together Now]] — Serverless Computing

---

[↑ Back to top](#)