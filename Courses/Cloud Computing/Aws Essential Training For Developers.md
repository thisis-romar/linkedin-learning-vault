---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: aws-essential-training-for-developers-2023
url: "https://www.linkedin.com/learning/aws-essential-training-for-developers-2023"
level: Beginner
updated: 9/21/2023
learners: 4010
skills:
  - Amazon Web Services (AWS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQH2oKP36gt7_A/learning-public-crop_675_1200/B56ZqdJYQKJUAY-/0/1763573073601?e=2147483647&amp;v=beta&amp;t=CO0-6mKFQoEnAj6q2bb7tUvRtna87K_xeXvXpsjuFbY"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Advance Your AWS Development Skills- Exploring Complex Application Development]]'
  - '[[Develop Your AWS Skills]]'
next_courses:
  - '[[Introduction to AWS AI Services for Developers]]'
  - '[[Complete Guide to AWS Software Deployment]]'
path_nav: '[{"path":"Advance Your AWS Development Skills- Exploring Complex Application Development","position":1,"total":6,"prev":null,"next":"Introduction to AWS AI Services for Developers"},{"path":"Develop Your AWS Skills","position":1,"total":4,"prev":null,"next":"Complete Guide to AWS Software Deployment"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/amazon-web-services-aws
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Aws%20Essential%20Training%20For%20Developers.md)

![Aws Essential Training For Developers](https://media.licdn.com/dms/image/v2/D560DAQH2oKP36gt7_A/learning-public-crop_675_1200/B56ZqdJYQKJUAY-/0/1763573073601?e=2147483647&amp;v=beta&amp;t=CO0-6mKFQoEnAj6q2bb7tUvRtna87K_xeXvXpsjuFbY)

# Aws Essential Training For Developers

> Learn the best ways to host your application within AWS. Jeremy “JV” Villeneuve guides you through how to make the best use of services like IaaS, DBaaS, PaaS, and SaaS using hands-on examples. Plus, explore DevOps and security within AWS and prepare for the AWS Cloud Practitioner Certification (CLF-C02) exam by using the sample questions included at the end of each chapter.

> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023) | Beginner | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [What is the best way to use AWS?](#what-is-the-best-way-to-use-aws)
  - [How to choose AWS services](#how-to-choose-aws-services)
  - [What you need to know](#what-you-need-to-know)
- [**1. AWS Essential Setup**](#1-aws-essential-setup) (5 videos)
  - [The AWS root account](#the-aws-root-account)
  - [Learn how to create an IAM user group](#learn-how-to-create-an-iam-user-group)
  - [Learn how to create an IAM user and access key](#learn-how-to-create-an-iam-user-and-access-key)
  - [Break down the bill in AWS](#break-down-the-bill-in-aws)
  - [Set a budget to save money](#set-a-budget-to-save-money)
- [**2. On-Premise to AWS**](#2-on-premise-to-aws) (4 videos)
  - [On-premise infrastructure](#on-premise-infrastructure)
  - [Birth of the cloud: EC2 and S3](#birth-of-the-cloud-ec2-and-s3)
  - [Where in the world are your AWS services?](#where-in-the-world-are-your-aws-services)
  - [Get closer to users with Local Zones](#get-closer-to-users-with-local-zones)
- [**3. IaaS Compute**](#3-iaas-compute) (8 videos)
  - [Learn how to create an EC2 instance](#learn-how-to-create-an-ec2-instance)
  - [What is the best EC2 instance type?](#what-is-the-best-ec2-instance-type)
  - [Learn how to create a key pair](#learn-how-to-create-a-key-pair)
  - [Set up a web server](#set-up-a-web-server)
  - [Stopping and starting vs. rebooting instances](#stopping-and-starting-vs-rebooting-instances)
  - [Right-sizing with EC2 autoscaling](#right-sizing-with-ec2-autoscaling)
  - [Learn how to create backups with an AMI Snapshot](#learn-how-to-create-backups-with-an-ami-snapshot)
  - [Saving money in EC2](#saving-money-in-ec2)
- [**4. IaaS Networking**](#4-iaas-networking) (9 videos)
  - [Using security groups as firewalls](#using-security-groups-as-firewalls)
  - [Virtual Private Cloud (VPC)](#virtual-private-cloud-vpc)
  - [Public and private subnets](#public-and-private-subnets)
  - [Internet and NAT gateways](#internet-and-nat-gateways)
  - [Static addresses with Elastic IPs](#static-addresses-with-elastic-ips)
  - [Using VPNs to access private subnets](#using-vpns-to-access-private-subnets)
  - [Scaling with Elastic Load Balancer (ELB)](#scaling-with-elastic-load-balancer-elb)
  - [Learn how to create an Application Load Balancer (ALB)](#learn-how-to-create-an-application-load-balancer-alb)
  - [Point a domain to your EC2s with Route 53](#point-a-domain-to-your-ec2s-with-route-53)
- [**5. IaaS Storage**](#5-iaas-storage) (10 videos)
  - [Hard drives with Elastic Block Store (EBS)](#hard-drives-with-elastic-block-store-ebs)
  - [NAS with Elastic File System (EFS)](#nas-with-elastic-file-system-efs)
  - [Web storage with Simple Storage Service (S3)](#web-storage-with-simple-storage-service-s3)
  - [Upload a file to S3 from the AWS CLI](#upload-a-file-to-s3-from-the-aws-cli)
  - [Use the SDK to create a file within S3](#use-the-sdk-to-create-a-file-within-s3)
  - [IAM roles for EC2](#iam-roles-for-ec2)
  - [Putting together all of the IAM resources](#putting-together-all-of-the-iam-resources)
  - [Storing passwords with Secrets Manager](#storing-passwords-with-secrets-manager)
  - [Long-term storage with S3 Glacier](#long-term-storage-with-s3-glacier)
  - [Serve content faster with CloudFront](#serve-content-faster-with-cloudfront)
- [**6. Database as a Service (DBaaS)**](#6-database-as-a-service-dbaas) (6 videos)
  - [What is database as a service (DBaaS)?](#what-is-database-as-a-service-dbaas)
  - [Relational Database Service (RDS)](#relational-database-service-rds)
  - [NoSQL databases](#nosql-databases)
  - [In-memory caches](#in-memory-caches)
  - [Big data databases](#big-data-databases)
  - [Buffer data with a message queue](#buffer-data-with-a-message-queue)
- [**7. Platform as a Service (PaaS)**](#7-platform-as-a-service-paas) (5 videos)
  - [Hosting web apps with Elastic Beanstalk](#hosting-web-apps-with-elastic-beanstalk)
  - [Running containers on AWS](#running-containers-on-aws)
  - [Using Kubernetes with AWS](#using-kubernetes-with-aws)
  - [Serverless functions with Lambda](#serverless-functions-with-lambda)
  - [Managing long-running jobs](#managing-long-running-jobs)
- [**8. Software as a Service (SaaS)**](#8-software-as-a-service-saas) (3 videos)
  - [User authentication for your app](#user-authentication-for-your-app)
  - [Designing backend APIs](#designing-backend-apis)
  - [Helpful machine learning services](#helpful-machine-learning-services)
- [**9. DevOps with AWS**](#9-devops-with-aws) (5 videos)
  - [What is DevOps?](#what-is-devops)
  - [Developer tools within AWS](#developer-tools-within-aws)
  - [Infrastructure as Code with AWS](#infrastructure-as-code-with-aws)
  - [Monitoring with CloudWatch](#monitoring-with-cloudwatch)
  - [DevOps using machine learning](#devops-using-machine-learning)
- [**10. Security on AWS**](#10-security-on-aws) (5 videos)
  - [AWS Shield and firewalls with WAF](#aws-shield-and-firewalls-with-waf)
  - [Spot issues with Inspector, GuardDuty, and Macie](#spot-issues-with-inspector-guardduty-and-macie)
  - [Manage EC2 with Systems Manager](#manage-ec2-with-systems-manager)
  - [Traceability with CloudTrail and Security Hub](#traceability-with-cloudtrail-and-security-hub)
  - [Investigate threats with AWS Detective](#investigate-threats-with-aws-detective)
- [**Conclusion**](#conclusion) (3 videos)
  - [Check for unwanted charges](#check-for-unwanted-charges)
  - [AWS Well-Architected Framework](#aws-well-architected-framework)
  - [Getting help from AWS Support](#getting-help-from-aws-support)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the best way to use AWS?](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-way-to-use-aws?u=76281980)

#### [How to choose AWS services](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=0)** - [[Amazon Web Services (AWS)|Amazon Web Services]] has over a hundred different services, and it just seems like they're adding more and more each year.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=8)** Now, don't worry.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=9)** You're not going to be an expert in every service.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=12)** I'm not an expert in every service.
>
> **[0:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=15)** They've got AWS Ground Station for helping you communicate with your fleet of satellites in orbit.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=22)** I don't have satellites in orbit, but if I ever run into a situation where I need to download data from satellites, I know that AWS has a service for that, and at that time, I'll just read the documentation and start looking for some other courses in our catalog that can give me some more information on how Ground Station works.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=42)** This is how you'll walk around your AWS Starship as well.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=46)** Once you've identified a potential need for an AWS service that you haven't used yet, you'll walk into that unused room of your Starship, turn on the lights and start twirling knobs and dials, and then explore a catalog for a course that's going to take you deeper into how to actually use that service when developing for your application.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=65)** So it's important that you start learning what kinds of services AWS offers, what AWS has named that service, and the architecture icon for that service that you'll find in the documentation, blogs, and in other courses.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=79)** Okay, fine. So why are we even doing this?
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=83)** As an example, let's say that your mobile application has a feature that lets your users upload video taken from a job site.
>
> **[1:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=90)** You could install some open source tools directly onto some AWS servers, and build a background job that processes these videos in different sizes and formats, or you could have just used the Elastic Trans Coder Service, which is cheaper, more scalable, easier to use, and saved yourself a ton of time and money.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=110)** You just need to know that Elastic Transcoder processes videos.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=114)** And when you have a potential need for it, look up its pricing, figure out how it works, which might include reading a few architecture diagrams, and then determine if it's right for your project.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=126)** Once again, you aren't going to use every service that AWS offers, but you should know what all the services can do for you, so that when you're building your app, you can use the right tool for the right job.
>
> **[2:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=139)** Oh, and to make things a little more interesting for you, AWS has published new versions of the architecture icons, as you'll see in these clips from the AWS, "This is my architecture" video series.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=152)** So sometimes you're going to see diagrams that use the new icons, and then sometimes you'll see diagrams that use the old icons.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=160)** For this course, we use the new icons.
>
> **[2:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=163)** And these are usually labeled on the diagrams so don't think you need to memorize the service name for all of them.
>
> **[2:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=169)** However, when I show you the old and the new icon at the same time, these are common services that aren't typically labeled on the diagram.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=178)** - So these are the only instances where I suggest you learn both icons, the name of the service, so this is Route53 as an example, and a brief summary of what this service does.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=190)** Route53 is for DNS records, and I'll get into all that in a later video.
>
> **[3:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=196)** But before we start diving into a bunch of AWS services, we're going to cover some key security concepts that you're going to see come up again and again in the various AWS services, and we're going to show you how to safely use your AWS Starship for the first time so you don't crash it into the side of a planet.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=214)** Then, we're going to start from the bottom of the Starship in our engine room, and we're going to get our hands dirty with some servers and some storage options, and go through some cloud networking concepts.
>
> **[3:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=225)** From there, we're going to move up to the nicer decks of our Starship, where AWS has done all the work of managing servers and [[Databases]], and look at the various tools they have for quickly deploying your code, or helping you quickly develop a mobile application, or leverage machine learning in your application for text recognition or voice detection.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=247)** Along the way, we'll encounter several terms that you might have heard related to [[Cloud Computing]], such as [[IaaS|infrastructure as a service]], [[Big Data]], and serverless architecture.
>
> **[4:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=258)** Hey, listen, don't worry, we're going to break down all the buzzwords for you, so get ready to learn.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Databases]] (1), [[Cloud Computing]] (1), [[IaaS|Infrastructure as a service]] (1), [[Big Data]] (1)
> **CLI Commands:** aws (14), find (1), make (1)
> **Env Vars:** aws (14), dns (1)
> **Documentation:** the documentation (2)
> **Prerequisites:** install (1), before we start (1)
> **Speakers:** - amazon (1), - so (1)
> **Analogies:** such as (1)

#### [What you need to know](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=0)** - You don't have to be an expert on managing servers to take this course, but it helps if you have a basic understanding of how a computer works and how devices talk to each other in an IP network, much like the network you probably have at home.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=14)** This course is going to introduce [[Cloud Computing]] concepts using computer parts that you would find on the shelves of any big box electronic store, such as CPUs, and RAM, and networking switches, and routers.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=26)** So, it helps if you've used these components before and you're at least a little familiar with what they do.
>
> **[0:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=33)** The application that you're developing may not be a web or mobile app, but I'll introduce you to some cloud concepts by showing you a few ways you can host a website with AWS, such as one built on [[WordPress]].
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=45)** You should have a basic understanding of how a web server works and how a domain name like [[[LinkedIn]].com](https://linkedin.com) points to an IP address for serving up that site to your web browser.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=56)** You likely don't transport your source code around using a huge external hard drive like this one anymore, but this hard drive will represent the source code and the assets to the application you want to run from within AWS.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=70)** And this book will represent the database to your application.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=74)** This is all of your user data, transaction history, website analytics, pet medical records, whatever.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=81)** You should be familiar with what a database does and how you would use it in your application to read and store user data.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=89)** We'll also look at a few code samples but we'll keep the samples as simple as possible.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=95)** If you have any familiarity with a modern programming language, you shouldn't have too much trouble reading the code samples even if it's in a language that you haven't used before.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=106)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (1), [[WordPress]] (1), [[LinkedIn]] (1)
> **CLI Commands:** aws (2), find (1)
> **Env Vars:** aws (2), ram (1)
> **Exercise Files:** source code (2)
> **Analogies:** such as (2)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Speakers:** - you (1)


### 1. AWS Essential Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [The AWS root account](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=0)** - Before we do anything on your AWS account, we first need to figure out what kind of account you have.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=7)** If you don't have an AWS account, you can sign up for your own account by going to aws.[amazon.com](https://amazon.com).
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=14)** You'll be asked to put in a credit card on file for the billing but most AWS services have a free tier that allow you to try out several services for the first year while you're learning about AWS.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=26)** If you signed up for your account this way or someone in your organization only sent you a username and password then you have an AWS root account.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=37)** If you were sent a username, a password and an account ID or an account alias or maybe someone sent you a special link to click on to sign in then you have an IAM user account.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=52)** IAM stands for Identity and Access Management and this is how AWS controls who has access to your organization's account.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=62)** Now, if you have an IAM user account then your login screen will include a field at the top that says Account ID or Alias and it should already be filled in for you.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=73)** If you have an AWS root account, you are using a special account within AWS and you should only sign in to AWS using the root account under certain circumstances.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=86)** When you sign in with the AWS root account, you become captain of your starship and the captain of the starship has special abilities.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=95)** You can promote and demote your officers.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=97)** You can even tell your ship to self-destruct.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=100)** When you interact with AWS using the root account, imagine yourself wearing the captain's uniform and the great responsibilities that come with the uniform.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=110)** There's a complete list of the special privileges the root user has in the documentation but the most common uses are creating your first IAM user, changing the login credentials of the root user itself, changing your support plan with AWS and deleting the entire AWS account.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=131)** So you can see how dangerous it would be for someone to get ahold of your AWS root account.
>
> **[2:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=136)** You never want to give out your AWS root account and you should only log into the AWS root account when you absolutely have to.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=145)** Make sure your AWS root account has a strong password and if you want to take extra precautions, AWS recommends that you secure the root account by using a physical [[Multi-factor Authentication]] key.
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=159)** The MFA key requires that whoever puts on the captain's uniform must have the root username and password and have the MFA key in hand.
>
> **[2:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=169)** The physical MFA keys they support along with their associated costs are listed in the AWS Docs.
>
> **[2:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=176)** To set up MFA, log into the AWS console, click on your username in the upper right toolbar and in the sub menu, select my Security Credentials.
>
> **[3:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=187)** Under Multi-factor Authentication, click on the Assign MFA Device button.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=193)** The Virtual MFA Device option allows you to use an app on your phone in place of a physical device but I recommend using the physical MFA key for the AWS root account and then using the Virtual MFA option to secure your individual IAM user account.
>
> **[3:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=211)** To set up MFA, you just follow the instructions listed in this wizard for the device that you selected.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=217)** Now, let's keep on the captain's uniform just a little bit longer so we can create you an IAM user and then hang up the captain's uniform up in the closet where no one can find it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multi-factor Authentication]] (2)
> **Env Vars:** aws (21), mfa (9), iam (6)
> **CLI Commands:** aws (22), make (1), find (1)
> **UI Navigation:** click on (3)
> **Prerequisites:** set up (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Documentation:** the documentation (1)
> **Tools:** aws console (1)

#### [Learn how to create an IAM user group](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=0)** - [Instructor] The AWS documentation gives you several best practices for securing your root account.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=7)** We are now going to implement the first recommendation, which is to create a new IAM user.
>
> **[0:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=16)** In the AWS console as the root user, click on your name in the upper right side of the AWS console, and in the pull down, click on account.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=27)** If you were given an IAM user to log to AWS, you can follow along with these steps.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=34)** But since you already have an IAM user, you won't need to create a second one.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=40)** You also may not see all the same options since you aren't a root user.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=47)** Scroll down until you see the section titled IAM User and Role Access to Billing Information, and click on the edit button on the right.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=59)** Click the Activate IAM Access checkbox and click Update.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=65)** This will allow an IAM user, such as yourself in a few minutes, to control access to the billing areas of AWS, so that someone other than the root user can see the current charges being racked up, or change the billing details.
>
> **[1:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=82)** In the services search bar at the top, type IAM and click on the entry that auto completes.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=92)** In the IAM console, click on user groups on the left hand sub menu under the access management section.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=102)** I recommend dividing your team up into groups, so that you can add users to the appropriate group and they'll inherit all the policies and their associated permissions that you've assigned to that group.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=115)** Click on the create group button and for the user group name type admins.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=122)** if you have existing IAM users already, you can attach them to this new group by selecting them in the section below, but we're going to create a new user and attach them to this group in the next video.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=137)** Scroll down and under the section attach permissions policies, click inside of the policy search bar, type administrator access, all one [[Microsoft Word|word]] with no spaces, and press enter.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=156)** Click the checkbox next to the Administrator Access policy.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=162)** The Administrator Access policy includes all of the default security policies that AWS has for administrator access.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=172)** But if you would like to really dial in exactly what your team members have access to in AWS, such as allowing a team member to create servers and read data from your AWS [[Databases]], but restrict them from viewing your billing details, you can create a custom policy for this group and grant or deny access to specific permissions and resources within AWS.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=201)** AWS recommends that you follow the rule of only granting least-privilege or only giving your team members the bare minimum of rights over your AWS account that they need to perform their jobs well.
>
> **[3:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=218)** If you want to write a custom policy, search our catalog for AWS IAM, and you will find several courses that will show you how to create and test custom policies.
>
> **[3:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=232)** Click on the create group button.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=236)** To view the group we just created, click on admins from the group list.
>
> **[4:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=242)** Notice under the summary that this user group has an ARN, or A-R-N, which stands for Amazon Resource Names, all of your [[Cloud Infrastructure]], including your servers, networking components, storage, IAM users, your roles, almost everything will have a unique ARN.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=265)** This is like the dog tags to your cloud infrastructure.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=269)** Everything will have a unique ID, and you'll use these IDs in various places around AWS to link your cloud infrastructure together.
>
> **[4:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=279)** That number that you see in the ARN is your account ID, so any resources you or your users create will have this account ID.
>
> **[4:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=289)** Now, let's assign a new user to the group that we just created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Infrastructure]] (3), [[Microsoft Word|Word]] (1), [[Databases]] (1)
> **Env Vars:** aws (13), iam (11), arn (3)
> **CLI Commands:** aws (13), find (1)
> **UI Navigation:** click on (8), scroll down (2), checkbox (2)
> **Tools:** aws console (2)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Definitions:** stands for (1)

#### [Learn how to create an IAM user and access key](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=0)** - [Instructor] On the left-hand submenu, click on users.
>
> **[0:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=4)** And at the top of that page, click on the Add users button.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=10)** Enter a unique username.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=14)** Under Select AWS access type, check Access key - Programmatic access.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=22)** The access key will allow our user to access AWS services on your account without providing your username and password.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=30)** It's like creating a set of car keys for your AWS account.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=35)** We need this key later because later in the course we're going to use the AWS command-line interface or [[CLI]] to interact with our AWS account.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=45)** And you'll need this key to tell AWS who you are.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=50)** Also, check the Password - AWS Management Console Access checkbox.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=58)** This will give you an option to create your own password or just use an auto-generated password for this new user.
>
> **[1:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=66)** It'll also give you the option to force a password reset upon the first login.
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=72)** For best practice, leave Autogenerated password selected and also make sure that Require password reset is selected.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=83)** At the bottom click Next: Permissions.
>
> **[1:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=88)** Click the checkbox next to the admins group to assign this new user to the admins group that we just created.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=95)** And click Next.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=98)** And then click Next again.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=101)** Click the Create user button.
>
> **[1:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=105)** Click the Download .csv button for the access keys and the password for your IAM sign in URL.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=114)** You will only ever be shown this screen once.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=119)** Copy all this information from the CSV into a secure password store, such as LastPass, or 1Password, or a similar tool.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=129)** And make sure to securely delete the CSV file After putting this into a secure location.
>
> **[2:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=136)** The access key ID is as important as your password.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=143)** Don't paste your password or your secret access key directly into your source code or put it in an unsecure location that can be compromised.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=156)** Copy the console login link from the spreadsheet.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=161)** Back in the AWS console, click on the Close button at the bottom, and then click on your name in the upper right-hand corner of the console.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=171)** And in the pull down, click the Sign out button.
>
> **[2:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=176)** Now go to the login URL that you copied out of the CSV file.
>
> **[3:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=184)** You'll see that it auto fills your account ID.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=189)** Type in the new username that you picked for yourself and paste in your temporary password.
>
> **[3:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=196)** Set your new password and click Confirm password change.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=205)** There you go.
>
> **[3:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=206)** Now you can put away that captain's uniform and start using AWS only with your new IAM user.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=215)** You can even load up the IAM console again and start adding the other users on your team.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=222)** If you need to manage a large list of users and you already use another identity provider such as [[Microsoft]]'s [[Active Directory]] take a look at AWS Identity Center.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=235)** This can be configured so that your users have a single sign-on that they will use inside your [[Microsoft Office|office]] and from within AWS.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=246)** And if you have a ton of departments, or separate companies, or startup projects that you need to stay somewhat isolated from each other, you might find it easier to create multiple root accounts.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=260)** Take a look at AWS organizations, which is like having a single billing master account that is like an admiral over a fleet of individual starships and captains.
>
> **[4:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=274)** Before we get much further into AWS, the first thing we need to do is to make sure that we get a handle on the billing before we rack up too many charges on our new accounts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1), [[Microsoft]] (1), [[Active Directory]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** aws (13), iam (3), csv (3), url (2), cli (1)
> **CLI Commands:** aws (13), make (3), find (1)
> **UI Navigation:** click on (4), checkbox (2), go to (1)
> **Analogies:** such as (2), it's like (1)
> **Best Practices:** best practice (1), make sure to (1)
> **Cross-References:** later in (1)
> **Tools:** aws console (1)

#### [Break down the bill in AWS](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=1)** - Man, nobody likes paying bills.
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=5)** AWS has made this a little easier on you by asking for a credit card upfront when you create your AWS root account.
>
> **[0:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=11)** The only problem is they'll charge your card automatically each month based on your usage and then send you the statement after they've already charged your card.
>
> **[0:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=20)** And so if you're not watching your usage, then you're going to be in for quite a shock.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=28)** But don't worry, there's some alarms that we can set on your account so that you don't run into any surprises.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=36)** When you first log on to your AWS account, you'll see the console home screen.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=42)** No matter where you are within the AWS console, if you click the AWS logo in the upper left-hand corner, you'll always be taken back to the console home.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=55)** It has some widgets on it that you can rearrange to your liking and it'll show you the AWS services that you've most recently used.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=65)** It also has some recent announcements and it's a great way to keep up with the new services and features that are being launched.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=75)** On this page, you'll see a widget called Cost and usage.
>
> **[1:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=80)** This will give you a quick glance of how much usage you've already racked up this month, as well as give you a forecast of projection of your costs for this month, if you continue to run the same amount of services.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=94)** If this is a new account, it may take a little bit before AWS starts showing you billing metrics.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=102)** At the bottom of this widget, click on the Go to AWS [[Cost Management]] link.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=109)** Within the AWS Cost Management screen, on the left-hand side, click Cost Explorer.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=117)** The Cost Explorer will give you some charts and reports that will allow you to see a breakdown of which AWS services are being included in your monthly total.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=129)** Several AWS services have a free tier offering that allow you to try out the services for free in some limited fashion.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=138)** And if your AWS account is less than a year old, you will get some additional free tier offerings.
>
> **[2:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=146)** If you want to keep everything within the free tier, check out this page for the service you are wanting to demo and see what the restrictions are.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=156)** The services that we will explore in this course should all be included within the free tier, if you meet the requirements, and we will delete any resources that could continue to incur costs if they were kept running.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=171)** However, it's always a good idea to occasionally check the Cost Explorer to make sure that you've deleted every last item you're no longer using.
>
> **[3:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=183)** At the end of the month, AWS will charge your card and generate a bill of the services that you have used.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=192)** In the AWS console in the search bar at the top, type billing and click on the entry that auto completes.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=202)** This is the billing dashboard, and this is where you can view your current and previous bills.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=209)** In the left-hand menu, scroll down and click on Billing preferences.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=215)** If you would like to get emailed a PDF summary of your usage each month, check Receive PDF invoice by Email.
>
> **[3:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=225)** And since we're using the free tier for this course, check Receive Free Tier Usage Alerts and input your email address.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=235)** This will give you an alert if you are running out of free tier resources and you may be billed for additional services.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=244)** Scroll down and click Save preferences.
>
> **[4:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=248)** Now let's set a budget within AWS so that if we are charged for services that fall outside of the free tier, it's an amount that falls within our budget.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cost Management]] (2)
> **Env Vars:** aws (15), pdf (2)
> **CLI Commands:** aws (15), make (1)
> **UI Navigation:** click on (3), scroll down (2), go to (1)
> **Tools:** aws console (2)
> **Definitions:** is a  (1)
> **Speakers:** - man (1)

#### [Set a budget to save money](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=0)** - Another way to make sure we keep our AWS monthly costs within an expected range is to create a budget.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=8)** Just like you can create a budget in real life to monitor how you would spend on groceries and eating out, you can create budgets within AWS to monitor your spending on one or all of your AWS services.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=22)** On the left underneath [[Cost Management]], click on Budgets.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=29)** Click on Create a budget.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=31)** Make sure that Cost budget is selected and click Next.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=38)** Scroll down, and for budget name, type "All AWS services".
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=47)** Make sure the budget period is set to monthly in the pull down and that recurring budget is selected.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=56)** For the budget amount, type in a monthly amount that you feel comfortable spending while you are learning AWS.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=65)** For myself, I'm going to set my budget at $20 a month, so in the field, I just want to type 20, period, zero, zero.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=77)** Verify that the budget scope is set to all AWS services and click Next at the bottom of this screen.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=86)** Scroll down and click the add an alert threshold button.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=93)** Set the threshold to 80 and change the trigger to forecasted.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=101)** This says I'm going to give them an alert when AWS predicts that monthly spend is going to go over $16 at my current rate of usage.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=113)** This will let me know ahead of time that I need to come back into the cost explorer and shut down any services I don't want to be billed for.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=125)** In the email recipients box, type in your email address and then click the Next button.
>
> **[2:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=134)** The Attach actions screen will let you set up automations that will run when the budget alert is triggered, such as shutting down servers.
>
> **[2:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=144)** But for now, let's just rely on the email that AWS will send us and we'll take action manually.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=150)** Click Next, and then at the bottom of the summary page, click Create budget.
>
> **[2:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=158)** Now that we've got a budget set up, and we know that we're not going to get unexpected charges, let's dive into what the cloud is and all the services that AWS offers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cost Management]] (1)
> **CLI Commands:** aws (9), make (3)
> **Env Vars:** aws (9)
> **UI Navigation:** click on (2), scroll down (2)
> **Analogies:** just like (1), such as (1)
> **Prerequisites:** set up (2)
> **Speakers:** - another (1)


### 2. On-Premise to AWS

[↑ Back to Table of Contents](#table-of-contents)

#### [On-premise infrastructure](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=0)** - Let's clear the air and demystify the cloud.
>
> **[0:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=4)** And to do this, we need to go back in time to the birth of the cloud, to the year 2006, right before [[Amazon Web Services (AWS)|Amazon Web Services]] launched.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=13)** So at this time, to host an application over to the internet, most medium to large organizations would self-host and build out an expensive data center room in their [[Microsoft Office|office]].
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=23)** Or they would do what most small businesses were doing and they would rent space in someone else's data center called co-location, which would provide you with redundant sources of power and internet so that, you know, your whole website doesn't go down every time building maintenance shuts off the breakers.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=40)** If you've never been inside a data center, you've likely seen one of these in the movies.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=45)** This is the part where the hacker breaks into the super secret facility, plugs their laptop into one of the racks and steals the secret files.
>
> **[0:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=53)** And a real data center really kind of looks like that, except that person in the hoodie crouched on the floor with their laptop is someone who actually works for the data center and not a real life hacker.
>
> **[1:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=64)** All right, so what we're looking at here is just one of those servers from one of those racks.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=70)** Now I've taken the lid off the server and now we can see inside it.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=74)** And if you look at it, you'll see that it's mostly all the same components you would find in your computer at home.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=79)** These components are just arranged in a different casing so that it slots easily into the rack to save space in the data center.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=87)** But it's still got a processor, it's got sticks of ram and it's got a hard drive that's 99% identical to the one that's in your computer at home.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=96)** So let me push this off to the side.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=100)** Let's take a look at this.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=102)** This tower computer is sold as a small business server, and it has almost the same components as the flat 1U server in the rack.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=111)** It just comes in a different form factor.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=113)** In fact, it's almost identical to a tower computer you'd use as a workstation or your PC at home, except usually these servers don't have these sweet graphics cards because they rarely even have monitors attached to them.
>
> **[2:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=128)** We'll use this small business server in this course when referring to servers, although in real life, your cloud servers run off a flat 1U server like the one that we saw earlier.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=140)** So in 2006, if you needed a server, you would just go online and buy a server, just like you would shop online for a new laptop.
>
> **[2:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=149)** And you'd just have this giant thing shipped to you.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=152)** Then you would self-host it from a room within your office or you'd set it up, the fancy [[Microsoft Word|word]] for this was to provision it, and then take it down to your co-located data center, which was called the colo, and slot it into your server rack.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=167)** So a third option that you had is that you could lease dedicated servers.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=171)** So instead of bringing your own server down to the colo you would just rent one of these servers.
>
> **[2:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=176)** And if anything happened to say the [[Hardware]] of the server, instead of you driving down to the data center to fix it the data center text would just walk over and look at your server and fix anything that was wrong with it.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=189)** These three types of deployments fell under a category called on-premise hosting, which is some form of just do it yourself hosting where you had the full responsibility of figuring out what to do if your single server failed on a busy Tuesday afternoon.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=207)** So around this time, virtualization started to appear within the server space.
>
> **[3:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=212)** Now a virtual server is just a software abstraction that allows a physical server like this to divide up its CPU and its ram and its disk resources, which is called the bare metal, and run different virtual servers on top of the bare metal.
>
> **[3:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=229)** And they may even have different operating systems from the physical server's operating system.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=234)** So this allowed a single physical server to split up its resources and appear to the outside world as three or even 10 separate servers.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=246)** So you can do this today with your own computer using software from VMware or VirtualBox and it'll let you run an old copy of say, you know, [[Windows]] 7 virtually on top of any operating system you've got.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=259)** Why does virtualization matter?
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=261)** Virtualization let data centers sell even more dedicated servers because now I can get maybe four virtual servers out of one physical server.
>
> **[4:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=273)** Let's talk about how Amazon started capitalizing on this technology to fix some of the common problems that people were having with dedicated hardware.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2), [[Hardware]] (2), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Microsoft Word|Word]] (1), [[Windows]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** cpu (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Speakers:** - let (1)

#### [Birth of the cloud: EC2 and S3](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=0)** - Running your own servers, whether from your own [[Microsoft Office|office]], or from within a data center, has a lot of challenges to it.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=7)** You need to have staff that understands how to maintain and to fix all that [[Hardware]], and that team also needs to be responsible for maintaining all the software that's running on that hardware.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=18)** Another issue that companies were facing was scaling.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=22)** So depending on how your application works, a single server has a limit to how much traffic it can handle.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=28)** Doubling the size of your business might mean that you have to double your physical hardware to handle the load.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=35)** But what if over the weekend your website suddenly got a hundred times the normal amount of traffic because you got mentioned in a news publication.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=45)** Typically, the servers would become so overloaded that most people trying to hit your website would wait, and wait, and wait, and they would see nothing.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=54)** It could take weeks to order and set up new servers, so by the time you rack 10 more servers and brought them online, the traffic from that news article has already moved on, and you lost a key moment to acquire a lot of new customers.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=68)** So to help with this, Amazon launched two services, one of these services is called Elastic Compute Cloud, which is abbreviated as [[Amazon EC2|EC2]].
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=78)** This is the old icon for the entire EC2 service, and this is the new icon.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=85)** On the surface, this just looked like virtual servers that you could rent from Amazon, which a lot of other companies were doing this at the same time.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=93)** The secret sauce here is that [[Microsoft Word|word]] elastic.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=97)** Think about the number of servers stretching automatically when traffic increases, and then shrinking back down again when the traffic drops off.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=106)** For EC2 instances, this feature was called Auto Scaling.
>
> **[1:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=112)** So when all that traffic hits your website over the weekend, EC2 would Auto Scale your existing server from two, maybe even up to 10 to handle the load, and then back on Monday, it just scales back down to a single server when the traffic is gone.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=129)** The other AWS service that got launched in 2006, was called Simple Storage Service, and it's abbreviated as S3.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=138)** Here's the old icons for S3, and this is the new one.
>
> **[2:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=144)** S3 was Dropbox before there was Dropbox, it was a simple way to access off-premise storage for your important backups, like hard drives in the cloud, and Amazon used their size to offer this monthly service at a pretty cheap rate.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=160)** In fact, when Dropbox launched two years later in 2008, it was originally built on top of S3 and EC2.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=167)** So when you were using Dropbox, you were really using S3 storage.
>
> **[2:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=173)** Because you could now virtually build servers and storage solutions in the cloud with EC2 and S3, these services acquired the term [[IaaS|Infrastructure as a Service]], or [[IaaS]], where instead of building out your own physical infrastructure of racks and servers, you're renting someone else's racks, and only paying them for how much of the service you consume.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=198)** The cloud revolution led to greater up times, and total lower costs of ownership, because you no longer had to buy your own physical servers and replace them every few years, and have all that staff to maintain that hardware.
>
> **[3:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=213)** However, even though Amazon manages the physical servers, you still have responsibilities over the software on your virtual servers, this is called the Shared Responsibility Model, where you, and [[Amazon Web Services (AWS)|Amazon Web Services]], share different responsibilities in keeping your servers up.
>
> **[3:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=232)** AWS handles the data center and its physical security so no one can sneak into the data center and steal your files, and AWS holds certifications for the physical and hardware requirements of most industry compliance standards.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=247)** They will also handle hardware level problems with all those servers sitting in their racks.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=252)** To use the Infrastructure as a Service offerings, you are responsible for the security of your virtual machine.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=259)** You will need to run the operating system updates for [[Windows]] and [[Linux]], configure backups, make sure your firewalls are set up correctly, and check on these things regularly on a maintenance schedule to ensure that you're practicing proper security.
>
> **[4:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=274)** You are also responsible for ensuring that your application is secured against known attacks, such as [[SQL]] injections.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=282)** Okay, if these topics are brand new to you, and you've never managed servers before, search our catalog for [[Windows Server]] Security, or Linux Security, and you can dive deeper into these topics.
>
> **[4:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=295)** To get started with [[Application Security]], check out our course on [[Learning the [[OWASP]] Top 10]], which will cover the top 10 vulnerabilities in web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (6), [[Amazon EC2|Ec2]] (6), [[IaaS|Infrastructure as a service]] (2), [[Linux]] (2), [[Microsoft Office|Office]] (1)
> **Env Vars:** ec2 (6), aws (3), sql (1), owasp (1)
> **CLI Commands:** aws (3), make (1)
> **Prerequisites:** set up (2), you need to have (1), configure (1)
> **Definitions:** is called (2)
> **Cross-References:** later in (1)
> **Analogies:** such as (1)
> **Speakers:** - running (1)

#### [Where in the world are your AWS services?](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=0)** - Each AWS data center has its own set of electricity and internet providers to ensure redundancy if one provider is having an outage.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=9)** Amazon has built multiple data centers near each other, and it's linked them all together with fast connections.
>
> **[0:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=16)** Amazon has grouped these data centers into availability zones.
>
> **[0:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=20)** You won't ever see which exact data center your AWS services are running in, and AWS keeps the data centers' locations as secret as they can.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=30)** But you do select an availability zone.
>
> **[0:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=33)** So your services may be served up behind the scenes by one or more AWS data centers linked together within that availability zone.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=44)** AWS recommends that you always design your [[Cloud Infrastructure]] so that it can run simultaneously across at least two availability zones.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=54)** Going back to our server rack, they want you to think of a single availability zone as a single rack in the data center.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=61)** So if you want your service to have the highest uptime, you need to be able to accept the loss of a single availability zone.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=69)** You'll see options within various AWS services that refer to multi AZ for cloning your service into at least two availability zones.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=79)** Okay, let's [[Zoom]] out once more.
>
> **[1:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=82)** The availability zones are clustered together by region.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=86)** So all of the availability zones near North Virginia are called the North Virginia Region, or us-east-1, and the availability zones within North Virginia are labeled as us-east-1a, us-east-1b, and so on.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=104)** Since each availability zone has so many redundancies, and if you go with a multi AZ architecture and run your services across at least two availability zones within a region, you are protecting yourself fairly well by running everything out of a single region.
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=121)** We'll set up two servers within the same region, but in different availability zones.
>
> **[2:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=128)** If your application needs to be built to withstand the failure of an entire region, check out my other course on ECS and multi-region load balancing, and search our catalog for AWS high availability for some other courses on how to design applications for the highest uptime.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=147)** To switch which region you are in and to create cloud infrastructure within a given region, click on the region pull down next to your name in the upper right hand corner of the AWS console, and pick a region you'd like to use.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=160)** For my demo, I'm going to create my infrastructure in us-east-1, which is North Virginia.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=167)** When selecting a region, pick a region that is closest to most of your users and supports the AWS services that you want to use, because not all regions offer the exact same services.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=178)** The largest regions are North Virginia, Ohio, and Oregon, and they usually get new features before the other regions.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=185)** So these are always a safe bet.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=188)** When any of these regions does have a large outage, you'll usually hear about it later on in the evening news.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Infrastructure]] (2), [[Zoom]] (1)
> **CLI Commands:** aws (9), az (2)
> **Env Vars:** aws (9), ecs (1)
> **Tools:** aws console (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - each (1)

#### [Get closer to users with Local Zones](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/get-closer-to-users-with-local-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/get-closer-to-users-with-local-zones?u=76281980&t=0)** - [Instructor] Information travels really fast through the internet, as fast as light can travel through glass fibers in fact.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/get-closer-to-users-with-local-zones?u=76281980&t=8)** Picking a region near most of your users is usually fast enough for most applications, but sometimes there are those applications like in video games or streaming live video where you need to shave off those extra milliseconds and get even closer to your users.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/get-closer-to-users-with-local-zones?u=76281980&t=26)** AWS has local zones, which are extensions of the AWS regions that put a set of servers even closer to a set of users.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/get-closer-to-users-with-local-zones?u=76281980&t=40)** Local zones are labeled as the region name such as US East One, followed by the physical location of the [[Hardware]] such as DFW1A to indicate that these physical servers are located within Dallas, Texas.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/get-closer-to-users-with-local-zones?u=76281980&t=56)** For our demo, it'll be fast enough to use US East one without using a local zone.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/get-closer-to-users-with-local-zones?u=76281980&t=62)** So let's create your first server in the cloud so you can take this thing for a spin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Env Vars:** aws (2), dfw1a (1)
> **CLI Commands:** aws (2)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### 3. IaaS Compute

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn how to create an EC2 instance](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=0)** - [Instructor] Let's create our first server within [[Amazon EC2|EC2]].
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=5)** From within the AWS console, in the services search bar, type in EC2 and click on the entry that auto-completes.
>
> **[0:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=15)** Click on the Launch Instance button.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=18)** And in the pull down, select Launch Instance.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=23)** For name, type awsdemo1.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=28)** Scroll down to the section titled Application and OS Images or Amazon Machine Image.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=38)** [[Virtual Machines]] in AWS are called Amazon Machine Images or AMI.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=45)** These virtual machines already have an operating system or OS installed on them, such as [[Windows Server]] or your favorite [[Linux]] distribution.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=57)** There are several AMIs that already have entire server applications, such as [[WordPress]], installed and configured for you.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=67)** Type WordPress into the AMI search bar and hit Enter.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=73)** You'll see several AMIs that you can choose from that come with pre-configured WordPress installs.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=81)** The AMI Marketplace allows vendors to post server images that you can launch without additional charges.
>
> **[1:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=88)** However, there are also some AMIs that have additional charges to cover the licensing and service fees for any commercial applications, so be sure to read the details before launching these.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=102)** We are going to launch an instance with just [[Ubuntu]] installed on it and set up the web server ourselves.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=109)** So click on Launch an Instance from the breadcrumbs to return to the launch instance screen.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=116)** Click on Ubuntu and select the Ubuntu Server 22.04 LTS image.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=126)** Scroll down to the instance type and select t2.micro.
>
> **[2:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=134)** There's several options in this pull down, so let's break down the most common EC2 instance types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[WordPress]] (3), [[Ubuntu]] (3), [[Virtual Machines]] (2), [[Windows Server]] (1)
> **Env Vars:** ec2 (3), ami (3), aws (2), lts (1)
> **UI Navigation:** click on (4), scroll down (2), select the (1)
> **CLI Commands:** aws (2)
> **Analogies:** such as (2)
> **Versions:** 22.04 (1)
> **Tools:** aws console (1)
> **Prerequisites:** set up (1)

#### [What is the best EC2 instance type?](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=0)** - Sometimes you might build a computer with a fancy graphics card for playing the latest PC games, and you typically don't find these in a server like this.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=9)** But these chips on the graphics cards are faster at running some [[Algorithms]], such as finance models and some machine learning tasks.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=18)** You select more than just the number of CPU cores and RAM when you're building an [[Amazon EC2|EC2]] instance.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=24)** It really is like specking out your own computer.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=27)** So let's go take a look at some of the different types of EC2 instances that Amazon has.
>
> **[0:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=33)** From the EC2 console, on the launch instance screen, click on the compare instance types link.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=44)** The instance types will start with t2, t3, or c1 and so on, and this is the instance family.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=54)** Each instance family has [[Virtual Machines]] that are optimized for certain workloads.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=61)** The T and M families are the most commonly used general purpose instances.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=69)** Now, a thing to note about the T instance family is that they use something called a burstable CPU threshold.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=79)** Think of this like hitting the turbo button on your starship.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=83)** When the CPU on this instance is below its threshold such as when a t3 medium instance is running below 20% CPU usage, it'll accrue CPU credits, which are like the crystals that you're storing up in your warp drive.
>
> **[1:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=99)** When the instance has a burst above its CPU limit then it'll start using these crystals that you've built up.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=107)** When the crystals run out, your instance can't run at warp speed anymore.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=114)** If you have an application that has constantly high CPU load, choose a compute optimized or C class instance or one of the other general instance M class instances.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=130)** These instances don't use the CPU credits so you don't have to worry about that.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=138)** The memory optimized R an X classes are for workloads that need more memory and there's even instances under the accelerated computing category that include GPUs which are great for 3D rendering pipelines or training some [[Artificial Intelligence (AI)|artificial intelligence]] models.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=162)** Once you've selected an instance family, you'll need to choose the size of the instance.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=168)** Think of it like picking out the size of a t-shirt or ordering a beverage where an extra large is bigger than a medium.
>
> **[2:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=176)** Larger instances will give you more resources in that instance family, which might be more memory, virtual CPUs, networking speed, and so on.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=189)** The chart in the EC2 launch wizard compare instances screen will give you a breakdown of these differences.
>
> **[3:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=199)** If you want to estimate your costs before picking an instance type or any other AWS service, AWS has a pricing calculator at calculator.aws.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=214)** Click on the create estimate button, type in ec2 into the search box and click configure.
>
> **[3:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=223)** If you scroll down under the EC2 instance specifications and change the number of vCPUs from say four to eight, you'll see the monthly cost change at the bottom of the screen.
>
> **[3:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=238)** Later on, we'll discuss savings plans and reserved instances to help you bring some of these costs down.
>
> **[4:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=248)** Back on the launch instant screen, select t2.micro and click the select instance type button.
>
> **[4:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=256)** We're going to pick a t2.micro because it's a really small instance for us to do some testing with, and it says that it's eligible for the free tier, so it's great for learning.
>
> **[4:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=268)** Next, we're going to create a key pair and launch our new server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (6), [[Algorithms]] (1), [[Virtual Machines]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** cpu (8), ec2 (5), aws (2), ram (1)
> **CLI Commands:** aws (3), find (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Analogies:** such as (2), think of it like (1)
> **Prerequisites:** you'll need (1), configure (1)
> **Code Identifiers:** vcpus (1)
> **Speakers:** - sometimes (1)

#### [Learn how to create a key pair](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=0)** - [Instructor] When you launch a new [[Linux]] instance within Amazon, you must use a key pair to set up SSH access to your server.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=9)** This will allow you to connect a terminal application to your server so that you can run commands against it.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=17)** In the [[Amazon EC2|EC2]] Launch Wizard, click on the Create new key pair link.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=26)** For the key name type AWS demo and then click Create key pair.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=35)** A .PEM file will download within your browser.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=40)** You need to keep this file in a safe location because it is like a really long password that must be kept safe.
>
> **[0:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=49)** And just like the access keys we created earlier, this file will only ever be generated once by AWS.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=59)** My .PEM file went into my downloads folder by default and I can open it up using a plain text editor like Notepad or text edit on a Mac.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=70)** You'll see that it's a really long private key and it's matching public key is kept by Amazon and installed onto our Linux virtual machine.
>
> **[1:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=82)** If you are launching a [[Windows Server]] EC2 instance this private key in the key pair is used to decrypt the administrator password to connect to your instance.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=94)** If you're working on a team with several people it's a good idea to copy this private key into a secure password store and to grant access to your team members who need to access these servers.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=108)** In the EC2 Launch Wizard, under network settings, make sure that Create a security group is checked.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=117)** Check Allow SSH traffic from and make sure that anywhere is selected in the pull down.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=126)** This will allow you to connect a terminal to your EC2 instance using your private key from the key pair from anywhere in the world.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=135)** Later on, we'll dive more into how security groups work and talk about some of the ways that you can further protect your server.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=145)** Also, check Allow HTTP traffic from the internet since this EC2 instance will be a publicly available web server.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=156)** I have the HTTPS option unchecked because we won't be installing an SSL key directly onto our web server in this course.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=166)** But I'll mention a few other ways that you can implement HTTPS later on.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=174)** You can scroll to the bottom of the wizard, but I'm going to leave the other options as their defaults.
>
> **[3:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=180)** Now click the Launch instance button.
>
> **[3:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=184)** Great.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=185)** AWS is starting up our instance.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=188)** It'll take a few minutes to get everything up and running and then we'll connect to our instance and turn it into a web server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (5), [[Linux]] (2), [[Windows Server]] (1)
> **Env Vars:** ec2 (5), aws (3), ssh (2), pem (2), https (2)
> **CLI Commands:** aws (3), ssh (2), make (2)
> **Tools:** terminal (2)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Set up a web server](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=0)** - [Instructor] In the [[Amazon EC2|EC2]] console, you might have to expand out the left hand side by clicking on the hamburger icon and then under the instances header, click on instances.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=12)** The instance state is listed next to our new instance and if it doesn't say running yet, just give it a few more minutes to start up.
>
> **[0:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=21)** Click the checkbox next to the new instance name and then click on the connect button.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=27)** Make sure that the EC2 instance connect tab is selected and then click on the connect button.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=35)** This is going to launch a new tab with an SSH terminal connecting us to our running instance.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=42)** Inside of your SSH session type sudo space apt space update, and hit enter.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=55)** The AMI images that Amazon provides do not always include the latest packages or OS updates, so you'll want to make sure your virtual machine has the latest packages in OS updates before starting.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=71)** Now that [[Ubuntu]] has updated its list of available packages, type sudo space apt space upgrade, and hit enter.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=81)** Type capital Y to confirm, and hit enter.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=87)** If there is a kernel update that has to be run and Ubuntu needs to update its core operating system itself, then you may see a message pop up asking you to update the kernel or to confirm if you want to restart any services.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=101)** In these modals, you'll press tab to navigate between any options and hit enter when the okay button is highlighted.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=110)** Press tab again and hit enter when it highlights okay to clear any of these dialogues.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=117)** Because the kernel was just updated, it wants us to now restart the virtual machine.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=125)** Close the browser tab with your SSH connection and switch back to the tab that has the EC2 console.
>
> **[2:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=133)** Click on the instances link from within the breadcrumbs at the top.
>
> **[2:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=139)** Click on the checkbox next to the instance name, and then click Instance state at the top of the console, and in the pull down select reboot instance.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=152)** Click the reboot button.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=155)** After a few moments, click the refresh button and check to make sure that the instance state is in the running state.
>
> **[2:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=165)** Select the checkbox next to the instance name and click on the connect button.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=171)** Under EC2 instance connect, click the connect button.
>
> **[2:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=176)** We are now connected to our instance again with the latest kernel and it's showing us that we have no packages that need to be updated.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=186)** Remember that in the AWS Shared Responsibility model, it will be your responsibility to connect to your servers periodically and run the updates to keep everything secure.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=198)** Later on, we'll discuss some automation and orchestration tools that you can use to help you manage your parts of the shared responsibility model.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=209)** In your terminal window type sudo space apt space install space apache, and the number two, and hit enter.
>
> **[3:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=223)** Press capital Y and hit enter to confirm.
>
> **[3:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=228)** This will install the Apache Web Server with its default configuration and installing a web server is one of the first steps to setting up a web application, like [[WordPress]].
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=241)** Switch back to the previous browser tab that has the EC2 console.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=247)** Click on the instances link in the breadcrumb and then click on your running instance.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=253)** In the details pane that pops up, you'll see a public IP version four address.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=260)** Press the copy button to the left of that public IP address.
>
> **[4:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=266)** In a new browser tab, type http:// and then paste in
>
> **[4:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=276)** the public IP address and hit enter.
>
> **[4:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=281)** And it works.
>
> **[4:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=283)** You are seeing the default Apache webpage from your web server.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=288)** Remember that your URL must include HTTP and not HTTPS.
>
> **[4:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=295)** And your browser will tell you that you're viewing an insecure site, but since this is just a demo, we won't get into the steps for installing an SSL certificate.
>
> **[5:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=305)** Now that we have one web server, let's make many more and take over the world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (5), [[Ubuntu]] (2), [[WordPress]] (1)
> **CLI Commands:** make (4), ssh (3), sudo (3), apt (3), apache (3)
> **Env Vars:** ec2 (5), ssh (3), ami (1), aws (1), url (1)
> **UI Navigation:** click on (8), checkbox (3), select the (1)
> **Tools:** terminal (2)
> **Prerequisites:** install (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Stopping and starting vs. rebooting instances](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=0)** - [Instructor] In the [[Amazon EC2|EC2]] console, on the instances screen make sure you've selected your running instance.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=7)** Then click on the Instance state pull down at the top and in the options select Stop instance and then click the Stop button.
>
> **[0:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=21)** If you stop an instance, you won't be charged for the compute time while the instance is stopped but you will be charged for the storage costs of its hard drive and any snapshots that you've taken which are pretty minimal.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=36)** Stopping and starting an instance is different than just rebooting it.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=42)** If you stop and start an instance this virtual machine will actually move to another physical server in the availability zone.
>
> **[0:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=51)** So do this if you're having problems connecting to the instance because it could be a [[Hardware]] failure on the AWS side.
>
> **[1:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=60)** After a few moments, click the Refresh button and you'll see that your instance is in a stopped state.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=69)** Select the instance again.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=71)** Click on Instance state and select Start instance.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=77)** Give it a few minutes to start the instance back up and you can hit the Refresh button to see when the instance state changes.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=85)** When the instance is running again, click on it and in the details pane, click on the Status checks tab.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=93)** When the instance is starting up the checks will say initializing but if you occasionally hit the refresh button these systems checks will start to pass.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=104)** You can check the system status to see if there's a hardware failure but it takes a few minutes for AWS to see the problem so you might even notice it before the alarm goes off.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=116)** Remember, if you reboot an instance, it comes back up faster but it stays on the same physical server it was before.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=125)** Occasionally, AWS will perform scheduled maintenance on the physical hosts and they may send you a message asking you to stop and start an instance to move the instance to a new host prior to their maintenance window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Amazon EC2|Ec2]] (1)
> **UI Navigation:** click on (4), select the (1)
> **CLI Commands:** aws (3), make (1)
> **Env Vars:** aws (3), ec2 (1)
> **Speakers:** - [instructor] (1)

#### [Right-sizing with EC2 autoscaling](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=0)** - Remember, [[Amazon EC2|EC2]] stands for Elastic Compute Cloud, and the [[Microsoft Word|word]] of the day is elastic.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=9)** An Auto Scaling policy can tell AWS that when an event occurs, such as our instance CPU usage goes above 80% for five minutes to stretch our one server into two.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=22)** And then we can tell it to shrink back down again to one server when things have calmed down again.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=29)** Your application needs to be designed in a way that if 1, or 2, or 10 clones of your single server come online, that your application can load balance your traffic across all of these new servers.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=42)** Now this is called horizontal scaling.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=45)** If you think of a busy grocery store, the manager will open several new checkout lanes to reduce wait time.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=52)** When the rush is over, they'll close those extra checkout lanes.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=56)** This is different than vertical scaling, which would handle the problem by still only having a single checkout lane, but just putting a faster cashier and speeding up the conveyor belt.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=67)** Vertical scaling in AWS is fairly easy.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=70)** You just stop your running EC2 instance, which you know will cause a little downtime, and change the instance to a larger, faster server with more CPU cores and ram, but this has its limits.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=81)** And all large applications use horizontal scaling to handle an increase in traffic.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=87)** We're not going to set up Auto Scaling for this course, but we will create an AMI snapshot of our current running server and create a clone of it manually, which is one of the first steps to setting up Auto Scaling anyway.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=100)** If you'd like to dive deeper into Auto Scaling, I recommend our AWS course on automation and optimization.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=107)** Okay, if you're totally new to these concepts of horizontally scaling servers in your application design, search our catalog for AWS high availability and we have a few courses that'll show you how to keep your application running when a single server fails, or when that single server gets overloaded due to high demand.
>
> **[2:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=128)** Finish out this course first though, because you're going to need to know a bit more about storage and networking in AWS to get a full understanding of the material that's presented in those courses.
>
> **[2:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=139)** So let's jump into the console, and I'll show you how to clone our existing server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** aws (5), ec2 (2), cpu (2), ami (1)
> **CLI Commands:** aws (5)
> **Definitions:** stands for (1), is called (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - remember (1)

#### [Learn how to create backups with an AMI Snapshot](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=0)** - [Instructor] From within the [[Amazon EC2|EC2]] console in the details pane of your running instance, click on the Networking tab, scroll down and take note of the availability zone.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=10)** the instance is currently running in.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=13)** Mine is running in us-east-1b.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=18)** At the top of the details pane, click on the Security tab.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=23)** Under security groups, take note of the name of the security group on our running instance.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=29)** Mine is called launch-wizard-1 because it was a security group that the EC2 launch instance wizard made for us.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=39)** Okay, at the top, click on the actions pull down, and under image and templates, select Create image.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=50)** For image name, type ec2demo.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=55)** And there's an option on here that says No reboot.
>
> **[1:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=60)** AWS needs to stop the virtual machine to take an image of it.
>
> **[1:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=64)** If you select reboot, and this instance was still running, it would attempt to create a snapshot of the hard drive listed here as the instance volume while the instance is still running.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=78)** And that could have unintended consequences since the hard drive is still in use.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=84)** At the bottom, click on the create image button.
>
> **[1:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=90)** On the left-hand menu, under images, click on AMIs.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=96)** If you scroll to the right, our image will have a status of pending while the process is running.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=104)** You can click the refresh button at the top to check on the status.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=110)** After several minutes, you'll see the status change to available.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=115)** Click on the AMI and click on the launch instance from AMI button.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=122)** Now we are back on the EC2 launch instance screen but we're launching a new server based on our server image.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=130)** For name, type awsdemo2.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=135)** Our AMI that we just created has already been selected for us as the image.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=141)** For instance type, make sure that t2.micro is selected.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=147)** For the key pair, select the key pair that we already created called awsdemo.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=153)** Underneath the networking settings, click the edit button.
>
> **[2:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=158)** Under the subnet pulldown, select an availability zone that's different than your other instance.
>
> **[2:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=165)** So for me, I'm going to pick us-east-1a.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=171)** Under firewall, security groups, click the select existing security group option.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=179)** Select a security group that your other instance using.
>
> **[3:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=184)** Mine is using launch-wizard-1.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=188)** Click on the launch instance button on the right.
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=194)** Click the view all instances button and you'll see that the other instances starting up.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=201)** After a few minutes, click the refresh button and the instance state should change to running.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=209)** Once the new instance enters the running state, click on it and in the details tab, copy the public IP address.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=220)** In a new browser tab, type http:// and paste in the IP address and hit enter.
>
> **[3:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=231)** You'll see the default Apache site once again because remember, this server is a clone of the other server that we just set up.
>
> **[4:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=242)** An AMI image is a great way to take a snapshot in time of your server in its full configuration and launch new instances to handle a spike in traffic or restore the instance to a previous state if it gets messed up somehow.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=259)** Let's leave both instances running and we'll connect them together later in the course.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=265)** But remember to come back after you're done and under instance state, you're going to select terminate on both of your instances so that you don't run up your bill.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3)
> **UI Navigation:** click on (8), scroll down (1), select the (1)
> **Env Vars:** ami (4), ec2 (3), aws (1)
> **CLI Commands:** aws (1), make (1), apache (1)
> **Definitions:** is a  (2), is called (1)
> **Cross-References:** later in (1)
> **Analogies:** for instance (1)
> **Best Practices:** remember to (1)

#### [Saving money in EC2](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=0)** - [Instructor] The instances that we just spun up, are called on demand instances, and we can turn them off at any time to stop accumulating billing charges.
>
> **[0:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=11)** But, if you can help out AWS by telling them upfront what your usage will be over the next year, you can help AWS plan out their needed [[Hardware]] capacity.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=22)** And as a thank you, they'll give you some discounts on your usage.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=28)** One way to do this, is through reserved instances.
>
> **[0:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=33)** Reserved instances aren't actual [[Amazon EC2|EC2]] instances, they're billing coupons you are purchasing for a specific instance type.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=42)** For example, when you buy a T3 medium reserved instance, you're telling AWS you would like a coupon for the monthly discount off any one, on demand, T3 medium instance.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=57)** And you can buy this coupon in three different ways.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=61)** You can buy a coupon where you pay now for the entire T3 medium instance, for the next 12 months, or for the next three years.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=69)** It's the biggest monthly discount, and it's like getting a great deal by paying upfront for your cell phone plan.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=76)** Or, you can buy a coupon where you only pay half upfront for the whole year, and ask AWS to split up the remainder each month.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=86)** Or, you can buy a coupon where you just pay nothing now, but you get the T3 medium for a fixed lower rate for the next year.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=96)** But you can't get out of the contract, just like a cell phone plan.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=101)** You don't assign the coupon to one of your T3 mediums.
>
> **[1:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=105)** It just comes off in the billing automatically.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=108)** If you delete one of your T3 mediums, the coupon will just count towards another T3 medium already on your account.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=116)** The downside is, is that if you have no T3 mediums running, or you changed your T3 medium into say, a T3 large, you already paid for the T3 medium coupon and there's no refunds.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=130)** Now there's a marketplace where you can sell your partially used coupons, but you're not going to get all of your money back.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=137)** If you want to purchase a reserved instance coupon, in the services search bar, type cost explorer, and click on the entry that auto completes.
>
> **[2:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=149)** On the left hand menu, under reservations, click on recommendations.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=157)** Once you have your instances up and running for a bit, it will give you some recommendations, and show you your potential cost savings by purchasing reserved instances.
>
> **[2:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=169)** If you need a bit more flexibility and you want to be able to go up and down in your t-shirt sizes, use an EC2 instant savings plan instead.
>
> **[3:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=181)** Under savings plans, click on purchase savings plans.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=188)** An EC2 instant savings plan will allow you to change the size of your server over the course of your contract, but you must stay within the same instance family.
>
> **[3:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=200)** So you could go from a T3 medium to a T3 large, or switch between [[Linux]] and [[Windows]] instance types, and still stay within your contract.
>
> **[3:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=213)** If you need to be able to switch instance families entirely, use a compute savings plan instead.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=220)** With a compute savings plan, you can switch between instance families because now you are just committing to a minimum hourly spend.
>
> **[3:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=229)** This has a lot more flexibility, but it doesn't give you the same savings rate as an EC2 instance savings plan.
>
> **[3:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=238)** However, a reserved instance will usually give you the greatest long-term savings, but it's the least flexible option.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (4), [[Hardware]] (1), [[Linux]] (1), [[Windows]] (1)
> **Env Vars:** aws (4), ec2 (4)
> **CLI Commands:** aws (4)
> **UI Navigation:** click on (3)
> **Analogies:** for example (1), it's like (1), just like (1)
> **Speakers:** - [instructor] (1)


### 4. IaaS Networking

[↑ Back to Table of Contents](#table-of-contents)

#### [Using security groups as firewalls](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=0)** - So let's say that this cable represents our external internet traffic, and we're going to connect it to our network interface so that our customers can access our web server.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=10)** Now, for anyone who's run servers before, or set up a home network, you would know that what I'm doing here is a pretty bad idea.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=19)** This is unfiltered internet traffic, which means that unless I'm plugging this cord first into a firewall, or say a home router, or I'm running a software firewall on my server, that I'm exposing my server to attacks from hackers that are scanning Amazon's IP ranges, just looking for exposed servers like this one.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=40)** To solve this, Amazon uses security groups, which act as simple firewalls, which allow you to expose only the parts of your server that are configured for public internet traffic.
>
> **[0:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=53)** Think of these as line filters on ethernet cords going into your servers.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=59)** If you do see a security group on a diagram, it's usually a black and red dashed line that is drawn around the resource it's protecting, such as an [[Amazon EC2|EC2]] instance.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=70)** Now that I've got a security group in place, I'm ready to connect back to the public internet.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=75)** Let's take a look at an example diagram, and then we'll make a change to our security group.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=81)** Back in the EC2 console, select your first web server instance, and under the Security tab, you'll see that my instance is running a security group called Launch Wizard 1.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=94)** When creating new security groups from the EC2 Launch Wizard, you can assign different names to new security groups before creating the instance by clicking the Edit button and giving the security group a different name.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=111)** But once the security group is created, like Launch Wizard 1, you can't edit its name.
>
> **[1:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=118)** Once your account gets more usage, keeping up with your security groups can be challenging.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=125)** In the EC2 console, on the left hand menu, under Network and Security, click on Security Groups.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=135)** Select the security group Launch Wizard 1, and at the top, click on the Actions pull down.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=143)** Click the option Copy to New Security Group for security group name, type webservers.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=152)** And for description, type Allows Public SSH and HTTP for webservers.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=161)** Under the inbound rules, this security group allows 0.0.0.0/0, and the forward slash here is called a netmask, and it's a shorthand abbreviation for an IP address range.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=178)** The pull down underneath Source tells us that this will allow traffic from anywhere.
>
> **[3:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=183)** If instead, you selected My IP, the /32 means the range is a single IP address.
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=191)** So the range is only limited to the current public IP address of your computer.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=197)** Whereas /0 here means the range is all IP addresses.
>
> **[3:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=203)** Select Anywhere, IP version 4.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=207)** So this bottom rule says that the server will accept incoming traffic over Port 22, which is the SSH port, from any IP address on the internet.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=220)** It's not a great idea to have our SSH port publicly exposed to the entire internet, even though AWS gave us a really long and secure private key to use when we created the key pair.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=235)** Throughout the [[Representational State Transfer (REST)|rest]] of this chapter, we are going to discuss some other networking strategies that will give you better security.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=243)** Our security group will also accept any traffic over Port 80, which is the default HTTP port used by [[Web Servers]] that are not encrypting their traffic.
>
> **[4:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=255)** Next to the HTTP Port 80 rule, click the Delete button, and we're going to see what this does to our web server.
>
> **[4:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=264)** Also, look down at the outbound rules, and you'll see that this server can make an outbound connection with any destination on the internet using any protocol.
>
> **[4:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=276)** So this means that our server can go out on the internet and get software updates or use external APIs.
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=284)** Click Create Security Group.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=288)** On the left hand menu, under Instances, click on Instances, and click on your first running EC2 instance.
>
> **[4:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=298)** At the top, in the Actions pull down, under Security, select the option that says Change Security Groups.
>
> **[5:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=308)** In the search bar, you can click inside of it and click on the auto completed web server security group, or type webservers to search for it.
>
> **[5:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=319)** Click Add Security Group.
>
> **[5:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=323)** Instances can use multiple security groups, and their rules stack together.
>
> **[5:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=329)** So since Launch Wizard 1 still has the HTTP port open, click Remove next to it.
>
> **[5:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=338)** Now click Save.
>
> **[5:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=342)** Click on the first instance again, and under the Details tab, click Copy next to the IP version 4 public address.
>
> **[5:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=354)** Open a new browser tab, type http:// and paste in the public IP address and hit Enter.
>
> **[6:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=365)** You'll see that the web server is now inaccessible because the HTTP Port, Port 80, is not listed as an allowed port, and it's being blocked by the security group.
>
> **[6:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=379)** Go back to your previous browser tab, and in the EC2 console, under Security Groups, click on the web server's security group, and under Actions, click Edit Inbound Rules.
>
> **[6:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=397)** Click the Add Rule button.
>
> **[6:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=400)** In the Type pulldown, select HTTP.
>
> **[6:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=406)** This will automatically fill out this rule as being TPC Port 80.
>
> **[6:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=412)** For the source, click the pulldown and select Anywhere, IP Version 4.
>
> **[6:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=419)** Click Save Rules.
>
> **[7:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=422)** Jump back over to the tab that you have up with our web server's public address.
>
> **[7:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=429)** Press the Refresh button in your browser, and you should see the web server come back up.
>
> **[7:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=436)** Now let's make sure our second instance is using the web server's security group.
>
> **[7:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=442)** On your own, repeat the instructions for removing the old security group from your second instance, and assign only the web server's security group to it.
>
> **[7:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=453)** Now, let's up our security game and talk about some ways you can securely hide entire servers from public internet traffic and create a private network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (6), [[Representational State Transfer (REST)|Rest]] (1), [[Web Servers]] (1)
> **Env Vars:** ec2 (6), http (6), ssh (3), aws (1), tpc (1)
> **UI Navigation:** click on (7), select the (2)
> **CLI Commands:** make (3), ssh (3), aws (1)
> **Ports:** port 80 (4), port 22 (1)
> **Definitions:** is a  (2), means that (2), is called (1)
> **Versions:** version 4 (3), 0.0.0 (1)
> **Cross-References:** go back to (1)

#### [Virtual Private Cloud (VPC)](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=0)** - Just as AWS has virtual servers and virtual hard drives, AWS also has virtual networking components.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=9)** In the real world, if I had two computers that I wanted to talk to each other, I would plug an ethernet cord into the networking card of each computer, and then I would plug the other end of that ethernet cord into a networking switch.
>
> **[0:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=25)** At home, you may also have an internet router that these would plug into and that router has a four port switch built into it, which works the same way that this dedicated switch does.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=37)** Now if I put a private non ratable IP address on each of these computers, such as 192.168.1.2, and then let's say on my other computer, I give it 192.168.1.3, then these two computers could share files over this private network.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=59)** Notice that I haven't yet connected external internet to either computer or to the switch.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=67)** In AWS, the network that we just created is called a virtual private cloud or VPC.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=75)** Here's the old icon for a VPC.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=79)** Your [[Amazon EC2|EC2]] instances still have security groups on them and those still take priority, but your instances will also sit within a VPC with private networking addresses, which will allow your servers to talk privately with each other without traversing the public internet.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=98)** A VPC is indicated on diagrams as a green box that is drawn around the components within the VPC.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=107)** And the upper left border of the box will have a small VPC icon.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=113)** Every VPC will have a range of non-routable IPs or private IPs that you can pick from to use in your private network.
>
> **[2:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=124)** Within your home network, when you try to link two computers together with a switch, also called your [[Local Area Network (LAN)|Local Area Network]] or LAN, you'll be working with ranges of non-routable IP addresses which can be used by any local network such as the common 192.168.1.1 through 255 address ranges
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=150)** you'll see used by most home routers.
>
> **[2:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=154)** To view and create VPCs in the AWS console, go to the services search bar, and at the top, type in VPC, and click on the entry that auto completes.
>
> **[2:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=169)** On the left hand side, click on your VPCs.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=175)** You might only have one VPC listed, but scroll over in the table and look for a column that says default VPC.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=186)** AWS created this VPC for us already in the EC2 launch wizard when it launched the first instance.
>
> **[3:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=195)** This is called the default VPC, and you must not ever delete it.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=201)** However, you can create your own VPCs if you want a completely separate network to separate different projects or businesses.
>
> **[3:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=213)** You can see that my default VPC operates within the range of non-routable private IP addresses of 172.31.0.0/16 which will go all the way through 172.31.255.255, which is 65,534 usable IP addresses, and it's way more than I'll ever need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2), [[Local Area Network (LAN)|Local area network]] (1)
> **Env Vars:** vpc (13), aws (5), ec2 (2), lan (1)
> **CLI Commands:** aws (5)
> **Versions:** 192.168.1 (3), 172.31.0 (1), 172.31.255 (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is called (2)
> **Analogies:** such as (2)
> **Tools:** aws console (1)

#### [Public and private subnets](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=0)** - [Instructor] Since you are given so many private IP addresses to work with in a VPC, you can then create subnets within these IP ranges.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=10)** A subnet is a group of sequential IP addresses and it's a way for you to divide up your network of available IP ranges into smaller buckets so that you can write networking rules that apply to a group of addresses.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=27)** On the left-hand menu in the VPC console, click on Subnets.
>
> **[0:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=33)** AWS has already created some subnets for us within our default VPC.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=40)** If you scroll to the right in the table, you'll notice that it created a subnet within each availability zone in this region.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=50)** So if my [[Amazon EC2|EC2]] instance has a private IP address of 172.31.0.something, then it's going to be in the US East One region, in the 1A availability zone.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=68)** You can divide up your subnets even further and a best practice is to create a public subnet within an availability zone that includes all of your servers that will be exposed to incoming internet traffic, like your [[Web Servers]], and then to also create a private subnet, which will include servers that need to be more protected, such as your database servers or file servers.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=95)** This diagram shows one VPC created within a region that includes a public and a private subnet.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=104)** It shows another VPC created within that same region that also includes a separate set of public and private subnets that extend into a local zone so that these servers can sit even closer to a particular set of end users.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=123)** If you want to utilize local zones, there are steps to enable them in a new subnet in the AWS docs, but for most applications, you can just create your resources in a region close enough to your users.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=138)** For this course, we will just use a single public subnet to make things easy, but if you're going to be building out a lot of servers within EC2, it's best to plan out your VPC and subnets now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2), [[Web Servers]] (1)
> **Env Vars:** vpc (6), aws (2), ec2 (2)
> **CLI Commands:** aws (2), make (1)
> **Best Practices:** best practice (1), it's best to (1)
> **Versions:** 172.31.0 (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Internet and NAT gateways](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=0)** - Your router at home creates a private network, much like a VPC, that links all of your local computers and devices together, either through wired connections or through wireless ones.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=14)** It then routes traffic from the public internet (plastic rubbing) to your private network through a technique called network address translation, or NAT.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=26)** This allows your wide area network interface to get a single public IP address from your internet provider, like 1.2.3.4, and to share that IP address to all the devices on your local area, network, or LAN.
>
> **[0:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=41)** So when one of your computers, such as 192.168.1.2, goes to a website like [[[LinkedIn]].com](https://linkedin.com), the servers at LinkedIn will see traffic coming from the WAN interface at 1.2.3.4, and then when LinkedIn responds, the return traffic is sent to 1.2.3.4, and it's routed by your router back to the originating computer at 192.168.1.2.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=70)** Now, if some random person on the internet, such as 5.6.7.8, wants to reach one of your private devices, it's going to try to open a connection with 1.2.3.4, which is your WAN interface, and then your router will drop the traffic because it doesn't know which computer on your private network it needs to route this traffic to because no private device first talked to 5.6.7.8.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=96)** With NAT, think of your router like a door with a single doorknob on the inside.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=102)** Your computers inside the network can turn that doorknob and open the door, which will allow two-way traffic to pass with whoever they just contacted, but once that door closes, traffic from the outside can't get in because there's no doorknob on the outside of the door.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=119)** In AWS, this is called a NAT gateway, and it attaches to your VPC, and it creates a door to the internet that can only be opened from inside the VPC.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=132)** Now, your instances can have internet access to reach other services and to download software updates, but no one on the public internet can get to your instances.
>
> **[2:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=142)** This is a great way to secure internal servers, such as database servers or file shares from outside attacks, but if you need to run a public server at home, like a web server, the only way to get around this limitation in NAT is to go into your router settings, usually turn on a feature that's called port forwarding, and then that will tell the router to always route certain types of public-initiated traffic to a specific computer on your private network, and you might've done this before if you were hosting a game server for your friends.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=177)** Now the door to your router has a doorknob on both sides, and it can be opened from either end.
>
> **[3:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=184)** Now, in AWS, this is called an internet gateway.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=189)** Unlike a NAT gateway that only has a doorknob on the inside, an internet gateway has a doorknob on both sides, and it allows traffic originating from the public internet to open that door and to route to instances within your VPC.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=207)** In the VPC console, on the left-hand menu, click on Internet Gateways.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=215)** One was already created for us when we launched our new instance.
>
> **[3:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=219)** This allows our servers and our public subnet to talk out to the internet, and it also allows for outside internet traffic to pass into our server, which is filtered by the security groups on that instance.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=235)** In the VPC console, click on NAT Gateways in the left-hand sub-menu and click on Create NAT Gateway.
>
> **[4:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=245)** Here, if you had a private subnet, then you would select it in the subnet pulldown and then select an elastic IP in the second pulldown.
>
> **[4:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=256)** To go back to our home router example, this is the IP address that your NAT gateway is going to use on its WAN port, and any servers using the NAT gateway will appear to the outside world as only having a single IP address.
>
> **[4:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=273)** Now, let's look at what an elastic IP address is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3)
> **Env Vars:** nat (9), vpc (6), wan (3), aws (2), lan (1)
> **Versions:** 1.2.3 (4), 192.168.1 (2), 5.6.7 (2)
> **UI Navigation:** click on (3), open the (1)
> **Definitions:** is called (2), is a  (1)
> **Analogies:** such as (3)
> **CLI Commands:** aws (2)
> **URLs:** [linkedin.com](https://linkedin.com) (1)

#### [Static addresses with Elastic IPs](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=0)** - Because we told AWS that each of our instances could have a public IP address, AWS randomly assigned a public IP to each of our servers, which is written here in red.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=12)** And now our computers are accessible from the public internet through the internet gateway that they created for us.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=18)** But the only catch with these public IP addresses is that if you stop the instance, which is kind of like pulling power to the server, and then you start it back up again later, it's going to go to Amazon's pool of IP addresses and get a new public IP.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=36)** Now, if you've hard coded your IP address anywhere, such as in your DNS records, which we'll get into DNS later, then you'll need to go through and update everything with your new public IP address.
>
> **[0:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=49)** Now, if this happens randomly in the middle of the night, which it can, especially if AWS is trying to recover an instance due to a [[Hardware]] failure, then your site's going to be down until you get up and make your DNS changes.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=63)** It's like waking up one morning, going out to check your mail, and realizing that the post [[Microsoft Office|office]] changed the house number on your mailbox.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=73)** If you need this public IP address to stay the same, regardless of what happens to this instance, then you'll need to request an elastic IP.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=84)** Elastic IPs come from Amazon's pool of IP addresses, but they're bound to your AWS account instead of being temporarily tied to a single running instance.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=94)** You then assign your elastic IP to your running instance, but if you choose to terminate your instance, this elastic IP is going to stay on your account and can be assigned to another instance in the future.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=109)** But because the internet is running out of IPV4 addresses, they are a precious resource, and Amazon will penalize you with a small fee each month for keeping elastic IPs on your account that aren't in use.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=123)** So if you terminate your instance, make sure you release its elastic IP if you have no further need of it, because you will be billed for it if you don't.
>
> **[2:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=136)** You can manage your elastic IPs from the VPC console, and you would do this to request an elastic IP and bind it to a NAT gateway, but you can also request Elastic IPs from the [[Amazon EC2|EC2]] console and then bind them to EC2 servers.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=155)** This will replace the public IP address that AWS has randomly assigned to your running public instance, but now it's a fixed IP that won't change when you stop and start your instance.
>
> **[2:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=169)** In the Services menu at the top of the AWS console, switch back to the EC2 console.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=177)** On the left hand menu, scroll down, and under Network & Security, click on Elastic IPs, click Allocate Elastic IP Address, scroll to the bottom, and click Allocate.
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=194)** And that's it.
>
> **[3:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=195)** Now we've got an elastic IP.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=198)** Remember, we'll be billed for this elastic IP unless we bind it to something like a NAT gateway or an EC2 instance.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=208)** If you scroll over in the elastic IP addresses table, you'll see that there's no associated instance ID or association ID.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=220)** Currently, our elastic IP isn't bound to anything yet.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=226)** If you end up with a ton of elastic IPs, you'll need to periodically review this table and release any elastic IP that isn't in use.
>
> **[3:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=237)** To do this, select the IP and click Actions, and then Release Elastic IP Addresses.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=246)** To bind it to an instance, click on Associate Elastic IP Address.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=253)** For instance, click inside the search box, and click on AWS Demo 1.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=260)** For private IP, click inside the search box, and select the only IP address that's listed for this instance.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=269)** At the bottom, click the Associate button.
>
> **[4:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=274)** On the left hand menu, click on Instances and select AWS Demo 1.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=282)** Now under the details tab, you'll see that the public IP address is now our elastic IP.
>
> **[4:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=290)** Now we've got a public IP bound to this instance that will remain with the instance if it stopped and started again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (4), [[Hardware]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** aws (8), ec2 (4), dns (3), nat (2), ipv4 (1)
> **CLI Commands:** aws (8), make (2)
> **UI Navigation:** click on (4), select the (2), go to (1), scroll down (1)
> **Analogies:** kind of like (1), such as (1), it's like (1), for instance (1)
> **Prerequisites:** you'll need (3)
> **Tools:** aws console (1)
> **Speakers:** - because (1)

#### [Using VPNs to access private subnets](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=0)** - [Instructor] There are several VPC scenarios laid out in the documentation.
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=5)** The first scenario is a VPC with a single public subnet and this is similar to the architecture we already have for our two running instances.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=17)** Scenario number two shows what your architecture would look like if you split up your subnets into public and private subnets.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=26)** A NAT gateway in the public subnet allows your servers within the private subnet to talk to the outside internet but protects the servers from incoming traffic.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=38)** But if the servers in the private subnet are protected from all outside internet traffic, how do you connect to them to administer them?
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=48)** And what if you want to restrict administrative access to the servers in the public subnet, such as closing off the ports for SSH for [[Linux]] terminal access or Remote Desktop Protocol, or RDP, for [[Windows]] servers?
>
> **[1:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=66)** One way to securely connect to your instances is by using a bastion host.
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=72)** A bastion host is an instance you put in the public subnet that is really locked down and monitored, and you connect to this machine first, and then from there, you make connections to the other servers in your VPC.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=86)** AWS has a quick start script for this.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=91)** Type bastion into the search bar and hit Enter.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=97)** Click on the Linux Bastion Hosts entry.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=102)** These quick starts are some common architectures using AWS best practices that you can launch directly into your AWS account.
>
> **[1:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=112)** You can view their recommended architecture and launch this directly into your account using an automation language for infrastructure called CloudFormation, but we'll get into CloudFormation later.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=126)** Another method for connecting securely to Linux and Windows instances is to use AWS Session Manager.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=135)** Session Manager is available from within the Systems Manager dashboard from within the AWS console.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=145)** With Session Manager, an agent runs on your server, and after you've set up the correct IAM roles and permissions, you can securely connect to your instances through the AWS console or command line tools.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=162)** To learn how to set this up, click on the Setup Session Manager link.
>
> **[2:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=169)** Another common solution to securing your network is to use a VPN.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=177)** By using an AWS client VPN, you can use a VPN client on your home or work computer to establish a secure connection with your VPC.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=190)** This works really well for allowing you to use coding and [[Database Management]] tools with your servers just like they were sitting across the desk from you.
>
> **[3:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=200)** Another way you can use a VPN within AWS is a site-to-site VPN and this is one of the ways that you can bridge your existing on-premise datacenter network or your entire [[Microsoft Office|office]] network with your VPC.
>
> **[3:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=219)** You could use a site-to-site VPN to securely move your data up to AWS as a part of a cloud migration or you would use this in a hybrid model where some of your on-premise infrastructure continues to serve your application, but you start using AWS services to support your on-premise application.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=243)** If you create multiple VPCs and you need to join these networks together along with the VPN connections to on-premise networks, check out AWS Transit Gateway to help you manage bridging all these networks together.
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=261)** If you need a fast, reliable and stable connection between your data center and AWS, look at AWS Direct Connect.
>
> **[4:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=271)** This provides a physical connection between your data center and AWS, and it's used in large-scale hybrid deployments.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=282)** There's a lot of different ways to go about this and your needs will depend on the size of your deployment.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=288)** But let's get back to our simple public subnet example with moderate security and talk about some ways to handle our incoming internet traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Windows]] (2), [[Database Management]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** aws (14), vpn (7), vpc (5), nat (1), ssh (1)
> **CLI Commands:** aws (14), ssh (1), make (1)
> **Tools:** aws console (2), terminal (1), command line (1)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** click on (2)
> **Analogies:** similar to (1), such as (1)
> **Prerequisites:** set up (1), setup (1)

#### [Scaling with Elastic Load Balancer (ELB)](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=0)** - In our discussion on autoscaling, I had you imagine that you were at a grocery store and then, when the checkout lanes started getting long, autoscaling would open up more checkout lanes by scaling up the number of instances.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=14)** Sometimes when lanes start getting really, really long, the grocery store will have an attendant walk up and down in front of all the checkout lanes, so that attendant will direct you to which checkout lane you should go to.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=28)** In a networking world, that attendant is called a load balancer, and it splits up the incoming traffic and balances it among your healthy servers.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=37)** It's a key component to horizontal scaling.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=40)** And in AWS, this is called an elastic load balancer.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=45)** Let me demonstrate how a load balancer works.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=47)** Now, this isn't an actual load balancer.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=50)** They're much larger, and some just don't look any different than a rack-mounted computer.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=54)** But this little hub will make it easier to show you what a load balancer does.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=59)** You point your users at your load balancer, and that load balancer will then forward that traffic onto any healthy server.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=67)** If you need to scale up, you add an instance to your load balancer, and it'll start directing a share of the traffic to that new instance.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=76)** If it detects that one of the servers isn't healthy, it'll stop directing traffic to that server.
>
> **[1:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=82)** And you can also tell it to take a healthy server out of rotation, such as when you need to perform maintenance on that server.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=91)** If the grocery store attendant knows that the cashier on lane one is about to go on break, they'll stop directing customers to lane one, and that cashier will check out the remaining customers and then close their lane.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=103)** Likewise, a load balancer will stop sending new connections to a server and let it drain its remaining connections before going offline.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=114)** Let's set up an elastic load balancer so you can see how this works.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=119)** There are three types of elastic load balancers.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=123)** Network load balancers are really fast, but they don't have many features because they achieve that speed by not looking too closely at the traffic coming in.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=135)** Gateway load balancers are for switching traffic coming into virtual networking appliances made by vendors that aren't AWS, such as Cisco virtual firewalls.
>
> **[2:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=148)** Application load balancers are great for web traffic because they will look at the incoming traffic and route it based on a set of rules.
>
> **[2:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=158)** We will be using an application load balancer since we are running [[Web Servers]].
>
> **[2:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=164)** So let's set one up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (1)
> **CLI Commands:** aws (2), make (1)
> **Analogies:** such as (2), imagine (1)
> **Env Vars:** aws (2)
> **Definitions:** is called (2)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### [Learn how to create an Application Load Balancer (ALB)](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=0)** - [Instructor] In the [[Amazon EC2|EC2]] console take a look at your two running instances.
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=5)** You'll need to note two things before starting.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=9)** Remember which availability zones your instances are running in, and also remember the name of the security group that both of your instances are using.
>
> **[0:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=21)** On the left-hand sub menu, click on Load Balancers, click Create Load Balancer.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=29)** And under Application Load Balancer press the Create button.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=35)** For name type testalb.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=42)** Under Network mapping, select your default VPC.
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=48)** And for mappings, select the two availability zones that your EC2 instances are currently in.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=57)** I'm going to select the only two subnets that I have in these availability zones, but if you had created public and private subnets, you would select your public subnet.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=69)** Scroll down to security groups.
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=72)** Load balancers use security groups just like EC2 servers do, so there's a filter on the network lines coming into and out of your load balancer.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=83)** Click on the link Create new security group.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=87)** For name type alb-sg for security group and for description type http for webservers.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=101)** Under the Inbound rules, click Add rule.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=106)** For type select HTTP.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=111)** For source, select Anywhere-IPv4.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=116)** This will allow incoming HTTP traffic from the public internet to come into our ALB.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=125)** Under Outbound rules, click Add rule.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=131)** For type select HTTP because the HTTP port is open on our target webservers.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=141)** And to specify our target servers set the destination to Custom and left click inside the search box.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=151)** Inside the pull down, scroll down until you see a section titled Security Groups.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=157)** Select the security group that is bound to each of your running EC2 instances.
>
> **[2:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=164)** So instead of specifying IP ranges for my [[Routing]], you can specify security groups.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=171)** So any instance that is bound with this security group will be able to receive traffic from the ALB.
>
> **[3:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=180)** If you have an all traffic rule above that, click the Delete button.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=186)** At the bottom click the Create security group button.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=193)** Now close the new tab that this window spawned in.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=198)** In the ALB launch wizard, click the refresh button next to the security group pull down and select the new security group we just created.
>
> **[3:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=210)** Load balancers route their traffic to target groups which include your target servers.
>
> **[3:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=218)** If you click inside the select target group pull down, you may find that you don't have any target groups yet.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=226)** Click the Create target group link and this will open the target group settings in a new tab.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=235)** The target type will be instances.
>
> **[4:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=240)** For name type webservers.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=246)** The port we'll be forwarding is port 80 and we'll forward HTTP version one traffic.
>
> **[4:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=255)** Make sure that you have your default VPC selected.
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=261)** ALB will use health checks to determine that a server is healthy before sending traffic to it.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=269)** You might have a specific page you want ALB to check, but the route of our site is fine so leave these settings the same and just click Next.
>
> **[4:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=279)** If you wanted to check the health of your server by pinging a different port other than port 80, you need to make sure that this health check port is also in the outbound rules of the ALBs security group.
>
> **[4:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=292)** Now we are registering target servers to the target group we just created.
>
> **[4:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=298)** Click the check boxes next to both servers and click the Include as pending below button.
>
> **[5:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=308)** Click the Create target group button.
>
> **[5:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=313)** Now you can close this new tab and return to the ALB launch wizard tab.
>
> **[5:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=320)** Click the refresh button next to the target group pull down.
>
> **[5:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=325)** And now inside the pull down select the webservers target group we just created.
>
> **[5:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=332)** At the bottom of this page click on the Create load balancer button.
>
> **[5:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=338)** Click View load balancer.
>
> **[5:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=342)** In the details panel of our new load balancer, click on the Listeners tab.
>
> **[5:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=348)** Under the rules column on the port 80 line click on the webservers target group.
>
> **[5:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=357)** Click on the webservers target group name again.
>
> **[6:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=361)** And under the Targets tab you will see the two servers in this target group.
>
> **[6:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=367)** Since we just created this load balancer, the status of each of our target servers might be initial because it hasn't completed the health check yet.
>
> **[6:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=378)** If you give it a few minutes, your health status will change to healthy.
>
> **[6:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=382)** And then in the left-hand menu, click on Load Balancers again.
>
> **[6:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=390)** Under the description Tab of our test ALB load balancer, copy the DNS name that's assigned to your load balancer.
>
> **[6:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=401)** In a new browser tab type http:// and then paste in your DNS name.
>
> **[6:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=411)** Now hit Enter.
>
> **[6:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=414)** And it works.
>
> **[6:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=416)** Now our load balancer is shuffling the incoming port 80 traffic to both healthy servers.
>
> **[7:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=423)** If you want to see some other things that ALB can do and see how you can set up HTTPS for secure traffic, check out my other course called ECS and multi-region load balancing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (4), [[Routing]] (1)
> **Env Vars:** alb (8), http (5), ec2 (4), vpc (2), dns (2)
> **UI Navigation:** click on (7), select the (5), scroll down (2), open the (1)
> **Ports:** port 80 (4)
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** you'll need (1), set up (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Point a domain to your EC2s with Route 53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/point-a-domain-to-your-ec2s-with-route-53?u=76281980)


### 5. IaaS Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Hard drives with Elastic Block Store (EBS)](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=0)** - Computers and servers use hard drives to store data, and virtual servers need hard drives as well because this is where they store their operating systems, [[Server Configuration]] files, and the source code that you'll create and upload to them to run your applications.
>
> **[0:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=16)** But unlike physical hard drives in the real world, virtual drives can grow and shrink in size.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=23)** You can even snapshot them at any point in time and you can easily clone them.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=28)** Amazon's primary storage service for [[Amazon EC2|EC2]] servers is called Elastic Block Store, elastic because it can stretch in size when you need it to.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=38)** Let's take a look at Elastic Block Store in the EC2 console.
>
> **[0:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=43)** Switch back over to the EC2 console.
>
> **[0:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=51)** On the left, underneath Elastic Block Store, click on Snapshots.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=59)** When we made our AMI, you'll see that it created an EBS snapshot of your server's main drive.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=69)** Now, this snapshot is a little different than the AMI snapshot.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=74)** The AMI includes everything you'll need to relaunch the instance.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=79)** The EBS volume is just a snapshot of its hard drive.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=85)** In the left hand menu, click on volumes.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=92)** These are the hard drives that are connected to your instances.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=97)** You can create additional EBS volumes and mount them to your running instance, and this is like adding a second hard drive to your computer.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=108)** At the top, you would click create volume, and then decide how big you want this drive to be.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=115)** Select the availability zone of the instance you're going to attach it to, and then click create volume.
>
> **[2:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=124)** Click on the new EBS volume that you just created and scroll over to the volume state column.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=132)** Periodically click the refresh button until the volume state changes to available.
>
> **[2:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=139)** Once the volume state is set to available, click on the volume, and then click the actions pull down, and then click the attach volume option.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=150)** Under instance, select your running instance in this availability zone.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=156)** At the bottom, click attach volume.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=161)** This is just like buying a hard drive at the store and plugging it into your computer.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=167)** Your computer will see that a new device was attached, but the drive is completely blank.
>
> **[2:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=173)** There's no file system on the drive, so you need to connect to your instance and format the drive so that you can use this.
>
> **[3:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=181)** If you want to do this under [[Linux]] or [[Windows]] Operating Systems, the AWS Docs has a guide that'll help you.
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=191)** Some of the other things you can do with EBS volumes is that you can also detach the drive and move it to another computer.
>
> **[3:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=200)** With your volume selected, click on actions and click on modify volume.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=207)** You'll notice here that you can also increase the size of the volume.
>
> **[3:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=212)** If you do this, take note that the new space that you add to the drive must also be formatted.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=220)** If you click the info button next to the size label and scroll down in the Learn more section on the right, you'll see some links to the AWS Docs and they'll tell you how to expand a volume in Linux and in Windows.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=236)** Click Cancel, because we aren't going to modify this drive at this time.
>
> **[4:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=240)** For backups of your server, the best thing to do is to take an AMI image periodically because this can be easily relaunched to restore the server to a point in time.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=254)** If you have an application where you need to take a lot of snapshots of a data volume that frequently changes, such as a database server, you can create a second EBS volume for your instance and configure your database to store its data files on this new volume.
>
> **[4:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=274)** Then you can set a higher interval for when you want snapshots of this volume to occur.
>
> **[4:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=281)** EBS volumes are fast, which is why they are the default for new EC2 instances, but let's look at some options for sharing a drive between several instances.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (4), [[Linux]] (2), [[Windows]] (2), [[Server Configuration]] (1)
> **Env Vars:** ebs (7), ec2 (4), ami (4), aws (2)
> **UI Navigation:** click on (6), select the (1), scroll down (1)
> **CLI Commands:** aws (2)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** just like (1), such as (1)
> **Prerequisites:** you'll need (1), configure (1)
> **Exercise Files:** source code (1)

#### [NAS with Elastic File System (EFS)](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nas-with-elastic-file-system-efs-22740497?u=76281980)

#### [Web storage with Simple Storage Service (S3)](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/web-storage-with-simple-storage-service-s3-22731604?u=76281980)

#### [Upload a file to S3 from the AWS CLI](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/upload-a-file-to-s3-from-the-aws-cli-22739498?u=76281980)

#### [Use the SDK to create a file within S3](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=0)** - [Instructor] Let's use the AWS SDK, or [[Software Development]] Kit to interface with S3 from our source code on our server.
>
> **[0:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=11)** Before we begin, write down the name of the S3 bucket that we just created, since we'll reference this later within our code.
>
> **[0:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=21)** In the AWS console, type [[Amazon EC2|EC2]] into the search bar and click on the entry that auto completes.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=30)** Click on instances and click on your first running instance and then click the connect button.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=39)** Under the EC2 instance connect tab make sure that your username is [[Ubuntu]].
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=47)** This is the default local user for this Ubuntu AMI.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=54)** Click the connect button.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=59)** Included in the exercise files, you'll find a text file that includes all the terminal commands we're going to run, and it might be easier to pull this up and cut and paste the commands.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=73)** Paste in the first command which will install [[PHP]] on our server along with several other packages that'll help get the AWS SDK installed.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=85)** Right click inside of this session and click the paste as plain text option.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=92)** I'm using Chrome as my browser, but if you're using another browser it should have a similar option.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=98)** Or on [[Windows]], you can try Ctrl + Shift + V or on Mac, Apple + Shift + V.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=106)** If you see the commands pasting into the terminal with any special characters added to the end of it, you might have to hand type the commands into the terminal window if pasting doesn't work.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=119)** Once the command is pasted or typed in, hit enter to run it.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=126)** Hit capital Y and enter to confirm.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=132)** If you're prompted to restart services hit tab to highlight okay, and then hit enter.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=140)** This next command will install the AWS SDK for PHP using a package manager for PHP called Composer.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=151)** The command is composer, space, require, space, aws/aws-sdk-php and then hit enter.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=168)** Type nano, space, s3test.php, and hit enter.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=178)** This will open the nano editor in [[Linux]] and create a new file called s3test.php.
>
> **[3:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=187)** Included in the same example files is a PHP file that we first need to edit and put in our credentials.
>
> **[3:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=196)** On your local machine, edit this file and change the region where it says region here to the name of your region.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=205)** Mine is us-east-1.
>
> **[3:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=211)** And under credentials, where it says key and secret, and then it says "KEYHERE", you need to put in your access key and your secret access key.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=224)** On the line that says Bucket and the value says "YOURBUCKET", you'll need to change the name of this to the name of your S3 bucket that you just created.
>
> **[3:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=238)** When you're done with your changes highlight just the PHP code and copy it.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=246)** Back in your terminal window, paste in the code as plain text.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=253)** To save this file in Nano, hold down the Ctrl key and hit O.
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=261)** Then hit enter.
>
> **[4:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=264)** This will tell Nano to save the file onto the server.
>
> **[4:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=268)** Now hold Ctrl again and hit X to exit Nano.
>
> **[4:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=275)** Type PHP, space, s3test.php and hit enter to run our file.
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=284)** Once the code has run, switch back to the original browser tab from the EC2 console that launched our terminal session.
>
> **[4:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=293)** Type S3 into the service's search bar and click on the entry that auto completes.
>
> **[5:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=300)** Click on the bucket name to start browsing the bucket from its route.
>
> **[5:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=306)** You'll see a testfromphp.txt file, and if you click on it you can open it.
>
> **[5:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=313)** Click on the open button at the top, and after the file downloads in your browser go ahead and open it in notepad.
>
> **[5:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=322)** You'll see that the contents of this text file is the same as what we inserted from our source code.
>
> **[5:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=330)** Using the other SDKs, such as the [[Python (Programming Language)|Python]] or [[Node.js]] SDKs, is very similar to this example in PHP.
>
> **[5:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=341)** There's a lot you can do with this.
>
> **[5:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=343)** So check out the full AWS documentation for your SDK to get an idea of some of the other integrations you can use in your apps.
>
> **[5:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=355)** Now that you can see how this works, you'll notice that we already stepped over the line and made a major mistake.
>
> **[6:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=364)** We pasted our access key and secret access key directly into the source code.
>
> **[6:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=371)** So now anyone with access to this server can assume all of our rights within AWS.
>
> **[6:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=380)** Let's talk about another way to grant our code access to S3 without compromising our access keys.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (11), [[Amazon EC2|Ec2]] (3), [[Ubuntu]] (2), [[Software Development]] (1), [[Windows]] (1)
> **CLI Commands:** php (11), aws (8), composer (2), make (1), find (1)
> **Env Vars:** php (7), aws (6), sdk (4), ec2 (3), ami (1)
> **UI Navigation:** click on (7), open the (1)
> **Tools:** terminal (5), aws console (1)
> **File Paths:** s3test.php (3), testfromphp.txt (1), node.js (1)
> **Exercise Files:** source code (3), exercise files (1)
> **Prerequisites:** install (2), you'll need (1)

#### [IAM roles for EC2](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=0)** - Do you remember that I said not to place your access keys directly into a server?
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=7)** Well, to get my code to work, I put my access key, with all of its administrative permissions, directly onto our test server.
>
> **[0:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=16)** But now my access key could be compromised if anything ever happens to this server.
>
> **[0:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=21)** So how do I prevent this key from getting stolen?
>
> **[0:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=25)** IAM or identity access management has a feature called roles.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=31)** By creating an IAM role, I can tell AWS what permissions this [[Amazon EC2|EC2]] instance has.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=38)** In our example, I can use a role to grant read and write permissions to my S3 buckets and apply that role to my instances.
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=48)** Since this role is a property of the instance, it's like the instance type.
>
> **[0:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=53)** There's no keys or passwords on the server that can now be stolen.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=58)** Let's create a new role from our EC2 instance and fix our code.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=63)** From the AWS console, in the services search bar type IAM and click on the entry that auto completes.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=73)** On the left-hand sub menu within IAM, click on roles, and then click on create role.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=83)** Make sure that AWS service is selected as the trusted entity type.
>
> **[1:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=88)** And then under use case, click on EC2 and click next.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=97)** In the policies filter box, type S3 and hit enter.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=103)** Click on the checkbox next to Amazon S3 full access.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=111)** At the bottom, click next.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=115)** For role name, type s3grantforec2 all as one [[Microsoft Word|word]].
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=123)** And then at the bottom, click on create role.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=129)** This will create a role that grants full access to any S3 bucket on our account.
>
> **[2:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=136)** But you can also create a custom policy that allows only read or write permissions to, say, a single bucket if you would like.
>
> **[2:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=146)** The AWS documentation has a few examples to get you started with writing a custom policy, and you can also search our catalog for AWS policy for a deep dive into writing your own policy.
>
> **[2:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=163)** Now at the top, click on services.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=167)** And under recently visited, switch back to the EC2 console.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=174)** On the left, click on instances and click on the first instance that we created.
>
> **[3:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=181)** Then click on the actions pulldown, and underneath security, select modify IAM role.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=193)** In the role pulldown, select the S3 grant for EC2 role that we just created, and then click update IAM role.
>
> **[3:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=206)** In your browser, switch your tab back to the SSH session that we already have with our first server.
>
> **[3:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=213)** If yours is disconnected, you'll just need to click on the AWSdemo1 instance, and then click connect again.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=222)** Type nano S3 test.[[PHP]] and hit enter.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=230)** Now we're going to remove the credentials element from this array.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=234)** So use your arrow keys to place your cursor at the end of the closing bracket, and hold down the backspace key until you get to the comma at the end of the region element.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=246)** Delete that trailing comma and save the file again by holding down CTRL+O and hitting enter.
>
> **[4:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=255)** And then hold down CTRL+X to exit.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=260)** Type php S3test.php to run the file again.
>
> **[4:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=268)** You'll notice that the code still works even without the access key because the EC2 instance is now using the role we defined to authorize itself against S3.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=282)** With any new EC2 instances that you launch, you'll find the role setting in the launch wizard.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=288)** So you can select this S3 grant for EC2 role, and your code will automatically be granted these permissions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (8), [[PHP]] (3), [[Microsoft Word|Word]] (1)
> **Env Vars:** ec2 (8), iam (6), aws (5), ctrl (2), ssh (1)
> **UI Navigation:** click on (10), checkbox (1), select the (1)
> **CLI Commands:** aws (5), php (3), make (1), ssh (1), find (1)
> **File Paths:** test.php (1), s3test.php (1)
> **Tools:** aws console (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)

#### [Putting together all of the IAM resources](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=0)** - [Instructor] Now that we've seen what a role can do, let's put together all the concepts we've learned so far about Identity and Access Management.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=10)** It has a lot of terms that sound similar and it can get confusing.
>
> **[0:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=16)** IAM is always controlled by the AWS Global Region, which is a special region within AWS.
>
> **[0:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=25)** That just means these are settings and services that aren't tied to a specific region.
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=32)** IAM resources are different from your regular AWS resources like your [[Amazon EC2|EC2]] instances or VPCs.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=42)** Your root account sits off to the side and it's not an IAM resource.
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=48)** But already in this course, we created several IAM resources such as our IAM group called admins, our IAM user that we're currently logged in as, and the S3 grant for EC2 role that we just created.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=68)** Groups, users, and roles fall under the label of IAM identities.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=76)** IAM entities are the users and roles that want to access AWS resources.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=85)** A group will never access AWS services directly.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=89)** It's the users inside that group that will want to access things.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=94)** So a group is not an entity.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=97)** An IAM policy is also an IAM resource and these policies attach to IAM identities and tell AWS what the entities can and cannot do.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=113)** We assigned the administrator access policy to our IAM group called admins to give any users in that group full control over our AWS account.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=126)** We also attach the Amazon S3 full access policy to our S3 grant for EC2 role.
>
> **[2:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=134)** So anything using that role, such as an EC2 instance, will have full control over our S3 buckets.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=143)** Principles are anyone or anything that is asking to do something with one of our AWS resources, like reading or writing to our S3 bucket.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=156)** Principles include the root account itself, although you shouldn't use this in everyday use cases, and any IAM entities.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=168)** When an IAM entity, whether that be a user or a role, makes a call to AWS resources, the IAM policies attached to that role, user, or users group will determine if that principle can access that resource and what rights it'll have.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=188)** You'll see these terms come up a lot in the other AWS services, and understanding these concepts will help you design a strong security model and properly wire together your various AWS services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (4)
> **Env Vars:** iam (15), aws (11), ec2 (4)
> **CLI Commands:** aws (11)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Storing passwords with Secrets Manager](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/storing-passwords-with-secrets-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/storing-passwords-with-secrets-manager?u=76281980&t=0)** - [Instructor] We followed best practices by creating the IAM role for our [[Amazon EC2|EC2]] instance to access S3 and removing our secret access key from within our code.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/storing-passwords-with-secrets-manager?u=76281980&t=13)** However, there are times when you need to pass in credentials to external third party services that aren't AWS services from within your code and you don't want to put those passwords or keys directly within your code either.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/storing-passwords-with-secrets-manager?u=76281980&t=30)** In these instances, look at AWS Secrets Manager.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/storing-passwords-with-secrets-manager?u=76281980&t=36)** You can find it by typing Secrets Manager into the search bar.
>
> **[0:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/storing-passwords-with-secrets-manager?u=76281980&t=43)** With Secrets Manager, you will store the key or passwords securely into Secrets Manager.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/storing-passwords-with-secrets-manager?u=76281980&t=54)** In your source code, instead of hard coding this password or key directly into your code you'll just call the AWS API with a small bit of code and retrieve the secret from Secrets Manager.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/storing-passwords-with-secrets-manager?u=76281980&t=70)** So if your server is compromised or your code is leaked it won't contain your keys and passwords to your external services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (1)
> **Env Vars:** aws (3), iam (1), ec2 (1), api (1)
> **CLI Commands:** aws (3), find (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Long-term storage with S3 Glacier](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=0)** - S3 has a lot of cool features, and when I say cool, I mean ice cold. - [Recordist] Ice cold.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=7)** If you have older data that's just sitting around your S3 bucket, but let's say you don't want to delete it, you can create a lifecycle policy that'll automatically move the older files in your S3 bucket to a cheaper storage class within S3, and the cheapest storage class that's in S3 is called S3 Glacier.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=28)** With Glacier, you're charged a fraction of the monthly fee for the files that you put in here.
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=32)** So it's great for server backups or for log files that you just need to keep around for auditing purposes, but just like that extra freezer that, you know, you keep around your garage, anytime that you pull your data out of Glacier, you have to let it thaw.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=50)** This could take several hours.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=52)** So only put data in here that's infrequently used, and you're willing to accept the long wait time before you can access it again.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=61)** In the AWS console, click on the Services pulldown, and then click on Recently Viewed.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=69)** Hover over S3, and on the left side of the S3 title, click on the star button.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=77)** This will add S3 as a favorite to your AWS console and create a link for you that stays at the top of the console.
>
> **[1:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=88)** Add [[Amazon EC2|EC2]] as a favorite as well by clicking the star next to its title, since we've been using that one a lot as well.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=98)** Click on S3 and go to the S3 console.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=103)** From the S3 console, select the test bucket that we just made.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=109)** Click on the test folder and then click on the first [[LinkedIn]] logo that we had uploaded earlier.
>
> **[1:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=118)** Scroll down and under Storage class, click on Edit.
>
> **[2:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=127)** Here you'll see the different storage classes that S3 has.
>
> **[2:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=134)** This infographic in the AWS docs gives you a pretty good overview of the differences in the storage classes and how many availability zones your data is going to be replicated into for redundancy.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=147)** You'll notice one-zone IA only lives in a single availability zone, and this storage class is really good for third redundant copies of your on-premise backups because it's kind of cheap, and you can get your data back faster than you can with Glacier, but since it's your plan C or plan D in a data redundancy plan, you don't need it replicated across a bunch of availability zones and protected against failure like your other data.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=179)** At the bottom of the storage classes screen, click Cancel because for such a small file, it's kind of a waste to use Glacier for this, but you can see where the options are and how you would apply these to folders or large files.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=197)** Click the bucket name, up in the breadcrumbs, and click on the Management tab.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=205)** Here you can create lifecycle policies that automatically move older files in your S3 bucket to a cheaper storage class, and then maybe even eventually delete the files entirely.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=220)** On the Properties tab of your S3 bucket, you can see a few of the other features of S3.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=230)** Versioning lets you keep point-in-time versions of your changed files.
>
> **[3:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=237)** At the bottom, static website hosting lets you host an entirely static website directly from an S3 bucket.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=247)** If you've used [[GitHub]] pages, it's sort of like that, but a little more basic, where you can use a static site generator like Hugo to host a simple blog or marketing site without [[Node.js]] or [[WordPress]] or [[Databases]].
>
> **[4:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=264)** Search our catalog for AWS S3, and you'll see a number of videos that walk through static site hosting and lifecycle management, if this is something you'd like to use.
>
> **[4:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=278)** If you need to move a lot of data into AWS, check out the AWS Snow family of services.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=288)** With an AWS Snowball, Amazon will ship you a fancy hard drive array that you plug directly into your server, copy your files to it and mail it back to AWS, where they will connect it to their network and load all of your data into S3.
>
> **[5:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=307)** This can be much cheaper from moving a lot of data than paying the data transfer costs for using S3 over the public internet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (1), [[LinkedIn]] (1), [[GitHub]] (1), [[Node.js]] (1), [[WordPress]] (1)
> **UI Navigation:** click on (7), go to (1), select the (1), scroll down (1)
> **CLI Commands:** aws (8), node (1)
> **Env Vars:** aws (8), ec2 (1)
> **Tools:** aws console (2), github (1)
> **File Paths:** node.js (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)

#### [Serve content faster with CloudFront](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=0)** - So we already know that you can use an S3 bucket to host the static content for your website, like images, and videos.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=8)** With CloudFront, you can push the contents of this S3 bucket to Edge servers all over the world.
>
> **[0:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=15)** So if you have users in Ireland, your videos will load faster for them because they're being served a local copy from the Ireland data center.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=24)** Now your users in Tokyo or your users in Brazil, will be served content from the data center that's closest to them.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=31)** CloudFront is a Content Delivery Network or CDN, that can mirror your S3 bucket all across the world, and it's a lot cheaper than a plane ticket to Tokyo.
>
> **[0:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=43)** In the S3 Console in your Bucket settings, click on the Permissions tab.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=50)** This will let you control public access to your bucket, but I can't stress enough that you really need to stop and read the documentation here and observe the warnings.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=63)** Be careful to not publicly expose your database backups to the entire world.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=70)** Search our Catalog for S3 Policies, and you'll find some additional resources on how to safely open up permissions to your S3 bucket.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=81)** Under Block public access, click Edit.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=86)** We're only going to be hosting public web content through this public bucket.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=92)** So uncheck the box that says, "Block all public access," and make sure the other check boxes are not checked.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=103)** Click the Save changes button.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=106)** Heeded the warning here, that, "We are making this bucket public and you need to make sure you aren't exposing sensitive files now or in the future."
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=119)** Type "confirm" into the field and press the Confirm button.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=125)** Scroll down and under Object Ownership, click Edit.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=132)** Select ACLs enabled, and then select, "I acknowledge that ACLs will be restored."
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=141)** At the bottom, click the Save changes button.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=147)** Click on the Objects tab, and then click on the test folder, and then click on the first [[LinkedIn]] logo that we uploaded earlier.
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=159)** Click on the Permissions tab, and then click the Edit button.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=166)** Under Everyone (public access) underneath the Objects column, click on the Read checkbox.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=177)** Scroll down and and click, "I understand the effects of these changes on this object."
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=185)** At the bottom, click Save changes.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=190)** Now click on the Object URL, and this time you should see the LinkedIn logo and not a permissions denied error.
>
> **[3:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=199)** Now that we have a public S3 bucket and a public object, let's use CloudFront to replicate this bucket across several Edge locations for speed and redundancy.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=215)** In the Services search bar type, "CloudFront," and click on the entry that auto completes.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=224)** Click Create a CloudFront distribution.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=230)** In the Origin domain field, Click on it, and it'll auto-populate with a list of your S3 buckets.
>
> **[3:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=237)** Select the S3 bucket that we had already created.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=243)** Scroll to the bottom of the page, and click on Create distribution.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=252)** Its status is now "Deploying," and it'll take a few minutes for CloudFront to push this bucket out to all the Edge locations.
>
> **[4:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=263)** The Edge locations are located all over the globe and getting your static content closer to your end users, will result in faster load times.
>
> **[4:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=277)** If you need to speed up more than just website content, take a look at AWS Global Accelerator.
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=287)** It can move network traffic between your application running in a single region to an Edge location faster than if that traffic had bounced across the public internet.
>
> **[5:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=300)** Think of it like a subspace warp zone to get your data across the world faster.
>
> **[5:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=308)** Another thing that you can do with the Edge locations is to turn on S3 Transfer acceleration.
>
> **[5:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=315)** This will use an Edge location closer to you or your users for faster uploads and downloads into an S3 bucket.
>
> **[5:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=325)** You'll find this setting in the Properties of your S3 bucket.
>
> **[5:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=331)** There's even a speed comparison tool, that'll run a quick test from your browser to show you how much faster transfer acceleration will be.
>
> **[5:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=342)** Back in the CloudFront dashboard, now that my distribution is complete, click the Copy button next to the Domain Name column.
>
> **[5:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=354)** In a new browser tab, paste the URL you just copied, and then at the end of the URL type, "/testfolder/linkedinlogo.png."
>
> **[6:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=373)** This matches the same object path from our origin S3 bucket to this file.
>
> **[6:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=380)** Hit Enter to see the results. (button clicking) And there we go, now we've sent the LinkedIn logo all across the world and we used Edge locations to go global with just a few clicks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3)
> **UI Navigation:** click on (10), scroll down (2), checkbox (1), select the (1)
> **CLI Commands:** find (2), make (2), aws (1)
> **Env Vars:** url (3), cdn (1), aws (1)
> **Warnings:** be careful (1), warning (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Analogies:** think of it like (1)


### 6. Database as a Service (DBaaS)

[↑ Back to Table of Contents](#table-of-contents)

#### [What is database as a service (DBaaS)?](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=0)** - AWS has a lot of services for helping you manage [[Databases]], and this can be pretty overwhelming.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=7)** Having a cloud vendor help you manage the servers and backups of your data is called Database as a Service or DBaaS, and it lets you focus on the data itself and optimizing retrieval versus configuring failover and managing database engine updates.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=26)** If you are migrating an existing application into AWS, then your database technology has already been chosen for you, either by your development team or by the vendor who created your app.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=37)** And so I would recommend looking at the AWS Data Migration Service, which can take your on-premise relational database and create a [[Real-Time]] in-sync clone of your database in the cloud so you can perform a smooth transition from your on-premise data center into AWS.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=56)** Now, if you're building a new application or re-architecting an existing application, choosing a database provider can be complicated.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=65)** Before you start having an internal war with your team about whether to use an Oracle database or a [[PostgreSQL|Postgres]] database, I would back up and look at the data needs for your whole application.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=77)** What kind of data will you be storing?
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=79)** How much data do you currently have?
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=81)** How much data will you write to your database over the period of, I don't know, say one hour?
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=86)** How much data will you read?
>
> **[1:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=88)** Will you be running a bunch of large queries and reports?
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=91)** What kind of uptime do you need?
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=94)** Ask some higher level questions first and then design a database solution around those broad categories.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=101)** If you're going to store a lot of historical data for reporting, I don't know, maybe you need a [[Big Data]] solution, but if you need real-time access to a current month of data, maybe you just store that in a relational database and then move the [[Representational State Transfer (REST)|rest]] of it into a big data store later.
>
> **[1:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=118)** If your relational database is going to ingest a large stream of data, maybe you need a queue that sits in front of the relational database that aggregates some of the data over, say, like a five minute period, and then it only inserts the aggregated data into the relational database.
>
> **[2:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=134)** If the data types that you're storing are object base and you don't need a lot of reporting, maybe it's better to use a [[NoSQL]] database.
>
> **[2:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=142)** Once you know the broad strokes and identified the larger pieces of how it's all going to tie together, then you research which relational database would be good for your application based on feature sets and budget and things like vendor support.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=157)** There are not right and wrong answers here when choosing database vendors, but there's only good, better, and best for your specific use case.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=167)** But using the wrong type of database technology in the wrong way can really hurt your app going forward.
>
> **[2:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=176)** [[Relational Databases]] are not a good substitute for a big data store, and vice versa.
>
> **[3:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=183)** Even if you're familiar with database types, I would recommend you read the book, "Designing Data-Intensive Applications."
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=190)** It doesn't favor one specific database engine, but it talks about the broad strokes and how the database technologies all differ from each other and when is the right time to deploy each strategy.
>
> **[3:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=203)** Most of my experiences with relational database engines, and this book really helped me fill in some gaps in my own knowledge.
>
> **[3:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=211)** Getting this higher perspective on how to store and process data within your app will help you select between all of the various services that AWS offers for storing your data.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=222)** Now, let's look at what AWS can do for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (3), [[Real-Time]] (2), [[Databases]] (1), [[PostgreSQL|Postgres]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** aws (6)
> **Env Vars:** aws (6)
> **Definitions:** is called (1)
> **Speakers:** - aws (1)

#### [Relational Database Service (RDS)](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=0)** - If you have a relational database, like [[MySQL]] or [[Microsoft SQL Server]], you can always spin up an [[Amazon EC2|EC2]] instance and install the database engine directly onto the server.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=12)** If you're coming from an on-premise environment, this is probably how you already configured your servers and AWS will let you replicate that same environment in the cloud.
>
> **[0:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=21)** However, just like your on-premise environment, you may not have responsibilities over the [[Hardware]] anymore, but you're still responsible for all the configuration, the operating system updates, the database engine updates, the monitoring, setting up failover replication in case your database instance fails, and, you know, the list goes on and on.
>
> **[0:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=43)** So to help you out, AWS has a managed platform where you just give them your database and they do all this for you.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=50)** They manage the EC2 instances, the database backups, the database engine upgrades, even the failover replication.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=58)** The service is called Relational Database Service, or RDS.
>
> **[1:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=64)** RDS supports most of the popular [[Relational Databases]], such as [[PostgreSQL|Postgres]] and MySQL, [[Microsoft SQL Server|SQL Server]], and Oracle.
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=72)** Let's dive into a few ways that you can use RDS.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=77)** This is the RDS console and I'm going to launch a Postgres cluster just so that you can see what some of these settings look like.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=86)** Similar to launching an EC2 instance, you select a T-shirt size for your database instance.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=92)** Now you can start small and increase the size of your instance as you scale up; however, you can't scale back down.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=101)** If you need to scale down, you'll need to launch another smaller RDS instance, transfer your data, and then change your database connections in your code.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=110)** So start small and scale up only when you need to.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=115)** If you select the Multi-AZ deployment option, RDS will create a second database instance for you in another availability zone within the same region and automatically configure the cluster for you.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=130)** Now, if you're running a production database that needs a high uptime, I would highly recommend using Multi-AZ, but it does double your cost, because now you're running two instances instead of one.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=143)** Although in RDS and in your code, you were still only ever going to connect to the one cluster endpoint.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=151)** If you have the Multi-AZ option enabled and you need to make changes to your cluster, like provisioning more disk space or going to a larger instance, you'll likely not experience any downtime from these changes, because RDS will make changes to the secondary database first, swap the cluster, and then make changes to the primary database instance.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=174)** You can always start in a single availability zone and then as your uptime needs increase, turn on Multi-AZ later and tell RDS to provision the cluster in the middle of the night so that you reduce the impact to your customers while it's performing this change.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=189)** Another thing to note here is that if you choose to restore your database instance from the backups to a point in time in the past, RDS will create a second cluster for you.
>
> **[3:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=200)** It won't restore the backups on top of your existing cluster, which is different than how restoring a database works from an on-premise environment.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=209)** You can manually move data between your new cluster and your existing cluster and then just delete the new cluster when you're done with your repairs.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=217)** Or if you want to use the new cluster as your main database endpoint, it'll come up with a different database connection string because it's a new cluster.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=226)** So you'll have to change these database connections in your code to roll the entire cluster back to a point in time.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=234)** RDS is great, but you still have a few [[Database Administration]] tasks you have to perform, like keeping some monitors on read and write throughput.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=243)** If the thought of this scares or just bores you, look at Aurora.
>
> **[4:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=248)** Aurora works very similar to MySQL or Postgres from a developer standpoint.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=253)** However, it's a service where even more of the server management is handled by AWS and it'll even run in a serverless model, where you don't even manage the instances at all.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=265)** So if you want to be as hands-off as possible in managing your MySQL or Postgres workloads or you are picking a relational database for a new project and you don't want to have to deal with anything even remotely close to the engine room, look at Aurora.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (4), [[PostgreSQL|Postgres]] (4), [[Amazon EC2|Ec2]] (3), [[Microsoft SQL Server]] (1), [[Hardware]] (1)
> **Env Vars:** rds (11), ec2 (3), aws (3), sql (2)
> **CLI Commands:** mysql (4), az (4), aws (3), make (3)
> **Analogies:** similar to (2), just like (1), such as (1)
> **Prerequisites:** install (1), you'll need (1), configure (1)
> **UI Navigation:** select the (1)
> **Definitions:** is called (1)
> **Speakers:** - if (1)

#### [NoSQL databases](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=0)** - [Narrator] AWS has a great page that breaks down the terminology around [[NoSQL]] [[Databases]] and shows the different NoSQL databases that they offer.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=10)** A NoSQL database is just what the name implies.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=13)** It's usually a database engine that isn't a relational database type that doesn't use the standard [[SQL]] query language.
>
> **[0:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=20)** There's NoSQL.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=23)** Instead of imagining the data being stored in a tabular form, like a spreadsheet with fixed data types for the columns, NoSQL databases are great for storing data in a schemaless format.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=36)** Instead of a mail slot that only accepts postal letters, it's like a package delivery locker where each cubby can fit anything that you want and they all store different things like shoes, or footballs, a candy bar, whatever.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=50)** The most popular key value store that they offer is called DynamoDB, and it's pretty easy to use.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=57)** So this exists higher up in the database-as-a-service offering where you really don't do any management of it.
>
> **[1:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=64)** You just pay for what you use.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=67)** And if you partitioned it correctly, it's easier than the RDS offerings to scale up and down.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=73)** Another really great feature of DynamoDB is global tables, which let you replicate your data across several regions for speed and redundancy.
>
> **[1:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=82)** And you don't have to do anything complicated for cross-regional replication if you need that kind of uptime and performance.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=89)** I recommend you search our catalog for DynamoDB, because we've got a lot of in-depth dives on how this works.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=96)** And I walked through partitioning and global tables in my other course, "ECS and Multi-Region Load Balancing."
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=103)** One of the databases that popularize NoSQL databases is [[MongoDB]].
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=109)** DocumentDB is a database platform that's Mongo like, but you don't have to deal with servers and Mongo clusters.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=117)** Although if you do need to run Mongo directly from AWS servers, there's a white paper in the docs on how to do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (6), [[Databases]] (5), [[SQL]] (1), [[MongoDB]] (1)
> **CLI Commands:** mongo (3), aws (2)
> **Env Vars:** aws (2), sql (1), rds (1), ecs (1)
> **Definitions:** is called (1), is a  (1)
> **Documentation:** the docs (1)
> **Analogies:** it's like (1)
> **Speakers:** - [narrator] (1)

#### [In-memory caches](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/in-memory-caches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/in-memory-caches?u=76281980&t=0)** - When the database has to look up data, it can be slow.
>
> **[0:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/in-memory-caches?u=76281980&t=4)** And if you need to keep looking up the same piece of data over and over again it can really slow down your application.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/in-memory-caches?u=76281980&t=13)** Some [[Databases]] are used like scratch pads where you can just look something up from your database and then you just write it down real fast on your scratch pad and then you don't have to keep looking it up each time.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/in-memory-caches?u=76281980&t=26)** In-memory caches can do this for you and to help you deploy one of these AWS has created ElastiCache.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/in-memory-caches?u=76281980&t=35)** ElastiCache will help you manage and deploy two of the most common types of in-memory caches, Mimcached and [[Redis]].
>
> **[0:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/in-memory-caches?u=76281980&t=43)** Redis is the more popular in-memory cache but I've used Mimchached because it's supported by a few [[PHP]] open source apps.
>
> **[0:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/in-memory-caches?u=76281980&t=51)** Now, you can always install Redis or Mimcached directly on some [[Amazon EC2|EC2]] servers and set all this up yourself but AWS has simplified a lot of the management of these services with ElastiCache.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/in-memory-caches?u=76281980&t=63)** Not every application will need an in-memory store and to learn the right use cases, I would refer you back to the designing data intensive applications book.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/in-memory-caches?u=76281980&t=74)** If you think you might need this for your project, search our catalog for ElastiCache and we've got a few walkthroughs on how to set one of these clusters up and tie it into your app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (3), [[Databases]] (1), [[PHP]] (1), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** aws (2), php (1), ec2 (1)
> **CLI Commands:** aws (2), php (1)
> **Prerequisites:** install (1)
> **Speakers:** - when (1)

#### [Big data databases](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/big-data-databases-22740499?u=76281980)

#### [Buffer data with a message queue](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=0)** - When new data needs to be written to your database, your database engine may place a lock or a hold on the table that you're writing to and this is going to prevent other users from reading from that table until you're done writing your new data.
>
> **[0:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=15)** Now, when you have a lot of [[Data Streaming]] into your database, this wait time on reading from the tables can really slow down your application.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=26)** A queue temporarily store the data that you need to write, so that a spike in incoming data doesn't cause your database to melt down.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=35)** This means that your application's users aren't sitting around waiting on your database, so they can move on and keep using the [[Representational State Transfer (REST)|rest]] of your app and their data will be written later.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=46)** This is just one use case for a queue and there's several other use cases, such as creating a messaging framework to help the components of your app talk to each other without relying on the database for this.
>
> **[1:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=60)** In AWS, two such services for creating a queue are Kinesis and Simple Queue Service.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=69)** Kinesis is able to handle a large stream of incoming data, such as [[Real-Time]] data on what your users are clicking on in your web application or streaming of real-time application logs from your servers.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=83)** It's also able to connect to other services to do real-time reporting on these large data streams.
>
> **[1:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=90)** SQS is more popular and it's simpler to use, hence it's name, Simple Queue Service, but it can get expensive if you're sending it lots and lots of events, which is one reason why there's Kinesis.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=108)** Simple Notification Service, or SNS, can be used to push out a message, such as an email or text message or an HTTP call to a web hook.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=119)** So after your SQS queue has finished generating the report they were waiting on, SNS can send them an email and let them know that they can log back in and download their report.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=132)** All the messaging services work a bit differently, so it's important to understand when to use the right tool for the right job.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=141)** The question isn't, how should I choose between Kinesis or SQS or SNS, like you're somehow choosing between cereal boxes at a grocery store No, no, no, the real question is, when should I use Kinesis or SQS or SNS?
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=159)** Because you might use Kinesis to buffer your incoming data, but then also use SQS at the same time from one of your Kinesis workers to kick off a separate workflow when only certain events come into your Kinesis stream.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=174)** If Kinesis is a nail gun, then SQS is a hammer and you wouldn't use your nail gun to hang a picture, but if you're replacing a roof, you'll need both tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** sqs (6), sns (4), aws (1), http (1)
> **Analogies:** such as (3), picture (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** aws (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - when (1)


### 7. Platform as a Service (PaaS)

[↑ Back to Table of Contents](#table-of-contents)

#### [Hosting web apps with Elastic Beanstalk](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hosting-web-apps-with-elastic-beanstalk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hosting-web-apps-with-elastic-beanstalk?u=76281980&t=0)** - [Instructor] Elastic Beanstalk is great if you have a single code base for your project and you just want to give AWS your code and let them do more of the work of managing the servers and the operating system updates. Underneath the hood, it's still [[Amazon EC2|EC2]] servers, but it's great for developers who don't have the time for managing servers.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hosting-web-apps-with-elastic-beanstalk?u=76281980&t=26)** Elastic Beanstalk is one way we can host our [[WordPress]] marketing site and AWS has a tutorial in their docs where you can create a high availability WordPress site using RDS for the database and EFS to store the uploaded files.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hosting-web-apps-with-elastic-beanstalk?u=76281980&t=46)** If you're used to hosting WordPress from a shared host like GoDaddy or Blue Host, you usually pick a dedicated hosting plan based on your needs.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hosting-web-apps-with-elastic-beanstalk?u=76281980&t=57)** If you want an experience similar to what you would get with one of these hosts, look at Lightsail.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hosting-web-apps-with-elastic-beanstalk?u=76281980&t=65)** It's interface and [[User Experience (UX)|user experience]] are similar to what you would get with another web host and it's a great way to bring a site into AWS.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hosting-web-apps-with-elastic-beanstalk?u=76281980&t=75)** If you're already used to using something like C Panel for managing your web host.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hosting-web-apps-with-elastic-beanstalk?u=76281980&t=83)** If you outgrow the limitations of Lightsail, it has a built-in upgrade path for your site that will transition you to your own EC2 instances.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hosting-web-apps-with-elastic-beanstalk?u=76281980&t=93)** If you decide in the future that you'd like to move your site back down to the engine room and control it yourself

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[Amazon EC2|Ec2]] (2), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** aws (3), ec2 (2), rds (1), efs (1)
> **CLI Commands:** aws (3)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Running containers on AWS](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=0)** - Containers can be used to take a large monolithic single application and break its features down into smaller [[Microservices]] that can be easier to scale, monitor, and maintain.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=13)** So instead of my large monolithic app, let's say I've got a microservice container that handles the signups for my app, maybe one that handles the payments for my app, and maybe another one that handles all the reports for my app.
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=32)** Now, if you're new to the world of containers, or you've only briefly heard of technologies like Docker, think of a container like a mini virtual machine, although it's not technically a virtual machine like your [[Amazon EC2|EC2]] instances.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=47)** Imagine it more like its own little computer, like a Raspberry Pi, where all of your application's software dependencies and libraries are already installed and configured, things like NodeJS and [[Python (Programming Language)|Python]], and all your code is already set up, and just by, say, plugging it in to your container host, your app immediately starts and runs with no setup on your part.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=73)** Now, if this talk about containers has piqued your interest, search our catalog for Docker or microservices and we'll walk you through hands-on examples so you can use these concepts in your apps.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=86)** Now, AWS has gone container crazy and they have several platforms to help you host your containers, but the most popular service they have is called Elastic Container Service.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=100)** Let's dive into this some more.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=103)** Elastic Container Service is a container orchestration tool.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=109)** You first create a cluster, and within that cluster, you create nodes, such as EC2 instances, that will run your individual containers.
>
> **[2:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=120)** Just like when we load balanced our [[Web Servers]] across two availability zones, you can load balance multiple copies of your containers across nodes running in different availability zones.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=135)** This will allow your app to scale and provide redundancies if one of those EC2 instances were to fail.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=143)** Elastic Container Registry, or ECR, gives you a place within AWS to put your container images, which are the blueprints needed to spawn copies of your containers.
>
> **[2:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=158)** Your container image will include all of your bundled source code, and the configuration for the operating system layer and any packages and dependencies your application needs.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=170)** You will tell ECS about your container image when creating the container definition.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=177)** A service is something that your microservices will do for you, like maintain a login service or a reports service.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=186)** A task definition will tell ECS that it should always keep two copies of the login containers running at all times.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=197)** When setting up your ECS task definitions, you'll select the launch type for your containers, either EC2 to create your nodes as EC2 instances, Fargate, or external.
>
> **[3:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=213)** External allows you to run containers on your own on-premise servers in a [[Hybrid Cloud]] environment.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=222)** Select EC2 for your launch type if your containers are always going to be running and will be processing lots of incoming requests and need to be available immediately to return responses quickly.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=236)** Use this launch type if you're going to stash an entire web server backend into a container, like NodeJS, to handle API calls from your application.
>
> **[4:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=248)** You will specify which EC2 instance types you want, such as T2 mediums, and how many servers you want in your cluster.
>
> **[4:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=258)** Fargate is a bunch of on-demand nodes that are willing to run any number of containers.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=265)** Select Fargate if you can have a container that only performs a single task, and when it's done, it stops executing.
>
> **[4:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=275)** This could be a container that starts up, pulls in a new uploaded image from S3, does some resizing on it, and then writes out the processed image and then it's done, and the nice thing is that you'll only be billed for the time that container spent running.
>
> **[4:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=294)** Fargate is great if your containers don't always need to be running and you can afford a little bit of spin-up time while Amazon launches your container on a spare Fargate server.
>
> **[5:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=307)** Once your containers on Fargate start running too long or are always being spun up, you'll find it's cheaper just to move these nodes to EC2 instances.
>
> **[5:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=318)** To set up your own ECS cluster that is powered by always running EC2 instances, watch my other course on ECS and multi-region load balancing.
>
> **[5:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=330)** To see what Fargate can do for you, check out my course on Fargate and GitLab.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (9), [[Microservices]] (3), [[Python (Programming Language)|Python]] (1), [[Web Servers]] (1), [[Hybrid Cloud]] (1)
> **Env Vars:** ec2 (9), ecs (5), aws (2), ecr (1), api (1)
> **CLI Commands:** docker (2), aws (2), python (1), find (1)
> **Analogies:** such as (2), imagine (1), just like (1)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** set up (2), setup (1)
> **Tools:** gitlab (1)
> **UI Navigation:** select the (1)

#### [Using Kubernetes with AWS](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=0)** - [Instructor] One of the most popular container orchestration services is called [[Kubernetes]].
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=6)** Kubernetes is an open source version of an internal [[Google]] project called Borg that they use to orchestrate their server clusters.
>
> **[0:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=16)** If you want to use Kubernetes to orchestrate your containers instead of ECS, Amazon has a service called Elastic Kubernetes Service or EKS.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=29)** You'll find a lot of similarities between ECS and EKS and it can be hard to decide between them.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=37)** ECS is simpler to use.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=40)** Kubernetes can be harder to learn, but it can be run on any on-premise server or cloud provider so you aren't locked into using AWS if you decide you want to switch later.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=54)** Kubernetes is more popular and you may find more community support, and it may integrate better with some automation tools you'd like to use.
>
> **[1:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=64)** Kubernetes also lets you get more control over the networking layer of how your containers will talk to each other.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=73)** With both ECS and EKS, you can use either [[Amazon EC2|EC2]] instances for your nodes, Fargate for on-demand nodes, or blend in your own on-premise servers.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=87)** Depending on the size of your project and its projected future, my recommendations for building a new microservice application are to start small and scale up.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=100)** Use ECS and Fargate nodes to get started quickly, then migrate the workloads that need to always run to EC2 instances.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=111)** As the app starts to grow and mature, scale up to Kubernetes and use EKS.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=119)** And once your app starts getting really big, you might find it's cheaper to start hosting your own on-premise servers instead of paying EC2 prices.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=129)** And you can run your nodes on-premise with EKS anywhere.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=135)** Now let's look at another way you can build your app where you can skip setting up servers and clusters and all this complicated container orchestration stuff.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (8), [[Amazon EC2|Ec2]] (3), [[Google]] (1)
> **Env Vars:** ecs (5), eks (5), ec2 (3), aws (1)
> **CLI Commands:** find (3), aws (1)
> **Definitions:** is called (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Serverless functions with Lambda](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=0)** - As a subset of the [[PaaS|Platform as a Service]] offerings or [[PaaS]], a new category has come about called Functions as a Service.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=10)** Now, containers have all this like extra tooling around them where you need to define what your dependencies are, build them into the container, and then tell the host what kind of resources your container needs, and all this extra stuff just surrounds the actual source code that you want to run.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=27)** So Amazon thought, could we make containers even easier?
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=32)** Instead of giving us the container and configuring ECS for how to spawn multiple copies of the same container, can people just give us the actual code inside of here that they want to run and just let us, I don't know, figure out the [[Representational State Transfer (REST)|rest]]?
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=48)** Whoa, this actually works.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=50)** Using a service called Lambda you can create Lambda functions that run a single execution of your code as many times as you need to build an entire app.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=61)** This way is called Serverless Architecture, and it forces you to think about the organization of your application in a slightly different way.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=71)** And although it's called serverless, it's actually taking your source code and building and running a container for you, which is running on an [[Amazon EC2|EC2]] virtual machine on a physical server within an AWS availability zone.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=85)** Serverless doesn't mean that there aren't servers involved, it just means that you don't have to deal with those servers.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=93)** However, when you're debugging problems with your Lambda functions, it helps to understand a bit about the magic behind the curtain.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=101)** You can find Lambda in the AWS console by clicking on services and typing in, yep, you got it, Lambda.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=111)** I've got an example Lambda function here, and I'll just run it by clicking the test button.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=117)** In serverless design, you don't want a large function, like maybe you could pull off with a [[Node.js]] container that does several things.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=126)** But you want this Lambda function just to do a single thing.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=130)** So if your app would have three larger containers on ECS, in Lambda, you could break that down into maybe 15 functions that do the same thing.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=141)** Here's another example function that we use in my other course on Simple Email Service or SES.
>
> **[2:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=148)** The Lambda editor takes inputs, like it can run this Lambda function every time a timer goes off, or every time Simple Notification Service, which is SNS, sends it a notification.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=160)** So in this example, it's triggered every time an email message is bounced back to us.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=166)** You can even set up Lambda functions as targets for Application Load Balancer.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=172)** So anytime someone goes to, say, [halvanta.com/signup](https://halvanta.com/signup), a Lambda function will process that HTTP request and return the response to it.
>
> **[3:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=182)** So you can build an entire web app using Lambda or you can even expand your existing web app with new features that you just quickly code in Lambda.
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=194)** Search our catalog for Lambda for a closer look on what you can do with serverless architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PaaS|Platform as a service]] (1), [[PaaS]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Amazon EC2|Ec2]] (1), [[Node.js]] (1)
> **Env Vars:** ecs (2), aws (2), ec2 (1), ses (1), sns (1)
> **CLI Commands:** aws (2), make (1), find (1), node (1)
> **Exercise Files:** source code (2)
> **File Paths:** node.js (1)
> **URLs:** [halvanta.com](https://halvanta.com) (1)
> **Tools:** aws console (1)
> **Definitions:** is called (1)

#### [Managing long-running jobs](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=0)** - Remember our lambda functions?
>
> **[0:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=2)** These are great for code that runs quickly, but a single execution can't run any longer than 15 minutes.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=10)** If you have a job that needs to crunch a bunch of data or wait on something to come back from a service or database, you'll need to look at the services that AWS has for [[Batch Processing]] and workflows.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=22)** You can use the messaging services that we talked about earlier, like SQS, within your lambda function, and that could be the trigger to kick off a batch processing job to say, resize a bunch of images.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=34)** Or it could be the start of a more complicated workflow where say an image is processed, someone manually reviews it sometime in the future, and it goes through another layer of processing and is reviewed again.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=46)** In other applications, I've seen these jobs handled by either having a long running process within the app somewhere, and that's not good for the server, or there's a cron job somewhere, and that runs in the middle of the night and it crunches on a bunch of data.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=61)** Now, if your app has some tasks like this, let's take a look at a few other ways that you can accomplish that same job in AWS.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=70)** If your app needs to crunch through some backend jobs, take a look at AWS Batch.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=76)** It's a great way to manage and schedule jobs that can use [[Amazon EC2|EC2]] spot instances.
>
> **[1:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=82)** Spot instances have a model very much like Priceline for airfare, where you can bid on using Amazon's unused capacity at a steep discount, but you can get bumped from the flight if someone else is willing to pay full price for your server.
>
> **[1:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=99)** This is great for workloads that just have to be done sometime before next week or sometime before tomorrow morning, and you can save some serious money if you've got some flexibility on when your jobs get done.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=113)** If you have a multi-step workflow that you need to manage, look at step functions.
>
> **[1:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=118)** Step functions are great when you need to step through a series of tasks, and they're easier to read and organize than a 3000 line bash script that you would've just run as a [[Linux]] cron job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Batch Processing]] (2), [[Amazon EC2|Ec2]] (1), [[Linux]] (1)
> **Env Vars:** aws (3), sqs (1), ec2 (1)
> **CLI Commands:** aws (3)
> **Cross-References:** we talked about (1)
> **Tools:** bash (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - remember (1)


### 8. Software as a Service (SaaS)

[↑ Back to Table of Contents](#table-of-contents)

#### [User authentication for your app](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=0)** - We're now moving up to the Softwares of service [[Microsoft Products|products]] abbreviated as [[SaaS]].
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=6)** In this part of our AWS Starship, high above the engine room, this is the nicest part of the ship.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=12)** The towels are folded for you and your food is brought directly to your door.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=17)** These are services you can bake straight into your application and you don't have to worry about how it's hosted or how you're going to maintain it.
>
> **[0:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=25)** These services just work and in the shared responsibility model, most of the effort is now on AWS and it's off of you.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=34)** All of these services that AWSs offers are built on top of the [[Amazon EC2|EC2]] and storage options that we already looked at but at this level, you won't see any of the servers running this software or have to manage them in any way.
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=48)** You just use the service.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=50)** They bill you for what you use and AWS worries about keeping it up and scaling it.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=56)** One such set of services is the AWS tools for storing login details for your app's users.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=63)** Managing password hashes in your database and making sure you're practicing proper security in case of a data breach has always been a struggle but AWSS has a few services to help you manage your user authentication for you.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=77)** One of those services is Cognito and it can help you implement sign-in integrations with other providers so your users can sign in with [[Google]] or their Facebook logins.
>
> **[1:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=88)** Let's take a look at how this works.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=91)** In the Services search bar type Cognito and click on the Entry that auto completes.
>
> **[1:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=99)** Click Create User Pool.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=102)** This is a pool of users where you would store all of the users related to your app.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=107)** You first choose if you want Cognito to manage all of the logins by itself.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=113)** So your app would require that every user sign up for a new account by entering say their email address or phone number.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=122)** Or you can select to also enable Federated Identity Providers so your users could create accounts in your app by signing in with their Google, Facebook, Amazon or Apple logins.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=135)** This is similar to creating a new account with [[[LinkedIn]].com](https://linkedin.com) where it gives you the option to sign in with Google.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=145)** I'm going to leave Federated Identity Providers off for now.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=150)** Under the Cognito User Pool Sign-in options, select email address and phone number.
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=159)** Click Next.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=161)** You define the rules of how strong you want your passwords.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=166)** You also define whether or not your users will use MFA just like your AWSs account users.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=175)** For our demo, select No MFA.
>
> **[3:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=180)** You also define how your users can reset their passwords.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=185)** Leave these settings at their defaults and just click Next.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=189)** You then define how new accounts get confirmed.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=193)** At the bottom of this screen, click Next.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=197)** AWS wants to know how they should send password reset and account confirmation emails for you on your behalf.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=207)** Select Send Email with Cognito.
>
> **[3:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=210)** Since this is just a demo, AWS has their own email sending service called Simple Email Service or SES and you can check out my other course on SES if you want to know how to send outgoing emails through AWS.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=230)** Under SMS, make sure the Create a New IAM role option is selected.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=236)** And for the IAM role name, just type cognitorole.
>
> **[4:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=242)** At the bottom, click Next.
>
> **[4:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=245)** For user pool name, type awsuserdemo.
>
> **[4:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=251)** And then just put some random numbers at the end of this, so that it's always unique.
>
> **[4:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=258)** With the Use Cognito hosted UI option, you can have Cognito host your user signup and sign in pages for your app.
>
> **[4:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=268)** Scroll down and for app client name, type awsuserdemo.
>
> **[4:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=274)** And at the bottom, click Next.
>
> **[4:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=277)** And then on the last page scroll to the bottom and click Create User Pool.
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=284)** Click on the name of the pool we just created.
>
> **[4:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=289)** You can see from the user's tab this is where your app's users will be listed.
>
> **[4:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=294)** You can even create a user on someone's behalf.
>
> **[5:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=301)** And now you're ready to wire this into your web or mobile app.
>
> **[5:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=306)** Cognito does so much for you for handling the drudgery of securely handling account logins for your applications.
>
> **[5:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=315)** Search our catalog for Cognito and you'll see examples of how to use Cognito in a sample mobile application.
>
> **[5:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=323)** But for now, click the Delete User Pool button at the top of the console and type in your pool name and click Delete so we can clean up our resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3), [[Microsoft Products|Products]] (1), [[SaaS]] (1), [[Amazon EC2|Ec2]] (1), [[LinkedIn]] (1)
> **Env Vars:** aws (7), mfa (2), ses (2), iam (2), ec2 (1)
> **CLI Commands:** aws (7), make (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Analogies:** similar to (1), just like (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)

#### [Designing backend APIs](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/designing-backend-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/designing-backend-apis?u=76281980&t=0)** - [Instructor] If you were designing a [[Microservices]] architecture for the backend of your web or mobile app, you were likely building out your own API that will allow your front-end code to interface with your backend code on your servers, containers, or serverless functions.
>
> **[0:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/designing-backend-apis?u=76281980&t=20)** Take a look at API Gateway as a way to publish your [[Representational State Transfer (REST)|REST]] API endpoints for each of your microservices and point them at various AWS services.
>
> **[0:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/designing-backend-apis?u=76281980&t=33)** So, for instance, your backend could have an API endpoint such as [halvanta.com/login](https://halvanta.com/login), and that's handled by your EKS cluster, but /reports is answered by a Lambda function.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/designing-backend-apis?u=76281980&t=50)** If you're building out a newer [[GraphQL]] API instead of a REST API, take a look at AppSync.
>
> **[1:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/designing-backend-apis?u=76281980&t=60)** These services are great for allowing you to wire together multiple solutions within AWS to handle specific functions within your app, and they make managing the API layer with authentication and logging a bit easier.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/designing-backend-apis?u=76281980&t=77)** You'll typically find these services sitting at the very edge of a backend API and brokering traffic for [[Amazon EC2|EC2]] instances, ECS, and EKS clusters and Lambda functions.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/designing-backend-apis?u=76281980&t=93)** When you need to start wiring all these services together to create a backend, you might need to track down errors or slowdowns in your system.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/designing-backend-apis?u=76281980&t=104)** Try out AWS X-Ray.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/designing-backend-apis?u=76281980&t=109)** It can perform an x-ray scan on your [[Cloud Infrastructure]] and let you know that your slow endpoint is being caused by some inefficient code on your EC2 instance and not the large image file it's uploading to an S3 bucket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microservices]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Amazon EC2|Ec2]] (2), [[GraphQL]] (1), [[Cloud Infrastructure]] (1)
> **Env Vars:** api (8), aws (3), rest (2), eks (2), ec2 (2)
> **CLI Commands:** aws (3), make (1), find (1)
> **Analogies:** for instance (1), such as (1)
> **URLs:** [halvanta.com](https://halvanta.com) (1)
> **Speakers:** - [instructor] (1)

#### [Helpful machine learning services](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=0)** - We've been hearing a lot about machine learning and how computers are beating us at Jeopardy and how they're learning to drive cars.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=7)** You may not be developing an app that plays trivia games or drives cars but there are pieces to this technology that you can bring into your app to provide some enriching features.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=18)** However, setting up these servers and learning how to use them can be overwhelming.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=23)** So AWS has given you some tools that you can build directly into your app to leverage machine learning skills to help with image classification, reading text, understanding voice inputs, translating text into other languages and several other sci-fi future technologies.
>
> **[0:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=41)** Let's take a look at what they've got to offer.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=44)** Machine learning seems like stuff for smart people and if you're into all things machine learning, AWS has SageMaker which helps you build and train machine learning models without making you go through all the hassles of managing servers directly.
>
> **[1:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=60)** If you're an aspiring data scientist, this is great news because you want to work with data, not learn how to manage a fleet of servers.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=69)** We've got a great course on getting started with SageMaker so just search the catalog for SageMaker.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=76)** For the [[Representational State Transfer (REST)|rest]] of us, Amazon has packaged up some machine learning technologies in an easy to use set of APIs that you can just bake directly into your app.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=87)** You can pass a block of text into Comprehend and it can tell you the mood of the writer.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=94)** So this would be great for chatbots to find out is a customer starting to get frustrated and then maybe transfer them to a live agent.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=102)** You can see a few use cases on the Comprehend page and it'll show you some example text and then what response you'd get back from using Comprehend.
>
> **[1:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=112)** You can use Lex to build a chatbot for your apps or you can use Personalize to promote recommended [[Microsoft Products|products]] to a specific user based on their shopping habits.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=125)** Polly can narrate dynamic text into some pretty life-like voices.
>
> **[2:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=133)** - [Computer] Hello, do you speak a foreign language?
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=137)** One language is never enough.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=141)** - [Instructor] Rekognition can find faces in an image or extract text from an image but if you're processing a large number of documents or handwritten [[Forms]], look at Textract which can automate a lot of this for you.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=156)** Translate can translate text into several languages and it can even detect the language that you're passing into it.
>
> **[2:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=165)** Transcribe will work like Alexa does and take natural speech and transcribe it to text.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=177)** Hello, Amazon, are you hearing me right now?
>
> **[3:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=182)** You can use these services to build out some really cutting edge features that otherwise would be pretty hard to pull off with a small team or a tight deadline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Products|Products]] (1), [[Forms]] (1)
> **CLI Commands:** aws (2), find (2)
> **Speakers:** - we (1), - [computer] (1), - [instructor] (1)
> **Env Vars:** aws (2)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** getting started (1)


### 9. DevOps with AWS

[↑ Back to Table of Contents](#table-of-contents)

#### [What is DevOps?](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=0)** - Man, this new feature's going to be great.
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=5)** Hey, here's that new code release.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=7)** I need that up by six tonight, okay, buddy.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=10)** Thanks.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=14)** At the start of my career, I was this developer and I couldn't understand why IT couldn't just push a button and release my code.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=23)** I had deadlines and customers were waiting on my bug fixes.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=27)** And then ironically, later in my career I became the IT person who took the buggy code from the developers.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=36)** Now, I was responsible for keeping the servers fast and stable, which put my new priorities at odds with the developers who always wanted to change stuff.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=46)** [[DevOps]] removes the barrier between these two teams and creates a single team that has responsibility over development and operations, DevOps.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=58)** The developers now help maintain the servers and the IT people now start working more in the code.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=65)** Now the DevOps team has shared goals.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=68)** They need to release new features and maintain site reliability.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=74)** And instead of just asking the question, is our site up, a DevOps team asks the question, is the site running well?
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=83)** Which is a much different approach that now includes things like backend API response times.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=89)** If new code is released to the site that causes a drop in site performance, a DevOps team should be able to trace that dip in performance back to the code that caused it.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=100)** And with cloud technologies, servers aren't these prize possessions anymore that take weeks to set up and configure?
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=109)** We used to give servers clever names such as choosing a name for them from the list of moons in our solar system.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=115)** Now they're just easy come, easy go.
>
> **[1:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=118)** We can start looking at infrastructure like we look at code as throwaway objects derived by defined classes.
>
> **[2:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=127)** If something's not working, we just delete it.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=130)** If I need a hundred servers, I'll just define it once and then loop over my code 100 times.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=137)** Let's dive into the services that AWS has created to help us on this journey to a DevOps team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (6)
> **Env Vars:** api (1), aws (1)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** aws (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - man (1)

#### [Developer tools within AWS](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=0)** - Every time I make a change to my code, I need to check in the changes into my source control, rebuild my app and then package it back up and deploy it to my platform or my [[Amazon EC2|EC2]] servers.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=13)** But what if every time I checked in my code, all this just happened automatically?
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=19)** Imagine how much faster you would be and the team would be if every time a code change is approved, it's automatically tested and deployed to a staging environment, and then if everything's working, deployed into production with a single click.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=35)** A key component of [[Agile Development|agile]] development is to release early and often.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=39)** And this allows the development team to make smaller changes to the code more frequently.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=45)** And combined with automated testing, performance monitoring and feedback from your users, it allows you to find bugs faster and to easily identify which small set of code changes correlated to the introduction of that bug.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=59)** To align with this agile principle, a key [[DevOps]] practice is the creation of a system that allows for [[Continuous Integration (CI)|continuous integration]], or CI, which allows the code changes from multiple developers to play together regularly to work out any conflicts when two developers are both working on the same file.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=78)** It can also run an automated test suite against the code to make sure that the new changes haven't broken anything.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=84)** For that, Amazon has a tool that's called CodePipeline.
>
> **[1:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=90)** CodePipeline can be used to create a workflow that automatically pulls your code, such as, you know, your code that you have in [[GitHub]] or CodeCommit, and then builds your project and runs some automated tests using CodeBuild.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=107)** A related key DevOps practice is called continuous deployment, or CD, and this step would occur at the end of your pipeline so that you can quickly introduce these changes into your production system without manually moving new code and changes up to your fleet of servers by hand.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=126)** CodePipeline can use CodeDeploy and continuously deploy your tested code from your container platform like ECS, or directly to your EC2 servers.
>
> **[2:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=139)** Now if you want to see a full CodePipeline in action, check out my other course on ECS and multi-region load balancing, and I'll walk you through setting up an example container that automatically deploys to ECS whenever you make a change to it, and check it in to CodeCommit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2), [[Agile Development|Agile]] (2), [[DevOps]] (2), [[Continuous Integration (CI)|Continuous integration]] (1), [[GitHub]] (1)
> **CLI Commands:** make (4), find (1), cd (1)
> **Env Vars:** ecs (3), ec2 (2)
> **Analogies:** imagine (1), such as (1)
> **Tools:** github (1)
> **Definitions:** is called (1)
> **Speakers:** - every (1)

#### [Infrastructure as Code with AWS](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=0)** - A key component to [[DevOps]] is treating your [[Infrastructure as code (IaC)|infrastructure as code]].
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=6)** Earlier in this course, we looked at physical server racks and servers, and while all these objects exist in the real world, in the cloud, these are just representations of virtual components that we've wired together.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=19)** And because all of this is virtual, we can start treating our infrastructure as bits of code.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=27)** Using code to describe your infrastructure allows you to keep a single source of truth for the configuration of your servers.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=34)** It's like a packing manifest of everything that should be on that server and describes and documents the server in a very real way.
>
> **[0:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=43)** Okay, for example, if you have 10 identical [[Web Servers]] behind a load balancer and let's say a change is made manually to a single server, the problem will only show up for your users one out of every 10 times and so it's hard to figure out which server is different.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=62)** Deployment automation tools can check all of your servers against the source of truth and set configurations back to their original states.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=71)** The three most popular open source tools for this are Puppet, Chef and [[Ansible]].
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=77)** If you're already using Chef or Puppet, AWS has a service to help you set up the control servers for these tools and that's called AWS OpsWorks.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=87)** Okay, in addition to Puppet, Chef and Ansible, AWS has created their own infrastructure management tool and that's called CloudFormation.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=97)** Whereas Ansible and Chef really shine with the management and configuration state of several servers, CloudFormation goes a level deeper for AWS customers.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=108)** It allows you to script the creation of [[Amazon EC2|EC2]] servers, VPCs, load balancers, and almost any of the AWS infrastructure and platform services that we've looked at so far.
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=121)** We've got several resources in our catalog on CloudFormation if you want to get started with describing your AWS resources as blocks of code.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=131)** My advice with CloudFormation is to start early on with it and build it up over time.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=137)** It can be difficult to wedge an existing AWS infrastructure into a new CloudFormation template that completely describes and configures it, so it's a lot easier to start with CloudFormation from day one, and as your app grows, grow your CloudFormation templates.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=156)** In the AWS console, type CloudFormation into the services search bar and click on the entry that auto completes.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=166)** On the right, click on create stack.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=170)** You can choose whether you would like to create a CloudFormation template that describes new AWS resources or you could even create a script that defines your existing resources, such as the web servers and security groups and load balancers we've already created.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=186)** Click the use a sample template option and in the search bar, type [[WordPress]].
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=194)** Click on the WordPress blog entry underneath the simple category.
>
> **[3:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=200)** Click the view in designer button to view this sample CloudFormation template.
>
> **[3:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=206)** Click the fit to window target button right above the [[Zoom]] slider.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=214)** This script is creating for us an EC2 instance and a new security group to apply to that instance.
>
> **[3:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=223)** Click the EC2 instance on the right of the diagram.
>
> **[3:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=227)** Click the full screen option next to the code window to see the full script.
>
> **[3:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=233)** If you scroll down and look at this web server definition, you'll see that it automatically creates some files directly onto the new instance.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=244)** It will even install server packages for us.
>
> **[4:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=250)** This script can do everything that we had to type in by hand when we set up our web servers.
>
> **[4:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=258)** We won't be creating these resources right now but I wanted to show you a sample CloudFormation template and these are great resources for customizing your own templates.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=272)** Another popular infrastructure as code tool is called [[Terraform]].
>
> **[4:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=278)** Whereas CloudFormation is built into AWS, Terraform will let you use AWS or any of the other popular [[Cloud Services]] as providers.
>
> **[4:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=289)** Terraform also has a large community and the templating style looks similar to CloudFormation but some people find it a lot easier to work with than CloudFormation.
>
> **[5:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=302)** In this example, the script is defining the US West 2 region in AWS as the provider, and it's creating a T2 micro instance based on an AMI image.
>
> **[5:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=318)** When you set up Terraform, it's going to ask you for your secret access key, and under the hood, it's going to use the AWS API to create and manage resources for you.
>
> **[5:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=331)** Just as you might have picked [[Kubernetes]] for your container orchestration service, you might also want to choose Terraform so you aren't locked into an AWS environment if you want to move between cloud providers.
>
> **[5:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=346)** If you want to get started with either CloudFormation or Terraform, search our catalog for some great resources on both these topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (6), [[Web Servers]] (3), [[Ansible]] (3), [[Amazon EC2|Ec2]] (3), [[Infrastructure as code (IaC)|Infrastructure as code]] (2)
> **CLI Commands:** aws (14), terraform (6), ansible (3), find (1)
> **Env Vars:** aws (14), ec2 (3), ami (1), api (1)
> **Exercise Files:** template (5)
> **UI Navigation:** click on (3), scroll down (1)
> **Analogies:** it's like (1), for example (1), such as (1), similar to (1)
> **Prerequisites:** set up (3), install (1)
> **Cross-References:** earlier in (1)

#### [Monitoring with CloudWatch](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=0)** - [Instructor] One change that [[DevOps]] made on how a service operates is to expand the role of monitoring the service past "Is the site up?" to "How is the site performing?"
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=14)** The easiest way to think about this is to look at the status page of a popular SMS messaging service called [[Twilio]].
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=23)** Their status page is showing a high level status of the various parts of their service in a stoplight format.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=31)** Red, it's down, yellow, it's having problems, green, it's up And if you scroll down to the bottom of the page, you'll see a line graph of their API's performance over time.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=45)** A good DevOps team will monitor service performance.
>
> **[0:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=49)** So if your service starts to run slower after a new code change was introduced into your environment, then you can identify the slowdown and push up a fix.
>
> **[1:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=60)** AWS has a similar status screen for their services.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=65)** From your console home screen, scroll down.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=69)** And under AWS Health, click on Go to AWS Health.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=76)** You'll use the health dashboard to check for outages or performance issues with your AWS services.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=85)** On the left, click on Service history to see a chart of the AWS services and if they've recently had any service issues.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=95)** Click on Scheduled changes to see if there's any upcoming changes that would impact your services.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=102)** To monitor the performance of your own AWS resources, type CloudWatch into the services search bar and click on the entry that auto completes.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=114)** In the CloudWatch console, you can click on Metrics in the left hand menu.
>
> **[2:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=120)** And underneath that, click on All metrics.
>
> **[2:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=124)** Click on the [[Amazon EC2|EC2]] card and then click on Per-Instance Metrics.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=131)** This will show you just some of the metrics that are available on the EC2 instances themselves.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=140)** You can also use CloudWatch to log errors within your application or within your Lambda functions so you can spot problems and track errors over time.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=153)** CloudWatch ties into several AWS services and you can do a lot with this to monitor your [[Cloud Infrastructure]].
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=162)** But its strong suit has never been on getting underneath your code or tracing the root cause of a nasty error message from your application.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=171)** This area is called application performance monitoring or APM.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=178)** And there's some third-party companies that are AWS partners such as New Relic, Dynatrace, and Datadog.
>
> **[3:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=187)** These tools can hook into your AWS account and hook into your source code and combine the data that you get with CloudWatch with realtime information about how your application is performing on user devices, and give you more visibility into how your code is performing across your servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (2), [[Amazon EC2|Ec2]] (2), [[Twilio]] (1), [[Cloud Infrastructure]] (1)
> **Env Vars:** aws (9), ec2 (2), sms (1), api (1), apm (1)
> **UI Navigation:** click on (8), scroll down (2), go to (1)
> **CLI Commands:** aws (9)
> **Exercise Files:** source code (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [DevOps using machine learning](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980&t=0)** - [Instructor] CloudWatch is great at storing logs of the metrics of your AWS resources, such as how much memory your [[Amazon EC2|EC2]] instances have left or how many reads are happening against your database.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980&t=14)** But unless you know ahead of time the metrics you want to put monitors on, CloudWatch can only help you out in debugging a problem after it's occurred.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980&t=24)** [[DevOps]] Guru takes this a step further and it uses machine learning to look at operational data across your AWS resources and it'll notify you when it sees that things are out of place.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980&t=39)** Think of it like hiring a robot to bring up the CloudWatch console and constantly scan your metrics for anything that's out of the ordinary.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980&t=50)** DevOps Guru can notify you if it finds some performance issues with your RDS [[Databases]] or if it sees that your Lambda functions are running out of control.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980&t=61)** An AWS has also [[Applied Machine Learning]] tools to help you spot problems directly within the source code of your application.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980&t=71)** Code Guru will look at your source code repository and every time that you submit a new change to your code base, it'll do an automated [[Code Review]] on your source code.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980&t=84)** It won't fix your code for you, but it will make a comment on your code change inside of your code repository.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980&t=93)** It can give you suggestions on security flaws or out-of-date API calls or it can tell you when you've copy and pasted your secret access keys into your source code.
>
> **[1:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980&t=105)** We all make mistakes from time to time, and Code Guru is like having a robot programmer sitting over your shoulder double checking your work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (2), [[Amazon EC2|Ec2]] (1), [[Databases]] (1), [[Applied Machine Learning]] (1), [[Code Review]] (1)
> **Env Vars:** aws (3), ec2 (1), rds (1), api (1)
> **CLI Commands:** aws (3), make (2)
> **Exercise Files:** source code (4)
> **Analogies:** such as (1), think of it like (1)
> **Speakers:** - [instructor] (1)


### 10. Security on AWS

[↑ Back to Table of Contents](#table-of-contents)

#### [AWS Shield and firewalls with WAF](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=0)** - Now, we're looking at the shield surrounding our AWS Starship, and their primary purpose is to deflect attacks from hackers.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=10)** There's a lot of security features to AWS and we've already looked at a few of the things that we can do such as security groups and some of the features of IM, and there's a lot more we could have dived into with this.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=24)** AWS has a very short guide on some best practices on security and we've already implemented some of these earlier in the course.
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=32)** And now, we'll talk about some of these other items later in this chapter.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=38)** It's a very short read, so I recommend looking through this because I'm not going to be able to cover every bullet point here, but I do want you to be aware of two AWS services that help with filtering and blocking suspicious web traffic: WAF, or Web Application Firewall, and Shield.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=58)** Web Application Firewall can connect to your load balancer and it can be used like any other firewall product you might have used to filter your web traffic.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=67)** So, your service only responds to customers who are, for instance, within the countries that you operate in, and blocks IP traffic from countries where you don't offer service.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=78)** This will mitigate some attacks, but one really powerful feature is that they have managed rules that you can subscribe to.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=86)** So, if you're running a web application, there's a set of managed rules that are being updated constantly to combat the latest threats and this can really help out if you've got a hundred other things you need to be doing and you don't always have time to keep a close eye on the web server logs for that, you know, one [[WordPress]] marketing site that you're running.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=107)** Another product to take a look at is Shield, which can help mitigate a denial of service attack against your application.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=115)** AWS does have security experts who are monitoring the network as a whole and trying to mitigate these attacks, but a denial of service attack against your specific application will fall into your side of the shared responsibility model.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=130)** If you have an application that's at high risk of being targeted by bad actors controlling botnets, look into Shield Advanced to get some extra help from AWS to protect your app against these denial of service attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1)
> **Env Vars:** aws (6), waf (1)
> **CLI Commands:** aws (6)
> **Cross-References:** earlier in (1), later in (1)
> **Analogies:** for instance (1)
> **Warnings:** be aware (1)
> **Speakers:** - now (1)

#### [Spot issues with Inspector, GuardDuty, and Macie](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=0)** - I mentioned previously that for your [[WordPress]] marketing site that runs off that single [[Amazon EC2|EC2]] instance buried in your account somewhere.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=9)** You may not always have the time to dig through Apache server logs and look for hacking attempts or signs of intrusion.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=17)** Using the managed rules for WAF will block some of this stuff from getting into your instance.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=22)** But an unpatched WordPress plugin could be an easily exploitable door for even an entry level hacker.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=30)** Because you can't always keep an eye on everything your server is doing, AWS created GuardDuty.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=37)** Think of it as the night security guard walking around your server, shining a flashlight into closets and folders of logs that you may not always be looking at.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=47)** GuardDuty can find suspicious network connections that your server might be making to indicate that it's been compromised.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=54)** It's an extra set of eyes on how your server is behaving to see if it's doing anything that looks out of place.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=61)** Now, getting started with this level of security can be overwhelming from a developer's perspective, especially if you've never had to deal with servers or infrastructure before.
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=72)** Inspector is like a full scan of your [[Cloud Infrastructure]] and it looks for unpatched servers or common security or vulnerabilities that you'll need to fix or block access to using your firewall.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=86)** If you stepped into an AWS account that was managed by somebody else and you are now responsible for the security of your application, this is a great place to start.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=97)** And as you make changes to your application and cloud infrastructure, you can rerun this scan periodically so you don't miss anything.
>
> **[1:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=105)** Think of it as a full virus scan for your AWS account looking for potential security problems.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=113)** And do you remember how many times I mentioned in this course to not put sensitive data in a public S3 bucket?
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=121)** AWS made you click through several settings and warnings to prevent even sharing a single file from an S3 bucket, and I made you read all of those warnings.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=131)** Because this has been such a problem, AWS has a service called Macie that'll scan your cloud resources and look for things that look like sensitive data and report it to you if you're publicly sharing this information.
>
> **[2:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=146)** Now, if all the companies on the S3 wall of shame had just used Macie, then we wouldn't be reading in the news about how much data was easily collected from a data breach.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=157)** If you handle sensitive data for your application, then I recommend looking at Macie to help keep this data secure.
>
> **[2:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=164)** Even if you know what you're doing with an AWS account, sometimes things like this just happen because you didn't have time to perform an audit of your S3 bucket and its settings, especially when you've got five other projects due.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=179)** Ask for the budget to run these services on a regular schedule because it's much cheaper than a data breach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2), [[Cloud Infrastructure]] (2), [[Amazon EC2|Ec2]] (1)
> **CLI Commands:** aws (6), apache (1), find (1), make (1)
> **Env Vars:** aws (6), ec2 (1), waf (1)
> **Analogies:** think of it as (2)
> **Prerequisites:** getting started (1), you'll need (1)
> **Definitions:** is a  (1)
> **Speakers:** - i (1)

#### [Manage EC2 with Systems Manager](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980&t=0)** - [Instructor] In our two running [[Amazon EC2|EC2]] instances, we would have to connect to each instance individually and run [[Linux]] terminal commands to install package updates and keep our operating system up to date with patches.
>
> **[0:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980&t=15)** But how would you do this with 50 or 100 instances?
>
> **[0:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980&t=21)** What if your fleet of servers maintains numerous services that all have to be monitored?
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980&t=27)** Systems Manager gives you a suite of tools for managing a fleet of instances.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980&t=34)** The Node Management section of Systems Manager will notify you if one set of servers is, say, out of compliance, if one of your servers is missing required [[Hardware]], or having operational issues, or needs new patches to be applied to it.
>
> **[0:51](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980&t=51)** Session Manager can give you a secure way to access your EC2 instances.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980&t=58)** You can always use [[Terraform]] or other [[Infrastructure as code (IaC)|infrastructure as code]] tools to apply automations across a fleet of servers, but Run Command will give you another way to do this from within AWS.
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980&t=72)** Under the Operations Management category, you can use OpsCenter as a central console to tie together alarms from CloudWatch, logs from CloudTrail, and alerts and information from other AWS services.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980&t=87)** Then with Incident Manager, your [[DevOps]] team can get notified of the incident and coordinate their efforts as they work together to resolve the issue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2), [[Linux]] (1), [[Hardware]] (1), [[Terraform]] (1), [[Infrastructure as code (IaC)|Infrastructure as code]] (1)
> **CLI Commands:** aws (2), node (1), terraform (1)
> **Env Vars:** ec2 (2), aws (2)
> **Tools:** terminal (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Traceability with CloudTrail and Security Hub](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=0)** - Sometimes, problems with hacking and data breaches don't always originate outside the shields to your AWS starship.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=9)** You've got a good crew, but that green guy you picked up at the last star base has been seen poking around areas of the ship you aren't sure he should be in.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=19)** CloudTrail is an audit trail of changes made internally to your AWS starship.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=26)** It can also log requests coming in through the AWS API and let you know if somebody's made off with your AWS access keys and is using them for the wrong purposes.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=36)** Not to sound too paranoid here, but these are always things that happen when we aren't looking and when you least suspect them.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=46)** CloudTrail can be used to trace back in time what someone was doing in your AWS account and what changes were made.
>
> **[0:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=53)** Now, I hope you never have to use this, but for applications that store and manage highly sensitive data that's regulated by compliance standards, it's probably wise to look into CloudTrail so that you can spot problems before someone tries to delete all your servers.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=71)** And I know I've thrown a lot of different security [[Microsoft Products|products]] at you, but Security Hub tries to bring a lot of these products under one dashboard.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=81)** Think of Security Hub like the security workstation on your ship's bridge.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=85)** It's like a single readout of things you should look into from these various security products.
>
> **[1:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=90)** So if you think this service would be valuable to you, I highly recommend that you search our catalog for Security Hub to see it in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3)
> **Env Vars:** aws (5), api (1)
> **CLI Commands:** aws (5)
> **Definitions:** is an  (1)
> **Analogies:** it's like (1)
> **Speakers:** - sometimes (1)

#### [Investigate threats with AWS Detective](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/investigate-threats-with-aws-detective?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/investigate-threats-with-aws-detective?u=76281980&t=0)** - [Narrator] Let's say that despite your best efforts, someone navigated around the shields to your Starship, got on board and dug around in your computer core.
>
> **[0:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/investigate-threats-with-aws-detective?u=76281980&t=11)** Your security officer is going to want to start an investigation into what happened and determine if anything was stolen.
>
> **[0:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/investigate-threats-with-aws-detective?u=76281980&t=20)** AWS Detective can log and then scan through all your VPC logs and scan your cloud trail data and tell you which AWS users or resources were making suspicious API calls and what they were trying to do.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/investigate-threats-with-aws-detective?u=76281980&t=36)** Then once your investigation is complete, you can take action based upon your investigation.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/investigate-threats-with-aws-detective?u=76281980&t=44)** You can find Detective in the services search in the AWS console, and you just click on get started to start collecting the data that you need for your future investigations.

> [!info]- Semantic Content
>
> **Env Vars:** aws (3), vpc (1), api (1)
> **CLI Commands:** aws (3), find (1)
> **Tools:** aws console (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Check for unwanted charges](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/check-for-unwanted-charges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/check-for-unwanted-charges?u=76281980&t=0)** - [Instructor] The first thing that we want to do at the end of this course is to clean up.
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/check-for-unwanted-charges?u=76281980&t=5)** Make sure you terminate any [[Amazon EC2|EC2]] instances that you started and release any elastic IPs.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/check-for-unwanted-charges?u=76281980&t=12)** Delete any EBS volumes to your instances and delete the load balancer and any S3 buckets you created.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/check-for-unwanted-charges?u=76281980&t=22)** If you clicked around and explored on your own, check your bill at the end of this month and even if you don't get charged check the line items because they may fall under the free tier and in a year from now you might start getting billed for those services.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/check-for-unwanted-charges?u=76281980&t=38)** Remember to periodically check the cost explorer to make sure that you've deleted any other resources that you don't want to continue being charged for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** ec2 (1), ebs (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [AWS Well-Architected Framework](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=0)** - [Instructor] To get some tips from AWS on the best way to build out your cloud architecture, go to aws.[amazon.com](https://amazon.com), and under the Learn menu, click on Architecture Center.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=13)** Here you can search for architectures that other companies have used.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=19)** Amazon has published their own set of design principles that they follow, which is called the AWS Well-Architected Framework.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=29)** You'll also find a Well-Architected Framework Tool within the AWS console that'll analyze your current architecture and let you know if there's any improvements you can make to align with these design principles.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=46)** The framework is composed of pillars, and under each pillar there are design principles.
>
> **[0:53](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=53)** As we go through these, I will call attention to the design principles AWS feels our most important to implement, such as designing for failure.
>
> **[1:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=64)** AWS also has a list of value propositions for you to use when discussing the benefits of [[Cloud Computing]].
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=74)** I have marked this list of keywords, two of which are included right here in the names of the pillars, security and reliability.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=83)** In the first pillar for [[Operational Excellence]], you should follow the design principles of treating your [[Infrastructure as code (IaC)|infrastructure as code]], like you can with cloud formation.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=94)** Make many small changes that are easy to test and back out of, and always design for failure, such as putting your [[Amazon EC2|EC2]] instances in different availability zones.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=106)** and then learn from those failures and quickly make any changes to your operational procedures.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=114)** To get reliability, you should automatically recover from a failure to keep high uptime and high availability of your service, and you need to periodically test your recovery automations in a safe environment.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=129)** Stop guessing at expected usage or server capacity.
>
> **[2:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=134)** Track these metrics and then right-size your resources to match your current needs by doing something that your fixed capital expenses of on-premise [[Hardware]] can't do.
>
> **[2:26](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=146)** Implement elasticity and shrink your resources to match your actual demand.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=153)** And then, as need arises, use the [[Scalability]] of the cloud to scale horizontally, such as using EC2 auto-scaling with load balancers and use automation to control and track all of these processes.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=172)** For security, you should use identity management policies and audit who has access to your data, and then use traceability tools like CloudTrail to know what they are doing with that access.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=186)** Apply security everywhere, in your application source code and on all layers of your starship.
>
> **[3:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=195)** Automate your security audits so they happen more frequently.
>
> **[3:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=199)** Secure your data at [[Representational State Transfer (REST)|rest]] or in transit as it moves through your app and then sits within AWS, and anywhere that you can, just hide sensitive data, even from your own team.
>
> **[3:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=213)** If someone doesn't absolutely need to see the email addresses of your users, restrict their access.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=220)** Practice for all security events, threats that require server patches, warnings, and even practice what you would do if you had a security breach.
>
> **[3:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=232)** To get the best performance efficiency, have mechanical sympathy, which means to think about or have sympathy for how your tools are having to work underneath the hood from within your engine room, such as what's actually happening to an EBS disc volume when you have a long running database query.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=253)** Then you can tweak all of your settings for maximum performance.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=259)** But, on the flip side, so that you don't have to be an expert on database engine design, just use managed services and use the upper decks of your starship wherever you can and focus your team's effort on building your product and let the smart AWS engineers sweat the engine room for you.
>
> **[4:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=281)** Speaking of managed services, use serverless architectures like Lambda to decouple the components in your app into a [[Microservices]] design, and design for failure of these smaller parts instead of having one giant monolithic architecture.
>
> **[4:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=299)** And then think parallel.
>
> **[5:02](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=302)** If a job takes one hour to run off of a single server, if you split up the work of that job and instead run a serverless Lambda function 60 times in parallel concurrently and you started all of those 60 executions at once, your entire job would be done in one minute.
>
> **[5:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=325)** If this seems like a good idea, run an experiment first.
>
> **[5:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=330)** Instead of writing a proposal to outline the potential risk, be quick and [[Agile Development|agile]] and just clone your application into a test environment, whip up a quick test of how all this would work, and gather some real data.
>
> **[5:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=344)** And remember to always start small, but be thinking ahead to deploying into multiple regions, because then, with just a few clicks, you can go global in minutes.
>
> **[5:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=357)** To get the best cost optimization, don't spend on IT capital expenses and instead leverage AWS' economies of scale and instead hire a team that focuses on creating business value.
>
> **[6:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=373)** In most cases, the operational cost of AWS, which is your monthly AWS bill, will be a lower total cost of ownership because AWS is handling the upfront capital expenses of all of the hardware, some of the software licensing, getting compliance certifications for handling sensitive data, the operational costs of all the smart people it takes to run these systems 24/7, and so on.
>
> **[6:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=403)** But even though you might be saving money, put yourself on a budget and practice good cloud financial management, such as optimizing the pay-as-you-go consumption model by measuring efficiencies of what you are consuming for right-sized infrastructure that is tailored to the current needs of your application.
>
> **[7:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=425)** If your needs are fixed, consider reserved EC2 instances.
>
> **[7:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=430)** If they're elastic, consider savings plans or spot instances.
>
> **[7:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=435)** And track and tag expenditures on your AWS bill by team, department, or project to give individual owners the ability to optimize their part of the bill.
>
> **[7:29](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=449)** It's also important that we focus on the [[Sustainability]] of our planet, and you can do your part to reduce electricity usage and waste by maximizing your application's efficiency, which can lower your costs as well.
>
> **[7:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=465)** Know your impact on the environment and set sustainability goals to reduce waste in your application by optimizing your code and being elastic and right-sizing your resources to match your exact workload.
>
> **[8:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=481)** And an easy way to do this is to just use the managed services on the upper decks of the starship, because the AWS team has already heavily optimized these services for sustainability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[Sustainability]] (3), [[Hardware]] (2), [[Cloud Computing]] (1), [[Operational Excellence]] (1)
> **CLI Commands:** aws (14), make (3), find (1)
> **Env Vars:** aws (13), ec2 (3), ebs (1)
> **Analogies:** such as (5)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Tools:** aws console (1)
> **Exercise Files:** source code (1)

#### [Getting help from AWS Support](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=0)** - [Instructor] So now you've looked at a few architecture diagrams and you're trying to apply the well architected framework to your application.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=8)** Where do you go now if you need more information?
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=12)** For starters, you can always use an online learning platform, like [[LinkedIn]] Learning.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=18)** AWS also has their own resources and teams that'll help you dive further into AWS.
>
> **[0:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=25)** From aws.[amazon.com](https://amazon.com), hover over the documentation menu item.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=31)** Reading the docs is always a great place to start and there's several examples to help you get started with a new service.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=40)** Hover over the learn menu to see more ways to dive in.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=45)** AWS offers their own training resources and their own AWS Academy.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=52)** If you want to interface with a real person, hover over the partner network menu item.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=59)** The Amazon Partner Network, or APN, can connect you with consultants and companies who have partnered with AWS to help you get the most out of your [[Cloud Infrastructure]].
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=72)** You can also attend several events that AWS hosts each year to attend in-person sessions.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=81)** If you need to reach out to AWS directly, you'll need to contact them through the AWS support dashboard, and you'll need to have a paid support plan.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=93)** Remember, only the root user can change the support plan with your root user type support into the services search and click on the entry that auto completes.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=109)** On the left, next to your support plan, click the change button.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=114)** The Basic plan is the free plan and it's a great plan to use while you're learning AWS.
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=121)** As you start to build out your application or plan your migration, I recommend switching to the Developer plan.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=129)** This will give you the ability to open cases with AWS Support.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=135)** After your application launches or your migration to the cloud goes live, switch to the Business Support plan.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=143)** This will get you faster support if your production application goes down in the middle of a busy day.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=150)** Once your reliance on AWS increases, look at the Enterprise Support plan.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=156)** This will get you an even faster response and it'll assign you to the Concierge Support Team.
>
> **[2:45](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=165)** You'll also get a designated technical account manager assigned to your AWS account to make sure you're getting all the support and training that your team needs to be successful.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=177)** This is like being invited into the executive lounge at the airport.
>
> **[3:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=181)** I envy you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[Cloud Infrastructure]] (1)
> **CLI Commands:** aws (13), make (1)
> **Env Vars:** aws (12), apn (1)
> **Documentation:** the documentation (1), the docs (1)
> **UI Navigation:** click on (1), switch to (1)
> **Prerequisites:** you'll need (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available

## Skills Covered

- Amazon Web Services (AWS)

## Path Context

### In [[Advance Your AWS Development Skills- Exploring Complex Application Development]]
**1 of 6** | [[Introduction to AWS AI Services for Developers]] →

### In [[Develop Your AWS Skills]]
**1 of 4** | [[Complete Guide to AWS Software Deployment]] →

## Appears In

- [[Advance Your AWS Development Skills- Exploring Complex Application Development]]
- [[Develop Your AWS Skills]]

## Related Courses

_Courses sharing skills:_

- [[AWS- Monitoring, Logging, and Remediation (2021)]] — Amazon Web Services (AWS)
- [[Complete Guide to AWS Software Deployment]] — Amazon Web Services (AWS)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Amazon Web Services (AWS)
- [[AWS Essential Training for Architects]] — Amazon Web Services (AWS)
- [[Building Intelligent Chatbots on AWS]] — Amazon Web Services (AWS)

---

[↑ Back to top](#)