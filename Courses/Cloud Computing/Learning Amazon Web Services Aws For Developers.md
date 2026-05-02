---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-amazon-web-services-aws-for-developers-14924833
url: "https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833"
level: Intermediate
updated: 6/23/2022
learners: 8106
skills:
  - Amazon Web Services (AWS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGxOurbjDgqQQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655842537941?e=2147483647&amp;v=beta&amp;t=2bSb2ezH08-E_4uYUEBGrXrab3lU3GW9b9p9z1fGsxY"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Getting Started as an AWS Developer]]'
  - '[[Getting Started with Cloud Development]]'
prev_courses:
  - null
  - '[[Choosing A Cloud Platform For Developers Aws Azure And Gcp]]'
next_courses:
  - '[[Building Serverless Applications in AWS]]'
  - '[[Azure Understanding The Big Picture]]'
path_nav: '[{"path":"Getting Started as an AWS Developer","position":1,"total":4,"prev":null,"next":"Building Serverless Applications in AWS"},{"path":"Getting Started with Cloud Development","position":2,"total":4,"prev":"Choosing A Cloud Platform For Developers Aws Azure And Gcp","next":"Azure Understanding The Big Picture"}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/amazon-web-services-aws
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Learning%20Amazon%20Web%20Services%20Aws%20For%20Developers.md)

![Learning Amazon Web Services Aws For Developers](https://media.licdn.com/dms/image/v2/C560DAQGxOurbjDgqQQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655842537941?e=2147483647&amp;v=beta&amp;t=2bSb2ezH08-E_4uYUEBGrXrab3lU3GW9b9p9z1fGsxY)

# Learning Amazon Web Services Aws For Developers

> Amazon Web Services (AWS) is the leading cloud service provider today, ahead of competitors such as Microsoft Azure and Google Cloud Platform. It is seen by many as the standard for functional, reliable, interoperable, and affordable cloud services. Developers need to understand what it means to develop on and migrate to the cloud—and comprehend the overall landscape of AWS before diving into the 

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833) | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Getting started in AWS](#getting-started-in-aws)
  - [What you should know](#what-you-should-know)
- [**1. AWS Console**](#1-aws-console) (3 videos)
  - [AWS account and pricing](#aws-account-and-pricing)
  - [AWS console and services](#aws-console-and-services)
  - [Certified Developer-Associate](#certified-developer-associate)
- [**2. Security**](#2-security) (7 videos)
  - [Identity and Access Management (IAM)](#identity-and-access-management-iam)
  - [Users and groups](#users-and-groups)
  - [Roles and policies](#roles-and-policies)
  - [Cognito](#cognito)
  - [Identity pools](#identity-pools)
  - [Identity provider (IdP)](#identity-provider-idp)
  - [User pools](#user-pools)
- [**3. Development**](#3-development) (4 videos)
  - [SDK and tools](#sdk-and-tools)
  - [Simple Storage Service (S3)](#simple-storage-service-s3)
  - [DynamoDB](#dynamodb)
  - [Lambda](#lambda)
- [**4. Messaging and Event-Driven**](#4-messaging-and-event-driven) (4 videos)
  - [Simple Queue Service (SQS)](#simple-queue-service-sqs)
  - [Simple Notification Service (SNS)](#simple-notification-service-sns)
  - [Events and Lambda](#events-and-lambda)
  - [Step Functions](#step-functions)
- [**5. Deployment, Scalability, and Monitoring**](#5-deployment-scalability-and-monitoring) (6 videos)
  - [Elastic Beanstalk](#elastic-beanstalk)
  - [CloudFormation](#cloudformation)
  - [ElastiCache](#elasticache)
  - [Lambda using cache](#lambda-using-cache)
  - [CloudFront](#cloudfront)
  - [CloudWatch](#cloudwatch)
- [**Conclusion**](#conclusion) (2 videos)
  - [Cleanup](#cleanup)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Getting started in AWS
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980&t=0)** - [Instructor] If you are a developer looking to get into AWS, then my friend, this course is for you.
>
> **[0:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980&t=6)** There is so much to AWS and it can be overwhelming and intimidating just knowing where to start.
>
> **[0:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980&t=13)** There's so many features like Lambdas, DynamoDB, Elastic Beanstalk, Elastic Cash, cognito and step functions.
>
> **[0:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980&t=21)** If that's not scary enough, what about S3, SQS, SNS, IAM, VPC, and EC2.
>
> **[0:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980&t=28)** Not to mention all the clouds, like Cloud Front, Cloud Formation and CloudWatch.
>
> **[0:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980&t=33)** Let's remove the mystery of all these and get comfortable with Amazon Web Services.
>
> **[0:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980&t=38)** In this course, we're going to do a survey of many of the key features and services in AWS.
>
> **[0:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980&t=44)** In fact, all of the AWS services I just mentioned will be in this course.
>
> **[0:49](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980&t=49)** We'll cover a lot.
>
> **[0:51](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980&t=51)** We'll talk about what they do and then we'll get our hands dirty, but hopefully our understanding will be clean and clear.
>
> **[1:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980&t=60)** I'm Bear Cahill, head binary sequencer at Brainwash, Inc.
>
> **[1:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/getting-started-in-aws?u=76281980&t=63)** And I'm excited to help you start to master AWS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (5), cloud (2), [[Amazon EC2|Ec2]] (1), [[Amazon Web Services (AWS)|Amazon web services]] (1)
> **Env Vars:** aws (5), sqs (1), sns (1), iam (1), vpc (1)
> **CLI Commands:** aws (5)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/what-you-should-know?u=76281980&t=0)** - [Instructor] I really hope that you'll learn a lot from this course.
>
> **[0:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/what-you-should-know?u=76281980&t=3)** And I really hope it removes a lot of the mysteries of AWS.
>
> **[0:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/what-you-should-know?u=76281980&t=7)** So to get the most out of this course, I'd recommend that you're some type of developer, just someone who's familiar with the concepts of developing, using editors, potentially compiling code or deploying it.
>
> **[0:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/what-you-should-know?u=76281980&t=19)** Also, I'd recommend that you're familiar with server development concepts, things like APIs, using SDKs, different concepts of running code on a server and possibly online database and other storage systems, and that you're the type of person who's currently seeking to understand cloud development, specifically with AWS.
>
> **[0:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/what-you-should-know?u=76281980&t=39)** That's what we're going to be focusing on during this course.
>
> **[0:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/what-you-should-know?u=76281980&t=42)** And so if that's what you're looking for, you've come to the right place, and I think this is going to be a great course for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (2), database (1), [[Cloud Development]] (1)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Speakers:** - [instructor] (1)


### 1. AWS Console

[↑ Back to Table of Contents](#table-of-contents)

#### AWS account and pricing
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=0)** - [Instructor] Of course, one of the first things we should talk about when developing on AWS is getting an AWS developer account.
>
> **[0:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=7)** So if you go to aws.[amazon.com](https://amazon.com), you see the typical start page with a lot of information and panes and tiles and links, and it's a lot of really great information.
>
> **[0:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=18)** So what I like to do is show people the aws.[amazon.com/free](https://amazon.com/free) site.
>
> **[0:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=25)** Free is good.
>
> **[0:26](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=26)** And here it encourage you to create a free account.
>
> **[0:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=30)** Now, what it means is that a lot of the services are free.
>
> **[0:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=34)** It also means the account's free.
>
> **[0:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=36)** When you sign up for account, you do have to give them a credit card number in case you go over any of the limits or use services that cost.
>
> **[0:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=44)** But, we can filter the different free services by featured or 12 months or always free.
>
> **[0:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=53)** And you get a really good sense of what services are free and what kind of limitations are on them.
>
> **[0:58](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=58)** So if we click the always free over here, we see that you can always use 25 gig in DynamoDB and it'll be free.
>
> **[1:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=64)** You can always have a million requests to your Lambdas in a month and it'll be free.
>
> **[1:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=70)** So the limits for the cost are very high.
>
> **[1:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=74)** It's very generous, in my opinion.
>
> **[1:16](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=76)** And so you can get a real good sense of what costs here.
>
> **[1:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=78)** Everything we do in this course should be free.
>
> **[1:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=80)** If anything does cost, you can always go to the billing feature, which we'll look at later and see what the cost is going to be estimated at and then turn it off.
>
> **[1:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=89)** So you can click this create an AWS account up in the top right, and it'll walk you through the typical process for signing up for an account.
>
> **[1:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=97)** Again, you have to give them the credit card number in case you do go over any of the limitations for charges.
>
> **[1:43](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=103)** In my experience, even if you do, it's going to be very little, so not too much concern there, but always try to be aware of what does cost.
>
> **[1:52](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-account-and-pricing?u=76281980&t=112)** So, sign up for the account and then we'll get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (5), feature (1)
> **CLI Commands:** aws (5)
> **Env Vars:** aws (3)
> **URLs:** [amazon.com](https://amazon.com) (2)
> **UI Navigation:** go to (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### AWS console and services
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=0)** - So once you have your AWS developer account, you're going to want to start being an AWS developer, right?
>
> **[0:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=7)** Of course.
>
> **[0:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=8)** So a great place to start is the console.
>
> **[0:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=10)** I go to console.aws.[amazon.com](https://amazon.com) and it loads up the Console Home.
>
> **[0:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=17)** So this is a great place to see a lot of the services that are available.
>
> **[0:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=21)** Your current costs, different tutorials for solutions and so forth.
>
> **[0:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=25)** And depending on your configuration it might show more or less based on font size.
>
> **[0:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=30)** You can move these widgets around.
>
> **[0:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=32)** You can completely remove these widgets if you want and so forth.
>
> **[0:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=36)** You can see the different services you've visited recently, if you've visited any.
>
> **[0:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=40)** And you can see your favorites up here on the top left.
>
> **[0:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=44)** If you click on the Services button right above there you can see different groupings or organization of the services.
>
> **[0:51](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=51)** You're recently visited, your favorites.
>
> **[0:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=53)** All the services alphabetically, and then the kind of conceptual grouping of them.
>
> **[1:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=60)** So we could look at something like Analytics or Blockchain or Compute.
>
> **[1:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=65)** Now I use Lambda a lot. That's under Compute.
>
> **[1:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=67)** It's a great way to be able to build serverless functionality and languages like Python and Node js.
>
> **[1:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=74)** You also have things like databases where you have DynamoDB, which is a NoSQL Database.
>
> **[1:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=79)** You also have RDS, which is a relational database service.
>
> **[1:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=83)** So these are grouped under database.
>
> **[1:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=85)** Same with developer tools, for tools for committing, deploying, building code and the whole pipeline.
>
> **[1:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=92)** Things for front-end, web and mobile.
>
> **[1:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=94)** So things like Amplify that ties a lot of services together for development using web or mobile platforms.
>
> **[1:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=102)** And AppSync for creating a GraphQL API.
>
> **[1:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=106)** I love using that service.
>
> **[1:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=107)** It has a great offline feature for that.
>
> **[1:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=110)** And then of course, things like security where you have to use authentication and authorization for allowing services to call each other.
>
> **[1:58](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=118)** IAM is kind of the whole clearing house for all the different authorization and policies.
>
> **[2:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=124)** And Cognito is a great service for allowing users to log in either with existing accounts or creating new accounts just for your app.
>
> **[2:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=132)** And then there's storage.
>
> **[2:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=133)** You may have heard of S3 buckets, great place for allowing users to store files or just the app storing files that need to serve files to users or something during processing, whatever it is.
>
> **[2:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=145)** It's a great place for file storage.
>
> **[2:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=148)** So that's a bit about the organization.
>
> **[2:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=149)** When you come to the console you can kind of get a sense of this is your home field.
>
> **[2:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=154)** Over time, you may use this more or less, depending on how you get familiar with AWS, but it's a great starting place.
>
> **[2:41](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=161)** One other thing I want to point out is depending on your account, you should be assigned kind of a region, a default region where you're going to do your development.
>
> **[2:49](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=169)** And a lot of AWS services work in different regions.
>
> **[2:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=174)** Some services only work in one region and some services work across regions.
>
> **[2:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=179)** So sometimes you need to be a little bit careful about where you define like a Lambda versus the DynamoDB it's going to be hitting.
>
> **[3:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=185)** You want those probably to be in the same region.
>
> **[3:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=188)** In other cases, it doesn't matter.
>
> **[3:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=190)** Now, when you come to the console, it should use your default region, right there in the URL it's specified.
>
> **[3:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=198)** And also from this dropdown on the top right by your account name.
>
> **[3:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=202)** And all the links that it should lead you to from the console should also use that same region.
>
> **[3:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=207)** That's another good reason to try to use the console as kind of your home base for AWS development.
>
> **[3:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/aws-console-and-services?u=76281980&t=214)** So anyway, now that we're kind of getting familiar with this, let's take one more step in seeing what the future could be for your AWS experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (7), database (3), web (2), [[Analytics]] (1), [[Blockchain]] (1)
> **Env Vars:** aws (6), rds (1), api (1), iam (1), url (1)
> **CLI Commands:** aws (7), python (1), node (1)
> **Definitions:** is a  (4)
> **UI Navigation:** go to (1), click on (1), dropdown (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Speakers:** - so (1)

#### Certified Developer-Associate
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=0)** - [Instructor] Once you become pretty skilled at being an AWS developer, you may want to be able to have some quantifiable proof of what you know.
>
> **[0:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=8)** And one way to do that is with AWS certification.
>
> **[0:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=11)** You can go to aws.[amazon.com/certification](https://amazon.com/certification) and get a lot of information on what's required to become certified and how to do it.
>
> **[0:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=21)** There's a variety of different certifications, and if you look down here under the associate certifications there's one for development.
>
> **[0:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=28)** Now we're going to be talking about development in this course, so I'll click on that one and we can see some details.
>
> **[0:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=34)** So it's saying who should take this exam.
>
> **[0:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=36)** So this can give you an idea of what's required.
>
> **[0:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=39)** So, some high-level programming language experience, application life cycle management, the developing, deploying, and debugging of cloud-based applications, uses of tools like APIs, the command line interface, SDKs, and so on.
>
> **[0:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=54)** So you can get a sense of what kind of developer they're talking about here.
>
> **[0:58](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=58)** You can also see some details on the exam.
>
> **[1:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=61)** What does it look like?
>
> **[1:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=62)** And you can download things like the exam guide and sample questions and a lot of material on preparing for the certification.
>
> **[1:09](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=69)** So hopefully this course and other courses we provide will allow you to understand what's required and build a strong foundation in case you decide to go the direction of getting certified as an AWS developer.
>
> **[1:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/certified-developer-associate?u=76281980&t=82)** We'll be looking at a lot of the services that are required for this test, so hopefully this will be a great start for you if you decide to go that route.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (4), [[Programming]] (1), application (1), management (1), [[Debugging]] (1)
> **CLI Commands:** aws (4)
> **Env Vars:** aws (3)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 2. Security

[↑ Back to Table of Contents](#table-of-contents)

#### Identity and Access Management (IAM)
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=0)** - [Instructor] As with any platform where you have an account, you should always consider security.
>
> **[0:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=5)** We're going to talk about security first using IAM.
>
> **[0:09](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=9)** You can get there from the recently visited if it's listed, your favorites or from the services drop down.
>
> **[0:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=15)** I'm going to scroll down to security, identity and compliance and then find IAM and click on that.
>
> **[0:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=21)** IAM stands for Identity and Access Management or IIAM or IAM.
>
> **[0:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=27)** Now, there's two primary concepts I want to talk about here.
>
> **[0:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=30)** One is users.
>
> **[0:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=32)** So as you might expect, you can create various user accounts, give them different user names and so forth and then you want to give them permissions.
>
> **[0:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=40)** To do that, you attach policies to the specific account.
>
> **[0:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=44)** Notice that this root account has one policy which is administrator access, which of course gives them permission for everything.
>
> **[0:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=53)** If we look at the policy summary here, we'll see that for every service they have full access on all resources.
>
> **[1:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=60)** We can look at the JSON.
>
> **[1:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=61)** We see it uses wildcards to allow everything on everything.
>
> **[1:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=66)** Now, if you were creating another user account, you probably wouldn't want to give them all those permissions.
>
> **[1:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=72)** So instead, when you clicked add permissions or during the account creation, you might attach existing policies directly and do a search for something like DynamoDB and give them access to that.
>
> **[1:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=84)** You can also do it through user groups which we'll talk about in the next video or you can copy permissions from an existing user.
>
> **[1:31](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=91)** So users get permissions through policies and there are a lot of existing policies.
>
> **[1:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=97)** You can even create your own policies.
>
> **[1:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=100)** There's over 900 policies here that are defined in AWS and you can create your own.
>
> **[1:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=107)** User groups allows you to create a group and attach policies to it.
>
> **[1:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=110)** For example, if you have a tester group and then whenever you create a tester account, you can just assign them to the group and if necessary assign them other policies, but they would have a collection of these policies that you could change just in one place.
>
> **[2:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=124)** Roles is the other big concept.
>
> **[2:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=126)** This allows you to assign policies to a role that a service can adopt when it's running.
>
> **[2:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=133)** So if you have a Lambda that needs to access DynamoDB and SNS, you could create a role with those two and assign it to the Lambda.
>
> **[2:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=141)** Then the Lambda would have permission for that.
>
> **[2:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=143)** All of your Lambdas may have the same role or they may use different roles.
>
> **[2:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=147)** You can also use identity providers in AWS to allow users to log in with that and you can specify various account settings for your accounts that get created for things like changing the password.
>
> **[2:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=158)** We're going to go into some more details of users and user groups in the next few videos.
>
> **[2:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-and-access-management-iam?u=76281980&t=162)** So hopefully it'll become more and more clear.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (3), next (2), aws (2), management (1), [[JSON]] (1)
> **Env Vars:** iam (4), aws (2), iiam (1), json (1), sns (1)
> **CLI Commands:** aws (2), find (1)
> **Cross-References:** in the next (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)
> **Best Practices:** you should always (1)

#### Users and groups
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=0)** - [Instructor] So now we're going to look at a couple of things that I mentioned in the previous video, users and user groups.
>
> **[0:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=6)** So all of these items in here relate to each other directly and indirectly.
>
> **[0:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=11)** So you can kind of start at any point and get to the other points.
>
> **[0:16](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=16)** So for users, you should have a root user, that might be who you're logged in as.
>
> **[0:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=21)** It's good practice to go ahead and create another user that has the same privileges, but they still won't be a root user from the standpoint of being able to actually delete the entire account.
>
> **[0:31](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=31)** So let's look at creating a user.
>
> **[0:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=33)** I'm going to click on Add users.
>
> **[0:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=35)** I'm going to give it the username adminuser.
>
> **[0:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=39)** And you can get an access key, which will allow you to programmatically log in for things like the API, command line interface, SDKs, and so forth.
>
> **[0:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=50)** Or you can do a password login.
>
> **[0:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=53)** This will allow the user to log in through the console like we are here.
>
> **[0:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=57)** You can customize the password or autogenerate it.
>
> **[1:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=61)** You can force the user to create a new password when they log in as well.
>
> **[1:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=65)** So fairly basic stuff.
>
> **[1:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=67)** And then you can add the user to a group, and that way they get their permissions as part of the group definition.
>
> **[1:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=74)** You can copy permissions from an existing user, like the root user has administrator access.
>
> **[1:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=81)** Or you can attach existing policies directly.
>
> **[1:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=84)** When you do this, you can select all the policies you want.
>
> **[1:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=88)** You could say I want to give them all the DynamoDB access or Lambda access or whatever it is.
>
> **[1:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=95)** In this case, I'm actually going to use the administrator access.
>
> **[1:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=98)** So even though this is not a root user from the standpoint of being able to delete the account, they will have all the permissions.
>
> **[1:45](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=105)** I'm not going to add any tags.
>
> **[1:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=107)** We can review this, and I can create the user.
>
> **[1:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=110)** At this point, we get the access key that we can copy.
>
> **[1:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=113)** We can see the secret access key and the password.
>
> **[1:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=117)** No, I'm not going to show those to you.
>
> **[1:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=119)** And you can email this information to a user.
>
> **[2:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=122)** Now this is the only time you'll be able to access this key and this password, so you should copy it here.
>
> **[2:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=128)** Otherwise it's gone.
>
> **[2:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=130)** So I'm going to just close this for now.
>
> **[2:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=132)** We've created this user, and we can go look at this user, and we can see the permissions, and we could add additional permissions to this.
>
> **[2:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=141)** We could also add them to a group.
>
> **[2:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=144)** I don't have any groups defined, so let's do that.
>
> **[2:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=147)** So I'm going to click on User groups over on the left and create a new group, and it's going to be fairly similar, and I'm going to call it my TestGroup.
>
> **[2:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=156)** And I could add different users to that.
>
> **[2:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=159)** Maybe I'll add just the adminuser.
>
> **[2:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=162)** And then I could add additional policies here if I want to.
>
> **[2:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=166)** And then create the group.
>
> **[2:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=167)** And now I've got this group.
>
> **[2:49](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=169)** I could click on it and add additional users, or I can go to the users themselves.
>
> **[2:56](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=176)** And I could click on the Groups tab under the users and add them to a group.
>
> **[3:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=181)** This is just a handy way to be able to manage policies as a group.
>
> **[3:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=187)** And so if I wanted to change all of the permissions for everyone in the TestGroup, I can just do it in that one place, very handy.
>
> **[3:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=193)** So that's just a quick look at users and user groups, how they relate to each other.
>
> **[3:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=198)** Users can be in the groups.
>
> **[3:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=199)** Users have policies, groups have policies.
>
> **[3:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=202)** Users in groups, they can have policies that way as well.
>
> **[3:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/users-and-groups?u=76281980&t=205)** So just different ways to be able to manage users and their policies, which is all the permissions for when they log in through the console, or the command line interface, API, SDK, that sort of thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (2)
> **UI Navigation:** click on (4), go to (1)
> **Env Vars:** api (2), sdk (1)
> **Tools:** command line (2)
> **Cross-References:** previous video (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Roles and policies
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=0)** - [Instructor] In the previous video, we talked about users and user groups, and how they use policies to give them permissions into other services.
>
> **[0:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=7)** Now we're going to talk about roles.
>
> **[0:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=10)** Roles are adopted by services that don't necessarily have a user associated with them.
>
> **[0:16](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=16)** They're just going to be run either periodically or when they're hit from an API, whatever it is, this service is going to run and it needs some permissions.
>
> **[0:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=23)** A real good example is a Lambda.
>
> **[0:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=25)** Lambdas often need functionality into other services, like an S3 bucket or a DynamoDB table.
>
> **[0:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=32)** So I'm going to create a role to kind of look at how that works.
>
> **[0:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=35)** So the first thing I want to do is I'm going to use AWS S3 service.
>
> **[0:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=40)** And I'm going to pick Lambda right here.
>
> **[0:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=42)** So my Lambda that's going to use this role needs some permissions.
>
> **[0:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=46)** So I'm going to click Next, and give it those permissions.
>
> **[0:49](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=49)** Let's say it needs to access a DynamoDB table.
>
> **[0:52](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=52)** So I'm going to use a filter of dyna.
>
> **[0:55](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=55)** And I can give it, for example, the LambdaDynamoDBExecutionRole.
>
> **[1:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=60)** Depending on what you're trying to do, you may want to look down into the details and see everything that's provided by these policies.
>
> **[1:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=67)** But as an example, I'm just going to use the LambdaDynamoDBExecutionRole.
>
> **[1:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=72)** I'll click Next here.
>
> **[1:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=73)** I'm going to give my role a name of MyLambdaRole.
>
> **[1:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=77)** It already has a description.
>
> **[1:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=78)** I can see the JSON.
>
> **[1:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=80)** I see the permissions.
>
> **[1:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=81)** I'm going to create the role.
>
> **[1:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=83)** Now I have a role that any Lambda I write that needs those permissions can adopt.
>
> **[1:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=88)** So when you create a Lambda, it's going to say what role do you want this to run as?
>
> **[1:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=93)** And I've made that collection of policies with this Lambda role.
>
> **[1:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=96)** You can also create specific policies if for some reason there isn't one that quite satisfies what you want.
>
> **[1:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=102)** There's hundreds of them, so there probably is but maybe you want to limit to just a certain DynamoDB table or a certain S3 bucket.
>
> **[1:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=110)** In that case, you can create a policy.
>
> **[1:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=113)** So you pick the service that you're going to limit for, for example, DynamoDB.
>
> **[1:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=119)** And then you select what actions you want to allow.
>
> **[2:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=122)** Maybe we want to allow list and read but will not allow the user of this policy to write.
>
> **[2:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=131)** Then you can specify specific resources, specific DynamoDB tables to limit each of these actions.
>
> **[2:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=138)** To do that, you would add an ARN, an Amazon Resource Name.
>
> **[2:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=141)** You would get this by the table itself.
>
> **[2:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=144)** So you'd go to the DynamoDB tables console or if it's an S3 bucket, you'd go to S3, and you would get the ARN for that specific table or you can allow it on all resources.
>
> **[2:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=157)** So we're basically creating a kind of list/read-only policy here.
>
> **[2:43](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=163)** We're going to click Next for tags.
>
> **[2:45](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=165)** Then we're going to review it.
>
> **[2:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=166)** And here we give it the name.
>
> **[2:48](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=168)** So we'll do it like a ReadOnlyDynamoDB policy.
>
> **[2:55](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=175)** List and read commands.
>
> **[2:58](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=178)** And we could look at the details here and then create the policy.
>
> **[3:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=181)** And now if we ever want to create a role or a user that only has these permissions, we can assign this policy to that user or that role or again, as the user group.
>
> **[3:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=192)** So you do have a lot of power and I am for creating users, user groups, roles and policies.
>
> **[3:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/roles-and-policies?u=76281980&t=199)** In many cases, you can use the provided policies but occasionally, you might want to create your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), hit (1), api (1), aws (1), [[JSON]] (1)
> **Env Vars:** arn (2), api (1), aws (1), json (1)
> **Cross-References:** previous video (1), we talked about (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (2)
> **CLI Commands:** aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Cognito
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=0)** - [Instructor] Continuing our discussion on how users access services and features through your app or website, we're going to talk about Cognito.
>
> **[0:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=8)** So Cognito offers two types of pools, user pools and identity pools.
>
> **[0:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=14)** User pools are user directories that provide sign-up and sign-in options for your app users.
>
> **[0:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=21)** So basically users that create an account through your app or your website using AWS.
>
> **[0:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=28)** Identity pools provide AWS credentials to grant your users access to others AWS services without possibly a login directly through your app.
>
> **[0:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=38)** So maybe through a third party or maybe through a custom login that you already have on the server.
>
> **[0:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=44)** So user pools are created using the settings and options that allow users to log in.
>
> **[0:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=50)** So you can specify if they have to have a username and email address, the different criteria for their password, and also MFA and anything else that you would require during login.
>
> **[1:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=61)** Identity pools also allow users to log in, or in some cases not, to have access to AWS services.
>
> **[1:09](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=69)** Again, you might allow users to access files in AWS S3 buckets without actually even having an account.
>
> **[1:16](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=76)** For example, let's say you store your background image of your app in an AWS S3 bucket.
>
> **[1:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=82)** Well, you want the user to be able to access that, so you give them credentials through an identity pool.
>
> **[1:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=88)** This can also facilitate users with accounts on other systems, so for example, if you already have a login system, but you want to add AWS Services to your app or website.
>
> **[1:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cognito?u=76281980&t=98)** And we'll look at those in a little bit more detail next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (7), next (1)
> **Env Vars:** aws (7), mfa (1)
> **CLI Commands:** aws (7)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Identity pools
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=0)** - [Instructor] Now that we've talked about roles and their policies, we want to talk about the very common scenario of having a case where users are logging into your app or website, and then they're going to need permissions.
>
> **[0:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=12)** Once they're authenticated, they need authorization to do something, typically to hit an API or to hit a Lambda, something like that.
>
> **[0:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=20)** And for that, we're going to use Cognito.
>
> **[0:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=23)** So I'm going to go back down to the services of Security, Identity, & Compliance and click on Cognito.
>
> **[0:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=29)** Now I mentioned the two types of pools, user pools and identity pools.
>
> **[0:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=33)** User pools helps the system authenticate a user.
>
> **[0:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=37)** It's the identity pool that gives them authorization.
>
> **[0:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=40)** So I'm going to click Identity Pools, and we're going to create a new one.
>
> **[0:43](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=43)** So the identity pool, we'll just call it MyIDPool.
>
> **[0:48](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=48)** And then you have to decide if you want to allow unauthenticated entities.
>
> **[0:52](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=52)** So this is kind of interesting.
>
> **[0:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=54)** This is the case where maybe you have some API endpoints that you want anybody to be able to use.
>
> **[1:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=60)** Maybe if your app fetches images from an S3 bucket, you do want to allow the user to be able to get some images.
>
> **[1:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=68)** They just can't write any images, something like that.
>
> **[1:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=70)** Or maybe they can call certain Lambda endpoints but not other ones.
>
> **[1:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=73)** So you might want to allow some unauthenticated entities.
>
> **[1:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=78)** Otherwise you pretty much just want the classic flow, but we're not going to use the multi-step.
>
> **[1:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=84)** And for authentication providers, you have a variety of kind of common options here.
>
> **[1:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=90)** One of them being Cognito itself.
>
> **[1:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=93)** You can use Cognito to use a user pool, and that'll do the authentication.
>
> **[1:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=98)** Or maybe you want to allow users to log in with an Amazon account or Apple or something, maybe multiple ones.
>
> **[1:45](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=105)** You can add additional providers there.
>
> **[1:48](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=108)** And then you create the pool.
>
> **[1:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=110)** Now we need to allow some aspect of what role these users are going to have when they're authenticated.
>
> **[2:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=120)** So this is going to create new IAM roles for us.
>
> **[2:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=123)** We can look at the authenticated role and what do they have permission to do.
>
> **[2:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=127)** So analytics and some Cognito stuff.
>
> **[2:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=130)** Really, almost nothing.
>
> **[2:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=132)** We can change those later, or if we'd already defined roles, we could use our defined roles.
>
> **[2:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=137)** The unauthenticated role only allows for puts on the analytics and a little bit of Cognito sync.
>
> **[2:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=145)** So less, again, we could edit these and add other permissions that we need, for example, calling an API endpoint or a Lambda or whatever we need.
>
> **[2:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=154)** But once we allow these, this should create those permissions.
>
> **[2:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=158)** So I'm going to go back to IAM, and I'm going to look for those roles, and there they are.
>
> **[2:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=164)** And as necessary, I could edit these and add additional services to them to allow logged in users to either call an API endpoint or whatever permissions they need.
>
> **[2:56](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=176)** And unauthenticated users to be able to call just certain Lambdas or certain API endpoints.
>
> **[3:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=183)** And that would be how I control it.
>
> **[3:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=184)** Now how does a user get into the identity pool?
>
> **[3:09](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=189)** How do they get that role?
>
> **[3:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=191)** Well, that is the user pool or some other identifying authorization provider.
>
> **[3:16](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-pools?u=76281980&t=196)** And we're going to look at that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (5), hit (2), [[Analytics]] (2), [[Security]] (1), next (1)
> **Env Vars:** api (5), iam (2)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Identity provider (IdP)
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=0)** - [Instructor] So now we have an identity pool.
>
> **[0:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=2)** That means for any authorized or unauthorized user, it assigns them that role that we specified depending on their authorization.
>
> **[0:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=11)** And then they have the permissions related to that role.
>
> **[0:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=14)** So how do they get into the identity pool?
>
> **[0:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=18)** That's done by the authentication providers.
>
> **[0:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=22)** So we specify how they get authenticated into this identity pool.
>
> **[0:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=27)** Now, a very common one is to use Cognito itself.
>
> **[0:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=29)** That's where the user pool comes in.
>
> **[0:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=32)** But you can use some other services like Amazon, where you put in the app ID or Apple, Facebook.
>
> **[0:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=39)** All of these services have different routes, but typically you would go there, create the Facebook app or the Google app, and you would get the client ID and follow the steps for creating that.
>
> **[0:52](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=52)** Open ID and SAML typically are for existing server logins and you would have to facilitate that authentication through the steps in IAM.
>
> **[1:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=62)** We're going to use Cognito.
>
> **[1:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=64)** So we have to create a user pool to allow users to create their account and log in and then assume the authenticated role.
>
> **[1:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/identity-provider-idp?u=76281980&t=72)** So let's look next at how to create a user pool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), next (1)
> **Env Vars:** saml (1), iam (1)
> **Speakers:** - [instructor] (1)

#### User pools
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=0)** - [Instructor] Since we're going to use Cognito as our authentication provider, we can stay within Cognito.
>
> **[0:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=7)** There's a couple of ways we can get to the user pool section.
>
> **[0:09](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=9)** We can either go back to Cognito or we can click on this federated identities and then select user pools.
>
> **[0:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=17)** We don't have a user pool yet.
>
> **[0:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=19)** We want to create one and then use it in our identity pool as the authorization provider.
>
> **[0:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=25)** So I'm going to click create a user pool, and I'm going to give it a name, MyPool.
>
> **[0:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=30)** And then we can either step through all the settings or just review the defaults.
>
> **[0:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=34)** We're just going to review the defaults.
>
> **[0:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=36)** We'll see that they log in with their email, there can be some other attributes we set up, the requirements for their password, the from email address and how to deliver the verification email, a multifactor authentication, so forth.
>
> **[0:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=53)** And then we're going to create the pool.
>
> **[0:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=54)** This triggers is actually pretty handy if you wanted to run a Lambda at any point during the process, creating or authenticating a new user.
>
> **[1:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=62)** So I'll click create pool.
>
> **[1:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=64)** And here I have a new pool, and here's the ARN and the pool ID.
>
> **[1:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=68)** I probably want to copy those to put into the identity pool.
>
> **[1:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=72)** But for now, I want to show you that once you have your pool created, you can look at all the users that are created and see if they verified their account, you can look at the attributes for how the user's account is stored, if they have the username, email address, and any other attributes that you want to collect, the various policies for the password, MFA, security, you can remember the user's devices when they log in so you know if they're using the same device as a previous login.
>
> **[1:41](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=101)** If you're going to use this in an app or a website, you can add an app client and that'll give you some details to put into your app or website for accessing this pool through the web.
>
> **[1:55](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=115)** Triggers, as I mentioned, you can run Lambdas at different portions of the process, analytics, and again, your app client settings in here to be able to specify how to integrate with various apps and websites, and so forth.
>
> **[2:09](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=129)** So let's go back to the general settings and I'm going to select the pool ID and copy that.
>
> **[2:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=134)** And then I'm going to open Cognito in another tab.
>
> **[2:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=137)** And now, in that tab, I want to go back to my identity pool and set as the authentication provider our new user pool.
>
> **[2:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=145)** So I'm going to select on my identity pool, and then I'm going to click on edit identity pool.
>
> **[2:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=152)** And down under the authentication providers, the pool ID, I'll paste what I copied.
>
> **[2:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=159)** And then for the app ARN, I want to, I want to create an app client.
>
> **[2:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=166)** Here, I can name the client whatever I want, like MyMobileApp.
>
> **[2:52](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=172)** And I can specify the refresh token, access token, and other basic settings.
>
> **[2:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=177)** I'm going to use the default.
>
> **[2:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=179)** Create this app client.
>
> **[3:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=182)** And I'm looking for this app client ID that was just created, and I can select that and put that into my client ID.
>
> **[3:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=191)** And once I save these settings, I have specified that my user pool can be used as an authentication provider into my identity pool.
>
> **[3:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=202)** So now, when I use these details in my mobile app, in this case, it will be used as an authentication provider into my identity pool, and then the users logged in will adopt the role assigned with the authorized user.
>
> **[3:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=219)** And I could create another app client for my website or a different mobile app.
>
> **[3:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=226)** It depends on how you want to organize it.
>
> **[3:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=227)** But I would recommend having something different in each case, so that if you need to make changes to one, you don't change them all.
>
> **[3:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/user-pools?u=76281980&t=234)** But now, I have a user pool as my authentication provider, and anyone creating an account and logging in using that account in the user pool will go to the identity pool and be assigned the role that can then hit the API endpoints or whatever else I have as functionality in my app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (1), web (1), [[Analytics]] (1), hit (1), api (1)
> **Env Vars:** arn (2), mfa (1), api (1)
> **UI Navigation:** click on (2), select the (1), go to (1)
> **Cross-References:** go back to (3)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Development

[↑ Back to Table of Contents](#table-of-contents)

#### SDK and tools
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=0)** - [Instructor] When you start developing on AWS, you're not out on your own in the wild west.
>
> **[0:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=6)** They give you a lot of tools and help online to give you a leg up, get you a head start.
>
> **[0:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=12)** And these are the kinds of sites I love to see when I'm going to develop on a platform.
>
> **[0:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=17)** So here I am at aws.[amazon.com/tools](https://amazon.com/tools).
>
> **[0:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=21)** And again, this is the kind of website that's like just a toy chest to me.
>
> **[0:26](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=26)** I love seeing websites like this.
>
> **[0:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=28)** So for all these different languages, depending on what you're going to develop in, if it's something on the web or even local, you can get help for building applications, working with your various IDEs, some tutorials, community, a lot of resources out there to help you really get started and keep going strong.
>
> **[0:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=46)** They also provide some really cool tools.
>
> **[0:49](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=49)** Now, when I see command line tools, I'll be honest, I get a little intimidated.
>
> **[0:52](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=52)** I like having an interface, even though I write code and I don't design interfaces.
>
> **[0:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=57)** I like using them.
>
> **[0:58](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=58)** But these command line interfaces are really helpful and pretty easy to use.
>
> **[1:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=62)** The AWS CLI, you'll see a lot of commands when you're working and going through tutorials of how to do things with AWS through the command line and the Amplify CLI's really helpful when you're developing locally for a web app or a mobile app.
>
> **[1:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=78)** It can add features and services to your app locally and sync it automatically with AWS and your project online.
>
> **[1:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=85)** You have a lot of other sections for tools and SDKs.
>
> **[1:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=88)** Some of the ones that I really like are the mobile SDKs.
>
> **[1:31](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=91)** So I use this iOS one a lot.
>
> **[1:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=94)** You also have the front end web and mobile tools.
>
> **[1:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=97)** Here's Amplify again.
>
> **[1:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=98)** This is not the CLI.
>
> **[1:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=100)** You can also do Amplify through the console or the CLI and services like CloudWatch where you can access this from a lot of places, so this isn't necessarily anything unique.
>
> **[1:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=110)** It's just grouping these things for you.
>
> **[1:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=113)** And of course the various SDKs for your languages.
>
> **[1:56](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=116)** So as we've seen with the listing of services and all these other menus, AWS loves listing and grouping and providing this type of information in a very helpful way.
>
> **[2:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=127)** Here's another site that is very similar.
>
> **[2:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=130)** So this is AWS.[amazon.com/getting-started/tools-sdk](https://amazon.com/getting-started/tools-sdk).
>
> **[2:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=138)** So you'll notice it's very similar.
>
> **[2:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=140)** So you have the SDKs up here.
>
> **[2:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=142)** You have the web and mobile SDKs right here, internet of things, the IDE.
>
> **[2:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=147)** So you can code in your own IDE, even the online IDE.
>
> **[2:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=152)** The command line tools again, the developer tools.
>
> **[2:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=155)** So this can really help your entire pipeline.
>
> **[2:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=158)** So when you commit code, it can build and deploy for you.
>
> **[2:41](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=161)** You can even use the online IDE and have your entire environment in AWS and things like the forums and the developer center.
>
> **[2:49](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=169)** So again, resources for you.
>
> **[2:51](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=171)** So there's a lot of things out there for you, and sometimes you'll go to one website and you'll think, "Well, is this different from that one?"
>
> **[2:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/sdk-and-tools?u=76281980&t=177)** Sometimes it is, sometimes it isn't, but I highly encourage you to explore all of these different things, at least to get familiar with what's out there, especially if you're going to be going for a certification for AWS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (9), web (4), [[CLI]] (4), [[Internet of Things (IoT)|Internet of things]] (1)
> **Env Vars:** aws (8), cli (4), ide (4)
> **CLI Commands:** aws (9)
> **Tools:** command line (4)
> **URLs:** [amazon.com](https://amazon.com) (2)
> **Code Identifiers:** ios (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Simple Storage Service (S3)
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=0)** - [Instructor] Regardless of what you're trying to develop, there may be a case where you need to store some files online, and that's a great use for S3.
>
> **[0:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=8)** So I'm going to go back to the console.aws.[amazon.com](https://amazon.com), and I can either go to the Recently visited and pick S3, my favorites or in Services.
>
> **[0:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=19)** I'm going to scroll down and click Storage and then S3, which is the Simple Storage Service from AWS.
>
> **[0:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=28)** So this is kind of like hard drives.
>
> **[0:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=30)** You may have heard of an S3 bucket.
>
> **[0:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=33)** This is like a mounted hard drive, for example.
>
> **[0:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=36)** So I'm going to click Create bucket, and this will create kind of the drive for me, but it's called a bucket.
>
> **[0:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=42)** So I'm going to put mybucket in here, as the name.
>
> **[0:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=46)** You could pick a different region if you want to.
>
> **[0:49](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=49)** Buckets are accessible across regions.
>
> **[0:51](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=51)** So if you have a Lambda in another region, it could still access it from here but for performance sake and possible legal issues, I wouldn't store it in other countries.
>
> **[1:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=62)** So I'm just going to pick the default region that's selected for me, and I'm going to select the defaults everywhere else as well.
>
> **[1:09](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=69)** So I've got my ACLs disabled.
>
> **[1:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=72)** I'm blocking all public access.
>
> **[1:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=74)** I don't have versioning or tags or encryption on it or anything, but you can go through those and in some cases, you may need to set something like that, but I'm just going to create the bucket and oh, oh, what went wrong?
>
> **[1:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=85)** Well, my name isn't unique, then I'm going to Command-click on the rules for bucket naming, and we can look at that, and you can see that it has to have a certain length and has to be lowercase and so forth.
>
> **[1:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=98)** So they're fairly strict, but also it has to be unique.
>
> **[1:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=102)** So this name already exists.
>
> **[1:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=104)** Well, of course it exists.
>
> **[1:45](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=105)** It's not very unique.
>
> **[1:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=107)** So I'm going to put something on the end of it like [brainwashinc.com](https://brainwashinc.com), and maybe that'll be unique, and then I can create the bucket and now, once the bucket's created, I can click on it and drill down into it.
>
> **[2:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=120)** I can see its properties and permissions, for example.
>
> **[2:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=123)** Remember we have Block all public access.
>
> **[2:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=126)** I'd probably want to tick that off if I wanted to allow access to the files just from anywhere in the web, but if I'm just going to use these for my Lambdas, that's probably something I want to retain, but if I wanted to publish a document or an image or something, publicly, then I'd want to turn this off, but I'd also have to change the permissions on the file, potentially.
>
> **[2:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=149)** Similarly, I'd have to change the object ownership and the access control list and so forth.
>
> **[2:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=155)** So by default, it's pretty tight.
>
> **[2:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=158)** So I'm going to go back to my list of buckets, click on the bucket again, and now I'm going to upload a file.
>
> **[2:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=164)** So I'm just going to take a quick little screenshot, and then I'm going to drag that and have that upload the file, and now once it's uploaded, it will be listed kind of like a folder on a hard drive, and I can access that by clicking on it.
>
> **[3:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=182)** I can copy the S3 link.
>
> **[3:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=184)** So this would be internal to AWS.
>
> **[3:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=187)** I can download it, and I can open it and look at it, but notice that even though I've got this object URL, if I Command-click on that, it will say AccessDenied, again, because the permissions are blocked for public access.
>
> **[3:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=203)** So I can change the permissions on this file.
>
> **[3:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=205)** I'd have to change the permissions on the bucket, as I mentioned before, for the ACLs, but you could have publicly published files.
>
> **[3:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=213)** Back at the buckets, if I ever want to change the permissions again, I can click on it and drill down into it.
>
> **[3:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=218)** I can also select it and copy the ARN.
>
> **[3:41](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=221)** Remember, I mentioned that as the Amazon Resource Name.
>
> **[3:43](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=223)** So that's kind of like the AWS URL to something.
>
> **[3:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=227)** You might need that in your Lambda if you want to access a specific bucket, that type of thing.
>
> **[3:52](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=232)** I'm going to empty this bucket and to do that, I have to type permanently delete here.
>
> **[3:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=239)** This is to verify that's actually what you want to do, and then I can delete the bucket itself.
>
> **[4:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=246)** Once it's empty, I can delete it, but I have to type its name in there.
>
> **[4:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=252)** Again, they want to protect you from yourself so that you don't accidentally delete something important.
>
> **[4:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=257)** Now that I've deleted it, I'm back to the starting page for S3, where again, I can create a bucket.
>
> **[4:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-storage-service-s3?u=76281980&t=262)** So again, buckets are very, very handy for file storage when you're developing a web app or a mobile app, where users want to upload and download files, for example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (4), web (2)
> **UI Navigation:** click on (5), go to (1), scroll down (1)
> **Env Vars:** aws (3), url (2), arn (1)
> **Analogies:** for example (3), kind of like (2)
> **CLI Commands:** aws (4)
> **URLs:** [amazon.com](https://amazon.com) (1), [brainwashinc.com](https://brainwashinc.com) (1)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### DynamoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=0)** - [Instructor] Another very common way to store data is in a database, of course.
>
> **[0:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=4)** And AWS provides DynamoDB as one of the options for that.
>
> **[0:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=8)** So let's go look at it.
>
> **[0:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=10)** Under Services, I'm going to go down to the Database section, and click on DynamoDB.
>
> **[0:16](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=16)** Here we can create tables, and data on those tables and do all other types of table management.
>
> **[0:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=22)** So I'm going to click on Tables, and I'm going to close this left section for some real estate.
>
> **[0:26](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=26)** And I'm going to create a table.
>
> **[0:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=28)** Now, you can give it pretty much any name you want.
>
> **[0:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=30)** So I'm going to name it MyData.
>
> **[0:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=32)** And then you can give it a partition key.
>
> **[0:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=34)** If you only use the partition key, then this value will be the unique ID for the row.
>
> **[0:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=40)** So I'm going to do something like userId and make it a string.
>
> **[0:45](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=45)** This also specifies where the data will be stored.
>
> **[0:49](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=49)** So you can use a secondary key, the sort key, which is optional, and if you do, then the two of these will be the unique ID for the given row.
>
> **[0:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=59)** And the partition key will specify where it's stored.
>
> **[1:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=62)** So this can be really useful when you have a lot of data that's related, and it's probably going to be fetched around the same time.
>
> **[1:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=68)** You might want to use the same partition key so it's stored close to each other.
>
> **[1:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=72)** And then the sort key is also combined with the partition key to be the unique ID.
>
> **[1:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=77)** So I'm going to make my sort key createdAt.
>
> **[1:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=80)** And I'll make that a number.
>
> **[1:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=82)** I'm going to use the default settings, which is actually what I usually use but you can go through the custom settings and explore those.
>
> **[1:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=90)** Once the table's created, we can check on it, and explore some actions.
>
> **[1:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=95)** We can look at the data itself by clicking on the name.
>
> **[1:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=99)** I'm going to close this left section to get more real estate.
>
> **[1:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=102)** Then you can look at the indices, monitor the performance.
>
> **[1:45](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=105)** You can make backups, make it a global table so it's easily accessed across regions.
>
> **[1:51](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=111)** I'm going to explore the table items, which, of course, we don't have any yet but I can create one with the Create item button, and I just put in the values like bear, 1234.
>
> **[2:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=120)** I can even add additional attributes or view the JSON here.
>
> **[2:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=123)** I'm going to create this item.
>
> **[2:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=125)** And then once it's created, I'm going to show you another action you can do.
>
> **[2:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=128)** When I select the item, I can do an action of duplicate item, and I start with the same values but, of course, I have to change these because they have to be unique.
>
> **[2:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=137)** I can also add another attribute like location as a string, and I'll make home.
>
> **[2:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=143)** Now notice, the other value in our table doesn't have that value and that's quite all right with DynamoDB.
>
> **[2:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=148)** It just doesn't have that value.
>
> **[2:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=150)** And when I set the value, it was created as a column.
>
> **[2:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=153)** I can also do scans and I can add filters.
>
> **[2:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=157)** So I could do something like where userId, since it's a string, I can say where it contains a two.
>
> **[2:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=164)** And run that.
>
> **[2:45](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=165)** If I do a query, it will require the unique ID.
>
> **[2:49](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=169)** So I'd have to provide the userId and something to do with the sort key.
>
> **[2:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=173)** Equal to or some other type of comparison.
>
> **[2:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=177)** Another great tool in a table is to go into the Exports and streams, and enable the DynamoDB streams.
>
> **[3:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=186)** You can specify what you want sent to the stream.
>
> **[3:09](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=189)** I like to do new and old.
>
> **[3:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=190)** This way if anything changes, I can see the new and the old values.
>
> **[3:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=195)** And then I enable that stream.
>
> **[3:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=197)** Once it's enabled, I can create a trigger.
>
> **[3:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=200)** Now, this means that whenever something is changed, it will call a Lambda function.
>
> **[3:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=205)** So I can create a new Lambda function or I could use an existing one.
>
> **[3:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=209)** Now, when you go to create the trigger, it may not work because of the permissions on the role in DynamoDB.
>
> **[3:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=216)** But it will tell you what permissions may be missing and then you can go and update those permissions and policies for the role of DynamoDB.
>
> **[3:45](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=225)** But it's very helpful to be able to call a Lambda whenever data changes and then perform some functionality.
>
> **[3:51](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=231)** Also, the provided SDKs and libraries allow you to write Lambda functions and mobile apps to be able to interact with that.
>
> **[3:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=239)** I love the AppSync service.
>
> **[4:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=242)** That uses a GraphQL API into a DynamoDB table.
>
> **[4:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=246)** And also, API Gateway can send requests to a Lambda, which can also access DynamoDB.
>
> **[4:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=252)** So now that I have this table selected, I'm going to delete it and I just have to type delete in there.
>
> **[4:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=259)** And click Delete table.
>
> **[4:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=261)** So DynamoDB's really helpful.
>
> **[4:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=262)** I use it in almost every project I do using AWS.
>
> **[4:26](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=266)** I access the data from a Lambda usually on the backend of an API.
>
> **[4:31](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/dynamodb?u=76281980&t=271)** And it's so easy and so, so helpful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), api (3), database (2), aws (2), management (1)
> **CLI Commands:** make (6), aws (2)
> **Env Vars:** api (3), aws (2), json (1)
> **Code Identifiers:** userid (3), createdat (1)
> **UI Navigation:** click on (2), select the (1), go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Lambda
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=0)** - [Instructor] Now admittedly, I'm not much of a server-side developer.
>
> **[0:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=4)** I don't know that much about server admin and configuration and all that kind of stuff.
>
> **[0:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=10)** But I can develop a lot of server-side functionality with AWS Lambdas.
>
> **[0:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=14)** So under the Services list, you can go to Compute and click on Lambda.
>
> **[0:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=20)** And this will take us to the dashboard for Lambdas, where we can create a function.
>
> **[0:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=24)** I'm going to close this left side for a little bit more space.
>
> **[0:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=27)** Now when you go to create a function for a Lambda, you need to give it things like the name and the runtime.
>
> **[0:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=32)** And you can choose from a variety of different runtimes and languages.
>
> **[0:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=36)** You also can pick your architecture and your permissions.
>
> **[0:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=39)** This will be your IAM role that it executes as.
>
> **[0:43](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=43)** You can start from scratch if you just already have your code or you want to write it from scratch.
>
> **[0:48](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=48)** You can start with a blueprint, which is kind of like some template code, something somebody's written and published.
>
> **[0:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=54)** You can use a container image.
>
> **[0:55](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=55)** And for that, you specify the URI to the container.
>
> **[0:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=59)** Or you can use one of these repositories, which in many cases use additional AWS Services inside of the code.
>
> **[1:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=66)** We're going to use a blueprint, and I'm going to do a filter on the word poller.
>
> **[1:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=71)** We're going to use SQS later, so this Lambda will set us up and get us ready for that.
>
> **[1:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=75)** So I'm going to click on this sqs-poller, click on the radio button, and click Configure.
>
> **[1:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=81)** And now we have to give it a name.
>
> **[1:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=82)** So I'm going to give it the same name, Poller.
>
> **[1:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=85)** We have to specify our IAM role for the execution of this Lambda, and we're going to let it create a new role, and we'll give it the name Poller role.
>
> **[1:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=97)** And it specifies the template policies.
>
> **[1:41](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=101)** It's using SQS, which we'll use later.
>
> **[1:43](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=103)** We could add additional ones if we wanted to, if we knew it was going to be hitting a DynamoDB table or something also.
>
> **[1:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=110)** You can also specify the trigger of where to put this, which SQS queue we should trigger off of.
>
> **[1:56](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=116)** We don't have one set up yet, so I'm just going to remove that for now.
>
> **[1:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=119)** And we have some boilerplate code.
>
> **[2:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=121)** So I'm going to click Create Function.
>
> **[2:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=124)** And once the function's created, we can scroll down, we can see the code.
>
> **[2:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=128)** We can look at the tests for it.
>
> **[2:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=130)** We haven't created any yet.
>
> **[2:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=131)** We can monitor its performance.
>
> **[2:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=133)** We can edit its configuration and so forth.
>
> **[2:16](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=136)** If we go back to the code, we can see that the handler is passed in the event, which this commented outline prints out.
>
> **[2:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=144)** So I'm going to uncomment out that line.
>
> **[2:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=147)** And we want to be able to print that out and test it.
>
> **[2:31](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=151)** So we haven't created any tests yet.
>
> **[2:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=153)** So if we click Test here, it's actually going to do the same thing as if we click this Configure test event.
>
> **[2:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=159)** So I'll just click that.
>
> **[2:41](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=161)** We're creating a new event, we're going to name it PollTest.
>
> **[2:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=166)** And it gave us automatically this template, because we used the blueprint for the SQS, it gave us this template of some details in here.
>
> **[2:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=174)** And we could make additional test cases with variations of this data and so forth.
>
> **[2:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=179)** I'm just going to click Save here.
>
> **[3:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=180)** Now that we have our test case and our code is updated, we need to deploy these changes.
>
> **[3:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=186)** We just click on Deploy, wait for it to tell us that it is successfully updated, and we can run the test by clicking Test.
>
> **[3:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=193)** Now we see the output of what was passed in as well as any output from the functionality.
>
> **[3:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=199)** Looks like everything was successful, so we're good.
>
> **[3:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=202)** You can also add triggers from this area.
>
> **[3:26](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=206)** We talked about triggers before from the DynamoDB table.
>
> **[3:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=210)** You can also add triggers on this level, adding a trigger, selecting what you want to trigger this Lambda.
>
> **[3:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=217)** Here's the DynamoDB example.
>
> **[3:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=219)** You could also do API Gateway.
>
> **[3:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=222)** And when someone hits the API Gateway, it would trigger this Lambda.
>
> **[3:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=226)** You can also change the versions of a Lambda.
>
> **[3:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=230)** You can upload from a zip file or an Amazon S3 bucket.
>
> **[3:55](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=235)** And you can go fullscreen with Command + Shift + F.
>
> **[3:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=239)** And that's a handy way to edit something with a little bit more familiar environment.
>
> **[4:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=244)** Lambda's incredibly helpful.
>
> **[4:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=246)** I use them all the time in apps where I create an API to run functionality, fetch, delete, update data in a Dynamo database, return back the JSON.
>
> **[4:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda?u=76281980&t=258)** And I'm able to create a very useful and effective server-side functional presence without being a pure web developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (3), aws (2), data (2), [[Microsoft Word|Word]] (1), [[Fetch]] (1)
> **Env Vars:** sqs (4), api (3), aws (2), iam (2), uri (1)
> **UI Navigation:** click on (4), go to (2), scroll down (1)
> **Exercise Files:** template (4), boilerplate (1), zip file (1)
> **CLI Commands:** aws (2), make (1)
> **Prerequisites:** configure (2), set up (1)
> **Cross-References:** go back to (1), we talked about (1)
> **Analogies:** kind of like (1)


### 4. Messaging and Event-Driven

[↑ Back to Table of Contents](#table-of-contents)

#### Simple Queue Service (SQS)
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=0)** - [Instructor] Another great AWS service is SQS, Simple Queue Service.
>
> **[0:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=5)** I love when simple's in the name.
>
> **[0:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=6)** It really helps me get less intimidated.
>
> **[0:09](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=9)** Simple Queue Service is a great way to send, store and receive messages between apps and various services in AWS.
>
> **[0:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=17)** It really helps you decouple your services because they don't have to directly interact.
>
> **[0:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=22)** Messages can be passed back and forth for functionality or any kind of notifications.
>
> **[0:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=27)** And it automatically uses SSE and KMS for security and encryption.
>
> **[0:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=32)** That happens behind the scenes so you don't really have to do anything for that, it's automatic.
>
> **[0:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=37)** Now there's two types of queues in SQS.
>
> **[0:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=40)** There's the standard queue, which uses maximum throughput, best-effort ordering and at-least-once delivery.
>
> **[0:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=47)** So you have to be careful.
>
> **[0:48](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=48)** If something's passed twice, you have to make sure you haven't already processed it or to make sure it's okay if it does get processed again.
>
> **[0:55](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=55)** And then there's first-in-first-out, where you know it's going to get process exactly once and in order.
>
> **[1:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=61)** Now let's say, for example, you have a Lambda function that can process messages from SQS.
>
> **[1:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=66)** You could set up a trigger on SQS to call that Lambda function and pass in the message.
>
> **[1:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=72)** Then all the functionality and output can be handled as necessary.
>
> **[1:16](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=76)** The Lambda can do whatever it needs to do and continue on for the next message.
>
> **[1:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=81)** So let's try that now.
>
> **[1:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=83)** So what we're going to do is we're going to set up an SQS queue to take messages and then trigger this Lambda, our Poller Lambda, whenever a new message is added to it.
>
> **[1:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=94)** So I'm going to go to SQS.
>
> **[1:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=95)** So from Services or from this bar up here I can search for SQS, and I'll open that in a separate tab.
>
> **[1:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=102)** Then over in SQS, I can create a queue.
>
> **[1:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=104)** And as we mentioned before, the two types are standard, first-in-first-out.
>
> **[1:48](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=108)** I'm just going to do a standard queue here, and I'm going to call this PollQ.
>
> **[1:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=114)** And for configuration of all the timeouts, the message periods, access, everything, I'm just going to take the defaults.
>
> **[1:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=119)** We'll just start with a nice, easy one.
>
> **[2:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=121)** And I'll create that queue.
>
> **[2:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=123)** Now I have a queue. It's as simple as that.
>
> **[2:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=125)** So I want to create a trigger that whenever a message is added to this queue, it will call the Poller Lambda.
>
> **[2:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=131)** So I'm going to go back to my Poller Lambda, and I'm going to click add trigger.
>
> **[2:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=137)** And similarly, I'm going to type SQS in here and select that.
>
> **[2:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=142)** And then it's going to prompt me for which queue.
>
> **[2:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=143)** Well, I only have one, so I'll select PollQ and for the batch size and all the other settings, we'll just keep the defaults as well.
>
> **[2:31](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=151)** And I'll add that queue and that's it.
>
> **[2:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=153)** That's all I have to do.
>
> **[2:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=155)** So what I want to do now is put a message on the queue.
>
> **[2:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=158)** It's going to call this Lambda function.
>
> **[2:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=160)** And then I want to look in the CloudWatch logs to see it execute.
>
> **[2:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=164)** So I'm going to go back to the queue.
>
> **[2:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=166)** So this is the queue I created and I'm going to click send and receive messages, and we're going to send a message, and I can just type something in here, like here's our queue message and send that.
>
> **[3:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=181)** So then I can go back to the Lambda.
>
> **[3:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=182)** It should have run by now.
>
> **[3:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=184)** And then I'm going to go to Monitor and under Logs, I'm going to click view logs in CloudWatch and open that into another tab.
>
> **[3:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=193)** So it goes right to the log group.
>
> **[3:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=195)** I'm going to click this to make sure I've got the most recent refreshed list.
>
> **[3:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=200)** Click on that log.
>
> **[3:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=202)** If I expand the messages, I can see what was passed in.
>
> **[3:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=204)** And there it is.
>
> **[3:26](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=206)** Here's our queue message.
>
> **[3:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=208)** Any message now put on this SQS queue is going to cause the Poller Lambda to be executed.
>
> **[3:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-queue-service-sqs?u=76281980&t=214)** So this is a great way to be able to communicate and send data between services in AWS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (3), [[Server-Sent Events|Sse]] (1), [[Security]] (1), next (1), [[Search]] (1)
> **Env Vars:** sqs (10), aws (3), sse (1), kms (1)
> **CLI Commands:** aws (3), make (3)
> **Cross-References:** go back to (3), we mentioned (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Analogies:** for example (1)

#### Simple Notification Service (SNS)
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=0)** - Another really useful service with AWS is SNS, simple notification service.
>
> **[0:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=6)** So let's go to that now.
>
> **[0:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=7)** I'm going to type in SNS up in the filter bar and open that in a new tab.
>
> **[0:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=12)** Now, a simple notification service can have topics and can have subscribers to those topics.
>
> **[0:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=19)** So we can send out the messages to Lambda or SQS, or whatever other services are subscribing to that topic.
>
> **[0:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=27)** What I actually use SNS for, more often, is sending out push notifications or texts and emails, but it can do both and it does a great job of it.
>
> **[0:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=37)** So let's create a topic now and then we'll subscribe to it from our SQS queue.
>
> **[0:43](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=43)** So I'm going to click on topics and I'm going to create a topic.
>
> **[0:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=46)** I'm going to create just a standard topic as we talked about as with SQS, it should be best effort, at least once, message delivery.
>
> **[0:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=54)** And I'm going to name this topic PollTopic.
>
> **[0:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=57)** We can leave all the other defaults as they are and then we just click create topic. And that's it.
>
> **[1:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=62)** So now we need to subscribe to this topic from our queue in SQS.
>
> **[1:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=67)** So I'm going to go back to SQS and click on our queue and then there's a tab for SNS subscriptions.
>
> **[1:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=74)** So I just click on subscribe to Amazon SNS topic.
>
> **[1:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=78)** We only have one, so it comes up in the list and then I can save that.
>
> **[1:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=84)** Now, if I put a message on my SQS topic, it should push to its subscribers, which is our queue in SQS, which then should trigger our Lambda, and we should be able to see that in CloudWatch.
>
> **[1:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=95)** So let's push the message here.
>
> **[1:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=97)** So for the subject, I'll just say testsubject and for the message of the body, so we can either use the identical payload for all platforms, or we can do custom play loads for the platforms, and it has all the defaults in there.
>
> **[1:51](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=111)** So now I can put in any additional attributes like a string here, test with the value of beartest, something like that, and publish this message.
>
> **[2:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=122)** It sends it to its subscribers, including our queue in SQS, which sends off to our Lambda, which we should be able to see in CloudWatch.
>
> **[2:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=131)** So I'll go back to my logs in CloudWatch, make sure I have the latest one, and look at the output.
>
> **[2:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=140)** And there's the output passed in, and if I look for the test beartest, there is the extra parameter I passed in there and the sample message that was in the various platform formats.
>
> **[2:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=155)** So now we have a whole process that we can send messages, add things to the queue, call a Lambda function, and you can even put a trigger on an S3 bucket event under its permissions, to where whenever a file is added or removed, for example, it can send out a message in your Lambda get called and so forth.
>
> **[2:55](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=175)** We already talked about triggers on Dynamo DB tables.
>
> **[2:58](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/simple-notification-service-sns?u=76281980&t=178)** All of these can be passing data around to perform the functionality of your app in AWS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (2), data (1)
> **Env Vars:** sqs (8), sns (5), aws (2)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** aws (2), make (1)
> **Cross-References:** go back to (2), we talked about (1)
> **Analogies:** for example (1)
> **Speakers:** - another (1)

#### Events and Lambda
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=0)** - [Instructor] So I want to point out a couple of things about setting up these relationships between SQS and SNS topics and Lambdas, and so forth.
>
> **[0:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=8)** So when we created our SNS topic, we came to our SQS queue, selected Subscribe to Amazon SNS topic, and created the subscription.
>
> **[0:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=19)** We actually could have done that right from the topic itself with "Create subscription" and specify SQS and put in the endpoint.
>
> **[0:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=29)** Similarly, when we created the queue in SQS, we created the trigger from our Lambda but we could have done that right from SQS with this tab, Lambda triggers, where we create a new trigger.
>
> **[0:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=44)** I'm going to click cancel here 'cause we already have this one, but I want to show you that you can basically create these relationships from either side.
>
> **[0:51](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=51)** Another one that is really powerful, that I've mentioned before, is from DynamoDB.
>
> **[0:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=57)** From a DynamoDB table, we can create a trigger to call our Lambda.
>
> **[1:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=63)** So I'm going to go to my tables and DynamoDB, and I'm going to create a table and call it "MyData" with a partition key of userId, and a sort key of createdAt, and that will be a number.
>
> **[1:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=80)** Then I'll create this table and I'm going to create a trigger from the table to the Lambda that whenever data is changed, or added, or deleted, it will call that Lambda.
>
> **[1:31](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=91)** To create that trigger, I'm going to click on the table, I'm going to close my left pane for some more space over here, and I'm going to go to Exports and streams, DynamoDBDB stream details, and enable that for new and old images.
>
> **[1:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=106)** So changes will send the new and the old images.
>
> **[1:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=110)** I'll enable that stream, and then I'm going to create a trigger.
>
> **[1:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=114)** And I wanted to call the polar function, with a batch size of one, which is fine, pretty small.
>
> **[1:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=119)** And I'll create this trigger.
>
> **[2:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=120)** Now we get an error because the policies for our DynamoDB calling the Lambda, don't have the right permissions.
>
> **[2:09](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=129)** So we need to change the policy on our Lambda to be able to get the data from DynamoDB.
>
> **[2:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=134)** So back at our Lambda, I'm going to go down to, I'm going to go to the Configuration tab, and then I'm going to go to Poller.
>
> **[2:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=145)** I'm going to click on this and it's going to open us right to our role.
>
> **[2:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=149)** Now we need to add additional permissions to this.
>
> **[2:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=152)** So, I probably want to look for something that allows for DynamoDB execution, and there's this AWSLambdaDynamoDBExecutionRole, that looks just right.
>
> **[2:45](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=165)** And it has the DescribeStream, GetRecords, and so forth, so I'm going to check that one and Attach policies.
>
> **[2:52](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=172)** Now I can go back to DynamoDB, and see if we can add that trigger.
>
> **[2:58](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=178)** So back here at DynamoDB, I'm going to click Create trigger again, and this time I don't get the error, and I should be able to change data in my table, so I'm going to go to Explore tables, and I'm going to create an item.
>
> **[3:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=193)** So I'll give it bear ID "1" and 1, create that.
>
> **[3:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=199)** I'll create another item.
>
> **[3:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=205)** Then I'll also edit the first item,
>
> **[3:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=214)** and then we'll see if there's anything in the log, and there's a new entry.
>
> **[3:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=217)** So if I expand this, we should see that there was an insert of bear2 with a new image, and then additional calls will be made whenever we perform updates and deletes as well.
>
> **[3:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/events-and-lambda?u=76281980&t=233)** This way we can have all these different processes working together, sending messages, and processing all the data that we need in our app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4)
> **Env Vars:** sqs (5), sns (3)
> **UI Navigation:** go to (5), click on (2)
> **Code Identifiers:** userid (1), createdat (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Step Functions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=0)** - [Instructor] So now I want to cover just briefly Step Functions.
>
> **[0:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=3)** You can see more at aws.[amazon.com/step-functions](https://amazon.com/step-functions).
>
> **[0:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=8)** I just want to cover the basic concepts of tasks and state machines here.
>
> **[0:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=13)** So tasks are code like Lambda, or an activity that waits for an operator to perform something.
>
> **[0:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=19)** You can see more on tasks at the AWS Step Functions Documentation.
>
> **[0:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=24)** State machines are based on states, their relationships, and input and output.
>
> **[0:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=30)** It's based on the Amazon States Language.
>
> **[0:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=33)** And states make their decision based on input, perform actions, and then pass output to other states.
>
> **[0:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=39)** You can read more about states at the AWS Step Functions documentation.
>
> **[0:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=44)** Some examples of Step Function use might be to sync or back up S3 buckets, email verification, confirmation, or authorization of a process, or also scaling image automation.
>
> **[0:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=57)** So let's create one now.
>
> **[0:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=59)** So if I go to the Step Functions website, based on the URL I mentioned earlier, you can get a lot more information on Step Functions and how they work.
>
> **[1:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=67)** We're going to go ahead and dive right in and click the Get Started for Free.
>
> **[1:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=71)** This is going to take us to the typical home for a service where we can create a new state machine.
>
> **[1:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=77)** So I'm going to click Create state machine, and we can see we can do one visually.
>
> **[1:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=81)** We can write one in code.
>
> **[1:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=83)** Or we can run a sample project.
>
> **[1:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=85)** That's what we're going to do as a sample project.
>
> **[1:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=87)** So I'm going to click on Run a sample project, and I'm going to scroll down 'til I see Job Poller.
>
> **[1:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=93)** So I'm going to check Job Poller and then scroll down, we can see the code that makes up Job Poller, as well as the visual editor.
>
> **[1:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=100)** We can see that it submits a job and it does that by hitting an endpoint.
>
> **[1:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=104)** This is a Lambda that it would create for you.
>
> **[1:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=107)** Then it calls Wait X Seconds and that's defined by the input, how many seconds to wait.
>
> **[1:52](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=112)** This is where it actually does the waiting when it calls that based on the wait_time.
>
> **[1:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=117)** And then it gets the job status by calling another Lambda that it creates for you.
>
> **[2:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=123)** And it checks to see if the job is complete.
>
> **[2:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=125)** The two options are failed and succeed.
>
> **[2:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=128)** If it doesn't get one of those, then it heads to Wait X Seconds and tries again after waiting.
>
> **[2:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=134)** Then it checks the status and reports if it failed or if it was successful.
>
> **[2:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=139)** We can click Next here and then we could deploy resources but notice it uses CloudFormation and can take up to 10 minutes.
>
> **[2:26](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=146)** So I've actually already defined one of these.
>
> **[2:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=148)** So if I go back to state machines and leave this, click on my state machine and notice, it's already defined and we can click Edit, and we see something very similar to what we saw before.
>
> **[2:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=159)** However, I've changed the Lambda to call the Poller Lambda that we already have created.
>
> **[2:45](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=165)** And all the cases of submitting the job and checking for the status.
>
> **[2:49](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=169)** So I'm going to go to the Lambda and I'm going to edit the Poller.
>
> **[2:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=174)** If I go to Functions, we'll see I still have the Poller plus the two Lambdas that the Step Function created for us.
>
> **[2:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=179)** And you can check those out if you want to.
>
> **[3:02](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=182)** In the Poller, I'll change the code to just return succeeded.
>
> **[3:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=185)** So if we test our Step Function, and pass in await time, it'll call our Poller function, which will pass back succeeded and it'll handle that as the response.
>
> **[3:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=195)** So if we go back to our state machine, we can start an execution and I want to put in the wait_time it knows how long to wait, and I'm just going to put in three for three seconds.
>
> **[3:26](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=206)** It will call the Poller, wait three seconds, call it again to check the status and report it out.
>
> **[3:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=214)** And there it's all green 'cause that worked and it was successful.
>
> **[3:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=218)** If I change this to failed, save and deploy that, and then run the test again, it will fail this time.
>
> **[3:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=230)** So it calls the first submit job, which again is just our Poller, waits three seconds, checks the job status and it should fail.
>
> **[4:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=240)** Now, if I put something else in here, like a question mark, I could save this, deploy it and when I test it again, it's not going to get failed or succeeded so it's going to wait and keep doing it until it gets one of those states.
>
> **[4:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=253)** So this time I'll just put in one second.
>
> **[4:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=259)** And we're back to wait seconds because it didn't get a response it liked.
>
> **[4:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=263)** I'm going to put failed back in there.
>
> **[4:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=265)** Deploy this.
>
> **[4:26](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=266)** And then the next time our Step Function checks the status.
>
> **[4:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=270)** It's failed.
>
> **[4:31](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=271)** Now, I encourage you to create this and maybe other example Step Functions and also, check the Lambdas that they create for you just to kind of get a sense of what they're doing.
>
> **[4:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/step-functions?u=76281980&t=282)** But this is just a simple introduction to Step Functions, and you can see how it's based on tasks, and states.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (3), next (2), [[Automation]] (1)
> **UI Navigation:** go to (3), click on (2), scroll down (2)
> **CLI Commands:** aws (3), make (1)
> **Env Vars:** aws (2), url (1)
> **Code Identifiers:** wait_time (2)
> **Cross-References:** go back to (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Definitions:** is a  (1)


### 5. Deployment, Scalability, and Monitoring

[↑ Back to Table of Contents](#table-of-contents)

#### Elastic Beanstalk
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=0)** - Now we're going to talk about Elastic Beanstalk.
>
> **[0:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=3)** Elastic Beanstalk is another way to approach AWS development.
>
> **[0:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=7)** It helps you deploy and scale web apps and services.
>
> **[0:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=11)** It supports a variety of languages and servers.
>
> **[0:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=15)** It'll create elastic compute cloud instances for you, or EC2 instances.
>
> **[0:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=21)** They can run on Amazon Linux or MS Windows servers configured for your web apps.
>
> **[0:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=27)** It also uses a security configuration so that port 80 is set up for ingress only.
>
> **[0:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=33)** It also has an auto scaling group configured to replace an instance if terminated or unavailable.
>
> **[0:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=40)** It creates an S3 bucket for your source code, your logs, and any other artifacts created for Elastic Beanstalk.
>
> **[0:48](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=48)** It also creates CloudWatch alarms.
>
> **[0:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=50)** It creates two, one to monitor performance when it's too high or too low for auto scaling up or down.
>
> **[0:58](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=58)** It also creates a domain name for you to route your web app to.
>
> **[1:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=63)** The three main steps though, are to select a platform, upload your app, or use a sample app, and then run it.
>
> **[1:09](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=69)** So let's try that now.
>
> **[1:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=72)** So back at the console, I can search for bean and find Elastic Beanstalk, click on that, and see the default dashboard.
>
> **[1:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=80)** I'm going to click on create application.
>
> **[1:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=82)** And mainly, as I mentioned before, we have to give it a name.
>
> **[1:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=85)** I'm going to name it, MyEB, and select a platform.
>
> **[1:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=88)** I provided sample files for Tomcat, so I'm going to select that and use the default branch inversion.
>
> **[1:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=94)** I'm going to be uploading code so I want to check upload your code.
>
> **[1:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=98)** And it is a local file, so I can go to choose file.
>
> **[1:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=102)** In the example files provided you can go to chapter five in 0501 and select the Java Tomcat zip file and click open.
>
> **[1:51](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=111)** Once that's uploaded, we can click create application.
>
> **[1:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=114)** It may take a couple minutes to create this application, so don't worry if you watch this screen for just a minute or two.
>
> **[2:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=124)** Okay. So it created our application, but it has a couple of errors.
>
> **[2:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=127)** Notice it says the default VPC is not found.
>
> **[2:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=130)** As I mentioned before, Elastic Beanstalk will try to set up an EC2 instance, but you need to have a default VPC.
>
> **[2:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=137)** If you want to read more about EC2, you can go to aws.[amazon.com/ec2](https://amazon.com/ec2), but you can think of these as virtual servers. For the virtual private cloud, the VPC, this is an isolated virtual network, basically your own little instance of AWS, and we need to create our default VPC.
>
> **[2:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=156)** Back on the search for services option, I'm going to search for VPC, open that up in another tab.
>
> **[2:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=162)** And then from here, I'm going to select your VPCs.
>
> **[2:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=166)** Under actions, I'm going to select create default VPC and just click create default VPC. And that's it.
>
> **[2:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=174)** So now we can go back to Elastic Beanstalk and we should be able to deploy our application.
>
> **[3:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=180)** Back in my application, I'm going to select the actions button and rebuild environment.
>
> **[3:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=185)** And now with the default VPC, we should have a successfully deployed app when it's done running.
>
> **[3:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=194)** Once it's finished building the environment, you can see that the health is okay, We shouldn't have any errors down at the bottom.
>
> **[3:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=201)** So now we want to see our application in action.
>
> **[3:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=204)** Over on the left hand side, I can see my application name, MyEB, so I'm going to click that.
>
> **[3:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=208)** Scroll down to the row that has the health okay, and I can command click on the URL to see it running on Tomcat.
>
> **[3:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=216)** Very satisfying.
>
> **[3:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=218)** Also under application versions, you can upload new versions or revert back to old versions, and this code is stored in an S3 bucket.
>
> **[3:45](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=225)** So let's go look at S3. I'm going to search for S3 in the services, command click on that, and then I should see a new bucket that has something like an Elastic Beanstalk name. And there it is.
>
> **[3:56](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=236)** So I can click on that and I should be able to see the zip file and any versions I've used and other resources.
>
> **[4:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=243)** And then as necessary, if I ever delete this application, I can delete this bucket.
>
> **[4:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=248)** Sometimes you have to set permissions in here to edit the public access or the bucket policy in particular. This is where it denies deleting the bucket.
>
> **[4:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=259)** But I can just edit this and remove this section right here, and then I would be able to delete that bucket.
>
> **[4:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=264)** It's not very obvious so I wanted to mention it here.
>
> **[4:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=267)** But anyway, that's just a quick look at Elastic Beanstalk.
>
> **[4:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elastic-beanstalk?u=76281980&t=269)** A way that can help you spin up virtual servers and environments, run your uploaded code, control the versions without having to deal with as much server side set up and hardware maintenance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (10), [[Amazon EC2|Ec2]] (4), [[Search]] (4), aws (3), web (3)
> **Env Vars:** vpc (8), ec2 (3), aws (2), url (1)
> **UI Navigation:** click on (5), go to (3), select the (2), scroll down (1)
> **CLI Commands:** aws (3), find (1)
> **Prerequisites:** set up (3), you need to have (1)
> **Exercise Files:** zip file (2), source code (1)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [amazon.com](https://amazon.com) (1)

#### CloudFormation
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=0)** - [Instructor] When Elastic Beanstalk created all these things for us, we saw that it was doing some things and we saw some output, but what did it really do?
>
> **[0:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=8)** What it did is it used CloudFormation to create stacks based on templates.
>
> **[0:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=14)** So let's go look at that.
>
> **[0:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=15)** So I'm going to do a search for CloudFormation and I'm going to Command + Click on that and open it up in a new tab, and it creates stacks for you.
>
> **[0:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=25)** So notice this one says AWSEB for Elastic Beanstalk.
>
> **[0:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=29)** I'm going to click on that stack, and we can see some basic information about when it was created, and if it's terminated, and so forth.
>
> **[0:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=36)** We can also see the various events that it performed when it was being created.
>
> **[0:41](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=41)** Things like CloudWatch Alarms, and scaling up and down and load balancing, security, all these different things it did for us based off of the template.
>
> **[0:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=53)** So let's go look at the template.
>
> **[0:55](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=55)** I'm going to click on the template tab up here.
>
> **[0:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=57)** I'm going to close this area over on the left for some space and notice that it uses JSON, and there's a lot of it.
>
> **[1:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=64)** But it ultimately also can be viewed in the Designer.
>
> **[1:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=68)** This is a visual representation of it, and it shows us basically a flow of the design.
>
> **[1:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=74)** It also shows it to us down here in JSON and YAML, and again, it is a lot.
>
> **[1:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=79)** So I'm going to close this section and just look at the design.
>
> **[1:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=83)** Now notice it does a lot of things with security and load balancing and scaling and the alarms and so forth.
>
> **[1:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=89)** And this was all based on that template.
>
> **[1:31](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=91)** So it did all of this for us.
>
> **[1:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=93)** And that's typically how I've used CloudFormation, is for other processes to create all the things I need for some usually fairly typical deployment or service use.
>
> **[1:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=106)** If we go back to our list of stacks, we'll see that another one is still in here from a previous video, and that was for the step functions.
>
> **[1:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=113)** So again, it uses CloudFormation to create all the things necessary.
>
> **[1:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=117)** For our app and Elastic Beanstalk, all we did was write the Java code, the code that I provided in the exercise files or whatever code you want to use, we didn't have to worry about all of the administration and setup and configuration, it took care of all those pieces.
>
> **[2:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=132)** And I really love being able to just focus on the code and not have to worry about all the formation.
>
> **[2:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudformation?u=76281980&t=137)** So I try to favor using tools like Amplify and Amplify CLI, the command line interface, because it also uses CloudFormation and allows me to focus on the code and what I'm trying to develop.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (2), [[JSON]] (2), [[Search]] (1), [[Java]] (1), [[CLI]] (1)
> **Env Vars:** json (2), awseb (1), yaml (1), cli (1)
> **Exercise Files:** template (4), exercise files (1)
> **UI Navigation:** click on (3)
> **Cross-References:** go back to (1), previous video (1)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **Prerequisites:** setup (1)

#### ElastiCache
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=0)** - [Instructor] Performance is always important to any process you're working on and caching is always a great way to improve performance, so we're going to look at ElastiCache.
>
> **[0:09](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=9)** So from the services search, I'm going to type cache and click on ElastiCache.
>
> **[0:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=15)** Now, from here, we're going to create a memcached cluster.
>
> **[0:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=19)** This allows us to cache some data in memory, which is always very fast.
>
> **[0:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=25)** And in here I'm going to create a memcached cluster.
>
> **[0:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=28)** So we're going to cache our data in the cloud and we have to give it a name.
>
> **[0:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=32)** We're going to use this with a Lambda, so I'm going to call this Lambda cache.
>
> **[0:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=38)** And we can give it a description if we want.
>
> **[0:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=40)** And for the cluster settings we're going to use the default setting for the engine, the port, and for the parameter groups.
>
> **[0:48](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=48)** But for the type of node, we're going to change this from a large due to cost, and we're going to look for micro and we're going to use the smallest micro we can, 0.5 gig, low to moderate network performance.
>
> **[1:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=61)** This one will be the cheapest.
>
> **[1:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=64)** We're only going to use one node.
>
> **[1:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=65)** And for the subnet groups, we're going to pick the default of my subnet and notice it ends in 5128.
>
> **[1:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=73)** I want to remember that.
>
> **[1:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=75)** It only has one availability zone, so we'll allow that to be selected and the availability placements, we'll just specify no preferences.
>
> **[1:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=84)** If we do specify, there's only one in there.
>
> **[1:26](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=86)** So it's the default, anyway.
>
> **[1:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=89)** I'm going to click next and I'm going to accept all the defaults, click next again.
>
> **[1:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=95)** Review all the settings and click create.
>
> **[1:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=99)** We'll wait for this to get set up and then we'll work on the Lambda.
>
> **[1:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=102)** We need a little bit of information from here to use as we set up our Lambda.
>
> **[1:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=107)** Once I see status available, I can click on the cluster name and look at the settings.
>
> **[1:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=113)** Now, the end point that we're interested in is here, and I can copy that.
>
> **[1:58](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/elasticache?u=76281980&t=118)** That is going to be used inside of our Lambda.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), node (2), next (2), [[Search]] (1), cloud (1)
> **CLI Commands:** node (2)
> **UI Navigation:** click on (2)
> **Prerequisites:** set up (2)
> **Versions:** 0.5 (1)
> **Speakers:** - [instructor] (1)

#### Lambda using cache
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=0)** - [Instructor] Now that we have our cache setup, let's create our lambda.
>
> **[0:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=3)** So in the search bar, I'm going to type lambda, and Command + click on that to open it up in another tab.
>
> **[0:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=10)** In our lambdas, we'll click Create Function, we'll author it from scratch 'cause we're going to replace it with provided code.
>
> **[0:16](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=16)** And I'm going to name it lambdacache.
>
> **[0:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=20)** We're going to use Python, so I'll select the latest version of Python.
>
> **[0:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=24)** And we could change the existing role from IAM if we already knew we had one.
>
> **[0:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=30)** We're going to let it create a new role and then we'll have to change its settings in a minute.
>
> **[0:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=34)** So I'll click Create function, and it'll create the basic function, then I can upload the code that's provided in the exercise files.
>
> **[0:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=42)** Now that I have my lambda, I'm going to scroll down to Upload from and select the zip file, click Upload and navigate to the Exercise Files, chapter five, 05_04, and select this appy.zip file.
>
> **[1:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=60)** I'll save that, and now I have my code.
>
> **[1:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=63)** I can double click on the app.py file, and I can see that it has it handler named handler.
>
> **[1:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=70)** I also see that I'm using that URL in here as the configuration endpoint.
>
> **[1:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=75)** So I'm going to paste it in there now.
>
> **[1:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=78)** I'm going to scroll down and set some of the configuration.
>
> **[1:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=81)** One thing I need to set is this handler that gets called.
>
> **[1:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=85)** Remember, ours is in the app file.
>
> **[1:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=87)** So I'll type app and the name of the function is handler.
>
> **[1:31](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=91)** And I'll save that.
>
> **[1:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=94)** We also need to configure it for the VPC that we used with the elastic cache.
>
> **[1:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=100)** So I'll click Edit, and I'm going to select the one that ends in 5128 like we saw in elastic cache.
>
> **[1:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=106)** The subnets, there's only one.
>
> **[1:48](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=108)** And then the security group, I'll select the default.
>
> **[1:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=113)** And notice that it allows all protocols on all ports.
>
> **[1:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=117)** If you pick one that doesn't allow at least the port 11211, that's in our URL, then you need to either create or use another security group.
>
> **[2:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=127)** I'll click Save, we're going to get an error because our role doesn't have create network interface and its permissions.
>
> **[2:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=134)** So I'm going to cancel this.
>
> **[2:16](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=136)** And I'm going to go down to Permissions, I'm going to Command + click on the role name and add that permission in IAM.
>
> **[2:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=143)** So I'll switch tabs.
>
> **[2:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=144)** And in here, we're going to need to add permissions.
>
> **[2:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=147)** So from the dropdown under Add permissions, I'll select Attach policies.
>
> **[2:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=152)** And our problem was with VPCs.
>
> **[2:34](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=154)** So I'll search for that and see if there's a lambda VPC, which there is, and it has create network interface.
>
> **[2:41](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=161)** So I'll check that one.
>
> **[2:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=162)** It has additional permissions, but that's okay.
>
> **[2:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=166)** And I'll attach those policies.
>
> **[2:48](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=168)** Now we'll go back to the lambda and select VPC on the left, and set that up again by selecting the VPC 5128.
>
> **[2:58](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=178)** With the single subnet, and the security group 93F.
>
> **[3:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=185)** And again, that has the protocols we need, so I'll save that.
>
> **[3:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=191)** After a few minutes, the VPC is setup.
>
> **[3:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=193)** And now we're almost ready to test our function.
>
> **[3:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=195)** I'm going to go back to the Code tab.
>
> **[3:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=198)** And we have setup to call our handler, but we need to set up a test.
>
> **[3:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=203)** If I click on Test here, it's going to do the same thing as configure test event because we don't have any yet.
>
> **[3:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=208)** And I just need to give it a name.
>
> **[3:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=210)** And we're not manipulating the input.
>
> **[3:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=213)** So we can just leave it as it is.
>
> **[3:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=215)** Click Save.
>
> **[3:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=217)** Now we have to deploy our lambda.
>
> **[3:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=219)** And once it's successfully deployed, we can click Test, and we'll see that it's storing some data and fetching it back out.
>
> **[3:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=227)** If we look at the code, we see that it gets a UUID, sets it in memory, gets it back out of memory, and then compares the two.
>
> **[3:55](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=235)** So now that we've run it once, we know what the value should be in the cache.
>
> **[3:58](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=238)** So I'm going to copy that, and I'm going to do the comparison against that one instead of the original.
>
> **[4:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=246)** So now I'm going to change the code to instead of generating a UUID, I'm going to use the one that it retrieved before.
>
> **[4:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=254)** And I'm not going to set it again in memory because it's already set in memory.
>
> **[4:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=259)** Now I'll hit Command + S to save this file.
>
> **[4:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=261)** I'll deploy it.
>
> **[4:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=263)** And then once it's finished deploying, I'll test it and we can see that we get the same value as we did before.
>
> **[4:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=269)** Every time we test it, it should continue to get the same value and successfully state that it fetched it from memory from the cache.
>
> **[4:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/lambda-using-cache?u=76281980&t=277)** And now we're using this cache in memory and we can use it each time in our lambda to speed up performance whenever we have values we want to save.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (3), [[Search]] (2), [[Python (Programming Language)|Python]] (2), data (1), hit (1)
> **UI Navigation:** click on (4), select the (4), scroll down (2), navigate to (1), dropdown (1)
> **Env Vars:** vpc (5), iam (2), url (2), uuid (2)
> **Prerequisites:** setup (3), configure (2), set up (1)
> **Exercise Files:** exercise files (2), zip file (2)
> **CLI Commands:** python (2)
> **Cross-References:** go back to (2)
> **File Paths:** app.py (1)

#### CloudFront
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=0)** - [Instructor] Another type of data storage that helps with caching and performance is to use a content delivery network.
>
> **[0:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=7)** In AWS, that's called CloudFront.
>
> **[0:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=10)** So I'm going to type in cloudfront in the search bar and create a CloudFront distribution.
>
> **[0:14](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=14)** This will distribute files across nodes all over the country or the world and allow them to be accessed more quickly from the nodes that's closest to the user.
>
> **[0:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=25)** If the file isn't there, it'll go to the origin, which is going to be, in this case, an S3 bucket.
>
> **[0:31](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=31)** So I need to put a file in an S3 bucket.
>
> **[0:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=33)** So I'm going to go to S3, and I'm going to pick one of my buckets.
>
> **[0:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=39)** I'll use the bucket I created earlier, mybucket.[brainwashinc.com](https://brainwashinc.com).
>
> **[0:44](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=44)** I'm going to create a folder called Files, and underneath that I'm going to upload a file that I've provided in the exercise files.
>
> **[0:53](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=53)** So when you click Upload, you can click Add files, and drill down to 05_05, open that, and upload it.
>
> **[1:04](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=64)** If I go back to CloudFront, I can pick my bucket from the Origin domain, and I can specify the Origin path.
>
> **[1:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=70)** So in this case, I'll put /files.
>
> **[1:12](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=72)** You want to start with a slash, but not end with one.
>
> **[1:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=75)** Also, for the bucket access, you don't want to leave it up to the bucket to be publicly accessible.
>
> **[1:20](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=80)** You want to use OAI.
>
> **[1:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=82)** Now if you already have one defined, you can select it here, or you can create a new OAI by clicking the button and clicking Create.
>
> **[1:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=89)** And then you will also let CloudFront update the bucket policy for you.
>
> **[1:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=93)** For everything else we're going to use the defaults, for things like policies and methods and so forth.
>
> **[1:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=102)** And then down in the Settings, we're just going to Use only North America and Europe.
>
> **[1:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=106)** This will save on cost.
>
> **[1:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=107)** Even though we're just doing this as an experiment, it should be cheap, but we always want to be mindful of that.
>
> **[1:52](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=112)** And then we create the distribution, which can take a while.
>
> **[1:56](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=116)** So feel free to go get a cup of coffee here, and then we'll pick back up where we left off.
>
> **[2:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=121)** Once it finishes deploying, we can copy this distribution domain name, open another tab, put /index.html on the end, and there's our file, our wonderful HTML file.
>
> **[2:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=133)** So you can see how CloudFront can be really useful for distributing files all over the world for fast access, especially media files and other files that may not change very often.
>
> **[2:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudfront?u=76281980&t=144)** Very, very helpful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), data (1), aws (1), [[Search]] (1)
> **Env Vars:** oai (2), aws (1), html (1)
> **UI Navigation:** go to (2)
> **File Paths:** index.html (1)
> **CLI Commands:** aws (1)
> **URLs:** [brainwashinc.com](https://brainwashinc.com) (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)

#### CloudWatch
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=0)** - [Instructor] So to go to CloudWatch from the console, I'm going to search for cloudwatch and click that.
>
> **[0:05](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=5)** And on the left-hand side, we should be able to see Alarms, and we can see anything that's actually in the alarm state or all of our alarms.
>
> **[0:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=13)** We can see our log groups for things like our Lambdas, for example.
>
> **[0:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=18)** We can also look at various views into metrics and select specific metrics that we want to see reports for.
>
> **[0:26](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=26)** I'm going to go to the Alarms, I'm going to look at All alarms, and then I'm going to create a new alarm.
>
> **[0:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=33)** So I'm going to click Select metric.
>
> **[0:36](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=36)** And then in the metrics list, I'm going to select DynamoDB.
>
> **[0:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=39)** And on that, I'm going to select Table Operation Metrics.
>
> **[0:43](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=43)** And I'm going to look at when we do a Putitem, a SuccessfulRequestLatency.
>
> **[0:48](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=48)** So I'm going to check that row and select it.
>
> **[0:52](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=52)** And then we're going to look at the Average over 1 minute.
>
> **[0:57](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=57)** So that's the timeframe that we're going to look at this for the alarm.
>
> **[1:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=61)** And then for the threshold, we're going to use a static threshold, just 'cause we want to know exactly when it goes over the threshold.
>
> **[1:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=67)** And we're going to set the threshold to be 1.
>
> **[1:10](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=70)** Since we only have one data point, we're going to look at 1 out of 1, and we're going to treat missing data as just missing data, not an error.
>
> **[1:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=77)** And what do we want to do when it triggers?
>
> **[1:19](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=79)** Either into alarm, OK, or insufficient data, we're going to send something to the SNS topic.
>
> **[1:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=84)** And we have an SNS topic, so we just select that.
>
> **[1:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=87)** And remember that topic pushes out to its subscribers, which for us is a queue in SQS, which then goes to the Lambda.
>
> **[1:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=95)** So we should see whatever the alarm is in the log file eventually.
>
> **[1:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=99)** We're going to leave the defaults for the rest, click Next.
>
> **[1:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=102)** Give it a name, putalarm.
>
> **[1:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=106)** And I won't put a description.
>
> **[1:47](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=107)** Review everything and create the alarm.
>
> **[1:50](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=110)** Now I'm going to click on this putalarm, and we can see some history of data if there is any.
>
> **[1:56](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=116)** We can also view it in the metrics, which we can specify then a time period.
>
> **[2:01](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=121)** So we could say 1 hour, we could have it refresh every so often automatically.
>
> **[2:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=126)** And now I want to go to DynamoDB by typing dynamoDB in the search bar, Command + Clicking on that so it opens in a new tab.
>
> **[2:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=133)** And now I'll put some puts in here to the table, and then it should trigger the alarm.
>
> **[2:21](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=141)** So I'll create an item, and I'll do bear100, 100.
>
> **[2:27](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=147)** And another one of bear101, 101, create that.
>
> **[2:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=153)** And then we can go back and watch the metrics.
>
> **[2:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=155)** And it should update every 10 seconds.
>
> **[2:37](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=157)** And once it has enough data and analyzes it, we should go into alarm.
>
> **[2:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=162)** You can also manually refresh it by clicking the circle.
>
> **[2:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=166)** And once it reaches the threshold, it should go into the alarm state.
>
> **[2:51](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=171)** I'll also open this left side, so we should see the In alarm go up to 4.
>
> **[2:55](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=175)** When it does, trigger the alarm.
>
> **[2:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=179)** Now we see we have our data point.
>
> **[3:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=180)** It's definitely well over the threshold.
>
> **[3:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=183)** So it should go into an alarm state.
>
> **[3:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=186)** And now we see that it went up to 4 here.
>
> **[3:08](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=188)** If we go to the In alarm, we can see that our putalarm is In alarm.
>
> **[3:13](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=193)** Now that's not a very realistic alarm, obviously, but it's a really useful process to go into and see what type of alarms you can create and how to monitor them and what they do.
>
> **[3:24](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=204)** Now let's go to the logs for our Lambda.
>
> **[3:29](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=209)** So it should go to the Poller, and I'm going to refresh this to get the latest one.
>
> **[3:35](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=215)** And we should see a recent one that includes the message from the alarm.
>
> **[3:40](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=220)** And here it is.
>
> **[3:41](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=221)** So we have DynamoDB, that the data points, our average dimensions, everything about our alarm was passed in when that alarm fired.
>
> **[3:51](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=231)** It went to the topic, which went to the queue, and ultimately to our Lambda.
>
> **[3:56](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=236)** And we can get information on this if we need to store it or do any other processing.
>
> **[4:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cloudwatch?u=76281980&t=240)** So CloudWatch is very useful and a very great tool for monitoring various things in your whole entire AWS system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[Search]] (2), [[Representational State Transfer (REST)|Rest]] (1), next (1), aws (1)
> **UI Navigation:** go to (6), click on (1)
> **Env Vars:** sns (2), sqs (1), aws (1)
> **CLI Commands:** aws (1)
> **Code Identifiers:** dynamodb (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Cleanup
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=0)** - [Instructor] During this course, we've used a lot of AWS services and features and we've created a lot of things in them.
>
> **[0:06](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=6)** So I recommend if you're going to start over or try some experimenting on your own, that you go to a lot of these same services and delete what was created so you can start clean.
>
> **[0:17](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=17)** It's also a good case for keeping your billing clean.
>
> **[0:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=22)** So in a lot of the services it's pretty easy to delete something.
>
> **[0:25](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=25)** You just check a box and then click delete somewhere.
>
> **[0:30](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=30)** We already talked about how the bucket that Elastic Beanstalk creates doesn't allow you to delete it until you change its bucket policy.
>
> **[0:38](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=38)** So under the permissions, you can go to bucket policy.
>
> **[0:42](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=42)** And if there's any section for denying delete bucket, you can remove that.
>
> **[0:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=46)** We also talked about how Elastic Beanstalk uses Cloud Formation and creates a stack with a variety of resources underneath that.
>
> **[0:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=54)** Other services like the Amplify CLI can create stacks and nested stack.
>
> **[0:59](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=59)** It's always best to delete those from the highest point possible.
>
> **[1:03](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=63)** In this case, either the parent stack of all the nested stacks or from Elastic Beanstalk, you might want to go to Elastic Beanstalk itself, start there and then drill down into the stacks.
>
> **[1:15](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=75)** As I mentioned, for a variety of other places, you just simply click the resource and then there's a delete button.
>
> **[1:22](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=82)** In Cloud Front, you actually have to disable it first, which can take a few minutes.
>
> **[1:26](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=86)** Then you can come back and delete it.
>
> **[1:28](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=88)** So they all are slightly different, but they follow a typical mechanism for deleting.
>
> **[1:33](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/cleanup?u=76281980&t=93)** But again, I encourage you to start at the top as much as possible, especially with Cloud Formation stacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (3), aws (1), [[CLI]] (1)
> **UI Navigation:** go to (3)
> **Env Vars:** aws (1), cli (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/next-steps?u=76281980&t=0)** - [Bear] Now you have a strong foundation in AWS services and features, and isn't it great to see everything they offer?
>
> **[0:07](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/next-steps?u=76281980&t=7)** Hopefully I've taken some of the mystery out of AWS for you.
>
> **[0:11](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/next-steps?u=76281980&t=11)** And if you're like me, hopefully you're more comfortable and less intimidated by the huge list in the AWS Console.
>
> **[0:18](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/next-steps?u=76281980&t=18)** Next, I recommend going through and experimenting some more with the same concepts.
>
> **[0:23](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/next-steps?u=76281980&t=23)** Create a simple queue service and subscribe to an SNS topic, make a Lambda to check the queue, and maybe work towards having it right to a DynamoDB.
>
> **[0:32](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/next-steps?u=76281980&t=32)** Also, play around some more with Elastic Beanstalk, CloudWatch and create some users with IAM.
>
> **[0:39](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/next-steps?u=76281980&t=39)** Check out the other AWS courses.
>
> **[0:41](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/next-steps?u=76281980&t=41)** And if you're working on a mobile app, check out the course on Amplify CLI.
>
> **[0:46](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/next-steps?u=76281980&t=46)** Also, feel free to let me know what you're working on and keep in touch at [brainwashinc.com](https://brainwashinc.com), @brainofbear on Twitter and on LinkedIn.
>
> **[0:54](https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-14924833/next-steps?u=76281980&t=54)** Thanks!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (4), next (1), [[CLI]] (1), [[LinkedIn]] (1)
> **Env Vars:** aws (4), sns (1), iam (1), cli (1)
> **CLI Commands:** aws (4), make (1)
> **URLs:** [brainwashinc.com](https://brainwashinc.com) (1)
> **Tools:** aws console (1)
> **Speakers:** - [bear] (1)


## Instructor

- [[Bear Cahill]]

## Resources

- Exercise files available

## Skills Covered

- Amazon Web Services (AWS)

## Path Context

### In [[Getting Started as an AWS Developer]]
**1 of 4** | [[Building Serverless Applications in AWS]] →

### In [[Getting Started with Cloud Development]]
← [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] | **2 of 4** | [[Azure Understanding The Big Picture]] →

## Appears In

- [[Getting Started as an AWS Developer]]
- [[Getting Started with Cloud Development]]

## Related Courses

_Courses sharing skills:_

- [[AWS- Monitoring, Logging, and Remediation (2021)]] — Amazon Web Services (AWS)
- [[Complete Guide to AWS Software Deployment]] — Amazon Web Services (AWS)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Amazon Web Services (AWS)
- [[AWS Essential Training for Architects]] — Amazon Web Services (AWS)
- [[Building Intelligent Chatbots on AWS]] — Amazon Web Services (AWS)

---

[↑ Back to top](#)