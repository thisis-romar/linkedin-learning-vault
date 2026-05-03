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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Building%20Serverless%20Applications%20in%20AWS.md)

![Building Serverless Applications in AWS](https://media.licdn.com/dms/image/v2/D560DAQHrUSyKAHYmVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1700606318538?e=2147483647&amp;v=beta&amp;t=JVLMDm4vIWBGEdPzlpPBlr0nlMJFf3oDoEKgI4IRtkA)

# Building Serverless Applications in AWS

> If you need to build a serverless application in AWS, this course from AWS Community Builder and YouTuber Lucy Wang can help you get started. Explore the concept of serverless computing and its advantages and disadvantages. Learn about the AWS services available and the scalable, cost-effective storage that S3 offers. Find out how you can use Lambda to run code and how DynamoDB can be used as a No

> [LinkedIn Learning](https://www.linkedin.com/learning/building-serverless-applications-in-aws) | 27m | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Building a serverless application in AWS](#building-a-serverless-application-in-aws)
  - [What you need to know](#what-you-need-to-know)
- [**1. Getting Started**](#1-getting-started) (7 videos)
  - [What is a serverless application?](#what-is-a-serverless-application)
  - [Overview of AWS services](#overview-of-aws-services)
  - [Overview of Amazon S3](#overview-of-amazon-s3)
  - [Overview of AWS Lambda](#overview-of-aws-lambda)
  - [Overview of Amazon DynamoDB](#overview-of-amazon-dynamodb)
  - [Overview of API Gateway](#overview-of-api-gateway)
  - [What we are building today](#what-we-are-building-today)
- [**2. AWS Account and Website Setup**](#2-aws-account-and-website-setup) (3 videos)
  - [Creating and using an AWS account](#creating-and-using-an-aws-account)
  - [Create an S3 bucket and upload the landing page](#create-an-s3-bucket-and-upload-the-landing-page)
  - [Configure the S3 bucket for static website hosting](#configure-the-s3-bucket-for-static-website-hosting)
- [**3. Amazon DynamoDB and AWS Lambda Setup**](#3-amazon-dynamodb-and-aws-lambda-setup) (2 videos)
  - [Set up a DynamoDB table for data storage](#set-up-a-dynamodb-table-for-data-storage)
  - [Create a Lambda function to retrieve data](#create-a-lambda-function-to-retrieve-data)
- [**4. API Gateway Setup and Testing**](#4-api-gateway-setup-and-testing) (3 videos)
  - [Configure API Gateway](#configure-api-gateway)
  - [Edit an app.js file](#edit-an-appjs-file)
  - [Test the recipe website to ensure proper functionality](#test-the-recipe-website-to-ensure-proper-functionality)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building a serverless application in AWS](https://www.linkedin.com/learning/building-serverless-applications-in-aws/building-a-serverless-application-in-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/building-a-serverless-application-in-aws?u=76281980&t=0)** - Have you ever wanted to build a serverless application, but didn't know where to start? With over 40% of companies in the cloud now utilizing serverless workloads, knowing how to build serverless applications has become an essential skill for modern IT professionals. In this course, I'll teach you about the core AWS services for building serverless architectures. You also get hands on and build your very own application that can display a list of recipes. Hi, I'm Lucy and I run the YouTube Channel "Tech with Lucy." I'm a former AWS Solutions Architect, and, in this course, I bring my real-world experience to help you navigate your cloud journey. Now let's get into it and build together.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Speakers:** - have (1)

#### [What you need to know](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-you-need-to-know?u=76281980&t=0)** - Before we embark on our journey of building serverless applications on AWS, let's briefly discuss what you should know to get the most out of this course. First, I recommend having a general understanding of [[Cloud Computing]]. This means knowing what the cloud is, the benefits it offers, and the underlying principles behind how [[Cloud Services]] operate. Secondly, it also helps to have a basic understanding of programming. We'll be working with code, setting up functions, and talking about concepts like APIs, triggers, and event driven programming. It doesn't matter what programming language you're already familiar with, be it [[Python (Programming Language)|Python]], [[Java]], or something else. In this course, we'll be using Python, [[HTML]] and CSS, but don't worry if you haven't come across them before. The code we'll be implementing is relatively straightforward, and I'll guide you through every step of the way. Now, let's dive right in and start exploring the world of serverless applications on AWS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Cloud Computing]] (1), [[Cloud Services]] (1), [[Java]] (1), [[HTML]] (1)
> **CLI Commands:** aws (2), python (2)
> **Env Vars:** aws (2), html (1), css (1)
> **Speakers:** - before (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a serverless application?](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=0)** - Have you ever wondered how Netflix can handle millions of streaming requests without a hitch? Or how Airbnb can manage thousands of bookings every day? The secret lies in the power of [[Serverless Computing]], but what exactly is serverless? Well, in the world of [[Cloud Computing]], serverless refers to the ability to build and run applications without having to provision or maintain the underlying infrastructure. Serverless doesn't mean that there are no servers involved. Instead, the responsibility of managing servers is shifted to a cloud computing provider such as AWS. So what makes serverless applications attractive for companies and developers? One major advantage is [[Scalability]]. Serverless computing allows applications to scale automatically based on demand. The cloud computing provider manages the infrastructure, ensuring that resources are allocated as needed. This is ideal for handling large spikes in traffic, such as during peak times for streaming services and booking platforms. Another advantage is cost efficiency. With serverless, you only pay for what you use rather than the idle capacity. This pay-per-use pricing model can be more cost efficient for applications with variable or unpredictable workloads. Serverless computing also simplifies development, allowing faster time to market for new applications. Without having to manage servers, developers can have more rapid development cycles. This allows companies to iterate quickly and bring new features and [[Microsoft Products|products]] to market much faster. However, despite its advantages,
>
> **[1:35](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-is-a-serverless-application?u=76281980&t=95)** serverless does come with a few drawbacks. Serverless setups may not be suitable for all types of workloads. While serverless applications are great for variable and non-critical workloads, they may fall short for long running applications or those requiring persistent connections. Another drawback is time limitations on serverless functions. Longer running processes can be cut off by those time limits, meaning developers may have to refactor their applications or break up tasks in order to fit in with those constraints. Now that we've unpacked what serverless is as well as its advantages and disadvantages, let's move on to the next lesson, which is an overview of AWS services. I'll see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Serverless Computing]] (3), [[Cloud Computing]] (3), [[Scalability]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** refers to (1), short for (1), is an  (1)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Analogies:** such as (2)
> **Speakers:** - have (1)

#### [Overview of AWS services](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-services?u=76281980&t=0)** - [Narrator] Imagine walking into a large supermarket for the first time and being greeted by rows and rows of new [[Microsoft Products|products]]. The thought might be both exciting and overwhelming at the same time, and that's what it can feel like when you first enter the AWS Management console. AWS has over 200 fully featured services, so it can often be hard knowing where to start. Broadly speaking, most AWS services can be grouped into seven main categories: compute, storage, [[Databases]], networking and content delivery, analytics, machine learning, and security, identity and compliance. For example, [[Amazon EC2]] is a compute service that provides virtual server capacity in the cloud. And Amazon SageMaker is a machine learning service that allows you to build, train, and deploy machine learning models. Each service has a specific use case, and combining one or more of these services together allows you to build scalable applications and solutions in the cloud. In this course, we'll be focusing on the AWS services, commonly used to build serverless applications. More specifically, we'll be exploring Amazon S3, AWS Lambda, Amazon DynamoDB, and API Gateway. These services form the backbone of many serverless architectures and we'll be used in helping us build our first serverless application on AWS. Let's get into it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Databases]] (1), [[Amazon EC2]] (1)
> **Env Vars:** aws (6), ec2 (1), api (1)
> **CLI Commands:** aws (6)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [narrator] (1)

#### [Overview of Amazon S3](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-s3?u=76281980&t=0)** - If you've ever uploaded photos to social media or opened an online menu when dining out at a restaurant, chances are you've probably crossed paths with Amazon S3. Amazon S3, also known as Simple Storage Service, is an object storage service that offers virtually unlimited storage capacity in the cloud. In S3, data is organized into buckets and objects. You can think of a bucket as a directory or folder, and an object as an individual file within that directory. It can be used to store and retrieve any amount of data, from a single PDF document to massive data sets and video files. Amazon S3 plays a crucial role when building a serverless application. First of all, it provides a reliable place to store data, and is designed for 99.9% of availability and 11 nines of durability, making the risk of losing data and downtime extremely rare. Another benefit of Amazon S3 is [[Scalability]]. Unlike traditional storage solutions where you may need to estimate amount of storage needed, S3 lets you scale up and down as required. This also happens to make the service very cost effective. With Amazon S3's pay for what you use pricing model, you can start small and grow your data over time. In the next lesson, we'll take a look at AWS Lambda, another AWS service commonly used in building serverless applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (1)
> **CLI Commands:** aws (2), make (1)
> **Env Vars:** aws (2), pdf (1)
> **Definitions:** known as (1), is an  (1)
> **Versions:** 99.9 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - if (1)

#### [Overview of AWS Lambda](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-aws-lambda?u=76281980&t=0)** - When interacting with a website or application, you might have wondered how one press of a button can instantly trigger a number of events. For instance, uploading a picture and seeing it immediately displayed or clicking Buy Now and having your order processed seamlessly. These are just a few cases where AWS Lambda may be working tirelessly in the background. AWS Lambda is a serverless compute service that lets you run code in response to events and triggers. It can be used to automate a wide range of tasks, and serves as the backbone for efficiency of many serverless applications. With AWS Lambda, you don't need to worry about setting up servers, optimizing them, or even keeping them running. You can just upload the code you want to run, and Lambda takes care of the [[Representational State Transfer (REST)|rest]]. Similar to S3, the biggest benefits of using AWS Lambda is in its cost and flexibility. With Lambda, you only pay for the compute time you consume, meaning that there's no extra charge when your code isn't running. This pay per use pricing model also comes in handy where running applications with unpredictable workloads or varying levels of user traffic. AWS Lambda offers added flexibility through its support for multiple programming languages, including [[Python (Programming Language)|Python]], [[Java]], and [[Node.js]]. It also integrates seamlessly with storage and database services, like Amazon S3 and DynamoDB. In our next lesson, let's take a look at Amazon DynamoDB, another AWS service that plays an important role in serverless applications. I'll see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Python (Programming Language)|Python]] (1), [[Java]] (1), [[Node.js]] (1)
> **CLI Commands:** aws (6), python (1), node (1)
> **Env Vars:** aws (6)
> **Analogies:** for instance (1), picture (1), similar to (1)
> **File Paths:** node.js (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)

#### [Overview of Amazon DynamoDB](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-amazon-dynamodb?u=76281980&t=0)** - In today's digital world filled with data, organizing and retrieving information efficiently continues to be a challenge. That's where [[Databases]] come in. Amazon DynamoDB is a fully managed non-relational database service offered by AWS that provides fast, predictable database performance. Unlike traditional databases, non-[[Relational Databases]] are designed for speed and flexibility, making them a great fit for serverless applications. One of the biggest advantages of DynamoDB is its [[Scalability]]. It can handle over 10 trillion requests per day and automatically adjusts its capacity to meet workload demands. DynamoDB is also designed to ensure that your data is readily accessible when needed. Instead of having to manually create copies of your database, DynamoDB takes care of it and replicates your data across multiple AWS regions. Finally, you only pay for the actual reads and writes your application performs. This pricing model makes DynamoDB a great option for both small and large-scale applications that need to handle a large amount of data. Overall, DynamoDB takes away the burden of having to manage database software and provision [[Hardware]], but providing a reliable, scalable, and cost effective way to store and access data. Next, we'll take a look at Amazon API Gateway, the final service to know before we build our serverless application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Relational Databases]] (1), [[Scalability]] (1), [[Hardware]] (1)
> **Env Vars:** aws (2), api (1)
> **CLI Commands:** aws (2)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Overview of API Gateway](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/overview-of-api-gateway?u=76281980&t=0)** - The final service we'll explore is Amazon API Gateway. An API stands for Application Programming Interface, and it's a set of rules and protocols for an application to communicate with other applications or systems. Amazon API Gateway is an AWS service that makes it easy for developers to create, publish, and maintain these APIs. You can think of API gateway as a front door to help you accept and process concurrent API calls, similar to a traffic controller. In the case of a serverless application, API gateway typically serves as the entry point for the application to interact with backend services, such as Amazon Dynamo db. One of the key advantages of API gateway is its [[Scalability]] and versatility. It can handle thousands of concurrent API calls and scales automatically in response to traffic patterns. Amazon API Gateway can support a wide range of APIs, including [[Representational State Transfer (REST)|REST]] APIs and HTTP APIs. And similar to the other services we've discussed, Amazon API Gateway uses a pay-as-you-go model. With API Gateway, you only pay for the calls made to your APIs and the data transfer out. In the next video, we'll be putting all of these pieces together and discuss what we're going to be building for our serverless web application. Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (11), aws (1), rest (1), http (1)
> **Analogies:** similar to (2), such as (1)
> **Definitions:** stands for (1), is an  (1)
> **CLI Commands:** aws (1)
> **Cross-References:** in the next (1)
> **Speakers:** - the (1)

#### [What we are building today](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/what-we-are-building-today?u=76281980&t=0)** - Now that we're familiar with the commonly used AWS services, it's time to apply that knowledge and create our own serverless web application. In the upcoming chapters, we'll develop a serverless recipe application that lets you store and display a collection of your favorite food recipes. Let's begin by taking a quick look at the architectural diagram for our application. This will provide you with a high-level overview of the different components involved in the application and how they interact. The first component to our web application is Amazon S3. Amazon S3 acts as a scalable and reliable storage solution for our static web files, such as [[HTML]], CSS, and [[JavaScript]] code. This will serve as the frontend where users can interact with the application. Next up, we have AWS Lambda. With AWS Lambda, we can leverage the power of serverless functions. Our Lambda function will handle the logic behind storing and retrieving recipe data from our DynamoDB database. To bridge the gap between our frontend and backend, we'll use Amazon API Gateway. This will allow us to handle incoming requests and invoke our Lambda function. Last but not least, we have Amazon DynamoDB as our database service. With DynamoDB, we can efficiently store and manage recipe data, ensuring fast and reliable retrieval. Now that we have a clear understanding of the architecture and services for the application, let's continue on to the next chapter where we'll set up our AWS account for the project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[JavaScript]] (1)
> **Env Vars:** aws (4), html (1), css (1), api (1)
> **CLI Commands:** aws (4)
> **Cross-References:** next chapter (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)


### 2. AWS Account and Website Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating and using an AWS account](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/creating-and-using-an-aws-account?u=76281980&t=0)** - Okay. Now, it's time for the hands-on portion of the course. We're going to start by setting up your AWS account. Head over to AWS.[Amazon.com](https://Amazon.com). Click on Create an AWS Account. And if you're already an AWS user, you can skip this part. Enter your email, and choose an AWS account name, and then follow the onscreen instructions to create and verify your account. Since I already have an AWS account, I'm going to go ahead and click on sign in. Here, I'll be prompted to enter my login details. Once you've signed in, you'll be directed to the AWS Management Console where you're presented with a centralized dashboard. From here, you'll be able to access, and deploy your AWS services quickly and easily. Now, during the signup stage, you would've been asked to provide your billing details, but here's the good news. AWS actually has a freight tier that allows you to build, and experiment with a wide range of services without an additional cost to avoid unnecessary charges. It's important to clean up your resources after deploying them. So once we're done with the hands-on portion of this course, please remember to terminate any active resources that you no longer require. And that you have it. Your AWS account is now set up. Let's move on to the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (10)
> **Env Vars:** aws (10)
> **UI Navigation:** click on (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Cross-References:** next video (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - okay (1)

#### [Create an S3 bucket and upload the landing page](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=0)** - [Narrator] All right, let's start building. In this video, we'll set up an Amazon S3 bucket to host the landing page for our recipe application. Open up the AWS Management Console and click on Search. We're going to type in S3. Click on S3 and you'll arrive at the Amazon S3 Console page. Click on Create Bucket, and here you need to type in a name for your bucket. I'm going to type in luci-[[LinkedIn]]-project, but feel free to type in any project name you'd like as long as it's not taken by another AWS user. We're going to scroll all the way down and disable the block public access. So this will ensure that the bucket will be publicly accessible to viewers of our website. Acknowledge this warning and keep all the other settings as default. Scroll down again and click on Create Bucket. Now it's time to add the contents of our website. So click on the bucket and download the website contents folder from the course files. We're going to click Upload and we're going to add these files to our bucket, so app.js, index.[[HTML]], and style.css. These files will form the front end for our website. Click on Upload and wait for the files to finish uploading. If you have some previous experience with [[Web Design]],
>
> **[1:36](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-an-s3-bucket-and-upload-the-landing-page?u=76281980&t=96)** feel free to customize the design of the website. The files I've provided is just a starting point. Once you've uploaded the files into the S3 bucket, it's now time to configure the bucket for static website hosting. I'll show you how in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[HTML]] (1), [[Web Design]] (1)
> **UI Navigation:** click on (6), scroll down (1)
> **File Paths:** app.js (1), index.html (1), style.css (1)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Prerequisites:** set up (1), configure (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)

#### [Configure the S3 bucket for static website hosting](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=0)** - [Instructor] Now that we've added our front end files to our S3 bucket, it's time to turn that bucket into a live website. So navigate to your S3 bucket and click on the properties tab, scroll all the way down and find the static website hosting option. Click on edit and we're going to enable static website hosting. In the index document section, type in index dot [[HTML]]. This basically tells AWS that the index dot HTML file is the main page for your website. Click on save changes at the bottom. And something else we have to do is add in a bucket policy. So click on permissions, and we're going to edit this bucket policy. Copy and paste the bucket policy from your exercise files. And remember to rename your bucket name into the name of your actual S3 bucket. In my case, it's Lucy [[LinkedIn]] Project. Scroll down and click on save changes. So once you've set all of that up, AWS will provide you with an endpoint, which is the URL of your static website. So go back to properties, scroll down, and click on this website endpoint. So this is the URL of your static website. As you can see here, it looks a bit empty right now, but that's because there's currently no recipes inside.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-the-s3-bucket-for-static-website-hosting?u=76281980&t=94)** Once we add recipes to our database and link it to the website, you'll be able to see all the recipes and instructions right there on the screen. And so let's move on to the next lesson where we'll dive into DynamoDB and start populating some of those recipes. I'll see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[LinkedIn]] (1)
> **UI Navigation:** click on (6), scroll down (2), navigate to (1)
> **Env Vars:** html (2), aws (2), url (2)
> **CLI Commands:** aws (2), find (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 3. Amazon DynamoDB and AWS Lambda Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [Set up a DynamoDB table for data storage](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=0)** - By now, you've set up your AWS account, created an S3 bucket, and configured it. Now it's time to add in more components to our serverless setup. From the AWS Management Console, search for DynamoDB. Click on the service. Click on Create table. And let's name our table recipes. Remember that the naming is case sensitive, so let's use all lowercase. For the partition key, let's enter id, and leave the type as String. Keep all the other settings as default, and then at the bottom, click on Create table. Give it a few moments for your table to finish creating. All right, once the table has been created, select your table and click on Actions. Then Explore items. And now we're going to click on Create item. And navigate to the [[JSON]] view. Here you'll see a JSON editor where you can input the data for your recipes. From the exercise files, you will be able to find three recipes. We're going to enter them one by one. So first, let's just enter the pasta. Click Create item. Go back to your JSON view. And now we're going to add in the chicken curry. Press Create item.
>
> **[1:34](https://www.linkedin.com/learning/building-serverless-applications-in-aws/set-up-a-dynamodb-table-for-data-storage?u=76281980&t=94)** And finally, we're going to add in our chocolate chip cookies. Press Create item. So now we have three items in our recipe book. Feel free to add in your own recipes or modify the existing recipes based on your own taste preferences. Just make sure the JSON format stays the same. Okay, now that we have our DynamoDB table ready, we can move on to the next step of our application, which is creating the lambda function. I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4)
> **Env Vars:** json (4), aws (2)
> **UI Navigation:** click on (5), navigate to (1)
> **CLI Commands:** aws (2), find (1), make (1)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** set up (1), setup (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - by (1)

#### [Create a Lambda function to retrieve data](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=0)** - [Instructor] Now that we've added recipes to our DynamoDB table, it's time to create a Lambda function that fetches the recipes. Head to AWS Lambda by searching Lambda on the search bar. Click on Lambda. and here we're going to click on Create a function. Let's name our function getRecipes. For the runtime let's select [[Node.js]] 16. Keep all the other settings as default, and then click Create function. Give it a moment for your function to finish creating. Alright, once your function has been created, you'll see a code editor with some sample code at the bottom. What we're going to do is replace all of this code with the code for the Lambda function in the exercise file. What this code does is it fetches all the recipes from the DynamoDB table and returns it. Once you finish copy and pasting this code, click on Deploy. Okay, now the function has been deployed. What we need to do now is give AWS Lambda permission to access the contents from DynamoDB. So scroll up a bit, head to Configuration, and then Permissions. In the Execution role, you're going to see Role name. Click on this Role name and this will take you to the IAM console.
>
> **[1:35](https://www.linkedin.com/learning/building-serverless-applications-in-aws/create-a-lambda-function-to-retrieve-data?u=76281980&t=95)** All right, now you can see that we're at the IAM console. Scroll down, click on Add Permissions and Attach policies. What we have to do is search for AmazonDynamoDBFullAccess. So select this policy and click on Add permissions. All right, now we've successfully created a Lambda function that can retrieve our recipes. We've also given permissions for it to access the DynamoDB table. In the next few lessons, we'll explore how to connect everything together through Amazon API Gateway and make our recipe application come to life. I'll see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (1)
> **UI Navigation:** click on (6), scroll up (1), scroll down (1)
> **Env Vars:** aws (2), iam (2), api (1)
> **CLI Commands:** aws (2), node (1), make (1)
> **Exercise Files:** sample code (1), exercise file (1)
> **File Paths:** node.js (1)
> **Code Identifiers:** getrecipes (1)
> **Cross-References:** in the next (1)


### 4. API Gateway Setup and Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Configure API Gateway](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=0)** - We're now ready to add in the final component to our serverless application, the Amazon API Gateway. Once we're done, you'll be able to test and run your application. Search API Gateway in the AWS Management Console. Click on API Gateway. And once you're on the landing page, scroll down until you see [[Representational State Transfer (REST)|REST]] API. Click on Build. So we're using a REST API here because it's the standard method for web applications, allowing communication using simple HTTP methods. So let's create new API, and then let's name it myAPI.
>
> **[0:43](https://www.linkedin.com/learning/building-serverless-applications-in-aws/configure-api-gateway?u=76281980&t=43)** Cool. Okay, so now click on Create resource. And for the resource name, let's call it recipes. Click Create resource. And once we've created the resource, we'll need to create a GET method. So click on Create method, select GET, and let's leave it as Lambda function because we're going to be connecting the API gateway with our Lambda function. Scroll down and find the Lambda function that you've created previously. And then click on Create method. Okay, we're now ready to deploy our API. So click on Deploy API and select a new stage. We're going to name our stage prod, which stands for production. So click on Deploy, and you'll be taken to the Stages page where you can see an invoke URL. This is your API endpoint. By following these steps, you've created an API gateway that will connect your front-end application to your backend Lambda function. In the next video, let's update the app.js file to use the API gateway endpoint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **Env Vars:** api (12), rest (2), aws (1), http (1), url (1)
> **UI Navigation:** click on (7), scroll down (2)
> **CLI Commands:** aws (1), find (1)
> **File Paths:** app.js (1)
> **Code Identifiers:** myapi (1)
> **API Endpoints:** get  (1)
> **Cross-References:** in the next (1)

#### [Edit an app.js file](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=0)** - [Instructor] The final step is to update our app.js file and enable cross-origin resource sharing. So, let's click on Resources and Navigate to our API. So, click on recipes, and what we're going to do now is click on Enable CORS. Select GET, and then click on Save. So now that CORS is enabled, what we'll want to do now is redeploy our application. And then for this Invoke URL, click on copy. Navigate to your app.js file and replace this line with your URL. So this Your-API-Gateway-Invoke-URL section. Paste it in, and save this file. So once the file is saved, go back to your AWS Management console, and then let's go to our S3 bucket. So navigate to S3. Click on our bucket. And in this case, what we're going to do is delete this existing app.js file and upload our updated app.js file. So I'm going to delete it here. And then, you can see that I'm going to re-upload it. So this is the new app.js file. Scroll down and click Upload. And with that, you've successfully connected
>
> **[1:36](https://www.linkedin.com/learning/building-serverless-applications-in-aws/edit-an-app-js-file?u=76281980&t=96)** your front-end website to your backend services through the API Gateway. The configuration of your serveless application is now complete. Let's test out the application in the next video.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), navigate to (3), go to (1), scroll down (1)
> **Env Vars:** api (3), url (3), cors (2), aws (1)
> **File Paths:** app.js (5)
> **Cross-References:** go back to (1), in the next (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Test the recipe website to ensure proper functionality](https://www.linkedin.com/learning/building-serverless-applications-in-aws/test-the-recipe-website-to-ensure-proper-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/test-the-recipe-website-to-ensure-proper-functionality?u=76281980&t=0)** - Now that all the steps of creating our recipe application are complete, let's take a look at our website to see if it works. So click on properties, scroll all the way down to where we had static website hosting, and click on the S3 URL. You should now see the landing page with all the recipes that you've previously added through DynamoDB. If your website doesn't work or isn't displaying the recipes, please go back and revisit the previous lessons to see if you made any errors. Common errors include, Amazon Lambda not connecting to the DynamoDB properly, or issues with the API gateway. All right, this brings us to the end of this hands-on project. Great job on successfully building your serverless application and navigating through all the instructions.

> [!info]- Semantic Content
>
> **Env Vars:** url (1), api (1)
> **UI Navigation:** click on (2)
> **Speakers:** - now (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-serverless-applications-in-aws/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-serverless-applications-in-aws/next-steps?u=76281980&t=0)** - Congratulations, you've just taken a significant step forward in your cloud learning journey. In this course, you've not only learned about the essential AWS services for building serverless applications, but also put that knowledge into practice by building a fully functional serverless recipe application. So what's next? Keep exploring and keep building. The world of [[Cloud Computing]], especially in the serverless space, is constantly evolving. Look out for opportunities to apply your newly acquired skills in the real world. Check out the other cloud courses on [[LinkedIn]] Learning and feel free to take a look at my YouTube channel, Tech with Lucy to stay updated with the latest AWS career and study tips. Thank you for taking this course, and until next time, happy learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (1), [[LinkedIn]] (1)
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