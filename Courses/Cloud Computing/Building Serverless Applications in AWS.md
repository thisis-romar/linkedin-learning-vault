---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: building-serverless-applications-in-aws
url: "https://www.linkedin.com/learning/building-serverless-applications-in-aws"
duration_minutes: 27
duration: 27m
level: Beginner
updated: 11/27/2023
learners: 3413
skills:
  - Serverless Computing
  - Amazon Web Services (AWS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHrUSyKAHYmVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1700606318538?e=2147483647&amp;v=beta&amp;t=JVLMDm4vIWBGEdPzlpPBlr0nlMJFf3oDoEKgI4IRtkA"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Getting Started as an AWS Developer]]'
prev_courses:
  - '[[Learning Amazon Web Services Aws For Developers]]'
next_courses:
  - '[[AWS for Developers- Identity Access Management (IAM)]]'
path_nav: '[{"path":"Getting Started as an AWS Developer","position":2,"total":4,"prev":"Learning Amazon Web Services Aws For Developers","next":"AWS for Developers- Identity Access Management (IAM)"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - skill/serverless-computing
  - skill/amazon-web-services-aws
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Building%20Serverless%20Applications%20in%20AWS.md)

![Building Serverless Applications in AWS](https://media.licdn.com/dms/image/v2/D560DAQHrUSyKAHYmVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1700606318538?e=2147483647&amp;v=beta&amp;t=JVLMDm4vIWBGEdPzlpPBlr0nlMJFf3oDoEKgI4IRtkA)

# Building Serverless Applications in AWS

> If you need to build a serverless application in AWS, this course from AWS Community Builder and YouTuber Lucy Wang can help you get started. Explore the concept of serverless computing and its advantages and disadvantages. Learn about the AWS services available and the scalable, cost-effective storage that S3 offers. Find out how you can use Lambda to run code and how DynamoDB can be used as a No

> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws) | 27m | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Getting Started]]** (7 videos)
- **[[#2. AWS Account and Website Setup]]** (3 videos)
- **[[#3. Amazon DynamoDB and AWS Lambda Setup]]** (2 videos)
- **[[#4. API Gateway Setup and Testing]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Building a serverless application in AWS
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/building-a-serverless-application-in-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/building-a-serverless-application-in-aws?u=76281980&t=0)** - Have you ever wanted to build a serverless application, but didn't know where to start?
>
> **[0:04](https://www.linkedin.com/learning/building-serverless-applications-in-aws/building-a-serverless-application-in-aws?u=76281980&t=4)** With over 40% of companies in the cloud now utilizing serverless workloads, knowing how to build serverless applications has become an essential skill for modern IT professionals.
>
> **[0:14](https://www.linkedin.com/learning/building-serverless-applications-in-aws/building-a-serverless-application-in-aws?u=76281980&t=14)** In this course, I'll teach you about the core AWS services for building serverless architectures.
>
> **[0:19](https://www.linkedin.com/learning/building-serverless-applications-in-aws/building-a-serverless-application-in-aws?u=76281980&t=19)** You also get hands on and build your very own application that can display a list of recipes.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-applications-in-aws/building-a-serverless-application-in-aws?u=76281980&t=25)** Hi, I'm Lucy and I run the YouTube Channel "Tech with Lucy."
>
> **[0:29](https://www.linkedin.com/learning/building-serverless-applications-in-aws/building-a-serverless-application-in-aws?u=76281980&t=29)** I'm a former AWS Solutions Architect, and, in this course, I bring my real-world experience to help you navigate your cloud journey.
>
> **[0:35](https://www.linkedin.com/learning/building-serverless-applications-in-aws/building-a-serverless-application-in-aws?u=76281980&t=35)** Now let's get into it and build together.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Code Keywords:** let (1)
> **Speakers:** - have (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-you-need-to-know?u=76281980&t=0)** - Before we embark on our journey of building serverless applications on AWS, let's briefly discuss what you should know to get the most out of this course.
>
> **[0:08](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-you-need-to-know?u=76281980&t=8)** First, I recommend having a general understanding of cloud computing.
>
> **[0:12](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-you-need-to-know?u=76281980&t=12)** This means knowing what the cloud is, the benefits it offers, and the underlying principles behind how cloud services operate.
>
> **[0:19](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-you-need-to-know?u=76281980&t=19)** Secondly, it also helps to have a basic understanding of programming.
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-you-need-to-know?u=76281980&t=23)** We'll be working with code, setting up functions, and talking about concepts like APIs, triggers, and event driven programming.
>
> **[0:31](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-you-need-to-know?u=76281980&t=31)** It doesn't matter what programming language you're already familiar with, be it Python, Java, or something else.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-you-need-to-know?u=76281980&t=38)** In this course, we'll be using Python, HTML and CSS, but don't worry if you haven't come across them before.
>
> **[0:45](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-you-need-to-know?u=76281980&t=45)** The code we'll be implementing is relatively straightforward, and I'll guide you through every step of the way.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-you-need-to-know?u=76281980&t=50)** Now, let's dive right in and start exploring the world of serverless applications on AWS.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2), python (2)
> **Env Vars:** aws (2), html (1), css (1)
> **Code Keywords:** let (2), else. (1)
> **Speakers:** - before (1)


### 1. Getting Started

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is a serverless application?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=0)** - Have you ever wondered how Netflix can handle millions of streaming requests without a hitch?
>
> **[0:04](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=4)** Or how Airbnb can manage thousands of bookings every day?
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=9)** The secret lies in the power of serverless computing, but what exactly is serverless?
>
> **[0:14](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=14)** Well, in the world of cloud computing, serverless refers to the ability to build and run applications without having to provision or maintain the underlying infrastructure.
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=23)** Serverless doesn't mean that there are no servers involved.
>
> **[0:26](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=26)** Instead, the responsibility of managing servers is shifted to a cloud computing provider such as AWS.
>
> **[0:33](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=33)** So what makes serverless applications attractive for companies and developers?
>
> **[0:37](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=37)** One major advantage is scalability.
>
> **[0:40](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=40)** Serverless computing allows applications to scale automatically based on demand.
>
> **[0:45](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=45)** The cloud computing provider manages the infrastructure, ensuring that resources are allocated as needed.
>
> **[0:51](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=51)** This is ideal for handling large spikes in traffic, such as during peak times for streaming services and booking platforms.
>
> **[0:59](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=59)** Another advantage is cost efficiency.
>
> **[1:02](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=62)** With serverless, you only pay for what you use rather than the idle capacity.
>
> **[1:07](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=67)** This pay-per-use pricing model can be more cost efficient for applications with variable or unpredictable workloads.
>
> **[1:15](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=75)** Serverless computing also simplifies development, allowing faster time to market for new applications.
>
> **[1:21](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=81)** Without having to manage servers, developers can have more rapid development cycles.
>
> **[1:26](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=86)** This allows companies to iterate quickly and bring new features and products to market much faster.
>
> **[1:33](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=93)** However, despite its advantages, serverless does come with a few drawbacks.
>
> **[1:38](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=98)** Serverless setups may not be suitable for all types of workloads.
>
> **[1:42](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=102)** While serverless applications are great for variable and non-critical workloads, they may fall short for long running applications or those requiring persistent connections.
>
> **[1:52](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=112)** Another drawback is time limitations on serverless functions.
>
> **[1:56](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=116)** Longer running processes can be cut off by those time limits, meaning developers may have to refactor their applications or break up tasks in order to fit in with those constraints.
>
> **[2:05](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=125)** Now that we've unpacked what serverless is as well as its advantages and disadvantages, let's move on to the next lesson, which is an overview of AWS services.
>
> **[2:14](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=134)** I'll see you there.

> [!info]- Semantic Content
>
> **Definitions:** refers to (1), short for (1), is an  (1)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Analogies:** such as (2)
> **Code Keywords:** let (1)
> **Speakers:** - have (1)

#### Overview of AWS services
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980&t=0)** - [Narrator] Imagine walking into a large supermarket for the first time and being greeted by rows and rows of new products.
>
> **[0:06](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980&t=6)** The thought might be both exciting and overwhelming at the same time, and that's what it can feel like when you first enter the AWS Management console.
>
> **[0:14](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980&t=14)** AWS has over 200 fully featured services, so it can often be hard knowing where to start.
>
> **[0:20](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980&t=20)** Broadly speaking, most AWS services can be grouped into seven main categories: compute, storage, databases, networking and content delivery, analytics, machine learning, and security, identity and compliance.
>
> **[0:36](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980&t=36)** For example, Amazon EC2 is a compute service that provides virtual server capacity in the cloud.
>
> **[0:41](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980&t=41)** And Amazon SageMaker is a machine learning service that allows you to build, train, and deploy machine learning models.
>
> **[0:48](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980&t=48)** Each service has a specific use case, and combining one or more of these services together allows you to build scalable applications and solutions in the cloud.
>
> **[0:59](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980&t=59)** In this course, we'll be focusing on the AWS services, commonly used to build serverless applications.
>
> **[1:05](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980&t=65)** More specifically, we'll be exploring Amazon S3, AWS Lambda, Amazon DynamoDB, and API Gateway.
>
> **[1:12](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980&t=72)** These services form the backbone of many serverless architectures and we'll be used in helping us build our first serverless application on AWS.
>
> **[1:20](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980&t=80)** Let's get into it.

> [!info]- Semantic Content
>
> **Env Vars:** aws (6), ec2 (1), api (1)
> **CLI Commands:** aws (6)
> **Code Keywords:** case, (1), lambda (1), let (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [narrator] (1)

#### Overview of Amazon S3
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=0)** - If you've ever uploaded photos to social media or opened an online menu when dining out at a restaurant, chances are you've probably crossed paths with Amazon S3.
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=9)** Amazon S3, also known as Simple Storage Service, is an object storage service that offers virtually unlimited storage capacity in the cloud.
>
> **[0:18](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=18)** In S3, data is organized into buckets and objects.
>
> **[0:22](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=22)** You can think of a bucket as a directory or folder, and an object as an individual file within that directory.
>
> **[0:28](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=28)** It can be used to store and retrieve any amount of data, from a single PDF document to massive data sets and video files.
>
> **[0:35](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=35)** Amazon S3 plays a crucial role when building a serverless application.
>
> **[0:39](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=39)** First of all, it provides a reliable place to store data, and is designed for 99.9% of availability and 11 nines of durability, making the risk of losing data and downtime extremely rare.
>
> **[0:53](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=53)** Another benefit of Amazon S3 is scalability.
>
> **[0:56](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=56)** Unlike traditional storage solutions where you may need to estimate amount of storage needed, S3 lets you scale up and down as required.
>
> **[1:04](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=64)** This also happens to make the service very cost effective.
>
> **[1:08](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=68)** With Amazon S3's pay for what you use pricing model, you can start small and grow your data over time.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=74)** In the next lesson, we'll take a look at AWS Lambda, another AWS service commonly used in building serverless applications.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2), make (1)
> **Env Vars:** aws (2), pdf (1)
> **Definitions:** known as (1), is an  (1)
> **Code Keywords:** lambda (1)
> **Versions:** 99.9 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - if (1)

#### Overview of AWS Lambda
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=0)** - When interacting with a website or application, you might have wondered how one press of a button can instantly trigger a number of events.
>
> **[0:07](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=7)** For instance, uploading a picture and seeing it immediately displayed or clicking Buy Now and having your order processed seamlessly.
>
> **[0:15](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=15)** These are just a few cases where AWS Lambda may be working tirelessly in the background.
>
> **[0:20](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=20)** AWS Lambda is a serverless compute service that lets you run code in response to events and triggers.
>
> **[0:26](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=26)** It can be used to automate a wide range of tasks, and serves as the backbone for efficiency of many serverless applications.
>
> **[0:33](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=33)** With AWS Lambda, you don't need to worry about setting up servers, optimizing them, or even keeping them running.
>
> **[0:40](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=40)** You can just upload the code you want to run, and Lambda takes care of the rest.
>
> **[0:45](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=45)** Similar to S3, the biggest benefits of using AWS Lambda is in its cost and flexibility.
>
> **[0:51](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=51)** With Lambda, you only pay for the compute time you consume, meaning that there's no extra charge when your code isn't running.
>
> **[0:58](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=58)** This pay per use pricing model also comes in handy where running applications with unpredictable workloads or varying levels of user traffic.
>
> **[1:07](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=67)** AWS Lambda offers added flexibility through its support for multiple programming languages, including Python, Java, and Node.js.
>
> **[1:16](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=76)** It also integrates seamlessly with storage and database services, like Amazon S3 and DynamoDB.
>
> **[1:22](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=82)** In our next lesson, let's take a look at Amazon DynamoDB, another AWS service that plays an important role in serverless applications.
>
> **[1:29](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=89)** I'll see you there.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (6), python (1), node (1)
> **Code Keywords:** lambda (7), let (1)
> **Env Vars:** aws (6)
> **Analogies:** for instance (1), picture (1), similar to (1)
> **File Paths:** node.js (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)

#### Overview of Amazon DynamoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=0)** - In today's digital world filled with data, organizing and retrieving information efficiently continues to be a challenge.
>
> **[0:07](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=7)** That's where databases come in.
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=9)** Amazon DynamoDB is a fully managed non-relational database service offered by AWS that provides fast, predictable database performance.
>
> **[0:18](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=18)** Unlike traditional databases, non-relational databases are designed for speed and flexibility, making them a great fit for serverless applications.
>
> **[0:27](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=27)** One of the biggest advantages of DynamoDB is its scalability.
>
> **[0:31](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=31)** It can handle over 10 trillion requests per day and automatically adjusts its capacity to meet workload demands.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=38)** DynamoDB is also designed to ensure that your data is readily accessible when needed.
>
> **[0:44](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=44)** Instead of having to manually create copies of your database, DynamoDB takes care of it and replicates your data across multiple AWS regions.
>
> **[0:52](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=52)** Finally, you only pay for the actual reads and writes your application performs.
>
> **[0:57](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=57)** This pricing model makes DynamoDB a great option for both small and large-scale applications that need to handle a large amount of data.
>
> **[1:04](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=64)** Overall, DynamoDB takes away the burden of having to manage database software and provision hardware, but providing a reliable, scalable, and cost effective way to store and access data.
>
> **[1:17](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=77)** Next, we'll take a look at Amazon API Gateway, the final service to know before we build our serverless application.

> [!info]- Semantic Content
>
> **Env Vars:** aws (2), api (1)
> **CLI Commands:** aws (2)
> **Code Keywords:** finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### Overview of API Gateway
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=0)** - The final service we'll explore is Amazon API Gateway.
>
> **[0:04](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=4)** An API stands for Application Programming Interface, and it's a set of rules and protocols for an application to communicate with other applications or systems.
>
> **[0:13](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=13)** Amazon API Gateway is an AWS service that makes it easy for developers to create, publish, and maintain these APIs.
>
> **[0:21](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=21)** You can think of API gateway as a front door to help you accept and process concurrent API calls, similar to a traffic controller.
>
> **[0:29](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=29)** In the case of a serverless application, API gateway typically serves as the entry point for the application to interact with backend services, such as Amazon Dynamo db.
>
> **[0:40](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=40)** One of the key advantages of API gateway is its scalability and versatility.
>
> **[0:46](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=46)** It can handle thousands of concurrent API calls and scales automatically in response to traffic patterns.
>
> **[0:52](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=52)** Amazon API Gateway can support a wide range of APIs, including REST APIs and HTTP APIs.
>
> **[0:59](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=59)** And similar to the other services we've discussed, Amazon API Gateway uses a pay-as-you-go model.
>
> **[1:06](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=66)** With API Gateway, you only pay for the calls made to your APIs and the data transfer out.
>
> **[1:12](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=72)** In the next video, we'll be putting all of these pieces together and discuss what we're going to be building for our serverless web application.
>
> **[1:18](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=78)** Stay tuned.

> [!info]- Semantic Content
>
> **Env Vars:** api (11), aws (1), rest (1), http (1)
> **Analogies:** similar to (2), such as (1)
> **Definitions:** stands for (1), is an  (1)
> **CLI Commands:** aws (1)
> **Code Keywords:** interface (1)
> **Cross-References:** in the next (1)
> **Speakers:** - the (1)

#### What we are building today
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=0)** - Now that we're familiar with the commonly used AWS services, it's time to apply that knowledge and create our own serverless web application.
>
> **[0:08](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=8)** In the upcoming chapters, we'll develop a serverless recipe application that lets you store and display a collection of your favorite food recipes.
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=16)** Let's begin by taking a quick look at the architectural diagram for our application.
>
> **[0:20](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=20)** This will provide you with a high-level overview of the different components involved in the application and how they interact.
>
> **[0:27](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=27)** The first component to our web application is Amazon S3.
>
> **[0:31](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=31)** Amazon S3 acts as a scalable and reliable storage solution for our static web files, such as HTML, CSS, and JavaScript code.
>
> **[0:40](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=40)** This will serve as the frontend where users can interact with the application.
>
> **[0:44](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=44)** Next up, we have AWS Lambda.
>
> **[0:47](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=47)** With AWS Lambda, we can leverage the power of serverless functions.
>
> **[0:51](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=51)** Our Lambda function will handle the logic behind storing and retrieving recipe data from our DynamoDB database.
>
> **[0:58](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=58)** To bridge the gap between our frontend and backend, we'll use Amazon API Gateway.
>
> **[1:04](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=64)** This will allow us to handle incoming requests and invoke our Lambda function.
>
> **[1:08](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=68)** Last but not least, we have Amazon DynamoDB as our database service.
>
> **[1:13](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=73)** With DynamoDB, we can efficiently store and manage recipe data, ensuring fast and reliable retrieval.
>
> **[1:20](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=80)** Now that we have a clear understanding of the architecture and services for the application, let's continue on to the next chapter where we'll set up our AWS account for the project.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (4), let (2), function (2), static (1), continue (1)
> **Env Vars:** aws (4), html (1), css (1), api (1)
> **CLI Commands:** aws (4)
> **Cross-References:** next chapter (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)


### 2. AWS Account and Website Setup

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating and using an AWS account
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=0)** - Okay.
>
> **[0:01](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=1)** Now, it's time for the hands-on portion of the course.
>
> **[0:03](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=3)** We're going to start by setting up your AWS account.
>
> **[0:06](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=6)** Head over to AWS.[Amazon.com](https://Amazon.com).
>
> **[0:09](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=9)** Click on Create an AWS Account.
>
> **[0:12](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=12)** And if you're already an AWS user, you can skip this part.
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=16)** Enter your email, and choose an AWS account name, and then follow the onscreen instructions to create and verify your account.
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=23)** Since I already have an AWS account, I'm going to go ahead and click on sign in.
>
> **[0:28](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=28)** Here, I'll be prompted to enter my login details.
>
> **[0:36](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=36)** Once you've signed in, you'll be directed to the AWS Management Console where you're presented with a centralized dashboard.
>
> **[0:42](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=42)** From here, you'll be able to access, and deploy your AWS services quickly and easily.
>
> **[0:47](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=47)** Now, during the signup stage, you would've been asked to provide your billing details, but here's the good news.
>
> **[0:53](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=53)** AWS actually has a freight tier that allows you to build, and experiment with a wide range of services without an additional cost to avoid unnecessary charges.
>
> **[1:02](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=62)** It's important to clean up your resources after deploying them.
>
> **[1:06](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=66)** So once we're done with the hands-on portion of this course, please remember to terminate any active resources that you no longer require.
>
> **[1:13](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=73)** And that you have it.
>
> **[1:14](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=74)** Your AWS account is now set up.
>
> **[1:17](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=77)** Let's move on to the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (10)
> **Env Vars:** aws (10)
> **Code Keywords:** require (1), let (1)
> **UI Navigation:** click on (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Cross-References:** next video (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** set up (1)

#### Create an S3 bucket and upload the landing page
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=0)** - [Narrator] All right, let's start building.
>
> **[0:02](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=2)** In this video, we'll set up an Amazon S3 bucket to host the landing page for our recipe application.
>
> **[0:07](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=7)** Open up the AWS Management Console and click on Search.
>
> **[0:12](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=12)** We're going to type in S3.
>
> **[0:15](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=15)** Click on S3 and you'll arrive at the Amazon S3 Console page.
>
> **[0:20](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=20)** Click on Create Bucket, and here you need to type in a name for your bucket.
>
> **[0:26](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=26)** I'm going to type in luci-linkedin-project, but feel free to type in any project name you'd like as long as it's not taken by another AWS user.
>
> **[0:39](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=39)** We're going to scroll all the way down and disable the block public access.
>
> **[0:45](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=45)** So this will ensure that the bucket will be publicly accessible to viewers of our website.
>
> **[0:50](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=50)** Acknowledge this warning and keep all the other settings as default.
>
> **[0:55](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=55)** Scroll down again and click on Create Bucket.
>
> **[1:01](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=61)** Now it's time to add the contents of our website.
>
> **[1:05](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=65)** So click on the bucket and download the website contents folder from the course files.
>
> **[1:11](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=71)** We're going to click Upload and we're going to add these files to our bucket, so app.js, index.html, and style.css.
>
> **[1:24](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=84)** These files will form the front end for our website.
>
> **[1:28](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=88)** Click on Upload and wait for the files to finish uploading.
>
> **[1:33](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=93)** If you have some previous experience with web design, feel free to customize the design of the website.
>
> **[1:39](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=99)** The files I've provided is just a starting point.
>
> **[1:42](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=102)** Once you've uploaded the files into the S3 bucket, it's now time to configure the bucket for static website hosting.
>
> **[1:49](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=109)** I'll show you how in the next video.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), scroll down (1)
> **Code Keywords:** let (1), public (1), default. (1), static (1)
> **File Paths:** app.js (1), index.html (1), style.css (1)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Prerequisites:** set up (1), configure (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)

#### Configure the S3 bucket for static website hosting
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=0)** - [Instructor] Now that we've added our front end files to our S3 bucket, it's time to turn that bucket into a live website.
>
> **[0:06](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=6)** So navigate to your S3 bucket and click on the properties tab, scroll all the way down and find the static website hosting option.
>
> **[0:17](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=17)** Click on edit and we're going to enable static website hosting.
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=23)** In the index document section, type in index dot HTML.
>
> **[0:29](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=29)** This basically tells AWS that the index dot HTML file is the main page for your website.
>
> **[0:35](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=35)** Click on save changes at the bottom.
>
> **[0:39](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=39)** And something else we have to do is add in a bucket policy.
>
> **[0:42](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=42)** So click on permissions, and we're going to edit this bucket policy.
>
> **[0:48](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=48)** Copy and paste the bucket policy from your exercise files.
>
> **[0:52](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=52)** And remember to rename your bucket name into the name of your actual S3 bucket.
>
> **[0:58](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=58)** In my case, it's Lucy LinkedIn Project.
>
> **[1:06](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=66)** Scroll down and click on save changes.
>
> **[1:10](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=70)** So once you've set all of that up, AWS will provide you with an endpoint, which is the URL of your static website.
>
> **[1:17](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=77)** So go back to properties, scroll down, and click on this website endpoint.
>
> **[1:24](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=84)** So this is the URL of your static website.
>
> **[1:29](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=89)** As you can see here, it looks a bit empty right now, but that's because there's currently no recipes inside.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=94)** Once we add recipes to our database and link it to the website, you'll be able to see all the recipes and instructions right there on the screen.
>
> **[1:43](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=103)** And so let's move on to the next lesson where we'll dive into DynamoDB and start populating some of those recipes.
>
> **[1:50](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=110)** I'll see you there.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), scroll down (2), navigate to (1)
> **Code Keywords:** static (4), case, (1), let (1)
> **Env Vars:** html (2), aws (2), url (2)
> **CLI Commands:** aws (2), find (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 3. Amazon DynamoDB and AWS Lambda Setup

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Set up a DynamoDB table for data storage
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=0)** - By now, you've set up your AWS account, created an S3 bucket, and configured it.
>
> **[0:05](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=5)** Now it's time to add in more components to our serverless setup.
>
> **[0:10](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=10)** From the AWS Management Console, search for DynamoDB.
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=16)** Click on the service.
>
> **[0:19](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=19)** Click on Create table.
>
> **[0:22](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=22)** And let's name our table recipes.
>
> **[0:26](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=26)** Remember that the naming is case sensitive, so let's use all lowercase.
>
> **[0:31](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=31)** For the partition key, let's enter id, and leave the type as String.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=38)** Keep all the other settings as default, and then at the bottom, click on Create table.
>
> **[0:44](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=44)** Give it a few moments for your table to finish creating.
>
> **[0:49](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=49)** All right, once the table has been created, select your table and click on Actions.
>
> **[0:54](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=54)** Then Explore items.
>
> **[0:58](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=58)** And now we're going to click on Create item.
>
> **[1:02](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=62)** And navigate to the JSON view.
>
> **[1:05](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=65)** Here you'll see a JSON editor where you can input the data for your recipes.
>
> **[1:10](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=70)** From the exercise files, you will be able to find three recipes.
>
> **[1:15](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=75)** We're going to enter them one by one.
>
> **[1:17](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=77)** So first, let's just enter the pasta.
>
> **[1:21](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=81)** Click Create item.
>
> **[1:25](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=85)** Go back to your JSON view.
>
> **[1:28](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=88)** And now we're going to add in the chicken curry.
>
> **[1:31](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=91)** Press Create item.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=94)** And finally, we're going to add in our chocolate chip cookies.
>
> **[1:39](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=99)** Press Create item.
>
> **[1:43](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=103)** So now we have three items in our recipe book.
>
> **[1:47](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=107)** Feel free to add in your own recipes or modify the existing recipes based on your own taste preferences.
>
> **[1:54](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=114)** Just make sure the JSON format stays the same.
>
> **[1:57](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=117)** Okay, now that we have our DynamoDB table ready, we can move on to the next step of our application, which is creating the lambda function.
>
> **[2:05](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=125)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (1), finally, (1), lambda (1), function (1)
> **Env Vars:** json (4), aws (2)
> **UI Navigation:** click on (5), navigate to (1)
> **CLI Commands:** aws (2), find (1), make (1)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** set up (1), setup (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - by (1)

#### Create a Lambda function to retrieve data
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=0)** - [Instructor] Now that we've added recipes to our DynamoDB table, it's time to create a Lambda function that fetches the recipes.
>
> **[0:07](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=7)** Head to AWS Lambda by searching Lambda on the search bar.
>
> **[0:13](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=13)** Click on Lambda.
>
> **[0:15](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=15)** and here we're going to click on Create a function.
>
> **[0:19](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=19)** Let's name our function getRecipes.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=25)** For the runtime let's select Node.js 16.
>
> **[0:30](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=30)** Keep all the other settings as default, and then click Create function.
>
> **[0:35](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=35)** Give it a moment for your function to finish creating.
>
> **[0:40](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=40)** Alright, once your function has been created, you'll see a code editor with some sample code at the bottom.
>
> **[0:46](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=46)** What we're going to do is replace all of this code with the code for the Lambda function in the exercise file.
>
> **[0:54](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=54)** What this code does is it fetches all the recipes from the DynamoDB table and returns it.
>
> **[1:01](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=61)** Once you finish copy and pasting this code, click on Deploy.
>
> **[1:07](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=67)** Okay, now the function has been deployed.
>
> **[1:11](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=71)** What we need to do now is give AWS Lambda permission to access the contents from DynamoDB.
>
> **[1:17](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=77)** So scroll up a bit, head to Configuration, and then Permissions.
>
> **[1:24](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=84)** In the Execution role, you're going to see Role name.
>
> **[1:28](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=88)** Click on this Role name and this will take you to the IAM console.
>
> **[1:35](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=95)** All right, now you can see that we're at the IAM console.
>
> **[1:39](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=99)** Scroll down, click on Add Permissions and Attach policies.
>
> **[1:45](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=105)** What we have to do is search for AmazonDynamoDBFullAccess.
>
> **[1:53](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=113)** So select this policy and click on Add permissions.
>
> **[1:59](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=119)** All right, now we've successfully created a Lambda function that can retrieve our recipes.
>
> **[2:04](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=124)** We've also given permissions for it to access the DynamoDB table.
>
> **[2:09](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=129)** In the next few lessons, we'll explore how to connect everything together through Amazon API Gateway and make our recipe application come to life.
>
> **[2:18](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=138)** I'll see you there.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), lambda (7), let (2), default, (1)
> **UI Navigation:** click on (6), scroll up (1), scroll down (1)
> **Env Vars:** aws (2), iam (2), api (1)
> **CLI Commands:** aws (2), node (1), make (1)
> **Exercise Files:** sample code (1), exercise file (1)
> **File Paths:** node.js (1)
> **Code Identifiers:** getrecipes (1)
> **Cross-References:** in the next (1)


### 4. API Gateway Setup and Testing

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Configure API Gateway
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=0)** - We're now ready to add in the final component to our serverless application, the Amazon API Gateway.
>
> **[0:06](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=6)** Once we're done, you'll be able to test and run your application.
>
> **[0:10](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=10)** Search API Gateway in the AWS Management Console.
>
> **[0:14](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=14)** Click on API Gateway.
>
> **[0:17](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=17)** And once you're on the landing page, scroll down until you see REST API.
>
> **[0:22](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=22)** Click on Build.
>
> **[0:24](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=24)** So we're using a REST API here because it's the standard method for web applications, allowing communication using simple HTTP methods.
>
> **[0:33](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=33)** So let's create new API, and then let's name it myAPI.
>
> **[0:43](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=43)** Cool. Okay, so now click on Create resource.
>
> **[0:47](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=47)** And for the resource name, let's call it recipes.
>
> **[0:52](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=52)** Click Create resource.
>
> **[0:55](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=55)** And once we've created the resource, we'll need to create a GET method.
>
> **[1:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=60)** So click on Create method, select GET, and let's leave it as Lambda function because we're going to be connecting the API gateway with our Lambda function.
>
> **[1:12](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=72)** Scroll down and find the Lambda function that you've created previously.
>
> **[1:19](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=79)** And then click on Create method.
>
> **[1:23](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=83)** Okay, we're now ready to deploy our API.
>
> **[1:26](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=86)** So click on Deploy API and select a new stage.
>
> **[1:31](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=91)** We're going to name our stage prod, which stands for production.
>
> **[1:36](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=96)** So click on Deploy, and you'll be taken to the Stages page where you can see an invoke URL.
>
> **[1:44](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=104)** This is your API endpoint.
>
> **[1:46](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=106)** By following these steps, you've created an API gateway that will connect your front-end application to your backend Lambda function.
>
> **[1:53](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=113)** In the next video, let's update the app.js file to use the API gateway endpoint.

> [!info]- Semantic Content
>
> **Env Vars:** api (12), rest (2), aws (1), http (1), url (1)
> **Code Keywords:** let (5), lambda (4), function (4)
> **UI Navigation:** click on (7), scroll down (2)
> **CLI Commands:** aws (1), find (1)
> **File Paths:** app.js (1)
> **Code Identifiers:** myapi (1)
> **API Endpoints:** get  (1)
> **Cross-References:** in the next (1)

#### Edit an app.js file
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=0)** - [Instructor] The final step is to update our app.js file and enable cross-origin resource sharing.
>
> **[0:06](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=6)** So, let's click on Resources and Navigate to our API.
>
> **[0:11](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=11)** So, click on recipes, and what we're going to do now is click on Enable CORS.
>
> **[0:19](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=19)** Select GET, and then click on Save.
>
> **[0:25](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=25)** So now that CORS is enabled, what we'll want to do now is redeploy our application.
>
> **[0:34](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=34)** And then for this Invoke URL, click on copy.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=38)** Navigate to your app.js file and replace this line with your URL.
>
> **[0:45](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=45)** So this Your-API-Gateway-Invoke-URL section.
>
> **[0:49](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=49)** Paste it in, and save this file.
>
> **[0:53](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=53)** So once the file is saved, go back to your AWS Management console, and then let's go to our S3 bucket.
>
> **[1:01](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=61)** So navigate to S3.
>
> **[1:05](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=65)** Click on our bucket.
>
> **[1:07](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=67)** And in this case, what we're going to do is delete this existing app.js file and upload our updated app.js file.
>
> **[1:17](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=77)** So I'm going to delete it here.
>
> **[1:21](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=81)** And then, you can see that I'm going to re-upload it.
>
> **[1:25](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=85)** So this is the new app.js file.
>
> **[1:29](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=89)** Scroll down and click Upload.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=94)** And with that, you've successfully connected your front-end website to your backend services through the API Gateway.
>
> **[1:41](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=101)** The configuration of your serveless application is now complete.
>
> **[1:45](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=105)** Let's test out the application in the next video.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), navigate to (3), go to (1), scroll down (1)
> **Env Vars:** api (3), url (3), cors (2), aws (1)
> **Code Keywords:** let (3), delete (2), case, (1)
> **File Paths:** app.js (5)
> **Cross-References:** go back to (1), in the next (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)

#### Test the recipe website to ensure proper functionality
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/test-the-recipe-website-to-ensure-proper-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/test-the-recipe-website-to-ensure-proper-functionality?u=76281980&t=0)** - Now that all the steps of creating our recipe application are complete, let's take a look at our website to see if it works.
>
> **[0:07](https://www.linkedin.com/learning/building-serverless-applications-in-aws/test-the-recipe-website-to-ensure-proper-functionality?u=76281980&t=7)** So click on properties, scroll all the way down to where we had static website hosting, and click on the S3 URL.
>
> **[0:17](https://www.linkedin.com/learning/building-serverless-applications-in-aws/test-the-recipe-website-to-ensure-proper-functionality?u=76281980&t=17)** You should now see the landing page with all the recipes that you've previously added through DynamoDB.
>
> **[0:23](https://www.linkedin.com/learning/building-serverless-applications-in-aws/test-the-recipe-website-to-ensure-proper-functionality?u=76281980&t=23)** If your website doesn't work or isn't displaying the recipes, please go back and revisit the previous lessons to see if you made any errors.
>
> **[0:31](https://www.linkedin.com/learning/building-serverless-applications-in-aws/test-the-recipe-website-to-ensure-proper-functionality?u=76281980&t=31)** Common errors include, Amazon Lambda not connecting to the DynamoDB properly, or issues with the API gateway.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-applications-in-aws/test-the-recipe-website-to-ensure-proper-functionality?u=76281980&t=38)** All right, this brings us to the end of this hands-on project.
>
> **[0:41](https://www.linkedin.com/learning/building-serverless-applications-in-aws/test-the-recipe-website-to-ensure-proper-functionality?u=76281980&t=41)** Great job on successfully building your serverless application and navigating through all the instructions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), static (1), include, (1), lambda (1)
> **Env Vars:** url (1), api (1)
> **UI Navigation:** click on (2)
> **Speakers:** - now (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/next-steps?u=76281980&t=0)** - Congratulations, you've just taken a significant step forward in your cloud learning journey.
>
> **[0:05](https://www.linkedin.com/learning/building-serverless-applications-in-aws/next-steps?u=76281980&t=5)** In this course, you've not only learned about the essential AWS services for building serverless applications, but also put that knowledge into practice by building a fully functional serverless recipe application.
>
> **[0:16](https://www.linkedin.com/learning/building-serverless-applications-in-aws/next-steps?u=76281980&t=16)** So what's next?
>
> **[0:18](https://www.linkedin.com/learning/building-serverless-applications-in-aws/next-steps?u=76281980&t=18)** Keep exploring and keep building.
>
> **[0:20](https://www.linkedin.com/learning/building-serverless-applications-in-aws/next-steps?u=76281980&t=20)** The world of cloud computing, especially in the serverless space, is constantly evolving.
>
> **[0:24](https://www.linkedin.com/learning/building-serverless-applications-in-aws/next-steps?u=76281980&t=24)** Look out for opportunities to apply your newly acquired skills in the real world.
>
> **[0:29](https://www.linkedin.com/learning/building-serverless-applications-in-aws/next-steps?u=76281980&t=29)** Check out the other cloud courses on LinkedIn Learning and feel free to take a look at my YouTube channel, Tech with Lucy to stay updated with the latest AWS career and study tips.
>
> **[0:38](https://www.linkedin.com/learning/building-serverless-applications-in-aws/next-steps?u=76281980&t=38)** Thank you for taking this course, and until next time, happy learning.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Speakers:** - congratulations (1)


## Instructor

- [[Lucy Wang]]

## Resources

- Exercise files available

## Skills Covered

- Serverless Computing
- Amazon Web Services (AWS)

## Path Context

### In [[Getting Started as an AWS Developer]]
← [[Learning Amazon Web Services Aws For Developers]] | **2 of 4** | [[AWS for Developers- Identity Access Management (IAM)]] →

## Appears In

- [[Getting Started as an AWS Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building Serverless Apps with AI Services on AWS]] — Amazon Web Services (AWS), Serverless Computing
- [[AWS- Monitoring, Logging, and Remediation (2021)]] — Amazon Web Services (AWS)
- [[Complete Guide to AWS Software Deployment]] — Amazon Web Services (AWS)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Amazon Web Services (AWS)
- [[Twilio Essentials Unit 3- All Together Now]] — Serverless Computing

---

[↑ Back to top](#)